var fs   = require('fs')
  , colors = require('colors')
var filename = '../dist/csv/ontology.graphml'
var outfile = '../dist/js/ontology.js'
var file = fs.readFileSync(filename, 'utf-8')

fs.watchFile(filename,function(){

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

    fs.writeFile(outfile, 'ontology = ' + JSON.stringify(output))

    console.log('Updated '.green + outfile)

})
