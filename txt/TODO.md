# TODO

- to be or NOT to be, to do or NOT to do... 
- ...neg is getting passed automatically from the matrix clause. it should be deleted in an INF_PHRASE or INF_CLAUSE and then randomly decided again, 
    - but what if a complement needs to specify not to allow a negative INF_THING?

- BUG: predict/promise/prophesy randomly don't enforce future tense or prospective aspect

<!--reflexive-->
- reciprocal

<!--prospective aspect-->

- just, used to, about to

- adverbs

<!--negation-->

- other modals

- light verbs

- possessive pronouns

- indefinite pronouns, here/there, the X one/those ones

- enough / too much/many (takes up det and quant slots)

- neg and pasv allowed in WH_CLAUSE

- relative clause

- PP adjunct for nouns and verbs

- adjective comparative and superlative

- better adjective ordering

- participles from verbs

- 'and'

<!--proper semantically aware genitive noun phrases-->

- mutators - "DEAD man", "bottle OF RUM"

<!--implications - for hierarchical tags, implemented within lexicon-->

- ~~relative comparisons in restrictions, like {size: '<subject.size', thing: '!aux.case'}~~
    - could be upgraded to handle math like {size: '<5+subject.size'}

- ?BUG: sometimes special characters disappear from restrictions like {lm.size: '>trajector.size'}
    
- complex prepositions: over to, down to, up onto

- 3-way distinction of volition for verbs?

- "going to" keeps coming up with weird things

- doors and windows are passages, but they shouldn't be volumes...

- prevent sentences like "They keep stopping starting going."

- make a way to regenerate a branch with same seed and modified restrictions (for PASSIVE) or different seed and same restrictions (for xray mode)

- allow copula in WH_CLAUSE

- allow plurals in WH_CLAUSE like "which people see me"


Other things I said before:

 - use last_obj in parse_restrictions
 - filter restrictions in word getting based on word type template
 - make probabilities take an array like [1,0.3], allow passing down of probs and declare make probs a property of constructions
 - ~~allow restriction to target sub-constructions like {'NP.name': 'example'} or maybe {'adj.name': 'exampley'}~~
