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
    {name: 'through',   class: 'PATH',   vtags: 'grounded',  tags: 'area|surface&vertical|passage&!vertical|obstacle & !elevated'},
    {name: 'through',   class: 'PATH',   vtags: 'contact',   tags: 'area|passage|obstacle'},
    {name: 'through',   class: 'PATH',   vtags: 'air',       tags: 'gas|space|passage|obstacle&!grounded'},
    {name: 'through',   class: 'PATH',   vtags: 'jump',      tags: 'surface&vertical|passage&!path|obstacle&delimited&!grounded'},
    {name: 'through',   class: 'PATH',   vtags: 'vertical',  tags: 'passage&vertical'},
    {name: 'through',   class: 'PATH',   vtags: 'water',     tags: 'liquid|bodyOfWater'},
    
    {name: 'across',    class: 'PATH',   vtags: 'grounded',  tags: 'surface&!bodyOfWater|path|boundary|bridge & !vertical'},
    {name: 'across',    class: 'PATH',   vtags: 'contact',   tags: 'surface|path|boundary|bridge'},
    {name: 'across',    class: 'PATH',   vtags: 'air',       tags: 'surface&!vertical|path|boundary|bridge|volume'},
    {name: 'across',    class: 'PATH',   vtags: 'jump',      tags: 'surface&!vertical|path|boundary|bridge'},
    {name: 'across',    class: 'PATH',   vtags: 'waterSurface',  tags: 'bodyOfWater'},
    
    {name: 'over',      class: 'PATH',   vtags: 'grounded',  tags: 'boundary|edge|bridge|prominence'}, //what about low stuff
    {name: 'over',      class: 'PATH',   vtags: 'contact',   tags: 'boundary|edge|bridge|prominence'}, //
    {name: 'over',      class: 'PATH',   vtags: 'air',       tags: 'thing|place'},
    {name: 'over',      class: 'PATH',   vtags: 'jump',      tags: 'thing'},
    
    {name: 'up',        class: 'PATH',   vtags: 'grounded',  tags: 'path&!vertical|incline', volition: 1},
    {name: 'up',        class: 'PATH',   vtags: 'contact',   tags: 'path|incline|passage&vertical', volition: 1},
    {name: 'up',        class: 'PATH',   vtags: 'vertical',  tags: 'path&vertical|incline|passage&vertical', volition: 1},
    {name: 'up',        class: 'PATH',   vtags: 'water',     tags: 'path & liquid|bodyOfWater', volition: 1},
    {name: 'up',        class: 'PATH',   vtags: 'waterSurface',  tags: 'path & bodyOfWater', volition: 1},
        
    {name: 'down',      class: 'PATH',   vtags: 'grounded',  tags: 'path&!vertical|incline'},
    {name: 'down',      class: 'PATH',   vtags: 'contact',   tags: 'path|incline|passage&vertical'},
    {name: 'down',      class: 'PATH',   vtags: 'vertical',  tags: 'path&vertical|incline|passage&vertical'},
    {name: 'down',      class: 'PATH',   vtags: 'water',     tags: 'path & liquid|bodyOfWater'},
    {name: 'down',      class: 'PATH',   vtags: 'waterSurface',  tags: 'path & bodyOfWater'},
    
    {name: 'along',     class: 'PATH',   vtags: 'grounded',  tags: 'path|edge|boundary & !vertical'},
    {name: 'along',     class: 'PATH',   vtags: 'contact',   tags: 'path|edge|boundary'},
    
    {name: 'around',    class: 'PATH',   vtags: 'grounded|contact|air',          tags: 'bounded'},
    
    {name: 'past',      class: 'PATH',   vtags: 'grounded|contact|air|jump',     tags: 'PHYSICAL'},
    {name: 'past',      class: 'PATH',   vtags: 'vertical',                      tags: 'elevated'},
    
    {name: 'by',        class: 'PATH',   vtags: 'grounded|contact|air',          tags: 'PHYSICAL'}
    
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

    pronominal: [1,true,8,false], //how likely a NP is to be a pronoun instead

    //nounish
    number: [1,'pl', 3,'sg'],
    def: [3,'def', 1,'indef'],
    proper: [2,true, 7,false],
    partial: [1,'', 1,'partial'],
    quantified: [0.3, true, 0.7, false],

    //pronominal
    person: [1,1, 1,2, 7,3],
    gender: [2,'m', 2,'f', 1,'n'],
    dem: [2,true,5,false],
    prox: [1,'prox', 1,'dist'],

    //verby
    tense: [4, 'pres', 8, 'past', 1, 'fut'],
    aspect: [8, 'simp', 4, 'prog', 2, 'retro', 1, 'retroprog', 1.5, 'prosp'],
    neg: [6, false, 1, true],
    mood: [1,'deontic', 6,'other']
}
