# Merge nine explanation boxes into the section 3 staged array

Working root: `D:\claude os\Medical school\Herophilus`.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s03-orbit.array.js` — the `expl` fields ONLY.
- Your report: `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\c690134b-326b-4433-a5eb-cb30b9aea267\scratchpad\codex-s03-merge-report.md`

Nothing else. Do not run git. `Semester 8\` is read-only.

## Step 0 — a previous worker died mid-job on this file

A worker doing exactly this job was killed by a rate limit partway through. The file may be untouched, partly merged, or fully merged. **Before writing anything:** load the array (`var OPHEP_S03_STAGED`, classic script — evaluate it in Node's `vm`), and report for each of the 21 rows whether `expl` is empty or not. Run `node --check`. If the file does not parse, stop and report — do not repair it.

Merge only what is missing. Never overwrite a non-empty `expl` without first confirming it is byte-identical to what you would write; if it differs, stop and report the difference.

## Settled fields — do not touch

Stems, options, keys, pages, notes were verified against the page images and are final. Deliberate details that look like errors and are not:

- n:5 option ranges use an EN dash `–` (U+2013), not an em dash.
- n:18 option index 2 reads `lnfraorbital canal` with a lowercase L — a source typo kept verbatim.
- n:20 stem carries a stray `A`; n:21 stem reads `conjunctiva!`. Both are printed in the book. Keep them.

Any change outside an `expl` field is a regression.

## The merge

Source: `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\c690134b-326b-4433-a5eb-cb30b9aea267\scratchpad\s03-boxes.md` — nine boxes, for Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q9, Q10.

Match by the row's `n`. Confirm each target row has `boxPrinted: true` before writing. Q8 and Q11–Q21 must stay `expl: ""`. If the `boxPrinted` flags disagree with that list, stop and report.

## Shape — copy it exactly

Read `content/ophtho/qb-pages/oph-ep-p1-s02-optics-refraction.draft.js`, entries 1–12 (boxed). Match them:

1. lead line `**The endpoint file prints this explanation:**`
2. the box's words, verbatim, quoted with a `> ` prefix
3. the BOXED closing marker, wrapped in `*...*` exactly as section 2 wraps it

Read the marker string out of `tools/bank-harness/val-oph-ep.js` (around lines 115–116). There are two markers there; you want the boxed one, which contains a curly apostrophe U+2019. Copy it byte for byte. Do not use the unboxed one.

Box text is quoted verbatim — no tidying. Q10's box contains a real arrow `→` (U+2192). Q5's box contains `12–22 mm` with an en dash. Both must survive as those exact codepoints.

## Encoding rules

- Write the file with a Node script that reads the source text from disk — never paste box text through a shell heredoc or a JS template literal (both eat backslashes).
- Output must be pure LF. Check: count of `\r` bytes in the file must be 0.

## Verify, then write the report

- `node --check` passes.
- Load in `vm`; length 21; holes 0, checked with `for (let i=0;i<A.length;i++) if (!(i in A))` (Array.filter skips holes).
- Exactly 9 rows non-empty `expl`, 12 empty.
- Codepoint check: U+2192 present in n:10's `expl`, U+2013 in n:5's.
- Prove only `expl` changed: load the array before and after, delete `expl` from every row in both, compare with `JSON.stringify` — must be identical.

Report: byte size before/after, CR count, step 0 findings, which `n` you wrote, every verification result, anything you did not do.
