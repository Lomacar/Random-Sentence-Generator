noun = [
  {
    "name": "Nile",
    "proto": "river",
    "unique": 1,
    "count": "false"
  },
  {
    "name": "Outback",
    "proto": "forest",
    "unique": 1,
    "count": "false",
    "size": 10
  },
  {
    "name": "apocalypse",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 1,
    "count": "false",
    "tags": "event",
    "partOf": "null"
  },
  {
    "name": "North",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 1,
    "count": "false",
    "tags": "place",
    "partOf": "null"
  },
  {
    "name": "Taj Mahal",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 1,
    "count": "false",
    "size": 8,
    "tags": "building",
    "partOf": "null"
  },
  {
    "name": "Canuck",
    "anim": 3,
    "tang": 1,
    "possessable": 0,
    "unique": 1,
    "count": "true",
    "tags": "-",
    "prohibitions": "number:sg",
    "partOf": "null"
  },
  {
    "name": "Loch Ness monster",
    "proto": "dog",
    "unique": 1,
    "size": 7,
    "tags": "waterAnimal"
  },
  {
    "name": "Jack",
    "anim": 3,
    "tang": 2,
    "gender": "m",
    "possessable": 0,
    "unique": 2,
    "count": "false",
    "size": 6,
    "tags": "person, firstname",
    "precomp": "(10 TITLE{unpack:noun.tags-gender})",
    "partOf": "null"
  },
  {
    "name": "Sally",
    "anim": 3,
    "tang": 2,
    "gender": "f",
    "possessable": 0,
    "unique": 2,
    "count": "false",
    "size": 6,
    "tags": "person, firstname",
    "precomp": "(10 TITLE{unpack:noun.tags-gender})",
    "partOf": "null"
  },
  {
    "name": "Pope",
    "proto": "Jack",
    "unique": 1
  },
  {
    "name": "Popemobile",
    "proto": "car",
    "unique": 1
  },
  {
    "name": "Sahara Desert",
    "proto": "Outback",
    "unique": 1
  },
  {
    "name": "Area ^5^1",
    "proto": "Outback",
    "unique": 2,
    "size": 9
  },
  {
    "name": "Times Square",
    "proto": "Outback",
    "unique": 2,
    "size": 9
  },
  {
    "name": "Christmas",
    "anim": 0,
    "tang": 0,
    "possessable": 0,
    "unique": 2,
    "count": "false",
    "tags": "event",
    "partOf": "null"
  },
  {
    "name": "dancing",
    "anim": 0,
    "tang": 0,
    "possessable": 0,
    "unique": 2,
    "count": "false",
    "tags": "activity",
    "partOf": "null"
  },
  {
    "name": "Fido",
    "proto": "dog",
    "gender": "m",
    "possessable": 0,
    "unique": 2,
    "count": "false"
  },
  {
    "name": "Snoopy",
    "proto": "Fido"
  },
  {
    "name": "Shadowfax",
    "proto": "Fido"
  },
  {
    "name": "Garfield",
    "proto": "Fido"
  },
  {
    "name": "Hypnotoad",
    "proto": "Fido"
  },
  {
    "name": "Fluffy",
    "proto": "Fido"
  },
  {
    "name": "Scooby-doo",
    "proto": "Fido"
  },
  {
    "name": "R^2D^2",
    "proto": "Fido",
    "anim": 1.5,
    "tags": "-, machine"
  },
  {
    "name": "city",
    "anim": 0,
    "tang": 1,
    "possessable": 2,
    "posr": "tags: person",
    "unique": 0,
    "count": "true",
    "size": 9,
    "tags": "city",
    "partOf": "null"
  },
  {
    "name": "town",
    "proto": "city"
  },
  {
    "name": "village",
    "proto": "city"
  },
  {
    "name": "neighborhood",
    "proto": "city",
    "size": 8.5
  },
  {
    "name": "ghetto",
    "proto": "city",
    "size": 8.5
  },
  {
    "name": "district",
    "proto": "city",
    "size": 8.5
  },
  {
    "name": "region",
    "proto": "country",
    "size": "9,10,11",
    "tags": "-, region"
  },
  {
    "name": "country",
    "anim": 0,
    "tang": 1,
    "possessable": 2,
    "posr": "tags: person",
    "unique": 0,
    "count": "true",
    "size": 11,
    "tags": "country",
    "partOf": "null"
  },
  {
    "name": "kingdom",
    "proto": "country",
    "disabled": false
  },
  {
    "name": "province",
    "proto": "country"
  },
  {
    "name": "state",
    "proto": "country"
  },
  {
    "name": "realm",
    "proto": "state"
  },
  {
    "name": "Japan",
    "proto": "country",
    "possessable": 0,
    "unique": 2,
    "count": "false"
  },
  {
    "name": "London",
    "proto": "city",
    "possessable": 0,
    "unique": 2,
    "count": "false"
  },
  {
    "name": "The Iliad",
    "anim": 0,
    "tang": 0,
    "possessable": 0,
    "unique": 2,
    "count": "false",
    "size": 0,
    "tags": "readable",
    "partOf": "null"
  },
  {
    "name": "Stonehenge",
    "proto": "Taj Mahal",
    "unique": 2,
    "tags": "structure, -"
  },
  {
    "name": "Buckingham Palace",
    "proto": "Taj Mahal",
    "unique": 2
  },
  {
    "name": "vibration.1",
    "proto": "vibration",
    "count": "false"
  },
  {
    "name": "work.1",
    "proto": "task",
    "count": "false"
  },
  {
    "name": "cattle",
    "anim": 2,
    "tang": 2,
    "possessable": 4,
    "unique": 0,
    "count": 0.5,
    "size": 6,
    "tags": "collective",
    "inflections": "pl:cattle",
    "prohibitions": "number:sg",
    "partOf": "null"
  },
  {
    "name": "Alp",
    "proto": "Outback",
    "count": "true",
    "prohibitions": "number:sg"
  },
  {
    "name": "coin",
    "anim": 0,
    "tang": 2,
    "possessable": 4,
    "unique": 0,
    "count": "true",
    "size": 3,
    "tags": "artifact",
    "partOf": "null"
  },
  {
    "name": "disaster",
    "anim": 0,
    "tang": 0,
    "possessable": 1,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "happening",
    "partOf": "null"
  },
  {
    "name": "situation",
    "anim": 0,
    "tang": 0,
    "possessable": 4,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "situation",
    "partOf": "null"
  },
  {
    "name": "crisis",
    "proto": "situation",
    "possessable": 1,
    "count": "true",
    "inflections": "pl:crises"
  },
  {
    "name": "scandal",
    "proto": "situation"
  },
  {
    "name": "emergency",
    "proto": "situation"
  },
  {
    "name": "chaos",
    "proto": "situation",
    "count": "false"
  },
  {
    "name": "tension",
    "proto": "chaos"
  },
  {
    "name": "combat",
    "proto": "chaos"
  },
  {
    "name": "prosperity",
    "proto": "chaos"
  },
  {
    "name": "peace",
    "proto": "chaos"
  },
  {
    "name": "tranquility",
    "proto": "chaos"
  },
  {
    "name": "fun",
    "proto": "chaos"
  },
  {
    "name": "health",
    "proto": "chaos",
    "possessable": 9,
    "posr": "tags: lifeform"
  },
  {
    "name": "hostility",
    "proto": "situation"
  },
  {
    "name": "productivity",
    "proto": "chaos"
  },
  {
    "name": "problem",
    "anim": 0,
    "tang": 0,
    "possessable": 6,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "difficulty",
    "partOf": "null"
  },
  {
    "name": "question",
    "anim": 0,
    "tang": 0,
    "possessable": 6,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "difficulty,information,speechAct",
    "complements": "(40 about NP)",
    "partOf": "null"
  },
  {
    "name": "task",
    "anim": 0,
    "tang": 0,
    "possessable": 6,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "difficulty,undertaking",
    "partOf": "null"
  },
  {
    "name": "journey",
    "anim": 0,
    "tang": 0,
    "possessable": 4,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "undertaking,accomplishment",
    "partOf": "null"
  },
  {
    "name": "vibration",
    "anim": 0,
    "tang": 0,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "behaviour,feelable,phenomenon",
    "partOf": "null"
  },
  {
    "name": "strategy",
    "anim": 0,
    "tang": 0,
    "possessable": 6,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "procedure",
    "complements": "(25 for GP)",
    "partOf": "null"
  },
  {
    "name": "forest",
    "anim": 0,
    "tang": 1,
    "possessable": 1,
    "unique": 0,
    "count": "true",
    "size": 9,
    "tags": "terrain",
    "partOf": "null"
  },
  {
    "name": "apple",
    "anim": 0,
    "tang": 2,
    "possessable": 4,
    "unique": 0,
    "count": "true",
    "size": 4,
    "tags": "food",
    "partOf": "null"
  },
  {
    "name": "mango",
    "proto": "apple"
  },
  {
    "name": "pineapple",
    "proto": "apple"
  },
  {
    "name": "mushroom",
    "proto": "apple",
    "tags": "food,plant"
  },
  {
    "name": "sandwich",
    "proto": "apple",
    "tags": "artifact"
  },
  {
    "name": "pizza",
    "proto": "sandwich",
    "size": "4,5",
    "tags": "surface"
  },
  {
    "name": "pie",
    "proto": "pizza",
    "size": 4
  },
  {
    "name": "life",
    "anim": 0,
    "tang": 0,
    "possessable": 0,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "property",
    "inflections": "pl:lives",
    "prohibitions": "def:def,quantified:true",
    "partOf": "null"
  },
  {
    "name": "color.1",
    "proto": "color",
    "count": "false"
  },
  {
    "name": "dirt",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "aggregate, semisolid",
    "partOf": "null"
  },
  {
    "name": "garbage",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "aggregate",
    "partOf": "null"
  },
  {
    "name": "light",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 2,
    "count": "false",
    "size": 0,
    "tags": "energy",
    "partOf": "null"
  },
  {
    "name": "sky",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 1,
    "count": "false",
    "size": 0,
    "tags": "thing, volume, elevated",
    "partOf": "null"
  },
  {
    "name": "truth",
    "anim": 0,
    "tang": 0,
    "possessable": 0,
    "unique": 1,
    "count": "false",
    "size": 0,
    "tags": "concept",
    "partOf": "null"
  },
  {
    "name": "weather",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 1,
    "count": "false",
    "size": 0,
    "tags": "weather",
    "partOf": "null"
  },
  {
    "name": "wind",
    "anim": 0,
    "tang": 1,
    "possessable": 1,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "phenomenon, visible",
    "partOf": "null"
  },
  {
    "name": "fact",
    "anim": 0,
    "tang": 0,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "information",
    "prohibitions": "case:nom",
    "partOf": "null"
  },
  {
    "name": "bicycle",
    "anim": 0,
    "tang": 2,
    "possessable": 5,
    "unique": 0,
    "count": "true",
    "size": 5,
    "tags": "hasHeight, nonMotorVehicle",
    "partOf": "null"
  },
  {
    "name": "carpet",
    "anim": 0,
    "tang": 2,
    "possessable": 1,
    "unique": 0,
    "count": "true",
    "size": 7,
    "tags": "rideable, artifact, surface, grounded",
    "partOf": "null"
  },
  {
    "name": "category",
    "anim": 0,
    "tang": 0,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "-",
    "partOf": "null"
  },
  {
    "name": "color",
    "anim": 0,
    "tang": 1,
    "possessable": 2,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "property,PHYSICAL",
    "partOf": "null"
  },
  {
    "name": "party",
    "anim": 0,
    "tang": 0,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "occasion",
    "partOf": "null"
  },
  {
    "name": "dinner",
    "proto": "party"
  },
  {
    "name": "potluck",
    "proto": "party"
  },
  {
    "name": "BBQ",
    "proto": "party"
  },
  {
    "name": "concert",
    "proto": "party",
    "tags": "performance"
  },
  {
    "name": "funeral",
    "proto": "party"
  },
  {
    "name": "meeting",
    "proto": "party"
  },
  {
    "name": "intervention",
    "proto": "party"
  },
  {
    "name": "Bible study",
    "proto": "party"
  },
  {
    "name": "bake sale",
    "proto": "party"
  },
  {
    "name": "farmer's market",
    "proto": "party"
  },
  {
    "name": "beauty pageant",
    "proto": "concert"
  },
  {
    "name": "dog",
    "anim": 2,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": 5,
    "tags": "beast",
    "partOf": "null"
  },
  {
    "name": "ghost",
    "anim": 3,
    "tang": 1,
    "possessable": 2,
    "unique": 0,
    "count": "true",
    "size": 5,
    "tags": "-",
    "partOf": "null"
  },
  {
    "name": "house",
    "anim": 0,
    "tang": 2,
    "possessable": 5,
    "unique": 0,
    "count": "true",
    "size": 8,
    "tags": "building",
    "partOf": "null"
  },
  {
    "name": "building",
    "proto": "house",
    "possessable": 3
  },
  {
    "name": "church",
    "proto": "house",
    "possessable": 4,
    "posr": "tags: organization|city"
  },
  {
    "name": "temple",
    "proto": "church"
  },
  {
    "name": "prison",
    "proto": "house",
    "possessable": 4,
    "posr": "tags: city"
  },
  {
    "name": "school",
    "proto": "house",
    "possessable": 4,
    "posr": "tags: city|person"
  },
  {
    "name": "store",
    "proto": "house",
    "possessable": 1
  },
  {
    "name": "museum",
    "proto": "house",
    "possessable": 1
  },
  {
    "name": "library",
    "proto": "house",
    "possessable": 0
  },
  {
    "name": "gym",
    "proto": "house",
    "possessable": 1
  },
  {
    "name": "tower",
    "proto": "house",
    "possessable": 2
  },
  {
    "name": "airport",
    "proto": "house",
    "possessable": 0
  },
  {
    "name": "barn",
    "proto": "house",
    "possessable": 3
  },
  {
    "name": "factory",
    "proto": "house",
    "possessable": 2
  },
  {
    "name": "restaurant",
    "proto": "house",
    "possessable": 1
  },
  {
    "name": "mall",
    "proto": "house",
    "possessable": 0
  },
  {
    "name": "theatre",
    "proto": "house",
    "possessable": 0
  },
  {
    "name": "laboratory",
    "proto": "house",
    "possessable": 2
  },
  {
    "name": "warehouse",
    "proto": "house",
    "possessable": 0
  },
  {
    "name": "bunker",
    "proto": "house",
    "tags": "grounded"
  },
  {
    "name": "station",
    "proto": "house",
    "possessable": 0
  },
  {
    "name": "human",
    "anim": 3,
    "tang": 2,
    "possessable": 2,
    "unique": 0,
    "count": "true",
    "size": 6,
    "tags": "hasHeight, person, mobile",
    "partOf": "null"
  },
  {
    "name": "idea",
    "anim": 0,
    "tang": 0,
    "possessable": 4,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "cognition",
    "partOf": "null"
  },
  {
    "name": "law",
    "anim": 0,
    "tang": 0,
    "possessable": 2,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "readable",
    "partOf": "null"
  },
  {
    "name": "letter",
    "disabled": false,
    "tags": "readable",
    "anim": "0",
    "tang": "2",
    "possessable": "4",
    "partOf": "null",
    "size": "4",
    "count": "true",
    "complements": "(30 about NP)"
  },
  {
    "name": "life.1",
    "proto": "life",
    "possessable": 6,
    "posr": "number:noun.number",
    "count": "true",
    "tags": "event,-"
  },
  {
    "name": "light1",
    "proto": "light",
    "tang": 2,
    "possessable": 1,
    "count": "true",
    "size": 4,
    "tags": "device,-"
  },
  {
    "name": "machine",
    "anim": 1,
    "tang": 2,
    "possessable": 4,
    "unique": 0,
    "count": "true",
    "size": "4,5,6,7",
    "tags": "machine",
    "partOf": "null"
  },
  {
    "name": "pile",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": "4,5,6,7,8",
    "tags": "incline, volume",
    "complements": "(80 of N{(tags: item; (number:pl | count:false); anim:<2; unique:0; size:<noun.size | tags:substance&!fluid;) } )",
    "partOf": "null"
  },
  {
    "name": "poison",
    "anim": 0,
    "tang": 2,
    "possessable": 2,
    "unique": 0,
    "count": "true",
    "size": 4,
    "tags": "substance",
    "partOf": "null"
  },
  {
    "name": "rock",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": "4,5,6,7",
    "tags": "breakable, item",
    "partOf": "null"
  },
  {
    "name": "stone",
    "proto": "rock",
    "size": "3,4,5,6"
  },
  {
    "name": "pinecone",
    "proto": "rock",
    "size": "3,4"
  },
  {
    "name": "sensation",
    "anim": 0,
    "tang": 1,
    "possessable": 1,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "stimulus, feelable",
    "partOf": "null"
  },
  {
    "name": "snowman",
    "anim": "0,3",
    "tang": 2,
    "possessable": 2,
    "unique": 0,
    "count": "true",
    "size": 6,
    "tags": "object, hasHeight",
    "inflections": "pl:snowmen",
    "partOf": "null"
  },
  {
    "name": "statement",
    "anim": 0,
    "tang": 1,
    "possessable": 4,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "readable,audible,information",
    "partOf": "null"
  },
  {
    "name": "prophecy",
    "proto": "statement"
  },
  {
    "name": "storm",
    "anim": 0,
    "tang": 1,
    "possessable": 1,
    "unique": 0,
    "count": "true",
    "size": 9,
    "tags": "weather, event, obstacle",
    "partOf": "null"
  },
  {
    "name": "team",
    "anim": 3,
    "tang": 1,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "organization",
    "complements": "(20 of N{number:pl;anim:>1;person:3;tags:!collective})",
    "partOf": "null"
  },
  {
    "name": "team1",
    "proto": "team",
    "precomp": "DP{tags:game}",
    "complements": "--"
  },
  {
    "name": "tendency",
    "anim": 0,
    "tang": 0,
    "possessable": 7,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "tendency",
    "complements": "(40 INF_PHRASE   | 25 toward GP)",
    "partOf": "null"
  },
  {
    "name": "toy",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": 4,
    "tags": "device",
    "partOf": "null"
  },
  {
    "name": "uncle",
    "proto": "father",
    "count": "true",
    "tags": "-"
  },
  {
    "name": "zombie",
    "anim": 2,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": 6,
    "tags": "hasHeight, creature, mobile",
    "partOf": "null"
  },
  {
    "name": "tendency1",
    "proto": "tendency",
    "possessable": 0,
    "complements": "of INF_CLAUSE",
    "prohibitions": "--"
  },
  {
    "name": "citizen.1",
    "proto": "citizen",
    "possessable": 0,
    "prohibitions": "--"
  },
  {
    "name": "winner",
    "proto": "human",
    "possessable": 0,
    "posr": "tags:contest",
    "prohibitions": "def:indef"
  },
  {
    "name": "staff",
    "proto": "choir",
    "prohibitions": "number:pl,def:indef"
  },
  {
    "name": "fact1",
    "proto": "fact",
    "complements": "(80 that CLAUSE)",
    "prohibitions": "number:pl,def:indef,case:nom"
  },
  {
    "name": "citizen",
    "proto": "human",
    "possessable": 7,
    "posr": "tags:territory",
    "prohibitions": "number:sg"
  },
  {
    "name": "^unicorn",
    "proto": "dog",
    "size": "6,7"
  },
  {
    "name": "Abe Lincoln",
    "proto": "Batman"
  },
  {
    "name": "airplane",
    "proto": "machine",
    "size": 8,
    "tags": "airVehicle, passengerVehicle, elevated"
  },
  {
    "name": "Albert Einstein",
    "proto": "Batman"
  },
  {
    "name": "Alfred Hitchcock",
    "proto": "Batman"
  },
  {
    "name": "alien",
    "proto": "human"
  },
  {
    "name": "amoeba",
    "proto": "bug",
    "size": 1,
    "tags": "-,lifeform"
  },
  {
    "name": "bacterium",
    "proto": "amoeba",
    "inflections": "pl: bacteria"
  },
  {
    "name": "anaconda",
    "proto": "dog"
  },
  {
    "name": "army",
    "proto": "team"
  },
  {
    "name": "Arnold Schwartzenegger",
    "proto": "Batman"
  },
  {
    "name": "article",
    "proto": "book",
    "tang": 1
  },
  {
    "name": "Aunt Jemima",
    "proto": "Cinderella"
  },
  {
    "name": "baboon",
    "proto": "dog"
  },
  {
    "name": "bag",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": "4,5,6,7",
    "tags": "vessel",
    "complements": "(90 of N{(tags: item; (number:pl | count:false); anim:<2; unique:0; size:<noun.size | tags:substance) } )",
    "partOf": "null"
  },
  {
    "name": "banana",
    "proto": "apple"
  },
  {
    "name": "Barack Obama",
    "proto": "Batman"
  },
  {
    "name": "basket",
    "proto": "box"
  },
  {
    "name": "Big Foot",
    "proto": "Batman"
  },
  {
    "name": "Bilbo Baggins",
    "proto": "Batman"
  },
  {
    "name": "boat",
    "proto": "machine",
    "size": "7,8",
    "tags": "waterVehicle, passengerVehicle, motorVehicle"
  },
  {
    "name": "boat1",
    "anim": 0,
    "tang": 2,
    "possessable": 5,
    "unique": 0,
    "count": "true",
    "size": "6,7",
    "tags": "waterVehicle",
    "partOf": "null"
  },
  {
    "name": "submarine",
    "proto": "boat"
  },
  {
    "name": "oil tanker",
    "proto": "boat"
  },
  {
    "name": "book",
    "proto": "letter"
  },
  {
    "name": "book.1",
    "proto": "book",
    "possessable": 0,
    "complements": "(40 by NP{anim:3;number:sg;unique:2}) (40 about NP)",
    "prohibitions": "case:gen"
  },
  {
    "name": "Borg",
    "proto": "Canuck",
    "anim": 2,
    "inflections": "pl:Borg"
  },
  {
    "name": "bowling ball",
    "proto": "ball"
  },
  {
    "name": "box",
    "proto": "bag",
    "tags": "structure"
  },
  {
    "name": "brother",
    "proto": "father"
  },
  {
    "name": "bug",
    "proto": "dog",
    "disabled": false,
    "tags": "bug, -",
    "anim": "1.5",
    "size": "2,3"
  },
  {
    "name": "Bugs Bunny",
    "proto": "Batman"
  },
  {
    "name": "bus",
    "proto": "car",
    "size": 7,
    "tags": "passengerVehicle"
  },
  {
    "name": "car",
    "proto": "machine",
    "size": 7,
    "tags": "motorVehicle, groundVehicle, container"
  },
  {
    "name": "centaur",
    "proto": "human"
  },
  {
    "name": "chariot",
    "proto": "car"
  },
  {
    "name": "Charlemagne",
    "proto": "Batman"
  },
  {
    "name": "child",
    "proto": "human",
    "possessable": 5,
    "size": 5,
    "inflections": "pl:children"
  },
  {
    "name": "chimney sweep",
    "proto": "human"
  },
  {
    "name": "Chuck Norris",
    "proto": "Batman"
  },
  {
    "name": "chupacabra",
    "proto": "dog"
  },
  {
    "name": "Cinderella",
    "proto": "Sally",
    "tags": "-,person,fullname",
    "precomp": "--"
  },
  {
    "name": "Cleopatra",
    "proto": "Cinderella"
  },
  {
    "name": "communist",
    "proto": "human"
  },
  {
    "name": "company",
    "proto": "team"
  },
  {
    "name": "computer",
    "proto": "machine"
  },
  {
    "name": "conductor",
    "proto": "human"
  },
  {
    "name": "conquistador",
    "proto": "human"
  },
  {
    "name": "contraption",
    "proto": "machine"
  },
  {
    "name": "Corolla",
    "proto": "car"
  },
  {
    "name": "cow",
    "proto": "dog",
    "size": 6.5
  },
  {
    "name": "criminal",
    "proto": "human",
    "possessable": 0
  },
  {
    "name": "crowd",
    "proto": "team",
    "size": "7,8"
  },
  {
    "name": "customer",
    "proto": "human"
  },
  {
    "name": "Daffy Duck",
    "proto": "Batman"
  },
  {
    "name": "Darth Vader",
    "proto": "Batman"
  },
  {
    "name": "data",
    "proto": "garbage",
    "tang": 1,
    "tags": "collective,information, visible"
  },
  {
    "name": "death",
    "proto": "life",
    "complements": "--",
    "inflections": "pl:deaths"
  },
  {
    "name": "decision",
    "anim": 0,
    "tang": 0,
    "possessable": 6,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "-",
    "partOf": "null"
  },
  {
    "name": "device",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": 4,
    "tags": "device",
    "partOf": "null"
  },
  {
    "name": "gadget",
    "proto": "device",
    "size": "3,4,5,6"
  },
  {
    "name": "toaster",
    "proto": "device"
  },
  {
    "name": "dinosaur",
    "proto": "dog",
    "size": "7,8"
  },
  {
    "name": "disaster1",
    "proto": "disaster",
    "tags": "situation,-"
  },
  {
    "name": "doberman pincher",
    "proto": "dog"
  },
  {
    "name": "doctor",
    "proto": "human",
    "possessable": 4
  },
  {
    "name": "dragon",
    "proto": "dinosaur"
  },
  {
    "name": "dragonfly",
    "proto": "bug",
    "disabled": false,
    "tags": "airAnimal"
  },
  {
    "name": "dung beetle",
    "proto": "bug",
    "disabled": false
  },
  {
    "name": "earthquake",
    "proto": "disaster",
    "tags": "event,-"
  },
  {
    "name": "elf",
    "proto": "human",
    "inflections": "pl:elves"
  },
  {
    "name": "Elmer Fudd",
    "proto": "Batman"
  },
  {
    "name": "enemy",
    "proto": "human",
    "possessable": 6,
    "posr": "anim:3"
  },
  {
    "name": "fairy",
    "proto": "human"
  },
  {
    "name": "father",
    "proto": "mother",
    "gender": "m"
  },
  {
    "name": "Ferrari",
    "proto": "car"
  },
  {
    "name": "fish",
    "proto": "bug",
    "size": "4,5,6",
    "inflections": "pl:fish"
  },
  {
    "name": "fishing",
    "proto": "dancing"
  },
  {
    "name": "flotsam and jetsam",
    "proto": "garbage"
  },
  {
    "name": "food",
    "proto": "garbage",
    "tags": "edible"
  },
  {
    "name": "furniture",
    "proto": "money"
  },
  {
    "name": "germaphobe",
    "proto": "human"
  },
  {
    "name": "giant squid",
    "proto": "fish",
    "size": 7
  },
  {
    "name": "goat",
    "proto": "dog",
    "size": "5,6"
  },
  {
    "name": "Godzilla",
    "proto": "Jack",
    "anim": 2,
    "size": 8,
    "tags": "-,beast,fullname"
  },
  {
    "name": "golf cart",
    "proto": "car"
  },
  {
    "name": "gorilla",
    "proto": "dog"
  },
  {
    "name": "grandfather",
    "proto": "father"
  },
  {
    "name": "grasshopper",
    "proto": "bug"
  },
  {
    "name": "great white shark",
    "proto": "dog",
    "size": 7,
    "tags": "waterAnimal"
  },
  {
    "name": "gymnastics",
    "proto": "dancing"
  },
  {
    "name": "hamster",
    "proto": "dog",
    "size": 4
  },
  {
    "name": "Harlem Globetrotter",
    "proto": "Canuck"
  },
  {
    "name": "Illuminatus",
    "proto": "Canuck",
    "inflections": "pl:Illuminati"
  },
  {
    "name": "infant",
    "proto": "human",
    "anim": 2
  },
  {
    "name": "janitor",
    "proto": "human",
    "possessable": 2,
    "posr": "tags:building"
  },
  {
    "name": "jeep",
    "proto": "car"
  },
  {
    "name": "John Calvin",
    "proto": "Batman"
  },
  {
    "name": "John Lennon",
    "proto": "Batman"
  },
  {
    "name": "Kraken",
    "proto": "dog",
    "size": 7,
    "tags": "waterAnimal"
  },
  {
    "name": "kung-fu",
    "proto": "dancing"
  },
  {
    "name": "Leeroy Jenkins",
    "proto": "Batman"
  },
  {
    "name": "Les Miserables",
    "proto": "The Iliad"
  },
  {
    "name": "letter.1",
    "proto": "letter",
    "prohibitions": "case:gen",
    "disabled": false,
    "possessable": "0",
    "complements": "(40 from NP{anim:3;number:sg}) (40 about NP)"
  },
  {
    "name": "Lex Luther",
    "proto": "Batman"
  },
  {
    "name": "llama",
    "proto": "dog",
    "size": 6
  },
  {
    "name": "mailman",
    "proto": "human",
    "gender": "m",
    "possessable": 3,
    "inflections": "pl:mailmen"
  },
  {
    "name": "Margaret Thatcher",
    "proto": "Batman"
  },
  {
    "name": "Martin Luther",
    "proto": "Batman"
  },
  {
    "name": "message",
    "proto": "letter",
    "tang": "1,2",
    "possessable": 5
  },
  {
    "name": "minotaur",
    "proto": "human",
    "anim": "2,3"
  },
  {
    "name": "minion",
    "proto": "human",
    "possessable": 6,
    "posr": "anim:3"
  },
  {
    "name": "missionary",
    "proto": "human"
  },
  {
    "name": "money",
    "proto": "garbage",
    "posr": "tags:person|organization|territory"
  },
  {
    "name": "monsoon",
    "proto": "storm"
  },
  {
    "name": "Morgan Freeman",
    "proto": "Batman"
  },
  {
    "name": "Moss Doerksen",
    "proto": "Batman"
  },
  {
    "name": "mother",
    "proto": "human",
    "gender": "f",
    "possessable": 8,
    "posr": "anim:>1"
  },
  {
    "name": "Mr. Magoo",
    "proto": "Batman"
  },
  {
    "name": "neighbor",
    "proto": "human",
    "possessable": 7,
    "posr": "anim:3"
  },
  {
    "name": "visitor",
    "proto": "human"
  },
  {
    "name": "guest",
    "proto": "human"
  },
  {
    "name": "nerd",
    "proto": "human"
  },
  {
    "name": "geek",
    "proto": "human"
  },
  {
    "name": "traitor",
    "proto": "human"
  },
  {
    "name": "villain",
    "proto": "human"
  },
  {
    "name": "hero",
    "proto": "human",
    "inflections": "pl:heroes"
  },
  {
    "name": "loser",
    "proto": "human"
  },
  {
    "name": "slob",
    "proto": "human"
  },
  {
    "name": "hoodlum",
    "proto": "human"
  },
  {
    "name": "gangster",
    "proto": "human"
  },
  {
    "name": "artist",
    "proto": "human"
  },
  {
    "name": "accountant",
    "proto": "human"
  },
  {
    "name": "anarchist",
    "proto": "human"
  },
  {
    "name": "waitress",
    "proto": "human"
  },
  {
    "name": "dancer",
    "proto": "human"
  },
  {
    "name": "lawyer",
    "proto": "human"
  },
  {
    "name": "lumberjack",
    "proto": "human"
  },
  {
    "name": "soldier",
    "proto": "human"
  },
  {
    "name": "linguist",
    "proto": "human"
  },
  {
    "name": "professor",
    "proto": "human"
  },
  {
    "name": "scientist",
    "proto": "human"
  },
  {
    "name": "footballer",
    "proto": "human"
  },
  {
    "name": "player",
    "proto": "human",
    "disabled": false,
    "precomp": "DP{tags:game}"
  },
  {
    "name": "coach",
    "proto": "human",
    "disabled": false,
    "precomp": "(88 DP{tags:sport})"
  },
  {
    "name": "coach1",
    "proto": "human",
    "disabled": false,
    "possessable": "8",
    "posr": "name: team1, pronominal:false"
  },
  {
    "name": "hairdresser",
    "proto": "human",
    "disabled": false
  },
  {
    "name": "supermodel",
    "proto": "human"
  },
  {
    "name": "pianist",
    "proto": "human"
  },
  {
    "name": "spy",
    "proto": "human"
  },
  {
    "name": "ambassador",
    "proto": "human"
  },
  {
    "name": "carpenter",
    "proto": "human"
  },
  {
    "name": "blacksmith",
    "proto": "human"
  },
  {
    "name": "maid",
    "proto": "human"
  },
  {
    "name": "mechanic",
    "proto": "human"
  },
  {
    "name": "musician",
    "proto": "human"
  },
  {
    "name": "prisoner",
    "proto": "human"
  },
  {
    "name": "slave",
    "proto": "human"
  },
  {
    "name": "pilot",
    "proto": "human"
  },
  {
    "name": "farmer",
    "proto": "human"
  },
  {
    "name": "peasant",
    "proto": "human"
  },
  {
    "name": "servant",
    "proto": "human"
  },
  {
    "name": "mayor",
    "proto": "human",
    "complements": "(of DP{tags:city})"
  },
  {
    "name": "sheriff",
    "proto": "mayor"
  },
  {
    "name": "cowboy",
    "proto": "human"
  },
  {
    "name": "gynaecologist",
    "proto": "human"
  },
  {
    "name": "dentist",
    "proto": "human"
  },
  {
    "name": "detective",
    "proto": "human"
  },
  {
    "name": "investigator",
    "proto": "human"
  },
  {
    "name": "fugitive",
    "proto": "human"
  },
  {
    "name": "hostage",
    "proto": "human"
  },
  {
    "name": "witness",
    "proto": "human"
  },
  {
    "name": "defendant",
    "proto": "human"
  },
  {
    "name": "suspect",
    "proto": "human"
  },
  {
    "name": "informant",
    "proto": "human"
  },
  {
    "name": "florist",
    "proto": "human"
  },
  {
    "name": "beekeeper",
    "proto": "human"
  },
  {
    "name": "passenger",
    "proto": "human"
  },
  {
    "name": "patient",
    "proto": "human"
  },
  {
    "name": "taxidermist",
    "proto": "human"
  },
  {
    "name": "salesman",
    "proto": "human",
    "precomp": "(55 N{tags:artifact, number:sg})",
    "inflections": "pl: salesmen"
  },
  {
    "name": "actor",
    "proto": "human",
    "disabled": false
  },
  {
    "name": "assistant",
    "proto": "human",
    "disabled": false,
    "posr": "anim:3"
  },
  {
    "name": "priest",
    "proto": "human"
  },
  {
    "name": "shepherd",
    "proto": "human"
  },
  {
    "name": "magician",
    "proto": "human"
  },
  {
    "name": "guard",
    "proto": "human"
  },
  {
    "name": "captain",
    "proto": "human"
  },
  {
    "name": "clown",
    "proto": "human"
  },
  {
    "name": "witch doctor",
    "proto": "human"
  },
  {
    "name": "assassin",
    "proto": "human"
  },
  {
    "name": "minstrel",
    "proto": "human"
  },
  {
    "name": "wizard",
    "proto": "human"
  },
  {
    "name": "druid",
    "proto": "human"
  },
  {
    "name": "ninja",
    "proto": "human"
  },
  {
    "name": "monk",
    "proto": "human"
  },
  {
    "name": "nun",
    "proto": "human"
  },
  {
    "name": "prophet",
    "proto": "human"
  },
  {
    "name": "Nerf-herder",
    "proto": "human"
  },
  {
    "name": "stormtrooper",
    "proto": "human"
  },
  {
    "name": "Jedi",
    "proto": "human",
    "inflections": "pl:Jedi"
  },
  {
    "name": "Jedi master",
    "proto": "human"
  },
  {
    "name": "Jedi warrior",
    "proto": "human"
  },
  {
    "name": "Sith lord",
    "proto": "human"
  },
  {
    "name": "introvert",
    "proto": "human"
  },
  {
    "name": "extrovert",
    "proto": "human"
  },
  {
    "name": "tourist",
    "proto": "human"
  },
  {
    "name": "pedestrian",
    "proto": "human"
  },
  {
    "name": "civilian",
    "proto": "human"
  },
  {
    "name": "Narnia",
    "proto": "Japan"
  },
  {
    "name": "Shire",
    "proto": "Alabama",
    "unique": 1,
    "count": "false"
  },
  {
    "name": "Mordor",
    "proto": "Alabama"
  },
  {
    "name": "Neverland",
    "proto": "Japan"
  },
  {
    "name": "Metropolis",
    "proto": "London"
  },
  {
    "name": "Gotham",
    "proto": "London"
  },
  {
    "name": "New York",
    "proto": "London"
  },
  {
    "name": "Timbuktu",
    "proto": "London"
  },
  {
    "name": "Langley",
    "proto": "London"
  },
  {
    "name": "Helsinki",
    "proto": "London"
  },
  {
    "name": "El Paso",
    "proto": "London"
  },
  {
    "name": "Frankfurt",
    "proto": "London"
  },
  {
    "name": "Moscow",
    "proto": "London"
  },
  {
    "name": "Kathmandu",
    "proto": "London"
  },
  {
    "name": "Mississippi",
    "proto": "Nile"
  },
  {
    "name": "North Pole",
    "anim": 0,
    "tang": 1,
    "gender": "n",
    "possessable": 0,
    "unique": 1,
    "count": "false",
    "tags": "point, site",
    "partOf": "null"
  },
  {
    "name": "novel",
    "proto": "book",
    "possessable": 1
  },
  {
    "name": "ogre",
    "proto": "human"
  },
  {
    "name": "parade",
    "proto": "concert"
  },
  {
    "name": "parrot",
    "proto": "bird",
    "tags": "airAnimal"
  },
  {
    "name": "person",
    "proto": "human",
    "possessable": 1,
    "inflections": "pl:people"
  },
  {
    "name": "picture",
    "proto": "rock",
    "possessable": 3,
    "size": "4,5",
    "complements": "(of NP)"
  },
  {
    "name": "pirate",
    "proto": "human"
  },
  {
    "name": "platypus",
    "proto": "dog",
    "inflections": "pl:platypi"
  },
  {
    "name": "polygamist",
    "proto": "human"
  },
  {
    "name": "porcupine",
    "proto": "dog"
  },
  {
    "name": "prediction",
    "proto": "statement",
    "tags": "telic"
  },
  {
    "name": "pterodactyl",
    "proto": "dog",
    "size": 7
  },
  {
    "name": "queen",
    "proto": "human",
    "gender": "f",
    "posr": "tags:territory|collective&person"
  },
  {
    "name": "queen.1",
    "proto": "queen",
    "posr": "--",
    "unique": 1,
    "complements": "of DP{tags:territory;}",
    "prohibitions": "def:indef"
  },
  {
    "name": "queen1",
    "proto": "queen",
    "complements": "(60  of the N{anim:>1; number:pl;}  |40  of N{(67 number:pl; |33 count:false) tags: !feature} )",
    "prohibitions": "def:indef,number:pl"
  },
  {
    "name": "king",
    "proto": "queen",
    "gender": "m"
  },
  {
    "name": "king1",
    "proto": "queen1"
  },
  {
    "name": "emperor",
    "proto": "queen",
    "gender": "m"
  },
  {
    "name": "prime minister",
    "proto": "queen",
    "gender": "--"
  },
  {
    "name": "president",
    "proto": "queen",
    "gender": "--"
  },
  {
    "name": "prince",
    "proto": "king"
  },
  {
    "name": "princess",
    "proto": "queen"
  },
  {
    "name": "duchess",
    "proto": "queen"
  },
  {
    "name": "earl",
    "proto": "king"
  },
  {
    "name": "chief",
    "proto": "king"
  },
  {
    "name": "governor",
    "proto": "president"
  },
  {
    "name": "Queen Elizabeth",
    "proto": "Cinderella"
  },
  {
    "name": "rabble-rouser",
    "proto": "human"
  },
  {
    "name": "refrigerator",
    "proto": "machine",
    "tags": "container"
  },
  {
    "name": "rhinoceros",
    "proto": "dog",
    "size": 7
  },
  {
    "name": "Robinson Crusoe",
    "proto": "Batman"
  },
  {
    "name": "rockstar",
    "proto": "human"
  },
  {
    "name": "Himalaya",
    "proto": "Alp"
  },
  {
    "name": "saint",
    "proto": "human",
    "possessable": 2
  },
  {
    "name": "Santa Clause",
    "proto": "Batman"
  },
  {
    "name": "sheep",
    "proto": "dog",
    "size": "5,6",
    "inflections": "pl:sheep"
  },
  {
    "name": "singing",
    "proto": "dancing"
  },
  {
    "name": "sister",
    "proto": "mother"
  },
  {
    "name": "skunk",
    "proto": "dog"
  },
  {
    "name": "smartphone",
    "proto": "phone",
    "size": 4,
    "tags": "audioDevice"
  },
  {
    "name": "iPhone",
    "proto": "smartphone"
  },
  {
    "name": "stereo",
    "proto": "device",
    "size": 5,
    "tags": "audioDevice"
  },
  {
    "name": "Walkman",
    "proto": "stereo",
    "size": 4
  },
  {
    "name": "radio",
    "proto": "stereo",
    "size": "4,5"
  },
  {
    "name": "gramophone",
    "proto": "stereo",
    "size": 5
  },
  {
    "name": "boombox",
    "proto": "stereo",
    "size": "4,5"
  },
  {
    "name": "smoking",
    "proto": "dancing"
  },
  {
    "name": "motorbike",
    "anim": 1,
    "tang": 2,
    "possessable": 7,
    "unique": 0,
    "count": "true",
    "size": 6,
    "tags": "motorVehicle, groundVehicle",
    "partOf": "null"
  },
  {
    "name": "snowmobile",
    "proto": "motorbike"
  },
  {
    "name": "South America",
    "proto": "Japan",
    "size": 12,
    "tags": "continent"
  },
  {
    "name": "Europe",
    "proto": "Japan"
  },
  {
    "name": "North America",
    "proto": "Japan"
  },
  {
    "name": "Africa",
    "proto": "Japan"
  },
  {
    "name": "Asia",
    "proto": "Japan"
  },
  {
    "name": "Antarctica",
    "proto": "Japan"
  },
  {
    "name": "Spaniard",
    "proto": "human",
    "possessable": 0
  },
  {
    "name": "spider",
    "proto": "bug"
  },
  {
    "name": "Spongebob",
    "proto": "Batman"
  },
  {
    "name": "Stalin",
    "proto": "Batman"
  },
  {
    "name": "statement.1",
    "proto": "statement",
    "possessable": 0,
    "complements": "(40 by NP{anim:3}) (40 about NP)"
  },
  {
    "name": "Steve Martin",
    "proto": "Batman"
  },
  {
    "name": "stick",
    "proto": "rock",
    "size": "4,5"
  },
  {
    "name": "student",
    "proto": "doctor"
  },
  {
    "name": "tank",
    "proto": "car"
  },
  {
    "name": "the Bible",
    "proto": "The Iliad"
  },
  {
    "name": "thesis",
    "proto": "book",
    "inflections": "pl:theses"
  },
  {
    "name": "time-travel",
    "proto": "dancing"
  },
  {
    "name": "tire",
    "proto": "rock",
    "size": 5,
    "tags": "artifact"
  },
  {
    "name": "tractor",
    "proto": "car"
  },
  {
    "name": "train",
    "proto": "bus",
    "size": 8
  },
  {
    "name": "truck",
    "proto": "car"
  },
  {
    "name": "tsunami",
    "proto": "disaster",
    "tags": "phenomenon"
  },
  {
    "name": "tuk-tuk",
    "proto": "car"
  },
  {
    "name": "turtle",
    "proto": "dog",
    "size": "4,5",
    "tags": "waterAnimal"
  },
  {
    "name": "van",
    "proto": "car"
  },
  {
    "name": "vehicle",
    "proto": "car"
  },
  {
    "name": "victim",
    "proto": "human",
    "possessable": 3,
    "posr": "anim:>1"
  },
  {
    "name": "War and Peace",
    "proto": "The Iliad"
  },
  {
    "name": "watermelon",
    "proto": "apple",
    "size": 5
  },
  {
    "name": "whale-watching",
    "proto": "dancing"
  },
  {
    "name": "William Wallace",
    "proto": "Batman"
  },
  {
    "name": "wipper-snapper",
    "proto": "human"
  },
  {
    "name": "wolf",
    "proto": "dog",
    "size": "5,6",
    "inflections": "pl:wolves"
  },
  {
    "name": "wombat",
    "proto": "dog"
  },
  {
    "name": "wood",
    "proto": "garbage",
    "tags": "solid,-"
  },
  {
    "name": "wookie",
    "proto": "human",
    "possessable": 2
  },
  {
    "name": "yeti",
    "proto": "dog",
    "size": 6
  },
  {
    "name": "yoga",
    "proto": "dancing"
  },
  {
    "name": "circumstance",
    "proto": "situation"
  },
  {
    "name": "puzzle",
    "proto": "problem"
  },
  {
    "name": "dilemma",
    "proto": "problem"
  },
  {
    "name": "issue",
    "proto": "problem"
  },
  {
    "name": "equation",
    "proto": "problem"
  },
  {
    "name": "riddle",
    "proto": "question",
    "possessable": 2
  },
  {
    "name": "assignment",
    "proto": "task"
  },
  {
    "name": "mission",
    "proto": "task"
  },
  {
    "name": "job",
    "proto": "task",
    "tags": "obligation"
  },
  {
    "name": "quest",
    "proto": "task"
  },
  {
    "name": "gang",
    "proto": "team"
  },
  {
    "name": "cartel",
    "proto": "team",
    "precomp": "(drug)"
  },
  {
    "name": "government",
    "proto": "choir",
    "posr": "tags:territory"
  },
  {
    "name": "FBI",
    "proto": "choir",
    "unique": 1,
    "count": "false"
  },
  {
    "name": "CIA",
    "proto": "FBI"
  },
  {
    "name": "MI^6",
    "proto": "FBI",
    "unique": 2
  },
  {
    "name": "Jedi Council",
    "proto": "FBI"
  },
  {
    "name": "UN",
    "proto": "FBI"
  },
  {
    "name": "Supreme Court",
    "proto": "FBI"
  },
  {
    "name": "Mafia",
    "proto": "FBI"
  },
  {
    "name": "choir",
    "proto": "team",
    "complements": "--"
  },
  {
    "name": "band",
    "proto": "team"
  },
  {
    "name": "herd",
    "proto": "team",
    "anim": 2,
    "size": "8,9",
    "tags": "collective,-",
    "complements": "(60 of N{number:pl;anim:2;pronominal:false;person:3;tags:!collective})"
  },
  {
    "name": "luggage",
    "proto": "furniture",
    "size": 5
  },
  {
    "name": "flock",
    "proto": "herd",
    "size": "8,9"
  },
  {
    "name": "plan",
    "proto": "strategy",
    "tags": "undertaking",
    "complements": "(30 INF_PHRASE{volition:true})"
  },
  {
    "name": "project",
    "proto": "plan"
  },
  {
    "name": "experiment",
    "proto": "plan"
  },
  {
    "name": "scheme",
    "proto": "plan"
  },
  {
    "name": "work",
    "proto": "dancing",
    "tags": "behaviour, procedure, -"
  },
  {
    "name": "sorcery",
    "proto": "dancing"
  },
  {
    "name": "voodoo",
    "proto": "dancing"
  },
  {
    "name": "prophecy",
    "proto": "dancing"
  },
  {
    "name": "population",
    "proto": "government"
  },
  {
    "name": "toil",
    "proto": "work.1",
    "tags": "difficulty"
  },
  {
    "name": "gambling",
    "proto": "dancing"
  },
  {
    "name": "denizen",
    "proto": "citizen",
    "posr": "tags:place"
  },
  {
    "name": "author",
    "proto": "human",
    "posr": "name:book,orsimilar:true"
  },
  {
    "name": "parking lot",
    "proto": "forest",
    "size": 8
  },
  {
    "name": "beach",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": "7,8",
    "tags": "field",
    "partOf": "null"
  },
  {
    "name": "park",
    "proto": "forest",
    "size": "8,9"
  },
  {
    "name": "ex-girlfriend",
    "proto": "human",
    "gender": "f",
    "possessable": 8,
    "posr": "anim:3,gender:!f"
  },
  {
    "name": "friend",
    "proto": "human",
    "possessable": 7
  },
  {
    "name": "stranger",
    "proto": "human"
  },
  {
    "name": "foreigner",
    "proto": "human"
  },
  {
    "name": "immigrant",
    "proto": "human"
  },
  {
    "name": "owner",
    "proto": "human",
    "possessable": 8,
    "posr": "anim:<3,tags:object"
  },
  {
    "name": "owner1",
    "proto": "human",
    "complements": "(of DP{tags:item|animal|building|organization;def:def;partial:false})"
  },
  {
    "name": "White House",
    "proto": "Taj Mahal"
  },
  {
    "name": "stadium",
    "proto": "house"
  },
  {
    "name": "Eiffel Tower",
    "proto": "Taj Mahal",
    "tags": "structure, -"
  },
  {
    "name": "Empire State Building",
    "proto": "Taj Mahal",
    "disabled": false
  },
  {
    "name": "Parthenon",
    "proto": "Taj Mahal"
  },
  {
    "name": "Great Wall of China",
    "proto": "Taj Mahal",
    "tags": "perimeter, vertical, structure, surface, -"
  },
  {
    "name": "Space Needle",
    "proto": "Taj Mahal"
  },
  {
    "name": "Louvre",
    "proto": "Taj Mahal"
  },
  {
    "name": "swarm",
    "proto": "herd",
    "size": "6,7,8"
  },
  {
    "name": "spoon",
    "proto": "rock",
    "tags": "instrument"
  },
  {
    "name": "knife",
    "proto": "spoon",
    "inflections": "pl:knives"
  },
  {
    "name": "ball",
    "proto": "rock",
    "tags": "artifact"
  },
  {
    "name": "midget",
    "proto": "human",
    "size": 5
  },
  {
    "name": "witch",
    "proto": "human",
    "gender": "f"
  },
  {
    "name": "floor",
    "anim": 0,
    "tang": 2,
    "possessable": 2,
    "unique": 0,
    "count": "true",
    "size": 8,
    "tags": "surface, grounded",
    "partOf": "null"
  },
  {
    "name": "street",
    "proto": "road",
    "tags": "surface, grounded"
  },
  {
    "name": "sidewalk",
    "proto": "street"
  },
  {
    "name": "ice",
    "proto": "floor",
    "unique": 0,
    "count": "false",
    "prohibitions": "number:pl, quantified:true, def:indef"
  },
  {
    "name": "ice1",
    "anim": 0,
    "tang": 2,
    "possessable": 2,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "solid",
    "partOf": "null"
  },
  {
    "name": "lawn",
    "proto": "floor"
  },
  {
    "name": "air",
    "anim": 0,
    "tang": 1,
    "possessable": 1,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "gas",
    "partOf": "null"
  },
  {
    "name": "sand",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "aggregate",
    "partOf": "null"
  },
  {
    "name": "gravel",
    "proto": "sand"
  },
  {
    "name": "bark mulch",
    "proto": "sand"
  },
  {
    "name": "Lego",
    "proto": "sand"
  },
  {
    "name": "heap",
    "proto": "pile",
    "size": "5,6,7,8"
  },
  {
    "name": "mound",
    "proto": "pile",
    "size": "4,5,6"
  },
  {
    "name": "wall",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": "7,8",
    "tags": "surface, structure, vertical",
    "partOf": "null"
  },
  {
    "name": "fence",
    "proto": "wall"
  },
  {
    "name": "bridge",
    "proto": "street",
    "tags": "structure, bridge, elevated"
  },
  {
    "name": "overpass",
    "proto": "bridge"
  },
  {
    "name": "lake",
    "anim": 0,
    "tang": 1,
    "possessable": 4,
    "posr": "tags:country|continent",
    "unique": 0,
    "count": "true",
    "size": "8,9",
    "tags": "openWater",
    "partOf": "null"
  },
  {
    "name": "ocean",
    "proto": "lake",
    "unique": 1,
    "size": 13
  },
  {
    "name": "Ocean",
    "proto": "ocean",
    "unique": 1,
    "count": "false",
    "precomp": "(Atlantic|Pacific|Indian)"
  },
  {
    "name": "Mediterranean",
    "proto": "lake",
    "unique": 1,
    "count": "false",
    "size": 12
  },
  {
    "name": "Bermuda Triangle",
    "proto": "Mediterranean",
    "size": 11
  },
  {
    "name": "river",
    "proto": "lake",
    "size": 9,
    "tags": "path"
  },
  {
    "name": "creek",
    "proto": "river",
    "size": 7,
    "tags": "-, bodyOfWater"
  },
  {
    "name": "Alabama",
    "proto": "Japan",
    "tags": "-, region"
  },
  {
    "name": "Crimea",
    "proto": "Alabama"
  },
  {
    "name": "Ontario",
    "proto": "Alabama"
  },
  {
    "name": "California",
    "proto": "Alabama"
  },
  {
    "name": "Arizona",
    "proto": "Alabama"
  },
  {
    "name": "Saskatchewan",
    "proto": "Alabama"
  },
  {
    "name": "Florida",
    "proto": "Alabama"
  },
  {
    "name": "Kentucky",
    "proto": "Alabama"
  },
  {
    "name": "Siberia",
    "proto": "Alabama"
  },
  {
    "name": "Middle East",
    "proto": "South America",
    "unique": 1
  },
  {
    "name": "island",
    "proto": "forest",
    "size": "8,9,10",
    "tags": "-,land,surface"
  },
  {
    "name": "planet",
    "anim": 0,
    "tang": 1,
    "possessable": 2,
    "unique": 0,
    "count": "true",
    "size": 14,
    "tags": "land,surface",
    "partOf": "null"
  },
  {
    "name": "asteroid",
    "proto": "planet",
    "tang": 2,
    "size": "11,12"
  },
  {
    "name": "comet",
    "proto": "planet",
    "size": "11,12"
  },
  {
    "name": "moon",
    "proto": "planet"
  },
  {
    "name": "Earth",
    "proto": "planet",
    "unique": 1,
    "count": "false"
  },
  {
    "name": "Moon",
    "proto": "Earth"
  },
  {
    "name": "Mars",
    "proto": "Earth",
    "unique": 2
  },
  {
    "name": "Pluto",
    "proto": "Mars"
  },
  {
    "name": "Tatooine",
    "proto": "Mars"
  },
  {
    "name": "Coruscant",
    "proto": "Mars"
  },
  {
    "name": "Krypton",
    "proto": "Mars"
  },
  {
    "name": "labyrinth",
    "anim": 0,
    "tang": 1,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": 8,
    "tags": "area,structure",
    "partOf": "null"
  },
  {
    "name": "computer programming",
    "proto": "dancing"
  },
  {
    "name": "pair of pants",
    "proto": "skirt",
    "size": 5,
    "inflections": "pl: pants"
  },
  {
    "name": "pairs of pants",
    "proto": "pair of pants",
    "inflections": "pl:pairs of pants",
    "prohibitions": "number:sg"
  },
  {
    "name": "dress",
    "proto": "skirt"
  },
  {
    "name": "skirt",
    "proto": "shirt",
    "tags": "hasLength"
  },
  {
    "name": "sweater",
    "proto": "shirt"
  },
  {
    "name": "jacket",
    "proto": "shirt"
  },
  {
    "name": "hat",
    "proto": "shirt",
    "size": 4
  },
  {
    "name": "shirt",
    "anim": 0,
    "tang": 2,
    "possessable": 7,
    "unique": 0,
    "count": "true",
    "size": 5,
    "tags": "clothing",
    "partOf": "null"
  },
  {
    "name": "shoe",
    "proto": "shirt",
    "size": 4
  },
  {
    "name": "heat",
    "anim": 0,
    "tang": 1,
    "possessable": 2,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "energy, feelable",
    "partOf": "null"
  },
  {
    "name": "pressure",
    "proto": "heat",
    "tags": "force"
  },
  {
    "name": "pole",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": "6,7",
    "tags": "vertical, path, structure",
    "partOf": "null"
  },
  {
    "name": "ladder",
    "proto": "pole"
  },
  {
    "name": "stair",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": "6,7,8",
    "tags": "incline, structure",
    "prohibitions": "number:sg",
    "partOf": "null"
  },
  {
    "name": "entrance",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": "4,5,6,7,8",
    "tags": "opening",
    "partOf": "null"
  },
  {
    "name": "exit",
    "proto": "entrance"
  },
  {
    "name": "doorway",
    "proto": "entrance",
    "size": "6,7"
  },
  {
    "name": "gate",
    "proto": "entrance",
    "size": "6,7",
    "tags": "construction, breakable"
  },
  {
    "name": "window",
    "proto": "gate",
    "size": "5,6,7",
    "tags": "elevated, feature"
  },
  {
    "name": "cloud",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": "7,8",
    "tags": "thing, elevated, obstacle, gas",
    "partOf": "null"
  },
  {
    "name": "smoke",
    "proto": "cloud",
    "disabled": false,
    "tags": "thing, obstacle, gas, -",
    "count": "false"
  },
  {
    "name": "fume",
    "proto": "smoke",
    "prohibitions": "number:sg",
    "disabled": true
  },
  {
    "name": "fire",
    "anim": 1,
    "tang": 2,
    "possessable": 2,
    "unique": 0,
    "count": "true",
    "size": "4,5,6,7,8",
    "tags": "volume, phenomenon, audible",
    "partOf": "null"
  },
  {
    "name": "grass",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "aggregate",
    "partOf": "null"
  },
  {
    "name": "grass1",
    "proto": "grass",
    "tags": "-, feature,obstacle,grounded"
  },
  {
    "name": "underbrush",
    "proto": "grass1"
  },
  {
    "name": "field",
    "proto": "forest"
  },
  {
    "name": "field1",
    "proto": "field",
    "size": 8,
    "tags": "-, field",
    "precomp": "(10 soccer |15 football |7 rugby |9 baseball |10 sports |6 playing)"
  },
  {
    "name": "property",
    "proto": "field1",
    "possessable": 5,
    "size": "8,9,10",
    "tags": "hasFront",
    "precomp": "--",
    "prohibitions": "def: indef"
  },
  {
    "name": "estate",
    "proto": "property"
  },
  {
    "name": "court",
    "proto": "field1",
    "size": "7,8",
    "precomp": "(20 tennis |20 basketball |10 squash |20 volleyball)"
  },
  {
    "name": "farm",
    "anim": 0,
    "tang": 1,
    "possessable": 5,
    "posr": "tags: person|organization",
    "unique": 0,
    "count": "true",
    "size": 8,
    "tags": "field, hasFront",
    "precomp": "--",
    "partOf": "null"
  },
  {
    "name": "ranch",
    "proto": "farm",
    "size": "8,9"
  },
  {
    "name": "space station",
    "proto": "farm",
    "tags": "building"
  },
  {
    "name": "Death Star",
    "proto": "space station",
    "unique": 1,
    "count": "true",
    "size": "10,11"
  },
  {
    "name": "zoo",
    "anim": 0,
    "tang": 1,
    "possessable": 3,
    "posr": "tags: person|organization",
    "unique": 0,
    "count": "true",
    "size": 8,
    "tags": "site, area",
    "partOf": "null"
  },
  {
    "name": "graveyard",
    "proto": "zoo"
  },
  {
    "name": "junkyard",
    "proto": "zoo"
  },
  {
    "name": "edge",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "tags": "edge, position",
    "complements": "(85 of NP{def:def;tags:bounded|surface&delimited})",
    "partOf": "null"
  },
  {
    "name": "border",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "tags": "boundary",
    "partOf": "null"
  },
  {
    "name": "finish line",
    "proto": "border"
  },
  {
    "name": "road",
    "anim": 0,
    "tang": 2,
    "possessable": 1,
    "unique": 0,
    "count": "true",
    "size": 8,
    "tags": "path, fixed, site, grounded",
    "partOf": "null"
  },
  {
    "name": "trail",
    "proto": "road",
    "size": 7
  },
  {
    "name": "path",
    "proto": "trail"
  },
  {
    "name": "train track",
    "proto": "road",
    "prohibitions": "number:sg"
  },
  {
    "name": "chimney",
    "anim": 0,
    "tang": 2,
    "possessable": 1,
    "unique": 0,
    "count": "true",
    "size": "6,7",
    "tags": "vertical, passage, structure",
    "partOf": "null"
  },
  {
    "name": "tunnel",
    "anim": 0,
    "tang": 2,
    "possessable": 2,
    "unique": 0,
    "count": "true",
    "size": "7,8",
    "tags": "passage, structure",
    "partOf": "null"
  },
  {
    "name": "hallway",
    "proto": "tunnel"
  },
  {
    "name": "hill",
    "anim": 0,
    "tang": 2,
    "possessable": 1,
    "unique": 0,
    "count": "true",
    "size": 8,
    "tags": "prominence, incline",
    "partOf": "null"
  },
  {
    "name": "mountain",
    "proto": "hill",
    "size": 9
  },
  {
    "name": "Mount Everest",
    "proto": "mountain",
    "unique": 2,
    "count": "false"
  },
  {
    "name": "valley",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": "8,9,10",
    "tags": "depression, path",
    "partOf": "null"
  },
  {
    "name": "ravine",
    "proto": "valley",
    "size": 8,
    "tags": "depression"
  },
  {
    "name": "canyon",
    "proto": "valley",
    "size": "9,10",
    "tags": "depression"
  },
  {
    "name": "ditch",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": 7,
    "tags": "depression",
    "partOf": "null"
  },
  {
    "name": "wilderness",
    "proto": "forest",
    "count": "false",
    "size": "9,10,11"
  },
  {
    "name": "hole",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "tags": "passage",
    "partOf": "null"
  },
  {
    "name": "path",
    "proto": "road",
    "size": "6,7"
  },
  {
    "name": "trail",
    "proto": "road",
    "size": "6,7"
  },
  {
    "name": "water",
    "anim": 0,
    "tang": 2,
    "possessable": 3,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "liquid",
    "partOf": "null"
  },
  {
    "name": "milk",
    "proto": "water"
  },
  {
    "name": "beer",
    "proto": "water"
  },
  {
    "name": "oil",
    "proto": "water"
  },
  {
    "name": "juice",
    "proto": "water"
  },
  {
    "name": "paint",
    "proto": "water"
  },
  {
    "name": "blood",
    "proto": "water"
  },
  {
    "name": "lava",
    "proto": "mud"
  },
  {
    "name": "drain",
    "proto": "chimney",
    "size": "3,4,5,6",
    "tags": "-, vertical, passage, fixed"
  },
  {
    "name": "pipe",
    "anim": 0,
    "tang": 2,
    "possessable": 4,
    "unique": 0,
    "count": "true",
    "size": "3,4,5,6",
    "tags": "passage, vessel",
    "partOf": "null"
  },
  {
    "name": "sewer",
    "proto": "tunnel",
    "tags": "bodyOfWater"
  },
  {
    "name": "mine shaft",
    "proto": "drain",
    "size": "7,8"
  },
  {
    "name": "cliff",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": "8,9",
    "tags": "edge, vertical, surface, land",
    "partOf": "null"
  },
  {
    "name": "table",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": 6,
    "tags": "elevated, surface, table",
    "partOf": "null"
  },
  {
    "name": "desk",
    "proto": "table",
    "size": 6
  },
  {
    "name": "counter",
    "proto": "table"
  },
  {
    "name": "trampoline",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": 6,
    "tags": "elevated, surface, structure",
    "partOf": "null"
  },
  {
    "name": "pool",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": 7,
    "tags": "bodyOfWater",
    "partOf": "null"
  },
  {
    "name": "pond",
    "proto": "pool"
  },
  {
    "name": "puddle",
    "proto": "pool",
    "size": "5,6,7",
    "tags": "grounded, obstacle"
  },
  {
    "name": "robot",
    "anim": "1,2,3",
    "tang": 2,
    "possessable": 4,
    "unique": 0,
    "count": "true",
    "size": "5,6,7",
    "tags": "person,machine",
    "partOf": "null"
  },
  {
    "name": "droid",
    "proto": "robot",
    "anim": "2,3"
  },
  {
    "name": "hipster",
    "proto": "person"
  },
  {
    "name": "coast",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": 9,
    "tags": "site, perimeter",
    "partOf": "null"
  },
  {
    "name": "shore",
    "proto": "coast"
  },
  {
    "name": "tightrope",
    "proto": "bridge"
  },
  {
    "name": "English Channel",
    "proto": "lake",
    "unique": 1,
    "count": "false",
    "size": 10,
    "tags": "bodyOfWater"
  },
  {
    "name": "room",
    "anim": 0,
    "tang": 1,
    "possessable": 6,
    "unique": 0,
    "count": "true",
    "size": 7,
    "tags": "void, area, container",
    "partOf": "null"
  },
  {
    "name": "kitchen",
    "proto": "room"
  },
  {
    "name": "bedroom",
    "proto": "room"
  },
  {
    "name": "classroom",
    "proto": "room"
  },
  {
    "name": "garage",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "basement",
    "proto": "room"
  },
  {
    "name": "attic",
    "proto": "room"
  },
  {
    "name": "office",
    "proto": "room"
  },
  {
    "name": "office",
    "proto": "house"
  },
  {
    "name": "swamp",
    "proto": "forest",
    "tags": "bodyOfWater"
  },
  {
    "name": "stage",
    "anim": 0,
    "tang": 2,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "size": 7,
    "tags": "structure, surface",
    "partOf": "null"
  },
  {
    "name": "cave",
    "proto": "tunnel"
  },
  {
    "name": "well",
    "proto": "tunnel",
    "tags": "vertical"
  },
  {
    "name": "rope",
    "anim": 0,
    "tang": 2,
    "possessable": 5,
    "size": 4,
    "tags": "path, instrument",
    "partOf": "null"
  },
  {
    "name": "mud",
    "proto": "dirt",
    "tags": "semisolid, viscous, obstacle, grounded, -"
  },
  {
    "name": "quicksand",
    "proto": "mud"
  },
  {
    "name": "center",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 1,
    "count": "false",
    "tags": "position, point",
    "complements": "(88 of NP{tags:container|area|space;number:noun.number})",
    "partOf": "null"
  },
  {
    "name": "top",
    "proto": "center",
    "tags": "elevated",
    "complements": "(88 of NP{tags:hasHeight&!creature|incline|prominence|path&vertical;number:noun.number})"
  },
  {
    "name": "bottom",
    "proto": "center",
    "tags": "bottom",
    "complements": "(88 of NP{tags:hasHeight|structure|volume|line&vertical;number:noun.number})"
  },
  {
    "name": "front",
    "proto": "center",
    "complements": "(88 of NP{anim:<1.5;tags:creature|structure|vehicle|hasFront & !position&!line;number:noun.number})"
  },
  {
    "name": "back",
    "proto": "front"
  },
  {
    "name": "end",
    "proto": "center",
    "complements": "(95 of NP{tags:path;number:sg})"
  },
  {
    "name": "dump truck",
    "proto": "truck"
  },
  {
    "name": "helicopter",
    "proto": "airplane",
    "size": 7,
    "tags": "airVehicle, motorVehicle, -"
  },
  {
    "name": "hovercraft",
    "proto": "boat",
    "tags": "groundVehicle"
  },
  {
    "name": "phone",
    "proto": "device"
  },
  {
    "name": "camera",
    "proto": "phone"
  },
  {
    "name": "gun",
    "proto": "phone"
  },
  {
    "name": "blow dryer",
    "proto": "phone",
    "tags": "machine"
  },
  {
    "name": "ship",
    "proto": "boat"
  },
  {
    "name": "canoe",
    "proto": "boat1"
  },
  {
    "name": "SUV",
    "proto": "car"
  },
  {
    "name": "Hummer",
    "proto": "car"
  },
  {
    "name": "Cadillac",
    "proto": "car"
  },
  {
    "name": "yacht",
    "proto": "boat"
  },
  {
    "name": "barge",
    "proto": "boat"
  },
  {
    "name": "jeep",
    "proto": "car"
  },
  {
    "name": "jumbo jet",
    "proto": "airplane"
  },
  {
    "name": "X-wing",
    "proto": "airplane",
    "size": 7
  },
  {
    "name": "fish",
    "anim": 1,
    "tang": 2,
    "possessable": 4,
    "unique": 0,
    "count": "true",
    "size": "4,5",
    "tags": "waterAnimal",
    "inflections": "pl: fish",
    "partOf": "null"
  },
  {
    "name": "jelly fish",
    "proto": "fish",
    "inflections": "pl: jelly fish"
  },
  {
    "name": "piranha",
    "proto": "fish",
    "size": 4
  },
  {
    "name": "orca",
    "proto": "whale",
    "size": 7
  },
  {
    "name": "whale",
    "proto": "fish",
    "anim": 2,
    "size": "7,8"
  },
  {
    "name": "walrus",
    "proto": "whale"
  },
  {
    "name": "dolphin",
    "proto": "whale",
    "size": 6
  },
  {
    "name": "manatee",
    "proto": "whale",
    "size": 6.5
  },
  {
    "name": "bird",
    "proto": "dog",
    "size": "4,5",
    "tags": "airAnimal"
  },
  {
    "name": "eagle",
    "proto": "bird",
    "size": "5,6"
  },
  {
    "name": "owl",
    "proto": "bird",
    "size": 5
  },
  {
    "name": "egret",
    "proto": "bird",
    "size": 5
  },
  {
    "name": "woodpecker",
    "proto": "bird"
  },
  {
    "name": "crow",
    "proto": "bird"
  },
  {
    "name": "flamingo",
    "proto": "bird"
  },
  {
    "name": "duck",
    "proto": "bird"
  },
  {
    "name": "goose",
    "proto": "bird",
    "inflections": "pl: geese"
  },
  {
    "name": "chicken",
    "proto": "dog",
    "disabled": false,
    "tags": "bird",
    "size": "5"
  },
  {
    "name": "ostrich",
    "proto": "dog",
    "disabled": false,
    "tags": "bird",
    "size": "6"
  },
  {
    "name": "armadillo",
    "proto": "dog"
  },
  {
    "name": "fox",
    "proto": "dog"
  },
  {
    "name": "panda",
    "proto": "dog"
  },
  {
    "name": "moose",
    "proto": "cow",
    "inflections": "pl: moose"
  },
  {
    "name": "horse",
    "proto": "cow"
  },
  {
    "name": "pony",
    "proto": "cow"
  },
  {
    "name": "hyena",
    "proto": "dog"
  },
  {
    "name": "cougar",
    "proto": "dog"
  },
  {
    "name": "aardvark",
    "proto": "dog"
  },
  {
    "name": "jackelope",
    "proto": "dog",
    "size": 5
  },
  {
    "name": "antelope",
    "proto": "dog",
    "size": 6
  },
  {
    "name": "rabbit",
    "proto": "dog",
    "size": 5
  },
  {
    "name": "badger",
    "proto": "dog",
    "size": 5
  },
  {
    "name": "dinosaur",
    "proto": "dog",
    "size": "6,7,8"
  },
  {
    "name": "ferret",
    "proto": "dog",
    "size": 5
  },
  {
    "name": "mouse",
    "proto": "dog",
    "size": 4,
    "inflections": "pl: mice"
  },
  {
    "name": "frog",
    "proto": "dog",
    "size": 4,
    "tags": "waterAnimal"
  },
  {
    "name": "newt",
    "proto": "frog",
    "size": 4
  },
  {
    "name": "lobster",
    "proto": "frog",
    "size": 4
  },
  {
    "name": "squirrel",
    "proto": "dog",
    "size": 4
  },
  {
    "name": "pig",
    "proto": "dog",
    "size": "5,6,6.5"
  },
  {
    "name": "kangaroo",
    "proto": "dog",
    "size": "5,6"
  },
  {
    "name": "monkey",
    "proto": "dog"
  },
  {
    "name": "giraffe",
    "proto": "dog",
    "size": 7
  },
  {
    "name": "elephant",
    "proto": "dog",
    "size": 7
  },
  {
    "name": "mongoose",
    "proto": "dog"
  },
  {
    "name": "zebra",
    "proto": "dog"
  },
  {
    "name": "poodle",
    "proto": "dog"
  },
  {
    "name": "beast",
    "proto": "dog"
  },
  {
    "name": "animal",
    "proto": "dog"
  },
  {
    "name": "creature",
    "proto": "dog"
  },
  {
    "name": "critter",
    "proto": "dog"
  },
  {
    "name": "rodent",
    "proto": "dog"
  },
  {
    "name": "worm",
    "proto": "bug",
    "size": 3
  },
  {
    "name": "termite",
    "proto": "bug"
  },
  {
    "name": "ant",
    "proto": "bug"
  },
  {
    "name": "caterpillar",
    "proto": "bug"
  },
  {
    "name": "spider",
    "proto": "bug"
  },
  {
    "name": "left-wing radical",
    "proto": "human"
  },
  {
    "name": "right-wing extremist",
    "proto": "human"
  },
  {
    "name": "fundamentalist",
    "proto": "human"
  },
  {
    "name": "hippie",
    "proto": "human"
  },
  {
    "name": "environmentalist",
    "proto": "human"
  },
  {
    "name": "pacifist",
    "proto": "human"
  },
  {
    "name": "terrorist",
    "proto": "human"
  },
  {
    "name": "fascist",
    "proto": "human"
  },
  {
    "name": "feminist",
    "proto": "human"
  },
  {
    "name": "mobster",
    "proto": "human"
  },
  {
    "name": "guru",
    "proto": "human"
  },
  {
    "name": "nurse",
    "proto": "human"
  },
  {
    "name": "milkman",
    "proto": "human",
    "inflections": "pl:milkmen"
  },
  {
    "name": "astronaut",
    "proto": "human"
  },
  {
    "name": "drug dealer",
    "proto": "human"
  },
  {
    "name": "hobo",
    "proto": "human"
  },
  {
    "name": "troll",
    "proto": "human"
  },
  {
    "name": "police officer",
    "proto": "human"
  },
  {
    "name": "CEO",
    "proto": "human",
    "complements": "(70 of DP{tags:organization;  (number: noun.number | count:false)})"
  },
  {
    "name": "butler",
    "proto": "human"
  },
  {
    "name": "cable guy",
    "proto": "human"
  },
  {
    "name": "tech support",
    "proto": "human",
    "unique": 2,
    "count": "false",
    "tags": "-, collective"
  },
  {
    "name": "tech support1",
    "proto": "dancing"
  },
  {
    "name": "Batman",
    "proto": "Jack",
    "tags": "-,person,fullname",
    "precomp": "--"
  },
  {
    "name": "The Hulk",
    "proto": "Batman"
  },
  {
    "name": "Turd Ferguson",
    "proto": "Batman"
  },
  {
    "name": "Zaphod Beeblebrox",
    "proto": "Batman"
  },
  {
    "name": "Slartibartfast",
    "proto": "Batman"
  },
  {
    "name": "River Tam",
    "proto": "Cinderella"
  },
  {
    "name": "Malcolm Reynolds",
    "proto": "Batman"
  },
  {
    "name": "Mr. Darcy",
    "proto": "Batman"
  },
  {
    "name": "Scarlett",
    "proto": "Sally"
  },
  {
    "name": "Hermione",
    "proto": "Sally"
  },
  {
    "name": "Dorothy",
    "proto": "Sally"
  },
  {
    "name": "Sarah Connor",
    "proto": "Cinderella"
  },
  {
    "name": "Wonder Woman",
    "proto": "Cinderella"
  },
  {
    "name": "Sauron",
    "proto": "Batman"
  },
  {
    "name": "Smaug",
    "proto": "Batman",
    "size": 8,
    "tags": "airAnimal"
  },
  {
    "name": "Dread Pirate Roberts",
    "proto": "Batman",
    "unique": 1
  },
  {
    "name": "Mr. Rogers",
    "proto": "Batman"
  },
  {
    "name": "Kermit the Frog",
    "proto": "Batman"
  },
  {
    "name": "Miss Piggy",
    "proto": "Cinderella"
  },
  {
    "name": "Celine Dion",
    "proto": "Cinderella"
  },
  {
    "name": "Cruella Deville",
    "proto": "Cinderella"
  },
  {
    "name": "Mary Poppins",
    "proto": "Cinderella"
  },
  {
    "name": "Spartacus",
    "proto": "Batman"
  },
  {
    "name": "Ghandi",
    "proto": "Batman"
  },
  {
    "name": "Vladimir Putin",
    "proto": "Batman"
  },
  {
    "name": "Madonna",
    "proto": "Cinderella"
  },
  {
    "name": "Mother Teresa",
    "proto": "Cinderella"
  },
  {
    "name": "Eleanor Roosevelt",
    "proto": "Cinderella"
  },
  {
    "name": "Jane Austen",
    "proto": "Cinderella"
  },
  {
    "name": "Marie Curie",
    "proto": "Cinderella"
  },
  {
    "name": "Amelia Earhart",
    "proto": "Cinderella"
  },
  {
    "name": "Helen Keller",
    "proto": "Cinderella"
  },
  {
    "name": "Sherlock Holmes",
    "proto": "Batman"
  },
  {
    "name": "Carmen Sandiego",
    "proto": "Cinderella"
  },
  {
    "name": "Pocahontas",
    "proto": "Cinderella"
  },
  {
    "name": "Katniss Everdeen",
    "proto": "Cinderella"
  },
  {
    "name": "Princess Leia",
    "proto": "Cinderella"
  },
  {
    "name": "Gandalf",
    "proto": "Batman"
  },
  {
    "name": "Luke Skywalker",
    "proto": "Batman"
  },
  {
    "name": "Han Solo",
    "proto": "Batman"
  },
  {
    "name": "Captain Kirk",
    "proto": "Batman"
  },
  {
    "name": "Jean Luc Picard",
    "proto": "Batman"
  },
  {
    "name": "Henry VIII",
    "proto": "Batman"
  },
  {
    "name": "Archduke Franz Ferdinand",
    "proto": "Batman"
  },
  {
    "name": "Colonel Mustard",
    "proto": "Batman"
  },
  {
    "name": "Backstreet Boy",
    "proto": "Canuck"
  },
  {
    "name": "Lex Luther",
    "proto": "Batman"
  },
  {
    "name": "Frankenstein",
    "proto": "Batman",
    "anim": "2,3"
  },
  {
    "name": "Harry Potter",
    "proto": "Batman"
  },
  {
    "name": "Davy Crockett",
    "proto": "Batman"
  },
  {
    "name": "John Bunyan",
    "proto": "Batman"
  },
  {
    "name": "Genghis Khan",
    "proto": "Batman"
  },
  {
    "name": "Moses",
    "proto": "Batman"
  },
  {
    "name": "Morgan Freeman",
    "proto": "Batman"
  },
  {
    "name": "Noam Chomsky",
    "proto": "Batman"
  },
  {
    "name": "bicycle",
    "anim": 0,
    "tang": 2,
    "possessable": 7,
    "unique": 0,
    "count": "true",
    "size": 6,
    "tags": "nonMotorVehicle, groundVehicle",
    "partOf": "null"
  },
  {
    "name": "shopping cart",
    "proto": "bicycle"
  },
  {
    "name": "skateboard",
    "proto": "bicycle",
    "size": 5
  },
  {
    "name": "can",
    "proto": "box",
    "size": 4
  },
  {
    "name": "jar",
    "proto": "box",
    "size": 4
  },
  {
    "name": "bottle",
    "proto": "box",
    "size": 4
  },
  {
    "name": "bucket",
    "proto": "box",
    "size": 5
  },
  {
    "name": "vat",
    "proto": "box",
    "size": "6,7"
  },
  {
    "name": "bathtub",
    "anim": 0,
    "tang": 2,
    "unique": 0,
    "count": "true",
    "size": 6.1,
    "tags": "vessel",
    "partOf": "null"
  },
  {
    "name": "abyss",
    "proto": "void",
    "size": "8,9"
  },
  {
    "name": "void",
    "anim": 0,
    "tang": 1,
    "possessable": 0,
    "unique": 0,
    "count": "true",
    "tags": "void",
    "partOf": "null"
  },
  {
    "name": "outer space",
    "proto": "void",
    "unique": 2,
    "count": "false",
    "size": 15
  },
  {
    "name": "Billy",
    "proto": "Jack"
  },
  {
    "name": "Jedediah",
    "proto": "Jack"
  },
  {
    "name": "Hamish",
    "proto": "Jack"
  },
  {
    "name": "Ahmed",
    "proto": "Jack"
  },
  {
    "name": "Webster",
    "proto": "Jack"
  },
  {
    "name": "Rufus",
    "proto": "Jack"
  },
  {
    "name": "Mortimer",
    "proto": "Jack"
  },
  {
    "name": "Marlon",
    "proto": "Jack"
  },
  {
    "name": "Winston",
    "proto": "Jack"
  },
  {
    "name": "Milton",
    "proto": "Jack"
  },
  {
    "name": "Elmer",
    "proto": "Jack"
  },
  {
    "name": "Melvyn",
    "proto": "Jack"
  },
  {
    "name": "Jarvis",
    "proto": "Jack"
  },
  {
    "name": "Baxter",
    "proto": "Jack"
  },
  {
    "name": "Beatrix",
    "proto": "Sally"
  },
  {
    "name": "Mavis",
    "proto": "Sally"
  },
  {
    "name": "Jezebel",
    "proto": "Sally"
  },
  {
    "name": "Olive",
    "proto": "Sally"
  },
  {
    "name": "Isolde",
    "proto": "Sally"
  },
  {
    "name": "Sinead",
    "proto": "Sally"
  },
  {
    "name": "Fatima",
    "proto": "Sally"
  },
  {
    "name": "Susie",
    "proto": "Sally"
  },
  {
    "name": "Matilda",
    "proto": "Sally"
  },
  {
    "name": "Barnabas",
    "proto": "Jack"
  },
  {
    "name": "Helmut",
    "proto": "Jack"
  },
  {
    "name": "Abdul",
    "proto": "Jack"
  },
  {
    "name": "Lawonda",
    "proto": "Sally"
  },
  {
    "name": "Tyrese",
    "proto": "Jack"
  },
  {
    "name": "Andre",
    "proto": "Jack"
  },
  {
    "name": "Confucius",
    "proto": "Jack"
  },
  {
    "name": "Agnes",
    "proto": "Sally"
  },
  {
    "name": "Antonio",
    "proto": "Jack"
  },
  {
    "name": "Bernard",
    "proto": "Jack"
  },
  {
    "name": "Celeste",
    "proto": "Sally"
  },
  {
    "name": "Clementine",
    "proto": "Sally"
  },
  {
    "name": "Cosette",
    "proto": "Sally"
  },
  {
    "name": "Daphne",
    "proto": "Sally"
  },
  {
    "name": "Li",
    "proto": "Sally"
  },
  {
    "name": "Li1",
    "proto": "Jack"
  },
  {
    "name": "Meilin",
    "proto": "Sally"
  },
  {
    "name": "Yuming",
    "proto": "Sally"
  },
  {
    "name": "Huojin",
    "proto": "Jack"
  },
  {
    "name": "Zihao",
    "proto": "Jack"
  },
  {
    "name": "Fumiko",
    "proto": "Sally"
  },
  {
    "name": "Suki",
    "proto": "Sally"
  },
  {
    "name": "Takeo",
    "proto": "Jack"
  },
  {
    "name": "Akira",
    "proto": "Jack"
  },
  {
    "name": "Kibwe",
    "proto": "Jack"
  },
  {
    "name": "Najuma",
    "proto": "Sally"
  },
  {
    "name": "Edgar",
    "proto": "Jack"
  },
  {
    "name": "Ernesto",
    "proto": "Jack"
  },
  {
    "name": "Julio",
    "proto": "Jack"
  },
  {
    "name": "Ferdinand",
    "proto": "Jack"
  },
  {
    "name": "Gaston",
    "proto": "Jack"
  },
  {
    "name": "Gerald",
    "proto": "Jack"
  },
  {
    "name": "Gustav",
    "proto": "Jack"
  },
  {
    "name": "Gwendoline",
    "proto": "Sally"
  },
  {
    "name": "Lucille",
    "proto": "Sally"
  },
  {
    "name": "Martha",
    "proto": "Sally"
  },
  {
    "name": "Oliver",
    "proto": "Jack"
  },
  {
    "name": "Philbert",
    "proto": "Jack"
  },
  {
    "name": "Sebastian",
    "proto": "Jack"
  },
  {
    "name": "Sybil",
    "proto": "Sally"
  },
  {
    "name": "Sir Lancelot",
    "proto": "Batman"
  },
  {
    "name": "Robin Hood",
    "proto": "Batman"
  },
  {
    "name": "Winnie the Pooh",
    "proto": "Batman"
  },
  {
    "name": "Zeus",
    "proto": "Batman"
  },
  {
    "name": "Zoë",
    "proto": "Sally"
  },
  {
    "name": "Victoria",
    "proto": "Sally"
  },
  {
    "name": "Astrid",
    "proto": "Sally"
  },
  {
    "name": "Cecilia",
    "proto": "Sally"
  },
  {
    "name": "Eckhart",
    "proto": "Jack"
  },
  {
    "name": "Dietrich",
    "proto": "Jack"
  },
  {
    "name": "Edith",
    "proto": "Sally"
  },
  {
    "name": "Eugene",
    "proto": "Jack"
  },
  {
    "name": "Felix",
    "proto": "Jack"
  },
  {
    "name": "Gunther",
    "proto": "Jack"
  },
  {
    "name": "Gretchen",
    "proto": "Sally"
  },
  {
    "name": "Phyllis",
    "proto": "Sally"
  },
  {
    "name": "Salome",
    "proto": "Sally"
  },
  {
    "name": "Tatiana",
    "proto": "Sally"
  },
  {
    "name": "Wilma",
    "proto": "Sally"
  },
  {
    "name": "Boris",
    "proto": "Jack"
  },
  {
    "name": "Igor",
    "proto": "Sally"
  },
  {
    "name": "Nikolai",
    "proto": "Jack"
  },
  {
    "name": "Oxana",
    "proto": "Sally"
  },
  {
    "name": "Rudolf",
    "proto": "Jack"
  },
  {
    "name": "Anastasia",
    "proto": "Sally"
  },
  {
    "name": "Basil",
    "proto": "Jack"
  },
  {
    "name": "Mandeep",
    "proto": "Jack"
  },
  {
    "name": "Mario",
    "proto": "Jack"
  },
  {
    "name": "Luigi",
    "proto": "Jack"
  },
  {
    "name": "Mika",
    "proto": "Jack"
  },
  {
    "name": "Teemu",
    "proto": "Jack"
  },
  {
    "name": "Sami",
    "proto": "Jack"
  },
  {
    "name": "Jarkko",
    "proto": "Jack"
  },
  {
    "name": "Riita",
    "proto": "Sally"
  },
  {
    "name": "Helena",
    "proto": "Sally"
  },
  {
    "name": "Sven",
    "proto": "Jack"
  },
  {
    "name": "Hildur",
    "proto": "Sally"
  },
  {
    "name": "Freja",
    "proto": "Sally"
  },
  {
    "name": "Heidi",
    "proto": "Sally"
  },
  {
    "name": "Natalia",
    "proto": "Sally"
  },
  {
    "name": "Renata",
    "proto": "Sally"
  },
  {
    "name": "Stella",
    "proto": "Sally"
  },
  {
    "name": "Surinder",
    "proto": "Sally"
  },
  {
    "name": "Esperanza",
    "proto": "Sally"
  },
  {
    "name": "Otto",
    "proto": "Jack"
  },
  {
    "name": "Gideon",
    "proto": "Jack"
  },
  {
    "name": "Casper",
    "proto": "Jack"
  },
  {
    "name": "Joaquin",
    "proto": "Jack"
  },
  {
    "name": "Leopold",
    "proto": "Jack"
  },
  {
    "name": "Malcolm",
    "proto": "Jack"
  },
  {
    "name": "Rudyard",
    "proto": "Jack"
  },
  {
    "name": "Xavier",
    "proto": "Jack"
  },
  {
    "name": "Delilah",
    "proto": "Sally"
  },
  {
    "name": "Esmeralda",
    "proto": "Sally"
  },
  {
    "name": "Myrtle",
    "proto": "Sally"
  },
  {
    "name": "Muriel",
    "proto": "Sally"
  },
  {
    "name": "Virginia",
    "proto": "Sally"
  },
  {
    "name": "Sharmila",
    "proto": "Sally"
  },
  {
    "name": "Pipi",
    "proto": "Sally"
  },
  {
    "name": "Siosi",
    "proto": "Jack"
  },
  {
    "name": "Paora",
    "proto": "Jack"
  },
  {
    "name": "Pavan",
    "proto": "Sally"
  },
  {
    "name": "Nirmal",
    "proto": "Sally"
  },
  {
    "name": "rock climbing",
    "proto": "dancing"
  },
  {
    "name": "quilting",
    "proto": "dancing"
  },
  {
    "name": "pottery",
    "proto": "dancing"
  },
  {
    "name": "scrapbooking",
    "proto": "dancing"
  },
  {
    "name": "wood carving",
    "proto": "dancing"
  },
  {
    "name": "taxidermy",
    "proto": "dancing"
  },
  {
    "name": "snowboarding",
    "proto": "dancing"
  },
  {
    "name": "surfing",
    "proto": "dancing"
  },
  {
    "name": "aerobics",
    "proto": "dancing"
  },
  {
    "name": "karate",
    "proto": "dancing"
  },
  {
    "name": "kung fu",
    "proto": "dancing"
  },
  {
    "name": "bird-watching",
    "proto": "dancing"
  },
  {
    "name": "shopping",
    "proto": "dancing"
  },
  {
    "name": "World of Warcraft",
    "proto": "chess"
  },
  {
    "name": "Dungeons and Dragons",
    "proto": "chess"
  },
  {
    "name": "chess",
    "proto": "dancing",
    "tags": "game, -"
  },
  {
    "name": "poker",
    "proto": "chess"
  },
  {
    "name": "Monopoly",
    "proto": "chess"
  },
  {
    "name": "soccer",
    "proto": "chess",
    "tags": "sport"
  },
  {
    "name": "football",
    "proto": "soccer"
  },
  {
    "name": "hockey",
    "proto": "soccer"
  },
  {
    "name": "basketball",
    "proto": "soccer"
  },
  {
    "name": "cricket",
    "proto": "soccer"
  },
  {
    "name": "tennis",
    "proto": "soccer"
  },
  {
    "name": "rugby",
    "proto": "soccer"
  },
  {
    "name": "game",
    "anim": 0,
    "tang": 0,
    "possessable": 3,
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "contest",
    "precomp": "(DP{tags:sport})",
    "partOf": "null"
  },
  {
    "name": "competition",
    "proto": "game",
    "precomp": "--"
  },
  {
    "name": "tournament",
    "proto": "game",
    "precomp": "(DP{tags:game})"
  },
  {
    "name": "match",
    "proto": "game",
    "precomp": "DP{tags:sport}"
  },
  {
    "name": "contest",
    "proto": "game",
    "precomp": "(45 DP{tags:game|activity} |25 ACTIVE_STUFF)"
  },
  {
    "name": "race",
    "proto": "game",
    "precomp": "--"
  },
  {
    "name": "Olympic",
    "proto": "game",
    "unique": 1,
    "count": "true",
    "precomp": "((_Winter|_Summer))",
    "prohibitions": "number:sg"
  },
  {
    "name": "opera",
    "proto": "concert"
  },
  {
    "name": "dance",
    "proto": "party"
  },
  {
    "name": "festival",
    "proto": "party"
  },
  {
    "name": "inquisition",
    "proto": "party",
    "tags": "undertaking"
  },
  {
    "name": "debate",
    "proto": "party",
    "tags": "contest"
  },
  {
    "name": "rave",
    "proto": "party"
  },
  {
    "name": "circus",
    "proto": "party"
  },
  {
    "name": "thesis defense",
    "proto": "party"
  },
  {
    "name": "seminar",
    "proto": "party"
  },
  {
    "name": "conference",
    "proto": "party"
  },
  {
    "name": "jam session",
    "proto": "party"
  },
  {
    "name": "bowling",
    "proto": "dancing"
  },
  {
    "name": "archery",
    "proto": "dancing"
  },
  {
    "name": "astrology",
    "proto": "dancing"
  },
  {
    "name": "gardening",
    "proto": "dancing"
  },
  {
    "name": "beekeeping",
    "proto": "dancing"
  },
  {
    "name": "science",
    "proto": "politics",
    "anim": 0,
    "tang": 0,
    "possessable": 0,
    "unique": 2,
    "count": "false",
    "size": 0,
    "tags": "fieldOfStudy"
  },
  {
    "name": "religion",
    "proto": "politics"
  },
  {
    "name": "origami",
    "proto": "politics"
  },
  {
    "name": "politics",
    "anim": 0,
    "tang": 0,
    "possessable": 0,
    "unique": 2,
    "count": "false",
    "size": 0,
    "tags": "enterprise",
    "partOf": "null"
  },
  {
    "name": "warfare",
    "proto": "politics"
  },
  {
    "name": "diplomacy",
    "proto": "politics"
  },
  {
    "name": "terrorism",
    "proto": "politics"
  },
  {
    "name": "marketing",
    "proto": "politics",
    "tags": "business"
  },
  {
    "name": "astrology",
    "proto": "politics"
  },
  {
    "name": "alchemy",
    "proto": "politics"
  },
  {
    "name": "physics",
    "proto": "science"
  },
  {
    "name": "chemistry",
    "proto": "science"
  },
  {
    "name": "healthcare",
    "proto": "politics"
  },
  {
    "name": "crime",
    "proto": "politics"
  },
  {
    "name": "snot",
    "proto": "poop"
  },
  {
    "name": "poop",
    "proto": "dirt",
    "tags": "semisolid, -"
  },
  {
    "name": "sludge",
    "proto": "mud"
  },
  {
    "name": "Play-Doh",
    "proto": "dirt"
  },
  {
    "name": "jello",
    "proto": "dirt",
    "tags": "food"
  },
  {
    "name": "pudding",
    "proto": "jello",
    "tags": "viscous, semisolid"
  },
  {
    "name": "applesauce",
    "proto": "jello"
  },
  {
    "name": "peanut butter",
    "proto": "jello"
  },
  {
    "name": "porridge",
    "proto": "jello"
  },
  {
    "name": "mashed potato",
    "proto": "jello",
    "count": "true",
    "inflections": "pl: mashed potatoes",
    "prohibitions": "number:sg"
  },
  {
    "name": "rice",
    "proto": "dirt",
    "tags": "food"
  },
  {
    "name": "salad",
    "proto": "rice"
  },
  {
    "name": "granola",
    "proto": "rice"
  },
  {
    "name": "butter",
    "proto": "jello"
  },
  {
    "name": "cheese",
    "anim": 0,
    "tang": 0,
    "possessable": 5,
    "unique": 0,
    "count": "false",
    "size": 0,
    "tags": "food, solid",
    "partOf": "null"
  },
  {
    "name": "marmalade",
    "proto": "jello"
  },
  {
    "name": "Vegemite",
    "proto": "jello"
  },
  {
    "name": "Nutella",
    "proto": "jello"
  },
  {
    "name": "marble",
    "proto": "ball",
    "size": 3
  },
  {
    "name": "snowball",
    "proto": "ball"
  },
  {
    "name": "chocolate",
    "proto": "cheese"
  },
  {
    "name": "sugar",
    "proto": "sand",
    "tags": "food"
  },
  {
    "name": "salt",
    "proto": "sugar"
  },
  {
    "name": "snow",
    "proto": "dirt",
    "tags": "obstacle, grounded"
  },
  {
    "name": "debris",
    "proto": "garbage"
  },
  {
    "name": "hammer",
    "anim": 0,
    "tang": 2,
    "possessable": 9,
    "posr": "tags: person",
    "unique": 0,
    "count": "true",
    "size": 4,
    "tags": "instrument",
    "partOf": "null"
  },
  {
    "name": "shovel",
    "proto": "hammer",
    "size": 5
  },
  {
    "name": "farming implement",
    "proto": "hammer",
    "size": "4,5"
  },
  {
    "name": "chainsaw",
    "proto": "hammer",
    "size": 5,
    "tags": "machine"
  },
  {
    "name": "screwdriver",
    "proto": "hammer"
  },
  {
    "name": "stethoscope",
    "proto": "hammer"
  },
  {
    "name": "trumpet",
    "proto": "hammer",
    "tags": "musicalInstrument"
  },
  {
    "name": "banjo",
    "proto": "trumpet"
  },
  {
    "name": "guitar",
    "proto": "trumpet"
  },
  {
    "name": "piano",
    "proto": "trumpet",
    "size": "6,7",
    "tags": "table"
  },
  {
    "name": "flute",
    "proto": "trumpet"
  },
  {
    "name": "drum",
    "proto": "trumpet"
  },
  {
    "name": "synthesizer",
    "proto": "trumpet"
  },
  {
    "name": "song",
    "anim": 0,
    "tang": 0,
    "possessable": 6,
    "posr": "tags: person",
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "song",
    "partOf": "null"
  },
  {
    "name": "music",
    "proto": "song",
    "possessable": 3,
    "count": "false",
    "precomp": "((rock|elevator|country|electronic|classical|baroque))"
  },
  {
    "name": "melody",
    "proto": "song",
    "possessable": 1
  },
  {
    "name": "tune",
    "proto": "song",
    "possessable": 0
  },
  {
    "name": "ballad",
    "proto": "song"
  },
  {
    "name": "sonata",
    "proto": "song"
  },
  {
    "name": "jig",
    "proto": "song"
  },
  {
    "name": "anthem",
    "proto": "song"
  },
  {
    "name": "blue",
    "proto": "song",
    "possessable": 0,
    "unique": 1,
    "prohibitions": "number:sg"
  },
  {
    "name": "jazz",
    "proto": "music",
    "possessable": 0,
    "precomp": "--"
  },
  {
    "name": "dubstep",
    "proto": "jazz",
    "possessable": 0
  },
  {
    "name": "rock'n'roll",
    "proto": "jazz",
    "possessable": 0
  },
  {
    "name": "klezmer",
    "proto": "jazz",
    "possessable": 0
  },
  {
    "name": "hip hop",
    "proto": "jazz",
    "possessable": 0
  },
  {
    "name": "K-pop",
    "proto": "jazz",
    "possessable": 0
  },
  {
    "name": "Hey Jude",
    "proto": "The Iliad",
    "tags": "song, -"
  },
  {
    "name": "Moonlight Sonata",
    "proto": "Hey Jude"
  },
  {
    "name": "Happy Birthday",
    "proto": "Hey Jude"
  },
  {
    "name": "Hotel California",
    "proto": "Hey Jude"
  },
  {
    "name": "Amazing Grace",
    "proto": "Hey Jude"
  },
  {
    "name": "Beethoven's Fifth Symphony",
    "proto": "Hey Jude"
  },
  {
    "name": "The Ride of the Valkyries",
    "proto": "Hey Jude"
  },
  {
    "name": "Jingle Bells",
    "proto": "Hey Jude"
  },
  {
    "name": "Silent Night",
    "proto": "Hey Jude"
  },
  {
    "name": "Smith",
    "proto": "Jack",
    "tags": "-, person, lastname",
    "precomp": "TITLE{unpack:noun.tags-gender}"
  },
  {
    "name": "Chan",
    "proto": "Smith"
  },
  {
    "name": "Johnson",
    "proto": "Smith"
  },
  {
    "name": "Williams",
    "proto": "Smith"
  },
  {
    "name": "Brown",
    "proto": "Smith"
  },
  {
    "name": "Jones",
    "proto": "Smith"
  },
  {
    "name": "Miller",
    "proto": "Smith"
  },
  {
    "name": "Davis",
    "proto": "Smith"
  },
  {
    "name": "Garcia",
    "proto": "Smith"
  },
  {
    "name": "Rodriguez",
    "proto": "Smith"
  },
  {
    "name": "Wilson",
    "proto": "Smith"
  },
  {
    "name": "Martinez",
    "proto": "Smith"
  },
  {
    "name": "Anderson",
    "proto": "Smith"
  },
  {
    "name": "Taylor",
    "proto": "Smith"
  },
  {
    "name": "Thomas",
    "proto": "Smith"
  },
  {
    "name": "Moore",
    "proto": "Smith"
  },
  {
    "name": "Martin",
    "proto": "Smith"
  },
  {
    "name": "Jackson",
    "proto": "Smith"
  },
  {
    "name": "Thompson",
    "proto": "Smith"
  },
  {
    "name": "White",
    "proto": "Smith"
  },
  {
    "name": "Lopez",
    "proto": "Smith"
  },
  {
    "name": "Lee",
    "proto": "Smith"
  },
  {
    "name": "Gonzalez",
    "proto": "Smith"
  },
  {
    "name": "Harris",
    "proto": "Smith"
  },
  {
    "name": "Clark",
    "proto": "Smith"
  },
  {
    "name": "Lewis",
    "proto": "Smith"
  },
  {
    "name": "Robinson",
    "proto": "Smith"
  },
  {
    "name": "Walker",
    "proto": "Smith"
  },
  {
    "name": "Chavez",
    "proto": "Smith"
  },
  {
    "name": "McDonald",
    "proto": "Smith"
  },
  {
    "name": "Washington",
    "proto": "Smith"
  },
  {
    "name": "Simpson",
    "proto": "Smith"
  },
  {
    "name": "Dixon",
    "proto": "Smith"
  },
  {
    "name": "Schmidt",
    "proto": "Smith"
  },
  {
    "name": "Spencer",
    "proto": "Smith"
  },
  {
    "name": "Cunningham",
    "proto": "Smith"
  },
  {
    "name": "Armstrong",
    "proto": "Smith"
  },
  {
    "name": "McCoy",
    "proto": "Smith"
  },
  {
    "name": "Chen",
    "proto": "Smith"
  },
  {
    "name": "Chan",
    "proto": "Smith"
  },
  {
    "name": "Li",
    "proto": "Smith"
  },
  {
    "name": "Schultz",
    "proto": "Smith"
  },
  {
    "name": "Walters",
    "proto": "Smith"
  },
  {
    "name": "Walsh",
    "proto": "Smith"
  },
  {
    "name": "Schneider",
    "proto": "Smith"
  },
  {
    "name": "Newman",
    "proto": "Smith"
  },
  {
    "name": "Wong",
    "proto": "Smith"
  },
  {
    "name": "Hopkins",
    "proto": "Smith"
  },
  {
    "name": "Stanley",
    "proto": "Smith"
  },
  {
    "name": "Bates",
    "proto": "Smith"
  },
  {
    "name": "Diaz",
    "proto": "Smith"
  },
  {
    "name": "Watson",
    "proto": "Smith"
  },
  {
    "name": "Bennett",
    "proto": "Smith"
  },
  {
    "name": "Hughes",
    "proto": "Smith"
  },
  {
    "name": "Myers",
    "proto": "Smith"
  },
  {
    "name": "Foster",
    "proto": "Smith"
  },
  {
    "name": "Sanders",
    "proto": "Smith"
  },
  {
    "name": "Powell",
    "proto": "Smith"
  },
  {
    "name": "Sullivan",
    "proto": "Smith"
  },
  {
    "name": "Russell",
    "proto": "Smith"
  },
  {
    "name": "Young",
    "proto": "Smith"
  },
  {
    "name": "Allen",
    "proto": "Smith"
  },
  {
    "name": "Wright",
    "proto": "Smith"
  },
  {
    "name": "King",
    "proto": "Smith"
  },
  {
    "name": "Scott",
    "proto": "Smith"
  },
  {
    "name": "Green",
    "proto": "Smith"
  },
  {
    "name": "Baker",
    "proto": "Smith"
  },
  {
    "name": "Adams",
    "proto": "Smith"
  },
  {
    "name": "Nelson",
    "proto": "Smith"
  },
  {
    "name": "Campbell",
    "proto": "Smith"
  },
  {
    "name": "Roberts",
    "proto": "Smith"
  },
  {
    "name": "Carter",
    "proto": "Smith"
  },
  {
    "name": "Phillips",
    "proto": "Smith"
  },
  {
    "name": "Turner",
    "proto": "Smith"
  },
  {
    "name": "Parker",
    "proto": "Smith"
  },
  {
    "name": "Collins",
    "proto": "Smith"
  },
  {
    "name": "Edwards",
    "proto": "Smith"
  },
  {
    "name": "Stewart",
    "proto": "Smith"
  },
  {
    "name": "Morris",
    "proto": "Smith"
  },
  {
    "name": "Nguyen",
    "proto": "Smith"
  },
  {
    "name": "Murphy",
    "proto": "Smith"
  },
  {
    "name": "Cook",
    "proto": "Smith"
  },
  {
    "name": "Rogers",
    "proto": "Smith"
  },
  {
    "name": "Cooper",
    "proto": "Smith"
  },
  {
    "name": "Moreau",
    "proto": "Smith"
  },
  {
    "name": "Laurent",
    "proto": "Smith"
  },
  {
    "name": "Dubois",
    "proto": "Smith"
  },
  {
    "name": "Fontaine",
    "proto": "Smith"
  },
  {
    "name": "Leroux",
    "proto": "Smith"
  },
  {
    "name": "Azikewe",
    "proto": "Smith"
  },
  {
    "name": "Obasanjo",
    "proto": "Smith"
  },
  {
    "name": "Horowitz",
    "proto": "Smith"
  },
  {
    "name": "Kaufman",
    "proto": "Smith"
  },
  {
    "name": "Krakowski",
    "proto": "Smith"
  },
  {
    "name": "Rosenberg",
    "proto": "Smith"
  },
  {
    "name": "Hashimoto",
    "proto": "Smith"
  },
  {
    "name": "Suzuki",
    "proto": "Smith"
  },
  {
    "name": "Tanaka",
    "proto": "Smith"
  },
  {
    "name": "Watanabe",
    "proto": "Smith"
  },
  {
    "name": "Ito",
    "proto": "Smith"
  },
  {
    "name": "Russo",
    "proto": "Smith"
  },
  {
    "name": "Mancini",
    "proto": "Smith"
  },
  {
    "name": "De Luca",
    "proto": "Smith"
  },
  {
    "name": "Costa",
    "proto": "Smith"
  },
  {
    "name": "Lombardi",
    "proto": "Smith"
  },
  {
    "name": "Ivanov",
    "proto": "Smith"
  },
  {
    "name": "Fedorov",
    "proto": "Smith"
  },
  {
    "name": "Saarinen",
    "proto": "Smith"
  },
  {
    "name": "Makinen",
    "proto": "Smith"
  },
  {
    "name": "Papadopoulos",
    "proto": "Smith"
  },
  {
    "name": "O'Brien",
    "proto": "Smith"
  },
  {
    "name": "De Jong",
    "proto": "Smith"
  },
  {
    "name": "Janssen",
    "proto": "Smith"
  },
  {
    "name": "Van Dijk",
    "proto": "Smith"
  },
  {
    "name": "Singh",
    "proto": "Smith"
  },
  {
    "name": "Kapoor",
    "proto": "Smith"
  },
  {
    "name": "Chander",
    "proto": "Smith"
  },
  {
    "name": "Sidhu",
    "proto": "Smith"
  },
  {
    "name": "Dhaliwal",
    "proto": "Smith"
  },
  {
    "name": "shenanigan",
    "prohibitions": "number:sg, def:indef, quant:true",
    "disabled": false,
    "tags": "behaviour",
    "anim": "0",
    "tang": "0",
    "possessable": "7",
    "posr": "tags: person|organization",
    "size": "0",
    "count": "true",
    "partOf": "null"
  },
  {
    "name": "lifestyle",
    "anim": 0,
    "tang": 0,
    "possessable": 7,
    "posr": "tags: person",
    "unique": 0,
    "count": "true",
    "size": 0,
    "tags": "behaviour",
    "prohibitions": "def:indef,quantified:true",
    "partOf": "null"
  },
  {
    "name": "item",
    "disabled": false,
    "tags": "item",
    "anim": "0",
    "tang": "2",
    "possessable": "5",
    "partOf": "null",
    "size": "3,4,5,6",
    "count": "true"
  },
  {
    "name": "ingredient",
    "proto": "item",
    "disabled": false
  },
  {
    "name": "thingamajig",
    "proto": "item",
    "disabled": false
  },
  {
    "name": "doodad",
    "proto": "item"
  },
  {
    "name": "gizmo",
    "proto": "device"
  },
  {
    "name": "artifact",
    "proto": "item",
    "tags": "artifact"
  },
  {
    "name": "relic",
    "proto": "artifact",
    "anim": 0
  },
  {
    "name": "souvenir",
    "proto": "item"
  },
  {
    "name": "evidence",
    "proto": "item",
    "disabled": false,
    "count": "false"
  },
  {
    "name": "specimen",
    "proto": "item",
    "disabled": false
  },
  {
    "name": "sample",
    "proto": "item"
  },
  {
    "name": "plant",
    "disabled": false,
    "tags": "plant",
    "anim": "0",
    "tang": "2",
    "possessable": "2",
    "size": "4,5,6,7,8",
    "count": "true",
    "partOf": "null"
  },
  {
    "name": "vegetation",
    "proto": "plant",
    "count": "false"
  },
  {
    "name": "tree",
    "proto": "plant",
    "size": "7,8",
    "tags": "volume, vertical, path, elevated, hasHeight",
    "precomp": "(35 (palm|maple|pine|oak|apple|cherry|cedar|bonsai|Christmas))"
  },
  {
    "name": "tree1",
    "proto": "tree"
  },
  {
    "name": "bush",
    "proto": "plant",
    "size": 6,
    "tags": "volume",
    "precomp": "(35 (raspberry|blueberry|rose))"
  },
  {
    "name": "shrub",
    "proto": "bush",
    "precomp": "--"
  },
  {
    "name": "grapevine",
    "proto": "bush",
    "size": "6,7"
  },
  {
    "name": "fern",
    "proto": "plant",
    "size": "4,5"
  },
  {
    "name": "corn",
    "proto": "plant",
    "count": "false",
    "size": 5,
    "tags": "food, aggregate"
  },
  {
    "name": "wheat",
    "proto": "corn",
    "size": 4
  },
  {
    "name": "barley",
    "proto": "corn",
    "size": 4
  },
  {
    "name": "cactus",
    "proto": "plant",
    "disabled": false,
    "tags": "vertical, path"
  },
  {
    "name": "flower",
    "proto": "plant",
    "size": 4
  },
  {
    "name": "dandelion",
    "proto": "flower"
  },
  {
    "name": "tulip",
    "proto": "flower"
  },
  {
    "name": "daffodil",
    "proto": "flower"
  },
  {
    "name": "vine",
    "proto": "plant",
    "size": "4,5",
    "tags": "path"
  },
  {
    "name": "grass",
    "proto": "vegetation",
    "size": "3,4,5,6,7,8",
    "tags": "surface,aggregate,grounded"
  },
  {
    "name": "moss",
    "proto": "vegetation",
    "size": "4,5",
    "tags": "grounded"
  },
  {
    "name": "seaweed",
    "proto": "moss",
    "tags": "aggregate"
  },
  {
    "name": "suburb",
    "proto": "ghetto"
  },
  {
    "name": "Bangalore",
    "proto": "London"
  },
  {
    "name": "Bangkok",
    "proto": "London"
  },
  {
    "name": "Beijing",
    "proto": "London"
  },
  {
    "name": "Bogotá",
    "proto": "London"
  },
  {
    "name": "Buenos Aires",
    "proto": "London"
  },
  {
    "name": "Cairo",
    "proto": "London"
  },
  {
    "name": "Chennai",
    "proto": "London"
  },
  {
    "name": "Chicago",
    "proto": "London"
  },
  {
    "name": "Chongqing",
    "proto": "London"
  },
  {
    "name": "Delhi",
    "proto": "London"
  },
  {
    "name": "Dhaka",
    "proto": "London"
  },
  {
    "name": "Guangzhou",
    "proto": "London"
  },
  {
    "name": "Hong Kong",
    "proto": "London"
  },
  {
    "name": "Hyderabad",
    "proto": "London"
  },
  {
    "name": "Istanbul",
    "proto": "London"
  },
  {
    "name": "Jakarta",
    "proto": "London"
  },
  {
    "name": "Karachi",
    "proto": "London"
  },
  {
    "name": "Kinshasa",
    "proto": "London"
  },
  {
    "name": "Kolkata",
    "proto": "London"
  },
  {
    "name": "Kuala Lumpur",
    "proto": "London"
  },
  {
    "name": "Lagos",
    "proto": "London"
  },
  {
    "name": "Lahore",
    "proto": "London"
  },
  {
    "name": "Lima",
    "proto": "London"
  },
  {
    "name": "Los Angeles",
    "proto": "London"
  },
  {
    "name": "Manila",
    "proto": "London"
  },
  {
    "name": "Mexico City",
    "proto": "London"
  },
  {
    "name": "Mumbai",
    "proto": "London"
  },
  {
    "name": "Nagoya",
    "proto": "London"
  },
  {
    "name": "Osaka",
    "proto": "London"
  },
  {
    "name": "Philadelphia",
    "proto": "London"
  },
  {
    "name": "Rio de Janeiro",
    "proto": "London"
  },
  {
    "name": "Santiago",
    "proto": "London"
  },
  {
    "name": "São Paulo",
    "proto": "London"
  },
  {
    "name": "Seoul",
    "proto": "London"
  },
  {
    "name": "Shanghai",
    "proto": "London"
  },
  {
    "name": "Shenzhen",
    "proto": "London"
  },
  {
    "name": "Suzhou",
    "proto": "London"
  },
  {
    "name": "Taipei",
    "proto": "London"
  },
  {
    "name": "Tehran",
    "proto": "London"
  },
  {
    "name": "Tokyo",
    "proto": "London"
  },
  {
    "name": "Paris",
    "proto": "London"
  },
  {
    "name": "Dubai",
    "proto": "London"
  },
  {
    "name": "New York",
    "proto": "London"
  },
  {
    "name": "Singapore",
    "proto": "London"
  },
  {
    "name": "Barcelona",
    "proto": "London"
  },
  {
    "name": "Amsterdam",
    "proto": "London"
  },
  {
    "name": "Rome",
    "proto": "London"
  },
  {
    "name": "Milan",
    "proto": "London"
  },
  {
    "name": "Vienna",
    "proto": "London"
  },
  {
    "name": "Prague",
    "proto": "London"
  },
  {
    "name": "Kabul",
    "proto": "London"
  },
  {
    "name": "Algiers",
    "proto": "London"
  },
  {
    "name": "Canberra",
    "proto": "London"
  },
  {
    "name": "Minsk",
    "proto": "London"
  },
  {
    "name": "Brussels",
    "proto": "London"
  },
  {
    "name": "Sarajevo",
    "proto": "London"
  },
  {
    "name": "Brasilia",
    "proto": "London"
  },
  {
    "name": "Phnom Penh",
    "proto": "London"
  },
  {
    "name": "Ottawa",
    "proto": "London"
  },
  {
    "name": "San Jose",
    "proto": "London"
  },
  {
    "name": "Zagreb",
    "proto": "London"
  },
  {
    "name": "Havana",
    "proto": "London"
  },
  {
    "name": "Copenhagen",
    "proto": "London"
  },
  {
    "name": "Quito",
    "proto": "London"
  },
  {
    "name": "San Salvador",
    "proto": "London"
  },
  {
    "name": "Addis Ababa",
    "proto": "London"
  },
  {
    "name": "Berlin",
    "proto": "London"
  },
  {
    "name": "Athens",
    "proto": "London"
  },
  {
    "name": "Guatemala City",
    "proto": "London"
  },
  {
    "name": "Georgetown",
    "proto": "London"
  },
  {
    "name": "Port-au-Prince",
    "proto": "London"
  },
  {
    "name": "Tegucigalpa",
    "proto": "London"
  },
  {
    "name": "Budapest",
    "proto": "London"
  },
  {
    "name": "Reykjavik",
    "proto": "London"
  },
  {
    "name": "New Delhi",
    "proto": "London"
  },
  {
    "name": "Baghdad",
    "proto": "London"
  },
  {
    "name": "Dublin",
    "proto": "London"
  },
  {
    "name": "Jerusalem",
    "proto": "London"
  },
  {
    "name": "Kingston",
    "proto": "London"
  },
  {
    "name": "Nairobi",
    "proto": "London"
  },
  {
    "name": "Beirut",
    "proto": "London"
  },
  {
    "name": "Tripoli",
    "proto": "London"
  },
  {
    "name": "Luxembourg",
    "proto": "London"
  },
  {
    "name": "Monaco",
    "proto": "London"
  },
  {
    "name": "Ulaanbaatar",
    "proto": "London"
  },
  {
    "name": "Wellington",
    "proto": "London"
  },
  {
    "name": "Pyongyang",
    "proto": "London"
  },
  {
    "name": "Oslo",
    "proto": "London"
  },
  {
    "name": "Islamabad",
    "proto": "London"
  },
  {
    "name": "Ramallah",
    "proto": "London"
  },
  {
    "name": "Panama City",
    "proto": "London"
  },
  {
    "name": "Warsaw",
    "proto": "London"
  },
  {
    "name": "Lisbon",
    "proto": "London"
  },
  {
    "name": "Bucharest",
    "proto": "London"
  },
  {
    "name": "San Marino",
    "proto": "London"
  },
  {
    "name": "Riyadh",
    "proto": "London"
  },
  {
    "name": "Dakar",
    "proto": "London"
  },
  {
    "name": "Belgrade",
    "proto": "London"
  },
  {
    "name": "Victoria",
    "proto": "London"
  },
  {
    "name": "Freetown",
    "proto": "London"
  },
  {
    "name": "Bratislava",
    "proto": "London"
  },
  {
    "name": "Johannesburg",
    "proto": "London"
  },
  {
    "name": "Cape Town",
    "proto": "London"
  },
  {
    "name": "Mogadishu",
    "proto": "London"
  },
  {
    "name": "Pretoria",
    "proto": "London"
  },
  {
    "name": "Madrid",
    "proto": "London"
  },
  {
    "name": "Khartoum",
    "proto": "London"
  },
  {
    "name": "Stockholm",
    "proto": "London"
  },
  {
    "name": "Bern",
    "proto": "London"
  },
  {
    "name": "Damascus",
    "proto": "London"
  },
  {
    "name": "Kyiv",
    "proto": "London"
  },
  {
    "name": "Abu Dhabi",
    "proto": "London"
  },
  {
    "name": "Washington^, DC",
    "proto": "London"
  },
  {
    "name": "Vatican City",
    "proto": "London"
  },
  {
    "name": "Caracas",
    "proto": "London"
  },
  {
    "name": "Hanoi",
    "proto": "London"
  },
  {
    "name": "United States",
    "proto": "Japan",
    "unique": 1
  },
  {
    "name": "United Kingdom",
    "proto": "United States"
  },
  {
    "name": "United Arab Emirates",
    "proto": "United States"
  },
  {
    "name": "Czech Republic",
    "proto": "United States"
  },
  {
    "name": "Netherlands",
    "proto": "United States"
  },
  {
    "name": "China",
    "proto": "Japan"
  },
  {
    "name": "Germany",
    "proto": "Japan"
  },
  {
    "name": "France",
    "proto": "Japan"
  },
  {
    "name": "India",
    "proto": "Japan"
  },
  {
    "name": "Italy",
    "proto": "Japan"
  },
  {
    "name": "Brazil",
    "proto": "Japan"
  },
  {
    "name": "Canada",
    "proto": "Japan"
  },
  {
    "name": "Korea",
    "proto": "Japan"
  },
  {
    "name": "Russia",
    "proto": "Japan"
  },
  {
    "name": "Australia",
    "proto": "Japan"
  },
  {
    "name": "Spain",
    "proto": "Japan"
  },
  {
    "name": "Mexico",
    "proto": "Japan"
  },
  {
    "name": "Indonesia",
    "proto": "Japan"
  },
  {
    "name": "Turkey",
    "proto": "Japan"
  },
  {
    "name": "Switzerland",
    "proto": "Japan"
  },
  {
    "name": "Saudi Arabia",
    "proto": "Japan"
  },
  {
    "name": "Argentina",
    "proto": "Japan"
  },
  {
    "name": "Taiwan",
    "proto": "Japan"
  },
  {
    "name": "Sweden",
    "proto": "Japan"
  },
  {
    "name": "Belgium",
    "proto": "Japan"
  },
  {
    "name": "Poland",
    "proto": "Japan"
  },
  {
    "name": "Nigeria",
    "proto": "Japan"
  },
  {
    "name": "Iran",
    "proto": "Japan"
  },
  {
    "name": "Thailand",
    "proto": "Japan"
  },
  {
    "name": "Austria",
    "proto": "Japan"
  },
  {
    "name": "Norway",
    "proto": "Japan"
  },
  {
    "name": "Egypt",
    "proto": "Japan"
  },
  {
    "name": "Venezuela",
    "proto": "Japan"
  },
  {
    "name": "Israel",
    "proto": "Japan"
  },
  {
    "name": "Philippines",
    "proto": "Japan",
    "unique": 1
  },
  {
    "name": "Ireland",
    "proto": "Japan"
  },
  {
    "name": "Malaysia",
    "proto": "Japan"
  },
  {
    "name": "Denmark",
    "proto": "Japan"
  },
  {
    "name": "Pakistan",
    "proto": "Japan"
  },
  {
    "name": "South Africa",
    "proto": "Japan"
  },
  {
    "name": "Colombia",
    "proto": "Japan"
  },
  {
    "name": "Finland",
    "proto": "Japan"
  },
  {
    "name": "Chile",
    "proto": "Japan"
  },
  {
    "name": "Bangladesh",
    "proto": "Japan"
  },
  {
    "name": "Portugal",
    "proto": "Japan"
  },
  {
    "name": "Vietnam",
    "proto": "Japan"
  },
  {
    "name": "Greece",
    "proto": "Japan"
  },
  {
    "name": "Romania",
    "proto": "Japan"
  },
  {
    "name": "Peru",
    "proto": "Japan"
  },
  {
    "name": "New Zealand",
    "proto": "Japan"
  },
  {
    "name": "Algeria",
    "proto": "Japan"
  },
  {
    "name": "Qatar",
    "proto": "Japan"
  },
  {
    "name": "Iraq",
    "proto": "Japan"
  },
  {
    "name": "Kazakhstan",
    "proto": "Japan"
  },
  {
    "name": "Hungary",
    "proto": "Japan"
  },
  {
    "name": "Kuwait",
    "proto": "Japan"
  },
  {
    "name": "Morocco",
    "proto": "Japan"
  },
  {
    "name": "Puerto Rico",
    "proto": "Japan"
  },
  {
    "name": "Ecuador",
    "proto": "Japan"
  },
  {
    "name": "Sudan",
    "proto": "Japan"
  },
  {
    "name": "Angola",
    "proto": "Japan"
  },
  {
    "name": "Ukraine",
    "proto": "Japan"
  },
  {
    "name": "Sri Lanka",
    "proto": "Japan"
  },
  {
    "name": "Ethiopia",
    "proto": "Japan"
  },
  {
    "name": "Kenya",
    "proto": "Japan"
  },
  {
    "name": "Guatemala",
    "proto": "Japan"
  },
  {
    "name": "Myanmar",
    "proto": "Japan"
  },
  {
    "name": "Uzbekistan",
    "proto": "Japan"
  },
  {
    "name": "Luxembourg",
    "proto": "Japan"
  },
  {
    "name": "Oman",
    "proto": "Japan"
  },
  {
    "name": "Costa Rica",
    "proto": "Japan"
  },
  {
    "name": "Panama",
    "proto": "Japan"
  },
  {
    "name": "Uruguay",
    "proto": "Japan"
  },
  {
    "name": "Lebanon",
    "proto": "Japan"
  },
  {
    "name": "Bulgaria",
    "proto": "Japan"
  },
  {
    "name": "Croatia",
    "proto": "Japan"
  },
  {
    "name": "Belarus",
    "proto": "Japan"
  },
  {
    "name": "Tanzania",
    "proto": "Japan"
  },
  {
    "name": "Slovenia",
    "proto": "Japan"
  },
  {
    "name": "Lithuania",
    "proto": "Japan"
  },
  {
    "name": "Ghana",
    "proto": "Japan"
  },
  {
    "name": "Tunisia",
    "proto": "Japan"
  },
  {
    "name": "Jordan",
    "proto": "Japan"
  },
  {
    "name": "Libya",
    "proto": "Japan"
  },
  {
    "name": "Serbia",
    "proto": "Japan"
  },
  {
    "name": "Turkmenistan",
    "proto": "Japan"
  },
  {
    "name": "Bolivia",
    "proto": "Japan"
  },
  {
    "name": "Azerbaijan",
    "proto": "Japan"
  },
  {
    "name": "Bahrain",
    "proto": "Japan"
  },
  {
    "name": "Yemen",
    "proto": "Japan"
  },
  {
    "name": "Cameroon",
    "proto": "Japan"
  },
  {
    "name": "Latvia",
    "proto": "Japan"
  },
  {
    "name": "Paraguay",
    "proto": "Japan"
  },
  {
    "name": "El Salvador",
    "proto": "Japan"
  },
  {
    "name": "Uganda",
    "proto": "Japan"
  },
  {
    "name": "Estonia",
    "proto": "Japan"
  },
  {
    "name": "Nepal",
    "proto": "Japan"
  },
  {
    "name": "Honduras",
    "proto": "Japan"
  },
  {
    "name": "Zambia",
    "proto": "Japan"
  },
  {
    "name": "Cyprus",
    "proto": "Japan"
  },
  {
    "name": "Papua New Guinea",
    "proto": "Japan"
  },
  {
    "name": "Iceland",
    "proto": "Japan"
  },
  {
    "name": "Cambodia",
    "proto": "Japan"
  },
  {
    "name": "Afghanistan",
    "proto": "Japan"
  },
  {
    "name": "Georgia",
    "proto": "Japan"
  },
  {
    "name": "Zimbabwe",
    "proto": "Japan"
  },
  {
    "name": "Jamaica",
    "proto": "Japan"
  },
  {
    "name": "Albania",
    "proto": "Japan"
  },
  {
    "name": "Mongolia",
    "proto": "Japan"
  },
  {
    "name": "heart",
    "disabled": false,
    "tags": "bodyPart",
    "anim": "0",
    "tang": "2",
    "possessable": "999",
    "posr": "number: noun.number",
    "partOf": "creature",
    "size": "4",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "face",
    "proto": "heart",
    "disabled": false,
    "tags": "surface"
  },
  {
    "name": "nose",
    "proto": "heart",
    "disabled": false,
    "tags": "container, protrusion",
    "size": "3"
  },
  {
    "name": "mouth",
    "proto": "heart",
    "disabled": false,
    "tags": "container",
    "size": "3"
  },
  {
    "name": "neck",
    "proto": "heart",
    "disabled": false,
    "tags": "vertical, path"
  },
  {
    "name": "throat",
    "proto": "heart",
    "disabled": false,
    "tags": "passage",
    "size": "3"
  },
  {
    "name": "stomach",
    "proto": "heart",
    "disabled": false,
    "tags": "container"
  },
  {
    "name": "spine",
    "proto": "heart",
    "disabled": false,
    "tags": "vertical, path"
  },
  {
    "name": "spleen",
    "proto": "heart",
    "disabled": false
  },
  {
    "name": "head",
    "proto": "heart",
    "disabled": false,
    "tags": "appendage"
  },
  {
    "name": "back1",
    "proto": "heart",
    "disabled": false,
    "tags": "vertical, surface",
    "size": "5"
  },
  {
    "name": "chest",
    "proto": "heart",
    "disabled": false
  },
  {
    "name": "armpit",
    "proto": "heart",
    "disabled": false,
    "partOf": "person"
  },
  {
    "name": "groin",
    "proto": "heart",
    "disabled": false
  },
  {
    "name": "butt",
    "proto": "heart",
    "disabled": false
  },
  {
    "name": "eye",
    "proto": "heart",
    "disabled": false,
    "size": "3"
  },
  {
    "name": "ear",
    "proto": "eye",
    "disabled": false,
    "tags": "container, protrusion"
  },
  {
    "name": "knee",
    "proto": "eye",
    "disabled": false,
    "tags": "point"
  },
  {
    "name": "elbow",
    "proto": "eye",
    "disabled": false,
    "tags": "point"
  },
  {
    "name": "ankle",
    "proto": "eye",
    "disabled": false,
    "tags": "point"
  },
  {
    "name": "shoulder",
    "proto": "eye",
    "disabled": false,
    "tags": "point",
    "size": "4"
  },
  {
    "name": "foot",
    "proto": "eye",
    "disabled": false,
    "tags": "appendage",
    "size": "4",
    "inflections": "pl: feet"
  },
  {
    "name": "hand",
    "proto": "foot",
    "disabled": false,
    "tags": "surface, container",
    "partOf": "person"
  },
  {
    "name": "arm",
    "proto": "foot",
    "disabled": false,
    "tags": "path",
    "size": "5"
  },
  {
    "name": "leg",
    "proto": "arm",
    "disabled": false,
    "tags": "vertical",
    "size": "5"
  },
  {
    "name": "tail",
    "proto": "heart",
    "disabled": false,
    "tags": "path",
    "partOf": "beast",
    "size": "3"
  },
  {
    "name": "wing",
    "proto": "tail",
    "disabled": false,
    "partOf": "airAnimal"
  }
]
