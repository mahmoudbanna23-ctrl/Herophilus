# Refuter (Opus) — time-of-day grades, round 1 (2026-09-26)

FAIL, two defects:
1. `grades.html:20-22`, `:27`: the stage had a fixed 1916x821 size capped by `max-width:100%`, and the
   img had `height:100%`, so the plate squashed whenever the page was narrower than the plate: about 7x
   at 390 px, about 3% at 1916 px (because of the body margin). Fix: `max-width:1916px`, no fixed
   size, img `height:auto`.
2. `grades.check.js`: night `lamp` was untested; a `lamp:0.5` mutation passed. Fix: assert `lamp === 1`.

Clean: no gradients, no ES modules, no external URLs; window box derived from SCENE_MAP; fieldset
and legend; hash honoured; layers `pointer-events:none`. All four grades show the same room, the tint
stays inside the window, no seam; day hazy but readable. Screens: `D:\tmp-grades-ref\`.

Applied in main chat the same day: both fixes; check now `42 passed`. Round 2 below.

Round 2 PASS: 42 passed, all 7 mutations caught incl. night lamp; plate keeps 1916:821 at 390 and 1916, tint registered.
