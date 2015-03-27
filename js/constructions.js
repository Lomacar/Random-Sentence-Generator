function SENTENCE(r){
    return choose(5, [CLAUSE], 1, [PASSIVE], 1, [COPULA], 0.0008, [ALLYOURBASE])
}

function CLAUSE(r){
    return {
        order: "subject predicate",
        head: "subject",
        children: {
            subject: [NP, {case: 'nom', anim: choose(1,0, 1,1, 5,2, 7,3), def: choose(9, 'def', 1, 'indef')}],
            predicate: [AUXP, {copulant: false, unpack: "subject.R"}]
        }
    }
}

function COPULA(){

    //SHOULD ALLOW PPs and NPs too

    return {
        order: "subject predicate",
        head: "subject",
        children: {
            subject: [NP, {case: 'nom', anim: choose(1,0, 1,1, 5,2, 7,3), def: 'def'}],
            predicate: [PREDICATE, {unpack: 'subject.R', copulant: true}]
        }
    }
}

function PASSIVE(r){
    return {
        order: "predicate",
        head: "predicate",
        children: {
            predicate: [VP_PASV, {copulant: false, ptpl: 'past', pasv:true, def: choose(1, 'indef', 9, 'def')}]
        }
    }
}

function NP(r) {
    r = decide(r, "person,pronominal")
    var r2 = (r.pasv==true || typeof r.pasv=='undefined') ? {} : {subj_person:'subject.person',subj_number:'subject.number',subj_gender: 'subject.gender'}

    return route(r.person, {
        rest: [PRONOUN,r2],
        3: route(r.pronominal, {
            true: [PRONOUN, r2],
            false: [DP]
        }
                )
    })
}

function DP(r){
    return {
        order : "det adj* noun ncomp*",
        head : "noun",
        gap : [blank],
        children: {
            noun: [N],
            adj: [AP, {unpack:'noun.R', nocomplement: true, no_adj: 'noun.unique'}, 0.25, 'rank'],
            det: r.nodeterminer ? [blank] : [DET, 'noun.R'],
            ncomp: [complement, {case: 'acc', complements: 'noun.complements', nogap: true}]
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

                if (!r.pronominal & toss()) {
                    return GENITIVE(r)
                } else {
                    out.text = choose(1,'my', 1,'your', 1,'his', 1,'her', 1,'its', 1,'our', 1,'their')
                    //                    decide(r, 'number')
                    //                    r.case = 'gen'
                    //                    r.person = r.person || choose(2,1, 2,2, 3,3)
                    //                    r.anim = Math.max( r.anim, r.person < 3 ? 3 : decide(r, 'anim').anim ) //copied from PRONOUN()
                    //                    r.gender = magicCompare(r.anim, 3) ? choose(1,'m',1,'f') : 'n'
                    //
                    //                    var inflections = '1.sg:my,2:your,3.sg.m:his,3.sg.f:her,3.sg.n:its,1.pl:our,3.pl:their'
                    //                    out.text = resolve([r.number,r.person,r.gender], inflections)
                }

            } else {
                decide(r,'def')

                if(r.count==false || r.number=='pl') {
                    decide(r, 'quantified')
                    if (r.quantified) {
                        if(r.def!='def'){
                            return QUANT(r)                                       //'12 dogs' is indefinite
                        } else {
                            r.quantified = false
                            return choose(1, [PREQUANT,r],                        //'12 of my dogs' is definite
                                          r.count, {
                                order: 'det quant',
                                head: 'det',
                                children: {
                                    det: [DET, r],
                                    quant: {text: toWords(powerRandom())} //'these 12 dogs' is definite
                                }
                            }
                                         )
                        }
                    }
                }
                decide(r, 'def,dem,number,partial')
                if(r.dem) decide(r, 'prox'); else r.prox=''

                if (r.count == false && r.def == 'indef') {
                    out.text = '' //prevents 'a' on mass nouns
                } else {
                    var inflections = 'def.prox.sg:this, def.prox.pl:these, def.dist.sg:that, def.dist.pl:those, indef.sg:a, def.def:the'
                    out.text = resolve([r.def, r.prox, r.number, r.partial], inflections)
                }

            }
    }

    return out
}

function GENITIVE(r){
    var posr = r.posr
    var r2 = decide(r, 'number', true)
    r2.case = 'gen'

    if (!posr || toss(0.3)) {
        //basic genitive
        decide(r2, 'anim')
        if (r2.anim==3) return DET(_.extend(r, {possessable: -111})) //abort possession if the would-be possesed noun is a person or somesuch
        else r2.anim=3
            } else {
                //special genitive with specified restricions (like "book's author")
                r2 = _.extend(r2, toObject(posr))
            }

    if (r2.number=='pl') delete r2.number //plural nouns can be possessed by sg or pl nouns
    if (r2.number=='sg') {
        r2.tags = r2.tags ? r2.tags + ' & !collective' : '!collective'
    }
    if (r2.number=='pl') r.def = 'def' //because "birds' owners died" sounds wrong

    return {
        order: "fake gennoun_'s",
        head: 'fake',
        children: {
            fake: [blank],
            gennoun: [DP, r2]
        },
        postlogic: function(text){
            return text.replace(/[_ ]+'s/,"'s")
                .replace("s's","s'")
        }
    }
}

function QUANT(r){
    r.prequant = r.prequant || false
    r.neg = r.neg || false

    if(r.count==true && toss(0.3)) {
        return {text: toWords(powerRandom())}
    } else {
        return [get, {type: 'quantifier', prequant: r.prequant }]
    }
}

function PREQUANT(r){

    return {
        order: 'quant of det',
        head: 'quant',
        children: {
            quant: [QUANT, {prequant: true}],
            det: [DET, r]
        }
    }
}



function N(r){

    return {
        order: "word_num",
        head: "word",
        children: {
            word: [get, { type: 'noun' } ],
            num: [nNum, 'word.number-count-inflected']
        },
        postlogic:function(text){
            return text.replace(/[0-9.]+/, '') //strip verb sense numbers
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
    //get a dummy noun so that we can make realistic pronouns
    r = $.extend( r, get($.extend(r,{type:'noun'})) )

    //decide(r,'number,case,anim')

    if (!magicCompare(r.anim,3)) r.person=3 //if restrictions demands something less than sentient, then 1st and 2nd person are excluded
    decide(r,'person')

    if (r.person < 3) {
        r.anim = 3
        r.tags = 'person'
        r.tang = 2
        r.gender = choose(1,'m',1,'f')
    }
    else {
        r.gender = r.gender || (magicCompare(r.anim, 3) ? choose(1,'m',1,'f') : 'n')
    }


    //reflexive logic
    if (r.case=='acc' && r.person===r.subj_person) {
        if (r.number===r.subj_number || r.person==2){ // you(sg) verb you(pl) just sounds wrong
            if (r.person < 3 || r.person==3 && r.gender===r.subj_gender){ //gender only needs to match in third person
                if(r.person < 3 || toss()) r.case = 'reflex'
                    }
        }
    }

    if (r.case=='dat') r.case='acc'

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

    word.type = 'pronoun' //important for creating word.R object with safe()

    return inflect(word,r)
}

function AP(r) {
    if (r.no_adj>1) return {text:''}

    return {
        order: "adv a acomp*",
        head: "a",
        children: {
            adv: [blank],
            a: [A],
            acomp: [complement, {'case': 'acc','complements': 'a.complements', 'nocomplement': r.nocomplement}]
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
            if (toss(0.25)) {me = me.concat(randomlist())}
            return me
        }
    }

    r.copulant = r.copulant || false
    return choose(!r.copulant, [PRES_PARTICIPLE],
                  5, {
        order:'neg_adj',
        head:'adj',
        children:{
            neg: [a_neg, 'adj'],
            adj: [get, $.extend({type: 'adjective'} , r)]
        }
    }
                 )
}

function a_neg(r) {
    return r.opposite && Math.round(Math.random()) ? {text:r.opposite} : {text:''}
}

function PREDICATE(r){
    decide(r, "tense,aspect,number,person")

    return {
        order: "aux word",
        head: "aux",
        children: {
            aux:  [auxiliary],
            word: [AP, $.extend(r, {unpack: 'aux.tense-aspect-mood-noinflection-real_aspect-neg'})]
        }
    }
}

function AUXP (r) {
    decide(r, "tense,aspect,number,person")

    return {
        order: 'aux vp',
        head: 'aux',
        children: {
            aux: [auxiliary],
            vp: [VP, _.extend(r, {unpack: 'aux.tense-aspect-mood-noinflection-real_aspect-neg', subj_def: 'subject.def', pasv: false, aspect: r.real_aspect})]
        }
    }
}

function VP(r){

    return {
        order: "vword compcore* compext*",
        head: "vword",
        gap: [get, _.extend({type: 'aux_verb', name: 'do'},r)],
        children: {
            vword: [V],
            compcore: [complement, {'case':'acc','complements': 'vword.compcore',neg: r.neg}],
            compext: [complement, {'case':'dat','complements': 'vword.compext',neg: r.neg, vtags: 'vword.vtags'}]
        }
    }
}

function VP_PASV(r){ 
    decide(r, "tense,aspect,person")
    if (r.person < 3) {
        r.anim = 3
        r.tags = 'person'
    }

    return {
        order: "subject aux vrb noncore",
        head: "vrb",
        children: {
            vrb: [V_PASV],
            subject: [complement, {'case':'nom', complements: 'vrb.compcore', pasv: true}],
            aux:  [auxiliary, _.extend({}, r, {unpack: 'subject.number-person'}) ],
            noncore: [VP_PASV_PT2, 'vrb.R']
        }
    }
}

function VP_PASV_PT2 (r){
    var order = 'compext'
    var hasAgent = toss() && !_.contains(r.ptpl, 'no-by')

    if (hasAgent){
        var orders = ['agent compext','compext agent']
        if (_.contains(r.ptpl, 'by1')) order = orders[0]
        else if (_.contains(r.ptpl, 'by2')) order = orders[1]
        else order = _.sample(orders)
            }

    return {
        order: order,
        head: 'dummy',
        children: {
            dummy: [blank],
            compext: [complement, {'case':'dat', unpack: 'vrb.compext-number-person', vtags: 'vrb.vtags'}],
            agent: hasAgent ? [PASV_AGENT, {case: 'acc', unpack: "vrb.R", neg: 'vrb.neg', pasv: false}] : null
        }
    }
}

function V_PASV(r) {
    return {
        order: "verb_en",
        head: "verb",
        gap: [get, {type: 'aux_verb', name: 'do'}],
        children: {
            verb: [get, {type: 'verb', aspect: 'retro'}],
            en:  [tense, 'verb']
            //tns:  [tense, 'verb', {unpack: 'verb', noinflection: false}]
        },
        postlogic: verb_cleanup
    }
}

function PASV_AGENT(r){
    delete r.number
    delete r.person

    return {
        order: 'by agent',
        head: 'agent',
        children: {
            agent: [NP, {pronominal: false}]
        }
    }
}

function V(r) {
    return {
        order: "verb_asp_tns_num",
        head: "verb",
        children: {
            verb: [get, {type: 'verb'}],
            asp:  [aspect, 'verb'],
            tns:  [tense, 'verb'],
            num:  [vNum, 'verb']
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
    var pasv = r.pasv
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
        deo: choose(1,"could", 1,"should", 1,"must"),
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

    //passive
    if(pasv==true){
        last_bit = get($.extend(r2, {type: 'aux_verb', name: 'be'}))
        text += " " + (last_bit.inflected || last_bit.name)
        wellthen("retro")
    }

    //dummy 'do' for bare negative
    if (/^ *$/.test(text) && r.neg) {
        last_bit = get($.extend(r2, {type: 'aux_verb', name: 'do'}))
        text = (last_bit.inflected || last_bit.name ) + " not"
        r2.noinflection = true
    }

    return $.extend(r, {'text': text, 'noinflection': r2.noinflection, 'aspect': r2.aspect, 'real_aspect': r.aspect})
}

//s inflection on verbs
function vNum(r){
    return {text: route(r.number+r.person+r.aspect+r.tense+r.inflected, {sg3simppres:"s"})}
}

function verb_cleanup(text){
    text = text.replace(/[0-9.]+/g, '') //strip verb sense numbers
        .replace(/([^aeou])y_+s/, "$1ies") //change -ys to -ies
        .replace(/([^aeou])y_+ed/, "$1ied") //change -yed to -ied
        .replace(/e_+ed/, "ed") // -eed to -ed
        .replace(/([^e])e_+ing/, "$1ing") // -eing to -ing
        .replace(/([^aeiou])([aeiou])([^aeiouywrx])_+(ed|ing)/, '$1$2$3$3$4') // -VCed or -VCing to -VCCxxx
        .replace(/(ch|sh|s|z|x)_+s\b/g, '$1es') // -s to -es
    return text
}

function WH_CLAUSE(r,c) {
    r = r || {}

    var B = new branch(c||CLAUSE,_.extend(r,{number:'sg'}))

    var gaps = []
    var wh

    if (toss()){

        //why,how
        var Ws = ['how']
        if (c!==INF_PHRASE) Ws.push('why') //"why to" sounds a bit weird, so we avoid it this way
        wh = _.sample(Ws)

    } else {

        //what,who,whose,where
        var findGaps = function (branch, parent) {
            $.each(branch, function (k, v) {
                if (k == 'parent' || k == 'head') return true
                if (k == 'gap' && v) {
                    if (propertySearch2(branch, 'nogap')) return true //prevent noun complements and other things from partaking
                    if (branch.forceGap) {
                        gaps = [branch] //prevent gapping inside nested WHs
                        return false
                    }
                    gaps.push(branch)
                }
                if (typeOf(v) == 'object') findGaps(v, branch)
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
            predicate: [VP, {noinflection: true}]
        }
    }
}

function INF_CLAUSE(r){
    return {
        order: 'subject to predicate',
        head: 'subject',
        children:{
            subject: [NP, {nogap: true}],
            predicate: [VP, {noinflection: true, unpack: 'subject.R'}]
        }
    }
}

//no "to"
function INF_CLAUSE2(r){
    return {
        order: 'subject predicate',
        head: 'subject',
        children:{
            subject: [NP, {nogap: true}],
            predicate: [VP, {noinflection: true, unpack: 'subject.R'}]
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
        order: "v_asp compcore* compext*",
        head: "v",
        children: {
            v: [get, {type: "verb", unpack: 'subject.R', pasv: false}],
            asp:  [aspect, 'v.inflected-noinflection-aspect'],
            compcore: [complement, {'case': 'acc','complements': 'v.compcore','reset':true}],
            compext: [complement, {'case': 'acc','complements': 'v.compext','reset':true}]
        },
        postlogic: verb_cleanup
    }
}

function PRES_PARTICIPLE(r){
    r.noinflection=false

    return {
        order: 'v_asp',
        head: 'v',
        children: {
            v: [get,  {type: 'verb', class: 'activity,process', ptpl: 'pres', rank: 1.5}],
            asp: [aspect, {unpack: 'v'}]
        },
        restrictions: {aspect: 'prog'},
        postlogic: verb_cleanup
    }
}

function NOUN_INC(r) {
    return {
        order: 'incnoun - ving !!!',
        head: 'ving',
        children: {
            ving: [V, {aspect: 'prog', tense:'pres', ptpl:'past'}],
            inccomp: [complement, {complements:'ving.compcore', unpack: 'ving.R'}],
            incnoun: [get, {type:'noun', name:'inccomp.name'}]
        },
        postlogic: function (text) {
            return text.replace(' - ', '-')
        }
    }
}

function ACTION (r) {    
    return {
        order: 'the ving of actcomp',
        head: 'ving',
        children: {                                                  //quick fix to avoid messy verbs in lexicon 
            ving: [V, {aspect: 'prog', tense: 'pres', pasv: 'false', ptpl:'!-'}],
            actcomp: [ACTION_PT2, {unpack:'ving.R', trans:'ving.trans', case: 'acc', pronominal: false, person: 3}]
        },
        postlogic: function (text) {
            return text.replace(/of\s*$/, '') //remove trailing 'of' if there is no complement
        },
        number: 'sg', person: 3 //this construction must be treated as a noun, at least for passive clauses to work right
    }
}

function ACTION_PT2 (r) {

    var comp = r.trans > 0.5
    //transitive verbs use the object (eating of the pizza)
    ? [complement, {complements:'ving.compcore', nocomplement: -1}]
    //intransitive verbs use the subject (running of the bulls)
    //'semi-transitive' verbs get nothing (*arguing of with John )
    : r.trans == 0.5 ? [filler, {filler:''}] : [NP, r]

    return {
        order: 'of* actcomp*',
        head: 'actcomp',
        children: {
            actcomp: comp,
        }
    }
}

function SOURCE(r){
    r.role='SOURCE'
    return MOTION(r)
}
function PATH(r){
    r.role='PATH'
    return MOTION(r)
}

function GOAL(r){
    r.role='GOAL'
    return MOTION(r)
}

function MOTION(r) {
    if(magicCompare(r.vtags, 'generalMotion')){
        delete r.vtags
    }
    if (!r.role) r.role = options('(GOAL|PATH)') //TODO: SOURCE

    return {
        order: "prep landmark",
        head: "prep",
        children: {
            prep: [get, {type: 'preposition', role: r.role}], //, pasv: 'predicate.pasv'
            landmark: [NP, {case: 'dat', unpack: 'prep.tags', number:'sg'}]
        }
    }
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
