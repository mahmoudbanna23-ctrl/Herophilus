# Draft section 10 (Uveal Tract) of the ophthalmology endpoint book — staging JSON straight to array + draft

Working root: `D:\claude os\Medical school\Herophilus`. This is a single brief covering both output
files in one pass (unlike the s06 two-step brief) because no `.array.js` exists yet for this section
— you are building it directly from the raw staging JSON.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s10-uveal-tract.array.js` — create fresh, var `OPHEP_S10_STAGED`.
- `content/ophtho/qb-pages/oph-ep-p1-s10-uveal-tract.draft.js` — create fresh, var `OPHEP_S10_DRAFT` (or any
  name starting `var `; the validator reads the declared var, not a fixed name).
- Nothing else. Do not touch `sec-oph.js`, `val-oph-ep.js`, any other section's files, or
  `modules.js`. Do not run git. You MAY run `node tools/bank-harness/val-oph-ep.js --part 1 10` to
  self-check before reporting back — do this, it is the fastest way to catch a mistake yourself.

## Inputs (read these yourself — nothing here substitutes for reading the JSON)

- `content/ophtho/qb-pages/oph-ep-p1-s10-uveal-tract.staging.json` — the ONLY source of truth for every
  row's page numbers, stem, options, key, box text and box-printed flag. 70 page objects, schema
  `{pdf_page, printed_page, page_type, printed_q, stem, options, key_letter, key_index, box_printed,
  explanation_verbatim, figure, figure_desc, numeric_note}`. `page_type` is one of
  `theory` / `question_unmarked` / `question_marked` / `question_single`.
- `content/ophtho/qb-pages/oph-ep-p1-s07-sclera.array.js` and `.draft.js` — exact structural
  templates for both output files: field names, field order, comment header shape, `keypos` shape,
  boxed vs unboxed explanation formatting. Copy the shape, not the content.
- `tools/bank-harness/val-oph-ep.js` — authoritative schema/validator; read it to know exactly what
  is checked (byte-identity of stem/options against the array, marker strings, `answer` = array
  `key` unchanged, `source` citing `p.<array .p>`, etc). Section 10's config lives in `sec-oph.js`
  line for `10:` (chapter id `op-uvea`, pdf pages 718-787); you do not need to
  edit that file, just satisfy what it now requires.
- `content/ophtho/lectures/` and `content/ophtho/book/` — search these for the uveal tract chapter
  text to author unboxed-row explanations from. Do not cite filenames inside any explanation.

## Step 1 — group the pages into 24 raw question groups

Each question is normally one `question_unmarked` + one `question_marked` page pair sharing the same
`printed_q`. 

**Book printing defect (do not fold this pair):** `printed_q:12` appears twice in the book (pdf pages
762/763 and pdf pages 764/765). These are two different, unrelated questions (one about snowballs/treatment,
one about posterior uveitis etiology) — resolve by position-based numbering (making them n:12 and n:13),
do NOT fold this pair.

Sort the resulting 24 groups by ascending `pdf_page` (equivalently ascending `printed_page`) of each
group's `question_unmarked` row. Number them `n:1` through `n:24` in that sorted order. Do not
renumber any other way.

Use each group's `question_unmarked` row for `stem`/`options`/`p` (the array's `p` field = that row's
own `printed_page`, taken from the JSON — never typed from memory). Use the `question_marked` row for
`key`/`key_index`/`box_printed`/`explanation_verbatim`. If the unmarked and marked rows' stem/options
text differ, use the unmarked row's text as canonical for the array's `stem`/`opts`.

## Fold decisions (already adjudicated — do not re-derive, do not add any fold of your own)

One within-section fold:

- **`printed_q:14`** (pdf page 768-769, arriving at **n:15** in your sequential numbering) is an exact content
  duplicate of **`printed_q:12`** (pdf page 762-763, arriving at **n:12**) — same stem, same 4 options, same key.
  It must be folded into **n:12**, keeping n:12 as the surviving entry since it has the fuller printing
  (a printed explanation box with real text; 769's second printing has neither box nor explanation).

After you compute your own sequential n-numbering in Step 1, the `printed_q:14` duplicate group MUST land at
**n:15**, and its fold target MUST be **n:12**. **If your own numbering produces a different n for this group, STOP and
report the mismatch instead of proceeding** — do not silently renumber to make it fit and do not edit
`sec-oph.js` yourself.

The duplicate group at n:15 still gets a full, normal row in the **array** file
(transcribed like every other row, stem/opts verbatim) — it is simply never drafted.
Do not write `ophep-uveal-tract-15` in the draft file at all.

## Per-array-row shape

Copy `oph-ep-p1-s07-sclera.array.js`'s exact structure: header comment (adapt page range/source
description to section 10), `var OPHEP_S10_STAGED = [ ... ];`, each row:

```
{ n:<int 1-24>, p:<printed_page of the unmarked row>, key:<key_index of the marked row, 0-based>,
  stem:"<verbatim>", opts:["<verbatim>", ...],
  expl:"<explanation_verbatim of the marked row if box_printed true, else empty string>",
  boxPrinted:<box_printed of the marked row>,
  keySource:"Recorded in the staged s10 source (oph-ep-p1-s10-uveal-tract.staging.json), 2026-09-16. Not re-run or re-derived by this script.",
  keypos:{"visualIndex":<key_index>,"keyposIndex":null,"agree":null},
  numberCheck:<true if stem/options carry a number, unit, dose, exponent, arrow or dash>,
  note:"<KEY line + NUMBER CHECK line if applicable + EXPLANATION BOX line, same phrasing pattern as the s07 template; add the fold note on row n:15 stating the fold into n:12 in one sentence, and mention the printing defect on n:12/n:13>" },
```

## Per-draft-row shape (23 entries: n:1-24 minus n:15)

Same shape and rules as the s09 brief and s07 draft file's own content:

```
{ id:"ophep-uveal-tract-<n>", bank:"endpoint", module:"ophtho", chapter:"op-uvea",
  stem:"<byte-identical to array .stem>", options:[<byte-identical to array .opts>],
  answer:<array .key, integer, unchanged>,
  explanation:"<see below>",
  objective:"<one-line teaching takeaway, third person, never referencing the brief or staging>",
  source:"Opthalmology endpoint.pdf p.<array .p>" }
```

**Boxed rows** (`boxPrinted:true` in the array) — explanation ends with, copied character-for-character
including the curly apostrophe (U+2019):

```
<1-3 sentence written summary of the teaching point, third person>

**The endpoint file prints this explanation:**
> <the row's array .expl text, reflowed onto '> '-prefixed lines however reads naturally>

*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*
```

**Unboxed rows** (`boxPrinted:false`) — author from the Uveal Tract lecture and book chapter, close
with, copied exactly:

```
<written explanation, grounded in the Uveal Tract lecture and book chapter>

Written for this bank — Opthalmology endpoint.pdf prints no explanation here.
```

## No image on any row

All 70 staged pages have empty `figure`/`figure_desc` fields — checked directly against the JSON.
No row in this section gets an `image`/`imgAlt` field in the draft.

## Hard rules (validator enforces these byte-exactly — read them yourself in `val-oph-ep.js`)

- `stem`/`options` byte-identical to the array row, no retyping, no fixing source typos.
- `source` cites the array row's own `.p`.
- Never write "per the brief", "per staging", "n:<number>", "half A/B", "draft-A/B", or any
  process/staging language inside an explanation.
- No unpaired literal backtick in an explanation.
- Every explanation ends with its exact marker as the literal final characters (only trailing `*`
  tolerated after the boxed marker); each marker appears exactly once; never the wrong marker.
- `n:15` must not appear in the draft file at all (folded into n:12).

## Report

When done, report: total array rows (must be 24), total draft rows (must be 23), boxed/unboxed split
of the drafted rows, confirmation the folded n landed at 15 and merged into 12 as required, and anything you found unclear or had to guess at.
