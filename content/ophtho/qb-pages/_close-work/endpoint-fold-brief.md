# Brief - within-endpoint fold tool (2026-09-21)

## Goal
Create `tools/bank-harness/oph-endpoint-fold.js`, a copy of `tools/bank-harness/oph-house-merge.js` adapted to fold duplicate ENDPOINT entries into an endpoint survivor. Read `oph-house-merge.js` first; keep its structure, its `--fixture <dir>` and `--write` flags (dry-run default), its string-literal handling, `blockFor`, `removeBlock`, `replaceRefs` (qs dedupe, whole-id match) and its post-write proof. Do NOT edit `oph-house-merge.js`.

## Decisions file (already written, read-only for you)
`content/ophtho/qb-pages/_close-work/endpoint-fold-decisions.json`: `{ "folds": [ { "survivor", "twins": [...], "cite" } ] }`. Under `--fixture <dir>` the tool reads the decisions file from `<dir>`, as the House script does.

## Behaviour that differs from the House script
1. Survivor AND every twin must be live entries with `bank === 'endpoint'`. Any other case: stop with a clear error.
2. Survivor `source` becomes old source + the decision's `cite` string EXACTLY as written. Compute nothing; do not derive text from the twin's `source`.
3. Survivor `alsoIn` becomes the union of its own `alsoIn` and every twin's `alsoIn`, order house then gradegain, only banks present. Reuse `setAlsoIn`. If the union is empty and the survivor has none, add no field.
4. No `note` handling; the survivor `explanation` is never changed by the tool.
5. Each twin block is removed; every reference to a twin id in any `.js` file in the data directory is repointed to the survivor (`replaceRefs`, `qs` deduped).
6. After repointing, if any survivor's `explanation`, `source` or `stem` now contains its OWN id (a self-reference created by the repoint), PRINT a line `SELFREF <id> <field>` per hit in both dry-run and write. Do not stop; do not edit. (A dry run cannot see the repoint result, so in dry-run scan the survivor text for any of its twins' ids and print `SELFREF? <id> <field> mentions <twin id>`.)
7. Idempotent: if a twin is already gone AND the survivor's `source` already ends with or contains the `cite`, skip it and say so; a twin gone without the cite present is an error.
8. Plan file goes to `merge-endpoint.plan.md` in the close directory (NOT `merge.plan.md`, which belongs to the House run).
9. The post-write proof keeps every House-script check that still applies: array lengths fall by exactly the twin count per file, survivor changed only in `alsoIn`/`source`, no untouched entry changed except `source`/`explanation`/`qs` repointing, removed ids absent outside the survivor `source` suffix, `node --check` on all three data files. Adapt the `bankFromId` / House-title code out; it does not apply.

## Where you may write
Only: `tools/bank-harness/oph-endpoint-fold.js`, and files under `content/ophtho/qb-pages/_close-work/_fixture-fold/` (create it). You must NOT write under `app/`, must NOT run any git write command, and must NOT run the tool without `--fixture`.

## What to run and paste
1. Copy `app/data/questions.ophtho.js`, `questions.ophtho.ep.js`, `questions.ophtho.ep2.js` and `app/data/modules.js` if any file there holds `qs` lists referencing ophtho ids (find out which files need copying: grep the data dir for `ophep-orbit-12`) into the fixture dir, plus the decisions file.
2. `node tools/bank-harness/oph-endpoint-fold.js --fixture <fixture dir>` (dry run): paste the plan and any SELFREF lines.
3. Same with `--write`: paste the verification line and array counts before/after (expect three arrays to lose 7 entries between them, 1860 to 1853).
4. Run `--write` a second time: it must report idempotent skips and change nothing.
5. `node --check tools/bank-harness/oph-endpoint-fold.js`.
6. Write your report (max 40 lines) to `content/ophtho/qb-pages/_close-work/endpoint-fold-report.md`: what you changed versus the House script, every check result, anything you did not verify.

## Traps
- Data files are classic scripts using `var`; `questions.ophtho.js` and others mix quote styles (`id:'..'` and `"id":`), and `ep.js` may be CRLF/LF mixed; preserve each file's line endings exactly.
- The Bash tool collapses double backslashes in heredocs: use file-write tools for code, not heredocs.
- Ids are whole tokens: `ophep-orbit-1` must not match inside `ophep-orbit-10`.
