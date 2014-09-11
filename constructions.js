function SENTENCE(){
    return choose(3, [CLAUSE], 1, [COPULA])
}

function CLAUSE(r){
    decide(r, "number,person,aspect,tense")

    return {
        order: "subject predicate",
        head: "subject",
        children: {
            subject: [NP, {case: 'nom'}],
            predicate: [VP, {special: false, copulant: false, unpack: "subject.R", reverse: true}]
        },
    }}

function COPULA(){

    //SHOULD ALLOW PPs, GPs and NPs too

    return {
        order: "subject copula predicate",
        head: "subject",
        children: {
            subject: [NP, {case: 'nom'}],
            copula: [auxiliary, {copulant: true, aspect: choose(4, 'simp', 1, 'retro')}],
            predicate: [AP, {anim: 'subject.anim', tang: 'subject.tang', reverse: true}]
        },
        restrictions: decide({}, "number,person,tense")
    }
}

function NP(r) {
    r = decide(r, "person")

    return route(r.person, {
                rest: [PRONOUN],
                3: choose(1, [PRONOUN], 4, [DP])
            })
}

function DP(r){
    return {
        order : "det adj* noun",
        head : "noun",
        children: {
            noun: [N],
            adj: [AP, {unpack:'noun.R', reverse: true, nocomplement: true}, 0.3, 'rank'],
            det: [DET, 'noun.R']
        },
        postlogic:function(text){
            return text.replace(/\ba +([aeiou])/g, "an $1") // 'a apple' to 'an apple'
        }
    }
}


function DET(r) {
    var out = {text: ''}

    switch (parseInt(r.unique)) {
        case 2:
            break;
        case 1:
            out.text = 'the'
            break;
        default:
            if (r.possessable > Math.pow(Math.random(),0.7) * 9) {

                if (Math.random() > 0.5) {
                    return GENITIVE(r)
                } else {
                    decide(r, 'number')
                    r.case = 'gen'
                    r.person = choose(2,1, 2,2, 3,3)
                    r.anim = Math.max( r.anim, r.person < 3 ? 3 : decide(r, 'anim').anim ) //copied from PRONOUN()
                    r.gender = magicCompare(r.anim, 3) ? choose(1,'m',1,'f') : 'n'

                    var inflections = '1.sg:my,2:your,3.sg.m:his,3.sg.f:her,3.sg.n:its,1.pl:our,3.pl:their'
                    out.text = resolve([r.number,r.person,r.gender], inflections)
                }

            } else {

                if((r.count==false || r.number=='pl') && Math.random() < probabilities.quantified) {
                    return QUANT(r)
                }

                decide(r, 'def,dem,number,partial')
               // if (r.count==true && r.number=='sg') delete r.partial //prevents 'some' on singular indefinite count nouns
               // if (r.count==false && r.def=='indef' && !r.partial) {out.text = ''} //prevents 'a' on mass nouns
               // else {
                    var inflections = 'def.prox.sg:this, def.prox.pl:these, def.dist.sg:that, def.dist.pl:those, indef.sg:a, def.def:the'
                    out.text = resolve([r.def,r.dem,r.number,r.partial], inflections)
               // }

            }
    }
    return out
}

function GENITIVE(r){
    var r2 = decide(r, 'anim', true)
    var anim = Math.max( r.anim, r2.anim ) || 3
    var number = r.number=='sg' ? 'sg' : null

    return {
        order: 'fake gennoun_\'s',
        head: 'fake',
        children: {
            fake: [blank],
           gennoun: [DP, {'anim': anim, 'number': number, case: 'gen'}]
        },
        postlogic: function(text){
            return text.replace('s_\'s','s\'')
        }
    }
}

function QUANT(r){

    if(r.count && Math.random() < 0.3) {
        return {text: toWords(powerRandom())}
    } else {
        return [get, {type: 'quantifier'}]
    }
}

function N(r){

    return {
        order: "word_num",
        head: "word",
        children: {
            word: [get, { type: 'noun' } ],
            num: [nNum, 'word']
        },
        postlogic:function(text){
            text = text.replace(/([^aeou])y_+(s)/g, "$1ie$2")
            return text
        }
    }
}

//plurals for nouns
function nNum(r){
    return {text: r.number+r.count+r.inflected == 'pltrue' ? 's' : ''}
}

function PRONOUN(r) {
    decide(r,'person')
    r.anim = r.person < 3 ? 3 : decide(r, 'anim').anim //not sure if this is actually the right way to handle this
    r.gender = magicCompare(r.anim, 3) ? choose(1,'m',1,'f') : 'n'

    var word = $.extend(r,
                    {type:'pronoun',
                     inflections:"nom.sg.1:I, 2:you, sg.3:it, nom.sg.3.m:he, nom.sg.3.f:she," +
                                 " nom.pl.1:we, nom.pl.3:they, acc.sg.1:me, acc.sg.3.m: him," +
                                 " acc.sg.3.f:her, acc.pl.1:us, acc.pl.3: them",
                    }
                )

    return inflect(word,r)
}

function AP(r) {
    if (r.unique>1) return {text:''}

    return {
        order: "adv a comp*",
        head: "a",
        children: {
            adv: [blank],
            a: [A],
            comp: [complement, {'case': 'acc','complements': 'a.complements', 'nocomplement': r.nocomplement, reset:true}]
        }
    }
}

function A(r){
    return get($.extend({type: 'adjective'}, r))
}

function VP(r){
    decide(r, "tense,aspect,number,person")

    return {
        order: "aux word",
        head: "aux",
        children: {
            aux:  [auxiliary],
            word: [V, $.extend(r, {unpack: 'aux.tense-aspect-noinflection', reverse: true})]
        }
    }
}

function V(r) {
    return {
        order: "verb_asp_tns_num comp*",
        head: "verb",
        children: {
            verb: [get, {type: 'verb'}],
            asp:  [aspect, 'verb'],
            tns:  [tense, 'verb'],
            num:  [vNum, 'verb'],
            comp: [complement, {'case':'acc','complements': 'verb.complements'}]
        },
        postlogic: verb_cleanup
    }
}

//verb aspect morphology
function aspect(r){
    return {
        text: route(goodVal(r.inflected) || !!r.noinflection, {
            false: route(r.aspect,{
                prog: "ing",
                retroprog: "ing"
            })
        })
    }}

//verb tense morphology
function tense(r){
    return {
        text: route(goodVal(r.inflected) || !!r.noinflection, {
            false: route(r.aspect,{
                simp: route(r.tense, {past: "ed"}),
                retro: "ed"
            })
        })
    }}

function auxiliary(r){
    var text = ""
    var last_bit = ""
    r = decide(r,"neg,tense,aspect,number,person,copulant", true)
    var r2 = _.clone(r)
    r2.aspect = 'simp'

    function wellthen(aspect){
        if(last_bit){
            if (aspect) {
                r2.aspect = aspect
                r2.noinflection = false
            }
            else r2.noinflection = true //infinitive

            text += r2.neg ? " not" : ""
            r2.neg = false
        }
    }

    //future tense and modals
    if(r.tense=="fut") text = last_bit = "will"
    else text = ( last_bit = choose(1,"would",1,"could",1,"should",1,"might",1,"must",16,"") )
    wellthen()

    //retrospective
    if(r.aspect.indexOf("retro") >= 0) {
        last_bit = get($.extend(r2, {type: 'aux_verb', name: 'have'}))
        text += " " + (last_bit.inflected || last_bit.name)
        wellthen("retro")
    }

    //progressive or copula
    if(r.aspect.indexOf("prog") >= 0 || r.copulant) {
        last_bit = get($.extend(r2, {type: 'aux_verb', name: 'be'}))
        text += " " + (last_bit.inflected || last_bit.name)
        wellthen("prog")
    }

    //prospective
    if ( /^ *$/.test(text) && r.aspect.indexOf("prosp") >= 0) {
        last_bit = get($.extend(r2, {type: 'aux_verb', name: 'be'}))
        text = (last_bit.inflected || last_bit.name)
        wellthen()
        text += " going to"
    }


    //dummy 'do' for bare negative
    if (/^ *$/.test(text) && r.neg) {
        last_bit = get($.extend(r2, {type: 'aux_verb', name: 'do'}))
        text = (last_bit.inflected || last_bit.name ) + " not"
        r2.noinflection = true
    }

    return $.extend(r, {'text': text, 'noinflection': r2.noinflection, 'aspect': r2.aspect})
}

//s inflection on verbs
function vNum(r){
    return {text: route(r.number+r.person+r.aspect+r.tense+r.inflected, {sg3simppres:"s"})}
}

function verb_cleanup(text){
    text = text.replace(/\d+/, '') //strip verb sense numbers
    .replace(/([^aeou])y_+e([ds])/, "$1ie$2") //change -yes to -ies and -yed to -ied
    .replace(/e_+ed/, "ed") // -eed to -ed
    .replace(/([^eu])e_+ing/, "$1ing") // -eing to -ing
    .replace(/([^aeiou])([aeiou])([^aeiouywr])_+(ed|ing)/, '$1$2$3$3$4') // -VCed or -VCing to -VCCxxx
    .replace(/(ch|sh|s)_+s\b/g, '$1es') // -s to -es
    return text
}

function WH_CLAUSE() {

}

//inf clause
function INF_CLAUSE(r){
    return {
        order: 'to predicate',
        head: 'predicate',
        children:{
            predicate: [V, {noinflection: true}]
        }
    }
}

//gerund clause
function G_CLAUSE(r){
    return {
        order: 'subject predicate',
        head: 'subject',
        children:{
            subject: [NP],
            predicate: [GP, "subject.R"]
        }
    }
}

function GP(r){
    r.tense = 'pres'
    r.aspect = 'prog'

    return {
        order: "v_asp comp*",
        head: "v",
        children: {
            v: [get, {type: "verb"}],
            asp:  [aspect, 'v'],
            comp: [complement, {'case': 'acc','complements': 'v.complements','reset':true}]
        },
        postlogic: verb_cleanup
    }
}

function GOAL_LOC() {

}


function blank(){
    return {text: ""}
}

/*----------------------------- COMPLEMENTS --------------------------------*/

/*function to_NP {
    return {
        restrictions: {
            case: 'acc'
        }
    }
}*/
