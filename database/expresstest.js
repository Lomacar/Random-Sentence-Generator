const fs = require("fs-extra");
const express = require("express");
const myParser = require("body-parser");
const app = express();

const beautify = require('json-beautify');
const colors = require('colors')

//app.use(myParser.urlencoded({extended : true}));

var urlencodedParser = myParser.urlencoded({ extended:true,limit:5000000, parameterLimit: 5000000 })
app.use(urlencodedParser);

app.use(myParser.json());


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
        console.log("Processing lexicon...".yellow)
        eval(fs.readFileSync("lexiconProcessor.js")+'');
        loadLexicon()

        res.send(true)
    });
});

app.listen(8080);
