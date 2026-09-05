# Section 13 — the reprint map, run before staging

`node tools/bank-harness/reprint-pd-ep2.js 1432 1594`, run 2026-09-05, **before** staging, against a
live `questions.peds.ep2.js` holding **499 entries (sections 1–11; section 12 is drafted but not yet
spliced)**. `merge-parts-ep2.js`'s own note requires this for sections 12–15: much of a model exam
reprints the body, a reprint extends `source` rather than earning a new entry, and **every page is
staged anyway** because a staging file short of its page count fails the splice gate.

⚠️ **This scan cannot see section 12.** Its 52 drafted entries are not live yet, so a question here
that reprints one of them is invisible to this run. The authoritative comparison is
`sweep-staged-ep2.js 13`, run **after** section 12 has been spliced and section 13 has been staged,
off verbatim text on both sides. Treat everything below as a heads-up, not a list.

## ⚠️⚠️ THE PAGE ARITHMETIC IS NOT REGULAR — THERE IS A PARITY FLIP AT p.1531

Section 12's tidy `1270 + 2n` does **not** carry over. Measured off
`content/peds/qb-pages/ocr/ep2/index.json`, the eighty answered pages are:

```
1434 1436 … 1528 1530   (49 pages, EVEN)   n1 … n49    p = 1432 + 2n
   ↑ step of 3 across p.1531 ↑
1533 1535 … 1591 1593   (31 pages, ODD)    n50 … n80   p = 1433 + 2n
```

**p.1531 is the flip.** The index calls it `notes`, and it sits in the classic overflow position —
the page before it is answered, the page after it is a question. The book-wide candidate table in
`endpoint-p2-section-map.md` lists it under this section for exactly that reason. **It is a
candidate, not a finding:** p.309 sat in the same position in section 4 and turned out to be an
unrelated teaching slide. **Open it and say what it is.** If it is n49's explanation box, n49 is
staged with `box:1531`; if it is a teaching slide, it is staged as nothing at all and the flip is
just a page the book inserted.

Three pages in the range carry `kind:"notes"` and eighty carry `kind:"answered"`, matching eighty
`kind:"question"` twins. **80 is the expected count and no staging quarter may take it on trust** —
`kind === "answered"` produced a false positive once already, on p.1082 in section 9.

## What the scan found

**34 cross-file candidates, 1 within-section.**

### (a) Fold candidates — reprints of entries already live in `questions.peds.ep2.js`

Mine to adjudicate, page against page, after the section is staged and merged.

| page | live entry |
|---|---|
| 1462 | `pedep2-mal-23` |
| 1466 | `pedep2-ren-35` |
| 1468 | `pedep2-res-8` |
| 1470 | `pedep2-car-12` |
| 1476 | `pedep2-end-4` |
| 1488 | `pedep2-liv-4` |
| 1555 | `pedep2-end-8` |
| 1565 | `pedep2-ren-38` |
| 1589 | `pedep2-nd-4` |
| 1591 | `pedep2-nd-5` |
| 1593 | `pedep2-nd-6` |

**Eleven is a floor, and a low one.** Two reasons, both measured. First, the tool's own header
records that an OCR prefix scan found 6 House matches on section 2 where comparing the *staged
verbatim stems* found 19 — the endpoint prints a condensed editorial rewrite of the same vignette,
and `near()`'s 8% tolerance is calibrated for OCR damage, not for an editor. Section 12 showed the
same shape at this scale: **9 found before staging, 37 after, 28 adjudicated as reprints.** Second,
section 12's own 52 are not live yet and are invisible here.

⚠️ **The last three are consecutive and land on `pedep2-nd-4`, `-5`, `-6` in page order** — the same
chapter-shaped block signature that section 11 showed against House chapter 20. Expect the pages
either side of them to belong to the same run.

### (b) Overlap to RECORD only — endpoint part 1, `questions.peds.ep.js`

- p.1448 ≈ `pedep-mf3-29` · p.1506 ≈ `pedep-mf3-29` · p.1508 ≈ `pedep-mf3-31` ·
  p.1514 ≈ `pedep-mf3-34` · p.1516 ≈ `pedep-mf3-37`

All five land in part 1's own Model Final Exam 3 — the two books' model exams drawing on one pool.

### (c) Overlap to RECORD only — House, `questions.peds.js`

p.1434 ≈ `pedhd-dev-21` · p.1466 ≈ `pedhd-renal-13` · p.1468 ≈ `pedhd-resp-8` ·
p.1470 ≈ `pedhd-card-12` · p.1476 ≈ `pedhd-endo-4` · p.1478 ≈ `pedhd-renal-26` ·
p.1480 ≈ `pedhd-liv-7` · p.1482 ≈ `pedhd-neuro-21` · p.1484 ≈ `pedhd-endo-12` ·
p.1486 ≈ `pedhd-renal-8` · p.1488 ≈ `pedhd-liv-4` · p.1524 ≈ `pedhd-devp-18` ·
p.1555 ≈ `pedhd-endo-8` · p.1573 ≈ `pedhd-gen-19` · p.1575 ≈ `pedhd-card-3` ·
p.1589 ≈ `pedhd-dev-4` · p.1591 ≈ `pedhd-dev-5` · p.1593 ≈ `pedhd-dev-6`

**Nothing folds across banks.** Do not add `alsoIn`, do not touch `questions.peds.js` or
`questions.peds.ep.js`. These go to the end-of-stream cross-bank sweep.

⚠️ Nine of the eighteen House hits are on pages that are *also* ep2 fold candidates — 1466, 1468,
1470, 1476, 1488, 1555, 1589, 1591 and 1593. That is the expected shape — a model-exam
question reprinted from the body, where the body question already overlapped House — and it is not
independent evidence of anything.

### (d) Within-section

**p.1448 ≈ p.1506**, the section's only internal candidate. Both also hit `pedep-mf3-29`, which is
the more likely explanation: two printings of a question this book's other model exam also prints.
Read both pages before calling it anything.

## What this file does NOT settle

- **The count.** 80 comes from `kind === "answered"`. Each staging quarter opens every one of its
  twenty pages as an image and says what it found.
- **p.1531.** Opened and named by whichever quarter owns n49.
- **Any fold.** A hit here is a candidate to look at on the page image. OCR is a search index and
  never a clinical source; a miss is not evidence of absence.
- **Chapters.** Mixed-topic, like section 12 — the chapter ruling can only be written after the
  questions are staged, the reverse of a body section's order.
