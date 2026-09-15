# Ophthalmology Endpoint — Section 8 Calibration, 2026-09-15

Section 8 ("Cornea", PDF pages 560–638 of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`, confirmed against `tools\bank-harness\sec-oph.js` entry 8: `pages: [560, 638]`) was calibrated **text-only** from the OCR search index (`content\ophtho\qb-pages\ocr\ep\index.json`, read once at start) and the per-page OCR `.txt` files `p0555`–`p0645`. Per the brief: no page was rendered, no image was viewed, no `pdftoppm` was run. No page in this range was classified `other`. No new `progress/ophtho-endpoint-s08-calibration-*.md` existed before this one (checked at start), so nothing was read over; this is the first s08 note.

## OCR Route

Index rows read once (as instructed; the index is shared with another job and was not re-read). Rows 550–650 confirmed present; text files `p0555.txt`–`p0645.txt` exist (the p0600-range listing oddity in the first dir listing was a filter artifact — all of p0555–p0645 are on disk). Classifier tabulation for the in-range run 560–638: `kind` {notes: 21, question: 30, answered: 28}; flags {thin: 3 (p560, p580, p581), options-differ: 2 (p630, p634), few-options: 1 (p636)}. Just outside the range: p559 (`answered`, section 7 Q13) and p639 (`notes`, the section 9 divider "Lens"). Pure LF, no carriage returns were introduced in any file written by this job (this note itself is LF).

**The `kind` field's shape is 581/question ↔ 582/answered alternating cleanly from 581 through 638, with one disqualifying exception: pp.621 and 622 are BOTH `question` and are the unmarked and marked reprint of the same Q21.** That exception is described in detail under "Question arithmetic" and "Anomalies". Counting `question` (30) against pairs (29) therefore undercounts the true question count by one — see the arithmetic below. The `answered` boolean throws false positives inside the 560–579 lecture prose (pp.561–572, 576–578 read `answered:true`), the same known prose false-positive as previous sections; it does not corrupt the pair structure, which was tested on every pair (below).

## Section Structure

| PDF pages | Content | Tested against |
|---|---|---|
| 559 | Section 7's last marked page (Q13, "…episcleritis except?") | p559 (outside range; boundary only) |
| 560 | Clean chapter divider: "Cornea" (native 1 word, `thin`) | p560 |
| 561–579 | Lecture prose (19 pages; anatomy, keratoconus, corneal ulcer, etc.) | OCR text + word counts of all 19; no option letters on any page |
| 580 | Divider page: "Questions" (native 1 word, `thin`) | p580 |
| 581–638 | MCQs, one per question, printed as adjacent pairs (unmarked then marked) | see Question arithmetic below |
| 638 | Last page of the section = marked Q29 | p638; exactly `sec-oph.js`'s declared last page |
| 639 | Clean section-9 divider: "Lens" (matches `sec-oph.js` entry 9, `pages: [639, 717]`) | p639 |

**Printed page number equals PDF page number on every page of an exhaustive folio check of 560–640**, with the caveat that OCR dropped the folio on ~20 pages (last native token is prose there: p624 "…ulcer", p630 "therapy.", etc.). Where a trailing standalone number was OCR'd, it matched the PDF page integer exactly (e.g. p581 "581", p621 "621"). For the ~20 pages where OCR omitted the number, equality is asserted only in the sense that no OCR number contradicted the PDF index; the folio itself is not visually confirmed there. A full image folio check of those ~20 pages goes in "needs image check".

## Question Arithmetic

**Question *n* is unmarked on PDF page 579+2n and marked on PDF page 580+2n.** Q1 is pages 581/582; Q29 is pages 637/638. Q29's marked page (638) is exactly `sec-oph.js`'s declared last page for this section. **Section 8 holds 29 questions**, ending cleanly with no trailing reprint — p.639 is a genuinely different chapter's divider ("Lens"), not a repeat of Q29.

Derivation and exception:

- The `question`/`answered` alternation is **perfect from p581 through p638 except at the 621/622 pair**: every pair (581,582), (583,584), …, (637,638) holds except that 621 and 622 are both `question` (see Pairs list below). Classifier totals put this at 30 `question` pages and 28 `answered` pages — the `question` total runs one ahead, exactly on account of p622.
- The tested-pair rule is the stem-similarity test: the two pages of a true pair have near-identical stems. Every odd-start pair 581→582 … 637→638 scored **0.89–0.99 similarity** (normalised-token overlap), unbroken, including the exception pair 621→622 at 0.98. These are 29 tested pairs out of 29. In contrast, the even-start (marked→next-question) direction scored ≤0.67 on every adjacent pair, so the pairing direction is unambiguous: **no adjacent pair is reversed** (e.g. 582/583 = Q1-marked then Q2-unmarked, sim 0.25).
- **The exception has a straightforward reading in the OCR text.** p621 and p622 both carry "21. A 21-year-old male patient … positive Munson's sign … most likely diagnosis?" with options A–E, and a normalised line diff shows the only difference is p621's extra trailing "621" folio token. That is, the source prints the Q21 quiz page **twice**: p621 is the unmarked page, p622 is the marked (answered) page that the classifier typed as `question`. The classifier read the highlighted key mark as "no question" (or missed it), producing two `question` kinds for one Q21 pair. Tested on the pair itself: stem-similarity 621/622 = 0.98, identical questions, one pair. Q22 therefore starts at p623 (unmarked) / p624 (marked) — confirmed by OCR number "22." on both pages and by the 623↔624 sim of 0.98.
- No other out-of-sequence, gap, extra, or reversed page was found: the remaining 120 in-range question pages form 29 consecutive doublets with no hole.

Pairs (unmarked/marked) tested = all 29: Q1 581/582, Q2 583/584, Q3 585/586, Q4 587/588, Q5 589/590, Q6 591/592, Q7 593/594, Q8 595/596, Q9 597/598, Q10 599/600, Q11 601/602, Q12 603/604, Q13 605/606, Q14 607/608, Q15 609/610, Q16 611/612, Q17 613/614, Q18 615/616, Q19 617/618, Q20 619/620, Q21 621/622, Q22 623/624, Q23 625/626, Q24 627/628, Q25 629/630, Q26 631/632, Q27 633/634, Q28 635/636, Q29 637/638. **No exceptions** to the pair list itself (the 621/622 `kind` oddity is a classifier label, not a page-arithmetic break). Q numbers were OCR-confirmed on pages 581 ("I." / "1."), 583 ("2."), 585 ("3."), 587 ("4."), 589 ("5."), 591 ("6."), 593 ("7."), 595 ("8."), 597 ("9."), 599 ("10."), 601 ("11."), 603 ("12."), 605 ("13."), 607 ("14."), 609 ("15."), 611 ("16."), 613 ("17."), 615 ("18."), 617 ("19."), 619 ("20."), 621/622 ("21."), 623 ("22."), 625 ("23."), 627 ("24."), 629 ("25."), 631 ("26."), 633 ("27."), 635 ("28."), 637 ("29.") — all on the unmarked pages (p622 additionally carries "21."), so numbering is a clean 1–29 run.

## Unassigned Pages

Exactly the divider and prose runs: p560 (chapter divider "Cornea"), p561–p579 (lecture prose), p580 (divider "Questions"), p581–p638 (29 question pairs), end. No page in 560–638 is left unassigned. Out-of-range boundary pages used only for confirmation: p559 (section 7's marked Q13), p639 (section 9's divider "Lens"), p640–p645 (section 9 prose, read only for the kind transition).

## Option Counts per Question

OCR-derived from the marked pages (flagged ones marked ⚑). **Unmarked pages confirm every count** (native options lists match the marked page on all 29 pairs; the marked page adds nothing in options).

- 4 options (A–D or a–d): Q1–Q20, Q24–Q29 — i.e. all except the flagged Q21–Q23.
- **5 options (A–E/a–e): Q21, Q22, Q23** ⚑ — pp.621–626 all carry A, B, C, D, E in both native and hires OCR. This is a three-question 5-option run (the first in the calibrated sections: s04 had a single 5-option Q18), OCR-consistent on all six pages; still to be visually confirmed.
- OCR flag hiccups on three later marked pages, all consistent with OCR drops, none indicating a fifth option: p630 (Q25, flagged `options-differ`: native read A,C,D, hires read A,B,C,D), p634 (Q27, flagged `options-differ`: native B,C,D, hires A,B,C,D), p636 (Q28, flagged `few-options`: both passes read only a), b), d) from an options list that OCR shows on p635 as a) Catarrhal conjunctivitis, c) Dendritic ulcer, b) Chronic dacryocystitis, d) Acute angle closure glaucoma — i.e. p636 missed option c only). Direct check needed on p630, p634, p636.

## Option-Case Transitions

Case was read from the OCR line-leading letters on both pages of every pair (raw text, not the uppercase-normalised `options` field):

- **Lowercase a–d: Q1–Q10** (pp.581–600; p581's stem line "I. The cornea is composed of:" is a printer's full-stop-roman-I, not an option).
- **Uppercase A–D: Q11–Q20** (pp.601–620) — transition between Q10 (lower, pp.599/600) and Q11 (upper, pp.601/602).
- Confusing zone at Q15–Q19: p610's OCR `options` field reads A,B,C,D,A,B,C,D (the trailing A–D comes from the passage after the options — see Explanation Boxes, Q15); p613/614, p615/616, p617/618 print uppercase (read in raw text: A–D on both pages of each pair). Q16–Q19 recorded uppercase from raw OCR. Only an image check can settle the printed case of p610's duplicate letters and therefore of Q15's true printed case (raw text shows A–D twice, i.e. on the page at least as A–D).
- **Lowercase a–d: Q21–Q29** (pp.621–638) — transition between Q20 (upper, pp.619/620) and Q21 (lower, pp.621/622), then uninterrupted lower to the end.
- Option-letter case therefore reads: lower (Q1–Q10) → upper (Q11–Q20, with the Q15 caveat) → lower (Q21–Q29): two transitions, at the Q10/Q11 and Q20/Q21 boundaries. **Flagged: the OCR text cannot be trusted for the actual printed case on p610 (duplicate letter set); p630/p634/p636 (missing letters) and p635 (raw text shows a) … c) … b) … d) — printed order to be confirmed by image) also need an image check.** The lowercase/uppercase switch is a source-printing property; OCR case itself is exact here on all unambiguous pages (e.g. p635 "a)", p636 "a) … d)", p637 "a) … d)" all lowercase; p601 "A." …, p631 "A." … all uppercase).

## Explanation Boxes

Box candidates were identified by word-count delta (marked − unmarked, native/hires) then read from the marked pages' OCR tails (the text after the last option line):

- **Boxed (marked page has an explanation paragraph after the options)** on the following marked pages: p582 (Q1, "Structure of the Cornea … five layers …"), p584 (Q2, "Keratoconus causes progressive, painless blurring …"), p586 (Q3, "The keratometer (ophthalmometer) …"), p588 (Q4, "Corneal blood staining …"), p590 (Q5, "•Aphakia …"), p592 (Q6, "Vitamin A deficiency …"), p594 (Q7, "Involvement Of the tip of the nose … Hutchinson's sign …"), p596 (Q8, "A comeal abrasion …"), p598 (Q9, "Munson's sign …"), p600 (Q10, "A corneal ulcer … vison loss." + stray "soo"), p602 (Q11, "Investigations Of keratoconus …"), p604 (Q12, "Corneal epithelial defects … 1% fluorescein …"), p606 (Q13, "Local anesthetics …"), p608 (Q14, "The initial management … foreign body …"), p610 (Q15, "Opaque cornea. More than 50% limbal ischaemia."), p612 (Q16, "Anterior uveitis can be complicated …"), p628 (Q24, "sag"), p630 (Q25, "A corneal ulcer presents with pain, photophobia …"), p632 (Q26, "Management to avoid in corneal ulcer (D) Topical steroid therapy …"), p634 (Q27, "Herpes simplex keratitis is treated with topical antivirals …").
- The weight of evidence: on a normal page the marked/unmarked word-count delta is small (0…±4: p613/614 0, p617/618 0, p633/634 ±1, p635/636 ±1, p637/638 ±1 — and even negative on the two p616/p618 pairs, which both contain their own explanation within the reprint), while every boxed page listed above shows a **≥10-word delta** (Q1 +26, Q12 +21, Q14 +27, Q15 +63, Q24 +20). The deltas therefore corroborate the OCR-tails read, but **the presence of a printed box (border/rule) is not visible in OCR** — flagged for image check.
- **Not boxed / no explanation text found on the marked pages** (tail empty): p614 (Q17), p616 (Q18), p618 (Q19), p620 (Q20), p622 (Q21), p624 (Q22), p626 (Q23), p636 (Q28), p638 (Q29). **Exception in the group: p613/614 (Q17), p615/616 (Q18), p617/618 (Q19) have deltas of −3, −3, +10, +11, −3, −3 — near-zero or slightly negative — yet every one shows a longer marked page in the 150dpi read**; their marked pages are nearly identical twins of the unmarked page (sims 0.96–0.98), i.e. the duplicate-pass on these three pairs reprints the full question text plus explanation into the marked page, so box detection has nothing to hang a delta on.
- **Book-ends of the section are sharp:** Q1–Q16 all have explanation paragraphs; Q17–Q23 and Q28–Q29 read as no-box by OCR (Q20/Q21/Q22/Q23 deltas +20, +20, +8, +27 are confounded by the double-print of Q21 and by the reprint text — see below); Q24–Q27 read as boxed again. **The Q17–Q23 "no explanation" stretch and the Q24–Q27 "boxed" stretch are OCR-inferences, not visual facts; the printed-box status of every pair needs an image check** (in particular whether Q17–Q19's twins carry boxes, and whether p622 is really the "marked" twin with a key/underline).

## Figures

Figure-language grep over all OCR text of pp.560–638 for "figure/fig./shown/arrow/picture/photograph/diagram/image below/as seen/see above/see below/plate": only **p567 ("Picture Picture")** and **p570 ("Picture Picture")** match — both inside the lecture-prose run (561–579), consistent with a textbook image caption or an OCR'd header, **not** a question-side figure. No question page (581–638) references a figure. **Figure candidates therefore: the lecture pages p567 and p570 only.** OCR cannot see images; both pages go on the needs-image list to confirm what the "Picture" text belongs to. No table/figure above questions was detected anywhere in 581–638.

## Classifier Mis-tags

- **p621 AND p622 both `kind:"question"` — the Q21 double-print.** p621 is the unmarked Q21 page (with trailing folio "621"); p622 is Q21's marked reprint (its trailing "622" was not OCR'd). The classifier failed to mark p622 `answered` (no yellow-pixel trigger), so the `kind` count breaks at exactly this one pair: question pages 30 against 29 pairs. **This is a genuine mis-tag where `kind` is wrong, not just the `answered` boolean** — only recoverable from the OCR text, which proves the p621/p622 identity. The `answered` boolean on p622 is false too (its `answered:false` is the mechanism).
- **Prose-page false positives in the `answered` boolean** (raw yellow threshold) inside lecture prose 561–579: pp.561–572, 576–578 read `answered:true` with zero option letters — the same known failure mode as sections 1–4 (lettered/colour-highlighted prose outlines tripping the detector). `kind` stays `notes` on all of them, so the pair structure is untouched. p573–p575, p579 read `answered:false`. p560 and p580 (dividers) read clean `notes`/`answered:false`.
- No `question` page was mis-tagged `notes` in this range, and no `answered` page other than p622 was mis-tagged `question`; no page in range was tagged `other`. The closing test below accounts for every page regardless of tags.

## Closing Test (every page accounted for)

- p560 divider (1) + p561–p579 prose (19) + p580 divider (1) + 29 pairs × 2 (58) = 79 pages = exactly the range 560–638 (79 pages). No page unassigned, no page reused, no gap.
- Boundary confirmation: p559 = section 7's last marked page (Q13), p639 = section 9 divider "Lens", p640+ = section 9 prose: the section-8 range starts and ends exactly as `sec-oph.js` declares.

## Needs-Image-Check List (OCR cannot settle these)

- p621 vs p622: confirm the Q21 marked twin carries the key mark/underline (answer highlight) — i.e. that p622 is the marked page and not also unmarked.
- All 29 question boxes (printed box/rule): OCR confirms explanation text; a printed border needs an image. Specifically re-check Q17–Q19 (pp.613/614, 615/616, 617/618: near-zero deltas, explanation likely inside the reprint) and Q24–Q27 (pp.627/628 … 633/634, inferred boxed from delta/text).
- The Q15 marked page **p610**: OCR reads the letter set twice (A,B,C,D,A,B,C,D) — the second set is passage text; image check for both the printed box presence and the printed case of the options.
- Option-page letter reads needing confirmation: p630 (Q25 marked; native missed C), p634 (Q27 marked; native missed A), p636 (Q28 marked; both passes missed c — options print a, c, b, d in a 2-column layout per p635's OCR order), and p635's printed option order (OCR line order reads a) … c) … b) … d)).
- Figures: p567 and p570 ("Picture" text in prose range) — what the image/caption is. No question-side figure candidate exists.
- Folio numbers: ~20 in-range pages whose OCR lost the trailing number (p600, 601, 602, 605, 607, 608, 609, 611, 612, 617, 618, 619, 622, 623, 625, 627, 628, 630, 631, 632, 633, 635, 636, 637, 638 among others; also p560, p580, p639 are dividers without folio) — print-vs-index equality asserted only by absence of contradiction, not visually; confirm on an image pass.
- Case transitions: the Q10/Q11 (pp.599–602) and Q20/Q21 (pp.619–622) boundaries are OCR-clear; the Q15 page p610 and the option-order pages p635/p636 are the only case-ambiguous ones.
- Lecture-prose pages 561–579: OCR only; no option letters and no question-side figure candidates, but nothing on those pages is visually confirmed.

## Unresolved

- Whether p622 is marked with a key (see needs-image list) — the single fact that decides whether the formula is exactly "question *n* on 579+2n / 580+2n with Q21's pages both present" vs "Q21's marked page is a variant reprint"; OCR text already proves the pair exists.
- The printed 5-option status of Q21–Q23 (pp.621–626): OCR is consistent on all six pages, but 5-option pages warrant a visual pass before keys are extracted (same rule as s04's Q18).
- Nothing else. Question count 29, formula 579+2n / 580+2n, holds without exception on the OCR evidence; all flags, the case story and the box story are reported above with their evidence level.

## Byte-Size and Line-Ending Check

All files written by this job (this note and the scratchpad report) are LF-only; `tr -cd '\r' | wc -c` on this note must print 0.
