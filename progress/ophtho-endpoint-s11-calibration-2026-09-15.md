# Ophthalmology Endpoint - Section 11 Calibration (TEXT-ONLY), 2026-09-15

Section 11 ("Glaucoma", PDF pages 788-849 of `Semester 8\Opthalmo\Questions\Opthalmology
endpoint.pdf`, confirmed against `tools\bank-harness\sec-oph.js` entry 11: `pages: [788, 849]`) was
calibrated **text-only** from the OCR search index (`content\ophtho\qb-pages\ocr\ep\index.json`,
read once at start) and the 62 per-page OCR `.txt` files `p0788.txt`-`p0849.txt`. **No page was
rendered, no image was viewed, no `pdftoppm` was run** - per the brief's explicit TEXT-ONLY
instruction. Everything that only an image can settle is listed under "Needs image check" below; that
list is the intended output of a text-only calibration, not a gap.

## OCR Route

Index rows 788-849 confirmed present (62 rows, continuous, one per page). Classifier tabulation for
the in-range run: `kind` {notes: 10, question: 26, answered: 26}; flags {thin: 4 (p788, p797, p810,
p812), options-differ: 6 (p810, p811, p829, p833, p835, p849), few-options: 3 (p811, p813, p835),
passes-differ: 2 (p788, p797)}. **The `question`/`answered` alternation is perfect from p798 through
p849** (26 unmarked + 26 marked = 52 question pages), with no mis-tag on any question page. The
raw `answered:true` boolean fires on every lecture-prose page (pp.789-796) - the known highlighted-headings/lettered-outline false positive seen in sections 1, 3, 4, 5, 6, 8, 10, 12, 14; the two dividers (p788, p797) read `answered:false` with `yellow: 520`, matching the question pages;
dividers (p788, p797) - the known highlighted-headings/lettered-outline false positive seen in the
lecture ranges of sections 1, 3, 4, 5, 6, 8, 10, 12; `kind` stays "notes" throughout the prose, so
the question count is untouched. Pages 788-849 = 62 pages: 2 dividers (788, 797) + 8 prose
(789-796) + 52 question pages (798-849) = 62, accounting closes exactly; every page 798-849 falls in
exactly one unmarked/marked pair (see arithmetic below). All in-range OCR `.txt` files are pure LF (0
carriage returns). No prior `progress\ophtho-endpoint-s11-calibration-*` existed; this is the first
s11 calibration note.

## Range and divider pages

| PDF pages | Content | Evidence |
|---|---|---|
| 788 | Clean chapter divider: "Glaucoma" (1 word, `thin`) | OCR p0788 |
| 789-796 | Lecture prose (8 pages): POAG (definition, risk factors, visual field defects, treatment), NTG, Secondary Open-Angle, PACG, Acute Angle-Closure (symptoms/signs/complications), Management (Acute Attack) | OCR text of all 8 read |
| 797 | Divider page: "Questions" (1 word, `thin`) | OCR p0797 |
| 798-849 | 52 MCQ pages in 26 unmarked/marked pairs (unmarked then marked) | see arithmetic below |
| 850 | Next-section divider "Vitreous" (outside range; matches `sec-oph.js` entry 12 `pages: [850, 879]`) | OCR p0850 (from s12 calibration note of 2026-09-15) |

Printed page number (OCR trailing folio) equals the PDF page number on every question page
798-849; the divider/prose pages 788-797 carry no folio in OCR except page numbers reproduced
below. No other divider page found inside 789-796 or inside the question run.

## Question count and how it was derived

**Section 11 holds 26 question pairs.** The question run is page-continuous from 798 to 849:
unmarked pages 798, 800, ..., 848 (26) alternating with marked pages 799, 801, ..., 849 (26). The
printed question numbers (OCR first line of each pair) run **1-25 with a duplicated printed "20"**,
and the sequence is otherwise clean: 1 (798), 2 (800), ..., 19 (834), **20 twice** - Q20-position
(836, "best line of management of a diabetic patient presenting with acute angle closure glaucoma?",
options A-D) and Q21-position (838, "He complains of nausea and intermittent blurring of vision with
halos... hard globe... SINGLE most appropriate management?", options A-E) - then 21 (840), 22
(842), 23 (844), 24 (846), 25 (848). So the printed-number count (25) is **not** the position count
(26); the duplicated printed "20" is a source-printing anomaly, not an OCR artifact (both pairs read
cleanly; distinct stems on all four pages). This is the same shape as the section 10 duplicate
printed "12" (two distinct questions under one printed number) - position-based counting applies.

Two exercises repeat earlier stems with different question numbers: **Q12 (820) and Q18 (832) are
the identical stem/options** ("Which of the following is considered a visual field defect that is
characteristic of glaucoma?" A-D: Floaters / Arcuate scotomata / Bitemporal hemianopia / Xanthopsia;
OCR similarity 0.893, exact same four option lines) - an exact reprint under two numbers, and
**Q13 (822) and Q20 (836) are the identical stem/options** ("best line of management of a diabetic
patient presenting with acute angle closure glaucoma?" A-D: Alpha blockers / Topical mydriatics /
Mannitol / Glycerine; identical OCR text) - both with explanation boxes on their marked pages. Both
are recorded as source repeats for staging; not treated as a page-arithmetic break.

## Page formula and pairs tested

**Question *n* (position-based, n = 1..26) is unmarked on PDF page 796+2n and marked on PDF page
797+2n.** Q1 = 798/799; Q26 = 848/849. Q26's marked page (849) is exactly `sec-oph.js`'s declared
last page for this section (`pages: [788, 849]`). Formula base = Questions divider (797) minus 1,
same construction as sections 10 and 12.

The formula was tested on **every one of the 26 pairs** using consecutive-page OCR-text similarity
(stem reprint test): all 26 pairs show the near-identical two-page reprint, with similarity >= 0.93
on 19 pairs; the 7 lower pairs are exactly the pairs whose marked page adds an explanation box or
whose OCR letters are garbled (Q1 0.500 - boxed; Q2 0.473 - boxed; Q3 0.405 - boxed; Q13 0.433 -
boxed; Q4 0.778, Q6 0.587, Q25 0.772 - mixed largely from the box content; plus the garbled-letter
Q7 0.341, Q8 0.293, Q19 0.904). No pair fails the reprint test - 26/26 pairs conform to the
formula, no exceptions.

**Trailing folio check (OCR number at 150dpi end): 798-849 all carry the correct page number.**
Question pages 798-849: exhaustive check, every page's trailing OCR integer equals the PDF page
index. Divider/prose page numbers in OCR: p788 "Glaucoma / 788", p797 "Questions / 797" (hires
only), pp.789-796 carry a standalone trailing integer each (789-796) - no contradiction anywhere.
This is a text-only folio check (OCR of the printed folio), not a pixel read of the red folio, so
1-2 pages whose OCR lacks the numeral (817, 827, 829, 831, 833, 835, 837; per marked-page tail
dump) are "folio absent in OCR", not "folio wrong" - listed in Needs image check for the visual
pass to complete.

## Unassigned pages

None. Every page 788-849 is either a divider (788, 797), lecture prose (789-796), or a member of
the 26 question pairs (798-849). The question run is page-continuous - no gap, no page shared
between two pairs, no trailing reprint beyond Q26 = 849 (page 850 is the next chapter's divider).

## Option counts per Q (OCR-derived; flagged ones marked)

The index `options` arrays are OCR reads; the option count printed on the two pages is recorded
here per pair, with every flagged page marked (visual confirmation needed):

- Q1 pp.798/799: 4 options (a-d), both pages. No flag.
- Q2 pp.800/801: 4 options (a-d), both pages (p801 index reads a 5th "E" - see below). No flag.
- Q3 pp.802/803: 4 options (a-d), both pages.
- Q4 pp.804/805: 4 options (a-d), both pages.
- Q5 pp.806/807: 4 options (a-d), both pages.
- Q6 pp.808/809: 4 options (a-d), both pages.
- Q7 pp.810/811: **flagged** - p810 is `thin` + `options-differ` and OCR sees only "b. 50%"
  (native) / "c. 30%" (hires); p811 `few-options` + `options-differ` and OCR sees only "a. 90%" and
  "b. 50%" (native) / "a. 90%" and "c. 30%" (hires). The printed question is "The trabecular pathway
  is responsible for what percentage of aqueous drainage?" and the explanation (p811) states 90%
  drains through the trabecular pathway - but how many options are physically printed is NOT
  decidable from OCR (only 2 letters visible per pass, and the two passes do not even agree on
  which two). True option count needs an image check.
- Q8 pp.812/813: **flagged** - both pages `few-options`-adjacent (`thin` on p812; p813 has 3 option
  letters in index) and OCR sees exactly 3 options (a. Papillomacular bundle, b. Superior arcuate
  fibers, c. Inferior arcuate fibers). Again, printed count not decidable - is a "d." line missing
  or is the question genuinely 3 options? Image check.
- Q9 pp.814/815: 4 options (a-d), both pages.
- Q10 pp.816/817: 4 options (a-d), both pages.
- Q11 pp.818/819: 4 options (a-d), both pages.
- Q12 pp.820/821: 4 options (A-D), both pages.
- Q13 pp.822/823: 4 options (A-D), both pages.
- Q14 pp.824/825: 4 options (A-D), both pages.
- Q15 pp.826/827: 4 options (A-D), both pages.
- Q16 pp.828/829: 5 options (A-E), both pages; p829 has `options-differ` because native OCR dropped
  letter B (line "B rml n inl m" - garbled; hires reads full "B. Normal tension glaucoma").
- Q17 pp.830/831: 4 options (A-D), both pages.
- Q18 pp.832/833: 4 options (A-D), both pages; p833 `options-differ` (hires reads only A, C, D -
  "B," comma is OCR-garbled in hires).
- Q19 pp.834/835: **flagged** - `few-options` + `options-differ` on p835 (p834 itself carries no flag); OCR
  reads only "8.20%", "c.30%", "0.50%" (letter/digit confusions: "8"/"A", "0"/"D") and both passes
  drop the first option line's letter. Printed count not decidable - the stem ("percentage of
  aqueous humor that is drained by the uveo scleral pathway?") plausibly had 4 lettered percentage
  options but OCR cannot settle it. Image check.
- Q20 pp.836/837: **flagged** (see case row below). OCR reads 4 options (A-D); **index `options-differ`
  on p837** (see Classifier mis-tags) and OCR visible lines identical on both pages. Count inferred
  4; image check to confirm the printed set (this page carried a yellow flag in grading; see
  Classifier mis-tags).
- Q21 pp.838/839: 5 options (A-E), both pages.
- Q22 pp.840/841: 5 options (A-E), both pages.
- Q23 pp.842/843: 5 options (A-E), both pages.
- Q24 pp.844/845: 5 options (A-E), both pages.
- Q25 pp.846/847: 4 options (A-D), both pages.
- Q26 pp.848/849: 5 options (A-E), both pages; p849 `options-differ` - hires index omits E (the
  "gag" tail token bug; see Classifier mis-tags).

## Option-letter case (OCR-derived, per pair)

- Q1-Q11 (pp.798/799-818/819): lowercase a-d throughout (Q1's letter row OCRs "I." + a-d; the a-d
  lines are lowercase on all 22 pages).
- Q12-Q26 (pp.820/821-848/849): uppercase A-D/A-E throughout (all pages; letter row OCRs A-E).
- **One OCR case transition between Q11 and Q12** (p818/819 lowercase -> p820/821 uppercase).
- The index `options` field is case-normalised to uppercase and was NOT used for case. Every
  transition is listed in Needs image check - OCR of letter shapes does not reliably distinguish
  print case.

## Explanation-box candidates (OCR word-delta, per pair)

Native word-count delta marked-over-unmarked for every pair, with the explanation text actually
found on the marked page (OCR):

- Q1 798->799: 28->56, +28 - box text "Central retinal vein occlusion (CRVO) can lead to retinal
  ischemia and release of VEGF... causing neovascular (rubeotic) glaucoma." **Likely box.**
- Q2 800->801: 22->44, +22 - "The definitive treatment for congenital glaucoma is surgical (e.g.,
  goniotomy or trabeculotomy). Medical therapy offers only temporary pressure reduction before
  surgery." **Likely box.**
- Q3 802->803: 23->54, +31 - "In primary open-angle glaucoma, the optic disc shows a large
  cup-to-disc ratio..." **Likely box.**
- Q4 804->805: 84->104, +20 - "Automated perimetry assesses visual field loss typical of
  glaucoma..." **Likely box.**
- Q5 806->807: 28->53, +25 - "The normal intraocular pressure (IOP) measured by applanation
  tonometry ranges between 10 and 21 mmHg..." **Likely box.**
- Q6 808->809: 45->76, +31 - "Open-angle glaucoma with high intraocular pressure and optic disc
  cupping is treated surgically by trabeculectomy..." **Likely box.**
- Q7 810->811: 15->41, +26 - "About 90% of aqueous humor drains through the trabecular
  (conventional) pathway into Schlemm's canal..." **Likely box** (p811).
- Q8 812->813: 20->69, +49 - "In glaucoma, the superior and inferior arcuate fibers are damaged
  first... The papillomacular bundle... is most resistant..." **Likely box** (p813).
- Q9 814->815: 48->72, +24 - "Elevated IOP, optic disc cupping, and peripheral field loss are
  classic features of chronic open-angle glaucoma..." **Likely box** (p815).
- Q10 816->817: 61->86, +25 - "Sudden painful red eye, halos around lights, and mid-dilated pupil
  are hallmarks of acute angle-closure glaucoma..." **Likely box** (p817).
- Q11 818->819: 48->69, +21 - "Automated perimetry is used to quantify visual field loss and
  monitor progression in glaucoma patients..." **Likely box** (p819).
- Q12 820->821: 27->27, +0 - clean reprint; no box text. **No box.**
- Q13 822->823: 38->88, +50 - "Medical treatment of acute angle closure glaucoma (to lower IOP,
  reduce pain, and clear corneal oedema in preparation for iridotomy). Topical medications...;
  Systemic medications: Carbonic anhydrase inhibitors... and Osmotic agents: Mannitol
  (contraindicated in cardiac patients) and glycerine (contraindicated in diabetics)." **Likely
  box** (p823).
- Q14 824->825: 41->73, +32 - "Anterior uveitis can be complicated by 2ry glaucoma, Posterior
  synechiae, Complicated cataract, Calcific band keratopathy... & Macular oedema..." **Likely box**
  (p825).
- Q15 826->827: 67->66, -1 - near-identical reprint; no box text. **No box.**
- Q16 828->829: 73->74, +1 - clean reprint plus a garbled B line; no box text. **No box.**
- Q17 830->831: 27->26, -1 - reprint; no box. **No box.**
- Q18 832->833: 26->26, 0 - reprint; no box. **No box.**
- Q19 834->835: 25->22, -3 - OCR-drop difference on a garbled page; no box text. **No box** (but
  see flag).
- Q20 836->837: 31->30, -1 - reprint; no box. **No box.**
- Q21 838->839: 44->44, 0 - reprint; no box. **No box.**
- Q22 840->841: 55->55, 0 - reprint; no box. **No box.**
- Q23 842->843: 47->47, 0 - reprint; no box. **No box.**
- Q24 844->845: 51->50, -1 - reprint; no box. **No box.**
- Q25 846->847: 121->154, +33 - explanation text present (but between/around the options in OCR
  order; see Notes). **Likely box.**
- Q26 848->849: 134->135, +1 - reprint; no box text on p849. **No box.**

Explanation-box presence (box vs plain reprinted paragraph) is OCR-invisible - every "Likely box"
above is an inference for the image check list, not a visual claim.

## Figure candidates

No figure, photograph, diagram, or image reference anywhere in the section's OCR text: the
section-wide grep for figure-language ("figure", "fig.", "shown", "arrow", "picture", "photograph",
"diagram", "image", "as seen", "illustrat", "drawing") returned zero figure references - the only
hits are lexical ("Cyclophotocoagulation", "Panretinal photocoagulation", "photophobia", "MRI
orbits", "CT scan of the head"), none of which describes a printed figure. The two figures route
in this section is therefore "no figure referenced in any of the 62 pages" - an absence-in-text
check only; OCR cannot see an embedded image, so an actual figure on any page is unresolved and
goes to the image check list.

## Classifier mis-tags

- **No `kind` mis-tag on any question page 798-849**: `question` on all 26 unmarked, `answered` on
  all 26 marked - perfect alternation, no error on any question pair (unlike sections 4/6/8 which
  had prose `kind` false positives). `answered:true` fires on all 10 `notes` pages (788-797) - the
  known prose false positive; `kind` stays "notes", so the question count is unaffected.
- **p810**: `kind:"question"` but TRUE Q7 unmarked; OCR reads only 1-2 option lines (15 words,
  `thin`) - tag fine, option OCR terrible. Flagged above.
- **p829 (Q16 marked)**: `options-differ` - native OCR misread option B as garbled "B rml n inl m"
  (hires reads it correctly: "B. Normal tension glaucoma"). Not a source anomaly.
- **p833 (Q18 marked)**: `options-differ` - hires dropped B ("B," comma); native reads all four.
- **p835 (Q19 marked)**: `few-options` + `options-differ` - letter/digit confusions; see Q19 above.
- **p837 (Q20 marked)**: OCR index carries `options-differ` yet both passes' visible lines equal
  p836 verbatim (A-D: Alpha blockers / Topical mydriatics / Mannitol / Glycerine). The flag is a
  classifier artifact (letter rows OCR'd identically on both pages; likely bleed-through of the
  marked/unmarked difference); flagged for image confirmation only.
- **p849 (Q26 marked)**: `options-differ` - hires dropped E; the native pass reads all five. The
  stray tail token "gag" on p849 (and "g 44" on p844, "gyo" on p830, "goy" on p807, "gos" on p805,
  "gog" on p808/809, "g 04" on p804) is a print artifact (likely the printed folio digit
  misread), not OCR damage - noted as a figure-candidate negative, not a layout claim.
- Classifier totals for the range: `kind` {notes 10, question 26, answered 26} = 62, exactly the
  true 10/26/26. Accounting check: 26 unmarked `question` + 26 marked `answered` = 52 question
  pages, matching the continuous 798-849 run. No `other` page in range.

## Needs image check (OCR cannot settle)

- **True option count on pp.810/811 (Q7)** - the two OCR passes disagree on which two letters are
  printed ("b. 50%" native vs "c. 30%" hires on p810; "a. 90% / b. 50%" native vs "a. 90% /
  c. 30%" hires on p811). How many options the page physically prints (2, 3, or 4) is not
  decidable from text. **The explanation text asserts the tract drains 90% - the printed option
  whose letter the key highlights is OCR-invisible; no key is stated here.**
- **True option count on pp.812/813 (Q8)** - exactly 3 option lines OCR'd on both pages ("a.
  Papillomacular bundle, b. Superior arcuate fibers, c. Inferior arcuate fibers"); is a "d." line
  missing from the print (printed/cut) or is the question genuinely 3-option?
- **True option count on pp.834/835 (Q19)** - only 3 lettered lines OCR'd, letters read as
  digits; image check for the "A." first option and the real "D." letter.
- **p837 (Q20 marked) options-differ flag** - the visible lines equal p836 exactly; confirm the
  print really has the four lettered options (classifier artifact vs source anomaly).
- **p829 (Q16 marked) B option** - native OCR garbled "B"; hires reads "B. Normal tension
  glaucoma"; confirm the physical print reads "B. Normal tension glaucoma".
- **p833 (Q18 marked) B option** - hires dropped the B (comma-garbled); native reads all four.
- **p849 (Q26 marked) E option** - hires dropped E ("gag" tail token); native reads all five;
  confirm E is printed.
- **Option-letter case transition at Q11/Q12** (p818/819 lowercase -> p820/821 uppercase) and the
  continuity of upper case Q12-Q26 and lower case Q1-Q11 - OCR cannot settle print case.
- **Explanation-box presence vs plain text** on the 16 candidates Q1-Q11, Q13-Q14, Q25 (marked
  pages 799, 801, 803, 805, 807, 809, 811, 813, 815, 817, 819, 823, 825, 847), and absence on
  Q12, Q15-Q24, Q26.
- **Q25 (p847) explanation layout** - OCR interleaves the explanation with the options ("(Sudden
  onset of severe eye pain + nausea/vomiting + ..." between "A. Primary open angle glaucoma" and
  "B. Conjunctivitis"); confirm whether the box sits between/around options or is a printed box.
- **Folio absent in OCR on marked pages 817, 827, 829, 831, 833, 835, 837** (only) - the printed
  folio is not in the OCR text of those pages; the visual pass should confirm each page's printed
  numeral (no PDF-index conflict was found anywhere).
- **Stray tail tokens** "g 04"/"gos"/"goy"/"gog"/"gyo"/"g 44"/"gag" on pp.804, 805, 807, 808-809,
  830, 844, 849 - print artifact or OCR garbage; image check only if it matters for layout.
- **Printed question numbers** "I." (Q1), "I O." (Q10), "I l." (Q11) - OCR ambiguity between
  printed "1.", "10.", "11." and roman-style OCR; the pairs' numbering was read positionally and
  never used for count.
- **Highlighted key position on each marked page 799-849** - OCR cannot see highlighted marks; the
  keyed option for all 26 questions is unstated here (per AGENTS.md, never state a key).
- Whether any embedded figure exists on any page in 788-849 (text grep is clean; pixels not
  checked).

## Anything unresolved

- **Duplicate printed "20" (pp.836/837 vs 838/839)** recorded as a source anomaly; whether the
  source intends the second "20" to be "21" (making the printed run 1-26) is not decidable from
  text - staging should key off position (26 questions), not printed numbers (same rule as s10's
  duplicate "12" and s05/s06 conventions).
- **Q12 (pp.820/821) = Q18 (pp.832/833)**: identical stem and options, exact reprint under two
  numbers; both masquerade as "characteristic of glaucoma" field-defect questions. Whether the
  source intends a duplicate or an editorial repeat is not decidable from text - staging will
  stage both (per the "fold vs capture" rule: same wording means both must be captured, not folded
  silently; the s04 keys file captured the Q2/Q4 near-duplicate rather than folding).
- **Q13 (pp.822/823) = Q20 (pp.836/837)**: identical stem and options (both with explanation
  boxes) under two numbers - same handling as above.
- Whether the marked pages really carry a key/highlight on the 26 `answered` pages - only an
  image settles it (image-check list), not asserted here.
- No key extraction was performed (keys are never stated for this section - OCR cannot see the
  highlighted marks; `keypos.py` was not run, consistent with calibration-only scope).
- No medical content review was performed; OCR-vs-print typos were not deliberately searched for.

## Byte size and line-ending check

All files written by this job (this note and the scratchpad report) are LF-only;
`tr -cd ''\r'' < "progress\ophtho-endpoint-s11-calibration-2026-09-15.md" | wc -c` must print 0.
