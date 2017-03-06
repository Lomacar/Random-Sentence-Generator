database.aux_verb = [
    { "name": "be", "inflections": "simp.past:were, simp.past.sg:was, simp.past.sg.2:were, simp.pres: are, simp.pres.sg.1: am, simp.pres.sg.3:is, retro:been, prog:being"},
    { "name": "do", "inflections": "simp.pres.sg.3:does, simp.past:did, retro: done, prog:doing"},
    { "name": "have", "inflections": "simp.past:had, simp.pres.sg.3:has, retro:had"}
]

database.quantifier = [
    {name: 'a lot', prequant: true},
    //{name: 'heaps', prequant: true},
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
    //{name: 'all', prequant: false},
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

database.title = [
    {name: 'Dr.'},{name: 'Dr.'},
    {name: 'President'},
    {name: 'Emperor'},
    {name: 'Captain'},
    {name: 'Professor'},
    {name: 'Admiral', tags: 'lastname'},
    {name: 'Lieutenant', tags: 'lastname'},
    {name: 'Sergeant', tags: 'lastname'},
    {name: 'Colonel', tags: 'lastname'},
    {name: 'Agent'},
    {name: 'Mr.', gender: 'm'},{name: 'Mr.', gender: 'm'},
    {name: 'Sir', gender: 'm'},
    {name: 'Pastor', gender: 'm'},
    {name: 'King', gender: 'm', tags: 'firstname'},
    {name: 'Mrs.', gender: 'f'},{name: 'Mrs.', gender: 'f'},
    {name: 'Miss', gender: 'f'},{name: 'Miss', gender: 'f'},
    {name: 'Madame', gender: 'f'},
    {name: 'Lady', gender: 'f'},
    {name: 'Queen', gender: 'f', tags: 'firstname'},
]

database.preposition = [

    {name: 'at',    role: 'LOC',     vtags: 'situated',           'lm.tags': 'point|position|boundary|site|table|motorVehicle', 'lm.size': '<9'},
    {name: 'at',    role: 'LOC',     vtags: 'habit',              'lm.tags': 'building|point',                'lm.size': '>7'},
    {name: 'at',    role: 'LOC',     vtags: 'habit',              'lm.tags': 'point'},
    {name: 'at',    role: 'LOC',     vtags: 'activity&!motion',   'lm.tags': 'building|point|table|border',   'lm.size': '>7'},
    {name: 'at',    role: 'LOC',     vtags: 'activity&!motion',   'lm.tags': 'point|table|border'},
    {name: 'at',    role: 'LOC',     vtags: 'posture',            'lm.tags': 'point|edge|table'/*, 'ncomp.c0.size': '>trajector.size'*/},
    {name: 'at',    role: 'LOC',     vtags: 'placement',          'lm.tags': 'point'},
    {name: 'at',    role: 'LOC',     vtags: 'copula',             'lm.tags': 'point|line|table|site&!land|position'},
    //{name: 'in',    role: 'LOC',   vtags: '!habit',             'lm.tags': 'volume'},
    {name: 'in',    role: 'LOC',     vtags: 'activity|situated',  'lm.tags': 'volume|area', 'lm.size': '>trajector.size'},
    {name: 'in',    role: 'LOC',     vtags: 'habit',              'lm.tags': 'building|area', 'lm.size': '>trajector.size'},
    {name: 'in',    role: 'LOC',     vtags: 'posture',            'lm.tags': 'volume|area & !bodyOfWater', 'lm.size': '>trajector.size'},
    {name: 'in',    role: 'LOC',     vtags: 'placement',          'lm.tags': 'volume', 'lm.size': '>trajector.size'},
    {name: 'in',    role: 'LOC',     vtags: 'copula',             'lm.tags': 'volume|area', 'lm.size': '>trajector.size'},
    {name: 'on',    role: 'LOC',     vtags: 'activity|situated|situated|placement',  'lm.tags': 'surface', 'lm.size': '>trajector.size'},
    {name: 'on',    role: 'LOC',     vtags: 'habit',              'lm.tags': 'field|passengerVehicle'},
    {name: 'on',    role: 'LOC',     vtags: 'copula',             'lm.tags': 'surface|prominence', 'lm.size': '>trajector.size'},
    {name: 'on',    role: 'LOC',     vtags: 'copula',             'lm.tags': 'point & !space|line', 'ncomp.c0.size': '>trajector.size'},
    //TODO: under,underneath,below,beneath,between,near,next to,far from,away from,in front of, on top of,
    //      beside, by, behind, inside, outside, among, amid, around


    //////////////////////////////////////////////////////////////////////////////////

    {name: 'through',   role: 'PATH',   vtags: 'grounded',     'lm.tags': 'area|surface&vertical&!edge|passage&!vertical&!elevated|obstacle&!elevated', 'lm.size': '>trajector.size'},
    {name: 'through',   role: 'PATH',   vtags: 'contact',      'lm.tags': 'area|passage|opening|obstacle', 'lm.size': '>trajector.size'},
    {name: 'through',   role: 'PATH',   vtags: 'air',          'lm.tags': 'gas|space|passage|opening|obstacle&!grounded', 'lm.size': '>trajector.size'},
    {name: 'through',   role: 'PATH',   vtags: 'jump',         'lm.tags': 'surface&vertical&!edge|opening|passage&!path&!vertical|obstacle&delimited&!grounded', 'lm.size': '>trajector.size'},
    {name: 'through',   role: 'PATH',   vtags: 'vertical',     'lm.tags': 'passage&vertical',   'lm.size': '>trajector.size'},
    {name: 'through',   role: 'PATH',   vtags: 'water',        'lm.tags': 'liquid|bodyOfWater', 'lm.size': '>trajector.size'},

    {name: 'across',    role: 'PATH',   vtags: 'grounded',     'lm.tags': 'area|surface|path|boundary|bridge & !bodyOfWater & !vertical'},
    {name: 'across',    role: 'PATH',   vtags: 'contact',      'lm.tags': 'area|surface|path&!vertical|boundary'},
    {name: 'across',    role: 'PATH',   vtags: 'air',          'lm.tags': 'area|surface|path|boundary|volume&gas & !vertical'},
    {name: 'across',    role: 'PATH',   vtags: 'jump',         'lm.tags': 'surface|path|boundary & !vertical'},
    {name: 'across',    role: 'PATH',   vtags: 'water|waterSurface', 'lm.tags': 'bodyOfWater'},

    {name: 'over',      role: 'PATH',   vtags: 'grounded',     'lm.tags': 'boundary|edge|bridge|prominence', 'ncomp.c0.tags': '!place'}, //what about low stuff
    {name: 'over',      role: 'PATH',   vtags: 'contact',      'lm.tags': 'boundary|edge|bridge|prominence', 'ncomp.c0.tags': '!place'}, //
    {name: 'over',      role: 'PATH',   vtags: 'air',          'lm.tags': 'thing|place'},
    {name: 'over',      role: 'PATH',   vtags: 'jump',         'lm.tags': 'thing'},
    {name: 'over',      role: 'PATH',   vtags: 'down',         'lm.tags': 'edge', 'ncomp.c0.tags': '!territory&!position'},
    {name: 'over',      role: 'PATH',   vtags: 'water|waterSurface', 'lm.tags': 'openWater'},

    {name: 'around',    role: 'PATH',   vtags: 'grounded|contact|air',         'lm.tags': 'bounded'},
    {name: 'around',    role: 'PATH',   vtags: 'grounded',     'lm.tags': 'PHYSICAL&!elevated&!line'},
    {name: 'around',    role: 'PATH',   vtags: 'contact|air',      'lm.tags': 'PHYSICAL&!line'},
    {name: 'around',    role: 'PATH',   vtags: 'water|waterSurface',   'lm.tags': 'PHYSICAL&!line'},

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


    {name: 'past',      role: 'PATH',   vtags: 'grounded|contact|air|jump',                         'lm.tags': 'PHYSICAL', 'lm.size': '>trajector.size'},
    {name: 'past',      role: 'PATH',   vtags: 'vertical',                                          'lm.tags': 'elevated', 'lm.size': '>trajector.size'},

    {name: 'beyond',    role: 'PATH',   vtags: 'grounded|contact|air|water|waterSurface|down',      'lm.tags': 'PHYSICAL&fixed|boundary|point&!elevated', 'lm.size': '>trajector.size'},
    {name: 'beyond',    role: 'PATH',   vtags: 'up',                                                'lm.tags': 'PHYSICAL|boundary|point & elevated',      'lm.size': '>trajector.size'},

    //////////////////////////////////////////

    {name: 'onto',      role: 'GOAL',   vtags: 'grounded|contact',                      'lm.tags': 'surface&!elevated&!vertical!bodyOfWater',    'lm.size': '>trajector.size'},
    {name: 'onto',      role: 'GOAL',   vtags: 'air|jump|vertical',                     'lm.tags': 'surface|object',                             'lm.size': '>trajector.size'},
    {name: 'onto',      role: 'GOAL',   vtags: 'contact|air|jump|vertical',             'lm.tags': 'substance&!fluid'},
    {name: 'onto',      role: 'GOAL',   vtags: 'grounded|contact|air|jump',             'lm.tags': 'passengerVehicle'},

    {name: 'into',      role: 'GOAL',   vtags: 'grounded',                              'lm.tags': 'area|volume&!elevated',                      'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL',   vtags: 'contact|air|jump',                      'lm.tags': 'area|volume',                                'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL',   vtags: 'water',                                 'lm.tags': 'openWater',                                  'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL',   vtags: 'up',                                    'lm.tags': 'volume&elevated|gas',                        'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL',   vtags: 'down',                                  'lm.tags': 'volume&!elevated|gas',                        'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL',   vtags: 'downWater',                             'lm.tags': 'bodyOfWater',                                'lm.size': '>trajector.size'}, //this is for 'sink'
    {name: 'into',      role: 'GOAL',   vtags: 'downWater',                             'lm.tags': 'mass|vessel'}, //this is for 'sink'
    {name: 'into',      role: 'GOAL',   vtags: 'waterSurface',                          'lm.tags': 'openWater',                                  'lm.size': '>trajector.size'},

    {name: 'to',        role: 'GOAL',   vtags: 'grounded|contact|water|waterSurface',   'lm.tags': 'fixed|occasion'}, //TODO: other things?
    {name: 'to',        role: 'GOAL',   vtags: 'down',     trans:'<1',                  'lm.tags': 'bottom|surface&grounded'},
    {name: 'to',        role: 'GOAL',   vtags: 'downWater',                             'lm.tags': 'bottom',  'ncomp.c0.tags': 'bodyOfWater|vessel', 'ncomp.c0.size': '>trajector.size'}, //this is for 'sink'

    {name: 'toward',    role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',       'lm.tags': 'PHYSICAL',    multicomp: false},

    {name: 'under',     role: 'GOAL',   vtags: 'grounded|air|jump',                     'lm.tags': 'object&elevated',                 multicomp: false},
    {name: 'under',     role: 'GOAL',   vtags: 'contact|water',                         'lm.tags': 'object&!grounded',                multicomp: false},

    {name: 'behind',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',       'lm.tags': 'thing',    multicomp: false},

    {name: 'beside',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',       'lm.tags': 'thing',    multicomp: false},

    {name: 'in front of',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',  'lm.tags': 'thing',    multicomp: false},

    {name: 'on top of',     role: 'GOAL',     vtags: 'grounded',                         'lm.tags': 'object&!void&!creature|incline|prominence',    'lm.size': '>trajector.size',    multicomp: false},
    {name: 'on top of',     role: 'GOAL',     vtags: 'contact|air|jump|down',            'lm.tags': 'object&!void|incline|prominence',              'lm.size': '>trajector.size',    multicomp: false},

    /////////////////////////////////////////////

    {name: 'from',  role:'SOURCE',  vtags: 'grounded|contact',      'lm.tags': 'area|thing&fixed',                         multicomp: true},
    {name: 'from',  role:'SOURCE',  vtags: 'air',                   'lm.tags': 'area|volume',                              multicomp: true},
    {name: 'from',  role:'SOURCE',  vtags: 'jump',                  'lm.tags': 'surface|site|vehicle|position',            multicomp: true},
    //WHAT? {name: 'from',  role:'SOURCE',  vtags: 'jump',                  'lm.size': '>subject.size',                            multicomp: true},
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

    {name: 'off of',     role:'SOURCE',  vtags: 'grounded',                   'lm.tags': 'point|edge|path & !vertical & !space & !bodyOfWater',     'ncomp.c0.tags': 'elevated|hasHeight'},
    {name: 'off of',     role:'SOURCE',  vtags: 'contact',                    'lm.tags': 'point|edge|path & !space & !bodyOfWater'},
    {name: 'off of',     role:'SOURCE',  vtags: 'contact',                    'lm.tags': 'surface&!bodyOfWater|object&!void',                             'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'up',                         'lm.tags': 'surface&!vertical',                                             'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'down',                       'lm.tags': 'surface & elevated|vertical',                                   'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'down',                       'lm.tags': 'object&!grounded&!void',                                        'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'jump',                       'lm.tags': 'surface&!bodyOfWater|object&elevated|substance&!fluid',         'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'jump|down',                  'lm.tags': 'point&elevated|edge&elevated|path&elevated & !space',     'ncomp.c0.tags': '>subject.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'jump|down',                  'lm.tags': 'edge',                                                    'ncomp.c0.tags': 'elevated|hasHeight', 'ncomp.c0.nocomplement':-1},

]

var paradigms = {
    verb: {tense: ['past','pres','fut'], number: ['sg','pl'], person: [1,2,3], aspect: ['simp', 'prog', 'retro', 'prosp'], mood: ['ind','deo','epi']}, //trans: [0,0.5,1,1.5] //why did I have this?
	aux_verb: {tense: ['past','pres','fut'], number: ['sg','pl'], person: [1,2,3], aspect: ['simp', 'prog', 'retro']},
    noun: {number: ['pl', 'sg'], def: ['def','indef'], quantified: [true,false], person: [1,2,3]},
	pronoun: {case: ['nom', 'acc','gen','reflex'], number: ['sg', 'pl'], person: [1,2,3], gender: ['m', 'f', 'n']}
}
paradigmList = _.uniq(_.flatten(_.map(_.keys(paradigms),function(k){return _.keys(paradigms[k])})))

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
        future: {aspect: 'retro', class: 'state', perm:true} //just tends to sound too awkward
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
    anim:       [1,0, 1,1, 3,2, 6,3],
    tang:       [3,0, 3,1, 5,2],

    pronominal: [1,true,8,false], //how likely a NP is to be a pronoun instead
    indef_pro: 0.4,   //chance to have an indefinite pronoun

    //nounish
    number:     [1,'pl', 5,'sg'],
    def:        [3,'def', 1,'indef'],
    proper:     [2,true, 7,false],
    partial:    [1,'', 1,'partial'],
    quantified: [0.3, true, 0.7, false],

    //pronominal
    person:     [1,1, 1,2, 20,3],
    gender:     [3,'m', 3,'f', 1,'n'],
    dem:        [2,true,5,false],
    prox:       [1,'prox', 1,'dist'],

    //verby
    tense:      [5,     'pres',    12,  'past', 1,  'fut'],
    aspect:     [18,    'simp',    4,   'prog', 3,  'retro', 2, 'prosp'],
    neg:        [18,    false,     1,   true],
    mood:       [1,     'deo',     1,   'epi',  12,  'ind'],
    complex_aspects: 0.05
}
