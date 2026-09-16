# Codex brief — finish HALF B of topic 12 (4 remaining entries only)

Repo root (your cwd): `D:\claude os\Medical school\Herophilus`. Scratch dir (you may write
reports here): `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\264665a3-4114-45a8-a18f-42ae16d3ad1d\scratchpad\t12`
(called SCRATCH below).

## Status
`content/neuro/qb-pages/gg-nr-t12.draft-B.js` already exists and already holds 16 valid,
verified entries: `npqb-nr-275` through `npqb-nr-279`, `npqb-nr-281` through `npqb-nr-291`.
**Do not touch, re-check, reformat, or re-derive any of those 16.** Read the file first so you
can match its exact style, then only APPEND the 4 missing entries after the last one.

## Your job — draft exactly 4 entries: n:292, 293, 294, 295
Ids `npqb-nr-292`, `npqb-nr-293`, `npqb-nr-294`, `npqb-nr-295`. Append each as one bare object
literal, comma-separated, blank line between entries — same shape as the existing 16 in the file
(open it and copy the exact field order/style). The file must end with **no trailing comma** after
the very last entry (npqb-nr-295).

**Tooling instruction, important:** write/append using your own file-edit tool (the same
mechanism you'd use to patch any repo file) — do NOT use a `js` / `node_repl` / code-execution
MCP tool to construct or append JSON/JS text. A prior run got stuck in a repeating
`error=unsupported call: js` loop trying to use exactly that tool for this exact job. Plain
file read + file append/edit tools only.

## Source (read, do not edit)
`content/neuro/qb-pages/gg-nr-t12.array.js` — `var GG_NR_T12_STAGED=[…]`, staged entries for
n:292-295 give you `n p key keyName stem opts box`. This staging file was independently
verified against the page images this session (PASS, 0 discrepancies) — trust it fully.
`keyName` is null on all four; map `key` letter to a 0-based `options` index yourself
(A=0,B=1,C=2,D=3,E=4) and record the mapping in your report.

## Schema — match the file's existing 16 entries exactly
`{ id, bank, module, chapter, stem, options, answer, explanation, objective, source }`
- `id`: `'npqb-nr-<n>'`. `bank`: `'gradegain'`. `module`: `'neuropsych'`.
- `chapter`: per-question, `'nr-nerve'` (peripheral neuropathy/GBS/CIDP/entrapment/plexopathy/
  radiculopathy/nerve-conduction/diabetic-alcoholic-B12-porphyric neuropathy) or `'nr-lmn'`
  (myasthenia gravis/Lambert-Eaton/myopathy/muscular dystrophy/polymyositis-dermatomyositis/
  motor neuron disease-ALS/periodic paralysis/CK-elevation-from-muscle). Decide per stem content;
  flag by id in your report if genuinely ambiguous.
- `stem`/`options`: staged text byte-for-byte, including any printed typos — do not correct
  spelling/grammar.
- `answer`: 0-based index per the letter mapping above.
- `explanation`: written by you — ~520 words for a vignette or anything the lectures don't cover,
  ~250 words for straight lecture recall. Explain why the key is right and every distractor wrong.
  Any claim not in the two cached lectures (`content/neuro/lectures/L5) Muscle Disease.txt` and
  `content/neuro/lectures/L6) Peripheral neuropathy.txt`, quote the paths, they contain spaces)
  gets the tag `not taken from the course material` attached to that specific claim.
- `objective`: one short line you write.
- `source`: `'Grade Gain neuropsychiatry & neurosurgery qb.pdf, Neurology topic 12 "Neuromuscular
  Disorders," Q<n>, book p.<p>'` using staged `p`.
- **Marker**: every one of these 4 entries is unboxed — `explanation` must END with exactly
  `Written for this bank — neuropsychiatry & neurosurgery qb.pdf prints no explanation here.`
  (em dash U+2014, must be a real single character, not an escaped/mangled sequence).
- No emoji, no markdown headings, no arrows inside strings.

## Editing — escaping traps (measured, each has corrupted this repo before)
- A real newline ends a JS string. Keep the file pure LF, no CRLF.
- Do not double-encode the em dash — verify it round-trips as a single U+2014 character.
- After appending, confirm valid syntax yourself before finishing (see Verify).

## Verify before you finish (run these yourself)
- `node -e "const fs=require('fs');const s=fs.readFileSync('content/neuro/qb-pages/gg-nr-t12.draft-B.js','utf8');const A=eval('['+s+']');console.log(A.length)"` — must print exactly **20**.
- Confirm ids present: the original 16 plus `npqb-nr-292`, `293`, `294`, `295` — 20 total, no
  duplicates, no gaps.
- Confirm all 20 entries' `explanation` end with the marker (not just your new 4).
- Confirm no trailing comma after the last entry, no stray blank object.
- Scan your own additions for non-ASCII bytes and confirm each one is the intended character.

## Report (write to `SCRATCH/codex-finish-B-remainder.report.md`, max 30 lines)
Per new entry (292-295): chapter chosen · class (recall/vignette) · word count · marker y/n ·
answer letter→index mapping. Then: final file syntax result (must be 20), confirm the original 16
are untouched (paste their ids), confirm no `npqb-nr-280`, confirm marker count is 20/20. List
anything you were unsure about.
