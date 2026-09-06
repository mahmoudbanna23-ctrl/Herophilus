# Ophthalmology endpoint — scoping notes (2026-09-06)

Written from the main `D:\claude os` chat, not a Herophilus work chat. **Nothing has been built.**
This file exists so the measurements below are not re-taken, and so the split question is not
re-litigated from scratch.

## The question that was asked

The user proposed: when Chat C finishes peds endpoint part 2, split the ophthalmology endpoint
between two chats, each taking half.

**Answer: yes, it is possible, and there is precedent — but the precedent was cheaper than this
will be, and one prerequisite has to happen first.**

## Measured, 2026-09-06

`pdfinfo` on the four endpoint books, all A4:

| Book | Pages | Size |
|---|---|---|
| `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf` | **2,442** | **293 MB** |
| `Semester 8\Neuro\Questions\Neuro endpoint.pdf` | 2,190 | 251 MB |
| `Semester 8\Pedo\Questions\Pediatrics endpoint part1.pdf` | 1,991 | 278 MB |
| `Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf` | 1,993 | 272 MB |

Ophthalmology is **the largest of the four**, and unlike peds it is a single file.

## Why the peds precedent is not a free template

Peds endpoint was split across chats successfully — `questions.peds.ep.js` (705, closed 2026-09-05)
and `questions.peds.ep2.js` (Chat C). Separate file, separate array (`Q_PEDS_EP2`), separate id
prefix (`pedep2-`), merged by `tools\bank-harness\merge-parts-ep.js`.

**But the publisher made that split.** part1 and part2 are two physical books. Ophthalmology is one
file, so the seam has to be chosen — and choosing it is the whole risk.

## Do NOT split the PDF

The idea of cutting it into two sub-200 MB PDFs does not work, and is not needed:

- **`pdfsplit` makes these books BIGGER.** A 4-page split of a 317 MB book produced **331 MB**;
  Poppler's `pdfseparate` reproduced it exactly. The pages share one resource pool, so every piece
  carries the whole pool. All four endpoint books behave this way
  (`tools\wps-ocr-reference.md`). This is what "the endpoint books CANNOT be split" in `MEMORY.md`
  means — it is a statement about the file, not about the work.
- **The 200 MB ceiling does not apply to the live route.** Exit 207 is on WPS *conversions*
  (`pdf2word` and friends). The route in use is `photo2word`, which takes images and has **no
  file-size limit** — and is ~13× faster (1.29 s/page vs 17 s/page). The PDF is never handed to WPS.

**What gets split is the page range**, not the file. Both chats point `pdftoppm` at the same
untouched source and render their own range into their own scratchpad:

```bash
pdftoppm -png -r 150 -f <first> -l <last> "Semester 8/Opthalmo/Questions/Opthalmology endpoint.pdf" "<scratchpad>/oph-ep-"
```

Reading is read-only and safe to do concurrently. The source PDF stays untouched, which
`CLAUDE.md` §5 requires regardless.

## The prerequisite: map the sections first

The seam must land on a **section boundary**, not a page-count midpoint, because the closing test is
**page coverage** — every `p.<n>` in every `source` field against every OCR-`answered` page. That
test only runs per-half if each half owns a contiguous, disjoint range.

For scale, peds endpoint part 1 turned out to be 15 sections: body pp.5–1156 · 4 Model Final Exams
pp.1157–1804 · 2 Model Training Exams pp.1805–1936 · tail pp.1937–1991 staging nothing. Ophthalmology
will have its own shape across 2,442 pages, and it is unmeasured.

**One bounded job, not yet run:** map the ophthalmology endpoint's sections and their page ranges,
then propose a seam. Until that exists, neither chat can be launched.

## The expensive finding: there is no ophthalmology toolchain

Every script in `tools\bank-harness\` is pediatrics: `val-pd.js`, `val-pd-ep.js`, `val-pd-ep2.js`,
`splice-pd{,-ep,-ep2}.js`, nine `fold*-pd-ep*.js`, eight `reprint-*-pd-*.js`, `merge-parts-ep{,2}.js`.
Nothing ophthalmology-shaped exists.

What made the peds two-part split survivable was a **duplicated toolchain per part** — `val-pd-ep2.js`
alone is 33.9 K. Splitting ophthalmology means building that twice, or building one toolchain with a
part flag, **before either chat writes a question.** Budget for it; it is not a detail.

⚠️ Related standing hazard, already in `MEMORY.md`: *never run `val-pd.js`/`splice-pd.js` on endpoint
files — they write Chat B's live file.* Two chats racing on one validator is the same class of bug.

## Other conditions if it goes ahead

- Distinct output file, array name and id prefix per half, mirroring the peds pattern, or the merge
  collides silently.
- **OCR is the shared bottleneck, and it does not parallelise.** Exit 429 is a rate limit, not a
  quota. Two chats OCR-ing at once contend for the same online WPS endpoint. The chat-side work
  halves; the OCR stage may not. Do not assume 2× throughput.
- **Do not continue the finished sessions.** `CLAUDE.md` §9: four main chats ran 274–327 steps pinned
  at 166 k a step — 248 M of 369 M total tokens. Launch fresh sessions from resume prompts instead.
- Endpoint/House overlap is chapter-shaped and cost real time in peds (5 collisions in the first 150
  entries). Ophthalmology House is closed at 1,598; expect the same class of overlap, and remember
  **nothing folds mid-stream.**

## Priority question, unresolved — the user's call

Ophthalmology House is **closed at 1,598** and its exam is **27 Sep**. Neuro has **268 live**, has
been untouched since **2026-09-02**, and its exam is **3 Oct**. The ophthalmology endpoint is
additive to an already-deep bank; neuro is the thin bank with the emptier position.

If two chats are free, the higher-value split may be **neuro, not ophthalmology.** This was raised
and not answered.
