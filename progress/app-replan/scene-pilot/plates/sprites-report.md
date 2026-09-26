# P5 sprite cut report — 2026-09-26 (round-4 fix: tablet-half only)
| sprite | source | box | shift/scale | seam | drift | result |
|---|---|---|---|---:|---:|---|
| letters-0 | transparent | [642,522,160,90] | [0,0] | 0.00 | 0.00 | pass |
| letters-1 | obj-letters-1.png | [642,522,160,90] | scale 0.084 | — | — | pass |
| letters-few | obj-letters-few.png | [642,522,160,90] | scale 0.082 | — | — | pass |
| letters-many | obj-letters-many-stack.png | [642,522,160,90] | scale 0.081 | — | — | pass |
| tablet-blank | obj-tablet-blank.png | [932,458,200,90] | scale 0.104 | — | — | pass |
| tablet-half | obj-tablet-half.png | [932,458,200,90] | scale 0.104 | — | — | pass |
| pile | obj-pile.png | [1160,458,200,90] | scale 0.086 | — | — | pass |
| gilt-terracotta | edit-4.png | [1066,217,50,216] | [0,0] | 8.52 | 2.76 | pass |
| gilt-sage | edit-4.png | [1117,219,48,214] | [0,0] | 9.48 | 3.78 | pass |
| gilt-violet | edit-4.png | [1166,219,43,214] | [0,0] | 9.81 | 4.12 | pass |
| gilt-blue | edit-4.png | [1209,221,72,212] | [0,0] | 5.54 | 4.28 | pass |
| ribbon | ribbon-raw.png | 48×300 | scale 0.221 | — | — | pass |

Fix1 downscale: `place()`/ribbon nearest-neighbour → `boxDown()` area-average box filter, colour premultiplied by alpha, alpha averaged plain.
Fix2 tablet-half (round-4 corrected): round-3's stroke/fill leaked onto the frame (604/680 diff px there, 76 wax). Now: wax mask = blank object px, lum<55, eroded r+2=10 src px inward (r=8=ceil(0.8/scale)) so fill can't reach frame; stroke seeds = left-half wax px, |half−blank| max-chan>25 (strokeN 1218); fill = each dilated wax px copies the strongest nearby seed's own half RGB (darkest-neighbour fill washed the signal to near-zero — these strokes are lighter than the wax, not darker). Box px (a>20, scale 0.104): frame diff>25 = 0 (≤10); wax-left diff>25 = 123 (≥60); wax-right = 0 (≤10). All pass.
Fix3 letters-many: new `edits/obj-letters-many-stack.png`, 9 keyed letters-1 copies stacked bottom-up t=25 src px/layer, ±2% x-offset alternating, 6%/level darken below top. Envelope widths (a>89): letters-1 112, few 112, many 112 — match.
Fix4 ribbon: extra despill post-scale, a>0 clamp G≤max(R,B)+4 (general keyed despill tightened 18→12; ribbon needed +4).
Self-checks: tablet frame/wax-left/wax-right above; green-spill>max+12 worst=4 (pass, all keyed+ribbon); letters envelope widths within 6px (pass). Other 11 outputs sha1-confirmed byte-identical before/after this round (letters-0/1/few/many, tablet-blank, pile, ribbon, gilt x4) — full hashes in git history of this file / round-3 entry above.

Script final line: `12 passed`
