# P3 mock notes

- Home A: quiet ledger — desk band above a compact subject list, with last-used Ophthalmology first.
- Home B: wider return — resume action and current-question context lead the desk band.
- B1 A: ordered shelves — even bank rows with progress bars and filters.
- B1 B: asymmetric browse — offset bank rows; same filters and information.
- Q1 A: reading-first question surface with the thin muted-border default.
- Q1 B: same question surface plus the one labelled neon-edge comparison; the comparison is not the default.
- R1 A: session account leads, then a wrong-answer review queue.
- R1 B: the review queue leads, with the session account alongside it.
- Home and subject variants support optional `plates/photo.jpg` and `plates/painted.jpg`; absent files leave the finished CSS tonal fallback visible.
- Candle is DOM/CSS: its flame sits above an unlit wick and the control stops it. Reduced-motion disables the flame animation.
- Vessel definition shown in every desk scene: every answered question, repeats included; target 100/day; resets local midnight.
- Clepsydra is a plain relative PNG `<img>` only. No art asset was changed.
- Unconfirmed: visual rendering at 390 px and manual keyboard traversal have not been run in a browser because the brief prohibits the headless-Chrome job.

## Round 2
- `mocks.js:1` moves the existing DOM flame out of its button after load; `fixes.css:1` pins it to the plate wick.
- Wicks measured in 1915x821 plates: photo `(1285,386)`; painted `(1350,370)`.
- `fixes.css:1` sets fixed plate alignment, makes `.progress` block-level, spaces row labels, exposes vessel labels, and keeps Clepsydra inside the narrow desk band.
- ScrollWidth table: UNCONFIRMED — Chrome starts, but closes its local CDP WebSocket before the first command; `shoot.mjs` is retained for rerun.
- Shots: shots taken by orchestrator via shoot.mjs outside the sandbox.

## Round 3
- `mocks.js:1` derives the desk flame state from each candle button's `aria-pressed`; decorative `aria-hidden` remains unchanged.
- `fixes.css:1` restores normal candle-control dimensions, shows a lit desktop flame at the plate wick, and always hides it at widths of 600 px or less.
- `fixes.css:2` narrows Clepsydra and moves the vessel left on mobile to separate her from the `42 / 100` label.

## Round 4
- `fixes.css:2` reserves a 400px mobile desk band and moves the vessel to its lower lane, below the desk controls while retaining its cleared lane beside Clepsydra.

## Round 5
- `fixes.css:2` explicitly sets the mobile vessel to `left:132px; right:auto`, leaving its "today" label at least 12px left of the desk-plate controls at 390px while preserving its separate lane from Clepsydra and the `42 / 100` label.

## Round 6
- `fixes.css:2` `.vessel{left:191px}` (was 132px) plus a new mobile-only `.water:after{left:0}` (was the base 42px), pulling the "42 / 100" label back against the vessel so the whole label group fits the corridor between the scene-tools buttons and Clepsydra.
- Measured (CDP, true 390x844): min gap 19.5px on all four pages, all against `.clep`; scrollWidth 375 on all four. Desktop 1280x800 unchanged (vessel still at base `right:31%`, not the mobile 191px value).
- Fix: `.water:after` reverted, moved to `.vessel:after` below the vessel (`top:100%;margin-top:16px`, left-aligned, no transform); `.vessel{bottom:52px}` (was 32px) opens room under it.
- Re-measured: min gap 14.0px on all four pages, all "below label vs vessel" (its own tightest edge); scrollWidth 375; desktop unchanged.

## Owner picks (2026-09-25)

- Desk: painted.
- Q1: B, and neon edges are the DEFAULT (owner, 2026-09-25).
- R1: A.
