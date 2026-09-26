# P1a gate report — 2026-09-26

Files made: `tools/validate/validate.js`, `counts.json`, `fixture-check.js`;
`tools/check-all/check-all.js`; `app/smoke.html`, `app/smoke.js`; fixture README.

Validator loads every `data/` script named by `app/index.html` in that order in one VM context.
Checks: parse/load; module/chapter tuples; MCQ and case required fields; global ids;
answer bounds; module/chapter references; theory `qs`; bank + `alsoIn`; sparse holes;
image alt/file; and source-file counts.

Measured counts: ENT 2240 + 82 cases; Pediatrics 393 + 704 + 630;
Ophthalmology 1273 + 433 + 147; Neuropsychiatry 1047 + 7 cases; theory 30/51/36/36.
Question/case total: 6956. These are pinned in `tools/validate/counts.json`.

Smoke page: 10 file:// cases for fonts, globals, 4 modules, totals, aggregation,
sparse arrays, and all three bank badge colours (rendered through the app's own
`bankPills()`/`BANKS`, loaded from `js/utils.js`+`js/storage.js`, not reimplemented).
The earlier "renders each option" case built and counted its own buttons — a
tautology — and quiz rendering needs the live `Q`/`S` state and several other
app files to run, so it was dropped rather than faked.

Fixture result: duplicate id, answer range, dangling chapter, sparse hole, missing
imgAlt, and syntax error each failed as expected (6/6).

`check-all` last 15 lines:
```
  ok   the shipped page boots with no console error and no exception
  ok   nothing 404s — every script and asset the page asks for is in the folder
    shipping: {"ent":2322,"neuropsych":1054,"pediatrics":1727,"ophtho":1853}  total 6956
  ok   all four shipping subjects carry every question in the upload
  ok   no theory text ships at all, and the map is empty rather than missing
  ok   four module cards, none locked
  ok   the theory rail row is present, disabled, and says soon
  ok   a shipping chapter still opens its questions

7 passed, 0 failed
SUMMARY dist-check PASS
CHECK-ALL PASS 4/4
```

Fixed since: main chat corrected the 23 `nr-demyelinating` -> `nr-ms` references in
`questions.neuro.js` (outside this job's grant), so the validator's dangling-chapter
failures are gone and `CHECK-ALL` is green.

`smoke.html` headless Chrome: `SMOKE PASS 10/10`.

Also fixed (Opus refute round 1, 5 minor defects): `validate.js`'s `check()` now
counts passes separately from total checks, so the summary line reads "N of M
checks passed" instead of counting failures as passes; and it asserts
`smoke.js`'s pinned `EXPECTED_TOTAL` equals the question+case total computed
from `counts.json`, so the two drifting apart now fails the gate.
