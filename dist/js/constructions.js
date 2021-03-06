function SENTENCE(r) {
    return choose(12, [CLAUSE, r], 1, [PASSIVE, r], 3, [COPULA, r], 0.002, [ALLYOURBASE, r])
}

function CLAUSE(r) {
    return {
        order: "subject predicate adjunct*",
        head: "subject",
        labelChildren: true,
        children: {
            subject: [NP, {
                case: 'nom',
                anim: choose(4, 0, 2, ">0&<2", 2, 2, 7, 3),
                def: choose(6, 'def', 1, 'indef')
				//,pronominal: false
            }],
            predicate: [AUXP, _.extend({
                copulant: false,
                unpack: "subject.R"
            }, r)],
            adjunct: [ADJUNCT_PP, 'predicate.vp.vword.verb.R']
        }
    }
}

//function CLAUSE2(r) {
//    return {
//        order: "subject predicate adjunct*",
//        head: "predicate",
//        labelChildren: true,
//        children: {
//            subject: [NP, {
//                case: 'nom',
//                def: choose(9, 'def', 1, 'indef'),
//                anim: choose(1, 0, 1, ">0&<2", 3, 2, 6, 3),
//                unpack: "predicate.vp.vword.verb.R"
//            }],
//            predicate: [AUXP, _.extend({
//                copulant: false,
//            }, r)],
//            adjunct: [ADJUNCT_PP, 'predicate.vp.vword.verb.R']
//        }
//    }
//}


function PASSIVE(r) {
    r = r || {}
    
    function reinflect(word, rr){
        delete word.inflected
        delete word.text
        word = inflect(word, _.extend(word, rr))
        word.text = word.inflected || word.name
    }

    //get a regular clause to build a passive out of
    var B = new branch(CLAUSE, _.extend(r, {
        aspect: 'retro', //this is a cheat to get the right form of the verb for passive
        tense: 'pres', //I guess tense can't be future or it will screw up the aspect
        ptpl: 'past', //this is so only verbs that like to be passive are choosen
        trans: '>0.5' //and only transitive verbs can be passivized
    }))
    
    var patient = superSearch('predicate.vp.compcore', B)
    var agent   = superSearch('subject', B)
    var compext = superSearch('predicate.vp.compext', B)
    //var aux     = superSearch('predicate.aux', B)
    var vb      = superSearch('predicate.vp.vword', B)
    var adjunct = superSearch('adjunct', B)

    //re-inflect pronouns
    if (patient && patient.tip().type == 'pronoun') reinflect(patient.tip(), {case: 'nom'})
    if (agent && agent.tip().type == 'pronoun') reinflect(agent.tip(), {case: 'acc'})
    patient = patient || {text: error('Patient not found for passive clause.')}
    agent = agent || {text: error('Agent not found for passive clause.')}
    //reinflect(vb, {aspect: 'retro'})

    //handle pesky phrasal particles
    // if (compext) {
    //     compstr = compext.order ? 'order' : 'text' //compext doesn't have an order attr if it is just text
    //     phrasal = compext[compstr].match(/@\w+/)
    //     if (phrasal){
    //         compext[compstr] = compext[compstr].replace(phrasal, '')
    //         vb.order = vb.order + ' ' + phrasal[0]
    // }   }
    
    //determine if passive clause has an agent and if it goes before or after the extra complement
    var agentAndOrComplement = 'compext*'
    var by = superSearch('ptpl', vb)
    var hasAgent = toss() && !_.contains(by, 'no-by')
    if (hasAgent) {
        var orders = ['by agent compext*', 'compext* by agent']
        if (_.contains(by, 'by1')) agentAndOrComplement = orders[0]
        else if (_.contains(by, 'by2')) agentAndOrComplement = orders[1]
        else agentAndOrComplement = _.sample(orders)
    }

    return {
        order: "patient aux vb " + agentAndOrComplement + " adjunct*",
        head: "dummy",
        labelChildren: true,
        children: {
            'dummy': [pass_through, {original_clause: B}],
            'patient': patient,
            'aux': [auxiliary, 
                    _.extend(
                        r,                    
                        {unpack: 'patient.R', pasv: true, copulant: false},
                        //because we cheated with retro aspect above, clear it here
                        //same with tense
                        {aspect: '', tense:''} 
                   )],
            'vb': vb,
            'agent': agent,
            'compext': compext,
            'adjunct': adjunct
        }
    }
}

function COPULA(r) {

    //SHOULD ALLOW PPs(done!) and NPs too

    //attempt to get more abstract subjects
    r2 = decide(r, 'tang', true)
    r2.anim = choose(2, 0, 1, ">0&<2", 2, 2, 4, 3)
    if (r2.tang == 0 && !magicCompare(r2.anim, 0)) {
        if (toss()) r2.tang = 2
        else r2.anim = 0
    }

    return {
        order: "subject predicate",
        head: "subject",
        labelChildren: true,
        children: {
            subject: [NP, {
                case: 'nom',
                def: 'def',
                anim: r2.anim,
                tang: r2.tang
            }],
            predicate: [PREDICATE, {...r,
                unpack: 'subject.R',
                copulant: true
            }]
        }
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////



function NP(r) {
    r = decide(r, "person,pronominal")
    var r2 = (r.pasv == true || typeof r.pasv == 'undefined') ? {} : {
        subj_person: 'subject.person',
        subj_number: 'subject.number',
        subj_gender: 'subject.gender'
    }
    r = _.extend(r, r2) //unbelievably, this line was missing for a long time

    //sometimes, return a set of coordinated noun phrases instead of a plural noun
//    if (toss(probabilities.np_coordination) && r.number == 'pl' && !r.already_plural) return [NP_COORD, _.extend(r, {
//        already_plural: true
//    })]
// crash caused at SEED 415

    r.pronominal = r.pronominal && toss(magicCompare(r.anim,3)) //avoid too much 'it'

    var isFullNP = '' + r.person + r.pronominal == '3false'
    var quantinfo = isFullNP ? {amount: 'np.quant.amount', qname: 'np.quant.name'} : {}

    return {
        order: "prequant* np",
        head: "np",
        gap: [blank],
        labelChildren: true,
        children: {
            prequant: [PREQUANT, {unpack: 'np.R-prequant', ...quantinfo}],
            np: route(isFullNP, {
                rest: [PRONOUN, r],
                true: [DP]
            })
        }
    }
}

function DP(r) {
    decide(r, 'def,superlative')
    r.noposs = r.noposs || false

    if (magicCompare(r.tags,'person')) r.proper = toss(0.2) //an attempt to rein in the abundance of proper names in the lexicon

    var order = r.def == "def" ? "preadj* quant*" : "quant* preadj*"

    //if the noun is indefinite, nouns that don't like possession should be eschewed
    //because indefinite nouns can't be possessed. May cause errors if suitable nouns can't be found.
    if (!r.possessable && r.def=='indef') r.possessable = '<'+_.random(5)+5                                                         

    return {
        order: "det " + order + " super* adj* nprecomp* noun ncomp*",
        head: "noun",
        gap: [blank],
        labelChildren: true,
        hasComplement: "ncomp,nprecomp",
        children: {
            noun: [N, {
                def: r.def, //isn't this redundant?
                prequant: toss( probabilities.prequant  ),
            }],
            det: [DET, { //nodeterminer is only used by the verb 'mix' and should be removed
                unpack: 'noun.R-noposs'
            }],
            preadj: r.superlative || toss(0.9) ? [blank] : [SPECIAL_A, 'noun.R'],
            quant: [QUANT, {
                unpack: 'noun.R',
                prequant: false,
                quantified: 'noun.quantified' //still used by some lexemes
            }],
            super: route(r.def == 'def' && r.superlative, {
                true: [A, {
                    unpack: 'noun.R',
                    noadj: 'noun.unique', //should be noun.proper? no, adjectives are difficult on words like 'science, peace, outer space' 
                    superlative: true,
                    scalar: '>0',
                    possessed: 'det.possessed',
                    desc: 'ap'
                }],
                false: [blank]
            }),
            adj: r.proper ? [blank] : [AP, {
                unpack: 'noun.R',
                nocomplement: true,
                noadj: 'noun.unique', //unfortunately this is really necessary
                superlative: false,
                desc: 'ap'
            }, 0.3, 'rank'],
            nprecomp: [complement, {
                complements: 'noun.precomp',
                nogap: true,
                desc: 'pre-complement'
            }],
            ncomp: [complement, {
                case: 'acc',
                complements: 'noun.complements',
                nogap: true,
                desc: 'noun complement'
            }]
        },
        postlogic: function (text) {
            return text.replace(/\ba[ _]+([aeiouAEIOU])/g, "an $1") // 'a apple' to 'an apple'
                .replace('an other', 'another')
        },
        separator: [', ']
    }
}

function NP_COORD(r) {
    //delete r.number
    r = safe(get(_.extend({type:'noun'},r))) //this solves the problem of inadequately defined subjects that can all work for one verb
    for(k in r){
        if(typeof r[k] == 'string') r[k] = r[k].replace(/,/g,'&')
    }
    //r.number = options('(pl|sg)')

    return {
        order: "np1",
        head: "dummy",
        children: {
            np1: [DP, r, 1.2, 'unique'],
            dummy: [blank]
        },
        separator: [', ', ' and ']
    }
}


function DET(r) {

    var out = {
        text: ''
    }

    switch (parseInt(r.unique)) {
    case 2:
        break;
    case 1:
        out.text = 'the'
        break;
    default:
        if (r.quantified == true && r.def == 'indef') 
        return [blank] //prevents any determiner on quantified indefinites

        if (r.def == 'def' && !r.noposs && r.possessable > Math.random()**0.6 * 9) {

            if (toss(0.7)) {
                return GENITIVE(r)
            } else {
                decide(r, 'number')
                out.possessed = true
                var it = r.anim == 3 ? 0 : 0.5
                out.text = r.number == 'sg' ? choose(1, 'my', 1, 'your', 1, 'his', 1, 'her', it, 'its') : choose(1, 'your', 1, 'our', 1, 'their')
            }

        } else {

            decide(r, 'def,dem,number,partial')
            if (r.dem) decide(r, 'prox');
            else r.prox = ''

            if (r.count == false && r.def == 'indef') {
                out.text = '' //prevents 'a' on mass nouns
            } else {
                var inflections = 'def:the, def.prox.sg:this, def.prox.pl:these, def.dist.sg:that, def.dist.pl:those, indef.sg:a'
                out.text = resolve([r.def, r.prox, r.number, r.partial], inflections)
            }

        }
    }

    return out
}

function GENITIVE(r) {
    var posr = r.posr
    var partOf = r.partOf
    var r2 = decide(r, 'number', true)
    r2.case = 'gen'

    if (posr) posr = toObject(posr)
    else posr = null
    partOf = partOf == "null" || partOf == undefined ? null : {
        tags: partOf
    }
    _.extend(posr, partOf)

    if (!posr /*|| toss(0.3)*/ ) {
        //basic genitive
        if (r.anim == 3) return DET(_.extend(r, {
                possessable: -111
            })) //abort possession if the would-be possesed noun is a person or somesuch
        else r2.anim = ">noun.anim"
    } else {
        //special genitive with specified restrictions (like "book's author")
        _.extend(r2, posr)
    }

    if (r2.number == 'pl') delete r2.number //plural nouns can be possessed by sg or pl nouns
    if (r2.number == 'sg') {
        r2.tags = r2.tags ? r2.tags + ' & !collective' : '!collective'
    }
    if (r2.number == 'pl') r.def = 'def' //because "birds' owners died" sounds wrong

    return {
        order: "fake gennoun_'s",
        head: 'fake',
        children: {
            fake: [blank, {
                possessed: true
            }],
            gennoun: [DP, r2]
        },
        postlogic: function (text) {
            return text.replace(/[_ ]+'s/, "'s")
                .replace("s's", "s'")
        }
    }
}


function QUANT (r) {
    var out = {text: ''}

    if (r.quantified===false || r.unique) return out

    //there is too much 'the/this/that one' going on so let's reduce quantification on singular definites
    if (r.def=='def' && r.number=='sg') r.quantified = toss(0.2)
    //on the other hand quantified indefinites are so rare...
    else if (r.def=='indef') r.quantified = r.quantified || toss()
    else r.quantified = r.quantified || false

    if (!r.quantified) return out
    
    //there are so many dimensions to consider that it is best to use the resolve function
    //to determine whether to allow a number, quantifier, either or none
    var prequant = r.prequant ? 'prequant' : 'quant'
    var directions = "prequant.def: both, quant.indef: both, prequant.def.false: quantifier, quant.indef.false: quantifier, quant.def.true: numeral"
    var answer = resolve([prequant, r.def, r.count],directions)

    if (answer=='both') answer = choose(probabilities.numeral,'numeral',1-probabilities.numeral,'quantifier')

    switch (answer) {

        case 'numeral':
            var amount
            if (r.number == 'sg') {
                amount = 1
            } else {
                amount = powerRandom()
                if (r.amount) { //if this is a case of prequantification, the first number must be smaller than the second
                    amount = amount % r.amount
                    amount = amount || 1 //modulus can produce zeros, so this fixes that
                }
            }

            if (!r.prequant && r.number=='pl' && amount < 2) 
                amount = _.sample([2,3]) //can't have "one things"

            out = {
                text: toWords(amount),
                amount: amount
            }
            break

        case 'quantifier':
            var amount = r.amount ? '<'+(r.amount+1) : null //if prequantification, first amount must be smaller than or equal to second
            out = [get, {
                type: 'quantifier',
                prequant: r.prequant,
                amount: amount,
                neg: r.neg
            }]
    }

    return out
}

//this function should just be mrged into QUANT
function PREQUANT(r) {
    if (!r.prequant) return [blank]
    if (r.def == 'indef') return [blank] // can't have "3 of a dog" or "some of mud"
    if (r.qname) return [blank] // can't have "3 of some X" or "some of several X"
    if (r.unique) return [blank] //can't have "3 science" or "3 the Eifel Tower"
    if (r.amount == 1 || r.number == 'sg') return [blank] //can't have "# of one dogs" or "# of the dog"

    return {
        order: 'quant of',
        head: 'quant',
        children: {
            quant: [QUANT, {
                prequant: true,
                desc: 'quantifier',
                quantified: true
            }]
        }
    }
}



function N(r) {

    return {
        order: "nword_num",
        head: "nword",
        children: {
            nword: [get, {
                type: 'noun'
            }],
            num: [N_NUM, 'nword.number-count-inflected']
        },
        postlogic: function (text) {
            return text.replace(/([^aeou])y_+(s)/g, "$1ie$2")
                .replace(/(ch|sh|s|z|x)_+s\b/g, '$1es') // -s to -es
        }
    }
}

//plurals for nouns
function N_NUM(r) {
    return {
        text: r.number + r.count + r.inflected == 'pltrue' ? 's' : ''
    }
}

function PRONOUN(r) {
    
    //var anim = r.anim!==undefined ? r.anim : choose(1,'<3',2,3) //avoid too much 'it'
    
    //get a dummy noun so that we can make realistic pronouns
    var dummynoun =  get({...r, type:'noun'})
    r = {...r, ...dummynoun}
    
    if (!magicCompare(r.anim, 3)) r.person = 3 //if restrictions demands something less than sentient, then 1st and 2nd person are excluded
    else decide(r, 'person')
    
    //indefinite pronouns!
    if (r.person == 3 && r.def != 'def' && toss(probabilities.indef_pro)) {
        return [INDEF_PN, r]
    }
    
    if (r.person < 3) {
        r.anim = 3
        r.tags = 'person'
        r.tang = 2
        r.gender = choose(1, 'm', 1, 'f')
        r.size = 6
    } else {
        r.gender = r.gender || (magicCompare(r.anim, 3) ? choose(1, 'm', 1, 'f') : 'n')
    }

    if (r.case == 'dat') r.case = 'acc'

    //reflexive logic
    if (r.case == 'acc' && r.person === r.subj_person) {
        if (r.number === r.subj_number || r.person == 2) { // you(sg) verb you(pl) just sounds wrong
            if (r.person < 3 || r.person == 3 && r.gender === r.subj_gender) { //gender only needs to match in third person
                if (r.person < 3 || toss()) r.case = 'reflex'
            }
        }
    }

    //prequantified pronouns
    if (r.number == 'pl' && !r.unique && r.case != 'reflex' && toss()) {
        r.case = 'acc'
        r.prequant = true
    }

    var word = $.extend(r, {
        type: 'pronoun',
        inflections: "nom.sg.1:I, 2:you, sg.3:it, nom.sg.3.m:he, nom.sg.3.f:she, \
                      nom.pl.1:we, nom.pl.3:they, acc.sg.1:me, acc.sg.3.m: him, \
                      acc.sg.3.f:her, acc.pl.1:us, acc.pl.3: them, \
                      reflex.sg.1:myself, reflex.pl.1:ourselves, \
                      reflex.sg.2:yourself, reflex.pl.2:yourselves, \
                      reflex.sg.3.m:himself, reflex.sg.3.f:herself, reflex.sg.3.n:itself, \
                      reflex.pl.3:themselves",
        gap: [blank]
    })

    word.type = 'pronoun' //important for creating word.R object with safe()

    return inflect(word, r)
}

function POSS_PN(r) {
    decide(r, 'number,person')
    r.case = 'gen'
    r.person = r.person || choose(2, 1, 2, 2, 3, 3)
    r.anim = Math.max(r.anim, r.person < 3 ? 3 : decide(r, 'anim').anim) //copied from PRONOUN()
    r.gender = r.gender || (magicCompare(r.anim, 3) ? choose(1, 'm', 1, 'f') : 'n')

    var inflections = '1.sg:my,2:your,3.sg.m:his,3.sg.f:her,3.sg.n:its,1.pl:our,3.pl:their'
    r.text = resolve([r.number, r.person, r.gender], inflections) || error("Could not inflect possessive pronoun " + [r.number, r.person, r.gender].join("."))

    return r
}

function INDEF_PN(r) {
    var indef1, indef2, indefinite
    indef1 = toss(0.3) ? (r.neg ? 'any' : 'no') : (r.number == 'pl' ? 'every' : 'some')
    indef2 = r.anim >= 2 ? options('(one|body)') : 'thing'
    var nom = r.case == 'nom'
    if (indef1 == 'every') {
        if (nom) r['aux.neg'] = false //everybody does not like sentences like this
        if (toss(0.2)) indef1 = choose(nom, 'not', 1, 'almost') + ' every'
    }
    indefinite = indef1 + indef2
    if (indefinite == 'noone') indefinite = 'no one'
        //if (toss(0.1)) indefinite += choose(1, " else", 1 " "+choose
    r.number = 'sg'

    var extraStuff
    var safeR
    if (extraStuff = toss()) safeR = safe(r, 'adjective')

    return {
        order: "indef extra*",
        head: "indef",
        hasComplement: "extra",
        children: {
            indef: [filler, _.extend({}, r, {
                filler: indefinite
            })],
            extra: choose(
                2, [blank, r],
                extraStuff, [filler, {
                    filler: "else"
                }],
                2 * extraStuff * (indef1 == 'some' || indef1 == 'any'), [AP, _.extend({}, safeR, {
                    nocomplement: true
                })],
                extraStuff, [EQUATIVE, safeR],
                extraStuff, [COMPARATIVE, safeR],
                2 * extraStuff, [LOCATION, _.extend({}, safeR, {
                    vtags: "copula"
                })]
            )
        }
    }
}

function AP(r) {
    if (r.noadj) return {
        text: ''
    }

    return {
        order: "adv a acomp*",
        head: "a",
        labelChildren: !r.nocomplement, //there is a bug with randomizing adjectives and choosing a participle, so I would rather not label APs unless there is a complement
        hasComplement: "acomp",
        children: {
            adv: [blank],
            a: [A, {
                desc: 'adj'
            }],
            acomp: [complement, {
                'case': 'acc',
                'complements': 'a.complements',
                'nocomplement': r.nocomplement,
                desc: 'adj complement'
            }]
        }
    }
}

function A(r) {
    if (r.noadj) return {
        text: ''
    }

    r.possessed = r.possessed || false //just for the word "favorite"

    //a function to use in the future for creating a list of adjective ranks for recursively fetching adjectives
    function randomlist() {
        range = _.range(10)
        range = _.shuffle(range)
        return (randomlist(0)).sort();

        function randomlist() {
            var me = [range.pop()]
            if (me == 4 || me == 6) range.splice(_.random(range.length), 1, me[0])
            if (toss(0.25)) {
                me = me.concat(randomlist())
            }
            return me
        }
    }
    if (!r.comparative && !r.superlative) decide(r, 'comparative')

    //superlatives or comparatives
    var more, er, less
    if (r.comparative || r.superlative) {
        less = toss(0.2) ? "down" : "up" //for less or least adj
        if (less == "up") {
            more = {
                form: 'more',
                unpack: 'adj.superform-scalar-superlative-comparative',
                less: "up"
            }
            er = {
                form: '-er',
                unpack: 'adj.superform-scalar-superlative-comparative',
                less: "up"
            }
        } else {
            more = {
                form: 'more',
                unpack: 'adj.scalar-superlative-comparative',
                superform: 'more',
                less: "down"
            }
        }

    }

    r.copulant = r.copulant || false
    var noptpl = r.copulant || r.scalar

    return choose(!noptpl, [PRES_PARTICIPLE],
        5, {
            order: 'more* neg_adj_er*',
            head: 'adj',
            children: {
                neg: [a_neg, 'adj'],
                adj: [get, $.extend({
                    type: 'adjective'
                }, r)],
                more: [a_super, more || {
                    text: ''
                }],
                er: [a_super, er || {
                    text: ''
                }]
            },
            postlogic: function (text) {
                return text.replace(/-er/, 'er')
                    .replace(/([^aeiou])y_+(er|est)/, '$1i$2')
                    .replace(/e_+e(r|st)/, 'e$1')
                    .replace(/\b([^aeiou]*[^aeio][aeiou])([^aeiouywx])_+(er|est)/, '$1$2$2$3')
                    .replace('badder', 'worse').replace('baddest', 'worst')
                    .replace('good_er', 'better').replace('good_est', 'best')
            }
        })
}

function a_neg(r) {
    return r.opposite && toss(0.2) ? {
        text: r.opposite
    } : {
        text: ''
    }
}

//it is called super but it handles both superlatives and comparatives
function a_super(r) {
    r.superlative = r.superlative || false

    if (!r.scalar) return [blank]
    if (r.form != r.superform) return [blank]

    var query = [r.less, r.superlative, r.superform]
    var inflections = "up.true.-er: est, up.true.more: most, up.false.-er: -er, up.false.more: more," + "down.true: least, down.false: less"

    return {
        text: resolve(query, inflections)
    }
}

function SPECIAL_A(r) {
    if (r.unique == 0 || (r.unique < 2 && r.count)) {

        var defs = "next|previous|first|last|usual|other|same"
        if (r.number == 'sg') defs += "|only|only other"

        return route(r.def, {
            'def': {
                text: options('(' + defs + ')')
            },
            'indef': {
                text: options('(previous|other|similar|different)')
            },
            'rest': [blank]
        })
    }

    return [blank]
}

function PREDICATE(r) {
    decide(r, "tense,aspect,number,person")

    var L = magicCompare(r.tags, "thing&!feature|territory|phenomena", {
            tagmode: true
        }) && magicCompare(r.size, "<11") //size check is a partial fix to problems like "The moon is on the ???"

    var ptype = choose(3, 'adjective', L, 'location')

    if (ptype == 'location' && r.aspect == 'prog') r.aspect = 'simp'

    return {
        order: "aux pred",
        head: "aux",
        labelChildren: true,
        children: {
            aux: [auxiliary],
            pred: route(ptype, {
                'adjective': [AC, { 
                    ...r, 
                    unpack: 'aux.tense-aspect-mood-noinflection-real_aspect-neg-copulant'
                }],
                'location': [LOCATION, {
                    ...r,
                    vtags: "copula"
                }]
            })
        }
    }
}

//adjective constructions
function AC(r) {
    return choose(
        18, [AP, r], //standard adjective
        1, [EQUATIVE, _.extend({}, r, {
            description: 'equative'
        })],
        1, [COMPARATIVE, _.extend({}, r, {
            description: 'comparative'
        })],
        1, [SUPERLATIVE, _.extend({}, r, {
            description: 'superlative'
        })]
    )
}

// "as big as"
function EQUATIVE(r) {
    return {
        order: "mod** as adj as np", //why are two asterisks needed to make it optional?
        head: "adj",
        labelChildren: true,
        children: {
            mod: {
                text: choose(4, "", 1, "almost", r.neg, "quite", !r.neg, "just", 1, "exactly")
            },
            adj: [A, {
                scalar: '>0',
                superlative: false,
                comparative: false
            }],
            np: [DP, 'adj.orig']
        }
    }
}

// "bigger than"
function COMPARATIVE(r) {
    return {
        order: "mod** adj than np",
        head: "adj",
        labelChildren: true,
        children: {
            mod: {
                text: choose(7, "", 1, "much", !r.neg, "barely", r.neg, "any", 1, "slightly")
            },
            adj: [A, {
                scalar: '>0',
                superlative: false,
                comparative: true
            }],
            np: [DP, 'adj.orig']
        }
    }
}
// "the biggest"
function SUPERLATIVE(r) {
    return {
        order: "mod** the adj",
        head: "adj",
        labelChildren: true,
        children: {
            mod: {
                text: choose(5, "", !r.neg, "by far")
            },
            adj: [A, {
                scalar: '>0',
                superlative: true,
                comparative: false
            }]
        }
    }
}

function AUXP(r) {
    decide(r, "tense,aspect,number,person")

    return {
        order: 'aux vp',
        head: 'aux',
        labelChildren: true,
        hasComplement: 'vp', //this is a cop-out because it would be hard to correctly update the verb inflection when the aux changes
        children: {
            aux: [auxiliary],
            vp: [VP, _.extend({}, r, {
                unpack: 'aux.tense-aspect-mood-noinflection-real_aspect-neg',
                subj_def: 'subject.def',
                pasv: false,
                aspect: r.real_aspect
            })]
        }
    }
}

function auxiliary(r) {
    var text = ""
    var last_bit = ""
    pasv = r.pasv
    matrix_tense = r.matrix_tense
    matrix_class = r.matrix_class
    r = decide(r, "neg,tense,aspect,mood,number,person,copulant", true)
    var r2 = _.clone(r)
    r2.aspect = 'simp'

    //no progressive aspect for location predicates
    //if (r.ptype && r.ptype == 'location' && r.aspect == 'prog') r.aspect = 'simp'

    function wellthen(aspect) {
        if (last_bit) {
            if (aspect) {
                r2.aspect = aspect
                r2.noinflection = false
            } else r2.noinflection = true //infinitive

            text += r2.neg ? " not" : ""
            r2.neg = false
        }
    }

    //    if (matrix_tense) {
    //        text = 'NARF'// + "-" + matrix_tense + "-" + r.tense + "-" + matrix_class + " "
    //        //return [filler, {filler:text}]
    //    }
    //if this is inside a "that clause" or wh_clause or maybe something else
    if (matrix_tense) {
        if (matrix_tense == "past") {
            if (matrix_class == "state") {
                //avoid things like "He knew that John is speaking."
                if (r.tense == "pres") r.tense = r2.tense = "past"
            }
        }
    }

    //future tense and modals
    if (r.tense == "fut") text += last_bit = (matrix_tense == "past") ? "would" : "will"
    else text += (last_bit = route(r.mood, {
        deo: choose(1, "could", 1, "should", 1, "must"),
        epi: choose(1, "would", 1, "might"),
        rest: ''
    }))
    wellthen()

    //use retro as a sort of past tense for modals
    if (r.mood != 'ind' && r.tense == 'past') {
        if (r.aspect == 'simp') {
            r.aspect = 'retro'
        } else if (r.aspect != 'retro') {
            r.aspect = 'retro ' + r.aspect
        }
    }

    //chance to make complex aspects like 'retro prog'
    if (r.aspect != 'simp' && r.aspect.indexOf(" ") < 0 && toss(probabilities.complex_aspects)) {
        var aspects = ['retro', 'prosp']
        _.pull(aspects, r.aspect)
        r.aspect = _.sample(aspects) + " " + r.aspect;
    }

    //remove forbidden aspects -------------------------------

    if (r.tense == 'pres') {
        //ban retroprosp & prospretro (reduce to single aspect)
        if (/retro prosp|prosp retro/.test(r.aspect)) {
            r.aspect = r.aspect.split(' ').pop()
        }
    }
    if (r.tense == 'fut') {
        //ban retro-everything and prosp-everything
        r.aspect = r.aspect.replace(/retro|prosp/, '')
    }

    if (/could|must|might|may/.test(text)) {
        //ban prospretro, prospprog
        r.aspect = r.aspect.replace('prosp ', '')
    }
    if (/should|would/.test(text)) {
        //ban prosp-everything
        r.aspect = r.aspect.replace('prosp', '')
    }

    if (pasv || r.copulant) {
        //ban retroprosp, retroprog and prospprog (reduce to single aspect)
        if (/retro prosp|retro prog|prosp prog/.test(r.aspect)) {
            r.aspect = r.aspect.split(' ').pop()
        }
        if (r.tense == 'fut') {
            //ban prog
            r.aspect = r.aspect.replace(/prog/, '')
        }
        if (r.mood != 'ind') {
            r.aspect = r.aspect.replace(/prosp|prog/, '')
        }
    }

    if (r.copulant && r.aspect == 'prog') r.aspect = 'simp'

    r.aspect = r.aspect.trim() || 'simp'

    // -------------------------------------------------------

    var aspect_functions = {
        retro: function () {
            last_bit = get($.extend({}, r2, {
                type: 'aux_verb',
                name: 'have'
            }))
            text += " " + (last_bit.inflected || last_bit.name)
            wellthen("retro")
        },
        prog: function () {
            last_bit = get($.extend({}, r2, {
                type: 'aux_verb',
                name: 'be'
            }))
            text += " " + (last_bit.inflected || last_bit.name)
            wellthen("prog")
        },
        prosp: function () {
            last_bit = get($.extend({}, r2, {
                type: 'aux_verb',
                name: 'be'
            }))
            text += " " + (last_bit.inflected || last_bit.name)
            wellthen()
            text += " going to"
        }
    }

    //produce the necessary text for one or two aspects, in order
    var aspex = r.aspect.split(' ')
    aspex.forEach(function (a) {
        if (a != 'simp') aspect_functions[a].call(this)
    })

    //passive or copula
    if (pasv == true || r.copulant) {
        last_bit = get($.extend({}, r2, {
            type: 'aux_verb',
            name: 'be'
        }))
        text += " " + (last_bit.inflected || last_bit.name)
        wellthen("retro")
    }

    //dummy 'do' for bare negative
    if (/^ *$/.test(text) && r.neg) {
        last_bit = get($.extend({}, r2, {
            type: 'aux_verb',
            name: 'do'
        }))
        text = (last_bit.inflected || last_bit.name) + " not"
        r2.noinflection = true
    }

    return $.extend(r, {
        'text': text,
        'noinflection': r2.noinflection,
        'aspect': r2.aspect,
        'real_aspect': r.aspect
    })
}

function VP(r) {

    return {
        order: "vword compcore* compext*",
        head: "vword",
        gap: [get, _.extend({
            type: 'aux_verb',
            name: 'do'
        }, r)],
        labelChildren: true,
        hasComplement: "compcore, compext",
        children: {
            vword: [V, {
                desc: 'verb'
            }],
            compcore: [complement, {
                case: 'acc',
                complements: 'vword.compcore',
                neg: r.neg,
                desc: 'complement'
            }],
            compext: [complement, {
                case: 'dat',
                complements: 'vword.compext',
                scope: 'compcore',
                neg: r.neg,
                pasv: false,
                trans: 'vword.trans',
                vtags: 'vword.vtags',
                desc: 'secondary complement'
            }]
        },
        restrictions: {
            subj_person: 'subject.person',
            subj_number: 'subject.number',
            subj_gender: 'subject.gender'
        }
    }
}

function V(r) {
    return {
        order: "verb_asp_tns_num",
        head: "verb",
        children: {
            verb: [get, {
                type: 'verb'
            }],
            asp: [aspect, 'verb'],
            tns: [tense, 'verb'],
            num: [V_NUM, 'verb']
        },
        postlogic: verb_cleanup
    }
}

//verb aspect morphology
function aspect(r) {
    decide(r, 'aspect')
    return {
        text: route(goodVal(r.inflected) || !!r.noinflection, {
            false: route(r.aspect, {
                prog: "ing"
            })
        })
    }
}

//verb tense morphology
function tense(r) {
    if (!goodVal(r.inflected) && !r.noinflection) {
        switch (r.aspect) {
        case 'simp':
            return {
                text: route(r.tense, {
                    past: "ed"
                })
            }
        case 'retro':
            return {
                text: 'ed'
            }
        }
    }
    return {
        text: ''
    }
}

//s inflection on verbs
function V_NUM(r) {
    return {
        text: route(r.number + r.person + r.aspect + r.tense + r.inflected, {
            sg3simppres: "s"
        })
    }
}

function verb_cleanup(text) {
    text = text.replace(/([^aeou])y_+s/, "$1ies") //change -ys to -ies
        .replace(/([^aeou])y_+ed/, "$1ied") //change -yed to -ied
        .replace(/([^e])e_+ing/, "$1ing") // -eing to -ing
        .replace(/e_+ed/, "ed") // -eed to -ed
        .replace(/\b([^aeiou]*[^aeio][aeiou])([^aeiouywx])_+(ed|ing)/, '$1$2$2$3') // -VCed or -VCing to -VCCxxx
        .replace(/(ch|sh|s|z|x)_+s\b/g, '$1es') // -s to -es
    return text
}

function WH_CLAUSE(r, c) {
    r = r || {}
    delete r.neg
    delete r.pasv

    var B = new branch(c || CLAUSE, _.extend(r, {
        number: 'sg'
    }))

    var gaps = []
    var wh

    if (toss()) {

        //why,how
        var Ws = ['how']
        if (c !== INF_PHRASE) Ws.push('why') //"why to" sounds wrong, so we avoid it this way
        wh = _.sample(Ws)

    } else {

        //what,who,whose,where
        function findGaps(branch) {
            if (branch.descend(['restrictions','nogap'])) return true //prevent noun complements and other things from partaking
            if (branch.gap) gaps.push(branch)
            if (branch.forceGap) return false //prevent gapping inside nested WHs, THAT_CLAUSEs, etc.
            //look for gaps in sub-branches
            if (branch.children) $.each(branch.children, (k,v)=> findGaps(v))
        }

        findGaps(B)
        var g = _.sample(gaps)
        var gapr = propertySearch(g, 'R')

        if (g.parent.children) g.parent.children[g.label] = new branch(g.gap[0], _.extend(g.gap[1], gapr))

        //whose
        if (g.label == 'gennoun') { //a lot of work for a very rare occurance!

            //do some reconstuctive surgery, moving the possessed NP out to the front of the whole clause
            var np = objectSearchCrazy(['gennoun', 'det'], g) //find the top np (it may be a crazy chain of genitive NPs)
            np.parent.order = np.parent.order.replace(np.label, '') //snip np out of its parent phrase
            g.parent.order = g.parent.order.replace("'s", '')
            delete np.parent.children[np.label] //snip np out of paren't children object, just in case
            B.order = np.label + "GEN " + B.order //preppend to clause order string
            B.children[np.label + 'GEN'] = np //add to clause children

            wh = 'whose'

            //what or who
        } else {
            wh = g.wh || ((gapr.anim != 3 || g.parent.label == 'predicate' || g.label == 'predicate') ? 'what' : 'who')
        }
    }

    B.order = wh + " " + B.order

    B.gap = [blank] //so meta!
    B.wh = 'what'
    B.forceGap = true //no nested WHs

    return B
}

function WH_INF(r) {
    return WH_CLAUSE(r, INF_PHRASE)
}

function WH_INF_CLAUSE(r) {
    return WH_CLAUSE(r, INF_CLAUSE)
}

function THAT_CLAUSE(r) {
    delete r.neg
    delete r.pasv
    delete r.vtags
    delete r.trans

    return {
        order: 'that clause',
        head: 'clause',
        forceGap: true,
        gap: [blank],
        wh: 'what',
        children: {
            clause: [SENTENCE, {
                matrix_class: 'predicate.class',
                matrix_tense: 'predicate.tense'
            } /*,_.pick(r, ['tense', 'mood', 'neg'])*/ ]
        }
    }
}

function INF_PHRASE(r) {
    return {
        order: 'to predicate',
        head: 'predicate',
        children: {
            predicate: [VP, {
                noinflection: true
            }]
        }
    }
}

//no "to"
function INF_PHRASE2(r) {
    return {
        order: 'predicate',
        head: 'predicate',
        children: {
            predicate: [VP, {
                noinflection: true
            }]
        }
    }
}

function INF_CLAUSE(r) {
    return {
        order: 'subject to predicate',
        head: 'subject',
        children: {
            subject: [NP, {
                nogap: true
            }],
            predicate: [VP, {
                noinflection: true,
                unpack: 'subject.R'
            }]
        }
    }
}

//no "to"
function INF_CLAUSE2(r) {
    return {
        order: 'subject predicate',
        head: 'subject',
        children: {
            subject: [NP, {
                nogap: true
            }],
            predicate: [VP, {
                noinflection: true,
                unpack: 'subject.R'
            }]
        }
    }
}

//gerund clause
function G_CLAUSE(r) {
    return {
        order: 'subject predicate',
        head: 'subject',
        children: {
            subject: [NP],
            predicate: [GP]
        }
    }
}

function GP(r) {

    //TODO: make this count as a singular NP, so sentences like "fighting was considered" can happen

    return {
        order: "ving compcore* compext*",
        head: "ving",
        actualHead: "ving",
        labelChildren: true,
        hasComplement: "compcore, compext",
        children: {
            ving: [V, {
                unpack: 'subject.R',
                aspect: 'prog',
                tense: 'pres',
                pasv: 'false',
                desc: 'gerund'
            }],
            compcore: [complement, {
                'case': 'acc',
                'complements': 'ving.compcore',
                'reset': true,
                desc: 'complement'
            }],
            compext: [complement, {
                'case': 'acc',
                'complements': 'ving.compext',
                'reset': true,
                desc: 'secondary complement'
            }]
        },
        postlogic: verb_cleanup
    }
}

function PRES_PARTICIPLE(r) {
    r.noinflection = false

    return {
        order: 'v_asp',
        head: 'v',
        children: {
            v: [get, {
                type: 'verb',
                class: 'activity,process',
                ptpl: 'pres',
                rank: 0
            }],
            asp: [aspect, {
                unpack: 'v'
            }]
        },
        restrictions: {
            aspect: 'prog'
        },
        postlogic: verb_cleanup
    }
}

//PAST_PARTICIPLE cannot be done, because it would require filtering verbs based on the content of their 'compcore', which would require special modifications to r_match()
//...or....Maybe auto-attributes could be derived for verbs with a compcore and then verbs could be filtered by those...

function ACTIVE_STUFF(r) {
    r.volition = true
    return choose(30, [GP], 15, [NOUN_INC])
}

function NOUN_INC(r) {
    return {
        order: 'incnoun - ving',
        head: 'ving',
        hasComplement: "inccomp",
        children: {
            ving: [V, {
                aspect: 'prog',
                tense: 'pres',
                trans: 1,
                pasv: false,
                class: 'activity,process'
            }],
            inccomp: [complement, {
                complements: 'ving.compcore',
                unique: 0
            }],
            incnoun: [get, {
                type: 'noun',
                name: 'inccomp.name',
                number: 'sg'
            }]
        },
        postlogic: function (text) {
            return text.replace(' - ', '-')
        }
    }
}

function ACTION(r) {

    //TODO: this should probably be definite or generic (eating of pizza, eating of the pizzas, NOT eating of a/12/some pizza )

    return {
        order: 'the ving actcomp',
        head: 'ving',
        labelChildren: true,
        hasComplement: "actcomp",
        children: { //quick fix to avoid messy verbs in lexicon
            ving: [V, {
                aspect: 'prog',
                tense: 'pres',
                pasv: 'false',
                ptpl: '!null',
                desc: 'gerund'
            }],
            actcomp: [ACTION_PT2, {
                trans: 'ving.trans',
                desc: 'complement'
            }]
        },
        postlogic: function (text) {
            return text.replace(/of\s*$/, '') //remove trailing 'of' if there is no complement
        },
        number: 'sg',
        person: 3 //this construction must be treated as a noun, at least for passive clauses to work right
    }
}

function ACTION_PT2(r) {

    var comp //= r.trans > 0.5
    var of = 'of '

    switch (r.trans) {
    case 0:
        //intransitive verbs use the subject (running of the bulls)
        comp = [NP, {
            unpack: 'ving.R'
        }]
        break
    case 0.5:
        //'semi-transitive' verbs get nothing (*arguing of with John )
        //comp = [filler, {filler:''}]
        //actually, just treat them like intransitive
        comp = [NP, {
            unpack: 'ving.R'
        }]
        break
    default:
        //transitive verbs use the object (eating of the pizza)
        comp = [complement, {
            complements: 'ving.compcore',
            nocomplement: -1
        }]
    }

    comp[1] = _.extend(comp[1], {
        case: 'acc',
        pronominal: false,
        person: 3
    })

    return {
        order: of + 'actcomp*',
        head: 'actcomp',
        children: {
            actcomp: comp
        }
    }
}

function ADJUNCT_PP(r) {

    if (magicCompare(r.vtags, 'activity&!motion', {
            every: true
        }) && toss(0.3)) return [LOCATION]
    else return [blank]
}


function LOCATION(r) {
    //return {text: _.sample(['there','here','somewhere','everywhere'])}

    // trajector is subject of "intransitive" verb and direct object of "transitive" verb
    // TODO: for some reason compcore end up being empty when searching for compcore.size
    var trajector = r.trans < 1 || r.pasv ? {
            unpack: 'subject.R',
            type: 'noun',
            name: 'subject'
        } : {
            unpack: 'compcore.R',
            type: 'noun',
            name: 'compcore'
        }
        //var trajector = {unpack: 'subject.R', type:'noun', name:'subject'}

    return {
        order: "prep lm",
        head: "trajector",
        actualHead: "prep",
        labelChildren: true,
        hasComplement: "lm",
        children: {
            trajector: [pass_through, trajector],
            prep: [get, _.extend(r, {
                type: 'preposition',
                role: 'LOC',
                desc: 'p'
            })],
            lm: [DP, {
                case: 'dat',
                number: 'sg', //plural could be allowed for some prepositions (around, among...)
                quantified: false,
                partial: false,
                tags: '!feature',
                desc: 'landmark'
            }]
        }
    }
}

function SOURCE(r) {
    r.role = 'SOURCE'
    return MOTION(r)
}

function PATH(r) {
    r.role = 'PATH'
    return MOTION(r)
}

function GOAL(r) {
    r.role = 'GOAL'
    return MOTION(r)
}

function DIR(r) {
    r.role = 'DIR'
    return MOTION(r)
}

function MOTION(r) {

    //return {text: _.sample(['there','here','somewhere','everywhere'])}

    var lmr = {}

    if (magicCompare(r.vtags, 'generalMotion')) {
        delete r.vtags
    }
    if (!r.role) {
        if (toss(0.05)) { //chance for multiple motion PPs
            r.multicomp = true;
            return choose(
                1, [complement, _.extend(r, {
                    complements: 'SOURCE GOAL'
                })],
                //1, [complement, _.extend(r,{complements: 'SOURCE PATH'})], //this one doesn't work so good
                1, [complement, _.extend(r, {
                    complements: 'PATH GOAL'
                })]
            )
        } else {
            r.role = options('(GOAL|PATH|SOURCE)')
        }
    }
    if (r.role != 'PATH') {
        //GOALs and SOURCEs should not have quantified landmarks
        lmr = {
            quantified: false,
            partial: false
        }
    }

    // trajector is subject of "intransitive" verb and direct object of "transitive" verb
    // TODO: for some reason compcore end up being empty when searching for compcore.size
    var trajector = r.trans < 1 || r.pasv ? {
        unpack: 'subject.R',
        type: 'noun',
        name: 'subject'
    } : {
        unpack: 'compcore.R',
        type: 'noun',
        name: 'compcore'
    }

    return {
        order: "prep lm",
        head: "trajector",
        actualHead: "prep",
        gap: [blank],
        wh: "where",
        labelChildren: true,
        hasComplement: "lm",
        children: {
            trajector: [pass_through, trajector],
            prep: [get, _.extend(r, {
                type: 'preposition',
                role: r.role,
                desc: 'p'
            })], //, pasv: 'predicate.pasv'
            lm: [DP, _.extend(lmr, {
                case: 'dat',
                number: 'sg',
                tags: '!feature',
                desc: 'landmark'
            })]
        }
    }
}

function TITLE(r) {
    r.type = 'title'
    return [get, r]
}


/////////////////////////////////////////////////////////////////////

function filler(r) {
    return _.extend(r, {
        text: r.filler
    })
}

function blank(r) {
    return _.extend(r, {
        text: ""
    })
}

function pass_through(r) {
    return r
}

function ALLYOURBASE() {
    return {
        text: "ALL YOUR BASE ARE BELONG TO US"
    }
}
