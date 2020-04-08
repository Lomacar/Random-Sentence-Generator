const fs = require("fs-extra");
const chokidar = require('chokidar');
const express = require("express");
const myParser = require("body-parser");
const app = express();
const cors = require('cors')
const beautify = require('json-beautify');
const colors = require('colors');

var ontologyFile = 'ontology.graphml'
var ontologyOutFile = '../dist/js/ontology.js'


var watcher = chokidar.watch([ontologyFile, ontologyOutFile], {ignored: /#$/, persistent: true})

watcher.on('change', function(path){
    doTheThings(path)
})

function doTheThings (path) {
    console.log(path.bgRed)

    if(path==ontologyFile){
        console.log("Processing ontology...".green)
        processOntology()
    } else {
        console.log("Processing lexicon...".yellow)
        eval(fs.readFileSync("lexiconProcessor.js")+'');
        loadLexicon()
    }
    var d = new Date()
    console.log(d.toLocaleTimeString())
}

//convert relevant graphml elements to JSON and save as ontology.js
//output format: ontology = { 'tag1':['upstream_tag1','upstream_tag2'], ... }
function processOntology(){

    var file = fs.readFileSync(ontologyFile, 'utf-8')

    var output = {}, nodes = {}

    var cheerio = require('cheerio'),
        $ = cheerio.load(file,{
            normalizeWhitespace: true,
            xmlMode: true
        });

    //fill the ontology object with properties for every node in the ontology graph
    $('node').each(function(k,n){
        var id = $(n).attr('id')
        var thing = $(n).find('[key=d3]').text()
        var label = $(n).find('y\\:NodeLabel').first().text().trim()
        var isGroup = $(n).attr('yfiles.foldertype')

        if(!isGroup) {
            nodes[id] = label
            output[label] = []

            //treat node attributes as upstream ontology connections
            if(thing){
                var otherSources = thing.split(' ')
                otherSources.forEach(function(s){
                    output[nodes[id]].push(s)
                })
            }
        }

    })
    
    //distill edge connections from graphml
    $('edge').each(function(k,e){
        //normal edge connections
        var source = $(e).attr('source')
        var target = $(e).attr('target')
        output[nodes[target]].push(nodes[source])
        
        //edge labels
        var label = $(e).find('y\\:EdgeLabel').first().text().trim()
        if (label) output[nodes[target]].push(label)
    })

    fs.writeFile(ontologyOutFile, 'ontology = ' + JSON.stringify(output))

    console.log('Updated ontology'.green + ontologyOutFile)

}


///////////////////////////////////////////////////////////////////////////////////////////////////
// EXPRESS SERVER

var urlencodedParser = myParser.urlencoded({ extended:true,limit:5000000, parameterLimit: 5000000 })
app.use(urlencodedParser);

app.use(myParser.json({limit: '5mb'}));
app.use(cors())


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'null');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/", function (req,res) { res.send('Hello World!') } );

app.post("/save", function (req,res) {
    //console.log(req.body.data)
    var type = req.body.type
    var data = req.body.data
    var file = "./JSON/" + type + "s.js"
    //make backup
    fs.copy(file, "./JSON/" + type + "s.backup.js", err => {
        if (err) {res.send(err); return}

        //write original
        fs.writeFileSync(file, type + " = " + beautify(data, null, 2, 10))

        //build processed db
        doTheThings(file)

        res.send(true)
    });
});

app.listen(8080);
