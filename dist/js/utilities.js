const CONSTANTS = {
    //for magicCompare
    ops: "<>!",
    coms: "|&",
    opregex: /[<>|&!]/
}

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
	return Object.keys(o).length===0;
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
			if (str!=" ") console.warn("Improper string passed to toObject. ':' is required.")
			return
		}
		var obj = {}
		var keyval
        str = str.replace(/('|")(.*?):(.*?)\1/g, '$2‡$3') //first, protect colons that might be inside of quotes like "posr:'anim:3'"
                                                          //and remove the protecting quotes
		str = str.split(/[;,]/)
		$.each(str, function(a,b){
			keyval = b.split(':')
            val = toNumBool(keyval[1]) //attempt to treat numbers and booleans as such
            val = isNaN(val) && val!==undefined ? keyval[1].trim() : val //but if they aren't numbers leave them as strings
            if (typeof val=='string') val = val.replace(/‡/g,':') //convert any 'protected colons' back to real colons
			obj[keyval[0].trim()] = val
		})
		return obj
	} else {return str}
}

//safely converts values to numbers or boolean if that is what they are
function toNumBool(val){
    if (typeof val == 'string' && /^ *(-?[0-9.]+|false|true) *$/i.test(val)) val = JSON.parse(val.toLowerCase())
    return val
}

//turn strings like " this has( {lots: of | spaces! & stuff } )" into "this has({lots:of|spaces! & stuff})"
function compactString(str){
    if(typeof str != "string") {
        console.error("Non-string passed to compactString().");
        return str
    }
    return str.trim()
                .replace(/ *([,|:]) */g,'$1')           //remove spaces around commas, pipes, colons
                .replace(/([{(]) | ([)}])/g,'$1$2')           //remove spaces inside { } and ( )
                //.replace(/ (&) /g,'•$1•')        //protect " & "
                //.replace(/ *([^\w@]) */g,'$1')   //collapse spaces around non-word characters (note '@' is treated as word character)
                .replace(/ +/g,' ')              //and duplicate spaces
               // .replace(/•/g,' ')               //remove "&" buffer
}


//removes properties from an object that are empty strings or null
function prune(obj){
    for(var key in obj) {
        if(obj.hasOwnProperty(key) && !goodVal(obj[key])) {
            //obj[key] = null;
            delete obj[key];
        }
    }
}

Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
}

//tells you if any two objects have matching keys with matching values
function collide(obj1, obj2) {
    for (k in obj1) {
        if (obj2[k] !== undefined && magicCompare(obj1[k], obj2[k])) return true
    }
}

//what the heck is this? oh it removes parents from a branch structure so it can be stringified
function patricide(x,y) {
    if(typeOf(y)!='object') return;
    if(x=="R") return
    console.log(x)
    delete y.parent;
    delete y.head;
    for(var key in y) {
        if(typeOf(y[key]) != 'object' & key!='gap') delete y[key];
    }
    $.each(y,patricide)
}

//takes an array of arrays like [[abc][xyz][123]]
//and returns all permutations like [[ax1][ax2][ax3][ay1][ay2][ay3][az1]...]
function factorPermutations(lists) {
	permutations = []
	$iter = 0;

	while (1) {
			$num = $iter++;
			$pick = [];
            var l
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
    if(typeof error_num === 'undefined') error_num = 0
	error_num++
	console.warn('e'+error_num+': '+msg)
	return '[e'+error_num+']'
}


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
    },
    configurable: true
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

function toss(probability){
    if (probability===undefined) probability=0.5
    return Math.random() < probability
}


//function for safely merging restriction objects so that tags are not overwritten
function mergeR(r1,r2){
    r2 = {...r1, ...r2}
    
    return _.mapValues(r2, (v,k)=>{
        if(goodVal(r1[k]) && theseAreTags(k)) {
            var out = (v===r1[k]) ? v : v + ' & ' + r1[k] 
            if ( out.findChar(',') && CONSTANTS.opregex.test(out) ) 
                error("Warning: comma-separated tags merged with boolean-type tags: " + out)
            return out
        }
        else return v
    })
}

function theseAreTags(str){
    return ['tags','vtags','partOf','wholeOf'].includes(str)
}

/*  MAGIC COMPARE
*
*   I don't know exactly how this works but it does!
*
*   Compares two strings. The first one can have special formatting.
*   The second one can be a single value or comma separated values
*
*   Special formatting:
*    !red        not equal to red
*    <5          less than 5
*    >0          greater than 0
*    red|blue    red or blue
*    >5 & !7     greater than 5 but not 7
*    >5&!7       same as above but processed before |
*
*   'every' flag determines whether every value in a comma separated
*           list must match (every==true) or only one value needs to
*           match (every==false, default)
*/


function magicCompare (one, two, options, operator) {
    var every = options ? (options.every || false) : false
    var tagmode = options ? (options.tagmode || false) : false

    //make sure valid values are passed in
    if (  !goodVal(one) || !goodVal(two) ) return false

    //shortcut for simple equality
    if (one==two) return true
    //if simple equality failed and there are no special characters, then they will never match
    else if (!/[^\w\-. ]/.test(one) && !/[^\w\-. ]/.test(two)) return false

    //convert everything to strings to make life simple
    one = one.toString().trim(); two = two.toString().trim() //ain't nobody got time for no whitespaces

    //make sure comma separated values are the second argument, and arguments with <>!&| are first argument
    if (one.findChar(',')){
        if(two.findChar(',')){
            error('Attempted to magicCompare two comma-separated lists.' + new Error().stack)
            return false
        }
        else {
            var temp = one
            one = two
            two = temp
        }
    } else if ( CONSTANTS.opregex.test(two) ){
        if ( CONSTANTS.opregex.test(one) ){
            error('Attempted to magicCompare two lists with [<>!&|] in them.' + new Error().stack)
            return false
        }
        else {
            var temp = one
            one = two
            two = temp
        }
    }

    //if second string is comma separated, split it up and run two separate compares
    //here is where 'every' makes commas act like AND or OR
    if( !tagmode && two.findChar(',') ){
        var parts = two.split(',')
        var part
        while(part = parts.pop()) {

            if (every ^ magicCompare(one, part, {every: every,tagmode:tagmode})) return !every

        }

        return every
    }

    var outcome = dealWithComs(one,two,every,tagmode) //comparators like | and &

    if (outcome=='done'){ //finally look at the nitty gritty

        //if there is an authorized operator at the beginning of the string, store it
        var op,cleaned
        op = one.substr(0,1)
        if (CONSTANTS.ops.findChar(op)) {
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


        if( gt || lt ) {

            //return whether number is greater than or less than, as the case may be
            cleaned = +cleaned
            return lt ? two < cleaned : two > cleaned

        } else { //simple comparison

            if (tagmode) {
                var rex = new RegExp('(^|,) *'+cleaned+' *(,|$)')
                return rex.test(two) ^ neg
                
                //unfortunately this alternative doesn't work when cleaned is like "volume|area"
                //return two.split(',').includes(cleaned) ^ neg
            }

            //return true if string found unless it wasn't supposed to be found
            return (cleaned==two) ^ neg

        }

    } else {

        //this is how recursive results are sent up the stack
        //and the final result is returned
        return outcome
    }

}

//a part of magicCompare
function dealWithComs(one,two,every,tagmode){
    var parts, results
    var comtest = new RegExp("["+CONSTANTS.coms+"]", 'g')

    if (comtest.test(one)){

        //first deal with & surrounded by spaces
        parts = one.split(' & ')
        if (parts.length > 1) {

            var part
            while(part = parts.pop()) {
                // if/when one sub-comparison fails, return false
                if (!magicCompare(part, two, {every:every,tagmode:tagmode}, '&')) return false
            }

            return true

        } else {

            //next deal with !
            parts = one.split('|')
            if (parts.length > 1) {

                var part
                while(part = parts.pop()) {
                    // as soon as one sub-comparison turns up true, rejoice!
                    if (magicCompare(part, two, {every:every,tagmode:tagmode}, '|')) return true
                }

                return false

            } else {

                //finally deal with 'tight' &s, same as the loose & above
                parts = one.split('&')
                if (parts.length > 1) {

                    var part
                    while(part = parts.pop()) {
                        if (!magicCompare(part, two, {every:every,tagmode:tagmode}, '&')) return false
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


//a haphazard attempt at something that generates a random number that sort of follows the power law
//and gets rounded to a nice "human" amount of precision
function powerRandom() {

    var curve = 9999    //how strongly small numbers are favored
    var max = 9        //most number of digits the number can have
    var max_prec = 3    //maximum possible precision

    var digits = Math.round( curve ** (-Math.random()) * (max-1) + 1.3 )
    var rando = parseInt( (10 ** Math.round( digits ))/10 * _.random(1,9,true) )
        rando = Math.max(2, rando)
    var precision = Math.round( Math.random() ** 3 * (max_prec-1) + 1 )
        precision = Math.min(precision, rando.toString().length)

    var num = +rando.toPrecision(precision);
    return num
}

toWords = (function() {
    // Convert numbers to words
    // copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
    // permission to use this Javascript on your web page is granted
    // provided that all of the code (including this copyright notice) is
    // used exactly as shown (you can change the numbering system if you wish)

    // American Numbering System
    var th = ['', 'thousand', 'million', 'billion', 'trillion'];
    // uncomment this line for English Number System
    // var th = ['','thousand','million', 'milliard','billion'];

    var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function toWords(s) {
        s = s.toString();
        s = s.replace(/[\, ]/g, '');
        if (s != parseFloat(s)) return 'not a number';
        var x = s.indexOf('.');
        if (x == -1) x = s.length;
        if (x > 15) return 'too big';
        var n = s.split('');
        var str = '';
        var sk = 0;
        for (var i = 0; i < x; i++) {
            if ((x - i) % 3 == 2) {
                if (n[i] == '1') {
                    str += tn[Number(n[i + 1])] + ' ';
                    i++;
                    sk = 1;
                } else if (n[i] != 0) {
                    str += tw[n[i] - 2] + ' ';
                    sk = 1;
                }
            } else if (n[i] != 0) {
                str += dg[n[i]] + ' ';
                if ((x - i) % 3 == 0) str += 'hundred ';
                sk = 1;
            }
            if ((x - i) % 3 == 1) {
                if (sk) str += th[(x - i - 1) / 3] + ' ';
                sk = 0;
            }
        }
        if (x != s.length) {
            var y = s.length;
            str += 'point ';
            for (var i = x + 1; i < y; i++) str += dg[n[i]] + ' ';
        }
        return str.replace(/\s+/g, ' ');
    }

    return toWords
})()

//gets the value of a given variable in the query string
function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}


function listProto (type, name){

  var word = get({'type':type, 'name':name})

  if (!word) return

  if(word.proto) return listProto(type, word.proto) + " > " + word.name
  else return word.name

}

function listOffspring (type, name) {
  var word = get({'type':type, 'name':name})

  if (!word) return

  var offspring = database[type].filter(function (a) {
    return a.proto == word.name
  })

  return _.map(offspring, 'name')
}

function getword(type, word, fuzzy){
    var what = fuzzy ? z : {name: word}
    return _.filter(database[type], what)

    function z(z){
        return z.name.includes(word)
    }
}

function getverb(word, fuzzy){return getword('verb',word,fuzzy)}
function getnoun(word, fuzzy){return getword('noun',word,fuzzy)}
function getadj(word, fuzzy){return getword('adjective',word,fuzzy)}


function unitTest(func, expect){
    return func.apply(this, toArray(arguments).slice(2)) //=== expect
}

function unitTester(arrayOfTests){
    var result,color

    arrayOfTests.forEach(function(unit){
        result = unitTest.apply(this, unit)
        color = result==unit[1] ? 'green' : 'red'
        console.log ("%c " + unit[0].name + "\t\t\t" + unit.slice(1).map(function(a){return JSON.stringify(a)}).join('\t\t\t') + "\t\t\t:\t\t\t" + result,
                     "font-weight: bold; color:" + color)
    })
}
