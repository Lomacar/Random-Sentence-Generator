database.aux_verb = [
    { "name": "be", "inflections": "simp.past:were, simp.past.sg:was, simp.past.sg.2:were, simp.pres: are, simp.pres.sg.1: am, simp.pres.sg.3:is, retro:been, retroprog:being, prog:being"},
    { "name": "do", "inflections": "simp.pres.sg.3:does, simp.past:did, retro: done, retroprog:doing, prog:doing"},
    { "name": "have", "inflections": "simp.past:had, simp.pres.sg.3:has, retro:had"}
]

database.quantifier = [
    {name: 'a lot', prequant: true},
    {name: 'heaps', prequant: true},
    {name: 'tons', prequant: true},
    {name: 'plenty', prequant: true},
    {name: 'a bunch', prequant: true},
    {name: 'none', prequant: true, def:'def'},
    {name: 'no', prequant: false, neg: false},

    {name: 'any', prequant: false, neg: true},
    {name: 'any', prequant: true, def:'def', neg: true},

    {name: 'enough', prequant: false},
    {name: 'enough', prequant: true, def:'def'},
    //{name: 'not enough', prequant: false},
    //{name: 'not enough', prequant: true, def:'def'},
    {name: 'most', prequant: false},
    {name: 'most', prequant: true, def:'def'},
    {name: 'some', prequant: false},
    {name: 'some', prequant: true, def:'def'},
    {name: 'all', prequant: false},
    {name: 'all', prequant: true, def:'def'},

    {name: 'numerous', prequant: false, count: 1},
    {name: 'a couple', prequant: true, count: 1},

    {name: 'a few', prequant: false, count: 1},
    {name: 'a few', prequant: true, def:'def', count: 1},
    {name: 'each', prequant: false, number: 'sg', count: 1},
    {name: 'each', prequant: true, def:'def', count: 1},
    {name: 'both', prequant: false, count: 1},
    {name: 'both', prequant: true, def:'def', count: 1},
    {name: 'several', prequant: false, count: 1},
    {name: 'several', prequant: true, def:'def', count: 1},
    {name: 'many', prequant: false, count: 1},
    {name: 'many', prequant: true, def:'def', count: 1},
    {name: 'a number', prequant: true, count: 1},
    {name: 'dozens', prequant: true, count: 1},
    {name: 'hundreds', prequant: true, count: 1},

    {name: 'much', prequant: false, count: 0},
    {name: 'much', prequant: true, def:'def', count: 0},
    //{name: 'too much', prequant: false, count: 0},
    //{name: 'too much', prequant: true, def:'def', count: 0},
    //{name: 'too much', prequant: false, count: 0},
    //{name: 'too much', prequant: true, def:'def', count: 0},
    {name: 'a little', prequant: false, count: 0},
    {name: 'a little', prequant: true, def:'def', count: 0},
    //{name: 'too little', prequant: false, count: 0},
    //{name: 'too little', prequant: true, def:'def', count: 0},

    {name: 'a bit', prequant: true, count: 0}
]

database.preposition = [
    {name: 'through',   role: 'PATH',   vtags: 'grounded',      tags: 'area|surface&vertical&!edge|passage&!vertical&!elevated|obstacle&!elevated'},
    {name: 'through',   role: 'PATH',   vtags: 'contact',       tags: 'area|passage|obstacle'},
    {name: 'through',   role: 'PATH',   vtags: 'air',           tags: 'gas|space|passage|obstacle&!grounded'},
    {name: 'through',   role: 'PATH',   vtags: 'jump',          tags: 'surface&vertical&!edge|passage&!path&!vertical|obstacle&delimited&!grounded'},
    {name: 'through',   role: 'PATH',   vtags: 'vertical',      tags: 'passage&vertical'},
    {name: 'through',   role: 'PATH',   vtags: 'water',         tags: 'liquid|bodyOfWater'},
    
    {name: 'across',    role: 'PATH',   vtags: 'grounded',      tags: 'area|surface|path|boundary|bridge & !bodyOfWater & !vertical'}, 
    {name: 'across',    role: 'PATH',   vtags: 'contact',       tags: 'area|surface|path&!vertical|boundary'},
    {name: 'across',    role: 'PATH',   vtags: 'air',           tags: 'area|surface|path|boundary|volume&gas & !vertical'},
    {name: 'across',    role: 'PATH',   vtags: 'jump',          tags: 'surface|path|boundary & !vertical'},
    {name: 'across',    role: 'PATH',   vtags: 'waterSurface',  tags: 'bodyOfWater'},
    
    {name: 'over',      role: 'PATH',   vtags: 'grounded',      tags: 'boundary|edge|bridge|prominence'}, //what about low stuff
    {name: 'over',      role: 'PATH',   vtags: 'contact',       tags: 'boundary|edge|bridge|prominence'}, //
    {name: 'over',      role: 'PATH',   vtags: 'air',           tags: 'thing|place'},
    {name: 'over',      role: 'PATH',   vtags: 'jump',          tags: 'thing'},
    {name: 'over',      role: 'PATH',   vtags: 'down',          tags: 'edge'},
    {name: 'over',      role: 'PATH',   vtags: 'waterSurface',  tags: 'openWater'},
    
    {name: 'up',        role: 'PATH',   vtags: 'grounded',      tags: 'path&!vertical&!bodyOfWater|incline', volition: 1},
    {name: 'up',        role: 'PATH',   vtags: 'contact',       tags: 'path&!bodyOfWater|incline|passage&vertical', volition: 1},
    {name: 'up',        role: 'PATH',   vtags: 'up',            tags: 'path&vertical|passage&vertical', volition: 1},
    {name: 'up',        role: 'PATH',   vtags: 'water',         tags: 'path & liquid|bodyOfWater', volition: 1},
    {name: 'up',        role: 'PATH',   vtags: 'waterSurface',  tags: 'path & bodyOfWater', volition: 1},
        
    {name: 'down',      role: 'PATH',   vtags: 'grounded',      tags: 'path&!vertical|incline'},
    {name: 'down',      role: 'PATH',   vtags: 'contact',       tags: 'path|incline|passage&vertical'},
    {name: 'down',      role: 'PATH',   vtags: 'down',          tags: 'path&vertical|incline|passage&vertical'},
    {name: 'down',      role: 'PATH',   vtags: 'water',         tags: 'path & liquid|bodyOfWater'},
    {name: 'down',      role: 'PATH',   vtags: 'waterSurface',  tags: 'path & bodyOfWater'},
    
    {name: 'along',     role: 'PATH',   vtags: 'grounded',      tags: 'path|perimeter|edge|boundary & !vertical'},
    {name: 'along',     role: 'PATH',   vtags: 'contact',       tags: 'path|perimeter|edge|boundary'},
    
    {name: 'around',    role: 'PATH',   vtags: 'grounded|contact|air',          tags: 'bounded'},
    
    {name: 'past',      role: 'PATH',   vtags: 'grounded|contact|air|jump',     tags: 'PHYSICAL'},
    {name: 'past',      role: 'PATH',   vtags: 'vertical',                      tags: 'elevated'},
    
    {name: 'by',        role: 'PATH',   vtags: 'grounded|contact|air',          tags: 'PHYSICAL', pasv: false},
    
    //////////////////////////////////////////
    
    {name: 'onto',      role: 'GOAL',   vtags: 'grounded|contact',          tags: 'surface&!elevated&!vertical'},
    {name: 'onto',      role: 'GOAL',   vtags: 'air|jump|vertical',         tags: 'surface|object'}, //TODO: size:>subject.size
    {name: 'onto',      role: 'GOAL',   vtags: 'grounded|contact|air|jump', tags: 'passengerVehicle'},
    {name: 'onto',      role: 'GOAL',   vtags: 'waterSurface',              tags: 'openWater'},
    
    {name: 'into',      role: 'GOAL',   vtags: 'grounded',                          tags: 'area|volume&!elevated'}, //TODO: container->bounded volume?
    {name: 'into',      role: 'GOAL',   vtags: 'contact|air|water|jump',            tags: 'area|volume'}, //TODO: container->bounded volume?
    {name: 'into',      role: 'GOAL',   vtags: 'waterSurface',                      tags: 'area'},
    {name: 'into',      role: 'GOAL',   vtags: 'up',                                tags: 'volume&elevated|gas'},
    
    {name: 'to',        role: 'GOAL',   vtags: 'grounded|contact|water|waterSurface',   tags: 'fixed|occasion'}, //TODO: other things?
    {name: 'to',        role: 'GOAL',   vtags: 'down',                                  tags: 'bottom|surface&grounded'},
    
    {name: 'under',     role: 'GOAL',   vtags: 'grounded|contact|air|jump',             tags: 'object&!grounded'},
    
    {name: 'behind',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',        tags: 'thing'},
    
    {name: 'beside',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',        tags: 'thing'},
    
    {name: 'in front of',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',   tags: 'thing'},
    
    {name: 'on top of',     role: 'GOAL',     vtags: 'grounded|contact|air|jump|down',  tags: 'object|incline|prominence'},
    
]

var paradigms = {
	verb: {tense: ['past','pres','fut'], number: ['sg','pl'], person: [1,2,3], aspect: ['simp', 'prog', 'retro', 'retroprog']},
	aux_verb: {tense: ['past','pres','fut'], number: ['sg','pl'], person: [1,2,3], aspect: ['simp', 'prog', 'retro', 'retroprog']},
    noun: {number: ['pl', 'sg'], def: ['def','indef'], quantified: [true,false], person: [1,2,3]},
	pronoun: {case: ['nom', 'acc','gen','reflex'], number: ['sg', 'pl'], person: [1,2,3], gender: ['m', 'f', 'n']}
}

for (type in dbkeys) {
    if (paradigms[type]){
        dbkeys[type] = dbkeys[type].concat(_.keys(paradigms[type]))
    }
}

//universal prohibitions
var prohibitions = {

    //verb
    aspect: {
        prog: {class: 'state,event,semel', perm: true, pasv:true},
        retroprog: {class: 'state,event,semel', perm: true, pasv:true},
        retro: {perm: true},
        prosp: {volition: false}
    },
    tense: {
        //future: {aspect: 'retro', class: 'state'} //just tends to sound too awkward
    },
    mood: {
        deontic: {volition: false, anim:'<2'}
    },

    //noun
    number: {
        pl: {count: false},
    },
    subj_def: {
        indef: {class: 'state'}
    }

}

//default probabilities for paradigms ( used by decide() )
var probabilities = {
    //general
    anim: [1,0, 1,1, 4,2, 5,3],
    tang: [1,0, 1,1, 2,2],

    pronominal: [1,true,25,false], //how likely a NP is to be a pronoun instead

    //nounish
    number: [1,'pl', 3,'sg'],
    def: [3,'def', 1,'indef'],
    proper: [2,true, 7,false],
    partial: [1,'', 1,'partial'],
    quantified: [0.3, true, 0.7, false],

    //pronominal
    person: [1,1, 1,2, 25,3],
    gender: [3,'m', 3,'f', 1,'n'],
    dem: [2,true,5,false],
    prox: [1,'prox', 1,'dist'],

    //verby
    tense: [4, 'pres', 8, 'past', 1, 'fut'],
    aspect: [10, 'simp', 5, 'prog', 2, 'retro', 1, 'retroprog', 2, 'prosp'],
    neg: [6, false, 1, true],
    mood: [1,'deontic', 6,'other']
}
