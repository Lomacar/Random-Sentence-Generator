/* jshint curly: false, unused: false */ /* globals _, LAST_PARENT, RESTRICTIONS, typeOf, error, magicCompare, window, goodVal, toObject, paradigms, prohibitions, isEmpty, $, database, toArray, compactString */

/*-------------------------------------   RESTRICTIONS -------------------------------------*/

function globalRestrictions(r){
    r=r||{}

    registerGR(r)

    //when a global restriction matches the current constructions label, pull it back in to the normal restrictions
    if (!isEmpty(RESTRICTIONS) && this.label) {

        Object.keys(RESTRICTIONS).forEach( m =>{
            if (m.indexOf(this.label+'.')==-1) return

            var mKey = m.substr(m.indexOf('.')+1) //chop off the first part before the .
            if(r[mKey] && theseAreTags(mKey)) {
                //merge tags together with an &
                r[mKey] += ' & ' + RESTRICTIONS[m]
            } else {
                r[mKey] = RESTRICTIONS[m]
            }
            delete RESTRICTIONS[m]
        })
    }

    return r
}

function registerGR(r) {
    //transfer restrictions with dots in their names to the global RESTRICTIONS object
    Object.keys(r).forEach( m =>{
        if (m.findChar('.')) {
            RESTRICTIONS[m] = r[m]
            delete r[m]
        }
    })
}

function parseRestrictions(restrictions){
    if (typeof restrictions==='undefined') return;
    if (isEmpty(restrictions)) return restrictions;

    //strings can be passed as restrictions. they are expected to eval to just an object, no property
    if (typeof restrictions==='string') {
        return parseSingleRestriction(restrictions, this, true) || {}
    }

    //if restrictions is an object (usually), parse the string values of each element
    var that = this
    var out_restrictions = {}

    $.each(restrictions, function(r){
        if (restrictions[r]=='$') restrictions[r] = '$.' + restrictions[r] //if restriction is like anim:$ it becomes anim:$.anim

        var expando = r=='unpack' //this allows entire words to be unpacked in the restrictions
        var arrr = parseSingleRestriction(restrictions[r], that, expando)
        if (arrr===null) {

            console.warn(r + " evaluated to null in " + that.label)

        } else if (typeOf(arrr)=='object') {

            if( _.size(arrr)==1 && !expando ){
                out_restrictions[r] = arrr[_.keys(arrr)[0]] //for restrictions like {thing: 'subject.other'}
            } else {
                _.extend( out_restrictions, arrr ) //for everything else
            }

        } else if (arrr===true) {

            out_restrictions[r] = restrictions[r] //plain strings and numbers

        }

    }) //end each restriction

    return out_restrictions

} //end parseRestrictions

function parseSingleRestriction(s, context, expandPlainStrings){
    //type check
    if(typeof s === 'object' || typeof s === 'function'){
        //we don't allow objects or other crazy nonsense inside the restrictions object
        return false
    }
    if(typeof s != 'string') return true //numbers could make it up to this point

    //expand "object.property(-property)(,obj.property)" to {property:value}
    if(/^[<>!]?(\w+\.)+\w+(-\w+)*(,(\w+\.)+\w+(-\w+)*)*$/.test(s) && !/\.\d+$/.test(s)) {

        //split comma separated values and parse each one
        if(s.findChar(",")) {
            var multi = s.split(",").map(function(x){
                return parseSingleRestriction(x)
            })
            //collapse array of objects down to one
            multi = _.extend.apply( this, _.compact(multi) )
            return multi
        }

        //temporarily detach special chars like !<>
        // /[A-Za-zÀ-ÖØ-öø-ÿ\-_]+\d*(\.\d+)?(\.\w)?/g //regex for what a complete word.prop can look like
        var split = s.match(/^(\W+)(.+)$/)
        var specialChars = ""
        if (split) {
            specialChars = split[1] || ""
            s = split[2] || ""
        }

        //split 'object.property'
        var obj_prop = s.split('.')
        var obj = objectSearch(obj_prop[0],context)
        var prop = obj_prop[1]

        if (prop.findChar('-')){

            //parse properties that are like anim-class-thing
            var props = prop.split('-')
            props = props.map(function(x){
                //get the {property:value} for each x under obj
                var p = propertySearch(obj,x)
                if (typeOf(p) == 'object') return p
                var out = {}
                out[x] = p
                return out
            })
            return _.extend.apply( this, _.compact(props) )

        } else {
            //parse simple properties
            prop = _.rest(obj_prop).join('.') //in case restriction is like 'obj.child...prop'
            var found = superSearch(prop,obj)
            if (typeOf(found) == 'object') return found
            var out = {}

            if (goodVal(found) && specialChars) {
                found += ''

                if (/\d *(, *\d *)+/.test(found)) { //if found property is like '4,5,6'
                    if (specialChars.findChar('<')) {
                        found = '<'+found.split(',').pop() //this assumes all comma-separated numbers are arranged from least to greatest
                    } else if (specialChars.findChar('>')) {
                        found = '>'+found.split(',')[0]
                    }

                } else { //any other situation with special characters (probably like '!solid')
                    found = found.replace(/(^|, ?)/g,'$1'+specialChars) //reattach specialChars to return string, add them to each comma separated item, if applicable
                                 .replace(/,/g,'|')
                }
            }

            out[prop.match(/[^.]+$/)] = found //regex makes sure that things like vp.verb.vtags are output as just vtags
            return out
        }
    }

    //restriction has no dots or dashes
    if (expandPlainStrings) return objectSearch(s, context) // it is either asking for an object
    else return true
}




/*-------------------------------------   INFLECT -------------------------------------*/

//picks a specific inflection of/for a word if it has anything special
//determines all categories that apply to the word type that haven't been specified by restrictions
function inflect(word, r){
    r = r || {}
    var query = []
    //paradigms specific to this word type, and a new copy so we can hack and slash it
    var pdigms = _.cloneDeep(paradigms[word.type])
    //word level prohibitions
    var prohib = word.prohibitions
    prohib = prohib ? toObject(prohib) : null

    for(var para in pdigms){

        //remove prohibited categories from paradigm
        for (var c = pdigms[para].length - 1; c >= 0; c--) {

            var cat = pdigms[para][c]

            //if a word prohibits a category, remove it
            if(prohib && prohib[para] === cat) {
                pdigms[para].splice(c, 1)
                continue
            }

            //if a word has a certain property which prohibits a category (universally), remove it
            var uni = prohibitions.descend(para, cat)
            for (var phb in uni){
                if(uni[phb] === word[phb]){
                    pdigms[para].splice(c, 1)
                }
            }
        }
        //if a category has already been specified use it
        if(goodVal(r[para])) {

            if (pdigms[para].indexOf(r[para].toString())>-1 || pdigms[para].indexOf(r[para])>-1)
            //if (magicCompare(r[para], pdigms[para].toString()))
                {word[para] = r[para]}
            else {
                console.warn(
                    "Category '"+para+':'+r[para]+"' not found for "+word.type+" '"+word.name+"'. " +
                    "A random category will be assigned."
                )
                word[para] = _.sample(pdigms[para])
            }
        }
        //otherwise pick one at random
        else {

            word[para] = _.sample(pdigms[para])
        }

        query.push(word[para])
    }

    //if the word doesn't have a custom inflection we can stop here
    if(!word.inflections) {
        word.inflected = ""
        return word
    }

    //magical CSS-like application of inflections

    word.inflected = resolve(query, word.inflections)
    return word
}


//magical CSS-like application of inflections
//takes array of different inflection categories, like [past, pl, 3]
//and a string of 'selectors' + rules like 'past.pl:xyz, past.pl.3:abc'
//returns the best matching 'rule' (ie. 'abc')
//differs from css in that an over-specified rule will still match whatever it can
//so acc.sg.1.m will match acc.sg.1:me
function resolve(query,inf) {

    //find all rules that possibly apply to the given restrictions
    query = query.join("|")
    var regex = "(^|,) *("+query+"|\\.)*("+query+ ")+ *:[^,]*"
    var outcome = inf.match( new RegExp(regex, "gi"))

    if(outcome!==null){

        //pick the last most specific rule (the one with the most dots), like CSS
        return outcome.sort(function(a,b){
            return a.split(".").length>b.split(".").length
        })
        .pop().split(":").pop().trim()

    } else {
        return ''
    }
}

/*-------------------------------------   COMPLEMENT   -------------------------------------*/

//take string complement description, return complement construction object
function complement(r){
    var forced = (r.nocomplement == -1)

    if (r.nocomplement==true) return {text: ''}
    else if (goodVal(r.complements))  var complement = options(r.complements, forced)
    else if (goodVal(r.compcore))  var complement = options(r.compcore, forced)
    else if (goodVal(r.compext))  var complement = options(r.compext, forced)
    else return {text: ''}

    complement = compactString(complement)

    var constructions = complement.match(/[A-Z][A-Z1-9_]*(\b|{[^{}]+})+/g)

    if (constructions == null) return {text: complement} //this must be a simple word complement like fall _down_

    var children = {}, c, con, func
    for (c in constructions){
        con = constructions[c]

        func = con.match(/[A-Z]+\w*/)[0]

        delete r.complements
        delete r.compcore
        delete r.compext

        var arg = con.match(/{.+}/)
        if (arg===null) {
            arg = r
        } else {
            arg = arg[0].slice(1,-1)
            if(arg.findChar(':')){
                arg = toObject(arg)
                arg = mergeR(r, arg)
            } else {
                arg = {...r, unpack: arg}
            }

        }

        if (window[func]===undefined) {
            return {text: error("No such construction exists as '"+func+"'.")}
        }

        complement = complement.replace(con, 'c' + c)
        children['c'+c] = [window[func], arg]
    }



    return {
        order: complement,
        head: "c0",
        children: children
    }
}

// takes a string in format '(55 option_one | 45 option_two)', or '(option_one|otion_two)' or just '(option_fifty_fifty)'
// and returns one option or an empty string
// if forced==true it does things to make sure no empty string is returned
function options(str, forced){
    if(typeOf(str)!='string') return error("Non-string passed to options function.")

    //options are always wrapped in parentheses. deal with the inner ones first and recursively work outward
    var out = str.replace(/\([^()]*\)/g, function(match){
        //prevent splitting on pipes inside {rest:rict|ions}, except for pipes inside parentheses inside restriction
        match = match.replace(/{[^()]+?}/g, function(m){return m.replace(/\|/g,'###')})

        //multiple options separated by pipes
        if(match.findChar('|')){

            //options with weights
            var picker = forced ? choose : choose2
            if(/(^\(|\|) *[0-9.]+ /.test(match)) {
                return picker(
                    _.flatten(
                        match.slice(1,-1)
                        .split("|")
                        .map( function(x){
                            return x.match(/^ *([0-9.]*) +(.*)$/).slice(1)
                        })
                    )
                )
            //options without weights
            } else {
                return _.sample( match.slice(1,-1).split("|") )
            }

        //single options
        } else {

            var threshold
            if (forced) threshold = 100
            else {
                threshold = match.match(/^\(?([0-9.]+ )/)
                threshold = threshold ? threshold.pop() : 50 //percentage
            }

            return Math.random()*100 < threshold ? match.replace(/^\(([0-9.]+ +)?(.*)\)$/, '$2') : ''

        }
    })

    return out==str ? str.replace(/###/g,'|') : options(out)
}


/*-------------------------------------   WORD GETTING -------------------------------------*/

//selects a word from the database that matches the given restrictions
function get(r){
    if(r.type==undefined) console.warn("Word type not specified for get function.")

    var word = pickOne(database[r.type], r) || false

    if(!word)
        return {text: error("No "+r.type+" could be get'd with the following restrictions: "+JSON.stringify(r))}

    //store original database word inside "word" before merging restrictions into "word"
    word.orig = _.clone(word)

    //add existing restrictions to the word
    word = $.extend({},r,word)

    //inflect the word
    if(!r.noinflection) inflect(word,r)

    //record this word so it isn't overused within the same sentence
    if (recentlyUsed && r.type == 'noun' || r.type == 'adjective' || r.type=='verb' ) recentlyUsed.push(word.name.replace(/\d+/g,''))

    return word
}

//utility function for randomly picking one element from an array
function pickOne(arr, r){

    if(typeOf(arr) == 'object') arr = toArray(arr).slice() //in case object was past in
    else arr = arr.slice();
    r = r || null;
    var type = r.type;

    if(!isEmpty(r)){

        //short circuit for name match
        if (('name' in r) && (r.type=='noun' || r.type=='verb' || r.type=='adjective' ) && !r.orsimilar) {
            if (typeof r.name=='undefined') return false
            return database[r.type][lookup[r.type][r.name]]
        }

        //for main word classes use their corresponding shuffled list to randomly rummage through the database
    //    if(Object.keys(r).length < 8 && (type=="noun" || type=="adjective" || type=="verb")){

    //        randy[type] = randy[type] || _.shuffle(_.range(arr.length))

    //        var randex
    //        while (randex = randy[type].pop()){
    //            if (r_match(r, arr[randex])) {
    //                return arr[randex]
    //            }
    //        }

    //        //if the old shuffle list failed, renew it and try again
    //        randy[type] = _.shuffle(_.range(arr.length))

    //        while (randex = randy[type].pop()){
    //            if (r_match(r, arr[randex])) {
    //                return arr[randex]
    //            }
    //        }

    //    }
        var randex

        while (arr.length) {
            randex=Math.floor(Math.random()*arr.length)
            if (r_match(r, arr[randex])) {
                return arr[randex]
            }
            else arr.splice(randex,1)
        }
    }
    //just pick one at random
    else return _.sample(arr);
}

//tests an object against a restrictions template
//if they have the same properties they must match, otherwise, who cares
//also rejected if restrictions match prohibitions on object
function r_match(restrictions, test_object){

    //short circuit for name match or mismatch
    if (('name' in restrictions) && restrictions.orsimilar==true) {
        if (typeof restrictions.name=='undefined') return false
        if (magicCompare(restrictions.name, test_object.proto)) return true
        else return false
    }

    //if (restrictions.type=='noun' || restrictions.type=='verb') restrictions = safe(restrictions, restrictions.type)

    //prevent the repetitive use of words
    if (recentlyUsed.indexOf(test_object.name.replace(/\d+/g,'')) > -1) return false

    var wProhib = test_object.prohibitions
    if(goodVal(wProhib)) {//prohib = prohib.replace(/ /g, '')
        //reject if restrictions match prohibitions
        if (prohibited(restrictions, wProhib)===true) return false
        wProhib = toObject(wProhib)
    }

    for(var r in test_object){

        var rval = test_object[r];

        //merge word-level and universal prohibitions for given paradigm (r)
        //word level overwrites universal
        var uProhib = prohibitions.descend(r,rval)
        if (typeOf(wProhib)=='object') _.extend({},uProhib, wProhib)
        if (uProhib && prohibited(test_object, uProhib)===true) return false

        if (typeof restrictions[r] !== 'undefined') {

            if (magicCompare(restrictions[r], rval, {tagmode: theseAreTags(r)})) {
                continue
            } else return false

        } else continue

        }

    return true
}

function prohibited(testee,prohibs){
    if(isEmpty(prohibs) || testee===undefined || prohibs===undefined) return

    //convert to objects
    testee=toObject(testee)
    prohibs=toObject(prohibs)

    for(var p in prohibs){

        //if testee and prohib have opinions on the same topic...
        if(!goodVal(testee[p]) || !goodVal(prohibs[p])) continue

        var prohb = prohibs[p]+""
        var testy = testee[p]+""
        prohb = prohb.replace(/,/g,'|')
        testy = testy.replace(/,/g,'|')

        //if testee and prohib are straight up equal then prohibit
        if (prohb==testy) return true
        //if there are multiple options for one prohib have a showdown
        if(/[(|)]/.test(prohb)) {
            prohb = prohb.match(/[^(|)]+/g)
            testy = testy.match(/[^(|)]+/g)
            if (_.difference(testy, prohb).length===0) return true
                }
        //if testee has options and prohibs doesn't then obviously we're good
    }

    return false

    //"asd:123 (<<9a+ |_.)".match(/[^\s(|)]+/g)
    //return true
    //return true
}

/*-------------------------------------   BRANCH NAVIGATION   -------------------------------------*/

function objectSearch(what, context, graceful){
    if (!context) {
        if (!graceful) console.warn("Object search failed for "+what)
        return null
    }

    if (context.label==what) return context //aha!

    if (!context.children) {
        if (!context.parent) {
            if (!graceful) console.warn("Object search failed for "+what)
            return null
        }
        else {
            return objectSearch(what, context.parent, graceful) || (graceful?context:null)
        }
    }
    if (what in context.children) return context.children[what]
    else if (context.parent){
        return objectSearch(what, context.parent, graceful) || (graceful?context:null)
    } else {
        return console.warn("Object search failed for "+what+" -> " + stringOut(context))
    }

    //return (what in context.children) ? context.children[what] : (objectSearch(what, context.parent, graceful) || (graceful?context:null))
}

//searches up the parent nodes for the first object that isn't labeled as what
//what can be an string or array of strings
function objectSearchCrazy(what, context){
    if (!context) {
        console.warn("Crazy object search failed against "+what)
        return null
    }

    if (typeof what=='string') what = [what]

    if (_.contains(what,context.label)) return objectSearchCrazy(what, context.parent) //label exists in blacklist
    else return context
}

function propertySearch(object, property, searchChildren) {
    if (typeOf(object)!=='object') {
        console.warn("Invalid object passed to propertySearch.")
        return null
    }

    if (property in object) return object[property]

    if (searchChildren && 'children' in object && property in object.children) return object.children[property]

    if ('head' in object) {
        return propertySearch(object.head, property)
    } else {
        //console.warn("Property search failed for " + object.label + "." + property)
        return null
    }
}

//give it a path like 'path.to.some.thing' or ['path','to','some','thing'] and a starting object for context
//will recursively search down path and return final object if found
//will skip children and search (great)grandchildren of head if necessary
function superSearch(path,context) {
    if (typeof path == 'string') path = path.split('.')
    else if (typeOf(path)!='array') error('Invalid path in superSearch.')

    var found = propertySearch(context,path[0],true)

    if (typeof found === 'null') {
        error('superSearch failed at '+context.label+'.'+path[0])
        return null
    } else if (path.length>1){
        return superSearch(_.rest(path),found)
    } else {
        return found
    }
}


/*-------------------------------------   OUTPUT -------------------------------------*/

//essentially the toString method for constructions
function stringOut(c,id,recur){
    var outString
    if(c===undefined) return undefined
    if(typeof c.children !== 'undefined'){
        outString = c.order.replace(/([^_ ])+/g, replacer)
        outString = stringCleaning(outString, c,recur)
    }
    else outString = c.text


    function replacer(a){

        //optional words have an asterisk
        if (a.match(/\*/)){

            //optional undefined or empty words return ''
            if (!c.children[a.slice(0,-1)]) return ''
            else a = a.slice(0,-1)

        }else{ //not optional

            //if there is no child with the given name then treat it as literal
            if (!c.children[a]) return xrayMode ? '<div class="literal">'+a+'</div>' : a
        }

        //break down arrays of adjectives or whatnot
        if(typeOf(c.children[a])=='array') {
            var lastbit = ""
            var temp = c.children[a].map( i => stringOut(i,undefined,1) ).filter(Boolean)
            //tempstr = tempstr.join(c.separator[0])
            if (c.separator[1]!==undefined) {
                var lastbit = c.separator[1] + temp.pop()
            }
            temp = temp.join(c.separator[0]) + lastbit

            return temp
        }

        //or fetch single item
        else {
            var furtherIn = stringOut(c.children[a],undefined,1)

            //if (!furtherIn) {} //error("There was no child '"+a+"' to render.")
            return furtherIn===undefined ? '[???]' : furtherIn
        }

    }


    var ishead = c.label != null && (c.label==c.parent.actualHead || typeof c.parent.actualHead == 'undefined' && c==c.parent.head) ? 'head' : ''

    if ( xrayMode && (c.label == null || c.parent.labelChildren) ) {
        C.list = C.list || []
        if (typeof id != 'undefined') C.list[id] = c //replace construction in list when this is triggered by a head-complement update
        else C.list.push(c)                             //most of the time just append construction to list
        var label = c.desc||c.label||'clause'
        var constituentClasses = 'class="constituent '+ishead+' '+c.label+'-"'
        return outString ?
            '<div id="['+C.list.length+']" '+ constituentClasses +'><div class="label">'+label+'</div><div class="construction"> '+stringCleaning(outString,c,recur)+'</div></div>'
            : c.parent && c.parent.hasComplement ?
                //placeholders needed for potential complements
                '<div id="['+C.list.length+']" '+ constituentClasses +'></div>'
                : ''

    } else if (debugMode && (c.label == null || c.parent.labelChildren)) {

        var json = c.restrictions ? JSON.stringify(c.restrictions).replace(/,\"/g,"\n\"") : ""

        var label = c.desc||c.label||'clause'
        var constituentClasses = 'class="constituent '+ishead+' '+c.label+'-"'
        return outString ?
            '<div '+ constituentClasses +'><div title=\''+json+'\' class="label">'+label+'</div><div class="construction"> '+stringCleaning(outString,c,recur)+'</div></div>'
            : c.parent && c.parent.hasComplement ?
                //placeholders needed for potential complements
                '<div '+ constituentClasses +'></div>'
                : ''

    } else {
        return outString
    }

}

function stringCleaning(string, c, recur){
    string = string.replace(/\.([^ \b])/g,"$1")             // remove dots that aren't at the end of words
                   .replace('@','')                        // remove @ used for phrasal verbs
                   .replace(/  +/g,' ')                     // remove extra spaces
                   .replace(/ ,/,',')                       // remove spaces before commas
    if (!debugMode) 
        string = string.replace(/([^\^])\d+([^\]\d]|$)/g,"$1$2")// remove numbers, except for [e123] errors and escaped numbers (^2)
    
    //construction specific cleaning
    if (typeof c.postlogic==='function') string = c.postlogic(string)

    if (!recur) {
        //return with final string cleaning
        string = string.replace(/_/g,"").replace("|","") // remove underscores and pipes
                             .replace(/\^/g,'')                // remove escape characters
    }

    return string
}



/*------------------------------------- Construction Instructions -------------------------------------*/

function route(r, choices){
    if (typeof r==='undefined') {
        console.warn('Undefined selector for route function. Picking one of these at random: '+ JSON.stringify(choices))
        return _.sample(choices)
    }

    if (r==='' || r===null) {
        console.warn('Empty selector for route function.')
        return _.sample(choices)
    }

    return choices[r] || choices.rest || ""
}

function choose(){
    var total = 0
    var weights = []
    var values = []
    var argz = typeOf(arguments[0])=="array" ? arguments[0]: arguments

    for(var arg in argz){
        //even numbers need to be the weights (0,2,4,6)
        var a = +(argz[arg])

        if(arg%2===0) {
            if(a===0) continue
            total += a
            weights.push(total)
            values.push(argz[parseInt(arg)+1])
        }
    }
    var rand = Math.random()*total
    for (var w=0; w<weights.length; w++){
        if(weights[w] > rand)	return values[w]
    }
}

//assumes sum of weights <= 100
//can return undefined
function choose2 () {
    var rand = Math.random() * 100 //a percentage
    var total = 0
    var weights = []
    var values = []
    var argz = typeOf(arguments[0])=="array" ? arguments[0]: arguments

    for(var arg in argz){
        //even numbers need to be the weights (0,2,4,6)
        var a = +(argz[arg])

        if(arg%2==0) {
            if(a==0) continue
            total += a
            weights.push(total)
            values.push(argz[parseInt(arg)+1])
        }
    }

    for (var w=0; w<weights.length; w++){
        if(weights[w] > rand)	return values[w]
    }

    return ''
}

//take a restriction object and return just the ones specified in 'pdgms'
//if a paradigm hasn't been specified then add a random choice for it
//according to the global probabilities settings
function decide(r, pdgms, filter){
    r = r||{}
    var out_r = filter ? {} : r //filter==true removes all restrictions except the ones passed in to pdgms

    pdgms = pdgms.split(',')

    $.each(pdgms, function (index, pdm){

        if (!goodVal(r[pdm])) { //gotta choose one at random, sort of

            //get the paradigm probabilities and filter it against 
            //universal probabilities that collide with the given restrictions
            var pdm_list = _.clone(probabilities[pdm])
            if (pdm_list) {
                for (var i = 1; i < pdm_list.length; i += 2) {

                    var pval = pdm_list[i]
                    var prohib = prohibitions.descend(pdm, pval)
                    if (collide(prohib, r)) pdm_list[i - 1] = 0

                }
            }
            out_r[pdm] = choose(pdm_list) //pick a paradigm based on surviving valid probabilities

        } else { //keep the existing value
            out_r[pdm] = r[pdm]
        }

        if (out_r[pdm]===undefined) console.warn("Could not decide '"+pdm+"'.")
    })

    return out_r
}

//clear out all possible troublesome properties from a restriction object
function safe(r, type){
    if (typeof r == 'undefined') return

    var rr = _.clone(r)
    delete rr.name
    delete rr.proto
    delete rr.prohibitions
    delete rr.complements
    delete rr.compcore
    delete rr.compext
    delete rr.inflections
    delete rr.trans //should this be done?

    delete rr.inflected
    delete rr.type

    delete rr.label
    delete rr.text

    rr = _.omit(rr, function(x){
        return typeof x == 'object' || typeof x == 'function' || !goodVal(x)
    })

    if (type) {
        if(type=='pronoun') type='noun'
        rr = _.pick(rr, dbkeys[type])
    }

    return rr
}
