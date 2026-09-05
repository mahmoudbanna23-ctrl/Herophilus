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

---

## MEASURED AFTER STAGING — 2026-09-05

The staging is in (`endpoint-p2-s12-mfe1.array.js`, 80 entries, n 1..80, pp.1272–1430, commit
`f87efd9`), so the comparison can now run off verbatim text on both sides instead of an OCR prefix.

**`node tools/bank-harness/sweep-staged-ep2.js 12`:**

| bucket | count |
|---|---|
| within-section reprint candidates | **1** |
| against live endpoint part 2 — **fold candidates** | **37** |
| against live endpoint part 1 — record only | 13 |
| against live House — record only | 27 |
| option-set-only (shared menus, not stem matches) | 58 |
| shared option menus *inside* the section | 0 |

**Nine was a floor, and the floor held.** The pre-staging OCR scan found 9; verbatim comparison finds
**37**. That is the section-2 shape exactly — 6 found by prefix scan, 19 by verbatim — and it lands
in the same order of magnitude as part 1's own Model Final Exam 1, which ran **30 reprints of 80**.
The nine the scan did find are all inside the thirty-seven; none was a false positive.

Eleven candidates sit at ≥0.90 whole-stem similarity, five of them at or near 1.000:

| staged n | page | live entry | sim |
|---|---|---|---|
| 18 | 1306 | `pedep2-hem-68` | 1.000 |
| 31 | 1332 | `pedep2-dp-2` | 1.000 |
| 72 | 1414 | `pedep2-car-26` | 1.000 |
| 30 | 1330 | `pedep2-neu-33` | 0.992 |
| 32 | 1334 | `pedep2-car-3` | 0.986 |
| 19 | 1308 | `pedep2-car-18` | 0.978 |
| 45 | 1360 | `pedep2-neu-40` | 0.957 |
| 52 | 1374 | `pedep2-res-4` | 0.940 |
| 53 | 1376 | `pedep2-car-20` | 0.923 |
| 21 | 1312 | `pedep2-res-7` | 0.921 |
| 5 | 1280 | `pedep2-gen-26` | 0.905 |

The single within-section pair is **n44 (p.1358) ≈ n79 (p.1428)**, sim 0.571, keys 2/0, option counts
4/5 — a low-similarity pair with a differing option count, which is the shape of a shared frame far
more often than a reprint.

**None of this is a verdict.** Every pair goes to the adjudication pass, which reads both verbatim
texts, names the discriminating token, and looks at the model-exam page image for anything it rules a
reprint. Those verdicts are recorded in `endpoint-p2-s12-fold-adjudication-A/B/C.md`, and only the
adjudicated list becomes `splice-pd-ep2.js`'s section-12 `reprints:` array.

### Also measured: the staging itself

- **80 answered pages, all confirmed on the image** — the `1270 + 2n` arithmetic held on every one,
  no parity flip at either quarter handoff, and `kind === "answered"` produced no false positive here
  (unlike p.1082 in section 9).
- **No figure anywhere in the section**, on any of the eighty pages.
- **14 questions print four options, 66 print five.**
- **Two print no explanation box** — n28 (p.1326) and n41 (p.1352) — each confirmed genuine rather
  than an overflow by reading the following page, which in both cases is the next question's
  unanswered twin.
- **p.1431 is a full-page image of a handwritten Arabic supplication** closing the section, not a
  question and not an overflow box; p.1432 opens Model Final Exam 2. There is no eighty-first
  question hiding at the end.

---

## ADJUDICATED — 2026-09-05

All thirty-seven candidates and the within-section pair were read page against page in
`endpoint-p2-s12-fold-adjudication-A.md` (n1–n30), `-B.md` (n31–n60) and `-C.md` (n61–n80), with the
model-exam page image opened for every REPRINT call. **Twenty-eight are reprints; nine are not.**

```
reprints: [1, 2, 5, 6, 8, 18, 19, 21, 22, 23, 26, 30, 31, 32, 34, 43, 45, 52, 53, 56, 57,
           58, 60, 62, 66, 68, 72, 75]
```

**28 of 80, against part 1's 30 of 80. 52 entries are drafted.** The nine that are not reprints —
n28, n35, n44, n59, n74, n79, and the second live id flagged against each of n21, n45 and n60 — are
shared option menus or shared stem frames applied to different vignettes, each with its
discriminating token named in the adjudication file that owns it. Three of them turn on a ruling the
live bank had already made and recorded in its own explanations: `res-7` against `res-54`, `dp-7`
against `neu-40`, and `ren-41` (most common) against `ren-54` (major).

The pass that proves the pairs and stamps the exam page into the twenty-eight live `source` fields is
**`tools/bank-harness/reprint-s12-pd-ep2.js`**, run `--write` on 2026-09-05. Its three EXACT entries
were byte-equal on the apostrophe-blind comparison as claimed; **seven pairs have a key option whose
TEXT differs between printings**, each named in the tool's `KEYTEXT_OK` table with both strings and
the page it was settled on — four spelling or abbreviation variants (n5, n8, n26, n53) and three real
rewordings of the same answer (n21, n60, n66). None of the seven moves a key.

Two of the twenty-eight also record a contradiction between the printings in the live entry's
`explanation`, because the new `source` clause promises it: `pedep2-ren-22` (p.1286 prints urea
90.0 mmol/L and creatinine 200 mmol/L against p.862's 9.0 mmol/L and 200 µmol/L — the creatinine is
not possible in the unit printed) and `pedep2-res-23` (p.1406 puts the consolidation in the right
lower lobe where p.521 states the left).

**A seventh fold shape, from n66.** The six recognised shapes do not cover a printing that keeps the
stem and the key but REBUILDS the distractor set: `pedep2-neu-50`'s "Anticonvulsants only" and
"Chemotherapy" are replaced on p.1402 by "Treatment of the cause of cerebral palsy" and "Restriction
of certain proteins in the diet", while botulinum toxin survives as the key in fuller words and moves
from index 0 to index 3. Two of four options replaced is heavier than shape 6's dropped filler, and
the range-C agent flagged it as its weakest call; ruled a reprint because the disease, the question
and the key concept are all unchanged and no distractor discriminates between the two printings.
