database.aux_verb = [
    { "name": "be", "inflections": "simp.past:were, simp.past.sg:was, simp.past.sg.2:were, simp.pres: are, simp.pres.sg.1: am, simp.pres.sg.3:is, retro:been, retroprog:being, prog:being"},
    { "name": "do", "inflections": "simp.pres.sg.3:does, simp.past:did, retro: done, retroprog:doing, prog:doing"},
    { "name": "have", "inflections": "simp.past:had, simp.pres.sg.3:has, retro:had"}
]

database.quantifier = [
    {name: 'a lot', prequant: true},
    {name: 'heaps', prequant: true},
    {name: 'tons', prequant: true},
    //{name: 'plenty', prequant: true},
    {name: 'a bunch', prequant: true},
    //{name: 'none', prequant: true, def:'def'},
    //{name: 'no', prequant: false, neg: false},

    {name: 'any', prequant: false, neg: true},
    {name: 'any', prequant: true, def:'def', neg: true},

    //{name: 'enough', prequant: false},
    //{name: 'enough', prequant: true, def:'def'},
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
    //at,in,on,under,underneath,below,beneath,between,near,next to,far from,away from,in front of, beside,by, behind, inside, among, amid
    {name: 'at',    role: 'LOC', 'lm.tags': 'point|line|site'},
    //{name: 'in',    role: 'LOC', 'lm.tags': 'bodyOfWater'},
    //{name: 'on',    role: 'LOC', 'lm.tags': 'bodyOfWater'},

    //////////////////////////////////////////////////////////////////////////////////

    {name: 'through',   role: 'PATH',   vtags: 'grounded',     'lm.tags': 'area|surface&vertical&!edge|passage&!vertical&!elevated|obstacle&!elevated'},
    {name: 'through',   role: 'PATH',   vtags: 'contact',      'lm.tags': 'area|passage|obstacle'},
    {name: 'through',   role: 'PATH',   vtags: 'air',          'lm.tags': 'gas|space|passage|obstacle&!grounded'},
    {name: 'through',   role: 'PATH',   vtags: 'jump',         'lm.tags': 'surface&vertical&!edge|passage&!path&!vertical|obstacle&delimited&!grounded'},
    {name: 'through',   role: 'PATH',   vtags: 'vertical',     'lm.tags': 'passage&vertical'},
    {name: 'through',   role: 'PATH',   vtags: 'water',        'lm.tags': 'liquid|bodyOfWater'},
    
    {name: 'across',    role: 'PATH',   vtags: 'grounded',     'lm.tags': 'area|surface|path|boundary|bridge & !bodyOfWater & !vertical'}, 
    {name: 'across',    role: 'PATH',   vtags: 'contact',      'lm.tags': 'area|surface|path&!vertical|boundary'},
    {name: 'across',    role: 'PATH',   vtags: 'air',          'lm.tags': 'area|surface|path|boundary|volume&gas & !vertical'},
    {name: 'across',    role: 'PATH',   vtags: 'jump',         'lm.tags': 'surface|path|boundary & !vertical'},
    {name: 'across',    role: 'PATH',   vtags: 'waterSurface', 'lm.tags': 'bodyOfWater'},
    
    {name: 'over',      role: 'PATH',   vtags: 'grounded',     'lm.tags': 'boundary|edge|bridge|prominence'}, //what about low stuff
    {name: 'over',      role: 'PATH',   vtags: 'contact',      'lm.tags': 'boundary|edge|bridge|prominence'}, //
    {name: 'over',      role: 'PATH',   vtags: 'air',          'lm.tags': 'thing|place'},
    {name: 'over',      role: 'PATH',   vtags: 'jump',         'lm.tags': 'thing'},
    {name: 'over',      role: 'PATH',   vtags: 'down',         'lm.tags': 'edge'},
    {name: 'over',      role: 'PATH',   vtags: 'waterSurface', 'lm.tags': 'openWater'},
    
    {name: 'around',    role: 'PATH',   vtags: 'grounded',     'lm.tags': 'PHYSICAL&!elevated'},
    {name: 'around',    role: 'PATH',   vtags: 'contact|air',      'lm.tags': 'PHYSICAL'},
    {name: 'around',    role: 'PATH',   vtags: 'water|waterSurface',   'lm.tags': 'PHYSICAL'},

    {name: 'up',        role: 'PATH',   vtags: 'grounded',     'lm.tags': 'path&!vertical&!bodyOfWater|incline', volition: 1},
    {name: 'up',        role: 'PATH',   vtags: 'contact',      'lm.tags': 'path&!bodyOfWater|incline|passage&vertical', volition: 1},
    {name: 'up',        role: 'PATH',   vtags: 'up',           'lm.tags': 'path&vertical|passage&vertical', volition: 1},
    {name: 'up',        role: 'PATH',   vtags: 'water',        'lm.tags': 'path & liquid|bodyOfWater', volition: 1},
    {name: 'up',        role: 'PATH',   vtags: 'waterSurface', 'lm.tags': 'path & bodyOfWater', volition: 1},
        
    {name: 'down',      role: 'PATH',   vtags: 'grounded',     'lm.tags': 'path&!vertical|incline'},
    {name: 'down',      role: 'PATH',   vtags: 'contact',      'lm.tags': 'path|incline|passage&vertical'},
    {name: 'down',      role: 'PATH',   vtags: 'down',         'lm.tags': 'path&vertical|incline|passage&vertical'},
    {name: 'down',      role: 'PATH',   vtags: 'water',        'lm.tags': 'path & liquid|bodyOfWater'},
    {name: 'down',      role: 'PATH',   vtags: 'waterSurface', 'lm.tags': 'path & bodyOfWater'},
    
    {name: 'along',     role: 'PATH',   vtags: 'grounded',     'lm.tags': 'path|perimeter|edge|boundary & !vertical'},
    {name: 'along',     role: 'PATH',   vtags: 'contact',      'lm.tags': 'path|perimeter|edge|boundary'},
    
    {name: 'around',    role: 'PATH',   vtags: 'grounded|contact|air',         'lm.tags': 'bounded'},
    
    {name: 'past',      role: 'PATH',   vtags: 'grounded|contact|air|jump',    'lm.tags': 'PHYSICAL'},
    {name: 'past',      role: 'PATH',   vtags: 'vertical',                     'lm.tags': 'elevated'},
    
    {name: 'beyond',    role: 'PATH',   vtags: 'grounded|contact|air|water|waterSurface|down',    'lm.tags': 'PHYSICAL|boundary|point'},
    {name: 'beyond',    role: 'PATH',   vtags: 'up',                                              'lm.tags': 'PHYSICAL|boundary|point & elevated'},
    
    //////////////////////////////////////////
    
    {name: 'onto',      role: 'GOAL',   vtags: 'grounded|contact',                      'lm.tags': 'surface&!elevated&!vertical!bodyOfWater',    'lm.size': '>trajector.size'},
    {name: 'onto',      role: 'GOAL',   vtags: 'air|jump|vertical',                     'lm.tags': 'surface|object',                             'lm.size': '>trajector.size'},
    {name: 'onto',      role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical',    'lm.tags': 'substance&!fluid'},
    {name: 'onto',      role: 'GOAL',   vtags: 'grounded|contact|air|jump',             'lm.tags': 'passengerVehicle'},
    {name: 'onto',      role: 'GOAL',   vtags: 'waterSurface',                          'lm.tags': 'openWater',                                  'lm.size': '>trajector.size'},
        
    {name: 'into',      role: 'GOAL',   vtags: 'grounded',                              'lm.tags': 'area|volume&!elevated',                      'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL',   vtags: 'contact|air|jump',                      'lm.tags': 'area|volume',                                'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL',   vtags: 'water',                                 'lm.tags': 'openWater',                                  'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL',   vtags: 'up',                                    'lm.tags': 'volume&elevated|gas',                        'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL',   vtags: 'down',                                  'lm.tags': 'volume&!elevated|gas',                        'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL',   vtags: 'downWater',                             'lm.tags': 'bodyOfWater',                                'lm.size': '>trajector.size'}, //this is for 'sink'
    {name: 'into',      role: 'GOAL',   vtags: 'downWater',                             'lm.tags': 'mass|vessel'}, //this is for 'sink'
    
    {name: 'to',        role: 'GOAL',   vtags: 'grounded|contact|water|waterSurface',   'lm.tags': 'fixed|occasion'}, //TODO: other things?
    {name: 'to',        role: 'GOAL',   vtags: 'down',     trans:'<1',                  'lm.tags': 'bottom|surface&grounded'},
    {name: 'to',        role: 'GOAL',   vtags: 'downWater',                             'lm.tags': 'bottom',  'ncomp.c0.tags': 'bodyOfWater|vessel', 'lm.size': '>trajector.size'}, //this is for 'sink'

    {name: 'toward',    role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',       'lm.tags': 'PHYSICAL',    multicomp: false},

    {name: 'under',     role: 'GOAL',   vtags: 'grounded|air|jump',                     'lm.tags': 'object&elevated',                 multicomp: false},
    {name: 'under',     role: 'GOAL',   vtags: 'contact|water',                         'lm.tags': 'object&!grounded',                multicomp: false},
    
    {name: 'behind',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',       'lm.tags': 'thing',    multicomp: false},
    
    {name: 'beside',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',       'lm.tags': 'thing',    multicomp: false},
    
    {name: 'in front of',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',  'lm.tags': 'thing',    multicomp: false},
    
    {name: 'on top of',     role: 'GOAL',     vtags: 'grounded',                         'lm.tags': 'object&!void&!creature|incline|prominence',    'lm.size': '>trajector.size',    multicomp: false},
    {name: 'on top of',     role: 'GOAL',     vtags: 'contact|air|jump|down',            'lm.tags': 'object&!void|incline|prominence',              'lm.size': '>trajector.size',    multicomp: false},
    
    /////////////////////////////////////////////
    
    {name: 'from',  role:'SOURCE',  vtags: 'grounded|contact',      'lm.tags': 'area|thing',                               multicomp: true},
    {name: 'from',  role:'SOURCE',  vtags: 'air',                   'lm.tags': 'area|volume',                              multicomp: true},
    {name: 'from',  role:'SOURCE',  vtags: 'jump',                  'lm.tags': 'surface|site|vehicle|position',            multicomp: true},
    {name: 'from',  role:'SOURCE',  vtags: 'jump',                  'lm.size': '>subject.size',                            multicomp: true},
    {name: 'from',  role:'SOURCE',  vtags: 'up',                    'lm.tags': 'surface|void|position|object&fixed',       multicomp: true},
    {name: 'from',  role:'SOURCE',  vtags: 'down',                  'lm.tags': 'elevated|vertical',                        multicomp: true},
    {name: 'from',  role:'SOURCE',  vtags: 'down', trans: '>0.5',   'lm.tags': 'elevated|vertical|vessel',                 multicomp: true},
    {name: 'from',  role:'SOURCE',  vtags: 'water|waterSurface',    'lm.tags': 'bodyOfWater',                              multicomp: true},

    {name: 'away from',  role:'SOURCE',  vtags: 'grounded|contact|waterSurface',    'lm.tags': 'PHYSICAL&!top&!bottom&!person',     multicomp: false},
    {name: 'away from',  role:'SOURCE',  vtags: 'air|water',                        'lm.tags': 'PHYSICAL',                          multicomp: false},
    {name: 'away from',  role:'SOURCE',  vtags: 'air',                              'lm.tags': 'PHYSICAL',                          multicomp: false},

    {name: 'out of',     role:'SOURCE',  vtags: 'grounded',         'lm.tags': 'area|volume&!elevated',                                 'lm.size': '>trajector.size'},
    {name: 'out of',     role:'SOURCE',  vtags: 'contact|air|jump', 'lm.tags': 'area|volume',                                           'lm.size': '>trajector.size'},
    {name: 'out of',     role:'SOURCE',  vtags: 'water',            'lm.tags': 'openWater',                                             'lm.size': '>trajector.size'},
    {name: 'out of',     role:'SOURCE',  vtags: 'up',               'lm.tags': 'volume',                                                'lm.size': '>trajector.size'},
    {name: 'out of',     role:'SOURCE',  vtags: 'down',             'lm.tags': 'volume&elevated|vessel',                                'lm.size': '>trajector.size'},

    {name: 'off of',     role:'SOURCE',  vtags: 'grounded',         'lm.tags': 'substance&!fluid|surface&!vertical&!bodyOfWater|object&!void',  'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'contact',          'lm.tags': 'substance&!fluid|surface&!bodyOfWater|object&!void',            'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'up',               'lm.tags': 'surface&!vertical',                                             'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'down',             'lm.tags': 'surface & elevated|vertical',                                   'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'down',             'lm.tags': 'object&!grounded',                                              'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'jump',             'lm.tags': 'surface&!bodyOfWater|object|substance&!fluid',                  'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'jump',             'lm.tags': 'surface&!bodyOfWater|object|substance&!fluid',                  'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'grounded|contact|jump|down', 'lm.tags': 'point|edge|path'},
    
]

var paradigms = {
    verb: {tense: ['past','pres','fut'], number: ['sg','pl'], person: [1,2,3], aspect: ['simp', 'prog', 'retro', 'retroprog'], mood: ['ind','deo','pot']}, //trans: [0,0.5,1,1.5] //why did I have this?
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
        prosp: {volition: false, class:'state'} //makes no difference for some reason
    },
    tense: {
        //future: {aspect: 'retro', class: 'state'} //just tends to sound too awkward
    },
    mood: {
        deo: {volition: false, anim:'<2'}
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
    anim:       [1,0, 1,1, 3,2, 4,3],
    tang:       [1,0, 1,1, 2,2],

    pronominal: [1,true,25,false], //how likely a NP is to be a pronoun instead

    //nounish
    number:     [1,'pl', 5,'sg'],
    def:        [3,'def', 1,'indef'],
    proper:     [2,true, 7,false],
    partial:    [1,'', 1,'partial'],
    quantified: [0.3, true, 0.7, false],

    //pronominal
    person:     [1,1, 1,2, 25,3],
    gender:     [3,'m', 3,'f', 1,'n'],
    dem:        [2,true,5,false],
    prox:       [1,'prox', 1,'dist'],

    //verby
    tense:      [5,     'pres',    12,  'past', 1,  'fut'],
    aspect:     [15,    'simp',    5,   'prog', 2,  'retro', 1, 'retroprog', 2, 'prosp'],
    neg:        [10,    false,     1,   true],
    mood:       [1,     'deo',     1,   'pot',  8,  'ind']
}
