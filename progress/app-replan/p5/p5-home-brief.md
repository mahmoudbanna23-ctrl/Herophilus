# P5 brief — home build to Home A (2026-09-25)

Seat: Codex `gpt-5.6-terra` (team sheet, `j9-team-talk/minutes.md:56`). Reviewer after you: a Claude
Opus refuter. Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 5 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): you may edit or create the files
listed under "May change" and write `progress/app-replan/p5/p5-report.md`. Everything else is read-only.

## Read first
1. `progress/app-replan/mocks/NOTES.md` — "Owner picks": Home A, painted desk, final plate
   `plates/painted-codex-3.png`. Rounds 2-6 record the candle/wick and mobile-band fixes already solved
   in the mock — reuse those answers.
2. `progress/app-replan/mocks/home-a.html`, `mocks.css`, `fixes.css`, `mocks.js` — the picked layout.
   The mock is a layout spec, not copy: eyebrow labels ("Home A", "Desk plate: painted"), sample
   numbers and any "mock"/"sample" text are furniture — never ship them.
3. `progress/PLAN-app-master-2026-09.md` §2 (rulings, R8, R10, R11), §4 (Clepsydra spec — read only to
   know what is NOT yours), §5 P5, §6 rows D1, D3, E7.
4. The live home view: find its render function and styles in `app/js/*.js`, `app/css/*.css`
   (grep, do not sweep).

## Goal — close the gap between the live home and Home A, nothing else
Step 1 — write the GAP LIST first, into `p5-report.md`: every place the live home differs from
`home-a.html` (order, grouping, hierarchy, what leads, what is missing, what is extra). Say which live
home elements Home A has no place for and what you did with each (moved, kept below, left) — never
silently delete a feature.
Step 2 — build only the gaps:
1. **Desk band.** The painted plate across the top of home, as in the mock. Ship it as a compressed
   JPEG at `app/assets/desk/painted.jpg`, ≤ 250 KB, made from `mocks/plates/painted-codex-3.png`
   (PowerShell `System.Drawing` works here; no ImageMagick). Never edit the source PNG. Keep the
   plate's aspect; crop by `object-position`, not by distorting. Mobile band height and alignment as
   the mock's `fixes.css` rounds settled them. A plain tonal fallback shows if the image fails.
2. **Candle.** DOM/CSS flame over the plate's unlit wick (plan §6 D1; `mocks.js` + `fixes.css` Round 2-3
   method). Measure the wick in `painted-codex-3.png` yourself — Round 2's `(1350,370)` was for the
   older `painted.jpg`; write the new coordinate in the report. Its control is a real `<button>` with
   `aria-pressed`; pressing it stops the flame and every other home motion for the rest of the visit
   (in memory only — no new storage key). `prefers-reduced-motion`: flame never animates. Hidden at
   ≤ 600 px as in the mock. No pulsing idle glow: the flame flickers, nothing around it breathes.
3. **Subject list.** Compact list under the band, one row per module, **last-used subject first**, the
   rest in their current order. Derive "last used" from data the app already stores (find it: session
   history, last chapter, attempts); add nothing to storage unless nothing usable exists — then STOP
   and say so in the report instead of adding a key. Each row keeps what the current module card
   links to and shows (counts, progress) — layout changes, destinations do not.
4. Scene (plate + candle) on HOME ONLY in this phase. The subject page is a later brief; do not touch
   it. Browse views stay "alive", reading views calm (project `CLAUDE.md` §6) — the candle pauses with
   the rest when the home is not on screen.

## Files
May change: `app/css/views.css`, `app/css/components.css`, `app/css/layout.css`, new
`app/css/desk.css` (link it from `app/index.html`), `app/js/render.js` (home markup only), new
`app/js/desk.js` (candle only; classic script, not a module; link from `app/index.html` after the
data scripts), `app/index.html` (those two link tags only), new `app/assets/desk/painted.jpg`.
Must not change: `app/data/*`, `wardround.*` keys or stored shapes, `tokens.css` (existing tokens
only), `print.css` and the print block selector `:root, :root[data-theme="light"],
:root[data-theme="dark"]`, stacking 150/200/250/300/400, `app/assets/clep/*`, the Clepsydra widget
and her placement (P6), the gate, the P4a buttons/chips/neon edges, P4b question/results screens,
`app/assets/mod-*.jpg` (do not delete even if home stops using them — say so in the report).
No water-level vessel (that is P6). No Clepsydra in the band (P6).

## Rulings that bind (plan §2)
No spinning icons · no pulsing idle glow · no hover lift (quiet colour change instead) · no pills ·
no emoji · no gradients in the interface (the plate itself is exempt; a scrim over it for text
contrast must be a flat translucent colour, not a gradient) · no `backdrop-filter` on cards, rows or
options · no side-tab thick left borders · easing `--ease-standard` only · neon edges are the default
edge treatment · visible focus ring and 44 px targets · `prefers-reduced-motion` stops every loop,
JS timers included · vanilla, classic scripts, works from `file://` · text on the plate measured AA
against its brightest region (E7).

## Verify before reporting — run each, paste the result
1. `node --check` on every js touched.
2. `node tools\boot-check\boot-check.js` — 0 console errors, 6956 / 153 / 4 / 156. If headless Chrome
   cannot start in your sandbox, say so plainly; the orchestrator runs it.
3. Feature survival: list every home control/link that existed at `pre-p5-2026-09-25` (grep the render
   function) and show where each renders now (file:line).
4. Last-used: name the stored field you read, file:line, and what happens for a brand-new profile
   with no history (current order, no crash).
5. `painted.jpg` byte size and pixel size; wick coordinate measured and how.
6. Keyboard (R11): tab order on home = band controls (candle) then subject rows in visual order —
   describe how you checked.
7. grep counts pasted, new/changed lines only: emoji 0; `:hover` with `transform` 0; `gradient` 0;
   `ease-spring` 0; `backdrop-filter` 0; `border-left:` ≥ 3px 0.
8. `git diff --stat` + `git status --short app/` touch only the files above.
Screenshots, the Chrome performance trace (D3: static plate vs plate+candle, same page, same run
length) and the Brave check: do NOT attempt; the orchestrator runs them outside the sandbox at
1280×800, 820×1180, 1180×820, 390×844.

## Do not
Commit, push, `git add`, or tag (the orchestrator made `pre-p5-2026-09-25`). Touch, redraw or
reposition the Clepsydra. Build the subject page, vessel, audio or light-theme plate. Invent a
component not in the mock. Change where any link goes. Start a second Codex job.

## Output
`progress/app-replan/p5/p5-report.md`, ≤ 70 lines: gap list, files and selectors changed, check
results pasted, anything NOT verified named as such.
