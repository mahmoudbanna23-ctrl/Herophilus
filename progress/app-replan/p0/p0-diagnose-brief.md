# P0 brief, round 1: diagnose only (2026-09-25)

Seat: Codex `gpt-5.6-terra`, one run per item, 900 s clock. Reviewer: Claude Opus refuter.
Plan: `progress\PLAN-app-master-2026-09.md` §5 P0 and §8 P0.

## Marching orders (every item)

- Goal: find the ROOT CAUSE of your item and propose the fix. **Round 1 changes no app code.**
- May change: ONLY `progress\app-replan\p0\<ITEM>.md` (your findings file). Nothing else, anywhere.
- May read: `app\js\`, `app\css\`, `app\index.html`, `tools\`, `progress\`. **`app\data\` stays
  closed** (AGENTS.md rule 1): never open, grep or write it.
- May run: `node tools\boot-check\*.js`, `node tools\dist-check.js`, read-only `git diff`/`git status`.
  Run each check at least twice before calling a failure stable; a flake is a finding.
- Must verify: every claim cites `file:line` you actually read, or a command you actually ran plus
  its output (trimmed). A cause you could not confirm is marked UNCONFIRMED, never stated as fact.
- Do not: edit `app\`, run git writes, touch `Semester 8\`, use the network beyond the model call,
  "fix" a check by loosening it without writing why the old assertion was wrong.
- Output: `progress\app-replan\p0\<ITEM>.md`, ≤ 80 lines, these headings exactly:
  `Symptom (measured)` · `Root cause` · `Evidence` · `Proposed fix` (a diff sketch, files named) ·
  `Check that proves the fix` · `Unconfirmed`.
- A partial answer reported honestly is a success. On ambiguity, stop and write what blocks you.
- Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 5 lines.

## Facts already known

- `lock-check`, `navclock-check`, `attempt-check` (`tools\boot-check\`) fail **byte-identically
  before and after** the B2 split and B12 — pre-existing, never investigated
  (`progress\app-replan\plan-until-codex-2026-09-20.md:174-175, 214-216`).
- `dist-check` flaked once in three runs, suspected image-copy race (same file :216).
- Boot-check baseline 2026-09-20: 0 errors, 4 module cards, QUESTIONS 4049, THEORY 81, 156
  chapters. Ophtho unlocked 2026-09-21, neuropsych 2026-09-22 (`LOCKED_MODULES = []`).
- Headless Chrome: one at a time; never under a path containing `--`.

## Items

- **A-checks** — why `lock-check`, `navclock-check`, `attempt-check` fail. Likely one shared cause;
  say whether the app or the check is wrong.
- **B-dist** — `dist-check` image-copy race: reproduce (run ≥ 5 times), find the race in
  `tools\dist-check.js` / `tools\build-launch.js`.
- **C-rows** — the ophtho/neuropsych "0-row" report of 2026-09-20 (grep `progress\app-replan\`
  for it). Re-measure with boot-check after the unlocks: is it gone? If not, why.
- **D-count** — boot-check reports QUESTIONS 4049 while the corpus is ~6.9k. From
  `tools\boot-check\boot-check.js` and the loader in `app\index.html` / `app\js\`, explain which
  arrays reach `QUESTIONS` and which do not (endpoint files? cases? a lock list?). Do not open
  `app\data\`; name the files by the `<script>` tags that load them.
- **E-quiz** — two quiz faults, one file: (1) on a 6-option question, pressing `F` while a strike
  ✕ has focus is taken as answer letter F (`plan-until-codex-2026-09-20.md:217`); (2) bug c2-1,
  `isMdRule` drops an all-punctuation table row like `| - | - |`
  (`progress\app-replan\bugs.md:15` and :171). Findings file `E-quiz.md`.
- **G-perf** — baseline only, no fix: home first load transfer (bytes of every script/asset
  loaded), parse/boot time, peak JS heap, measured with headless Chrome at desktop and with CPU
  4× slowdown + a slow-3G network profile. Write numbers and the exact method so it can be re-run.
  Proposed fix heading: write "none — baseline".
