/***************** Word attributes *****************\
* General *
name: the actual word
inflections: para.digm:exception[, para.digm:exception]
prohibitions: like inflections, also whatever:(val1|val2|val3)[,whatever:(val1|val2|val3)]

* Verbs *
trans: 0, 1, 2
anim: 0 (abstract), 1 (physical), 2 (tangible), 3 (animate), 4 (sentient)
class: state, activity, event, semel, process

* Nouns *


\***************************************************/
var templates = {
	general: {name: '', inflections: '', prohibitions: '', tags: ''},
	verb: {class: '', trans: '', anim: ''},
	noun: {anim: '', proper:'', gender: ''},
	adjective: {anim: '', rank:''}
}

function loadLexicon(type){

    var d = $.Deferred();

    $.get("csv/"+type+"s.csv", function(data){
        database[type] = CSV2JSON(data).slice(0, -1);
        for (var x in database[type]) {
            var a = database[type][x]

            $.each(a, function(b,val){
                //turn numbers and boolean into the real things
                a[b] = toNumBool(val)
            })

            if (a.proto) {
                prune(a)
                //a.__proto__ = pickOne(database[type], {name: a.proto})
                a = database[type][x] = setPrototypeOf(a, pickOne(database[type], {name: a.proto}) )
                if (Object.getPrototypeOf(a) === Object.prototype) //didn't take
                    error('Prototype"' + a.proto + '"could not be found for'+a.name+'.')
            }
        }

        d.resolve();
    })
    
    return d
}


var database = { verb: [],noun: [], adjective: [] }

var paradigms = {
		verb: {tense: ['past','pres','fut'], number: ['sg','pl'], person: [1,2,3], aspect: ['simp', 'prog', 'retro', 'retroprog']},
		noun: {number: ['pl', 'sg'], def: [true,false]},
		pronoun: {case: ['nom', 'acc'], number: ['sg', 'pl'], person: [1,2,3], gender: ['m', 'f', 'n']}
}

//universal prohibitions
var prohibitions = {

    //verb
    aspect: {
        prog: {class: 'state,event,semel'},
        retroprog: {class: 'state,event,semel'}
    },
    tense: {
        //future: {aspect: 'retro', class: 'state'} //just tends to sound too awkward
    },

    //noun
    number: {
        pl: {proper: true, count: '0,1'},
        //sg: {proper: true, anim: 3} //JUST A TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!
    },

}

//default probabilities for paradigms (used by "decide()")
var probabilities = {
    //general
    anim: [1,0, 2,1, 5,2, 5,3],
    tang: [1,0, 1,1, 2,2],

    //nounish
    number: [1,'pl', 3,'sg'],
    def: [2,true, 1,false],
    proper: [2,true, 7,false],
    
    //pronominal
    person: [1,1, 1,2, 5,3],
    
    //verby
    tense: [3, 'pres', 6, 'past', 1, 'fut'],
    aspect: [8, 'simp', 4, 'prog', 2, 'retro', 1, 'retroprog', 2, 'prosp'],
    neg: [5, false, 1, true]
}
