## 2.4.5

### Lexicon processing:
- autoSenses function can automatically create senses from existing words
  - created a rule for phrasal verbs which can have the particle before or after the object
- removed retro inflections that are the same as simp.past. 
  - They are now added automatically when the lexicon is compiled. 
  - Same thing for irregular prog inflections. They now automatically receive the same retroprog inflection.
- proper nouns must also be unique, not just start with a capital letter
- disabled words are now removed in preprocessing and the disabled=false flag is removed from other words
- words no longer inherit inflections field from their proto, unless they are the same word form

### Lexicon:
- added demonyms (nationality nouns)
- more feeling verbs (surprise, enrage, scare, annoy)
- "attack" "experience"
- "buy", "sell", "rent", etc.
- "chateau", "cafe", etc. with diacritics
- more female names
- "fruit", "vegetable", vegetables and "cookie" and other foods
- "greasy", "slimy", "sweaty", "juicy", "bland"
- new handling of phrasal verbs using @ symbol to mark the phrasal particle

### Ontology
- added realEstate and establishment

### Appearance
- new fonts and larger text

### Constructions
- Entirely new passive construction
  - replaced set of multiple custom passive constructions with a single one that generates a regular clause first (like WH_CLAUSE construction) and then pciks it apart to make a passive
- Reworked quantification and noun phrases. Prequant now happens at the NP level rather than DP, so pronouns can have prequant to, like "seven of them"
- Fixed major bug that prevented multiple adjectives in a noun phrase!
- Fixed bug that prevented demonstratives, for how long?!
- fixed bug with quantifiers on unique nouns
- added 'each' and 'every' quantifiers
- removed p_trans and p_vtags restrictions being sent from VP and used by 

### Database
- universal prohibition: activities and enterprises can't be plural (NP was deciding number and picking pl even if 'activity' was a restriction in tags)

### Lexicon editor
- added a "compatible words" feature, to see which words can be applied to the selected one, like which verbs a noun could do, or which nouns and adjective applies to
- visual/layout improvements

### Behind the scenes
- created debugMode (?mode=debug), doesn't do much yet, but lists restrictions when you hover on each construction
- performance improvements
- many other bug fixes