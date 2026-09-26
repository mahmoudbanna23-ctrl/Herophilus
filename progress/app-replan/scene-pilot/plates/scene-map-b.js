/* SCENE_MAP for master-v2-b.png (owner's picked plate), 2026-09-26.
   Method: node script decoding the PNG (zlib inflate, no npm), column/row colour-gradient
   profiles and flood-fill for hard-edged objects (window, shelf line, lamp/wick), plus
   direct pixel luminance scans for the wick highlight. Free desk "slots" and a few soft-edged
   objects (bowl assembly, extraBook, scrollBundle far edges) were located by cropping
   candidate windows and reading them visually (Read tool) — flagged per key below.
   All boxes are (x, y, w, h) integers in SOURCE plate px, plate = 1916x821 (measured).

   CORRECTED 2026-09-26 per progress/app-replan/p5/REFUTE-scenemap-b.md — the first pass
   above failed refutation (9/15 boxes wrong: clipped handle, clipped blue spine, clipped
   extraBook, clipped bowl cup, wrong book bottoms, mis-cut openScroll, mis-set slots,
   widthOK hard-coded true instead of computed). Every box below is the refuter's own
   pixel-profile fix EXCEPT books.violet (w 43): a main-chat trim, confirmed by round 2 as
   a genuine top-corner occlusion with blue, not a re-guess.

   ROUND 2 (2026-09-26) — REFUTE-scenemap-b-round2.md: boxes all passed; openScroll nudged
   per its crop-read advisory; portraitCropW/sourceWidth/cluster/overflow were typed-in
   literals instead of being derived from data — removed, now computed in
   scene-map-b.check.js from portraitCrop.viewport and plate.h / bookCluster.box. */
var SCENE_MAP = {
  plate: { w: 1916, h: 821 },

  // measured: brightest-pixel scan (luminance profile) found the wick's specular highlight
  // starting y~358 (nothing above it in the same column down to y=290), fading out ~y384.
  wick: { box: [1334, 356, 18, 30], center: [1343, 371] },

  // REFUTE fix: rows y371-376 hold handle pixels out to x=1474, the first box's 1459 sat
  // mid-handle. Left/bottom/top as before; handle reach corrected.
  lamp: { box: [1233, 345, 242, 113] },

  // REFUTE fix: bottoms — all four run to a shared dark seam at y=433 (desk wood below),
  // not y=458 (that is the open scroll's top edge). blue's visible span is x1209..1280,
  // y222..~430, wider and shorter than first measured (occluded by the lamp/handle below
  // y≈380, and its own left/right edges were mis-set).
  books: {
    terracotta: { box: [1066, 217, 50, 216] },
    sage:       { box: [1117, 219, 48, 214] },
    violet:     { box: [1166, 219, 43, 214] },
    blue:       { box: [1209, 221, 72, 212] }, // occluded below y≈380 by the lamp
  },

  // REFUTE fix: true union of the corrected book+lamp boxes is x1066..1475 = 409px, OVER
  // the plan's 400px rule (first pass's 393px followed the lamp's clipped handle).
  // widthOK is now COMPUTED by scene-map-b.check.js, not hard-coded — see that file.
  bookCluster: { box: [1066, 217, 409, 241], widthLimit: 400 },

  // measured: column scan found the stone-to-glass jump at x≈1286/1287 and x≈1785 (both
  // >130 delta); row scan found the sill top at y≈213/214. Top of frame is at plate edge
  // (glass is visible from y=0, no edge found scanning up from y=60).
  window: { box: [1287, 0, 497, 213] },

  // REFUTE fix: [882,458,630,90] cut through both rolls at each edge — it was neither the
  // flat parchment nor the whole scroll. This box is the FLAT PARCHMENT only. Whole scroll
  // incl. rolls would be ≈[810,430,765,140] (±10 on the right roll, not used here — pick one
  // meaning, this map uses the flat writing surface).
  // ROUND 2 advisory: round-1's [948,458,522,90] sat ~15-20px right of the true flat
  // parchment (left roll ends x~925-932) and the right roll intrudes the top-right corner
  // (roll edge x~1452@y458, ~1480@y515). Nudged left per the round-2 crop-read.
  openScroll: { box: [932, 458, 522, 90] },

  // REFUTE fix: lower rolls reach x=752 (rows y400-425, 7px left of the first box) and
  // overlap terracotta to x=1077 at y=400; top measured at y=337 (3px above first pass).
  scrollBundle: { box: [752, 337, 325, 121] },

  // REFUTE fix: first box had ~30px slack at the top (stone wall, not the bowl) and clipped
  // the catch-cup base by ~24px (cup ends y≈470). Left edge no longer eats into the lamp
  // handle range (1450-1475).
  bowl: { box: [1457, 238, 308, 235] },

  // REFUTE fix: first box clipped half the book, spine included. Book runs x1608..1916
  // (cut off by the plate's own right border, not by this box), y~440..598.
  extraBook: { box: [1608, 438, 308, 162] },

  // REFUTE fix: the first three slot boxes all sat on the desk's FRONT APRON (below the
  // measured front edge y≈620), not the desk top — each had only 20-30px of real desk top,
  // the rest on the vertical face. Only one free desk-top zone was found, ~160x90, left of
  // the open scroll's left roll (desk top runs y430..620, left edge diagonal x≈752@y420,
  // 636@y520, 529@y610). letters fits there. tablet and pile do NOT fit free desk top at
  // their planned sizes — OWNER-PENDING, left null. Options, both cropped and confirmed
  // free wood by the refuter:
  //   (a) shrink to fit the free strips: tablet -> [870,556,170,60] (~60-70px deep strip
  //       between the scroll and the front edge); pile -> [1360,574,200,44] (under the
  //       right roll, only ~44px deep there).
  //   (b) sit tablet/pile on the open scroll's parchment instead of free desk.
  // Next job / owner decides; do not guess a box here.
  slots: {
    letters: { box: [642, 522, 160, 90] },
    tablet:  null,
    pile:    null,
  },

  // Cover-fit math for a 390x844 portrait viewport against this 821px-tall plate:
  // scale = max(viewport.w/plate.w, viewport.h/plate.h) = 844/821 (height-constrained).
  // Visible source width (cropW) = viewport.w / scale — DERIVED, not typed in here; computed
  // by scene-map-b.check.js from portraitCrop.viewport and plate.h. Same for bookCluster's
  // overflow against that cropW (cluster width comes straight from bookCluster.box[2]).
  // ROUND 2 finding: bookCluster (409px) overflows cropW — roughly double the first pass's
  // ~14px claim, which used the uncorrected 393px cluster. Centring the crop clips ~15px
  // each side; x=1073 below keeps terracotta's left 7px out and loses 23px of the lamp
  // handle. Decision (accept the clip, shift/narrow the cluster in the plate, or a
  // taller-than-cover crop) is OWNER-PENDING — not decided here. Only the crop's own inputs
  // (x, viewport) are stored; nothing derived is typed in.
  portraitCrop: {
    x: 1073,
    viewport: { w: 390, h: 844 },
    decision: 'OWNER-PENDING',
    note: 'bookCluster overflows the computed portrait crop width; owner picks clip vs. shift/narrow vs. taller-than-cover crop',
  },
};
