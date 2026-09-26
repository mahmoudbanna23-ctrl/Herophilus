# REFUTE — SCENE_MAP plate B (2026-09-26)

Target: `progress/app-replan/scene-pilot/plates/scene-map-b.js` on `master-v2-b.png` (1916x821).
Method: own PNG decode (node zlib), own column/row pixel profiles, crops +10 px with the claimed
box outlined in cyan, written to `D:\tmp-scenemap-ref\` and looked at. Writing as I go.

## Failures

- **lamp** [1233,345,226,113] CLIPS handle. Rows y371-376 hold handle pixels (r 56-64 vs bg ~33)
  out to x=1474; 6x zoom crop `handle-zoom.png` shows the outer handle edge at ~1475, the claimed
  1459 sits mid-handle. Fix: [1233,345,242,113].
- **bookCluster** [1066,219,393,239] follows the lamp error. True union 1066..1475 = **409 px**,
  over the plan's 400 rule; `widthOK: true` is false. Fix: [1066,217,409,241], widthOK false.
- **books.* bottom** — all four boxes run to y=458. Pixel columns at x 1090/1140/1188 show a dark
  seam at y=433, desk wood below; y≈458 is the open scroll's top edge, not a shelf line. ~25 px
  slack. Fix: terracotta [1066,217,50,216], sage [1117,219,48,214], violet [1166,219,44,214].
- **books.blue** [1216,219,46,161] CLIPS. Blue-dominant pixels span x 1209..1280, y 222..~430;
  top-left corner sits left of 1216, fore-edge right of 1262, and the foot of the spine is visible
  below the lamp nozzle (y 405-432, crop `blue-lower.png`). The 71x216 estimate was right.
  Fix: [1209,221,72,212].
- **slots.letters / tablet / pile** — all three sit on the desk's FRONT APRON, not the top.
  Desk front edge measured at y≈620 (x 600..1580, brightness drop 18-89); each slot has only
  20-30 px of desk top, the other 60-70 px on the vertical face (crops `slot-*.png`). Not free desk.
  Measured free desk top (desk y 430..620, left edge diagonal: x≈752 at y420, 636 at y520,
  529 at y610). Only one free zone holds ~160x90: left of the open scroll's left roll.
  Candidates cropped and looked at (all free wood): letters [642,522,160,90]; tablet
  [870,556,170,60] (strip between scroll and front edge is only ~60-70 deep; 200x90 fits nowhere
  free); pile [1360,574,200,44] (under the right roll, only ~44 deep). **Owner/next job decides**:
  shrink tablet/pile, or allow them onto the open scroll's parchment.
- **extraBook** [1763,422,153,165] CLIPS half the book, spine included. Book runs x 1608..1916,
  y ~440..598 (`extraBook.png`, `extraBook-cand.png`). Fix: [1608,438,308,162].
- **bowl** [1450,208,315,241] slack top ~30 px (stone wall), CLIPS catch-cup base by ~24 px
  (cup ends y≈470; `bowl.png`). Left edge also contains the lamp handle (1450-1475). Fix:
  [1457,238,308,235] (`bowl-cand.png`).
- **openScroll** [882,458,630,90] is neither object: both vertical edges cut through the rolls
  (`openScroll.png`). Flat parchment ≈ x 948..1470, y 458..548; whole scroll incl. rolls ≈
  [810,430,765,140] (±10 on the right roll). Fix: pick one meaning; flat = [948,458,522,90].
- **scrollBundle** [759,340,308,118] minor: lower rolls reach x=752 (rows y400-425) and overlap
  terracotta to x=1077 at y=400; top 337. Fix: [752,337,325,121].
- **check.js** — 44 assertions count right (15 in-plate + 1 width + 1 wick + 3 slot pairs + 24
  slot-vs-blocker) and are real, not tautological, but blind where it matters: width tested
  against 400 not the 379 crop; `widthOK` hard-coded true; no check that bookCluster = union of
  books+lamp; only the wick CENTRE is tested (wick box is inside lamp, passes if added);
  extraBook and window absent from the blocker list; nothing tests slot-on-desk-top (y+h ≤ 620)
  or portraitCrop containing bookCluster. Every failure above passes this check.

## Passed

- `node scene-map-b.check.js` -> "44 passed", exit 0 (re-run).
- **window** [1287,0,497,213] tight. Per-row blue>red+10 scan: glass x 1287..1783 on every row
  y 20..212, gone at y 214; crop `window.png` agrees. The 685x288 estimate included stone frame.
- **wick** [1334,356,18,30] tight (±3 px), 4x crop; centre [1343,371] inside lamp.
- terracotta/sage/violet left/right seams (1066, 1116/1117, 1164/1166, 1210) and tops 217-222
  confirmed by column profile; only bottoms wrong.
- master-v2-b.png unchanged vs HEAD (`git diff --quiet`), not in `status --short`.
- scene-map-b.js: classic script, `var SCENE_MAP`, no import/export. check.js: CommonJS node,
  no import/export.

## Portrait finding

Cover-fit 390x844 on 1916x821: scale = max(0.2035, 1.0280) = 1.0280; visible source width =
379.37 px. Builder's math right. True bookCluster = 1066..1475 = **409 px**, so it overflows the
crop by **~29.6 px** (not 14). Centred crop (x≈1076) clips ~15 px each side; builder's x=1073
keeps terracotta's left 7 px out and loses 23 px of lamp handle. Owner decision needed: accept
the clip, shift/narrow the cluster in the plate, or a taller-than-cover crop.

## Not verified

- master-v2-a.png / master-v2-c.png are untracked, so git cannot prove them untouched; mtimes
  (03:45-03:46) predate the map files (07:22).
- Right roll of the open scroll: edge between 1570 and 1584 — desk highlight contaminates the scan.
- Slot "big enough": the brief gives no object dimensions; judged against the builder's own sizes.
- master-v2-notes.md claim "every box cropped and looked at; all hug their object" is false
  (lamp, blue, extraBook, bowl, openScroll, slots).
Evidence crops: `D:\tmp-scenemap-ref\` (outside the project).
