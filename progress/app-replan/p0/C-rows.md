Symptom (measured)

The 2026-09-20 report recorded `ophtho 0` and `neuropsych 0` rendered
chapter rows (`progress/app-replan/plan-until-codex-2026-09-20.md:101-102`).
It is gone in this checkout. Ran `node tools/boot-check/boot-check.js` twice:
each run printed `chapter rows rendered 156 (152 with questions, 4 empty —
empty is deliberate)` and `per module: ent 30 · ophtho 39 · neuropsych 36 ·
pediatrics 51`, with `console errors: 0`.

Root cause

The historical zeroes are consistent with the then-active module lock, not
with missing module definitions or chapter data. The brief records that ophtho
was unlocked on 2026-09-21 and neuropsych on 2026-09-22, with
`LOCKED_MODULES = []` now (`progress/app-replan/p0/p0-diagnose-brief.md:30-31`).
While a module is locked, routing to its module view is redirected home:
`app/js/render.js:4-9`. Therefore boot-check's per-module walk could see no
`.ch-row` elements for those two modules before the unlocks.

Evidence

- `tools/boot-check/boot-check.js:141-151` visits every `MODULES` entry with
  `go({name:"module",id:m.id})`, then counts `.ch-row`; it counts disabled
  rows too.
- `app/js/storage.js:270-274` defines `isLocked` from `LOCKED_MODULES` and
  `openModules` excludes locked modules.
- `app/js/render.js:4-9` obtains the selected module then replaces a locked
  module view with `{name:'home'}`.
- The two current runs above are identical, including ophtho 39 and
  neuropsych 36, so this check did not flake in these measurements.

Proposed fix (a diff sketch, files named)

None — no app diff proposed. `app/js/render.js` correctly blocks a locked
module, and the recorded unlock configuration has removed the symptom. If a
module is deliberately locked again, the expected boot-check result must be
defined before treating its zero rows as a defect.

Check that proves the fix

Run `node tools/boot-check/boot-check.js` twice after any lock-configuration
change. For the current all-unlocked configuration, require nonzero
`ophtho` and `neuropsych` values in `per module` (currently 39 and 36) and
`console errors: 0`.

Unconfirmed

I did not inspect the closed `app/data` configuration file, so I did not
independently read the historical `LOCKED_MODULES` entries. The brief's dated
record and the current two-run measurement support the explanation above.
