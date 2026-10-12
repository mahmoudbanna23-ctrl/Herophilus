# Statue hall, turning walls, ruined gate, pop-out strip (redesign trial)

(The painted-room plan that stood here is built: commit `baa2e30e`. Its leftovers are step 0 below.)

## In plain words (for the owner)

- **Left strip.** Bringing the pointer near it no longer opens the whole bar. Each round button
  opens only itself: its name grows out of the button with a small pop. On a touch screen the
  menu button still opens the full list.
- **Gate.** The doors open by themselves when you arrive, like old stone: they strain and
  shudder, grit falls from the top, they stall, dust puffs at the floor, one door drags behind
  the other. About two and a half seconds. Any scroll, tap or key hurries it. It plays each time
  the app is opened fresh; coming back from a subject skips it. No sound.
- **Statue first.** The first thing inside is a full marble statue of Herophilus in a niche, with
  his name, dates and the two lines about him carved in the stone under it, museum style. The old
  card lower on the page goes away.
- **Turning walls.** You stand in the middle of a round hall. Each scroll turns the room one wall:
  ear, eye, mind, children. One subject per wall, its object in a niche, its name and your
  progress carved in the stone beneath. Clicking the niche pushes in, as now. Coming back from a
  subject lands you on the wall you left.
- **Paintings.** Five new wall paintings per look (dark, light). You see the statue painting first
  and say yes or redo before the other walls are painted. Painting starts 2026-10-13 (today's
  eight are used). While they are painted, the turning is built with plain stand-in walls so you
  can try the motion early.
- **One cost, said plainly.** The rest of the home page (continue, today's timetable, numbers)
  now sits after five walls instead of one hall. The left strip still reaches everything
  directly. Judge it when you test; a shortcut can be added if it annoys.
- Trial copy only. Nothing merged, nothing uploaded, the live app is not touched.

## Context

Owner, 2026-10-12, after testing the trial himself: "The left bar shows completely when I get the
pointer neat it , make each item appears indivindually with it's pop up animation. the card that
exlpains who is herophilus still feeling out of place and I think it should be the 1st thing
appears when the library gates open, what If we designed a herophilus full statue that appears 1st
thing with his identity infotmation carved below the statue like if it's a museum, then with the
scroll the library walls rotates showing the moduels, also make the module cards like it's carved
beneath it , + the 1st ever animation with the gates and the all that stuff needs to feel a bit
more ancient like it's ruins, the doors struggles to open with dust and all these effects".
Asked how the walls turn, he picked **Turn on the spot** (one wall fills the screen, the next
swings in from the side).

Binding limits (unchanged): never edit `D:\claude os\Medical school\Herophilus`; no merge into
main, no upload without his yes; look-only (never `app/data/`, `wardround.*` keys, question
logic); base files (`index.html`, `render.js`, `gate.js`, base CSS) not edited; no new storage
key; main chat plans, briefs, judges; helpers build, model set on every spawn (Sonnet builders,
Haiku lookers, never Opus), builder prompts open `ROUTE-OK:`; one Codex job and one Chrome job at
a time; no image read in main chat; `git -C … commit -F <msg> -- <paths>`, never `--force`. The
mascot image is not redrawn or drawn onto. Animate transform, opacity, clip-path only (one
declared exception below). `.hall-below` never gets a transform or `overflow:hidden`
(`hall.css:71-72`).

**Files edited:** `app/js/hall.js`, `app/css/hall.css`, `app/css/warm.css`. **New:**
`app/assets/hall/wall-<statue|ent|ophtho|neuropsych|pediatrics>-<dark|light>.jpg`,
`progress/redesign/paint/prompts-walls.md`. Nothing else.

## A. Left strip — each item pops out alone (`warm.css` only)

Why it opens whole today: `.rail:hover` (`warm.css:457`) and `.rail:has(:focus-visible)` (`:465`)
widen the entire rail when any chip is touched by the pointer or focus.

- Delete those two widen rules (`:456-471`), the `:not(:hover):not(:has(:focus-visible))` suffix
  on the thin-state blocks (`:473-537`), and the `@supports not` duplicate (`:538-~660`). One
  `:root .rail:not(.open)` block then serves every pointer. Net deletion, about 100 lines.
- The thin rail's box becomes `--rail-open` wide, still transparent, `pointer-events:none`
  (items stay `auto`), scrollbar hidden — so a widened item is not clipped at 52px. `#nav` keeps
  its 52px box (`:406`): mascot placement (`clepsydra.js` reads it) is untouched.
- `.nav-item:is(:hover,:focus-visible)` (and `.railprof`, `.streak`, `.railsync`): the pill grows
  out of its chip to the right — opaque `--rail-2` fill, 18px radius, icon does not move, label
  appears (the label is a bare text node: `color:transparent` thin → inherited colour, wiped in by
  the growth), `.cnt` / `.badge-due` restored inside the pill, `animation:pop`
  (`components.css:134`, reuse) with `transform-origin:left center`.
  Mechanism: builder tries `clip-path: inset(…)` on a full-width button first (clipped area takes
  no pointer events, no layout); falls back to animating `width` on that one 36px element — the
  one declared exception, same as the existing `width .18s` at `:402`.
- `.nav-label` headings stay thin dividers. `.rail.open` (touch menu button, `:450`) unchanged.
  Hovered/focused rail gets z 160 so a pill clears the mascot (150). Reduced motion: `base.css:17`
  already removes the pop; the label still shows.

## B. Ruined gate — self-playing, skippable (`hall.js`, `hall.css`)

- Take the door step out of the scrubbed timeline (`hall.js:502`). `DR.a` → `DR.l`, `DR.r` (one
  per leaf); `apply()` (`:473-480`) reads them; shade follows their average.
- New paused `gate` timeline, ~2.4 s. Starts on first `wheel` / `touchstart` / `keydown` /
  `pointerdown`, else by itself 0.8 s after the walk is ready. Input during it → `timeScale(5)`.
  Scroll is never locked: `apply()` uses walk-in progress 0 until the gate is done, then the scrub
  catches up.
- Beats: (1) strain 0–.5 s — leaves rock ±1.5° twice, outside plate and doors jitter 1–2 px,
  8–10 grit specks fall from the lintel; (2) stall .5–.8 s — leaves slip back shut, first dust
  puff at the threshold; (3) .8–1.6 s — left leaf drags to 30 % while the right stays shut, second
  puff; (4) 1.6–2.4 s — both swing, right leaf 0.25 s late.
- Grit and puffs: `<i>` elements in a new `.wk-fx` sibling of `.wk-dbox` (the door box has an arch
  clip that would cut them), sized by 2 extra lines in `fitDoors` (`:145`); same pattern as
  `.hall-dust i` (`hall.css:160-174`); radial gradients, transform + opacity, no blur.
- Coexistence: `returned` or page already scrolled (`:544`) → doors set open, gate skipped;
  `dropDoors` (`:138`) and reduced motion build no doors → gate counts as done; `walk.kill`
  (`:551`) kills the gate too. Still one in-memory flag, no storage.
- Ruin look, phase 1: existing door and outside paintings plus a static CSS grit/crack overlay.
  Phase 2 (only if he says it still looks too new): repaint outside + doors weathered — 3 more
  pictures per look.

## C. Statue wall first

- In `buildHall` (`hall.js:233-235`), before moving home content into `.hall-below`: take
  `.hp-kicker`, `.hp-name`, `.hp-sub` from the `.hero-panel` node (`render.js:229-238` makes it;
  not edited), clone into `.wall-card` on wall 0, remove the old panel. Text is reused, not
  retyped.
- `.wall-card` sits on the painted blank plinth by one percent box. Carved look is real text:
  dark = gilt `--gold` on dark stone with a 1px dark lip; light = dark incised ink with a 1px pale
  lower highlight; a faint `::before` tone under it as contrast insurance. Target ≥4.5:1 measured
  from the real plate pixels, both looks.
- "Welcome, X" + h1 stay on the outside painting (`.wk-text`, `:305-308`), unchanged.

## D. Turn on the spot — five walls on a real 3D ring

- **Markup** (replaces `.hall-back` / `.hall-glow` / `.hall-alcoves` in `buildHall` `:285-302`):
  `.hall-stage > .hall-prism > .wall[data-i] > .wall-frame` (3:2 plate box) holding, for walls
  1–4, the same `button.alcove[data-i][data-id]` + carved `.plaque`; wall 0 holds `.wall-card`.
  All five plates share ONE layout, so one niche box + one panel box per look replace today's
  4×8 `--aN/--pN` variables (`hall.css:44-66`, `:128-136`, `:306-326`).
- **Geometry** (in `layout()` `:422`): face width `Wf = max(W, 1.5·H)`, apothem
  `r = Wf / (2·tan 36°)`. `perspective:r` on `.hall-stage` (inside `.wk-clip`, whose clip-path
  would flatten 3D). `.hall-prism`: `preserve-3d`, `translateZ(r) rotateY(-R·72deg)`. Wall i:
  `rotateY(i·72deg) translateZ(-r)`. `R` (0..4) is a new scrubbed value replacing the pull-back
  `q`; `apply()` writes one transform string.
- **Far walls:** only the current wall and its neighbours are placed on the ring; walls further
  than one step are parked flat off-screen (not `visibility:hidden`) so their buttons stay
  focusable and nothing crosses the eye plane.
- **Edges:** faces are 1.3× plate height, extended by a flat stone gradient (covers the shrink at
  the corners mid-turn); joins hidden by a CSS stone strip on each face edge. No painted pillars.
- **Plates:** landscape 1536x1024 only; essentials in the central 44 % so an upright iPad's
  centre crop keeps them. The tall-plate path goes: `hall.css:303-352`, the `-tall` decode
  (`hall.js:111`), the four `hall-*-tall.jpg` files.
- **Carved subject card:** `.plaque` skin changes from a card to carved text + ring on the painted
  blank panel (`hall.css:191-223`, `warm.css:250-265`); same carved-text rules as C. Locked
  subject = dimmed wall with "Coming soon" carved.
- **Scroll:** timeline = walk-in 2 units, then four turns (.6 turn + .3 hold each) ≈ 5.6 screen
  heights (today 3.6). Labels `w0..w4`; pin `snap` = free during the walk-in, nearest wall after.
  `focusin` on a subject button scrolls to its wall. Plaque rise + ring draw play as each wall
  arrives.
- **Removed, which also clears known faults:** pull-back `q` / `pb` (`:446-450`, `:484`) and
  `.hall-view::before` (`hall.css:258-265`) → the 1180x820 blurred band cannot occur;
  `parallax()` (`:588-606`) and `--mx/--my` → the fallback-path parallax fault goes. Also fixed in
  passing: the 450 ms push timer cancelled in `killWalk`; `returned` consumed on every path.
- **Kept:** `choose()` / `setOrigin` (rect-based, work on the current wall); one new module-scope
  variable remembers the wall left, and `startWalk` jumps to that label on return (`:545`).
  Hand-over to `.hall-below` and the slower-hall drift (`:525-530`) start after wall 4. Mascot
  `.hall-greet` and the ambient motes stay.
- **Fallback** (reduced motion, or libraries failed): plain stack — statue block with its carved
  text, then the four subject walls as a 2×2 grid (4 across when wide), each a real button with
  the same percent boxes. No doors, no pin.

Rough size: about 300 lines removed, 290 added across the three files.

## Paintings (10, 1536x1024, no text in any)

Shared layout, written once in `prompts-walls.md` (`common-wall`, `common-wall-light`): straight-on
view of one flat wall of a round stone library; arched niche in the centre (x 36–64 %, y 8–62 %);
below it a **blank, flat, evenly toned** carved stone panel (x 32–68 %, y 66–88 %) for the carved
text; floor strip at the bottom free. Left and right of the centre: scroll shelves and hanging
lamps — real detail (owner's bar: rich, not empty), but nothing essential, since it crops away on
an upright iPad. Same world, night-blue palette and lamp light as the approved hall; style
reference `app/assets/hall/hall-dark.jpg` via `ROOM_REF`. Rules: no text or numerals, no frame,
no vignette, no people — **except** the statue plate, where the owner asked for the figure.

| Plate | Niche holds |
|---|---|
| `wall-statue` | full-length white marble statue of Herophilus, robed, calm; likeness from `app/assets/herophilus-bust.jpg` as a second reference |
| `wall-ent` | bronze ear trumpet and speculum |
| `wall-ophtho` | crystal reading sphere |
| `wall-neuropsych` | marble brain model |
| `wall-pediatrics` | wooden toy horse and terracotta cup |

Light plates = repaints of the approved dark ones (same wall, morning light), as with the rooms.
Scripts: `paint-room.sh` / `paint-room-light.sh` reused with the prompt file and common-section
name made overridable (2 lines each), not copied. PNG → JPG < 399 KB with the existing
`tojpg.py`. A Haiku looker describes each plate (text? figure only on the statue? panel blank and
flat? layout boxes hit?). First statue plate: overlay the two percent boxes and check they land
before painting the other walls.

Day 1 (2026-10-13): statue dark → **owner yes/redo** → four dark walls; plus the owed
`room-neuropsych-light` (6–7 of 8). Day 2: five light walls.

## Order of work

0. Close the room work: commit the 48 `r7-*` stills and two mp4 clips (not the 24 stale stills,
   not the GIFs), update `progress/redesign/RESUME-redesign.md`, push.
1. **Strip** (Sonnet builder, small): part A, stills + hover/focus/touch checks. Commit.
2. **Prompt writer** (Sonnet): `prompts-walls.md` + the two script overrides. Main chat judges
   the text. (Parallel with 1; different files.)
3. **Ring spike** (Sonnet builder, ≤60 calls): part D geometry and markup against CSS stand-in
   walls (gradient + outlined niche/panel boxes), fallback stack, return-to-wall, snap. Stills at
   wall 0–4 and mid-turn (R = 0.5) at 1440x900, 1180x820, 820x1180. **Judge the turn here before
   anything else is built on it.**
4. **Gate + statue text + carving** (fresh Sonnet builder): parts B and C, carved plaque skin.
5. Paintings day 1 → owner sees the statue → wire dark plates → owner tries it himself.
6. Paintings day 2 → wire light plates → contrast from pixels.
7. Script checks, then one outside check (Codex, read-only) against this plan; short Sonnet fix
   job if needed. Two failed dispatches on any job → a different Claude role, never a third try.
8. Commit, push. No upload.

## Verification

- Boot from `file://`: 0 console errors, 4 subjects reachable, home content below the hall intact.
- Strip: hover and Tab each item — only that item opens; whole rail never widens on a pointer
  device; touch menu button still opens the full list; mascot position unchanged; light look.
- Gate: fresh load plays once; scroll during it hurries it and loses no scroll; return from a
  subject skips it; library failure and reduced motion show the plain stack with no doors.
- Walls: stills at all five stops + mid-turn, both looks, three sizes; no band, no seam gap, no
  text off its panel; carved text ≥4.5:1 from pixels.
- Keyboard: Tab order = four subject buttons in order, focus turns the room to that wall, Enter
  opens without the push-in. Return from a subject lands on the same wall.
- Frame times sampled during a scripted turn at 1440x900 and 820x1180 (no long frames); if bad,
  park walls ≥2 steps away earlier.
- `hall.css` / `warm.css` live-rule count via `document.styleSheets` (recursive); the three
  `max-aspect-ratio:5/4` blocks still count three; print emulation unchanged.

## Risks, ranked

1. Paintings drift from the shared layout → carved text misses its panel. Test: box overlay on the
   first statue plate before painting more.
2. Mid-turn distortion or edge gaps. Test: the R = 0.5 stills in step 3.
3. iPad smoothness with five large layers. Test: frame-time sample; real iPad test needs a
   private test address = an upload = needs his yes.
4. Gate vs pinned scroll (double play, lost scroll). Test: reload, scroll mid-gate, leave and
   return.
5. Snap fighting trackpad flicks. Test: scripted wheel bursts; loosen or drop snap.
6. Strip selector surgery breaking the touch drawer or light look. Test: step 1 checks.
7. Longer road to "Continue / today" (5.6 screens). Owner judges on test; cheap shortcut held in
   reserve, not built.
