# Section 12 — the reprint map, run before drafting

`node tools/bank-harness/reprint-pd-ep2.js 1270 1431`, run 2026-09-05, **before** staging.
`merge-parts-ep2.js`'s own note requires this for sections 12–15: much of a model exam reprints the
body, a reprint extends `source` rather than earning a new entry, and **every page is staged anyway**
because a staging file short of its page count fails the splice gate. Folds are always a separate
pass afterwards.

**80 answered pages in range**, and the page arithmetic is perfectly regular: the answered pages are
the even numbers **1272 … 1430**, so question `n` sits on page **1270 + 2n** and its unanswered twin
on the odd page before it. That regularity is a hypothesis from the index, not a measurement — the
staging quarters confirm it page by page.

## What the scan found

**21 cross-file candidates, 0 within-section.** The zero is the useful half: no page in this exam
matches another page in the same exam.

### (a) Fold candidates — reprints of entries already live in `questions.peds.ep2.js`

These are mine to adjudicate, page against page, after the section is staged and merged.

| page | printed n | live entry |
|---|---|---|
| 1280 | 5 | `pedep2-gen-26` |
| 1306 | 18 | `pedep2-hem-68` |
| 1308 | 19 | `pedep2-car-18` |
| 1322 | 26 | `pedep2-res-22` |
| 1326 | 28 | `pedep2-nd-19` |
| 1332 | 31 | `pedep2-dp-2` |
| 1376 | 53 | `pedep2-car-20` |
| 1384 | 57 | `pedep2-ren-20` |
| 1414 | 72 | `pedep2-car-26` |

**Nine is a floor, not a count.** The tool's own header records why, measured on section 2: an OCR
prefix scan found 6 House matches where comparing the *staged verbatim stems* found 19, because the
endpoint prints a condensed editorial rewrite of the same vignette — same patient, same numbers,
different wording — and the 8% tolerance in `near()` is calibrated for OCR damage, not for an editor.
Part 1's Model Final Exam 1 ran **30 reprints of 80**. Expect the real number here to land far above
nine, and measure it after staging off the verbatim text, which is where both sides are exact.

### (b) Overlap to RECORD only — endpoint part 1, another chat's live file

- p.1320 (n25) ≈ `pedep-inf-82`
- p.1326 (n28) ≈ `pedep-mf3-13`
- p.1362 (n46) ≈ `pedep-mf3-37`

Two of the three land in part 1's own Model Final Exam 3, which is the two books' model exams drawing
on the same pool rather than anything about this section.

### (c) Overlap to RECORD only — House, `questions.peds.js`

p.1280 ≈ `pedhd-gen-17` · p.1286 ≈ `pedhd-renal-22` · p.1308 ≈ `pedhd-card-18` · p.1322 ≈
`pedhd-resp-23` · p.1326 ≈ `pedhd-dev-19` · p.1332 ≈ `pedhd-devp-2` · p.1372 ≈ `pedhd-inf-17` ·
p.1376 ≈ `pedhd-card-20` · p.1384 ≈ `pedhd-renal-20`.

**Nothing folds across banks while both chats are live.** Do not add `alsoIn`, do not touch
`questions.peds.js` or `questions.peds.ep.js`. These go to the end-of-stream cross-bank sweep, which
now also carries five chapter-shaped overlaps from the body sections.

⚠️ Eight of the nine House hits are on pages that are *also* ep2 fold candidates. That is the
expected shape — a model-exam question reprinted from the body, where the body question already
overlapped House — and it is not independent evidence of anything.

## What this file does NOT settle

- **The count.** 80 comes from `kind === "answered"`, which produced its first false positive in
  section 9 (p.1082). Each staging quarter opens every one of its twenty pages as an image and says
  what it found.
- **Any fold.** A hit here is a candidate to look at on the page image. OCR is a search index and
  never a clinical source; a miss is not evidence of absence.
- **Chapters.** This section is mixed-topic — every entry lands in whatever chapter its content
  belongs to, so the chapter ruling can only be written after the questions are staged, the reverse
  of a body section's order.
