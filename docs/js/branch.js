/*-------------------------------------   BRANCH -------------------------------------*/

function branch(c, r, p, l, x, y) {
    this.construction = c
    this.restrictions = r || {}
    this.parent = p || null
    LAST_PARENT = p || LAST_PARENT
    this.label = l || null


    this.randomize = y

    if(xrayMode){
        this.seed = x || Math.random().toString(32).slice(2);
        Math.seedrandom(this.seed)
        ///console.log(this.seed)
        _ = _.runInContext();
    }

    if(r && "desc" in r) {
        this.desc = r.desc
        delete r.desc
    }

    //deal with so-called global restrictions
    //TODO: this increases errors with bag/box/pile of NP
    r = globalRestrictions.apply(this,[r])

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
        this.construction = c[0]
        c = c[0]( _.extend({}, r, c[1]) )
    }

    executeBranch.apply(this, [c, r, this])

    //dump almost all other c.properties into this
    for(var prop in c){
        if(prop!='head' && prop!='children')
            this[prop] = this[prop]||c[prop];
    }
    //for the rare construction that has a built-in restrictions property
    //this prevents the above loop from overwriting passed in restrictions
    _.extend(this.restrictions, r)
    //this.restrictions = this.originalRestrictions

    //this is probably a word
    if(typeof c.children === 'undefined') {
        //words need a text property
        if(typeof c.text === 'undefined') this.text = c.inflected || c.name

        //create a happy package of all the important restrictions on this word, for grabbing from elsewhere
        if (r) this.R = safe(this, this.type)
        //and make orig safe too
        if (this.orig) this.orig = safe(this.orig, this.type)

        //on rare occasions global restrictions are specified on words, so make sure they get global
        registerGR(c)
    }


} //end branch
















function executeBranch(c, r, p){

    if(xrayMode){
        if(this.randomize == 'head') {
            var rng = new Math.seedrandom()
            Math.seedrandom(rng())
            ld = _.runInContext()
            var ld_backup = _
            _ = ld
        } else {
            Math.seedrandom(this.seed)
            _ = _.runInContext()
        }
    }
    //if(!p.label) console.log( $(stringOut(new branch(QUANT,{},{},'fake'))) );


    //evaluate head first
    if('head' in c){
        this.order = c.order
        this.children = {}

        var newbranch = c.children[c.head][0]
        var headr = _.extend( {}, c.restrictions, r, c.children[c.head][1] )
        this.head = this.children[c.head] = new branch(newbranch, headr, p, c.head)

    }

    if(xrayMode){
        if (this.randomize == 'head') {
            _ = ld_backup
        }
        if(this.randomize == 'tail') {
            var rng = new Math.seedrandom()
            Math.seedrandom(rng())
            ld = _.runInContext()
            var ld_backup = _
            _ = ld
        } else {
            Math.seedrandom(this.seed)
            _ = _.runInContext()
        }
    }
    //if(!p.label) console.log(route( _.random(2), {0:decide(null,'tense,aspect,mood'),1:Math.random(),'rest':options('(yes | no | maybe so)')} ) );
    //if(!p.label) console.log( $(stringOut(new branch(N,{},{},'fake'))) );



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
                                    return propertySearch(a,sortby) - propertySearch(b,sortby)
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

    if (this.randomize == 'tail') {
        _ = ld_backup
    }
}
