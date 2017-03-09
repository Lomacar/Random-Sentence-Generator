verb = [
  {
    "name": "answer",
    "anim": 3,
    "tang": "!0",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "((NP{anim:3}    |  NP{name:question|riddle;orsimilar:true}))"
  },
  {
    "name": "apologize",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(20 to NP{anim:3}    |20  for GP    |10  for NP{anim:3}    |10  for (NP{def:true; anim:<3}|WH_CLAUSE))"
  },
  {
    "name": "become",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "AP{unpack:subject.R; perm: false; copulant: true}",
    "inflections": "simp.past:became, retro:become"
  },
  {
    "name": "believe",
    "anim": 3,
    "tang": "!0",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "(85 NP{anim: 3})"
  },
  {
    "name": "believe1",
    "proto": "believe",
    "compcore": "--",
    "compext": "(40  in NP |60  THAT_CLAUSE)"
  },
  {
    "name": "suspect",
    "proto": "believe1",
    "compext": "THAT_CLAUSE"
  },
  {
    "name": "bother",
    "anim": "<2",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{anim:3}"
  },
  {
    "name": "bother1",
    "proto": "bother",
    "anim": ">1",
    "volition": "TRUE",
    "vtags": "--",
    "compcore": "NP{anim:>1}"
  },
  {
    "name": "break",
    "anim": "<2",
    "tang": "!0",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "breakable",
    "vtags": "--",
    "inflections": "simp.past:broke, retro:broken"
  },
  {
    "name": "break1",
    "proto": "break",
    "anim": "!0",
    "volition": "TRUE",
    "ptpl": "past",
    "tags": "--",
    "vtags": "--",
    "compcore": "NP{tags:instrument}"
  },
  {
    "name": "collect",
    "anim": ">1",
    "tang": ">0",
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "( NP{anim:<3;tang:2;number:pl;tags:matter&!fixed}   | NP{tags:collective})"
  },
  {
    "name": "continue",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "event|behaviour",
    "vtags": "--"
  },
  {
    "name": "continue.1",
    "anim": ">1",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(INF_PHRASE{unpack: subject.R; class:behaviour|process})"
  },
  {
    "name": "continue.2",
    "proto": "continue",
    "class": "event",
    "ptpl": "-",
    "tags": "person",
    "vtags": "--"
  },
  {
    "name": "continue1",
    "disabled": false,
    "class": "activity",
    "vtags": "motion, generalMotion",
    "anim": ">1",
    "ptpl": "-",
    "compext": "MOTION"
  },
  {
    "name": "create",
    "anim": 3,
    "tang": "!0",
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags:artifact}"
  },
  {
    "name": "decide",
    "disabled": "TRUE",
    "proto": "say",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(THAT_CLAUSE|WH_CLAUSE){mood:deontic;aspect:simp;volition:true}"
  },
  {
    "name": "decide1",
    "proto": "decide",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(65 WH_INF)"
  },
  {
    "name": "decide2",
    "proto": "try",
    "anim": 3,
    "ptpl": "-",
    "vtags": "--"
  },
  {
    "name": "die",
    "tang": "!0",
    "class": "process",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "lifeform",
    "vtags": "--",
    "inflections": "prog:dying, retroprog:dying"
  },
  {
    "name": "eat",
    "anim": ">1",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "activity",
    "inflections": "simp.past:ate, retro:eaten"
  },
  {
    "name": "eat.1",
    "proto": "eat",
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags:(70 food  |30 object&!fixed)}"
  },
  {
    "name": "exist",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "pres",
    "vtags": "--"
  },
  {
    "name": "fall",
    "tang": 2,
    "class": "event",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "hasHeight",
    "vtags": "--",
    "compext": "(30 down | 30 over)",
    "inflections": "simp.past:fell, retro:fallen"
  },
  {
    "name": "fall1",
    "proto": "fall",
    "tags": "!fixed",
    "vtags": "motion, vertical, down",
    "compext": "MOTION"
  },
  {
    "name": "fall2",
    "proto": "fall",
    "tags": "protrusion",
    "compext": "off"
  },
  {
    "name": "feel",
    "anim": ">1",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "AP{unpack:subject.R; reverse:true; copulant: true}",
    "inflections": "simp.past:felt, retro:felt"
  },
  {
    "name": "fight",
    "anim": ">1",
    "tang": "!0",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "activity",
    "compcore": "(30 NP{anim:>1}   | 30 with NP{anim:>1})",
    "inflections": "simp.past:fought, retro:fought"
  },
  {
    "name": "find",
    "anim": ">1",
    "tang": "!0",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "situated",
    "compcore": "NP{anim:>0}",
    "compext": "(40 LOCATION)",
    "inflections": "simp.past:found, retro:found"
  },
  {
    "name": "float",
    "tang": 2,
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "!fixed",
    "vtags": "motion, air, waterSurface",
    "compext": "(MOTION)"
  },
  {
    "name": "fly",
    "proto": "walk",
    "vtags": "motion, air",
    "inflections": "simp.past:flew, retro:flown"
  },
  {
    "name": "fly1",
    "proto": "fly",
    "anim": 3,
    "compcore": "NP{tags:substance|object&!fixed}",
    "compext": "to NP{tags:place&!position}"
  },
  {
    "name": "give",
    "anim": 3,
    "tang": "!0",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past|by2",
    "vtags": "--",
    "compcore": "NP{anim:<3;tang:2; tags: !fixed}",
    "compext": "to NP{anim:3}",
    "inflections": "simp.past:gave, retro:given"
  },
  {
    "name": "give.1",
    "proto": "give",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "NP{anim:3} DP{anim:<3;tang:2; tags: !fixed}",
    "compext": "--"
  },
  {
    "name": "give1",
    "proto": "give",
    "disabled": false,
    "vtags": "--",
    "anim": ">1.5",
    "ptpl": "-",
    "compcore": "--",
    "compext": "up"
  },
  {
    "name": "give2",
    "proto": "give1",
    "anim": 3,
    "compext": "(away DP{tags: substance|item|animal}|NP{tags: substance|item|animal} away)"
  },
  {
    "name": "go",
    "anim": ">1",
    "tang": "!0",
    "class": "process",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "motion, generalMotion",
    "compext": "(10 SOURCE  |40 GOAL{prox:dist}  |30 PATH)",
    "inflections": "simp.pres.sg.3:goes, simp.past:went, retro: gone"
  },
  {
    "name": "go1",
    "proto": "go",
    "anim": 3,
    "class": "activity",
    "compcore": "--",
    "compext": "ACTIVE_STUFF{unpack:subject.R}"
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
    "anim": ">1",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "tags": "creature",
    "compcore": "to sleep",
    "compext": "--"
  },
  {
    "name": "go3.1",
    "proto": "go3",
    "anim": 3,
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
    "class": "process",
    "volition": "TRUE",
    "ptpl": "-",
    "compext": "MOTION"
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
    "anim": "<0",
    "tang": "!0",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "DP{anim: <3; tang:0|2}",
    "inflections": "simp.past:had, simp.pres.sg.3:has, retro:had"
  },
  {
    "name": "imagine",
    "proto": "think.1",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "inflections": "--"
  },
  {
    "name": "kill",
    "anim": "!0",
    "tang": "!0",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "tags": "!vehicle",
    "vtags": "--",
    "compcore": "NP{tags:lifeform}"
  },
  {
    "name": "murder",
    "proto": "kill",
    "anim": 3
  },
  {
    "name": "know",
    "anim": ">1",
    "tang": "!0",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(WH_CLAUSE   | WH_INF{volition:true})",
    "inflections": "simp.past:knew, retro:known",
    "prohibitions": "tense:fut,real_aspect:prosp,aspect:prosp"
  },
  {
    "name": "know1",
    "proto": "know",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(40  THAT_CLAUSE    |40  about NP)"
  },
  {
    "name": "know1.1",
    "proto": "know",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags: person|activity|fieldOfStudy}",
    "compext": "--"
  },
  {
    "name": "like",
    "anim": ">1",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP"
  },
  {
    "name": "like.1",
    "proto": "like",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "GP{unpack:subject.R}"
  },
  {
    "name": "melt",
    "anim": "<2",
    "tang": 2,
    "class": "process",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "matter & !void & !fluid",
    "vtags": "--"
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
    "anim": 3,
    "volition": "TRUE",
    "tags": "--",
    "vtags": "--"
  },
  {
    "name": "miss",
    "disabled": false,
    "class": "state",
    "vtags": "--",
    "anim": ">1",
    "tang": "!0",
    "ptpl": "past",
    "compcore": "NP{anim:>0}"
  },
  {
    "name": "read",
    "anim": 3,
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "activity",
    "compcore": "NP{tags:readable; person:3}",
    "inflections": "simp.past:read, retro:read"
  },
  {
    "name": "regret",
    "anim": 3,
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "GP{volition:true}",
    "inflections": "simp.past: regretted, retro: regretted"
  },
  {
    "name": "say",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "THAT_CLAUSE",
    "inflections": "simp.past:said, retro:said"
  },
  {
    "name": "admit",
    "proto": "say",
    "inflections": "simp.past:admitted, retro:admitted"
  },
  {
    "name": "prophesy",
    "proto": "say",
    "compext": "THAT_CLAUSE{(40 aspect:prosp |60 tense:fut), mood:ind, aspect: (75 simp |25 prog) }",
    "inflections": "--"
  },
  {
    "name": "predict",
    "proto": "prophesy"
  },
  {
    "name": "search",
    "anim": ">1",
    "tang": "!0",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "for NP{anim:>0}"
  },
  {
    "name": "see",
    "anim": ">1",
    "tang": "!0",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags: visible}",
    "inflections": "simp.past:saw, retro:seen"
  },
  {
    "name": "see.1",
    "proto": "see",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "--",
    "compext": "(25  G_CLAUSE   |50 WH_CLAUSE)"
  },
  {
    "name": "seem",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "AP{unpack:subject.R; reverse:true; copulant: true}",
    "prohibitions": "tense:fut,real_aspect:prosp,aspect:prosp"
  },
  {
    "name": "shoot",
    "proto": "punch",
    "inflections": "simp.past:shot, retro:shot"
  },
  {
    "name": "shoot.2",
    "proto": "shoot",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "--",
    "compext": "at NP{tang: 2}"
  },
  {
    "name": "skate",
    "proto": "walk",
    "anim": 3,
    "tang": ">0",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "pres"
  },
  {
    "name": "sleep",
    "anim": ">1",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "pres",
    "vtags": "activity",
    "inflections": "simp.past:slept, retro:slept"
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
    "anim": "<2",
    "tang": 2,
    "class": "event",
    "volition": "FALSE",
    "ptpl": "pres",
    "vtags": "--"
  },
  {
    "name": "stink",
    "tang": "!0",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "pres",
    "vtags": "--",
    "inflections": "simp.past:stank, retro: stunk"
  },
  {
    "name": "swim",
    "proto": "walk",
    "ptpl": "pres",
    "vtags": "motion, water",
    "inflections": "simp.past:swam, retro:swum"
  },
  {
    "name": "test",
    "anim": 3,
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP"
  },
  {
    "name": "think",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "pres",
    "vtags": "--",
    "compext": "(60 about NP)",
    "inflections": "simp.past:thought, retro:thought"
  },
  {
    "name": "think.1",
    "proto": "think",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "THAT_CLAUSE"
  },
  {
    "name": "tickle",
    "anim": 3,
    "tang": "!0",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags:creature}"
  },
  {
    "name": "touch",
    "anim": 3,
    "tang": 2,
    "class": "semel",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags:touchable}"
  },
  {
    "name": "touch.1",
    "proto": "touch",
    "anim": 3,
    "class": "activity",
    "ptpl": "-",
    "vtags": "--"
  },
  {
    "name": "touch.2",
    "proto": "touch.1",
    "anim": "<3",
    "volition": "FALSE",
    "vtags": "--"
  },
  {
    "name": "trick",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past|by1",
    "vtags": "--",
    "compcore": "NP{anim:>2}",
    "compext": "(33 into GP)"
  },
  {
    "name": "try",
    "anim": ">1",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(85 INF_PHRASE{volition:true;unpack:subject.R})"
  },
  {
    "name": "try.1",
    "proto": "try",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--"
  },
  {
    "name": "vanish",
    "tang": ">0",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "pres",
    "vtags": "--"
  },
  {
    "name": "write",
    "proto": "read",
    "volition": "TRUE",
    "vtags": "--",
    "inflections": "simp.past:wrote, retro:written"
  },
  {
    "name": "yell",
    "anim": 3,
    "tang": 2,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "pres",
    "vtags": "--",
    "compext": "(60 at NP{tang: >0; anim: >0})"
  },
  {
    "name": "ride",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "tags": "person",
    "vtags": "motion, grounded",
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
    "class": "process",
    "ptpl": "-",
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
    "anim": 3,
    "class": "state",
    "volition": "FALSE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP(20  {number:pl;def:indef}  |20  {anim:3} |20 {count:false;number:sg}  |40  {tags:information|readable|state} )",
    "inflections": "simp.past:understood, retro:understood"
  },
  {
    "name": "understand1",
    "proto": "understand",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "(75 (WH_CLAUSE  |  THAT_CLAUSE))"
  },
  {
    "name": "wait",
    "anim": ">1",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "situated",
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
    "compext": "(behind) (LOCATION)"
  },
  {
    "name": "loiter",
    "proto": "wait"
  },
  {
    "name": "lurk",
    "disabled": "TRUE"
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
    "ptpl": "-",
    "compext": "(with NP{tags:object} | into NP{tags:object} )"
  },
  {
    "name": "sparkle",
    "tang": 2,
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "vtags": "--"
  },
  {
    "name": "keep",
    "proto": "stop.1",
    "class": "state",
    "ptpl": "-",
    "vtags": "--",
    "inflections": "simp.past:kept, retro:kept",
    "prohibitions": "aspect:retro"
  },
  {
    "name": "stop",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "tags": "creature",
    "vtags": "--",
    "compext": "(LOCATION)"
  },
  {
    "name": "stop.1",
    "proto": "stop",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "--",
    "vtags": "--",
    "compcore": "GP{subject.R}",
    "compext": "--"
  },
  {
    "name": "stop1",
    "proto": "stop",
    "ptpl": "-",
    "tags": "event|process|undertaking|behaviour",
    "vtags": "--",
    "compcore": "--",
    "compext": "--"
  },
  {
    "name": "stop2",
    "proto": "stop",
    "anim": 3,
    "ptpl": "past",
    "tags": "--",
    "vtags": "--",
    "compcore": "( NP{tags:occasion|undertaking}   |  NP{def:def;tags:behaviour})",
    "compext": "--"
  },
  {
    "name": "buzz",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "thing&!place",
    "vtags": "--"
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
    "anim": 3,
    "class": "process",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "(up DP{tags: creature})",
    "inflections": "simp.past:beat, retro:beaten"
  },
  {
    "name": "beat.1",
    "proto": "beat",
    "ptpl": "past|by2",
    "vtags": "--",
    "compcore": "(30 PRONOUN{tags: creature}  |70 DP{tags: creature})",
    "compext": "up",
    "prohibitions": "pasv: false"
  },
  {
    "name": "forgive",
    "proto": "thank",
    "vtags": "--",
    "inflections": "simp.past:forgave, retro:forgiven"
  },
  {
    "name": "thank",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{anim:3}",
    "compext": "(for GP{unpack: subject.R; volition:true})"
  },
  {
    "name": "cry",
    "anim": 3,
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "vtags": "--"
  },
  {
    "name": "surrender",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--"
  },
  {
    "name": "intrigue",
    "proto": "bother",
    "class": "state",
    "ptpl": "pres",
    "vtags": "--"
  },
  {
    "name": "amuse",
    "proto": "bother",
    "ptpl": "pres",
    "vtags": "--"
  },
  {
    "name": "excite",
    "proto": "amuse"
  },
  {
    "name": "disturb",
    "proto": "amuse"
  },
  {
    "name": "concern",
    "proto": "bother"
  },
  {
    "name": "interest",
    "proto": "amuse"
  },
  {
    "name": "happen",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "occurrence",
    "vtags": "--"
  },
  {
    "name": "happen.1",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "event",
    "vtags": "--"
  },
  {
    "name": "enjoy",
    "anim": 3,
    "class": "state",
    "volition": "FALSE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{anim:<3}"
  },
  {
    "name": "enjoy.1",
    "proto": "enjoy",
    "anim": 2,
    "ptpl": "-",
    "compcore": "--",
    "compext": "ACTIVE_STUFF"
  },
  {
    "name": "doubt",
    "proto": "believe",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "(35 NP{anim: 3}    |45  THAT_CLAUSE)"
  },
  {
    "name": "frolick",
    "proto": "dance1",
    "anim": 2
  },
  {
    "name": "grumble",
    "proto": "yell",
    "vtags": "--",
    "compext": "(40 about NP)"
  },
  {
    "name": "juggle",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "past|pres",
    "vtags": "performance, activity",
    "compcore": "(40 NP{number:pl;tags:item;size:<subject.size})"
  },
  {
    "name": "long",
    "anim": 3,
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "for NP"
  },
  {
    "name": "misunderstand",
    "proto": "understand",
    "vtags": "--",
    "inflections": "simp.past:misunderstood, retro:misunderstood"
  },
  {
    "name": "placate",
    "anim": 3,
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{anim:>1}"
  },
  {
    "name": "waylay",
    "proto": "placate",
    "class": "event",
    "vtags": "--"
  },
  {
    "name": "faint",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "creature",
    "vtags": "--"
  },
  {
    "name": "sneeze",
    "proto": "faint",
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
    "tang": 2,
    "class": "event",
    "volition": "FALSE",
    "ptpl": "pres",
    "vtags": "--"
  },
  {
    "name": "practice",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "(70 NP{tags:activity})"
  },
  {
    "name": "criminalize",
    "proto": "practice",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "(40 N{tags: artifact; number:pl;}   |45 NP{tags:activity|game|ideology|enterprise;number:sg} |15 ACTION{volition:true})"
  },
  {
    "name": "support",
    "proto": "practice",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "( NP{anim:3}   | NP{tags:behaviour; number:sg} )"
  },
  {
    "name": "dance",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "pres",
    "vtags": "activity"
  },
  {
    "name": "dance1",
    "proto": "dance",
    "vtags": "motion, grounded",
    "compext": "(GOAL | PATH)"
  },
  {
    "name": "sing",
    "proto": "dance",
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
    "anim": ">1",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(35 about NP    |35  THAT_CLAUSE)"
  },
  {
    "name": "approve",
    "anim": 3,
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(35 of NP{tang:0;anim:0}     |30  of NP |25 of ACTIVE_STUFF)"
  },
  {
    "name": "disapprove",
    "proto": "approve",
    "vtags": "--"
  },
  {
    "name": "interrupt",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags:creature|event|process|undertaking|behaviour}"
  },
  {
    "name": "interrupt.1",
    "proto": "interrupt",
    "anim": "<3",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "creature|event|process|undertaking|behaviour|difficulty",
    "vtags": "--"
  },
  {
    "name": "wonder",
    "anim": 3,
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(WH_CLAUSE  | WH_INF | about NP | if SENTENCE)"
  },
  {
    "name": "forget",
    "anim": 3,
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(80 (WH_CLAUSE|about NP{def:def}|THAT_CLAUSE))",
    "inflections": "simp.past:forgot, retro:forgotten"
  },
  {
    "name": "forget1",
    "proto": "forget",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP",
    "compext": "--"
  },
  {
    "name": "forget1.1",
    "proto": "forget1",
    "ptpl": "-",
    "compcore": "--",
    "compext": "INF_PHRASE{volition:true}"
  },
  {
    "name": "remember",
    "proto": "forget",
    "vtags": "--",
    "compext": "(WH_CLAUSE|THAT_CLAUSE)",
    "inflections": "--"
  },
  {
    "name": "remember1",
    "proto": "forget1",
    "vtags": "--",
    "inflections": "--"
  },
  {
    "name": "realize",
    "proto": "remember",
    "vtags": "--",
    "compext": "(WH_CLAUSE|THAT_CLAUSE)"
  },
  {
    "name": "notice",
    "proto": "remember",
    "compext": "THAT_CLAUSE"
  },
  {
    "name": "figure",
    "proto": "realize",
    "compext": "out (WH_CLAUSE|THAT_CLAUSE)"
  },
  {
    "name": "find1",
    "proto": "figure",
    "class": "process",
    "volition": "TRUE",
    "inflections": "simp.past:found,retro:found"
  },
  {
    "name": "discover",
    "proto": "realize"
  },
  {
    "name": "discover1",
    "proto": "discover",
    "compcore": "NP{tags:territory}",
    "compext": "--"
  },
  {
    "name": "lie",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "pres|TODO",
    "vtags": "--",
    "compext": "(to NP{anim:3}) about (NP|WH_CLAUSE)",
    "inflections": "prog: lying, retroprog: lying"
  },
  {
    "name": "ask",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past|by1",
    "vtags": "--",
    "compcore": "NP{anim:3}",
    "compext": "INF_PHRASE{volition: true}"
  },
  {
    "name": "ask.1",
    "proto": "ask",
    "ptpl": "past|no-by",
    "vtags": "--",
    "compext": "(20 WH_CLAUSE | 20 if SENTENCE |20 NP{name:question|riddle;orsimilar:true} | 20 about NP)"
  },
  {
    "name": "ask.2",
    "proto": "ask.1",
    "ptpl": "-",
    "compcore": "--"
  },
  {
    "name": "tell",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "NP{anim:3}",
    "compext": "INF_PHRASE{volition:true}",
    "inflections": "simp.past: told, retro: told"
  },
  {
    "name": "tell.1",
    "proto": "tell",
    "compext": "THAT_CLAUSE"
  },
  {
    "name": "tell.X",
    "disabled": "TRUE",
    "proto": "tell",
    "ptpl": "past|by1",
    "vtags": "--",
    "compcore": "NP{anim:3}",
    "compext": "(WH_CLAUSE |  WH_INF{c0.R})",
    "prohibitions": "pasv: false"
  },
  {
    "name": "teach",
    "proto": "tell",
    "ptpl": "-",
    "vtags": "--",
    "inflections": "simp.past: taught, retro: taught"
  },
  {
    "name": "teach.3",
    "proto": "teach",
    "ptpl": "past|by2",
    "vtags": "--",
    "compext": "(67 NP{tags:activity|enterprise} |33 ACTIVE_STUFF)"
  },
  {
    "name": "remind",
    "proto": "tell",
    "vtags": "--",
    "inflections": "--"
  },
  {
    "name": "argue",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(50 (with NP{anim:3}) (about (NP | WH_CLAUSE))   |35 THAT_CLAUSE)",
    "inflections": "prog: arguing, retroprog: arguing"
  },
  {
    "name": "prove",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(THAT_CLAUSE|WH_CLAUSE)",
    "inflections": "retro: proven"
  },
  {
    "name": "work",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "device",
    "vtags": "--"
  },
  {
    "name": "work1",
    "proto": "work",
    "anim": 3,
    "tags": "--",
    "vtags": "habit",
    "compext": "(LOCATION)"
  },
  {
    "name": "work2",
    "proto": "work",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "pres",
    "tags": "--",
    "compext": "(on NP{tags: undertaking|device|vehicle})"
  },
  {
    "name": "move",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "item|lifeform",
    "vtags": "--"
  },
  {
    "name": "move1",
    "proto": "move",
    "anim": 3,
    "tang": "<9",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "motion, generalMotion",
    "compext": "MOTION"
  },
  {
    "name": "conspire",
    "proto": "gather",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(60 against NP{anim:3})"
  },
  {
    "name": "scatter",
    "anim": ">1",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "collective",
    "vtags": "--"
  },
  {
    "name": "scatter1",
    "disabled": false,
    "class": "process",
    "tags": "--",
    "vtags": "--",
    "anim": "3",
    "ptpl": "-",
    "compcore": "NP{ ( number:pl;tags:item | tags:aggregate|tags:collective ); anim:0;tang:2;size:<5 }"
  },
  {
    "name": "gather",
    "anim": ">1",
    "class": "process",
    "volition": "TRUE",
    "ptpl": "pres",
    "tags": "collective",
    "vtags": "--",
    "compext": "(together)"
  },
  {
    "name": "gather1",
    "proto": "gather",
    "ptpl": "-",
    "tags": "--",
    "vtags": "--",
    "compcore": "NP{ ( number:pl;tags:item  | tags:aggregate|tags:collective ); anim:0;tang:2;size:<5 }",
    "prohibitions": "number:sg"
  },
  {
    "name": "revolt",
    "proto": "conspire",
    "anim": ">1",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(30 against NP{anim:3})"
  },
  {
    "name": "suffer",
    "anim": ">0",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "vtags": "--",
    "prohibitions": "--"
  },
  {
    "name": "fart",
    "proto": "sneeze",
    "vtags": "--"
  },
  {
    "name": "belch",
    "proto": "sneeze",
    "vtags": "--"
  },
  {
    "name": "turn",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past|by2",
    "vtags": "--",
    "compcore": "NP{tags:device;anim:1}",
    "compext": "(on|off)"
  },
  {
    "name": "shake",
    "proto": "glow",
    "tags": "object",
    "vtags": "--",
    "inflections": "simp.past: shook, retro: shaken"
  },
  {
    "name": "run",
    "proto": "walk",
    "inflections": "simp.past: ran, retro: run"
  },
  {
    "name": "run1",
    "anim": 1,
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "machine",
    "vtags": "--",
    "inflections": "simp.past: ran, retro: run"
  },
  {
    "name": "jog",
    "proto": "walk"
  },
  {
    "name": "waddle",
    "proto": "walk"
  },
  {
    "name": "rollerblade",
    "proto": "skate"
  },
  {
    "name": "skate",
    "proto": "walk",
    "anim": 3
  },
  {
    "name": "trudge",
    "proto": "walk.1"
  },
  {
    "name": "moonwalk",
    "proto": "walk"
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
    "tang": ">0",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "matter|place",
    "vtags": "--"
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
    "vtags": "--"
  },
  {
    "name": "bounce",
    "anim": "<2",
    "tang": ">1",
    "class": "semel",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "object",
    "vtags": "--"
  },
  {
    "name": "bounce.1",
    "proto": "bounce",
    "anim": ">0",
    "class": "process",
    "volition": "TRUE",
    "tags": "--",
    "vtags": "motion, grounded",
    "compext": "(MOTION)"
  },
  {
    "name": "malfunction",
    "proto": "function",
    "vtags": "--"
  },
  {
    "name": "function",
    "anim": 1,
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "device",
    "vtags": "--"
  },
  {
    "name": "bleed",
    "proto": "shiver",
    "vtags": "--",
    "inflections": "simp.past: bled, retro: bled"
  },
  {
    "name": "beat-box",
    "proto": "sing",
    "vtags": "--"
  },
  {
    "name": "organize",
    "anim": 3,
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{(number:pl;tags:!feature|tags:collective)}"
  },
  {
    "name": "organize1",
    "proto": "organize",
    "compcore": "NP{tags:occasion}"
  },
  {
    "name": "look",
    "disabled": false,
    "class": "activity",
    "tags": "creature",
    "vtags": "--",
    "anim": ">1",
    "ptpl": "-",
    "compext": "at NP{tang:>0}"
  },
  {
    "name": "look2",
    "tang": ">0",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "like NP{tang: subject.tang}"
  },
  {
    "name": "travel",
    "anim": ">1",
    "class": "process",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "motion, generalMotion",
    "compext": "(MOTION)"
  },
  {
    "name": "come",
    "proto": "go",
    "ptpl": "-",
    "compext": "(22 SOURCE{prox:dist}  |22 GOAL{prox:prox}  |22 PATH)",
    "inflections": "simp.past: came, retro: come"
  },
  {
    "name": "drive",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "past|by1",
    "tags": "person",
    "vtags": "motion, grounded",
    "compcore": "NP{name:car;orsimilar:true;number:subject.number}",
    "inflections": "simp.past: drove, retro: driven"
  },
  {
    "name": "drive.1",
    "proto": "drive",
    "ptpl": "-",
    "compcore": "--"
  },
  {
    "name": "drive.2",
    "proto": "drive",
    "class": "process",
    "compcore": "NP{name:car;orsimilar:true;number:subject.number}",
    "compext": "MOTION"
  },
  {
    "name": "drive1",
    "proto": "fly1",
    "vtags": "motion, grounded"
  },
  {
    "name": "arrest",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past|by1",
    "vtags": "--",
    "compcore": "NP{tags:person}",
    "compext": "(for ACTIVE_STUFF{unpack:c0.R})"
  },
  {
    "name": "solve",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{name:problem;orsimilar:true}"
  },
  {
    "name": "complete",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags:undertaking}"
  },
  {
    "name": "start",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "GP{subject.R}"
  },
  {
    "name": "start1",
    "proto": "start",
    "anim": 3,
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "( NP{tags:occasion|undertaking}   |  NP{def:def;tags:behaviour})"
  },
  {
    "name": "plan1",
    "proto": "start1",
    "vtags": "--"
  },
  {
    "name": "plan",
    "proto": "try",
    "anim": 3,
    "vtags": "--"
  },
  {
    "name": "cancel",
    "proto": "start1"
  },
  {
    "name": "postpone",
    "proto": "cancel"
  },
  {
    "name": "begin",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "hasDuration|situation",
    "inflections": "simp.past: began, retro: begun, prog: beginning"
  },
  {
    "name": "end",
    "proto": "begin"
  },
  {
    "name": "agree",
    "anim": 3,
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "collective",
    "vtags": "--",
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
    "anim": 3,
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(55 with NP{anim:3})"
  },
  {
    "name": "disagree",
    "proto": "agree2",
    "ptpl": "-",
    "vtags": "--"
  },
  {
    "name": "satisfy",
    "proto": "bother",
    "class": "state",
    "tags": "ABSTRACT",
    "vtags": "--"
  },
  {
    "name": "satisfy1",
    "proto": "bother1",
    "class": "state",
    "vtags": "--"
  },
  {
    "name": "party",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "activity"
  },
  {
    "name": "vex",
    "proto": "bother",
    "class": "state",
    "vtags": "--"
  },
  {
    "name": "fail",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "telic|procedure|device",
    "vtags": "--"
  },
  {
    "name": "fail.1",
    "proto": "fail",
    "anim": 3,
    "ptpl": "-",
    "tags": "--",
    "vtags": "--"
  },
  {
    "name": "fail1",
    "proto": "fail",
    "anim": ">1",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "( NP{ tags:telic }  | at NP{tags:activity;number:sg})"
  },
  {
    "name": "fail1.1",
    "proto": "fail1",
    "compext": "INF_PHRASE"
  },
  {
    "name": "pend",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "happening",
    "vtags": "--",
    "prohibitions": "aspect:simp|retro"
  },
  {
    "name": "gamble",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "pres",
    "vtags": "activity"
  },
  {
    "name": "change",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "ABSTRACT|phenomenon",
    "vtags": "--"
  },
  {
    "name": "change.1",
    "proto": "change",
    "class": "event",
    "vtags": "--"
  },
  {
    "name": "suck",
    "anim": 2,
    "class": "state",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compext": "(80 at (40 NP{tags:activity;number:sg;volition:true;} |60 ACTIVE_STUFF{unpack:subject.R}) )"
  },
  {
    "name": "excel",
    "proto": "suck"
  },
  {
    "name": "live",
    "anim": ">1",
    "class": "state",
    "volition": "FALSE",
    "ptpl": "pres",
    "vtags": "habit",
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
    "anim": ">1",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags:thing|occasion|undertaking|difficulty}"
  },
  {
    "name": "repair",
    "anim": 3,
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags:artifact}"
  },
  {
    "name": "crawl",
    "proto": "walk",
    "tags": "creature",
    "vtags": "motion, contact",
    "compext": "MOTION"
  },
  {
    "name": "burn",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "object|substance&!fluid|place",
    "vtags": "--",
    "inflections": "retro: burnt"
  },
  {
    "name": "burn.1",
    "proto": "burn",
    "volition": "TRUE",
    "ptpl": "past",
    "tags": "person",
    "vtags": "--",
    "compcore": "NP{tags:object|substance&!fluid|place}"
  },
  {
    "name": "crack",
    "anim": "<1.5",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "item|solid",
    "vtags": "--"
  },
  {
    "name": "crack.1",
    "anim": "--",
    "ptpl": "past",
    "tags": "creature|force",
    "vtags": "--",
    "compcore": "NP{tags:item|solid}"
  },
  {
    "name": "shatter",
    "proto": "crack",
    "ptpl": "-",
    "vtags": "--"
  },
  {
    "name": "collapse",
    "anim": "<1.5",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "structure",
    "vtags": "--"
  },
  {
    "name": "nuke",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "tags": "person|territory|organization",
    "vtags": "--",
    "compcore": "NP{ tags:territory|site}"
  },
  {
    "name": "help",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "NP{anim:>1}",
    "compext": "(INF_PHRASE2{unpack:vp.compcore.R})"
  },
  {
    "name": "wear",
    "anim": ">1",
    "class": "state",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP{tags:clothing}",
    "inflections": "simp.past: wore, retro: worn"
  },
  {
    "name": "take",
    "anim": ">1",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past|by2",
    "vtags": "motion, generalMotion",
    "compcore": "NP{tags:item|mass|solid;anim:<3}",
    "compext": "MOTION",
    "inflections": "simp.past: took, retro: taken"
  },
  {
    "name": "take1",
    "proto": "take",
    "ptpl": "TODO",
    "vtags": "--",
    "compcore": "--",
    "compext": "(70 off DP{tags:clothing}|30  PRONOUN{tags:clothing} off)"
  },
  {
    "name": "take2",
    "proto": "take",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "--",
    "compext": "off"
  },
  {
    "name": "put1",
    "proto": "take1",
    "ptpl": "TODO",
    "vtags": "placement",
    "compext": "(85 on DP{tags:clothing}   | 15 PRONOUN{tags:clothing} on)",
    "inflections": "simp.past: put, retro: put"
  },
  {
    "name": "put",
    "anim": ">1",
    "tang": ">0",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past|by2",
    "tags": "substance|object&!fixed",
    "vtags": "placement",
    "compcore": "NP{tags:PHYSICAL&!fixed; size: <subject.size}",
    "compext": "LOCATION",
    "inflections": "simp.past: put, retro: put"
  },
  {
    "name": "place",
    "proto": "put",
    "inflections": "--"
  },
  {
    "name": "fill",
    "anim": 3,
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past|no-by",
    "vtags": "--",
    "compcore": "NP{tags:container|place}",
    "compext": "(66 with NP({tags:substance|collective} | {tags:item;number:pl}))"
  },
  {
    "name": "wander",
    "proto": "walk"
  },
  {
    "name": "sneak",
    "proto": "travel"
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
    "inflections": "simp.past: threw, retro: thrown"
  },
  {
    "name": "jump",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "pres",
    "tags": "creature",
    "vtags": "motion, jump",
    "compext": "MOTION"
  },
  {
    "name": "sail",
    "class": "process",
    "volition": "TRUE",
    "ptpl": "-",
    "tags": "waterVehicle|person",
    "vtags": "motion, waterSurface",
    "compext": "MOTION"
  },
  {
    "name": "climb",
    "class": "process",
    "volition": "TRUE",
    "ptpl": "-",
    "tags": "creature&!waterAnimal",
    "vtags": "motion, vertical, up, contact",
    "compext": "MOTION{tags:hasHeight|vertical; anim:0}"
  },
  {
    "name": "climb.1",
    "proto": "climb",
    "compcore": "NP{tags:hasHeight|vertical & !void; anim:0}",
    "compext": "--"
  },
  {
    "name": "slide",
    "class": "process",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "object&!fixed",
    "vtags": "motion, grounded",
    "compext": "MOTION",
    "inflections": "simp.past: slid, retro: slid"
  },
  {
    "name": "skid",
    "proto": "slide",
    "inflections": "--"
  },
  {
    "name": "slither",
    "proto": "slide",
    "anim": ">1",
    "volition": "TRUE",
    "tags": "creature",
    "vtags": "motion, contact",
    "inflections": "--"
  },
  {
    "name": "leap",
    "proto": "jump"
  },
  {
    "name": "shuffle",
    "proto": "limp"
  },
  {
    "name": "saunter",
    "proto": "limp"
  },
  {
    "name": "mosey",
    "proto": "limp"
  },
  {
    "name": "stroll",
    "proto": "limp"
  },
  {
    "name": "trot",
    "proto": "limp"
  },
  {
    "name": "jog",
    "proto": "limp"
  },
  {
    "name": "skip",
    "proto": "limp"
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
    "proto": "walk"
  },
  {
    "name": "roll",
    "proto": "slide"
  },
  {
    "name": "race",
    "proto": "run"
  },
  {
    "name": "transport",
    "proto": "take"
  },
  {
    "name": "smuggle",
    "anim": 3,
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past|by2",
    "vtags": "motion, generalMotion",
    "compcore": "NP{tags:matter&!fixed; anim:(0|>0)}",
    "compext": "(50 into |40 out of | 10 (through|across)) (70 NP{tags: territory} |30 NP{tags: space|site & !bodyOfWater; size: >6})"
  },
  {
    "name": "deport",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past|no-by",
    "compext": "from NP{tags:country}",
    "prohibitions": "pasv: false"
  },
  {
    "name": "exile",
    "proto": "deport",
    "compext": "from NP{tags:territory}"
  },
  {
    "name": "immigrate",
    "disabled": false,
    "class": "event",
    "anim": "3",
    "ptpl": "-",
    "compext": "to NP{tags:country}"
  },
  {
    "name": "annex",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "tags": "country",
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
    "anim": 3,
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past|by2",
    "tags": "person",
    "vtags": "motion, generalMotion",
    "compcore": "NP{tags:object&!fixed; anim: <3}",
    "compext": "MOTION"
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
    "class": "process",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "object&!fixed",
    "vtags": "motion, grounded",
    "compext": "(45 GOAL |55 down NP{tags:incline})",
    "inflections": "--"
  },
  {
    "name": "mistake",
    "anim": 3,
    "class": "event",
    "volition": "FALSE",
    "ptpl": "past|no-by",
    "vtags": "--",
    "compcore": "NP",
    "compext": "for NP{def:indef;anim:subject.anim;tang:subject.tang;number:subject.number}",
    "inflections": "simp.past: mistook, retro: mistaken"
  },
  {
    "name": "soar",
    "proto": "fly"
  },
  {
    "name": "glide",
    "proto": "fly"
  },
  {
    "name": "drift",
    "proto": "float"
  },
  {
    "name": "drop",
    "proto": "toss",
    "vtags": "motion, vertical, down",
    "compext": "(MOTION{volition:false})"
  },
  {
    "name": "pour",
    "class": "process",
    "volition": "TRUE",
    "ptpl": "-",
    "tags": "person",
    "vtags": "motion, vertical, down",
    "compcore": "NP{tags:liquid|aggregate}",
    "compext": "(MOTION{volition:false})"
  },
  {
    "name": "dump",
    "proto": "pour"
  },
  {
    "name": "sprinkle",
    "proto": "pour"
  },
  {
    "name": "spill",
    "proto": "pour",
    "volition": "FALSE"
  },
  {
    "name": "drip",
    "proto": "leak",
    "vtags": "motion, vertical, down"
  },
  {
    "name": "leak",
    "proto": "flow",
    "compext": "SOURCE"
  },
  {
    "name": "ooze",
    "proto": "flow",
    "compext": "(SOURCE|PATH)"
  },
  {
    "name": "flow",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "liquid",
    "vtags": "motion, grounded",
    "compext": "MOTION"
  },
  {
    "name": "creep",
    "tang": 1,
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "PHYSICAL & !fixed",
    "vtags": "motion, contact",
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
    "anim": ">1",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past|by2",
    "tags": "creature",
    "vtags": "motion, jump",
    "compcore": "NP{tags:object&!fixed|substance&!gas;size:<subject.size}",
    "compext": "(80 MOTION  |20 to NP{anim:>1.5})"
  },
  {
    "name": "fling",
    "proto": "toss",
    "inflections": "retro: flung"
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
    "proto": "jump"
  },
  {
    "name": "enter",
    "anim": ">1",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "motion, generalMotion",
    "compext": "(45 GOAL{name:into} |45 NP{tags:building|area|volume|gas;number:sg;partial:false})"
  },
  {
    "name": "exit",
    "proto": "enter",
    "compext": "(33 SOURCE{name:from} |63 NP{tags:building|area|volume|gas;number:sg;partial:false})",
    "inflections": "simp.past: exited, retro: exited, prog: exiting"
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
    "inflections": "simp.past: led, retro: led"
  },
  {
    "name": "explore",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "motion, grounded",
    "compcore": "NP{tags:place|structure}"
  },
  {
    "name": "laugh",
    "anim": 3,
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "compext": "(55 at NP{anim:>1})"
  },
  {
    "name": "chuckle",
    "proto": "laugh"
  },
  {
    "name": "giggle",
    "proto": "laugh",
    "compext": "--"
  },
  {
    "name": "scowl",
    "proto": "laugh"
  },
  {
    "name": "smile",
    "proto": "laugh"
  },
  {
    "name": "growl",
    "proto": "laugh",
    "anim": ">1.5",
    "volition": "TRUE",
    "compext": "(55 at NP{tags:PHYSICAL})"
  },
  {
    "name": "crash",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "vehicle",
    "compext": "(into NP{tags:object|hasHeight & fixed; size: >subject.size})"
  },
  {
    "name": "crash.1",
    "proto": "crash",
    "ptpl": "-",
    "tags": "person",
    "compcore": "NP{tags:vehicle}"
  },
  {
    "name": "describe",
    "proto": "talk",
    "class": "process",
    "ptpl": "past|by2",
    "compcore": "NP"
  },
  {
    "name": "talk",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "activity",
    "compext": "to NP{anim:3}"
  },
  {
    "name": "award",
    "proto": "give",
    "inflections": "--"
  },
  {
    "name": "build",
    "anim": 3,
    "class": "process",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "creation",
    "compcore": "NP{tags:construction}",
    "inflections": "simp.past: built, retro: built"
  },
  {
    "name": "legalize",
    "proto": "criminalize"
  },
  {
    "name": "outlaw",
    "proto": "criminalize"
  },
  {
    "name": "ban",
    "proto": "criminalize"
  },
  {
    "name": "design",
    "proto": "build",
    "compcore": "NP{tags:artifact}"
  },
  {
    "name": "steal",
    "proto": "take",
    "compext": "from NP{tags:person|organization|territory}",
    "inflections": "simp.past: stole, retro: stolen"
  },
  {
    "name": "sabotage",
    "proto": "destroy",
    "anim": ">1",
    "compcore": "NP{tags:instrument}"
  },
  {
    "name": "destroy",
    "anim": ">0",
    "tang": ">0",
    "class": "process",
    "volition": "TRUE",
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
    "proto": "arrest"
  },
  {
    "name": "denounce",
    "proto": "arrest"
  },
  {
    "name": "denounce.1",
    "proto": "arrest",
    "compcore": "(58 NP{tags:volitional | enterprise} | 27 ACTION{volition:true} | 15 ACTIVE_STUFF)",
    "compext": "--"
  },
  {
    "name": "condemn",
    "proto": "denounce"
  },
  {
    "name": "applaud",
    "proto": "denounce"
  },
  {
    "name": "promote",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "past",
    "compcore": "NP{tags: volitional | person | territory}"
  },
  {
    "name": "advertise",
    "proto": "promote",
    "compcore": "NP{tags: volitional | territory | artifact}"
  },
  {
    "name": "discredit",
    "proto": "promote"
  },
  {
    "name": "demonize",
    "proto": "promote"
  },
  {
    "name": "criticize",
    "proto": "denounce"
  },
  {
    "name": "criticize1",
    "proto": "denounce.1",
    "compcore": "NP"
  },
  {
    "name": "order",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "NP{anim:3}",
    "compext": "INF_PHRASE{volition:true}"
  },
  {
    "name": "encourage",
    "proto": "order"
  },
  {
    "name": "discourage",
    "proto": "order",
    "compext": "from GP{volition:true; unpack:c0.R}"
  },
  {
    "name": "persuade",
    "proto": "encourage"
  },
  {
    "name": "dissuade",
    "proto": "discourage"
  },
  {
    "name": "prevent",
    "proto": "discourage"
  },
  {
    "name": "prohibit",
    "proto": "discourage"
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
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "NP{anim:3}",
    "compext": "INF_PHRASE{volition:true}"
  },
  {
    "name": "inspire",
    "proto": "incite"
  },
  {
    "name": "provoke",
    "proto": "incite"
  },
  {
    "name": "provoke1",
    "proto": "provoke",
    "compext": "into GP{volition:true}"
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
    "anim": ">1",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "compcore": "NP{tags:creature}",
    "compext": "GOAL"
  },
  {
    "name": "lure1",
    "proto": "provoke1"
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
    "disabled": "TRUE"
  },
  {
    "name": "hunt",
    "anim": ">1",
    "tang": 2,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "compcore": "N{tags:animal; number:pl;}"
  },
  {
    "name": "hunt.1",
    "proto": "hunt",
    "compcore": "--",
    "compext": "for NP{tags:lifeform|item|substance}"
  },
  {
    "name": "contemplate",
    "disabled": "TRUE"
  },
  {
    "name": "meditate",
    "disabled": "TRUE"
  },
  {
    "name": "assemble",
    "disabled": "TRUE"
  },
  {
    "name": "disassemble",
    "disabled": "TRUE"
  },
  {
    "name": "drip",
    "disabled": "TRUE"
  },
  {
    "name": "rip",
    "disabled": "TRUE"
  },
  {
    "name": "tear",
    "disabled": "TRUE"
  },
  {
    "name": "fold",
    "disabled": "TRUE"
  },
  {
    "name": "bend",
    "disabled": "TRUE"
  },
  {
    "name": "twist",
    "disabled": "TRUE"
  },
  {
    "name": "cut",
    "disabled": "TRUE"
  },
  {
    "name": "slice",
    "disabled": "TRUE"
  },
  {
    "name": "chop",
    "disabled": "TRUE"
  },
  {
    "name": "crush",
    "disabled": "TRUE"
  },
  {
    "name": "scratch",
    "disabled": "TRUE"
  },
  {
    "name": "whistle",
    "disabled": "TRUE"
  },
  {
    "name": "whisper",
    "disabled": "TRUE"
  },
  {
    "name": "mutter",
    "disabled": "TRUE"
  },
  {
    "name": "scream",
    "disabled": "TRUE"
  },
  {
    "name": "shout",
    "disabled": "TRUE"
  },
  {
    "name": "yell",
    "disabled": "TRUE"
  },
  {
    "name": "boast",
    "disabled": "TRUE"
  },
  {
    "name": "warn",
    "disabled": "TRUE",
    "proto": "tell"
  },
  {
    "name": "interrogate",
    "disabled": "TRUE"
  },
  {
    "name": "insult",
    "disabled": "TRUE"
  },
  {
    "name": "slander",
    "disabled": "TRUE"
  },
  {
    "name": "spray",
    "disabled": "TRUE"
  },
  {
    "name": "squirt",
    "disabled": "TRUE"
  },
  {
    "name": "stuff",
    "disabled": "TRUE"
  },
  {
    "name": "pack",
    "disabled": "TRUE"
  },
  {
    "name": "load",
    "disabled": "TRUE"
  },
  {
    "name": "smear",
    "disabled": "TRUE"
  },
  {
    "name": "splatter",
    "disabled": "TRUE"
  },
  {
    "name": "catch",
    "disabled": "TRUE"
  },
  {
    "name": "expel",
    "disabled": "TRUE"
  },
  {
    "name": "evict",
    "disabled": "TRUE"
  },
  {
    "name": "defeat",
    "disabled": true
  },
  {
    "name": "vanquish",
    "disabled": "TRUE"
  },
  {
    "name": "obliterate",
    "disabled": "TRUE"
  },
  {
    "name": "tolerate",
    "anim": ">1.5",
    "class": "state",
    "volition": "TRUE",
    "ptpl": "past",
    "vtags": "--",
    "compcore": "NP(60 {tags:behaviour|situation|condition|construct} | 40 {tags: person})"
  },
  {
    "name": "condone",
    "anim": 3,
    "class": "state",
    "volition": "TRUE",
    "ptpl": "past",
    "compcore": "(60 NP{tags:behaviour|system} | 25 ACTIVE_STUFF | 15 ACTION)"
  },
  {
    "name": "startle",
    "disabled": "TRUE"
  },
  {
    "name": "confuse",
    "disabled": "TRUE"
  },
  {
    "name": "doubt",
    "disabled": "TRUE"
  },
  {
    "name": "invent",
    "disabled": "TRUE"
  },
  {
    "name": "hit",
    "proto": "punch",
    "disabled": false,
    "inflections": "simp.past:hit, retro:hit"
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
    "name": "punch.1",
    "proto": "punch",
    "disabled": false,
    "compcore": "NP{tags:creature}",
    "compext": "(70 in the PASV_SWITCH{construction: N; partOf:  $patient.tags; number: sg})"
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
    "proto": "punch",
    "disabled": false
  },
  {
    "name": "wash",
    "disabled": true
  },
  {
    "name": "domesticate",
    "disabled": true
  },
  {
    "name": "tame",
    "disabled": "TRUE"
  },
  {
    "name": "foist",
    "disabled": true
  },
  {
    "name": "deceive",
    "disabled": "TRUE"
  },
  {
    "name": "congregate",
    "disabled": "TRUE"
  },
  {
    "name": "blink",
    "disabled": "TRUE"
  },
  {
    "name": "spit",
    "disabled": "TRUE"
  },
  {
    "name": "decorate",
    "disabled": "TRUE"
  },
  {
    "name": "draw",
    "disabled": "TRUE"
  },
  {
    "name": "paint",
    "disabled": "TRUE"
  },
  {
    "name": "worship",
    "disabled": "TRUE"
  },
  {
    "name": "praise",
    "proto": "denounce"
  },
  {
    "name": "love",
    "proto": "like",
    "compcore": "(NP| NP{tags:person})"
  },
  {
    "name": "sell",
    "disabled": "TRUE"
  },
  {
    "name": "buy",
    "disabled": "TRUE"
  },
  {
    "name": "capsize",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "waterVehicle"
  },
  {
    "name": "study",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "activity",
    "compcore": "NP{tags: activity|system|object&!person; (25 number: pl |75 count: false; def: indef); quantified: false; possessable:false}"
  },
  {
    "name": "invade",
    "proto": "nuke",
    "class": "process",
    "compcore": "NP{tags:territory}"
  },
  {
    "name": "pretend",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "compext": "INF_PHRASE{unpack:subject.R}"
  },
  {
    "name": "pretend1",
    "proto": "pretend",
    "compext": "THAT_CLAUSE{mood:epi}"
  },
  {
    "name": "promise",
    "proto": "prophesy"
  },
  {
    "name": "promise.1",
    "proto": "promise",
    "compext": "INF_PHRASE{unpack:subject.R}"
  },
  {
    "name": "promise1",
    "proto": "promise",
    "compcore": "NP{anim:3}",
    "compext": "--"
  },
  {
    "name": "wake up",
    "disabled": "TRUE"
  },
  {
    "name": "get up",
    "disabled": "TRUE"
  },
  {
    "name": "stand",
    "disabled": false,
    "class": "activity",
    "vtags": "posture",
    "anim": ">1.5",
    "ptpl": "pres",
    "compext": "LOCATION",
    "inflections": "simp.past: stood, retro: stood"
  },
  {
    "name": "sit",
    "proto": "stand",
    "inflections": "simp.past: sat, retro: sat"
  },
  {
    "name": "lie1",
    "proto": "stand",
    "inflections": "simp.past: lay, retro: lain, prog: lying, retroprog: lying"
  },
  {
    "name": "squat",
    "proto": "stand",
    "inflections": "--"
  },
  {
    "name": "kneel",
    "proto": "stand",
    "inflections": "simp.past: knelt, retro: knelt"
  },
  {
    "name": "watch",
    "anim": ">1.5",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "-",
    "compcore": "(38 NP{tags:creature} |38 NP{tags:event})"
  },
  {
    "name": "hear",
    "disabled": "TRUE"
  },
  {
    "name": "listen",
    "disabled": "TRUE"
  },
  {
    "name": "smell",
    "disabled": "TRUE"
  },
  {
    "name": "grab",
    "disabled": "TRUE"
  },
  {
    "name": "hold on to",
    "disabled": "TRUE"
  },
  {
    "name": "hold",
    "disabled": "TRUE"
  },
  {
    "name": "trust",
    "disabled": "TRUE"
  },
  {
    "name": "wish",
    "disabled": "TRUE"
  },
  {
    "name": "want",
    "disabled": "TRUE"
  },
  {
    "name": "need",
    "disabled": "TRUE"
  },
  {
    "name": "have",
    "disabled": "TRUE"
  },
  {
    "name": "own",
    "disabled": "TRUE"
  },
  {
    "name": "owe",
    "disabled": "TRUE"
  },
  {
    "name": "belong",
    "disabled": "TRUE"
  },
  {
    "name": "contain",
    "disabled": "TRUE"
  },
  {
    "name": "cost",
    "disabled": "TRUE"
  },
  {
    "name": "surprise",
    "disabled": "TRUE"
  },
  {
    "name": "shock",
    "disabled": "TRUE"
  },
  {
    "name": "celebrate",
    "disabled": "TRUE"
  },
  {
    "name": "correct",
    "disabled": "TRUE"
  },
  {
    "name": "disappoint",
    "disabled": "TRUE"
  },
  {
    "name": "appoint",
    "disabled": "TRUE"
  },
  {
    "name": "elect",
    "disabled": "TRUE"
  },
  {
    "name": "choose",
    "disabled": "TRUE"
  },
  {
    "name": "visit",
    "anim": 3,
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "past",
    "compcore": "NP{tags:person|beast|site|territory}"
  },
  {
    "name": "attend",
    "proto": "visit",
    "compcore": "NP{tags:occasion}"
  },
  {
    "name": "host",
    "proto": "attend",
    "tags": "person|territory|organization"
  },
  {
    "name": "invite",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "compcore": "NP{anim:3}",
    "compext": "to (70 NP{tags:occasion} |30 NP{tags:site})"
  },
  {
    "name": "open",
    "disabled": "TRUE"
  },
  {
    "name": "close",
    "disabled": "TRUE"
  },
  {
    "name": "play",
    "anim": ">1.5",
    "class": "activity",
    "volition": "TRUE",
    "ptpl": "pres",
    "vtags": "activity"
  },
  {
    "name": "play1",
    "proto": "play",
    "anim": 3,
    "ptpl": "past",
    "compcore": "NP{tags:musicalInstrument|game|song}"
  },
  {
    "name": "play1.1",
    "proto": "play1",
    "compcore": "NP{tags:song}",
    "compext": "(60 on NP{tags:musicalInstrument; number:sg})"
  },
  {
    "name": "play1.2",
    "proto": "play1.1",
    "compext": "(60 on NP{tags:audioDevice; number:sg})"
  },
  {
    "name": "win",
    "anim": 3,
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "compcore": "NP{tags:contest}",
    "inflections": "simp.past: won, retro: won"
  },
  {
    "name": "win.1",
    "proto": "win",
    "class": "activity",
    "ptpl": "pres"
  },
  {
    "name": "lose",
    "proto": "win",
    "inflections": "simp.past: lost, retro: lost"
  },
  {
    "name": "perform",
    "proto": "play1.1"
  },
  {
    "name": "escape",
    "proto": "travel",
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
    "compext": "PATH"
  },
  {
    "name": "flee",
    "proto": "travel",
    "inflections": "simp.past: fled, retro: fled"
  },
  {
    "name": "hike",
    "proto": "walk",
    "tags": "person",
    "compext": "MOTION{size:>8}"
  },
  {
    "name": "carpool",
    "disabled": "TRUE",
    "proto": "walk",
    "tags": "person",
    "compext": "MOTION{lm.tags:site|territory}"
  },
  {
    "name": "hitchhike",
    "proto": "carpool"
  },
  {
    "name": "stumble",
    "disabled": "TRUE"
  },
  {
    "name": "limp",
    "proto": "walk",
    "tags": "creature"
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
    "proto": "limp"
  },
  {
    "name": "dash",
    "proto": "walk.1",
    "compext": "MOTION"
  },
  {
    "name": "hasten",
    "proto": "walk.1"
  },
  {
    "name": "rush",
    "proto": "walk"
  },
  {
    "name": "dive",
    "disabled": "TRUE"
  },
  {
    "name": "plunge",
    "disabled": "TRUE"
  },
  {
    "name": "arrive",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "-",
    "tags": "creature|motorVehicle|DELIVERYorSOMETHING|MSG",
    "compcore": "(45 at NP{tags:site|position|occasion;number:sg} |25 in NP{tags:area;number:sg;} |5 through NP{tags:passage;})"
  },
  {
    "name": "threaten",
    "proto": "promise.1"
  },
  {
    "name": "unleash",
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past",
    "tags": "person",
    "compcore": "NP{tags:beast}"
  },
  {
    "name": "release",
    "proto": "unleash",
    "compcore": "NP{tags:creature}"
  },
  {
    "name": "capture",
    "proto": "release"
  },
  {
    "name": "kidnap",
    "proto": "release",
    "vtags": "--",
    "compcore": "NP{tags:person}",
    "inflections": "simp.past: kidnapped, retro: kidnapped"
  },
  {
    "name": "leave",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "motion, generalMotion",
    "compcore": "NP{tags:place|occasion; number:sg}",
    "inflections": "simp.past: left, retro: left"
  },
  {
    "name": "leave1",
    "proto": "leave",
    "anim": "--",
    "tags": "vehicle",
    "vtags": "--"
  },
  {
    "name": "leave2",
    "proto": "leave",
    "vtags": "situated",
    "compcore": "NP{tags:object}",
    "compext": "(70 (33 behind) LOCATION |20 alone)"
  },
  {
    "name": "leave3",
    "proto": "leave",
    "compcore": "--",
    "compext": "SOURCE{lm.tags:place; prep.name:from}"
  },
  {
    "name": "meet",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "-",
    "vtags": "situated",
    "compext": "(60 LOCATION)",
    "inflections": "simp.past: met, retro: met",
    "prohibitions": "number:sg"
  },
  {
    "name": "meet1",
    "proto": "meet",
    "tags": "collective",
    "prohibitions": "--"
  },
  {
    "name": "meet2",
    "proto": "meet",
    "compcore": "NP{tags:person}"
  },
  {
    "name": "meet3",
    "proto": "meet",
    "class": "activity"
  },
  {
    "name": "consider",
    "anim": 3,
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "-",
    "vtags": "--",
    "compcore": "GP{unpack:subject.R;volition:TRUE}"
  },
  {
    "name": "hide",
    "anim": ">1",
    "class": "event",
    "volition": "TRUE",
    "vtags": "situated",
    "compext": "(LOCATION)",
    "inflections": "simp.past: hid, retro: hidden"
  },
  {
    "name": "hide.1",
    "proto": "hide",
    "anim": 3,
    "ptpl": "past|by2",
    "compcore": "NP{tags:object&!fixed}"
  },
  {
    "name": "hide1",
    "proto": "hide",
    "class": "activity",
    "ptpl": "pres"
  },
  {
    "name": "plant",
    "anim": 3,
    "class": "event",
    "volition": "TRUE",
    "ptpl": "past|by2",
    "vtags": "placement, situated",
    "compcore": "NP{tags:plant}",
    "compext": "(LOCATION)"
  },
  {
    "name": "cultivate",
    "proto": "plant",
    "class": "activity",
    "vtags": "--",
    "compext": "--"
  },
  {
    "name": "harvest",
    "proto": "plant",
    "compcore": "NP{tags:plant&food}"
  },
  {
    "name": "wither",
    "class": "process",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "plant"
  },
  {
    "name": "rot",
    "proto": "wither",
    "tags": "food|plant"
  },
  {
    "name": "escalate",
    "class": "process",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "situation"
  },
  {
    "name": "deteriorate",
    "proto": "escalate",
    "tags": "situation|malady|system|event|PHYSICAL"
  },
  {
    "name": "improve",
    "proto": "deteriorate"
  },
  {
    "name": "increase",
    "proto": "escalate",
    "tags": "situation|property&!potential|phenomena|behaviour"
  },
  {
    "name": "decrease",
    "proto": "increase"
  },
  {
    "name": "diminish",
    "proto": "increase"
  },
  {
    "name": "itch",
    "class": "activity",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "bodyPart"
  },
  {
    "name": "tingle",
    "proto": "itch"
  },
  {
    "name": "ache",
    "proto": "itch"
  },
  {
    "name": "hurt",
    "proto": "itch"
  },
  {
    "name": "throb",
    "proto": "itch"
  },
  {
    "name": "twitch",
    "class": "event",
    "volition": "FALSE",
    "ptpl": "pres",
    "tags": "bodyPart|creature"
  },
  {
    "name": "act up",
    "disabled": "TRUE"
  },
  {
    "name": "add up",
    "disabled": "TRUE"
  },
  {
    "name": "answer to",
    "disabled": "TRUE"
  },
  {
    "name": "ask for",
    "disabled": "TRUE"
  },
  {
    "name": "back off",
    "disabled": "TRUE"
  },
  {
    "name": "back out",
    "disabled": "TRUE"
  },
  {
    "name": "back up",
    "disabled": "TRUE"
  },
  {
    "name": "be after",
    "disabled": "TRUE"
  },
  {
    "name": "be cut out for",
    "disabled": "TRUE"
  },
  {
    "name": "be in for",
    "disabled": "TRUE"
  },
  {
    "name": "be not on",
    "disabled": "TRUE"
  },
  {
    "name": "be up to",
    "disabled": "TRUE"
  },
  {
    "name": "be up",
    "disabled": "TRUE"
  },
  {
    "name": "bear with",
    "disabled": "TRUE"
  },
  {
    "name": "blow over",
    "disabled": "TRUE"
  },
  {
    "name": "blow up",
    "disabled": "TRUE"
  },
  {
    "name": "boil over",
    "disabled": "TRUE"
  },
  {
    "name": "boot out",
    "disabled": "TRUE"
  },
  {
    "name": "bottle out",
    "disabled": "TRUE"
  },
  {
    "name": "bounce back",
    "disabled": "TRUE"
  },
  {
    "name": "bound to",
    "disabled": "TRUE"
  },
  {
    "name": "bowl over",
    "disabled": "TRUE"
  },
  {
    "name": "break down",
    "disabled": "TRUE"
  },
  {
    "name": "break in",
    "disabled": "TRUE"
  },
  {
    "name": "break out",
    "disabled": "TRUE"
  },
  {
    "name": "bring about",
    "disabled": "TRUE"
  },
  {
    "name": "bring off",
    "disabled": "TRUE"
  },
  {
    "name": "bring round",
    "disabled": "TRUE"
  },
  {
    "name": "bring up",
    "disabled": "TRUE"
  },
  {
    "name": "bring up",
    "disabled": "TRUE"
  },
  {
    "name": "brush off",
    "disabled": "TRUE"
  },
  {
    "name": "burn out",
    "disabled": "TRUE"
  },
  {
    "name": "butter up",
    "disabled": "TRUE"
  },
  {
    "name": "call off",
    "disabled": "TRUE"
  },
  {
    "name": "carry off",
    "disabled": "TRUE"
  },
  {
    "name": "carry on",
    "disabled": "TRUE"
  },
  {
    "name": "carry out",
    "disabled": "TRUE"
  },
  {
    "name": "catch on",
    "disabled": "TRUE"
  },
  {
    "name": "catch on",
    "disabled": "TRUE"
  },
  {
    "name": "catch up on",
    "disabled": "TRUE"
  },
  {
    "name": "chance on",
    "disabled": "TRUE"
  },
  {
    "name": "chat up",
    "disabled": "TRUE"
  },
  {
    "name": "chicken out",
    "disabled": "TRUE"
  },
  {
    "name": "chip in",
    "disabled": "TRUE"
  },
  {
    "name": "clear off",
    "disabled": "TRUE"
  },
  {
    "name": "clear up",
    "disabled": "TRUE"
  },
  {
    "name": "climb down",
    "disabled": "TRUE"
  },
  {
    "name": "club together",
    "disabled": "TRUE"
  },
  {
    "name": "come across as",
    "disabled": "TRUE"
  },
  {
    "name": "come across",
    "disabled": "TRUE"
  },
  {
    "name": "come along",
    "disabled": "TRUE"
  },
  {
    "name": "come by",
    "disabled": "TRUE"
  },
  {
    "name": "come down with",
    "disabled": "TRUE"
  },
  {
    "name": "come off",
    "disabled": "TRUE"
  },
  {
    "name": "come out with",
    "disabled": "TRUE"
  },
  {
    "name": "come to",
    "disabled": "TRUE"
  },
  {
    "name": "come up with",
    "disabled": "TRUE"
  },
  {
    "name": "come up",
    "disabled": "TRUE"
  },
  {
    "name": "count on",
    "disabled": "TRUE"
  },
  {
    "name": "crack down on",
    "disabled": "TRUE"
  },
  {
    "name": "cry off",
    "disabled": "TRUE"
  },
  {
    "name": "cut out",
    "disabled": "TRUE"
  },
  {
    "name": "dawn on",
    "disabled": "TRUE"
  },
  {
    "name": "die down",
    "disabled": "TRUE"
  },
  {
    "name": "dish out",
    "disabled": "TRUE"
  },
  {
    "name": "do away with",
    "disabled": "TRUE"
  },
  {
    "name": "do in",
    "disabled": "TRUE"
  },
  {
    "name": "do out of",
    "disabled": "TRUE"
  },
  {
    "name": "do up",
    "disabled": "TRUE"
  },
  {
    "name": "do up",
    "disabled": "TRUE"
  },
  {
    "name": "do without",
    "disabled": "TRUE"
  },
  {
    "name": "doll up",
    "disabled": "TRUE"
  },
  {
    "name": "drag on",
    "disabled": "TRUE"
  },
  {
    "name": "drag out",
    "disabled": "TRUE"
  },
  {
    "name": "draw on",
    "disabled": "TRUE"
  },
  {
    "name": "dream up",
    "disabled": "TRUE"
  },
  {
    "name": "drink in",
    "disabled": "TRUE"
  },
  {
    "name": "drop off",
    "disabled": "TRUE"
  },
  {
    "name": "drop off",
    "disabled": "TRUE"
  },
  {
    "name": "drum up",
    "disabled": "TRUE"
  },
  {
    "name": "egg on",
    "disabled": "TRUE"
  },
  {
    "name": "eye up",
    "disabled": "TRUE"
  },
  {
    "name": "face up to",
    "disabled": "TRUE"
  },
  {
    "name": "fall about",
    "disabled": "TRUE"
  },
  {
    "name": "fall behind",
    "disabled": "TRUE"
  },
  {
    "name": "fall for",
    "disabled": "TRUE"
  },
  {
    "name": "fall for",
    "disabled": "TRUE"
  },
  {
    "name": "fall off",
    "disabled": "TRUE"
  },
  {
    "name": "fall out",
    "disabled": "TRUE"
  },
  {
    "name": "fall through",
    "disabled": "TRUE"
  },
  {
    "name": "feel up to",
    "disabled": "TRUE"
  },
  {
    "name": "figure out",
    "disabled": "TRUE"
  },
  {
    "name": "fill in",
    "disabled": "TRUE"
  },
  {
    "name": "fob off",
    "disabled": "TRUE"
  },
  {
    "name": "fold up",
    "disabled": "TRUE"
  },
  {
    "name": "fork out",
    "disabled": "TRUE"
  },
  {
    "name": "get about",
    "disabled": "TRUE"
  },
  {
    "name": "get across",
    "disabled": "TRUE"
  },
  {
    "name": "get ahead",
    "disabled": "TRUE"
  },
  {
    "name": "get along with",
    "disabled": "TRUE"
  },
  {
    "name": "get at",
    "disabled": "TRUE"
  },
  {
    "name": "get at",
    "disabled": "TRUE"
  },
  {
    "name": "get away with",
    "disabled": "TRUE"
  },
  {
    "name": "get away",
    "disabled": "TRUE"
  },
  {
    "name": "get behind",
    "disabled": "TRUE"
  },
  {
    "name": "get by",
    "disabled": "TRUE"
  },
  {
    "name": "get down",
    "disabled": "TRUE"
  },
  {
    "name": "get in",
    "disabled": "TRUE"
  },
  {
    "name": "get into",
    "disabled": "TRUE"
  },
  {
    "name": "get off with",
    "disabled": "TRUE"
  },
  {
    "name": "get on for",
    "disabled": "TRUE"
  },
  {
    "name": "get on with",
    "disabled": "TRUE"
  },
  {
    "name": "get on",
    "disabled": "TRUE"
  },
  {
    "name": "get on",
    "disabled": "TRUE"
  },
  {
    "name": "get over",
    "disabled": "TRUE"
  },
  {
    "name": "get round to",
    "disabled": "TRUE"
  },
  {
    "name": "get through to",
    "disabled": "TRUE"
  },
  {
    "name": "get to",
    "disabled": "TRUE"
  },
  {
    "name": "get up to",
    "disabled": "TRUE"
  },
  {
    "name": "give away",
    "disabled": "TRUE"
  },
  {
    "name": "give in",
    "disabled": "TRUE"
  },
  {
    "name": "give up on",
    "disabled": "TRUE"
  },
  {
    "name": "give up",
    "disabled": "TRUE"
  },
  {
    "name": "go ahead",
    "disabled": "TRUE"
  },
  {
    "name": "go along with",
    "disabled": "TRUE"
  },
  {
    "name": "go back on",
    "disabled": "TRUE"
  },
  {
    "name": "go for",
    "disabled": "TRUE"
  },
  {
    "name": "go in for",
    "disabled": "TRUE"
  },
  {
    "name": "go off",
    "disabled": "TRUE"
  },
  {
    "name": "go off",
    "disabled": "TRUE"
  },
  {
    "name": "go off",
    "disabled": "TRUE"
  },
  {
    "name": "go on about",
    "disabled": "TRUE"
  },
  {
    "name": "go on",
    "disabled": "TRUE"
  },
  {
    "name": "go over",
    "disabled": "TRUE"
  },
  {
    "name": "go through with",
    "disabled": "TRUE"
  },
  {
    "name": "go through",
    "disabled": "TRUE"
  },
  {
    "name": "grow on",
    "disabled": "TRUE"
  },
  {
    "name": "grow out of",
    "disabled": "TRUE"
  },
  {
    "name": "hand on",
    "disabled": "TRUE"
  },
  {
    "name": "hand out",
    "disabled": "TRUE"
  },
  {
    "name": "hand over",
    "disabled": "TRUE"
  },
  {
    "name": "hang around",
    "disabled": "TRUE"
  },
  {
    "name": "hang on",
    "disabled": "TRUE"
  },
  {
    "name": "hang out",
    "disabled": "TRUE"
  },
  {
    "name": "hang up",
    "disabled": "TRUE"
  },
  {
    "name": "harp on",
    "disabled": "TRUE"
  },
  {
    "name": "have in for",
    "disabled": "TRUE"
  },
  {
    "name": "have on",
    "disabled": "TRUE"
  },
  {
    "name": "head for",
    "disabled": "TRUE"
  },
  {
    "name": "head off",
    "disabled": "TRUE"
  },
  {
    "name": "hear out",
    "disabled": "TRUE"
  },
  {
    "name": "hit on",
    "disabled": "TRUE"
  },
  {
    "name": "hold forth",
    "disabled": "TRUE"
  },
  {
    "name": "hold out",
    "disabled": "TRUE"
  },
  {
    "name": "hold up",
    "disabled": "TRUE"
  },
  {
    "name": "horse around",
    "disabled": "TRUE"
  },
  {
    "name": "hush up",
    "disabled": "TRUE"
  },
  {
    "name": "itch for",
    "disabled": "TRUE"
  },
  {
    "name": "jump at",
    "disabled": "TRUE"
  },
  {
    "name": "jump on",
    "disabled": "TRUE"
  },
  {
    "name": "keep at",
    "disabled": "TRUE"
  },
  {
    "name": "keep up with",
    "disabled": "TRUE"
  },
  {
    "name": "keep up",
    "disabled": "TRUE"
  },
  {
    "name": "kick off",
    "disabled": "TRUE"
  },
  {
    "name": "kiss up to",
    "disabled": "TRUE"
  },
  {
    "name": "knock off",
    "disabled": "TRUE"
  },
  {
    "name": "knock off",
    "disabled": "TRUE"
  },
  {
    "name": "lay into",
    "disabled": "TRUE"
  },
  {
    "name": "lay off",
    "disabled": "TRUE"
  },
  {
    "name": "leave out",
    "disabled": "TRUE"
  },
  {
    "name": "let down",
    "disabled": "TRUE"
  },
  {
    "name": "let in on",
    "disabled": "TRUE"
  },
  {
    "name": "let off",
    "disabled": "TRUE"
  },
  {
    "name": "let off",
    "disabled": "TRUE"
  },
  {
    "name": "let on",
    "disabled": "TRUE"
  },
  {
    "name": "let up",
    "disabled": "TRUE"
  },
  {
    "name": "line up",
    "disabled": "TRUE"
  },
  {
    "name": "live down",
    "disabled": "TRUE"
  },
  {
    "name": "live up to",
    "disabled": "TRUE"
  },
  {
    "name": "long for",
    "disabled": "TRUE"
  },
  {
    "name": "look after",
    "disabled": "TRUE"
  },
  {
    "name": "look into",
    "disabled": "TRUE"
  },
  {
    "name": "look out",
    "disabled": "TRUE"
  },
  {
    "name": "look up to",
    "disabled": "TRUE"
  },
  {
    "name": "look up",
    "disabled": "TRUE"
  },
  {
    "name": "look up",
    "disabled": "TRUE"
  },
  {
    "name": "luck out",
    "disabled": "TRUE"
  },
  {
    "name": "lump together",
    "disabled": "TRUE"
  },
  {
    "name": "make do with",
    "disabled": "TRUE"
  },
  {
    "name": "make for",
    "disabled": "TRUE"
  },
  {
    "name": "make of",
    "disabled": "TRUE"
  },
  {
    "name": "make out",
    "disabled": "TRUE"
  },
  {
    "name": "make over",
    "disabled": "TRUE"
  },
  {
    "name": "make up",
    "disabled": "TRUE"
  },
  {
    "name": "make up",
    "disabled": "TRUE"
  },
  {
    "name": "mess about",
    "disabled": "TRUE"
  },
  {
    "name": "mess up",
    "disabled": "TRUE"
  },
  {
    "name": "mind out",
    "disabled": "TRUE"
  },
  {
    "name": "mix up",
    "disabled": "TRUE"
  },
  {
    "name": "mouth off",
    "disabled": "TRUE"
  },
  {
    "name": "move on",
    "disabled": "TRUE"
  },
  {
    "name": "nip out",
    "disabled": "TRUE"
  },
  {
    "name": "nod off",
    "disabled": "TRUE"
  },
  {
    "name": "nose around",
    "disabled": "TRUE"
  },
  {
    "name": "own up",
    "disabled": "TRUE"
  },
  {
    "name": "pack in",
    "disabled": "TRUE"
  },
  {
    "name": "pack up",
    "disabled": "TRUE"
  },
  {
    "name": "pass away",
    "disabled": "TRUE"
  },
  {
    "name": "pass out",
    "disabled": "TRUE"
  },
  {
    "name": "pass up",
    "disabled": "TRUE"
  },
  {
    "name": "pencil in",
    "disabled": "TRUE"
  },
  {
    "name": "perk up",
    "disabled": "TRUE"
  },
  {
    "name": "peter out",
    "disabled": "TRUE"
  },
  {
    "name": "pick at",
    "disabled": "TRUE"
  },
  {
    "name": "pick on",
    "disabled": "TRUE"
  },
  {
    "name": "pick up",
    "disabled": "TRUE"
  },
  {
    "name": "pick up",
    "disabled": "TRUE"
  },
  {
    "name": "pick up",
    "disabled": "TRUE"
  },
  {
    "name": "pin down",
    "disabled": "TRUE"
  },
  {
    "name": "pipe down",
    "disabled": "TRUE"
  },
  {
    "name": "piss about",
    "disabled": "TRUE"
  },
  {
    "name": "pitch in",
    "disabled": "TRUE"
  },
  {
    "name": "play around",
    "disabled": "TRUE"
  },
  {
    "name": "play at",
    "disabled": "TRUE"
  },
  {
    "name": "play down",
    "disabled": "TRUE"
  },
  {
    "name": "play up",
    "disabled": "TRUE"
  },
  {
    "name": "point out",
    "disabled": "TRUE"
  },
  {
    "name": "pop up",
    "disabled": "TRUE"
  },
  {
    "name": "press on",
    "disabled": "TRUE"
  },
  {
    "name": "pull apart",
    "disabled": "TRUE"
  },
  {
    "name": "pull off",
    "disabled": "TRUE"
  },
  {
    "name": "pull through",
    "disabled": "TRUE"
  },
  {
    "name": "pull together",
    "disabled": "TRUE"
  },
  {
    "name": "pull up",
    "disabled": "TRUE"
  },
  {
    "name": "push around",
    "disabled": "TRUE"
  },
  {
    "name": "put by",
    "disabled": "TRUE"
  },
  {
    "name": "put down to",
    "disabled": "TRUE"
  },
  {
    "name": "put down",
    "disabled": "TRUE"
  },
  {
    "name": "put down",
    "disabled": "TRUE"
  },
  {
    "name": "put forward",
    "disabled": "TRUE"
  },
  {
    "name": "put off",
    "disabled": "TRUE"
  },
  {
    "name": "put off",
    "disabled": "TRUE"
  },
  {
    "name": "put on",
    "disabled": "TRUE"
  },
  {
    "name": "put up with",
    "disabled": "TRUE"
  },
  {
    "name": "put up",
    "disabled": "TRUE"
  },
  {
    "name": "rake up",
    "disabled": "TRUE"
  },
  {
    "name": "ride on",
    "disabled": "TRUE"
  },
  {
    "name": "rip off",
    "disabled": "TRUE"
  },
  {
    "name": "roll up",
    "disabled": "TRUE"
  },
  {
    "name": "root for",
    "disabled": "TRUE"
  },
  {
    "name": "rope in",
    "disabled": "TRUE"
  },
  {
    "name": "rub in",
    "disabled": "TRUE"
  },
  {
    "name": "rule out",
    "disabled": "TRUE"
  },
  {
    "name": "run down",
    "disabled": "TRUE"
  },
  {
    "name": "run into",
    "disabled": "TRUE"
  },
  {
    "name": "run out",
    "disabled": "TRUE"
  },
  {
    "name": "sail through",
    "disabled": "TRUE"
  },
  {
    "name": "scrape through",
    "disabled": "TRUE"
  },
  {
    "name": "screw up",
    "disabled": "TRUE"
  },
  {
    "name": "see off",
    "disabled": "TRUE"
  },
  {
    "name": "see through",
    "disabled": "TRUE"
  },
  {
    "name": "see through",
    "disabled": "TRUE"
  },
  {
    "name": "see to",
    "disabled": "TRUE"
  },
  {
    "name": "sell up",
    "disabled": "TRUE"
  },
  {
    "name": "send down",
    "disabled": "TRUE"
  },
  {
    "name": "send up",
    "disabled": "TRUE"
  },
  {
    "name": "set aside",
    "disabled": "TRUE"
  },
  {
    "name": "set in",
    "disabled": "TRUE"
  },
  {
    "name": "set off",
    "disabled": "TRUE"
  },
  {
    "name": "set out",
    "disabled": "TRUE"
  },
  {
    "name": "shake off",
    "disabled": "TRUE"
  },
  {
    "name": "shake up",
    "disabled": "TRUE"
  },
  {
    "name": "shell out",
    "disabled": "TRUE"
  },
  {
    "name": "shop around",
    "disabled": "TRUE"
  },
  {
    "name": "show off",
    "disabled": "TRUE"
  },
  {
    "name": "show up",
    "disabled": "TRUE"
  },
  {
    "name": "shut up",
    "disabled": "TRUE"
  },
  {
    "name": "sink in",
    "disabled": "TRUE"
  },
  {
    "name": "sit by",
    "disabled": "TRUE"
  },
  {
    "name": "sit on",
    "disabled": "TRUE"
  },
  {
    "name": "sit out",
    "disabled": "TRUE"
  },
  {
    "name": "size up",
    "disabled": "TRUE"
  },
  {
    "name": "sleep on",
    "disabled": "TRUE"
  },
  {
    "name": "slip up",
    "disabled": "TRUE"
  },
  {
    "name": "snap up",
    "disabled": "TRUE"
  },
  {
    "name": "snow under",
    "disabled": "TRUE"
  },
  {
    "name": "sort out",
    "disabled": "TRUE"
  },
  {
    "name": "speak up",
    "disabled": "TRUE"
  },
  {
    "name": "spell out",
    "disabled": "TRUE"
  },
  {
    "name": "spin out",
    "disabled": "TRUE"
  },
  {
    "name": "splash out",
    "disabled": "TRUE"
  },
  {
    "name": "sponge off",
    "disabled": "TRUE"
  },
  {
    "name": "stamp out",
    "disabled": "TRUE"
  },
  {
    "name": "stand for",
    "disabled": "TRUE"
  },
  {
    "name": "stand in",
    "disabled": "TRUE"
  },
  {
    "name": "stand out",
    "disabled": "TRUE"
  },
  {
    "name": "stand up for",
    "disabled": "TRUE"
  },
  {
    "name": "step down",
    "disabled": "TRUE"
  },
  {
    "name": "step up",
    "disabled": "TRUE"
  },
  {
    "name": "stick around",
    "disabled": "TRUE"
  },
  {
    "name": "stick to",
    "disabled": "TRUE"
  },
  {
    "name": "stick up for",
    "disabled": "TRUE"
  },
  {
    "name": "stop by",
    "disabled": "TRUE"
  },
  {
    "name": "string along",
    "disabled": "TRUE"
  },
  {
    "name": "sweat out",
    "disabled": "TRUE"
  },
  {
    "name": "tag along",
    "disabled": "TRUE"
  },
  {
    "name": "tail off",
    "disabled": "TRUE"
  },
  {
    "name": "take after",
    "disabled": "TRUE"
  },
  {
    "name": "take down",
    "disabled": "TRUE"
  },
  {
    "name": "take in",
    "disabled": "TRUE"
  },
  {
    "name": "take in",
    "disabled": "TRUE"
  },
  {
    "name": "take it upon",
    "disabled": "TRUE"
  },
  {
    "name": "take off",
    "disabled": "TRUE"
  },
  {
    "name": "take off",
    "disabled": "TRUE"
  },
  {
    "name": "take off",
    "disabled": "TRUE"
  },
  {
    "name": "take on",
    "disabled": "TRUE"
  },
  {
    "name": "take on",
    "disabled": "TRUE"
  },
  {
    "name": "take out on",
    "disabled": "TRUE"
  },
  {
    "name": "take over",
    "disabled": "TRUE"
  },
  {
    "name": "take place",
    "disabled": "TRUE"
  },
  {
    "name": "take to",
    "disabled": "TRUE"
  },
  {
    "name": "take up on",
    "disabled": "TRUE"
  },
  {
    "name": "take up",
    "disabled": "TRUE"
  },
  {
    "name": "talk back",
    "disabled": "TRUE"
  },
  {
    "name": "talk into",
    "disabled": "TRUE"
  },
  {
    "name": "talk round",
    "disabled": "TRUE"
  },
  {
    "name": "talk up",
    "disabled": "TRUE"
  },
  {
    "name": "tear into",
    "disabled": "TRUE"
  },
  {
    "name": "tell off",
    "disabled": "TRUE"
  },
  {
    "name": "tell on",
    "disabled": "TRUE"
  },
  {
    "name": "think up",
    "disabled": "TRUE"
  },
  {
    "name": "throw back",
    "disabled": "TRUE"
  },
  {
    "name": "throw up",
    "disabled": "TRUE"
  },
  {
    "name": "tick off",
    "disabled": "TRUE"
  },
  {
    "name": "touch down",
    "disabled": "TRUE"
  },
  {
    "name": "touch up",
    "disabled": "TRUE"
  },
  {
    "name": "toy with",
    "disabled": "TRUE"
  },
  {
    "name": "trip up",
    "disabled": "TRUE"
  },
  {
    "name": "try on",
    "disabled": "TRUE"
  },
  {
    "name": "try out for",
    "disabled": "TRUE"
  },
  {
    "name": "try out",
    "disabled": "TRUE"
  },
  {
    "name": "tune out",
    "disabled": "TRUE"
  },
  {
    "name": "turn down",
    "disabled": "TRUE"
  },
  {
    "name": "turn in",
    "disabled": "TRUE"
  },
  {
    "name": "turn off",
    "disabled": "TRUE"
  },
  {
    "name": "turn out",
    "disabled": "TRUE"
  },
  {
    "name": "turn out",
    "disabled": "TRUE"
  },
  {
    "name": "turn up",
    "disabled": "TRUE"
  },
  {
    "name": "use up",
    "disabled": "TRUE"
  },
  {
    "name": "wait up",
    "disabled": "TRUE"
  },
  {
    "name": "walk off with",
    "disabled": "TRUE"
  },
  {
    "name": "walk out on",
    "disabled": "TRUE"
  },
  {
    "name": "wear down",
    "disabled": "TRUE"
  },
  {
    "name": "wear off",
    "disabled": "TRUE"
  },
  {
    "name": "win over",
    "disabled": "TRUE"
  },
  {
    "name": "wind down",
    "disabled": "TRUE"
  },
  {
    "name": "wind up",
    "disabled": "TRUE"
  },
  {
    "name": "work out",
    "disabled": "TRUE"
  },
  {
    "name": "work out",
    "disabled": "TRUE"
  },
  {
    "name": "work up",
    "disabled": "TRUE"
  },
  {
    "name": "worm out",
    "disabled": "TRUE"
  },
  {
    "name": "wrap up",
    "disabled": "TRUE"
  },
  {
    "name": "write off",
    "disabled": "TRUE"
  },
  {
    "name": "write off",
    "disabled": "TRUE"
  },
  {
    "name": "zero in on",
    "disabled": "TRUE"
  }
]
