# Redesign trial — resume note

Branch `redesign/factory-2026-10`, worktree `D:\claude os\Medical school\Herophilus-redesign`, cut from
`main` at `47e7cf89` on 2026-10-11. A trial to compare against the parked P5 idea, not a commitment.
P5 is untouched. **No merge into main and no Pages upload without the owner's yes; the merge also waits
for the Pediatrics chat to finish.** Push the branch freely, never `--force`.

This file is the branch's only state file. `MEMORY.md` and `CLAUDE.md` are not edited here.

## The approved design (owner, 2026-10-11)

Home becomes one painted hall of the Alexandria library filling the first screen. Four subjects = four
alcoves, each holding an object of its craft; names and progress are real text over the paint. A locked
subject is an unlit alcove. Golden daylight painting for the light theme, evening lamps for the dark
theme. Hall first; today's plan, numbers, the Herophilus panel and Continue sit below, unchanged in
content. Dust, lamp flicker, layers that shift with the pointer; choosing a subject pushes in toward its
alcove before its page opens. The Clepsydra greets beside the welcome line with her existing welcoming
picture, then steps aside — never two of her at once.

Full plan and technical annex: `C:\Users\Alfa388\.claude\plans\pasted-content-id-82a8-new-job-shiny-sparkle.md`.
Build brief: `progress/redesign/briefs/build-home.md`.

## Order of work

1. ✅ Seat check, worktree, this note.
2. ⏳ Paintings — `progress/redesign/paint/` (`prompts.md`, `paint.sh`). Five planned: `hall-dark`,
   `hall-light` (1536x1024), `hall-dark-tall`, `hall-light-tall` (1024x1536), `fore` (near columns).
3. ⏳ Build home — brief above.
4. Script check (`node tools/boot-check/boot-check.js`, run in this worktree), then one independent
   checker from a different house than the builder.
5. Real screenshots, 1440x900 · 820x1180 · 1180x820, both themes → `progress/redesign/shots/`; sent to
   the owner. **Then stop and wait for his verdict before any other screen.**
6. Commit with explicit paths, push the branch.

## Touches on files the Pediatrics chat is also editing

Keep this list exact; it is what makes the later merge easy.

| File | Change |
|---|---|
| `app/index.html` | ONE added line: `<script src="js/hall.js">`, after `render.js`/`clepsydra.js`, before `boot.js` |

Zero lines changed in `render.js`, `storage.js`, `quiz.js`, `boot.js`, `gate.js`, `theory.js`,
`clepsydra.js`, `print.css`, `views.css`, `app/data/*`. No `wardround.*` key read under a new name or
written. New files only: `app/js/hall.js`, `app/css/hall.css`, `app/assets/hall/*`.

`hall.css` uses a container query for the upright composition, so the count of
`@media (max-aspect-ratio:5/4)` blocks stays at three (`CLAUDE.md` §6).

## Facts found, 2026-10-11

- **Picture maker** = registry row `image` → `~/.claude/skills/generate/scripts/codex-image.sh`. Hired
  2026-10-04, **8 pictures a day**, 2 a minute. That script is locked to landscape 1536x1024, so
  `paint/paint.sh` calls the same Codex helper directly with a size. These calls do NOT pass through
  the factory's counter — count them here.
- **Pictures used today (cap 8):** see the table below.
- **One Codex job at a time across both chats; Pediatrics has first call.** No busy flag exists. Busy
  test: any `codex.exe` whose command line contains ` exec ` (the desktop app's own processes are
  `app-server`, `exec-server`, `sandbox`). `paint.sh` waits on this; check by hand before any other
  Codex dispatch.
- **Seat check** (`Tools/omniroute/probe.mjs`): `COMBO work-text` reported a failing member
  (`openrouter/nvidia/nemotron-3-ultra-550b-a55b:free`, 429) — per `ROUTING.md` §6 that combo gets no
  work until fixed in the dashboard on the owner's yes. `work-vision` status was not read.
- **No outside library is used.** The factory's library list is paper only: none has been tested
  opening from `file://`.
- Output is 1536 px wide against a hall box of roughly 1200 CSS px on a laptop: about 1.3x, not the 2x
  the owner's raster rule asks for. Report this honestly with the screenshots.
- Untracked files in the main folder (some `app/assets/q/*.jpg` and others) are absent here. They do
  not affect home.
- Raw paintings stay in `progress/redesign/paint/` and are not committed (3 MB each); the converted
  files in `app/assets/hall/` are.

## Build state, 2026-10-11

- **Home built and committed `45409db`, pushed** — no paintings in it yet, so alcove and greeting
  positions are untuned starting guesses. Builder was a Claude role (Codex occupied by Pediatrics).
- Builder's own checks: `tools/boot-check` QUESTIONS 7477 · THEORY 153 · MODULES 4 · chapters 162 ·
  0 console errors ("module cards in DOM 0" is expected: the alcoves replace them);
  `progress/redesign/check-hall.mjs` 21 PASS. **Independent different-house check still owed.**
- Deviations from the brief, accepted: `hall.js` also wraps `inkMarkChips`, so the saved-mock button
  lands inside `.hall-below`; the plaque fill is `--card`, not `--fill` (`--fill` is dark in both
  themes). Measured plaque contrast, name / count / lowest accuracy colour: dark 14.37 / 6.37 / 4.87,
  light 14.69 / 7.17 / 6.2.
- **Library survey (researcher, paper only, nothing run from disk):** nothing on the factory shelf
  clearly beats the plain build for home. GSAP (one 73 KB classic file, free standard licence) is the
  only candidate worth a `file://` test, for the walk-in move. three.js ships no classic build since
  r160; Babylon is 7.5 MB; WebGL textures from local files are a known `file://` risk.
- **Button sample sheet** (owner asked to see ready-made button styles, 2026-10-11):
  `progress/redesign/samples/buttons.html` + two screenshots. A look for him to pick by number; not
  wired into the app.
- **Second button sheet:** `samples/buttons-2.html` + `.png` — 27 buttons copied verbatim from
  `uiverse-io/galaxy` (MIT), numbers 13-39. The owner rejected redrawn samples: real ones only.
- **Bulk button sheets:** `samples/more/buttons-3-01..09.png` + `index.tsv` — 299 more of the same
  collection, numbers 40-338, every 4th of the 1,208 files that passed the filter (1,231 in the
  collection; 22 dropped for emoji, 1 for a crude word). 909 passed and are not shown. About 21% have
  no hover effect; about 7% are clipped by their frame. Generator and HTML sheets are in
  `D:\scratch 2026\redesign\btn-gen\`, not in the repo. **Owner has not picked a number yet.**
  A looker's shortlist (stills only, so motion is inferred): main button 139 (best), 72, 141, 151, 187,
  73; quiet button 21 (best), 31, 212, 105. Avoid neon glow, glossy white pills, candy 3D bubbles.
  Defect in the sheets: sheet 7 has blank cards 274-290 (except 277), sheet 8 blanks at 316, 319, 322,
  325 — not fixed.
- **Shelf map:** `samples/shelf-map.md` — what the factory's library shelf offers beyond buttons, and
  the motion shortlist. Paper only.
- **Two motion libraries brought in, owner's yes 2026-10-11, SAMPLE FOLDER ONLY (not `app/`):**
  `samples/lib/` — GSAP 3.15.0 (core, ScrollTrigger, Flip, DrawSVGPlugin, CustomEase, CustomBounce,
  CustomWiggle; 158,872 bytes; GreenSock's standard no-charge licence) and Lenis 1.3.26 (+ snap, css;
  25,079 bytes; MIT). Both from their makers' official npm packages, tarball sha512 checked against
  the registry; per-file hashes in `samples/lib/SOURCES.md`. The owner was told "maker's own site" for
  GSAP; the file actually came from GreenSock's official npm package — say so. All are classic
  builds. Live demo page: `samples/motion.html`. **Using either inside the app is a separate yes.**

## Pictures made

| # | Name | Date | Result |
|---|---|---|---|
| 1 | `hall-dark` 1536x1024 | 2026-10-11 | Saved `paint/hall-dark.png` (2.4 MB, not committed). Sent raw to owner; **APPROVED by owner 2026-10-11.** Looker (Claude, different house from the maker): usable as is. Four alcoves, each ~20% wide, y 10-72%, centres x 15 / 38 / 62 / 85%, y 41%; objects left to right ear trumpet, crystal sphere, marble brain, toy horse. Empty lower panels y 58-72%, ~17% wide (plaque spot). No letters, no figure. Misses: top band ~9% not 14%, floor ~23% not 14%, side margins a sliver, scroll piles and lamps repeat, floor reflections streaky. Welcome line fits on the floor, x 15-85%, y 84-96%. |
| 2 | `hall-light` 1536x1024 | 2026-10-11 | Saved `paint/hall-light.png`, sent raw to owner; **APPROVED by owner 2026-10-11.** Looker: same four objects, alcove centres x 14 / 38 / 62 / 86%, y ~43%; lower panels y 62-77% (dark: 58-72%), so panels sit 4-5% lower than in the dark painting. One full-panel plaque set will NOT fit both; either per-theme positions, or one compact plaque <=9% tall, <=16% wide, centred y ~67%. Outer pilasters cut off at both edges (no side margin). Sun streaks cross the panels: measure text contrast inside a streak. |
| 3 | `hall-dark-tall` 1024x1536 | 2026-10-11 | Saved `paint/hall-dark-tall.png` (2.5 MB, not committed). Sent raw to owner; his verdict pending. Looker (Claude): usable, same hall, no letters or figures, nothing cut off. 2x2 grid, divider at y 41-43%. Top row ENT (x 3-48) and Ophthalmology (x 52-97): alcove y 9-37, lower panel y 37-41 — ONLY ~4% tall, plaques are tight there. Bottom row Neuropsychiatry and Pediatrics: alcove y 44-71, lower panel y 72-79. Floor x 5-95, y 82-98 for the welcome line. Differs from the landscape: no columns between alcoves, no books, flat panels. Side margins ~2.4%. Cropped to 820x1180: ~4% of height lost, all alcoves survive. |
| 4 | `hall-light-tall` 1024x1536 | 2026-10-11 | Launched; result pending. |

## Motion page, 2026-10-11

`samples/motion.html` — eight live demos (tile opens into a page, row opens into a card, depth on
scroll, ring that draws itself, wrong-answer shake, right-answer bounce, weighted scroll with snap,
browser page morph) on the two libraries in `samples/lib/`. Maker's self-test from `file://`: 26 of 26
pass. NOT checked: real-screen smoothness (headless Chrome gives no real frames, the test drove the
clocks by hand), the light theme, reduced motion. Stills `samples/motion-m1/m4/m6-mid.png` sent to the
owner. The in-app browser pane shows this file as a frozen snapshot, so he must open it from disk to
see it move. No independent check yet.

## In flight when this note was last written

- A Claude helper is putting the two approved paintings into the hall (`app/assets/hall/`,
  `app/css/hall.css`, `app/js/hall.js` only) and shooting the six home screenshots into `shots/`.
  Its `app/` edits are uncommitted until its report is read and checked.
- Still owed after that: independent different-house check of the hall build, `hall-light-tall` and
  `fore` paintings (3 of 8 pictures used today), owner's button pick (suggested 139 main, 21 quiet).
