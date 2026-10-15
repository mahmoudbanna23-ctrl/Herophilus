# Shot 1 film from plate k6, two takes - LOOK (independent checker)

Date 2026-10-15. Checker did not make the films. Nothing edited except this file.

## What was looked at
- Plate: `progress/redesign/paint/kaggle/shot1-sky-dark-k6.png`.
- Stills: `tools/city-film/ai-film/shot1-k6/out/still-up-{a,b}-{first,mid,last}.png` (frames 0/40/80 of `up2x-a.mp4` = seed 11, `up2x-b.mp4` = seed 24; both 1440x960, 24 fps, 81 frames).
- Extra frames 20, 60, 76 of each take, ffmpeg, in the session scratchpad `k6look\` (`a-20 a-60 a-76 b-20 b-60 b-76`, contact sheets `grid-a.png`, `grid-b.png`: 6 frames each, 0/20/40/60/76/80).
- Shot 2 first frame: frame 0 of the shipped `app/assets/city/shot2-dark.mp4` (same stand-in as the k8 look, not the new `ai-film/shot2` take).
- Limit: 6 frames per take seen. Flicker between frames cannot be judged. No warping or cloud-shape change was seen between those frames.

## Measured, whole frame (YAVG / UAVG / VAVG)
- Plate k6 70.2 / 138.4 / 121.7.
- A first 70.6 / 138.3 / 122.2. A last 89.0 / 136.0 / 125.3.
- B first 70.2 / 138.5 / 122.0. B last 90.5 / 136.7 / 125.1.
- Shot 2 first 70.7 / 139.3 / 121.3.
- First frames match plate and shot 2 within 0.5 luma. Last frames are brighter than shot 2's first frame by +18.3 (A) and +19.8 (B) luma; hue off by U -3, V +4 (slightly warmer-purple grey). k8 gap was +24 (A) and +21 (B), so k6 is a little closer.
- Top 10% strip of the last frame: A luma 46 (dark sea), B luma 72 (cloud mixed with sea).

## Verdict per point

| # | Point | Take A (seed 11) | Take B (seed 24) |
|---|---|---|---|
| 1 | Dives forward and down into cloud | PASS. Horizon 27% (first), 13% (20), off top by ~40. Clouds grow steadily. | PASS. Same path. |
| 2 | Light stays LEFT and in frame to last frame | PARTIAL. Stays at x about 20% to frame 60, lamp lit and clear. By frames 76-80 the tower is cropped at the top edge, tiny, no glow, lamp not lit. In frame, but not as a light. | FAIL. Lit and left to frame 60. A sliver at the top edge at 76. Gone from the last frame. |
| 3 | Last frame fully inside soft cloud, no sea or lamp strip | FAIL. Top ~24% of the last frame is dark sea, a broad brown headland, 6 lamps and the tower stub. | FAIL, near. Top ~10% is a strip of sea, brown headland and 2 lamps (more at the right edge). Rest is all cloud. |
| 4 | Painted gouache holds | PASS. Clouds read as soft painted shapes. Plate's bristle grain is smoothed away by the upscale (softer, more cel-like than the plate). | PASS, same note. Faint scratch-like streaks in the lower cloud of the last frame. Minor. |
| 5 | Nothing new, nothing melts | PARTIAL. No new objects. But the thin jetty grows into a wide brown shelf and the lighthouse turns from a lit tower into a dim box with side blocks by the last frame. It reads as a different, looser object. | PASS. No new objects. Tower solid while in frame (frame 60), headland and lamps hold. It leaves the frame, it does not melt. |
| 6 | Colours and brightness | PASS vs k6 plate (first frame matches within 0.5 luma). Last frame vs shot 2: luma 89.0 vs 70.7, +18.3. | PASS vs plate. Last frame luma 90.5 vs 70.7, +19.8. |

## Winner
**B**, for the cut into shot 2: the last frame is about 90% cloud, the sea strip is short, nothing in it looks wrong. A keeps the tower in frame but only as a dim stub under a large 24% sea and headland band, and its jetty and tower change shape.

## Against k8 take A (earlier best)
Same, not better. k6 B ends about as deep in cloud as k8 A (strip about 10% vs a thin strip) and loses the lighthouse the same way; k6 A is worse. The brightness gap is a little smaller (+19.8 vs +24). Neither k6 take meets point 2 and point 3 together. Nobody met them.

## Fixes that need no new film (B)
- Hide the strip: over the last ~10 frames, ease a push-in crop anchored to the bottom, scale about 1.12 to 1.15 (cuts the top 10 to 13%). Source is 1440x960, so softness is small. For A the crop would need about 1.35, too soft; A is not fixable this way.
- Cut the brightness gap: darken the last 6 to 8 frames by about 19 luma, or a 6 to 8 frame crossfade into shot 2's first frame. Optional small warm shift (U +3, V -4) to match hue.
- Optional: re-add brush grain after the upscale.
- Not fixable without new film: keeping the lit lighthouse in frame to the end together with a cloud-only last frame. Owner choice, as before.

## Not covered
- No frame-by-frame flicker check.
- The new `ai-film/shot2` take was not compared; shipped shot 2's first frame stands in.
