# Draft section 8 (Cornea) draft.js ONLY — array.js already exists, do not touch it

Working root: `D:\claude os\Medical school\Herophilus`. This supersedes
`content/ophtho/qb-pages/oph-ep-codex-s08-draft.brief.md`'s Step 1 — that brief assumed no array.js
existed yet. It now exists, verified 29 rows, correct. **Do not rebuild it, do not edit it.**

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s08-cornea.draft.js` — create fresh, var `OPHEP_S08_DRAFT` (or
  any name starting `var `).
- Nothing else. Do not touch `array.js`, the three `.source-*` files, `sec-oph.js`, `val-oph-ep.js`,
  any other section's files, or `modules.js`. Do not run git. You MAY run
  `node tools/bank-harness/val-oph-ep.js --part 1 8` to self-check before reporting back.

## Input

- `content/ophtho/qb-pages/oph-ep-p1-s08-cornea.array.js` — read this, it is your ONLY source. It
  has 29 rows (`n:1` through `n:29`), each already carrying `stem`, `opts`, `key`, `expl`,
  `boxPrinted`, `note` (fold/figure-pending/off-topic-box flags already written into `note` per row).
- `content/ophtho/qb-pages/oph-ep-p1-s07-sclera.array.js` and `.draft.js` — structural templates for
  the draft file's field names/order/explanation format.
- `content/ophtho/lectures/L15,16) Cornea.txt` — cached lecture text for unboxed-row explanations.

## Everything else is unchanged from the original brief

Read `content/ophtho/qb-pages/oph-ep-codex-s08-draft.brief.md` sections "Fold decision", "Key
convention for n:28", "n:14 — explanation box is off-topic", "Gap-fill rows", "Two figures in this
section", "Per-draft-row shape", boxed/unboxed closing markers, "No image field", and "Hard rules" —
all of that still applies exactly as written. The only change is: don't re-derive the array from the
three raw source files, read it from the finished array.js instead.

n:17 is in the array (with its own typo transcribed) but must NOT appear in the draft file — it
folds into n:11 (see the original brief's Fold decision section).

## Report

Total draft rows (must be 28), boxed/unboxed split, confirmation n:17 is absent, confirmation of
n:28 positional-key handling and n:14 off-topic-box handling, anything unclear.
