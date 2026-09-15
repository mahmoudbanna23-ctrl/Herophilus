# codex-finish-A.report.md

## Per entry (id | class | words before -> after | marker y/n | what was added)

- npqb-nr-177 | vignette-gap (fluctuating-coma) | 540 -> 540 | y | left at budget; fix 5 tag already present, verified.
- npqb-nr-178 | vignette-defect-gap (boxed, no marker) | 258 -> 530 | n (boxed) | separated L10 citation from the “no intrinsic recovery” clause and tagged it; tagged SAH rebleed/vasospasm and HIE; added functional-vs-structural recovery mechanism and the nontraumatic qualifier.
- npqb-nr-179 | recall | 264 -> 264 | y | left at recall budget (L8 reflex circuits verified).
- npqb-nr-180 | recall | 253 -> 253 | y | left at recall budget (L9 herniation citation verified).
- npqb-nr-181 | recall | 276 -> 283 | y | removed false Q179 brain-death back-reference (fix 1); reworded tail to describe score-3 directly, retained tag.
- npqb-nr-182 | vignette-gap (CN III mechanism) | 259 -> 511 | y | tagged PComm-aneurysm/uncal-herniation mechanism and “down and out” eye (fix 3); confirmed posterior communicating (not posterior cerebral); added mechanism and distractor depth, closing pairing summary.
- npqb-nr-183 | recall | 251 -> 251 | y | left at recall budget.
- npqb-nr-184 | recall | 263 -> 263 | y | left at recall budget.
- npqb-nr-185 | recall | 274 -> 274 | y | left at recall budget.
- npqb-nr-186 | vignette-defect-gap (3-option source defect) | 331 -> 445 | y | replaced false “locked-in not in lecture set” claim with accurate L12 citation; tagged dorsal-tegmentum detail and basilar-thrombosis emphasis; kept 3-option defect note.
- npqb-nr-187 | vignette-defect-gap (boxed, no marker) | 332 -> 488 | n (boxed) | isolated oculocephalic reflex from the L8 citation and tagged it (fix 2); L8 now cited only for corneal and gag circuits; added reflex and distractor depth; box verbatim preserved.

## Verification

- Syntax: node eval wrapper printed 11 (entry count matches).
- Markers: 9 (all non-boxed entries; Q178/Q187 boxed carry none).
- Emoji count in explanations: 0.
- LF preserved: CR 0, LF 125; no other repo file touched.
- Frozen fields (id/chapter/bank/stem/options/answer/objective/source) unchanged; box text byte-for-byte in Q178/Q187 vs staging.

## Half-A five provenance fixes (all landed)

1. Q181 false GCS/Q179 claim removed. Closing sentence now reads: “...distinct from the near-total unresponsiveness of the score-3 patient, whose eyes do not open, whose speech is absent and whose limbs do not move *(this bedside picture is not taken from the course material)*.”
2. Q187 oculocephalic reflex separated from the L8 citation: “The oculocephalic, or doll’s-eye, reflex is a third brainstem circuit, but no lecture in this set describes it: ... *(the oculocephalic reflex and its vestibulo-ocular circuit are not taken from the course material)*.” L8 is cited only for corneal (CN V afferent/CN VII efferent) and gag (CN IX afferent/CN X efferent).
3. Q182: after the L8-cited opening, the PComm/uncal and “down and out” sentences carry “*(the posterior-communicating-aneurysm and uncal-herniation mechanism, and the composite “down and out” eye, are not taken from the course material)*”. Text says posterior communicating artery (checked: no “posterior cerebral”); “Horner’s” retained.
4. Q178: recovery clause separated from the L10 citation; L10 covers the basilar-occlusion CTA emergency, and “the territory involved is not one that recovers on its own once infarcted” is followed by “*(the lack of intrinsic recovery of infarcted tissue is not taken from the course material)*”.
5. Q177 bilateral paramedian thalamic lesion claim already carried “*(the paramedian-thalamic and artery-of-Percheron detail is not taken from the course material)*” - verified present, no change needed.

## Uncertainties / notes

- Q182/186/187 stem/option mismatches vs staging are pre-existing documented corrections (printed typos “Homer’s”, “occulocephic”, “persistent”, run-on stem) recorded in each source field; I did not touch stem/options.
- Q186 now cites L12) hemi,parap&ataxia.txt, which genuinely names locked-in syndrome; the older draft tag claiming it was absent from the lecture set was wrong and was removed.
- Q178/Q187 are boxed; only prose outside the box was edited; markers intentionally absent.
- Recall entries (179/180/183/184/185) left at ~250-280 per the recall budget; heavier entries expanded only where tagged facts needed provenance.
