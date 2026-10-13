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
| 4 | `hall-light-tall` 1024x1536 | 2026-10-11 | Saved `paint/hall-light-tall.png` (2.7 MB, not committed). Sent raw to owner; his verdict pending. Looker (Claude): usable, style matches `hall-light`, no letters or figures, nothing cut off. 2x2, same objects in the same corners as the dark upright. Alcoves: top row y 6.5-35, bottom row y 47-75; left x 4-48, right x 52-97. Lower panels: top row x 8-44 / 56-92, y 36-43 (about 7% tall, roomier than the dark's 4%); bottom row y 76-85. Floor x 5-95, y 88-99. **Does NOT line up with the dark upright on the bottom row:** panels light y 76-85 vs dark 72-79.5; ledge 75 vs 71; arch top 47 vs 44; floor starts 87 vs 80. So upright positions must be per theme too, as in landscape. Side margins ~3%, scrolls repeat, soft sun shafts touch the top-left panel edge. Cropped to 820x1180: ~4% of height lost. |

## Motion page, 2026-10-11

`samples/motion.html` — eight live demos (tile opens into a page, row opens into a card, depth on
scroll, ring that draws itself, wrong-answer shake, right-answer bounce, weighted scroll with snap,
browser page morph) on the two libraries in `samples/lib/`. Maker's self-test from `file://`: 26 of 26
pass. NOT checked: real-screen smoothness (headless Chrome gives no real frames, the test drove the
clocks by hand), the light theme, reduced motion. Stills `samples/motion-m1/m4/m6-mid.png` sent to the
owner. The in-app browser pane shows this file as a frozen snapshot, so he must open it from disk to
see it move. No independent check yet.

**Owner's pick, 2026-10-11: M1-M6 go into the app; M7 (weighted scroll with snap) and M8 (browser page
morph) are OUT.** That is his yes for GSAP inside `app/` (core, Flip, ScrollTrigger, DrawSVGPlugin,
CustomEase, CustomBounce, CustomWiggle). Lenis is no longer needed anywhere — do not copy it into
`app/`. Where each goes: M1 tile-into-page = alcove into subject page, M3 depth on scroll and M4
self-drawing ring = home, so they join the home screen after the independent check and his look at the
stills. M2 (row into card), M5 (wrong-answer shake) and M6 (right-answer bounce) belong to the chapter
list and the quiz — later screens, and the quiz file is Pediatrics-owned; they wait for his verdict on
home. Not started.

## Hall-first home: built, checked, REJECTED by owner 2026-10-11

- Paintings wired in by a Claude helper: `app/assets/hall/hall-dark.jpg` (331 KB), `hall-light.jpg`
  (366 KB); `hall.css` rewritten, `hall.js` small edits. Hall box capped to the painting's 3:2 shape
  (1187x791 at 1440x900, 927x618 at 1180x820, 805x537 at 820x1180), so it no longer fills the first
  screen. Upright layout removed (no upright painting was in yet); foreground picture set to none.
  Plaques, % of painting: dark left 7.4 / 30.6 / 53.9 / 77.2, top 59.2, 15.6 x 11.8; light left
  5 / 29.6 / 54 / 78.6, top 64, 16.8 x 11.6. Builder's checks: boot-check 0 errors, `check-hall.mjs`
  all PASS. Six shots in `shots/`, sent to the owner.
- Independent check (Codex `gpt-5.6-terra`, read-only, brief `briefs/check-home.md`): **VERDICT FAIL,
  13 rules PASS, 1 FAIL** — `hall.js:99,115` takes alcove order from `activeModules()`, so a reordered
  module list would put the wrong subject on a fixed painted alcove. NOT fixed. Six shots: no visual
  doubt. It did not check the footprint (its house rules forbid git) or any runtime behaviour.
- **Owner's verdict on the shots: the hall must NOT be the first thing shown ("it doesn't make
  sense"); redesign the whole with a scroll-down animation that fits the hall.** What opens first is
  not yet settled — ask him, plan, get his yes, then build. Carry the order fault above into the next
  build brief.

## NEW DIRECTION, owner 2026-10-11 — RESUME HERE

Owner chose: **the first screen is the library seen from OUTSIDE** (new painting of the doorway, welcome
line on it); **scrolling carries you through the door into the hall**; then the rest of home below.
Hall-first build is saved at `e2e50560` as the fallback. Footprint at that commit, measured
`git diff main...HEAD --stat -- app` (three dots; two dots also shows Pediatrics's newer commits on
main and reads as a false alarm): 4 new files + 1 line in `index.html`.

**Owner's ruling on HOW, 2026-10-11 (supersedes building it from scratch):** "it only takes time to
design if we did it ourself, you might find something similar online to take it and just make a few
edits". So: find a ready-made scroll walk-in demo online, take it, edit lightly. It must be plain
HTML/CSS/JS, no framework, no build, no CDN, open from disk, licence allowing reuse; any download
needs his yes (name, source, size) and lands in its own empty folder as untrusted. Show him real
candidates (live links), never redrawn ones. A Sonnet researcher was dispatched for a shortlist of up
to six; its report is the next thing to read. Nothing built or painted for the walk-in yet.

The from-scratch plan below was NOT approved. It stays only as the list of what the borrowed demo must
end up doing:
1. Paint `outside-dark` and `outside-light` (1536x1024), hall painting given as style reference, big
   central doorway with the hall's glow inside, no letters or figures. Upright iPad uses the centre of
   the same painting at first. 4 of 8 pictures used today.
2. Scroll-led walk-in: the outside view grows around the doorway until the opening fills the screen
   and the hall is seen through it (a move caused by the scroll, never a fade). Hall holds while the
   plaques settle and rings draw (M4), then releases to the rest of home with depth (M3). Alcove click
   = M1. GSAP core + ScrollTrigger + Flip + DrawSVG copied into `app/`, loaded by `hall.js` itself so
   `index.html` stays at one line. Reduced motion: two plain stacked pictures, no walk-in.
3. Fix carried in: alcove order fixed to the painting by module id, not list order.
4. Script check, Codex check (a different house from the Claude builder), then stills at three scroll
   stops x three sizes x two themes AND the owner opens it live, since motion cannot be judged from
   stills. The two upright hall paintings (rows 3-4) go in at the same time.

## In flight when this note was last written

- **Owner 2026-10-11: "yes, go ahead with it make it smoother and redesign it"** — the borrowed
  scroll-through technique (lead 1 below) is approved, to be made ours. `outside-dark` / `outside-light`
  painted (6 of 8 pictures used), converted to `app/assets/hall/outside-*.jpg` (UNCOMMITTED until the
  build is checked), raw PNGs sent to him; **both APPROVED by owner 2026-10-11**.
- Second sample page `samples/motion-more.html` (N1-N4; five more GSAP files in `samples/lib/gsap/`,
  rows in `SOURCES.md`). **Owner 2026-10-11: keep N1 (heading rises line by line, SplitText) and N4
  (ring melts into a tick, MorphSVG). N2 (glide on a curve) and N3 (grab and flick) OUT.** He then
  asked to see what anime.js (factory inventory) can offer; not on disk, nothing fetched yet.
- anime.js 4.5.0 fetched with owner's yes (npm tarball, hash-checked, MIT; `samples/lib/animejs/`,
  one 118 KB file) and shown on `samples/motion-anime.html` (A1-A4, this kit alone).
  **Owner 2026-10-11: keep A1 (ripple across a tile grid from the pressed tile), A3 (chapter rows
  arrive in a wave), A4 (ring and underline draw themselves). A2 (spring settle) OUT.**
  Orchestrator's call, told to owner: these are MOVES he approved, not a second kit. GSAP already
  on the branch does all three (grid stagger `from: index`, row stagger, DrawSVG), so build them
  with GSAP and keep anime.js out of `app/` unless a GSAP version visibly falls short; show him
  side by side if it does. UNVERIFIED that the GSAP ripple looks the same.
- Full list of approved moves so far: M1-M6, N1, N4, A1, A3, A4. Out: M7, M8, N2, N3, A2.
- `briefs/check-walkin.md` written: the different-house check brief for the walk-in build. Doorway box and known look faults:
  bottom of `briefs/build-walkin.md`. A Claude builder is running that brief (edits `app/js/hall.js`,
  `app/css/hall.css`, adds `app/js/lib/`, stills `shots/walkin-*`). After its report: footprint check
  (three dots), Codex different-house check, stills to the owner, AND open the live page for him with
  PowerShell `Start-Process` (motion cannot be judged from stills). M1 (alcove opens into the subject
  page) and the two upright hall paintings are NOT in this round.
- Inventory list of scroll and object moves given to the owner in chat (ready: M1-M6, hold-still
  scene, slide-in rows, snap panels, count-up, 237 hover buttons; shelf has no dust, tilt, card flip
  or pointer trail). Asked whether to fetch any not-yet-brought-in one; unanswered.

- Researcher report read 2026-10-11: no whole doorway walk-in page found that can be taken as is
  (CodePen and Codrops refused its fetches; both Codrops demos need a smooth-scroll hijack = banned).
  Three CodePen leads then opened in the built-in browser and confirmed real:
  1. `codepen.io/mvaneijgen/pen/YzwVZEm` "GSAP ScrollTrigger Zoom" — CLOSEST: two stacked pictures,
     the front one a cut-out that scales up on scroll until you are through it; GSAP core +
     ScrollTrigger only as far as read; its two pictures are a third party's, swap for ours.
  2. `codepen.io/GreenSock/pen/mdRaRrN` "Zoom by section" — a reusable zoom-on-a-spot helper
     (`origin: [x, y]`), useful for aiming the zoom at the door.
  3. `codepen.io/GreenSock/pen/oNJRjNL` clip-path reveal — loads Lenis from a CDN, would need
     stripping; look only.
  CodePen public pens are MIT per CodePen's licensing page (second-hand quote, not read first-hand).
  Shown to the owner: lead 1 in full view; his verdict on the feel is pending. Taking it still needs
  an outside painting per theme with the doorway cut see-through. No code copied yet.
- Unanswered by the owner: keep the upright evening hall or repaint it with a taller name strip under
  the top two alcoves; button pick (suggested 139 main, 21 quiet).
- 4 of 8 pictures used on 2026-10-11. Raw paintings in `paint/` are uncommitted by design.

## 2026-10-11 — "comes apart on scroll" trial (owner request)

- Owner pointed at the anime.js front page (a machine coming apart as you scroll) and asked for the
  same kind of move. Measured there: that object is a 3D model built in pieces; the kit only ties
  movement to scroll. What we lack is an object in pieces, not a kit.
- Owner ruling: "yes, try the quick way and show me if not approved go 3D". Quick way = ONE alcove
  object (the ear trumpet) painted as five separate parts, cut out by script, pulled apart and put
  back by the scroll with the kit already on the branch. Not approved -> a true 3D model (Blender).
- Dispatched: one lean-drafter. Prompt file paint/prompt-trumpet-parts.txt; page
  samples/scroll-apart.html; pieces samples/parts/. At most two pictures (daily allowance: 6 of 8
  used before this job). Result NOT yet known when this note was written.
- Nothing from this trial goes under app/ before the owner's verdict.
- RESULT + VERDICT 2026-10-11: one picture, transparent background, five clean pieces; page
  samples/scroll-apart.html built, 0 console errors (commit after c1e205fd). Owner saw the stills
  and the live page: "Approved". The painted-in-pieces way is the route; 3D is NOT needed.
  Known faults carried: joints read as nested rings up close; upright iPad size sits small.
- Owner then asked what can be done for the whole app. A whole-app proposal was given in chat;
  nothing beyond home is to be built before his verdict on the walk-in home screen.
- Walk-in home: built (c1e205fd), footprint clean, upright iPad letterboxed and unfinished;
  Codex check with briefs/check-walkin.md queued behind a busy Codex, report expected at
  D:\scratch 2026\redesign\walkin\check-report.txt. An unexplained paint/hall-dark-tall.png
  appeared untracked during this stretch: look at who made it before using or counting it.

## 2026-10-11 — round 2 on the home screen (owner's verdict on the walk-in)

- Owner approved the whole-app order: judge home first, then ONE complete subject page (ENT, the
  trumpet is ready), then the rest copy the pattern.
- Owner's verdict on the walk-in home, verbatim: "Remove the "Scroll" box at the bottom, change the
  boxes over all this dark blue doesn't match the whole theme, add doors to the library that opens
  with the animation, edit the left side tool bar so it goes on with the whole theme, don't forget
  that our general whole theme is ancient Alex and greek". Then: "Also find font types and
  typography that matches the theme". Box edge glow: he picked warm gold (light blue is out).
- Plan approved by him: `briefs/round2-plan.md` (six parts: cue out, warm skin app-wide, left rail,
  doors on the scroll, upright hall wired in, typography with a specimen page he picks from).
- Footprint stays: ONE script-tag line in `app/index.html`, zero lines in the Pediatrics files.
  New override sheets `app/css/warm.css` (and later `app/css/type.css`) are injected by `hall.js`.
  Fonts today are base64 in `app/data/fonts.js`; that folder is off-limits, so it is not edited.
- Dispatched 16:33: build A (cue, skin, rail) = one lean-drafter, brief `briefs/build-round2-a.md`,
  report `D:\scratch 2026\redesign\round2\build-a-report.md`, stills `shots/r2a-*`. Font search =
  one researcher, read-only, report `D:\scratch 2026\redesign\round2\fonts-report.md`. Neither
  result known when this was written.
- BLOCKED until 21:03: Codex hit its usage limit ("try again at 9:03 PM"). That stops the doors
  painting (`paint/prompt-doors.txt` is written; run `bash paint/paint-ref.sh doors 1024x1536
  outside-dark.png`, delete `paint/doors.log` first if it complains) and the outside check.
  The failed attempt made no picture, so 7 of 8 pictures are used today, one left.
- The old outside check of the first walk-in was cancelled unrun: the screen it would have judged
  is being changed. `briefs/check-walkin.md` must be rewritten for round 2 before it is used.
- Still to do after build A: build B (doors + upright hall; needs the doors picture), outside
  check, stills looked at by a helper, screenshots to the owner, then wait for his verdict.
- Font files may be downloaded only after the owner's yes.

### 2026-10-11, later — typography: shortlist back, owner said yes to the fetch

- Researcher's shortlist (report: `D:\scratch 2026\redesign\round2\fonts-report.md`, written via
  heredoc, treat backslashes with care). Pairs, title face + reading face:
  0 Cinzel + EB Garamond (today's) · 1 Marcellus + Gentium Book Plus · 2 Forum + Alegreya ·
  3 Cormorant SC + Cardo · 4 Gilda Display + IM Fell Double Pica (tiring for long study) ·
  5 GFS Didot + Libre Caslon Text.
- Unverified at research time: full licence text read for 2 faces only; glyph cover for
  `µ ° ± × ≤ ≥` and superscripts; GFS download URLs.
- Owner's answer (AskUserQuestion): "Yes, fetch all ten (Recommended)".
- Dispatched: one Sonnet builder, brief `briefs/build-type-specimen.md`. It fetches into
  `samples/lib/fonts/<face>/`, logs `samples/lib/SOURCES.md`, builds `samples/type.html`, runs a
  per-character glyph check, shoots `shots/type-*.png`. Report:
  `D:\scratch 2026\redesign\round2\type-report.md`. Nothing under `app/`.
- Next on typography: a helper looks at the stills, the owner picks by looking, only then
  `app/css/type.css` (base64 faces, injected by the hall script like the warm sheet).

### Still in flight at this note
- Build A (scroll box out, warm skin, left rail): running; report
  `D:\scratch 2026\redesign\round2\build-a-report.md`; its files are NOT committed yet.
- Doors painting: a waiting shell starts it at 21:05 (picture maker limit lifts 21:03).
- Outside check: not run; `briefs/check-walkin.md` still describes round 1 and must be rewritten.
- Build B (doors on the scroll, upright hall paintings): not started; needs the doors picture.
- This chat is past its step budget: start a fresh chat from this note.

### 2026-10-11, evening — HANDOFF: start the next chat here

Committed and pushed: `c26035a4` (build A + type specimen). Nothing merged, nothing live.

**Build A — landed, NOT yet shown to the owner.** Report
`D:\scratch 2026\redesign\round2\build-a-report.md`; stills `shots/r2a-*.png` (28).
- Done: scroll box gone (0 in DOM, grep clean); `app/css/warm.css` live (49 rules, screen only),
  injected by the hall script after `hall.css`; boot-check 0 console errors; no blue-above-red
  surface in dark or light. Footprint: `hall.js`, `hall.css`, new `warm.css`. No new shared-file line.
- Open, to judge before showing: only 8 of 28 stills were looked at, all before the last colour
  tuning (a Haiku helper must look at the final ones; 1180 and 820 light were shot before a
  light-orb fix and need re-shooting; no reduced-motion stills) · gold edge loud on stacked cards
  in the subject list · left bar scrolls at 820 px height (key bands push "Mock exam" off) ·
  dim rail text lifted to `#9a8d77` in the dark rail (builder's call) · `--ink-4` 4.00:1 on
  `--fill` and 4.27 on hover tint, under AA · focus ring `--neuro` 2.34:1, not fixed ·
  navy `theme-color` (`#070d16`) still in `index.html` and `theme.js` (outside the grant;
  fixing it is a shared-file line) · navy flash before the injected sheet: not tested ·
  boot-check prints "module cards in DOM 0" because home is the hall (predates this job).

**Typography — fetched, specimen built, NOT yet picked.** Report
`D:\scratch 2026\redesign\round2\type-report.md`. Page `samples/type.html`; stills
`shots/type-*.png` (`type-1440x900-both.png` = both surfaces). 27 files, 6.58 MB, ten faces,
every `OFL.txt` opened: all SIL OFL 1.1 (Reserved Font Names: Marcellus, Gentium/SIL, Forum,
Gilda, GFS Didot; files unmodified). Glyph check by cmap parse:
- Complete on the dose test line: Gentium Book Plus (pair 1), Alegreya (pair 2), Cardo (pair 3).
- Missing: today's embedded EB Garamond subset lacks superscript 6, less-or-equal,
  greater-or-equal, subscript 2 and all Greek · IM Fell Double Pica the same, and its archaic
  digits make the dose line hard to read · Libre Caslon Text lacks the two inequality signs and
  Greek. The micro, degree, plus-minus and times signs are present in every reading face.
- Builder's read: pairs 1, 2, 3 good for long study; pair 4 not; pair 5 sturdy but falls back.
- Finding worth telling the owner plainly: TODAY'S reading face already drops some dose signs
  to a stand-in face.
- Next: owner picks by looking; only then `app/css/type.css`.

**Doors — two routes, neither finished.**
- Owner asked (verbatim): "try to create the doors with canva or the gateway".
- Canva: painted on the first try from `paint/prompt-doors.txt` (text only, no style reference),
  2:3. Media id `MAHXtQXK9uU` (on flat grey-blue), `MAHXts-mHpk` (background removed, alpha).
  Seen as a 133x200 preview only: arched bronze pair, centre seam, two ring handles, palmette
  panels, studs. ⚠️ Full size is NOT on disk: the tools returned previews only. To get it out:
  place the media in a Canva page and export PNG with a transparent background, or the owner
  downloads it from his Canva uploads. Not attempted.
- Gateway: the image-model list call was interrupted and a health call gave no answer for
  minutes (left running in the background). Treat as not available tonight; not relied on.
- Codex: the waiting shell still starts `paint-ref.sh doors 1024x1536 outside-dark.png` at 21:05
  (last picture of today's eight). It uses the outside painting as style reference and writes a
  full-size local file. Kept on purpose as the second candidate.
- Then: a helper looks at both, owner or main chat picks, cut at the centre seam into
  `app/assets/hall/door-l.png` / `door-r.png`, build B.

**Order for the fresh chat**
1. Haiku helper looks at the `r2a-*` and `type-*` stills; fix or re-shoot what it flags.
2. Get a full-size doors picture (Canva export, or the 21:05 Codex one).
3. Build B: doors as the first scroll beat + upright hall paintings (plan sections 4 and 5).
4. Rewrite `briefs/check-walkin.md` for round 2; Codex outside check (one Codex job at a time,
   Pediatrics first).
5. Show the owner: home (doors shut, opening, hall, below), a subject page, a question, the
   theory page, at laptop and both iPad sizes, both looks; and the lettering page. One question
   at a time. Still unanswered from earlier: the button pick (suggested 139 main, 21 quiet).

### 2026-10-11, late — LETTERING PICKED: pair 5

- Owner saw the six pair pictures one by one and answered (verbatim): "5".
  Pair 5 = GFS Didot (titles) + Libre Caslon Text (reading).
- Known gap in this pair, from the cmap check: Libre Caslon Text has no less-or-equal, no
  greater-or-equal and no Greek. Main chat's decision (told to the owner, not asked): the
  reading stack is `'Libre Caslon Text', 'Gentium Book Plus', <existing fallbacks>` with BOTH
  embedded, so the missing signs and Greek always come from the same known face on every
  device, never from a system stand-in. Gentium Book Plus covered the whole dose test line.
  Check before trusting: GFS Didot's cover of digits and the signs used in titles and plaques;
  whether Libre Caslon's italic "st" ligature shows in running text (turn it off with
  `font-variant-ligatures: no-discretionary-ligatures` if it does); superscript and subscript
  digits (cmap said only the inequality signs and Greek are missing, so they should be present:
  verify on a real theory page).
- To build (one Sonnet builder, brief not written yet): `app/css/type.css`, screen only, base64
  `@font-face` for GFS Didot regular, Libre Caslon Text regular/italic/bold, Gentium Book Plus
  regular/italic/bold; injected by the hall script after `warm.css`; overrides `--font-display`
  and `--font-body` only. Zero lines in `data/fonts.js`, `tokens.css`, `index.html`.
  Subsetting is allowed only if no tooling has to be installed; otherwise embed whole files and
  report the page weight. Typography rules from plan section 6. Then: theory A4 page count on
  two long chapters before and after, one printed theory page before and after (print sheet is
  not edited, so print keeps today's lettering unless the owner asks otherwise: tell him),
  stills of home, a subject page, a question and a theory page at the three sizes.
- Reserved Font Name applies to GFS Didot and Gentium: embed the files unmodified, or rename
  the family if a subset is made.

### 2026-10-11, 18:25 — PREP: cleared context, same chat continues

- Owner (verbatim): "no keep everything here /prep and we continue after the clear". So the
  work goes on in the SAME window after `/clear`, not in a new chat. Nothing new was built
  between the lettering pick (`6c2c194e`) and this note.
- State of the tree at prep: last commit `6c2c194e`, pushed. Nothing modified. Untracked on
  purpose and ONLY on disk (not in git): the source paintings and their logs/prompts under
  `progress/redesign/paint/` (`hall-dark.png`, `hall-light.png`, `hall-dark-tall.png`,
  `hall-light-tall.png`, `outside-dark.png`, `outside-light.png`, `*.log`, `prompt-hall-*.txt`,
  `doors.log`). Build B needs the two `*-tall.png`; they are there.
- Doors picture: `paint/doors.png` did NOT exist at 18:25. A background shell of the cleared
  chat was sleeping until 21:05 to run `bash ./paint-ref.sh doors 1024x1536 outside-dark.png`
  in `paint/` (the last of today's eight pictures; Codex was at its usage limit until 21:03).
  After the clear: first `ls paint/doors.png`. If it is missing and it is past 21:05, check no
  other Codex job is running (Pediatrics has first call), then run that one command once.
  Before 21:05 it cannot run; do the steps that need no Codex first.
- Gateway (OmniRoute) gave no answer tonight; do not rely on it without a fresh probe.
- Next action, unchanged: "Order for the fresh chat" in the HANDOFF block above, with the
  lettering build (the "LETTERING PICKED: pair 5" block) slotted in beside step 1. Steps 1 and
  the lettering build need no Codex and can start at once; both are helper jobs (Haiku looks at
  stills, one Sonnet builder with a brief that still has to be written under `briefs/`).
- Told to the owner already, do not re-ask: pair 5 is recorded; the missing signs come from
  Gentium Book Plus built in behind it; printing keeps today's lettering unless he says
  otherwise. Still unanswered from earlier: the button pick (suggested 139 main, 21 quiet) —
  one plain question, only when the screenshots go to him.

## EVENING BLOCK — 2026-10-11, from 18:26 (state at 19:20)

Commits, all pushed: `8d6da064` briefs · `9408e0ff` lettering · `d94be479` fix pass 1 ·
`dc0f3b5a` upright hall.

- **Look-over 1** (Haiku, all 28 `r2a-*`): 15 faults. List is in the fix brief,
  `briefs/build-round2-fix.md`.
- **Lettering pair 5 LANDED** — `app/css/type.css` (3.95 MB, whole TTFs as base64, screen only),
  injected by `hall.js` after `warm.css`. Sign proof: 29 signs, 0 system faces (Caslon: micro,
  degree, plus-minus, times, superscripts, subscript 2; Gentium: less/greater-or-equal, Greek,
  non-breaking hyphen; Gentium carries `size-adjust:115%`). **Theory text inside the sheet went
  14px -> 12.9px** to hold the page count (all chapters 3517 -> 3521; `ent-tonsils` 38 -> 39,
  `nr-cns` 35 -> 35). Print unchanged (PDF fonts still the old ones). Italic sets NO ligatures
  (the "st" tie sits in Caslon's common ligatures). Report:
  `D:\scratch 2026\redesign\type5\build-type-report.md`. NOT done: 60-75 character measure.
- **Fix pass 1 LANDED** (`warm.css` +72, `type.css` +11): rows and stat cards rest on a hairline;
  left bar fits at 820 px height; dark `--fill` now `#342516`; focus ring uses `--neon`
  (dark >= 6.3:1, light >= 4.2:1); blue button ring warmed; small labels in the reading face;
  theory section titles lost small caps. Report:
  `D:\scratch 2026\redesign\round2fix\build-fix-report.md`.
- **Look-over 2** (Haiku, all 30 `r2f-*`, lines in `round2fix\r2f-look.txt`): a theory table at
  1180x820 shows one row then a blank sheet (cause unknown: lettering or old fault); gold edge
  still loud on option rows and question card; streak chip wraps; faint section labels.
  **Fix pass 2 is RUNNING** on these (stills `r2g-*`, report
  `D:\scratch 2026\redesign\round2fix2\build-fix2-report.md`).
- **Upright hall LANDED** — there was NO portrait branch before (`--hall-tall` was read nowhere).
  Now `hall.js` has `tall()`, a tall preload and a tall branch in `layout()`; `hall.css` has one
  late `@media (orientation:portrait)` block with the tall coordinates. JPGs 281 KB + 318 KB.
  Landscape proven unchanged. Doubts: `warm.css` section 3 (plaque enlargement) is now outranked
  in portrait, i.e. dead there; **the Clepsydra greeting is drawn at 96px and behind the plaques
  in portrait** (size and layer only, the picture itself untouched) — owner has not seen this;
  phones and 1024x1366 not shot. Report:
  `D:\scratch 2026\redesign\round2b\build-b-upright-report.md`.
- **Doors**: still no `paint/doors.png`. A background shell of THIS chat waits until 21:07, then
  runs `paint-ref.sh doors 1024x1536 outside-dark.png` once if no Codex job is running (the
  script refuses if the picture exists). Then: Haiku looks at it; a Sonnet builder does the doors
  half of `briefs/build-round2-b.md` (cut at the measured seam, first scroll beat). The half-fixed
  fault "plaque text tiny at 820 wide" needed a counter-scale in `hall.js`; the upright hall may
  have made it moot — check on the final stills.
- **Check brief rewritten** for round 2: `briefs/check-walkin.md`. Codex check not yet run (one
  Codex job at a time; after the doors picture).
- Shared-file lines touched this block: none. Still open from before: navy `theme-color` in
  `index.html` / `theme.js`; first-paint flash of the old look before the injected sheets; the
  4 MB lettering sheet is fetched on first load (weight not yet judged by the owner).
- To tell the owner with the screenshots: theory text 14 -> 12.9; Clepsydra smaller on upright
  iPad; printing keeps the old lettering (already told). One question only: the button pick
  (suggested 139 main, 21 quiet).

## EVENING BLOCK, continued — state at 19:55

Commits since, pushed: `6853e495` fix pass 2 · `d6a58e0f` fix pass 3.

- **Fix pass 2 LANDED** (`warm.css` +33): dark option rows and question card rest on a hairline;
  streak chip on two balanced lines; section labels 3.99 -> 4.87:1 dark, 4.06 -> 4.73:1 light;
  citation strip 13px. The "one-row table then blank" theory page at 1180x820 was measured three
  ways (both sheets / no `type.css` / neither): identical on the base app, an OLD paging fault,
  left alone. Report: `D:\scratch 2026\redesign\round2fix2\build-fix2-report.md`.
- **Look-over 3** (Haiku, 37 `r2g` + `r2b` stills): lines in `round2fix2\r2g-look.txt`.
- **Fix pass 3 LANDED** (`warm.css` +21, `hall.css` +9/-5): light verdict boxes use the deep red
  and green tokens (1.40 -> 4.92, 1.12 -> 5.87); dark How-sure card and Explain row rest on a
  hairline; hall plate figures 10 -> 14px at 1180x820, 13px at 1440x900, ring enlarged too
  (beyond the ask). Stills `r2h-*`. Report: `D:\scratch 2026\redesign\round2fix3\build-fix3-report.md`.
- **Look-over 4** (Haiku, 16 `r2h`): `round2fix3\r2h-look.txt`. Open, NOT fixed: the mascot's
  speech bubble covers the Guessed / Unsure buttons at 1180x820 on an answered question (her
  position and code, outside the footprint: tell the owner); `views.css:284` paints a gold corner
  on the dark verdict box; the "partial" verdict (`components.css:142`) is still pastel on
  parchment in the light look; the two unsure `r2b-*-below` items (hall bottom edge cutting plates
  at 820x1180 light, mascot at 1180x820 dark).
- **Doors**: the shell from 16:34 is still alive and runs `paint-ref.sh doors` at 21:05 by itself.
  `doors-at-2107.ps1` was STOPPED: its busy test (` exec`) matched the Codex desktop app's
  `exec-server` and would never have run. Real test: `codex.exe` with `* exec *`. A watch-only
  shell reports when `doors.png` lands. Next: Haiku looks at it; Sonnet builder does the doors
  half of `briefs/build-round2-b.md` plus the final owner stills; Haiku look-over; Codex check
  with `briefs/check-walkin.md`; then screenshots to the owner and STOP.

## EVENING BLOCK, close — state at 22:10. SCREENSHOTS SENT; WAITING FOR THE OWNER'S VERDICT.

Commits since, pushed: `b55fce7b` doors · `0b05d70d` doors fix.

- **Doors LANDED.** `paint/doors.png` made 21:06 by the 16:34 shell. Leaves `door-l.png` /
  `door-r.png` 256x810, 885.5 KB together; seam column 509, split at 512; arch zone squashed about
  20 percent to fit the painted doorway (ring handles slightly oval). `rotateY` 0 -> 100 -> 0.
  Fix pass: leaves in the first markup, removed only by the 3 s fallback; never built for reduced
  motion; light leaves warmer plus a contact shadow; mid-swing gap interior. Reports:
  `D:\scratch 2026\redesign\round2d\build-doors-report.md`, `round2e\build-doorsfix-report.md`;
  look-overs `round2d\r2d-look.txt`, `round2e\r2e-look.txt`.
- **Owner set sent** (30 stills): home `r2e-*-doors-shut` + `r2e-*-hall`, subject page
  `r2g-*-module`, question `r2h-*-question-wrong`, theory `r2g-*-theory`; three sizes, both looks.
- **Outside check (Codex, read-only) = FAIL.** Report `D:\scratch 2026\redesign\check2\check-report.txt`,
  launcher `check2\run-check.sh`. NOT fixed, held until the owner's verdict:
  - `hall.js:577` the 450 ms alcove-push timer is never cancelled on leaving home; parallax frames
    593-597 not cancelled.
  - `hall.js:332` the no-library fallback still enables parallax (animation frames) and the push timer.
  - `hall.js:537` the return-to-hall flag is consumed only inside `startWalk`; reduced-motion and
    fallback paths never consume it.
  - `warm.css:135` redefines `--rail-dim` (a text token).
  - `hall.js:503` the scroll animates SVG ring stroke; round-1 brief asked for it, check rule (a)
    forbids it: contracts conflict, owner or orchestrator rules.
  - `r2e-1180x820-<dark|light>-hall`: blurred band above the pulled-back hall with a step line
    (brown smear in light). Full fix = the `pb` geometry in `layout()` in `hall.js`.
  - Light look: doors read cooler than the cream stone; mid-swing gap washes out to cream.
  - Light theory sheet is pale (`components.css:884`, base app, outside the footprint).
  - The Clepsydra speech bubble covers controls and rows on question, subject and theory pages
    (`clepsydra.js` ~369/375, `views.css` `.cl-say` 785-795: outside the footprint; owner's call).
  - Passing-state only, not faults: plates lapped by the rising sheet in `-below`.
  - Check passed: all `warm.css` / `type.css` rules inside `@media screen` (brace walk); font bytes
    match the source files exactly; which-face table gives per-sign evidence.
- Not shot: 1024x1366 and phones. Still open: button pick (suggested 139 main, 21 quiet).

## NIGHT BLOCK — state at 23:45. OWNER TESTED; DARK LOOK GOES NIGHT BLUE.

- Owner opened the trial from disk and ruled: "fine but something still feels odd, the app doesn't
  feel as one and the color palate for the dark mode is awful" = too brown and muddy. Shown three
  samples (`samples/dark-variants/A|B|C.css`, stills `r3-*`), he picked **C, night blue**, and asked
  for the hall to be cooler.
- Landed: `warm.css` dark values are sample C (no brown hex left in a dark rule); "How sure" card
  and streak chip cooled; `hall-dark.jpg`, `hall-dark-tall.jpg`, `outside-dark.jpg` re-graded by
  `paint/cool/grade-cool.py` (always reads `paint/cool/src/`, the warm originals): shadows to hue
  220, lamps kept warm (top-5-percent hue 31 -> 31). Dark door-leaf filter retuned in `hall.css`.
  Stills `r4-<size>-dark-*` (21). Light look unchanged (pixel diff = noise).
- Builder calls to confirm: it restated `--line`, `--line-2`, `--tint`, `--sheen`, `--glow` in the
  dark block (cream hairlines read brown on blue) and rewrote the `warm.css` header; it kept the
  `--rail-dim` redefinition (base value reads 3.03 on the active row); it added
  `.clep{--cl-panel}` so the mascot's speech bubble is blue-black: OWNER NOT YET ASKED, revert that
  one rule if he says no.
- Under 4.5:1, not patched: ink-4 on `--rail-3` 4.33; `#9a8d77` on `--rail-3` 4.40.
- Still warm, outside the footprint: `--bad-bg` (wrong-answer box reads maroon on blue,
  `tokens.css`), the `.ambient` film pictures behind pages, the sepia Herophilus portrait.
- Still open from the outside check: the three walk-in behaviour faults in `hall.js`, the band above
  the hall at 1180x820, light-look door toning. Button pick still open.

## 2026-10-12 BLOCK — SLIM FLOATING STRIP BUILT; OUTSIDE CHECK RUNNING.

- **Owner ruling:** "The left tool bar and the search bar above are so out of place" -> he picked the
  **slim floating strip**. Approved plan: `C:\Users\Alfa388\.claude\plans\gentle-hugging-wolf.md`.
- **Landed, all in `app/css/warm.css`** (no base file edited, nothing in `hall.css` / `hall.js`):
  - `a703d87e` FIX PASS 4: dark wrong-answer surfaces red not gold; `.ambient .film` cooled.
  - Strip commit `3cf0a542`: `/* STRIP — slim floating rail */` and `/* STRIP B — floating top
    buttons and search */`. Rail = 52px chip column, 238px on hover / `:has(:focus-visible)` /
    class `open`; `#nav` keeps a fixed 52px box (mascot placement reads it). Top bar zero height,
    round `--fab` buttons, search collapses to a circle and grows leftward on focus.
  - **New stacking rungs: open strip 160, touch menu button 170** (between mascot 150 and gate 200).
  - Tokens: `--chip`, `--strip-w`, `--rail-open`, `--fab`, `--strip-clear`, `--page-pl`, `--sw`.
  - Dark wrong-row fill raised: `rgba(255,28,40,.32/.24)` over `--card`; text 11.38, chip 4.93.
- **Measured:** 0 errors, 4 cards, 3 sizes x 2 looks; `#nav` rect (0,52,52) thin and open; button
  gaps 8/8/8; `warm.css` 170 parsed rules, brace depth back to 0; result tags 6.16-10.43 from pixels.
- **Not caused by the strip (same with the blocks removed):** 820x1180 hall walk class `live open`;
  820x1180 print `.page` padding `16px 14px`; theory tables paginate across sheet pages (rows are on
  the next page, not lost).
- **Cost to know:** centring the theory sheet made it 562x794 at 820x1180 (was 616x871).
- **`max-aspect-ratio:5/4` count is now 4** (3 in `views.css`, 1 at `warm.css:75`, pre-existing).
- **Cannot be fixed from override CSS:** keyboard focus drops after navigation (`renderNav` rebuilds
  the buttons); Esc closes search results but not the open field; tabbing out of search leaves the
  results list open until a click elsewhere.
- **Stills:** `r5-*` (red/film), `r6a-*` (strip, top bar not yet moved: stale), `r6b-*` (buttons),
  `r6c-*` (after fix pass; `strip-open` = widened strip). Harness `D:\scratch 2026\redesign\dark6\`.
- **Outside check:** `D:\scratch 2026\redesign\check3\` (`task.md`, `run-check.sh`, `check-report.txt`).
- **Still open, owner's call:** the mascot's speech bubble covers row ends, "Read the notes" and
  explanation text (outside the footprint); keep her bubble blue-black or revert `.clep{--cl-panel}`.
- **Still open, ours:** three walk-in faults in `hall.js` + 1180x820 band; light-look door toning;
  button pick; phones and 1024x1366 not shot.
- **Outside check (Codex, read-only) = FAIL, then fixed** (`check3\check-report.txt`). Fixed in the
  follow-up commit: thin strip without `:has()` (thin rules exist once per hover x `:has()` case, so
  `warm.css` parses to 237 rules); hover widening only under `(hover:hover)`; `#railTerm` clipped
  not `display:none`; thin chips are circles (nav, profile), streak and sync are pills. Stills `r6d-*`.
  Judged NOT faults: touch button z 170 sits inside the top bar's z 20 layer (the strip starts
  below it under a coarse pointer, so they never overlap); coarse strip is 56px by design; the
  bare-`:root` dark token block predates this work; open strip covers page text by design.
  Not re-checked by an outside house after the fix; sync chip never seen in a still (signed out).

## Painted room per subject — built 2026-10-12 (`baa2e30e`)

- **What:** `app/js/rooms.js` + `app/css/rooms.css` put a painted plate behind every page, picked by
  subject (module, theory chapter, one-subject set), hall plate elsewhere. Scroll drifts the plate
  deeper; reading views freeze it; reduced motion shows a still. The background video is stripped
  at run time (element kept); the sign-in screen shows the outside plate as a still. `hall.js` only
  gained the hook that loads the two files.
- **Plates:** `app/assets/hall/room-<subject>-<look>.jpg` — four dark, three light. **Owed:**
  `room-neuropsych-light` (light look still shows the light hall plate):
  `bash progress/redesign/paint/paint-room-light.sh room-neuropsych-light`, convert to JPG under
  399 KB, point the plate variable at it. Prompts `paint/prompts-rooms.md`; scripts `paint-room.sh`,
  `paint-room-light.sh`. Painting cap 8 a day, all 8 used on 2026-10-12.
- **Owner:** approved all four dark rooms, then tested the trial himself. Not answered: is the room
  drift right or too faint.
- **Stills:** `r7-<size>-<look>-<subject>-top|mid`, `-notes`, `-question`, `-signin` (66, three
  sizes, both looks); clips `r7m-ent-dark.mp4`, `r7m-pediatrics-dark.mp4`. `r7-*-module-*` and
  `r7-*-timetable` (24) are from before the per-subject pick: stale, not committed; GIFs not
  committed.
- **Not done:** outside check (Codex, read-only) of the room work.

## NEXT — statue hall, turning walls, ruined gate, pop-out strip (approved 2026-10-12)

**The approved plan is `progress/redesign/PLAN-statue-hall-2026-10-12.md` — read it whole before
anything; it carries the owner's words, the limits, line anchors and the order of work.** Nothing of
it is built yet. Start at its "Order of work" step 1 (strip) and step 2 (wall prompts) in parallel,
then step 3 (ring spike with stand-in walls) and **judge the turn before building on it**.
Paintings may start 2026-10-13: statue dark first, shown to the owner for a yes before the other
walls. Owner picked "Turn on the spot". Open owner questions, one at a time, after he tests: mascot
bubble over row ends; bubble colour; upright-iPad notes sheet size.

## 2026-10-12 LATE — plan steps 1-3 built; the turn waits for the owner's eye

Supersedes "Nothing of it is built yet" in the section above. Branch `redesign/factory-2026-10`, pushed.

- **Step 1, strip — DONE `735062cd`** (`warm.css` only). Each chip opens alone on hover or keyboard
  focus. Not tested: a real touch screen, device scale factor 2. Ask the owner to tap it on the iPad.
- **Step 2, wall prompts — DONE `7777eb15`.** `paint/prompts-walls.md` (ten sections) and the two paint
  scripts take `PROMPTS_FILE` / `COMMON_SECTION`; `paint-room.sh` also takes `EXTRA_REF` (the bust).
  Commands are at the top of `prompts-walls.md`. Nothing painted.
- **Step 3, ring spike — BUILT `3c30a85`** (`hall.js`, `hall.css`; CSS stand-in walls, no plates).
  Independent check: PASS WITH FAULTS. Reports and stills: `D:\scratch 2026\redesign\ring8\`
  (`report-debug.md`, `report-refute.md`, `out3\` mid-turn, `out4\` at rest and fallback).
  - **Deviation from plan part D, measured necessity:** no shared `preserve-3d` prism. Each wall
    carries `perspective(r) translateZ(r) rotateY((i-R)*72deg) translateZ(-r)` itself. The shared prism
    made Chrome drop a strip of the facing wall mid-turn at 1180x820. Do not go back to the prism.
  - **Probe that sees a hole:** paint `.hall-view` magenta and count magenta over the stage. A
    palette test alone misses it. Wall bounding rects are useless mid-turn; judge by pixels.
  - **Faults carried into step 4:** (1) 820x1180, the mascot's bubble shows a horizontal scrollbar;
    (2) 820x1180 fallback is one column, the plan asks 2x2 (the repair moved the breakpoint to 900px
    because the plaque overflowed; fix the plaque, restore 2x2); (3) mid-turn her bubble crosses a box
    corner and 1-2 stray background pixels show, passing moment only.
  - Not tested: light theme, forced no-3D, slow load, touch.
- **NEXT:** the owner tries the turn in the trial copy and says yes or no. Only then step 4 (gate,
  statue text, carved plaque; fresh Sonnet builder; its brief carries faults 1-2). Two builder tries
  on one job, then a different role, never a third.
- **2026-10-13 paintings (cap 8 a day):** `wall-statue-dark` first, with `EXTRA_REF`; a looker
  describes it; the owner says yes or redo before the four other dark walls. Still owed:
  `room-neuropsych-light`.
- No merge to `main`, no Pages upload, the live `Herophilus` folder untouched.

## 2026-10-12 NIGHT - plan step 4 built and saved; paintings are next

- Owner tried the ring turn and said yes ("turn feels right"). Step 3 is closed.
- Step 4a, the gate: commit 6dd14c15. Plays once by itself (about 2.4 s), any input hurries it,
  scroll is never locked, skipped on return. Independent check PASS.
- Step 4b, statue text + carved lettering + four leftovers: commit f0d8e5f4. Independent check
  PASS WITH FAULTS. Reports: D:/scratch 2026/redesign/carve10/report-carve.md and report-refute.md.
- Both pushed to the private remote. No merge, no upload, live app untouched.

Faults carried into step 5 (the builder who wires the plates fixes them in the same pass):
- reduced motion, 820x1180, dark: ring figure on a plaque is 6px, its percent sign 4.5px at 3.55:1.
  Raise the floors.
- focus ring contrast lowest on pediatrics dark, 3.36:1.
- plain stacked layout at 820 wide: the left strip touches the first subject tile; tile text small.
- a looker read the lettering as flat, not cut, and saw no distinct button on subject walls (the
  whole plaque is the button). Judge again on real plates before changing anything.
- the max-aspect-ratio 5/4 media count is 4 in this copy, not 3; the fourth is warm.css line 75
  and predates step 4. Check it is meant before the final script checks.

Not tested yet: real touch screen (left strip tap, gate), slow load, mid-gate resize, light-look
focus ring at 1440 and 1180.

NEXT (2026-10-13, plan step 5): paint wall-statue-dark FIRST with the EXTRA_REF command in
paint/prompts-walls.md; a looker describes it (text? figure only on the statue? panel blank and
flat? percent boxes hit?); show the owner, yes or redo, BEFORE the four other dark walls. Cap 8
paintings a day. Then wire the dark plates, owner tries. Light plates on day 2. Owed plate from
before: room-neuropsych-light.

Open questions for the owner, one at a time: mascot bubble over row ends; bubble colour; notes
sheet size on an upright iPad.

## 2026-10-13 - STATUE HALL REJECTED. FROM-ZERO PLAN APPROVED: CITY OF ALEXANDRIA

The owner tried the statue hall (steps 1-4, `4a445170`) and rejected it on all four counts: still
the old app underneath, not alive enough, wrong world, looks cheap. Every "NEXT" above this
section is STALE, including the wall paintings (`wall-statue-dark` and the rest): do not paint them.

New plan, approved the same day after a nine-question interview and a two-round Codex debate:
**`progress/redesign/PLAN-city-2026-10-13.md`**. Read it whole before any work. Rollback tag:
`pre-city-2026-10-13`.

Short form: home is a filmed dive over a painted Alexandria (three offline Blender shots joined
in cloud, frames drawn on one canvas, scroll picks the frame); the city is the menu (lighthouse =
ophtho, theatre = ENT, temple = neuropsych, garden = pediatrics); each building opens one room
with four objects to pick; question and reading screens are quiet with the room dim behind.
Night in the dark theme, dawn in the light theme.

Unchanged: trial copy only, live folder never touched, no merge to `main`, no Pages upload
without the owner's yes; data, question logic, grading and storage untouched; mascot artwork
untouched.

### NEXT

Plan "Order of work", slice 1: the kill test. One painted plate, one projected solid, twelve
frames across the largest camera move, forward and back at 1440x900 and the upright crop, shown
to the owner as a clip. If it reads as sliding cardboard, stop and fall back to landing-only.

## 2026-10-13 (late) - slice 1 kill test BUILT, waiting on the owner's eye

- Plates, prompts, paint script: commit 6e290435. Blender script: commit 7fcd53a9
  (tools/city-film/kill_test.py, re-runs in about 40 s; output in "D:/scratch 2026/city-kill").
- Numbers: edge leak 0 in 24 frames; tower shift vs far shore 18.8% landscape, 41.6% upright;
  0.80 / 0.71 source px per output px. Version B (water plane) not built.
- Looker on stills: landscape holds as a solid; upright shows a light strip beside the top tier,
  crops the top in the last frame and loses the city; stonework reads regular and CG-like.
- Clips sent to the owner (kill-land-12fps.mp4, kill-up-12fps.mp4). NO VERDICT YET.

### NEXT
Owner's answer on the motion. Real camera -> slice 2 (city plate + framing, upright gets its own
plate). Sliding cardboard -> stop, fall back to landing-only and say so.

## 2026-10-13 (night) - kill test ROUND TWO built, waiting on the owner's eye

- Owner on round one: "doesn't feel yet" = still flat + nothing alive + looks cheap (move size fine).
- Round two, commit b65f7eb1: tools/city-film/kill_test2.py (water plane + shore card + sky card,
  three mist planes, fire flicker, water shimmer, edge fill, 72 eased frames 1440x900, landscape
  only), tower from kill-pharos-dark-v2.png. Output "D:/scratch 2026/city-kill/round2".
- Numbers: leak 0 in 72 frames; tower vs city 17.6%, city vs sky 4.1%. Flaw: breakwater, ships,
  pier flat on the water. Looker: better than round one, tower courses still a little regular.
- Clip sent (kill2-land-small.mp4). NO VERDICT YET. Paintings used today: 3 of 8.

### NEXT
Owner's answer. Yes -> slice 2. No -> this method is finished (owner was told round two is the
last try): stop, bring a different way to make the dive, do not build a round three.
