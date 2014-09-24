var google_key = "1FYbVHIMfwPJcYl_UgJFEQQ2zee4FkRzQMLWXhyz4qAI"
var datasource = "" // "google" or else it will use local

function loadLexicon(){

    var d = $.Deferred();

    if (datasource == "google") {
        Tabletop.init({
            key: google_key,
            callback: function (data) {
                processLexicon(data.noun.elements, 'noun')
                processLexicon(data.verb.elements, 'verb')
                processLexicon(data.adjective.elements, 'adjective')
                d.resolve();
            }
        })
    } else { //use local csv
        var a = $.Deferred();
        var b = $.Deferred();
        var c = $.Deferred();
        $.get('csv/nouns.csv',function(data){
            processLexicon(CSV2JSON(data), 'noun')
            a.resolve()
        })
        $.get('csv/verbs.csv',function(data){
            processLexicon(CSV2JSON(data), 'verb')
            b.resolve()
        })
        $.get('csv/adjectives.csv',function(data){
            processLexicon(CSV2JSON(data), 'adjective')
            c.resolve()
        })
        $.when(a,b,c).done(function() {
            d.resolve();
        })
    }

    return d
}

function processLexicon(data, type){
    database[type] = data
    for (var x in database[type]) {
        var a = database[type][x]

        $.each(a, function(b,val){
            //turn numbers and boolean into the real things
            a[b] = toNumBool(val)
        })

        delete a.rowNumber //something that Tabletop seems to add in
        prune(a)

        setProto(a,type,x)
        /*if (a.proto) {
            a = database[type][x] = Object.setPrototypeOf(a, pickOne(database[type], {name: a.proto}) )
            if (Object.getPrototypeOf(a) === Object.prototype) //didn't take
                error('Prototype"' + a.proto + '"could not be found for'+a.name+'.')
            else //there is a proto
                senseFetch(a,type)
        }*/
    }
}

function setProto(a,type,x){
    if (a.proto) {
        a = database[type][x] = Object.setPrototypeOf(a, pickOne(database[type], {name: a.proto}) )
        if (Object.getPrototypeOf(a) === Object.prototype) //didn't take
            error('Prototype"' + a.proto + '"could not be found for'+a.name+'.')
        else //there is a proto
            createSenses(a,type,x)
    }
    return a
}

//takes a word in the lexicon and creates all the same senses as its prototype (the word should have a prototype)
function createSenses(word,type,x,number) {
    number = number || word.name.replace(/.*?(\d*)$/g,'$1') || 1
    var sense = word.proto+number
    var proto_sense

    if(proto_sense = pickOne(database[type], {name: sense}) ) {
        if (proto_sense.name==word.name) return //don't create a sense when the word already is the sense
        if (pickOne(database[type], {name: word.name.replace(/(.*?)\d*$/,'$1')+number})) return //don't create a sense if it is already defined

        var new_sense = {}

        //set prototype to the main word
        new_sense.proto = word.name
        new_sense = setProto(new_sense,type,-1)

        //overwrite this senses values with the overwrite-values from the prototype sense
        new_sense = _.extend(new_sense,proto_sense) //must be lo-dash extend because it only copies objects real properties!

        new_sense.name = word.name+number

        //throw it in the database
        database[type].push(new_sense)

        //check for more senses
        createSenses(word,type,x,number+1)
    }
    return new_sense
}


var database = { verb: [],noun: [], adjective: [],

                aux_verb: [
                    { "name": "be", "inflections": "simp.past:were, simp.past.sg:was, simp.past.sg.2:were, simp.pres: are, simp.pres.sg.1: am, simp.pres.sg.3:is, retro:been, retroprog:being, prog:being"},
                    { "name": "do", "inflections": "simp.pres.sg.3:does, simp.past:did, retro: done, retroprog:doing, prog:doing"},
                    { "name": "have", "inflections": "simp.past:had, simp.pres.sg.3:has, retro:had"}
                ],

                quantifier: [
                    {name: 'a lot of'},
                    {name: 'heaps of'},
                    {name: 'some'},
                    {name: 'all'},
                    {name: 'no'},
                    {name: 'plenty of'},
                    {name: 'a bunch of'},
                    {name: 'enough'},
                    {name: 'not enough'},
                    {name: 'tons of'},
                    {name: 'most of the'},
                    {name: 'several', count: '1'},
                    {name: 'numerous', count: '1'},
                    {name: 'a few', count: '1'},
                    {name: 'a couple of', count: '1'},
                    {name: 'dozens of', count: '1'},
                    {name: 'hundreds of', count: '1'},
                    {name: 'many', count: '1'},
                    {name: 'a number of', count: '1'},
                    {name: 'much', count: '0'},
                    {name: 'too much', count: '0'},
                    {name: 'a little', count: '0'},
                    {name: 'too little', count: '0'},
                    {name: 'a bit of', count: '0'}
                ]

}

var paradigms = {
		verb: {tense: ['past','pres','fut'], number: ['sg','pl'], person: [1,2,3], aspect: ['simp', 'prog', 'retro', 'retroprog']},
		aux_verb: {tense: ['past','pres','fut'], number: ['sg','pl'], person: [1,2,3], aspect: ['simp', 'prog', 'retro', 'retroprog']},
		noun: {number: ['pl', 'sg'], def: ['def','indef'], quantified: [true,false]},
		pronoun: {case: ['nom', 'acc','gen','reflex'], number: ['sg', 'pl'], person: [1,2,3], gender: ['m', 'f', 'n']}
}

//universal prohibitions
var prohibitions = {

    //verb
    aspect: {
        prog: {class: 'state,event,semel'},
        retroprog: {class: 'state,event,semel', perm: true},
        retro: {perm: true},
        prosp: {volition: false}
    },
    tense: {
        //future: {aspect: 'retro', class: 'state'} //just tends to sound too awkward
    },
    mood: {
        deontic: {volition: false}
    },

    //noun
    number: {
        pl: {count: false},
    },

}

//default probabilities for paradigms ( used by decide() )
var probabilities = {
    //general
    anim: [1,0, 1,1, 4,2, 5,3],
    tang: [1,0, 1,1, 2,2],

    //nounish
    number: [1,'pl', 3,'sg'],
    def: [3,'def', 1,'indef'],
    proper: [2,true, 7,false],
    partial: [1,'', 1,'partial'],
    quantified: [0.3, true, 0.7, false],
    
    //pronominal
    person: [1,1, 1,2, 7,3],
    gender: [2,'m', 2,'f', 1,'n'],
    dem: [1,'prox', 1,'dist', 5,''],
    
    //verby
    tense: [4, 'pres', 8, 'past', 1, 'fut'],
    aspect: [8, 'simp', 4, 'prog', 2, 'retro', 1, 'retroprog', 1.5, 'prosp'],
    neg: [7, false, 1, true],
    mood: [1,'deontic', 6,'other']
}
