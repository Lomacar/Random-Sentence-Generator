//default probabilities for paradigms ( used by decide() )
var probabilities = {
    //general
    anim:       [1,0, 1,1, 3,2, 6,3],
    tang:       [9999,0, 1,1, 5,2],

    pronominal: [1,true,7,false], //how likely a NP is to be a pronoun instead
    indef_pro: 0.75,               //chance to have an indefinite pronoun (compounded with chance to have an indefinite NP)

    //nounish
    number:     [1,'pl', 5,'sg'],
    def:        [5,'def', 3,'indef'],
    proper:     [2,true, 7,false],
    partial:    [1,'', 1,'partial'],
    quantified: [2, true, 9, false],
    numeral: 0.35, //whether to quantify by numeral or quantifier
    prequant: 0.2,
    np_coordination: 0.2,

    //pronominal
    person:     [1,1, 1,2, 10,3],
    gender:     [3,'m', 3,'f', 1,'n'],
    dem:        [2,true,5,false],
    prox:       [1,'prox', 1,'dist'],

    //verby
    tense:      [5,     'pres',    12,  'past', 1,  'fut'],
    aspect:     [18,    'simp',    4,   'prog', 3,  'retro', 2, 'prosp'],
    neg:        [18,    false,     1,   true],
    mood:       [1,     'deo',     1,   'epi',  12,  'ind'],
    complex_aspects: 0.05,

    //adjective
    superlative: [1, true, 42, false],
    comparative: [1, true, 30, false]
}

database.aux_verb = [
    { "name": "be", "inflections": "simp.past:were, simp.past.sg:was, simp.past.sg.2:were, simp.pres: are, simp.pres.sg.1: am, simp.pres.sg.3:is, retro:been, prog:being"},
    { "name": "do", "inflections": "simp.pres.sg.3:does, simp.past:did, retro: done, prog:doing"},
    { "name": "have", "inflections": "simp.past:had, simp.pres.sg.3:has, retro:had"}
]

database.quantifier = [
    {name: 'a lot', prequant: true, amount: 10},
    {name: 'tons', prequant: true, amount: 50},
    {name: 'a bunch', prequant: true, amount: 10},
    //{name: 'heaps', prequant: true},
    //{name: 'plenty', prequant: true},
    //{name: 'none', prequant: true, def:'def'},
    //{name: 'no', prequant: false, neg: false},

    {name: 'any', neg: true},
    {name: 'any', count: 0, number: 'sg|pl', neg: true},

    {name: 'most', amount: 4},
    {name: 'most', count: 0, number: 'sg|pl', amount: 4},
    {name: 'some', amount: 4},
    {name: 'some', count: 0, number: 'sg|pl', amount: 4},
    {name: 'all', prequant: true, def:'def', amount: 4},
    //{name: 'all', prequant: false},
    //{name: 'enough', prequant: false},
    //{name: 'enough', prequant: true, def:'def'},
    //{name: 'not enough', prequant: false},
    //{name: 'not enough', prequant: true, def:'def'},
    
    //COUNTABLE ONLY
    {name: 'numerous', prequant: false, count: 1},
    
    {name: 'each', count: 1, prequant: false, number: 'sg', def:'indef'},
    {name: 'each', count: 1, prequant: true, def:'def'},
    {name: 'every', count: 1, prequant: false, number: 'sg', def:'indef'},
    {name: 'both', count: 1, amount: 9999999999}, //should prevent 'both of the # nouns'
    
    {name: 'a few', count: 1, amount: 4},
    {name: 'several', count: 1, amount: 5},
    {name: 'many', count: 1, amount: 8},

    {name: 'a number', prequant: true, count: 1, amount: 7},
    {name: 'dozens', prequant: true, count: 1, amount: 48},
    {name: 'hundreds', prequant: true, count: 1, amount: 400},
    {name: 'thousands', prequant: true, count: 1, amount: 4000},
    {name: 'millions', prequant: true, count: 1, amount: 4000000},

    //UNCOUNTABLE ONLY
    {name: 'much', count: 0},
    //{name: 'too much', prequant: false, count: 0},
    //{name: 'too much', prequant: true, def:'def', count: 0},
    //{name: 'too much', prequant: false, count: 0},
    //{name: 'too much', prequant: true, def:'def', count: 0},
    {name: 'a little', prequant: false, count: 0},
    //{name: 'too little', prequant: false, count: 0},
    //{name: 'too little', prequant: true, def:'def', count: 0},

    {name: 'a bit', prequant: true, count: 0}
]

//all quantifiers besides the ones allowed to be singular (each, every, most, some...)
//must be marked as plural so that they aren't still selected by QUANT when number is 'sg'
database.quantifier.forEach( q => {if(!q.number) q.number='pl'})

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
    {name: 'General', tags: 'lastname'},
    {name: 'Commander', tags: 'lastname'},
    {name: 'Major', tags: 'lastname'},
    {name: 'Private', tags: 'lastname'},
    {name: 'Chief', tags: 'lastname'},
    {name: 'Coach', tags: 'lastname'},
    {name: 'Agent'},
    {name: 'Judge'},
    {name: 'Chancellor'},
    {name: 'Senator'},
    {name: 'Count'},
    {name: 'Officer'},
    {name: 'Mr.', gender: 'm'},{name: 'Mr.', gender: 'm'},
    {name: 'Sir', gender: 'm'},
    {name: 'Lord', tags: 'lastname'},
    {name: 'Father', gender: 'm', tags: 'firstname'},
    {name: 'Pastor', gender: 'm'},
    {name: 'King', gender: 'm', tags: 'firstname'},
    {name: 'Prince', gender: 'm', tags: 'firstname'},
    {name: 'Mrs.', gender: 'f'},{name: 'Mrs.', gender: 'f'},
    {name: 'Miss', gender: 'f'},{name: 'Miss', gender: 'f'},
    {name: 'Madame', gender: 'f'},
    {name: 'Lady', gender: 'f'},
    {name: 'Queen', gender: 'f', tags: 'firstname'},
    {name: 'Princess', gender: 'f', tags: 'firstname'},
]

database.preposition = [

    {name: 'at',    role: 'LOC',     vtags: 'situated',           'lm.tags': 'point|position|boundary|site|table|motorVehicle', 'lm.size': '<9'},
    {name: 'at',    role: 'LOC',     vtags: 'habit',              'lm.tags': 'building|point',                'lm.size': '>7'},
    {name: 'at',    role: 'LOC',     vtags: 'habit',              'lm.tags': 'point'},
    {name: 'at',    role: 'LOC',     vtags: 'activity&!motion',   'lm.tags': 'building|point|table|border',   'lm.size': '>7'},
    {name: 'at',    role: 'LOC',     vtags: 'activity&!motion',   'lm.tags': 'point|table|border'},
    {name: 'at',    role: 'LOC',     vtags: 'posture',            'lm.tags': 'point|edge|table'/*, 'ncomp.size': '>trajector.size'*/},
    {name: 'at',    role: 'LOC',     vtags: 'placement',          'lm.tags': 'point'},
    {name: 'at',    role: 'LOC',     vtags: 'copula',             'lm.tags': 'point|line|table|site&!land|position'},
    //{name: 'in',    role: 'LOC',   vtags: '!habit',             'lm.tags': 'volume'},
    {name: 'in',    role: 'LOC',     vtags: 'activity|situated',  'lm.tags': 'volume|area', 'lm.size': '>trajector.size'},
    {name: 'in',    role: 'LOC',     vtags: 'habit',              'lm.tags': 'building|area', 'lm.size': '>trajector.size'},
    {name: 'in',    role: 'LOC',     vtags: 'posture',            'lm.tags': 'volume|area & !bodyOfWater', 'lm.size': '>trajector.size'},
    {name: 'in',    role: 'LOC',     vtags: 'placement',          'lm.tags': 'volume', 'lm.size': '>trajector.size'},
    {name: 'in',    role: 'LOC',     vtags: 'copula',             'lm.tags': 'volume|area', 'lm.size': '>trajector.size'},
    {name: 'on',    role: 'LOC',     vtags: 'activity|situated|placement',  'lm.tags': 'surface', 'lm.size': '>trajector.size'},
    {name: 'on',    role: 'LOC',     vtags: 'posture',              'lm.tags': 'furniture'},
    {name: 'on',    role: 'LOC',     vtags: 'habit',              'lm.tags': 'field|passengerVehicle'},
    {name: 'on',    role: 'LOC',     vtags: 'copula',             'lm.tags': 'surface|prominence', 'lm.size': '>trajector.size'},
    //{name: 'on',    role: 'LOC',     vtags: 'copula',             'lm.tags': 'point & !space|line', 'ncomp.size': '>trajector.size'},
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

    {name: 'over',      role: 'PATH',   vtags: 'grounded',     'lm.tags': 'boundary|edge|bridge|prominence', 'ncomp.tags': '!place'}, //what about low stuff
    {name: 'over',      role: 'PATH',   vtags: 'contact',      'lm.tags': 'boundary|edge|bridge|prominence', 'ncomp.tags': '!place'}, //
    {name: 'over',      role: 'PATH',   vtags: 'air',          'lm.tags': 'thing|place'},
    {name: 'over',      role: 'PATH',   vtags: 'jump',         'lm.tags': 'thing'},
    {name: 'over',      role: 'PATH',   vtags: 'down',         'lm.tags': 'edge', 'ncomp.tags': '!territory&!position'},
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

    {name: 'beyond',    role: 'PATH',   vtags: 'grounded|contact|air|water|waterSurface',           'lm.tags': 'PHYSICAL&fixed|boundary|point&!elevated', 'lm.size': '>trajector.size'},
    {name: 'beyond',    role: 'PATH',   vtags: 'up',                                                'lm.tags': 'PHYSICAL|boundary|point & elevated',      'lm.size': '>trajector.size'},

    //////////////////////////////////////////

    {name: 'onto',      role: 'GOAL|DIR',   vtags: 'grounded|contact',                      'lm.tags': 'surface&!elevated&!vertical!bodyOfWater',    'lm.size': '>trajector.size'},
    {name: 'onto',      role: 'GOAL|DIR',   vtags: 'air|jump|vertical',                     'lm.tags': 'surface|object',                             'lm.size': '>trajector.size'},
    //{name: 'onto',      role: 'GOAL|DIR',   vtags: 'contact|air|jump|vertical',             'lm.tags': 'substance&!fluid'},
    {name: 'onto',      role: 'GOAL|DIR',   vtags: 'grounded|contact|air|jump',             'lm.tags': 'passengerVehicle'},

    {name: 'into',      role: 'GOAL|DIR',   vtags: 'grounded',                              'lm.tags': 'area|volume&!elevated',                      'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL|DIR',   vtags: 'contact|air|jump',                      'lm.tags': 'area|volume',                                'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL|DIR',   vtags: 'water',                                 'lm.tags': 'openWater',                                  'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL|DIR',   vtags: 'up',                                    'lm.tags': 'volume&elevated|gas',                        'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL|DIR',   vtags: 'down',                                  'lm.tags': 'volume&!elevated|gas',                       'lm.size': '>trajector.size'},
    {name: 'into',      role: 'GOAL|DIR',   vtags: 'downWater',                             'lm.tags': 'bodyOfWater',                                'lm.size': '>trajector.size'}, //this is for 'sink'
    {name: 'into',      role: 'GOAL|DIR',   vtags: 'downWater',                             'lm.tags': 'mass'}, //this is for 'sink'
    {name: 'into',      role: 'GOAL|DIR',   vtags: 'downWater',                             'lm.tags': 'container',                                  'lm.size': '>trajector.size'}, //this is for 'sink'
    {name: 'into',      role: 'GOAL|DIR',   vtags: 'waterSurface',                          'lm.tags': 'openWater',                                  'lm.size': '>trajector.size'},

    {name: 'to',        role: 'GOAL|DIR',   vtags: 'grounded|contact|water|waterSurface',   'lm.tags': 'fixed|occasion'}, //TODO: other things?
    {name: 'to',        role: 'GOAL|DIR',   vtags: 'down',     trans:'<1',                  'lm.tags': 'bottom|surface&grounded'},
    {name: 'to',        role: 'GOAL|DIR',   vtags: 'downWater',                             'lm.tags': 'bottom',  'ncomp.tags': 'bodyOfWater|vessel', 'ncomp.size': '>trajector.size'}, //this is for 'sink'

    {name: 'toward',    role: 'GOAL|DIR',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',       'lm.tags': 'PHYSICAL',    multicomp: false},

    {name: 'under',     role: 'GOAL',   vtags: 'grounded|air|jump',                     'lm.tags': 'object&elevated',                 multicomp: false},
    {name: 'under',     role: 'GOAL',   vtags: 'contact|water',                         'lm.tags': 'object&!grounded',                multicomp: false},

    {name: 'behind',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',       'lm.tags': 'thing',    multicomp: false},

    //{name: 'beside',     role: 'GOAL',   vtags: 'grounded|contact|air|jump|vertical|water|waterSurface',       'lm.tags': 'thing',    multicomp: false},

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

    {name: 'out of',     role:'SOURCE',  vtags: 'grounded',         'lm.tags': 'area|volume&!elevated',                             'lm.size': '>trajector.size'},
    {name: 'out of',     role:'SOURCE',  vtags: 'contact|air|jump', 'lm.tags': 'area|volume',                                       'lm.size': '>trajector.size'},
    {name: 'out of',     role:'SOURCE',  vtags: 'water',            'lm.tags': 'openWater',                                         'lm.size': '>trajector.size'},
    {name: 'out of',     role:'SOURCE',  vtags: 'up',               'lm.tags': 'volume',                                            'lm.size': '>trajector.size'},
    {name: 'out of',     role:'SOURCE',  vtags: 'down',             'lm.tags': 'volume&elevated|vessel',                            'lm.size': '>trajector.size'},

    {name: 'off of',     role:'SOURCE',  vtags: 'grounded',                   'lm.tags': 'point|edge|path & !vertical & !space & !bodyOfWater',     'ncomp.tags': 'elevated|hasHeight'},
    {name: 'off of',     role:'SOURCE',  vtags: 'contact',                    'lm.tags': 'point|path & !space & !bodyOfWater'},
    {name: 'off of',     role:'SOURCE',  vtags: 'contact',                    'lm.tags': 'surface&!bodyOfWater|object&!void',                             'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'up',                         'lm.tags': 'surface&!vertical',                                             'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'down',                       'lm.tags': 'surface & elevated|vertical',                                   'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'down',                       'lm.tags': 'object&!grounded&!void',                                        'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'jump',                       'lm.tags': 'surface&!bodyOfWater|object&elevated',                          'lm.size': '>trajector.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'jump|down',                  'lm.tags': 'point&elevated|edge&elevated|path&elevated & !space',     'ncomp.tags': '>subject.size'},
    {name: 'off of',     role:'SOURCE',  vtags: 'jump|down',                  'lm.tags': 'edge',                                                    'ncomp.tags': 'elevated|hasHeight', 'ncomp.nocomplement':-1},

]

//predicative prepositional idioms
var prep_idiom = [
    {name:'in debt',        tags:'person|organization|territory'},
    {name:'in trouble',     tags:'creature|organization|territory'},
    {name:'in harm\'s way', tags:'creature|organization|territory'},
    {name:'in danger',      tags:'creature|organization|territory', complements:"(of GP{unpack:subject.R})"},
    {name:'in a hurry',     tags:'creature|vehicle'},
    {name:'in a rush',      tags:'creature|vehicle'},
    {name:'in a rage',      tags:'creature', anim: '>1.5'},
    {name:'in a coma',      tags:'creature', anim: '>1.5'},
    {name:'in over',        tags:'person', complements:'POSS_PN{unpack:subject.R} head'},
    {name:'in the way',     tags:'touchable'},
	{name:'in',     		tags:'touchable', complements:'GENITIVE{anim:>1} way'},
    {name:'out to lunch',   anim:'3'},
    {name:'above reproach', anim:'3'},
    {name:'in cahoots with',tags:'person|organization|territory', complements:"NP{tags:person|organization|territory}"},
    {name:'in league with', tags:'person|organization|territory', complements:"NP{tags:person|organization|territory}"},
    {name:'in charge of',   tags:'person',                        complements:"NP{tags:matter|organization|territory|volitional}"},
    {name:'in charge of',   tags:'territory|organization',        complements:"NP{tags:matter|volitional}"},
    {name:'in charge of',   tags:'person|territory|organization', complements:"(ACTIVE_STUFF|ACTION|PRES_PARTICIPLE){volition:true}"},
    {name:'in control of',  tags:'person|territory|organization', complements:"(NP{tags:situation|event|organization}|NP{number:pl,tags:creature})"},
    {name:'out of luck',    anim:'3'},
    {name:'out of time',    anim:'3'},
    {name:'out of ',        anim:'3',                  complements: 'N{(number:pl|count:false, unique:<1), tags:matter&!fixed, anim: <3}'},
    {name:'out of ',        tags:'territory|building', complements: 'N{(number:pl|count:false, unique:<1), tags:matter&!fixed, anim: <3}'},
    {name:'out of control', anim:'>1'},
    {name:'out of control', tags:'situation|weather|event'},
    {name:'out of ',        anim:'3',                  complements: 'POSS_PN{unpack:subject.R} mind', number:'sg'},
    {name:'out of ',        anim:'3',                  complements: 'POSS_PN{unpack:subject.R} minds', number:'pl'},
    {name:'out of shape',   tags:'creature'},
    {name:'out of breath',   tags:'creature'},
    {name:'under',          anim:'>1',                 complements: 'DET{possessable:999; def:def; posr:"anim:3"} control'},
    {name:'under control',  tags:'situation|weather|event'},
    {name:'under the weather',  tags:'person'},
    {name:'on the verge of',	prohibitions:"real_aspect:prosp,tense:fut", complements:"GP{unpack:subject.R}"},
    {name:'on fire',        tags:'matter&!space&!gas|territory'},
    {name:'on',             tags:'creature|vehicle', complements:"POSS_PN{unpack:subject.R} way (60 GOAL{name:to; lm.size:>subject.size})"},
    {name:'on',             anim:'>1', complements:"POSS_PN{unpack:subject.R} own"},
    {name:'on',             anim:'>1', complements:"POSS_PN{unpack:subject.R} deathbed"},
    {name:'on',             anim:'>0', complements:"death's door"},
    {name:'on sale',        tags:'artifact'},
    {name:'on schedule',    tags:'person|event|undertaking|result'},
    {name:'off',            anim:'3', complements:"POSS_PN{unpack:subject.R} rocker", prohibitions: 'number:pl'},
    {name:'off',            anim:'3', complements:"POSS_PN{unpack:subject.R} rockers", prohibitions: 'number:sg'},
    {name:'off course',     tags:'person|vehicle'},
    {name:'at',             anim:'3', complements:"the end of POSS_PN{unpack:subject.R} rope"},
    {name:'at odds with',   tags:'person|organization|territory', complements:"NP{tags:person|organization|territory}"},
    {name:'at a standstill',tags:'telic&hasDuration | event&difficulty'},
    {name:'in vain',tags:'telic'},
]

prep_idiom.forEach(function (i){
    i.prohibitions = i.prohibitions ? i.prohibitions + ", copulant: false" : "copulant: false"
    i.scalar = 0
    i.really_copulant = true
})
database.adjective = database.adjective.concat(prep_idiom).concat(prep_idiom).concat(prep_idiom).concat(prep_idiom)



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
        prog: {class: 'state,event', perm: '>0', pasv:true},
        retroprog: {class: 'state,event', perm: '>0', pasv:true},
        retro: {perm: '>0'},
        prosp: {volition: false, class:'state', perm: '>0'} //doesn't work because of stupid real_aspect THIS WHOLE SECTION IS A SHAM! AUXP needs to be changed! TODO
    },
    //TEMPORARY FIX FOR PROBLEM ABOVE
    real_aspect: {
        prog: {class: 'state,event', perm: '>0', pasv:true},
        retroprog: {class: 'state,event', perm: '>0', pasv:true},
        retro: {perm: '>0'},
        prosp: {volition: false, class:'state', perm: '>0'}
    },
    tense: {
        future: {aspect: 'retro', class: 'state', perm:true} //just tends to sound too awkward
    },
    mood: {
        deo: {volition: false, anim:'<2'}
    },

    //noun
    number: {               // probably many other tags as well, tags need to respect heirarchy
        pl: {count: false, tags: 'activity, enterprise'}, //what about proper place names? Only Alps and Himalayas right now
    },
    def: {
        indef: {possessable: 10}
    },
    subj_def: {
        indef: {class: 'state'}
    }

}
