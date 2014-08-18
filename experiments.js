/*	 *	 *	 *	 *	 * doYouHas	*	 *	 *	 *	 *\
Takes two things and returns true if any or all things
in thing1 can be found in thing2. The 3rd parameter is the any/all switch.

Things can be like:
 {paradigm:category,paradigm:category}
 "paradigm"
 "paradigm:category"
 "paradigm,paradigm,paradigm"
 "paradigm:category,paradigm:category"

Category should be a string. Optionally a paradigm
can have multiple categories in the format:
 "paradigm:(cat1|cat2)"
 If thing1 has (cat1|cat2) and all=true
 then both cat1 and cat2 would have to be found in thing2
\*	 *	 *	 *	 *	 *	 *	 *	 *	 *	 *	 *	 */

function doYouHas(one, two, all){
    var all = all || false
    var has = all

    //break down One into array of strings
    if(typeof one=="object") {
        one = toArray(one,true)
        one = one.join(',')
    }
    //factor paradigms like "para:(abc|xyz)" into "para:abc, para:xyz"
    one = one.replace(/(\w+):\(([^)]+)\)/gi, function(match,item,values)
                      {return item + ':' + values.split("|").join(','+item+':')})
    one = one.split(',')
    if(typeof one=="string") one = [one]

    //format Two into one big regular expression
    if(typeof two=="object") {
        two = toArray(two,true)
        two = two.join('|')
    } else if(typeof two=="string") {
        two = two.replace(/\ /g,'')
        two = two.replace(/,/g,'|')
    }
    two = new RegExp("^("+two+")$")

    //loop through One and match each item against Two
    $.each(one, function(key,val){
        var match = two.test(val)
        //if something is found and any are wanted (all=false), return true
        //if nothing is found and all are wanted (all=true), return false
        if(match!=all) {
            has = match
            return
        }
    })

    return has
}

//takes a string like "key:(val1|val2)", makes "key:val1,key:val2"
function expandOptions(str){
    str.replace(/(\w+):\(([^)]+)\)/gi, function(match,item,values)
                {return item + ':' + values.split("|").join(','+item+':')})
}

//returns a random integer from 0 to max-1, seeded by seed + current millisecond
function niceRand(seed, max){
    var dt=new Date();

    return (Math.floor( ( Math.sin(dt.getMilliseconds()+seed) +1) *99.234) )%max
}

function nestTest(r, testee){
    var regex = /\([^()]+\)/g
    var replace = []
    var match = []
    var lvl = 0

    match[0] = r.match(regex)
    replace[0] = r.replace(regex,'xXx')

    while (match[lvl].length > 1) {
        match[lvl+1] = replace[lvl].match(regex)
        if (match[lvl+1]!==null) {
            replace[lvl+1] = replace[lvl].replace(/xXx/g, 'yYy')
            replace[lvl+1] = replace[lvl+1].replace(regex, 'xXx')
        } else {
            break
        }
        lvl++
    }

    return {'match':match, 'replace': replace}

}

function splitz(r,t){
    //r = r.split(" & ").sort().join(" .*")
    //r = r.split("&").sort().join(" .*")
    r = r.split(" & ").sort().join(" .*")
    r = r.replace(/([^&| ]+&[^&| ]+)/g, function($1){
        return '('+ $1.split("&").sort().join(" .*") +')'
    })
    t = t.split(",").sort().join(" ")

    return new RegExp(r, 'g').test(t)
}

//this wonderful function turned out to be unecessary because you can just use Javascripts built in prototype feature
function mergeProtos(type){
    for (var i in type) {
        var thisword = type[i]
        var proto
        if ( proto = thisword['proto'] )
            type[i] = mergeProto(thisword, proto)
            }

    function mergeProto(obj, pro){
        var protobj = pickOne(type, {name: pro})
        if(protobj){

            //recurse if the prototype object has it's own prototype
            var proto
            if( proto = protobj['proto']) {
                mergeProto(protobj, proto)
            }
            prune(obj)                          //remove empty properties before merging
            obj = $.extend({}, protobj, obj)    //here's where it happens!
            delete obj.proto                    //this word has been resolved so delete proto
            // to avoid unncessary recursion when resolving other words
            return obj

        } else {
            error('Prototype"' + pro + '"could not be found for'+obj.name+'.')
            return obj
        }
    }
}
