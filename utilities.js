//a typeof replacement that can distinguish arrays and nulls
function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (typeof value.length === 'number' &&
                    !(value.propertyIsEnumerable('length')) &&
                    typeof value.splice === 'function') {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
}

//utility to check for empty object
function isEmpty(o) {
		for (var p in o) { if (p.in(o)) return false; }
		return true;
}

//returns true if val is a non-empty string, number or boolean
function goodVal(val){
	if (typeof val=='string' && val!='') return true
	if (typeof val=='number') return true
	if (typeof val=='boolean') return true
	return false
}

//convert an object to an array. if keyval=true it makes array like ["key:val"], else ["val"]
function toArray(obj,keyval){
	var arr = []
	$.each(obj, function(a,b){
		if(keyval && (typeof b=="string"||typeof b=="number")) //filter out subobjects
			arr.push(a+':'+b);
		else arr.push(b);
	})
	return arr;
}

//takes a string with colons and commas and turns it into an object
function toObject(str){
	if(typeof str=='string'){
		if(!/:/.test(str)){
			error("Improper string passed to toObject. ':' is required.")
			return
		}
		var obj = {}
		var keyval
		str = str.split(/[;,]/)
		$.each(str, function(a,b){
			keyval = b.split(':')
            val = parseFloat(keyval[1]) //attempt to treat numbers as numbers
            val = isNaN(val) ? keyval[1].trim() : val //but if they aren't numbers leave them as strings   
			obj[keyval[0].trim()] = val
		})
		return obj
	} else {return str}
}

//takes an array of arrays like [[abc][xyz][123]]
//and returns all permutations like [[ax1][ax2][ax3][ay1][ay2][ay3][az1]...]
function factorPermutations(lists) {  
	permutations = []
	$iter = 0;
	
	while (1) {
			$num = $iter++;
			$pick = []; 
			for (l in lists) {
					$r = $num % (lists[l].length );
					$num = ($num - $r) / lists[l].length;
					$pick.push( lists[l][$r])
			} 
			if ($num > 0)    break; 
			permutations.push( $pick);
	}
			return permutations
} 

function error(msg){
	console.warn('e'+error_num+': '+msg)
	error_num++
	return '[e'+(error_num-1)+']'
}

//shorten the annoyingly long but useful hasOwnProperty
String.prototype.in = function(obj){return obj.hasOwnProperty(this)}

//amazing function that can retrieve an object/property multiple levels deep
//and doesn't error if any level is undefined, just returns undefined
Object.defineProperty(Object.prototype, 'descend', {
    value: function(){
        var keys = arguments;
        var cur = this;
        for(var i=0; i<keys.length; i++){
            var key = keys[i];
            var cur = cur[key];
            if(typeof(cur)=='undefined')
                return cur;
        }
        return cur;
    }
});

//returns a random integer from 0 to max-1, seeded by seed + current millisecond
function niceRand(seed, max){
	var dt=new Date();
	
	return (Math.floor( ( Math.sin(dt.getMilliseconds()+seed) +1) *99.234) )%max
}

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

function magicCompare (one, two, operator) {

    if(two.indexOf(',') > -1){
        var results = two.split(',').map(function(x){
            return magicCompare(one, x)
        })
        return _.some(results)
    }

    var ops = "<>!"
    var coms = "\|&"
    var optest = new RegExp("["+ops+"]", 'g')
    var comtest = new RegExp("["+coms+"]", 'g')

    var dealWithComs = function(){
        var parts, results

        if (comtest.test(one)){
            parts = one.split(' & ')
            if (parts.length > 1) {
                results = parts.map(function(me){
                    return magicCompare(me,two,'')
                })
                return _.every(results)

            } else {
                parts = one.split('|')
                if (parts.length > 1) {
                    results = parts.map(function(me){
                       return magicCompare(me,two,'|')
                    })
                    return _.some(results)

                } else {
                    parts = one.split('&')
                    if (parts.length > 1) {
                        results = parts.map(function(me){
                            return magicCompare(me,two,'&')
                        })
                        return _.every(results)
                    }
                }
            }

        } else { //done with coms
            return 'done'
        }

    }

    var outcome = dealWithComs()

    if (outcome=='done'){

//        var regex = new RegExp('['+ops+']')
//        var op = one.search(regex)

        //if there is an authorized operator at the beginning of the string, store it
        var op,cleaned
        op = one.substr(0,1)
        if (ops.indexOf(op) > -1) {
            cleaned = one.substr(1)
        } else {
            op = false
            cleaned = one
        }


        switch (op) {
            case '!':
                var neg = true
                break
            case '<':
                var lt = true
                break
            case '>':
                var gt = true
        }


       /* //check for negation
        var cleaned = one.replace('!','')
        var neg = cleaned.length < one.length

        //check for less than
        cleaned = one.replace('<','')
        var lt = cleaned.length < one.length

        //check for greater than
        cleaned = one.replace('>','')
        var gt = cleaned.length < one.length*/

        if( !(lt||gt) ) { //simple comparison

//            var regex = new RegExp("^" + two.replace(/,/g,'$|^') + "$")
//            var match = regex.test(cleaned)

            return (cleaned==two) ^ neg //true if string found unless it wasn't supposed to be found

        } else {

            cleaned = parseFloat(cleaned)

//            if(two.search(',') > -1) {
//                var split = two.split(",")
//
//                if (lt){
//
//                    var lt_results = split.map(function(x){
//                        return x < cleaned
//                    })
//
//                    return _.some(lt_results)
//
//                } else if (gt) {
//
//                    var gt_results = split.map(function(x){
//                        return x > cleaned
//                    })
//
//                    return _.some(gt_results)
//
//                }
//
//            } else {

                return lt ? two < cleaned : two > cleaned

//            }

        }

        //var neg = one.search('!') > -1
        //console.log(one + " : " + JSON.stringify(match) + " /" + operator + " /" + ((match^neg)&&operator==''))

    } else {
        return outcome
    }

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



function unitTest(func, expect){
    return func.apply(this, toArray(arguments).slice(2)) //=== expect
}

function unitTester(arrayOfTests){
    var result,color

    arrayOfTests.forEach(function(unit){
        result = unitTest.apply(this, unit)
        color = result==unit[1] ? 'green' : 'red'
        console.log ("%c " + unit[0].name + "\t\t\t" + unit.slice(1).join('\t\t\t') + "\t\t\t:\t\t\t" + result,
                     "font-weight: bold; color:" + color)
    })
}

units = [
    [magicCompare, true, "1", "1"],
    [magicCompare, true, "1", "1,2"],
    [magicCompare, true, ">1", "2"],
    [magicCompare, true, ">1", "0,2"],
    [magicCompare, false, ">1", "0,1"],
    [magicCompare, false, "<1", "23"],
    [magicCompare, false, "<1", "hi!"],
    [magicCompare, true, "<1|>5", "7"],
    [magicCompare, true, "<1|>5", "3,4,7"],
    [magicCompare, false, "<1|>5", "3,4"],
    [magicCompare, false, "!7 & >5", "3,7"],
    [magicCompare, true, "!7&>5", "6,7"],
    [magicCompare, true, "!7 & >5", "234"],
    [magicCompare, false, "location|person", "thing,edible"],
    [magicCompare, true, "location|person", "thing,location"],

]

unitTester(units)


