# Master v2 placement notes

Coordinate boxes are `(x, y, width, height)` in image pixels; all boxes below are visual estimates, except pixel sizes measured from the files.
`master-v2-a.png` — 1914×822 (measured).
A: wick (1178,360,18,32); books terracotta (1304,242,57,214), sage (1360,242,57,214), violet (1417,242,57,214), blue (1474,242,57,214); lamp (1080,348,207,109).
A: window (500,0,445,354); open scroll (815,455,735,95); bowl (1550,235,333,230); scroll bundle (694,336,324,123); free patches (515,455,180,150), (1500,570,180,100), (1050,570,200,75).
A: books plus lamp span about x1080–1531 = 451 px; does not fit a 400 px-wide window.
`master-v2-b.png` — 1916×821 (measured).
B: wick (1335,359,17,31); books terracotta (1064,218,53,216), sage (1117,218,52,216), violet (1168,218,52,216), blue leaning (1210,218,71,216); lamp (1232,348,207,109).
B: window (1231,0,685,288); open scroll (816,455,730,95); bowl (1456,235,333,230); scroll bundle (754,336,325,123); free patches (515,455,190,150), (1100,560,120,90), (1500,570,180,100).
B: books plus lamp span about x1064–1439 = 375 px; fits a 400 px-wide window. A separate closed book at lower-right is also visible.
`master-v2-c.png` — 1916×821 (measured).
C: wick (1180,361,17,30); books terracotta (1017,246,57,198), sage (1076,246,57,198), violet (1330,246,57,198), blue (1389,246,57,198); lamp (1134,350,180,98).
C: window (798,0,702,283); open scroll (815,455,735,95); bowl (1482,235,333,230); scroll bundle (718,336,291,123); free patches (515,455,180,150), (1510,570,190,100), (1050,570,180,75).
C: books plus lamp span about x1017–1446 = 429 px; does not fit a 400 px-wide window.

## Measured 2026-09-26

Plate B only (owner's pick). **This first measurement pass FAILED refutation** — the
refuter's own PNG decode + column/row pixel profiles found **9 of 15 boxes wrong** (clipped
lamp handle, clipped blue spine, clipped extraBook, clipped bowl catch-cup, wrong book
bottoms, mis-cut openScroll, mis-set desk slots, and `widthOK` hard-coded `true` instead of
computed). The table and boxes below are the **corrected** numbers from
`progress/app-replan/p5/REFUTE-scenemap-b.md`, applied mechanically to `scene-map-b.js` — no
new measuring done in this pass. Full method and evidence crops are in that file.

| key | first pass (failed) | corrected (refuter) | why |
|---|---|---|---|
| wick | (1334,356,18,30) | unchanged | passed refutation, ~on the mark |
| lamp | (1233,345,226,113) | (1233,345,242,113) | handle pixels run to x=1474; first box sat mid-handle |
| terracotta | (1066,219,51,239) | (1066,217,50,216) | bottom was the open scroll's edge (y458), not the real shelf seam (y433) |
| sage | (1117,219,50,239) | (1117,219,48,214) | same shelf-line correction |
| violet | (1167,219,43,239) | (1166,219,43,214) | shelf-line correction; width trimmed to 43 (main-chat trim, round 2 confirmed) |
| blue (leaning) | (1216,219,46,161) | (1209,221,72,212) | first box clipped the spine; true span is wider, occluded below y≈380 by the lamp |
| bookCluster | (1066,219,393,239), `widthOK: true` | (1066,217,409,241), `widthOK` now computed | true union is 409px, OVER the plan's 400px rule — the old box followed the lamp's clipped handle |
| window | (1287,0,497,213) | unchanged | passed refutation, tight |
| open scroll | (882,458,630,90) | (932,458,522,90) | round 1 cut through both rolls at each edge; round 2 nudged the flat-parchment box 16px left (round 1's 948 sat ~15-20px right of the true parchment) |
| scroll bundle | (759,340,308,118) | (752,337,325,121) | lower rolls reach 7px further left, top 3px higher |
| bowl | (1450,208,315,241) | (1457,238,308,235) | first box had ~30px slack at the stone wall above and clipped the catch-cup base by ~24px |
| extraBook | (1763,422,153,165) | (1608,438,308,162) | first box clipped half the book, spine included |
| slots.letters | (580,600,160,90) | (642,522,160,90) | first box sat on the desk's front apron (below y≈620), not the desk top |
| slots.tablet | (980,600,200,90) | (932,458,200,90) | round 3: sits ON openScroll, owner ruling, size owner-given |
| slots.pile | (1560,590,180,100) | (1160,458,200,90) | sits ON openScroll, owner ruling; size not given in the plan; first pass 322 wide, narrowed after refuter round 4 (stretched 3.6:1, roll touched corner) |

**Ruling 1 (owner, 2026-09-26) — tablet/pile sit on the open scroll.** No free desk-top zone
fit `tablet`/`pile` at their planned sizes (only one ~160×90 zone existed, used by `letters`).
The owner ruled both sit ON `openScroll` [932,458,522,90] instead. `tablet` keeps its given
200×90 size, placed flush with the scroll's left edge. `PLAN-living-desk-2026-09-26.md` names
"pile" only as a content item (weak-spot drill / sprite layer) with no box size, so `pile`
first took the scroll's whole remaining width (322×90). Refuter round 4 found that stretched
(3.6:1), with the right roll touching its top-right corner, so it is now 200×90 at x=1160,
matching the tablet with a 28 px parchment gap between them Both sit at y=458 for the scroll's full 90px height, which also
rules out any overlap with the lamp (bottom edge y=458) or any book (all bottoms y=433).

**Ruling 2 (owner, 2026-09-26) — portrait crop shifts onto the books.** Cover-fit math for a
390×844 viewport against this 821px-tall plate: scale = 844/821 = 1.0280
(height-constrained), true visible source width = 390/1.0280 = **379.4px** (`cropW`, derived
in `scene-map-b.check.js`, never typed into the data file). Rather than centring the crop on
the overflowing 409px `bookCluster`, the crop's left edge (`portraitCrop.x0`) is now the
`bookCluster`'s own left edge — derived via a getter, not a literal. Computed crop is
[1066.0, 1445.4]: every book box (max right edge 1281, `blue`) fits inside it; the lamp does
not — its right edge (1475) sits **~29.6px** past the crop's right edge, so the crop clips
about that much of the lamp's handle. `scene-map-b.check.js` asserts every book is inside the
crop and prints the lamp clip as an info line, not a failure — the clip is the accepted
tradeoff of this ruling, not a defect.

`scene-map-b.check.js` was also corrected: `widthOK` is no longer hard-coded, and it now
checks each book sits inside `bookCluster`, books don't overlap each other, and
`bookCluster.w` against the portrait crop width (reported as an info line, not a hard assert
— the overflow above is real and expected, not a bug). The round-1 pass found the corrected
`book.violet`/`book.blue` boxes overlapping by 1px (violet's right edge 1210 vs blue's left
edge 1209) and reported it rather than adjusting it. Main chat then trimmed `violet` to
w 43 (right edge 1209, no more numeric overlap), and round 2's own pixel crop confirmed this
is not a measurement error to begin with: only the top corners touch (rows y220-228, violet's
page-edge corner reaches x~1210-1212 where blue's top corner also sits) — a genuine 2-3px
occlusion between the two books, not a seam artifact. The trim is correct and stands.

**Round 2 (2026-09-26)** failed this pass on two data/docs points, not the boxes: all 15 box
values passed re-verification (`node scene-map-b.check.js` gave "34 passed", exit 0), but
`portraitCropW` (379.4), `portraitCrop.sourceWidth`/`cluster`/`overflow` were typed-in
literals in `scene-map-b.js` rather than derived from data, and the "1px overlap" language
above was stale after the violet trim. Both are fixed here: `scene-map-b.js` now stores only
the crop's inputs (`viewport`, `x`, `decision`, `note`); `scene-map-b.check.js` derives the
crop width from `portraitCrop.viewport` and `plate.h`, and the cluster/overflow from
`bookCluster.box`, printing the same `PORTRAIT:`/`WIDTH:` lines from computed numbers. The
`openScroll` box was also nudged per round 2's crop-read advisory (see table above).

**Round 3 (2026-09-26, this pass)** applies the two owner rulings above and closes both
open questions from round 2 — no OWNER-PENDING items remain. `scene-map-b.check.js` gained:
tablet/pile asserted inside `openScroll`; the slot-overlap sweep still runs for tablet/pile
against every other object (lamp, books, bowl, scrollBundle, extraBook, window), just not
against `openScroll` itself, since sitting on it is now the ruling; every book asserted
inside the new `[x0, x0+cropW]` portrait crop; the lamp's clipped handle width and the plan's
400px rule are both printed as info lines, never failures. `node scene-map-b.check.js`:
"60 passed", 0 FAILED, exit 0.
