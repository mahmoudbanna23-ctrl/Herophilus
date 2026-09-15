# Ophthalmology Endpoint — Section 9 Calibration, 2026-09-15

Section 9 ("Lens", PDF pages 639–717 of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`,
confirmed against `tools\bank-harness\sec-oph.js` entry 9: `pages: [639, 717]`, chapter `op-cat`)
was calibrated **text-only** from the OCR search index and per-page OCR text files
(`content\ophtho\qb-pages\ocr\ep\index.json` read once at start; `p0639.txt`–`p0719.txt` used for
the in-range analysis plus the section-10 boundary at p718/p719). Per the brief: no page was
rendered, no image was viewed, no `pdftoppm` was run, nothing under `Semester 8\` or `app\` was
touched, and no `progress/ophtho-endpoint-s09-calibration-*.md` existed before this one (checked at
start) — this is the first s09 note. Everything that needs eyes went into the "needs image check"
list below; absent vision, that is the intended output, not a gap.

## Range and divider pages

- p639: `kind:"notes"`, native 1 word `"Lens"`, `thin` — the clean chapter divider (matches section 4's shape).
- p640–662: `kind:"notes"` lecture prose, 23 pages. Read via OCR text: Lens Anatomy, Cataract
  (senile types, morphology, congenital/developmental), Phacolytic glaucoma, Indications for
  surgery, Surgical techniques, Pre-/postoperative care (pp.651–656), Aphakia, Pseudophakia,
  Ectopia Lentis, clinical mnemonics (Term/Thin/Broken… "Pseudo-lens"/"A = absent"). Prose spans
  p640 through p662; see classifier mis-tags for the `answered` false positives inside it.
- p663: `kind:"notes"`, native 1 word `"Questions"`, `thin` + `passes-differ` — the Questions
  divider page (second divider, exactly like every section so far).
- p664–717: MCQs, one per question, printed as adjacent pairs (unmarked then marked).
- p718 (outside the range): `kind:"notes"`, native 2 words `"Uveal Tract"` — the next chapter's
  clean divider, matching `sec-oph.js` entry 10 (`pages: [718, 787]`); p719 shows "The Uveal Tract
  (Uvea)" prose immediately after.

**Printed page number equals PDF page number on every page checked**: the folio is OCR'd on every
question page sampled (e.g. p664, p666, p671, p683, p693, p704, p706, p716 "664", "666", "671",
"683", "693", "704", "706", "716") and no OCR number contradicted the PDF index anywhere in
639–719. The folio was not OCR'd on some prose pages (p654 "S 54", p658 "ssg", p661 "1 ris"), so
those individual folios are not visually confirmed — noted in the needs-image list per the
established practice. No offset was found anywhere.

## Question count and how it was derived

**Section 9 holds 27 questions** (physical question-pairs). Derivation: 54 question-format pages
(664–717) ÷ 2 = 27 consecutive pairs, each OCR-ing as the same question printed twice (unmarked
then marked). The `kind` tabulation for 639–717 is {notes: 22, question: 27, answered: 30, other:
0}; the question/answered alternation from p664 to p717 is unbroken, and the closing test below
accounts for every page in the range. Boundary confirmation: p663 is the Questions divider (not a
question), and p642/p649/… are prose, so base+2n arithmetic derives the count, not a tag count.

## Page formula (holds here, tested on every pair)

**Question *n* of the physical run is unmarked on PDF page 662+2n and marked on PDF page
663+2n.** Q1 = 664/665, Q27 = 716/717. Q27's marked page (717) is not `sec-oph.js`'s declared
last page (the section ends at p717, and p718 is the next chapter's divider "Uveal Tract"), so the
formula does not land on the declared last page — the section still ends cleanly at p717 with no
trailing reprint.

This formula was derived independently and tested on **all 27 pairs**, not assumed from the
sections 3–4 pattern:

- Every one of the 27 consecutive pairs (664→665 … 716→717) shows the same stem printed twice with
  normalized-token similarity 0.94–0.98 (mean ≈ 0.97; Q5/Q6 at 0.94/0.95 are the lowest because
  the marked pages carry a longer explanation, same mechanism as earlier sections).
- In the reverse direction, every adjacent marked→next-unmarked pair scored ≤0.47 (computed but
  only listed when >0.55 — none was), so the pairing direction is unambiguous: no adjacent pair is
  reversed, no pair is missing, no pair is duplicated.
- Every pair page shows exactly 4 (or, for Q21/Q25, 5) option-letter lines; see option counts.

**Exceptions: none.** Every page 664–717 is accounted for as exactly one of the 27 pairs; no
staggered pair, no break, no page spanning more than its own unmarked/marked pair anywhere.

## Unassigned pages (within the declared range, not part of a question pair)

- p639: chapter divider "Lens" (1).
- p640–662: lecture prose, 23 pages.
- p663: "Questions" divider (1).
- Total unassigned = 25 pages; 79 − 54 = 25, the accounting closes exactly. Everything in
  639–717 is either one of these 25 or one of the 27 question pairs.

## Option counts per Q (OCR-derived; flagged ones marked)

**Every question page prints 4 options except Q21 and Q25, which print 5.** Both passes (native
and hires) agree on all four 5-option pages (704, 705, 712, 713), which OCR as five full letter
lines (`A–E` on 704/705, `a–e` on 712/713, identical on both pages of each pair). No other page
shows more than four option-letter lines in either pass. Per-question option counts (native lines,
strict `[a-eA-E][.)]` prefix):

- Q1–Q20, Q22–Q24, Q26–Q27: 4 options on both pages of every pair (native and hires).
- **Q21 (pp.704/705): 5 options (A–E).** **Q25 (pp.712/713): 5 options (a–e).**
- Flagged rows: p687 `options-differ` (native ABCD, hires ABD), p691 `options-differ` (native
  ABCD, hires ABD), p701 `options-differ` (native ABCD, hires ABD), p709 `options-differ` (native
  ABCD, hires ACD). In every case the native pass sees all four letters and the hires pass drops
  one (the `C` line on 687/691/701, the `B` line on 709). The `few-options` pages p651, p652, p656
  are prose false-positives (see classifier mis-tags) — they are not question pages.
- Options-differ pages are queued for image check per the brief's rule (OCR artifact vs actual
  printed letter); the native-pass agreement across both pages of each pair suggests OCR loss
  rather than a page defect, but that is not asserted.

## Option-letter case transitions

The option-letter case **switches exactly once**, at the printed-question boundary "9." → "10."
(pp.680/681 → 682/683), i.e. physical Q10's pair:

- **Q1–Q9 (printed "I."/"1."–"9.", pp.664–681): lowercase** — `a.`/`b.`/`c.`/`d.` with a period,
  on both pages of every pair (native + hires agree).
- **Q10–Q21 (printed "10."–"20.", pp.682–705): uppercase** — `A.`/`B.`/`C.`/`D.` (+ `E.` on Q21),
  on both pages of every pair. The transition is exactly at pp.682/683 ("1 O." OCR for "10.").
- **Q22–Q27 (printed "21."–"26.", pp.706–717): lowercase again** — `a)`/`b)`/`c)`/`d)` with a
  closing paren (Q22–Q23), `a.`/`b.`/… with a period (Q24–Q27; Q25 `a–e`). This is not verbatim
  identical to Q1–Q9's period style for Q22/Q23, so the section has three rendering styles —
  another instance of the s05 "third formatting" pattern; recorded as three regimes, not two.
- Wherever OCR gave a different letter case between native and hires on the same page, the page is
  in the needs-image list (native and hires actually agree on the case at every page checked, so
  this is stated as an OCR-level uniform finding; the printed visual case needs an image to
  confirm, per the brief).

## Explanation-box candidates per Q with word deltas

Word-count deltas (marked − unmarked, native) and the marked-page extra text distinguish three
regimes (all deltas are native-first; hires agrees within 1 word on every pair):

- **Q1–Q14 boxed**: marked pages carry a clear explanation paragraph the unmarked page lacks,
  with positive deltas 21–64: **Q1 31, Q2 28, Q3 27, Q4 23, Q5 23, Q6 21, Q7 23, Q8 22, Q9 25,
  Q10 60, Q11 34, Q12 64, Q13 34, Q14 42.** The extra text on each reads like the boxed
  explanations recorded in sections 4/8 (e.g. p665 "Snowflake cataract is specific to diabetes,
  resulting from sorbitol accumulation…"; p683 "Vossious ring refers to imprinting of iris
  pigment on the anterior capsule of the lens…" with Hypopyon/Hyphema definitions; p687 senile
  sclerosis / p685 B-scan text; p691 second-sight phenomenon text; p699/p701 are exceptions,
  see below). Deltas ≥21 for all of Q1–Q14 (Q11/Q13/Q14 have longer boxes; Q12's 64-word delta is
  the largest explanation in this section).
- **Q15–Q21 not boxed**: clean reprints with deltas **0, 0, −1, 0, 0, 0, 0** (Q17 −1 and Q19 0
  native / −3 hires are OCR drops, not content differences). No explanation text on any marked
  page in this run.
- **Q22–Q23 boxed (short)**: small explanation text on the marked page — Q22 17 (p707 "This is
  presbyopia due to loss of lens elasticity with age. Reading glasses correct the near vision
  difficulty."), Q23 18 (p709 "…detects central macular diseases like AMD, it helps localize
  macular dysfunction."). These return to the boxed shape in the middle of an otherwise-unboxed
  tail, exactly like s03's reappearing box pattern.
- **Q24–Q27 not boxed**: clean reprints, deltas **0, 0, 0, −1** (native); no extra text.

So the box run is Q1–Q14, a clean gap Q15–Q21, a short reprise Q22–Q23, then clean reprints
Q24–Q27. **A printed border/box is a visual property; all marked pages go on the needs-image
list**, and the deltas above are the OCR-strength evidence, not a visual assertion.

Two marked pages carry explanation text whose source (box vs body) OCR cannot settle:

- **p699 (Q18 marked)**: word count 32→51 (delta 19, hires 18) — the only Q15–Q20 marked page with
  a positive delta; OCR shows an extra line or two after the options on p699 that p698 lacks. The
  text reads like a short boxed explanation, but it is the single outlier inside an otherwise
  clean-reprint run.
- **p701 (Q19 marked)**: word delta 0 native / −3 hires (the negative hires is OCR letter-line loss, not extra text); native option letters complete, no explanation text detected. The hires “drops B” flag is the options-differ artifact. Actually Q19 marked (p700→p701) shows word delta 0 native but −3 hires, with
  native option letters complete. The hires "drops B" flag is the options-differ artifact; no
  explanation text detected.

These two (p699 and the Q19 pair) go in the needs-image list to decide box-vs-reprint.

## Figure candidates

Only **p659, p714, p715** contain the word "picture" in OCR: p659 is lecture prose
("…Clinical Picture: •Iridodonesis & phacodonesis…" — a phrase, not a figure caption), and
p714/p715 are the Q26 unmarked/marked pair whose stem says "…This clinical picture is suggestive
of:" — OCR cannot see whether a figure print exists beside that stem. So the only genuine figure
candidate is **Q26 (pp.714/715) if the stem's "picture" refers to an actual printed image** —
flagged for image check; OCR alone can neither confirm nor refute a figure. No "Figure/Fig."/
"image"/"see above" language appears anywhere else in 639–717.

## Classifier mis-tags

- **p651, p652, p656 are `kind:"answered"` but are lecture prose** (Preoperative Planning,
  Investigations, Postoperative Complications outlines). All three carry `few-options` and have
  zero quiz option-letter lines except p656's `a.`/`b.` (which are the prose outline's
  sub-headings "a. Serious (Rare)" / "b. Common (Less Serious)", not quiz options). p651's stray
  "A. General Considerations" and p652's "B. Investigations" and "(a)/(b)" lettered bullets are
  the same highlighted-lettered-outline mechanism that tripped the classifier in earlier
  sections' prose. **These are prose false-positives, not questions** — p651/p652/p656 sit inside
  the notes run 640–662, so the true question count is unaffected (27 pairs at 664+).
- **The `answered` boolean is true on 18 of the 24 prose pages** 639–663 (all of 640–645, 647–662
  except p646, p653/p654/… also true; p646 false, p639/p663 false). This is the same raw
  yellow-pixel false positive documented for sections 1–8; `kind` stays `notes` on all of them.
- **No question page is mis-tagged `notes`** and no page in range is tagged `other`. The closing
  test makes the accounting regardless of tags.

## Closing test (every page accounted for)

- p639 divider (1) + p640–662 prose (23) + p663 divider (1) + 27 pairs × 2 (54) = 79 pages =
  exactly the range 639–717 (79 pages). Nothing unassigned, nothing reused, no gap.
- Boundary confirmations: p638 (section 8, outside range) is section 8's last marked page (Q29),
  p639 = this section's divider, p718 = section 10 divider "Uveal Tract". The range starts and
  ends exactly as `sec-oph.js` declares.

## Anomalies / numbering note

- The **printed question labels run "1."/"I." through "26."** across 27 physical questions: p664
  prints "I." (uppercase-I glyph for "1", the same OCR coalescing seen at s05 p379 and s08 p682),
  pp.666–680 print "2."–"9.", pp.682/684 print "1 O." and "I l." (OCR's glyphs for "10." and
  "11."), pp.686–690 print "12."–"14.", **p692 prints "14." again (the "Which of the following"
  stem is the duplicate of the surgical-technique question — Q15 physical carries the label "14."
  a second time)**, then pp.694–716 print "15."–"26.". So labels 1–26 appear with 10/11
  OCR-garbled and one genuine label repeat ("14."), giving 26 labels for 27 questions. The
  duplicate-stem page pair (p692/p693) is otherwise a normal unmarked/marked pair, distinct from
  s04's Q2/Q4 near-duplicate in that here it is the sequential printed-numbering repeating, not
  two separate questions.
- **Q14 and Q18 share a stem-identical-looking opening "A 66-year-old male patient…"** (p690
  vs p698: "…complaining of recent progressive difficulty in seeing far objects (myopic shift)…"
  vs "…recent progressive…"), and **Q15 and Q16 share the "When lens capsule becomes intumescent/
  wrinkled…" stem** (p694/p696) — these are near-duplicate stems, flagged as a downstream-drafting
  note only; the page-pair structure is unaffected.

## Needs-image-check list (OCR cannot settle these)

- **All 27 marked pages (665–717, step 2): printed box/rule presence** — the delta evidence says
  boxed Q1–Q14 and Q22–Q23, not boxed Q15–Q21 and Q24–Q27, but a printed border needs an image.
- **Q18 pair (p698/p699) and Q19 pair (p700/p701)**: p699's positive delta (19) is the only
  mid-run outlier; decide box-vs-reprint visually. p701's `options-differ` "hires drops B" is
  likely OCR, but the printed B line should be confirmed.
- **5-option questions Q21 (pp.704/705) and Q25 (pp.712/713)**: OCR is unanimous on both pages of
  each pair; per the s04-Q18 rule, 5-option pages warrant a visual pass before keys are staged.
- **Options-differ pages p687, p691, p701, p709**: native sees all four letters, hires drops one;
  confirm the printed letter exists.
- **Q26 (pp.714/715)**: whether a real figure print sits beside the "clinical picture" stem.
- **Case boundaries**: pp.680/681 (last lowercase Q9) → 682/683 (first uppercase Q10) and
  pp.704/705 (last uppercase Q20/Q21) → 706/707 (first lowercase Q22, with `a)` punctuation);
  OCR is clean on all four pages, visual confirmation only.
- **Prose false-positives p651, p652, p656**: confirm these are prose outlines (they OCR as such)
  and contain no quiz question; p656's two `a.`/`b.` lines are the prose sub-headings.
- **Folio numbers**: prose pages whose OCR lost the trailing number (p654 "S 54", p658 "ssg",
  p661 "1 ris", and any other prose page where the last native token is prose, e.g. p644/p645…)
  — print-vs-index equality asserted only by absence of contradiction; confirm on an image pass.

## Unresolved

- Whether the Q18 marked page (p699) carries a box: it is the single positive-delta outlier in an
  otherwise clean-reprint run; OCR text shows extra content but cannot distinguish box from body.
- Whether Q26's "clinical picture" refers to a printed figure: needs image.
- Whether the five-option pages are truly printed as five options: OCR unanimous, image-confirm
  per the established rule.
- Nothing else. Question count 27, formula 662+2n / 663+2n, holds without exception on the OCR
  evidence; all flags, the case story, the numbering-repeat anomaly and the box story are reported
  above with their evidence level (OCR-derived; box presence and option count on flagged pages are
  visual properties queued for image check, not asserted).

## Byte-size and line-ending check

This file and the scratchpad report are LF-only; `tr -cd '\r' | wc -c` on this note must print 0.
