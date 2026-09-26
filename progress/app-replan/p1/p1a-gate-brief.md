# P1a — one gate: bank validator + smoke page + check-all (2026-09-26)

Seat: Codex `gpt-5.6-terra`. Plan: `progress/PLAN-app-master-2026-09.md` §5 "P1 One gate" (read
lines 134-160) and §8 P1 bullets (318-345) — this job is ONLY the gate tooling; sync correctness,
report button and rights gate are later P1 jobs, do not start them. Final reply begins with
`AGENTS.md loaded — Herophilus`, then ≤ 8 lines.

Runs in parallel with a P5 art job (owner 2026-09-26): never touch `app/assets/scene/`,
`progress/app-replan/scene-pilot/`, `progress/app-replan/p5/`.

WRITE GRANT (overrides AGENTS.md read-only default, this job only): create files under
`tools/validate/`, `tools/check-all/`, `app/smoke.html` (+ at most one `app/smoke.js` beside it),
and `progress/app-replan/p1/` (report + fixtures). Everything else read-only — in particular
NO edit to any `app/data/*.js`, `app/*.js`, `app/*.css`, `app/index.html`.

## Know first (read, don't guess)
- Existing tools: `tools/boot-check/boot-check.js`, `tools/dist-check.js`, `tools/data-check-hook.js`,
  `tools/bank-harness/` (look for a validator there before writing one — reuse, don't duplicate).
- P0 findings: `progress/app-replan/p0/*.md` (A-checks, D-count, REFUTE-round2 names two latent
  lock-check flaws).
- Data traps, all measured (MEMORY.md "Environment" / "Validation state"): data files are classic
  scripts with `var`, load them with `vm` in one context in `app/index.html` load order;
  `modules.js` declares `const MODULES` — append `;MODULES` to its source to get it out of the
  vm; a chapter is a TUPLE `["<id>","<name>"]`, nested `MODULES[].groups[].chapters[]`; `THEORY`
  is an object; arrays can be sparse — index holes with `for(i…) if(!(i in A))`, `filter` skips
  them; keys mix `id:` and `"id":` and both quote styles — never count by grep;
  `questions.ent.js` is mixed CRLF/LF; case arrays are `C_ENT`/`C_NEURO`/`C_OPHTHO`/`C_PEDS`.
  Banks: always via `banksOf(q)` semantics (`bank` + `alsoIn`), never `bank` alone.

## Build
1. `tools/validate/validate.js` (Node built-ins only): load every data file named in
   `app/index.html`, in order. Checks, each with a clear message naming file + id:
   structure (required fields per schema in `reference.md` §4 — grep it); every id unique across
   ALL files; `answer` an in-range integer for its options; chapter/module refs resolve;
   `qs` ids real; bank values in the known set; no sparse holes; `imgAlt` present when `image`
   is, and the image file exists under `app/assets/q/`; counts per file vs
   `tools/validate/counts.json` (expected counts, written by you from a clean measured run — P2's
   manifest will replace it later). Exit non-zero on any failure, print `N checks passed`.
2. Fixtures: `progress/app-replan/p1/fixtures/` — a copy-on-the-fly harness that seeds at least 6
   distinct defects (duplicate id across files, answer out of range, dangling chapter ref,
   sparse hole, missing imgAlt, syntax error in one data file) into a SCRATCH copy of `app/data`
   (never the real one) and asserts each is caught. Script: `tools/validate/fixture-check.js`.
3. `app/smoke.html` (+ `smoke.js`): opens from `file://`, loads the real data files in app order,
   runs 8-15 in-browser cases (boot globals exist, 4 modules, question total matches validator,
   no sparse holes, one quiz item renders its options, fonts.js loads under `file://` — plan
   §4 f7 gap, a case per bank badge colour, etc.). Shows a plain pass/fail list; no styling beyond
   the app's existing tokens if cheap, no external URLs, no framework.
4. `tools/check-all/check-all.js`: runs boot-check, validate, fixture-check, dist-check in
   sequence, prints one summary line per tool and a final PASS/FAIL, exit non-zero on any fail.
   Note: boot-check refuses paths containing `--`; headless Chrome must use a `--user-data-dir`
   without `--` in its path.
5. Run check-all on the clean tree. Every red must be either fixed IN YOUR NEW TOOLS or written
   down with its cause in the report — do not edit app code to make a check pass.

## Report
`progress/app-replan/p1/p1a-report.md` ≤ 40 lines: files made, checks list, counts measured,
check-all output (last 15 lines), fixture results, any red with cause.

## Do not
Edit app code or data; commit, push, `git add`, tag; install or download anything; npm;
start a second job; touch the P5 paths above.
