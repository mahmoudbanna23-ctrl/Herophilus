# Judge a recorded new-student walk through the Herophilus trial app

You are an independent reviewer. Report only: write ONE file (named by whoever runs you) and
change nothing else. Do not run git.

## What you are judging
Herophilus is a medical revision app for Alexandria University students (ENT, ophthalmology,
neuropsychiatry, pediatrics). It is being redesigned as a painted Greek city: an opening film,
a city home with four buildings, painted rooms inside the buildings, a guide character, quizzes.
A headless browser used the trial build as a brand-new student. Evidence, in
`D:\scratch 2026\city-walk\`:
- `run-1440x900\` (laptop) and `run-1180x820\` (iPad landscape): `sheet-1.jpg`..`sheet-4.jpg`
  (contact sheets, 12 frames each, in time order), `NN-<step>.png` one per step, `steps.json`
  (what was clicked, timings, errors, dead clicks), `walk.mp4`.
- Known from the recorder: the dashboard had no action button for a 0-answer student (it says
  "Choose a building to begin"); theory reading is locked ("Coming soon"); ENT opened as a plain
  list, not a painted room; only ophthalmology has a painted room so far.

## The goal it is measured against
- `D:\claude os\Medical school\Herophilus-redesign\progress\redesign\PLAN-phases-2026-10-14.md`
  (the remaining phases).
- The owner's taste, in his words: premium gaming feel — scroll choreography, smooth gradients,
  pro + gaming vibe on the painted world; every frame true to the art style, high quality,
  AAA-game detail density; must NOT look AI-built (tells: emoji, chirpy copy, a scattered
  corner-radius scale); laptop and iPad first, phones secondary; entrances need a physical cause,
  nothing fades in from nothing.

## Write
1. Step by step: what a student sees and feels (one or two lines per step, cite the PNG name).
2. Broken or confusing: anything that looks wrong, misaligned, clipped, unreadable, empty,
   inconsistent between the painted world and the plain screens, or slow.
3. Top 10 gaps between what you saw and the goal, ranked by how far off each is. Each: what,
   where (PNG name), why it matters to a student, rough size of fix (small/medium/large).
4. One line: how far is this from the goal overall (e.g. "60% there") and the single most
   important next thing.
Under 900 words. Be blunt; praise only where it is earned.
