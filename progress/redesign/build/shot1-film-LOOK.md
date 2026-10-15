# Shot 1 film, two takes - LOOK (independent checker)

Date 2026-10-15. Checker did not make the films. Nothing edited.

## What was looked at
- Plate: `progress/redesign/paint/kaggle/shot1-sky-dark-k8.png`.
- Stills: `tools/city-film/ai-film/shot1/out/still-up-{a,b}-{first,mid,last}.png`.
- Extra frames at 25% and 75% of `up2x-a.mp4` and `up2x-b.mp4` (both 1440x960, 24 fps, 3.375 s), ffmpeg, in `D:\scratch 2026\shot1-look\` (`a-25 a-75 b-25 b-75`, contact `grid.png`; spark close-ups `spark.png`).
- Shot 2 first frame: `tools/city-film/ai-film/shot2/` has NO first-frame still (only STATUS.md, item.json, shot2.py and the 720x480 plate jpg). The first frame used is frame 0 of `app/assets/city/shot2-dark.mp4`, the shipped shot 2 film, saved as `shot2-first.png`. It is NOT the new `ai-film/shot2` take. The shipped film's frame 0 is the tower-in-mist-plus-city picture, so its look should hold for the new take too (assumption).
- Limit: only 5 frames per take were seen (first, 25%, mid still, 75%, last). Flicker between frames cannot be judged from that. What can be said: no frame showed warping or a changed cloud shape, and the cloud forms in a-25/a-75 and b-25/b-75 match the mid and last stills of the same take.

## Measured, whole frame (YAVG / UAVG / VAVG)
- A first 75.2 / 137.8 / 122.9. A last 94.9 / 137.5 / 124.7. B last 91.3 / 137.8 / 124.7.
- Shot 2 first (shipped film) 70.7 / 139.3 / 121.1.
- Hue (U, V) matches within 2 to 3 steps everywhere. Brightness does not: both last frames are about 20 to 24 luma steps brighter than shot 2's first frame.

## Verdict per point

| # | Point | Take A | Take B |
|---|---|---|---|
| 1 | Dives down into cloud | PASS. Horizon at 41% (first), 34% (25%), 26% (mid), 13% (75%), gone at last. Clouds grow. Accelerating but steady, straight down. | PASS. Same path, horizon a little slower: ends with sea band still about 14% of frame. |
| 2 | Spark left and small | PARTIAL. Stays small, left (x about 18% of width), visible through 75%. Gone off the top by the last frame. | PASS. Small, left. Still visible at the last frame, but only as a cropped glow at the top-left edge with the dotted lights. |
| 3 | Last frame inside cloud, cuts into shot 2 | PASS, marginal. Cloud fills about 92% of frame. Thin dark sea strip at the top edge with a stray smear. | FAIL. Dark sea strip about 14% tall, with the glow and dotted lights, at the top. Reads as "nearly in cloud", not inside. |
| 4 | Painted look holds | PASS with a note. Smooth gouache, no photo look. But the plate's visible bristle and impasto texture is smoothed away by the upscale (k8 has brush grain; the films are softer, more cel-like). | Same note, PASS. |
| 5 | Nothing new, no melting | PASS. No birds, moon or text. Lighthouse keeps tower shape with white cap (mid close-up). Stars thin out as the sky leaves frame, that is cropping, not melting. | PASS, weak. Lighthouse at mid reads as a white-capped dark shape, slightly figure-like (see `spark.png` bottom right). Still a tower silhouette but looser than A. No new objects. |
| 6 | Colours match k8 and shot 2 | PASS vs k8 (navy sky and sea, lilac-grey cloud, amber glow). vs shot 2: hue ok, but last frame is dull lilac-grey at luma 95, shot 2 opens at luma 71 with dark night sky on top and a blue-white mist band at the bottom. | PASS vs k8. vs shot 2: same brightness gap (luma 91). |

## Does either last frame cut into shot 2?
Neither is clean. Shot 2 frame 0 is a dark starry sky over the tower and city, with mist only in the lower 35%. The shot 1 last frame is full-frame lilac cloud. A hard cut shows a jump from "all cloud" to "sky, tower, city". That is the intended dive-through-the-cloud-and-emerge idea, so it can work, but only with a short crossfade or a matching brightness. A cut straight on the last frames will show a brightness jump of about 20 to 24 luma steps.

## Rank
1. **A wins.** Ends deeper in cloud, lighthouse keeps its shape better. Fault: spark leaves the frame at the very end.
2. B. Main fault: last frame still shows the sea band, glow and dotted lights at the top, so it is not inside the cloud and the ending is not a clean cut. Lighthouse shape looser at mid.

## Fixes (A)
- Optionally trim or extend so the last frame carries no sea strip (a few more frames of dive, or a slight upward crop of the last 3 to 4 frames). The stray smear at the top edge goes with it.
- Darken the last 6 to 8 frames by about 20 luma steps, or use a 6 to 8 frame crossfade into shot 2, to cut the brightness gap.
- If the spark must stay in frame to the end, A fails that point as made. Then pick B and accept the sea band, or reshoot A with less dive depth. Owner choice, not decided here.
- Optional: re-add brush grain after the upscale to restore the plate's texture.

## Not covered
- No frame-by-frame flicker check (only 5 frames per take).
- The new `ai-film/shot2` take was not compared; the shipped shot 2 film's first frame was used.
