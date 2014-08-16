/*-------------------------------------   BRANCH -------------------------------------*/

function branch(c, r, p, l){
    this.parent = p || null
    this.label = l || null

    //parse and filter restrictions
    this.parseRestrictions = parseRestrictions
    var r = this.parseRestrictions(r)

    //load the requested construction
    var c = c(r)
    //some constructions just reroute to other constuctions
    while(typeOf(c)==='array' && typeof c[0] == 'function'){
        c = c[0]( $.extend({}, r, c[1]) )
    }

    //evaluate head first
    if("head".in(c)){
        this.order = c.order
        this.children = {}

        this.head = this.children[c.head] = new branch(c.children[c.head][0], $.extend({}, c.restrictions, r, c.children[c.head][1]), this, c.head)

        //remove properties from the head that have dots in them like the inflections list
        //this is supposed avoid problems with these ending up in the restrictions and then getting
        //parsed as obj.prop. Hopefully this doesn't cause other problems
        for (var prop in this.head) {
            if(typeof this.head[prop] == 'string' && this.head[prop].indexOf('.')!=-1)	delete this.head[prop]
                }
        //add the head itself to the restrictions (useful at the word level)
        var r = $.extend({}, r, this.head)
        }

    //run special functions after head is loaded, if any
    //if(this.head.midlogic)

    //evaluate rest of children
    if("children".in(c)){
        for(var child in c.children){
            if(this.children[child] != this.head){
                if(typeOf(c.children[child])=='array'){
                    var R = this.parseRestrictions(c.children[child][1]) //restrictions explicitly passed in to branch
                    if(R=="LEAVE") this.children[child] = {text: ""} //this is how we deal with branches that our restrictions told us not to follow

                    else {
                        var probability = c.children[child][2]||1 //if children have a probability of occurence
                        var tempchildren = []
                        while(probability>0 && probability>Math.random()){ //repeat until the probability dies

                            //Fetch the child branch
                            tempchildren.push( new branch(c.children[child][0], $.extend({}, c.restrictions, r, R), this, child) )

                            if (probability==1) probability = 0
                            //else probability *= probability
                                }
                        //sort the multiple child instances if there is sort criteria
                        if (c.children[child][3]!=undefined) {
                            var sortby = c.children[child][3]
                            tempchildren = tempchildren.sort(function(b,a){
                                return a[sortby] - b[sortby]
                            })
                        }

                        if (tempchildren.length==1) tempchildren = tempchildren[0]
                        else if (tempchildren.length==0) tempchildren = {text: ""}
                        this.children[child] = tempchildren
                    }
                }
                else //presumably this is just a straight object rather than a construction + restrictions to evaluate
                {this.children[child] = c.children[child]}
            }
        }
    }

    //dump almost all other c.properties into this
    for(prop in c){
        if(prop!='head' && prop!='children')
            this[prop] = c[prop];
    }

    //words need a text property
    if(!"children".in(c)) {
        if(!"text".in(c)) this.text = c.inflected || c.name
            }



    /*-------------------------------------   RESTRICTIONS -------------------------------------*/

    function parseRestrictions(restrictions){
        if (typeof restrictions==='undefined') return;
        if (isEmpty(restrictions)) return restrictions;

        var obj_to_search //these two variables are needed for the error messages
        var prop_to_search

        //strings can be passed as restrictions. they are expected to eval to just an object, no property
        if (typeof restrictions==='string') {

            //if restriction string is like 'some.thing'
            if (restrictions.match(/\./)){
                var obj = objectSearch(restrictions, this)
                obj_to_search = restrictions.split('.')[0]
                if(!obj) {
                    console.warn('Object "'+obj_to_search.label+'" could not be found from "'+this.label+'".')
                    return
                }
                var prop = restrictions.split('.')[1]

                if(!prop.in(obj)){
                    obj = propertySearch(obj, prop)
                    if (!obj){
                        console.warn('Property "'+prop+'" under object "'+obj_to_search.label+'" could not be found from "'+this.label+'".')
                        return
                    }
                }
                restrictions = obj[prop]
            }

            else if (restrictions.in(this.children))
                return this.children[restrictions]
                else
                    if ('parent'.in(this)){
                        var path = restrictions.match("parent.children") ? restrictions.replace("parent.", "parent.parent.") : "this.parent.children."+restrictions
                        restrictions = this.parseRestrictions(path)
                    }else{
                        console.warn('Object "'+restrictions+'" could not be found from "'+this.label+'".')
                        return
                    }
        }

        //TODO: Use these variables!
        var last_obj //this caches the last object found so that you don't have to recursively search every time
        var last_obj_str //this is the string to make the actually comparison

        var special

        //if restrictions is an object (usually), parse the string values of each element
        for(var r in restrictions){
            if(typeof restrictions[r] === 'object' || typeof restrictions[r] === 'function'){
                //we don't allow objects or other crazy nonsense inside the restrictions object
                delete restrictions[r]
                continue
            }
            if(typeof restrictions[r] != 'string') continue //numbers could make it up to this point


            //expand "object.property" to property value
            if(restrictions[r].indexOf('.') > 0) {

                /*//remove special notation like ! from the beginning of strings that are supposed to be "object.property"
                if ((special = restrictions[r].match(/^[^A-Za-z]+/g)) != null){
                    special = special[0];
                    restrictions[r] = restrictions[r].slice(restrictions[r].search(/[A-Za-z]+/g));
                } else {special = ''}*/ var special = ''

                //if obj can't be found among siblings recurse to uncles, great-uncles...
                var obj = objectSearch(restrictions[r], this)
                //prop is just the string after the dot
                var prop =prop_to_search= restrictions[r].split('.')[1]
                obj_to_search = restrictions[r].split('.')[0]

                //if an object was found
                if(obj){
                    //if that object has the property, congratulations
                    if(prop.in(obj)){
                        restrictions[r] = special.length ? special + obj[prop] : obj[prop]
                    }else{//if no property found you sadly must search down through all the sub-heads of the found object
                        obj = propertySearch(obj, prop)
                        if (obj) { //if an object with prop was finally found, congratulations!
                            restrictions[r] = special.length ? special + obj[prop] : obj[prop]
                        }	else { //admit defeat
                            console.warn('Property "'+prop_to_search+'" under object "'+obj_to_search+'" could not be found for "'+r+'" from "'+this.label+'".')
                            delete restrictions[r] //remove this pesky restriction
                            continue
                        }
                    }
                } else {
                    console.warn('Object "'+obj_to_search.label+'" could not be found for "'+r+'" from "'+this.label+'".')
                    delete restrictions[r] //remove this pesky restriction
                    continue
                }

                /*if (special.length){ //this was an already expanded restriction, re-attach special notation if applicable
                    restrictions[r] = special + restrictions[r]
                }*/
            }

            if (r=='exist' && !restrictions[r]) return "LEAVE"
                }
        return restrictions
    }

}

//processing of special instruction characters in
function r_special(r){
    matcha = '!@~<>='.match(/[@~$&#!<>=]/g)[0];

    if(!matcha) return false

    switch(matcha){
        case '#': console.log('Pound it.');
            break;
        case '!': console.log("n't!")
    }

    return matcha
}

/*-------------------------------------   INFLECT -------------------------------------*/

//picks a specific inflection of/for a word if it has anything special
//determines all categories that apply to the word type that haven't been specified by restrictions
function inflect(word, r){
    word.inflections = word.inflections||""

    if(!"inflections".in(word)) {
        word.inflected = ""
        return
    }


    r = r || {}
    var query = []
    //paradigms specific to this word type, and a new copy so we can hack and slash it
    var pdigms = $.extend(true,{}, paradigms[word.type])
    //word level prohibitions
    var prohib = word.prohibitions

    for(var para in pdigms){

        //remove prohibited categories from paradigm
        for(var cg=pdigms[para].length-1; cg>=0; cg--){
            //word level prohibitions
            if(prohib!=undefined){
                prohib = prohib.replace(/ /g, '')
                var regex = '(^|,)'+para+':'+ pdigms[para][cg]+'($|,)'
                if (prohib.match(new RegExp(regex, "i"))) pdigms[para].splice(cg,1)
                    }
            //universal prohibitions
            var prohibz = prohibitions.descend(word.type, para, pdigms[para][cg])
            if(prohibz!=undefined){
                for(var p in prohibz){
                    if(prohibz[p]==word.descend(p)) pdigms[para].splice(cg,1)
                        }
            }
        }

        //if a category has already been specified use it
        if(para.in(r)  && r[para]!='') {
            if (pdigms[para].indexOf(r[para].toString())>-1 || pdigms[para].indexOf(r[para])>-1)
            {word[para] = r[para]}
            else {
                console.warn(
                    "Category '"+para+':'+r[para]+"' not found for "+word.type+" '"+word.name+"'. "
                    +"A random category will be assigned."
                )
                word[para] = pickOne(pdigms[para])
            }
        }
        //otherwise pick one at random
        else word[para] = pickOne(pdigms[para])

        query.push(word[para])
    }

    query = query.join("|")
    var regex = "(^|,) *("+query+"|\\.)*("+query+ ")+ *:[^,]*"
    var outcome = word.inflections.match( new RegExp(regex, "gi"))

    if(outcome!=null){

        word.inflected = outcome.sort(function(a,b){
            return a.split(".").length>b.split(".").length
        })
        .pop().split(":").pop().trim()

        return word

    } else {
        word.inflected = ""
        return word
    }
}

/*-------------------------------------   COMPLEMENT   -------------------------------------*/

//expand a word with a complement, if it has one
function complement(word, r, context){
    if (word.complements && !r.nocomplement){
        var complement = word.complements.split(",")
        var chosen = choose2(complement)
        if (chosen) {
            chosen = chosen.split('/') //some things have multiple complements
            var parsed = chosen.map(function(a){
                return parseComplement(a, r, context)
            })

            return context.children.comp = parsed
        }
    }
}

//take string complement description, return complement construction object
function parseComplement(complement, r){

    var c = complement.match(/\b[A-Z]+({.+})*\S*/g)[0] //for now we assume there is only one

    var func = c.match(/[A-Z]+/)[0]

    var arg = c.match(/{.+}/)
    arg = arg==null ? '' : toObject(arg[0].slice(1,-1))

    if (window[func]===undefined) {
        return {text: error("No such construction exists as '"+func+"'.")}
    }

    complement = complement.replace(c, 'c')

    return {
        order: complement,
        head: "c",
        children: {
            c: new branch(window[func], arg, null, 'complement')
        }
    }
}


/*-------------------------------------   WORD GETTING -------------------------------------*/

//selects a word from the database that matches the given restrictions
function get(r){
    if(r.type==undefined) error("Word type not specified for get function.")

    var word = $.extend({'type': r.type}, pickOne(database[r.type], r)  ) || false
    if(!'name'.in(word))
        return {text: error("No word could be get'd with the following restrictions: "+JSON.stringify(r))}

        inflect(word,r)

        complement(word, r, arguments.callee.caller.arguments[2])

        return word
}

//utility function for randomly picking one element from an array
function pickOne(arr, r){

    if(typeOf(arr) == 'object') var arr = toArray(arr).slice() //in case object was past in
    else var arr = arr.slice();
    var r = r || null;
    var randex;

    if(!isEmpty(r)){
        while (arr.length) {
            randex=Math.floor(Math.random()*arr.length)
            if (r_match(r, arr[randex])) return arr[randex]
            else arr.splice(randex,1)
                }
        //var slim = $.grep(arr, slimmer)
        //return slim[Math.floor(Math.random()*slim.length)]
    }
    //just pick one at random
    else return arr[Math.floor(Math.random()*arr.length)]

    function slimmer(a){
        return r_match(r,a)
    }
}

//tests an object against a restrictions template
//if they have the same properties they must match, otherwise, who cares
//also rejected if restrictions match prohibitions on object
function r_match(restrictions, test_object){

    if (isEmpty(restrictions)) return true
    var prohib = test_object.prohibitions
    if(prohib!=undefined && prohib!='') {//prohib = prohib.replace(/ /g, '')
        //reject if restrictions match prohibitions
        if (prohibited(restrictions, prohib)===true) return false
        prohib = toObject(prohib)
    }

    for(var r in restrictions){

        var rval = restrictions[r];

        //merge word-level and universal prohibitions for given paradigm (r)
        //word level overwrites universal
        var prohibz = $.extend({}, prohibitions.descend(restrictions.type,r,rval))
        if (prohib!=undefined) $.extend(prohibz, prohib)
        if (prohibz && prohibited(test_object, prohibz)===true) return false

        if (r.in(test_object)){

            if (magicCompare(rval, test_object[r])) {continue}
            else return false

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
            if (_.difference(testy, prohb).length==0) return true
                }
        //if testee has options and prohibs doesn't then obviously we're good
    }

    return false

    //"asd:123 (<<9a+ |_.)".match(/[^\s(|)]+/g)
    //return true
}

/*-------------------------------------   BRANCH NAVIGATION   -------------------------------------*/

function objectSearch(start, context){
    //break obj.prop into array
    var obj = start.split('.')[0]
    //if obj can't be found among siblings recurse to uncles, great-uncles...
    return obj.in(context.children) ? context.children[obj] : context.parseRestrictions(obj)
}

function propertySearch(object, property){
    //if the search is being done we automatically assume the passed in object doesn't have the property
    if('head'.in(object)){
        if(property.in(object.head))
            return object.head
            else
                return propertySearch(object.head, property)
                }	else {
                    return false
                }
}


/*-------------------------------------   OUTPUT -------------------------------------*/

//essentially the toString method for constructions
function stringOut(c){
    if(c===undefined) return undefined
    if("children".in(c)){

        var c = c

        var string = c.order.replace(/([^_ ])+/g, function(a){

            //optional words have an asterisk
            if (a.match(/\*/)){

                //optional undefined or empty words return ''
                if (!c.children[a.slice(0,-1)])
                    return ''
                    else
                        a = a.slice(0,-1)

                        }else{ //not optional

                            //if there is no child with the given name then treat it as litteral
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

                if (!furtherIn) {} //error("There was no child '"+a+"' to render.")
                return furtherIn===undefined ? '???' : furtherIn
            }

        })

        if (typeof c.postlogic==='function') string = c.postlogic(string)

        return string.replace("_", "")
    }
    else return c.text

        }



/*------------------------------------- Construction Instructions -------------------------------------*/

function route(r, choices){
    if (typeof r==='undefined') {
        error('Undefined selector for route function.')
        return pickOne(choices)
    }

    if (r==='' || r===null) {
        error('Empty selector for route function.')
        return pickOne(choices)
    }

    return choices[r] || choices["rest"] || ""
}

function choose(){
    var total = 0
    var weights = []
    var values = []
    var argz = typeOf(arguments[0])=="array" ? arguments[0]: arguments

    for(var arg in argz){
        //even numbers need to be the weights (0,2,4,6)
        if(arg%2==0) {
            if(argz[arg]==0) continue
            total += argz[arg]
            weights.push(total)
            values.push(argz[parseInt(arg)+1])
        }
    }
    var rand = Math.random()*total
    for (var w=0; w<weights.length; w++){
        if(weights[w] > rand)	return values[w]
            }
}

//assumes sum of weights <= 1.0
//can return undefined
function choose2 () {
    var rand = Math.random()
    var total = 0
    var weights = []
    var values = []
    var argz = typeOf(arguments[0])=="array" ? arguments[0]: arguments

    for(var arg in argz){
        //even numbers need to be the weights (0,2,4,6)
        var a = parseFloat(argz[arg])

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
}

//take a restriction object and return just the ones specified in 'pdgms'
//if a paradigm hasn't been specified then add a random choice for it
//according to the global probabilities settings
function decide(r, pdgms){
    var new_r = {}
    var pdgms = pdgms.split(',')

    /*for(p in pdgms){
new_r[pdgms[p]] = r[pdgms[p]] || 'qweqwrqewt'
}*/

    $.each(pdgms, function (index, value){
        new_r[value] = r[value] || choose(probabilities[value])
        if (new_r[value]==undefined) error("No probability defined for '"+value+"'.")
            })

    return new_r
}