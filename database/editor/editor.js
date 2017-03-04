var undo = [],
    newness = false,
    undo_enabled = true,
    changes = false
const undo_length = 10

var element = document.getElementById('editor');

//check for balanced brackets
JSONEditor.defaults.custom_validators.push(function(schema, value, path) {
    var errors = [];
    if(schema.type==="string") {
        if(!isBalanced(value)) {
            // Errors must be an object with `path`, `property`, and `message`
            errors.push({
                path: path,
                property: 'format',
                message: 'Unbalanced braces'
            });
        }
    }
    return errors;
});

var options = {
    schema: {
        "title": "Noun",
        "type": "object",
        "properties": {
            "name": {
                "$ref": "#/definitions/name",
                "propertyOrder": 10
            },
            "proto": {
                type:"string",
                "propertyOrder": 20
            },
            "tags": {
                "$ref": "#/definitions/taglist",
                "propertyOrder": 30
            },
            "anim": {
                "$ref": "#/definitions/number",
                "maximum": 3,
                "propertyOrder": 40
            },
            "tang": {
                "$ref": "#/definitions/number",
                "maximum": 2,
                "propertyOrder": 50
            },
            "possessable": {
                "$ref": "#/definitions/number",
                "propertyOrder": 60
            },
            "posr" : {
                "$ref": "#/definitions/restrictions",
                "propertyOrder": 70
            },
            "partOf": {
                "$ref": "#/definitions/taglist",
                "propertyOrder": 75
            },
            "gender": {
                type: "string",
                enum: ["","male","female"],
                default: "",
                "propertyOrder": 80
            },
            "size": {
                "$ref": "#/definitions/number",
                "propertyOrder": 90
            },
            "unique": {
                description: "1 = the ___, 2 = bare",
                type: "string",
                enum: ["","0","1","2"],
                "propertyOrder": 100
            },
            "count": {
                type: "string",
                enum: ["","true","false"],
                "propertyOrder": 110
            },
            "precomp": {
                "$ref": "#/definitions/complement",
                "propertyOrder": 120
            },
            "complements": {
                "$ref": "#/definitions/complement",
                "propertyOrder": 130
            },
            "inflections": {
                type: "string",
                "propertyOrder": 140
            },
            "prohibitions": {
                type: "string",
                "propertyOrder": 150
            },
            "disabled":{
                type: "boolean",
                format: "checkbox",
                "propertyOrder": 160
            }
        },
        "definitions": {
            "name": {
                "type": "string",
                "minLength": 2,
                "pattern": "([0-9a-zA-Z. ]|\\^[0-9])+"
            },
            "number": {
                type: "string",
                default: "",
                pattern: "^(-?\\d*\.?\\d+ *(, *\\d*\.?\\d)*)?$"
            },
            "restrictions": {
                "type": "string",
                "pattern": "^[^:,]+:[^:,]+(,[^:,]+:[^:,]+)*$|^$"
            },
            "tags": {
                type: "string",
                "pattern": "^$|^!?\\w+( ?[&|] ?!?\\w+)*$"
            },
            "taglist": {
                type: "string",
                "pattern": "^$|^[\\w-]+( ?, ?[\\w-]+)*$"
            },
            "complement": {
                "type": "string"
            }
        },
    },
    theme: "bootstrap3",
    iconlib: "fontawesome4",
    show_errors: "always",
    //remove_empty_properties: true
}
var editor = new JSONEditor(element, options);

function populateEditor(data, proto){
    undo_enabled = newness
    editor.root.setValue(data,true);

    for(p in editor.schema.properties){

        //add proto hints to the editor
        if(data[p]==undefined){
            $control = $('[name=root\\['+p+'\\]]')
            if ($control.get(0).tagName == "SELECT"){
                $control.prop('required', false)
                $control.find('option[disabled]').remove()
                if(proto[p]){
                    $control.prop('required', true)
                    $control.prepend('<option value="" disabled="" selected="">'+proto[p]+'</option>')
                }

            } else {
                if(proto[p]){
                    $control.attr('placeholder', proto[p])
                } else {
                    $control.attr('placeholder', '')
                }
            }

        }

        //nullify undefined numbers and booleans in the editor
        if(data[p]===undefined && editor.getEditor('root.'+p).schema.type.match(/boolean|number|integer/))
        {
            //console.log(data[p] +'::'+ editor.getEditor('root.'+p).schema.type)
            editor.getEditor('root.'+p).setValue(null)
        }
    }

}

editor.on("ready",  function() {

})


//editor.getEditor('root.unique').setValue(null)

editor.on("change",  function() {
    var errors = editor.validate()
    if(errors.length) {
        // errors is an array of objects, each with a `path`, `property`, and `message` parameter
        // `property` is the schema keyword that triggered the validation error (e.g. "minLength")
        // `path` is a dot separated path into the JSON object (e.g. "root.path.to.field")
        console.log(errors);
    } else if (undo_enabled){
        newness = true
    }
    //for some insane reason the on change event lags behind the actual form change
    //so if the form is being populated and no changes were made, undo must be disabled
    //then renabled when this event finally decides to fire
    undo_enabled = true
});


$('#save').click(saveToDisk)

function saveToDisk() {
    var errors = editor.validate();

    if(errors.length && currentIndex!=-1) {
        console.log(errors);
    } else {
        saveEntry()
        //                    $.post("http://localhost:8080/save", {type: wordClass,data: lexicon})
        $.ajax({
            type:'POST',
            url: "http://localhost:8080/save",
            data: JSON.stringify({type: wordClass,data: lexicon}),
            contentType: 'application/json'
        })
        $("#save").removeClass("changes")
        changes = false
    }
}

function isBalanced(string) {
    var parentheses = "[]{}()",
        stack = [],
        i, character, bracePosition;

    for(i = 0; character = string[i]; i++) {
        bracePosition = parentheses.indexOf(character);

        if(bracePosition === -1) {
            continue;
        }

        if(bracePosition % 2 === 0) {
            stack.push(bracePosition + 1); // push next expected brace position
        } else {
            if(stack.pop() !== bracePosition) {
                return false;
            }
        }
    }
    return stack.length === 0;
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var currentIndex = -1
var scrollPos
var $jt

wordClass = "noun"
lexicon = eval(wordClass)
renderTree()

function renderTree () {
    var protoTree = {}
    currentIndex = -1

    function addChildren (branch, parent) {
        branch.text = parent ? parent.name : (wordClass+'s').toUpperCase()
        branch.a_attr = {id: branch.text.replace(/ /g, '_')}
        branch.children = []
        lexicon.forEach(function(n){
            if (parent ? n.proto == branch.text : n.proto == undefined) {
                var newBranch = {}
                branch.children.push(newBranch)
                addChildren(newBranch,n)
            }
        })
    }
    addChildren(protoTree)

    if($('#jstree').jstree()) $('#jstree').jstree(true).destroy(true);
    //$.jstree.defaults.core.themes.variant = "large";
    //$.jstree.defaults.core.themes.name = "responsive";
    $.jstree.defaults.core.themes.icons = false;
    $treeview = $('#jstree')
    $treeview.jstree( {
        'core' : {
            'data' : protoTree,
            'check_callback' : true,
        },
        //"plugins" : [ "state" ]
        "plugins" : ["search"]
    })
    .on('loaded.jstree', function() {
        $treeview.jstree('open_all');
        $jt = $("#jstree").jstree(true)
        selectFromHash()
    })
    .on('changed.jstree', function (e, data) {
        if($jt.get_selected().length == 0){
            currentIndex = -1
            editor.root.setValue({},true)
        }

        if(data.action != "select_node") return //don't try to save the form when deleting a node
        console.log(data.action);
        console.log(currentIndex);
        if(currentIndex >= 0 && !editor.getEditor('root.name').value) return //don't try to save the form if there is no name
        console.log("go");

        var i, j, r = [];
        for(i = 0, j = data.selected.length; i < j; i++) {
            r.push(data.instance.get_node(data.selected[i]).text);
        }

        //"save" editor data back to the lexicon
        saveEntry()

        //retrieve new entry from lexicon for editor
        var selectedText = r[r.length-1]
        var original = _.find(lexicon, {name: selectedText})
        var original_index = _.findIndex(lexicon, {name: selectedText})
        currentIndex = original_index

        //retrieve/construct proto for editor
        if(original){
            var original_proto = _.find(lexicon, {name: original.proto})
            var processed_proto = _.find(database[wordClass], {name: original.proto})
            var merged_proto = _.extend({},processed_proto, original_proto)

            populateEditor(original, merged_proto)

        } else {
            console.warn(selectedText + " does not exist.")
        }
        history.pushState({}, '', '#'+selectedText.replace(/ /g, '_'))
    })
}

window.onhashchange = selectFromHash

function gotoSelectedNode () {
    if (scrollPos) window.scrollTo(0,scrollPos);
    else {
        var sel = $jt.get_selected()
        if(sel){
            var seltext = '#' + $jt.get_text(sel).replace(/_/g,' ')
            document.getElementById(sel).scrollIntoView(true);
        }
    }
}

function selectFromHash (arguments) {
    var bob = location.hash
    $jt.deselect_all()
    $jt.select_node(bob)
    setTimeout(gotoSelectedNode,10)
}

//tree filtering/searching
var to = false;
$('#tree-search').keyup(function () {
    if(to) { clearTimeout(to); }
    to = setTimeout(function () {
        var v = $('#tree-search').val();
        $jt.search(v,1,1);
    }, 250);
});

function saveEntry () {
    pushUndo()
    lexicon[currentIndex] = editor.getValue()
    prune(lexicon[currentIndex])
}

function pushUndo () {
    if(newness) {
        undo.push(_.clone(lexicon, true))
        if (undo.length > undo_length) undo = undo.slice(1);
        $("#save").addClass("changes")
        changes = true
    }
    newness = false
}

window.onbeforeunload = function(evt) {
    if(!changes) return
    var message = 'Are you sure you want to close without saving?';
    if (typeof evt == 'undefined') {
        evt = window.event;
    }
    if (evt) {
        evt.returnValue = message;
    }

    return message;
}
$('body').on('keydown', function (e) {

    switch (e.key) {

        case 'Delete':
            deleteNode($jt.get_selected(true));
            break;

        case 'Insert':
            insertNode($jt.get_selected(true), e.ctrlKey)
            break;

        case 'Z':
            if(e.ctrlKey) {
                if (undo.length) {
                    lexicon = undo.pop()
                    editor.root.setValue({},true);
                    scrollPos = window.scrollY
                    renderTree()
                    changes = true
                } else {
                    console.warn("Nothing to undo.");
                }
            }
    }

})

function deleteNode (which) {
    //remove parent nodes
    which = _.filter(which,function (node) {
        if ($jt.is_parent(node)){
            console.warn('Cannot delete node with children. (' + node.text + ')')
            return false
        }
        return true
    })
    if(which.length==0) return


    //update lexicon
    newness = true
    pushUndo()
    which.forEach(node => {
        var deleteIndex = _.findIndex(lexicon,{name: node.text})
        lexicon.splice(deleteIndex, 1)
    })



    //select next item on list
    //lots of work if we want to get the next item with multi-selection
    var par = which[0].parent
    var childs = $jt.get_node(par).children
    var ordered = _.intersection(childs,which.map(n=>n.id))
    var last = _.last(ordered)
    var first = _.first(ordered)
    var newSel = $jt.get_next_dom(last,true) || $jt.get_prev_dom(first,true) || par
    $jt.deselect_all()
    if(newSel.length){
        $jt.select_node(newSel)
        //gotoSelectedNode()
    }

    //update tree
    $jt.delete_node(which)
}

function insertNode (refNode,ctrl) {
    refNode = _.last(refNode)
    var par = refNode, //insertion as child
        index = -1
    if(!ctrl) { //normal insertion as sibling
        par =  $jt.get_node(refNode.parent),
        index = $.inArray(refNode.id, par.children)
    }

    var name = prompt('What shall you call this new thing?')

    //update the lexicon
    if (_.find(lexicon, {name: name})) {
        alert ("An entry with the name '" + name + "' already exists!")
        return
    }
    newEntry = {name: name}
    newEntry.proto = par.text
    lexicon.push(newEntry)

    //create the node in the tree
    var hi = $jt.create_node(par,name, index+1)
    $jt.deselect_all()
    $jt.select_node(hi)

    newness = true
    pushUndo()
}
