# Endpoint fold report

Created `tools/bank-harness/oph-endpoint-fold.js` as an endpoint-only adaptation of
`oph-house-merge.js`; the House/Grade Gain inference, titles, and note/explanation
handling were removed. It reads `endpoint-fold-decisions.json`, appends each supplied
`cite` exactly, unions `alsoIn` in house/gradegain order, uses `merge-endpoint.plan.md`,
and reports dry-run/self-reference conditions required by the brief.

Fixture inputs copied: `questions.ophtho.js`, `questions.ophtho.ep.js`, and
`questions.ophtho.ep2.js`. `rg` found `ophep-orbit-12` only in
`questions.ophtho.ep.js`; no extra `qs`-holding data file was copied.

Dry run: 6 folds, 7 twins scheduled for removal; no `SELFREF?` lines printed.
Write run: `write verification passed; repoints 0`; no `SELFREF` lines printed.
Array counts before: 1273 + 439 + 148 = 1860.
Array counts after:  1273 + 433 + 147 = 1853.
The post-write proof also ran `node --check` on all three fixture data files.

Second `--write`: reported idempotent skips for all 7 twins, passed verification,
and SHA-256 hashes of all three fixture data files were unchanged.
`node --check tools/bank-harness/oph-endpoint-fold.js` passed.

Not verified: no live `app/` file was modified or run by the fold tool; all execution
used `--fixture` as required.
