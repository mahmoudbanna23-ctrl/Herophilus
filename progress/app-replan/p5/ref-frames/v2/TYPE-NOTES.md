# Type mock notes — beat-1 / beat-3

Rung: main chat did this directly (ROUTE-OK opened by parent — needs real headless-Chrome
rendering/visual check, Codex sandbox can't run CDP and was busy on another image job).

## Plate check (before any type)
Both plates: no stray text, no clutter in the title zone, no colour problem.
- beat-1-plate.png: dark study, empty dark upper-left/upper-centre clean for a title, warm lit
  desk lower-right balances it.
- beat-3-plate.png: blank parchment sheet, upper-left third of the sheet is clean and flat
  (past the rolled left edge), moonlit window in the back does not intrude.

## Beat 1 — HEROPHILUS
- Cinzel, uppercase, weight 600, letter-spacing 0.34em, font-size 86px (~5.6% of 1536px width
  cap-height ballpark, matches "moderate, not huge").
- Colour `--gold` #d9b44a, soft warm glow via text-shadow (two soft blurs + one tight dark
  contact shadow) — matches the plate's own candle glow, kept low-intensity.
- Kept the subhead: "A study of the body, by lamplight", EB Garamond italic, 23px, low-contrast
  ink-2-ish tone (rgba 207,192,165,.62). Chose to keep it — the dark upper-left had enough empty
  ground to hold a second line without crowding, and it echoes the candle/lamplight in the plate.
- Position: left 70px, top 150px — sits in the dark ground, does not touch the wall panel edge
  or the lit desk.

## Beat 3 — Today
- EB Garamond italic, weight 700, font-size 78px (sized like a letter heading, not body text —
  first pass at 54px read too small/faint and was bumped).
- Colour `--ink-iron` #2c2015 (warm brown-black), `mix-blend-mode:multiply`, opacity 1 — lets
  parchment grain show through per brief.
- Three ink rules beneath, same colour, opacity .4/.32/.24, widths 360/320/250px.
- Block transform: `perspective(1400px) rotateX(6deg) rotateY(-6deg) rotate(-1.2deg)`,
  `transform-origin: top left` — matches the sheet's own perspective (near-left corner up,
  receding right).
- Position: left 225px, top 492px — moved right off the rolled left edge of the parchment
  (first pass at left 150px clipped into the curl); sits on the flat writing area.

## Render
Headless Chrome, `--window-size=1536,1024`, fresh `--user-data-dir` per beat under
`D:/tmp-typemock/` (no `--` in path). Screenshots: `beat-1-typed.png`, `beat-3-typed.png`,
both 1536x1024.

## Impeccable flag
`dark-glow` fired on the beat-1 title-glow text-shadow. Left standing, not suppressed: the
brief explicitly asked for "a very soft warm glow" on the gold title over the dark plate, and
the plate's own candle already establishes warm glow as the scene's real light source — this is
domain-appropriate motion of the same light, not an AI-generic chromatic halo. Kept the glow
tight and low-alpha rather than removing it.

## Open
Not iterated further — owner review is the next step, not another auto-pass.
