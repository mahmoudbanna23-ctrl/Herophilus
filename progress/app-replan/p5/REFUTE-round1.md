# P5 Home A — refuter round 1 (Opus, 2026-09-25)

Recorded 2026-09-26 from the refuter's reply (plan mode blocked its write). Build superseded by the living-desk plan; patch kept in p5-build.patch for the Home A fallback.

FAIL

I did not write `progress\app-replan\p5\REFUTE-round1.md`. Plan mode was switched on partway through and it blocks all writes. The text below is what should go in that file.

**Failures**
1. `app/css/desk.css:4-6` — the headline and paragraph in the band are unreadable in light theme. Light `--tx` is `#241c14` and `--ink-2` is `#463726`, sitting on a near-black scrim (`rgba(7,13,22,.84)`), so contrast is about 1.2:1. It shows in the 1280 seeded, reduced, candle-off and 390 shots. Fix: set fixed light text colours on `.desk-copy` and its `h1`/`p` in both themes, then measure against the plate's brightest region (E7).
2. `app/css/desk.css:7-11` — the flame is not on the painted wick. The painted wick lands near page (928,214) in the 1280 shot. The CSS flame and the extra CSS wick draw about 21px right and 15-20px lower, on the lamp body. The offsets inside the button, and `rotate(45deg)` with `transform-origin:bottom`, move it off the anchor. Fix: use the mock's method (`fixes.css`), with the flame's bottom-centre at the wick via `translate(-50%,-100%)`. Also allow for the `object-fit:cover` crop when the band's aspect changes.
3. `app/js/desk.js:8` — the candle click clears `CLEP.idleT` and `CLEP.shiftT`. Only `clepShow()` restarts those loops (`clepsydra.js:158`). So after one click, the Clepsydra's idle chatter and pose drift stop on every view for the rest of the visit, not just on home. That is a P6 behaviour change. Clearing `settleT` on each home re-render can also leave her stuck in an event pose. Fix: remove that line; the CSS pause at `desk.css:18` already covers home.
4. `app/js/render.js:202-211` — the old module cards showed each subject's accuracy, its chapter count and its icon/colour. The new rows drop all three, and the gap list in `p5-report.md` never mentions it. The brief says rows keep what the card shows. Fix: add accuracy and chapter count to `.home-subject-detail`, or record the removal.
5. `app/css/desk.css:16` — the progress track uses `--fill`, which is `#2b2118` in light theme. At 0% every row shows a full-width dark bar that reads as complete (all shots). Fix: use a light track colour.
6. `app/css/desk.css:7,20` — the candle button is invisible (`color:transparent`), so there is no visible control like the mock's "Candle" button. At ≤600px the whole button is hidden, but the mock hides only the flame, so phone users cannot stop the motion. Fix: a visible labelled control that stays on mobile; hide only the flame.

**Nits**
- `render.js:195-197` — a profile with a resume point but 0 answers shows "Choose a subject to begin" next to a "Continue" button.
- `desk.css:1` — the comment "Home A" ships in `app/`. It is not visible text.

**Trace (check 5)**
The flame animates `transform` only (`desk.css:9,11`), with no JS per frame, so it is cheap. The drop from about 570 to 106 frames is a headless artefact of the orbs and film. The orbs use `filter:blur(90px)` plus animated `scale` (`views.css:142-151`), and headless Chrome renders in software. Stopping the candle also pauses the orbs and film (`desk.js:7`, `desk.css:18`), so the trace never measured plate vs plate+candle. D3 is still unanswered.

**Passed**
- `node --check` passes on `render.js` and `desk.js`.
- `painted.jpg` is 52,846 bytes, 1916×821. The wick at (1342,367) matches the plate.
- No diff to `tokens.css`, `print.css`, `app/data`, `app/assets/clep` or `app/assets/mod-*`.
- No gradient, `backdrop-filter`, ease-spring, hover transform or thick left border. Radius is 8px. No new storage key. A new profile keeps the current order. Locked modules are excluded.
- Only allowed P5 paths changed in `app/`.

**Not verified**
- `boot-check.js`: not run, because plan mode blocks its scratch copy and Chrome launch.
- JPEG banding at pixel level: no zoom crop possible; looks clean at shot scale.
- Tab order in a live browser.