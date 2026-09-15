# Ophthalmology Endpoint - Section 6 Calibration, 2026-09-15

TEXT-ONLY calibration of section 6 ("Conjunctiva"), PDF pages 417-522 of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`, confirmed against `tools\bank-harness\sec-oph.js` entry 6:

```
6: { prefix: 'ophep-conjunctiva-', file: 'oph-ep-p1-s06-conjunctiva.array.js', svar: 'OPHEP_S06_STAGED', draft: 'oph-ep-p1-s06-conjunctiva.draft', chapter: 'op-conj', pages: [417, 522], ans: null }
```

Pages 417-522 = 106 pages. This run worked from the OCR index only (`content\ophtho\qb-pages\ocr\ep\index.json` + `pNNNN.txt`, read once); no page was rendered or viewed. The OCR index holds 106 rows for pages 417-522 (continuous p0417-p0522). The section-6 known flags listed in the brief match the index exactly (thin p417, 436, 443, 444, 462, 470, 498, 499; few-options p471, 517; options-differ p449, 451, 453, 475, 481, 483, 501, 505).

No prior `progress\ophtho-endpoint-s06-calibration-*.md` existed; this is the first s06 calibration note.

## Range and divider pages

| PDF pages | Content | Evidence |
|---|---|---|
| 417 | Clean section divider: "Conjunctiva" | OCR p0417 = "Conjunctiva" (1 word, thin) |
| 418-442 | Lecture prose (25 pages): conjunctivitis classifications, follicles, trachoma, adult chlamydial conjunctivitis, pterygium, subconjunctival hemorrhage | OCR text of all 25 read |
| 436 | Prose page flagged thin - "Lymph Nodes: Preauricular + submandibular enlargement..." (12 words) | OCR p0436 |
| 443 | Divider page: "Questions" (1 word, thin) | OCR p0443 |
| 444-521 | 78 MCQ pages in 39 unmarked/marked pairs | see arithmetic below |
| 522 | Trailing reprint of Q38's unmarked page (third print of Q38) | OCR p0522 identical stem/options to p0520/p0521 |
| 523 | Next-section divider "Sclera" (outside range; matches `sec-oph.js` entry 7, `pages: [523, 559]`) | OCR p0523 |

No other divider page found inside 418-442. Printed page number equals PDF page number on every page checked via the folio in OCR text (417, 436, 443, 444-522).

## Question count and how it was derived

**The section holds 39 question pairs.** The question run is page-continuous from 444 to 521: unmarked pages 444, 446, ..., 520 (39) alternating with marked pages 445, 447, ..., 521 (39). Every consecutive pair was tested by OCR stem-text identity (see "Page formula" below); every pair matches. The printed question numbers run **1-38 with one duplicated "28"**: pp.498/499 print "28" (Preauricular lymphadenopathy, EXCEPT) and pp.500/501 print "28" again (purulent discharge / initial management, 5 options) - two distinct questions, same printed number. Numbering resumes 29 (pp.502/503) through 38 (pp.520/521). So the printed-number count (38) is **not** the question count (39); the duplicated printed "28" is a source-printing anomaly, not an OCR artifact (both pages read cleanly, distinct stems, on both OCR passes).

Page accounting for the whole range: 417 (divider) + 25 prose (418-442) + 443 (divider) + 78 question pages (444-521) + 522 (trailing reprint) = 106. OK.

## Page formula and pairs tested

**Question *n* (position-based, n = 1..39) is unmarked on PDF page 442 + 2n and marked on PDF page 443 + 2n.** Q1 = 444/445; Q39 = 520/521. The formula was tested on **every one of the 39 pairs** using consecutive-page OCR-text similarity (all pairs >= 0.56, most >= 0.8; the lower ones - 444/445 0.31, 470/471 0.59, 472/473 0.59, 476/477 0.56 - are pairs whose marked page carries a long explanation box or OCR-garbled letters and still showed the identical stem). **Arithmetic exceptions: none.** The anomalies below are content-level, not arithmetic breaks:

- pp.498/499 and pp.500/501 both print "28" (duplicate printed number; two distinct questions).
- p522 is a third print of Q38 - unmarked page repeated verbatim (unmarked 520, marked 521, unmarked reprint 522), the same triple-print shape as section 1's p.133.
- p515 (Q36's marked page) reads word-identical to its unmarked twin p514 (no explanation added, no OCR-visible highlight) - marked-page detection is impossible from text alone on this pair (see Classifier mis-tags).

## Option counts per question (OCR-derived)

4 options on every question except:

| Position (pages) | Printed no. | Options | Flag |
|---|---|---|---|
| Q14 (470/471) | 14 | only `c` visible in OCR (c. 15%) | few-options p471; p470 kind=other |
| Q19 (480/481) | 19 | 5 (A-E) | options-differ on marked (hires pass drops E) |
| Q29 (500/501) | 28 (dup) | 5 (A-E) | options-differ on marked (hires drops E) |
| Q30 (502/503) | 29 | 5 (A-E) | none |
| Q37 (516/517) | 36 | 4 printed; OCR reads a, c, d only - b garbled "in inin f h rn" | few-options on marked p517 |

Q14's unmarked page (470) and marked page (471) both show only option c in OCR - whether the page genuinely prints a single option or OCR failed on the rest is an image-check item. Q37's marked page (517) garbles option b completely - likely a highlight, but image-check.

## Option-letter case transitions

- **a-d lowercase: Q1-Q12** (pp.444-467).
- **A-D uppercase: Q13-Q35** (pp.468-513), including 5-option Q19/Q29/Q30 (A-E).
- **a-d lowercase: Q36-Q39** (pp.514-522).
- Mixed-case flagged for image check: **Q3 (pp.448/449) reads "A, b, c, d"** - first letter OCR'd as uppercase A on both passes; either a genuine mixed-case print or an OCR artifact.

Three case transitions in the section: Q12/Q13 (lower to upper) and Q35/Q36 (upper to lower), plus the Q3 mixed page. This matches sections 3/4's multiple-transition shape, not a single clean switch.

## Explanation-box candidates per question (word-count deltas, native pass)

Marked page minus unmarked page word count:

Q1 +65, Q2 +26, Q3 +22, Q4 +25, Q5 +24, Q6 +22, Q7 +24, Q8 +23, Q9 +26, Q10 +22, Q11 +20, Q12 +26, Q13 +16, Q14 +24, Q15 +43, Q16 +16, Q17 +45, Q18 -1, Q19 0, Q20 0, Q21 +1, Q22 -1, Q23 +1, Q24 0, Q25 0, Q26 0, Q27 0, Q28 0, Q29 0, Q30 0, Q31 +20, Q32 +20, Q33 +23, Q34 +18, Q35 +21, Q36 0, Q37 -1, Q38 0, Q39 0.

**Box candidates (delta >= 16): Q1-Q17 and Q31-Q35.** The explanation text itself is present in the OCR of every candidate's marked page (e.g., Q4 p451 "Allergic conjunctivitis presents with bilateral ropy mucous discharge...", Q17 p477 treatment list, Q31 p505, Q35 p513 "NO treatment is required; it resolves within 1-2 weeks"). **No explanation text appears on the marked pages of Q18-Q30 or Q36-Q39** (deltas <= 1). So the box shape is: present Q1-Q17, absent Q18-Q30, present Q31-Q35, absent Q36-Q39 - a disappear/reappear/disappear pattern. Whether each candidate's explanation is a *printed box* vs plain text under the options is OCR-invisible, so it goes to the image-check list.

## Figures

No figure, photograph, or diagram referenced anywhere in the section's OCR text. A section-wide text grep for figure-language ("figure", "shown", "arrow", "picture", "photograph", "diagram", "image", "as seen", "imaging") returned one hit - p451's explanation "...often associated with atopic dermatitis, **as seen** with dry, red, scaly eyelids" - idiomatic text, not a figure reference. This is an absence-in-text check only; OCR cannot see an embedded image, so a figure on any page is unresolved and goes to the image-check list.

## Classifier mis-tags

- **p515 (Q36 marked page): tagged `kind:"question"`, `answered:false`** - the one marked page the classifier missed. It is word-identical to its unmarked twin p514 (delta 0, no explanation box), so text gives no signal; every other marked page 445-521 is `kind:"answered"`.
- **p470 (Q14 unmarked page): `kind:"other"`** (the only "other" in the range) - 16 words, single visible option letter c; the paired marked page p471 is correctly `answered` (few-options).
- **Prose pages 418-442: 14 of 25 carry `answered:true`** (pp.418, 420-431, 434) - the same highlighted-headings/lettered-outline false positive seen in sections 1, 3, 4 lecture ranges. `kind` stays "notes" throughout the prose, so the question count is unaffected.
- Classifier totals for the range: `kind` {notes 27, question 40, answered 38, other 1} = 106. Accounting check: true questions = 39 unmarked `question` + 39 marked `answered` = 78 pages, but the classifier reports question 40 / answered 38 - p515 (a real marked page) counts in `question` and p470 (a real unmarked page) counts in `other`; the 14 prose `answered:true` are confined to `kind:notes`. Totals reconcile once p515 and p470 are re-assigned.

## Needs image check (OCR cannot settle)

- True option count on **pp.470/471 (Q14)** - only option c visible in OCR (few-options flag; p470 `kind:other`).
- Option b's text on **p517 (Q37 marked)** - OCR garbled ("in inin f h rn"); possibly a highlighted key obscuring OCR.
- Option-letter case on **pp.448/449 (Q3)** - mixed "A,b,c,d" read: genuine mixed case or OCR artifact.
- Whether **p515 (Q36 marked)** really carries the highlight/key - classifier says unmarked; only an image settles it.
- Explanation-box presence (box vs plain text) on candidates **Q1-Q17, Q31-Q35** (marked pages 445, 447, ..., 477 and 505, 507, 509, 511, 513).
- Options-differ pages **449, 451, 453, 475, 481, 483, 501, 505** - which option letter each marked page's OCR dropped; likely the highlighted key, image required.
- **p522** - confirm the trailing print is verbatim-unmarked like p520 (OCR says so; image settles the yellow).
- Thin pages **417, 436, 443, 444, 462, 470, 498, 499** - whether "thin" means near-empty/layout, not a content issue.
- Whether any embedded figure exists on any page in 417-522 (text grep is clean; pixels not checked).

## Anything unresolved

- The duplicated printed "28" (pp.498/499 vs 500/501) is recorded as a source anomaly; whether the source intends the second "28" to be 29 (making the printed run 1-39) cannot be decided from text - staging should key off position (39 questions), not printed numbers.
- p522's presence inside the declared range means Q38 is triple-printed (520/521/522); the keys file for this section must decide how to handle the duplicate (flagged, not folded silently).
- No key extraction (keys are never stated here; OCR cannot see highlighted marks).

## Byte size and line-ending check

To be run after this file is written: `tr -cd '\r' < "progress\ophtho-endpoint-s06-calibration-2026-09-15.md" | wc -c` - must print 0.
