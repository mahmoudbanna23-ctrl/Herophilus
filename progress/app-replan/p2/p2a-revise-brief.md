# P2a — revise the speed design after refuter round 1 FAIL (2026-09-26)

Seat: Codex `gpt-5.6-terra`. Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 6 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): rewrite ONE file,
`progress/app-replan/p2/P2a-design.md`. Everything else is read-only. No code change anywhere.

## Inputs
- The doc: `progress/app-replan/p2/P2a-design.md`.
- The refuter's 8 defects, each with the fix it asks for: `progress/app-replan/p2/REFUTE-P2a-round1.md`.
  Fix all 8. Open every file:line it cites and confirm it before designing around it.
- Plan: `progress/PLAN-app-master-2026-09.md` L147-150 (P2), L178-179 (release version), L340-345
  (Before P2 migration protocol; P2/P9a full-offline). Read those spans only.

## What the revised doc must do
1. Late-loaded subjects reach `QUESTIONS`/`THEORY`: `Q_ALL`/`T_ALL` are parse-time `const`
   snapshots (`app/data/questions.js:4`, `app/data/theory.js:2`) — design the rebuild.
2. `checkData` (`app/js/storage.js:117-126`, called `app/js/boot.js:374`) checks only subjects
   already requested; a deferred subject is never reported as a load failure.
3. Home cards (`app/js/render.js:241-244`) show correct question counts and progress before the
   subject loads — counts from the manifest; say exactly what the progress ring shows pre-load
   (it may need only `wardround.*` state, not question objects — check).
4. Measure the REAL home floor from disk, summing every byte home fetches: include `mod-*.jpg`
   (`render.js:252`), the Clepsydra pose PNG (`app/js/clepsydra.js:1`), fonts, CSS, JS, the new
   manifest, and the P5 desk assets in `app/assets/scene/` plus the master plate if home will draw
   the desk. Show the sum and each part; totals must re-add exactly.
5. A concrete trim plan to get home under 1 MB: every cut named, bytes before/after measured or
   estimated with the method stated (e.g. WebP/AVIF re-encode, font subsetting to used glyphs,
   deferring non-home CSS, lazy images). Everything must still work from `file://`, offline, no
   build step, no npm. If under 1 MB is not reachable with the desk plate, say so with numbers and
   give the options — do not hide it.
6. `tools/validate/validate.js:7-10` finds data files by parsing `index.html` script tags, and
   `tools/boot-check/boot-check.js:133,146-150` counts synchronously — design both to read the
   manifest and (boot-check) wait for each subject's load.
7. Fix every byte figure the refuter flagged; `mergeStates` is `gate.js:202`.
8. The three former "open questions" are answered by the plan (refuter file, last line) — fold
   those answers in as decisions, not questions.

Keep: injected classic `<script>` tags (no fetch/XHR — they fail on `file://`), `banksOf(q)` only,
no `wardround.*` rename, Firebase optional and untouched, export/import before ship.

## Output
Rewritten `P2a-design.md`, ≤ 200 lines, telegraphic, tables where they fit. End with a
"Refuter round 1 — how each defect is closed" table (defect # · doc section). Open questions
for the owner only if a real product decision remains.

## Do not
Edit any other file. Commit, push, `git add`, tag. Touch `app/`, `tools/`, `progress/app-replan/p1/`,
`p5/`, `scene-pilot/`. Download or install anything. Start a second job.
