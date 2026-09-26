# Scroll spike notes

| Scroll range | Selectors and result |
| --- | --- |
| 0–24% | `.plate` camera push and `.candle-pool` opacity/scale/translation animate over overlapping ranges. The pool’s origin is the plate flame coordinate and its translation matches the plate travel. |
| 20–58% | `.shaft`, `.letters`, `.tablet`, and `.pile` use overlapping inertial ranges. The shaft is oversized, softly masked on every edge, and reaches zero opacity at 45%. |
| 45–73% | `.daily-mask` wipes only the paper, preserving its shadow. `.line-a .line-content` (52–66%) and `.line-b .line-content` (59–73%) rise separately inside overflow-hidden `.line-mask` wrappers. |
| 70–100% | `.book`, its lit edge, and fixed 42px `.ring` enter in staggered ranges. `.ring-sweep` rotates a clipped conic-gradient mask instead of using SVG stroke-dashoffset. |

Native browsers use the CSS keyframes and each selector’s `--range` token with `scroll(root)`. In the fallback, `spike.js` reads those same `--range` tokens and pauses the same named CSS keyframes at the corresponding local progress; it also assigns the shared 70–100% edge range. Reduced motion shows the final transforms for all three sprites, the full sheet, heading, cards, and rings; dust and animation loops are removed.

| Refuter defect → how closed |
| --- | --- |
| M1 long titles / ring shrink | The ring is fixed at 42px with `flex:none`; title containers flex and titles wrap at any word boundary. |
| M2 fallback drift | Fallback reads native `--range` values and drives the same CSS keyframes for plate, pool, shaft, all sprites, sheet, heading, cards, rings, and edge. |
| m3 detached candle pool | Pool origin was moved to the measured flame area and its transform includes the plate’s camera travel. |
| m4 wipe shadow edge | The clip now belongs to `.daily-mask`, which contains the paper rather than the full screen-sized daily layer. |
| m5 reduced sprites | Each sprite has its final transform and opacity in reduced motion. |
| m6 native custom-property animation | No native `--p` animation remains. |
| m7 snappy easing | All scroll choreography uses the slower `cubic-bezier(.42,0,.28,1)` curve with overlapping ranges. |
| m8 pile placement | The pile was moved upward and left on the desk plane. |
| m9 duplicate copy / small titles | Heading is “Study / plan”, eyebrow is “Ward cases”, and phone title sizing/wrapping was raised. |
| m10 ring wipe | The conic ring is exposed by a rotating sweep mask, not a horizontal inset wipe. |

Known gaps: `node --check spike.js` was run for JavaScript syntax. I cannot render this page, inspect its console, measure the flame or layouts at 1280×800/390×844, verify a real non-supporting engine, or assess high-DPR banding/frame rate here.
