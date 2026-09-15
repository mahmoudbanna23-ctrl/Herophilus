# Topic 09 draft B — first refuter review (2026-09-15)

Opus refuter, independent of the builder. Reviewed `gg-nr-t09.draft-B.js` (`npqb-nr-188` …
`npqb-nr-198`) as it stands at `b9c0197`; the path is clean in git, so disk equals HEAD. Every check
was re-run here — nothing is taken from the builder's report.

**FAIL (5 failures, 1 of them an adjudication for Claude rather than a defect).** File mechanics,
markers, boxes and budget all pass. The failures are one clinical inversion, one overstated
imaging claim, one silently reconciled source defect, one class of untagged outside knowledge, and
one stem rewrite that goes beyond a typo repair.

## Passed checks

- **File.** 11 entries, parses as an array under eval, 0 CR bytes, pure LF, no emoji or dingbats,
  no markdown heading inside any string, field set identical across all 11 entries
  (`id,bank,module,chapter,stem,options,answer,explanation,objective,source`). No `image` field.
- **Frozen fields.** `bank`, `module` and `chapter` correct on all 11; `chapter:'nr-coma'` exists in
  `app/data/modules.js` line 238. Every `answer` index matches the staged bare-letter key
  (188 A=0, 189 B=1, 190 C=2, 191 C=2, 192 A=0, 193 C=2, 194 D=3, 195 D=3, 196 B=1, 197 A=0,
  198 A=0). Options byte-identical to staging everywhere except 189 option b (`Persistant` to
  `Persistent`, recorded in `source`). Stems identical except 189, 190 and 195 — see failure 5 and
  the warnings.
- **Boxes.** Q189's quoted box is byte-exact against the staging `box` field, including the missing
  final period. Neither Q189 nor Q197 carries the marker.
- **Marker.** Exactly 9 markers, one per non-boxed entry, exact em-dash string, each at the very end
  of `explanation`, none in `source`, none duplicated.
- **Source defects held.** Q198 three options preserved and recorded; Q197 option b left truncated at
  "Obtain a repeat brain MRI with" and recorded in both `explanation` and `source`; Q196's
  left/right contradiction transcribed unresolved and recorded, which is the correct handling.
- **Budget.** 417-581 words (marker and markdown excluded), median ~497 — at class for gap-fill
  entries. Nothing is at recall depth.
- **Ids.** No `npqb-nr-188`..`198` exists in `app/data/questions.neuro.js` yet, so no duplicate-id
  risk.
- **Citations re-grepped in the lectures themselves.** Both cited decks carry every quoted string:
  `L10) Stroke` line 320 "CT brain: no acute pathology", line 365 "CT brain: unremarkable" with
  line 366 "CTA: basilar artery occlusion", line 328 "Aim of treatment: reperfusion as soon as
  possible (Time is brain!)", lines 331-332 the r-tPA 4.5-hour sentence verbatim, line 174
  mechanical thrombectomy. `L9) CNS infection` lines 71-72, 74, 154-157, 159-161, 164-167, 182-183
  carry, verbatim, the imaging-mandate rule, the post-herniation-risk LP sentence, the
  antibiotic-not-delayed-for-culture line, both LP contraindications, the CSF numbers quoted
  (1000-10,000/dl neutrophilic, protein above 45 mg/dl, sugar under 40 mg/dl or under 40% of blood
  sugar) and vancomycin + ceftriaxone with dexamethasone. The "only two things that would stop the
  LP" claim is accurate to the deck's own contraindication list.
- **All 24 lectures grepped for glasgow / brain death / brainstem death / vegetative: zero hits.**
  The header's "no coma lecture cached" premise is verified, not assumed.
- **`npqb-nr-188`, the entry singled out for scrutiny, is clinically sound.** GCS bands 13-15 /
  9-12 / 8-or-less, scored after resuscitation; uncal herniation as the uncus through the tentorial
  notch compressing CN III and the midbrain; brain-compression signs as falling conscious level,
  widening pulse pressure, bradycardia and focal deficits; lucid interval as the extradural
  haematoma history; 13 as the lowest mild score. All correct, and 13-as-lowest-mild agrees with
  draft A's corrected `npqb-nr-181`. No error found in the expansion.

## Failures

1. **`npqb-nr-193` — the pontine respiratory centres are inverted, contradicting the sentence before
   it.** Quote: "A lesion damaging the apneustic centre or interrupting the pathway between the two
   pontine centres — while sparing the medullary respiratory centres below it ... — removes the
   normal 'off-switch' for inspiration". The preceding sentence correctly states that "the
   pneumotaxic centre normally sends an inhibitory signal that terminates inspiration". The
   off-switch is therefore the **pneumotaxic** centre; damaging the **apneustic** centre would abolish
   the inspiratory drive, not prolong it. Apneusis is classically produced by loss of pneumotaxic
   inhibition (upper pons) leaving the apneustic centre unopposed, or by a mid-to-lower pontine
   lesion. Fix: "A lesion damaging the pneumotaxic centre or the pathway between the two pontine
   centres — leaving the apneustic centre unopposed — removes the normal off-switch". The
   clinical localisation stated elsewhere in the entry (lower/mid pons, infarct) is right and needs
   no change.
2. **`npqb-nr-196` — a normal CT is said to rule out haemorrhage, in a stem that opens with a sudden
   headache.** Quote: "A normal CT in an acute stroke picture therefore rules out haemorrhage — the
   one thing that must be excluded before treatment — and does not rule out ischaemia." Non-contrast
   CT is near-perfect for intraparenchymal blood in the first hours, but its sensitivity for
   subarachnoid haemorrhage falls with time and a CT-negative SAH is excluded by LP or CTA, not by
   the CT alone. This stem specifically says "following a sudden headache", the classic SAH stem, and
   the explanation never mentions SAH. Fix: qualify to "rules out intracerebral haemorrhage", and add
   one clause noting that a thunderclap headache with a normal CT still needs SAH excluded before
   thrombolysis — the bank's key (start the protocol) is unaffected.
3. **`npqb-nr-197` — the flowchart's printed "ECG" is silently read as EEG.** The transcribed chart
   in this same entry ends "branch 'Normal' -> ECG", and the prose then says "an EEG is the step the
   flowchart's own logic leads to". Whether the source printed ECG in error or meant it, the
   discrepancy is resolved in the reader's favour without being recorded, which the project rule
   forbids (contradictions are recorded, never corrected). Fix: one sentence stating that the chart's
   terminal box prints "ECG" while the keyed option is an EEG, recorded as printed and not resolved.
   The key (option a) is unaffected.
4. **Untagged outside knowledge, worst in 196, plus blanket tags standing in for per-claim tags.**
   `npqb-nr-196` carries **no** tag at all, yet "Non-contrast CT is highly sensitive for haemorrhage
   but can be normal in the first hours of an ischaemic stroke", the MRI availability and agitation
   argument, and nonconvulsive status epilepticus as a coma differential are all outside `L10`
   (grepped: `L10) Stroke` has zero hits for EEG, nonconvulsive, hypodens or sensitiv). Separately,
   `npqb-nr-189` carries one entry-wide disclaimer ("The wider comparison below is not taken from the
   course material") covering the PVS one-month/twelve-month/three-month timings, the brainstem-reflex
   list and the minimally conscious state; `npqb-nr-188`'s whole "Why the others are wrong" paragraph
   (herniation, compression signs, lucid interval) sits outside its opening tag, which is scoped to
   "This classification"; `npqb-nr-193`'s rostrocaudal breathing ladder likewise sits under an opening
   tag scoped to the apneustic localisation. Fix: tag the specific claims in 196, and split the
   opening blanket tags in 188, 189 and 193 so each outside claim carries its own, as draft A does
   (4-8 tags per entry against draft B's 0-4).
5. **`npqb-nr-189` — the stem is rewritten, not repaired; needs Claude's adjudication before splice.**
   Staged: "He does not respond to any verbal stimulus to following best describes the current state
   any verbal is. Which of the following best describes the current state?" Drafted: "He does not
   respond to any verbal stimulus. Which of the following best describes the current state?" The
   staging header records this stem as "garbled/self-duplicating as printed ... staged exactly as
   transcribed, not resolved". The draft resolves it, states so plainly, and quotes the printed form
   in full in `source` — which is honest and arguably within the repair-and-record rule. But it is a
   frozen field changed by more than a spelling, and the judgement of what the printed page means is
   Claude's under the delegation rule, not a drafter's. Escalated, not decided here. Fix: either
   Claude ratifies the repair, or the stem reverts to the staged text with the reading kept in
   `explanation`.

## Warnings (non-blocking)

- **`npqb-nr-198` quotes `L9` selectively.** The entry argues the deck does not require a CT here,
  but the same deck says at lines 62-64 that "an imaging study with either a CT head scan or
  preferably MRI brain scan with contrast is preferably done prior to the spinal tap" — a general
  preference sitting alongside the focal-signs rule the entry quotes. The bank's key (urgent LP) is
  unaffected and the quoted lines are accurate, but the deck's own tension should be recorded rather
  than left out.
- **`npqb-nr-197` box is not byte-exact** against the staging `box` field: the draft re-lays the
  chart as an indented block and moves the transcriber's meta-notes ("Toximetabolic printed as one
  word", "no caption or prose accompanies the chart") into the lead-in and `source`. Every box,
  branch and arrow is present in the same reading order and nothing is lost, and the staging field is
  itself a description rather than printed prose — so this reads as acceptable reformatting, not a
  divergence, but it is not the byte-exact quote the boxed rule asks for.
- **Stem normalisations in 190 and 195** ("followings describe" to "following describes";
  "simulations" to "stimulation" plus an inserted comma) are recorded in `source` and are the same
  class of repair draft A made in 186/187. Consistent with the file pair; noted only because they are
  frozen-field changes.
- **`.txt` in two citations.** 196 and 198 open with "`L10) Stroke.txt`" and "`L9) CNS infection.txt`"
  and then drop the extension later in the same entry. Shipped `questions.neuro.js` never carries
  `.txt`. Cosmetic, but inconsistent within the entry.
- **`npqb-nr-194` interprets the figure.** Staging deliberately described the waveform without
  interpreting it; the draft reads it as Cheyne-Stokes. The reading follows from the bank's key
  (metabolic encephalopathy) and the entry does argue Biot's breathing out on cycle-length grounds, so
  it is defensible — but it rests on the key, not on an independent look at the page, and no image
  asset exists for the figure.
- **`npqb-nr-192`** attributes the drive in metabolic acidosis to "peripheral ... and central
  chemoreceptors"; the peripheral chemoreceptors carry this response, since H+ crosses the
  blood-brain barrier poorly. Imprecise rather than wrong.
- **`npqb-nr-191`** says the thalamus "matters only as part of the ARAS pathway" a paragraph after
  using bilateral paramedian thalamic infarction as a standalone cause of coma. Both are true; read
  together they are momentarily confusing.

## Table

| id | words | marker | box | frozen | status |
|---|---|---|---|---|---|
| 188 | 497 | y | - | ok | tag scope (F4); clinically verified sound |
| 189 | 581 | n | byte-exact | **stem rewritten**, opt b typo | **FAIL 5**, tag scope (F4) |
| 190 | 448 | y | - | stem grammar, recorded | pass |
| 191 | 524 | y | - | ok | pass (warning) |
| 192 | 441 | y | - | ok | pass (warning) |
| 193 | 456 | y | - | ok | **FAIL 1**, tag scope (F4) |
| 194 | 501 | y | - | ok | pass (warning) |
| 195 | 417 | y | - | stem typo, recorded | pass; thinnest entry |
| 196 | 482 | y | - | ok | **FAIL 2**, **FAIL 4** (no tags at all) |
| 197 | 499 | n | reformatted | ok | **FAIL 3** (warning on box) |
| 198 | 492 | y | - | ok | pass (warning) |

Word counts exclude the marker sentence and markdown punctuation.

## Not performed

- The printed page images were not opened. Boxes, stems, options and keys were checked against
  `gg-nr-t09.array.js` only; a staging mis-transcription would pass this review unseen. The
  pixel-level verdicts cited for the Q197 and Q198 defects were taken from the staging header, not
  re-run.
- No boot, validator or splice run: these are unspliced draft files.
- The bank's own answer-page prose for keys 190-196 and 198 was not re-read; the drafts state no box
  is printed for them and the staging header agrees, but that was not independently confirmed here.
