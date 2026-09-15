# Topic 09 draft A — re-check of the five-fix pass (2026-09-15)

Second Opus refuter, independent of both the original drafter (Codex, `1549a87`) and the
lean-drafter who applied the fixes (`1b3de45`). Every check below was re-run against the file on
disk, not taken from either agent's report. The working tree is clean for this path, so disk =
`1b3de45` = `b9c0197` HEAD.

**FAIL (2 failures).** Both fix-pass objectives F1-F5 landed. Both failures are clinical errors in
prose the fix pass did not touch; neither is new, but both are live in the current file.

## Passed checks (re-run, not inherited)

- **Frozen fields.** `git diff 1b3de45^ 1b3de45` touches no `id`, `stem`, `options`, `answer`,
  `chapter`, `bank` or `module` line — only the 11 explanations and the header comment. Compared
  entry by entry against `GG_NR_T09_STAGED`: 8 of 11 identical; the 3 divergences are the recorded
  typo repairs already accepted in the first review (182 option a `Homer's` to `Horner's`; 186 stem
  period inserted after "eyes"; 187 stem capitalised and `occulocephic` to `oculocephalic`, option b
  `presistent` to `persistent`). All three are stated in that entry's `source`. Every `answer` index
  matches the staged bare-letter key.
- **Boxes.** Q178 and Q187 quoted box text is byte-exact against the staging `box` field (string
  compare, not eye). Neither carries the marker.
- **Marker.** Exactly 9 markers, one per non-boxed entry, each the exact em-dash string, each at the
  very end of `explanation`, none in `source`, none duplicated.
- **File.** 11 entries, parses as an array under eval, 0 CR bytes, no emoji or dingbats, no markdown
  heading inside any string.
- **Source defects held.** Q186 three options preserved; no fourth invented, and the entry says so.
- **Citations re-grepped against the lectures themselves.**
  - `L8) Cranial nerves` lines 143-147 give CN III controlling eye movement, pupil constriction and
    "maintains an open eyelid"; lines 169-176 pair CN IV with the superior oblique and CN VI with
    the lateral rectus; line 240 gives the corneal reflex as "tests V sensory, VII motor"; line 526
    gives "Gag reflex [sensory IX, motor X]". All four uses in 179, 182 and 187 are supported.
  - `L8` has **no** hit for oculocephalic, doll's-eye, vestibulo-ocular or medial longitudinal
    fasciculus — so 187's separate tag on that content is correct, not decorative.
  - `L9) CNS infection` lines 265-270 give raised ICP causing temporal lobe herniation, coma and
    death, supporting the 177, 179 and 180 uses.
  - `L10) Stroke` lines 208-210 carry both quoted sentences verbatim (basilar occlusion in acute
    coma; "Do CT Angiography without any delay"), and line 196 carries "Disturbed level of
    consciousness up to coma".
  - `L12) hemi,parap&ataxia` lines 128-148 carry the whole locked-in block used by 186, including
    central pontine myelinolysis in the cause list and "NO damage to the Reticular Formation or
    supranuclear oculomotoor pathway".
  - Grepped all 24 lecture files for glasgow / brain death / brainstem death / vegetative: **zero
    hits.** The header's gap list and every GCS, brain-death and PVS tag are therefore justified.

## The five fixes, verified against the current text

- **F1 — landed.** `npqb-nr-182` now reads: "the same lecture also pairs the trochlear nerve (CN IV)
  with the superior oblique muscle and the abducens nerve (CN VI) with the lateral rectus muscle
  (`L8) Cranial nerves`) *(the pairing itself is L8's; that these two muscles act 'unopposed' once
  CN III fails, and what that does to eye position, is not taken from the course material)*." The
  pairing is genuinely in L8 (lines 169-176); the "unopposed" consequence is outside the citation
  and tagged. Correct.
- **F2 — landed.** "A score of 13 (option c) sits at the bottom edge of the mild band (13-15) — the
  lowest total still classed as mild", with a tagged note that some schemes run moderate to 9-13.
  The earlier "top edge" error is gone, and 13-as-lowest-mild now agrees with draft B's
  `npqb-nr-188`.
- **F3 — landed.** The contradiction is gone: "A diffuse metabolic or toxic insult reaches the first
  two of these at once rather than working through the third". The waiting clause now sits after the
  L10 citation closes and carries its own tag: "since the deficit does not reverse itself while the
  scan is awaited *(this specific rationale is not taken from the course material)*."
- **F4 — landed at all four places named in the first review.** 179's closing paragraph ends
  "*(not taken from the course material)*"; 180's Flat-ECG paragraph opens with "*(this whole
  paragraph is not taken from the course material)*"; 183's distractor paragraph carries the same
  paragraph-scoped tag; 187 tags both the deep-coma point and the spontaneous-spinal-movements
  detail separately. 178's clause is now a new sentence after the citation closes, tagged, no longer
  hanging off "precisely because".
- **F5 — landed, two entries still light.** Word counts (marker and markdown excluded): 179 587,
  181 483, 185 487, 183 443, 184 434, 180 420 — up from 251-283. 180 and 184 are 17-19% under the
  ~520 gap-fill class; see warnings.

## Failures

1. **`npqb-nr-181` — GCS motor score stated wrongly, and the arithmetic does not work.**
   Quote: "A typical moderate-band total of 10 might, for instance, be built from eyes opening to
   pain (2), confused speech (4) and localising to pain (4)". Localising to pain is **M5**, not 4;
   withdrawal is 4. The entry therefore (a) states a wrong GCS value, (b) contradicts
   `npqb-nr-184`'s own correct motor scale in the same file ("5 (localises to pain), 4 (withdraws
   from pain)") and draft B's `npqb-nr-195`, and (c) sums to 11, not the 10 it claims to illustrate.
   Fix: either "eyes opening to pain (2), confused speech (4) and withdrawing from pain (4)" or
   "eye opening to voice (3), confused speech (4), localising (5)" — whichever, make the three
   numbers add to 10 and keep localising at 5.
2. **`npqb-nr-183` — pontine pinpoint pupils described as non-reactive.**
   Quote: "a structural lesion can occasionally cause small pupils too (a pontine haemorrhage, for
   instance), but that picture is a separate, non-reactive one, not this stem's." The classical
   teaching is the opposite: pontine haemorrhage gives bilateral pinpoint pupils that **do** react to
   light, often needing a magnifier to see it. It also contradicts this file's own `npqb-nr-185`,
   which explains the same sign by sympathetic loss "while the parasympathetic
   (Edinger-Westphal-mediated) constrictor pathway is relatively preserved" — a preserved constrictor
   pathway is a reactive pupil. Fix: drop "non-reactive"; discriminate instead on bilaterality,
   pinpoint size and the accompanying brainstem picture (as `npqb-nr-185` already does), and say that
   reactivity may need magnification to detect.

## Warnings (non-blocking)

- **Budget still light at 180 (420 w) and 184 (434 w)**, with 183 at 443 — all three are pure
  gap-fills (no lecture covers GCS or brain death) whose class is ~520. Not a failure after a
  60-70% expansion, but they are the thinnest entries in the file.
- **Paragraph-scoped blanket tags in 180 and 183** ("this whole paragraph is not taken from the
  course material") are what the first review asked for and are far better than an entry-wide
  disclaimer, but they are still coarser than the per-claim tags used elsewhere in the same file.
- **`npqb-nr-177` "There are only three anatomical routes into coma"** is stated as a closed set and
  tagged, but the third route (compression) is a mechanism reaching the first two rather than a
  fourth anatomical site; the sentence reads as harder doctrine than it is.
- **`npqb-nr-186`** describes the speech deficit as loss of speech from corticobulbar involvement,
  which is right; `L12` itself prints "Aphasia" for what is anarthria. The divergence from the
  lecture's own word is silent. Consider one clause recording it, per the record-never-correct rule.
- Warnings 1-3 and 5 of the first review are resolved: the three-times repetition in 178 is gone, the
  botulism "surgical emergency" sentence is gone, bare `Q179`/`Q182`/`Q183` are now backticked ids,
  and the header no longer claims locked-in syndrome is outside the lectures. Body citations no
  longer carry `.txt`, matching shipped style; the header comment still does, harmlessly.

## Table

| id | words | marker | frozen | status |
|---|---|---|---|---|
| 177 | 567 | y | ok | F3 fixed, pass |
| 178 | 516 | n (box, byte-exact) | ok | F4 fixed, pass |
| 179 | 587 | y | ok | F4+F5 fixed, pass |
| 180 | 420 | y | ok | F4+F5 fixed; thin (warning) |
| 181 | 483 | y | ok | F2+F5 fixed; **FAIL 1** |
| 182 | 525 | y | opt a typo repair, recorded | F1 fixed, pass |
| 183 | 443 | y | ok | F4+F5 fixed; **FAIL 2** |
| 184 | 434 | y | ok | F5 fixed; thin (warning) |
| 185 | 487 | y | ok | F5 fixed, pass |
| 186 | 429 | y | stem period, recorded | pass |
| 187 | 507 | n (box, byte-exact) | stem/opt repairs, recorded | F4 fixed, pass |

Word counts exclude the marker sentence and markdown punctuation, so they run a little under the
first review's numbers for the same text; the method, not the file, differs.

## Not performed

- The printed page images were not opened; boxes, options and keys were checked against the staging
  file only. If staging mis-transcribed a box, this review would not catch it.
- No boot or splice check: these are draft files, not spliced, and `app/data/questions.neuro.js`
  contains no `npqb-nr-177`..`198` id yet (grepped), so no duplicate-id risk was introduced.
