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

//subtract one array from another
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return !(a.indexOf(i) > -1);});
}

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
	for(thing in one){		
		var match = two.test(one[thing])
		//if something is found and any are wanted (all=false), return true
		//if nothing is found and all are wanted (all=true), return false
		if(match!=all) return (match)
	}
	
	return all
}

//takes a string like "key:(val1|val2)", makes "key:val1,key:val2"
function expandOptions(str){
	str.replace(/(\w+):\(([^)]+)\)/gi, function(match,item,values)
		{return item + ':' + values.split("|").join(','+item+':')})
}
