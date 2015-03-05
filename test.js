//var list = [] 
//
//for(var j=0;j<500;j++){
//    list[j] = _.sample([25, 20, 50, 50, 50, 60, 70, 75, 150, 200, 250, 350, 400 ])
//}
//
//var cumulative = []
//var total = 0
//
//for (var i = 0; i < list.length; i++) {
//    total += list[i]
//    cumulative[i] = total
//}
//
//
//
//
//
////BINARY TREE
//things = {};
//
//var mytree = buildTree(list)
//var mytree2 = mytree.map(function(arr) {
//    return arr.slice();
//});
//
//var start, end, update;
//start = window.performance.now();
//update = 0 
//
//for(i=0;i<1800;i++){
//    var choice = wbtreePicker(mytree2)
//    if(i%300==0/*choice==-1*/){
//        console.log('refreshing')
//        mytree2 = mytree.map(function(arr) {
//            return arr.slice();
//        });
//        //i--
//    }// else {
//        updateTree(mytree2,choice,0)
//        things[choice] = things[choice] ? things[choice]+1 : 1
//    //}
//}
//
//end = window.performance.now();
//console.log(end - start);
//console.log(update)
//
//
//
////STRAIGHT SAMPLE
//things2 = {}
//
//var start, end;
//start = window.performance.now();
//var start2
//update = 0 
//
//var list2 = list.slice()
//
//for(i=0;i<1800;i++){
//    if(i%300==0/*list2.length==0*/) {
//        console.log('slicing and dicing')
//        list2 = list.slice()
//    }
//    
//    var choice = _.random(list2.length-1)
// start2 = window.performance.now();
//    list2.splice(choice,1)
// update += window.performance.now() - start2;
//    things2[choice] = things2[choice] ? things2[choice]+1 : 1
//}
////console.log('Picking ' + pick)
////console.log( 'Index ' + binaryIndexOf.call(cumulative, pick) )
////console.log( 'Weight ' + cumulative[ binaryIndexOf.call(cumulative, pick) ] )
////console.log( 'List ' + list[ binaryIndexOf.call(cumulative, pick) ] )
////console.log(cumulative); console.log(list);
//
//end = window.performance.now();
//console.log(end - start);
//console.log(update);
//
//
//
//////BINARY SEARCH
////
////var start, end;
////start = window.performance.now();
////
////for(i=0;i<800000;i++){
////
////    var pick = Math.random()*total
////    var choice = binaryIndexOf.call(cumulative, pick)
////    things[choice] = things[choice] ? things[choice]+1 : 1
////}
////
////end = window.performance.now();
////console.log(end - start);
//
//
//
//
//
//
//
//function binaryIndexOf(searchElement) {
//
//    var minIndex = 0;
//    var maxIndex = this.length - 1;
//    var currentIndex;
//    var currentElement;
//
//    while (minIndex <= maxIndex) {
//        currentIndex = (minIndex + maxIndex) / 2 | 0;
//        currentElement = this[currentIndex];
//
//        if (currentElement > searchElement) {
//            if((this[currentIndex-1]||0) < searchElement) return currentIndex
//            maxIndex = currentIndex - 1;
//        }
//        else if (currentElement < searchElement) {
//            minIndex = currentIndex + 1;
//        }
//        else {
//            return currentIndex;
//        }
//    }
//
//    return -1;
//}
//
//
function buildTree(arr){
    var btree = []
    buildLayer(arr,0)
    
    function buildLayer(L,lvl){
        btree[lvl] = L
        lvl++
        var K = []
        var S = []

        for (var i=0; i<(L.length)/2; i++) {
            K[i] = L[i*2] + (L[i*2+1] || 0)
        }

        if(K.length>1) buildLayer(K,lvl)
    }
    
    return btree
}

function updateTree(tree, index, weight){
 var start = window.performance.now();
    var lvl = 0
    
    tree[0][index] = weight

    while(lvl < tree.length-1){
        
        index = Math.floor(index/2)
        
        tree[lvl+1][index] = tree[lvl][index*2] + (tree[lvl][index*2+1] || 0)
        
        lvl++
    }
 update += window.performance.now() - start;
}


function wb(a,b){

    if (Math.random() > 1/((a+b)/b)) {
        return a
    }
    return b
}

function wb_arr(ar){

    if (Math.random() > 1/((ar[0]+ar[1])/ar[1])) {
        return 0
    }
    return 1
}

function wbtreePicker(tree){
    var lvl = tree.length
    if(tree[lvl-1][0]+tree[lvl-1][1]==0) return -1
    
    var degree = 0
    var choice = 0
    
    while(lvl > 0){
        lvl--
        var choice = wb_arr([ tree[lvl][degree], (tree[lvl][degree+1] || 0) ])
        if(lvl > 0) degree = degree*2 + choice*2
        else return degree+choice
    }
}

function indexer(keys,db,lvl){
    var ind = _.groupBy(db,keys[lvl])
    
    //ind._ALL_ = db
    
    //delete ind['-']
    
    for(var i in ind){
        if(i.findChar(',')){
            var many = i.split(',')
            for (var one in many){
                //if(/^ *- *$/.test(one)) continue
                if (typeof ind[many[one]] !== 'undefined') ind[many[one]] = ind[many[one]].concat(ind[i])
                else ind[many[one]] = ind[i]
            }
            delete ind[i]
        }
    }
    
    for(var i in ind){

        if(keys[lvl]){
            //if(/^ *- *$/.test(i)) delete ind[i]
            ind[i] = indexer(keys, ind[i], lvl+1)
        } else {
            //turns objects into db index numbers
            return _.map(ind[i], function(x){
                return +lookup.noun[x.name]
            })
        }
    } 
    
    return ind
}

start = window.performance.now();

hey = indexer(['tags', 'anim', 'count', 'size'], database.noun, 0)

tal = {};

function tally(n) {
    if (tal[n] !== undefined) {
        tal[n] += 1
    } else {
        tal[n] = 1
    }
}

_.each(hey, function (tag) {
    _.each(tag, function (anim) {
        _.each(anim, function (count) {
            _.each(count, function (size) {
                 size.tree = buildTree(size)
//                _.each(size, function (index) {
//                    tally(index)
//                })
            })
        })
    })
})

end = window.performance.now();
console.log(end - start);

for (var t = 0; t < _.keys(tal).length - 1; t++) {
    if (!tal[t]) {
        console.log(database.noun[t])
    }
}