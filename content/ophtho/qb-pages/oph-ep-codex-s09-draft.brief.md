# Draft section 9 (Lens) of the ophthalmology endpoint book — staging JSON straight to array + draft

Working root: `D:\claude os\Medical school\Herophilus`. This is a single brief covering both output
files in one pass (unlike the s06 two-step brief) because no `.array.js` exists yet for this section
— you are building it directly from the raw staging JSON.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s09-lens.array.js` — create fresh, var `OPHEP_S09_STAGED`.
- `content/ophtho/qb-pages/oph-ep-p1-s09-lens.draft.js` — create fresh, var `OPHEP_S09_DRAFT` (or any
  name starting `var `; the validator reads the declared var, not a fixed name).
- Nothing else. Do not touch `sec-oph.js`, `val-oph-ep.js`, any other section's files, or
  `modules.js`. Do not run git. You MAY run `node tools/bank-harness/val-oph-ep.js --part 1 9` to
  self-check before reporting back — do this, it is the fastest way to catch a mistake yourself.

## Inputs (read these yourself — nothing here substitutes for reading the JSON)

- `content/ophtho/qb-pages/oph-ep-p1-s09-lens.staging.json` — the ONLY source of truth for every
  row's page numbers, stem, options, key, box text and box-printed flag. 79 page objects, schema
  `{pdf_page, printed_page, page_type, printed_q, stem, options, key_letter, key_index, box_printed,
  explanation_verbatim, figure, figure_desc, numeric_note}`. `page_type` is one of
  `theory` / `question_unmarked` / `question_marked` / `question_single`.
- `content/ophtho/qb-pages/oph-ep-p1-s07-sclera.array.js` and `.draft.js` — exact structural
  templates for both output files: field names, field order, comment header shape, `keypos` shape,
  boxed vs unboxed explanation formatting. Copy the shape, not the content.
- `tools/bank-harness/val-oph-ep.js` — authoritative schema/validator; read it to know exactly what
  is checked (byte-identity of stem/options against the array, marker strings, `answer` = array
  `key` unchanged, `source` citing `p.<array .p>`, etc). Section 9's config lives in `sec-oph.js`
  line for `9:` — already set with `folded: [18, 19]` (see Fold decisions below); you do not need to
  edit that file, just satisfy what it now requires.
- `content/ophtho/lectures/` and `content/ophtho/book/` — search these for the lens/cataract chapter
  text to author unboxed-row explanations from. Do not cite filenames inside any explanation.

## Step 1 — group the 79 pages into 27 questions

Each question is normally one `question_unmarked` + one `question_marked` page pair sharing the same
`printed_q`. **Exception: `printed_q:14` covers TWO distinct questions**, not one — the book's own
question numbering is defective there (a book's own chapter/question numbers can be defective;
content order wins, not the printed number). Do not group `printed_q:14`'s four pages together.
Instead: the four pages under `printed_q:14` actually form two unmarked+marked pairs with two
different stems — group each pair by matching stem text, not by the shared printed_q. Verify this
yourself by reading the stems; do not take the split on faith without checking the JSON.

Sort the resulting 27 groups by ascending `pdf_page` (equivalently ascending `printed_page`) of each
group's `question_unmarked` row. Number them `n:1` through `n:27` in that sorted order — this will
naturally place the two split `printed_q:14` groups as consecutive n's between the `printed_q:13`
group and the `printed_q:15` group, with the earlier-paged split half getting the lower n. Do not
renumber any other way.

Use each group's `question_unmarked` row for `stem`/`options`/`p` (the array's `p` field = that row's
own `printed_page`, taken from the JSON — never typed from memory). Use the `question_marked` row for
`key`/`key_index`/`box_printed`/`explanation_verbatim`. If the unmarked and marked rows' stem/options
text differ (they normally should not — a few rows are known to carry a leaked printed-question-number
artifact, e.g. a stray "17." or "18." prefix bled into one transcription), use the unmarked row's text
as canonical for the array's `stem`/`opts`, since that is the field the draft and the validator both
read from.

## Fold decisions (already adjudicated — do not re-derive, do not add any fold of your own)

Two within-section folds, both boxed-second-printing exact reprints (identical stem, options and key;
one copy carries the printed explanation box, the other does not and also carries a leaked
question-number prefix artifact in its stem):

- The group built from **`printed_q:17`** folds into the group built from **`printed_q:11`**.
- The group built from **`printed_q:18`** folds into the **earlier-paged (first)** of the two groups
  split out of **`printed_q:14`**.

After you compute your own sequential n-numbering in Step 1, the `printed_q:17` group and the
`printed_q:18` group MUST land at **n:18** and **n:19** respectively, and their fold targets MUST be
**n:11** and **n:14** respectively — `sec-oph.js` already has `folded: [18, 19]` hard-coded for this
section on that basis. **If your own numbering produces different n's for these four groups, STOP and
report the mismatch instead of proceeding** — do not silently renumber to make it fit and do not edit
`sec-oph.js` yourself.

Both `printed_q:17` and `printed_q:18`'s groups still get a full, normal row in the **array** file
(transcribed like every other row, stem/opts verbatim including any artifact in their own text) — they
are simply never drafted. Do not write `ophep-lens-18` or `ophep-lens-19` in the draft file at all.

## Shared-option-menu groups — NOT folds, both/all members stay live

A shared option menu **pairs** questions, it never folds them. Two groups in this section reuse an
option-menu template across genuinely different questions:

1. **n:16 and n:17** (built from `printed_q:15` and `printed_q:16`): identical 4-option menu, but
   different stems describing different lens-capsule conditions (one "intumescent", the other
   "wrinkled") with different correct answers. Keep both as separate live questions.
2. **n:3, n:8, and n:26** (built from `printed_q:3`, `printed_q:8`, `printed_q:25`): three distinct
   clinical vignettes (different patient ages/findings/diagnoses) that happen to reuse a common
   cataract-type-differential option menu.

**Only if, on your own read of the JSON, the option text in each such group is exactly identical**
(case/whitespace-insensitive — check `val-oph-ep.js`'s own `SHARED` grouping logic, it does this
automatically and will fail the draft if a non-anchor member doesn't comply): every member other than
the lowest-numbered one in its group must mention that lowest-numbered member's id
(`ophep-lens-16` for group 1, `ophep-lens-3` for group 2) in backticks somewhere in its explanation,
naming the discriminating token (e.g. "unlike `ophep-lens-16`, which..."). If your own read finds the
option text is NOT byte-identical after normalization for any of these groups, the validator will not
auto-detect them as shared and no forced cross-reference is required — just draft each normally and
say so in your report.

Do not treat any other pair or trio you might notice as a fold or a forced cross-reference unless it
matches one of the two groups above; if you spot something that looks like an undisclosed duplicate,
do not act on it — name it in your final report instead and leave it drafted normally.

## Per-array-row shape

Copy `oph-ep-p1-s07-sclera.array.js`'s exact structure: header comment (adapt page range/source
description to section 9), `var OPHEP_S09_STAGED = [ ... ];`, each row:

```
{ n:<int 1-27>, p:<printed_page of the unmarked row>, key:<key_index of the marked row, 0-based>,
  stem:"<verbatim>", opts:["<verbatim>", ...],
  expl:"<explanation_verbatim of the marked row if box_printed true, else empty string>",
  boxPrinted:<box_printed of the marked row>,
  keySource:"Recorded in the staged s09 source (oph-ep-p1-s09-lens.staging.json), 2026-09-16. Not re-run or re-derived by this script.",
  keypos:{"visualIndex":<key_index>,"keyposIndex":null,"agree":null},
  numberCheck:<true if stem/options carry a number, unit, dose, exponent, arrow or dash>,
  note:"<KEY line + NUMBER CHECK line if applicable + EXPLANATION BOX line, same phrasing pattern as the s07 template; add the fold/split/shared-menu note only on the four fold-related rows (n:11,14,18,19) and the five shared-menu rows (n:3,8,16,17,26), stating the decision in one sentence each, matching the tone of s07's own n:1/n:2 thematic-overlap note>" },
```

All 27 raw numeric-note pages were independently re-verified against the source page images this
session with zero real discrepancies — trust the staged `stem`/`options`/`numeric_note` content as-is,
no further page-image checking is needed.

## Per-draft-row shape (25 entries: n:1-27 minus n:18, n:19)

Same shape and rules as the s06 brief's Step 3 (`oph-ep-codex-s06-draft.brief.md`, still on disk if
you want the fuller worked explanation of boxed/unboxed formatting) and the s07 draft file's own
content:

```
{ id:"ophep-lens-<n>", bank:"endpoint", module:"ophtho", chapter:"op-cat",
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

**Unboxed rows** (`boxPrinted:false`) — author from the lens/cataract lecture and book chapter, close
with, copied exactly:

```
<written explanation, grounded in the Lens/Cataract lecture and book chapter>

Written for this bank — Opthalmology endpoint.pdf prints no explanation here.
```

## No image on any row

All 79 staged pages have empty `figure`/`figure_desc` fields — checked directly against the JSON.
No row in this section gets an `image`/`imgAlt` field in the draft.

## Hard rules (validator enforces these byte-exactly — read them yourself in `val-oph-ep.js`)

- `stem`/`options` byte-identical to the array row, no retyping, no fixing source typos.
- `source` cites the array row's own `.p`.
- Never write "per the brief", "per staging", "n:<number>", "half A/B", "draft-A/B", or any
  process/staging language inside an explanation.
- No unpaired literal backtick in an explanation. Backticks ARE required (paired) around the two
  cross-reference ids described above.
- Every explanation ends with its exact marker as the literal final characters (only trailing `*`
  tolerated after the boxed marker); each marker appears exactly once; never the wrong marker.
- `n:18` and `n:19` must not appear in the draft file at all (folded).

## Report

When done, report: total array rows (must be 27), total draft rows (must be 25), boxed/unboxed split
of the drafted rows, confirmation the two folded n's landed at 18 and 19 as required (or the mismatch
if not, per the STOP instruction above), and anything you found unclear or had to guess at.
