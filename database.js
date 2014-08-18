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
        database[type].forEach(function(a){
            $.each(a, function(b,val){
                //turn numbers and boolean into the real things
                if (/^(-?[0-9.]+|false|true)$/i.test(val)) a[b] = JSON.parse(val.toLowerCase())
            })

            if (a['proto']) {
                prune(a)
                a.__proto__ = pickOne(database[type], {name: a['proto']})
                if (a.__proto__ === Object.prototype) //didn't take
                    error('Prototype"' + pro + '"could not be found for'+obj.name+'.')
            }
        })

        d.resolve();
    })
    
    return d
}


var database = {verb: [],noun: []
    ,
	adjective: [
		{name: "big", rank: 6},
		{name: "nice", rank: 7},
		{name: "old", rank: 1},
		{name: "shiny", rank: 5, anim: '>0'},
		{name: "strange", rank: 6},
		{name: "bad", rank: 5},
		{name: "red", rank: 0, anim: '>0'},
		{name: "clever", rank: 3, anim: '>2'},
        {name: "outrageous", rank: 3},
        {name: "boring", rank: 3},
        {name: "fuzzy", rank: 1, anim: '>1&<4'},
        {name: "oblong", rank: 1, anim: 2},
        {name: "friendly", rank: 2, anim: '>2'},
        {name: "special", rank: 5},
        {name: "naive", rank: 2, anim: '>2'},
        {name: "nervous", rank: 1, anim: 4},
        {name: "pretentious", rank: 2, anim: 4},
        {name: "ugly", rank: 2, anim: '>0'},
        {name: "average", rank: 6},
        {name: "fake", rank: 4, anim: '>0'},
        {name: "wooden", rank: -2, anim: 2},
        {name: "Canadian", rank: -1, anim: '>0'},
        {name: "perfect", rank: 5},
        {name: "delicious", rank: 5, anim: '>0'}
            //{name: "expensive", rank: }
	]
}

var paradigms = {
		verb: {tense: ['past','pres','fut'], number: ['sg','pl'], person: [1,2,3], aspect: ['simp', 'prog', 'retro', 'retroprog']},
		noun: {number: ['pl', 'sg']},
		pronoun: {case: ['nom', 'acc'], number: ['sg', 'pl'], person: [1,2,3], gender: ['m', 'f']}
}

//universal prohibitions
var prohibitions = {
	verb: {
		aspect: {
			prog: {class: 'state'},
			retroprog: {class: 'state'}
		},
        tense: {
            //future: {aspect: 'retro', class: 'state'} //just tends to sound too awkward
        }
	},
	noun: {
		number: {
			pl: {proper: true}	
		}	
	}
}

//default probabilities for paradigms (used by "decide()")
var probabilities = {
    //nounish
    number: [1,'pl', 3,'sg'],
    def: [3,true, 2,false],
    proper: [1,true, 2,false],
    
    //pronominal
    person: [1,1, 1,2, 4,3],
    
    //verby
    tense: [2, 'pres', 4, 'past', 1, 'fut'],
    aspect: [8, 'simp', 4, 'prog', 2, 'retro', 1, 'retroprog']
}
