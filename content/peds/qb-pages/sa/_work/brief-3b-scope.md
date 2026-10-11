# Brief 3b — scope of this run (read after brief-3-chapters.md; this file wins on conflict)

WRITE GRANT: you may edit `content/peds/qb-pages/sa/sa-chapters.json` (append only — see below) and
create `content/peds/qb-pages/sa/_work/report-3b.md`. You may edit `_work/check-chapters.js` only if
it cannot yet take a third array file. Nothing else. No git. No sub-agents.

This run covers `sa-book.array.js` ONLY (`var SA_BOOK`, 452 items, ids `pedsa-b<chapter>-…`).

- The 353 existing entries in `sa-chapters.json` (ids `pedsa1-…`, `pedsa2-…`) must come out
  byte-identical. Append the 452 book ids after them, same shape, one id per line.
- `bookChapter` / `bookChapterTitle` name the book's own chapter. It is a hint, never the rule:
  decide by the stem, options and keyed answer. Several book chapters have no chapter of their own
  in the course (e.g. adolescent medicine, dermatology, musculoskeletal, child protection, global
  child health, ethics, paediatric surgery topics): give those the NEAREST existing chapter id, set
  `outOfCourse: true` and a `note` of at most twelve words naming the real topic. Never invent a
  chapter id.
- Matching-type sub-items (`kind: "emq"`) share one option list; siblings may land in different
  chapters. Decide each by its own scenario and keyed answer.
- Check: `node content/peds/qb-pages/sa/_work/check-chapters.js sa-p1.array.js sa-p2.array.js
  sa-book.array.js` must exit 0 (every id covered once, every chapter id real, 805 entries).
- Report (`_work/report-3b.md`, max 150 words): count per chapter id for the book, count
  `outOfCourse`, the ten ids you are least sure of with both candidate chapters, anything not done.
  Your final message repeats that report.
