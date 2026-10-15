# Shot 1 layers - looker report (2026-10-15)

Looked at: `paint/shot1-sky-dark-c.png` (base), `shot1-cloud-mid-a.png`, `shot1-cloud-near-a.png` (+ originals on black), against `paint/city-dark-3.png`, `paint/kaggle/shot1-sky-dark-k8.png` (via LOOK k8 notes) and frame 0 of `app/assets/city/shot2-dark.mp4` (1350x900).
Composites: scratchpad `l1look/` (comp.py, crops.py). Owner previews: `build/shot1-layers-preview/start.jpg, mid.jpg, end.jpg` (1350 wide, q88).

Composite recipe used (assumption, page code not read): start = mid at its place, near down 60%; middle = base x1.05, mid up 4%, near down 30%; end = base x1.05, mid up 8%, near at 0. Mid shift is my guess; brief only said "mid at its place" at start.

| # | Check | Verdict |
|---|---|---|
| 1 | Base style vs city-dark-3 | PARTIAL |
| 2 | Base layout | PASS (minor notes) |
| 3 | Cloud layer palette, brushwork, alpha edges | FAIL (mid), PARTIAL (near) |
| 4 | One painting at 3 moments | FAIL |
| 5 | End: near covers frame; cut into shot 2 | FAIL |
| 6 | Sharpness at 1350x900 | PARTIAL |

## 1. Base vs city-dark-3 - PARTIAL
Palette matches well: indigo sea and sky, amber lamps, lavender-grey cloud with amber underlight. Same night. Not matched: finish. City plate is crisp, high detail, rendered, with sharp edges on stone and lamps. Base is a soft impasto, blocky dab marks, low detail; sky clouds have a stair-stepped, pixel-block edge at 100%. Reads as a different (looser, plainer) painting, though far closer than the Kaggle plates. Sea at 100% (side crop vs city sea) is similar in grain and stroke - that part holds. The cloud bank in the base is the weakest area (flat dabs, little form) versus the city's detail.
Owner's "sharpness far from the city" complaint: improved, not solved.

## 2. Base layout - PASS
Horizon ~41%. High sky, about ten plain dot stars. Spark with glow far left (~19%) on the horizon, a thin line of 7 small lamps trailing right, orange city glow at right horizon, cloud bank filling the lower ~45% with a scalloped top. No text, people, birds, moon disc or flare.
Notes: glow at right is strong but reads as city, not dawn (as k8). The lamp line is evenly spaced and a bit floaty on open water (no coast line visible, only lamps) - fine at motion speed. Bank top edge is scalloped and fairly defined, not "soft and broken" as briefed.

## 3. Cloud layers
- **Palette:** both match the base well (lavender-grey, amber underlight). Near is a touch lighter and warmer/greyer-cream than base clouds.
- **Brushwork: MISMATCH, three different finishes.** Base = soft dab impasto. Mid = a frosted-glass / emboss filter swirl texture (looks like a post-effect, not paint), blocky. Near = smooth, fine gouache with wispy smoke, noticeably finer and more refined than base. Next to each other (composite crops cmp3/cmp4) mid and near look like they come from two other paintings.
- **Mid alpha edge: FAIL.** 98.5% of pixels are exactly 0 or 1; ~1.7 px of ramp per edge crossing. At 100% the top edge is a hard cut around the cloud tufts, with a faint dark rim where black was keyed out. Slides across the sky as a cut-out.
- **Near alpha edge: PARTIAL.** ~6 px ramp, soft enough. But the wispy smoke strands at its top, keyed from black by luminance, come out as dark plum-brown smudges (they were pale smoke on black; their colour does not match what is behind them). In the middle/end composites these read as dirty stains at the cloud top edge, and in the start moment they show as dark smudgy patches along the bottom edge. No bright halo seen.

## 4. One painting? - FAIL
- Start: base sea/horizon intact, but mid covers the whole coast: spark half-hidden behind a cloud tuft, only 2 of 7 lamps visible, sea reduced to a sliver. The brief's set piece (spark, coast, lamps) is mostly lost before the move even starts. No tonal seam between mid and base bank (similar tone), but the frosted texture of mid vs the dab texture of base is visible as two surfaces. Near's dark wisps at the bottom corners look pasted.
- Middle: near's fine wisps over mid's frosted clouds = two painting styles stacked; the near top edge looks pasted with the plum smudges. Brightness steps up (mean luma 69 start, 75 middle, 78 end; base alone 61) - gradual, no jump.
- End: see 5.

## 5. End moment - FAIL
Near at offset 0 does NOT cover the frame. Measured on alpha: first rows with any alpha>0.5 is row 231 (23%); mean alpha by tenth of height from top = 0, 0, .03, .26, .54, .91, .98, 1, 1, 1; fully opaque across the whole width only from row 699 (68%). In the end composite the top ~35% still shows night sky, stars, the horizon with glow and a strip of sea. Cannot be fixed by offset or scale: to cover the frame at scale 1 the layer would need to be ~3x its current height in opaque terms (only the bottom 32% is solid); scaling it to cover would blur it 3x.
Cut into shot 2 frame 0 (luma = 0.2126R+0.7152G+0.0722B, 0-255):

| | mean | top half | bottom half | mean RGB |
|---|---|---|---|---|
| shot 2 frame 0 | 63.7 | 37.1 | 90.3 | 53, 64, 87 |
| end composite (near at 0) | 78.0 | 56.6 | 99.5 | - |
| near layer, opaque pixels only (what a full cover would be) | ~98 (104 below row 699) | | | warm lavender-cream |

A covered frame would be luma ~98-104 and warm; shot 2 frame 0 is 64, cold blue, dark sky on top (37) and blue-white fog only in the lower third. Cutting from full cover to frame 0 = a large drop (about -35 luma overall, -60 top half) and a hue change (amber-lavender to cold blue-grey). Shot 2 frame 0 also is NOT a cloud-filled frame: tower, sea, city already visible. A hard cut will read as a pop. Needs either a longer dissolve out of the cloud, a cover cloud darkened/cooled to ~70 luma and bluer, or a shot 2 that starts inside cloud (not something I can fix).

## 6. Sharpness at 1350x900 - PARTIAL
Base and near are crisp enough at site size, no smear; downscale 1536 to 1350 keeps stroke marks. Mid is crisp but its texture is the frosted artifact (reads as noise, not paint). Near is the sharpest layer and sharper than the base, which makes the base look soft beside it in the middle moment. Against the city plate all three layers are softer and plainer.

## Fixes - NO new painting needed
1. Mid alpha: Gaussian-blur the alpha 6-10 px (and erode ~2 px) to kill the hard edge and the dark rim. Script on `shot1-cloud-mid.png` -> new `-a` copy.
2. Near alpha: keyed dark wisps. Premultiply/decontaminate: for pixels with alpha<0.6, replace RGB with the nearby solid cloud colour (colour decontaminate), or lift alpha floor so thin smoke is dropped (alpha = smoothstep(0.12, 0.5, lum)). Removes the plum stains.
3. Mid position: stop mid hiding the whole coast. Start mid lower (so its top sits at ~60-65%, below the lamp line) and slide it up only once the camera moves; keep spark and lamps visible at start.
4. Near end-state: it cannot cover alone. Either stack three copies of near (mirrored alternately, overlapping 40-50%) as a tall layer - gets full cover, repeats the pattern, hide with mirroring - or accept partial cover plus a fade of the whole stage to a flat cloud tone before the cut.
5. Tint: grade the near layer and mid toward the base cloud (slightly cooler, -8% brightness) and ease the end cover toward cold blue-grey ~70 luma before the cut to shot 2 (shot 2 frame 0 is 64 and cold).
6. Cut: dissolve over >=0.4 s rather than a hard cut.
7. Light grain/stroke texture overlay on mid to hide the frosted filter pattern: weak; better repaint.

## Fixes - REPAINT needed
A. Mid layer: repaint in the base's brushwork (current one has the frosted filter look). Paint with a soft, broken top edge, bank top ~60% down.
B. Near layer: repaint taller (1536x2048 or two seamless 1536x1024 sheets) with solid cloud from ~35% down and the wispy top; same brushwork as base (at present finer and brighter than base). Painted directly on mid-grey/transparent if possible to avoid keyed fringe.
C. Base: optional repaint of the cloud bank and sky cloud edges for the city's crispness (it is the PARTIAL on check 1); sky blockiness in dab edges.
D. Match: all three layers need ONE brushwork. Easiest is to repaint mid and near in the same Codex session as the base, with the base attached as the style reference.

## Verdict
Not ready. Base alone is a usable plate (layout good, style partial). Mid and near do not match base finish, mid alpha edge is hard, near cannot cover the frame at the end, and the mid hides the set piece at the start. Do the no-repaint fixes 1-3 and 5 first and look again; repaint near (taller) and mid in base style before building page code.
