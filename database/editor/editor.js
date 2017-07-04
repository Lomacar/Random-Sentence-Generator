var undo = [],
    newness = false,
    undo_enabled = true,
    changes = false
const undo_length = 10
var errors = {}

var currentIndex = -1
var scrollPos
var $jt

wordClass = getQueryVariable("type")
rootName = (wordClass+'s').toUpperCase()
lexicon = eval(wordClass)
document.title = "Edit:"+_.startCase(wordClass)
renderTree()

$('body').addClass(wordClass)

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
        "title": _.startCase(wordClass),
        "type": "object",
        "properties": schemas[wordClass],
        "definitions": definitions,
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


$('#editor').on("input",  function(e) {
    //if you are typing characters or deleting
    //if (typeof e.which == "number" && e.which > 0 && !e.ctrlKey && !e.metaKey && !e.altKey && e.which != 8) {
        newness = true && editor.validate().length == 0
    //}
});


$('#save').click(saveToDisk)

$('body').on('keydown', e=>{
    if(e.key=='s' && e.ctrlKey) {
        e.preventDefault()
        saveToDisk()
    }
})

function saveToDisk() {
    if(_.size(errors)) {
        alert("There are "+_.size(errors)+" entries with errors.")
        console.log(errors);
    } else {
        var focused = ($(':focus')); // for some stupid reason
        focused.blur()               // the form won't be up to date when saving,
        focused.focus()              // unless you do this
        saveEntry()

        $.ajax({
            type:'POST',
            url: "http://localhost:8080/save",
            data: JSON.stringify({type: wordClass,data: lexicon}),
            contentType: 'application/json',
            success: data => {
                var when = new Date()
                if(data===true) {
                    console.info(rootName + " file saved. " + when.toLocaleTimeString());

                    //remove redness
                    $("#save").removeClass("changes")
                    var temp = $jt.get_selected()
                    $jt.select_all()
                    $jt.set_type($jt.get_selected(),'default')
                    $jt.deselect_all()
                    $jt.select_node(temp)
                    changes = false
                }
                else alert("Error saving!")
            },
            error: data => {
                alert("Error saving!")
            }
        })
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





function renderTree () {
    var protoTree = {}
    currentIndex = -1

    function addChildren (branch, parent) {
        branch.text = parent ? parent.name : rootName
        branch.a_attr = {id: branch.text.replace(/ /g, '_'), class: parent && parent.disabled ? 'disabled':''}
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
    $.jstree.defaults.search.search_callback = function (str, node) {
        if(_.contains(str, ':')){
            var key_val = str.split(':')
            var key = key_val[0]
            var val = key_val[1].trim()
            var lex = _.find(database[wordClass], {name: node.text})
            if (!lex) return false //necessary because the root node does not exist in the lexicon
            if (str.match(/[><!|&]/)) return magicCompare(lex[key], val, {tagmode: true})
            else if (val==="") return lex[key]===undefined || lex[key]===""
            else return _.contains(lex[key]+"", val)
        }

        //default
        return _.contains(node.text, str)
    }

    $treeview = $('#jstree')
    $treeview.jstree( {
        'core' : {
            'data' : protoTree,
            'check_callback' : true,
        },
        //"plugins" : [ "state" ]
        "plugins" : ["search", "types", "sort"],
        "types" : {
            "default" : {
                icon: "default"
            },
            "changed" : {
                "icon" : "fa fa-asterisk"
            },
            "error" : {
                "icon" : "fa fa-exclamation-circle"
            }
        },
        'sort' :  function (a, b) {
            if ((this.is_parent(this.get_node(a)) && this.is_parent(this.get_node(b))) || (!this.is_parent(this.get_node(a)) && !this.is_parent(this.get_node(b))) ) {
                //sort equals by natural order in JSON file
                return  _.findIndex(lexicon,{name: this.get_text(a)}) > _.findIndex(lexicon,{name: this.get_text(b)}) ? 1 : -1;
            } else {
                return this.is_parent(this.get_node(a)) ? 1 : -1
            }
        }

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
//        console.log(data.action);
//        console.log(currentIndex);
        if(currentIndex >= 0 && !editor.getEditor('root.name').value) return //don't try to save the form if there is no name
//        console.log("go");

        var i, j, r = [];
        for(i = 0, j = data.selected.length; i < j; i++) {
            r.push(data.instance.get_node(data.selected[i]).text);
        }

        //"save" editor data back to the lexicon
        var saved = saveEntry()
        if(saved=="go back") return

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
            editor.root.setValue({},true);
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
            $jt.get_text(sel).replace(/_/g,' ')
            document.getElementById(sel).scrollIntoView(true);
            window.scrollTo(0,window.scrollY-400);
        }
    }
}

function selectFromHash (arguments) {
    var bob = location.hash.replace('#','')
    if (bob) {
        $jt.deselect_all()
        $jt.select_node(bob)
        setTimeout(gotoSelectedNode,10)
    }
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
    if(currentIndex == -1 ) return

    //handle errors
    var err = editor.validate()
    var name = lexicon[currentIndex].name
    var here = $jt.get_node(name.replace(/ /g,'_'))
    if(err.length){
        $jt.set_type(here,'error')
        errors[name] = err
    } else {
        delete errors[name]
    }

    //rename entry is tree if name was changed
    var newName = editor.getEditor('root.name').value
    if(newName != name){
        //if the new name is valid, rename the node on the tree
        if (!editor.validate().length || editor.validate().length && !editor.validate()[0].path == "root.name")  {
            //$jt.rename_node(here, newName)
            //and update proto for every child entry
            lexicon.forEach(entry => {
                if(entry.proto == name) entry.proto = newName
            })
        } else {
            console.warn("Invalid name.")
            $jt.deselect_all()
            $jt.select_node(here)
            return "go back"
        }
    }

    //move entry in try if proto was changed
    editorProto = editor.getEditor('root.proto').value
    lexiconProto = lexicon[currentIndex].proto
    if(editorProto != lexiconProto){
        if(editorProto === "" && lexiconProto === undefined){
            //do nothing if you are just "flipping channels" and the entry happens to have no proto
        }
        else {
            if (editorProto == "") {
                var there = (wordClass+'s').toUpperCase()
                } else {
                    var there = $jt.get_node(editorProto.replace(/ /g,'_'))
                    }
            if(!there) {
                alert("Proto does not exist, so it will not be changed.")
                editor.getEditor('root.proto').setValue(lexiconProto)
            } else {
                $jt.move_node(here, there)
            }
        }
    }

    //dim disabled nodes
    if (editor.getEditor('root.disabled').value == true) $(document.getElementById(here.text.replace(/ /g,"_"))).addClass('disabled')
    else $(document.getElementById(here.text.replace(/ /g,"_"))).removeClass('disabled')

    if(pushUndo() && !err.length){
        //mark new/modified nodes with icon
        $jt.set_type(here,'changed')
    }

    //update lexicon
    console.log(editor.getValue().tags);
    lexicon[currentIndex] = editor.getValue()
    prune(lexicon[currentIndex])

    if(newName != name) renderTree()
}

function pushUndo () {
    if(newness) {
        undo.push(_.clone(lexicon, true))
        if (undo.length > undo_length) undo = undo.slice(1);
        $("#save").addClass("changes")
        changes = true
        newness = false
        return true
    }
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

$('#jstree').on('keydown', function (e) {

    switch (e.key) {

        case 'Delete':
            deleteNode($jt.get_selected(true));
            break;

        case 'Insert':
            console.log('Insert');
            insertNode($jt.get_selected(true), e.ctrlKey)
            break;

    }

})

$('#editor').on('keydown', e=>{
    switch (e.key) {
        case 'Enter':
            e.preventDefault()
            var focused = ($(':focus'));
            focused.blur() //for some stupid reason the form won't be up to date when saving, unless you do this
            focused.focus()
            saveEntry()
            break;
        case 'ArrowDown':
            e.preventDefault()
            var focused = ($(':focus'));
            focused.blur() //necessary so editor change fires and saves form
            var here = $jt.get_selected()
            $jt.select_node($jt.get_next_dom(here))
            $jt.deselect_node(here)
            focused.focus()
            focused.select()
            break;
        case 'ArrowUp':
            e.preventDefault()
            var focused = ($(':focus'));
            focused.blur() //necessary so editor change fires and saves form
            var here = $jt.get_selected()
            $jt.select_node($jt.get_prev_dom(here))
            $jt.deselect_node(here)
            focused.focus()
            focused.select()
            break;
        default:
            //console.log(e.key);
    }
})

$('body').on('keydown', e => {
    switch (e.key) {
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
            break;

        case '\\':
            e.preventDefault()
            $('#tree-search').select().val('')
            break;

        case 'Home':
            if(e.ctrlKey){
                e.preventDefault()
                $('#jstree').click()
                gotoSelectedNode()
            }
            break;
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

    if (currentIndex == -1) ctrl=true //can't insert as sibling of the root

    var par = refNode, //insertion as child
        index = -1
    if(!ctrl) { //normal insertion as sibling
        par =  $jt.get_node(refNode.parent)
        index = $.inArray(refNode.id, par.children)
    }

    //validate name
    var name = prompt('What shall you call this new thing?')
    if(editor.validate({name: name}).length) {
        alert("Invalid name!")
        return
    }

    if (_.find(lexicon, {name: name})) {
        alert ("An entry with the name '" + name + "' already exists!")
        return
    }

    //update the lexicon
    newness = true
    pushUndo()
    var newEntry = {name: name}
    newEntry.proto = currentIndex == -1 ? "" : (par.text == rootName ? "" : par.text)
    if(currentIndex == -1) {
        var insertionPoint = lexicon[length]
    } else {
        var here = $jt.get_node(lexicon[currentIndex].name.replace(/ /,'_'))
        var insertionPoint = _.findIndex(lexicon,{name:here.text}) + 1
    }
    lexicon.splice(insertionPoint,0,newEntry)


    //create the node in the tree
    var hi = $jt.create_node(par, name, index+1)
    $jt.deselect_all()
    $jt.select_node(hi)
    $("#jstree").focus()

    $jt.set_type(hi,'changed')

    $jt.set_id(hi,name)
}
