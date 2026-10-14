# Slice 4b — the city as welcome + dashboard (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~60 tool calls, stopped by 80, even with work left. Partial work reported honestly
  is a success. Write status to `progress/redesign/build/city-dash-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign`. NEVER write in
  `D:\claude os\Medical school\Herophilus` (live copy). No git — main chat commits.
- Scratch, harness, screenshots: `D:\scratch 2026\city-dash\` (no `--` in any path).
- Look at a few of your own screenshots only to check your output.
- Another builder may be editing `app/js/city.js` film code later; keep your city.js edits to
  the label/plaque and below-block parts, and keep the film/cover section untouched.

## Why
Owner direction: the first thing after the mist is the city as a Herophilus welcome AND a
dashboard, "all themed, nothing listed". Today `vHome` puts a plain block under the city stage
(`.city-below`, render.js ~291). Every item there moves INTO the picture, then the block goes.

## Read first (narrow)
1. `render.js` `vHome` (from line 174 to ~300) — the below-block items and the helpers.
2. `app/js/city.js` lines 1-100 (spot table 42-47, labels 83-85, stage 87-93) and 390-405
   (stray-element mover into the below block).
3. `app/css/city.css` — label/spot rules and the reduced-motion / calm-view blocks.
4. `progress/redesign/PLAN-city-2026-10-13.md` lines 51-66 (hard limits).
5. Harness pattern: `D:\scratch 2026\city-join\join.js` (CDP, setDeviceMetricsOverride).
6. Find where the Clepsydra 2D figure is placed on the city (grep `clep` / `mascot` in
   render.js, city.js, css). Do NOT edit her artwork; you only place text BESIDE her.

## Mapping (decided — build exactly this)
| Below-block item now (render.js) | Its world home |
|---|---|
| Term name (188) | small carved name on the sky, top left of the stage |
| Title + question count (189-193) | her line / the welcome |
| Answered n/total per subject; accuracy (196-202, label city.js:83-85) | each building's NAME PLAQUE: a row of 5 small lamps lit in step with done/total (0 lit at 0, all 5 only at 100%; round down, but 1 lit as soon as done>0); the existing `acc% · done/total` stays as small carved text; exact % in the plaque's aria-label |
| Due for review (`dueNow()` utils.js:76) | a DOOR FIRE drawn by each building's plaque: lit when that subject has due cards, cold when none; the count carved small on the plaque. If dueNow has no per-subject split, filter its result by the subject's questions (`qsInModule`, storage.js:286). Never edit utils.js/storage.js. |
| Flagged | nothing — the left rail already shows it |
| Continue / Restart (207-213, `startChapter`) | her line (see priority) |
| On today (215-223, `buildSchedule()`) | her line (see priority) |
| Hero bust + bio (229-238) | gone; replaced by the welcome story; her line carries a small "about Herophilus" link that replays the story |

Her line = ONE line of page text in a carved speech plate beside her figure. Priority: reviews
due ("N cards wait in the <building>." → opens that review) → today's schedule item → continue
where you stopped (→ `startChapter(id)`) → nothing started ("Choose a building to begin.").
Building words: ophtho = lighthouse, ent = theatre, neuropsych = temple, pediatrics = garden.

All numbers come from the SAME functions vHome uses today; nothing recomputed differently.
Then remove `.city-below` and the stray-element mover (or keep the mover harmless if anything
else relies on it — check and say).

## The welcome (first visit only: done==0, no new storage key)
Plays once the city has settled (after the landing film ends or is skipped; immediately when the
city shows the still). In her speech plate, one line at a time; Next (and a click on the plate)
advances, Skip ends; Escape = Skip. Lines 5-8 make that building's plaque glow (opacity of a
gold rim, no movement). Use these 9 lines VERBATIM (owner-approved):
1. "Alexandria, about 300 BC. A doctor named Herophilus was the first to look inside the human body."
2. "He traced the nerves to the brain, named the duodenum, and studied the eye."
3. "He timed the pulse with a water clock. That clock was me."
4. "Now his city is yours to study."
5. "The lighthouse keeps the eyes."
6. "The theatre keeps the ear, nose and throat."
7. "The temple keeps the mind."
8. "The garden keeps the children."
9. "Lamps light up as you learn. A fire at a door means cards are waiting for you."
After line 9 (or Skip), her line shows the normal dashboard line. done>=1: no welcome; "about
Herophilus" replays it on request. In-memory only — reloading at done==0 plays it again; that
is accepted.

## Look
Plaques, lamps, fires, speech plate: carved stone / bronze on the painted city — gold hairlines,
square corners, no pills, no rings, no emoji, no hover lift, no idle pulse. Lamps and fires are
small CSS or inline SVG shapes. Fires may flicker (opacity/transform only) ONLY on the resting
city; stop under `prefers-reduced-motion` and on calm views. AA contrast measured on every text,
against the darker side of what is behind it.

## Hard limits
Never touch `app/data/*`, `js/storage.js`, `utils.js`, `theme.js`, `icons.js`, `js/lib/*`,
`css/print.css`, mascot artwork. No new storage key. Vanilla, `file://`, no CDN. Animate
transform, opacity, clip-path only. Light theme must not break (tokens only). Upright/phone:
plaques and her line must still fit (screenshot proves it).

## Checks before calling it done
1. `node tools/boot-check/boot-check.js` from the trial copy root — 0 console errors.
2. Harness `D:\scratch 2026\city-dash\dash.js`, three seeded profiles: new (0 answered), part
   done, part done WITH due reviews. For each: lamps lit per building, fire state, carved
   numbers and her line match what the OLD vHome would have shown (compute the old values in the
   harness from the same functions and compare). Welcome plays only for the new profile; Next
   steps all 9 lines; Skip ends it; the "about Herophilus" link replays it.
3. Every function the old below-block offered is still reachable (continue, today, review).
4. Screenshots 1440x900, 1180x820, 820x1180, 390x844, dark + one light, for the part-done
   profile, plus one mid-welcome. `D:\scratch 2026\city-dash\`.
5. Confirm new CSS rules are live (enumerate `document.styleSheets`).

## Report back (short)
Files changed, test pass/fail, screenshot paths, contrast numbers, anything skipped or broken.
