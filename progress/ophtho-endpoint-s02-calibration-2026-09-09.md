# Ophthalmology Endpoint — Section 2 Calibration, 2026-09-09

Section 2 ("Optics and Errors of Refraction", PDF pages 134–213 of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`, confirmed against `tools\bank-harness\sec-oph.js` entry 2: `pages: [134, 213]`) was measured by direct rendering and visual reading — no OCR pre-filter was available for this range (see below). 45 of the 80 pages were rendered and read (~56%): both sides of every boundary, every question's marked page, and a spread of unmarked stem pages.

## OCR Route — Does NOT Cover This Section

`content\ophtho\qb-pages\ocr\ep\` holds only 130 files, `p0006.txt`–`p0134.txt` — i.e. section 1 plus the section-2 divider page only. Section 2's actual question range (135–213) has **no OCR text and no `index.json` rows**. Running `tools\ep-index\run-all.ps1` would have generated it, but doing so would write new files outside this task's one-file write grant (`progress\ophtho-endpoint-s02-calibration-2026-09-09.md`), so it was **not run**. This is a deviation from the brief's assumed method: every boundary and pattern below was confirmed by rendering PDF pages directly with `pdftoppm -r 150` and reading the PNGs, with no text-index shortcut. This is more expensive than section 1's OCR-assisted pass but stayed within the write grant.

## Section Structure

| PDF pages | Content | Confirmed against |
|---|---|---|
| 134–158 | Lecture prose (continues past the section-2 divider seen at the end of section 1) | pp.134–138, 140, 143, 145, 150, 155–158 |
| 158 | Last lecture-prose page | p.158 |
| 159 | Divider page: "Questions" | p.159 |
| 160–213 | MCQs, one per question, printed as adjacent pairs (unmarked then marked) | see arithmetic below |
| 214 | Clean section-3 divider: "Orbit" (matches `sec-oph.js` entry 3, `pages: [214, 272]`) | p.214 |

Printed page number equals PDF page number throughout — checked directly on every sampled page (134–145, 150, 155–165, 168–169, 172–175, 177, 179, 181, 183, 185, 187–188, 193–194, 199, 202, 208, 210–214); no offset found, no exception seen.

### Question Arithmetic

**Question *n* is unmarked on PDF page 158 + 2*n* and marked on PDF page 159 + 2*n*.** Q1 is pages 160/161; Q27 is pages 212/213. The last marked page (213) is exactly the section's declared last PDF page — a strong self-check, no trailing anomaly like section 1's p.133 triple-print.

**Section 2 holds 27 questions.**

Confirmed pairs (unmarked/marked read or marked-only read, as noted): Q1 160/161, Q2 162/163, Q3 164/165, Q4 166 (unmarked only), Q5 168/169, Q7 172 (unmarked only), Q8 174/175, Q9 177 (marked only), Q10 179 (marked only), Q11 181 (marked only), Q12 183 (marked only), Q13 185 (marked only), Q14 187 (marked only), Q15 188 (unmarked only), Q17 193 (marked only), Q18 194 (unmarked only), Q20 199 (marked only), Q22 202 (unmarked only), Q25 208 (unmarked only), Q26 211 (marked only), Q27 212/213 (both).

## Option Count and Departures

Default is four lettered options (A–D or a–d, see case note below). **Two questions depart with five options (A–E):**
- **Q22** (p.202, stem: "the focal lines of the 2 principal meridians are located on both sides of the retina") — options A–E (Myopia / Hyperopia / Simple astigmatism / Compound astigmatism / Mixed astigmatism).
- **Q27** (p.213, marked page; last question in the section) — options a–e, and this page also reverts to lowercase lettering (see below) even though the surrounding block uses uppercase.

No other option-count departure was found in the sampled pages.

## Option-Letter Case

Lowercase `a/b/c/d` confirmed on Q1–Q8 (pp.161,163,165,166,169,172,175) and on the unmarked stem pages checked in that range. Uppercase `A/B/C/D` (or `A–E`) confirmed from Q9 through Q26 (pp.177,179,181,183,185,187,193,194,199,202,208,211). **Q27 (p.213) reverts to lowercase `a–e`**, breaking the otherwise-clean uppercase run at the very end of the section — an anomaly, not sampling noise (its own unmarked page 212 was not read to confirm the reversion starts there too; only the marked page 213 was checked).

The lowercase/uppercase transition falls between Q8 (p.175, lowercase) and Q9 (p.177, uppercase) — narrower than checked, since the Q9 *unmarked* page (176) was not read; only its marked page (177) was.

## Explanation Boxes

Printed explanation box present on Q1, Q2, Q3, Q5, Q8, Q9, Q10, Q11, Q12 (pp.161,163,165,169,175,177,179,181,183) — 9 confirmed. Absent on Q13, Q14, Q17, Q20, Q26, Q27 (pp.185,187,193,199,211,213) — 6 confirmed absent. The box therefore disappears between Q12 (present, p.183) and Q13 (absent, p.185) — a clean transition, similar in shape to section 1's early/late split but at a different question number (there: Q1–12 boxed; here: Q1–12 boxed too, coincidentally the same count but not verified for every intervening question — Q4, Q6, Q7 were only read on their unmarked page and their box status on the marked page was not checked).

**This was sampled, not exhaustively checked**: 15 of 27 marked pages were read; the box status of Q4, Q6, Q7, Q16, Q19, Q21, Q23, Q24, Q25 (marked pages 167,171,173,191,197,201,205,207,209) was never confirmed either way.

## Figures

**No figure or diagram was found on any of the 45 pages read**, despite this being the "Optics and Errors of Refraction" chapter, which the brief flagged as diagram-heavy. This includes every question stem read (Q1–Q27 in some form) and every lecture-prose page sampled. This is reported honestly as an absence-in-the-sample, not a proven absence across the whole 80-page span: 35 of 80 pages were never rendered/read at all (see below), and a figure could sit on one of those.

## Anomaly (source printing defect)

**Q18 (p.194), option A** prints "Strabisn1us" where the word is "Strabismus" — the "1" appears where an "m" belongs. This is a defect visible directly on the rendered page image (not an OCR artifact, since no OCR was run on this page) — most likely a font/kerning defect in the source PDF itself. Kept verbatim per project rule if transcribed; recorded here for the record.

No reprint, out-of-sequence page, or question spanning more than two pages was found anywhere in the range — unlike section 1's p.133 triple-print of Q34, section 2's boundary (Q27, p.212/213) is a clean two-page pair with no trailing repeat.

## What Was Not Checked

- 35 of 80 pages were never rendered or read: PDF 139,141,142,144,146,147,149,151–154,167,170,171,173,176,178,180,182,184,186,189–192,195–198,200,201,203–207,209,210,212, and 215+ beyond the p.214 boundary check.
- Unmarked pages for Q9, Q10, Q11, Q12, Q13, Q14, Q17, Q20, Q26 were never read — only their marked counterparts. The letter case and option text on those unmarked stems is inferred from the marked page, not independently confirmed.
- Explanation-box status for Q4, Q6, Q7, Q16, Q19, Q21, Q23, Q24, Q25 (nine of 27 questions) is unchecked.
- No key-extraction pass (`keypos.py`) has been run on this section; only the marked options visible in the read pages were noted, not systematically recorded as an answer key.
- Whether a figure exists on any of the 35 unread pages is unresolved — reported as unchecked, not as "no figures in this section."
- The full run of PDF 44–63-style false positives that section 1 had in its lecture range was not tested for section 2's lecture pages (134–158), since there is no classifier output to test against.

## Byte Size and Line-Ending Check

To be run after this file is written: `tr -cd '\r' < "progress\ophtho-endpoint-s02-calibration-2026-09-09.md" | wc -c` — must print 0.
