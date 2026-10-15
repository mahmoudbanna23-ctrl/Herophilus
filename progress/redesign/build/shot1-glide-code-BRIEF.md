# Shot 1 camera glide in the page, before shot 2 (builder brief)

ROUTE-OK: gateway down.

## §0 Marching orders
- Hand back at ~50 tool calls, stopped by 70. Write status to
  `progress/redesign/build/shot1-glide-code-STATUS.md` AS YOU GO.
- Work ONLY in `D:\claude os\Medical school\Herophilus-redesign` (branch
  `redesign/factory-2026-10`). NEVER write in the live `D:\claude os\Medical school\Herophilus`.
  No git — main chat commits.
- Hard limits: never touch `app/data/*`, `js/storage.js`, `utils.js`, `theme.js`, `icons.js`,
  `js/lib/*`, `css/print.css`, any mascot artwork. No new storage key. Vanilla JS, works from
  `file://`, no CDN. CSS animates transform, opacity, clip-path only. No pills, emoji, hover lift,
  idle pulse.
- Never let a network/asset load strand the intro: if shot 1 images are not loaded within ~4 s
  (or fail), skip shot 1 and run today's intro unchanged.
- Do not open images. Screenshots are written for a looker.

## Owner decisions (2026-10-15)
Shot 1 is no film. It is the painted plate with a slow camera glide in the page, one painted cloud
layer rising over it, then the app's existing painted cloud cover (`.city-cover`) rises, hides the
cut, and shot 2 plays as today. The middle cloud layer is dropped.

## Assets (copy, never move)
- `progress/redesign/paint/shot1-web/shot1-base.jpg` -> `app/assets/city/shot1-base.jpg`
- `progress/redesign/paint/shot1-web/shot1-near.webp` -> `app/assets/city/shot1-near.webp`

## Read first
- `app/js/city.js` whole intro chain: how shot 2 (`shot2-dark.mp4`, LEAD) starts, `makeCover()`
  (~line 343, RISE_MS), the hard swap under the opaque cover, the landing, when the intro runs at
  all (first visit? every visit? skip control?), reduced-motion handling, and how the video is
  fitted to the frame (match that fit for the layers at every aspect, portrait included).
- `app/css/` rules for the city intro (grep `city-cover`, `city-film` or similar).
- `D:\scratch 2026\city-join\join.js` — the existing harness.

## The job
1. Shot 1 stage before shot 2, same gating as shot 2 (runs only when shot 2's intro runs):
   - base layer: slow push-in, about 5 s total, e.g. scale 1.00 -> 1.08 with a small downward
     tilt (translateY), ease-in-out;
   - near cloud layer: rises from translateY(55%) to 0 and scales to ~1.15 about the bottom
     centre, faster in the last third so it reads as diving into cloud;
   - then the existing cover rises over shot 1, shot 2 is swapped in underneath, the cover clears,
     shot 2 plays and the rest of the chain runs as today.
   Generalise the cover chain to an ordered list of stages (shot 1 still-glide, shot 2 film, city)
   rather than copy-pasting it; keep it small.
2. Reduced motion: skip shot 1 entirely (same path as today's reduced-motion intro).
3. Any existing skip control skips shot 1 too.
4. Fix the stale comment at `city.js:15` to describe the new chain.
5. Extend `D:\scratch 2026\city-join\join.js` to cover the three stages: screenshots at
   1440x900, 1180x820, 820x1180, 390x844 for shot 1 start / mid / end and the first frame after
   the cover clears onto shot 2, into `D:\scratch 2026\city-join\shot1\`. Also a check that the
   intro still ends on the city with 0 console errors, and one with the shot 1 images blocked
   (falls back to today's intro).
6. `node tools/boot-check/boot-check.js` — 0 errors. Headless Chrome only under a path without
   `--`.

## Report back (short)
Files changed (lines), harness results per size, boot-check result, screenshot folder, anything
skipped.
