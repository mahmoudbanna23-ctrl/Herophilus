# Draft section 6 (Conjunctiva) of the ophthalmology endpoint book — Step 3 ONLY

Working root: `D:\claude os\Medical school\Herophilus`. Steps 1 and 2 (box/figure/key
confirmation, `expl` transcription into the array file) are DONE and committed (`98da2d6`).
This brief covers Step 3 only: write the 39-entry draft file. Ignore any earlier version of this
brief file that asked for Steps 1/2 — those are finished.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s06-conjunctiva.draft.js` — create fresh, 39 entries.
- Nothing else. Do not touch the `.array.js` file, `sec-oph.js`, `val-oph-ep.js`, any other
  section's files, or `modules.js`. Do not run git. Do not run the validator or splice tool.

## Inputs (read these yourself)

- `content/ophtho/qb-pages/oph-ep-p1-s06-conjunctiva.array.js` — the source of truth for every
  row's `n`, `p`, `key`, `stem`, `opts`, `expl`. `expl` is already filled verbatim for every boxed
  row and left as `""` for every unboxed row — do not second-guess it.
- `content/ophtho/qb-pages/oph-ep-p1-s05-eyelids.draft.js` — exact structural template: variable
  declaration shape, field order, explanation formatting for both boxed and unboxed rows.
- `content/ophtho/lectures/L6) Conjunctiva.txt` and `content/ophtho/book/ch06-conjunctiva.txt` —
  source material for authoring unboxed-row explanations. Do not cite these filenames inside any
  explanation text; use them only as background knowledge.

## Row classification (already confirmed, do not re-derive)

- **Boxed** (expl non-empty in the array): n = 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,31,32,33,34,35
  (21 rows).
- **Unboxed** (expl empty in the array): n = 1,18,19,20,21,22,23,24,25,26,27,28,29,30,36,37,38,39
  (18 rows).

## No image on any row

Do not write `image` or `imgAlt` on any row, including n:8. Its figure crop is a separate,
already-completed edit outside this file's scope — the staging array carries no `fig` field for
this section, so no row in this draft gets an image.

## Per-row shape

```
{ id:"ophep-conjunctiva-<n>", bank:"endpoint", module:"ophtho", chapter:"op-conj",
  stem:"<byte-identical to array .stem>", options:[<byte-identical to array .opts>],
  answer:<array .key, integer, unchanged>,
  explanation:"<see below>",
  objective:"<one-line teaching takeaway, third person, never referencing the brief or staging>",
  source:"Opthalmology endpoint.pdf p.<array .p>" }
```

`answer` is the array's `key` field taken as-is (zero-based integer; array n:8 is already
corrected to 0 — use it as given, do not re-adjudicate).

**Boxed rows** — explanation is exactly this shape, copy the marker character-for-character
including the curly apostrophe (U+2019):

```
<1-3 sentence written summary of the teaching point, third person, addressed to the student>

**The endpoint file prints this explanation:**
> <the row's array .expl text, reflowed onto '> '-prefixed lines however reads naturally>

*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*
```

The blockquote must reproduce the array's `.expl` text (normalizing whitespace is fine; do not
paraphrase or drop content from it).

**Unboxed rows** — no box exists, so author the explanation yourself from the lecture/book
material, then close with the unboxed marker (no asterisks around it, copy exactly):

```
<written explanation, grounded in the Conjunctiva lecture and book chapter>

Written for this bank — Opthalmology endpoint.pdf prints no explanation here.
```

## Hard rules (validator enforces these byte-exactly)

- `stem` and `options` must be byte-identical to the array's `.stem`/`.opts` — no retyping, copy
  exactly including any source typos.
- `source` must cite the array's own `.p` for that row (the unmarked/staged page, not p+1).
- Never write "per the brief", "per staging", "n:<number>", "half A/B", "draft-A/B", or any
  process/staging language inside an explanation — it is addressed to a student who has never
  seen this brief.
- Never let a literal backtick appear unpaired in an explanation.
- Every explanation string ends with its marker as the literal final characters (only trailing
  `*` tolerated after the boxed marker).
- Each marker (boxed or unboxed) must appear exactly once per explanation, and never the other
  chapter's marker.

## Report

When done, report: total entries written (must be 39), boxed vs unboxed counts (21/18), and
anything you found unclear or had to guess at while authoring an unboxed explanation.
