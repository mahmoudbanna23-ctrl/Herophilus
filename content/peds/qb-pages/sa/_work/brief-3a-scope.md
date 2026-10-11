# Brief 3a — scope of this run (read after brief-3-chapters.md; this file wins on conflict)

This run covers `sa-p1.array.js` and `sa-p2.array.js` ONLY (353 items). `sa-book.array.js` is
still being staged by another worker: do not read it, do not map it.

- `_work/check-chapters.js` takes the array files to cover as command-line arguments
  (`node check-chapters.js sa-p1.array.js sa-p2.array.js`), resolved against
  `content/peds/qb-pages/sa/`; with no arguments it covers those two. It must not fail because a
  book id is missing. A later run will pass the book file as a third argument and extend
  `sa-chapters.json`; write the json so entries can be appended (stable key order, one id per line).
- The `block` field of each item names the printed section (e.g. "Block 7 · Neonatal Medicine").
  It is a hint, never the rule: decide by the stem, options and keyed answer.
- Extended-matching items carry `setTitle`; siblings of one set may land in different chapters.
- Report (`_work/report-3.md`, max 150 words) as in brief 3, for the 353 items.
