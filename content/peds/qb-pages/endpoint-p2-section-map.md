# Pediatrics endpoint PART 2 — section map and index measurement (2026-09-04)

Source: `Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf` — **1,993 pages, 272 MB**
(`pdfinfo`, 2026-09-04). Page 1 titles it **"Pediatrics Paper 2 AlexMed Endpoints"**.

Search index: `content\peds\qb-pages\ocr\ep2\` — 1,993 `pNNNN.txt` + `index.json`, built
2026-09-04 by `tools\ep-index\run-all.ps1` with **no script edited** (every tool in that folder
takes the PDF and paths as arguments). Extract 149 s, two OCR passes 113 s each.

⚠️ **OCR is a SEARCH INDEX, never a clinical or transcription source.** Every numeral, exponent,
unit, dose and key letter comes off the page image.

## The calibration was re-verified, not assumed

`index.py` hardcodes `YELLOW_MIN = 750`, calibrated on part 1 section 1. Re-measured on part 2
pp.1-20 before the full run: unanswered p.18 = **512**, answered p.19 = **3,200**, notes slides
1,376-3,504. The threshold separates them cleanly. **Unchanged.**

`p.1993` is the only page not holding exactly one embedded JPEG — it draws 0 images and scores 0
yellow. It is the blank back cover. Nothing else rasterised; 1,992 pages were copied out natively.

## The section map — from the book's own contents page (pp.2-3), then verified

The contents page prints **PDF page ranges, not question numbers**. Verified three ways: p.5 is the
"Normal Development" title slide, every page 5-1992 falls inside exactly one range (only pp.1-4 and
the blank p.1993 sit outside), and each range's `answered` count matches its `question` count.

| § | Section | Pages | np | answered | question | notes | Chapter(s) in `modules.js` |
|---|---|---|---|---|---|---|---|
| 1 | Normal Development | 5-75 | 71 | 28 | 28 | 15 | `normal-dev` |
| 2 | Developmental problems | 76-154 | 79 | 30 | 29 | 20 | `dev-problems` `dev-nd` |
| 3 | Genetics | 155-244 | 90 | 42 | 38 | 10 | `genetics` |
| 4 | Hematological Disorders | 245-451 | 207 | 95 | 89 | 23 | `haematology` `haem-bleeding` |
| 5 | Respiratory disorders | 452-606 | 155 | 65 | 65 | 25 | `respiratory` `resp-pneumonia` `resp-bronch` |
| 6 | Cardiac disorders | 607-792 | 186 | 85 | 81 | 20 | `cardiac` `cardiac-cyan` `cardiac-acq` |
| 7 | Kidney & Urinary Tract Disorders | 793-929 | 137 | 55 | 55 | 27 | `renal` `renal-uti` `renal-cakut` |
| 8 | Neurological disorders | 930-1078 | 149 | 60 | 60 | 29 | `neurological` `neuro-stroke` `neuro-nm` `neuro-cp` |
| 9 | Diabetes & Endocrinology | 1079-1145 | 67 | 27 | 26 | 14 | `endocrine` `endo-dka` `endo-thyroid` |
| 10 | Liver disorders | 1146-1210 | 65 | 20 | 20 | 25 | `liver` `liver-hep` |
| 11 | Malignant diseases | 1211-1269 | 59 | 23 | 23 | 13 | `malignant` `malignant-solid` |
| 12 | Model Final Exam 1 | 1270-1431 | 162 | 80 | 80 | 2 | (mixed) |
| 13 | Model Final Exam 2 | 1432-1594 | 163 | 80 | 80 | 3 | (mixed) |
| 14 | Model Final Exam 3 | 1595-1756 | 162 | 80 | 80 | 2 | (mixed) |
| 15 | Model Final Exam 4 | 1757-1921 | 165 | 80 | 80 | 5 | (mixed) |
| 16 | Recently modified Questions | 1922-1940 | 19 | 18 | 0 | 1 | (mixed) |
| 17 | Recently Added Questions | 1941-1949 | 9 | 8 | 0 | 1 | (mixed) |
| 18 | Exam Night Review | 1950-1992 | 43 | 2 | 0 | 41 | — **no questions** |
| | **TOTAL** | | **1,993** | **878** | **834** | **281** | |

**⚠️ No new chapter is needed.** Every section maps onto a chapter that already exists in
`modules.js`. `modules.js` is out of this stream's scope and must stay untouched.

## `answered` OVER-COUNTS. The corrected question estimate is ~860, not 878.

`kind == "answered"` means "yellow present AND at least one option letter read". A summary slide
whose bullets are lettered — `A. Beta-Thalassemia`, `B.`, `A) Insulin Therapy` — satisfies both and
is counted as a question. This is the part-1 lesson ("yellow alone over-counts") in a second shape,
and it is why the count below was derived by pairing rather than by summing the flag.

A genuine question prints twice: the unanswered page, then the answered page immediately after. **47
`answered` pages have no `question` page immediately before them.** Every one was read:

| Pages | What they are | Count |
|---|---|---|
| 87, 157, 159, 161, 162, 255, 256, 257, 613, 617, 618, 619, 1082 | **summary slides** with lettered bullets — NOT questions | 13 |
| 1977, 1984 | §18 Exam Night Review — prose revision cards, NOT questions | 2 |
| 322 + 323 | **ONE question (printed no. 27) straddling two answered pages** | 2 pages, 1 q |
| 420, 971, 974, 1097 | genuine questions whose unanswered twin the index missed | 4 |
| 1923-1940 (18), 1942-1949 (8) | §16/§17 print the answered version ONLY — legitimate, single-printing | 26 |

**878 − 15 non-questions − 1 (the 322/323 pair is one question) ≈ 862 questions**, and §18
contributes none. Call it **~860 — an estimate off an OCR index, to be re-measured section by
section as each is staged, never quoted as a count.** Part 1 was ~855, so part 2 is the same size
again.

## Pages that must be read by eye before staging

`few-options` flags an answered page where both OCR passes together found fewer than four option
letters. 29 pages carry it; **15 are the summary slides above** (the flag caught them), leaving
**14 real question pages with an incomplete read**:

> 203, 209, 211, 229, 239, 436, 888, 1028, 1100, 1197, 1292, 1539, 1917, 1943

Other flags: `options-differ` 193, `passes-differ` 19, `thin` 101, `ocr-error` **0**.

## Reprint expectation

Part 1 is the **Paper 1** syllabus (growth, nutrition, gastro, accidents, emergencies, perinatal,
neonatology, allergy, infection); part 2 is **Paper 2** and shares none of those topics. So
endpoint↔endpoint reprinting should be far rarer than the part-1↔House collision rate.

Where reprints WILL concentrate is §12-18 — four model exams plus recently-modified,
recently-added and exam-night-review, **671 pages, a third of the book** — reprinting the body
sections. Part 1's Model Final Exam 1 was 30 reprints of 80. `reprint-pd-ep2.js` checks each
section against part 2, part 1 and House before drafting.

⚠️ **Nothing folds across a live chat's file boundary.** Cross-bank and cross-part collisions are
RECORDED here and merged once, after every stream closes.
