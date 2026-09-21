# s27 Summer Exam - image check brief

Goal: verify built array rows against the printed page images, row by row. Read-only except your report file.

Book: Opthalmology endpoint.pdf, "Summer Exam" (PDF pages 2175-2329). Every question is printed twice: an UNMARKED page (options, no answer) then a MARKED twin (correct option highlighted, sometimes an explanation box below). Printed page = PDF page + 1.

Inputs
- Array (the rows under test): D:\claude os\Medical school\Herophilus\content\ophtho\qb-pages\oph-ep-p2-s27-summer-exam.array.js
  var OPHEP2_S27_STAGED = [ { n, p (unmarked PDF page), mp (marked PDF page), key (0-based option index), stem, opts, expl, boxPrinted, fig }, ... ]
  Load with: node -e "const rows=new Function(require('fs').readFileSync(PATH,'utf8')+';return OPHEP2_S27_STAGED')(); ..." and print only your rows.
- Page images: C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\1cad8553-8915-4dc7-8b39-01029d5b0ea5\scratchpad\r27\p-<PDFpage>.png (2176..2329). If a file is missing, say so; do NOT re-render.
- Sweep output (candidate matches by marked page): D:\claude os\Medical school\Herophilus\content\ophtho\qb-pages\_s27-work\s27.sweep.txt
- Live banks to grep for reprints: D:\claude os\Medical school\Herophilus\app\data\questions.ophtho.ep.js, questions.ophtho.ep2.js (endpoint, this bank) and questions.ophtho.js (House bank). Grep with the Grep tool, quoted distinctive terms only; never read these files whole.

For EACH of your rows, look at BOTH page images yourself and report:
1. staging: does the array stem match the page stem word for word (medical terms, numbers, units exact)? Do the options match text and ORDER? List every difference.
2. key: which option does the marked page highlight (letter + text)? Does it equal opts[key]? Quote the highlight evidence.
3. box: is an explanation box printed on the marked page? If yes does array expl match verbatim (first difference only)? If the array has expl but the page has no box, or the reverse, say so.
4. figure: does either page carry a picture/figure/diagram/photo? (y/n, and one line where.) Array fig flag agrees?
5. reprint: pick 2 distinctive terms from the stem plus the key text and Grep the three live files. Report the id of any live entry that asks the SAME question (same clinical scenario, same key) even if the stem is reworded, or "NEW". Sibling questions that share an option menu or a vignette are PAIRS, name them as PAIR, never as reprint. The sweep file shows machine candidates for your rows; confirm or reject them on the page.

Also state anything odd: two questions on one page, a page swapped or missing, option count other than 4, a key marker that is ambiguous (two highlights, none, faint), text cut off.

Output: one line per row in this shape, then a short "PROBLEMS" list of every row that is not clean.
n<N> p.<p>/<mp> | staging OK|DIFF(<what>) | key OK(page marks <letter>, array key <index>)|DIFF(<what>) | box none|printed OK|printed DIFF(<what>) | figure n|y(<where>) | reprint NEW|PAIR(<id>)|MATCH(<id>, exact|reworded)
Write the file, then return under 250 words: counts of clean rows, and each problem row with one clause. Never invent a page reading: if you cannot read something, write UNREADABLE.

Rules: look at the image, quote what is printed, never trust the array text as the reading. Do not modify any project file except your report. Do not read any PDF. Cap: 60 tool calls, then stop and report what you have; a partial pass reported honestly is a success.
