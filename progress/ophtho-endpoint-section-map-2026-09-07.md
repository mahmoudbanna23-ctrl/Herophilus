# Ophthalmology endpoint — section map and page offsets (2026-09-07)

Source: `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf` — 2,442 pages, 293 MB, A4.
Produced by the bounded mapping job the scoping notes
(`ophtho-endpoint-scoping-2026-09-06.md`) asked for. **Read this before rendering any page of
that book again** — the front matter and the checkpoints below have already been read.

## The book has a table of contents

Printed on PDF pages 2–3, titled "Contents". Transcribed verbatim below; page numbers are the
book's own printed numbers. PDF page 1 is the cover ("Ophthalmology AlexMed Endpoints"), p.4 is
"Important Tips", p.5 is an Arabic study-dua, and content begins at p.6.

| # | Section | Printed pages |
|---|---|---|
| 1 | Examination of the Eye | 6–133 |
| 2 | Optics and Errors of Refraction | 134–213 |
| 3 | Orbit | 214–272 |
| 4 | Lacrimal System | 273–342 |
| 5 | Eyelids | 343–416 |
| 6 | Conjunctiva | 417–522 |
| 7 | Sclera | 523–559 |
| 8 | Cornea | 560–638 |
| 9 | Lens | 639–717 |
| 10 | Uveal Tract | 718–787 |
| 11 | Glaucoma | 788–849 |
| 12 | Vitreous | 850–879 |
| 13 | Retina | 880–981 |
| 14 | Neuro-ophthalmology | 982–1065 |
| 15 | Squint | 1066–1097 |
| 16 | Pediatric Ophthalmology | 1098–1149 |
| 17 | Malignancies of the Eye and its Adnexa | 1150–1181 |
| 18 | Ocular Trauma | 1182–1244 |
| 19 | Ocular Manifestations of Systemic Conditions and Diseases | 1245–1331 |
| 20 | Drugs and the Eye | 1332–1373 |
| 21 | Keys for Diagnosis | 1374–1390 |
| 22 | Model Exam 1 | 1391–1545 |
| 23 | Model Exam 2 | 1546–1700 |
| 24 | Model Exam 3 | 1701–1856 |
| 25 | Model Exam 4 | 1857–2022 |
| 26 | Model Exam 5 | 2023–2175 |
| 27 | Summer Exam | 2176–2330 |
| 28 | Exam Night Review | 2331–2442 |

29 entries in the TOC's own numbering if the two-line title (19) is counted once; 21 chapters
then 7 exam-shaped sections.

## ⚠️ The printed page number is NOT always the PDF page number

Verified by rendering individual pages and reading the small red number at bottom-right:

| PDF page | Printed | Offset | What it is |
|---|---|---|---|
| 1–12 | 1–12 | 0 | front matter, then start of ch.1 |
| 880 | 880 | 0 | section opener "Retina" — matches TOC |
| 1391 | 1391 | 0 | section opener "Model Exam 1" — matches TOC |
| 1600 | 1600 | 0 | content |
| 1860 | 1860 | 0 | content |
| 2100 | 2100 | 0 | content |
| 2150 | 2150 | 0 | content, Q65 |
| **2170** | **2171** | **+1** | content, Q75 |
| 2175 | 2176 | +1 | section opener "Summer Exam" |
| 2176 | 2177 | +1 | content, Q1 |
| 2180 | 2181 | +1 | content, Q3 |
| 2200 | 2201 | +1 | content |
| 2280 | 2281 | +1 | content |
| 2331 | 2332 | +1 | content |

**The offset flips 0 → +1 somewhere in PDF pages 2151–2170**, inside Model Exam 5. Not pinned
further; five samples bracket it, they do not locate it. From the flip onward,
`PDF page = printed page − 1`.

**FLIP PINNED 2026-09-21: it sits at PDF 2151.** PDF 2150 prints 2150 (last question 65); PDF 2151
prints 2152 (first question 66) — printed page 2151 is ABSENT from the scan. It was the marked
(answer) page of Model Exam 5 Q65: PDF 2150 is Q65's unmarked page and no marked twin follows, so
the PDF prints no key for Q65. Offset 0 through PDF 2150, +1 from PDF 2151 onward. Measured
from the s26 Codex staging `printed_page` column (2145–2170, every staged page consistent) and
confirmed by an independent Claude read of the rendered pages 2149–2152.

**Consequence:** the closing page-coverage test compares `p.<n>` in `source` fields against
OCR-answered pages. Past the flip those two numberings disagree by one. Whichever chat owns the
exam half must pin the exact flip page — roughly four more single-page renders across 2151–2170 —
**before** it writes any `source` value beyond page 2150.

## Proposed seam: PDF 1390 | 1391

Chapters and exams, which is a real section boundary and lands in the verified zero-offset zone.

- **Half A — chapters:** PDF 6–1390 (1,385 pages), sections 1–21. Offset 0 throughout, confirmed
  at pages 6, 880 and 1391.
- **Half B — exams:** PDF 1391–2442 (1,052 pages), sections 22–28. Offset 0 until the flip in
  2151–2170, then +1.

Page-count midpoints were considered and rejected: the nearest one (~1224) falls inside "Ocular
Trauma", and the scoping notes require the seam to be a section boundary so each half owns a
contiguous, disjoint range for the coverage test.

## Still blocking, unchanged from the scoping notes

- **No ophthalmology toolchain exists.** Every script in `tools\bank-harness\` is pediatrics.
  A validator, splice and merge for ophthalmology — or one toolchain with a part flag — has to
  exist before either half writes a question.
- OCR is the shared bottleneck and does not parallelise; exit 429 is a rate limit.
- Ophthalmology House is closed at 1,598; endpoint/House overlap is chapter-shaped and will land
  almost entirely in half A. Nothing folds mid-stream.

## Method note

Front matter rendered at 110 dpi, checkpoints at 100 dpi, into the session scratchpad; read by
Sonnet subagents that returned text only, per `CLAUDE.md` §5. The source PDF was never modified.
