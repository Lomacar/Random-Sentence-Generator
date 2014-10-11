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

    //main processing loop
    for (x in database[type]) {
        //remove empty rows that Google or Git might add
        if (!database[type][x].name) {
            database[type].splice(x,1)
            continue
        }

        var a = database[type][x]

        $.each(a, function(b,val){
            //turn numbers and boolean into the real things
            a[b] = toNumBool(val)
        })

        delete a.rowNumber //something that Tabletop seems to add in
        prune(a)
        for(var key in a) {
            if(a[key] === " ") a[key] = ""
        }

        lookup[type][a.name] = x

    }

    //Prototypes
    for (x in database[type]) {
        setProto(database[type][x],type,x)
    }

    //Senses
    for (var x in database[type]) {
        createSenses(database[type][x],type)
    }

    if(type=='noun') {

        //add implied tags to words
        for (var w in database[type]) {
            if(database[type][w].tags) {
                var tag_array = database[type][w].tags.split(',')
                database[type][w].tags = addImpliedTags(tag_array).join(',')
            }
        }

        //temporarily turn tags into a sub-object of each word
        for (var z in database[type]) {
            if ("tags".in(database[type][z])){
                var t = database[type][z].tagsObject = {}
                toObject( database[type][z].tags.split(',').forEach(function(y){t[y]=y}) )
            }
        }

        //then do complicated merging of tag objects
        for (var z in database[type]) {
            var a = database[type][z]
            var proto = pickOne(database[type], {name: a.proto, type:type})

            //merge tags from proto, unless there is a dash, which means don't merge
            if (a.tagsObject && proto && proto.tagsObject && !a.tags.findChar('-')) {

                //basically you gotta do the same thing for tags that you do for the word as a whole
                if (a.tagsObject !== proto.tagsObject) {
                    //add tags from prototype
                    a.tagsObject = Object.setPrototypeOf(a.tagsObject, proto.tagsObject )
                }
                if ( a.parallelSense ) {
                    //add any extra tags from parallel sense
                    a.tagsObject = _.extend( a.tagsObject,  _.clone(a.parallelSense.tagsObject) )
                                                            //clone grabs just the ownProperties
                }
            }
        }

        //convert tagsObject back to plain string tag property
        for (var z in database[type]) {
            if ("tagsObject".in(database[type][z])){
                database[type][z].tags = _.keys( $.extend( {}, database[type][z].tagsObject ) ).join(',')
                delete database[type][z].tagsObject
                delete database[type][z].parallelSense
            }
        }
        //end of tag merging


    } //end of noun only section

    //very final processing
    for (var b in database[type]) {
        // collapse prototype inheritance
        database[type][b] = $.extend({},database[type][b])

        // remove empty strings that were created from " " which were used to block prototype inheritance
        prune(database[type][b])
    }

}

function setProto(a,type,x){
    if (a.proto) {
        var proto = pickOne(database[type], {name: a.proto, type:type})
        if (!proto) error('Prototype "' + a.proto + '" could not be found for '+a.name+'.')
        else a = database[type][x] = Object.setPrototypeOf(a, proto )

        if (Object.getPrototypeOf(a) === Object.prototype) //didn't take
           { error('Prototype assignment failed for '+a.name+'.')}
    }
    return a
}

//takes a word in the lexicon and creates all the same senses as its prototype (the word should have a prototype)
function createSenses(word,type,number) {
    if (!word.proto) return

    number = number || word.name.replace(/[^.]+\.?/,'') || 1
    var sense = word.proto + ( number==1 ? "." : "") + number
    var proto_sense = pickOne(database[type], {name: sense, type:type})

    if(proto_sense) {
        if (proto_sense.name==word.name) return //don't create a sense when the word already is the sense
        if (pickOne(database[type], {name: word.name.replace(/(.+?\.)\d*$/,'$1')+number, type:type})) return //don't create a sense if it is already defined

        var new_sense = {}

        //set prototype to the main word
        new_sense.proto = word.name
        new_sense = setProto(new_sense,type,-1)

        //overwrite this senses values with the overwrite-values from the prototype sense
        //new_sense = _.extend($.extend({},proto_sense),$.extend({},new_sense)) //must be lo-dash extend because it only copies objects real properties!
        //new_sense = _.extend(_.extend({},proto_sense),new_sense) //must be lo-dash extend because it only copies objects real properties!
        new_sense = _.extend(new_sense,proto_sense) //must be lo-dash extend because it only copies objects real properties!

        new_sense.name = word.name + ( number==1 ? "." : "") + number
        new_sense.parallelSense = proto_sense

        //throw it in the database
        lookup[type][new_sense.name] = database[type].push(new_sense) - 1

        //check for more senses
        createSenses(word,type,number+1)
    }
    return new_sense
}

function addImpliedTags(tags){
    var tagz = _.clone(tags)
    var ont = _.cloneDeep(ontology)
    if(!tags) return
    tags.forEach(loop)

    function loop(tag){

        if(typeof ont[tag]=='undefined') return []

        ont[tag].forEach(function(t){
            if (!_.contains(tags,t)) {
                tags.push(t.replace(/\s/g,''))
                loop(t)             //strip whitespace
            }
        })

    }

    return tags
}

var database = { verb: [],noun: [], adjective: [],

                aux_verb: [
                    { "name": "be", "inflections": "simp.past:were, simp.past.sg:was, simp.past.sg.2:were, simp.pres: are, simp.pres.sg.1: am, simp.pres.sg.3:is, retro:been, retroprog:being, prog:being"},
                    { "name": "do", "inflections": "simp.pres.sg.3:does, simp.past:did, retro: done, retroprog:doing, prog:doing"},
                    { "name": "have", "inflections": "simp.past:had, simp.pres.sg.3:has, retro:had"}
                ],

                quantifier: [
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
                    {name: 'not enough', prequant: false},
                    {name: 'not enough', prequant: true, def:'def'},
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
                    {name: 'each', prequant: false, count: 1},
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
                    {name: 'too much', prequant: false, count: 0},
                    {name: 'too much', prequant: true, def:'def', count: 0},
                    {name: 'too much', prequant: false, count: 0},
                    {name: 'too much', prequant: true, def:'def', count: 0},
                    {name: 'a little', prequant: false, count: 0},
                    {name: 'a little', prequant: true, def:'def', count: 0},
                    {name: 'too little', prequant: false, count: 0},
                    {name: 'too little', prequant: true, def:'def', count: 0},
                    {name: 'a bit', prequant: false, count: 0},
                    {name: 'a bit', prequant: true, def:'def', count: 0},
                ]

}

//index for fetching words by name, populated by processLexicon
var lookup = {noun:{},verb:{},adjective:{}}

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
        deontic: {volition: false, anim:'<2'}
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
