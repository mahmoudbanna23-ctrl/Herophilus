# Ophthalmology Endpoint — Section 12 Calibration, 2026-09-15

Section 12 ("Vitreous", PDF pages 850-879 of `Semester 8\Opthalmo\Questions\Opthalmology
endpoint.pdf`, confirmed against `tools\bank-harness\sec-oph.js` entry 12: `pages: [850, 879]`) was
calibrated TEXT-ONLY from the OCR search index and the `pNNNN.txt` files — no page was rendered and
no image was viewed (the model has no vision; render attempts are refused by the gateway).

## OCR Route and Input State

`content\ophtho\qb-pages\ocr\ep\index.json` holds 1385 rows; 30 rows fall in range 850-879
(p0850.txt–p0879.txt, zero-padded 4-digit filenames), all present on disk. The index was read once,
at start. Nothing in `content\ophtho\qb-pages\ocr\ep\` was modified.

## Section Structure

| PDF pages | Content | Confirmed from OCR |
|---|---|---|
| 850 | Chapter divider: "Vitreous" (1 word, `thin`) | p850.txt |
| 851-856 | Lecture prose, 6 pages (29-96 OCR words each) | pp.851-856 |
| 857 | Divider page: "Questions" (1 word, `thin`) | p857.txt |
| 858-879 | MCQs, one per question, printed as adjacent pairs (unmarked then marked) | see arithmetic below |
| 880 | Section-13 divider: "Retina" (outside range, confirms clean ending) | p880.txt |

## Question Arithmetic

**Question *n* is unmarked on PDF page 856+2n and marked on PDF page 857+2n** (base = divider page
857 minus 1). Q1 is pages 858/859; Q11 is pages 878/879. Q11's marked page (879) is exactly
`sec-oph.js`'s declared last page for this section. **Section 12 holds 11 questions**, ending
cleanly at p.879; p.880 is a genuinely different chapter's divider ("Retina").

Confirmed pairs (both pages read): Q1 858/859, Q2 860/861, Q3 862/863, Q4 864/865, Q5 866/867, Q6
868/869, Q7 870/871, Q8 872/873, Q9 874/875, Q10 876/877, Q11 878/879. All 11 pairs were read in
full on both pages. In the OCR index every odd question page is `question` and every even page
`answered`, with a single mis-tag exception (see Classifier Mis-tags). Every pair's text is a
near-identical reprint: stem-similarity (word-bag match, 0-1) is 1.000 on 7 pairs (Q5-Q8, Q10,
Q11; also Q9 at 0.962) and 0.468-0.681 on the 4 pairs whose marked page adds an explanation box
(Q1-Q4) — no pair fails the reprint test.

## Option Count per Q (OCR-derived)

- Q1 pp.858/859: 4 options (a-d). **Flagged: marked page mis-read 3 options** - native and 150dpi
  both failed to pick up the "c. Ultrasonography is important" line (150dpi shows `c,` with a
  comma); the full 4-option text is present on both pages. Needs an image check.
- Q2 pp.860/861: 4 options (a-d), both pages.
- Q3 pp.862/863: 4 options (a-d), both pages.
- Q4 pp.864/865: 4 options (A-D), both pages.
- Q5 pp.866/867: 4 options (A-D), both pages.
- Q6 pp.868/869: 4 options (A-D), both pages.
- Q7 pp.870/871: 4 options (A-D), both pages.
- Q8 pp.872/873: 4 options (A-D), both pages.
- Q9 pp.874/875: **5 options (A-E)**, both pages — the only 5-option question.
- Q10 pp.876/877: 4 options (A-D), both pages.
- Q11 pp.878/879: **5 options (A-E)**, both pages.

## Option-Letter Case (OCR-derived, per pair)

- Q1-Q3 (pp.858/859-862/863): lowercase a-d.
- Q4 (pp.864/865): uppercase A-D. **OCR case transition between Q3 and Q4.**
- Q5-Q11 (pp.866/867-878/879): uppercase A-E/A-D.

The "case" here is the OCR read of the letter shape; OCR does not reliably distinguish print case,
so every transition is listed in Needs Image Check. The index `options` field is case-normalised to
uppercase and was NOT used for case.

## Explanation Boxes (OCR word-delta candidates)

Marked-page word-count delta over its own unmarked page, from the OCR index (native pass):

- Q1 858->859: 31->46, +15 words — box ("In total vitreous hemorrhage, the fundus view is
  obscured, so B-scan ultrasonography helps detect underlying retinal detachment or tumors.")
- Q2 860->861: 23->47, +24 words — box ("High myopia increases the risk of vitreous hemorrhage…")
- Q3 862->863: 52->75, +23 words — box ("Flashes, floaters, and absent red reflex suggest retinal
  detachment or vitreous hemorrhage…")
- Q4 864->865: 54->100, +46 words — box ("This case is a case of PVD. Complications of PVD may
  be…"), the largest delta
- Q5-Q8, Q10, Q11: 0-word delta on every pair (868->869, 870->871, 876->877, 878->879: 0; 872->873:
  +1; 866->867: -1) — no box
- Q9 874->875: 54->53, -1 word but similarity 0.962 — the marked page reprints the stem plus all 5
  options; no box

Box status above is an inference from OCR word deltas plus the marked-page text actually containing
an explanation paragraph, not a visual check — listed in Needs Image Check.

## Figure Candidates

**No figure-referencing text** ("figure", "shown", "arrow", "picture", "photograph", "diagram",
"image", "as seen") was found in any of the 30 in-range OCR `.txt` files. OCR text cannot see an
embedded image, so any figure call is in Needs Image Check; the 11 marked pages were read in full
and none references an image.

## Classifier Mis-tags

- **p876 (`kind:"question"`)** is the only question-zone mis-tag: it is TRUE Q10 unmarked (no
  explanation text), but the OCR index tagged it `question` while its true marked twin
  **p877 is also `question`** — the marked page was missed (no yellow detected). The pair is
  nevertheless complete in the OCR text; only the tag is wrong. Found by the closing test "every
  page accounted for" (11 stems, 11 marked pages), never by a tag count.
- **pp.851-856 (`kind:"notes"`, `answered:true`** in the raw `answered` field) are lecture prose —
  the same yellow false-positive pattern sections 1/3/4 saw inside lecture ranges; `kind:"notes"`
  is correct there, so it does not corrupt the question count.
- p850 and p857 (`thin`, 1 word) are the two clean dividers, correctly `notes`.
- No real question page was tagged `notes`; no prose page was tagged `question` or `answered` in
  `kind`.

## Unresolved / Needs Image Check

- Option-count check on Q1 p859 (convincing OCR evidence of 4 options, but 3 were indexed —
  `few-options` flag): confirm the "c. Ultrasonography is important" line is really printed.
- Option-letter case transitions: Q3->Q4 (lower->upper), and the continuity of upper case
  Q4->Q11; also lower case Q1-Q3. OCR cannot settle print case.
- Explanation box presence on Q1-Q4 (word deltas +15/+24/+23/+46 and box text present in OCR) and
  absence on Q5-Q11 (0-1 word deltas).
- Figure presence: no image-referencing text anywhere in range, but OCR cannot see a figure —
  needs a visual pass on the question pages (especially the 22 question pages).
- Whether the marked page of Q9 (p875) or Q4 (p865) has a printed folio/plate number or artifact
  ("g 74" / "gsg" tails) is only an OCR artifact, not a layout claim.
- Whether pp.851-856 held highlighted (yellow) text on every page (consistent `yellow: 3488`),
  and pp.850/857 are bare dividers — visual confirmation pending.

## What Was Not Checked

- No key extraction (keypos or visual): out of scope for calibration; no key is asserted anywhere.
- No medical content review: calibration only, per the brief.
- The `answered` yellow-boolean false positives in the notes range rest on the index, not a
  render.
