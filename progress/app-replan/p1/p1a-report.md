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

Smoke page: 12 file:// cases for fonts, globals, 4 modules, totals, aggregation,
sparse arrays, rendered options, and all three bank badge colours.

Fixture result: duplicate id, answer range, dangling chapter, sparse hole, missing
imgAlt, and syntax error each failed as expected (6/6).

`check-all` last 15 lines:
```
  ok   nothing 404s — every script and asset the page asks for is in the folder
    shipping: {"ent":2322,"neuropsych":1054,"pediatrics":1727,"ophtho":1853}  total 6956
  ok   all four shipping subjects carry every question in the upload
  ok   no theory text ships at all, and the map is empty rather than missing
  ok   four module cards, none locked
  ok   the theory rail row is present, disabled, and says soon
  ok   a shipping chapter still opens its questions
7 passed, 0 failed
SUMMARY dist-check PASS
CHECK-ALL FAIL 1/4
```

Red (not changed; app/data is outside this job's grant): `questions.neuro.js`
`npqb-nr-228` through `npqb-nr-250` reference `nr-demyelinating`, which is absent
from `modules.js`; validator therefore reports 23 dangling chapter failures.
Boot-check, fixture-check, and dist-check passed; the validator correctly keeps the gate red.
