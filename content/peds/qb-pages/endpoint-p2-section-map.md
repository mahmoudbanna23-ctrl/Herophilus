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

## Collision log — RECORD ONLY, nothing is folded while another chat is live

### §1 Normal Development ≡ House `pedhd-dev-*` — 18 of 28, and it is one-for-one

`node tools\bank-harness\reprint-pd-ep2.js 5 75`, 2026-09-04. **18 of the section's 28 answered
pages match a House stem, in order, with no gaps in the House run:**

| p. | House id | | p. | House id | | p. | House id |
|---|---|---|---|---|---|---|---|
| 19 | `pedhd-dev-1` | | 40 | `pedhd-dev-11` | | 52 | `pedhd-dev-17` |
| 24 | `pedhd-dev-3` | | 42 | `pedhd-dev-12` | | 56 | `pedhd-dev-19` |
| 26 | `pedhd-dev-4` | | 44 | `pedhd-dev-13` | | 58 | `pedhd-dev-20` |
| 28 | `pedhd-dev-5` | | 46 | `pedhd-dev-14` | | | |
| 30 | `pedhd-dev-6` | | 48 | `pedhd-dev-15` | | | |
| 32 | `pedhd-dev-7` | | 50 | `pedhd-dev-16` | | | |
| 34 | `pedhd-dev-8` | | | | | | |
| 36 | `pedhd-dev-9` | | | | | | |
| 38 | `pedhd-dev-10` | | | | | | |

0 within-section candidates. `pedhd-dev-2` and `pedhd-dev-18` did not match; pp.22, 54, 60-74
matched nothing.

This is the **chapter-shaped** overlap `MEMORY.md` warns about, in its strongest form yet — a whole
House chapter reprinted in section order, 64% of the section. It says nothing about the rest of
part 2: §1 is the one topic (development) where the two books' syllabi meet, and the part-1 rate
was much lower.

**These are OCR-index candidates, not confirmed reprints.** Nothing is folded, nothing is skipped,
all 28 are staged. When both streams close, each pair is confirmed on the page images, the fuller
printing kept, and the other's citation folded into `source` — one entry with `alsoIn`, per the
standing cross-bank rule. Until then the two files each carry their own entry, deliberately.

## §1 staging closed — the measurements, 2026-09-04

**28 entries, n 1..28, pp.19-74, 0 sparse holes**, merged from two independently staged halves
(pp.19-46 and pp.48-74). `expect: 28` met exactly — no shortfall to explain.

| Measurement | Result |
|---|---|
| printed number vs sequential index | **`pr == n` on all 28** — no repeats (part 1's §1 printed two) |
| explanation boxes | 26 printed, **2 unboxed** (n1, n13) |
| boxes overflowing onto their own page | **none** — alternation held across every pair pp.19-75 |
| figures | **zero**, measured by reading each answered page whole, both halves |
| options | **19 five-option, 9 four-option** |
| shared option ladders | 3, all in pp.19-46: n4/n5, n8/n12, n9/n13 |

### The four-option run is real in the book — checked, because it looked like a reader artefact

Option counts break at p.54, then run four-only from p.60 to the end of the section. That first read
as a handover artefact between two transcribers. **It is not.** Two independent by-eye audits:

- pp.42, 44, 46, 48, 50, 52 (spanning the handover) — **all five options, all six staged correctly.**
  So the break is inside one reader's range, not at the seam.
- pp.54, 60, 74 and their unanswered twins — **four options, and the printed ladder stops at `d`.**
  A ladder ending at D is positive evidence of a genuine four-option question rather than a dropped
  line. Twins agree; staged counts and key indices match an independent read.

The lettering case also drifts (uppercase `A.` early, lowercase `a.` later). Immaterial — `options`
carries no letter prefixes and the app supplies them.

### Key check — the only one that does not compare a key with itself

`python tools\ep-index\keypos.py "…part2.pdf" --calibrate endpoint-p2-s01-normal-dev.array.js`

> **28 entries -> agree 28, DISAGREE 0, abstain 0 (100.0%)**

`keypos.py` measures the yellow highlight's row centroid against the option text bands — pixels
only, no OCR, no staging file, no shared code with the transcriber. **This is the
calibration-of-record for part 2.** ⚠️ Per the tool's own header: agreement does not make a key
right, since both routes still read the same ink. What 28/28 rules out is the failure it was built
for — a section staged one option out.

### Index flags that did NOT reproduce on the image

`thin` p.59; `options-differ` pp.23/24, 26, 38, 46, 47/48, 49/50, 51/52. Every one read as a
complete, undamaged page by the transcriber who owned it. Consistent with OCR being a search index;
**no print defect in §1.** Nine `options-differ` flags, nine false positives — treat the flag as a
prompt to look, never as a finding.

### Boundary proof, read off the pages

p.75 is a closing devotional slide (Arabic dua, no question). **p.76 opens with the red banner
"Developmental problems"** — §2's title. §1 ends at 75 and §2 begins at 76, as mapped.

### Spliced, and the matcher calibrated against the result

`node tools\bank-harness\splice-pd-ep2.js 1 --write` -- validator gate re-ran both halves and
passed, drafted 28 matched staged 28. `app\data\questions.peds.ep2.js` **383 -> 56,069 bytes,
0 -> 28 entries**. Read back off disk: length 28, **0 sparse holes**, ids unique, `pedep2-nd-1..28`,
one bank `endpoint`, one module `pediatrics`, one chapter `normal-dev`, every `answer` in range.

Boot from `file://` after the splice (`node tools\boot-check\boot-check.js`): **0 console errors**,
QUESTIONS 5111, THEORY 153, 153 chapter rows, 4 module cards. (5111 is a corpus mid-run with two
other chats writing -- a reading, not a count.)

`reprint-pd-ep2.js` `SELF_TEST_RANGE` set to `[5, 75]` and run: **28/28 pages matched their own live
entry, first run, no tuning.** That is part 2's calibration-of-record for the reprint matcher, and
it is what makes the section 2 sweep believable. Part 1's 89/89 does not transfer -- part 2's pages
restart at 1. Re-run after any edit to `head()`, `near()` or `norm.js`; anything under 28 is drift
to explain, not a result.
