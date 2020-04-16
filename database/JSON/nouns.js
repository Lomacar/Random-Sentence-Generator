noun = [
  {
    "name": "battle",
    "disabled": false,
    "tags": "event",
    "anim": "0",
    "tang": "0",
    "possessable": "0",
    "count": "true",
    "complements": "(15 of DP{tags:territory} |5 of DP{tags:place; proper:true})"
  },
  {
    "name": "effect",
    "disabled": false,
    "tags": "effect",
    "anim": "0",
    "tang": "0",
    "possessable": "3",
    "posr": "tags: happening|dynamic",
    "count": "true"
  },
  {
    "name": "result",
    "proto": "effect",
    "disabled": false,
    "tags": "result",
    "posr": "tags:volitional & hasDuration|TEMPORAL"
  },
  {
    "name": "success",
    "proto": "result"
  },
  {
    "name": "failure",
    "proto": "result",
    "disabled": false
  },
  {
    "name": "outcome",
    "proto": "result",
    "disabled": false
  },
  {
    "name": "door",
    "disabled": false,
    "tags": "door",
    "anim": "0",
    "tang": "2",
    "possessable": "3",
    "partOf": "building|room",
    "size": "6",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "hatch",
    "proto": "door",
    "disabled": false
  },
  {
    "name": "lint",
    "disabled": false,
    "tags": "solid",
    "anim": "0",
    "tang": "2",
    "possessable": "2",
    "posr": "tags: person|clothing",
    "size": "2",
    "unique": "0",
    "count": "false"
  },
  {
    "name": "plate",
    "disabled": false,
    "tags": "surface, artifact",
    "anim": "0",
    "tang": "2",
    "possessable": "6",
    "size": "4",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "trophy",
    "proto": "plate",
    "disabled": false,
    "tags": "artifact"
  },
  {
    "name": "bowl",
    "proto": "plate",
    "disabled": false,
    "tags": "--, artifact, vessel"
  },
  {
    "name": "cup",
    "proto": "bowl",
    "disabled": false,
    "size": "3,4"
  },
  {
    "name": "mug",
    "proto": "cup",
    "disabled": false,
    "precomp": "(15 coffee |5 travel)"
  },
  {
    "name": "crumb",
    "disabled": false,
    "tags": "item",
    "anim": "0",
    "tang": "2",
    "possessable": "2",
    "posr": "tags: person|food&!liquid",
    "size": "2",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "dust",
    "disabled": false,
    "tags": "gas",
    "anim": "0",
    "tang": "2",
    "possessable": "1",
    "size": "5,6,7,8,9",
    "unique": "0",
    "count": "false"
  },
  {
    "name": "dust1",
    "proto": "dust",
    "disabled": false,
    "tags": "-, aggregate",
    "size": "2"
  },
  {
    "name": "pill",
    "disabled": false,
    "tags": "artifact, item",
    "anim": "0",
    "tang": "2",
    "possessable": "3",
    "posr": "anim: 3",
    "size": "3",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "aspirin",
    "proto": "pill"
  },
  {
    "name": "painkiller",
    "proto": "pill",
    "disabled": false
  },
  {
    "name": "Ritalin",
    "proto": "Tylenol",
    "disabled": false
  },
  {
    "name": "Tylenol",
    "proto": "pill",
    "disabled": false,
    "count": "false"
  },
  {
    "name": "Advil",
    "proto": "Tylenol",
    "disabled": false
  },
  {
    "name": "Gravol",
    "proto": "Tylenol",
    "disabled": false
  },
  {
    "name": "medicine",
    "proto": "sedative",
    "disabled": false,
    "count": "false"
  },
  {
    "name": "cough syrup",
    "proto": "medicine",
    "disabled": false,
    "tags": "viscous"
  },
  {
    "name": "medicine1",
    "proto": "medicine",
    "disabled": false,
    "precomp": "(cough|herbal)"
  },
  {
    "name": "sedative",
    "proto": "pill",
    "disabled": false,
    "tags": "--, substance"
  },
  {
    "name": "laxative",
    "proto": "sedative",
    "disabled": false
  },
  {
    "name": "drug",
    "proto": "pill",
    "disabled": false
  },
  {
    "name": "experience",
    "disabled": false,
    "tags": "experience",
    "anim": "0",
    "tang": "0",
    "possessable": "6",
    "size": "0",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "dream",
    "proto": "experience",
    "disabled": false,
    "possessable": "7"
  },
  {
    "name": "conversation",
    "proto": "experience",
    "disabled": false,
    "tags": "speechAct"
  },
  {
    "name": "nap",
    "proto": "shower",
    "disabled": false
  },
  {
    "name": "break",
    "proto": "rest",
    "disabled": false
  },
  {
    "name": "rest",
    "proto": "nap",
    "disabled": false
  },
  {
    "name": "vacation",
    "proto": "shower",
    "disabled": false
  },
  {
    "name": "shower",
    "disabled": false,
    "tags": "engagement",
    "anim": "0",
    "tang": "0",
    "possessable": "9",
    "posr": "tags:person",
    "size": "0",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "bath",
    "proto": "shower",
    "disabled": false
  },
  {
    "name": "chair",
    "disabled": false,
    "tags": "furniture, elevated, surface",
    "anim": "0",
    "tang": "2",
    "possessable": "5",
    "posr": "anim:3",
    "size": "5,6",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "toilet",
    "proto": "chair",
    "disabled": false,
    "tags": "fixed, container"
  },
  {
    "name": "throne",
    "proto": "chair",
    "disabled": false,
    "size": "6"
  },
  {
    "name": "stool",
    "proto": "chair",
    "disabled": false,
    "size": "5"
  },
  {
    "name": "bench",
    "proto": "chair",
    "disabled": false
  },
  {
    "name": "sofa",
    "proto": "chair",
    "disabled": false,
    "size": "6,7"
  },
  {
    "name": "couch",
    "proto": "sofa",
    "disabled": false
  },
  {
    "name": "slope",
    "disabled": false,
    "tags": "incline, fixed, surface",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "size": "7,8,9",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "ramp",
    "proto": "slope",
    "disabled": false,
    "tags": "structure",
    "size": "6,7,8"
  },
  {
    "name": "embankment",
    "proto": "slope",
    "disabled": false
  },
  {
    "name": "blimp",
    "disabled": false,
    "tags": "airVehicle, passengerVehicle, elevated",
    "anim": "0",
    "tang": "2",
    "possessable": "5",
    "size": "8",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "zeppelin",
    "proto": "blimp"
  },
  {
    "name": "hot air balloon",
    "proto": "blimp"
  },
  {
    "name": "Chewbacca",
    "proto": "Batman",
    "disabled": false
  },
  {
    "name": "Obi Wan Kenobi",
    "proto": "Batman"
  },
  {
    "name": "Lando Calrissian",
    "proto": "Batman"
  },
  {
    "name": "Boba Fett",
    "proto": "Batman"
  },
  {
    "name": "disappearance",
    "prohibitions": "quantified: true",
    "disabled": false,
    "tags": "occurance",
    "anim": "0",
    "tang": "0",
    "possessable": "10",
    "posr": "tags:visible",
    "size": "0",
    "count": "false"
  },
  {
    "name": "explosion",
    "disabled": false,
    "tags": "occurance,sight,sound,feelable",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "size": "6,7,8,9,10",
    "count": "true"
  },
  {
    "name": "disappearance.1",
    "proto": "disappearance",
    "disabled": false,
    "possessable": "0",
    "posr": "--",
    "complements": "of DP{tags:visible}"
  },
  {
    "name": "Mount Fuji",
    "proto": "Mount Everest",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Mount Rushmore",
    "proto": "Mount Everest",
    "disabled": false
  },
  {
    "name": "Mount Kilimanjaro",
    "proto": "Mount Everest"
  },
  {
    "name": "Rice Crispy",
    "proto": "Cheerio",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "bran flake",
    "proto": "Cheerio",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "rain",
    "disabled": false,
    "tags": "weather, volume, visible",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "size": "9",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "tornado",
    "proto": "rain",
    "disabled": false,
    "tags": "hasHeight, event",
    "partOf": "null",
    "size": "8,9",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "hail",
    "proto": "rain",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "snow1",
    "proto": "rain",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "fog",
    "proto": "rain",
    "disabled": false,
    "tags": "gas",
    "partOf": "null"
  },
  {
    "name": "mist",
    "proto": "fog",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "rainbow",
    "disabled": false,
    "tags": "sight, fixed",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "size": "8,9",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "mirage",
    "proto": "rainbow",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Euphrates",
    "proto": "Nile",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Tigris",
    "proto": "Nile",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Rhine",
    "proto": "Nile",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Indus",
    "proto": "Nile",
    "disabled": false,
    "partOf": "null",
    "complements": "(River)"
  },
  {
    "name": "Rio Grande",
    "proto": "Nile",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Orinoco",
    "proto": "Nile",
    "disabled": false,
    "partOf": "null",
    "complements": "(River)"
  },
  {
    "name": "Samsung",
    "proto": "IBM",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Walmart",
    "proto": "IBM",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Wells Fargo",
    "proto": "IBM",
    "disabled": false
  },
  {
    "name": "General Motors",
    "proto": "IBM",
    "disabled": false
  },
  {
    "name": "Congress",
    "proto": "FBI",
    "disabled": false,
    "partOf": "null",
    "unique": "2"
  },
  {
    "name": "Parliament",
    "proto": "Congress",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "committee",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "jury",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "senate",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "board1",
    "proto": "choir",
    "disabled": false,
    "partOf": "null",
    "complements": "(80 of (trustees|directors))"
  },
  {
    "name": "council",
    "proto": "choir",
    "disabled": false,
    "partOf": "null",
    "precomp": "(20 high)"
  },
  {
    "name": "clan",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "club",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Nile",
    "proto": "river",
    "disabled": false,
    "unique": "1",
    "count": "false"
  },
  {
    "name": "Outback",
    "proto": "forest",
    "disabled": false,
    "size": "10",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "apocalypse",
    "disabled": false,
    "tags": "event",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "North",
    "disabled": false,
    "tags": "place",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "Taj Mahal",
    "disabled": false,
    "tags": "building",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "size": "8",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "Canuck",
    "prohibitions": "number:sg",
    "disabled": false,
    "tags": "-",
    "anim": "3",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "unique": "1",
    "count": "true"
  },
  {
    "name": "Loch Ness monster",
    "proto": "dog",
    "disabled": false,
    "tags": "waterAnimal",
    "size": "7",
    "unique": "1"
  },
  {
    "name": "Jack",
    "disabled": false,
    "tags": "person, firstname",
    "anim": "3",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "gender": "m",
    "size": "6",
    "unique": "2",
    "count": "false",
    "precomp": "(10 TITLE{unpack:noun.tags-gender})"
  },
  {
    "name": "Sally",
    "disabled": false,
    "tags": "person, firstname",
    "anim": "3",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "gender": "f",
    "size": "6",
    "unique": "2",
    "count": "false",
    "precomp": "(10 TITLE{unpack:noun.tags-gender})"
  },
  {
    "name": "Leah",
    "proto": "Sally"
  },
  {
    "name": "Brandy",
    "proto": "Sally",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Pope",
    "proto": "Jack",
    "disabled": false,
    "partOf": "null",
    "unique": "1"
  },
  {
    "name": "Popemobile",
    "proto": "car",
    "disabled": false,
    "partOf": "null",
    "unique": "1"
  },
  {
    "name": "Sahara Desert",
    "proto": "Outback",
    "disabled": false,
    "unique": "1"
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
    "disabled": false,
    "size": "9",
    "unique": "2"
  },
  {
    "name": "Christmas",
    "disabled": false,
    "tags": "event",
    "anim": "0",
    "tang": "0",
    "possessable": "0",
    "partOf": "null",
    "unique": "2",
    "count": "false"
  },
  {
    "name": "dancing",
    "disabled": false,
    "tags": "activity",
    "anim": "0",
    "tang": "0",
    "possessable": "0",
    "partOf": "null",
    "unique": "2",
    "count": "false"
  },
  {
    "name": "Fido",
    "proto": "dog",
    "disabled": false,
    "tags": "firstname",
    "possessable": "0",
    "gender": "m",
    "unique": "2",
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
    "proto": "Fido",
    "disabled": false
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
    "disabled": false,
    "tags": "-,firstname, machine",
    "anim": "1.5"
  },
  {
    "name": "city",
    "disabled": false,
    "tags": "city",
    "anim": "0",
    "tang": "1",
    "possessable": "2",
    "posr": "tags: person",
    "partOf": "null",
    "size": "9",
    "count": "true"
  },
  {
    "name": "town",
    "proto": "city",
    "disabled": false
  },
  {
    "name": "village",
    "proto": "city",
    "disabled": false
  },
  {
    "name": "neighborhood",
    "proto": "city",
    "disabled": false,
    "partOf": "null",
    "size": "8.5"
  },
  {
    "name": "ghetto",
    "proto": "neighborhood",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "district",
    "proto": "city",
    "disabled": false,
    "size": "8.5"
  },
  {
    "name": "region",
    "proto": "country",
    "disabled": false,
    "tags": "-, region",
    "partOf": "null",
    "size": "9,10,11"
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
    "proto": "country",
    "disabled": false
  },
  {
    "name": "realm",
    "proto": "state"
  },
  {
    "name": "Japan",
    "proto": "country",
    "disabled": false,
    "possessable": "0",
    "posr": "--",
    "partOf": "null",
    "unique": "2",
    "count": "false"
  },
  {
    "name": "London",
    "proto": "city",
    "disabled": false,
    "possessable": "0",
    "posr": "--",
    "partOf": "null",
    "unique": "2",
    "count": "false"
  },
  {
    "name": "Oxford",
    "proto": "London",
    "disabled": false,
    "tags": "site, organization",
    "partOf": "null"
  },
  {
    "name": "the Iliad",
    "disabled": false,
    "tags": "readable",
    "anim": "0",
    "tang": "0",
    "possessable": "0",
    "partOf": "null",
    "size": "0",
    "unique": "2",
    "count": "false"
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
    "disabled": false,
    "unique": "2"
  },
  {
    "name": "vibration.1",
    "proto": "vibration",
    "count": "false"
  },
  {
    "name": "work.1",
    "proto": "task",
    "disabled": false,
    "count": "false"
  },
  {
    "name": "cattle",
    "prohibitions": "number:sg",
    "disabled": false,
    "tags": "collective",
    "anim": "2",
    "tang": "2",
    "possessable": "4",
    "partOf": "null",
    "size": "6",
    "inflections": "pl:cattle"
  },
  {
    "name": "Alp",
    "proto": "Outback",
    "count": "true",
    "prohibitions": "number:sg"
  },
  {
    "name": "coin",
    "disabled": false,
    "tags": "artifact",
    "anim": "0",
    "tang": "2",
    "possessable": "4",
    "partOf": "null",
    "size": "3",
    "count": "true"
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
    "disabled": false,
    "tags": "situation",
    "anim": "0",
    "tang": "0",
    "possessable": "4",
    "partOf": "null",
    "size": "0",
    "count": "true"
  },
  {
    "name": "traffic",
    "proto": "chaos",
    "disabled": false,
    "possessable": "3",
    "posr": "tags: territory"
  },
  {
    "name": "crisis",
    "proto": "situation",
    "disabled": false,
    "possessable": "1",
    "count": "true",
    "inflections": "pl:crises"
  },
  {
    "name": "scandal",
    "proto": "situation",
    "disabled": false
  },
  {
    "name": "emergency",
    "proto": "situation"
  },
  {
    "name": "chaos",
    "proto": "situation",
    "disabled": false,
    "count": "false"
  },
  {
    "name": "aftermath",
    "proto": "effect",
    "disabled": false,
    "unique": "1",
    "count": "false"
  },
  {
    "name": "tension",
    "proto": "chaos",
    "disabled": false
  },
  {
    "name": "combat",
    "proto": "chaos",
    "disabled": false
  },
  {
    "name": "prosperity",
    "proto": "chaos",
    "disabled": false,
    "possessable": "6",
    "posr": "tags: person|organization|territory"
  },
  {
    "name": "peace",
    "proto": "chaos",
    "disabled": false,
    "posr": "tags: territory"
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
    "disabled": false,
    "possessable": "9",
    "posr": "tags: lifeform"
  },
  {
    "name": "hostility",
    "proto": "situation",
    "disabled": false,
    "possessable": "6",
    "posr": "tags: person|beast|organization|territory"
  },
  {
    "name": "productivity",
    "proto": "chaos",
    "disabled": false,
    "possessable": "5",
    "posr": "tags: person|organization|territory"
  },
  {
    "name": "problem",
    "disabled": false,
    "tags": "difficulty",
    "anim": "0",
    "tang": "0",
    "possessable": "6",
    "partOf": "null",
    "size": "0",
    "count": "true"
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
    "disabled": false,
    "tags": "difficulty,undertaking",
    "anim": "0",
    "tang": "0",
    "possessable": "6",
    "partOf": "null",
    "size": "0",
    "count": "true"
  },
  {
    "name": "operation",
    "proto": "task",
    "disabled": false
  },
  {
    "name": "journey",
    "disabled": false,
    "tags": "undertaking,accomplishment",
    "anim": "0",
    "tang": "0",
    "possessable": "4",
    "partOf": "null",
    "size": "0",
    "count": "true"
  },
  {
    "name": "renovation",
    "proto": "journey",
    "disabled": false,
    "possessable": "0",
    "complements": "(of NP{tags:vehicle|structure})"
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
    "disabled": false,
    "tags": "procedure",
    "anim": "0",
    "tang": "0",
    "possessable": "6",
    "partOf": "null",
    "size": "0",
    "count": "true",
    "complements": "(25 for GP)"
  },
  {
    "name": "procedure",
    "proto": "strategy",
    "disabled": false
  },
  {
    "name": "forest",
    "disabled": false,
    "tags": "terrain",
    "anim": "0",
    "tang": "1",
    "possessable": "1",
    "partOf": "null",
    "size": "9,10",
    "count": "true"
  },
  {
    "name": "jungle",
    "proto": "forest",
    "disabled": false
  },
  {
    "name": "desert",
    "proto": "forest",
    "disabled": false
  },
  {
    "name": "apple",
    "disabled": false,
    "tags": "food, item",
    "anim": "0",
    "tang": "2",
    "possessable": "4",
    "partOf": "null",
    "size": "4",
    "count": "true"
  },
  {
    "name": "fruit",
    "proto": "apple",
    "disabled": false,
    "size": "3,4,5"
  },
  {
    "name": "vegetable",
    "proto": "apple",
    "disabled": false
  },
  {
    "name": "mango",
    "proto": "apple",
    "disabled": false
  },
  {
    "name": "pineapple",
    "proto": "apple"
  },
  {
    "name": "mushroom",
    "proto": "apple",
    "disabled": false,
    "tags": "food,plant"
  },
  {
    "name": "sandwich",
    "proto": "apple",
    "disabled": false,
    "tags": "artifact",
    "partOf": "null"
  },
  {
    "name": "hamburger",
    "proto": "sandwich"
  },
  {
    "name": "burrito",
    "proto": "sandwich",
    "disabled": false
  },
  {
    "name": "cake",
    "proto": "sandwich",
    "disabled": false,
    "size": "4,5"
  },
  {
    "name": "muffin",
    "proto": "cake",
    "disabled": false,
    "size": "4"
  },
  {
    "name": "cookie",
    "proto": "muffin",
    "disabled": false
  },
  {
    "name": "pizza",
    "proto": "sandwich",
    "disabled": false,
    "tags": "surface",
    "size": "4,5"
  },
  {
    "name": "pie",
    "proto": "pizza",
    "disabled": false,
    "size": "4"
  },
  {
    "name": "life",
    "prohibitions": "def:def,quantified:true",
    "disabled": false,
    "tags": "property",
    "anim": "0",
    "tang": "0",
    "possessable": "0",
    "partOf": "null",
    "size": "0",
    "count": "false",
    "inflections": "pl:lives"
  },
  {
    "name": "color.1",
    "proto": "color",
    "disabled": false,
    "count": "false"
  },
  {
    "name": "dirt",
    "disabled": false,
    "tags": "aggregate, semisolid",
    "anim": "0",
    "tang": "2",
    "possessable": "3",
    "partOf": "null",
    "size": "0",
    "count": "false"
  },
  {
    "name": "garbage",
    "disabled": false,
    "tags": "aggregate",
    "anim": "0",
    "tang": "2",
    "possessable": "3",
    "partOf": "null",
    "size": "0",
    "count": "false"
  },
  {
    "name": "light",
    "disabled": false,
    "tags": "energy, sight",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "size": "0",
    "unique": "2",
    "count": "false"
  },
  {
    "name": "darkness",
    "proto": "light",
    "disabled": false,
    "tags": "--, phenomena, situation"
  },
  {
    "name": "shadow",
    "proto": "light",
    "disabled": false,
    "tags": "sight",
    "partOf": "null",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "sky",
    "disabled": false,
    "tags": "thing, volume, elevated",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "size": "0",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "truth",
    "disabled": false,
    "tags": "concept",
    "anim": "0",
    "tang": "0",
    "possessable": "0",
    "partOf": "null",
    "size": "0",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "weather",
    "disabled": false,
    "tags": "weather, situation",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "size": "0",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "wind",
    "disabled": false,
    "tags": "phenomenon",
    "anim": "0",
    "tang": "1",
    "possessable": "1",
    "partOf": "null",
    "size": "0",
    "count": "false"
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
    "disabled": false,
    "tags": "-",
    "anim": "0",
    "tang": "0",
    "possessable": "3",
    "partOf": "null",
    "size": "0",
    "count": "true"
  },
  {
    "name": "color",
    "disabled": false,
    "tags": "property,sight,PHYSICAL",
    "anim": "0",
    "tang": "1",
    "possessable": "2",
    "partOf": "null",
    "size": "0",
    "count": "true"
  },
  {
    "name": "party",
    "disabled": false,
    "tags": "occasion",
    "anim": "0",
    "tang": "0",
    "possessable": "6",
    "posr": "tags: person|organization",
    "partOf": "null",
    "size": "0",
    "count": "true"
  },
  {
    "name": "rodeo",
    "proto": "game",
    "disabled": false,
    "precomp": "--"
  },
  {
    "name": "dinner",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "potluck",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "BBQ",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "concert",
    "proto": "party",
    "disabled": false,
    "tags": "performance"
  },
  {
    "name": "show",
    "proto": "concert",
    "disabled": false
  },
  {
    "name": "funeral",
    "proto": "party",
    "disabled": false,
    "possessable": "7"
  },
  {
    "name": "wedding",
    "proto": "funeral",
    "disabled": false
  },
  {
    "name": "meeting",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "intervention",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "Bible study",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "bake sale",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "farmer's market",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "beauty pageant",
    "proto": "concert",
    "disabled": false,
    "tags": "contest"
  },
  {
    "name": "dog",
    "disabled": false,
    "tags": "beast",
    "anim": "2",
    "tang": "2",
    "possessable": "3",
    "partOf": "null",
    "size": "5",
    "count": "true"
  },
  {
    "name": "pet",
    "proto": "dog",
    "disabled": false,
    "possessable": "7"
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
    "disabled": false,
    "tags": "building",
    "anim": "0",
    "tang": "2",
    "possessable": "5",
    "size": "8",
    "count": "true"
  },
  {
    "name": "château",
    "proto": "house",
    "disabled": false
  },
  {
    "name": "cabin",
    "proto": "house",
    "disabled": false,
    "size": "7,8"
  },
  {
    "name": "hut",
    "proto": "shed",
    "disabled": false,
    "precomp": "(20 grass |20 mud)"
  },
  {
    "name": "tent",
    "proto": "shed",
    "disabled": false
  },
  {
    "name": "teepee",
    "proto": "shed",
    "disabled": false
  },
  {
    "name": "igloo",
    "proto": "shed",
    "disabled": false
  },
  {
    "name": "shed",
    "proto": "house",
    "disabled": false,
    "size": "7"
  },
  {
    "name": "headquarter",
    "proto": "house",
    "prohibitions": "number:sg, def:indef",
    "disabled": false,
    "possessable": "7"
  },
  {
    "name": "hideout",
    "proto": "house",
    "disabled": false,
    "possessable": "6"
  },
  {
    "name": "building",
    "proto": "house",
    "disabled": false,
    "possessable": "3"
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
    "disabled": false,
    "possessable": "4",
    "posr": "tags: city",
    "partOf": "null"
  },
  {
    "name": "school",
    "proto": "house",
    "disabled": false,
    "possessable": "4",
    "posr": "tags: city|person",
    "partOf": "null"
  },
  {
    "name": "store",
    "proto": "house",
    "disabled": false,
    "tags": "establishment",
    "possessable": "2"
  },
  {
    "name": "museum",
    "proto": "store",
    "disabled": false,
    "possessable": "1"
  },
  {
    "name": "library",
    "proto": "museum",
    "disabled": false,
    "possessable": "0"
  },
  {
    "name": "gym",
    "proto": "house",
    "disabled": false,
    "possessable": "1"
  },
  {
    "name": "tower",
    "proto": "house",
    "disabled": false,
    "possessable": "2"
  },
  {
    "name": "airport",
    "proto": "house",
    "disabled": false,
    "possessable": "0"
  },
  {
    "name": "barn",
    "proto": "house",
    "disabled": false,
    "possessable": "3"
  },
  {
    "name": "factory",
    "proto": "house",
    "disabled": false,
    "possessable": "2"
  },
  {
    "name": "restaurant",
    "proto": "store",
    "disabled": false,
    "possessable": "2"
  },
  {
    "name": "café",
    "proto": "restaurant",
    "disabled": false
  },
  {
    "name": "mall",
    "proto": "house",
    "disabled": false,
    "possessable": "0"
  },
  {
    "name": "theatre",
    "proto": "store",
    "disabled": false,
    "possessable": "1"
  },
  {
    "name": "laboratory",
    "proto": "house",
    "disabled": false,
    "possessable": "2"
  },
  {
    "name": "warehouse",
    "proto": "house",
    "disabled": false,
    "possessable": "0"
  },
  {
    "name": "bunker",
    "proto": "house",
    "tags": "grounded"
  },
  {
    "name": "station",
    "proto": "house",
    "disabled": false,
    "possessable": "0"
  },
  {
    "name": "human",
    "disabled": false,
    "tags": "hasHeight, person, mobile",
    "anim": "3",
    "tang": "2",
    "possessable": "2",
    "partOf": "null",
    "size": "6",
    "count": "true"
  },
  {
    "name": "American",
    "proto": "human",
    "disabled": false,
    "possessable": "0"
  },
  {
    "name": "Canadian",
    "proto": "American"
  },
  {
    "name": "Brit",
    "proto": "American"
  },
  {
    "name": "Finn",
    "proto": "American"
  },
  {
    "name": "Mexican",
    "proto": "American"
  },
  {
    "name": "German",
    "proto": "American"
  },
  {
    "name": "Arab",
    "proto": "American"
  },
  {
    "name": "Israeli",
    "proto": "American"
  },
  {
    "name": "Asian",
    "proto": "American"
  },
  {
    "name": "African",
    "proto": "American"
  },
  {
    "name": "^European",
    "proto": "American",
    "disabled": false
  },
  {
    "name": "Egyptian",
    "proto": "American"
  },
  {
    "name": "Russian",
    "proto": "American"
  },
  {
    "name": "Swede",
    "proto": "American"
  },
  {
    "name": "Spaniard",
    "proto": "American"
  },
  {
    "name": "Moroccan",
    "proto": "American"
  },
  {
    "name": "Norwegian",
    "proto": "American"
  },
  {
    "name": "Indian",
    "proto": "American"
  },
  {
    "name": "Italian",
    "proto": "American"
  },
  {
    "name": "Roman",
    "proto": "American"
  },
  {
    "name": "Mongol",
    "proto": "American"
  },
  {
    "name": "Persian",
    "proto": "American"
  },
  {
    "name": "Celt",
    "proto": "American"
  },
  {
    "name": "Scandinavian",
    "proto": "American",
    "disabled": false
  },
  {
    "name": "Kurd",
    "proto": "American"
  },
  {
    "name": "Filipino",
    "proto": "American",
    "disabled": false,
    "gender": "m"
  },
  {
    "name": "Filipina",
    "proto": "Filipino",
    "disabled": false,
    "gender": "f"
  },
  {
    "name": "Newfoundlander",
    "proto": "American"
  },
  {
    "name": "Martian",
    "proto": "American",
    "disabled": false
  },
  {
    "name": "Turk",
    "proto": "American"
  },
  {
    "name": "Saudi",
    "proto": "American",
    "disabled": false
  },
  {
    "name": "Newfie",
    "proto": "Newfoundlander",
    "disabled": false
  },
  {
    "name": "girl",
    "proto": "human",
    "disabled": false,
    "gender": "f",
    "size": "5,6"
  },
  {
    "name": "boy",
    "proto": "human",
    "disabled": false,
    "gender": "m",
    "size": "5,6"
  },
  {
    "name": "man",
    "proto": "human",
    "disabled": false,
    "gender": "m",
    "inflections": "pl:men"
  },
  {
    "name": "woman",
    "proto": "human",
    "disabled": false,
    "gender": "f",
    "inflections": "pl:women"
  },
  {
    "name": "giant",
    "proto": "human",
    "disabled": false,
    "size": "7,8"
  },
  {
    "name": "gnome",
    "proto": "human",
    "disabled": false,
    "size": "5"
  },
  {
    "name": "leprechaun",
    "proto": "human",
    "disabled": false,
    "size": "5"
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
    "disabled": false,
    "tags": "readable",
    "anim": "0",
    "tang": "0",
    "possessable": "2",
    "partOf": "null",
    "size": "0",
    "count": "true"
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
    "disabled": false,
    "tags": "event,-",
    "possessable": "6",
    "posr": "number:noun.number",
    "partOf": "null",
    "count": "true"
  },
  {
    "name": "light1",
    "proto": "light",
    "disabled": false,
    "tags": "device,-",
    "tang": "2",
    "possessable": "1",
    "partOf": "null",
    "size": "4",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "machine",
    "disabled": false,
    "tags": "machine",
    "anim": "1",
    "tang": "2",
    "possessable": "4",
    "partOf": "null",
    "size": "4,5,6,7",
    "count": "true"
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
    "disabled": false,
    "tags": "solid,liquid",
    "anim": "0",
    "tang": "2",
    "possessable": "2",
    "partOf": "null",
    "size": "4",
    "count": "true"
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
    "disabled": false,
    "tags": "stimulus, feelable",
    "anim": "0",
    "tang": "1",
    "possessable": "1",
    "partOf": "null",
    "size": "0",
    "count": "true"
  },
  {
    "name": "snowman",
    "disabled": false,
    "tags": "object, hasHeight",
    "anim": "0,3",
    "tang": "2",
    "possessable": "2",
    "partOf": "null",
    "size": "6",
    "count": "true",
    "inflections": "pl:snowmen"
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
    "disabled": false,
    "tags": "weather, event, obstacle",
    "anim": "0",
    "tang": "1",
    "possessable": "1",
    "partOf": "null",
    "size": "9",
    "count": "true"
  },
  {
    "name": "team",
    "disabled": false,
    "tags": "organization",
    "anim": "3",
    "tang": "1",
    "possessable": "3",
    "partOf": "null",
    "size": "0",
    "unique": "0",
    "count": "true",
    "complements": "(20 of N{number:pl;person:3;tags:person&!appellation})"
  },
  {
    "name": "syndicate",
    "proto": "team",
    "disabled": false
  },
  {
    "name": "group1",
    "proto": "team",
    "disabled": false
  },
  {
    "name": "team1",
    "proto": "team",
    "disabled": false,
    "partOf": "null",
    "precomp": "DP{tags:game}",
    "complements": "--"
  },
  {
    "name": "tendency",
    "prohibitions": "number:pl",
    "disabled": false,
    "tags": "tendency",
    "anim": "0",
    "tang": "0",
    "possessable": "7",
    "partOf": "null",
    "size": "0",
    "count": "true",
    "complements": "(40 INF_PHRASE   | 25 toward GP)"
  },
  {
    "name": "tendency2",
    "proto": "tendency",
    "prohibitions": "--",
    "disabled": false,
    "possessable": "7",
    "complements": "--"
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
    "disabled": false,
    "tags": "-",
    "partOf": "null",
    "count": "true"
  },
  {
    "name": "zombie",
    "disabled": false,
    "tags": "hasHeight, creature, mobile",
    "anim": "2",
    "tang": "2",
    "possessable": "3",
    "partOf": "null",
    "size": "6",
    "count": "true"
  },
  {
    "name": "tendency1",
    "proto": "tendency",
    "prohibitions": "case: nom",
    "disabled": false,
    "possessable": "0",
    "complements": "of INF_CLAUSE"
  },
  {
    "name": "citizen.1",
    "proto": "citizen",
    "prohibitions": "--",
    "disabled": false,
    "possessable": "0",
    "partOf": "null"
  },
  {
    "name": "winner",
    "proto": "human",
    "prohibitions": "def:indef",
    "disabled": false,
    "possessable": "0",
    "posr": "tags:contest",
    "partOf": "null"
  },
  {
    "name": "goblin",
    "proto": "human"
  },
  {
    "name": "dwarf",
    "proto": "human",
    "disabled": false,
    "inflections": "pl:dwarves"
  },
  {
    "name": "hobbit",
    "proto": "human",
    "disabled": false,
    "size": "5"
  },
  {
    "name": "leper",
    "proto": "human",
    "disabled": false
  },
  {
    "name": "staff",
    "proto": "choir",
    "prohibitions": "number:pl,def:indef",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "tribe",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
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
    "prohibitions": "number:sg",
    "disabled": false,
    "possessable": "7",
    "posr": "tags:territory",
    "partOf": "null"
  },
  {
    "name": "^unicorn",
    "proto": "dog",
    "disabled": false,
    "size": "6,7"
  },
  {
    "name": "Abe Lincoln",
    "proto": "Batman"
  },
  {
    "name": "airplane",
    "proto": "machine",
    "disabled": false,
    "tags": "airVehicle, passengerVehicle, elevated",
    "size": "8"
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
    "proto": "human",
    "disabled": false,
    "partOf": "null",
    "size": "5,6,7"
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
    "disabled": false,
    "partOf": "null",
    "inflections": "pl: bacteria"
  },
  {
    "name": "anaconda",
    "proto": "dog"
  },
  {
    "name": "army",
    "proto": "team",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Arnold Schwarzenegger",
    "proto": "Batman",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "article",
    "proto": "book",
    "tang": 1
  },
  {
    "name": "Aunt Jemima",
    "proto": "Cinderella",
    "disabled": false
  },
  {
    "name": "baboon",
    "proto": "dog",
    "disabled": false
  },
  {
    "name": "bag",
    "disabled": false,
    "tags": "vessel",
    "anim": "0",
    "tang": "2",
    "possessable": "3",
    "partOf": "null",
    "size": "4,5,6,7",
    "count": "true",
    "complements": "(90 of N{(tags: item; (number:pl | count:false); anim:<2; unique:0; size:<noun.size | tags:substance) } )"
  },
  {
    "name": "banana",
    "proto": "apple",
    "disabled": false
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
    "disabled": false,
    "tags": "waterVehicle, passengerVehicle, motorVehicle",
    "size": "7,8"
  },
  {
    "name": "boat1",
    "disabled": false,
    "tags": "waterVehicle",
    "anim": "0",
    "tang": "2",
    "possessable": "5",
    "partOf": "null",
    "size": "6,7",
    "count": "true"
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
    "disabled": false,
    "tags": "structure"
  },
  {
    "name": "container",
    "proto": "box",
    "disabled": false,
    "size": "3,4,5,6,7,8"
  },
  {
    "name": "brother",
    "proto": "father",
    "disabled": false
  },
  {
    "name": "bug",
    "proto": "dog",
    "disabled": false,
    "tags": "bug, -",
    "anim": "1.5",
    "partOf": "null",
    "size": "2,3"
  },
  {
    "name": "Bugs Bunny",
    "proto": "Batman"
  },
  {
    "name": "bus",
    "proto": "car",
    "disabled": false,
    "tags": "passengerVehicle",
    "size": "7"
  },
  {
    "name": "car",
    "proto": "machine",
    "disabled": false,
    "tags": "motorVehicle, groundVehicle, container",
    "size": "7"
  },
  {
    "name": "lawnmower",
    "proto": "car",
    "disabled": false,
    "size": "5,6"
  },
  {
    "name": "centaur",
    "proto": "human",
    "disabled": false,
    "partOf": "null",
    "size": "7"
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
    "disabled": false,
    "possessable": "5",
    "posr": "tags:creature",
    "partOf": "null",
    "size": "5",
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
    "proto": "dog",
    "disabled": false
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
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "company",
    "proto": "team",
    "disabled": false,
    "tags": "company",
    "partOf": "null",
    "complements": "--"
  },
  {
    "name": "department",
    "proto": "company",
    "prohibitions": "number:pl",
    "disabled": false,
    "precomp": "(N{tags:enterprise} | N{proper:false;anim:<3;number:sg} | N{tags:activity} )"
  },
  {
    "name": "corporation",
    "proto": "company",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "business",
    "proto": "company",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "agency",
    "proto": "company",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "organization",
    "proto": "company",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "firm",
    "proto": "company",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "IBM",
    "proto": "company",
    "disabled": false,
    "partOf": "null",
    "unique": "2",
    "count": "false"
  },
  {
    "name": "Adidas",
    "proto": "IBM",
    "disabled": false
  },
  {
    "name": "Nike",
    "proto": "IBM",
    "disabled": false
  },
  {
    "name": "Volkswagen",
    "proto": "IBM",
    "disabled": false
  },
  {
    "name": "Nestlé",
    "proto": "IBM"
  },
  {
    "name": "McDonald's",
    "proto": "IBM",
    "disabled": false
  },
  {
    "name": "Apple",
    "proto": "IBM"
  },
  {
    "name": "Microsoft",
    "proto": "IBM",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Exxon Mobil",
    "proto": "IBM"
  },
  {
    "name": "Google",
    "proto": "IBM"
  },
  {
    "name": "Amazon",
    "proto": "IBM",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "computer",
    "proto": "machine",
    "disabled": false,
    "anim": "0"
  },
  {
    "name": "conductor",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "conquistador",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "contraption",
    "proto": "machine",
    "disabled": false
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
    "disabled": false,
    "possessable": "0",
    "partOf": "null"
  },
  {
    "name": "crowd",
    "proto": "team",
    "disabled": false,
    "tags": "collective, -",
    "partOf": "null",
    "size": "7,8"
  },
  {
    "name": "mob",
    "proto": "crowd",
    "disabled": false
  },
  {
    "name": "customer",
    "proto": "human",
    "disabled": false,
    "posr": "tags:person|company",
    "partOf": "null"
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
    "disabled": false,
    "tags": "-, collective,information, visible",
    "tang": "1",
    "partOf": "null"
  },
  {
    "name": "death",
    "proto": "life",
    "disabled": false,
    "partOf": "null",
    "complements": "--",
    "inflections": "pl:deaths"
  },
  {
    "name": "decision",
    "disabled": false,
    "tags": "-",
    "anim": "0",
    "tang": "0",
    "possessable": "6",
    "partOf": "null",
    "size": "0",
    "count": "true"
  },
  {
    "name": "device",
    "disabled": false,
    "tags": "device",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "size": "4",
    "count": "true"
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
    "disabled": false,
    "possessable": "5",
    "posr": "tags:person",
    "partOf": "null"
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
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "earthquake",
    "proto": "disaster",
    "tags": "event,-"
  },
  {
    "name": "elf",
    "proto": "human",
    "disabled": false,
    "partOf": "null",
    "inflections": "pl:elves"
  },
  {
    "name": "Elmer Fudd",
    "proto": "Batman"
  },
  {
    "name": "enemy",
    "proto": "human",
    "disabled": false,
    "possessable": "6",
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "fairy",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "father",
    "proto": "boss",
    "disabled": false,
    "partOf": "null",
    "gender": "m"
  },
  {
    "name": "Ferrari",
    "proto": "car"
  },
  {
    "name": "fish",
    "proto": "bug",
    "disabled": false,
    "partOf": "null",
    "size": "4,5,6",
    "inflections": "pl:fish"
  },
  {
    "name": "fishing",
    "proto": "dancing",
    "disabled": false
  },
  {
    "name": "flotsam and jetsam",
    "proto": "garbage"
  },
  {
    "name": "food",
    "proto": "garbage",
    "disabled": false,
    "tags": "edible",
    "partOf": "null"
  },
  {
    "name": "furniture",
    "disabled": false,
    "tags": "collective, furniture",
    "anim": "0",
    "tang": "2",
    "possessable": "5",
    "partOf": "null",
    "size": "6,7",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "germaphobe",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "giant squid",
    "proto": "fish",
    "disabled": false,
    "partOf": "null",
    "size": "7",
    "inflections": "--"
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
    "proto": "car",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "gorilla",
    "proto": "dog",
    "disabled": false
  },
  {
    "name": "grandfather",
    "proto": "father",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "grasshopper",
    "proto": "bug",
    "disabled": false
  },
  {
    "name": "great white shark",
    "proto": "dog",
    "size": 7,
    "tags": "waterAnimal"
  },
  {
    "name": "gymnastics",
    "proto": "dancing",
    "disabled": false
  },
  {
    "name": "hamster",
    "proto": "dog",
    "size": 4
  },
  {
    "name": "Harlem Globetrotter",
    "proto": "Canuck",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Illuminatus",
    "proto": "Canuck",
    "inflections": "pl:Illuminati"
  },
  {
    "name": "infant",
    "proto": "human",
    "disabled": false,
    "anim": "2",
    "partOf": "null",
    "size": "4"
  },
  {
    "name": "baby",
    "proto": "infant",
    "disabled": false
  },
  {
    "name": "janitor",
    "proto": "human",
    "disabled": false,
    "possessable": "3",
    "posr": "tags:building",
    "partOf": "null"
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
    "proto": "the Iliad"
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
    "disabled": false,
    "possessable": "3",
    "partOf": "null",
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
    "disabled": false,
    "tang": "1,2",
    "possessable": "5",
    "partOf": "null"
  },
  {
    "name": "minotaur",
    "proto": "human",
    "disabled": false,
    "anim": "2,3",
    "partOf": "null"
  },
  {
    "name": "minion",
    "proto": "human",
    "disabled": false,
    "possessable": "6",
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "missionary",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "money",
    "proto": "garbage",
    "disabled": false,
    "posr": "tags:person|organization|territory",
    "partOf": "null"
  },
  {
    "name": "monsoon",
    "proto": "storm",
    "disabled": false,
    "partOf": "null"
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
    "name": "boss",
    "proto": "human",
    "disabled": false,
    "possessable": "8",
    "posr": "anim:>1",
    "partOf": "null"
  },
  {
    "name": "mother",
    "proto": "boss",
    "disabled": false,
    "gender": "f"
  },
  {
    "name": "grandmother",
    "proto": "mother",
    "disabled": false
  },
  {
    "name": "aunt",
    "proto": "mother",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Mr. Magoo",
    "proto": "Batman"
  },
  {
    "name": "neighbor",
    "proto": "human",
    "disabled": false,
    "possessable": "9",
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "visitor",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "guest",
    "proto": "human",
    "disabled": false,
    "possessable": "6",
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "nerd",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "geek",
    "proto": "human"
  },
  {
    "name": "traitor",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "villain",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "hero",
    "proto": "human",
    "disabled": false,
    "posr": "anim:3",
    "partOf": "null",
    "inflections": "pl:heroes"
  },
  {
    "name": "loser",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "slob",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "hoodlum",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "gangster",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "artist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "accountant",
    "proto": "human",
    "disabled": false,
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "anarchist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "waitress",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "dancer",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "singer",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "playwright",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "director",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "manager",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "lawyer",
    "proto": "human",
    "disabled": false,
    "possessable": "5",
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "lumberjack",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "soldier",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "linguist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "professor",
    "proto": "human",
    "disabled": false,
    "posr": "tags:person",
    "partOf": "null"
  },
  {
    "name": "scientist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "footballer",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "player",
    "proto": "human",
    "disabled": false,
    "partOf": "null",
    "precomp": "DP{tags:game}"
  },
  {
    "name": "coach",
    "proto": "human",
    "disabled": false,
    "partOf": "null",
    "precomp": "(88 DP{tags:sport})"
  },
  {
    "name": "coach1",
    "proto": "human",
    "disabled": false,
    "possessable": "8",
    "posr": "name: team1, pronominal:false",
    "partOf": "null"
  },
  {
    "name": "hairdresser",
    "proto": "human",
    "disabled": false,
    "posr": "tags:person",
    "partOf": "null"
  },
  {
    "name": "supermodel",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "pianist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "spy",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "ambassador",
    "proto": "human",
    "disabled": false,
    "partOf": "null",
    "complements": "(of N{tags:country})"
  },
  {
    "name": "carpenter",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "blacksmith",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "maid",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "mechanic",
    "proto": "human",
    "disabled": false,
    "posr": "tags:person",
    "partOf": "null"
  },
  {
    "name": "musician",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "prisoner",
    "proto": "human",
    "disabled": false,
    "possessable": "4",
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "slave",
    "proto": "human",
    "disabled": false,
    "possessable": "4",
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "pilot",
    "proto": "human",
    "disabled": false,
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "farmer",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "peasant",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "servant",
    "proto": "human",
    "disabled": false,
    "possessable": "4",
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "mayor",
    "proto": "human",
    "disabled": false,
    "possessable": "4",
    "posr": "tags:city",
    "partOf": "null"
  },
  {
    "name": "mayor.1",
    "proto": "mayor",
    "disabled": false,
    "possessable": "0",
    "posr": "--",
    "complements": "(of DP{tags:city})"
  },
  {
    "name": "sheriff",
    "proto": "mayor",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "cowboy",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "gynaecologist",
    "proto": "doctor",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "dentist",
    "proto": "doctor",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "detective",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "investigator",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "fugitive",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "hostage",
    "proto": "human",
    "disabled": false,
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "witness",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "defendant",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "suspect",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "informant",
    "proto": "human",
    "disabled": false,
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "florist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "beekeeper",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "passenger",
    "proto": "human",
    "disabled": false,
    "possessable": "3",
    "posr": "tags:person",
    "partOf": "null"
  },
  {
    "name": "patient",
    "proto": "human",
    "disabled": false,
    "possessable": "3",
    "posr": "name:doctor, orsimilar:true",
    "partOf": "null"
  },
  {
    "name": "taxidermist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "salesman",
    "proto": "human",
    "disabled": false,
    "partOf": "null",
    "precomp": "(55 N{tags:artifact, number:sg, unique: 0})",
    "inflections": "pl: salesmen"
  },
  {
    "name": "actor",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "assistant",
    "proto": "human",
    "disabled": false,
    "posr": "anim:3",
    "partOf": "null"
  },
  {
    "name": "priest",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "shepherd",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "magician",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "guard",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "captain",
    "proto": "human",
    "disabled": false,
    "posr": "tags:waterVehicle",
    "partOf": "null"
  },
  {
    "name": "clown",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "witch doctor",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "assassin",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "minstrel",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "wizard",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "druid",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "ninja",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "monk",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "nun",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "prophet",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Nerf-herder",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "stormtrooper",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Jedi",
    "proto": "human",
    "disabled": false,
    "partOf": "null",
    "inflections": "pl:Jedi"
  },
  {
    "name": "Jedi master",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Jedi warrior",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Sith lord",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "introvert",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "extrovert",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "tourist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "pedestrian",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "civilian",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
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
    "proto": "London",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Gotham",
    "proto": "London",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "New York",
    "proto": "London",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Timbuktu",
    "proto": "London"
  },
  {
    "name": "Langley",
    "proto": "London",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Helsinki",
    "proto": "London"
  },
  {
    "name": "El Paso",
    "proto": "London",
    "disabled": false,
    "partOf": "null"
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
    "proto": "Nile",
    "disabled": false,
    "partOf": "null",
    "complements": "(River)"
  },
  {
    "name": "Amazon1",
    "proto": "Nile",
    "disabled": false,
    "partOf": "null",
    "complements": "(River)"
  },
  {
    "name": "Thames",
    "proto": "Nile",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Yangtze",
    "proto": "Nile",
    "disabled": false,
    "partOf": "null",
    "complements": "(River)"
  },
  {
    "name": "Saint Lawrence",
    "proto": "Nile",
    "disabled": false,
    "complements": "(River)"
  },
  {
    "name": "North Pole",
    "disabled": false,
    "tags": "point, site",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "novel",
    "proto": "book",
    "possessable": 1
  },
  {
    "name": "ogre",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "parade",
    "proto": "concert",
    "disabled": false
  },
  {
    "name": "parrot",
    "proto": "bird",
    "tags": "airAnimal"
  },
  {
    "name": "person",
    "proto": "human",
    "disabled": false,
    "possessable": "1",
    "partOf": "null",
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
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "platypus",
    "proto": "dog",
    "disabled": false,
    "inflections": "pl:platypi"
  },
  {
    "name": "polygamist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "porcupine",
    "proto": "dog"
  },
  {
    "name": "prediction",
    "proto": "statement",
    "disabled": false
  },
  {
    "name": "pterodactyl",
    "proto": "dog",
    "size": 7
  },
  {
    "name": "queen",
    "proto": "human",
    "disabled": false,
    "posr": "tags:territory&!city|collective&person",
    "partOf": "null"
  },
  {
    "name": "queen.1",
    "proto": "queen",
    "prohibitions": "def:indef",
    "disabled": false,
    "posr": "--",
    "partOf": "null",
    "unique": "1",
    "complements": "of DP{tags:territory&!city}"
  },
  {
    "name": "queen1",
    "proto": "queen",
    "prohibitions": "def:indef,number:pl",
    "disabled": false,
    "partOf": "null",
    "complements": "(60  of the N{anim:>1; number:pl;}  |40  of N{(67 number:pl; |33 count:false;) tags: !feature} )"
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
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "prime minister",
    "proto": "queen",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "president",
    "proto": "queen",
    "gender": "--"
  },
  {
    "name": "prince",
    "proto": "king",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "princess",
    "proto": "queen",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "duchess",
    "proto": "queen",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "earl",
    "proto": "king"
  },
  {
    "name": "chief",
    "proto": "king",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "governor",
    "proto": "president",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Queen Elizabeth",
    "proto": "Cinderella",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "rabble-rouser",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "refrigerator",
    "proto": "computer",
    "disabled": false,
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
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Himalaya",
    "proto": "Alp"
  },
  {
    "name": "saint",
    "proto": "human",
    "disabled": false,
    "possessable": "2",
    "partOf": "null"
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
    "proto": "mother",
    "disabled": false
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
    "proto": "dancing",
    "disabled": false
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
    "proto": "Japan",
    "disabled": false,
    "partOf": "null"
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
    "name": "spider",
    "proto": "bug",
    "disabled": false,
    "partOf": "null"
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
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "tank",
    "proto": "car"
  },
  {
    "name": "the Bible",
    "proto": "the Iliad"
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
    "disabled": false,
    "tags": "phenomenon, occurrence"
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
    "disabled": false,
    "possessable": "3",
    "posr": "anim:>1",
    "partOf": "null"
  },
  {
    "name": "War and Peace",
    "proto": "the Iliad"
  },
  {
    "name": "watermelon",
    "proto": "apple",
    "disabled": false,
    "size": "5"
  },
  {
    "name": "brocolli",
    "proto": "apple"
  },
  {
    "name": "cabbage",
    "proto": "apple"
  },
  {
    "name": "potato",
    "proto": "apple"
  },
  {
    "name": "carrot",
    "proto": "apple",
    "disabled": false
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
    "proto": "human",
    "disabled": false,
    "partOf": "null"
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
    "disabled": false,
    "possessable": "2",
    "partOf": "null"
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
    "proto": "situation",
    "disabled": false
  },
  {
    "name": "puzzle",
    "proto": "problem",
    "disabled": false
  },
  {
    "name": "dilemma",
    "proto": "situation",
    "disabled": false,
    "tags": "difficulty"
  },
  {
    "name": "issue",
    "proto": "problem",
    "disabled": false
  },
  {
    "name": "equation",
    "proto": "problem",
    "disabled": false
  },
  {
    "name": "riddle",
    "proto": "question",
    "disabled": false,
    "possessable": "2"
  },
  {
    "name": "assignment",
    "proto": "task",
    "disabled": false
  },
  {
    "name": "mission",
    "proto": "task",
    "disabled": false
  },
  {
    "name": "job",
    "proto": "task",
    "disabled": false,
    "tags": "obligation"
  },
  {
    "name": "quest",
    "proto": "task",
    "disabled": false
  },
  {
    "name": "gang",
    "proto": "team",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "cartel",
    "proto": "choir",
    "disabled": false,
    "partOf": "null",
    "precomp": "(drug)",
    "complements": "--"
  },
  {
    "name": "guild",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "platoon",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "posse",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "class",
    "proto": "choir",
    "disabled": false,
    "tags": "occasion",
    "partOf": "null"
  },
  {
    "name": "congregation",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "think tank",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "synod",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "secret society",
    "proto": "choir"
  },
  {
    "name": "conclave",
    "proto": "choir",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "cadre",
    "proto": "team",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "government",
    "proto": "choir",
    "disabled": false,
    "posr": "tags:territory",
    "partOf": "null"
  },
  {
    "name": "FBI",
    "proto": "choir",
    "disabled": false,
    "partOf": "null",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "CIA",
    "proto": "FBI",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "MI^6",
    "proto": "FBI",
    "disabled": false,
    "partOf": "null",
    "unique": "2"
  },
  {
    "name": "Jedi Council",
    "proto": "FBI",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "UN",
    "proto": "FBI",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Supreme Court",
    "proto": "FBI",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Mafia",
    "proto": "FBI",
    "disabled": false,
    "partOf": "null",
    "precomp": "(30 Russian)"
  },
  {
    "name": "choir",
    "proto": "team",
    "disabled": false,
    "partOf": "null",
    "complements": "--"
  },
  {
    "name": "cult",
    "proto": "choir",
    "disabled": false
  },
  {
    "name": "band",
    "proto": "team",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "herd",
    "proto": "team",
    "disabled": false,
    "tags": "collective,-",
    "anim": "2",
    "partOf": "null",
    "size": "8,9",
    "complements": "(60 of N{number:pl;anim:2;tags:!collective})"
  },
  {
    "name": "luggage",
    "proto": "furniture",
    "disabled": false,
    "tags": "-furniture",
    "partOf": "null",
    "size": "5"
  },
  {
    "name": "flock",
    "proto": "herd",
    "disabled": false,
    "partOf": "null",
    "size": "8,9",
    "complements": "(60 of N{number:pl;tags:bird})"
  },
  {
    "name": "plan",
    "proto": "project",
    "disabled": false,
    "complements": "(30 INF_PHRASE{volition:true})"
  },
  {
    "name": "project",
    "proto": "strategy",
    "disabled": false,
    "tags": "undertaking",
    "complements": "--"
  },
  {
    "name": "experiment",
    "proto": "project",
    "disabled": false
  },
  {
    "name": "investigation",
    "proto": "project",
    "disabled": false,
    "complements": "((into|of) (ACTION|NP{tags:state|happening}))"
  },
  {
    "name": "scheme",
    "proto": "strategy",
    "disabled": false
  },
  {
    "name": "work",
    "proto": "dancing",
    "disabled": false,
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
    "proto": "government",
    "disabled": false,
    "partOf": "null",
    "unique": "0"
  },
  {
    "name": "toil",
    "proto": "work.1",
    "disabled": false,
    "tags": "difficulty"
  },
  {
    "name": "gambling",
    "proto": "dancing",
    "disabled": false
  },
  {
    "name": "denizen",
    "proto": "citizen",
    "disabled": false,
    "posr": "tags:place",
    "partOf": "null"
  },
  {
    "name": "author",
    "proto": "human",
    "disabled": false,
    "possessable": "4",
    "posr": "name:book,orsimilar:true",
    "partOf": "null"
  },
  {
    "name": "parking lot",
    "proto": "forest",
    "disabled": false,
    "partOf": "null",
    "size": "8"
  },
  {
    "name": "beach",
    "disabled": false,
    "tags": "field",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "size": "7,8",
    "count": "true"
  },
  {
    "name": "park",
    "proto": "forest",
    "disabled": false,
    "size": "8,9"
  },
  {
    "name": "ex-girlfriend",
    "proto": "human",
    "disabled": false,
    "possessable": "9",
    "posr": "anim:3,gender:!f",
    "partOf": "null"
  },
  {
    "name": "friend",
    "proto": "human",
    "disabled": false,
    "possessable": "9",
    "posr": "tags:person",
    "partOf": "null"
  },
  {
    "name": "stranger",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "foreigner",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "immigrant",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "owner",
    "proto": "human",
    "disabled": false,
    "possessable": "8",
    "posr": "anim:<3,tags:object",
    "partOf": "null"
  },
  {
    "name": "owner1",
    "proto": "human",
    "disabled": false,
    "partOf": "null",
    "complements": "(of DP{tags:item|animal|building|organization;def:def;partial:false})"
  },
  {
    "name": "White House",
    "proto": "Taj Mahal",
    "disabled": false
  },
  {
    "name": "stadium",
    "proto": "house",
    "disabled": false
  },
  {
    "name": "Empire State Building",
    "proto": "Taj Mahal",
    "disabled": false,
    "partOf": "null"
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
    "disabled": false,
    "size": "6,7,8"
  },
  {
    "name": "spoon",
    "proto": "wrench",
    "disabled": false,
    "tags": "instrument",
    "partOf": "null",
    "size": "4"
  },
  {
    "name": "knife",
    "proto": "spoon",
    "disabled": false,
    "partOf": "null",
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
    "disabled": false,
    "partOf": "null",
    "size": "5"
  },
  {
    "name": "witch",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "floor",
    "disabled": false,
    "tags": "surface, grounded, structure",
    "anim": "0",
    "tang": "2",
    "possessable": "2",
    "partOf": "null",
    "size": "8",
    "count": "true"
  },
  {
    "name": "street",
    "proto": "road",
    "disabled": false,
    "tags": "surface, grounded"
  },
  {
    "name": "sidewalk",
    "proto": "street"
  },
  {
    "name": "ice",
    "proto": "floor",
    "prohibitions": "number:pl, quantified:true, def:indef",
    "disabled": false,
    "partOf": "null",
    "count": "false"
  },
  {
    "name": "ice1",
    "disabled": false,
    "tags": "solid",
    "anim": "0",
    "tang": "2",
    "possessable": "2",
    "partOf": "null",
    "size": "0",
    "count": "false"
  },
  {
    "name": "lawn",
    "proto": "floor",
    "disabled": false,
    "tags": "-, field"
  },
  {
    "name": "yard",
    "proto": "lawn",
    "disabled": false
  },
  {
    "name": "air",
    "disabled": false,
    "tags": "gas",
    "anim": "0",
    "tang": "1",
    "possessable": "1",
    "partOf": "null",
    "size": "0",
    "count": "false"
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
    "proto": "sand",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "bark mulch",
    "proto": "sand"
  },
  {
    "name": "Lego",
    "proto": "sand",
    "disabled": false,
    "tags": "artifact",
    "partOf": "null"
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
    "disabled": false,
    "tags": "surface, structure, vertical",
    "anim": "0",
    "tang": "2",
    "possessable": "3",
    "partOf": "null",
    "size": "7,8",
    "count": "true"
  },
  {
    "name": "fence",
    "proto": "wall",
    "disabled": false
  },
  {
    "name": "bridge",
    "proto": "street",
    "disabled": false,
    "tags": "structure, bridge, elevated"
  },
  {
    "name": "overpass",
    "proto": "bridge"
  },
  {
    "name": "lake",
    "disabled": false,
    "tags": "openWater",
    "anim": "0",
    "tang": "1",
    "possessable": "4",
    "posr": "tags:country|continent",
    "partOf": "null",
    "size": "8,9",
    "count": "true"
  },
  {
    "name": "lagoon",
    "proto": "lake",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "ocean",
    "proto": "lake",
    "disabled": false,
    "partOf": "null",
    "size": "13",
    "unique": "1"
  },
  {
    "name": "sea",
    "proto": "ocean",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Ocean",
    "proto": "ocean",
    "disabled": false,
    "partOf": "null",
    "unique": "1",
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
    "proto": "Alabama",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Ontario",
    "proto": "Alabama"
  },
  {
    "name": "California",
    "proto": "Alabama",
    "disabled": false,
    "partOf": "null"
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
    "disabled": false,
    "tags": "-,land,surface",
    "size": "8,9,10"
  },
  {
    "name": "planet",
    "disabled": false,
    "tags": "land,surface",
    "anim": "0",
    "tang": "1",
    "possessable": "2",
    "partOf": "null",
    "size": "14",
    "count": "true"
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
    "proto": "planet",
    "disabled": false
  },
  {
    "name": "Earth",
    "proto": "planet",
    "disabled": false,
    "partOf": "null",
    "unique": "1",
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
    "proto": "Mars",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Krypton",
    "proto": "Mars"
  },
  {
    "name": "labyrinth",
    "disabled": false,
    "tags": "area,structure",
    "anim": "0",
    "tang": "1",
    "possessable": "3",
    "partOf": "null",
    "size": "8",
    "count": "true"
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
    "disabled": false,
    "tags": "energy, feelable",
    "anim": "0",
    "tang": "1",
    "possessable": "2",
    "partOf": "null",
    "size": "0",
    "count": "false"
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
    "prohibitions": "number:sg",
    "disabled": false,
    "tags": "incline, structure, path",
    "anim": "0",
    "tang": "2",
    "possessable": "3",
    "partOf": "null",
    "size": "6,7,8",
    "count": "true"
  },
  {
    "name": "stairway",
    "proto": "stair",
    "prohibitions": "--",
    "disabled": false
  },
  {
    "name": "entrance",
    "disabled": false,
    "tags": "opening",
    "anim": "0",
    "tang": "2",
    "possessable": "3",
    "partOf": "null",
    "size": "4,5,6,7,8",
    "count": "true"
  },
  {
    "name": "exit",
    "proto": "entrance"
  },
  {
    "name": "doorway",
    "proto": "entrance",
    "disabled": false,
    "partOf": "null",
    "size": "6,7"
  },
  {
    "name": "gate",
    "proto": "entrance",
    "disabled": false,
    "tags": "construction, breakable, door",
    "partOf": "vertical&surface&structure",
    "size": "6,7"
  },
  {
    "name": "window",
    "proto": "gate",
    "disabled": false,
    "tags": "elevated, feature",
    "size": "5,6,7"
  },
  {
    "name": "cloud",
    "disabled": false,
    "tags": "thing, elevated, obstacle, gas",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "size": "7,8",
    "count": "true"
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
    "disabled": false,
    "tags": "volume, phenomenon, audible",
    "anim": "1",
    "tang": "2",
    "possessable": "2",
    "partOf": "null",
    "size": "4,5,6,7,8",
    "count": "true"
  },
  {
    "name": "grass",
    "disabled": false,
    "tags": "aggregate",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "size": "0",
    "count": "false"
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
    "proto": "forest",
    "disabled": false
  },
  {
    "name": "field1",
    "proto": "field",
    "disabled": false,
    "tags": "-, field",
    "size": "8",
    "precomp": "(10 soccer |15 football |7 rugby |9 baseball |10 sports |6 playing)"
  },
  {
    "name": "property",
    "proto": "field",
    "prohibitions": "def: indef",
    "disabled": false,
    "tags": "-, realEstate, hasFront",
    "possessable": "6",
    "size": "8,9,10",
    "precomp": "--"
  },
  {
    "name": "land",
    "proto": "field",
    "disabled": false,
    "tags": "field, realEstate",
    "possessable": "4",
    "size": "8,9,10"
  },
  {
    "name": "estate",
    "proto": "property",
    "disabled": false
  },
  {
    "name": "court",
    "proto": "field1",
    "disabled": false,
    "size": "7,8",
    "precomp": "(20 tennis |20 basketball |10 squash |20 volleyball)"
  },
  {
    "name": "farm",
    "disabled": false,
    "tags": "field, realEstate",
    "anim": "0",
    "tang": "1",
    "possessable": "5",
    "posr": "tags: person|organization",
    "partOf": "null",
    "size": "8",
    "count": "true",
    "precomp": "--"
  },
  {
    "name": "ranch",
    "proto": "farm",
    "disabled": false,
    "size": "8,9"
  },
  {
    "name": "space station",
    "proto": "farm",
    "disabled": false,
    "tags": "building",
    "partOf": "null"
  },
  {
    "name": "Death Star",
    "proto": "space station",
    "disabled": false,
    "size": "10,11",
    "unique": "1",
    "count": "false"
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
    "disabled": false,
    "tags": "edge, position",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "count": "true",
    "complements": "(85 of NP{def:def;tags:bounded|surface&delimited})"
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
    "disabled": false,
    "tags": "path, fixed, site, grounded, surface",
    "anim": "0",
    "tang": "2",
    "possessable": "1",
    "partOf": "null",
    "size": "8",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "shortcut",
    "proto": "road",
    "disabled": false
  },
  {
    "name": "trail",
    "proto": "road",
    "disabled": false,
    "size": "7"
  },
  {
    "name": "path",
    "proto": "trail",
    "disabled": false
  },
  {
    "name": "train track",
    "proto": "road",
    "prohibitions": "number:sg",
    "disabled": false
  },
  {
    "name": "alley",
    "proto": "road",
    "disabled": false,
    "tags": "-, passage"
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
    "disabled": false,
    "tags": "passage, structure",
    "anim": "0",
    "tang": "2",
    "possessable": "2",
    "partOf": "null",
    "size": "7,8",
    "count": "true"
  },
  {
    "name": "hallway",
    "proto": "tunnel",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "hill",
    "disabled": false,
    "tags": "prominence, incline",
    "anim": "0",
    "tang": "2",
    "possessable": "1",
    "partOf": "null",
    "size": "8",
    "count": "true"
  },
  {
    "name": "mountain",
    "proto": "hill",
    "disabled": false,
    "partOf": "null",
    "size": "9"
  },
  {
    "name": "Mount Everest",
    "proto": "mountain",
    "disabled": false,
    "partOf": "null",
    "unique": "2",
    "count": "false"
  },
  {
    "name": "Matterhorn",
    "proto": "Mount Everest",
    "disabled": false,
    "partOf": "null",
    "unique": "1"
  },
  {
    "name": "valley",
    "disabled": false,
    "tags": "depression, path",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "size": "9,10",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "crater",
    "proto": "mountain",
    "disabled": false,
    "tags": "depression",
    "partOf": "null"
  },
  {
    "name": "volcano",
    "proto": "crater",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Eyjafjallajokull",
    "proto": "volcano",
    "disabled": false,
    "unique": "2",
    "count": "false"
  },
  {
    "name": "Krakatoa",
    "proto": "Eyjafjallajokull",
    "disabled": false
  },
  {
    "name": "Mt^. Saint Helens",
    "proto": "Eyjafjallajokull",
    "disabled": false
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
    "disabled": false,
    "tags": "depression",
    "size": "9,10"
  },
  {
    "name": "Grand Canyon",
    "proto": "canyon",
    "disabled": false,
    "partOf": "null",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "ditch",
    "disabled": false,
    "tags": "depression",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "size": "7",
    "count": "true"
  },
  {
    "name": "wilderness",
    "proto": "forest",
    "disabled": false,
    "size": "9,10,11",
    "count": "false"
  },
  {
    "name": "hole",
    "disabled": false,
    "tags": "passage",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "count": "true"
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
    "disabled": false,
    "tags": "liquid",
    "anim": "0",
    "tang": "2",
    "possessable": "3",
    "partOf": "null",
    "size": "0",
    "count": "false"
  },
  {
    "name": "ink",
    "proto": "water",
    "disabled": false
  },
  {
    "name": "milk",
    "proto": "water",
    "disabled": false,
    "tags": "food",
    "partOf": "null"
  },
  {
    "name": "beer",
    "proto": "juice",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "ale",
    "proto": "beer",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "martini",
    "proto": "beer",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "alcohol",
    "proto": "beer",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "oil",
    "proto": "water",
    "disabled": false,
    "tags": "viscous",
    "partOf": "null"
  },
  {
    "name": "goo",
    "proto": "oil"
  },
  {
    "name": "slime",
    "proto": "oil",
    "disabled": false
  },
  {
    "name": "shampoo",
    "proto": "oil",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "honey",
    "proto": "oil",
    "disabled": false,
    "tags": "food",
    "partOf": "null"
  },
  {
    "name": "juice",
    "proto": "milk",
    "disabled": false,
    "tags": "artifact",
    "partOf": "null"
  },
  {
    "name": "elixir",
    "proto": "juice",
    "disabled": false
  },
  {
    "name": "soup",
    "proto": "juice",
    "disabled": false,
    "count": "true",
    "precomp": "(N{tags:food; number:sg} | ((chicken noodle|tomato|vegetable|French onion|pea|lentil|taco|cream of (broccoli|mushroom))))"
  },
  {
    "name": "stew",
    "proto": "soup",
    "disabled": false,
    "precomp": "--"
  },
  {
    "name": "sauce",
    "proto": "juice",
    "disabled": false,
    "tags": "viscous",
    "precomp": "(spaghetti|tomato|pizza|barbecue|hot|fish|soy|sweet and sour)"
  },
  {
    "name": "gravy",
    "proto": "sauce",
    "disabled": false,
    "tags": "viscous",
    "precomp": "--"
  },
  {
    "name": "salsa",
    "proto": "gravy",
    "disabled": false
  },
  {
    "name": "salad dressing",
    "proto": "gravy",
    "disabled": false
  },
  {
    "name": "syrup",
    "proto": "gravy",
    "disabled": false
  },
  {
    "name": "sauce1",
    "proto": "sauce",
    "disabled": false
  },
  {
    "name": "pop",
    "proto": "juice",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Kool-Aid",
    "proto": "juice",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "punch",
    "proto": "juice",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "vodka",
    "proto": "beer",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "whiskey",
    "proto": "beer"
  },
  {
    "name": "rum",
    "proto": "beer",
    "disabled": false
  },
  {
    "name": "wine",
    "proto": "beer",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "paint",
    "proto": "oil",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "blood",
    "proto": "water",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "lava",
    "proto": "mud",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "drain",
    "proto": "chimney",
    "disabled": false,
    "tags": "-, vertical, passage, fixed",
    "partOf": "null",
    "size": "3,4,5,6"
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
    "disabled": false,
    "tags": "bodyOfWater",
    "partOf": "null"
  },
  {
    "name": "mine shaft",
    "proto": "drain",
    "disabled": false,
    "partOf": "null",
    "size": "7,8"
  },
  {
    "name": "cliff",
    "disabled": false,
    "tags": "edge, vertical, surface, land",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "size": "8,9",
    "count": "true"
  },
  {
    "name": "table",
    "disabled": false,
    "tags": "elevated, surface, table",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "size": "6",
    "count": "true"
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
    "disabled": false,
    "tags": "elevated, surface, structure",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "size": "6",
    "count": "true"
  },
  {
    "name": "sundeck",
    "disabled": false,
    "tags": "elevated, structure, surface",
    "anim": "0",
    "tang": "2",
    "possessable": "3",
    "posr": "tags: building|organization|person",
    "partOf": "null",
    "size": "7,8",
    "unique": "0",
    "count": "true"
  },
  {
    "name": "balcony",
    "proto": "sundeck",
    "disabled": false
  },
  {
    "name": "porch",
    "proto": "sundeck",
    "disabled": false,
    "precomp": "(20 front |20 back)"
  },
  {
    "name": "veranda",
    "proto": "sundeck",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "patio",
    "proto": "sundeck",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "dock",
    "proto": "sundeck",
    "disabled": false
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
    "disabled": false,
    "tags": "grounded, obstacle",
    "partOf": "null",
    "size": "5,6,7"
  },
  {
    "name": "robot",
    "disabled": false,
    "tags": "person,machine",
    "anim": "1,2,3",
    "tang": "2",
    "possessable": "4",
    "partOf": "null",
    "size": "5,6,7",
    "count": "true"
  },
  {
    "name": "droid",
    "proto": "robot",
    "anim": "2,3"
  },
  {
    "name": "hipster",
    "proto": "person",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "coast",
    "disabled": false,
    "tags": "site, perimeter",
    "anim": "0",
    "tang": "2",
    "possessable": "0",
    "partOf": "null",
    "size": "9",
    "count": "true"
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
    "disabled": false,
    "tags": "bodyOfWater",
    "partOf": "null",
    "size": "10",
    "unique": "1",
    "count": "false"
  },
  {
    "name": "room",
    "disabled": false,
    "tags": "room",
    "anim": "0",
    "tang": "1",
    "possessable": "6",
    "partOf": "null",
    "size": "7",
    "count": "true"
  },
  {
    "name": "airlock",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "pantry",
    "proto": "room",
    "disabled": false,
    "size": "6,7"
  },
  {
    "name": "dungeon",
    "proto": "room",
    "disabled": false,
    "size": "7,8"
  },
  {
    "name": "lobby",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "foyer",
    "proto": "lobby",
    "disabled": false
  },
  {
    "name": "parlour",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "ballroom",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "drawing room",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "dining room",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "living room",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "lavatory",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "closet",
    "proto": "pantry",
    "disabled": false
  },
  {
    "name": "kitchen",
    "proto": "room",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "bedroom",
    "proto": "room",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "classroom",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "garage",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "basement",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "attic",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "office",
    "proto": "room",
    "disabled": false
  },
  {
    "name": "office",
    "proto": "house"
  },
  {
    "name": "swamp",
    "proto": "forest",
    "disabled": false,
    "tags": "bodyOfWater"
  },
  {
    "name": "oasis",
    "proto": "forest",
    "disabled": false,
    "partOf": "null",
    "size": "9"
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
    "proto": "tunnel",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "mine",
    "proto": "tunnel",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "well",
    "proto": "tunnel",
    "disabled": false,
    "tags": "vertical",
    "partOf": "null"
  },
  {
    "name": "rope",
    "disabled": false,
    "tags": "path, instrument",
    "anim": "0",
    "tang": "2",
    "possessable": "5",
    "partOf": "null",
    "size": "4"
  },
  {
    "name": "mud",
    "proto": "dirt",
    "disabled": false,
    "tags": "semisolid, viscous, obstacle, grounded, -",
    "partOf": "null"
  },
  {
    "name": "quicksand",
    "proto": "mud",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "center",
    "disabled": false,
    "tags": "position, point",
    "anim": "0",
    "tang": "1",
    "possessable": "0",
    "partOf": "null",
    "unique": "1",
    "count": "false",
    "complements": "(88 of NP{tags:container|area|space;number:noun.number})"
  },
  {
    "name": "top",
    "proto": "center",
    "disabled": false,
    "tags": "elevated",
    "partOf": "null",
    "complements": "(88 of NP{tags:hasHeight&!creature|incline|prominence|path&vertical;number:noun.number})"
  },
  {
    "name": "bottom",
    "proto": "center",
    "disabled": false,
    "tags": "bottom",
    "partOf": "null",
    "complements": "(88 of NP{tags:hasHeight&!creature|structure|volume|line&vertical;number:noun.number})"
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
    "proto": "boat1",
    "disabled": false
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
    "name": "raft",
    "proto": "boat1",
    "disabled": false
  },
  {
    "name": "dinghy",
    "proto": "boat",
    "disabled": false
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
    "disabled": false,
    "tags": "airVehicle",
    "size": "7"
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
    "disabled": false,
    "partOf": "null",
    "inflections": "pl: jelly fish"
  },
  {
    "name": "piranha",
    "proto": "fish",
    "disabled": false,
    "partOf": "null",
    "size": "4",
    "inflections": "--"
  },
  {
    "name": "orca",
    "proto": "whale",
    "disabled": false,
    "partOf": "null",
    "size": "7"
  },
  {
    "name": "whale",
    "proto": "fish",
    "disabled": false,
    "anim": "2",
    "partOf": "null",
    "size": "7,8",
    "inflections": "--"
  },
  {
    "name": "walrus",
    "proto": "whale",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "dolphin",
    "proto": "whale",
    "disabled": false,
    "partOf": "null",
    "size": "6"
  },
  {
    "name": "manatee",
    "proto": "whale",
    "disabled": false,
    "partOf": "null",
    "size": "6.5"
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
    "proto": "dog",
    "disabled": false
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
    "disabled": false,
    "size": "4",
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
    "disabled": false,
    "size": "4"
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
    "disabled": false,
    "size": "3"
  },
  {
    "name": "termite",
    "proto": "bug",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "ant",
    "proto": "bug"
  },
  {
    "name": "caterpillar",
    "proto": "bug",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "spider",
    "proto": "bug"
  },
  {
    "name": "left-wing radical",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "right-wing extremist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "fundamentalist",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "hippie",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
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
    "proto": "human",
    "disabled": false,
    "partOf": "null"
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
    "proto": "human",
    "disabled": false
  },
  {
    "name": "nurse",
    "proto": "human"
  },
  {
    "name": "milkman",
    "proto": "human",
    "disabled": false,
    "inflections": "pl:milkmen"
  },
  {
    "name": "astronaut",
    "proto": "human"
  },
  {
    "name": "drug dealer",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "hobo",
    "proto": "human"
  },
  {
    "name": "troll",
    "proto": "human",
    "disabled": false
  },
  {
    "name": "police officer",
    "proto": "human",
    "disabled": false
  },
  {
    "name": "CEO",
    "proto": "human",
    "disabled": false,
    "possessable": "0",
    "partOf": "null",
    "complements": "(of DP{tags: company; (number: noun.number | count:false)})"
  },
  {
    "name": "CEO.1",
    "proto": "CEO",
    "disabled": false,
    "possessable": "8",
    "posr": "tags: company",
    "complements": "--"
  },
  {
    "name": "butler",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "cable guy",
    "proto": "human",
    "disabled": false,
    "partOf": "null"
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
    "disabled": false,
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
    "proto": "Sally",
    "disabled": false
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
    "proto": "Batman",
    "disabled": false
  },
  {
    "name": "Han Solo",
    "proto": "Batman",
    "disabled": false
  },
  {
    "name": "Yoda",
    "proto": "Batman"
  },
  {
    "name": "Jabba the Hutt",
    "proto": "Batman"
  },
  {
    "name": "Captain Kirk",
    "proto": "Batman",
    "disabled": false
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
    "disabled": false,
    "size": "4"
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
    "disabled": false,
    "size": "6,7"
  },
  {
    "name": "bathtub",
    "disabled": false,
    "tags": "container,instument",
    "anim": "0",
    "tang": "2",
    "partOf": "null",
    "size": "6.1",
    "count": "true"
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
    "proto": "Jack",
    "disabled": false
  },
  {
    "name": "Hamish",
    "proto": "Jack",
    "disabled": false
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
    "proto": "Jack",
    "disabled": false
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
    "proto": "Jack",
    "disabled": false
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
    "proto": "Sally",
    "disabled": false
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
    "proto": "Sally",
    "disabled": false
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
    "proto": "Jack",
    "disabled": false,
    "partOf": "null"
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
    "proto": "Jack",
    "disabled": false,
    "partOf": "null"
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
    "proto": "Batman",
    "disabled": false
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
    "proto": "Jack",
    "disabled": false
  },
  {
    "name": "Anastasia",
    "proto": "Sally"
  },
  {
    "name": "Basil",
    "proto": "Jack",
    "disabled": false
  },
  {
    "name": "Mandeep",
    "proto": "Jack",
    "disabled": false
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
    "proto": "Jack",
    "disabled": false
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
    "proto": "Jack",
    "disabled": false
  },
  {
    "name": "Leopold",
    "proto": "Jack"
  },
  {
    "name": "Malcolm",
    "proto": "Jack",
    "disabled": false
  },
  {
    "name": "Rudyard",
    "proto": "Jack",
    "disabled": false
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
    "proto": "Jack",
    "disabled": false
  },
  {
    "name": "Hitler",
    "proto": "Smith",
    "disabled": false,
    "gender": "m",
    "precomp": "(Adolph)"
  },
  {
    "name": "MacGyver",
    "proto": "Batman",
    "disabled": false
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
    "proto": "dancing",
    "disabled": false
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
    "proto": "wrestling",
    "disabled": false
  },
  {
    "name": "kung fu",
    "proto": "wrestling",
    "disabled": false
  },
  {
    "name": "bird-watching",
    "proto": "dancing"
  },
  {
    "name": "shopping",
    "proto": "dancing",
    "disabled": false
  },
  {
    "name": "World of Warcraft",
    "proto": "chess",
    "disabled": false
  },
  {
    "name": "Dungeons and Dragons",
    "proto": "chess",
    "disabled": false
  },
  {
    "name": "chess",
    "proto": "dancing",
    "disabled": false,
    "tags": "game, -"
  },
  {
    "name": "poker",
    "proto": "chess"
  },
  {
    "name": "Monopoly",
    "proto": "chess",
    "disabled": false
  },
  {
    "name": "soccer",
    "proto": "chess",
    "disabled": false,
    "tags": "sport"
  },
  {
    "name": "wrestling",
    "proto": "soccer",
    "disabled": false
  },
  {
    "name": "boxing",
    "proto": "wrestling",
    "disabled": false
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
    "proto": "soccer",
    "disabled": false
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
    "disabled": false,
    "tags": "contest",
    "anim": "0",
    "tang": "0",
    "possessable": "3",
    "partOf": "null",
    "size": "0",
    "count": "true",
    "precomp": "(DP{tags:sport})"
  },
  {
    "name": "competition",
    "proto": "game",
    "disabled": false,
    "precomp": "(N{tags:activity})"
  },
  {
    "name": "tournament",
    "proto": "game",
    "precomp": "(DP{tags:game})"
  },
  {
    "name": "match",
    "proto": "game",
    "disabled": false,
    "precomp": "DP{tags:sport}"
  },
  {
    "name": "contest",
    "proto": "game",
    "disabled": false,
    "partOf": "null",
    "precomp": "(45 DP{tags:game|activity} |25 (PRES_PARTICIPLE|NOUN_INC))"
  },
  {
    "name": "race",
    "proto": "game",
    "disabled": false,
    "partOf": "null",
    "precomp": "--"
  },
  {
    "name": "Olympic",
    "proto": "game",
    "prohibitions": "number:sg",
    "disabled": false,
    "partOf": "null",
    "unique": "1",
    "count": "true",
    "precomp": "((_Winter|_Summer))"
  },
  {
    "name": "opera",
    "proto": "concert",
    "disabled": false
  },
  {
    "name": "dance",
    "proto": "party",
    "disabled": false,
    "tags": "contest"
  },
  {
    "name": "festival",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "inquisition",
    "proto": "party",
    "disabled": false,
    "tags": "undertaking"
  },
  {
    "name": "debate",
    "proto": "party",
    "disabled": false,
    "tags": "contest",
    "possessable": "3"
  },
  {
    "name": "trial",
    "proto": "debate",
    "disabled": false
  },
  {
    "name": "negotiation",
    "proto": "debate",
    "prohibitions": "number:sg",
    "disabled": false
  },
  {
    "name": "rave",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "circus",
    "proto": "concert",
    "disabled": false
  },
  {
    "name": "thesis defense",
    "proto": "party",
    "disabled": false,
    "possessable": "7"
  },
  {
    "name": "seminar",
    "proto": "party",
    "disabled": false
  },
  {
    "name": "conference",
    "proto": "party",
    "disabled": false,
    "possessable": "4",
    "posr": "tags:!person",
    "partOf": "null",
    "precomp": "(25 N{tags:enterprise})"
  },
  {
    "name": "jam session",
    "proto": "party",
    "disabled": false
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
    "proto": "dancing",
    "disabled": false
  },
  {
    "name": "science",
    "proto": "politics",
    "disabled": false,
    "tags": "fieldOfStudy",
    "anim": "0",
    "tang": "0",
    "possessable": "0",
    "partOf": "null",
    "size": "0",
    "unique": "2",
    "count": "false"
  },
  {
    "name": "linguistics",
    "proto": "science",
    "disabled": false
  },
  {
    "name": "archaeology",
    "proto": "science",
    "disabled": false
  },
  {
    "name": "anthropology",
    "proto": "science",
    "disabled": false
  },
  {
    "name": "economics",
    "proto": "science",
    "disabled": false
  },
  {
    "name": "math",
    "proto": "science",
    "disabled": false
  },
  {
    "name": "biology",
    "proto": "science",
    "disabled": false,
    "precomp": "(25 marine)"
  },
  {
    "name": "religion",
    "proto": "politics",
    "disabled": false,
    "possessable": "5",
    "posr": "tags: person",
    "partOf": "null"
  },
  {
    "name": "origami",
    "proto": "politics",
    "disabled": false
  },
  {
    "name": "politics",
    "disabled": false,
    "tags": "enterprise",
    "anim": "0",
    "tang": "0",
    "possessable": "0",
    "partOf": "null",
    "size": "0",
    "unique": "2",
    "count": "false"
  },
  {
    "name": "warfare",
    "proto": "politics",
    "disabled": false,
    "possessable": "3",
    "posr": "tags: territory",
    "partOf": "null"
  },
  {
    "name": "diplomacy",
    "proto": "politics",
    "disabled": false,
    "possessable": "4",
    "posr": "tags: territory",
    "partOf": "null"
  },
  {
    "name": "terrorism",
    "proto": "politics",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "marketing",
    "proto": "banking",
    "disabled": false,
    "tags": "business",
    "possessable": "4",
    "posr": "tags: company",
    "partOf": "null"
  },
  {
    "name": "astrology",
    "proto": "politics"
  },
  {
    "name": "alchemy",
    "proto": "politics",
    "disabled": false
  },
  {
    "name": "physics",
    "proto": "science",
    "disabled": false,
    "precomp": "(33 (quantum|theoretical|particle))"
  },
  {
    "name": "astrophysics",
    "proto": "physics",
    "disabled": false
  },
  {
    "name": "chemistry",
    "proto": "science",
    "disabled": false
  },
  {
    "name": "astronomy",
    "proto": "science",
    "disabled": false
  },
  {
    "name": "geology",
    "proto": "science",
    "disabled": false
  },
  {
    "name": "theology",
    "proto": "science",
    "disabled": false
  },
  {
    "name": "philosophy",
    "proto": "science",
    "disabled": false
  },
  {
    "name": "healthcare",
    "proto": "politics",
    "disabled": false,
    "possessable": "5",
    "posr": "tags: territory",
    "partOf": "null"
  },
  {
    "name": "crime",
    "proto": "politics",
    "disabled": false,
    "possessable": "6",
    "posr": "tags: territory"
  },
  {
    "name": "banking",
    "proto": "politics",
    "disabled": false,
    "tags": "business"
  },
  {
    "name": "commerce",
    "proto": "banking",
    "disabled": false
  },
  {
    "name": "industry",
    "proto": "banking",
    "disabled": false,
    "possessable": "5",
    "posr": "tags: territory",
    "unique": "1",
    "precomp": "N{tags:artifact|substance, number:sg}"
  },
  {
    "name": "sports",
    "proto": "politics",
    "disabled": false
  },
  {
    "name": "agriculture",
    "proto": "banking",
    "disabled": false,
    "possessable": "4",
    "posr": "tags: territory"
  },
  {
    "name": "snot",
    "proto": "poop",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "poop",
    "proto": "dirt",
    "disabled": false,
    "tags": "semisolid, -",
    "partOf": "null"
  },
  {
    "name": "sludge",
    "proto": "mud",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Play-Doh",
    "proto": "dirt",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "jello",
    "proto": "dirt",
    "disabled": false,
    "tags": "artifact, food, semisolid, -",
    "partOf": "null"
  },
  {
    "name": "ice cream",
    "proto": "jello",
    "disabled": false
  },
  {
    "name": "toothpaste",
    "proto": "jello",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "pudding",
    "proto": "jello",
    "disabled": false,
    "tags": "viscous, semisolid",
    "partOf": "null"
  },
  {
    "name": "applesauce",
    "proto": "jello",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "peanut butter",
    "proto": "jello",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "porridge",
    "proto": "jello",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "mashed potato",
    "proto": "jello",
    "prohibitions": "number:sg",
    "disabled": false,
    "count": "true",
    "inflections": "pl: mashed potatoes"
  },
  {
    "name": "rice",
    "proto": "dirt",
    "disabled": false,
    "tags": "food, artifact",
    "partOf": "null"
  },
  {
    "name": "spaghetti",
    "proto": "rice",
    "disabled": false
  },
  {
    "name": "candy",
    "proto": "rice",
    "disabled": false
  },
  {
    "name": "salad",
    "proto": "rice",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "granola",
    "proto": "rice",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "butter",
    "proto": "jello",
    "disabled": false
  },
  {
    "name": "cheese",
    "disabled": false,
    "tags": "food, solid",
    "anim": "0",
    "tang": "2",
    "possessable": "5",
    "partOf": "null",
    "size": "0",
    "count": "false"
  },
  {
    "name": "marmalade",
    "proto": "jello",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Vegemite",
    "proto": "jello",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Nutella",
    "proto": "jello",
    "disabled": false,
    "partOf": "null"
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
    "proto": "cheese",
    "disabled": false
  },
  {
    "name": "sugar",
    "proto": "sand",
    "disabled": false,
    "tags": "food",
    "partOf": "null"
  },
  {
    "name": "cereal",
    "proto": "granola",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "corn flake",
    "proto": "Cheerio",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Cheerio",
    "proto": "cereal",
    "prohibitions": "number:sg, quantified: true",
    "disabled": false,
    "partOf": "null",
    "count": "true"
  },
  {
    "name": "Fruit Loop",
    "proto": "Cheerio",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "salt",
    "proto": "sugar"
  },
  {
    "name": "snow",
    "proto": "dirt",
    "disabled": false,
    "tags": "obstacle, grounded",
    "partOf": "null"
  },
  {
    "name": "debris",
    "proto": "garbage"
  },
  {
    "name": "hammer",
    "disabled": false,
    "tags": "instrument",
    "anim": "0",
    "tang": "2",
    "possessable": "9",
    "posr": "tags: person",
    "partOf": "null",
    "size": "4",
    "count": "true"
  },
  {
    "name": "lightsaber",
    "proto": "hammer",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "binocular",
    "proto": "hammer",
    "prohibitions": "number:sg",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "telescope",
    "proto": "hammer",
    "disabled": false,
    "partOf": "null",
    "size": "4,5,6,7"
  },
  {
    "name": "crowbar",
    "proto": "hammer",
    "disabled": false
  },
  {
    "name": "rolling pin",
    "proto": "hammer",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "candlestick",
    "proto": "hammer",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "shovel",
    "proto": "hammer",
    "disabled": false,
    "partOf": "null",
    "size": "5"
  },
  {
    "name": "farming implement",
    "proto": "hammer",
    "disabled": false,
    "partOf": "null",
    "size": "4,5"
  },
  {
    "name": "chainsaw",
    "proto": "hammer",
    "disabled": false,
    "tags": "machine",
    "partOf": "null",
    "size": "4"
  },
  {
    "name": "screwdriver",
    "proto": "wrench",
    "disabled": false,
    "partOf": "null",
    "precomp": "(15 sonic)"
  },
  {
    "name": "spatula",
    "proto": "wrench",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "wrench",
    "proto": "hammer",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "stapler",
    "proto": "wrench",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "fork",
    "proto": "spoon",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "pencil",
    "proto": "pen",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "pen",
    "proto": "wrench",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "stethoscope",
    "proto": "hammer",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "snorkel",
    "proto": "hammer",
    "disabled": false,
    "tags": "passage",
    "partOf": "null"
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
    "disabled": false,
    "tags": "table",
    "size": "6,7"
  },
  {
    "name": "flute",
    "proto": "trumpet",
    "disabled": false,
    "partOf": "null"
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
    "disabled": false,
    "tags": "song",
    "anim": "0",
    "tang": "0",
    "possessable": "6",
    "posr": "tags: person",
    "partOf": "null",
    "size": "0",
    "count": "true"
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
    "name": "étude",
    "proto": "sonata",
    "disabled": false
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
    "prohibitions": "number:sg",
    "disabled": false,
    "possessable": "0",
    "partOf": "null",
    "unique": "1"
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
    "proto": "the Iliad",
    "disabled": false,
    "tags": "song, -"
  },
  {
    "name": "Moonlight Sonata",
    "proto": "Hey Jude"
  },
  {
    "name": "Happy Birthday",
    "proto": "Hey Jude",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Hotel California",
    "proto": "Hey Jude"
  },
  {
    "name": "Amazing Grace",
    "proto": "Hey Jude",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Beethoven's Fifth Symphony",
    "proto": "Hey Jude"
  },
  {
    "name": "The Ride of the Valkyries",
    "proto": "Hey Jude",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Jingle Bells",
    "proto": "Hey Jude",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Smith",
    "proto": "Jack",
    "disabled": false,
    "tags": "-, person, lastname",
    "partOf": "null",
    "precomp": "TITLE{unpack:noun.tags-gender}"
  },
  {
    "name": "Smith.1",
    "proto": "Smith",
    "prohibitions": "quantified: true, number: sg, def: def",
    "disabled": false,
    "partOf": "null",
    "unique": "1",
    "count": "true",
    "precomp": "--"
  },
  {
    "name": "Chan",
    "proto": "Smith",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Johnson",
    "proto": "Smith",
    "disabled": false
  },
  {
    "name": "Williams",
    "proto": "Smith"
  },
  {
    "name": "Brown",
    "proto": "Smith",
    "disabled": false
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
    "proto": "Smith",
    "disabled": false
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
    "proto": "Smith",
    "disabled": false
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
    "proto": "Smith",
    "disabled": false
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
    "proto": "Smith",
    "disabled": false,
    "partOf": "null"
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
    "proto": "Smith",
    "disabled": false,
    "partOf": "null"
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
    "proto": "Smith",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Bennett",
    "proto": "Smith",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Hughes",
    "proto": "Smith",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Myers",
    "proto": "Smith"
  },
  {
    "name": "Foster",
    "proto": "Smith",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Sanders",
    "proto": "Smith",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Powell",
    "proto": "Smith",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Sullivan",
    "proto": "Smith"
  },
  {
    "name": "Russell",
    "proto": "Smith",
    "disabled": false,
    "partOf": "null"
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
    "proto": "Smith",
    "disabled": false
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
    "proto": "Smith",
    "disabled": false
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
    "proto": "Smith",
    "disabled": false
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
    "prohibitions": "number:sg, def:indef, quantified:true",
    "disabled": false,
    "tags": "behaviour",
    "anim": "0",
    "tang": "0",
    "possessable": "7",
    "posr": "tags: person|organization",
    "partOf": "null",
    "size": "0",
    "count": "true"
  },
  {
    "name": "lifestyle",
    "prohibitions": "def:indef,quantified:true",
    "disabled": false,
    "tags": "behaviour",
    "anim": "0",
    "tang": "0",
    "possessable": "7",
    "posr": "tags: person",
    "partOf": "null",
    "size": "0",
    "unique": "0",
    "count": "true"
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
    "partOf": "null",
    "size": "4,5,6,7,8",
    "count": "true"
  },
  {
    "name": "vegetation",
    "proto": "plant",
    "disabled": false,
    "partOf": "null",
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
    "disabled": false,
    "tags": "volume",
    "partOf": "null",
    "size": "6",
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
    "disabled": false,
    "partOf": "null",
    "size": "6,7",
    "precomp": "--"
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
    "disabled": false,
    "tags": "aggregate",
    "partOf": "null"
  },
  {
    "name": "suburb",
    "proto": "ghetto",
    "disabled": false
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
    "proto": "London",
    "disabled": false,
    "partOf": "null"
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
    "proto": "London",
    "disabled": false,
    "partOf": "null"
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
    "name": "Washington^,^ D^.C^.",
    "proto": "London",
    "disabled": false,
    "partOf": "null"
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
    "disabled": false,
    "unique": "1"
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
    "proto": "Japan",
    "disabled": false,
    "partOf": "null"
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
    "proto": "United States",
    "disabled": false,
    "partOf": "null"
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
    "proto": "Japan",
    "disabled": false,
    "partOf": "null"
  },
  {
    "name": "Zimbabwe",
    "proto": "Japan"
  },
  {
    "name": "Jamaica",
    "proto": "Japan",
    "disabled": false,
    "partOf": "null"
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
    "tags": "point",
    "partOf": "beast&!bird"
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
    "proto": "hand",
    "disabled": false,
    "tags": "path",
    "size": "5"
  },
  {
    "name": "leg",
    "proto": "foot",
    "disabled": false,
    "tags": "vertical",
    "size": "5"
  },
  {
    "name": "tail",
    "proto": "heart",
    "disabled": false,
    "tags": "linear",
    "partOf": "animal&!bug",
    "size": "3"
  },
  {
    "name": "wing",
    "proto": "tail",
    "disabled": false,
    "partOf": "airAnimal"
  }
]