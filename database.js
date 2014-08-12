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
	general: {name: '', inflections: '', prohibitions: ''},
	verb: {class: '', trans: '', anim: ''},
	noun: {anim: '', proper:'', gender: ''},
	adjective: {anim: '', rank:''}
}

var database = {
	verb: $.get("nouns.csv", function(data){
	    return CSV2JSON(data).pop();
    })
    
    /*[
		{name: "be", trans: 1, anim1: 0, anim2: 0, class: "state",
            complements: "1,A",
			inflections: 
				  "simp.past:were, simp.past.sg:was, simp.past.sg.2:were, "
				+ "simp.pres: are, simp.pres.sg.1: am, simp.pres.sg.3:is, "
				+ "retro:been, retroprog:being, prog:being"
		},
		{name: "have", trans: 1, anim1: 1, anim2: 0, class: "state", 
			inflections: 
				  "simp.past:had, simp.pres.sg.3:has, "
				+ "retro:had"
		},
		{name: "walk", arg1: "anim:3<", class: "activity"}
		{name: "walk", trans: 0, anim1: 3, class: "activity", complements: "0.85, to NP{case:acc}"},
		{name: "skate", trans: 0, anim1: 3, class: "activity"},
        {name: "erupt", trans: 0, anim1: 2, class: "activity"},
		{name: "snap", trans: 0, anim1: 2, class: "event"},
		{name: "melt", trans: 0, anim1: 2, class: "process"},
        {name: "read", trans: 1, anim1: 4, class: "process", complements: "1, N", inflections: "simp.past:read, retro:read"}, //TODO: anim2: <3 >1?
		{name: "shoot", trans: 1, anim1: 4, anim2: 2, class: "event", inflections: "simp.past:shot, retro:shot"},
		{name: "see", trans: 1, anim1: 3, anim2: 1, class: "state", inflections: "simp.past:saw, retro:seen"},
		{name: "know", trans: 1, anim1: 3, anim2: 0, class: "state", complements: "0.2, how to VP{tense: pres; aspect: simp; person: 1}, 0.8, that CLAUSE", inflections: "simp.past:knew, retro:known"},
		{name: "believe", trans: 1, anim1: 4, anim2: 4, class: "state"},
        {name: "answer", trans: 1, anim1: 4, anim2: 4, class: "event", inflections:"prog:answering, simp.past:answered, retro:answered"},
        {name: "smoke", trans: 1, anim1: 4, class: "activity"}, //TODO: anim2: <3 >1?
        {name: "tickle", trans: 1, anim1: 3, anim2: 3, class: "activity"},
		{name: "fight", trans: 1, anim1: 3, anim2: 3, class: "activity", inflections: "simp.past:fought, retro:fought"},
        {name: "give", anim1: 4, class: "event", complements: "1, DP/to NP{case:acc; anim:1}", inflections: "simp.past:gave, retro:given"}
	]*/,	
	noun: [
		{name: "Jack", proper: true, anim: 4, gender: 'm'},
		{name: "the Canucks", proper: true, anim: 4, prohibitions:'number:sg,proper:'},
		{name: "the Borg", proper: true, anim: 3, prohibitions:'number:sg,proper:'},
		{name: "queen", proper: false, anim: 4, gender: 'f'},
		{name: "Aunt Jemima", proper: true, anim: 4, gender: 'f'},
		{name: "New York", proper: true, anim: 2},
		{name: "mother", proper: false, anim: 4, gender: 'f'},
		{name: "child", proper: false, anim: 4, inflections: "pl:children"},
		{name: "wolf", proper: false, anim: 3, inflections: "pl:wolves"},
		{name: "house", proper: false, anim: 2},
		{name: "poison", proper: false, anim: 2},
		{name: "bee", proper: false, anim: 3},
		{name: "dinosaur", proper: false, anim: 3},
		{name: "belly", proper: false, anim: 2},
		{name: "toy", proper: false, anim: 2},
		{name: 'color', proper: false, anim: 1},
		{name: 'idea', proper: false, anim: 0},
		{name: 'category', proper: false, anim: 0},
        {name: 'law', proper: false, anim: 0},
		{name: 'sensation', proper: false, anim: 1}
	],
	adjective: [
		{name: "big", rank: 6},
		{name: "nice", rank: 7},
		{name: "old", rank: 1},
		{name: "shiny", rank: 5, anim: 1},
		{name: "strange", rank: 6},
		{name: "bad", rank: 5},
		{name: "red", rank: 0, anim: 1},
		{name: "clever", rank: 3, anim: 3},
        {name: "outrageous", rank: 2},
        {name: "boring", rank: 2},
        {name: "fuzzy", rank: 1, anim: 1},
        {name: "oblong", rank: 1, anim: 2},
        {name: "friendly", rank: 2, anim: 3},
        {name: "special", rank: 5},
        {name: "naive", rank: 2, anim: 4},
        {name: "nervous", rank: 1, anim: 4},
        {name: "pretentious", rank: 2, anim: 4},
        {name: "ugly", rank: 2, anim: 1},
        {}//{name: "expensive", rank: }
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
    
    //pronominal
    person: [1,1, 1,2, 4,3],
    
    //verby
    tense: [2, 'pres', 4, 'past', 1, 'fut'],
    aspect: [8, 'simp', 4, 'prog', 2, 'retro', 1, 'retroprog']
}