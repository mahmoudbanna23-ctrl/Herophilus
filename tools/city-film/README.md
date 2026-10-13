# city-film kill test

Question: does ONE painted plate, projected onto a few simple solids, survive a real camera move without
reading as sliding cardboard? Plate: `progress/redesign/paint/kill-pharos-dark.png` (full) and
`kill-pharos-dark-clean.png` (tower removed).

## Re-run

    "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python tools\city-film\kill_test.py

About 40 s. Rebuilds the scene from scratch and writes everything to `D:\scratch 2026\city-kill\`:
`frames\land|up\f01..f12.png`, mattes (`tower-only-*`, `card-only-*`), `report.json`, four clips
(`kill-land-12fps.mp4`, `kill-land-6fps.mp4`, `kill-up-12fps.mp4`, `kill-up-6fps.mp4`; ping-pong 1..12,11..2, x4),
`contact-land.png`, `contact-up.png`. ffmpeg is found on PATH or under the WinGet Gyan.FFmpeg package.
`KT_SAMPLES` env var sets Eevee samples (default 24).

## What it builds (Version A only)

- P: 35 mm, 36x24 sensor, pitched 8 deg down = the plate's viewpoint.
- Far card at 400 units, exactly P's frustum, clean plate. Tower = square frustum (flared, corner-on) + 8-sided prism +
  round drum + dome cone + two brazier posts, fitted by eye to the 768 px plate (corner x=145, parapet x=33..268).
- Every surface is emission-only; the plate is projected from P per pixel in the shader (no UV Project, no subdivision).
- R: 12 frames on one straight line through P (10 right/5 down/4 forward in total, 70 units from the tower).
  Landscape 1280x800 at 50 mm; upright 640x920 at 55 mm (vertical fit). Both narrower than P.
- World is pure magenta so any edge leak shows.
- Version B (water/ground plane) NOT built.

## Measured (final run)

| check | land 1280x800 | up 640x920 |
|---|---|---|
| magenta pixels, frames 1..12 | 0 in all | 0 in all |
| tower texture patch, frame 1 to 12 (px, % width) | -283 px, 22.1 % | -321 px, 50.2 % |
| far-card patch, same frames | -42 px, 3.3 % | -55 px, 8.6 % |
| tower minus far (relative) | 18.8 % of width | 41.6 % of width |
| analytic cross-check, near-corner top vs far point | -317 vs -45 px | -359 vs -57 px |
| source px per output px, closest frame (12), horiz / vert | 0.80 / 0.82 | 0.71 / 0.72 |

Source px per output px is below 1, so the paint is magnified 1.2x (land) to 1.4x (up): some softness, no big stretch.
Measured on the near faces of the square tier against the 1536 px plate.

Doubled-tower check: the clean plate was looked at (no tower), the card was rendered alone at frames 1 and 12
(`card-only-f01.png`, `card-only-f12.png`) and viewed: harbour wall, water and city show no tower remnant.
No numeric test of this was run.

## Known flaws

- Tower sides pick up thin slivers of sky/water texture where the solids are slightly wider than the painted tower
  (faint darker bands beside the lantern and the left face, small boxes round the braziers at frame 12).
- Tower fit is by eye from the 768 downscale; hidden faces are never painted.
- The patch tracker picks the most textured patch itself; the silhouette-edge measure was dropped (rows hit
  different tower tiers between frames) and replaced by the analytic cross-check.
- Leak margins were tuned by magenta count per size; change the camera move and re-check.

## Round two (kill_test2.py)

Round one verdict from the owner: flat, nothing alive, cheap. Round two keeps the camera travel and fixes those three.

Re-run (about 3 min, one command):

    "C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" --background --python tools\city-film\kill_test2.py

`KT_PREVIEW=1` renders 3 low-res frames to `round2\preview` only. `KT_TOWER=v1|v2` forces the tower plate (default: `kill-pharos-dark-v2.png`
if it exists, else the original). Output: `D:\scratch 2026\city-kill\round2\` (`frames\f001..f072.png` 16-bit, `kill2-land.mp4`,
`contact2-land.png`, `report2.json`, `tower-tex.png`).

What changed:
- Background is three solids, all projected from P with the CLEAN plate: sky card at 3500; a water plane tilted so its horizon is plate
  row 128 (P is 40 units above it); a shore strip whose depth per column equals the water plane's depth at the shoreline row, so
  strip and plane meet exactly (no seam by construction). Strip top fades to alpha 0 over plate rows 100..124 into the sky.
- Tower: matte = |plate - clean| inside the dilated solid silhouette; colours are grown outward past the matte, so geometry wider
  than the paint carries stone colour, not sky. Dome rebuilt as a lathe on the painted profile (stem and ball included); round
  one's cone was the source of the sky-coloured hat.
- Air: 3 mist planes (noise alpha, peak 0.25/0.24/0.16, edges fade to 0, drift at different speeds and directions), 4 additive
  fire glows (+-25 % smooth flicker), water shimmer in the water shader (+-8 % on bright streaks, fades out beyond about 400 units).
- Haze: water ramps toward a cool blue with depth (max 0.22), shore strip flat 0.08, tower and sky untouched.
- Camera: 72 frames, smoothstep ease, same travel as round one frames 1..12, plus a 0.9 unit arc, slight yaw and 0.25 deg roll.
  1440x900, 64 samples, 16-bit PNG, error-diffusion dither into yuv420p. Clip = move, hold 1 s, reversed move, hold 1 s, x3 (573 frames).

Measured and flaws: see `round2\report2.json`. Known: the right-hand flank of the lantern drum and octagon, seen from the far end of
the move, is the plate's edge colours stretched (reads as a shaded side, not a correct one); the finial ball is faceted; the breakwater,
ships and pier are painted on the water plane, so they slide as ground, not as objects; the sky parallax number includes the yaw.
