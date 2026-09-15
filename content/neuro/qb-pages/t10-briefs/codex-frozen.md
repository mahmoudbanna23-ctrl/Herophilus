# Codex brief — write and run a frozen-field check for topic 10

Repo root (cwd): `D:\claude os\Medical school\Herophilus`. SCRATCH =
`C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\6b33dda5-bb63-4792-a7d8-58b5aeea0c32\scratchpad\t10`.
You write ONLY `SCRATCH/frozen-check.js` and `SCRATCH/frozen-check.out.txt`. You edit NOTHING in the
repo. No git.

## Goal
Prove, mechanically, that the draft entries' stems, options, answers and quoted printed boxes are
unchanged versus the verbatim staging file. A reviewer will re-run your script, so it must be
deterministic, read files from disk, and print every comparison, not just a verdict.

## Files
- Staging: `content/neuro/qb-pages/gg-nr-t10.array.js` — `var GG_NR_T10_STAGED=[…]`, 29 entries,
  fields `n` (question number 199–227) `p` (page) `key` (letter) `keyName` (null throughout — no
  cross-check possible, your script must not claim it checked one) `stem` `opts` `box`.
- Drafts: `content/neuro/qb-pages/gg-nr-t10.draft-A.js` (ids `npqb-nr-199`…`213`, 15 entries) and
  `gg-nr-t10.draft-B.js` (`214`…`227`, 14 entries). Each is a BARE comma-separated run of objects:
  load with `eval('[' + text + ']')`. Inspect the real field names first (`id stem options answer
  explanation source chapter bank module objective`).
- Load everything in node; never count or compare by grep (two quote-key styles exist elsewhere in
  this repo, check which this file actually uses).

## Checks — per question n, matching draft id `npqb-nr-<n>`
1. Coverage: 29 staged, 29 drafted across both files combined, ids 199–227 each exactly once, no
   extras, array index holes = 0 in each file (`for(i) if(!(i in A))`).
2. **Stem**: draft stem vs staging stem, exact.
3. **Options**: same count, same order, same text as staging `opts` (staging carries no letter
   prefixes here — if you find one, print it, don't silently strip it).
4. **Answer**: draft `answer` (0-based index) maps to staging `key` letter (A=0,B=1,C=2,D=3,E=4).
   `keyName` is null for all 29 — do not attempt a name cross-check; state in your output that this
   check is N/A for this topic, not silently omitted.
5. **Box**: for each staged entry with a non-empty `box`, the box text appears **verbatim** (exact
   substring) in the draft `explanation`. Expected boxed: Q199, Q200, Q202, Q203, Q211, Q219, Q225
   (7 total — 5 in half A, 2 in half B).
6. **Marker**: `Written for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation
   here.` is the END of `explanation` on every non-boxed entry, absent on boxed entries, absent from
   every `source`. Expect 22 markers total (10 in half A, 12 in half B).

## Comparison discipline
- Compare **exact** strings first. If exact fails, compute a normalized comparison (collapse
  whitespace; unify curly/straight quotes — but flag Q224's curly apostrophe explicitly if it was
  normalized away, since staging itself uses the curly form there) and report the entry as
  `EXACT-FAIL / NORM-PASS` with a character-level diff snippet (first differing index, 40 chars
  each side, and the code points of the differing chars). Never let a normalization silently turn a
  fail into a pass.
- Known printed source defects (must be carried unchanged, not flagged as errors): Q205 lowercase
  "which" opening; Q203 missing linking word after "disease"; Q199 box says "right side" though the
  stem says "left arm" (a genuine printed contradiction, preserved not resolved); Q212 has only 3
  options; Q224 uses a curly apostrophe in "Parkinson’s" where other entries use a straight one.

## Output
`SCRATCH/frozen-check.out.txt`: one line per n per check (`PASS` / `EXACT-FAIL/NORM-PASS` / `FAIL` +
detail), then a summary with counts per check and an overall exit code (script exits 1 on any FAIL).
Run it with `node "SCRATCH/frozen-check.js"` and paste the summary block into your final message.
