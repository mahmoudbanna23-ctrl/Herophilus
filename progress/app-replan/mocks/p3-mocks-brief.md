# P3 brief: static mock-ups, round 1 (2026-09-25)

Seat: Codex `gpt-5.6-terra`, 900 s clock per run. Reviewer: Claude Opus refuter. Owner picks.
Plan: `progress\PLAN-app-master-2026-09.md` — read §2 (R5, R7, R10, R11 and the look rulings),
§3, §4 (Clepsydra spec: placement, water level), §5 P3, §6 (D1 candle, D4 layouts, candle desk).
Design inputs: `progress\app-replan\design-refs.md`, `progress\app-replan\b3b\` (buttons/chips),
`progress\redesign-spec-2026-09-07-owner-interview.md` (input, not the plan).

## Marching orders

- Goal: clickable static HTML mock-ups the owner picks from — **home (desk band + subject list),
  subject browse (B1), question layout (Q1), results (R1)** — with **≤ 3 options per screen**, plus:
  the candle method (DOM/CSS flame over an unlit wick, plan §6 D1); ONE labelled neon-edge
  comparison beside the thin-muted-border default (§2); the water level in Clepsydra's vessel
  (counts every answered question incl. repeats, target 100/day, resets local midnight; §4).
- May change: ONLY files under `progress\app-replan\mocks\` (AGENTS.md write grant for this brief).
  Suggested layout: `index.html` (picker linking every option), one HTML per screen-option,
  `mocks.css`, `mocks.js`. Split by concern.
- May read: `app\css\`, `app\js\`, `app\index.html`, `app\assets\`, `progress\`. `app\data\` stays
  closed — sample stems are written by you as obvious placeholders ("Sample stem — …"), never
  copied from the banks.
- Clepsydra: reference her existing PNGs by relative path (`../../../app/assets/clep/<pose>.png`).
  **Never redraw, recolour, crop into a new file, filter, or draw anything onto her.** Plain `<img>`,
  CSS position/size only.
- Desk plate: two slots per home/subject option — `plates/photo.jpg` (photo-real) and
  `plates/painted.jpg` (painted, her drawn style). These files DO NOT EXIST yet; the page must look
  finished without them (dark tonal fallback via CSS) and pick them up when dropped in. A toggle on
  the page switches photo vs painted.
- Constraints: vanilla HTML/CSS/JS, opens from `file://`, no CDN, no framework, no build. Reuse the
  real tokens and type scale (copy from `app\css\tokens.css`, don't reinvent). Dark default. No emoji,
  no chirpy copy, one radius scale, no hover-lift, no `backdrop-filter` on cards/rows/options.
  Clock counts up; only a timed-mock state counts down. `prefers-reduced-motion` stops the flame.
- Accessibility (R11): every option works keyboard-only (visible focus, logical tab order, no
  trap) and at 390 px width with no horizontal scroll. AA contrast on text.
- Fixture tasks each option must support, clickable end to end: resume where I left off · find a
  bank · read a question and answer it · review a wrong answer.
- Do not: run headless Chrome (another job owns it right now), touch `app\`, run git writes, use
  the network.
- Must verify: `node --check` on every JS file; grep your output for emoji and `backdrop-filter`;
  list any rule you could not meet in `progress\app-replan\mocks\NOTES.md` (≤ 60 lines: what each
  option is, what differs between options, what is unconfirmed).
- A partial set reported honestly is a success. Final reply begins with
  `AGENTS.md loaded — Herophilus`, then ≤ 5 lines.
