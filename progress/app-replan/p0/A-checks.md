Symptom (measured)

`node tools\boot-check\lock-check.js` run twice: `LOCKED_MODULES is empty — nothing to check.`
`navclock-check.js` run twice: rail `(no node)` three times, live phase `00:00` three times,
then `INVALID: the session clock itself never moved`. `attempt-check.js` run twice: `chapter null`
and `INVALID: the probe threw before it measured anything`. These are stable in this run.

Root cause

The checks' fixture is stale, not evidence of the app faults they name. `enterProfile()` now starts
with no selected term and returns at the term gate (`app/js/gate.js:711-730`). It calls
`activateTerm(null,true)` first (`app/js/gate.js:711-715`), which rebuilds the pools for that id
(`app/js/theory.js:15-26`). The nav fixture's session has no matching term; `sess()` therefore
returns null unless its term equals `activeTerm` (`app/js/clepsydra.js:524-530`). The attempt
fixture consequently has no MCQ chapter to select. Separately, lock-check explicitly rejects the
now-empty `LOCKED_MODULES` (`tools/boot-check/lock-check.js:58-64`); the brief records that all
modules were unlocked, so its premise is obsolete rather than an app lock leak.

Evidence

- The three commands and outputs above were run twice each.
- All three fixtures seed only `wardround.profiles` before calling `enterProfile`:
  `tools/boot-check/navclock-check.js:76-84`, `tools/boot-check/attempt-check.js:75-83`,
  `tools/boot-check/lock-check.js:81-89`.
- `attempt-check` chooses from `qsIn()` after that entry (`tools/boot-check/attempt-check.js:94-104`);
  `qsIn` reads `QUESTIONS` (`app/js/storage.js:275-278`).
- The fixed production tick does call `paintNavClock()` (`app/js/clepsydra.js:637-643`), but this
  run never supplies a session for the active term, so it cannot measure that behavior.
- The earlier report calls these three failures byte-identical and pre-existing
  (`progress/app-replan/plan-until-codex-2026-09-20.md:174-175,214-216`).

Proposed fix

Diff sketch: update `tools/boot-check/navclock-check.js` and `attempt-check.js` to select a real
`TERMS` entry through the app's term-entry path before their probes, and give the synthetic session
that selected term. Do not infer a term id in the harness. Update `lock-check.js` to exit SKIP (0)
with an explicit “no locked modules to test” result when the list is empty; retain its leak checks
only when a locked module exists. No app file change.

Check that proves the fix

Run each updated check twice. Nav must report a non-null rail node, advancing `phaseLeft`, and
`TICKS off the session view`; attempt must select a 3+ MCQ chapter and reach `PASS`; lock must
report explicit SKIP with an empty list (and its selftest/leak assertions when a lock fixture exists).

Unconfirmed

Whether a deliberately locked test fixture should be supplied for lock-check, rather than retaining
the check as conditional coverage, needs owner direction. This diagnosis did not open `app/data`.

## Round 2

- Navclock's `--nofix` target moved from `index.html` to `app/js/clepsydra.js` because the production tick now lives in `clepsydra.js`; the anchored replacement removes only `paintNavClock()` from that tick.
- `nav shows soon, disabled` was restored for this run, then removed again with evidence: both selftests left it passing (`1 soon items, 0 still enabled`) after the module lock was removed. The aggregate rail count includes the independent `THEORY_LOCKED` item (`app/js/render.js:127-131`), so it cannot prove a module-lock removal and is blind in this fixture.
- The raw-question search and persistence probes now enumerate all fixture-loaded `Q_*` source banks, then select by `module`; `QUESTIONS` is filtered and cannot prove a removed lock leaks.
- Commands and trimmed output (each twice):
  - `node tools/boot-check/lock-check.js --selftest` → `SELFTEST PASS — every lock check failed when the lock was removed.`; all six remaining `mustBreak` rows printed `broke`, none `BLIND`; `console errors: 0`.
  - `node tools/boot-check/lock-check.js` → `SKIP — LOCKED_MODULES is empty; no locked subject to check.` (exit 0).
- UNCONFIRMED: no normal locked module exists; normal mode is specified to report `SKIP`.
