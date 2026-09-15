# Ophthalmology Endpoint — Section 14 Calibration, 2026-09-15

Section 14 ("Neuro-ophthalmology", PDF pages 982–1065 of `Semester 8\Opthalmo\Questions\Opthalmology
endpoint.pdf`, confirmed against `tools\bank-harness\sec-oph.js` entry 14: `pages: [982, 1065]`) was
calibrated TEXT-ONLY from the OCR search index (`content\ophtho\qb-pages\ocr\ep\index.json`, read once
at start) and the `pNNNN.txt` files. No page was rendered and no image was viewed (the model has no
vision; render attempts are refused by the gateway). Anything that only an image can settle is listed
in "Needs Image Check", which is the correct output for it, not a failure. The note was written
incrementally from an early skeleton: the range/formula/question-count findings landed first, then the
per-question option/case/box analysis, and that order of confidence is preserved below.

## Range and Divider Pages

| PDF pages | Content | Confirmed from |
|---|---|---|
| 982 | Chapter divider: "Neuro-ophthalmology" (2 words OCR, `thin` + `passes-differ`) — ends mid-word "Neuro-ophthalmolog" in OCR text, same truncation both passes; the page is the section-14 divider | p0982.txt |
| 983–1004 | Lecture prose, 22 pages (28–84 OCR words), incl. two prose tables (NAION vs A-AION on p1008, optic-atrophy types on p1010) | pp.983–1004 (see Classifier Mis-tags for the 1005–1008 block) |
| 1005–1008 | Lecture prose, continuation of the ION lecture (A./B. subsections and a comparison table) — **mis-tagged `kind:"answered"`**, true content is prose | pp.1005–1008 read in full |
| 1009–1012 | Lecture prose: optic-disc-disease comparison table, optic atrophy types, visual pathways & field defects | pp.1009–1012 |
| 1013 | Divider page: "Questions" (1 word, `thin` + `passes-differ`) | p1013.txt |
| 1014–1065 | MCQs, one per question, printed as adjacent pairs (unmarked then marked) — 26 questions | see arithmetic and per-pair sections below |
| 1066 | After-range (section 15, squint, entry 15 `pages: [1066, 1097]`) — not read; clean boundary assumed only from `sec-oph.js`, not confirmed | — |

Printed page number equals PDF page number on every page read (folios "982"–"1065" appear at the end
of each OCR page and match the PDF index used to read the file; no offset was seen anywhere).

## Question Count and How It Was Derived

The question divider (p1013) sits at 1013 and the section's declared end is 1065, so on the s03/s04
shape the natural guess is base+2n with base = 1013: unmarked on 1013+2n, marked on 1014+2n — 26
questions (52 pages: 1014–1065 = 52). **This was derived, then tested page by page**: the discontiguous
classifier block (1005–1008 tagged `answered`) was read and shown to be prose — not questions — so the
question run must start after the Questions divider at 1013. Q1 = 1014/1015, Q26 = 1064/1065, with
Q26's marked page (1065) exactly `sec-oph.js`'s declared last page. 52/52 question-range pages are
accounted for (26 unmarked + 26 marked), so the count is 26, not the 76 the `answered` tag count alone
would suggest (the classifier's `answered` count of 26 in range is inflated by the 4 false positives).

**Page formula: Question n is unmarked on PDF page 1013+2n and marked on PDF page 1014+2n.**
(Equivalently, n on 1014+2(n−1) / 1015+2(n−1).) Q1 = 1014/1015, Q26 = 1064/1065, and the last pair
lands exactly on the section's declared last page with no trailing reprint within range.

**Every pair was tested directly** — all 26 unmarked and all 26 marked pages were read in full from the
OCR text (both passes), a full coverage unlike the sampled sections 3–4. For every pair the unmarked
page carries exactly that question's stem + options, the marked page reprints the stem + options
verbatim and (for every pair except Q17–Q20) adds an explanation tail — see Explanation Boxes. The
closing test "every page accounted for" holds: 52 question pages = 26 stems + 26 marked, no orphan and
no duplicate question text anywhere in range. No stem references a previous question ("previous case"
callbacks) in any of the 26.

## Unassigned Pages and What They Are

- 1005–1008: lecture prose continuation of the ischemic optic neuropathy notes (A. NAION / B. Arteritic
  GCA), mis-tagged `kind:"answered"` — the classifier read the lettered A./B. outline and comparison
  table as MCQ options and yellow text. Not questions; assigned to prose.
- 1003 (`answered:false` in the raw boolean) and 1004: last two prose pages before the Questions
  divider; correctly `kind:"notes"`.
- All 52 pages 1014–1065 are assigned to 26 named pairs (below). There is no page left unassigned.

## Option Counts per Q (OCR-derived)

All from the OCR index `options` arrays plus direct page reads (both passes agree unless noted); the
index normalises letters to uppercase, so the counts below are counts, not case. The flagged ones are
marked; the others were read on both pages.

- Q1–Q7 (pp.1014–1027): 4 options (a–d).
- Q8 (pp.1028/1029): **3 options (a–c) confirmed on both pages** — both pages print only a., b., c.;
  `few-options` flag on p1029 is correct, and the unmarked p1028 also has 3. Consistent on both OCR
  passes.
- Q9 (pp.1030/1031): 4 options (a–d) on both pages (native pass); the 150dpi pass of the marked page
  mis-reads option b as "b," (comma) and the index flags `options-differ` (native ["A","B","C","D"],
  hires ["A","C","D"]). The native read, the unmarked page, and the concept all give 4 options. Needs
  image check.
- Q10 (pp.1032/1033): 4 (a–d).
- Q11 (pp.1034/1035): 4 (a–d), both pages and both passes.
- Q12 (pp.1036/1037): 4 (a–d).
- Q13 (pp.1038/1039): 4 (a–d).
- Q14 (pp.1040/1041): 4 (a–d).
- Q15 (pp.1042/1043): 4 (a–d).
- Q16 (pp.1044/1045): 4 (A–D) on the unmarked page; the marked page's 150dpi pass drops letter B
  ("B Ar II-R…" garbled); native pass reads 4 (["A","B","C","D"]). Index flags `options-differ`
  (native 4, hires 3). Needs image check on p1045 option B.
- Q17 (pp.1046/1047): 4 (A–D) on the unmarked page; the marked page's OCR dropped the "C. Horner
  syndrome" line in BOTH passes (native ["A","B","D"], hires ["A","B","D"], `few-options` flag). Needs
  image check on p1047 option C.
- Q18 (pp.1048/1049): **4 options (A–D)** on both pages, and a **source-print duplicate: A and D both
  read "Left abducent palsy"** verbatim (both OCR passes, both pages). The count is 4; the duplicate is
  a printer's error to record, not something to "correct". Needs image check (see Anomalies).
- Q19 (pp.1050/1051): 4 (A–D).
- Q20 (pp.1052/1053): 4 (A–D).
- Q21 (pp.1054/1055): 4 (A–D) on both pages; the marked-page native pass writes option A as "A- Visual
  field test" (dash instead of dot), the 150dpi pass restores "A." — the index reports 4 on both.
- Q22 (pp.1056/1057): 4 (A–D); marked-page native has "B. 6th nerve. palsy" (stray period), hires
  restores "B. 6th nerve palsy".
- Q23 (pp.1058/1059): 4 (A–D).
- Q24 (pp.1060/1061): 4 (A–D); marked-page hires mangles option D ("ophthalmoloxy and neur010kY
  clinic") — the native and unmarked reads agree on 4.
- Q25 (pp.1062/1063): 4 (A–D), both pages; the marked page's hires pass drops the inline box text into
  the middle of the options (see Explanation Boxes) but the count is 4.
- Q26 (pp.1064/1065): 4 (a–d).

**No 5-option question exists in this section** (unlike s04's Q18). Q8 is the only genuinely-3-option
question; every other `few-options`/`options-differ` flag traces to OCR missing a line on the marked
page, the duplicate-letter Q18, or the inline box of Q25.

## Option-Letter Case (OCR-derived)

Q1–Q15 and Q26 print lowercase a–d (the stem-preceding "I."/"I O."/"I I." OCR artifacts are Roman
numeral misreads of the printed question number, not option letters). Q16–Q25 print uppercase A–D on
both pages of every pair (except the OCR-dropped letters listed above, which are not case evidence).
So there is a **single transition between Q15 and Q16 (lower → upper)**, plus a **second transition
between Q25 and Q26 (upper → lower)** at the end. Both transitions, and all per-page case claims, are
OCR reads of letter shape and are in Needs Image Check (the index `options` field normalises to
uppercase and was not used for case).

| Q range | Case |
|---|---|
| Q1–Q15 (pp.1014–1043) | lowercase a–d |
| Q16–Q25 (pp.1044–1063) | uppercase A–D |
| Q26 (pp.1064/1065) | lowercase a–d |

## Explanation Boxes (OCR word-delta candidates, per Q)

Marked-page native word count → over its unmarked twin, plus the box text found (or not). Boxes on
this section are **not** a clean prefix run: Q1–Q16 carry visible explanation tails on the marked
pages, **Q17–Q20 show no box text in OCR**, and Q21–Q23 and Q25 carry boxes again, while **Q24 and
Q26 show no box** (Q24's marked page = unmarked word count 122→122; Q26 = 78→77).

- Q1 16→48, box (Consecutive optic atrophy follows degenerative retinal diseases…)
- Q2 20→45, box (A pituitary adenoma compresses the optic chiasm…)
- Q3 22→47, box (Horner syndrome causes miosis…)
- Q4 23→53, box (An afferent pupillary defect (Marcus Gunn pupil)…)
- Q5 23→40, box (A left optic tract lesion affects the right visual fields…)
- Q6 20→47, box (A Marcus Gunn pupil (relative afferent pupillary defect)…)
- Q7 50→76, box (Aneurysm compressing the oculomotor nerve…)
- Q8 29→65, box (This presentation suggests Horner syndrome…)
- Q9 41→66, box (Horner syndrome is characterized by ptosis, miosis, anhidrosis…)
- Q10 37→63, box (Giant cell arteritis (temporal arteritis) presents with vision loss…)
- Q11 44→65, box (Bilateral blurred disc margins…papilledema)
- Q12 20→55, box (Intracranial pressure causes downward traction on both abducens nerves…)
- Q13 15→35, box (Organophosphorus compounds inhibit acetylcholinesterase…)
- Q14 41→62, box (Amaurosis fugax is transient monocular vision loss…)
- Q15 50→84, box (This condition results from sudden interruption of blood supply…)
- Q16 30→61, box (Argyll-Robertson pupils…tertiary syphilis with midbrain affection…)
- Q17 40→41, **no box text found in either pass**; dice 0.897/0.907 (marked ≈ unmarked reprint). Needs image check.
- Q18 50→50, **no box**; dice 0.981/0.951. (Both options A and D are the same printed text.)
- Q19 48→48, **no box**; dice 1.000/0.981.
- Q20 55→55, **no box**; dice 1.000/0.983.
- Q21 99→116, box (Visual field testing detects the characteristic arcuate scotomas of glaucoma…); native marks option A with a dash, hires with a dot.
- Q22 95→117, box (**inline**: "Sixth nerve palsy causes horizontal diplopia and limited abduction…" is split in the middle of the option list in the native OCR; hires restores it above the options); box present.
- Q23 92→124, box (Ptosis with a dilated, poorly reactive pupil indicates parasympathetic involvement…)
- Q24 120→120, **no box**; dice 0.984/0.975; marked page ≈ unmarked reprint (the "IC61"-style folio is a page-number artifact).
- Q25 87→118, box (**inline** in the native pass between B and C: "Proptosis, lid retraction, and restricted upgaze…"; hires also drops it into the option list); box present. This is why the classifier's hires read flags 3 options on p1063.
- Q26 78→77, **no box**; dice 0.981/0.988.

The word-delta test was run on all 26 pairs (the marked page's box = a 15–46 word jump; every
no-box page shows 0–1 word delta and ≥0.9 dice vs its unmarked twin). Box presence/absence is an OCR
inference; every boxed claim is in Needs Image Check (all 23 pairs), because OCR text cannot prove a
printed box. Direct box-text evidence exists in the `.txt` files, which is why Q1–Q16, Q21–Q23, Q25
are "with box text found" rather than "inferred" — but the printed-box shape itself (rectangle, shadow,
etc.) is only an image fact.

## Figure Candidates

A grep for figure-referencing language ("figure", "shown", "arrow", "picture", "photograph", "diagram", "image", "as seen", "x-ray", "scan") across all 84 in-range `.txt` files returned **zero matches** (no line matched any of the terms). No stem
or marked page references an image or "as shown". OCR text cannot see an embedded image, so this is a
text-based absence check only; all 52 question pages plus the prose pages remain in Needs Image Check
for actual figures.

## Classifier Mis-tags

- **pp.1005–1008 are the dirt: `kind:"answered"`** on all four, but all four read as continuation
  lecture prose: p1005 "ISCHEMIC OPTIC NEUROPATHY (ION) / A. Non-Arteritic ION…", p1006 "B. Arteritic
  (Giant Cell Arteritis—related) AION", p1007 signs/investigations/treatment bullets, p1008 a NAION
  vs A-AION table. The classifier saw the A./B. letters and the table's leading labels as MCQ options
  (p1005 `option A`, p1006 `option B`, p1007 `option B`, p1008 `option A`, all `few-options`) — the same
  false-positive mechanism sections 1/3/4 saw in lecture ranges. **The `answered` tag count of 26 is
  therefore 4 too high**; the true question count comes from the page-arithmetic test (26 pairs), not
  from the tags.
- **pp.1003 (`answered:false`) and 1004** — prose, correct `kind:notes`; no mis-tag.
- **p1029 (`few-options`, 3 options)** — correct: Q8 genuinely has 3 options on both pages.
- **p1045 (`options-differ`, hires 3)** — OCR dropped option B on the marked page; 4 options are on
  both pages. Tag artifact, not real.
- **p1047 (`few-options`, 3)** — OCR dropped "C. Horner syndrome" on the marked page; 4 on the
  unmarked page. Needs image check (likely a real 4-option question).
- **p1049 (no flag)** — Q18's marked page, 4 options, but A and D are identical text.
- **p1055 (no flag in index)** — Q21's marked page, 4 options; native writes "A-" instead of "A.".
- **p1063 (`options-differ` in the 150dpi read)** — Q25's marked page; the inline box text confuses the
  option extraction, not a real multi-option question.
- All 26 unmarked stem pages and the 25 remaining marked pages are tagged `question`/`answered`
  exactly as the pair arithmetic predicts. The closing test (every page accounted for) passes only
  after the 4 prose false-positives are excluded from `answered`.

## Anomalies

- **Q18 source-print duplicate: option A and option D both print "Left abducent palsy"** (verbatim on
  both pages, both OCR passes). The question is otherwise a 4-option question; the duplicate is a
  printer's error. Recorded, never "corrected" — the exact printed text must be preserved (AGENTS.md
  rule 4/5).
- **Box pattern is non-monotonic**: Q1–Q16 boxed; Q17–Q20 unboxed; Q21–Q23 boxed; Q24 unboxed; Q25
  boxed; Q26 unboxed. No single cutoff like sections 3/4 had. Regardless of the box shape, every boxed
  marked page still reprints the complete stem + options (multi-line boxes sit between options in OCR
  on Q22/Q25, but the four options are all present).
- **Question-number OCR artifacts**: Q10's stem is read as "I O." and Q11's as "I I."/"I l." in the
  OCR — the stem text after the number is clear and unique, so the numbers themselves are identifiable;
  these are OCR noise, not a claim that Q10/Q11 are numbered differently.
- Numbering is otherwise sequential 1–26 with no out-of-sequence pair anywhere.

## Needs Image Check

- Option count on the flagged pages: Q8 p1029 (a–c only — likely genuinely 3); Q9 p1031 (native
  "b," vs hires missing b); Q16 p1045 (option B garbled in hires); Q17 p1047 (option C missing in both
  passes); Q18 pp.1048/1049 (option A vs D — confirm the duplicate print and whether letters really are
  "A" and "D" or one is a different letter OCR merged); Q21 p1055 ("A-" vs "A."); Q22 p1057 (stray
  period in B, hires recovery); Q24 p1061 and Q25 p1063 (hires option D mangling); plus every other
  marked page for exact printed option text.
- **Option-letter case**: transition Q15→Q16 (lower→upper) at pp.1043/1044, and Q25→Q26 (upper→lower)
  at pp.1063/1064; also confirm Q1–Q15 really are lowercase and Q16–Q25 really uppercase. OCR cannot
  settle print case.
- **Explanation-box presence on all 23 boxed pairs** (Q1–Q16, Q21–Q23, Q25) and **absence on Q17–Q20,
  Q24, Q26** — word deltas and box text are OCR-strong but the printed box shape needs a visual pass.
- **Figure presence on all 84 pages** (esp. the 52 question pages): no image-referencing text exists,
  but OCR cannot see an image.
- **p1049 (Q18) and p1047 (Q17)**: whether the marked pages really print 4 options (Q17) and the
  A/D duplicate (Q18) — highest-priority pages.
- The 4 prose pages 1005–1008: confirm there is no MCQ hidden among the A./B. outline text (the letters
  are subsection headers, but that is an OCR-text judgment).

## What Was Not Checked

- **Key extraction (keypos or visual): out of scope for calibration** — no key is asserted anywhere;
  calibration setup only, per the brief.
- No medical content validation; no attempt to normalise any printed number/dose/unit (AGENTS.md
  rules 4–5): everything above is transcription from OCR text of page structure.
- OCR artifact tails ("IC60"–"IC65" on pp.1060–1065, "I O."/"I I.", stray periods in option B of
  Q22) are reported as artifacts, not layout claims.
- After-range page 1066 was not read — the clean ending rests on the pair landing exactly on the
  declared last page (1065), which is strong but is not a direct read of 1066.

## Byte Size and Line-Ending Check

To be run after this file is written: `tr -cd '\r' < "progress\ophtho-endpoint-s14-calibration-2026-09-15.md" | wc -c` — must print 0.
