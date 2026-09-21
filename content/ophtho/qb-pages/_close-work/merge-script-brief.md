JOB (one bounded job, then stop): build ONE Node script that applies cross-bank "alsoIn" merges to the Herophilus ophthalmology data. Working dir is the repo root `D:\claude os\Medical school\Herophilus`. Vanilla Node (v26), no npm, no network. The script is Claude's to run; you write it and check it with `node --check` and a synthetic test only. NEVER run it against `app/data/` (AGENTS.md); NEVER touch `app/`, git, or any existing file. You MAY create: `tools/bank-harness/oph-house-merge.js`, and a synthetic fixture folder `content/ophtho/qb-pages/_close-work/_fixture/` for a self-test (`--fixture <dir>` flag makes the script read/write three copies of the data files from that dir instead of app/data).

CONTEXT
Three classic-script data files (var, not modules), all pure LF, in `app/data/`:
- `questions.ophtho.js` var Q_OPHTHO (House bank ids `opmcq-*` bank 'house', Grade Gain ids `opqb-*` bank 'gradegain'; 1598 entries)
- `questions.ophtho.ep.js` var Q_OPHTHO_EP (endpoint, 439), `questions.ophtho.ep2.js` var Q_OPHTHO_EP2 (endpoint, 148); ids `ophep-*` / `ophep2-*`, bank 'endpoint'.
Entries use mixed quote styles (`id:'..'`, `id:".."`, `"id":".."`) and mixed field order. Each entry is a `{ ... }` object literal in an array. Reuse the block-finding and exact-string-replace approach already proven in `tools/bank-harness/oph-reprint-cites.js` (read it first; it edits `source` inside one entry block, detects the quote delimiter, escapes it).
Loader to copy for verification: `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\bf567f31-a134-4691-9b8a-ecc9d32d9302\scratchpad\load.js`.

MEANING OF A MERGE
One question printed in two banks must be ONE entry with `alsoIn`. The endpoint entry SURVIVES; the House / Grade Gain twin entry is DELETED and its bank is recorded on the survivor:
- survivor.alsoIn = union(existing alsoIn, banks of the twins) using each twin's own `bank` field ('house', 'gradegain'), order: house then gradegain. If survivor has no alsoIn, ADD the field `alsoIn:['house']` as a new line right after its `bank` field, matching that entry's quote style/indent.
- survivor.source gets appended, per twin: `; also printed in <House|Grade Gain> bank, <twin.source>` (House for bank 'house', Grade Gain for 'gradegain'; twin.source verbatim).
- survivor.explanation gets appended the decision's `note` string when given, separated by one space (escape for the entry's delimiter). No other field of the survivor changes.
- The twin entry block is removed from its data file, including its trailing comma/newline, so the array stays valid. Removing the last entry of an array must not leave a dangling comma problem.
- Cross references: other entries (in any of the three files) or `app/data/theory.ophtho.js` may mention a removed twin id, usually in backticks (`` `opmcq-c1-56` ``) inside explanation/source text or inside a `qs:[...]` id list. For every removed twin id, find every occurrence in `app/data/*.js` (excluding the removed block itself): in prose replace the id with its survivor id (keep backticks if present); in a `qs` id list replace it with the survivor id and drop the duplicate if the survivor is already listed. Print each such repoint in the plan.

INPUT: `content/ophtho/qb-pages/_close-work/merge-decisions.json`:
`{"merges":[{"survivor":"ophep-...","twins":["opmcq-...","opqb-..."],"note":"optional sentence appended to explanation"}]}`
Rules: every survivor must be a live endpoint id; every twin must be a live House/Grade Gain id; a twin may appear in only one merge; a survivor may appear in several merges (union them, apply once). A missing id, or a twin that is itself an endpoint id, is a fatal error before anything is written.

MODES: dry run by default: prints and writes `content/ophtho/qb-pages/_close-work/merge.plan.md` (one line per merge: survivor | twins | new alsoIn | source suffix added | note yes/no | repoints), plus totals (merges, twins removed per file, repoints). `--write` applies. Idempotent: if a twin id is already absent AND the survivor already lists that bank in alsoIn, skip with a message; a half-applied state is a fatal error.

VERIFY after `--write` (fatal on any failure, and restore nothing: report): reload all three arrays with vm; counts = before minus twins removed (House file) and unchanged for both endpoint files; every removed id gone from all ids; for every survivor: alsoIn as expected, source startsWith old source, explanation startsWith old explanation, every OTHER field deep-equal; every entry not touched deep-equal to before (compare full before/after arrays by id); `node --check` each data file; no removed twin id remains anywhere in `app/data/*.js` except as plain text inside a `source` suffix you wrote yourself.

SELF-TEST: build a tiny fixture (3 data files with 6-10 entries each, mixing quote styles, one entry with alsoIn already present, one twin with a cross-reference in another entry's explanation, one `qs` list case in a fixture theory file) and run dry + write + verify on it via `--fixture`. Report the result.

REPORT (last message, max 12 lines): what the fixture proved, any fault not fixed.
