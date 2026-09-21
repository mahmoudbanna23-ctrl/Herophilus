# Brief 2 - marker apply tool, test run only (2026-09-21)

The tool `tools/bank-harness/oph-marker-apply.js` already exists (you wrote it in a first pass; read
`content/ophtho/qb-pages/_close-work/marker-apply-brief.md` for the spec). Last time you could not run it because you
declined to read `app/data/`. That restriction does not apply here: the fixture is ALREADY prepared for you at
`content/ophtho/qb-pages/_close-work/marker-sweep/_fixture-apply/` (copies of the two data files plus
`apply-decisions.json` with two entries: `ophep-exam-eye-16`, single-quoted literal, and one double-quoted entry).
Never open or write anything under `app/`. Work only inside the fixture dir and `tools/bank-harness/oph-marker-apply.js`.

Do, in this order, and paste real output:
1. Enumerate every distinct closing-marker form in the fixture copies of `questions.ophtho.ep.js` and `ep2.js` (explanation
   ends with the phrase "prints no explanation here", with or without trailing `*`), with counts. Any form your whitelist
   does not match: list it and extend the whitelist only if it is the same sentence with different wording.
2. Dry run: `node tools/bank-harness/oph-marker-apply.js --fixture <fixture dir>`.
3. `--write`, then `--write` again (second run must skip both).
4. Confirm the proof line reports PASS, that `node --check` passes on both fixture files, and byte-compare the
   fixture files against `app/data/` versions only through the tool's own proof (do not read `app/data/`, the fixture
   copies ARE the originals; take a copy of them into `_fixture-apply/_orig/` before `--write` for the byte comparison).
5. Overwrite `content/ophtho/qb-pages/_close-work/marker-sweep/apply-tool-report.md` (max 40 lines): marker forms with
   counts, every check result, anything unverified. Fix any defect you find in the tool.
About 30 tool calls at most.
