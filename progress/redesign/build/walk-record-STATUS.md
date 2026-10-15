# walk-record status

DONE 2026-10-15. Harness: `D:\scratch 2026\city-walk\walk.js` (run `W=1440 H=900 node walk.js`).
Outputs: `D:\scratch 2026\city-walk\run-1440x900\` and `run-1180x820\` (walk.mp4, 31 PNGs, steps.json, sheet-1..4.jpg).

- 1440x900: mp4 111.4 s, 3465 frames. 1180x820: mp4 108.6 s, 3745 frames.
- Reached: opening (shot 1, cover, shot 2, landing), welcome 9 lines, ENT module list, chapter "Swallowing disorders" (16 q), 4 answers (right, wrong, right, wrong; score 2 / 4), explanations, results, Return home, ENT again + Dashboard back, ophtho room + Lessons sheet + City back, neuropsych, pediatrics.
- Not reached: dashboard action button (absent for a 0-answer profile); theory chapter (`THEORY_LOCKED = true` in `app/data/modules.js`, Lessons sheet says "Coming soon").
- Console errors 0, window errors 0, failed requests 0, both sizes. Dead clicks 0 (final run).
- Stubs: `showGate` no-op, profile + term seeded, `data-theme=dark` set. No animation stubs.
- Try 1 harness bug (rail Dashboard button matched instead of the page Back) fixed; old try in `work/old-run-1440x900-try1`.
- Observation: in the ENT module view the rail's first nav button sits under `.main` (1440) / `main.page` (1180) per elementFromPoint; rail rect is 0,0,238 wide. Rail probe in steps.json, step 10 notes.
