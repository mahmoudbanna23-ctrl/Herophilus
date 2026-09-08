# Ophthalmology Endpoint — Section 1 Calibration, 2026-09-08

On 2026-09-08, section 1 of the ophthalmology endpoint book ("Examination of the Eye", PDF pages 6–133 of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`) was OCR'd and its page classifier was calibrated by visually sampling 27 of the 129 pages (about 21%), including 100% of the 18 pages carrying a flag.

## OCR Route — Cheaper Than Documented

`tools\ep-index\run-all.ps1` and its scripts take the PDF path, page range and output directory as arguments without hardcoding any subject. The book carries one native embedded JPEG per page, so `extract.py` pulls that losslessly rather than rasterising: 129/129 native JPEGs, 0 fallbacks, 9 seconds. OCR ran on Windows.Media.Ocr offline (free tier, no cloud calls): two passes (native then 150 dpi), 129/129 each, 0 errors, 4 s and 7 s respectively. **No WPS call was made, so there were no cloud calls, no rate limits and no 429s.** This OCR route is cheaper than the WPS one `MEMORY.md` documents; it emerged by checking the tools' parameters first, not as a deviation.

Output is `content\ophtho\qb-pages\ocr\ep\` — 129 `pNNNN.txt` files (p0006–p0134) plus `index.json` at 26,992 bytes, 129 rows, pure LF, no carriage returns.

## Classifier Calibration — Errors and Pattern

`index.json` tabulates as:

| kind | count |
|---|---|
| notes | 52 |
| answered | 40 |
| question | 36 |
| other | 1 |

Flags present on 18 rows: `thin` 4, `few-options` 7, `options-differ` 9.

Of 129 rows, 43 show a mismatch between the `kind` field and the boolean `answered` field, confirming `kind` uses more signal than the yellow-pixel count alone.

### Sample findings

27 pages sampled, 7 classified wrong. **All errors erred in the same direction: too generous.** Zero errors in the too-strict direction were found.

| Finding | Count |
|---|---|
| Wrong pages (PDF numbers) | 9, 15, 16, 17, 23, 36, 43 |
| Flagged pages sampled | 18 |
| Flagged pages wrong | 6 (33% of flagged) |
| Non-flagged pages sampled | 9 |
| Non-flagged pages wrong | 1 (page 36) |

**The pattern is sharp and page-bounded, not random.** Every false positive sits in PDF pages 6–43, inside the lecture section. Every page checked from PDF 64 onward — 14 of 14 — was classified correctly.

### Cause and Proposed Fix

In the lecture section (PDF 6–43), highlighted section headings and highlighted key terms, combined with lettered or numbered outline items (A., B., 1., 2.), cross the yellow≥750 threshold and trip the option-letter detector on pages that are pure prose. In the question section (PDF 65–133), the same threshold worked every time, because the yellow highlight always marks a genuine selected option.

**Proposed fix:** require the highlighted run to be co-located with a bare option letter at the left margin (a line beginning `A.` or `a)` immediately before the highlight), rather than accepting any highlighted span anywhere on the page. Restricting scoring to pages 64 and above would also have worked for this section, but that is a carve-out rather than a fix.

### Note on Threshold Transfer

The threshold was calibrated on 2026-09-02 against the **pediatrics** book's own section 1. It should not be assumed to transfer to the remaining ophthalmology sections — each one deserves the same check before its `answered` set is trusted.

## Section Structure

| PDF pages | Content |
|---|---|
| 6–63 | Lecture prose: title and topic dividers, dense prose, bold headings highlighted yellow, numbered and lettered outline lists, occasional anatomy tables and figure insets. **No MCQs.** |
| 64 | Divider page: "Questions" |
| 65–133 | MCQs, one per page, printed as adjacent pairs |
| 134 | Clean section-2 divider: "Optics and Errors of Refraction" (outside section 1) |

Each question is printed twice on consecutive pages: the **odd** page carries the bare unmarked question with four lettered options A–D, and the **even** page repeats the same question with the correct option highlighted in yellow (occasionally cyan) and underlined. An explanation box sometimes appears below the marked option on the answered page — present on PDF 86, absent on PDFs 90, 102, 110, 116, 120. No figures were observed on any sampled question page.

### Question Arithmetic

**Question *n* is unmarked on PDF page 63 + 2*n* and marked on PDF page 64 + 2*n*.** Q1 is pages 65 and 66; Q34 is pages 131 and 132. Confirmed against sampled pages: Q11 marked on 86, Q13 on 90, Q19 on 102, Q23 on 110, Q26 on 116, Q28 on 120, Q34 on 132.

**Section 1 holds 34 questions.** The true set of answered pages is the 34 even pages from 66 to 132 — not the classifier's 40. The six extra pages the classifier claims are the lecture-section false positives listed above.

### Anomaly

Question 34 is printed on three consecutive pages, not two: PDF 131 unmarked, 132 marked, and 133 unmarked again with identical text. This is a duplication in the source material, not a classifier defect; each of the three pages is individually classified correctly for what is actually printed on it.

Page 133 is the last page of section 1 and page 134 is a clean section-2 divider, which matches the printed table of contents exactly.

## What Was Not Checked

102 of the 129 pages were never looked at. Every `notes`, `question` and `answered` page outside the 27-page sample is unverified. Whether the false-positive pattern continues through PDF 44–63 was not directly checked — only 12 pages were sampled from the lecture range (PDFs 6, 7, 9, 10, 13, 15, 16, 17, 20, 23, 36, 43). The 43 `kind`-versus-`answered` mismatches were not individually re-verified beyond the sampled subset.

Note for downstream tools: `pagecov-oph.js` will need to adjudicate the classifier's 40 against the true 34, with the six false-positive page numbers recorded.

## Key verification, 2026-09-09

All 34 keys staged in `oph-ep-p1-s01-exam-eye.array.js` were produced mechanically by
`tools\ep-index\keypos.py` from the yellow-highlight pixel measurement, then checked against every
marked page by independent visual reads, done blind — the readers were not shown what the tool had
concluded, so agreement between the two means something.

**keypos scored 32 correct of the 33 keys it produced, and abstained once, correctly.** Stated
honestly: one wrong key in 33, about 3%.

Both of its two failures — the abstention and the wrong key — landed on pages its own diagnostics
had already flagged as unusual (an abstention reason, and a `litBands` count of 2 instead of the
usual 1). That is the useful property: keypos does not fail silently, it flags the pages worth a
second look. But it is not, on this evidence, safe to run unsupervised — a 3% key error rate spread
across a 2,442-page book is a lot of wrong answers, and the flags only narrow where to look; they do
not remove the need to look.

**The cyan finding (n=24, p.112).** The highlight marking the key on this page is cyan, not yellow.
keypos measures only yellow pixels, so it correctly found no yellow below the title and abstained
(`reason:"no-yellow-below-title"`). Every later section should expect the same abstention wherever
the book switches to a cyan highlight, and an abstention there is the tool working correctly, not a
defect.

**The p.124 error (n=30).** keypos reported the key one option early — index 0 (A) where the correct
answer, confirmed by two independent visual reads, is index 1 (B). Options A and B on this page are
near-mirror sentences, differing only in swapping "directly" and "consensually", which is exactly
the kind of page where an off-by-one band read is invisible to anyone skimming the text rather than
the highlight. keypos's own diagnostics reported two lit bands (`litBands:2`) on this page; a third
independent reader found only one highlighted region, so the second band keypos counted was an
artifact — most likely a two-line highlight run counted as two separate bands, which then shifted the
band-to-option arithmetic by one. The stored `key` has been corrected to B; the `keypos` diagnostics
object was left untouched as the record of what the tool actually reported.

**p.122 (n=29) is the control case.** keypos also reported two lit bands here (`litBands:2`) and was
correct — the confirmed key matches what keypos staged. A two-band report is therefore a reason to
look closer, not by itself a verdict of error; p.124 shows the failure mode, p.122 shows the same
signal producing a correct read.

**Numbering cross-check.** The printed stem numbers on pp.122 and 124 read "29." and "30." — the
book's own numbering agrees with the page-arithmetic formula in this file (§ Question Arithmetic)
that independently assigns those pages n=29 and n=30. Recorded as a confirmation, not a new finding.

**Source formatting shift, relevant to drafting.** Questions 1–12 (pp.66–88) print lowercase
`a/b/c/d` option letters and each carries an explanation box. Questions 13–33 print uppercase
`A/B/C/D` and, apart from p.112 (the cyan page), carry no explanation box. pp.130 and 132 return to
lowercase.

**Two printed typos, kept verbatim per the project rule (transcription faults are corrected, source
typos are preserved and recorded):**
- p.96, option C: "Minmum" for "Minimum".
- p.106, option C: "ration" for "ratio".

**One defect in the book itself, not the transcription:** p.130, option d, is cut off in the source
— it prints "stationary ligh" (missing the final "t" of "light").
