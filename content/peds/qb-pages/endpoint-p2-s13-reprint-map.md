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

## Settled after staging: two names collide, and the citation has to say which book

**Both books print a section called "Model Final Exam 2".** Part 1's is at part1.pdf pp.1361-1425;
this section is part2.pdf pp.1434-1593. Measured on 2026-09-05: **33 live part-1 sources already
carry the clause "reprinted in Model Final Exam 2, p.NNNN"**, and every one of them means part1.pdf.

Two consequences for the section-13 reprint pass, both of which would have gone unnoticed:

- **A clause written onto a part-1 entry must name the file.** `reprinted in Model Final Exam 2,
  p.1506` on `pedep-mf3-29` would read as part1.pdf p.1506 — a real page of a different book. The
  clause has to read `reprinted in Pediatrics endpoint part2.pdf, Model Final Exam 2, p.1506`. On a
  part-2 entry the base citation already names part2.pdf, so the bare form stays correct there.
- **The pass cannot guard or census on the bare exam name.** `reprint-s12-pd-ep2.js` treats
  "the source already names `MARK`" as proof the pass has already run, and counts the same string at
  the end. With `MARK = "Model Final Exam 2"` that test is already true for 33 part-1 entries before
  the pass runs. The guard and the census must key on the exact clause planned for each entry.

Part 1 is now a legitimate fold target: it closed at 705, the two parts were folded against each
other on 2026-09-05, and both files carry `bank:'endpoint'`. `sweep-staged-ep2.js` was still printing
leg (e) as "another chat writes that file: RECORD ONLY" and its header still claimed the two files
"merge by ADDING a bank"; both were corrected the same day. Adding a bank is the House shape and was
never available here.

## Executed — `reprint-s13-pd-ep2.js --write`, 2026-09-05

**29 reprints across 28 live entries; 51 of the 80 staged questions remain to be drafted.** Twenty-four
clauses landed on `pedep2-*` entries in `questions.peds.ep2.js`, five on `pedep-*` entries in
`questions.peds.ep.js`. Verified by diffing both files against `git HEAD`: **28 entries changed,
`source` and nothing else, no entry added or dropped, 0 sparse holes in either file.** The app boots
at 5,832 with 0 console errors — unchanged, as it must be, since this pass rewrites citations only.

Every verdict was re-checked from disk before the plan was written: target live and unique across
both files, key text equal under an apostrophe- and punctuation-blind comparison, key index equal,
and the staged page inside pp.1434–1593. Five key-text differences and three key-index moves were
adjudicated and listed in the tool, and an unlisted one stops the run.

### The one live entry named twice

`pedep-mf3-29` is reprinted at **both p.1448 (n8) and p.1506 (n37)** — the same milestone question
printed twice inside one exam, once on a 3/6/9/12/15-month ladder and once on the live 4/6/9/13/16,
keying *9 months* in all three printings. With the part-1 page and the earlier cross-part fold at
part2.pdf p.1296, that entry now records **four printings**. This is why the s12 pass's uniqueness
check (`new Set(ids).size !== EXPECTED`) had to be replaced: 29 verdicts map to 28 entries, and it is
the `(id, page)` pair that must be unique, not the id.

### The collision the census found — same exam name, same page number, two different books

The first `--write` run reported a census mismatch in part 1: 5 entries carrying 6 clauses where 4
and 5 were expected. **The pass was correct and the census was wrong.** `pedep-inf-73` in part 1
already reads:

> Pediatrics endpoint part1.pdf p.1111 (reprinted in Model Final Exam 2, p.1468, …)

which is **byte-identical** to the clause this pass writes onto `pedep2-res-8`. It is not a
duplicate. A bare exam name means the book the entry is in, so part 1's clause points at part1.pdf
p.1468 — a febrile two-month-old and a septic-workup question — while part 2's points at part2.pdf
p.1468, Norah's URTI. Different questions, different books, same page number, same exam name.

The census now scans each file only for its own rows. **Carry this forward:** any file-wide search
for a section-13 clause string will match part-1 text that means something else entirely. Part 1's
own `Model Final Exam 2` reprint clauses cite pp.1330, 1372, 1416, 1468 and 1481.

### What still has to happen at drafting, beyond a citation

Four of the 29 are not only citations, and the drafting notes must carry them:

- **`pedep2-car-12` (n19) contains a paragraph that is now false.** Its explanation asserts the page
  prints only four options and no fifth distractor; p.1470 prints a fifth, *Mitral regurgitation*.
  That paragraph must be amended, not left standing behind a new citation.
- **n70, n79 and n80** each have a printed box carrying substance the live explanation lacks — "all
  of the above are causes of short stature"; two-to-three words at one year; the nursery/siblings
  caveat. Fold the substance in; a citation alone loses it.
