var fs   = require('fs')
  , chokidar = require('chokidar')
  , colors = require('colors')

var ontologyFile = 'ontology.graphml'
var ontologyOutFile = '../dist/js/ontology.js'
var lexiconDir = 'csv'

var watcher = chokidar.watch([lexiconDir, ontologyFile, ontologyOutFile], {ignored: /#$/, persistent: true})

watcher.on('change', function(path){
    console.log(path)

    if(path==ontologyFile){
        console.log("Processing ontology...".green.bgBlue)
        processOntology()
    } else {
        console.log("Processing lexicon...".yellow.bgBlue)
        eval(fs.readFileSync("dbProcessor.js")+'');
        loadLexicon()
    }
})


function processOntology(){

    var file = fs.readFileSync(ontologyFile, 'utf-8')

    var output = {}, nodes = {}

    var cheerio = require('cheerio'),
        $ = cheerio.load(file,{
            normalizeWhitespace: true,
            xmlMode: true
        });


    $('node').each(function(k,n){
        var id = $(n).attr('id')
        var thing = $(n).find('[key=d4]').text()
        var label = $(n).find('y\\:NodeLabel').first().text().trim()
        var isGroup = $(n).attr('yfiles.foldertype')

        if(!isGroup) {
            nodes[id] = label
            output[label] = []

            if(thing){
                var otherSources = thing.split(' ')
                otherSources.forEach(function(s){
                    output[nodes[id]].push(s)
                })
            }
        }

    })

    $('edge').each(function(k,e){
        var source = $(e).attr('source')
        var target = $(e).attr('target')
        output[nodes[target]].push(nodes[source])
    })

    fs.writeFile(ontologyOutFile, 'ontology = ' + JSON.stringify(output))

    console.log('Updated ontology'.green + ontologyOutFile)

}
