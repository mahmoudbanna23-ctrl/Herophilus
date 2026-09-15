# Ophthalmology Endpoint - Section 10 Calibration (TEXT-ONLY), 2026-09-15

Section 10 ("Uveal Tract", PDF pages 718-787 of `Semester 8\Opthalmo\Questions\Opthalmology
endpoint.pdf`, confirmed against `tools\bank-harness\sec-oph.js` entry 10: `pages: [718, 787]`)
was calibrated **text-only** from the OCR search index
(`content\ophtho\qb-pages\ocr\ep\index.json`, read once at start) and the per-page OCR `.txt`
files `p0718.txt`-`p0787.txt`. **No page was rendered, no image was viewed, no `pdftoppm` was
run** - per the brief's explicit TEXT-ONLY instruction. Everything that needs eyes went into the
"needs image check" list below; that is the intended output of a text-only calibration, not a gap.
(An earlier `gw-calib-s10-log1.txt` in the scratchpad was zero bytes / no previous run's note
existed for this section; this is the first s10 calibration note.)

## OCR Route

Index rows 718-787 confirmed present (70 rows, continuous, one per page). Classifier tabulation
for the in-range run: `kind` {notes: 22, question: 24, answered: 24}; flags {thin: 4 (p718, p719,
p739, p742), options-differ: 5 (p755, p756, p757, p763, p781), few-options: 1 (p757)}. The
`question`/`answered` alternation is **perfect from p740 through p787** (24 unmarked + 24 marked =
48 question pages), with no mis-tag on any question page. The `answered:true` boolean fires on
21 of the 22 `notes` pages (pp.719-738; every one except p735, p737, p739) - the known
highlighted-headings/lettered-outline false positive seen in sections 1, 3, 4, 5, 6, 8 lecture
ranges; `kind` stays "notes" throughout the prose, so the question count is untouched. Pages
718-787 = 70 pages: 1 divider (718) + 21 prose (719-739, incl. Questions divider at 739) + 48
question pages (740-787) = 70, accounting closes exactly; every page 740-787 falls in exactly one
unmarked/marked pair (see arithmetic below). All OCR `.txt` files are pure LF (0 carriage
returns).

## Range and divider pages

| PDF pages | Content | Evidence |
|---|---|---|
| 718 | Clean chapter divider: "Uveal Tract" (2 words, `thin`) | OCR p0718 |
| 719-738 | Lecture prose (20 pages): Uveal Tract, Iris, Ciliary Body, Choroid, Uveitis, Anterior/Intermediate/Posterior/Panuveitis, VKH, Sympathetic Ophthalmia | OCR text of all 20 read |
| 739 | Divider page: "Questions" (1 word, `thin`) | OCR p0739 |
| 740-787 | 48 MCQ pages in 24 unmarked/marked pairs (unmarked then marked) | see arithmetic below |
| 788 | Next-section divider "Glaucoma" (outside range; matches `sec-oph.js` entry 11 `pages: [788, 849]`) | OCR p0788 |

Printed page number equals PDF page number on every one of the 70 in-range pages (exhaustive
folio check via the trailing standalone integer in OCR; the divider pages 718/739 and prose
pages 719-738 mostly carry no folio in OCR, but no OCR number contradicts the PDF index). No other
divider page found inside 719-738.

## Question count and how it was derived

**Section 10 holds 24 question pairs.** The question run is page-continuous from 740 to 787:
unmarked pages 740, 742, ..., 786 (24) alternating with marked pages 741, 743, ..., 787 (24). The
printed question numbers run **1-23 with a duplicated printed "12"**: pp.762/763 print "12"
(intermediate uveitis, snowballs/small banking treatment) and pp.764/765 print "12" again
(posterior uveitis, most common infectious cause) - two distinct questions, same printed number.
So the printed-number count (23) is **not** the question count (24); the duplicated printed "12"
is a source-printing anomaly, not an OCR artifact (both pairs read cleanly; distinct stems on all
four pages). Numbering resumes 13 (pp.766/767) through 23 (pp.786/787). Q1 (740/741) and Q2
(742/743) print "1" and "2" (OCR reads "I." and "2."); Q11 (760/761) prints "11" (OCR "I I"); the
"Q11/Q12" boundary is clean (see Pairs below). Two printed numbers appear at the very end:
pp.784/785 print "22" (OCR "22.") and pp.786/787 print "23" (OCR "23.") - Q22/Q23, position 22/23.

Page accounting for the whole range: 718 (divider) + 719-738 (20 prose) + 739 (divider) + 48
question pages (740-787) = 70. OK.

## Page formula and pairs tested

**Question *n* (position-based, n = 1..24) is unmarked on PDF page 738+2n and marked on PDF page
739+2n.** Q1 = 740/741; Q24 = 786/787. Q24's marked page (787) is exactly `sec-oph.js`'s declared
last page for this section (`pages: [718, 787]`).

The formula was tested on **every one of the 24 pairs** using consecutive-page OCR-text similarity
(all pairs >= 0.68; the lower ones - 772/773 0.68, 770/771 0.71, 774/775 0.71, 784/785 0.71 - are
pairs whose marked page carries an explanation box or OCR-garbled letters and still showed the
identical stem). The paired direction (unmarked -> marked) is unambiguous: the marked page of every
pair adds the explanation text the unmarked page lacks (see "Explanation-box candidates"), and the
cross-pair direction (marked -> next unmarked) scored <= 0.48 on every adjacent pair. So the odd
formula (738+2n / 739+2n) is confirmed on all pairs. **Arithmetic exceptions: none.** The anomalies
below are content-level (duplicate printed number, one 4-option Q11, Q12a/Q12b with 4 vs 5
options), not arithmetic breaks.

Confirmed pairs read in full (all 24): Q1 740/741, Q2 742/743, Q3 744/745, Q4 746/747, Q5 748/749,
Q6 750/751, Q7 752/753, Q8 754/755, Q9 756/757, Q10 758/759, Q11 760/761, Q12a 762/763, Q12b
764/765, Q13 766/767, Q14 768/769, Q15 770/771, Q16 772/773, Q17 774/775, Q18 776/777, Q19
778/779, Q20 780/781, Q21 782/783, Q22 784/785, Q23 786/787.

## Unassigned pages (within the declared range, not part of a question pair)

- p718: chapter divider "Uveal Tract".
- pp.719-738: lecture prose (20 pages, read via OCR text).
- p739: "Questions" divider.
- That is 22 pages; 70-48 = 22, the accounting closes exactly. Everything in 718-787 is either
one of these 22 or one of the 24 question pairs. No page is unassigned, no page is reused.

## Option counts per Q (OCR-derived; flagged ones marked)

4 options (a/A-d/D) on every question except:

| Position (pages) | Printed no. | Options | Flag |
|---|---|---|---|
| Q9 (756/757) | 9 | OCR reads only B and c - both pages (marked page shows "B. 20%" "c. 30%"); likely 4 printed options with B and c visible / A and D lost | few-options + options-differ on marked p757; options-differ on unmarked p756 |
| Q12b (764/765) | 12 (dup) | 5 (A-E) | none |
| Q20 (780/781) | 20 | 5 (A-E) | options-differ on marked p781 (hires drops D) |

**Q11 (760/761) has 4 options** (A. Sympathetic affection, B. Parasympathetic affection, C. Motor
dysfunction, D. Sensory dysfunction) - read from OCR text, 4 lines, both pages. Q12a (762/763)
also has 4 options (A. Spectacles, B. Intravitreal steroid injection, C. PRP, D. Surgery; marked
page prints lowercase `c. PRP` vs unmarked `C. PRP` - see Case transitions).

## Option-letter case

**Q1-Q8 lowercase `a-d`** (pp.740-755; e.g., p740 "a. Peripheral anterior synechiae ... d. Corneal
neovascularization", Q8 p754 "D Ph m hi" garbled). **Q9-Q23 uppercase `A-D`** from p758 onward
(pp.758-787), with these per-page wrinkles: Q12a marked page p763 prints `c. PRP` lowercase
(native + hires); Q22 marked page p785 prints `C. Alpha adrenergic agonist` uppercase (both
passes; unmarked p784 lowercase `c`). The case transitions to record for downstream key/staging:
lower `a-d` on Q1-Q8, upper `A-D` on Q9-Q23 (single transition at Q8/Q9), with the Q12a `c.` /
Q22 `C.` wrinkles as OCR-visible but image-checked for true printed case. (The `options` field in
`index.json` normalises everything to uppercase, so case conclusions come from the `.txt` lines,
not the index.)

## Explanation-box candidates per Q (word-count deltas, native pass)

Marked page minus unmarked page word counts (native text content, computed from OCR):

Q1 +36, Q2 +20, Q3 +19, Q4 +21, Q5 +21, Q6 +23, Q7 +40, Q8 +14, Q9 +32, Q10 +9, Q11 +41, Q12a
+32, Q12b 0, Q13 0, Q14 0, Q15 0, Q16 0, Q17 0, Q18 0, Q19 0, Q20 0, Q21 0, Q22 +23, Q23 +23.

**Box candidates (delta >= 9): Q1-Q11 and Q22-Q23.** The explanation text itself is present in the
OCR of every candidate's marked page (Q3 p745 "Anterior uveitis (iridocyclitis) is treated with
topical corticosteroids...", Q9 p757 "The trabecular pathway is responsible for 90%...", Q11 p761
"Horner syndrome - causes...", Q22 p785 "Topical beta-blockers like timolol can cause
bronchospasm...", Q23 p787 "Inflammation of the iris and ciliary body..."). **No explanation text
appears on the marked pages of Q12b-Q21** (deltas <= 0, clean reprints). Q22's explanation sits
**between options C and D** (p785: options A, B, C, then explanation, then "D. Carbonic anhydrase
inhibitor") - odd placement, image-check. Whether each candidate's explanation is a *printed box*
vs plain text under the options is OCR-invisible (as in past sections), so that goes to the
image-check list.

## Figures

No figure, photograph, or diagram referenced anywhere in the section's OCR text. A section-wide
text grep for figure-language ("figure", "fig.", "shown", "arrow", "picture", "photograph",
"diagram", "image", "as seen", "below", "above") returned only idiomatic hits (p720 "improves
image contrast", p731 "Clinical Picture:", p732/766/767/772/773/778/779 "All/None of the above"),
none of which is a figure reference. This is an absence-in-text check only; OCR cannot see an
embedded image, so a figure on any page is unresolved and goes to the image-check list.

## Classifier mis-tags

- **No `kind` mis-tag on any question page 740-787**: `question` on all 24 unmarked, `answered`
  on all 24 marked - perfect alternation, unlike sections 4/6/8 which had prose false-positives
  in `kind`. `answered:true` fire on 21 of the 22 `notes` pages (719-738, incl. both divider
  pages, except p735/p737/p739) - the known prose false positive; `kind` stays "notes", so the
  question count is unaffected.
- Classifier totals for the range: `kind` {notes 22, question 24, answered 24} = 70, exactly the
  true 22/24/24. Accounting check: 24 unmarked `question` + 24 marked `answered` = 48 question
  pages, matching the continuous 740-787 run. No `other` page in range.

## Needs image check (OCR cannot settle)

- **True option count on pp.756/757 (Q9)** - only "B. 20%" and "c. 30%" visible in OCR; real
  count could be 4 (A and D lost to highlight) or fewer. few-options + options-differ flags on
  p757, options-differ on p756.
- **Highlighted key position on each marked page 741-787** - OCR cannot see highlighted marks; the
  keyed option for all 24 questions is unstated here (per AGENTS.md, never state a key).
- **Explanation-box presence (box vs plain text)** on candidates Q1-Q11, Q22-Q23 (marked pages
  741, 743, ..., 761 and 785, 787).
- **Q11 (pp.760/761) really 4 options** - OCR reads 4 lines on both pages; worth confirming the
  physical print (no 5th option) since it breaks the "5-option run" impression of Q20-Q21.
- **Q22 marked page p785: explanation text sits between C and D** - confirm the actual layout
  (box interleaved with options?).
- **Option-letter case wrinkles**: p763 (Q12a marked) `c. PRP` vs unmarked `C. PRP`; p785 (Q22
  marked) `C.` uppercase vs unmarked lowercase - genuine case mix or OCR read.
- **p781 (Q20 marked)** - native OCR dropped "D" (line reads "D / Iri"); hires reads full D - is
  D really printed and not highlighted-away?
- **p784/785 folio**: p784 native ends "784" (hires omits); p785 native omits the trailing folio
  in the pre-box block and ends "785" - folio presence only, column uses the PDF index, no
  conflict.
- Whether any embedded figure exists on any page in 718-787 (text grep is clean; pixels not
  checked).

## Anything unresolved

- **Duplicate printed "12" (pp.762/763 vs 764/765)** recorded as a source anomaly; whether the
  source intends the second "12" to be 13 (making the printed run 1-24) is not decidable from
  text - staging should key off position (24 questions), not printed numbers (same rule as s05
  and s06).
- **Q11's printed number**: OCR reads "I I" (pp.760/761) and "I l" (hires p761) - the yes/no of
  whether the print is a single "11" is a follow-on image check, but it is read here as "11"
  with uncertainty noted.
- Whether the marked page really carries a key/highlight on the 24 `answered` pages - only an
  image settles it (image-check list), not asserted here.
- No key extraction was performed (keys are never stated for this section - OCR cannot see the
  highlighted marks).

## Byte size and line-ending check

All files written by this job (this note and the scratchpad report) are LF-only;
`tr -cd '\r' < "progress\ophtho-endpoint-s10-calibration-2026-09-15.md" | wc -c` must print 0.
