# Draft section 15 (Squint) of the ophthalmology endpoint book — array file already built, write the draft file only

Working root: `D:\claude os\Medical school\Herophilus`. The `.array.js` for this section already exists and is
final. Your only job is `oph-ep-p1-s15-squint.draft.js`. Do not rebuild or edit the array.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s15-squint.draft.js` — create fresh, `var OPHEP_S15_DRAFT = [ ... ];`.
- Nothing else. Do not touch `sec-oph.js`, `val-oph-ep.js`, the array file, any other section's files, or
  `modules.js`. Do not run git. Run `node tools/bank-harness/val-oph-ep.js --part 1 15` before you report; it is the
  fastest way to catch your own mistake. **It will report a hole for n:2 and n:7 until the orchestrator adds the
  `folded` field — that specific complaint is expected; every other complaint is yours to fix.**
- Work in one pass: write the file incrementally (a few entries per `Edit`-append), so a dead session leaves a
  usable partial file.

## Inputs (read them yourself)

- `content/ophtho/qb-pages/oph-ep-p1-s15-squint.array.js` — `var OPHEP_S15_STAGED`, 11 rows `{n,p,key,stem,opts,expl,
  boxPrinted,keySource,keypos,numberCheck,note}`. The ONLY source of truth for stems, options, keys and printed pages.
  Read each row's `note` field: it carries per-row facts you must respect.
- `content/ophtho/qb-pages/oph-ep-p1-s10-uveal-tract.draft.js` (and `s07-sclera`) — structural templates: field order,
  boxed vs unboxed explanation shape, `objective` register. Copy the shape, not the content.
- `tools/bank-harness/val-oph-ep.js` — authoritative validator; read what it checks.
- Teaching sources for the written explanations, search these yourself: `content/ophtho/lectures/L29) Sqint I.txt`,
  `content/ophtho/lectures/L30) Squint II.txt`, `content/ophtho/book/ch15-squint.txt`. For n:1 (fluorescein) search
  `content/ophtho/lectures/L3,4) Clinical- Ocular examination.txt` first. Never cite a filename inside an explanation.

## What to draft — 9 entries, ids `ophep-squint-<n>`

Draft n = 1, 3, 4, 5, 6, 8, 9, 10, 11. **Do NOT write `ophep-squint-2` or `ophep-squint-7`**: both are already
adjudicated exact reprints of a live entry (`ophep-optics-refraction-9`) and are folded; they stay in the array only.
No row in this section has a printed box, so all 9 are unboxed. No row carries an image.

Per entry:

```
{ id:"ophep-squint-<n>", bank:"endpoint", module:"ophtho", chapter:"<see below>",
  stem:"<byte-identical to array .stem>", options:[<byte-identical to array .opts>],
  answer:<array .key, integer, unchanged>,
  explanation:"<see below>",
  objective:"<one-line teaching takeaway, third person, never referencing the brief or staging>",
  source:"Opthalmology endpoint.pdf p.<array .p>" }
```

- **chapter:** `op-squint` for every entry EXCEPT n:1, which is a fluorescein question and takes `op-intro-exam`.
- Copy `stem`/`options` character for character — no fixing typos (n:9 prints "heterotrpia", n:10 prints a lowercase
  "which", n:10/n:11 print options A and D with identical text). Never renumber, never reorder options.

## Explanations (all 9 unboxed)

Author from the lecture and book chapter, third person, English, medical terminology exactly as the source writes it.
Depth: about 250 words for straight-recall rows, up to about 520 for the vignettes (n:3, n:5, n:10, n:11). Explain why
the keyed option is right AND why each distractor is wrong. Then close with this exact final line, copied character for
character, preceded by a blank line:

```
Written for this bank — Opthalmology endpoint.pdf prints no explanation here.
```

Rules that are not optional:

- **The `answer` never moves.** If the lecture or book contradicts the printed key on any row, keep `answer` as is and add a
  short paragraph headed `Note on the printed key:` quoting what the lecture says. Never argue the key is wrong.
- **A gap in the material is answered, not declared.** If the lecture does not cover a fact the row needs, state it from
  general medical knowledge and put the short tag `not taken from the course material` after that claim. Never write a
  sentence saying the material does not cover it.
- n:5 (poorly-controlled diabetes, paralytic strabismus, watchful waiting): find the lecture's stated wait period and
  reconcile it with the two timed options; the keyed option stays.
- n:9 (intermittent strabismus): the key is C. If the lecture supports A and B as well, say so in a `Note on the printed
  key:` paragraph; do not change `answer`.
- n:10 and n:11: option A and option D print identical text. Say in one sentence that the two lines read the same and that
  the printed key is the marked one; then teach the differential (abducens vs trochlear palsy: deviation, head posture,
  worse gaze). Do not "correct" option D.
- n:1 (fluorescein): explain what fluorescein stains and why it does not help with rhegmatogenous retinal detachment.
- No process language inside any explanation ("per the brief", "staging", "array", "n:<number>", "half A/B", "draft").
- No unpaired literal backtick. The marker is the literal last characters of the explanation; it appears exactly once.
- Numbers, ages, durations and units in an explanation are copied from the array or the lecture, never estimated.

## Report

When done: draft row count (must be 9), confirm ids 2 and 7 are absent, list any row where the lecture contradicted the
printed key, list any fact you had to fill from general knowledge, and paste the validator's final output verbatim.
