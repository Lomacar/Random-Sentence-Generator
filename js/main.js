/*-------------------------------------   BRANCH -------------------------------------*/

function branch(c, r, p, l){   
    this.parent = p || null
    LAST_PARENT = p || LAST_PARENT
    this.label = l || null

    //parse and filter restrictions
    r = parseRestrictions.apply(this, [r])
    //load the requested construction
    c = c(r)
    //wh clauses return a fully evaluated branch, so no need to process them
    if (c.constructor == branch) {
        c.parent = this.parent //maybe a little bit of processing...
        c.label = this.label
        return c
    }


    //some constructions just reroute to other constructions
    while (typeOf(c)==='array' && typeof c[0] == 'function') {
        c[1] = parseRestrictions.apply(this, [c[1]])
        c = c[0]( _.extend({}, r, c[1]) )
    }

    executeBranch.apply(this, [c, r, this])

    //dump almost all other c.properties into this
    for(var prop in c){
        if(prop!='head' && prop!='children')
            this[prop] = c[prop];
    }
    
    //this is probably a word
    if(typeof c.children === 'undefined') {
        //words need a text property
        if(typeof c.text === 'undefined') this.text = c.inflected || c.name

        //create a happy package of all the important restrictions on this word, for grabbing from elsewhere
        //this.R = safe(this)
        if (r) this.R = safe(this, this.type)
    }

} //end branch



function executeBranch(c, r, p){

    //evaluate head first
    if('head' in c){
        this.order = c.order
        this.children = {}

        var newbranch = c.children[c.head][0]
        var headr = _.extend( {}, c.restrictions, r, c.children[c.head][1] )
        this.head = this.children[c.head] = new branch(newbranch, headr, p, c.head)

    }

    //run special functions after head is loaded, if any
    //if(this.head.midlogic)

    //evaluate rest of children
    if('children' in c){
        for(var child in c.children){
            if(this.children[child] != this.head){
                if(typeOf(c.children[child])=='array'){
                    var R = parseRestrictions.apply( this, [c.children[child][1]] ) //restrictions explicitly passed in to branch
                    if(R=="LEAVE") this.children[child] = {text: ""} //this is how we deal with branches that our restrictions told us not to follow

                    else {
                        //if a restriction reset has been requested, clear everything accept nocomplement
                        if (c.children[child][1] && c.children[child][1].reset) r = {nocomplement: r.nocomplement}

                        var probability = c.children[child][2] || 1 //if children have a probability of occurence
                        var tempchildren = []
                        while (probability > Math.random()) { //repeat until the probability dies

                            //Fetch the child branch
                            var sprout = new branch(c.children[child][0], _.extend({}, c.restrictions, R), p, child)
                            if (typeOf(sprout) == 'array')
                            { tempchildren = tempchildren.concat(sprout) }
                            else
                            { tempchildren.push(sprout) }

                            if (probability == 1) probability = 0
                            else probability *= 0.6
                                }

                        //sort the multiple child instances if there is sort criteria
                        if (c.children[child][3]!==undefined) {
                            var sortby = c.children[child][3]
                            tempchildren = tempchildren.sort(function(b,a){
                                if (a[sortby]) {
                                    //items being sorted have property directly, like when sorting words
                                    return a[sortby] - b[sortby]
                                } else {
                                    //items being sorted do not have property, such as when sorting phrases
                                    //property must exist on the head or grandchildhead etc.
                                    return propertySearch2(a,sortby) - propertySearch2(b,sortby)
                                }
                            })
                        }

                        if (tempchildren.length==1) tempchildren = tempchildren[0]
                        else if (tempchildren.length===0) tempchildren = {text: ""}
                        this.children[child] = tempchildren
                    }
                }
                else //presumably this is just a straight object rather than a construction + restrictions to evaluate
                {this.children[child] = c.children[child]}
            }
        }
    }
}

/*-------------------------------------   RESTRICTIONS -------------------------------------*/

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
    if(/^\w+\.(\w+(-\w+)*)(,\w+\.(\w+(-\w+)*))*$/.test(s) && !/\.\d+$/.test(s)) {

        //split comma separated values and parse each one
        if(s.findChar(",")) {
            var multi =  s.split(",").map(function(x){
                return parseSingleRestriction(x)
            })
            //collapse array of objects down to one
            multi = _.extend.apply( this, _.compact(multi) )
            return multi
        }

        //split 'object.property'
        var obj_prop = s.split('.')
        var obj = objectSearch2(obj_prop[0],context)
        var prop = obj_prop[1]

        if (prop.findChar('-')){

            //parse properties that are like anim-class-thing
            var props = prop.split('-')
            props = props.map(function(x){
                //get the {property:value} for each x under obj
                var p = propertySearch2(obj,x)
                var out = {}
                out[x] = p
                return out
            })
            return _.extend.apply( this, _.compact(props) )

        } else {
            //parse simple properties
            var found = propertySearch2(obj,prop)
            if (typeOf(found) == 'object') return found
            var out = {}
            out[prop] = found
            return out
        }
    }

    //restriction has no dots or dashes
    if (expandPlainStrings) return objectSearch2(s, context) // it is either asking for an object
    else return true
}



/*//processing of special instruction characters in
function r_special(r){
    matcha = '!@~<>='.match(/[@~$&#!<>=]/g)[0];

    if(!matcha) return false

    switch(matcha){
        case '#': console.log('Pound it.');
            break;
        case '!': console.log("n't!")
    }

    return matcha
}*/




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
startTime = window.performance.now()
    var regex = "(^|,) *("+query+"|\\.)*("+query+ ")+ *:[^,]*"
    hjg = /(^|,) *(nom|pl|3|n|\.)*(nom|pl|3|n)+ *:[^,]*/
    var outcome = inf.match( new RegExp(regex, "gi"))
timer += window.performance.now() - startTime        

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
    if (r.nocomplement) return {text: ''}
    else if (goodVal(r.complements))  var complement = options(r.complements)
    else if (goodVal(r.compcore))  var complement = options(r.compcore)
    else if (goodVal(r.compext))  var complement = options(r.compext)
    else return {text: ''}

    complement = compactString(complement)

    var constructions = complement.match(/\b[A-Z]+\w*({[^{}]+})*/g)

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
                arg = $.extend({}, r, arg)
            } else {
                arg = $.extend({}, r, {unpack: arg})
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

function options(str){
    if(typeOf(str)!='string') return error("Non-string passed to options function.")

    //options are always wrapped in parentheses. deal with the inner ones first and recursively work outward
    out = str.replace(/\([^()]*\)/g, function(match){
        //prevent splitting on pipes inside {rest:rict|ions}
        match = match.replace(/{.*?}/g, function(m){return m.replace(/\|/g,'###')})

        //multiple options separated by pipes
        if(match.findChar('|')){

            //options with weights
            if(/(^\(|\|) *[0-9.]+ /.test(match)) {
                return choose2(
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

            var threshold = match.match(/^\(?([0-9.]+ )/)
            threshold = threshold ? threshold.pop() : 50 //percentage
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

    //add existing restrictions to the word
    word = $.extend({},r,word)

    //inflect the word
    if(!r.noinflection) inflect(word,r)

    //record this word so it isn't overused within the same sentence
    //if (recentlyUsed && r.type == 'noun' || r.type == 'adjective' || r.type=='verb' ) recentlyUsed.push(word.name.replace(/\d+/g,''))

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
//        if(Object.keys(r).length < 8 && (type=="noun" || type=="adjective" || type=="verb")){
//
//            randy[type] = randy[type] || _.shuffle(_.range(arr.length))
//            
//            var randex
//            while (randex = randy[type].pop()){               
//                if (r_match(r, arr[randex])) {
//                    return arr[randex]
//                }
//            }
//
//            //if the old shuffle list failed, renew it and try again
//            randy[type] = _.shuffle(_.range(arr.length))
//
//            while (randex = randy[type].pop()){               
//                if (r_match(r, arr[randex])) {
//                    return arr[randex]
//                }
//            }
//
//        }

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

    if (isEmpty(restrictions)) return true

    //short circuit for name match or mismatch
    if (('name' in restrictions) && restrictions.orsimilar==true) {
        if (typeof restrictions.name=='undefined') return false
        if (magicCompare(restrictions.name, test_object.proto)) return true
        else return false
    }
    //don't use disabled words
    if(test_object.disabled) return false

    //if (restrictions.type=='noun' || restrictions.type=='verb') restrictions = safe(restrictions, restrictions.type)

    //prevent the repetitive use of words
    //if (recentlyUsed.indexOf(test_object.name.replace(/\d+/g,'')) > -1) return false

    var prohib = test_object.prohibitions
    if(goodVal(prohib)) {//prohib = prohib.replace(/ /g, '')
        //reject if restrictions match prohibitions
        if (prohibited(restrictions, prohib)===true) return false
        prohib = toObject(prohib)
    }

    for(var r in restrictions){

        var rval = restrictions[r];

        //merge word-level and universal prohibitions for given paradigm (r)
        //word level overwrites universal
        var prohibz = prohibitions.descend(r,rval)
        if (typeOf(prohib)=='object') _.extend({},prohibz, prohib)
        if (prohibz && prohibited(test_object, prohibz)===true) return false

        if (typeof test_object[r] !== 'undefined') {

            //var compareUs = restrictions.reverse===true ? [test_object[r],rval] : [rval, test_object[r]]
            //if (magicCompare(compareUs[0], compareUs[1], {tagmode: (r=='tags'||r=='vtags')})) {
            if (magicCompare(test_object[r], rval, {tagmode: (r=='tags'||r=='vtags')})) {
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
}

/*-------------------------------------   BRANCH NAVIGATION   -------------------------------------*/

function objectSearch2(what, context, graceful){
    if (!context) {
        if (!graceful) console.warn("Object search failed for "+what)
        return null
    }

    if (context.label==what) return context //haha!

    if (!context.children) {
        if (!context.parent) {
            if (!graceful) console.warn("Object search failed for "+what)
            return null
        }
        else {
            return objectSearch2(what, context.parent, graceful) || (graceful?context:null)
        }
    }
    return (what in context.children) ? context.children[what] : (objectSearch2(what, context.parent, graceful) || (graceful?context:null))
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

function propertySearch2(object, property) {
    if (typeOf(object)!=='object') {
        //console.warn("Invalid object passed to propertySearch.")
        return null
    }

    if (property in object) return object[property]

    if ('head' in object) {
        return propertySearch2(object.head, property)
    } else {
        //console.warn("Property search failed for " + property)
        return null
    }
}


/*-------------------------------------   OUTPUT -------------------------------------*/

//essentially the toString method for constructions
function stringOut(c){
    if(c===undefined) return undefined
    if(typeof c.children !== 'undefined'){

        var string = c.order.replace(/([^_ ])+/g, replacer)

        if (typeof c.postlogic==='function') string = c.postlogic(string)

        return string.replace(/\./g,'')                     //remove dots
                     .replace(/\d+([^\]\d]|$)/g,"$1")       // remove numbers, except for [e123] errors
                     .replace("_","").replace("|","")       // remove underscores and pipes
                     .replace(/  +/g,' ')                   // remove extra spaces
    }

    else return c.text


    function replacer(a){

        //optional words have an asterisk
        if (a.match(/\*/)){

            //optional undefined or empty words return ''
            if (!c.children[a.slice(0,-1)])
                return ''
                else
                    a = a.slice(0,-1)

                    }else{ //not optional

                        //if there is no child with the given name then treat it as literal
                        if (!c.children[a])
                            return a
                            }

        //break down arrays of adjectives or whatnot
        if(typeOf(c.children[a])=='array') {
            var tempstr = ""
            $.each(c.children[a], function (index, value){tempstr += " "+stringOut(value)})
            return tempstr
        }

        //or fetch single item
        else {
            var furtherIn = stringOut(c.children[a])

            //if (!furtherIn) {} //error("There was no child '"+a+"' to render.")
            return furtherIn===undefined ? '[???]' : furtherIn
        }

    }

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

        if(arg%2==0) {
            if(a==0) continue
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

            var pdm_list = _.clone(probabilities[pdm])
            for (var i=1; i<pdm_list.length; i+=2){

                var pval = pdm_list[i]
                var prohib = prohibitions.descend(pdm, pval)
                if ( collide(prohib,r) ) pdm_list[i-1] = 0

            }
            out_r[pdm] = choose(pdm_list)

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

    delete rr.inflected
    delete rr.type

    delete rr.label
    delete rr.text
    delete rr.reverse

    rr = _.omit(rr, function(x){
        return typeof x == 'object' || typeof x == 'function' || !goodVal(x)
    })

    if (type) {
        if(type=='pronoun') type='noun'
        rr = _.pick(rr, dbkeys[type])
    }

    return rr
}
