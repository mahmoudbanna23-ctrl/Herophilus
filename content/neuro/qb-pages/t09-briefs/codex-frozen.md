# Codex brief — write and run a frozen-field check for topic 09

Repo root (cwd): `D:\claude os\Medical school\Herophilus`. SCRATCH =
`C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\874149fd-c72a-408a-baf0-da4792eb5ab5\scratchpad\t09`.
You write ONLY `SCRATCH/frozen-check.js` and `SCRATCH/frozen-check.out.txt`. You edit NOTHING in the repo. No git.

## Goal
Prove, mechanically, that the draft entries' stems, options, answers and quoted printed boxes are
unchanged versus the verbatim staging file. A reviewer will re-run your script, so it must be
deterministic, read files from disk, and print every comparison, not just a verdict.

## Files
- Staging: `content/neuro/qb-pages/gg-nr-t09.array.js` — `var GG_NR_T09_STAGED=[…]`, 22 entries,
  fields `n` (question number 177–198) `p` (page) `key` (letter) `keyName` `stem` `opts` `box` (+`note`).
- Drafts: `content/neuro/qb-pages/gg-nr-t09.draft-A.js` (ids `npqb-nr-177`…`187`) and
  `gg-nr-t09.draft-B.js` (`188`…`198`). Each is a BARE comma-separated run of objects: load with
  `eval('[' + text + ']')`. Inspect the real field names first (likely `id stem options answer explanation source chapter bank`).
- Load everything in node; never count or compare by grep (two quote-key styles exist).

## Checks — per question n, matching draft id `npqb-nr-<n>`
1. Coverage: 22 staged, 22 drafted, ids 177–198 each exactly once, no extras, array index holes = 0 (`for(i) if(!(i in A))`).
2. **Stem**: draft stem vs staging stem.
3. **Options**: same count, same order, same text (staging `opts` may carry letter prefixes like `a.`/`A)` — if you strip them, print the exact rule you used).
4. **Answer**: draft `answer` (0-based index, probably) maps to staging `key` letter; and the draft option at that index equals `keyName` where `keyName` is present (print both).
5. **Box**: for each staged entry with a non-empty `box`, the box text appears **verbatim** (exact substring) in the draft `explanation`. Expected boxed: Q178, Q187, Q189, Q197.
6. **Marker**: `Written for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.` is the END of `explanation` on every non-boxed entry, absent on boxed entries, absent from every `source`. Expect 18 markers total (9 per half).

## Comparison discipline
- Compare **exact** strings first. If exact fails, compute a normalized comparison (collapse whitespace; unify curly/straight quotes; strip letter prefixes) and report the entry as `EXACT-FAIL / NORM-PASS` with a character-level diff snippet (first differing index, 40 chars each side, and the code points of the differing chars). Never let a normalization silently turn a fail into a pass.
- Known printed source defects (must be carried unchanged, not flagged as errors): Q186 three options; Q197 option b truncated at "Obtain a repeat brain MRI with"; Q198 three options.

## Output
`SCRATCH/frozen-check.out.txt`: one line per n per check (`PASS` / `EXACT-FAIL/NORM-PASS` / `FAIL` + detail), then a summary with counts per check and an overall exit code (script exits 1 on any FAIL). Run it with `node "SCRATCH/frozen-check.js"` and paste the summary block into your final message.
