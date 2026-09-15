# Topic 09 draft A — refuter review of the Codex expansion (2026-09-15)

Opus refuter, independent of the builder, reviewed commit `1549a87` (Codex, OmniRoute gateway, opencode-zen/big-pickle) against the staging file, the fact-check and the lectures. Report reproduced as returned; nothing in the draft has been changed in response yet.

**FAIL (5 failures).** Frozen fields, boxes, marker, LF, parse and emoji all pass. Every failure is in explanation prose.

**Passed checks**
- Frozen fields: `stem`, `options`, `answer`, `source` and `id` identical between `1549a87^` and `1549a87`. Only the explanations of 178, 181, 182, 186 and 187 changed.
- Staging compare: 182, 186 and 187 differ from staging (Homer's, "eyes His", occulocephic, presistent, lowercase "patient"). These corrections were already in `1549a87^` and are recorded in `source`.
- Boxes, marker, file: Q178 and Q187 boxes byte-exact, no marker. 9 markers, all at the end, none in `source`. 11 entries parse, 0 `\r`, 0 emoji.
- Fixes 1, 2, 3 and 5 landed. Q181 no longer mentions Q179. Q187's doll's-eye content tagged separately from L8. Q182 says posterior communicating and Horner's, with the tag present. Q177 has its Percheron tag.
- Fix 4 only partly done: Q178's clause is tagged but still hangs off the L10 citation through "precisely because".
- Q186's L12 citation is valid: `L12) hemi,parap&ataxia.txt` lines 128–148 cover bilateral ventral pontine lesion, causes including central pontine myelinolysis, quadriplegia, corticobulbar involvement, sparing of the reticular formation and supranuclear oculomotor pathway.
- House style matches: `**` bold, `*(tag)*` and `>` box quotes are used in shipped 1xx entries too.

**Failures**
1. npqb-nr-182 (new text): "the same lecture gives the two muscles that act unopposed when CN III fails". L8 lines 147–176 only pair CN IV with superior oblique and CN VI with lateral rectus; "unopposed" is not there. Fix: cite L8 for the pairing only and tag the "unopposed" part.
2. npqb-nr-181: "A score of 13 (option c) sits at the top edge of the mild band". Wrong: 13 is the bottom of 13–15. Fix: say "lowest mild score"; optionally note some scales put 13 in moderate (9–13).
3. npqb-nr-177: "a diffuse metabolic or toxic insult is unusual in reaching all three at once" contradicts the next sentence (cortex and brainstem hit at once). Also "because the deficit does not reverse itself while waiting" sits under the L10 citation, and L10 lines 208–210 do not say it. Fix: rewrite the sentence; tag the clause.
4. Untagged outside knowledge (old text): 179 the "HIE and SAH can likewise culminate" paragraph; 180 the whole "Flat ECG" paragraph; 183 the paragraph explaining the three wrong options; 187 "some brainstem reflexes are typically still elicitable in deep coma" and "spontaneous spinal movements". Fix: tag each claim.
5. Budget missed: 179, 180, 181, 183, 184, 185 (251–283 words) are gap-fills — no lecture mentions GCS, brain death or pinpoint pupils (grepped all 24 lectures). Class is ~520 words; Codex filed them as "recall" and left them. Fix: expand them.

**Warnings**
- Q178 says the functional-versus-structural point three times: padding.
- Q182 ends Botulism with "surgical emergency this stem is pointing to"; the stem does not say that.
- Bare "Q179", "Q182", "Q183" in 180, 183 and 185 should be backticked ids.
- The file header still says locked-in syndrome is outside the lectures (L12 now cited).
- Lecture citations here end in `.txt`; shipped entries leave it off.
- All distractors are explained.

| id | words | marker | fixes |
|---|---|---|---|
| 177 | 540 | y | fix 5 ok; F3 |
| 178 | 530 | n (box) | fix 4 partial |
| 179 | 264 | y | F4, F5 |
| 180 | 253 | y | F4, F5 |
| 181 | 283 | y | fix 1 ok; F2, F5 |
| 182 | 511 | y | fix 3 ok; F1 |
| 183 | 251 | y | F4, F5 |
| 184 | 263 | y | F5 |
| 185 | 274 | y | F5 |
| 186 | 445 | y | L12 ok |
| 187 | 488 | n (box) | fix 2 ok; F4 |

Not performed: checking the printed boxes against the page image (outside the brief).
