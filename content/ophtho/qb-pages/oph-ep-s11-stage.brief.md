# Stage section 11 (Glaucoma) of the ophthalmology endpoint book

Working root: `D:\claude os\Medical school\Herophilus`.

## Scope

Pages 788-849 (62 pages, inclusive) of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`
(confirm the range from entry 11 of `SEC_P1` in `tools/bank-harness/sec-oph.js`). `Semester 8\` is
read-only — never modify, rename, move or delete anything in it.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s11-glaucoma.staging.json` — the output, new file.
- `content/ophtho/qb-pages/_manifest.json` — the run's provenance manifest, overwrite it (this is a
  generic filename reused by every section's staging run; it gets committed alongside each
  section's staging.json, so overwriting it is expected and correct).
- Render scratch: your own scratchpad only, never the project tree.

Nothing else. Do not edit any script. Do not run git.

## Pipeline

1. Render each of the 62 pages to PNG at 150 dpi with `pdftoppm` (Poppler is installed but off
   PATH — find it under `...\WinGet\Packages\oschwartz10612.Poppler_...\`) into your scratchpad.
2. For each page image, use the vision ladder from `CLAUDE.md` §9 (pong-probe each rung, drop a
   dead one without retrying): Codex solo `codex exec -i <png>` -> gateway `auto/vision` -> Gemini
   by key (`tools/gemini-vision/ask_gemini_multi.js`, needs `GEMINI_API_KEY`) -> only if all three
   fail liveness, a Claude subagent. Whichever rung is alive, use it for every page in this run —
   don't mix rungs mid-run unless one dies partway.
3. Extract structured data per page into this EXACT schema (match field names, types and null
   handling precisely — this is the schema `oph-ep-p1-s10-uveal-tract.staging.json` already uses,
   copy its shape byte for byte):

```json
{
  "pdf_page": 788,
  "printed_page": "788",
  "page_type": "theory",
  "printed_q": null,
  "stem": null,
  "options": null,
  "key_letter": null,
  "key_index": null,
  "box_printed": false,
  "explanation_verbatim": null,
  "figure": false,
  "figure_desc": null,
  "numeric_note": "788"
}
```

- `page_type` is one of exactly three values: `"theory"` (no question on the page), `"question_unmarked"`
  (a question with no key marked/boxed yet), `"question_marked"` (a question whose key letter is
  marked and/or whose explanation box is printed).
- A `question_unmarked` or `question_marked` page has `printed_q` (the book's own printed question
  number, as a string), `stem`, and `options` (array of option-text strings, no "A./B./C." prefixes)
  all non-null.
- Only `question_marked` pages carry `key_letter` (lowercase a/b/c/...), `key_index` (0-based int),
  and, when a box is printed, `box_printed: true` with `explanation_verbatim` holding the box's exact
  printed text (verbatim, not paraphrased). If no box is printed on a marked page, `box_printed:
  false` and `explanation_verbatim: ""`.
- `figure: true` + `figure_desc` (short plain description, not the medical read) when the page shows
  a diagram/photo; otherwise `figure: false`, `figure_desc: null` or `""`.
- `numeric_note` is a free-text scratch field: every bare number visible on the page (question
  numbers, list numbers, the page number itself), comma-separated, in reading order — this is what a
  later duplicate/adjacency sweep keys off, so do not skip it.
- Read every one of the 62 pages — never trust the book's own question numbering or a page-count
  assumption. If a page is genuinely blank or a section divider, still emit a `theory`-type row for
  it (do not drop rows — the array must have exactly 62 entries, `pdf_page` 788..849, no gaps).

4. Write the array (sorted by `pdf_page` ascending) to
   `content/ophtho/qb-pages/oph-ep-p1-s11-glaucoma.staging.json`.
5. Write a manifest to `content/ophtho/qb-pages/_manifest.json` with this shape (copy the existing
   file's field names — `source_pdf`, `requested_range`, `model`, `start_time`, `end_time`,
   `pages_completed`, `parse_errors`, `http_errors`, `stopped_by_429`, and a `pages` array of
   `{page, image, status, parse_error}` per page). If a page 429s, back off and double the gap
   (cap 60s) and retry the SAME page — do not skip it. If a page comes back a transient
   4xx/5xx and a retry within this run fixes it, record the final successful status; only leave
   `parse_error: true` for a page that never recovered.

## Report

Write a short report to your scratchpad only (not the project tree): pages completed, any pages
that never recovered from an error (and what you did instead — do not silently invent content for
a page you could not read), the `page_type` counts, and how many pages required more than one
vision-ladder rung. Do not judge fold candidates, duplicate content, or answer-key correctness —
that adjudication happens in a separate pass. Do not touch git.
