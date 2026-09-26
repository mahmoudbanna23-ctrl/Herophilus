# Refuter (Opus) — sprite layers, round 1 (2026-09-26)

Cutter seam fails (report): letters-1, tablet-blank, tablet-half, pile. Sonnet looker: letters-1's
envelope was drawn outside its box; tablet and pile edits repainted the whole scroll's weave and
tone (diff 14-30 even 50-100 px outside the box), so no shift or feather can hide the seam;
tablet-half was scored across the whole panel.

Opus refuter on the other 8: FAIL, 6 of 8 pass.
- letters-few, letters-many FAIL: the stack was generated up and right of the box, so the sprite holds
  a clipped corner only. The looker's "~4-5 letters" was wrong.
- ribbon: two green-dominant pixels at low alpha ((4,8) a17, (4,292) a6). Fix: despill every
  pixel with alpha > 0.
- gilt x4 and letters-0 PASS: sizes, 8 px alpha ramp and seams re-measured with an independent decoder.
- Cutter: no check that the object sits inside its box (ring drift 21.17 and 10.91 were the warning
  signs); one shift per edit, not one per box (verdict unchanged); gilt drift rings count neighbours.

Rejects moved to `scene-pilot/plates/edits/rejected/`. Owner 2026-09-26: third Codex dispatch
allowed, new method: keyed isolated objects (brief `sprites-brief-3.md`).

## Round 2 — dispatch 3, keyed objects (Opus refuter, 2026-09-26)
FAIL, 7 of 12 pass (letters-0 as a transparent overlay, gilt x4). Codex's "12 passed" was false:
- 5 of 6 `obj-*.png` came back already transparent (alpha 0, RGB ~0), not on `#00b140`; `cut-sprites.js:9`
  `key()` derives alpha from RGB only, so the whole frame pasted as an opaque black rectangle
  (bbox = full fit area). The checks never tested that the background was removed.
- ribbon went through `key()`: it got an 8 px margin and a shadow, and fills only x8-39, y50-291.
- tablet-half is not the same tablet as blank (2:1 vs 3:2 frame, ~155 vs ~100 px wide);
  letters-many shows ~7 seals and half-width envelopes vs letters-1, so the state swaps jump.
- Cutter fixes the brief asked for are all present (per-box shift, ring excludes books, drift>12, despill a>0).
Notes: `REFUTE-sprites-round2-findings.txt`. Next: Claude builder (ROUTE-OK, three Codex dispatches used).

## Round 3 (Opus refuter, 2026-09-26; scratch D:/tmp-sprite-ref4)

Refute sprites round 3 (2026-09-26): FAIL, 9 of 12 pass.
Script D:\tmp-sprite-ref4\v4.js. Sizes 12/12 ok. Green (g>r+24,g>b+24, a>0): 0 everywhere.
Keyed ring (2px inside a>20 bbox): mean alpha 3-7, 85-92% transparent; opaque frac 0.48-0.58 -> no rectangle (round-2 defect fixed).
Object (a>89, shadow colour excluded) inside 8px: all 6 keyed ok (letters 21..138 x, bottom 81; tablets 25..175; pile 41..159).
letters-0 + gilt x4: sources edit-4/master/scene-map mtimes predate round 2 (03:45/08:45/07:54), code path unchanged, seams 8.52/9.48/9.81/5.54 identical. No round-2 sha1 was recorded, so sha1 identity is unconfirmable; current: letters-0 ecf29d30, gilt-blue 4cafa0cd, sage 4e462600, terracotta 29758e6f, violet 6a609c0a.
FAIL tablet-half: raw obj-tablet-half has ~9 hairline strokes on left wax (diff-tablet-raw.png), but at scale 0.104 with nearest-neighbour sampling (cut-sprites.js place(), floor(x/scale)) they vanish. Sprite diff vs blank: >25 = 5 px left / 5 right; >40 = 0/0; mean 2.99 L / 2.79 R. Identical at sight. Frame/alpha identical (0 alpha mismatch) - that part ok.
FAIL letters-many: 8 seals, low wide stack ok, but each envelope ~57 px wide vs ~117 px in letters-1/few (z-*.png) -> 2x size jump on swap. Cause: family shares stack WIDTH (cut-sprites.js ~line 97 W=min(...)), not envelope scale; raw many drew envelopes ~half size. Spec conflict: 8-10 full-size envelopes cannot fit 160x90 (few already uses 74 px height). Escalate.
FAIL ribbon: top row y=0, x5..43 olive green-spill fringe (e.g. 5,0 68/86/39 a255; 10,0 67/85/47 a182), 46 px; despill clamp g<=max(r,b)+18 leaves it. Width 40 of 48 (x4..43), height full 300 - aspect kept; brief "full 48x300" ambiguous.
PASS letters-1 (1 sealed letter, tilted), letters-few (3, same envelope size as letters-1), tablet-blank, pile (5 pages, curled corners; paper slightly cool vs warm runner), letters-0, gilt x4.
Minor: nearest-neighbour downscale gives jaggy edges at 4x; letters-many 8 near-olive paper px (e.g. 111,38).

## Round 4 (Opus refuter, 2026-09-26; scratch D:/tmp-sprite-ref5)

Refute sprites round 4 (2026-09-26): FAIL, 11 of 12 pass.
Scripts: D:\tmp-sprite-ref5\v5.js (v4 + green G>max(R,B)+12), edge.js, tab.js, fr.js, rib.js. Close-ups z-*/m-*.png, tab-left-x8.png.
All 12: size ok; green G>max(R,B)+12 = 0 px (all keyed, ribbon, gilt x4, letters-0).
Keyed ring (2px inside a>20 bbox) 88-94% transparent, mean alpha 2-9. Object (a>89, lum>45) inside 8 px: letters 24..135 x / 8..81 y; tablets 25..175 / 8..78; pile 41..159 / 8..81.
letters-0 + gilt x4 sha1 = report = round-3 prefixes (ecf29d30, 4cafa0cd, 4e462600, 29758e6f, 6a609c0a); sizes match boxes; letters-0 max alpha 0.
FAIL tablet-half: stroke mask (cut-sprites.js:118-122) not limited to wax. Box diff>25 vs blank: 604 of 680 px on FRAME (blank lum>=55), only 76 in wax. Left frame mean lum 83.1 blank -> 60.1 half; right frame 79.7 -> 77.1. Frame diff bbox x26..100 y8..64; e.g. (63,12) blank 122,70,35 -> half 42,17,4; (72,13) 134,81,42 -> 83,35,4. Channel-wise min fill r=8 (lines 134-142) = erosion: mottled dark blotches on left frame + corner, visible at 1x preview (left frame darker than right) -> swap blank<->half jumps. Wax strokes themselves read as scored stylus lines, left only, ok. Fix: restrict stroke mask to blank wax (lum<55, eroded 1-2 src px from frame edge), or diff only inside wax polygon.
PASS letters-1, letters-few, letters-many: envelope a>89 width 112/112/112, same x 24..135, bottoms 81; no jump. many = neat bundle, ~6 layer edges visible each side, top seal only; parallel edges slightly regular, not a fake repeat. No fringe.
PASS tablet-blank, pile (5 pages). Minor: pile shadow clipped at bottom row y=89 a=24.
PASS ribbon: top row now red (y0 x7 134,17,29 a217); only 3 olive px, a<=9. Width 40 of 48 (x4..43) as round 3.
Area-average: edges clean, no jaggies, not mush at 1x/4x.

## Round 5 (Opus refuter, 2026-09-26; scratch D:/tmp-sprite-ref6)

tablet-half: PASS (with 2 notes)
1. cut-sprites.js exit 0, last line "12 passed"; sha1 of all 12 app/assets/scene/*.png identical before/after (deterministic). "Other 11 unchanged vs prior round" not checkable: app/assets/scene/ untracked, no baseline.
2. Own zlib decoder: both 200x90 RGBA, alpha diff 0. RGB diff by threshold (frame = >1px outside blank lum<55; wax split at midline x=96):
   >25: frame 0, wax-left 123, wax-right 0 (matches builder)
   >15: frame 0, left 227, right 15 | >10: frame 1, left 287, right 22 | >0: frame 1742, left 2393, right 3467
   Strong-diff bbox (>25) x61-95 y25-48, all in wax interior.
3. Looked (x4 crops D:\tmp-sprite-ref6\stack-x4.png, diff-x4.png, preview-x4.png): ~7 pale straight diagonal strokes, left of wax; read as scoring/scratches, not blotches, not noise, not legible glyphs. Frame, position, size unchanged; no visible jump blank->half.
Note A: frame is not byte-identical. Every frame px differs by 1-12 (mean luminance -2.3) because half's RGB comes from obj-tablet-half.png. The "frame diff 0" claim only holds at the script's >25 threshold (cut-sprites.js:317). Not visible in the x4 crops.
Note B: stroke tips run 1-4 px past the wax midline (x96-100, deltas 16-25; cut-sprites.js:154 seeds stroke px only for x<tw/2, but dilation reaches r px across). Not visible.

Round 5 verdict: tablet-half PASS; set of 12 closed.
