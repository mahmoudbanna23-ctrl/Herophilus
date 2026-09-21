# Brief - marker apply tool (2026-09-21)

## Goal
Create `tools/bank-harness/oph-marker-apply.js`: replace the false closing marker "prints no explanation here" in
ophthalmology endpoint entries with the explanation box that the book does print, as decided in a decisions file.
Model it on `tools/bank-harness/oph-endpoint-fold.js` (read it first): same structure, same `--fixture <dir>` and
`--write` flags (dry run by default), same string-literal handling, same `blockFor`, same post-write proof style,
same idempotency rule. Do NOT edit `oph-endpoint-fold.js`.

## Decisions file (read-only for you)
`content/ophtho/qb-pages/_close-work/marker-sweep/apply-decisions.json`:
`{ "entries": [ { "id", "box", "cite" } ] }`. `id` is a live entry id in `app/data/questions.ophtho.ep.js` or
`questions.ophtho.ep2.js` (find it in whichever file holds it). `box` is the printed box text, lines separated by `\n`
(a real newline in the JSON string, no markdown). `cite` is a string appended to the entry's `source`, exactly as written
(may be empty; if empty leave `source` untouched). Under `--fixture <dir>` read the decisions file from `<dir>` and the
data files from `<dir>` too. If the decisions file does not exist yet, build a tiny one of two entries inside your fixture
dir for your own test.

## What the tool changes, per entry
The entry's `explanation` currently ends with a marker sentence such as
`*Written for this bank — Opthalmology endpoint.pdf prints no explanation here.*` (with or without the asterisks,
wording varies: "the endpoint file", "Opthalmology endpoint.pdf", "the endpoint PDF"). Enumerate every distinct
closing-marker form across ALL entries in the two files whose explanation ends with the phrase, list them in your report,
and support them with an explicit whitelist regex anchored at the end of the string. An entry whose ending matches no
whitelisted form: stop with a clear error naming the id, change nothing.
Replace exactly that closing sentence (and the blank line before it) with:

    \n\n**The endpoint file prints this explanation:**\n> <box line 1>\n> <box line 2>\n...\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*

(that is a real blank line, then the bold heading line, then one `> ` line per box line, then a blank line, then the
italic closing line; the apostrophe in "file’s" is U+2019). Reference: entry `ophep-neuro-ophthalmology-19` in
`app/data/questions.ophtho.ep.js` already carries this form for a multi-line box; copy its exact bytes for the closing line.
Nothing else in the entry changes: never `answer`, `options`, `stem`, `objective`, `alsoIn`, `chapter`, `image`.

## String literals
The `explanation` value is a JS string literal, usually double-quoted, possibly single-quoted, containing escaped
sequences (`\n`, `\"`, `\\`, `—` is unlikely but handle it). Parse the literal, edit the decoded text, re-encode
with the SAME quote character and the same escape style the file uses (`\n` as two characters, never a real newline).
The box may contain `"` or `'`; escape correctly for the quote char in use. Preserve each file's line endings exactly.

## Idempotent and safe
- An entry already carrying "The endpoint file prints this explanation" and no marker: skip, say so.
- An entry whose explanation does not end with a whitelisted marker and lacks the box form: error.
- Two decisions for one id: error.

## Post-write proof (adapt from the fold tool)
Array lengths unchanged in both files; every touched entry differs from before only in `explanation` (and `source` when
`cite` non-empty); every untouched entry byte-identical; the number of entries ending with the marker falls by exactly the
number of decisions; `node --check` passes on both data files; each written box, decoded back, equals the decision's
`box` line for line. Print a one-line PASS/FAIL with the counts.

## Where you may write
Only `tools/bank-harness/oph-marker-apply.js` and `content/ophtho/qb-pages/_close-work/marker-sweep/_fixture-apply/`.
Do NOT write under `app/`, do NOT run any git write command, do NOT run the tool without `--fixture`.

## What to run
1. Fixture: copy the two data files into `_fixture-apply/`, plus a decisions file with two entries you pick that end with
   the marker (one double-quoted-literal entry, one single-quoted if any exists; say which ids).
2. Dry run, then `--write`, then `--write` again (must skip both). Paste plan, proof line, skips.
3. `node --check tools/bank-harness/oph-marker-apply.js`.
4. Report (max 40 lines) to `content/ophtho/qb-pages/_close-work/marker-sweep/apply-tool-report.md`: the list of
   closing-marker forms with counts, checks run, anything not verified.

## Traps
- Bash heredocs collapse `\\`; use a file-write tool for code. Ids are whole tokens (`ophep-orbit-1` is not
  `ophep-orbit-10`). Data files use `var`; some entries use `id:"x"`, others `id:'x'`; do not regex over lines to find
  blocks, reuse the fold tool's `blockFor`.
- About 40 tool calls at most; at 30, write what you have and stop.
