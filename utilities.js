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

//somehow this is faster than indexOf, only works for 1 character
String.prototype.findChar = function (needle) {
    for ( var i = 0; i < this.length; i++ ) {
        if ( this.charAt(i) === needle ) {
            return true
        }
    }
    return false
}


function magicCompare (one, two, operator) {

    //make sure valid values are passed in
    if (  !goodVal(one) || !goodVal(two) ) return false

    //shortcut for simple equality
    if (one==two) return true

    //convert everything to strings to make life simple
    one = one.toString().trim(); two = two.toString().trim() //ain't nobody got time for no whitespaces

    if( two.findChar(',') && (operator == '|' || !one.findChar('&')) ){
        var parts = two.split(',')
        var part
        while(part = parts.pop()) {

            if (magicCompare(one, part)) return true

        }

        return false
    }

    var ops = "<>!"
    var coms = "\|&"

    var dealWithComs = function(){
        var parts, results
        var comtest = new RegExp("["+coms+"]", 'g')

        if (comtest.test(one)){
            parts = one.split(' & ')
            if (parts.length > 1) {

                var part
                while(part = parts.pop()) {

                    if (!magicCompare(part, two, '&')) return false

                }

                return true

//                results = parts.map(function(me){
//                    return magicCompare(me,two,'&')
//                })
//                return _.every(results)

            } else {
                parts = one.split('|')

                if (parts.length > 1) {

                    var part
                    while(part = parts.pop()) {

                        if (magicCompare(part, two, '|')) return true

                    }

                    return false

//                    results = parts.map(function(me){
//                       return magicCompare(me,two)
//                    })
//                    return _.some(results)

                } else {
                    parts = one.split('&')
                    if (parts.length > 1) {
                        var part
                        while(part = parts.pop()) {

                            if (!magicCompare(part, two, '&')) return false

                        }

                        return true
                    }
                }
            }

        } else {

            //no more comparators to break down
            return 'done'
        }

    }

    var outcome = dealWithComs() //comparators like | and &

    if (outcome=='done'){ //finally look at the nitty gritty

        //if there is an authorized operator at the beginning of the string, store it
        var op,cleaned
        op = one.substr(0,1)
        if (ops.findChar(op)) {
            cleaned = one.substr(1)
        } else {
            op = false
            cleaned = one
        }

        //set a variable depending on which operator was used
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


        if( !(lt||gt) ) { //simple comparison

            //return true if string found unless it wasn't supposed to be found
            return (cleaned==two) ^ neg

        } else {

            //return whether number is greater than or less than as the case may be
            cleaned = parseFloat(cleaned)
            return lt ? two < cleaned : two > cleaned

        }

    } else {

        //this is how recursive results are sent up the stack
        return outcome
    }

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
    [magicCompare, true, true, true],
    [magicCompare, false, true, 0],
    [magicCompare, true, false, 0],
    [magicCompare, true, 0, 0],
    [magicCompare, true, -23, -23],
    [magicCompare, false, -23, 23],
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
    [magicCompare, false, 'tall|fat&!blonde & !albino & french','blonde,brunette,french'],
    [magicCompare, true, 'tall|fat&!blonde & !albino & french','blonde,brunette,french,tall'],
    [magicCompare, false, 'true|fat&!blonde & !albino & french','blonde,brunette,french,tall,albino'],
    [magicCompare, true, "location & person", "location,person"],
    [magicCompare, true, "location & person", "location, person"],


]

unitTester(units)
