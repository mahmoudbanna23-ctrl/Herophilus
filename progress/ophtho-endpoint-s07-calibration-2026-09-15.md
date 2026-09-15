# Ophthalmology Endpoint - Section 7 Calibration, 2026-09-15

Section 7 ("Sclera", PDF pages 523-559 of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`, confirmed against `tools\bank-harness\sec-oph.js` entry 7: `7: { prefix: 'ophep-sclera-', file: 'oph-ep-p1-s07-sclera.array.js', svar: 'OPHEP_S07_STAGED', draft: 'oph-ep-p1-s07-sclera.draft', chapter: 'op-sclera', pages: [523, 559], ans: null }`) was calibrated TEXT-ONLY from the OCR index: `content/ophtho/qb-pages/ocr/ep/index.json` (read once at start, per the brief) plus the 37 `pNNNN.txt` files covering PDF pages 523-559. No page was rendered, no pdftoppm run, no image opened or viewed, and no key is stated anywhere - per the brief and AGENTS.md. Every structural claim below is OCR-derived; anything that only an image can settle is listed under "Needs-Image-Check" and is not asserted as fact.

Prior calibration notes checked before writing: no `progress/ophtho-endpoint-s07-calibration-*.md` existed, so there is no partial predecessor to report. This note was written incrementally: created early, then completed as each check below ran.

## OCR Route (Text-Only)

`index.json` holds 1385 rows; pages 523-559 occupy 37 of them (523..559 inclusive, continuous - checked). `kind` tabulation for the range: {notes: 11, question: 13, answered: 13}. All 37 `p0523.txt`..`p0559.txt` files exist and were read (both the native and the "--- 150dpi ---" pass where present). No carriage-return or index-merge checks were run (out of scope for a calibration note; no index writes were made).

## Section Structure

| PDF pages | Content | Evidence |
|---|---|---|
| 523 | Chapter divider: "Sclera" (1 word) | p0523.txt |
| 524-532 | Lecture prose: Anatomy (524), Blue Sclera (525), Episcleritis (526-527), Scleritis (528-529), Phenylephrine test table (530), "Notes" summaries (531-532) | p0524..p0532.txt |
| 533 | Divider page: "Questions" (1 word) | p0533.txt |
| 534-559 | 13 MCQs, printed as adjacent pairs (unmarked then marked) | see Question Arithmetic below |

In the native OCR pass, a standalone numeric line matching the PDF page index appears on 33 of the 37 pages (523-559). *Four pages lack it in the native text*: p523 (chapter divider ''Sclera''), p533 (divider ''Questions''), p537 (marked Q2 - its box paragraph ends the text) and p538 (unmarked Q3 - OCR ends at option D); the hires pass restores the folio on p523, p537 and p538, leaving only p533 without a folio line in either pass. The formula and accounting do not depend on the folio line; the sequence 534/535..558/559 is read from the file names and the index rows, which are continuous. Which physical corner the folio prints in, and what p533/p537/p538 actually print, are image-only and are listed under Needs-Image-Check.

## Question Arithmetic

**Question n is unmarked on PDF page 532+2n and marked on PDF page 533+2n.** Q1 = pages 534/535; Q13 = pages 558/559. Q13's marked page (559) is exactly `sec-oph.js`'s declared last page for this section. **Section 7 holds 13 questions**, ending cleanly with no trailing reprint (section 8 opens at 560, outside this job).

Formula tested on **all 13 pairs** (every pair, both pages, from OCR text - no sample): Q1 534/535, Q2 536/537, Q3 538/539, Q4 540/541, Q5 542/543, Q6 544/545, Q7 546/547, Q8 548/549, Q9 550/551, Q10 552/553, Q11 554/555, Q12 556/557, Q13 558/559. **No exceptions.** Each pair carries the same printed question number at the top in the OCR (1-13; OCR artifacts "I O." for 10 and "I l." for 11).

## Option Counts per Q (OCR-derived)

Every one of the 13 questions shows four options on both pages in the native OCR pass (a-d or A-D). No five-option question found - this section has no equivalent of s04's Q18. Two marked pages carry the `options-differ` flag because the 150dpi pass dropped the C line: **p541 (Q4 marked, hires [A,B,D])** and **p555 (Q11 marked, hires [A,B,D])**. Native OCR on both has all four letters, so the true count is very likely 4, but per the flags these two pages are queued for image check rather than asserted.

## Option-Letter Case (OCR as printed)

OCR text preserves the printed case; the index `options` field normalises to uppercase and cannot settle case, so the transitions below are recorded from the raw text only:

- Q1-Q2 lowercase (a-d): pp.534/535, 536/537
- Q3-Q11 uppercase (A-D): pp.538/539 through 554/555
- Q12 lowercase (a-d): pp.556/557
- Q13 uppercase (A-D): pp.558/559

**Three case transitions, recorded with their Q boundary: lower->upper at Q2/Q3 (pp.537/538); upper->lower at Q11/Q12 (pp.555/556); lower->upper at Q12/Q13 (pp.557/558).** Printed-case confirmation is image-only and is on the needs-image-check list.

## Explanation Boxes

Marked-page minus unmarked-page **native** word counts from `index.json` (`words.native`), per Q:

| Q | unmarked/marked | words | delta |
|---|---|---|---|
| 1 | 534/535 | 31 -> 52 | +21 |
| 2 | 536/537 | 23 -> 48 | +25 |
| 3 | 538/539 | 21 -> 65 | +44 |
| 4 | 540/541 | 25 -> 68 | +43 |
| 5 | 542/543 | 96 -> 96 | 0 |
| 6 | 544/545 | 48 -> 49 | +1 |
| 7 | 546/547 | 29 -> 29 | 0 |
| 8 | 548/549 | 43 -> 43 | 0 |
| 9 | 550/551 | 44 -> 44 | 0 |
| 10 | 552/553 | 21 -> 21 | 0 |
| 11 | 554/555 | 45 -> 46 | +1 |
| 12 | 556/557 | 38 -> 38 | 0 |
| 13 | 558/559 | 38 -> 38 | 0 |

**Box candidates: Q1-Q4**, whose marked pages (535, 537, 539, 541) also carry an extra explanation paragraph in the OCR text (p535: "Phenylephrine 10% causes blanching..."; p537: "In episcleritis, the superficial vessels blanch..."; p539: "Necrotizing anterior scleritis is the most severe form of scleritis..."; p541: "The sclera is whitish in colour but can attain a bluish discolouration..."). **Q5-Q13 show 0-1 word deltas and no explanation paragraph - no box evidence, a single clean cutoff at Q4/Q5** (matching s04's single-clean-cutoff shape, though s04's boxed run was Q1-Q6). Box presence itself is a visual property; all 13 marked pages go on the needs-image-check list.

## Figures

Grep of all 37 OCR text files for figure-referencing language ("figure", "shown", "arrow", "picture", "photograph", "diagram", "image", "as seen") returned exactly one hit: p527 "Clinical Picture" - a lecture-section heading ("Episcleritis - Clinical Picture"), not an image reference. OCR cannot see an embedded image, so figure presence is unresolved for every page in the section and is on the needs-image-check list; there is no text-based evidence of any figure.

## Classifier

`kind` matched the true structure on every one of the 37 pages: 11 `notes` (523-533, all prose/divider), 13 `question` (unmarked 534..558), 13 `answered` (marked 535..559). **No `kind` mis-tag this section** (unlike s04's pp.279/280, and unlike any prose tagged `question`). The separate boolean `answered` (raw yellow-pixel threshold) is `true` on 6 pages inside the notes range: **p524, p526, p527, p528, p529, p530** - the same false-positive mechanism s04 recorded in its lecture range; `kind` stays `notes` for all six, so the question/answered counts are unaffected. `passes-differ` on p523 (chapter divider) and `thin` on p523, p530, p533, p540 are consistent with what those pages are (divider/table/divider/Q4-unmarked); no few-options flag anywhere in this section.

## Anomalies and OCR Artifacts (text-level, none structural)

- **"10%" vs "100/0" on marked pages**: Q1 option c reads "Phenylephrine 10% drops" on p534 (unmarked) but "Phenylephrine 100/0 drops" on p535 (marked); Q2 option a reads "10%" on p536 but "100/0" on p537; Q11 option C reads "10%" on p554 but "100/0" on p555. Same pattern on the marked page each time - either the highlight makes OCR read "%" as "0/", or the marked printing itself differs. Unresolved; image-only.
- **Q13 stem alike-word**: p558 (unmarked) reads "All of the following are **hue** regarding episcleritis except?" while p559 (marked) reads "**true**". One of the two is an OCR misread; which one the source prints is image-only. Same in the 150dpi pass.
- **OCR spacing/letter noise**: p542 "eye pam" vs p543 "eye pain"; p544 "history ofrecurrent" vs p545 "history of recurrent"; p541/p555 C-line drops (above); p558 "hue" (above). All are OCR-level; none changes a stem's options or the pair structure.
- No structural anomaly: no out-of-sequence page, no question spanning more than its pair, no triple reprint, clean ending at 559.

## Unassigned Pages

All 37 pages are accounted for: 523 divider, 524-532 prose (10 pages), 533 divider, 534-559 the 13 unmarked/marked pairs (26 pages) = 37. The closing test (every page accounted for, not a tag count) passes.

## Needs-Image-Check List

- Box presence on every marked page, focused on the candidates Q1-Q4: pp.535, 537, 539, 541 (boxed per OCR evidence) and the unboxed per delta evidence pp.543, 545, 547, 549, 551, 553, 555, 557, 559.
- Option count on the two flagged marked pages p541 (Q4, hires lost C) and p555 (Q11, hires lost C).
- Printed option-letter case at the three transitions: pp.537/538 (Q2/Q3), pp.555/556 (Q11/Q12), pp.557/558 (Q12/Q13).
- "10%" vs "100/0" readings: matched pairs pp.534/535, 536/537, 554/555.
- Q13 stem word "hue" vs "true": pp.558/559.
- Figure presence across all 37 in-range pages (OCR cannot see images; no text evidence of any).
- Folio position/legibility: the native OCR text holds no folio line on p523, p533, p537, p538 (hires restores 523/537/538, but p533 has none in either pass); confirm the printed page numbers match the PDF index on all 37 pages (OCR names them but cannot say where they print or verify p533).

## What Was Not Checked

- No keys, no keypos pass, no staging - calibration only, per the brief.
- Nothing was rendered; every item that requires a visual check is in the list directly above and is reported as unchecked rather than asserted.
- The section-8 boundary page 560 was not read (outside this job's range; only the fact that 559 is exactly the declared last page was checked).
- Source-printing typos were not deliberately searched for beyond the OCR artifacts above.

## Byte Size and Line-Ending Check

To be run after this file is written: count of CR characters should be 0 (this file was written with LF line endings).