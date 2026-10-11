# Brief 2b — finish staging the book (continuation of brief 2)

Read `content/peds/qb-pages/sa/_work/brief-2-stage-book.md` first: its WRITE GRANT, schema,
deliverables, verification and "do not" list all still bind. This file only adds what changed.

## What happened
The first run emitted 178 items and left 193 unresolved (`_work/parse-book.log`: "key not parsed",
"options not parsed"). Cause: the `.L.txt` / `.R.txt` files are a geometric cut at the page midline
and text crossing the cut broke answer blocks.

## What is new
`content/peds/qb-pages/sa/book/pNNNN.raw.txt` now exists for all 194 pages: the same pages
extracted in reading-order mode (no `-layout`). Each column comes out whole and in order, left
column then right column; nothing is cut at the midline. Known noise in that mode:
- the vertical margin tab prints as short standalone lines, the chapter title and the chapter
  number each on a line of their own (e.g. `Genetics` then `9`), sometimes mid-paragraph;
- a blank line appears where a column or a text block ends, including in the middle of a sentence;
- soft hyphens (`U+00AD`) and line-end hyphenation split words;
- figure captions and table text sit inline where the figure is printed.
Make `.raw.txt` the primary input. Keep the `-layout` whole-page file (`pNNNN.txt`) as the
tie-breaker for anything ambiguous (table layout, which column a figure sits in).

## Job
Rework `_work/parse-book.js` on the `.raw.txt` input (rewrite it if that is quicker than patching)
and bring `sa-book.array.js` to the full book: every `N.N` single-best item and every `N.N.N`
extended-matching sub-item in all 31 chapters. Where the parser cannot recover an item, hand-enter
it from the page text and list it in the report. Extend `_work/check-book.js` so its raw count of
printed numbers also reads the `.raw.txt` files, and so it exits non-zero when, for any chapter,
questions printed, answers printed and items parsed are not all equal.

## Must verify before reporting
`node content/peds/qb-pages/sa/_work/check-book.js` exits 0 with the three counts equal in all 31
chapters. Read ten items spread across the book against their page text by eye. Overwrite
`_work/report-2.md` (max 150 words) with the final state. If the clock runs short, write what is
done to disk and say exactly which chapters are complete; a silent gap is not acceptable.
