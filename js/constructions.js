function SENTENCE(){
    return choose(5, [CLAUSE], 1, [COPULA], 0.0005, [ALLYOURBASE])
}

function CLAUSE(r){
    //decide(r, "number,person,aspect,tense,anim")

    return {
        order: "subject predicate",
        head: "subject",
        children: {
            subject: [NP, {case: 'nom', anim: choose(1,0, 3,1, 5,2, 7,3)}],
            predicate: [VP, {special: false, copulant: false, unpack: "subject.R", reverse: true}]
        }
    }}

function COPULA(){

    //SHOULD ALLOW PPs and NPs too

    return {
        order: "subject copula predicate",
        head: "subject",
        children: {
            subject: [NP, {case: 'nom'}],
            copula: [auxiliary, {unpack: 'subject.R', copulant: true, aspect: choose(4, 'simp', 1, 'retro')}],
            predicate: [AP, {unpack: 'subject.R', copulant: true, reverse: true}]
        }
    }
}

function final_cleanup(text) {
    return text
}

function NP(r) {
    r = decide(r, "person,pronominal")

    return route(r.person, {
        rest: [PRONOUN,{subj_person:'subject.person',subj_number:'subject.number',subj_gender: 'subject.gender'}],
        3: route(r.pronominal, {
                true: [PRONOUN, {subj_person:'subject.person',subj_number:'subject.number',subj_gender: 'subject.gender'}],
                false: [DP]
            }
        )
    })
}

function DP(r){
    return {
        order : "det adj* noun comp*",
        head : "noun",
        gap : [blank],
        children: {
            noun: [N],
            adj: [AP, {unpack:'noun.R', reverse: true, nocomplement: true, no_adj: 'noun.unique'}, 0.25, 'rank'],
            det: r.nodeterminer ? [blank] : [DET, 'noun.R'],
            comp: [complement, {case: 'acc', complements: 'noun.complements', nogap: true}]
        },
        postlogic:function(text){
            return text.replace(/\ba +([aeiouAEIOU])/g, "an $1") // 'a apple' to 'an apple'
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
            if (r.possessable > Math.pow(Math.random(),0.6) * 9) {

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
                if(r.count==false || r.number=='pl') {
                    decide(r, 'quantified')
                    if (r.quantified) return QUANT(r)
                }

                decide(r, 'def,dem,number,partial')
                if(r.dem) decide(r, 'prox'); else r.prox=''

                if (r.count == false && r.def == 'indef') {
                    out.text = ''
                } //prevents 'a' on mass nouns
                 else {
                    var inflections = 'def.prox.sg:this, def.prox.pl:these, def.dist.sg:that, def.dist.pl:those, indef.sg:a, def.def:the'
                    out.text = resolve([r.def, r.prox, r.number, r.partial], inflections)
                }

            }
    }
    return out
}

function GENITIVE(r){
    var r2 = decide(r, 'anim', true)
    var anim = Math.max( r.anim, r2.anim ) || 3
    var number = r.number=='sg' ? 'sg' : null

    return {
        order: "fake gennoun_'s",
        head: 'fake',
        children: {
            fake: [blank],
           gennoun: [DP, {'anim': anim, 'number': number, case: 'gen'}]
        },
        postlogic: function(text){
            return text.replace(/[_ ]+'s/,"'s")
                        .replace("s's","s'")
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
            return text.replace(/\d+/, '') //strip verb sense numbers
                       .replace(/([^aeou])y_+(s)/g, "$1ie$2")
                       .replace(/(ch|sh|s|z|x)_+s\b/g, '$1es') // -s to -es
        }
    }
}

//plurals for nouns
function nNum(r){
    return {text: r.number+r.count+r.inflected == 'pltrue' ? 's' : ''}
}

function PRONOUN(r) {
    decide(r,'person,number,case')
    if (!magicCompare(r.anim,3)) r.person=3 //if restrictions demands something less than sentient than 1st and 2nd person are excluded
    //if (r.person<3) r.anim=3

    //get a dummy noun so that we can make realistic pronouns
    r = $.extend( r, get($.extend(r,{type:'noun'})) )
    r.gender = r.gender || (magicCompare(r.anim, 3) ? choose(1,'m',1,'f') : 'n')

    //reflexive logic
    if (r.person===r.subj_person) {
        if (r.number===r.subj_number || r.person==2){ // you(sg) verb you(pl) just sounds wrong
            if (r.person < 3 || r.person==3 && r.gender===r.subj_gender){ //gender only needs to match in third person
                if(r.person < 3 || Math.random() < 0.5) r.case = 'reflex'
            }
        }
    }


    var word = $.extend(r,
                    {type:'pronoun',
                     inflections:"nom.sg.1:I, 2:you, sg.3:it, nom.sg.3.m:he, nom.sg.3.f:she," +
                                 " nom.pl.1:we, nom.pl.3:they, acc.sg.1:me, acc.sg.3.m: him," +
                                 " acc.sg.3.f:her, acc.pl.1:us, acc.pl.3: them," +
                                 " reflex.sg.1:myself, reflex.pl.1:ourselves," +
                                 " reflex.sg.2:yourself, reflex.pl.2:yourselves," +
                                 " reflex.sg.3.m:himself, reflex.sg.3.f:herself, reflex.sg.3.n:itself," +
                                 " reflex.pl.3:themselves",
                     gap : [blank]
                    }
                )

    return inflect(word,r)
}

function AP(r) {
    if (r.no_adj>1) return {text:''}

    return {
        order: "adv a comp*",
        head: "a",
        children: {
            adv: [blank],
            a: [A],
            comp: [complement, {'case': 'acc','complements': 'a.complements', 'nocomplement': r.nocomplement}]
        }
    }
}

function A(r){

    //a function to use in the future for creating a list of adjective ranks for recursively fetching adjectives
    function randomlist(){
        range = _.range(10)
        range = _.shuffle(range)
        return (randomlist(0)).sort();
        function randomlist() {
            var me = [range.pop()]
            if (me==4 || me==6) range.splice(_.random(range.length),1,me[0])
            if (Math.random() < 0.25) {me = me.concat(randomlist())}
            return me
        }
    }

    r.copulant = r.copulant || false
    return choose( 4, get( $.extend({type: 'adjective'} , r)), !r.copulant, [PRES_PARTICPLE] )
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
        gap: [get, {type: 'aux_verb', name: 'do'}],
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
    decide(r,'aspect')
    return {
        text: route(goodVal(r.inflected) || !!r.noinflection, {
            false: route(r.aspect, {
                prog: "ing",
                retroprog: "ing"
            })
        })
    }
   /* if (!goodVal(r.inflected) && !r.noinflection && (r.aspect=='prog' || r.aspect=='retroprog') ) {
        return {text: 'ing'}
    }

    return {text: ''}*/
}

//verb tense morphology
function tense(r){
    if (!goodVal(r.inflected) && !r.noinflection) {
        switch (r.aspect) {
            case 'simp':
                return {text: route(r.tense, {past: "ed"})}
            case 'retro':
                return {text: 'ed'}
        }
    }
    return {text: ''}
}

function auxiliary(r){
    var text = ""
    var last_bit = ""
    r = decide(r,"neg,tense,aspect,mood,number,person,copulant", true)
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
    else text = ( last_bit = route(r.mood, {
                        deontic: choose(1,"could", 1,"should", 1,"must"),
                        rest: choose(1,"would",1,"might",16,"")
                    })
                )
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
    .replace(/([^aeou])y_+s/, "$1ies") //change -ys to -ies
    .replace(/([^aeou])y_+ed/, "$1ied") //change -yed to -ied
    .replace(/e_+ed/, "ed") // -eed to -ed
    .replace(/([^eu])e_+ing/, "$1ing") // -eing to -ing
    .replace(/([^aeiou])([aeiou])([^aeiouywrx])_+(ed|ing)/, '$1$2$3$3$4') // -VCed or -VCing to -VCCxxx
    .replace(/(ch|sh|s|z|x)_+s\b/g, '$1es') // -s to -es
    return text
}

function WH_CLAUSE(r,c) {
    r = r || {}

    var B = new branch(c||CLAUSE,_.extend(r,{number:'sg'}))

    var gaps = []
    var wh

    if (Math.random()>0.5){

        //why,how
        var Ws = ['how']
        if (c!==INF_PHRASE) Ws.push('why') //"why to" sounds a bit weird, so we avoid it this way
        wh = _.sample(Ws)

    } else {

        //what,who,whose,where
        var findGaps = function(branch,parent) {
            $.each(branch, function(k,v){
                if (k=='parent' || k=='head') return true
                if (k=='gap' && v) {
                    if (propertySearch2(branch,'nogap')) return true //prevent noun complements and other things from partaking
                    if(branch.forceGap) {
                        gaps = [branch] //prevent gapping inside nested WHs
                        return false
                    }
                    gaps.push(branch)
                }
                if (typeOf(v)=='object') findGaps(v,branch)
            })
        }

        findGaps(B)
        var g = _.sample(gaps)
        var gapr = propertySearch2(g,'R')

        if(g.parent.children) g.parent.children[g.label] = new branch( g.gap[0], _.extend(g.gap[1], gapr) )

        //whose
        if (g.label=='gennoun') { //a lot of work for a very rare occurance!

            //do some reconstuctive surgery, moving the possessed NP out to the front of the whole clause
            var np = objectSearchCrazy(['gennoun','det'],g) //find the top np (it may be a crazy chain of genitive NPs)
            np.parent.order = np.parent.order.replace(np.label, '') //snip np out of its parent phrase
            g.parent.order = g.parent.order.replace("'s",'')
            delete np.parent.children[np.label] //snip np out of paren't children object, just in case
            B.order = np.label + "GEN " + B.order //preppend to clause order string
            B.children[np.label+'GEN'] = np //add to clause children

            wh = 'whose'

        //what or who
        } else {
            wh = g.wh || (  (gapr.anim != 3 || g.parent.label == 'predicate' || g.label == 'predicate') ? 'what' : 'who'  )
        }
    }

    B.order = wh + " " + B.order

    B.gap = [blank] //so meta!
    B.wh = 'what'
    B.forceGap = true //no nested WHs

    return B
}

function WH_INF(r){
    return WH_CLAUSE(r,INF_PHRASE)
}

function WH_INF_CLAUSE(r){
    return WH_CLAUSE(r,INF_CLAUSE)
}

function THAT_CLAUSE(){
    return {
        order: 'that clause',
        head: 'clause',
        forceGap: true,
        gap: [blank],
        wh: 'what',
        children:{
            clause: [SENTENCE]
        }
    }
}

function INF_PHRASE(r){
    return {
        order: 'to predicate',
        head: 'predicate',
        children:{
            predicate: [V, {noinflection: true}]
        }
    }
}

function INF_CLAUSE(r){
    return {
        order: 'subject to predicate',
        head: 'subject',
        children:{
            subject: [NP, {nogap: true}],
            predicate: [V, {noinflection: true, unpack: 'subject.R'}]
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
            predicate: [GP]
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
            v: [get, {type: "verb", unpack: 'subject.R'}],
            asp:  [aspect, 'v'],
            comp: [complement, {'case': 'acc','complements': 'v.complements','reset':true}]
        },
        postlogic: verb_cleanup
    }
}

function PRES_PARTICPLE(r){
    r.noinflection=false

    return {
        order: 'v_asp',
        head: 'v',
        children: {
            v: [get,  {type: 'verb', class: 'activity,process', complements: ' ,', reverse: true, rank: 1.5}],
            asp: [aspect, {unpack: 'v'}]
        },
        restrictions: {aspect: 'prog'},
        postlogic: verb_cleanup
    }
}

function GOAL(r){
    decide(r, 'pronominal')

    var out = {gap: [filler, {filler: 'to'}], wh: 'where'}

    if (r.pronominal) {
        var pr = _.values( decide(r, 'prox,def', true) )
        var inflections = 'def.prox:here, def.dist:there, indef:' + options("(somewhere|everywhere)")
        out.text = resolve(pr, inflections)
    } else {
        out = $.extend( out, {
                order: 'to place',
                head: 'place',
                children: {
                    place: [NP, {tags:'place',number:'sg'}]
                }
            })
    }

    return out
}


function filler(r){
    return {text: r.filler}
}

function blank(){
    return {text: ""}
}

function ALLYOURBASE(){
    return {text: "ALL YOUR BASE ARE BELONG TO US"}
}
