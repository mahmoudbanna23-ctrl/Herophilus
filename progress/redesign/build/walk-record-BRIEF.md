# Record a full new-student walk through the trial app (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~45 tool calls, stopped by 65. Write status to
  `progress/redesign/build/walk-record-STATUS.md` AS YOU GO.
- Trial copy `D:\claude os\Medical school\Herophilus-redesign` is READ-ONLY for this job: no edits
  to `app/`, no git. NEVER touch the live `D:\claude os\Medical school\Herophilus`.
- Your files go in `D:\scratch 2026\city-walk\` only. Headless Chrome never under a path
  containing `--`; one Chrome at a time, fresh user-data-dir; retry a silent failure once.
- Do not open images. A looker judges them.

## Why
Owner, 2026-10-15: "simulate using the app and see for yourself, make codex do the same." This
records the evidence both judges will use. Plan: `C:\Users\Alfa388\.claude\plans\moonlit-skipping-summit.md`.

## Build `D:\scratch 2026\city-walk\walk.js` from the two harnesses that work
- `D:\scratch 2026\city-join\join.js`: launch + CDP (66-75, 105), profile seeding (26-39, use 0
  answers), `Page.startScreencast` (118), ffmpeg stitch (192-193, ffmpeg path on line 9).
- `D:\scratch 2026\city-dash\dash.js`: welcome clicks (`data-cs` next/about/skip/more, 171-208),
  dashboard `act` buttons (300), building plaque (307).
Do NOT stub animations or skip the opening — this is a real watch-through (only what headless
needs to run, e.g. `.reveal{opacity:1}` if IntersectionObserver never fires; note any stub used).
Click real controls the way a student would (find by visible text/role/data attributes), never
call `go()` or `startQuiz()` directly; if a step can only be reached by calling code, record it
as a dead end in steps.json.

## Journey (fresh profile, 0 answers)
1. Boot -> full opening (shot 1 glide, cover, shot 2, landing) -> city home. Let it play.
2. Welcome lines, clicked through.
3. Dashboard: one action button pressed.
4. ENT building -> room -> one chapter.
5. Start a quiz there; answer 4 questions via the real option buttons (2 right, 2 wrong — read
   the answer from the question data in-page only to choose), view each explanation, finish,
   results screen.
6. Back to home using the visible Back control; then open each other building (ophtho,
   neuropsych, pediatrics) briefly and back.
7. Open one theory chapter, scroll once.
Pause ~1.5 s on each screen so a viewer can read it.

## Outputs, per size: 1440x900 first, then 1180x820, in `D:\scratch 2026\city-walk\run-<W>x<H>\`
- `walk.mp4` (whole journey, 25 fps).
- `NN-<step>.png` one per step.
- `steps.json`: per step — name, what was clicked (selector + visible text), ms taken, console
  errors since last step, and any click that changed nothing (dead click).
- Contact sheets `sheet-1.jpg` .. `sheet-4.jpg`, ~12 frames each, 4x3 grid, frames sampled evenly
  from walk.mp4 (ffmpeg `fps=...,scale=480:-1,tile=4x3`).

## Report back (short)
Paths, mp4 lengths, steps reached / not reached, console errors, dead clicks, stubs used.
