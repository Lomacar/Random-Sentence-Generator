function SENTENCE(){
    recentlyUsed = [] //keep track of recently used words so you don't sound dumb repeating yourself
    return choose(3, [CLAUSE], 0, [COPULA])
}

/*function CLAUSE(){
    return {
        order: "subject predicate",
        head: "predicate",
        children: {
            predicate: [VP, {copulant: false}],
            subject: [NP, {number: 'predicate.number', person: 'predicate.person', anim: 'predicate.anim', case: 'nom'}],
            //object: [NP, {exist: 'nucleus.trans', anim: 'nucleus.anim2', case: 'acc', number: '', person: '', name:'!subject.name'}]
        },
        restrictions: decide({}, "number,person,aspect,tense")
    }}*/

function CLAUSE(r){
    decide(r, "number,person,aspect,tense")

    return {
        order: "subject predicate",
        head: "subject",
        children: {
            subject: [NP, {case: 'nom'}],
            predicate: [VP, {copulant: false, number: 'subject.number', tang: 'subject.tang',
                             person: 'subject.person', anim: 'subject.anim', reverse: true}]
        },
        //restrictions: decide({}, "number,person,aspect,tense")
    }}

function COPULA(){

    //SHOULD ALLOW PPs, GPs and NPs too

    return {
        order: "subject copula predicate",
        head: "subject",
        children: {
            subject: [NP, {case: 'nom'}],
            copula: [VP, {copulant: true, aspect: choose(4, 'simp', 1, 'retro')}],
            predicate: [AP, {anim: 'subject.anim', tang: 'subject.tang', reverse: true}]
        },
        restrictions: decide({}, "number,person,tense")
    }
}

function NP(r) {
    r = decide(r, "person,proper,number")

    return route(r.person, {
                rest: [PRONOUN],
                3: choose(
                    1, [PRONOUN],
                    4, route(r.number, {
                            rest: route(r.proper, {
                                    true: [get, {type: 'noun',proper: true}],
                                    false: [DP]
                                }),

                            pl: [DP, {number:'sg'}]
                    })
                )
            })
}

function DP(r){
    return {
        order : "det adj noun",
        head : "noun",
        children: {
            noun: [N, {proper: false}],
            adj: [AP, {anim:'noun.anim', reverse: true, nocomplement: true}, 0.3, 'rank'],
            det: [DET, 'noun.head']
        },
        postlogic:function(text){
            return text.replace(/\ba +([aeiou])/g, "an $1")
        }
    }
}

function DET(r){

    r = decide( r, "number,def" )

    return {
        text: route(r.def,{
            true: "the",
            false: route(r.number,{
                sg: "a", pl: choose(1,"some",1,"")
            })
        })
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
    return {text: r.number+r.proper+r.inflected == 'plfalse' ? 's' : ''}
}

function PRONOUN(r) {
    decide(r,'person')
    r.anim = r.person < 3 ? 3 : decide(r, 'anim') //not sure if this is actually the right way to handle this
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
            aux:  [auxiliary2],
            word: [V, $.extend(safe(r), {unpack: 'aux.tense-aspect-noinflection', reverse: true}, {'tense': 'aux.tense','aspect': 'aux.aspect','noinflection': 'aux.noinflection'})]
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
            comp: [complement, {'case':'acc','complements': 'verb.complements','reset': true}]
        },
        postlogic: verb_cleanup
    }
}

//verb aspect morphology
function aspect(r){
    return {
        text: route(goodVal(r.inflected) || r.noinflection, {
            false: route(r.aspect,{
                prog: "ing",
                retroprog: "ing"
            })
        })
    }}

//verb tense morphology
function tense(r){
    return {
        text: route(goodVal(r.inflected) || r.noinflection, {
            false: route(r.aspect,{
                simp: route(r.tense, {past: "ed"}),
                retro: "ed"
            })
        })
    }}

//verb auxiliaries for tense/aspect
function auxiliary(r){
    return {
        text: route(r.tense, {fut: "will "})
        +
        route(r.aspect,{
            retro: route(r.tense, {past: "had",	pres: route(r.person+r.number, {'3sg': "has", rest: "have"}), fut: "have"}),
            prog: route(r.tense, {
                past: get({
                    type:'verb', name:'be', aspect: 'simp', tense: 'past', person: r.person, number: r.number,
                }).inflected,
                pres: get({
                    type:'verb', name:'be', aspect: 'simp', tense: 'pres', person: r.person, number: r.number,
                }).inflected,
                fut: "be"}),
            retroprog: route(r.tense, {past: "had been",	pres: route(r.person+r.number, {'3sg': "has been", rest: "have been"}), fut: "have been"})
        })
    }
}

function auxiliary2(r){
    var text = ""
    var last_bit = ""
    r = decide(r,"neg,tense,aspect,number,person", true)
    var r2 = $.extend({}, r)
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
    else text = ( last_bit = choose(1,"would",1,"could",1,"should",1,"might",1,"must",8,"") )
    wellthen()

    //retro
    if(r.aspect.indexOf("retro") >= 0) {
        last_bit = get($.extend(r2, {type: 'verb', name: 'have'}))
        text += " " + (last_bit.inflected || last_bit.name)
        wellthen("retro")
    }

    //prog
    if(r.aspect.indexOf("prog") >= 0) {
        last_bit = get($.extend(r2, {type: 'verb', name: 'be'}))
        text += " " + (last_bit.inflected || last_bit.name)
        wellthen("prog")
    }

    //dummy 'do' for bare negative
    if (/^ *$/.test(text) && r.neg) {
        last_bit = get($.extend(r2, {type: 'verb', name: 'do'}))
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
    text = text.replace(/\d+[\b_]/, '') //strip verb sense numbers
    .replace(/([^aeou])y_+e([ds])/, "$1ie$2") //change -yes to -ies and -yed to -ied
    .replace(/e_+ed/, "ed") // -eed to -ed
    .replace(/([^eu])e_+ing/, "$1ing") // -eing to -ing
    .replace(/([^aeiou])([aeiou])([^aeiouywr])_+(ed|ing)/, '$1$2$3$3$4') // -VCed or -VCing to -VCCxxx
    .replace(/(ch|sh|s)_+s\b/g, '$1es') // -s to -es
    return text
}

function WH_CLAUSE() {

}

function GP(r){
    r.tense = 'present'
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
