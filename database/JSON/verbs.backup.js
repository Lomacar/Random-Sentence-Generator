verb = [
  {
    "name": "experience",
    "disabled": false,
    "class": "state",
    "anim": "2|3",
    "volition": "false",
    "ptpl": "past",
    "compcore": "NP{tags: situation|condition|potential|event|dynamic}"
  },
  {
    "name": "experience.1",
    "proto": "experience",
    "disabled": false,
    "tags": "territory",
    "anim": "--"
  },
  {
    "name": "attack",
    "proto": "surrender",
    "disabled": false,
    "class": "event",
    "anim": ">0",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:touchable|territory}"
  },
  {
    "name": "swear",
    "disabled": false,
    "class": "event",
    "tags": "person",
    "volition": "true",
    "ptpl": "null",
    "compext": "(20 at NP{})",
    "inflections": "simp.past:swore, retro: sworn"
  },
  {
    "name": "swear2",
    "proto": "swear",
    "disabled": false,
    "compext": "INF_PHRASE{unpack:subject.R; volition: true}"
  },
  {
    "name": "swear1",
    "proto": "swear",
    "disabled": false,
    "compext": "THAT_CLAUSE"
  },
  {
    "name": "make",
    "disabled": false,
    "class": "process",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:artifact}",
    "inflections": "simp.past:made"
  },
  {
    "name": "remove",
    "disabled": false,
    "class": "event",
    "anim": ">1",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:touchable&!fixed}",
    "compext": "(from NP{tags:place|space})"
  },
  {
    "name": "remove.1",
    "proto": "remove",
    "disabled": false,
    "compcore": "NP{tags:component}",
    "compext": "(70 from PASV_SWITCH{construction: NP; partOf: $patient.tags; number: sg})"
  },
  {
    "name": "expand",
    "disabled": false,
    "class": "process",
    "tags": "gas|organization|stretchy",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "disperse",
    "disabled": false,
    "class": "process",
    "tags": "collective",
    "anim": "!0",
    "ptpl": "pres"
  },
  {
    "name": "dissipate",
    "disabled": false,
    "class": "process",
    "tags": "gas",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "swirl",
    "disabled": false,
    "class": "activity",
    "tags": "fluid&!viscous",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "involve",
    "disabled": false,
    "class": "state",
    "tags": "volitional | telic | situation | experience",
    "volition": "false",
    "ptpl": "null",
    "compext": "(ACTIVE_STUFF|NP{tags: activity|enterprise}|NP)"
  },
  {
    "name": "involve1",
    "proto": "involve",
    "disabled": false,
    "tags": "--",
    "anim": "3",
    "volition": "true",
    "compcore": "NP{anim:3}",
    "compext": "in (ACTIVE_STUFF|NP{tags: activity|event&volitional})"
  },
  {
    "name": "participate",
    "disabled": false,
    "class": "activity",
    "tags": "person",
    "volition": "true",
    "ptpl": "null",
    "compext": "(80 in NP{tags: occasion})"
  },
  {
    "name": "take88",
    "proto": "participate",
    "disabled": false,
    "compext": "part (88 in NP{tags: occasion})"
  },
  {
    "name": "block",
    "disabled": false,
    "tags": "object",
    "tang": "2",
    "ptpl": "past",
    "compcore": "NP{tags:(40 path |30 opening |20 creature |10 vehicle)}"
  },
  {
    "name": "head",
    "disabled": false,
    "class": "activity",
    "tags": "creature|vehicle",
    "vtags": "motion, generalMotion",
    "volition": "true",
    "ptpl": "null",
    "compext": "DIR"
  },
  {
    "name": "head1",
    "proto": "head",
    "disabled": false,
    "class": "event"
  },
  {
    "name": "head2",
    "proto": "head1",
    "disabled": false,
    "compext": "(off|out)"
  },
  {
    "name": "get",
    "disabled": false,
    "class": "event",
    "anim": "3",
    "ptpl": "null",
    "compcore": "NP{tags:PHYSICAL & !fixed; anim: <3}",
    "inflections": "simp.past:got, retro:gotten"
  },
  {
    "name": "get1",
    "proto": "get",
    "disabled": false,
    "class": "process",
    "tags": "creature",
    "anim": "--",
    "compcore": "--",
    "compext": "(better|sick)"
  },
  {
    "name": "get2",
    "proto": "get1",
    "disabled": false,
    "compext": "up"
  },
  {
    "name": "wake",
    "proto": "get2",
    "disabled": false,
    "ptpl": "null",
    "inflections": "simp.past: woke, retro: woken"
  },
  {
    "name": "wake.2",
    "proto": "wake",
    "disabled": false,
    "ptpl": "null",
    "compcore": "up DP{tags:creature}",
    "compext": "--",
    "inflections": "simp.past: woke, retro: woken"
  },
  {
    "name": "wake.1",
    "proto": "wake",
    "disabled": false,
    "tags": "phenomenon|creature",
    "ptpl": "past|by2",
    "compcore": "NP{tags:creature}",
    "compext": "up",
    "inflections": "simp.past: woke, retro: woken"
  },
  {
    "name": "get3",
    "proto": "get",
    "disabled": false,
    "compcore": "rid of NP"
  },
  {
    "name": "avoid",
    "disabled": false,
    "class": "activity",
    "anim": ">1.5",
    "volition": "true",
    "ptpl": "null",
    "compcore": "(70 NP |30 GP{unpack:subject.R} )"
  },
  {
    "name": "avoid2",
    "proto": "avoid",
    "disabled": false
  },
  {
    "name": "rescue",
    "disabled": false,
    "class": "event",
    "anim": "2,3",
    "volition": "true",
    "compcore": "NP{tags:object&!fixed | substance}",
    "compext": "(from (NP{tags:phenomenon|place|organization|happening|situation} | NP{tags:person}) )"
  },
  {
    "name": "kiss",
    "disabled": false,
    "class": "semel",
    "tags": "person",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP(77 {tags: person} |23 {tags: !person & !liquid; tang: 2})"
  },
  {
    "name": "hug",
    "proto": "kiss",
    "disabled": false,
    "compcore": "NP{tags:creature; size: >3}"
  },
  {
    "name": "let",
    "prohibitions": "pasv: true",
    "disabled": false,
    "class": "event",
    "anim": "3",
    "volition": "true",
    "compext": "INF_CLAUSE2{volition: true; anim:>1.5}",
    "inflections": "simp.past:let"
  },
  {
    "name": "let1",
    "proto": "let",
    "disabled": false,
    "compext": "go (70 of NP{tags:(touchable|item; (size: <subject.size))})"
  },
  {
    "name": "let2",
    "proto": "let",
    "disabled": false,
    "compcore": "NP{anim:>0.5}",
    "compext": "go"
  },
  {
    "name": "act",
    "disabled": true,
    "class": "activity",
    "anim": ">1.5",
    "volition": "true",
    "compext": "AP{unpack: subject.R} ← HOW TO RESTRICT A's? new atag attribute with values of \"behaviour\" and \"disposition?\""
  },
  {
    "name": "end1",
    "prohibitions": "aspect: prog",
    "disabled": false,
    "class": "event",
    "volition": "false",
    "ptpl": "null",
    "compext": "up GP{unpack: subject.R}"
  },
  {
    "name": "deserve",
    "disabled": false,
    "class": "state",
    "anim": "3",
    "volition": "false",
    "ptpl": "null",
    "compcore": "NP{tags:!place}"
  },
  {
    "name": "deserve.1",
    "proto": "deserve",
    "disabled": false,
    "anim": "--",
    "tang": ">1",
    "compcore": "NP{anim: <3;tang:>0;tags:!place | building}"
  },
  {
    "name": "panic",
    "disabled": false,
    "class": "activity",
    "anim": "3",
    "volition": "false",
    "ptpl": "pres",
    "inflections": "prog:panicking, simp.past:panicked"
  },
  {
    "name": "survive",
    "disabled": false,
    "class": "event",
    "tags": "lifeform|construction|site|territory|organization",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "survive.1",
    "proto": "survive",
    "disabled": false,
    "class": "activity"
  },
  {
    "name": "hang1",
    "proto": "hang",
    "disabled": false,
    "class": "activity",
    "tags": "person",
    "volition": "true",
    "compext": "out with NP{tags:person|collective}"
  },
  {
    "name": "hang",
    "disabled": false,
    "class": "state",
    "tags": "object",
    "tang": "2",
    "volition": "false",
    "ptpl": "null",
    "compext": "(LOCATION{lm.tags: !grounded; size: >subject.size} | from NP{tags:elevated; lm.size: >subject.size; number: sg})",
    "inflections": "simp.past:hung"
  },
  {
    "name": "hang1.1",
    "proto": "hang1",
    "disabled": false,
    "tags": "organization",
    "compext": "out"
  },
  {
    "name": "hang1.2",
    "proto": "hang1.1",
    "prohibitions": "number:sg",
    "disabled": false,
    "tags": "person"
  },
  {
    "name": "answer",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "tang": "!0",
    "volition": "true",
    "ptpl": "null",
    "compcore": "((NP{anim:3}    |  NP{name:question|riddle;orsimilar:true}))"
  },
  {
    "name": "flood",
    "disabled": false,
    "class": "event",
    "tags": "site&!prominence|territory&!continent|passage&structure",
    "volition": "false",
    "ptpl": "null"
  },
  {
    "name": "become",
    "disabled": false,
    "class": "event",
    "volition": "false",
    "ptpl": "null",
    "compcore": "AP{unpack:subject.R; perm: false; copulant: true; really_copulant: false}",
    "inflections": "simp.past:became, retro:become",
    "vtags": "--"
  },
  {
    "name": "betray",
    "disabled": false,
    "class": "event",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{anim:3}"
  },
  {
    "name": "believe",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": "3",
    "tang": "!0",
    "volition": "false",
    "ptpl": "null",
    "compcore": "(85 NP{anim: 3})"
  },
  {
    "name": "believe1",
    "proto": "believe",
    "disabled": false,
    "compcore": "--",
    "compext": "(40  in NP |60  THAT_CLAUSE)"
  },
  {
    "name": "suspect",
    "proto": "believe1",
    "disabled": false,
    "compext": "THAT_CLAUSE"
  },
  {
    "name": "fear",
    "proto": "suspect",
    "disabled": false
  },
  {
    "name": "worry",
    "proto": "suspect",
    "disabled": false
  },
  {
    "name": "hope",
    "proto": "suspect",
    "disabled": false
  },
  {
    "name": "bother",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": "<2",
    "volition": "false",
    "ptpl": "null",
    "compcore": "NP{anim:3}"
  },
  {
    "name": "entertain",
    "proto": "amuse",
    "disabled": false
  },
  {
    "name": "bother1",
    "proto": "bother",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": ">1",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{anim:>1}"
  },
  {
    "name": "break",
    "disabled": false,
    "class": "event",
    "tags": "breakable",
    "vtags": "--",
    "anim": "<2",
    "tang": "!0",
    "ptpl": "pres",
    "inflections": "simp.past:broke, retro:broken"
  },
  {
    "name": "break1",
    "proto": "break",
    "disabled": false,
    "tags": "--",
    "vtags": "--",
    "anim": "!0",
    "ptpl": "past",
    "compcore": "NP{tags:instrument}"
  },
  {
    "name": "collect",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "anim": ">1",
    "tang": ">0",
    "volition": "true",
    "ptpl": "past",
    "compcore": "( NP{anim:<3;tang:2;number:pl;tags:matter&!fixed}   | NP{tags:collective})"
  },
  {
    "name": "continue",
    "disabled": false,
    "class": "activity",
    "tags": "event|behaviour",
    "vtags": "--",
    "ptpl": "pres"
  },
  {
    "name": "continue.1",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": ">1",
    "ptpl": "null",
    "compext": "(INF_PHRASE{unpack: subject.R; class:behaviour|process})"
  },
  {
    "name": "continue.2",
    "proto": "continue",
    "disabled": false,
    "class": "event",
    "tags": "person",
    "vtags": "--",
    "ptpl": "null"
  },
  {
    "name": "continue1",
    "disabled": false,
    "class": "activity",
    "vtags": "motion, generalMotion",
    "anim": ">1",
    "ptpl": "null",
    "compext": "MOTION"
  },
  {
    "name": "create",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "anim": "3",
    "tang": "!0",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:artifact}"
  },
  {
    "name": "mix",
    "disabled": false,
    "class": "process",
    "tags": "person",
    "volition": "true",
    "ptpl": "null",
    "compcore": "DP{tags:mass}",
    "compext": "with DP{tags:mass}"
  },
  {
    "name": "mix.2",
    "proto": "mix.1",
    "disabled": false,
    "compcore": "DP{tags:item|animals; number:pl; size: <7}",
    "compext": "and DP{tags:item|animals; nodeterminer:1; number:pl;size:vp.compcore.size} together"
  },
  {
    "name": "mix.1",
    "proto": "mix",
    "disabled": false,
    "compext": "and DP{tags:mass; nodeterminer: 1} together"
  },
  {
    "name": "decide",
    "proto": "say",
    "disabled": true,
    "vtags": "--",
    "ptpl": "null",
    "compext": "(THAT_CLAUSE|WH_CLAUSE){mood:deontic;aspect:simp;volition:true}",
    "inflections": "--"
  },
  {
    "name": "decide1",
    "proto": "decide",
    "disabled": false,
    "vtags": "--",
    "ptpl": "-",
    "compext": "(65 WH_INF)"
  },
  {
    "name": "decide2",
    "proto": "try",
    "disabled": false,
    "vtags": "--",
    "anim": "3",
    "ptpl": "null"
  },
  {
    "name": "die",
    "disabled": false,
    "class": "process",
    "tags": "lifeform",
    "vtags": "--",
    "tang": "!0",
    "ptpl": "pres",
    "inflections": "prog:dying"
  },
  {
    "name": "eat",
    "disabled": false,
    "class": "activity",
    "tags": "creature",
    "vtags": "activity",
    "volition": "true",
    "ptpl": "null",
    "inflections": "simp.past:ate, retro:eaten"
  },
  {
    "name": "drink",
    "proto": "eat",
    "disabled": false
  },
  {
    "name": "drink.1",
    "proto": "drink",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "ptpl": "past",
    "compcore": "NP{tags:(70 food&liquid  |30 object&!fixed&liquid)}"
  },
  {
    "name": "eat.1",
    "proto": "eat",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "ptpl": "past",
    "compcore": "NP{tags:(70 food&!liquid  |30 object&!fixed&!liquid)}"
  },
  {
    "name": "exist",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "fall",
    "disabled": false,
    "class": "event",
    "tags": "hasHeight",
    "vtags": "--",
    "tang": "2",
    "volition": "false",
    "ptpl": "pres",
    "compext": "(30 down | 30 over)",
    "inflections": "simp.past:fell, retro:fallen"
  },
  {
    "name": "fall1",
    "proto": "fall",
    "disabled": false,
    "tags": "!fixed",
    "vtags": "motion, vertical, down",
    "compext": "MOTION"
  },
  {
    "name": "fall2",
    "proto": "fall",
    "disabled": false,
    "tags": "protrusion",
    "compext": "off"
  },
  {
    "name": "feel",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": ">1",
    "volition": "false",
    "ptpl": "null",
    "compcore": "AP{unpack:subject.R; reverse:true; copulant: true; really_copulant: false}",
    "inflections": "simp.past:felt"
  },
  {
    "name": "fight",
    "disabled": false,
    "class": "activity",
    "vtags": "activity",
    "anim": ">1",
    "tang": "!0",
    "volition": "true",
    "ptpl": "null",
    "compcore": "(30 NP{anim:>1}   | 30 with NP{anim:>1})",
    "inflections": "simp.past:fought"
  },
  {
    "name": "find",
    "disabled": false,
    "class": "event",
    "vtags": "situated",
    "anim": ">1",
    "tang": "!0",
    "volition": "false",
    "ptpl": "past",
    "compcore": "NP{anim:>0}",
    "compext": "(40 LOCATION)",
    "inflections": "simp.past:found"
  },
  {
    "name": "float",
    "disabled": false,
    "class": "activity",
    "tags": "!fixed",
    "vtags": "motion, air, waterSurface",
    "tang": "2",
    "ptpl": "pres",
    "compext": "(PATH)"
  },
  {
    "name": "fly",
    "proto": "walk",
    "disabled": false,
    "vtags": "motion, air",
    "inflections": "simp.past:flew, retro:flown"
  },
  {
    "name": "fly1",
    "proto": "fly",
    "disabled": false,
    "anim": "3",
    "ptpl": "null",
    "compcore": "NP{tags:substance|object&!fixed}",
    "compext": "to NP{tags:place&!position}"
  },
  {
    "name": "give",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "tang": "!0",
    "ptpl": "past|by2",
    "compcore": "NP{anim:<3;tang:2; tags: !fixed}",
    "compext": "to NP{anim:3}",
    "inflections": "simp.past:gave, retro:given"
  },
  {
    "name": "give.1",
    "proto": "give",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null",
    "compcore": "NP{anim:3} DP{anim:<3;tang:2; tags: !fixed}",
    "compext": "--"
  },
  {
    "name": "give1",
    "proto": "give",
    "disabled": false,
    "vtags": "--",
    "anim": ">1.5",
    "ptpl": "null",
    "compcore": "--",
    "compext": "up"
  },
  {
    "name": "give2",
    "proto": "give1",
    "disabled": false,
    "anim": "3",
    "compcore": "(away DP{tags: substance|item|animal}|NP{tags: substance|item|animal} away)",
    "compext": "--"
  },
  {
    "name": "go",
    "disabled": false,
    "class": "process",
    "vtags": "motion, generalMotion",
    "anim": ">1",
    "tang": "!0",
    "ptpl": "null",
    "compext": "(10 SOURCE  |40 GOAL{prox:dist}  |30 PATH)",
    "inflections": "simp.pres.sg.3:goes, simp.past:went, retro: gone"
  },
  {
    "name": "go1",
    "proto": "go",
    "disabled": false,
    "class": "activity",
    "anim": "3",
    "compcore": "--",
    "compext": "(40 around) (NOUN_INC|PRES_PARTICIPLE){unpack:subject.R}"
  },
  {
    "name": "go2",
    "proto": "go",
    "disabled": false,
    "class": "state",
    "tags": "path & grounded",
    "vtags": "--",
    "anim": "0",
    "tang": "0|1|2",
    "compcore": "to NP{tags:place;size:>subject.size}",
    "compext": "--"
  },
  {
    "name": "go3",
    "proto": "go",
    "disabled": false,
    "class": "event",
    "tags": "creature",
    "vtags": "null",
    "anim": ">1",
    "volition": "false",
    "ptpl": "null",
    "compcore": "to sleep",
    "compext": "--"
  },
  {
    "name": "go4",
    "proto": "go",
    "disabled": false,
    "compext": "to NP{tags: occasion}"
  },
  {
    "name": "go3.1",
    "proto": "go3",
    "disabled": false,
    "anim": "3",
    "compcore": "to bed"
  },
  {
    "name": "walk",
    "disabled": false,
    "class": "activity",
    "tags": "creature & !waterAnimal",
    "vtags": "motion, grounded, activity",
    "ptpl": "pres"
  },
  {
    "name": "walk.1",
    "proto": "walk",
    "disabled": false,
    "class": "process",
    "ptpl": "null",
    "compext": "MOTION"
  },
  {
    "name": "hike.1",
    "proto": "walk.1",
    "disabled": false,
    "compext": "MOTION{size:>8}"
  },
  {
    "name": "hate",
    "proto": "like",
    "volition": "FALSE",
    "ptpl": "past",
    "vtags": "--"
  },
  {
    "name": "have",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": "!0",
    "tang": "!0",
    "volition": "false",
    "ptpl": "null",
    "compcore": "NP{tags:object|substance; anim: <3}",
    "inflections": "simp.past:had, simp.pres.sg.3:has"
  },
  {
    "name": "have1",
    "proto": "have",
    "disabled": false,
    "class": "activity",
    "anim": "3",
    "tang": "--",
    "compcore": "NP{noposs: true; tags: experience}"
  },
  {
    "name": "imagine",
    "proto": "think.1",
    "disabled": false,
    "vtags": "--",
    "ptpl": "-",
    "inflections": "--"
  },
  {
    "name": "kill",
    "disabled": false,
    "class": "event",
    "tags": "!vehicle",
    "vtags": "--",
    "anim": "!0",
    "tang": "!0",
    "ptpl": "past",
    "compcore": "NP{tags:lifeform}"
  },
  {
    "name": "murder",
    "proto": "kill",
    "disabled": false,
    "anim": "3"
  },
  {
    "name": "know",
    "prohibitions": "tense:fut,real_aspect:prosp,aspect:prosp",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": ">1",
    "tang": "!0",
    "volition": "false",
    "ptpl": "null",
    "compext": "(WH_CLAUSE   | WH_INF{volition:true})",
    "inflections": "simp.past:knew, retro:known"
  },
  {
    "name": "know1",
    "proto": "know",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null",
    "compext": "(40  THAT_CLAUSE    |40  about NP)"
  },
  {
    "name": "know1.1",
    "proto": "know",
    "disabled": false,
    "vtags": "--",
    "ptpl": "past",
    "compcore": "NP{tags: person|activity|fieldOfStudy}",
    "compext": "--"
  },
  {
    "name": "like",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": ">1",
    "ptpl": "past",
    "compcore": "NP"
  },
  {
    "name": "like.1",
    "proto": "like",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null",
    "compcore": "GP{unpack:subject.R}"
  },
  {
    "name": "melt",
    "disabled": false,
    "class": "process",
    "tags": "matter & !void & !fluid",
    "vtags": "--",
    "anim": "<2",
    "tang": "2",
    "ptpl": "null"
  },
  {
    "name": "melt.1",
    "proto": "melt",
    "anim": "--",
    "tang": "--",
    "ptpl": "past",
    "tags": "energy",
    "vtags": "--",
    "compcore": "NP{tags:matter & !void & !fluid}"
  },
  {
    "name": "melt.2",
    "proto": "melt.1",
    "disabled": false,
    "tags": "--",
    "vtags": "--",
    "anim": "3"
  },
  {
    "name": "miss",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": ">1",
    "tang": "!0",
    "volition": "false",
    "ptpl": "past",
    "compcore": "NP{anim:>0}"
  },
  {
    "name": "read",
    "disabled": false,
    "class": "process",
    "vtags": "activity",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:readable; person:3}",
    "inflections": "simp.past:read"
  },
  {
    "name": "regret",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": "3",
    "volition": "false",
    "ptpl": "null",
    "compcore": "GP{volition:true}",
    "inflections": "simp.past:regretted"
  },
  {
    "name": "say",
    "disabled": false,
    "class": "event",
    "vtags": "speech",
    "anim": "3",
    "ptpl": "null",
    "compext": "THAT_CLAUSE",
    "inflections": "simp.past:said"
  },
  {
    "name": "admit",
    "proto": "say",
    "disabled": false,
    "inflections": "simp.past:admitted"
  },
  {
    "name": "claim",
    "proto": "say",
    "disabled": false,
    "inflections": "--"
  },
  {
    "name": "prophesy",
    "proto": "say",
    "disabled": false,
    "compext": "THAT_CLAUSE{tense:fut, aspect: (75 simp |25 prog), mood:ind }",
    "inflections": "--"
  },
  {
    "name": "predict",
    "proto": "prophesy",
    "disabled": false
  },
  {
    "name": "predict1",
    "proto": "predict",
    "disabled": false,
    "compext": "NP{tags: state | dynamic | happening&!volitional}"
  },
  {
    "name": "search",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": ">1",
    "tang": "!0",
    "volition": "true",
    "ptpl": "null",
    "compext": "for NP{anim:>0}"
  },
  {
    "name": "see",
    "disabled": false,
    "class": "state",
    "vtags": "null",
    "anim": ">1",
    "tang": "!0",
    "ptpl": "past",
    "compcore": "NP{tags: visible}",
    "inflections": "simp.past:saw, retro:seen"
  },
  {
    "name": "witness",
    "disabled": false,
    "class": "event",
    "vtags": "null",
    "anim": ">2",
    "volition": "false",
    "ptpl": "past",
    "compcore": "(70 NP{tags:happening|behaviour|situation} |30 NP{tags:visible&!fixed})"
  },
  {
    "name": "witness.1",
    "proto": "witness",
    "disabled": false,
    "ptpl": "null",
    "compcore": "--",
    "compext": "ACTION"
  },
  {
    "name": "witness.2",
    "proto": "witness",
    "disabled": false,
    "ptpl": "null",
    "compcore": "NP{anim:>1}",
    "compext": "GP{unpack:subject.R}"
  },
  {
    "name": "glimpse",
    "proto": "witness",
    "disabled": false,
    "class": "semel",
    "compcore": "NP{tags: visible}"
  },
  {
    "name": "see.1",
    "proto": "see",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null",
    "compcore": "--",
    "compext": "(25  G_CLAUSE   |50 WH_CLAUSE)"
  },
  {
    "name": "seem",
    "prohibitions": "tense:fut,real_aspect:prosp,aspect:prosp",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "volition": "false",
    "ptpl": "null",
    "compcore": "AP{unpack:subject.R; reverse:true; copulant: true; really_copulant: false}"
  },
  {
    "name": "shoot",
    "proto": "punch",
    "disabled": false,
    "inflections": "simp.past:shot"
  },
  {
    "name": "shoot.2",
    "proto": "shoot",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null",
    "compcore": "--",
    "compext": "at NP{tang: 2}"
  },
  {
    "name": "sleep",
    "disabled": false,
    "class": "activity",
    "vtags": "activity",
    "anim": ">1",
    "volition": "true",
    "ptpl": "pres",
    "inflections": "simp.past:slept"
  },
  {
    "name": "smoke",
    "disabled": false,
    "class": "activity",
    "vtags": "activity",
    "anim": "1|3",
    "tang": "!0",
    "ptpl": "pres"
  },
  {
    "name": "snap",
    "disabled": false,
    "class": "event",
    "tags": "object",
    "vtags": "--",
    "anim": "<2",
    "tang": "2",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "stink",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "tang": "!0",
    "volition": "false",
    "ptpl": "pres",
    "inflections": "simp.past:stank, retro: stunk"
  },
  {
    "name": "swim",
    "proto": "walk",
    "disabled": false,
    "vtags": "motion, water",
    "ptpl": "pres",
    "inflections": "simp.past:swam, retro:swum"
  },
  {
    "name": "test",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP"
  },
  {
    "name": "think",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": "3",
    "ptpl": "pres",
    "compext": "(60 about NP)",
    "inflections": "simp.past:thought"
  },
  {
    "name": "think.1",
    "proto": "think",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "ptpl": "null",
    "compext": "THAT_CLAUSE"
  },
  {
    "name": "tickle",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": "3",
    "tang": "!0",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:creature}"
  },
  {
    "name": "touch",
    "disabled": false,
    "class": "semel",
    "vtags": "--",
    "anim": "3",
    "tang": "2",
    "ptpl": "past",
    "compcore": "NP{tags:touchable}"
  },
  {
    "name": "touch.1",
    "proto": "touch",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": "3",
    "ptpl": "null"
  },
  {
    "name": "touch.2",
    "proto": "touch.1",
    "disabled": false,
    "vtags": "--",
    "anim": "<3"
  },
  {
    "name": "trick",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "past|by1",
    "compcore": "NP{anim:>2}",
    "compext": "(33 into GP)"
  },
  {
    "name": "try",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": ">1",
    "ptpl": "null",
    "compext": "(85 INF_PHRASE{volition:true;unpack:subject.R})"
  },
  {
    "name": "try.1",
    "proto": "try",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "ptpl": "null"
  },
  {
    "name": "vanish",
    "disabled": false,
    "class": "event",
    "tags": "visible",
    "vtags": "--",
    "ptpl": "pres"
  },
  {
    "name": "appear",
    "proto": "vanish",
    "disabled": false
  },
  {
    "name": "disappear",
    "proto": "vanish",
    "disabled": false
  },
  {
    "name": "fade",
    "proto": "vanish",
    "disabled": false,
    "class": "process",
    "tags": "phenomenon",
    "compext": "away"
  },
  {
    "name": "write",
    "proto": "read",
    "disabled": false,
    "vtags": "--",
    "inflections": "simp.past:wrote, retro:written"
  },
  {
    "name": "yell",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": "3",
    "tang": "2",
    "ptpl": "pres",
    "compext": "(60 at NP{tang: >0; anim: >0})"
  },
  {
    "name": "ride",
    "disabled": false,
    "class": "activity",
    "tags": "person",
    "vtags": "motion, grounded",
    "ptpl": "null",
    "inflections": "simp.past:rode, retro:ridden"
  },
  {
    "name": "ride.1",
    "proto": "ride",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{ (tags:rideable | tags:beast;size:>5);number:subject.number; anim: <3 }"
  },
  {
    "name": "ride.2",
    "proto": "ride",
    "disabled": false,
    "class": "process",
    "ptpl": "null",
    "compext": "(MOTION)  on DP{(tags:rideable | tags:beast;size:>5); number:subject.number; anim: <3}"
  },
  {
    "name": "ride.3",
    "proto": "ride.2",
    "ptpl": "past|by2",
    "compcore": "DP{ (tags:rideable | tags:beast;size:>5);number:subject.number; anim: <3}",
    "compext": "(MOTION)"
  },
  {
    "name": "understand",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": "3",
    "volition": "false",
    "ptpl": "past",
    "compcore": "NP(20  {number:pl;def:indef}  |20  {anim:3} |20 {count:false;number:sg}  |40  {tags:information|readable|state} )",
    "inflections": "simp.past:understood"
  },
  {
    "name": "understand1",
    "proto": "understand",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null",
    "compcore": "(75 (WH_CLAUSE  |  THAT_CLAUSE))"
  },
  {
    "name": "wait",
    "disabled": false,
    "class": "activity",
    "vtags": "situated",
    "anim": ">1",
    "ptpl": "null",
    "compext": "(LOCATION)"
  },
  {
    "name": "wait1",
    "proto": "wait",
    "compext": "(80 for (NP{tags:creature|vehicle|event} (LOCATION) | INF_CLAUSE))"
  },
  {
    "name": "stay",
    "proto": "wait",
    "disabled": false,
    "compext": "(behind) (LOCATION)"
  },
  {
    "name": "loiter",
    "proto": "wait"
  },
  {
    "name": "lurk",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "camp",
    "proto": "wait"
  },
  {
    "name": "collide",
    "disabled": false,
    "class": "event",
    "tags": "object&!fixed",
    "vtags": "--",
    "volition": "false",
    "ptpl": "null",
    "compext": "(80 with NP{tags:object&!fixed} |20 into NP{tags:object; size: >subject.size} )"
  },
  {
    "name": "sparkle",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "tang": "2",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "keep",
    "proto": "stop.1",
    "prohibitions": "aspect:retro",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "inflections": "simp.past:kept"
  },
  {
    "name": "keep1",
    "proto": "keep",
    "disabled": false,
    "anim": ">1.5",
    "volition": "true",
    "compcore": "NP{tags: object|substance & !fixed; anim: <subject.anim}"
  },
  {
    "name": "stop",
    "disabled": false,
    "class": "event",
    "tags": "creature",
    "vtags": "--",
    "ptpl": "null",
    "compext": "(LOCATION)"
  },
  {
    "name": "stop.1",
    "proto": "stop",
    "disabled": false,
    "tags": "--",
    "vtags": "--",
    "ptpl": "null",
    "compcore": "GP{subject.R}",
    "compext": "--"
  },
  {
    "name": "stop1",
    "proto": "stop",
    "disabled": false,
    "tags": "event|process|undertaking|behaviour",
    "vtags": "--",
    "ptpl": "null",
    "compcore": "--",
    "compext": "--"
  },
  {
    "name": "stop2",
    "proto": "stop",
    "disabled": false,
    "tags": "--",
    "vtags": "--",
    "anim": "3",
    "ptpl": "past",
    "compcore": "( NP{tags:occasion|undertaking}   |  NP{def:def;tags:behaviour})",
    "compext": "--"
  },
  {
    "name": "buzz",
    "disabled": false,
    "class": "activity",
    "tags": "thing&!place",
    "vtags": "--",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "shrink",
    "proto": "grow",
    "vtags": "--",
    "inflections": "simp.past:shrank, retro:shrunk"
  },
  {
    "name": "grow",
    "tang": 1,
    "class": "process",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "matter|place|phenomenon",
    "vtags": "--",
    "inflections": "simp.past:grew, retro:grown"
  },
  {
    "name": "grow1",
    "proto": "grow",
    "tags": "lifeform"
  },
  {
    "name": "grow2",
    "proto": "grow",
    "anim": 3,
    "tags": "--",
    "compcore": "NP{tags:lifeform&!creature}"
  },
  {
    "name": "grow3",
    "proto": "grow",
    "tags": "creature",
    "compcore": "up"
  },
  {
    "name": "beat",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "null",
    "compcore": "(up DP{tags: creature})",
    "inflections": "simp.past:beat, retro:beaten"
  },
  {
    "name": "forgive",
    "proto": "thank",
    "disabled": false,
    "vtags": "--",
    "inflections": "simp.past:forgave, retro:forgiven"
  },
  {
    "name": "thank",
    "disabled": false,
    "class": "event",
    "vtags": "speech",
    "anim": "3",
    "ptpl": "null",
    "compcore": "NP{anim:3}",
    "compext": "(for GP{unpack: subject.R; volition:true})"
  },
  {
    "name": "cry",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "pres"
  },
  {
    "name": "surrender",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "null"
  },
  {
    "name": "surrender.1",
    "proto": "surrender",
    "disabled": false,
    "tags": "territory",
    "anim": "--"
  },
  {
    "name": "intrigue",
    "proto": "bother",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "ptpl": "pres"
  },
  {
    "name": "amuse",
    "proto": "bother",
    "disabled": false,
    "vtags": "--",
    "ptpl": "pres|past"
  },
  {
    "name": "fascinate",
    "proto": "amuse",
    "disabled": false,
    "ptpl": "past"
  },
  {
    "name": "shock",
    "proto": "interest",
    "disabled": false
  },
  {
    "name": "excite",
    "proto": "amuse",
    "disabled": false
  },
  {
    "name": "disturb",
    "proto": "amuse",
    "disabled": false
  },
  {
    "name": "concern",
    "proto": "bother",
    "disabled": false
  },
  {
    "name": "interest",
    "proto": "amuse",
    "disabled": false,
    "ptpl": "pres"
  },
  {
    "name": "happen",
    "disabled": false,
    "class": "event",
    "tags": "occurrence",
    "vtags": "--",
    "volition": "false",
    "ptpl": "null"
  },
  {
    "name": "repeat",
    "proto": "happen",
    "disabled": false
  },
  {
    "name": "happen.1",
    "disabled": false,
    "class": "activity",
    "tags": "event",
    "vtags": "--",
    "volition": "false",
    "ptpl": "null"
  },
  {
    "name": "enjoy",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": "3",
    "ptpl": "past",
    "compcore": "NP{anim:<3}"
  },
  {
    "name": "enjoy.1",
    "proto": "enjoy",
    "disabled": false,
    "anim": "2",
    "ptpl": "null",
    "compcore": "--",
    "compext": "ACTIVE_STUFF"
  },
  {
    "name": "doubt",
    "proto": "believe",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null",
    "compcore": "NP{anim: 3}"
  },
  {
    "name": "doubt.1",
    "proto": "doubt",
    "disabled": false,
    "compcore": "--",
    "compext": "THAT_CLAUSE"
  },
  {
    "name": "frolick",
    "proto": "dance1",
    "disabled": false,
    "anim": "2"
  },
  {
    "name": "grumble",
    "proto": "yell",
    "disabled": false,
    "vtags": "--",
    "compext": "(40 about NP)"
  },
  {
    "name": "juggle",
    "disabled": false,
    "class": "activity",
    "tags": "person",
    "vtags": "performance, activity",
    "volition": "true",
    "ptpl": "past|pres",
    "compcore": "(40 NP{number:pl;tags:item;size:<subject.size})"
  },
  {
    "name": "long",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": "3",
    "volition": "false",
    "ptpl": "null",
    "compext": "for NP"
  },
  {
    "name": "misunderstand",
    "proto": "understand",
    "vtags": "--",
    "inflections": "simp.past:misunderstood"
  },
  {
    "name": "placate",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "anim": "3",
    "ptpl": "past",
    "compcore": "NP{anim:>1}"
  },
  {
    "name": "waylay",
    "proto": "placate",
    "disabled": false,
    "class": "event",
    "vtags": "--"
  },
  {
    "name": "faint",
    "disabled": false,
    "class": "event",
    "tags": "creature",
    "vtags": "--",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "sneeze",
    "proto": "faint",
    "disabled": false,
    "class": "semel",
    "vtags": "--"
  },
  {
    "name": "bite",
    "proto": "punch",
    "disabled": false,
    "tags": "creature",
    "inflections": "simp.past: bit, retro: bitten"
  },
  {
    "name": "explode",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "tang": "2",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "practice",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "ptpl": "null",
    "compcore": "(70 NP{tags:activity})"
  },
  {
    "name": "criminalize",
    "proto": "practice",
    "disabled": false,
    "vtags": "--",
    "ptpl": "past",
    "compcore": "(45 N{tags: artifact; number:pl;}   |55 NP{tags:activity|game|ideology|enterprise;number:sg})"
  },
  {
    "name": "criminalize.1",
    "proto": "criminalize",
    "disabled": false,
    "ptpl": "null",
    "compcore": "--",
    "compext": "(ACTIVE_STUFF | ACTION{volition:true})"
  },
  {
    "name": "support",
    "proto": "practice",
    "disabled": false,
    "vtags": "--",
    "ptpl": "past",
    "compcore": "( NP{anim:3}   | NP{tags:behaviour; number:sg} )"
  },
  {
    "name": "dance",
    "disabled": false,
    "class": "activity",
    "tags": "creature&!bug",
    "vtags": "activity",
    "ptpl": "pres"
  },
  {
    "name": "dance1",
    "proto": "dance",
    "disabled": false,
    "vtags": "motion, grounded",
    "compext": "(GOAL | PATH)"
  },
  {
    "name": "sing",
    "proto": "dance",
    "disabled": false,
    "vtags": "performance, vocal",
    "compcore": "(30 NP{tags:song})",
    "inflections": "simp.past: sang, retro: sung"
  },
  {
    "name": "exercise",
    "proto": "dance"
  },
  {
    "name": "dream",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": ">1",
    "volition": "false",
    "ptpl": "null",
    "compext": "(35 about NP    |35  THAT_CLAUSE)"
  },
  {
    "name": "approve",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "ptpl": "null",
    "compext": "(30 of NP{tang:0;anim:0}     |25  of NP |20 of ACTIVE_STUFF |15 ACTION)"
  },
  {
    "name": "disapprove",
    "proto": "approve",
    "disabled": false,
    "vtags": "--"
  },
  {
    "name": "interrupt",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "ptpl": "past",
    "compcore": "NP{tags:creature|event|process|undertaking|behaviour}"
  },
  {
    "name": "disrupt",
    "proto": "interrupt",
    "disabled": false
  },
  {
    "name": "interrupt.1",
    "proto": "interrupt",
    "disabled": false,
    "tags": "creature|event|process|undertaking|behaviour|difficulty",
    "vtags": "--",
    "anim": "<3",
    "ptpl": "null"
  },
  {
    "name": "wonder",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": "3",
    "volition": "false",
    "ptpl": "null",
    "compext": "(WH_CLAUSE  | WH_INF | about NP | if SENTENCE)"
  },
  {
    "name": "forget",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "volition": "false",
    "ptpl": "null",
    "compext": "(80 (WH_CLAUSE|about NP{def:def}|THAT_CLAUSE))",
    "inflections": "simp.past:forgot, retro:forgotten"
  },
  {
    "name": "forget1",
    "proto": "forget",
    "disabled": false,
    "vtags": "--",
    "ptpl": "past",
    "compcore": "NP",
    "compext": "--"
  },
  {
    "name": "forget1.1",
    "proto": "forget1",
    "disabled": false,
    "ptpl": "null",
    "compcore": "--",
    "compext": "INF_PHRASE{volition:true}"
  },
  {
    "name": "remember",
    "proto": "forget",
    "disabled": false,
    "vtags": "--",
    "compext": "(WH_CLAUSE|THAT_CLAUSE)",
    "inflections": "--"
  },
  {
    "name": "remember1",
    "proto": "forget1",
    "disabled": false,
    "vtags": "--",
    "inflections": "--"
  },
  {
    "name": "realize",
    "proto": "remember",
    "disabled": false,
    "vtags": "--",
    "compext": "(WH_CLAUSE|THAT_CLAUSE)"
  },
  {
    "name": "notice",
    "proto": "remember",
    "disabled": false,
    "compext": "THAT_CLAUSE"
  },
  {
    "name": "notice1",
    "proto": "notice",
    "disabled": false,
    "ptpl": "past",
    "compcore": "NP",
    "compext": "--"
  },
  {
    "name": "figure",
    "proto": "realize",
    "disabled": false,
    "volition": "true",
    "compext": "out (WH_CLAUSE|THAT_CLAUSE)"
  },
  {
    "name": "figure2",
    "proto": "figure",
    "disabled": false,
    "compcore": "PRONOUN{nocomplement:true}",
    "compext": "out"
  },
  {
    "name": "figure3",
    "proto": "figure",
    "disabled": false,
    "compext": "out WH_INF{anim:3;tags:person;volition:true}"
  },
  {
    "name": "find1",
    "proto": "figure",
    "disabled": false,
    "class": "process",
    "inflections": "simp.past:found"
  },
  {
    "name": "discover",
    "proto": "realize",
    "disabled": false
  },
  {
    "name": "discover1",
    "proto": "discover",
    "disabled": false,
    "compcore": "NP{tags:territory|activity|enterprise|event&!episode&!experience}",
    "compext": "--"
  },
  {
    "name": "discover1.1",
    "proto": "discover1",
    "disabled": false,
    "compcore": "NP{tags: matter|phenomenon}",
    "compext": "LOCATION"
  },
  {
    "name": "lie",
    "disabled": false,
    "class": "event",
    "vtags": "speech",
    "anim": "3",
    "volition": "true",
    "ptpl": "pres|TODO",
    "compext": "(to NP{anim:3}) about (NP|WH_CLAUSE)",
    "inflections": "prog: lying"
  },
  {
    "name": "ask",
    "disabled": false,
    "class": "event",
    "vtags": "speech",
    "anim": "3",
    "ptpl": "past|by1",
    "compcore": "NP{anim:3}",
    "compext": "INF_PHRASE{volition: true}"
  },
  {
    "name": "ask.1",
    "proto": "ask",
    "disabled": false,
    "vtags": "--",
    "ptpl": "past|no-by",
    "compext": "(20 WH_CLAUSE | 20 if SENTENCE |20 NP{name:question|riddle;orsimilar:true} | 20 about NP)"
  },
  {
    "name": "ask.2",
    "proto": "ask.1",
    "disabled": false,
    "ptpl": "null",
    "compcore": "--"
  },
  {
    "name": "tell",
    "disabled": false,
    "class": "event",
    "vtags": "speech",
    "anim": "3",
    "ptpl": "null",
    "compcore": "NP{anim:3}",
    "compext": "INF_PHRASE{volition:true}",
    "inflections": "simp.past:told"
  },
  {
    "name": "learn",
    "disabled": false,
    "class": "process",
    "tags": "person",
    "volition": "true",
    "ptpl": "null",
    "compext": "(85 about NP)"
  },
  {
    "name": "learn.1",
    "proto": "learn",
    "disabled": false,
    "compext": "(30 THAT_CLAUSE |70 how INF_PHRASE{volition:true})"
  },
  {
    "name": "tell.1",
    "proto": "tell",
    "disabled": false,
    "compext": "THAT_CLAUSE"
  },
  {
    "name": "tell.X",
    "proto": "tell",
    "prohibitions": "pasv: false",
    "disabled": true,
    "vtags": "--",
    "ptpl": "past|by1",
    "compcore": "NP{anim:3}",
    "compext": "(WH_CLAUSE |  WH_INF{c0.R})"
  },
  {
    "name": "teach",
    "proto": "tell",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null",
    "inflections": "simp.past:taught"
  },
  {
    "name": "remind",
    "proto": "tell",
    "vtags": "--",
    "inflections": "--"
  },
  {
    "name": "argue",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "pres",
    "compext": "(50 (with NP{anim:3}) (about (NP | WH_CLAUSE))   |35 THAT_CLAUSE)",
    "inflections": "prog: arguing"
  },
  {
    "name": "prove",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "ptpl": "null",
    "compext": "(THAT_CLAUSE|WH_CLAUSE)",
    "inflections": "retro: proven"
  },
  {
    "name": "work",
    "disabled": false,
    "class": "state",
    "tags": "device",
    "vtags": "--",
    "volition": "false",
    "ptpl": "null"
  },
  {
    "name": "work1",
    "proto": "work",
    "disabled": false,
    "tags": "--",
    "vtags": "habit",
    "anim": "3",
    "volition": "true",
    "compext": "(LOCATION)"
  },
  {
    "name": "work2",
    "proto": "work",
    "disabled": false,
    "class": "activity",
    "tags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "pres",
    "compext": "(on NP{tags: undertaking|device|vehicle})"
  },
  {
    "name": "move",
    "disabled": false,
    "class": "event",
    "tags": "item|lifeform",
    "vtags": "--",
    "ptpl": "pres"
  },
  {
    "name": "move1",
    "proto": "move",
    "disabled": false,
    "tags": "weather",
    "vtags": "motion, generalMotion",
    "anim": "3",
    "tang": "<9",
    "ptpl": "null",
    "compext": "MOTION"
  },
  {
    "name": "conspire",
    "proto": "gather",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null",
    "compext": "(60 against NP{anim:3})"
  },
  {
    "name": "scatter",
    "disabled": false,
    "class": "event",
    "tags": "collective",
    "vtags": "--",
    "anim": ">1",
    "volition": "true",
    "ptpl": "pres"
  },
  {
    "name": "scatter1",
    "disabled": false,
    "class": "process",
    "tags": "--",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "null",
    "compcore": "NP{ ( number:pl;tags:item | tags:aggregate|tags:collective ); anim:0;tang:2;size:<5 }"
  },
  {
    "name": "gather",
    "disabled": false,
    "class": "process",
    "tags": "collective",
    "vtags": "--",
    "anim": ">1",
    "ptpl": "pres",
    "compext": "(together)"
  },
  {
    "name": "gather1",
    "proto": "gather",
    "prohibitions": "number:sg",
    "disabled": false,
    "tags": "--",
    "vtags": "--",
    "ptpl": "null",
    "compcore": "NP{ ( number:pl;tags:item  | tags:aggregate|tags:collective ); anim:0;tang:2;size:<5 }"
  },
  {
    "name": "revolt",
    "proto": "conspire",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": ">1",
    "ptpl": "null",
    "compext": "(30 against NP{anim:3})"
  },
  {
    "name": "suffer",
    "prohibitions": "--",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": ">0",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "fart",
    "proto": "sneeze",
    "disabled": false,
    "vtags": "--"
  },
  {
    "name": "belch",
    "proto": "sneeze",
    "disabled": false,
    "vtags": "--"
  },
  {
    "name": "vomit",
    "proto": "sneeze",
    "disabled": false
  },
  {
    "name": "cough",
    "proto": "sneeze",
    "disabled": false
  },
  {
    "name": "hiccup",
    "proto": "sneeze",
    "disabled": false
  },
  {
    "name": "turn",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "past|by2",
    "compcore": "NP{tags:device;anim:1}",
    "compext": "(on|off)"
  },
  {
    "name": "shake",
    "proto": "glow",
    "disabled": false,
    "tags": "object",
    "vtags": "--",
    "inflections": "simp.past: shook, retro: shaken"
  },
  {
    "name": "run",
    "proto": "walk",
    "disabled": false,
    "compext": "((away|off))",
    "inflections": "simp.past: ran, retro: run"
  },
  {
    "name": "run1",
    "disabled": false,
    "class": "activity",
    "tags": "machine",
    "vtags": "--",
    "anim": "1",
    "volition": "false",
    "ptpl": "pres",
    "inflections": "simp.past: ran, retro: run"
  },
  {
    "name": "jog",
    "proto": "walk",
    "disabled": false
  },
  {
    "name": "waddle",
    "proto": "walk",
    "disabled": false
  },
  {
    "name": "rollerblade",
    "proto": "skate",
    "disabled": false
  },
  {
    "name": "skate",
    "proto": "walk",
    "anim": 3
  },
  {
    "name": "trudge",
    "proto": "walk.1",
    "disabled": false
  },
  {
    "name": "moonwalk",
    "proto": "walk",
    "disabled": false
  },
  {
    "name": "shiver",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "creature",
    "vtags": "--"
  },
  {
    "name": "snore",
    "proto": "shiver",
    "vtags": "--"
  },
  {
    "name": "glow",
    "disabled": false,
    "class": "activity",
    "tags": "matter|place",
    "vtags": "--",
    "tang": ">0",
    "ptpl": "pres"
  },
  {
    "name": "quiver",
    "proto": "shake",
    "anim": ">1",
    "tags": "lifeform|bodyPart",
    "vtags": "--",
    "inflections": "--"
  },
  {
    "name": "jiggle",
    "proto": "shake",
    "disabled": false,
    "tags": "item",
    "vtags": "--"
  },
  {
    "name": "bounce",
    "disabled": false,
    "class": "semel",
    "tags": "object",
    "vtags": "--",
    "anim": "<2",
    "tang": ">1",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "bounce.1",
    "proto": "bounce",
    "disabled": false,
    "class": "process",
    "tags": "--",
    "vtags": "motion, grounded",
    "anim": ">0",
    "compext": "(MOTION)"
  },
  {
    "name": "malfunction",
    "proto": "function",
    "disabled": false,
    "vtags": "--"
  },
  {
    "name": "function",
    "disabled": false,
    "class": "activity",
    "tags": "device",
    "vtags": "--",
    "anim": "1",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "bleed",
    "proto": "shiver",
    "vtags": "--",
    "inflections": "simp.past:bled"
  },
  {
    "name": "beat-box",
    "proto": "sing",
    "disabled": false,
    "vtags": "--"
  },
  {
    "name": "organize",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{(number:pl;tags:!feature|tags:collective)}"
  },
  {
    "name": "organize1",
    "proto": "organize",
    "disabled": false,
    "compcore": "NP{tags:occasion}"
  },
  {
    "name": "look",
    "disabled": false,
    "class": "activity",
    "tags": "creature",
    "vtags": "--",
    "anim": ">1",
    "volition": "true",
    "ptpl": "null",
    "compext": "at NP{tags:visible}"
  },
  {
    "name": "stare",
    "proto": "look",
    "disabled": false
  },
  {
    "name": "glare",
    "proto": "look",
    "disabled": false
  },
  {
    "name": "look2",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "tang": ">0",
    "volition": "false",
    "ptpl": "null",
    "compext": "like NP{tang: subject.tang}"
  },
  {
    "name": "travel",
    "disabled": false,
    "class": "process",
    "vtags": "motion, generalMotion",
    "anim": ">1",
    "ptpl": "null",
    "compext": "(MOTION)"
  },
  {
    "name": "travel1",
    "proto": "travel",
    "disabled": false,
    "class": "process",
    "tags": "weather",
    "vtags": "motion, grounded",
    "anim": "--",
    "volition": "false"
  },
  {
    "name": "retreat",
    "proto": "travel"
  },
  {
    "name": "return",
    "proto": "travel",
    "disabled": false
  },
  {
    "name": "come",
    "proto": "go",
    "disabled": false,
    "ptpl": "null",
    "compext": "(22 SOURCE{prox:dist}  |22 GOAL{prox:prox}  |22 PATH)",
    "inflections": "simp.past: came, retro: come"
  },
  {
    "name": "drive",
    "disabled": false,
    "class": "activity",
    "tags": "person",
    "vtags": "motion, grounded",
    "ptpl": "past|by1",
    "compcore": "NP{name:car;orsimilar:true;number:subject.number}",
    "inflections": "simp.past: drove, retro: driven"
  },
  {
    "name": "drive.1",
    "proto": "drive",
    "disabled": false,
    "ptpl": "null",
    "compcore": "--"
  },
  {
    "name": "drive.2",
    "proto": "drive",
    "disabled": false,
    "class": "process",
    "compcore": "NP{name:car;orsimilar:true;number:subject.number}",
    "compext": "MOTION"
  },
  {
    "name": "drive1",
    "proto": "fly1",
    "disabled": false,
    "vtags": "motion, grounded",
    "ptpl": "null"
  },
  {
    "name": "arrest",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "ptpl": "past|by1",
    "compcore": "NP{tags:person}",
    "compext": "(45 for ACTIVE_STUFF{unpack:c0.R} |10 for ACTION{unpack:c0.R, volition:true})"
  },
  {
    "name": "solve",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{name:problem;orsimilar:true}"
  },
  {
    "name": "complete",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:undertaking}"
  },
  {
    "name": "start",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "ptpl": "null",
    "compcore": "GP{subject.R}"
  },
  {
    "name": "start1",
    "proto": "start",
    "disabled": false,
    "vtags": "--",
    "anim": "3",
    "ptpl": "past",
    "compcore": "( NP{tags:occasion|undertaking}   |  NP{def:def;tags:activity})"
  },
  {
    "name": "quit",
    "proto": "start1",
    "disabled": false,
    "ptpl": "null",
    "inflections": "simp.past:quit"
  },
  {
    "name": "quit.1",
    "proto": "quit",
    "disabled": false,
    "compcore": "GP{subject.R}"
  },
  {
    "name": "plan1",
    "proto": "start1",
    "disabled": false,
    "vtags": "--"
  },
  {
    "name": "plan",
    "proto": "try",
    "disabled": false,
    "vtags": "--",
    "anim": "3"
  },
  {
    "name": "cancel",
    "proto": "start1",
    "disabled": false
  },
  {
    "name": "postpone",
    "proto": "cancel"
  },
  {
    "name": "begin",
    "disabled": false,
    "class": "event",
    "tags": "hasDuration|situation",
    "volition": "false",
    "ptpl": "null",
    "inflections": "simp.past: began, retro: begun, prog: beginning"
  },
  {
    "name": "start2",
    "proto": "begin",
    "disabled": false,
    "inflections": "--"
  },
  {
    "name": "end",
    "proto": "begin",
    "disabled": false,
    "inflections": "--"
  },
  {
    "name": "agree",
    "disabled": false,
    "class": "state",
    "tags": "collective",
    "vtags": "--",
    "anim": "3",
    "ptpl": "null",
    "compext": "(20 THAT_CLAUSE  |  20 INF_PHRASE)"
  },
  {
    "name": "agree.1",
    "proto": "agree",
    "vtags": "--",
    "prohibitions": "number:sg"
  },
  {
    "name": "agree2",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": "3",
    "ptpl": "null",
    "compext": "(55 with NP{anim:3})"
  },
  {
    "name": "disagree",
    "proto": "agree2",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null"
  },
  {
    "name": "satisfy",
    "proto": "bother",
    "disabled": false,
    "class": "process",
    "tags": "ABSTRACT",
    "vtags": "--"
  },
  {
    "name": "soothe",
    "proto": "bother1",
    "disabled": false,
    "class": "process"
  },
  {
    "name": "pacify",
    "proto": "soothe",
    "disabled": false
  },
  {
    "name": "satisfy1",
    "proto": "bother1",
    "disabled": false,
    "class": "state",
    "vtags": "--"
  },
  {
    "name": "party",
    "disabled": false,
    "class": "activity",
    "vtags": "activity",
    "anim": "3",
    "volition": "true",
    "ptpl": "null"
  },
  {
    "name": "vex",
    "proto": "bother",
    "disabled": false,
    "class": "state",
    "vtags": "--"
  },
  {
    "name": "fail",
    "disabled": false,
    "class": "event",
    "tags": "telic|procedure|device",
    "vtags": "--",
    "volition": "false",
    "ptpl": "null"
  },
  {
    "name": "succeed",
    "proto": "fail",
    "disabled": false
  },
  {
    "name": "fail.1",
    "proto": "fail",
    "disabled": false,
    "tags": "--",
    "vtags": "--",
    "anim": "3",
    "ptpl": "null"
  },
  {
    "name": "fail1",
    "proto": "fail",
    "disabled": false,
    "tags": "--",
    "vtags": "--",
    "anim": ">1",
    "ptpl": "null",
    "compcore": "NP{ tags:difficulty & telic & hasDuration } "
  },
  {
    "name": "fail1.1",
    "proto": "fail1",
    "disabled": false,
    "ptpl": "null",
    "compcore": "--",
    "compext": "(INF_PHRASE | at NP{tags:activity;number:sg})"
  },
  {
    "name": "pend",
    "prohibitions": "aspect:simp|retro",
    "disabled": false,
    "class": "activity",
    "tags": "happening",
    "vtags": "--",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "gamble",
    "disabled": false,
    "class": "activity",
    "vtags": "activity",
    "anim": "3",
    "volition": "true",
    "ptpl": "pres"
  },
  {
    "name": "change",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "ptpl": "pres"
  },
  {
    "name": "suck",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": "2",
    "volition": "false",
    "ptpl": "null",
    "compext": "(80 at (40 NP{tags:activity;number:sg;volition:true;} |60 ACTIVE_STUFF{unpack:subject.R}) )"
  },
  {
    "name": "excel",
    "proto": "suck",
    "disabled": false
  },
  {
    "name": "live",
    "disabled": false,
    "class": "state",
    "vtags": "habit",
    "anim": ">1",
    "ptpl": "pres",
    "compext": "(80 LOCATION)"
  },
  {
    "name": "dwell",
    "proto": "live",
    "compext": "LOCATION",
    "inflections": "retro: dwelt"
  },
  {
    "name": "abandon",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": ">1",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:thing|occasion|undertaking|difficulty}"
  },
  {
    "name": "join",
    "disabled": false,
    "class": "event",
    "anim": ">1.5",
    "volition": "true",
    "ptpl": "null",
    "compcore": "(NP{anim:3}|NP{tags:organization})"
  },
  {
    "name": "repair",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "anim": "3",
    "ptpl": "past",
    "compcore": "NP{tags:artifact}"
  },
  {
    "name": "renovate",
    "proto": "repair",
    "disabled": false,
    "compcore": "NP{tags:vehicle|structure}"
  },
  {
    "name": "fix",
    "proto": "repair",
    "disabled": false
  },
  {
    "name": "crawl",
    "proto": "walk",
    "disabled": false,
    "tags": "creature",
    "vtags": "motion, contact"
  },
  {
    "name": "burn",
    "disabled": false,
    "class": "activity",
    "tags": "object|substance&!fluid|place",
    "vtags": "--",
    "volition": "false",
    "ptpl": "pres",
    "inflections": "retro: burnt"
  },
  {
    "name": "burn.1",
    "proto": "burn",
    "disabled": false,
    "tags": "person",
    "vtags": "--",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:object|substance&!fluid|place}"
  },
  {
    "name": "crack",
    "disabled": false,
    "class": "event",
    "tags": "item|solid",
    "vtags": "--",
    "anim": "<1.5",
    "ptpl": "null"
  },
  {
    "name": "crack.1",
    "disabled": false,
    "tags": "creature|force",
    "vtags": "--",
    "anim": "--",
    "ptpl": "past",
    "compcore": "NP{tags:item|solid}"
  },
  {
    "name": "shatter",
    "proto": "crack",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null"
  },
  {
    "name": "collapse",
    "disabled": false,
    "class": "event",
    "tags": "structure",
    "vtags": "--",
    "anim": "<1.5",
    "volition": "false",
    "ptpl": "null"
  },
  {
    "name": "nuke",
    "disabled": false,
    "class": "event",
    "tags": "person|territory|organization",
    "vtags": "--",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{ tags:territory|site}"
  },
  {
    "name": "help",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "null",
    "compcore": "NP{anim:>1}",
    "compext": "(INF_PHRASE2{unpack:vp.compcore.R})"
  },
  {
    "name": "wear",
    "disabled": false,
    "class": "state",
    "tags": "creature",
    "vtags": "--",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:clothing}",
    "inflections": "simp.past: wore, retro: worn"
  },
  {
    "name": "take",
    "disabled": false,
    "class": "event",
    "vtags": "motion, generalMotion",
    "anim": ">1",
    "volition": "true",
    "ptpl": "past|by2",
    "compcore": "NP{tags:item|mass|solid;anim:<3}",
    "compext": "MOTION",
    "inflections": "simp.past: took, retro: taken"
  },
  {
    "name": "take3",
    "proto": "take",
    "disabled": false,
    "class": "activity",
    "tags": "person",
    "vtags": "--",
    "volition": "true",
    "ptpl": "null",
    "compcore": "NP{def:indef, name: shower, orsimilar: true}",
    "compext": "--"
  },
  {
    "name": "take4",
    "proto": "take",
    "disabled": false,
    "tags": "person",
    "vtags": "--",
    "volition": "true",
    "ptpl": "null",
    "compcore": "NP{possessed: false; name:pill; orsimilar: true}",
    "compext": "--"
  },
  {
    "name": "take404",
    "proto": "take4",
    "disabled": false
  },
  {
    "name": "take444",
    "proto": "take4",
    "disabled": false
  },
  {
    "name": "take454",
    "proto": "take4",
    "disabled": false
  },
  {
    "name": "take3.1",
    "proto": "take3",
    "disabled": false,
    "tags": "animal",
    "compcore": "NP{def:indef, name: nap, orsimilar: true}"
  },
  {
    "name": "take1",
    "proto": "take",
    "disabled": false,
    "tags": "person",
    "vtags": "--",
    "anim": "--",
    "ptpl": "TODO",
    "compcore": "--",
    "compext": "(70 off DP{tags:clothing}|30  PRONOUN{tags:clothing} off)"
  },
  {
    "name": "take99",
    "proto": "take",
    "disabled": false,
    "ptpl": "null",
    "compcore": "NP{name: shortcut}",
    "compext": "(30 (GOAL|PATH))"
  },
  {
    "name": "take2",
    "proto": "take",
    "disabled": false,
    "vtags": "--",
    "ptpl": "null",
    "compcore": "--",
    "compext": "off"
  },
  {
    "name": "put1",
    "proto": "take1",
    "disabled": false,
    "vtags": "placement",
    "ptpl": "TODO",
    "compext": "(85 on DP{tags:clothing}   | 15 PRONOUN{tags:clothing} on)",
    "inflections": "simp.past:put"
  },
  {
    "name": "put",
    "disabled": false,
    "class": "event",
    "tags": "creature",
    "vtags": "placement",
    "volition": "true",
    "ptpl": "past|by2",
    "compcore": "NP{tags:matter&!fixed; size: <subject.size}",
    "compext": "LOCATION",
    "inflections": "simp.past:put"
  },
  {
    "name": "put4",
    "proto": "put",
    "disabled": false,
    "volition": "true",
    "ptpl": "null",
    "compcore": "down DP{tags:matter&!fixed; size: <subject.size}",
    "compext": "--"
  },
  {
    "name": "put4.1",
    "proto": "put4",
    "disabled": false,
    "compcore": "PRONOUN{tags:matter&!fixed; size: <subject.size; nocomplement: true} down"
  },
  {
    "name": "put3",
    "proto": "put2",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "ptpl": "null",
    "compcore": "--",
    "compext": "up with NP"
  },
  {
    "name": "put2",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "null",
    "compext": "off ACTIVE_STUFF",
    "inflections": "simp.past:put"
  },
  {
    "name": "place",
    "proto": "put",
    "disabled": false,
    "inflections": "--"
  },
  {
    "name": "fill",
    "disabled": false,
    "class": "process",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "past|no-by",
    "compcore": "NP{tags:container|place}",
    "compext": "(66 with NP({tags:substance|collective} | {tags:item;number:pl}))"
  },
  {
    "name": "wander",
    "proto": "walk",
    "disabled": false
  },
  {
    "name": "sneak",
    "proto": "travel",
    "disabled": false,
    "inflections": "simp.past:snuck"
  },
  {
    "name": "drag",
    "proto": "take",
    "vtags": "motion, grounded",
    "compcore": "NP{tags: item|lifeform}"
  },
  {
    "name": "throw",
    "proto": "toss",
    "disabled": false,
    "inflections": "simp.past: threw, retro: thrown"
  },
  {
    "name": "throw1",
    "proto": "throw",
    "disabled": false,
    "compext": "away"
  },
  {
    "name": "throw1.1",
    "proto": "throw1",
    "disabled": false,
    "compcore": "away",
    "compext": "DP{tags:object&!fixed|substance&!gas;size:<subject.size}"
  },
  {
    "name": "jump",
    "disabled": false,
    "class": "event",
    "tags": "creature",
    "vtags": "motion, jump",
    "volition": "true",
    "ptpl": "pres",
    "compext": "MOTION"
  },
  {
    "name": "sail",
    "disabled": false,
    "class": "process",
    "tags": "waterVehicle|person",
    "vtags": "motion, waterSurface",
    "ptpl": "null",
    "compext": "MOTION"
  },
  {
    "name": "climb",
    "disabled": false,
    "class": "process",
    "tags": "creature&!waterAnimal",
    "vtags": "motion, vertical, up, contact",
    "volition": "true",
    "ptpl": "null",
    "compext": "MOTION{tags:hasHeight|vertical; anim:0}"
  },
  {
    "name": "climb.1",
    "proto": "climb",
    "disabled": false,
    "compcore": "NP{tags:hasHeight|vertical & !void; anim:0}",
    "compext": "--"
  },
  {
    "name": "slide",
    "disabled": false,
    "class": "process",
    "tags": "object&!fixed",
    "vtags": "motion, grounded",
    "volition": "false",
    "ptpl": "null",
    "compext": "MOTION",
    "inflections": "simp.past:slid"
  },
  {
    "name": "skid",
    "proto": "slide",
    "inflections": "--"
  },
  {
    "name": "slither",
    "proto": "slide",
    "disabled": false,
    "tags": "creature",
    "vtags": "motion, contact",
    "anim": ">1",
    "volition": "true",
    "inflections": "--"
  },
  {
    "name": "leap",
    "proto": "jump",
    "disabled": false
  },
  {
    "name": "shuffle",
    "proto": "limp",
    "disabled": false
  },
  {
    "name": "saunter",
    "proto": "limp",
    "disabled": false
  },
  {
    "name": "mosey",
    "proto": "limp",
    "disabled": false
  },
  {
    "name": "stroll",
    "proto": "limp"
  },
  {
    "name": "trot",
    "proto": "limp",
    "disabled": false
  },
  {
    "name": "jog",
    "proto": "limp"
  },
  {
    "name": "skip",
    "proto": "limp",
    "disabled": false
  },
  {
    "name": "scurry",
    "proto": "limp"
  },
  {
    "name": "traipse",
    "proto": "limp"
  },
  {
    "name": "march",
    "proto": "walk",
    "disabled": false
  },
  {
    "name": "roll",
    "proto": "slide"
  },
  {
    "name": "race",
    "proto": "run",
    "disabled": false,
    "compext": "--"
  },
  {
    "name": "transport",
    "proto": "take"
  },
  {
    "name": "smuggle",
    "disabled": false,
    "class": "process",
    "vtags": "motion, generalMotion",
    "anim": "3",
    "volition": "true",
    "ptpl": "past|by2",
    "compcore": "NP{tags:matter&!fixed; anim:(0|>0)}",
    "compext": "(50 into |40 out of | 10 (through|across)) (70 NP{tags: territory} |30 NP{tags: space|site & !bodyOfWater; size: >6})"
  },
  {
    "name": "deport",
    "prohibitions": "pasv: false",
    "disabled": false,
    "class": "event",
    "anim": "3",
    "ptpl": "past|no-by",
    "compext": "from DP{tags:country}"
  },
  {
    "name": "exile",
    "proto": "deport",
    "disabled": false,
    "compcore": "NP{tags:person}",
    "compext": "from NP{tags:territory}"
  },
  {
    "name": "immigrate",
    "disabled": false,
    "class": "event",
    "anim": "3",
    "volition": "true",
    "ptpl": "null",
    "compext": "to NP{tags:country}"
  },
  {
    "name": "annex",
    "disabled": false,
    "class": "event",
    "tags": "country",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags: region}"
  },
  {
    "name": "colonize",
    "proto": "annex",
    "compcore": "NP{tags: territory|site; size: >9}"
  },
  {
    "name": "haul",
    "proto": "drag",
    "anim": 3
  },
  {
    "name": "tow",
    "proto": "drag",
    "anim": 3
  },
  {
    "name": "deliver",
    "disabled": false,
    "class": "process",
    "tags": "person",
    "vtags": "motion, generalMotion",
    "anim": "3",
    "volition": "true",
    "ptpl": "past|by2",
    "compcore": "NP{tags:object&!fixed; anim: <3}",
    "compext": "((GOAL|to NP{anim:3}))"
  },
  {
    "name": "descend",
    "proto": "fall1",
    "volition": "TRUE",
    "compext": "(25  SOURCE  |50 GOAL  |25 PATH)",
    "inflections": "--"
  },
  {
    "name": "tumble",
    "disabled": false,
    "class": "process",
    "tags": "object&!fixed",
    "vtags": "motion, grounded",
    "volition": "false",
    "ptpl": "null",
    "compext": "(45 GOAL |55 down NP{tags:incline})",
    "inflections": "--"
  },
  {
    "name": "mistake",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "volition": "false",
    "ptpl": "past|no-by",
    "compcore": "NP",
    "compext": "for NP{def:indef;anim:subject.anim;tang:subject.tang;number:subject.number}",
    "inflections": "simp.past: mistook, retro: mistaken"
  },
  {
    "name": "soar",
    "proto": "fly",
    "disabled": false
  },
  {
    "name": "glide",
    "proto": "fly",
    "disabled": false
  },
  {
    "name": "drift",
    "proto": "float",
    "disabled": false
  },
  {
    "name": "drop",
    "proto": "toss",
    "vtags": "motion, vertical, down",
    "compext": "(MOTION{volition:false})"
  },
  {
    "name": "pour",
    "disabled": false,
    "class": "process",
    "tags": "person",
    "vtags": "motion, vertical, down",
    "volition": "true",
    "ptpl": "null",
    "compcore": "NP{tags:liquid|aggregate}",
    "compext": "(MOTION{volition:false})"
  },
  {
    "name": "drain",
    "proto": "pour",
    "disabled": false,
    "compext": "SOURCE{lm.tags:container|area}"
  },
  {
    "name": "drain.2",
    "proto": "drain",
    "disabled": false,
    "compcore": "NP{tags:bodyOfWater|container}",
    "compext": "--"
  },
  {
    "name": "pour1",
    "proto": "flow",
    "disabled": false,
    "tags": "aggregate"
  },
  {
    "name": "drain1",
    "proto": "pour1",
    "disabled": false
  },
  {
    "name": "drain1.2",
    "proto": "drain1",
    "disabled": false,
    "tags": "bodyOfWater|container",
    "compext": "--"
  },
  {
    "name": "drain1.1",
    "proto": "drain1",
    "disabled": false,
    "compext": "SOURCE{lm.tags:container|area}"
  },
  {
    "name": "dump",
    "proto": "pour",
    "disabled": false
  },
  {
    "name": "sprinkle",
    "proto": "pour",
    "disabled": false
  },
  {
    "name": "spill",
    "proto": "pour",
    "disabled": false
  },
  {
    "name": "drip",
    "proto": "leak",
    "disabled": false,
    "vtags": "motion, vertical, down"
  },
  {
    "name": "leak",
    "proto": "flow",
    "disabled": false,
    "compext": "SOURCE"
  },
  {
    "name": "ooze",
    "proto": "flow",
    "disabled": false,
    "compext": "(SOURCE|PATH)"
  },
  {
    "name": "flow",
    "disabled": false,
    "class": "activity",
    "tags": "liquid",
    "vtags": "motion, grounded",
    "volition": "false",
    "ptpl": "pres",
    "compext": "(70 MOTION)"
  },
  {
    "name": "creep",
    "disabled": false,
    "class": "activity",
    "tags": "PHYSICAL & !fixed",
    "vtags": "motion, contact",
    "tang": "1",
    "volition": "false",
    "ptpl": "pres",
    "compext": "PATH",
    "inflections": "retro: crept"
  },
  {
    "name": "lift",
    "proto": "drag",
    "vtags": "motion, vertical, up",
    "compext": "(MOTION)"
  },
  {
    "name": "rise",
    "tang": 2,
    "class": "process",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "object&!fixed",
    "vtags": "motion, vertical, up",
    "compext": "(80 MOTION)",
    "inflections": "simp.past: rose, retro: risen"
  },
  {
    "name": "raise",
    "proto": "lift"
  },
  {
    "name": "pull",
    "proto": "drag"
  },
  {
    "name": "push",
    "proto": "drag"
  },
  {
    "name": "toss",
    "disabled": false,
    "class": "event",
    "tags": "creature",
    "vtags": "motion, jump",
    "anim": ">1",
    "ptpl": "past|by2",
    "compcore": "NP{tags:object&!fixed|substance&!gas;size:<subject.size}",
    "compext": "(80 MOTION  |20 to NP{anim:>1.5})"
  },
  {
    "name": "fling",
    "proto": "toss",
    "disabled": false,
    "inflections": "simp.past:flung"
  },
  {
    "name": "hurl",
    "proto": "toss"
  },
  {
    "name": "carry",
    "proto": "take",
    "vtags": "motion, grounded"
  },
  {
    "name": "sink",
    "proto": "rise",
    "vtags": "motion, downWater",
    "compext": "GOAL",
    "inflections": "simp.past: sank, retro: sunk"
  },
  {
    "name": "teleport",
    "proto": "jump",
    "disabled": false
  },
  {
    "name": "enter",
    "disabled": false,
    "class": "event",
    "vtags": "motion, generalMotion",
    "anim": ">1",
    "volition": "true",
    "ptpl": "null",
    "compext": "(45 GOAL{name:into} |45 NP{tags:building|area|volume|gas;number:sg;partial:false})"
  },
  {
    "name": "exit",
    "proto": "enter",
    "disabled": false,
    "compext": "(33 SOURCE{name:from} |63 NP{tags:building|area|volume|gas;number:sg;partial:false})",
    "inflections": "simp.past:exited, prog:exiting"
  },
  {
    "name": "guide",
    "proto": "walk",
    "ptpl": "past",
    "compcore": "NP{anim:>1}"
  },
  {
    "name": "lead",
    "proto": "guide",
    "inflections": "simp.past:led"
  },
  {
    "name": "explore",
    "disabled": false,
    "class": "activity",
    "vtags": "motion, grounded",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:place|structure}"
  },
  {
    "name": "laugh",
    "disabled": false,
    "class": "activity",
    "tags": "person",
    "ptpl": "pres",
    "compext": "(55 at NP{anim:>1})"
  },
  {
    "name": "chuckle",
    "proto": "laugh",
    "disabled": false
  },
  {
    "name": "giggle",
    "proto": "laugh",
    "disabled": false,
    "compext": "--"
  },
  {
    "name": "scowl",
    "proto": "laugh",
    "disabled": false
  },
  {
    "name": "smile",
    "proto": "laugh",
    "disabled": false
  },
  {
    "name": "growl",
    "proto": "laugh",
    "disabled": false,
    "tags": "creature",
    "compext": "(55 at NP{tags:PHYSICAL})"
  },
  {
    "name": "crash",
    "disabled": false,
    "class": "event",
    "tags": "vehicle",
    "ptpl": "null",
    "compext": "(into NP{tags:object|hasHeight & fixed; size: >subject.size})"
  },
  {
    "name": "crash.1",
    "proto": "crash",
    "disabled": false,
    "tags": "person",
    "ptpl": "null",
    "compcore": "NP{tags:vehicle}"
  },
  {
    "name": "describe",
    "proto": "talk",
    "disabled": false,
    "class": "process",
    "ptpl": "past|by2",
    "compcore": "NP"
  },
  {
    "name": "talk",
    "disabled": false,
    "class": "activity",
    "vtags": "activity",
    "anim": "3",
    "volition": "true",
    "ptpl": "null",
    "compext": "to NP{anim:3}"
  },
  {
    "name": "spoke",
    "proto": "talk",
    "disabled": false
  },
  {
    "name": "talk1",
    "proto": "talk",
    "disabled": false,
    "ptpl": "past",
    "compext": "about NP"
  },
  {
    "name": "award",
    "proto": "give",
    "disabled": false,
    "inflections": "--"
  },
  {
    "name": "build",
    "disabled": false,
    "class": "process",
    "vtags": "creation",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:construction}",
    "inflections": "simp.past:built"
  },
  {
    "name": "legalize",
    "proto": "criminalize",
    "disabled": false
  },
  {
    "name": "outlaw",
    "proto": "criminalize",
    "disabled": false
  },
  {
    "name": "ban",
    "proto": "criminalize",
    "disabled": false
  },
  {
    "name": "design",
    "proto": "build",
    "disabled": false,
    "compcore": "NP{tags:artifact}"
  },
  {
    "name": "steal",
    "proto": "take",
    "disabled": false,
    "compext": "from NP{tags:person|organization|territory}",
    "inflections": "simp.past: stole, retro: stolen"
  },
  {
    "name": "sabotage",
    "proto": "destroy",
    "disabled": false,
    "anim": ">1",
    "compcore": "NP{tags:instrument}"
  },
  {
    "name": "destroy",
    "disabled": false,
    "class": "process",
    "anim": ">0",
    "tang": ">0",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:thing&!void|territory}"
  },
  {
    "name": "fall2",
    "proto": "break",
    "ptpl": "-",
    "tags": "construction",
    "compcore": "--",
    "compext": "apart",
    "inflections": "simp.past: fell, retro: fallen"
  },
  {
    "name": "congratulate",
    "proto": "arrest",
    "disabled": false
  },
  {
    "name": "denounce",
    "proto": "arrest",
    "disabled": false
  },
  {
    "name": "denounce.1",
    "proto": "arrest",
    "disabled": false,
    "compcore": "(58 NP{tags:volitional | enterprise} | 27 ACTION{volition:true} | 15 ACTIVE_STUFF)",
    "compext": "--"
  },
  {
    "name": "condemn",
    "proto": "denounce",
    "disabled": false
  },
  {
    "name": "applaud",
    "proto": "denounce",
    "disabled": false
  },
  {
    "name": "promote",
    "disabled": false,
    "class": "activity",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags: volitional | person | territory}"
  },
  {
    "name": "advertise",
    "proto": "promote",
    "disabled": false,
    "compcore": "NP{tags: volitional | territory | artifact}"
  },
  {
    "name": "discredit",
    "proto": "promote",
    "disabled": false
  },
  {
    "name": "demonize",
    "proto": "promote",
    "disabled": false
  },
  {
    "name": "criticize",
    "proto": "denounce",
    "disabled": false
  },
  {
    "name": "criticize1",
    "proto": "denounce.1",
    "compcore": "NP"
  },
  {
    "name": "order",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "volition": "true",
    "ptpl": "null",
    "compcore": "NP{anim:3}",
    "compext": "INF_PHRASE{volition:true}"
  },
  {
    "name": "encourage",
    "proto": "order",
    "disabled": false
  },
  {
    "name": "discourage",
    "proto": "order",
    "disabled": false,
    "compext": "from GP{volition:true; unpack:c0.R}"
  },
  {
    "name": "persuade",
    "proto": "encourage",
    "disabled": false
  },
  {
    "name": "dissuade",
    "proto": "discourage",
    "disabled": false
  },
  {
    "name": "prevent",
    "proto": "discourage",
    "disabled": false
  },
  {
    "name": "prohibit",
    "proto": "discourage",
    "disabled": false
  },
  {
    "name": "prohibit1",
    "proto": "denounce.1",
    "compext": "--"
  },
  {
    "name": "convince",
    "proto": "tell",
    "inflections": "--"
  },
  {
    "name": "incite",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "ptpl": "null",
    "compcore": "NP{anim:3}",
    "compext": "INF_PHRASE{volition:true, unpack: vp.compcore.R}"
  },
  {
    "name": "inspire",
    "proto": "incite",
    "disabled": false
  },
  {
    "name": "provoke",
    "proto": "incite",
    "disabled": false
  },
  {
    "name": "provoke1",
    "proto": "provoke",
    "disabled": false,
    "compext": "into GP{volition:true, unpack: vp.compcore.R}"
  },
  {
    "name": "fire",
    "disabled": false,
    "class": "event",
    "vtags": "--",
    "anim": "3",
    "ptpl": "past",
    "compcore": "NP{tags:person}"
  },
  {
    "name": "disband",
    "proto": "fire",
    "compcore": "NP{tags:organization;person:3}"
  },
  {
    "name": "lure",
    "disabled": false,
    "class": "event",
    "anim": ">1",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:creature}",
    "compext": "GOAL"
  },
  {
    "name": "lure1",
    "proto": "provoke1",
    "disabled": false
  },
  {
    "name": "follow",
    "proto": "guide",
    "vtags": "motion, generalMotion"
  },
  {
    "name": "chase",
    "proto": "guide",
    "vtags": "motion, generalMotion"
  },
  {
    "name": "pursue",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "hunt",
    "disabled": false,
    "class": "activity",
    "anim": ">1",
    "tang": "2",
    "volition": "true",
    "ptpl": "null",
    "compcore": "N{tags:animal; number:pl;}"
  },
  {
    "name": "hunt.1",
    "proto": "hunt",
    "disabled": false,
    "compcore": "--",
    "compext": "for NP{tags:lifeform|item|substance}"
  },
  {
    "name": "contemplate",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "meditate",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "assemble",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "disassemble",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "drip",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "rip",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "tear",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "fold",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "bend",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "twist",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "cut",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "slice",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "chop",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "crush",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "scratch",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "whistle",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "whisper",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "mutter",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "scream",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "shout",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "boast",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "warn",
    "proto": "tell",
    "disabled": true
  },
  {
    "name": "interrogate",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "insult",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "slander",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "spray",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "squirt",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "stuff",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "pack",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "load",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "smear",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "splatter",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "catch",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "expel",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "evict",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "defeat",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "vanquish",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "obliterate",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "tolerate",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": ">1.5",
    "volition": "false",
    "ptpl": "past",
    "compcore": "NP(60 {tags:behaviour|situation|condition|construct} | 40 {tags: person})"
  },
  {
    "name": "condone",
    "disabled": false,
    "class": "state",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "(60 NP{tags:behaviour|system} | 25 ACTIVE_STUFF | 15 ACTION)"
  },
  {
    "name": "startle",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "confuse",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "invent",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hit",
    "proto": "punch",
    "disabled": false,
    "compext": "(33 with NP{tags:item;number:sg;size:<6})",
    "inflections": "simp.past:hit"
  },
  {
    "name": "whack",
    "proto": "hit",
    "disabled": false,
    "inflections": "--"
  },
  {
    "name": "hit.1",
    "proto": "hit",
    "disabled": false,
    "compcore": "NP{tags:creature}",
    "compext": "(80 in the PASV_SWITCH{construction: N; partOf: $patient.tags; number: sg}) (67 with NP{tags:item; number:sg; size:<6})"
  },
  {
    "name": "whack.2",
    "proto": "hit.1",
    "disabled": false
  },
  {
    "name": "poke.2",
    "proto": "hit.1",
    "disabled": false
  },
  {
    "name": "punch",
    "disabled": false,
    "class": "event",
    "tags": "person",
    "vtags": "--",
    "ptpl": "past|by2",
    "compcore": "NP{tang:2}"
  },
  {
    "name": "punch99",
    "proto": "punch",
    "disabled": false
  },
  {
    "name": "punch.1",
    "proto": "punch",
    "disabled": false,
    "compcore": "NP{tags:creature}",
    "compext": "(80 in the PASV_SWITCH{construction: N; partOf: $patient.tags; number: sg})"
  },
  {
    "name": "kick",
    "proto": "punch"
  },
  {
    "name": "smack",
    "proto": "punch"
  },
  {
    "name": "slap",
    "proto": "punch",
    "disabled": false
  },
  {
    "name": "stab",
    "proto": "punch",
    "disabled": false
  },
  {
    "name": "poke",
    "proto": "hit",
    "disabled": false,
    "inflections": "--"
  },
  {
    "name": "wash",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "domesticate",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "tame",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "foist",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "deceive",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "congregate",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "blink",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "spit",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "decorate",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "draw",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "paint",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "worship",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "praise",
    "proto": "denounce",
    "disabled": false
  },
  {
    "name": "love",
    "proto": "like",
    "compcore": "(NP| NP{tags:person})"
  },
  {
    "name": "sell",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "buy",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "capsize",
    "disabled": false,
    "class": "event",
    "tags": "waterVehicle",
    "ptpl": "pres"
  },
  {
    "name": "study",
    "disabled": false,
    "class": "activity",
    "vtags": "activity",
    "anim": "3",
    "volition": "true",
    "ptpl": "null",
    "compcore": "NP{tags: activity|system|object&!person; (25 number: pl |75 count: false; def: indef); quantified: false; possessable:false}"
  },
  {
    "name": "invade",
    "proto": "nuke",
    "disabled": false,
    "class": "process",
    "compcore": "NP{tags:territory}"
  },
  {
    "name": "pretend",
    "disabled": false,
    "class": "activity",
    "anim": "3",
    "volition": "true",
    "ptpl": "null",
    "compext": "INF_PHRASE{unpack:subject.R}"
  },
  {
    "name": "pretend1",
    "proto": "pretend",
    "disabled": false,
    "compext": "THAT_CLAUSE{mood:epi}"
  },
  {
    "name": "promise",
    "proto": "prophesy",
    "disabled": false
  },
  {
    "name": "promise2",
    "proto": "promise",
    "disabled": false,
    "compext": "INF_PHRASE{unpack:subject.R; volition: true}"
  },
  {
    "name": "promise1",
    "proto": "promise",
    "disabled": false,
    "compcore": "NP{anim:3}"
  },
  {
    "name": "stand",
    "disabled": false,
    "class": "activity",
    "tags": "person|beast",
    "vtags": "posture",
    "volition": "true",
    "ptpl": "pres",
    "compext": "LOCATION",
    "inflections": "simp.past:stood"
  },
  {
    "name": "stand1",
    "proto": "stand",
    "disabled": false,
    "class": "event",
    "compext": "up"
  },
  {
    "name": "stand2",
    "proto": "stand1",
    "disabled": false,
    "compext": "up for NP{anim:3}"
  },
  {
    "name": "sit",
    "proto": "stand",
    "disabled": false,
    "compext": "LOCATION{lm.tags:furniture}",
    "inflections": "simp.past:sat"
  },
  {
    "name": "sit1",
    "proto": "sit",
    "disabled": false,
    "class": "event",
    "compext": "(30 up |70 down)"
  },
  {
    "name": "lie1",
    "proto": "stand",
    "disabled": false,
    "inflections": "simp.past: lay, retro: lain, prog: lying"
  },
  {
    "name": "lie2",
    "proto": "lie1",
    "disabled": false,
    "class": "event",
    "compext": "down"
  },
  {
    "name": "squat",
    "proto": "stand",
    "disabled": false,
    "inflections": "--"
  },
  {
    "name": "kneel",
    "proto": "stand",
    "disabled": false,
    "inflections": "simp.past:knelt"
  },
  {
    "name": "watch",
    "disabled": false,
    "class": "activity",
    "anim": ">1",
    "volition": "true",
    "ptpl": "null",
    "compcore": "(80 NP{tags:creature|performance|activity})"
  },
  {
    "name": "hear",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "listen",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "smell",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "grab",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hold on to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hold",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "trust",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "wish",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "want",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "need",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "own",
    "disabled": false,
    "class": "state",
    "anim": "3",
    "volition": "false",
    "ptpl": "null",
    "compcore": "NP{tang:>0; anim:<3}"
  },
  {
    "name": "owe",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "belong",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "contain",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "cost",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "surprise",
    "disabled": false,
    "class": "event",
    "volition": "false",
    "ptpl": "past",
    "compcore": "NP{anim:2|3}"
  },
  {
    "name": "enrage",
    "proto": "surprise",
    "disabled": false
  },
  {
    "name": "outrage",
    "proto": "enrage",
    "disabled": false
  },
  {
    "name": "dismay",
    "proto": "surprise",
    "disabled": false
  },
  {
    "name": "annoy",
    "proto": "surprise",
    "disabled": false
  },
  {
    "name": "dissapoint",
    "proto": "surprise",
    "disabled": false
  },
  {
    "name": "alarm",
    "proto": "surprise",
    "disabled": false
  },
  {
    "name": "scare",
    "proto": "surprise",
    "disabled": false
  },
  {
    "name": "celebrate",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "correct",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "disappoint",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "appoint",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "elect",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "choose",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "visit",
    "disabled": false,
    "class": "activity",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:person|beast|site|territory}"
  },
  {
    "name": "attend",
    "proto": "visit",
    "disabled": false,
    "compcore": "NP{tags:occasion}"
  },
  {
    "name": "host",
    "proto": "attend",
    "disabled": false,
    "tags": "person|territory|organization"
  },
  {
    "name": "invite",
    "disabled": false,
    "class": "event",
    "anim": "3",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{anim:3}",
    "compext": "to (70 NP{tags:occasion} |30 NP{tags:site})"
  },
  {
    "name": "open",
    "disabled": false,
    "class": "event",
    "tags": "person",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags: vessel|opening|barrier}"
  },
  {
    "name": "close",
    "proto": "open",
    "disabled": false,
    "ptpl": "null"
  },
  {
    "name": "play",
    "disabled": false,
    "class": "activity",
    "vtags": "activity",
    "anim": ">1.5",
    "volition": "true",
    "ptpl": "pres"
  },
  {
    "name": "play1",
    "proto": "play",
    "disabled": false,
    "anim": "3",
    "ptpl": "past",
    "compcore": "NP{tags:musicalInstrument|game|song}"
  },
  {
    "name": "play1.1",
    "proto": "play1",
    "disabled": false,
    "compcore": "NP{tags:song}",
    "compext": "(60 on NP{tags:musicalInstrument; number:sg})"
  },
  {
    "name": "play1.2",
    "proto": "play1.1",
    "disabled": false,
    "compext": "(60 on NP{tags:audioDevice; number:sg})"
  },
  {
    "name": "win",
    "disabled": false,
    "class": "event",
    "anim": "3",
    "volition": "false",
    "ptpl": "null",
    "compcore": "NP{tags:contest}",
    "inflections": "simp.past:won"
  },
  {
    "name": "win.1",
    "proto": "win",
    "disabled": false,
    "class": "activity",
    "ptpl": "pres"
  },
  {
    "name": "lose",
    "proto": "win",
    "disabled": false,
    "inflections": "simp.past:lost"
  },
  {
    "name": "lose1",
    "proto": "lose",
    "disabled": false,
    "ptpl": "past",
    "compcore": "NP{tags:object|substance & !fixed; anim: <3}"
  },
  {
    "name": "perform",
    "proto": "play1.1",
    "disabled": false
  },
  {
    "name": "escape",
    "proto": "travel",
    "disabled": false,
    "tags": "creature",
    "compext": "SOURCE"
  },
  {
    "name": "depart",
    "proto": "escape",
    "tags": "person",
    "compext": "SOURCE{name:from}"
  },
  {
    "name": "rampage",
    "proto": "walk",
    "disabled": false,
    "compext": "PATH"
  },
  {
    "name": "flee",
    "proto": "travel",
    "inflections": "simp.past:fled"
  },
  {
    "name": "hike",
    "proto": "walk",
    "disabled": false,
    "tags": "person"
  },
  {
    "name": "carpool",
    "proto": "walk",
    "disabled": false,
    "tags": "person",
    "compext": "MOTION{lm.tags:site|territory}"
  },
  {
    "name": "hitchhike",
    "proto": "carpool",
    "disabled": false
  },
  {
    "name": "stumble",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "limp",
    "proto": "walk",
    "disabled": false,
    "tags": "creature&!waterAnimal"
  },
  {
    "name": "prowl",
    "proto": "limp",
    "compext": "PATH{name:around}"
  },
  {
    "name": "scamper",
    "proto": "limp"
  },
  {
    "name": "roam",
    "proto": "limp",
    "compext": "PATH"
  },
  {
    "name": "sprint",
    "proto": "limp",
    "disabled": false
  },
  {
    "name": "dash",
    "proto": "walk.1",
    "disabled": false,
    "compext": "MOTION"
  },
  {
    "name": "hasten",
    "proto": "walk.1",
    "disabled": false
  },
  {
    "name": "rush",
    "proto": "walk",
    "disabled": false
  },
  {
    "name": "dive",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "plunge",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "arrive",
    "disabled": false,
    "class": "event",
    "tags": "creature|motorVehicle|DELIVERYorSOMETHING|MSG",
    "ptpl": "null",
    "compext": "(45 at NP{tags:site|position|occasion;number:sg} |25 in NP{tags:area;number:sg;} |5 through NP{tags:passage;})"
  },
  {
    "name": "threaten",
    "proto": "promise2",
    "disabled": false
  },
  {
    "name": "threaten.1",
    "proto": "threaten",
    "disabled": false,
    "compcore": "NP{anim:3}",
    "compext": "--"
  },
  {
    "name": "unleash",
    "disabled": false,
    "class": "event",
    "tags": "person",
    "volition": "true",
    "ptpl": "past",
    "compcore": "NP{tags:beast}"
  },
  {
    "name": "release",
    "proto": "unleash",
    "disabled": false,
    "compcore": "NP{tags:creature}"
  },
  {
    "name": "capture",
    "proto": "release",
    "disabled": false
  },
  {
    "name": "kidnap",
    "proto": "release",
    "disabled": false,
    "vtags": "--",
    "compcore": "NP{tags:person}",
    "inflections": "simp.past:kidnapped"
  },
  {
    "name": "leave",
    "disabled": false,
    "class": "event",
    "vtags": "motion, generalMotion",
    "anim": "3",
    "volition": "true",
    "ptpl": "null",
    "compcore": "NP{tags:place; number:sg}",
    "inflections": "simp.past:left"
  },
  {
    "name": "leave4",
    "proto": "leave",
    "disabled": false,
    "compcore": "NP{tags: occasion; number: sg}"
  },
  {
    "name": "leave5",
    "proto": "leave4",
    "disabled": false,
    "vtags": "--",
    "compcore": "NP{tags:organization}"
  },
  {
    "name": "leave1",
    "proto": "leave",
    "disabled": false,
    "tags": "vehicle",
    "vtags": "--",
    "anim": "--",
    "volition": "false"
  },
  {
    "name": "leave2",
    "proto": "leave",
    "disabled": false,
    "vtags": "situated",
    "compcore": "NP{tags:object}",
    "compext": "(70 (33 behind) LOCATION |20 alone)"
  },
  {
    "name": "leave3",
    "proto": "leave",
    "disabled": false,
    "compcore": "--",
    "compext": "SOURCE{lm.tags:place; prep.name:from}"
  },
  {
    "name": "meet",
    "prohibitions": "number:sg",
    "disabled": false,
    "class": "event",
    "vtags": "situated",
    "anim": "3",
    "volition": "false",
    "ptpl": "null",
    "compext": "(60 LOCATION)",
    "inflections": "simp.past:met"
  },
  {
    "name": "meet1",
    "proto": "meet",
    "prohibitions": "--",
    "disabled": false,
    "tags": "collective",
    "volition": "true"
  },
  {
    "name": "meet2",
    "proto": "meet",
    "disabled": false,
    "volition": "false",
    "compcore": "NP{tags:person}"
  },
  {
    "name": "meet3",
    "proto": "meet",
    "disabled": false,
    "class": "activity",
    "volition": "true"
  },
  {
    "name": "consider",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "anim": "3",
    "ptpl": "null",
    "compcore": "GP{unpack:subject.R;volition:TRUE}"
  },
  {
    "name": "hide",
    "disabled": false,
    "class": "event",
    "vtags": "situated",
    "anim": ">1",
    "volition": "true",
    "ptpl": "null",
    "compext": "(LOCATION)",
    "inflections": "simp.past: hid, retro: hidden"
  },
  {
    "name": "hide.1",
    "proto": "hide",
    "disabled": false,
    "anim": "3",
    "ptpl": "past|by2",
    "compcore": "NP{tags:object&!fixed}"
  },
  {
    "name": "hide1",
    "proto": "hide",
    "disabled": false,
    "class": "activity",
    "ptpl": "pres"
  },
  {
    "name": "plant",
    "disabled": false,
    "class": "event",
    "vtags": "placement, situated",
    "anim": "3",
    "volition": "true",
    "ptpl": "past|by2",
    "compcore": "NP{tags:plant}",
    "compext": "(LOCATION)"
  },
  {
    "name": "cultivate",
    "proto": "plant",
    "disabled": false,
    "class": "activity",
    "vtags": "--",
    "compext": "--"
  },
  {
    "name": "harvest",
    "proto": "plant",
    "disabled": false,
    "compcore": "NP{tags:plant&food}"
  },
  {
    "name": "wither",
    "disabled": false,
    "class": "process",
    "tags": "plant",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "rot",
    "proto": "wither",
    "disabled": false,
    "tags": "food|plant"
  },
  {
    "name": "escalate",
    "disabled": false,
    "class": "process",
    "tags": "situation",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "deteriorate",
    "proto": "escalate",
    "disabled": false,
    "tags": "situation|malady|system|event|PHYSICAL",
    "ptpl": "null"
  },
  {
    "name": "improve",
    "proto": "deteriorate",
    "disabled": false
  },
  {
    "name": "increase",
    "proto": "escalate",
    "disabled": false,
    "tags": "situation|property&!potential|phenomena|behaviour"
  },
  {
    "name": "decrease",
    "proto": "increase",
    "disabled": false
  },
  {
    "name": "diminish",
    "proto": "increase",
    "disabled": false
  },
  {
    "name": "itch",
    "disabled": false,
    "class": "activity",
    "tags": "bodyPart",
    "volition": "false",
    "ptpl": "pres"
  },
  {
    "name": "tingle",
    "proto": "itch",
    "disabled": false
  },
  {
    "name": "ache",
    "proto": "itch",
    "disabled": false
  },
  {
    "name": "hurt",
    "proto": "itch",
    "disabled": false,
    "inflections": "simp.past: hurt, retro: hurt"
  },
  {
    "name": "throb",
    "proto": "itch"
  },
  {
    "name": "twitch",
    "disabled": false,
    "class": "event",
    "tags": "bodyPart|creature",
    "ptpl": "pres"
  },
  {
    "name": "act up",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "add up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "answer to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "ask for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "back off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "back out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "back up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "be after",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "be cut out for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "be in for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "be not on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "be up to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "be up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "bear with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "blow over",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "blow up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "boil over",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "boot out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "bottle out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "bounce back",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "bound to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "bowl over",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "break down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "break in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "break out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "bring about",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "bring off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "bring round",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "bring up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "bring up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "brush off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "burn out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "butter up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "call off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "carry off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "carry on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "carry out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "catch on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "catch on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "catch up on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "chance on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "chat up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "chicken out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "chip in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "clear off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "clear up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "climb down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "club together",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "come across as",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "come across",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "come along",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "come by",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "come down with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "come off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "come out with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "come to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "come up with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "come up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "count on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "crack down on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "cry off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "cut out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "dawn on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "die down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "dish out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "do away with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "do in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "do out of",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "do up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "do up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "do without",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "doll up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "drag on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "drag out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "draw on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "dream up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "drink in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "drop off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "drop off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "drum up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "egg on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "eye up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "face up to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fall about",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fall behind",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fall for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fall for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fall off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fall out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fall through",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "feel up to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fill in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fob off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fold up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "fork out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get about",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get across",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get ahead",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get along with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get at",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get at",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get away with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get away",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get behind",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get by",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get into",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get off with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get on for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get on with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get over",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get round to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get through to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "get up to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "give away",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "give in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "give up on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "give up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go ahead",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go along with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go back on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go in for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go on about",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go over",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go through with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "go through",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "grow on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "grow out of",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hand on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hand out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hand over",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hang around",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hang on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hang up",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "harp on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "have in for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "have on",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "head for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "head off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hear out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hit on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hold forth",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hold out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hold up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "horse around",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "hush up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "itch for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "jump at",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "jump on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "keep at",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "keep up with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "keep up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "kick off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "kiss up to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "knock off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "knock off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "lay into",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "lay off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "leave out",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "let down",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "let in on",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "let off",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "let off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "let on",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "let up",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "line up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "live down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "live up to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "long for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "look after",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "look into",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "look out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "look up to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "look up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "look up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "luck out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "lump together",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "make do with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "make for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "make of",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "make out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "make over",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "make up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "make up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "mess about",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "mess up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "mind out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "mix up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "mouth off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "move on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "nip out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "nod off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "nose around",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "own up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pack in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pack up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pass away",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pass out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pass up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pencil in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "perk up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "peter out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pick at",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pick on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pick up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pick up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pick up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pin down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pipe down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "piss about",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pitch in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "play around",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "play at",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "play down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "play up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "point out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pop up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "press on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pull apart",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pull off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pull through",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pull together",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "pull up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "push around",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "put by",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "put down to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "put down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "put down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "put forward",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "put off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "put off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "put on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "put up with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "put up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "rake up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "ride on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "rip off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "roll up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "root for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "rope in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "rub in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "rule out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "run down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "run into",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "run out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "sail through",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "scrape through",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "screw up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "see off",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "see through",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "see through",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "see to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "sell up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "send down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "send up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "set aside",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "set in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "set off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "set out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "shake off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "shake up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "shell out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "shop around",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "show off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "show up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "shut up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "sink in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "sit by",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "sit on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "sit out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "size up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "sleep on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "slip up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "snap up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "snow under",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "sort out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "speak up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "spell out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "spin out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "splash out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "sponge off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "stamp out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "stand for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "stand in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "stand out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "stand up for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "step down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "step up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "stick around",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "stick to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "stick up for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "stop by",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "string along",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "sweat out",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "tag along",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "tail off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take after",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take it upon",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take off",
    "disabled": true,
    "ptpl": "null"
  },
  {
    "name": "take off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take out on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take over",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take place",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take to",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take up on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "take up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "talk back",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "talk into",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "talk round",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "talk up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "tear into",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "tell off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "tell on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "think up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "throw back",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "throw up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "tick off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "touch down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "touch up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "toy with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "trip up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "try on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "try out for",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "try out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "tune out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "turn down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "turn in",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "turn off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "turn out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "turn out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "turn up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "use up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "wait up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "walk off with",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "walk out on",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "wear down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "wear off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "win over",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "wind down",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "wind up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "work out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "work out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "work up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "worm out",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "wrap up",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "write off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "write off",
    "disabled": "TRUE",
    "ptpl": "null"
  },
  {
    "name": "zero in on",
    "disabled": "TRUE",
    "ptpl": "null"
  }
]