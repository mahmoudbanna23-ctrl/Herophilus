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

## Pictures made

| # | Name | Date | Result |
|---|---|---|---|
