schemas = {}

schemas.common = {
    "name": {
        "$ref": "#/definitions/name",
        "minLength": 2,
        "propertyOrder": 10
    },
    "proto": {
        "$ref": "#/definitions/name",
        "propertyOrder": 20
    },
    "prohibitions": {
        "$ref": "#/definitions/objectString",
        "propertyOrder": 500
    },
    "disabled":{
        type: "boolean",
        format: "checkbox",
    }
}

schemas.noun = _.extend({}, schemas.common, {
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
        "$ref": "#/definitions/objectString",
        "propertyOrder": 70
    },
    "partOf": {
        "$ref": "#/definitions/taglist",
        default: "null",
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
        description: "1 = the ___ / 2 = bare",
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
        "$ref": "#/definitions/objectString",
        "propertyOrder": 140
    }
})

schemas.verb = _.extend({}, schemas.common, {
    "class": {
        type: "string",
        enum: ["","state","activity","event", "process", "semel"],
        "propertyOrder": 50
    },
    "tags": {
        "$ref": "#/definitions/tags",
        "propertyOrder": 100
    },
    "vtags": {
        "$ref": "#/definitions/taglist",
        "propertyOrder": 100
    },
    "anim": {
        "$ref": "#/definitions/numberCompare",
        "propertyOrder": 200
    },
    "tang": {
        "$ref": "#/definitions/numberCompare",
        "propertyOrder": 200
    },
    "volition": {
        type: "string",
        enum: ["","true","false"],
        "propertyOrder": 200
    },
    "ptpl": {
        "$ref": "#/definitions/tags",
        "propertyOrder": 200
    },
    "compcore": {
        "$ref": "#/definitions/complement",
        "propertyOrder": 300
    },
    "compext": {
        "$ref": "#/definitions/complement",
        "propertyOrder": 300
    },
    "inflections": {
        "$ref": "#/definitions/objectString",
        "propertyOrder": 400
    }

})

schemas.adjective = _.extend({}, schemas.common, {
    "rank": {
        type: "string",
        pattern: "^-?\\d*\.?\\d+$|^$",
        propertyOrder: 100,
    },
    "tags": {
        "$ref": "#/definitions/tags",
        "propertyOrder": 100
    },
    "anim": {
        "$ref": "#/definitions/numberCompare",
        "propertyOrder": 200
    },
    "tang": {
        "$ref": "#/definitions/numberCompare",
        "propertyOrder": 200
    },
    "size": {
        "$ref": "#/definitions/numberCompare",
        "propertyOrder": 200
    },
    "perm": {
        type: "string",
        enum: ["", "0", "1", "2"],
        propertyOrder: 300
    },
    "scalar": {
        type: "string",
        enum: ["", "0", "1", "2"],
        "options": {
            enum_titles: ["", "no", "limited", "open"]
        },
        propertyOrder: 300
    },
    "superform": {
        type: "string",
        enum: ["","-er", "more"],
        format: "radio",
        propertyOrder: 400
    },
    "opposite": {
        type: "string",
        propertyOrder: 400
    },
    "complements": {
        "$ref": "#/definitions/complement",
        "propertyOrder": 400
    }
})

definitions = {
    "name": {
        "type": "string",
        "pattern": "^([A-Za-z\\u00C0-\\u017F']|\\^.)([0-9A-Za-z\\u00C0-\\u017F\\-.' ]|\\^.)*$|^$"
    },
    "number": {
        type: "string",
        default: "",
        pattern: "^(-?\\d*\.?\\d+ *(, *\\d*\.?\\d)*)?$"
    },
    "numberCompare": {
        type: "string",
        default: "",
        pattern: "^[!><]?-?\\d*\.?\\d+( ?[&|] ?[!><]?-?\\d*\.?\\d+)*$|^--$|^$"
    },
    "objectString": {
        "type": "string",
        "pattern": "^[^:,]+:[^:,]+(,[^:,]+:[^:,]+)*$|^--$|^$"
    },
    "tags": {
        type: "string",
        "pattern": "^$|^!?[\\w-]+( ?[&|] ?!?[\\w-]+)*$|^--$"
    },
    "taglist": {
        type: "string",
        "pattern": "^$|^[\\w-]+( ?, ?[\\w-]+)*$|^--$"
    },
    "complement": {
        "type": "string"
    }
}
