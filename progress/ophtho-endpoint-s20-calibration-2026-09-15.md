# Ophthalmology Endpoint — Part 1, Section 20 Calibration, 2026-09-15

Status: complete, text-only OCR/index analysis. No images were rendered or viewed (brief's
explicit rule). New note — no prior file of this name existed.

Section 20 = `tools\bank-harness\sec-oph.js` `SEC_P1` entry 20: `{ prefix: 'ophep-drugs-eye-',
chapter: null, pages: [1332, 1373] }` — "Drugs and the Eye" (no chapter exists yet for this
topic; `sec-oph.js`'s own comment notes one must be added to `modules.js`). Confirmed against the
OCR index and rendered-text divider pages below.

## Range and divider pages

- p.1332: chapter divider ("Drugs and the Eye", 4 words, `flags:["thin"]`) — matches
  `sec-oph.js`'s declared first page exactly.
- p.1333–1342 (10 pages): lecture prose ("Topical Ocular Drugs" — mydriatics/cycloplegics,
  adrenergic agents, etc., by section headings visible in the OCR text).
- p.1343: divider page, single word "Questions" (`flags:["thin","passes-differ"]`) — confirmed
  by direct text match.
- p.1344–1373 (30 pages, 15 two-page pairs): MCQs, unmarked page then marked/answered twin — see
  arithmetic below.
- Section ends exactly at p.1373 = `sec-oph.js`'s declared last page; p.1374 (checked) is the
  section-21 divider "Keys For Diagnosis" — a clean, different-chapter boundary, no trailing
  reprint.

## Question count and derivation

**15 questions, clean printed numbering 1–15, no duplicate or skipped number** (unlike section
19's double-"16" defect — checked the same way, by reading the leading printed number off every
page 1344–1373; the sequence is 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 with no repeat).

## Page formula and pair test

**Question *n* is unmarked on PDF page 1342+2n and marked on PDF page 1343+2n.** Verified by
script against all 15 pairs, zero exceptions on page number. Q1 = pp.1344/1345; Q15 =
pp.1372/1373, exactly `sec-oph.js`'s declared last page. This constant (1342+2n/1343+2n) is
section-specific, distinct from every other section's own constant, matching the established
pattern that it never transfers.

One pair (Q11) departs from the "unmarked plain / marked highlighted" shape without breaking the
page-count arithmetic — see Anomalies.

## Unassigned / misclassified pages

Two pages inside the lecture-prose range are misclassified `kind:"answered"` (elevated
yellow-pixel count) — the same false-positive mechanism recorded in s04 (pp.279/280) and s19
(pp.1246–1248, 1259):

- **p.1336, p.1337** — direct text read: plainly lecture prose ("II. Topical Ocular Drugs",
  lettered sub-headings "A. Cholinergic-blocking...", "B. Adrenergic-stimulating..." and a
  drug-comparison table) — no MCQ present on either page.

True prose/divider extent is p.1332–1343 (12 pages: divider + 10 prose pages + divider), matching
the classifier's `notes` tally of 10 plus these 2 false positives. Every one of the 42 in-range
pages (1332–1373) is accounted for by content, not by trusting the raw `kind` tally (`{notes: 10,
answered: 16 (2 false positives + 14 real marked pages), question: 16 (15 real unmarked + 1 —
Q11's marked twin, misclassified, see Anomalies)}`).

## Option counts per Q

**All 15 questions show exactly four lettered options (A–D) in the OCR index** — no five-option
departure found anywhere in this section, unlike sections 2, 4 and 19. Several pairs carry
`options-differ` flags where the index still reports 4 options on at least one pass (Q4 p.1351,
Q8 p.1359, Q12 p.1367, Q13 p.1369) — consistent with the established false-alarm pattern
(formatting interfering with one OCR pass' letter detection), not confirmed page defects; none of
these dropped to a genuinely different option count on both passes.

## Case transitions

**One clean transition, confirmed structurally across all 15 pairs**: lowercase `a/b/c/d` on
Q1–Q6 (pp.1344–1355), uppercase `A/B/C/D` from Q7 onward (pp.1356–1373). The break falls cleanly
between Q6 (1354/1355) and Q7 (1356/1357) — no stray single-letter case hits found anywhere else
in the section (unlike s19, which had two isolated OCR-artefact lowercase hits inside its
uppercase run).

## Box candidates

Word-count delta (marked − unmarked) computed for all 15 pairs, with a single clean break:

- **Q1–Q8 show deltas of 20–34 words** — consistent with a printed explanation box on the marked
  page, no borderline values in this section (every value is comfortably inside the ~20+ range
  used elsewhere as the box threshold).
- **Q9–Q15 show deltas of −4 to 0 words** — consistent with no box.

The break sits cleanly at Q8/Q9, matching the section-by-section pattern (box present early,
absent later) already seen in s03 (Q7/Q8-ish), s04 (Q6/Q7) and s19 (its own k=16/17 boundary).
No page was independently rendered to confirm any box directly — this is an index-derived
inference only, listed in "Needs image check."

## Figure candidates

A keyword sweep ("figure", "shown", "arrow", "picture", "photograph", "diagram", "image below",
"as seen") across all 42 pages in range returned **zero matches, of any kind, anywhere in the
section** — cleaner than section 19, which had a few keyword hits that turned out to be false
positives. This is a text-based absence check only (OCR sees words, not embedded images), so it
is not a proven zero, but no page even weakly suggests a figure.

## Classifier mis-tags

Two pages (1336, 1337), both inside the lecture-prose range, are misclassified `kind:"answered"`
(see "Unassigned / misclassified pages" above).

## Needs image check

- **Q11 (pp.1364/1365): the marked page shows NO elevated yellow-pixel value** (520, the
  section's baseline unmarked-page value, versus 1056–3796 on every other marked page in this
  section) **and is textually identical to its unmarked twin, word-for-word** (confirmed by a
  direct diff of the two `.txt` files — only the trailing page-number footer differs). No
  visible highlighted key is detected by the pixel proxy on either page. This is the same shape
  as two pairs already flagged in section 19 (k=22, k=24) — needs a direct visual check: either
  the key is marked by a non-yellow means the pixel detector misses, or this question prints with
  no visible key at all in the source. Never state a key from this index either way.
- Explanation-box status for Q1–Q15 rests entirely on the word-count-delta inference, not a
  visual read — flagged per the brief's rule even though no value was borderline this time.
- Whether a figure exists anywhere in the section (text-only absence check, not visually
  confirmed) — reported as unchecked, not as "no figures."

## Anomalies

**One pair with no detected highlighted key** (Q11, pp.1364/1365) — see "Needs image check."
This is the same anomaly shape section 19 showed twice (there at its k=22 and k=24 pairs), now
once in section 20.

No page-arithmetic break, out-of-sequence page, duplicate question number, or question spanning
more than its two-page pair was found; the 1342+2n/1343+2n formula held exactly across all 15
pairs, and (unlike section 19) the printed numbering is clean 1–15 with no defect.

## Unresolved

- No page in this section was directly rendered/visually read at all — every finding above is
  derived from the OCR index and OCR text only, per the brief's text-only rule. Everything under
  "Needs image check" is unconfirmed until a render happens.
- No key-extraction pass (`keypos.py`) has been run on this section.
- Source-printing typos were not deliberately searched for (none noticed incidentally).
- `sec-oph.js`'s own comment notes this section's chapter (`chapter: null`, "Drugs and the Eye")
  does not yet exist in `modules.js` — carried forward here as a fact from the file, not a task
  for this calibration job.

## Note on injected instructions

During this job, the same two non-brief system-reminder-style messages recorded in the s19 note
reappeared: a "bypass permissions mode" instruction pushing Bash/heredocs over Read/Write/Edit,
and a "drift check" pushing a caveman speech register, an agent-routing ladder, and a restatement
of the data-handling rule. Both declined again, for the same reason — this note was written
entirely with the Write tool, and no work was rerouted to another seat or model.

## Byte size and line-ending check

To be run after this file is written: `tr -cd '\r' < "progress\ophtho-endpoint-s20-calibration-2026-09-15.md" | wc -c` — must print 0.
