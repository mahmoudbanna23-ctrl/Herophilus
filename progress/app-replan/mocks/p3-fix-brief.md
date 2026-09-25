# P3 brief, round 2: mock fixes (2026-09-25)

Seat: Codex `gpt-5.6-terra`, 900 s clock. Reviewer: Claude refuter. Round 1 brief `p3-mocks-brief.md`
still binds (write grant: only `progress\app-replan\mocks\`, `app\` and `app\data\` closed, no git,
no network, Clepsydra is a plain `<img>` never altered). Headless Chrome IS now allowed, one at a
time, `--user-data-dir` never under a path containing `--` (use `C:\Users\Alfa388\AppData\Local\Temp\hc-*`).

## Fixes (from the screenshot review)

1. `.progress` is on a `<span>`, so its 5px height is ignored and it renders as a tall gold block
   over "Resume"/"Open" (home-b, subject-a). Make it render as the thin bar it was meant to be.
2. Candle: the CSS flame sits over the "Candle" button, not on the plate's lamp wick. Pin it to the
   wick per plate (`data-plate="photo"` / `"painted"`), positioned in % of `.desk` with a fixed
   `object-position` on `.plate` so it stays on the wick at 1280 px and 390 px. Find each wick's
   position by measuring the plates (`plates/photo.jpg`, `plates/painted.jpg`, 1916x821); you may
   inspect pixels with a node or PowerShell script. If the wick is cropped out on mobile, hide the
   flame there.
3. Mobile Clepsydra: `.clep{right:-2%;width:47%}` pushes her off the right edge and over the buttons
   and body copy. Keep her fully inside the viewport and off every interactive control and text.
4. `.row strong` needs a gap before `.meta` ("OphthalmologyLast used" runs together).
5. `.vessel{overflow:hidden}` hides its own "today" and "42 / 100" labels. Show them.
6. At 390 px the right edges of the hero and cards look cut. Settle whether this is real overflow
   hidden by `body{overflow-x:hidden}` or an artefact of headless Chrome's minimum window width.
   Measure under a true 390x844 viewport (CDP `Emulation.setDeviceMetricsOverride`; Node 26 has a
   built-in `WebSocket`, so no npm), and report `documentElement.scrollWidth` and the widest
   element's right edge for each page. If it is real, fix it.

## Must verify

- `node --check` on every JS file you touch.
- Re-shoot every home and subject option at 390x844 (true viewport, as in 6) and 1280x800 into
  `mocks\shots\` (same file names). Put the shooting script at `mocks\shoot.mjs` so the shots can be
  re-run.
- Append a `## Round 2` section (≤ 30 lines) to `mocks\NOTES.md`: what changed (file:line), the
  scrollWidth table, the wick coordinates used, anything UNCONFIRMED.
- Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 5 lines.

## Round 3 (2026-09-25): overrides round 2 where they differ

Do not take screenshots. CDP cannot run inside your sandbox; the orchestrator runs `shoot.mjs`.
1. `fixes.css:1` `.flame[aria-hidden=true]{display:none}` hides the flame on every page, because the
   markup always ships `aria-hidden="true"`. Drive the flame's lit state from the candle button's
   `aria-pressed` (check the toggle in `mocks.js`). Keep `aria-hidden` on the decorative flame.
   Desktop: lit shows the flame on the plate wick. Mobile (≤ 600 px): always hide the flame, since
   the lamp sits under the body copy.
2. `mocks.css:2` `.candle{width:17px;height:39px}` squashes the Candle button on desktop, where its
   text spills out. The button is a normal control; the flame is positioned separately. Unset the
   size on desktop too.
3. Mobile: Clepsydra covers the vessel's "42 / 100" label on home-a, home-b and subject-a. Move
   `.vessel` or narrow `.clep` so neither overlaps the other or any text.
4. `NOTES.md:22`: replace the UNCONFIRMED shots line with "shots taken by orchestrator via
   shoot.mjs outside the sandbox". Add a `## Round 3` section of 10 lines or fewer.
Verify with `node --check` on the touched JS. Final reply begins `AGENTS.md loaded — Herophilus`, then 4 lines or fewer.

## Round 4 (2026-09-25): the owner picked PAINTED

Do not take screenshots. At mobile width (≤ 600 px) on home-b and subject-b, the `.vessel` overlaps
the "Desk plate: painted" label, and on home-b it also overlaps the corner of "Browse all banks".
Move the vessel in the mobile block of `fixes.css` so that it clears every text and control at
390 px, on all four home and subject pages (A and B). It must not run into Clepsydra or into
"42 / 100". Append a `## Round 4` section of 5 lines or fewer to `NOTES.md`.
Final reply begins with `AGENTS.md loaded — Herophilus`, then 3 lines or fewer.

## Round 5 (2026-09-25): Round 4 did not clear it (measured on the 390x844 shots)

The vessel's "today" label still lands on the "Desk plate" button. On the B pages the button ends at
x≈177 and its bottom edge is at y≈404, while the label covers x 167–196, y 400–410. On home-a they
touch with a 0–1 px gap. In the mobile block of `fixes.css`, place the vessel so that its label has
at least 12 px of clear space from the Desk plate button and from "Browse all banks" on all four
pages, and does not run into Clepsydra or "42 / 100". Use explicit placement; do not guess from
round 4. Append `## Round 5` to `NOTES.md` in 3 lines or fewer. Do not take screenshots. Reply
`AGENTS.md loaded — Herophilus` + ≤ 2 lines.
