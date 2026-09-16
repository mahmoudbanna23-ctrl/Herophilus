# Draft section 8 (Cornea) of the ophthalmology endpoint book — three source files straight to array + draft

Working root: `D:\claude os\Medical school\Herophilus`. Single brief covering both output files in one
pass — no `.array.js` exists yet for this section, you are building it directly from three raw
transcription sources.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s08-cornea.array.js` — create fresh, var `OPHEP_S08_STAGED`.
- `content/ophtho/qb-pages/oph-ep-p1-s08-cornea.draft.js` — create fresh, var `OPHEP_S08_DRAFT` (or
  any name starting `var `; the validator reads the declared var, not a fixed name).
- Nothing else. Do not touch `sec-oph.js`, `val-oph-ep.js`, any other section's files, or
  `modules.js`. Do not run git. You MAY run `node tools/bank-harness/val-oph-ep.js --part 1 8` to
  self-check before reporting back — do this, it is the fastest way to catch a mistake yourself.

## Inputs (read these yourself — nothing here substitutes for reading them)

- `content/ophtho/qb-pages/oph-ep-p1-s08-cornea.source-a.txt` — Gemini vision transcription, pdf
  pages 560-599 (40 images): theory pages 560-580 (SKIP, no questions there) + questions 1-9 full
  (both unmarked+marked pages) + question 10's unmarked page only (page 599).
- `content/ophtho/qb-pages/oph-ep-p1-s08-cornea.source-d1.json` — Claude subagent transcription,
  pdf pages 600-618: question 10's marked page (600) + questions 11-19 full.
- `content/ophtho/qb-pages/oph-ep-p1-s08-cornea.source-d2.json` — Claude subagent transcription,
  pdf pages 619-638: questions 20-29 full.
- Combined, these three files cover every question page (581-638) with zero gaps: 29 questions,
  printed_q 1-29, each a `question_unmarked` + `question_marked` pair. **Page arithmetic for this
  section (do not copy s07's or s09's constants): unmarked page = 579 + 2n, marked page = 580 + 2n**
  (n = printed question number, 1-based).
- `content/ophtho/qb-pages/oph-ep-p1-s07-sclera.array.js` and `.draft.js` — exact structural
  templates for both output files: field names, field order, comment header shape, `keypos` shape,
  boxed vs unboxed explanation formatting. Copy the shape, not the content.
- `tools/bank-harness/val-oph-ep.js` — authoritative schema/validator; read it to know exactly what
  is checked (byte-identity of stem/options against the array, marker strings, `answer` = array
  `key` unchanged, `source` citing `p.<array .p>`, etc). Section 8's config is `sec-oph.js` line for
  `8:` — already set with `folded: [17]` (see Fold decision below); you do not need to edit that
  file, just satisfy what it now requires.
- `content/ophtho/lectures/L15,16) Cornea.txt` — cached lecture text, use it to author unboxed-row
  explanations. Do not cite the filename inside any explanation.

## Step 1 — build 29 rows, n = printed question number (no renumbering, no splits this section)

Unlike section 9, this section has no defective/split question numbering — `n` equals the printed
question number directly, 1 through 29. Use each question's `question_unmarked` row for
`stem`/`options`/`p` (array's `p` = that row's own `printed_page`, taken from the source — never
typed from memory). Use the `question_marked` row for `key`/`key_index`/`box_printed`/
`explanation_verbatim`.

## Fold decision (already adjudicated — do not re-derive, do not add any fold of your own)

**n:17 folds into n:11.** Both are the same question (young boy with Down syndrome, conical corneal
protrusion, key: Pentacam) with identical options except n:17's option A reads "Amsler's gird" (typo)
where n:11's reads "Amsler's grid" (correct). Same key both printings. n:11 survives as the drafted
entry; n:17 still gets a full, normal row in the **array** (transcribed verbatim including its own
typo, not corrected there) but is **never drafted** — do not write `ophep-cornea-17` in the draft
file at all. Final array: 29 rows. Final draft: 28 rows.

## Key convention for n:28 — read the source positionally, not by printed letter

The source page for n:28 prints options out of alphabetical order (a, c, b, d top-to-bottom) and
highlights the *second* row while labeling it "c)". Convention: `options[]` stays in printed
top-to-bottom order as transcribed; `key`/`answer` is the 0-based index of the highlighted text
("Dendritic ulcer", index 1), never the printed letter. This is a page-layout artifact, not a
defective key — transcribe positionally, no "disputed key" note needed.

## n:14 — explanation box is off-topic, do not reuse its text

n:14's printed explanation box discusses intra-ocular foreign body management, but n:14's own stem
is about chemical eye burn management — a source defect. Transcribe the box verbatim into the
array's `expl` field, unmarked as anything unusual there. In the **draft**, author the explanation
addressing the actual stem (chemical burn), and note in one sentence that the endpoint file's own
printed box is off-topic — per "a defective key/box is noted, never disputed," do not silently
reuse the mismatched box text as if it answered the stem.

## Gap-fill rows — no explanation box printed, author from the lecture cache

n:17, n:18, n:19, n:20, n:21, n:22, n:23, n:24, n:28, n:29 print a highlighted answer with **no**
explanation box. Author each from `L15,16) Cornea.txt`; tag `not taken from the course material`
only if the lecture genuinely does not cover that point. (n:17 is folded and never drafted — skip
it here; this list is for completeness against the source, only n:18 through n:29's members that
lack boxes actually need authored explanations.) All other rows (n:1-16, n:25-27) do print a box —
verify `box_printed` per-row from the source files, do not assume from this list alone.

## Two figures in this section — no image asset exists yet, do not skip silently

n:1 (cornea-layer diagram) and n:9 (Munson's-sign photo) have real figures described in the source
transcription, but **no cropped image file exists anywhere in the project for either** (checked:
`app/assets/`, `content/ophtho/` — neither holds a cornea crop). Do not invent an `image`/`imgAlt`
field pointing at a file that does not exist, and do not silently drop the figure. Instead: write
each row normally without an `image` field, and add one clause to that row's `note` field flagging
it needs a figure crop added later (e.g. "figure pending: cornea-layer diagram, source p.<page>,
not yet cropped"). Every other row in this section has no figure — do not add this clause anywhere
else.

## Per-array-row shape

Copy `oph-ep-p1-s07-sclera.array.js`'s exact structure: header comment (adapt page range/source
description to section 8), `var OPHEP_S08_STAGED = [ ... ];`, each row:

```
{ n:<int 1-29>, p:<printed_page of the unmarked row>, key:<key_index of the marked row, 0-based>,
  stem:"<verbatim>", opts:["<verbatim>", ...],
  expl:"<explanation_verbatim of the marked row if box_printed true, else empty string>",
  boxPrinted:<box_printed of the marked row>,
  keySource:"Recorded in the staged s08 sources (oph-ep-p1-s08-cornea.source-a.txt, .source-d1.json, .source-d2.json), 2026-09-16. Not re-run or re-derived by this script.",
  keypos:{"visualIndex":<key_index>,"keyposIndex":null,"agree":null},
  numberCheck:<true if stem/options carry a number, unit, dose, exponent, arrow or dash>,
  note:"<KEY line + NUMBER CHECK line if applicable + EXPLANATION BOX line, same phrasing pattern as the s07 template; add the fold note only on n:11 and n:17, the off-topic-box note only on n:14, and the figure-pending note only on n:1 and n:9, one sentence each>" },
```

## Per-draft-row shape (28 entries: n:1-29 minus n:17)

Same shape and rules as the s07 draft file's own content:

```
{ id:"ophep-cornea-<n>", bank:"endpoint", module:"ophtho", chapter:"op-cornea",
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

**Unboxed rows** (`boxPrinted:false`) — author from the cornea lecture, close with, copied exactly:

```
<written explanation, grounded in the Cornea lecture>

Written for this bank — Opthalmology endpoint.pdf prints no explanation here.
```

n:14 is a special case of a boxed row — see the section above; still use the boxed-row closing
format (it does have `box_printed:true`), but the written summary paragraph above the box must
address the chemical-burn stem and name the box's off-topic mismatch, not just summarize the box.

## No image field on any row except the two flagged in notes

Per the figures section above: no row gets an `image`/`imgAlt` field this pass, including n:1 and
n:9 — they get a `note` flag only, not a fabricated file reference.

## Hard rules (validator enforces these byte-exactly — read them yourself in `val-oph-ep.js`)

- `stem`/`options` byte-identical to the array row, no retyping, no fixing source typos (n:17's
  "gird" typo stays in the array verbatim).
- `source` cites the array row's own `.p`.
- Never write "per the brief", "per staging", "n:<number>", "source-a/d1/d2", or any process/staging
  language inside an explanation.
- No unpaired literal backtick in an explanation.
- Every explanation ends with its exact marker as the literal final characters (only trailing `*`
  tolerated after the boxed marker); each marker appears exactly once; never the wrong marker.
- `n:17` must not appear in the draft file at all (folded).

## Report

When done, report: total array rows (must be 29), total draft rows (must be 28), boxed/unboxed
split of the drafted rows, confirmation n:17 is absent from the draft, confirmation of the n:28
positional-key handling and the n:14 off-topic-box handling, and anything you found unclear or had
to guess at.
