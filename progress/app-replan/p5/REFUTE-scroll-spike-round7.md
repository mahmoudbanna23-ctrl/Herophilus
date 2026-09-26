# REFUTE round 7 - P5 scroll spike, fix-6 (props v2 + real entrances) - Opus, 2026-09-26

Verdict: PASS. 0 blocker, 0 major, 1 minor, 2 cosmetic, plus notes.

Under review: progress/app-replan/p5/scroll-spike/ (spike.css keyframes far/mid/near, index.html prop srcs, props/*.png, NOTES.md).
Probes: D:/tmp-spike-ref7/*.mjs. probe/mydip/ring/mysweep/wipepx are the round-6 instruments copied from D:/tmp-spike-ref6b
with the output path switched, so the numbers sit on round 6's scale. props.mjs is new for this round. Stills are in D:/tmp-spike-ref7/shots/.
The film is D:/tmp-spike-ref7/film/ (capture.mjs = D:/tmp-spike-film6/capture.mjs with the out dir switched; 360 frames, h264 crf 28, 30 fps).

| # | Check | Verdict | Evidence (own run) |
|---|---|---|---|
| 1 | Raster >= 2x display | PASS | All three props are 600 px wide RGBA (letters 600x411, tablet 600x380, pile 600x351). Measured offsetWidth: 300 at 1600 (2.00x, exactly the bar), 243 at 1280 (2.47x), 195 at 1024 (3.08x), 130 at 390 (4.62x). Crop crop-rest-1280.png (1:1, 60%): sharp, clean silhouettes, no grey halo on the dark plate. Only 0.9% of the partial-alpha edge pixels are near #808080, and the edge mean is warm (166/129/95). The drop-shadow renders under each prop. |
| 2 | Entrances 15-60% | PASS, see m1 | props.mjs, 0.5% steps, 1280/1600/1024/390. Opacity times every ancestor = 1 at every step, so 0 semi-transparent visible frames. Each prop sits wholly off-frame until 28.5% (letters, from the left), 29.5% (pile, from the right) and 30.5% (tablet, from the right). After that, x is monotonic with no step over 8% of the width (0 jumps). Fully in at 39.5% / 34% / 35%. Tablet and pile overshoot by 25 and 24 px and ease back by about 53% and 56%. The shadow is a filter on the element, so it travels with the prop. sheet-entry.png (29, 31, 33, 36, 40, 48%): opaque, sliding, no ghost. Phone 390x844: tablet and pile are display:none; letters enters from the left at 28%, opacity 1, and rests with 28% of it past the left edge (same rest transform as HEAD). Reduced motion 1280 and 390: all props at the final rest transform at 0%, and there is no scroll range. |
| 3 | Other entrances | PASS | .book: opacity 0->1 together with translateY(120px) scale(.82)->none over the same range, so it moves while it fades. .line-content: translateY(105%) inside an overflow mask. .daily-mask: clip-path only. .candle-pool, .shaft and .book:after are light effects, not items. No entrance is a pure opacity fade. |
| 4a | Title sweep 320-1600 step 10 | PASS | mysweep at heights 600/800/1024: 0 failures each. Columns: 1 at 320, 2 at 710, 4 at 1080. |
| 4b | Ring | PASS | ring.mjs: min 2.8, max 5.4 deg per 0.25%. |
| 4c | Stall | PASS | mydip: the 85% level is 0.544 (round 6: 0.544), so the bar is 0.218. Minimum across 60-76% is 0.317 at 64.5% (ratio 0.583, 0 fails). Sums: 44-60% 26.99 (was 15.5; the props now move until 58%), 60-76% 13.17 (was 13.3), 76-86% 9.30. |
| 4d | Wipe | PASS | wipepx: top edge fixed at y=224 on desk and 178 on phone. It advances 17-18 px per 1% on desk and 13-14 px per 1% on phone from 47% to 71%, is complete by 71-72%, and shows 0 px changed at 44-46%. |
| 4e | Console | PASS | 0 errors in the film.mjs passes (desk, phone, red, redphone, w1600) and in every probe. 0 broken images. |

## Defects
- m1 MINOR. spike.css:1, `@keyframes far` 82% `translate(-7vw,.3vh)`. For a prop entering from the left, -7vw is short of the rest position (-5vw), not past it. The letters therefore do not overshoot. They stop (x 30->32 px across roughly 47.5-49.5%) and then lurch another 24 px rightwards by about 52%. That reads as stop-start, not settle, and in spike-desktop-1280x800.mp4 it falls at about frames 171-187 (computed from scroll position, not watched). Fix: 82% `translate(-3vw,.3vh)` (past the rest position, then back to -5vw), the same shape as mid and near.
- c1 COSMETIC. NOTES.md:24 claims the letters "overshoot -7vw -> rest -5vw". That is wrong (see m1). Fix it when m1 is fixed.
- c2 COSMETIC. NOTES.md:18 and :42 say the round-5/6 probes are gone. They are still in D:/tmp-spike-ref6b/ (dip, mydip, ring, mysweep, wipepx, ...). This round re-ran them and reproduced the stall table, which closes the builder's "not reproduced" flag.

## Notes (not defects)
- Prop core alpha is about 252/255 (1.2% see-through), inherited from the props-v2 source. It is invisible on the plate.
- At 1600+ the ratio is exactly 2.00x in CSS pixels. On a DPR-2 screen that is 1x device pixels. Only relevant if the rule is meant per device pixel.
- The cards still fade in (opacity 0->1) while rising 120px, so they are semi-transparent over the plate for their whole beat. This is allowed by the rule ("opacity may assist"), but it is the closest remaining thing to the owner's "fading" complaint.
- Phone: at the final state the letters sit behind the subject cards, and at rest 28% of them is off-frame. The rest position is unchanged from HEAD, so this predates this round.
- The props now rest on the painted rod and scroll (the tablet covers part of the rod). This is composition, outside the brief.
