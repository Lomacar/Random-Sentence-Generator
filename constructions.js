function SENTENCE(){
    window.recentlyUsed = [] //keep track of recently used words so you don't sound dumb repeating yourself
    return CLAUSE()
}

function CLAUSE(){   
	return {
	order: "subject nucleus",
	head: "nucleus",
	children: {
		nucleus: [VP],
		subject: [NP, {number: 'nucleus.number', person: 'nucleus.person', anim: 'nucleus.anim1', case: 'nom'}],
		//object: [NP, {exist: 'nucleus.trans', anim: 'nucleus.anim2', case: 'acc', number: '', person: '', name:'!subject.name'}]
	},
	restrictions: decide({}, "number,person,aspect,tense")
}}

function tester(){
	return {
	order: "np",
	head: "np",
	children: {
		np: [NP]
	}
	}
}

function VP(){
	return {
	order: "verb",
	head: "verb",
	children: {
		verb: [V]
	}
}}

function NP(r){
	r = decide(r, "person,proper")
    
	return route(r.person, {
			rest: [PRONOUN],
			3: route(r.proper, {
				rest: choose(
                    4, [DP],
                    2, [PRONOUN],
                    1, [get, {type:'noun', proper:true}]
                ),
				true: [get, {type:'noun', proper:true}],
				false:[DP]
			})
	})
		
}

function DP(r){
	return {
		order : "det adj noun",
		head : "noun",
		children: {
			noun: [N, {proper: false}],
			adj: [AP, {anim:'noun.anim', reverse: true, nocomplement: true}, 0.3, 'rank'],
			det: [DET, 'noun.head']
		},
        postlogic:function(text){
            return text.replace(/\ba +([aeio])/g, "an $1")
        }
	}
}

function DET(r){
    
    r = decide( r, "number,def" )
    
	return {
		text: route(r.def,{
            true: "the",
            false: route(r.number,{
                sg: "a", pl: choose(1,"some",1,"")
            })
        })
	}
}

function N(r){
    return {
        //text: get({type: "noun"}).name

        order: "word_num",
        head: "word",
        children: {
            word: [get, { type: 'noun' } ],
            num: [nNum, {number: 'word.number'}]
        },
        postlogic:function(text){
            text = text.replace(/([^aeou])y_+(s)/g, "$1ie$2")
            return text
        }
    }
}

//plurals for nouns
function nNum(r){
	return {text: route(r.number+r.proper+r.inflected, {plfalse:"s"})}	
}

function PRONOUN(r) {
	var word = {type:'pronoun', inflections: "nom.sg.1:I, 2:you, sg.3:it, nom.sg.3.m:he, nom.sg.3.f:she," +
									 " nom.pl.1:we, nom.pl.3:they, acc.sg.1:me, acc.sg.3.m: him," +
									 " acc.sg.3.f:her, acc.pl.1:us, acc.pl.3: them"}
	
	return inflect(word,r)
}

function AP(r) {
    return {
        order: "adv a comp*",
        head: "a",
        children: {
            adv: [blank],
            a: [A],
            comp: [complement, {'case': 'acc','complements': 'a.complements','reset':true}]
        }
    }
}

function A(r){
	return get($.extend({type: 'adjective'}, r))
}

function V(r){
  return {
	order: "aux word_asp_tns_num comp*",
	head: "word",
	children: {
        word: [get, {type: "verb"}],
		asp:  [aspect],//{aspect: 'word.aspect', inflection: 'word.inflected'}
		aux:  [auxiliary],
		tns:  [tense],
		num:  [vNum],
        comp: [complement, {'case':'acc','complements': 'word.complements','reset': true}]
	},
	postlogic: function(text){
		text = text.replace(/([^aeou])y_+e([ds])/, "$1ie$2") //change -yes to -ies and -yed to -ied
		           .replace(/e_+ed/, "ed") // -eed to -ed
		           .replace(/([^eu])e_+ing/, "$1ing") // -eing to -ing
		           .replace(/([^aeiou])([aeiou])([^aeiouyw])_+(ed|ing)/, '$1$2$3$3$4') // -VCed or -VCing to -VCCxxx
                   .replace(/o_+s\b/g, 'oes') // -os to -oes
		return text
	}
}}

function new_comp(r){
    return [complement]
}

//verb aspect morphology
function aspect(r){
	return {
	text: route(r.inflected=="", {
		true: route(r.aspect,{
			prog: "ing",
			retroprog: "ing"
		})
	})
}}

//verb tense morphology
function tense(r){
	return {
	text: route(r.inflected=="", {
		true: route(r.aspect,{
			simp: route(r.tense, {past: "ed"}),
			retro: "ed"
		})
	})
}}

//verb auxiliaries for tense/aspect
function auxiliary(r){
	return {
	text: route(r.tense, {fut: "will "})
          +
          route(r.aspect,{
                retro: route(r.tense, {past: "had",	pres: route(r.person+r.number, {'3sg': "has", rest: "have"}), fut: "have"}),
                prog: route(r.tense, {
                    past: get({
                            type:'verb', name:'be', aspect: 'simp', tense: 'past', person: r.person, number: r.number,
                          }).inflected, 
                    pres: get({
                            type:'verb', name:'be', aspect: 'simp', tense: 'pres', person: r.person, number: r.number,
                          }).inflected,
                    fut: "be"}),
                retroprog: route(r.tense, {past: "had been",	pres: route(r.person+r.number, {'3sg': "has been", rest: "have been"}), fut: "have been"})
	})
}}

//s inflection on verbs
function vNum(r){
	return {text: route(r.number+r.person+r.aspect+r.tense+r.inflected, {sg3simppres:"s"})}	
}


function WH_CLAUSE() {

}


function blank(){
    return {text: ""}
}

/*----------------------------- COMPLEMENTS --------------------------------*/

/*function to_NP {
    return {
        restrictions: {
            case: 'acc'
        }
    }
}*/
