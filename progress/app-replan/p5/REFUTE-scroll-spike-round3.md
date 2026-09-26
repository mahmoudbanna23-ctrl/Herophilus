# REFUTE round 3 - P5 scroll spike (Opus, 2026-09-26)

Verdict: FAIL - 0 blocker, 2 major, 4 minor.
Under review: progress/app-replan/p5/scroll-spike/ vs scroll-spike-brief.md + fix1 + fix2 ("Round 2 priorities" win).
spike.css is 8 lines: :1 base + keyframes + range tokens, :2 native @supports, :3 fallback, :4 phone media,
:5 reduced media, :6 fallback delays, :7-8 overrides. Shots: D:/tmp-spike-ref3b/shots/ (z-*.png = crops/tiles).
Probe data: film-desk.json. Harness: film.mjs + probe.js + inject.js (original copied as scroll-spike-film.orig.mjs).

## Round-2 defects
M1 titles under ring - CLOSED (text right < ring left on all 4 cards, every pass) but REGRESSED into new M2 below.
M2 fallback drift - CLOSED. Forced for real: CSS.supports stubbed false + spike.css replaced by a copy with the two
   @supports conditions flipped. Confirmed engaged (animation-timeline auto, playState paused, plate delay -0.5s at 10%).
   Computed transform/opacity/clip-path of plate, pool, shaft, 3 sprites, wipe, both heading lines, 4 books, 4 rings,
   edge: IDENTICAL native vs fallback at all 10 checkpoints. Dense 60-frame pixel diff native vs fallback <= 0.15/255
   mean (dust motes only). Sprites visible in fallback (fb-035). NOTES claim true.
m3 pool off flame - CLOSED at 1280 from 20% on (glow centre 16px from wick). Residue: new m5.
m4 wipe shadow edge - REGRESSED in a new form (new m3).
m5 reduced sprites - CLOSED (red-000, redfb-000: opacity 1, final transforms). Phone hides tablet/pile by design (css:4).
m6 native --p - CLOSED (grep --p = 0 in css and js).
m7 easing - CLOSED mostly: cubic-bezier(.42,0,.28,1), overlaps. Residue m6.
m8 pile on pen - CLOSED (desk-035: pile on scroll corner, clear of pen).
m9 copy - CLOSED (Study/plan, Ward cases, Today). Phone title 13.65px, but see M2.
m10 ring wipe - mechanism changed to rotating mask, but see M1.

## Defects
M1 MAJOR - css:1 .ring-sweep clip-path polygon = right half only, @keyframes fill rotates it -180deg to 0.
   The ring only ever shows a HALF arc: half-full at range start (left half), half-full at the end (right half),
   all four cards identical 50%. Spec "progress ring that fills with scroll" not met; reduced shows the same half.
   Shots z-cards.png (rows = desk-080, desk-100, red-000, fb-080, fb-100, dense-048), desk-100.
   Fix: two-half technique (second half-mask revealed after 50%), or conic layer under a rotating mask that starts
   fully hidden; per-subject end value.
M2 MAJOR - css:1 .book b{overflow-wrap:anywhere}: subject names break mid-word, no hyphen.
   1280: "OPHTHALMO/LOGY", "NEUROPSYC/HIATRY" (desk-100, red-000). 390: "OPHTH/ALMOL/OGY", "NEURO/PSYCHI/ATRY",
   "PEDIAT/RICS" (phone-090, redphone-000, z-phone.png). Reads broken on the final frame. NOTES M1 row "wrap at any
   word boundary" is false - it wraps inside words. Fix: overflow-wrap:normal + a clamp small enough that the longest
   word fits beside the 42px ring (or ring above text on narrow cards; hyphens:auto with lang=en as last resort).
m3 minor - css:1 .daily-mask clip-path ends at inset(0) = the paper's own box: the 0 30px 80px drop shadow is clipped
   away entirely, the top roll (.paper:before top:-11px) is cut flat, and the rotated paper's corners are sliced square.
   z-paper-corners.png, desk-100. NOTES "preserving its shadow" is false. Fix: end the wipe at negative insets
   (e.g. inset(-30px -60px -110px -60px)) or put the shadow on an unclipped sibling.
m4 minor - css:1 .shaft:after grain (opacity .18 overlay) inside a screen-blended, 210%-sized shaft: at ~24-31%
   (dense-014..018, z-shaft-pile.png top right) it reads as a grey TV-static veil over the wall, not a warm beam.
   No seam/hard edge seen. Fix: grain much lower or confined to the beam band.
m5 minor - css:1 .candle-pool gradient fixed at 79.7% 46.2% of the viewport. Under object-fit:cover at 390x844 the
   wick maps to x~588 (off-screen), so the phone glow sits on the scrolls/wall (phone-050). At 1280 the pool range
   (0-24%) differs from the plate (0-20%) and starts at scale(.72): glow 97px off the wick at 0% (opacity 0) and 26px
   at 10% (opacity .52). Fix: same range as plate; phone rule for the gradient position. Note: the plate paints an
   UNLIT wick - there is no flame to sit on; glow sits on the wick.
m6 minor - motion dip ~68-73% (frame-to-frame mean diff 0.12-0.27 vs 1-8 elsewhere, dense-040..043): heading ends,
   ENT card ease-in barely moving. "Every inch" nearly, not fully, met. Fix: start .ent at 68% or ease-out its start.

## Passes (checked, not trusted)
- node --check spike.js OK. 0 broken images, Cinzel loaded, no horizontal overflow, every probed pass.
- Heading: line 1 mid-rise 55%, done 60%, line 2 mid-rise 65% (z-desk-sheet.png). Copy bottom 155 vs paper top 235
  (1280), 98 vs 256 (390); same in reduced. No collision.
- Cards: gold gradient border + moving sheen; grain faint; no banding at DPR 1. Rings 42px all four at rest.
- Animated properties: keyframes use transform, opacity, clip-path, filter only; no transition; JS writes only
  --delay/--edge-delay (fallback) and a canvas (dust).
- No Clepsydra: grep "clep" = 0 in all 4 files; none seen in any frame. No emoji, pills, side-tabs.

## Console errors
0 across 11 passes (desk 10, fb 10, phone 4, fbphone 4, red 1, redphone 1, redfb 1, dense 60, densephone 60,
densefb 60, check 3). Method: CDP Runtime.exceptionThrown + Runtime.consoleAPICalled (error/warning/assert) +
Log.entryAdded (error/warning).

## Could not verify
- Real Firefox/Safari (fallback simulated in Chrome). Frame rate/jank (settled frames, no trace).
- Banding at high DPR (DPR 1 only). Dust drift over time.

Video: D:/tmp-spike-ref3b/spike-scroll.mp4 (1280x800, 60 f), spike-scroll-phone.mp4 (390x844, 60 f),
spike-scroll-fallback.mp4 (1280x800 forced fallback, 60 f).
