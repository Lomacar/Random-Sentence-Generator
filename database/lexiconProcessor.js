var fs = require('fs');
var _ = require('lodash')

eval(fs.readFileSync("csv/csv2json.js")+'');
eval(fs.readFileSync("../dist/js/utilities.js")+'');
eval(fs.readFileSync("../dist/js/main.js")+'');
eval(fs.readFileSync("../dist/js/ontology.js")+'');

var google_key = "1FYbVHIMfwPJcYl_UgJFEQQ2zee4FkRzQMLWXhyz4qAI"
var datasource = "" // "google" or else it will use local

var database = { verb: [],noun: [], adjective: []}
var lookup = {noun:{},verb:{},adjective:{}}         //index for fetching words by name, populated by processLexicon
var dbkeys = { verb: [],noun: [], adjective: []}    //basically lists of the CSV column names

function loadLexicon(){

    data = fs.readFileSync('csv/nouns.csv')+''
    processLexicon(CSV2JSON(data), 'noun')

    data = fs.readFileSync('csv/verbs.csv')+''
    processLexicon(CSV2JSON(data), 'verb')


    data = fs.readFileSync('csv/adjectives.csv')+''
    processLexicon(CSV2JSON(data), 'adjective')


    fs.writeFile("../dist/js/database.processed.js",
                    '\ufeff var database = ' + JSON.stringify(database)
                 +  '\n\n'
                 +  'var lookup = ' + JSON.stringify(lookup)
                 +  '\n\n'
                 +  'var dbkeys = ' + JSON.stringify(dbkeys)
                 , 'utf8'
                 , function (err) {}
                )
    fs.writeFile('../dist/js/test.txt', '\ufeffThis is an example with accents : São Paulo é è à ' + JSON.stringify(database),'utf8');
    console.log('Updated lexicon'.yellow)
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

        Object.keys(a).forEach(function(val){
            //build list of column names for each word type
            if(x==0) dbkeys[type].push(val)
            
            //remove unnecessary spaces from values
            a[val] = compactString(a[val])
            
            //turn numbers and boolean into the real things
            a[val] = toNumBool(a[val])
        })

        delete a.rowNumber //something that Tabletop seems to add in
        
        prune(a)
        
        for(var key in a) {
            if(a[key] === "--") a[key] = ""
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
            if ("tags" in database[type][z]){
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
            if ("tagsObject" in database[type][z]){
                database[type][z].tags = _.keys( $extend( {}, database[type][z].tagsObject ) ).join(',')
                delete database[type][z].tagsObject
                delete database[type][z].parallelSense
            }
        }
        //end of tag merging


    } //end of noun only section
    
    //rule-based adding of properties to words
    autoAttributes(database[type], type)

    //very final processing
    for (var b in database[type]) {
        // collapse prototype inheritance
        database[type][b] = $extend({},database[type][b])

        // remove empty strings that were created from "--" which were used to block prototype inheritance
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
    var sense = word.proto + "." + number
    var proto_sense = pickOne(database[type], {name: sense, type:type})

    if(proto_sense) {
        if (proto_sense.name==word.name) return //don't create a sense when the word already is the sense
        if (pickOne(database[type], {name: word.name.replace(/(.+?\.)\d*$/,'$1')+number, type:type})) return //don't create a sense if it is already defined

        var new_sense = {}

        //set prototype to the main word
        new_sense.proto = word.name
        new_sense = setProto(new_sense,type,-1)

        //overwrite this senses values with the overwrite-values from the prototype sense
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

//rule-based assignment of word properties
function autoAttributes (lex, type) {
    lex.forEach(function (w) {
    
    //label verb transitivity; 1 = core transitivity, 0.5 = noncore, 1.5 = both
    if (type=='verb') {
        w.trans = 0
        if (goodVal(w.compcore)) w.trans += 1
        if (goodVal(w.compext)) w.trans += 0.5
    }
      
    //noun attributes based on tags
    if (type=='noun') {
        var tagImplications = {
            'object' : {count: true, tang: 2},
            'person' : {anim: 3}
        }
        _.forIn(tagImplications, function(imp,tag){
            if(w.tags && magicCompare(w.tags,tag,{tagmode: true})) {
                _.forIn(imp,function (val,key) {
                    if (!goodVal(w[key])) { //only fill in blanks
                        w[key] = val
                    }
                })
                //_.extend(w,imp)
            }
        })
    }
      
  });
}


//copied from jQuery
function $extend() {
    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false,
        toString = Object.prototype.toString,
        hasOwn = Object.prototype.hasOwnProperty,
        push = Array.prototype.push,
        slice = Array.prototype.slice,
        trim = String.prototype.trim,
        indexOf = Array.prototype.indexOf,
        class2type = {
            "[object Boolean]": "boolean",
            "[object Number]": "number",
            "[object String]": "string",
            "[object Function]": "function",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object RegExp]": "regexp",
            "[object Object]": "object"
        },
        jQuery = {
            isFunction: function (obj) {
                return jQuery.type(obj) === "function"
            },
            isArray: Array.isArray ||
            function (obj) {
                return jQuery.type(obj) === "array"
            },
            isWindow: function (obj) {
                return obj != null && obj == obj.window
            },
            isNumeric: function (obj) {
                return !isNaN(parseFloat(obj)) && isFinite(obj)
            },
            type: function (obj) {
                return obj == null ? String(obj) : class2type[toString.call(obj)] || "object"
            },
            isPlainObject: function (obj) {
                if (!obj || jQuery.type(obj) !== "object" || obj.nodeType) {
                    return false
                }
                try {
                    if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                        return false
                    }
                } catch (e) {
                    return false
                }
                var key;
                for (key in obj) {}
                return key === undefined || hasOwn.call(obj, key)
            }
        };
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
        target = {}
    }
    if (length === i) {
        target = this;
        --i;
    }
    for (i; i < length; i++) {
        if ((options = arguments[i]) != null) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                if (target === copy) {
                    continue
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && jQuery.isArray(src) ? src : []
                    } else {
                        clone = src && jQuery.isPlainObject(src) ? src : {};
                    }
                    // WARNING: RECURSION
                    target[name] = extend(deep, clone, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
}
