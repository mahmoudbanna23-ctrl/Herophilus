# C2 — 3D test model of the Clepsydra (Blender hand-model)

Stage C2 of `progress/app-replan/p5/PLAN-story-scene-2026-09-27.md`. TEST ONLY — nothing uploaded.
Script: `build_her.py` (this folder). Run:

```
"C:/Program Files/Blender Foundation/Blender 5.2/blender.exe" --background --python build_her.py -- [--res 1600] [--views front,threequarter,side,back] [--no-export]
```

Outputs go to `D:/tmp-her-c2/` (renders `her_<view>.png`, `her-test.glb`, `compare_welcoming.png`).

## Measurements taken off the art (2026-09-27)

Source: `app/assets/clep/welcoming.png` (360x360, alpha bbox x53-306, y23-322), read at 3x upscale.
Scale: 880 px (3x) from wreath tip to shoe sole = 1.20 m, so 1 px (3x) = 1.364 mm.

| Part | Measured (3x px) | Model value |
|---|---|---|
| Disc face | 485 wide; top ~115; edge curve implies bottom ~700 | rx 0.345, rz 0.37, centre z 0.76 |
| Disc edge visible on viewer right | ~40-60 px at ~22 deg yaw | thickness 0.16 m (choice, see Q1) |
| Eyes | centres (470,370) and (650,350), ~95x180 | x +-0.125, z 0.81, half-size 0.066 x 0.122 |
| Pupils | ~65x120, upper-inner in the eye | half 0.044 x 0.078, +0.03 up, 0.012 inward |
| Nose | dot (560,408), ~30 px | r 0.02, z 0.745 |
| Mouth | smile centre (570,515), ~130 wide | z 0.61, half-width 0.09 |
| Ticks | 12, 3 and 9 long bars (~75 px), 12 medium, others short | 12 ticks |
| Toga top edge | (420,630) to (790,470) diagonal | z = 0.55 + 0.43x |
| Shoulder knot ring | (800,445), ~85 px across | centre (0.29, z 0.69), r 0.045 |
| Waist cord | y 680, ends hang to y 770 | z 0.372, ends to z 0.26 |
| Skirt | y 640-810, x 440-765 | z 0.41 to hem 0.205, half-width 0.215-0.235 |
| Legs | x 565 / 650, visible y 810-880 | x +-0.058, thin rods r 0.011 |
| Shoes | ~110 x 70 px | 0.10 wide, 0.17 long, 0.095 tall |
| Arms | tube ~45-50 px; her-right wrist (275,625) | r 0.03, attach z ~0.70 at the disc sides |

Colours sampled (PIL, 3x3 mean, painted = lit, so model base colours are set a touch darker):
face #F67216 · lit rim #FEAD4D · sclera #E9DCC2 · pupil #281409 · nose #491D0B · ticks #4F1E0A ·
cloth #CBBCA7 (shade) · trim #A97637 · leaf #EAC079 · glove #E5DAC1 · arm #F97312 · leg #30180E ·
shoe #FE8A15 · cord #B67E3C · outline #692A0E · mouth #4D2D23.

## Progress log

- 2026-09-27 run 1 (700 px, front): builds clean, 24 named parts, height 1.209 m, EEVEE + AgX Punchy.
  FAULT OF MINE: the concurrency check printed 1 (another agent's blender.exe, 826 MB) and I rendered
  anyway — one short 700 px render overlapped. Every later run waits in a loop for zero blender.exe.
  Run-1 read: orange salmon/washed out under AgX, wreath thin, cord hidden in the skirt, hem trim
  buried, shoes ball-shaped, gloves small, floor too light. Fixed in run 2 (saturated bases, chunkier
  wreath + 6 sprigs, cord r 0.015 pushed out, trim at 1.03x, gloves x1.3, trainer-shaped shoes).
- Runs 3-6: specular 0.2 on the orange, exposure -1.1, wider leaves, one front leaf row, wreath rim band
  limited to 38-142 deg, knot + cord ends seated on the cloth, skirt narrowed (half-width 0.19-0.208),
  boxier shoes. Grain / meander flattened to plain colour for the GLB only (glTF cannot carry nodes).
- FINAL (run 6): 4 renders 1600 px + GLB + compare. Height 1.248 m (wreath sprig tips; disc top 1.13).
  GLB 2,328,168 bytes, 127,028 tris (subsurf level 1 applied), 24 meshes, no Draco/KTX2/meshopt;
  extensions used: KHR_materials_clearcoat, _specular, _sheen. Outline hull is render-only, stripped
  before export. Every render after run 1 waited for zero blender.exe.

## Pose

Welcoming, not A-pose: her right arm out and low with an open palm to the viewer, her left arm relaxed
down with curled fingers. Legs straight, feet slightly splayed. Legs jointed (dense loops at knee
z 0.215 and ankle z 0.10) but not bent; no rig.

## Choices the art never shows — open questions for the owner

1. Disc thickness 0.16 m (~0.23 x width), read off the rim visible at ~22 deg yaw. Thinner?
2. Back of the disc: plain orange grain, slightly domed, no face, no ticks. Correct?
3. Rim: a rounded bezel lip on front and back edge, lighter orange. Or one flat band?
4. Wreath: hugs the rim over the top and wraps to the back face (crown worn on the edge). Or front only?
5. Wreath ornament: a small fan of seven leaves + bead at top centre. The art is too small to read.
6. Toga: a planar diagonal wrap round the disc — from her left shoulder down to her right waist on
   the front AND the back. Real drape/fold-over of the sash at her right waist omitted.
7. Shoulder knot seen from behind: nothing — ring and gathered cloth on the front only.
8. Skirt: closed tube, same all round; cord a closed loop, knot + ends at the front only.
9. Arms attach inside the disc side, at z ~0.70 (mid-height per the sheet check). Shoulders unseen.
10. Legs: hip at z 0.35 hidden under the skirt; visible shin ~0.10 m as in the art.
11. Gloves: thumb + 3 fingers (4 digits), small cuff ring. Glove back unseen.
12. Shoes: trainer shape, high collar at the ankle, flat dark sole. Back of the shoe unseen.
13. Eyes: slightly raised lenses on the face with concentric quad loops (sclera, pupil, glint as
    separate islands); mouth a strip whose top/bottom rows are the lip lines. Both built for later
    shape keys, NOT rigged. Is a raised eye right, or should they be painted flush?
14. No water chamber, no clock hands, no numerals (sheet §3-4). Unchanged.

## Does not look like her yet (read against the nine PNGs)

- Orange reads duller and pinker than the art: sampled face #D55F29 vs art #F57115. AgX desaturates;
  a painted-look shader or a Standard view transform would get closer — owner's call, brief said AgX.
- Wreath reads as wheat/barley: leaves too narrow, too regular, too pale; art leaves are broader,
  fewer, with brown shading and clearer upright sprigs.
- No hand-drawn outline weight: the hull line is thin and even; the art line is thick and irregular.
- Toga is stiff and box-like; the art drape is soft, folds over itself at the knot, and the sash has
  volume. Skirt still reads a bit tall and square.
- Shoulder knot cloth is a ball, not a gathered fold spilling through the ring.
- Pupils smaller and less dominant than the art; lashes thinner.
- Face grain too visible as stripes; art grain is fine and soft.
- Arms thinner and straighter; the art arms curve and taper, stripes sit closer to the glove.
- Gloves stiff and symmetrical; the art hand is a looser, more expressive cartoon shape.
- Disc is slightly taller than the art reads in some poses (rz 0.37 vs rx 0.345) — check thinking.png.

## Test 2 (2026-09-27)

Owner verdict on test 1: "Fix the orange and wreath, keep the other guesses." Only those two changed;
guesses 1-3 and 6-14 untouched. Outputs: `D:/tmp-her-c2/test2/` (4 views 1600 px, `compare_welcoming.png`,
`wreath_close.png`, `her-test2.glb`; `iter/` = my 800 px tuning renders). New flags `--view --exposure
--look --orange-dark --orange-light --rim-light --gold --shoe --glb` (defaults = the test-2 values).

### Orange
Method: PIL, pixels in a face box with hue 0.03-0.11, S > 0.55, V > 0.45; lit area = brighter half;
per-channel median. Same method on art and render. Reference = welcoming.png (compare target).

| | art welcoming | test 1 | test 2 | dE76 / dE2000 (test 2 vs art) |
|---|---|---|---|---|
| face | #FA791B | #DE6C42 (dE76 24, dE2000 9) | #FF7D26 | 2.5 / 1.5 |
| arm | #FD7D19 | #DD7448 | #FF8529 | 4.8 / 1.9 |
| shoe | #FE8B16 | #DC6F45 | #FF9431 | 7.6 / 2.3 |

Nine-pose spread of the art face lit median is wide (#DA681C to #FE7401; mean #E6711E).
Fix: Standard view transform (AgX bent the orange to salmon), exposure -1.6, no look; zero-blue bases
(face/arm ramp #D85C00-#E86C02, rim light #F28210, shoe its own #F28000 - art shoe is yellower than
the face). Exposure sweep under Standard: 0.0 gave #FFBA3D (clipped yellow), -1.0 #FF9A38,
-1.4 #FF8731, -1.6 best. Red channel sits at 255 in the lit median - near clip, still reads orange.
Grain softened: scale 7 -> 22, distortion 5 -> 1.5, bump 0.02 -> 0.004 (face).

### Wreath
Art read (4x crops of welcoming, waving, thinking, presenting): one band riding the top silhouette
edge ~20-160 deg; broad pointed almond leaves (~56 x 25 mm) in overlapping pairs, pointing up
towards 12 o'clock from both sides; 6 small upright leafy sprigs; front ornament at top centre where
the two branches meet; pale warm gold, brown in the gaps.
Rebuilt: new leaf (widest ~40% up, pointed tip, shallow V midrib, tip curl, thin solid); 11 stations
per side, each = outer leaf leaning over the rim + inner leaf onto the face + a crowding mid leaf.
Band moved onto the silhouette edge and in front of the bezel lip - test 1's band sat UNDER the bezel
tube, half its leaves buried, part of why it read thin/wheaty. Sprigs: 2 broad wide-spread pairs +
tip leaf. Gold #E2B86E, metal 0.6, rough 0.4: rendered p50 #E1AD63 vs art welcoming #E7BB78.
Guess 4 kept (over the rim, down the back). Guess 5 kept as fan + bead, but 5 leaves not 7 - the
art reads as a central upright leaf with two side pairs.

GLB: 2,749,796 bytes, 150,820 tris, 24 meshes, no Draco/KTX2/meshopt. Height 1.224 m.

### Still not her (wreath + orange only)
- Wreath too regular, smooth, even-toned; art leaves crumpled, varied, brown-shaded.
- Sprigs still read a little ear-like at distance (three-quarter / back).
- Grain softer but still regular horizontal lines; art grain finer and patchier.
- Standard view transform is a pipeline change: whites (toga, gloves) render brighter too.

## Test 3 (2026-09-27)

Owner on test 2: "Fix the 'Still not quite her' issues." Three fixes only (leaves, sprigs, grain);
everything else, orange included, untouched. Outputs `D:/tmp-her-c2/test3/`: 4 views 1600 px,
`compare_welcoming.png`, `wreath_close.png`, `grain_close.png`, `her-test3.glb`; `iter/` = art crops
(`art_wreath_sheet`, `art_sprigs` 8x, `art_grain` 6x + contrast), tuning renders r1/r2, `sample_de.py`.
New flags `--leaf-brown --grain-face --grain-rim`.

### Leaves
Art read (4x crops, 4 poses): leaves crumpled, dark midrib, brown at the base and in the gaps, pale
gold body, each leaf a slightly different tone. `leaf()` now: sharper V fold (crease at midrib, extra
columns at t = +-0.12), per-leaf crumple from a fixed-seed RNG (edge waviness 0.25-0.38 W, bent
midline, twist, tip curl x0.5-1.7), and a per-vertex `tone` colour attribute: gold body x0.95-1.15,
brown #7A4A1A toward base, edges, along the midrib, per-leaf warm shift and extra brown; the buried
mid leaf at tone 0.8. Material reads the attribute (exports as COLOR_0). First pass was too brown
(wreath p50 #AA7F48); lightened. Wreath p50 (hue 0.08-0.14, S>0.25, V>0.35): art #D79D56, test 2
#DEAC64, test 3 #BD8F51 - now a little darker than the art.

### Sprigs
Art read at 8x: each sprig is a small upright laurel twig tip - one dominant pointed tip leaf plus one
pair of broad leaves springing wide from just below it (some sprigs show a smaller second pair lower).
Not wheat. Test 2's 2 even pairs close along a stem was the ear. Rebuilt: short stem (0.04), tip leaf
50 x 26 mm, pair 43 x 24 mm at 52 deg, a smaller lower pair at 62 deg on the 4 outer/mid sprigs; side
leaves cupped 30 deg about their own axis so they keep a body in three-quarter and back views.

### Grain (face + rim only; arm unchanged)
Art read (6x, welcoming/waving/thinking): fine horizontal streaks broken into short runs, uneven
spacing/width/length, soft patchy tone under them, no knots. Replaced the Wave bands with two noise
fields stretched along X (fibre 6/160, patch 3/22 face; 6/120, 3/18 rim) mixed 0.6/0.4, warped up/down
by a low-frequency noise for waviness; ramp 0.36-0.64 so the median tone is unchanged.

### Orange re-check (same method, `iter/sample_de.py`; boxes re-picked, reproduces test 2 within 2 units)
| | art | test 3 | dE76 / dE2000 |
|---|---|---|---|
| face | #FA791B | #FF7B24 | 2.2 / 1.4 |
| arm | #FC7B19 | #FF8227 | 3.8 / 1.7 |
| shoe | #FE8B16 | #FF9431 | 7.6 / 2.3 |

GLB: 3,467,896 bytes, 169,592 tris (+18.8k: denser leaves), 24 meshes, no Draco/KTX2/meshopt; wreath
+ ornament carry COLOR_0. Height 1.213 m.

### Still not her
- Wreath gold a shade darker/more bronze than the art (#BD8F51 vs #D79D56); leaf side veins not
  modelled (only midrib); leaves shinier (metal 0.6) than the painted matte-gold look.
- Side band still stacks into an ear-like column at the silhouette edge in three-quarter view (band,
  not sprigs - outside this test's scope).
- EEVEE contact shadow under the wreath looks speckled on the new grain.
- A pale sliver at the far wreath end (right, front view) - seen in test 2 too, not investigated.

## Test 4 — target compare

Owner sent `ref/target-owner-2026-09-27.jpg` (672x624): "That's the closest of what I want, compare
it with the results you sent." It OUTRANKS the nine PNGs where they differ. Crops (target | test 3
front, equal height): `D:/tmp-her-c2/test4/iter/cmp_*.jpg` (`crops.py`). Colours: `iter/sample_t4.py`.

Orchestrator's reading, checked against the crops: soft-lit stylised 3D with a thin dark outline -
YES (painterly, flat-ish shading, not hard toon). Metallic shiny gold wreath - PARTLY: satin pale
champagne gold, soft highlights, not mirror-metal. Upright sprigs - YES, 7, thin stems with small
leaflets. Shoulder = small gold laurel ring - YES. Rope belt, two hanging ends - YES. ~3 lashes per
eye - YES. Big dark pupils up and to the VIEWER's left - YES (her right). Ticks: short vertical dash at
12, longer bars at 3 and 9, short dashes between - YES, painted flush, thin. Dark brown disc edge with
visible thickness on the viewer-right side - YES. Fine horizontal brushed grain - YES. Chunky orange
shoes with dark bands - YES (boot shape: upright ankle block + low toe block, two dark band lines).
Very short thin dark legs - YES, brown not black. One arm out palm-up, other hanging - YES.

Differences, test 3 vs target, ranked by how much each breaks the likeness:
1. Shoulder fastening: test 3 = rope ring + white ball; target = gold LAUREL-leaf ring with the sash
   cloth pulled through it and folding back over the disc edge.
2. Wreath: test 3 = heavy bronze band of big leaves + a central fan ornament, reaching ~3/9 o'clock;
   target = slimmer band of small pale leaves along the top (~10 to ~2 o'clock), NO centre ornament,
   7 tall thin upright sprigs with small leaflets.
3. Eyes: test 3 = raised glossy lenses, round glints, thin rim; target = flat painted ovals, thick dark
   brown outline, pupil fills the upper-inner part, glint is a small white wedge notch at the pupil's
   upper-left, gaze up and to viewer-left.
4. Mouth: test 3 = wide open crescent; target = narrow closed smile - dark upper line, thin white band
   under it, shallow curve, sits a little left of centre.
5. Skirt/toga: test 3 = boxy tube, plain gold hem, bulb-shaped body under the disc; target = soft
   vertical folds, slight flare, GOLD GREEK-KEY hem band, a second overlapping panel on viewer-right;
   sash has soft drape. Skirt narrower relative to the disc (~0.58 x disc width vs ~0.75).
6. Ticks: test 3 = raised 3D blocks, heavy; target = thin flush painted dashes.
7. Shoes: test 3 = rounded blobs with dark toe caps; target = boot: upright ankle block + low toe,
   two dark band lines round the toe/sole.
8. Belt: target rope thicker and paler, a real knot left of centre, two ends reaching near the hem
   with frayed tassel tips; test 3 = thin loop knot.
9. Background/light: test 3 has a grey floor and horizon; target = flat near-black (#1C1C1E) ground,
   soft key upper left, no floor line.
10. Disc edge: test 3 = thick light-orange rounded bezel; target = dark brown line round the face, a
    thin orange lip, dark brown line on the visible side thickness.
11. Whites too bright (toga #FFF7DC vs #DDD1BE, gloves #FFFFE2 vs #E8DEC9) and disc too saturated.
12. Legs black and a touch long; target brown and very short. Gloves: target flat cartoon fingers;
    test 3 tubular. Arms: target thinner, flat-painted, 3 dark stripes near the wrist (both similar).

Colours off the target (lit-half per-channel median; test 3 front for reference):

| part | target | test 3 | dE2000 |
|---|---|---|---|
| disc | #EC8C3C | #FF7E29 | 5.7 |
| gold (wreath) | #E3B477 | #E2AD64 | 2.9 |
| toga | #DDD1BE | #FFF7DC | 8.9 |
| gloves | #E8DEC9 | #FFFFE2 | 8.6 |
| shoes | #ED913E | #FF9432 | 3.3 |

### Test 4 build (2026-09-27)
Outputs `D:/tmp-her-c2/test4/`: her_front/threequarter/side/back.png (1600 px, 1.77-2.38 MB, no JPEG
copies needed), `compare_target.png` (target | test 3 | test 4, equal height), `her-test4.glb`
3,761,448 bytes, 185,250 tris, 24 meshes, no Draco/KTX2/meshopt (KHR_materials_specular, _sheen).
Height 1.252 m. Iteration: `iter/r1/` (800 px). New flags `--cloth --glove --front-yaw --cam-d`.

Changed: laurel-leaf shoulder ring + sash tail over the disc edge (rope ring + ball gone); wreath
leaves x0.8, centre ornament removed, back band + over-rim leaves kept to 42-138 / 46-134 deg,
7 tall sprigs; flat painted eyes 20% bigger, thick outline, pupils up + viewer-left, wedge glint,
bolder lashes; closed narrow smile; thin near-flush ticks; slim rim lip + brown face line; skirt
narrower with folds; Greek-key hem (BUG FIXED: grid_surface made a 2nd UV layer, hem read zeros =
plain gold since test 1); thicker paler rope, knot left of centre, long frayed ends; boot shoes with
two dark bands; brown legs; arms r 0.025; floor hidden, world = #1C1C1E; softer key; EEVEE shadow
rays 4 / steps 16 / TAA 128 / full-res tracing; camera d 3.35, front yaw 20.

| part | target | test 3 | test 4 | dE2000 t3 / t4 |
|---|---|---|---|---|
| disc | #EC8C3C | #FF7E29 | #FF8736 | 5.7 / 4.5 |
| gold | #E3B477 | #E2AD64 | #D3A264 | 2.9 / 4.8 (worse) |
| toga | #DDD1BE | #FFF7DC | #E6D2B6 | 8.9 / 3.8 |
| gloves | #E8DEC9 | #FFFFE2 | #FFE8C7 | 8.6 / 6.0 |
| shoes | #ED913E | #FF9432 | #F79040 | 3.3 / 2.6 |

### Still differs from the target (looked at front + three-quarter; side/back NOT looked at)
- Sprigs read as wheat ears (narrow leaflets close on the stem); target sprigs are leafier.
- Sash tail over the shoulder reads like a white thumb/hook; target fold is flatter, lies on the edge.
- Waist knot reads as a flat ring, not a tied knot.
- Wreath gold darker than target (smaller leaves self-shadow); gloves + disc still too bright/red.
- Target pupils larger; target disc reads wider relative to her body; front framing tighter in target.
- A few back-band leaves show above the disc top in three-quarter view.
- Speckle under the wreath: not visible at display size in front/three-quarter; not zoom-checked.

## Restored to test 3 (owner pick 2026-09-27)
Owner picked test 3 over test 4. `build_her.py` had test 3's edits, then test 4's 31 successful
Edit-tool edits (1 failed InputValidationError at test 4 transcript line 87, never applied, skipped),
then test 5 (stopped ~09:03) — test 5 made **zero** edits, only Read/Bash analysis comparing test 4's
render to the owner's target photo. So restore = reverse test 4's 31 edits only, in reverse order
(new_string -> old_string), each found exactly once, no ambiguity.

Method: parsed both agent JSONL transcripts (`agent-ac8a4b8e7028abe90.jsonl` test 4,
`agent-a72bdf9f72fc4711d.jsonl` test 5) with a script, matched each Edit tool_use to its tool_result
to drop the one failed edit, reverse-applied the 31 real edits to the pre-restore file (kept as
`build_her.test5-partial.py`), `py_compile` clean.

Verification: rebuilt with the exact command from test 3's own final transcript step
(`blender.exe --background --python build_her.py -- --out D:/tmp-her-c2/restore-check`), compared
against `D:/tmp-her-c2/test3/`. `her_front.png` (1600x1600): mean abs pixel diff **0.000025/255**,
max diff **1** (render noise), worst 8x8-block mean **0.00023**. `her-test3.glb`: **3,467,896 bytes,
169,592 tris**, byte-identical to test 3's own glb. Verdict: **restored exactly**.

The test 4 hem UV fix (Greek-key hem never showed since test 1 — `grid_surface` made a 2nd UV layer,
hem read zeros = plain gold) lives only in `build_her.test5-partial.py` now, if ever wanted back.

## Test 6 (2026-09-29)

Owner on test 3: "fix clothes details and the edges" (five fixes, clarified 2026-09-29). Everything
else from test 3 kept. `build_her.test3.py` = untouched byte backup. Outputs `D:/tmp-her-c2/test6/`:
her_front/threequarter/side/back.png (1600), knot_close / belt_close / hem_close / edge_close /
wreath_close / grain_close.png (1200), compare_t3_t6.png (test 3 | test 6, front + three-quarter),
compare_welcoming.png (art | test 6 front), `her-test6.glb` **4,208,052 bytes, 210,648 tris,
23 meshes** (rim mesh gone), no Draco/KTX2/meshopt. Height 1.213 m. All PNGs 0.97-2.50 MB (PNG now
written RGB, zlib 100 - lossless, pixels unchanged). `iter/r1-r4` = 800 px tuning, `iter/t3ref` =
test 3 re-rendered from `build_her.test3.py` (the original `D:/tmp-her-c2/test3/` folder and every
other `tmp-her-c2` subfolder VANISHED mid-session on 2026-09-29 - not deleted by this run; cause
unknown). t3ref PNGs match the old test 3 sizes (2.5-2.9 MB).

Changes:
1. Face ring: `build_rim()` removed (and M['rim'], and 'rim' from the GLB flatten list; the
   `rim_back*` LIGHTS kept). New `edge_shade()` on the face material: base colour mixed toward
   #9C3D14 by a smoothstep of the elliptic radius of the evaluated surface (flags `--edge-shadow
   --edge-r0 0.82 --edge-r1 0.98 --edge-k 0.92`) - soft darkening toward the silhouette, side band dark
   all round. No new geometry; the disc's own subsurf corner stays round. Render only - the GLB
   flattens the face to flat orange as before. Wreath re-seated: `BAND_Y` T/2+0.026 -> T/2+0.008,
   over-rim leaves `rad*0.03` -> `rad*0.008` (both were offsets to clear the bezel tube).
2. Greek-key hem: ported ONLY the test-4 `grid_surface` UV-layer fix. The pattern then showed a break
   at FRONT centre (strip ends: `ph(0)` = front), so the trim strips now start at the back (`ph_t`) and
   the repeat count is rounded to a whole number. Sash trim scale 1.03 -> 1.045: a white toga blob
   poked through the sash trim left of centre (visible in test 3 too); gone.
3. Shoulder knot: `overhand()` (open trefoil cut at its bottom lobe, two tails) in twisted cord via
   `rope()`, #C89B54 (`her_knot_cord`), yaw 30 deg to hug the shoulder, whipped ends. Ring + ball gone.
4. Waist belt: loop unchanged in shape (72 -> 96 points), colour #B88A45 (`her_belt_rope`), overhand
   knot at x 0, two ends hanging to ~z 0.29 with whipped tips. Old front ring-knot removed.
5. Folds: `soft_fold()` profile (rounded crests, creased valleys, zero mean). Skirt: 9 uneven vertical
   folds growing to the hem, hem lifts in the valleys. Toga: `toga_folds()` fan from the knot
   (12 folds, ramp 0.05-0.33 m from the knot, flattened near the belt so the rope does not sink in).
   Cloth COLS 64 -> 96. Colours untouched.

Checked by LOOKING (final renders + r1-r4): ring gone, edge dark red-brown and soft (edge_close,
three-quarter); key pattern clear on hem and sash (front, hem_close); knot reads as a tied knot with
two ends (knot_close); belt knot at centre front with two hanging ends (belt_close); skirt folds and
wavy hem read as cloth; toga folds read on her left side and in side view. Diff map test 3 vs 6
(front, x4): face interior, eyes, mouth, ticks, nose zero; arms/gloves/legs/shoes faint only
(shadow/bounce from the changed cloth); wreath changed because it moved 1.8 cm back and the rim no
longer sits behind it - same leaves, same layout.

Left / not done:
- Toga folds across the FRONT centre stay faint: the key light runs along the fold direction and the
  white sits near clip under Standard -1.6. Deeper folds or light changes were out of scope.
- Knot is smaller than test 3's ring, so at full-figure distance it reads as a small bow.
- Edge darkening, like the grain, is not in the GLB (flattened to flat orange).
- Dark slit line at the toga/skirt join above the belt: present in test 3, not touched.
- Side / back views looked at only at contact-sheet size.

## Test 7 (2026-09-29)

Owner on test 6: two fixes - shoulder knot too small at full-figure distance; toga front centre flat
and faint. Everything else from test 6 kept. `build_her.test6.py` = untouched byte backup of test 6.
Outputs `D:/scratch 2026/her-c2/test7/`: same 10 views/names as test 6 plus compare_t6_t7.png
(2000 px; test 6 left, test 7 right; top row front, bottom row three-quarter). `her-test7.glb`
**4,208,052 bytes, 210,648 tris, 23 meshes** - same size and tris as test 6 (same vertex counts;
md5 differs, geometry moved). All PNGs 0.98-2.34 MB. `iter/r1-r5` = tuning renders.

Changes (build_her.py only):
1. Shoulder knot: overhand scale 0.013 -> 0.019 (`--knot-s`), cord radius 0.0075 -> 0.0125
   (`--knot-r`), twist pitch 0.02 -> 2.6 x cord radius (0.0325) so the three strands still read,
   tails 3.2 -> 2.8 units, whipped-end spheres scaled with the cord, centre 8 mm forward
   (`--knot-dy`). Same place, yaw, colour #C89B54. r1 tried 0.021/0.0135 - read as too heavy.
2. Toga front: root cause - `toga_pt` divided the fold offset by the half-WIDTH a everywhere, but at
   the front the radial scale multiplies the half-DEPTH TB (0.112 vs a ~0.3), so front centre got
   ~1/3 of the side's fold depth. Front half now divides by the local radius hypot(a cx, TB sy)
   (= a at the sides, so her left side and the back are unchanged). `toga_folds(x, z, front)` adds a
   broader fold set on the front only (6 per turn vs 12, same fan from the knot toward her right
   waist, `FRONT_AMP` 4.5). Front mask = min(1, 1.5 * -sy). The disc sits ~1 cm behind the front
   toga: inward valleys poked orange through the cloth and sank the sash trim (r2, r4), so front
   valleys are removed (`FRONT_VALLEY` 1.0) and the crests carry the depth outward. Trim strips use
   the same `toga_pt`, so the key pattern follows the folds.

Checked by LOOKING: front + three-quarter full size and cropped, knot_close, hem_close, belt_close,
edge_close, side crop, compare sheet. Knot reads as a chunky twisted rope knot with two whipped ends
at full-figure size in front; in three-quarter it reads as a rope bundle on the shoulder edge (seen
side-on). Toga front shows soft diagonal folds from the knot toward her right waist - visible but
still gentle (white near clip under Standard -1.6; lights untouched per brief). Sash trim and hem
key pattern continuous, no tearing, no orange poke-through. Diff maps vs test 6 (threshold 12/255):
front and three-quarter changes only on toga, knot, knot shadow and her left upper arm next to the
toga (bounce/shadow); wreath_close 0 px; grain_close 708 px (corner); back 417 px; side = knot and
toga front edge. Belt, hem, face, eyes, wreath, legs, shoes unchanged by eye.

Left / not done:
- Front folds are gentle, not dramatic; deeper needs a light change or more forward bulk (out of scope).
- In three-quarter the knot is seen side-on and reads less as a knot than in front.
- Knot's upper loops overlap the disc's lower-right face edge in front view (so did test 6's, smaller).
- Back view checked by diff only (417 px), not looked at full size.

## Test 8 (2026-09-29)

Owner on test 7: deeper toga front folds (small light change approved); shoulder knot off the face
edge. `build_her.test7.py` = test-7 backup. Outputs `D:/scratch 2026/her-c2/test8/`: same 10 views/names
as test 7 + compare_t7_t8.png (2000 px; test 7 left, test 8 right; top front, bottom three-quarter).
`her-test8.glb` **4,208,052 bytes, 210,648 tris, 23 meshes** (same as test 7; lights are not exported).
PNGs 0.97-1.98 MB, compare 2.28 MB. Tuning renders `iter/r1-r10`, `iter/d1-d3` (toga brightness probes).

Changes (build_her.py only):
1. Toga front folds: `FRONT_AMP` 4.5 -> 8.5 (`--front-amp`). Light: the front fill (`fill_soft`, low on
   her LEFT) lit exactly the valley sides the key leaves dark. It is now light-linked to EXCLUDE the
   toga, and a same-place/size/colour copy `fill_soft_toga` at 0.15 x 300 W lights the toga only
   (`--fill-toga 0.15`; `--key-toga` does the same for the key, left 1.0). Every other object gets the
   unchanged test-7 lights; shadows unchanged (no shadow linking). Tried and dropped: an added grazing
   rake light high on her right (r1-r7) - it rode the key's axis, filled the key's fold shadows and
   clipped the white (toga crop up to 57% at 255). Probe d1-d3: key alone gives toga median ~240/255,
   so adding light cannot deepen folds; only removing fill does. Toga crop median 239 -> ~220, 0% clip.
2. Shoulder knot: same overhand, size (0.019 / 0.0125), yaw, colour #C89B54; centre slid down-and-in
   along the sash, x 0.29 -> 0.265, z 0.69 -> 0.63 (`--knot-dx -0.025 --knot-dz -0.06`). Its loops now
   sit at/below the toga's top edge at the shoulder, where the toga hides the disc edge. Fold-fan
   origin `KNOT_XZ` NOT moved (would change her left side and back folds).

Checked by LOOKING: compare sheet; toga crops r8/r10 vs test 7; knot at native res in front,
three-quarter, side (`iter/knot_zoom.png`, `iter/final_crops.png`). Front: two diagonal folds from the
knot toward her right waist now read (grey crease bands), clearer than test 7. Knot clear of the face
edge in front (well inside), three-quarter (below the point where the disc edge goes behind the toga)
and side (loops on the trim, under the face's front edge; gap small). Trim key pattern continuous in
the crops. Face colour (`facecheck.py`, median of patches, sRGB): centre #FF7B22 vs #FF7B22, left cheek
#FF781D vs #FF781D, upper face #FF7F2B vs #FF7F2B - dE2000 0.00 at all three. Diff vs test 7
(threshold 12/255): wreath_close 0 px, grain_close 740 px (corner, as t6->t7), back 961 px; front /
three-quarter / side changes confined to toga + knot box; hem_close changes only in its top 414 rows
(toga), hem trim rows unchanged.

Left / not done:
- Her LEFT flank of the toga (image right in front view) reads greyer than test 7 - the fill cut
  takes light off that side too. Owner to judge; `--fill-toga 0.3` (r8) is the gentler setting.
- `FRONT_AMP` nearly doubled (4.5 -> 8.5); "moderate" is the owner's call. r8 used 7.0 with fill 0.3.
- Knot is 6 cm lower than test 7: now sits on the sash just below the shoulder top, not on its crest.
- Knot overlaps the Greek-key sash trim more than before (covers a few key repeats; pattern intact).
- Light change is render-only (GLB carries no lights). belt_close / hem_close / edge_close / back
  checked by diff only, not looked at full size. Side-view knot gap to the face edge is small.

## Rig 1 (2026-09-29)

Scripts: `rig_her.py` (stages `build`, `sheets`, `movie --cam tq|side`) runs `build_her.py` UNCHANGED via
exec (`--views , --no-export`), then adds armature `her_rig`. `check_rig.py` writes `rig1/checks.json`.
Outputs: `D:/scratch 2026/her-c2/rig1/`. `compose.py` there builds the sheets and bone overlay with PIL.

### Skeleton
root > pelvis > spine > chest > neck > head (spine/chest/neck sit inside the disc; the disc is torso and
head in one, so it rides on `head`). chest > clavicle > upperarm > forearm > hand > fingers, thumb.
pelvis > thigh > shin > foot > toe. Joints are fitted to HER limbs (build control points), not a human
template: hip z 0.35, knee (y -0.006, z 0.215), ankle z 0.10, legs x +/-0.058, sandals splayed 10 deg.
Arm joints come from the build's arm curve and glove frames (asserted equal to the build's values).
Knee hinge axes asserted to be -X; knees can only bend forward.

### ROM (Limit Rotation, local space, degrees; min..max per axis)
| Bone | X | Y | Z |
|---|---|---|---|
| root | 0 | 0 | -180..180 |
| pelvis | -15..15 | -15..15 | -15..15 |
| spine | -15..30 | -15..15 | -15..15 |
| chest | -15..25 | -20..20 | -15..15 |
| neck | -30..40 | -45..45 | -30..30 |
| head | -20..20 | -10..10 | -10..10 |
| clavicle | -15..15 | -10..10 | -15..15 |
| upperarm (euler YXZ) | -50..170 | ext 90 / int 70, side-signed | abd 150 / add 40, side-signed |
| forearm (hinge) | 0..145 | -80..80 (pro/sup) | 0 |
| hand | -70..70 | -5..5 | -30..30 |
| fingers | -30..90 | 0 | -20..20 |
| thumb | -20..60 | -10..10 | -30..30 |
| thigh | -20..120 | -40..40 | -30..30 |
| shin (hinge, flexion is -X) | -140..0 | 0 | 0 |
| foot | -50..20 | -15..15 | -20..20 |
| toe | -40..70 | 0 | 0 |

Upperarm uses euler order YXZ (twist first) for both keys and constraint: in XYZ the raised wave arm
decomposed to x -96 / y 103, a gimbal artefact, not a real pose. The wave's humeral external rotation
was cut from 80 to 62 deg because the twist read 98-104 deg in every euler order. Side signs are
measured on the rig (abd_R -1, abd_L +1, ext_R +1); ext_L is MIRRORED, not measured (the left arm
never waves).

### Skinning (no cloth sim)
Rigid on head: disc, face marks, eyes, lashes, nose, mouth, wreath, ornament, shoulder knot.
Rigid on pelvis: skirt, waist cord. Toga: head weight = smoothstep(0.375, 0.47, z), rest pelvis;
toga trim same above z 0.30, pelvis below. Arm: upperarm/forearm blend +/-0.025 m of arclength at the
elbow. Glove: hand / fingers / thumb split in glove-local coordinates. Leg: thigh/shin blend z
0.195-0.235, shin/foot 0.09-0.11. Sandal: foot/toe split at local y -0.06..-0.09. Armature modifier
first on every object. Every vertex weighted (asserted).

### Face shape keys (existing geometry only; Basis = test 8)
- Mouth A-H, X: the build's own 25x5 parametric mouth grid re-evaluated with new parameters
  (parameterisation asserted identical to the build). X = zero delta = her rest smile (Rhubarb idle).
  H: she has no tongue geometry, so H is an open mouth shape only.
- blink_L/R: eye z-squash to a lid line at 0.35 eye-height below centre, re-conformed to the face;
  lashes translate down with it.
- look_L/R/up/down: pupil (mat 1) and glint (mat 2) move, clamped inside the sclera ellipse at 0.94.
- brow_up / brow_down: SHE HAS NO BROWS. brow_up lifts the lashes 16 mm; brow_down flattens the top
  of the eye (0.9) and lowers the lashes. Owner to rule whether lashes may stand in for brows.
- Blender 5.2 creates new shape keys at value 1.0 (measured); `add_keys` sets 0. Before that fix the
  rest render differed by 30,912 px.

### The move (24 fps, frames 0-191, keyframed by script)
Strikes R31, L43, R55, L67, R79, closing L91 (heel angle 15, closing 8). Step 0.16 m, 12 frames.
Toe-off = next strike - 9; heel rise = toe-off - 8; foot flat = strike + 2. Legs: analytic 2-bone IK
keyed as FK eulers; the pelvis is lowered until both legs reach, so no bone ever stretches (IK
clamps 0). Pelvis: bob -4 mm after contact / +2 mm at passing, yaw +/-5, sway +/-12 mm with list
toward stance, spine/chest counter-rotate. Arms counter-swing (2.2 x pelvis yaw, 2-frame lag).
Ankle ROM guard: in swing the flexed knee pushed the foot past 20 deg dorsiflexion (up to 28 deg);
the foot is rotated about its support point to stay inside the limit (43 frames), and the swing foot
is lifted so the sole clears the floor. Stop and settle 91-109. Wave: spring-driven raise (anticipation
dip 110-117), elbow wave +/-22 deg 128-164, hand lag spring from elbow acceleration, head tilt spring.
Blink 141-147; brow_up 124-158.

### Checks (check_rig.py, 2026-09-29)
Foot drift 0.0 mm every stance (8 stances) · sole min z 0.0 mm (heel, ball, sandal tip) · knee flexion
0..75.3 (R) / 0..78.2 (L), geometric 5.5..83.7, no reverse bend · elbow R 10..120.1, L 10..14.4 ·
pose-bone scale != 1: 0 · Limit Rotation violations: 0 · rest diff vs test8/her_front.png: 2 px
(max 17/255), both on one wreath-leaf edge highlight, visually identical; cause unconfirmed.

### Open
- Owner: lashes as brows? · the walking hand keeps its open-palm rest shape · skirt is rigid on the
  pelvis (no leg push) · ext_L mirrored not measured · first swing frame: the lift guard raises the
  foot by up to ~21 mm (the uncorrected tip depth at frames 23/35/83) - a possible one-frame pop,
  not measured as motion.
- look_R / look_up put the glint on the pupil edge (mouths_sheet).

## Rig 2 (2026-09-29)

Fix round on the rig-1 refute (`D:/scratch 2026/her-c2/rig1-refute/REFUTE.md`). Outputs in
`D:/scratch 2026/her-c2/rig2/`. Only `rig_her.py` and `check_rig.py` changed; build_her.py untouched.

- **GLB shape keys (blocker).** The exporter's apply-modifiers path dropped the keys of meshes that still
  carried a SUBSURF (the eyes), yet exported their weight animation, which crashed the 5.2 importer.
  rig_her.py now applies each eye's SUBSURF (levels 1 = render levels, so the look is unchanged)
  before skinning and keys. check_rig.py `--glb` re-imports into a factory scene: import ok, all 17
  keys present (eye_L/R 7 each, lash_L/R 3, mouth 9; importer suffixes `.001`, the check strips it).
- **Wave clip.** Wave pose chosen by a search (abduction x flexion x wave amplitude x elbow centre x
  hang) that rejects any pose putting a glove/arm vertex inside the disc slab on any frame. Pick: abd 65,
  flex 20, osc 16, elbow 90, hang 9. Only the slab test passed; no candidate cleared a grown margin.
  check_rig counts arm/glove verts inside the disc per frame (shoulder-socket verts inside at rest,
  96 per arm incl. 15 mm of arclength, exempt; listed in rig_meta `socket`).
- **Foot pop.** Swing foot re-seated every frame so its lowest MESH point rides a smooth clearance curve;
  the toe peels about its most-forward flat-sole vertex over 3 frames before toe-off; a toe cap dip
  is lifted continuously. check_rig measures the lowest foot-mesh z per frame (armature-only eval).
- **Gait.** Step 0.245 m (0.7 x leg 0.35), foot pitch pchip curve, pelvis path lowest after heel
  strike / highest at mid stance under the two-leg reach, lateral shift 15 mm over the stance foot,
  list 2.5 deg, ankle ROM guard iterated to convergence (40 passes).
- **Cameras.** Three-quarter follows the smoothed pelvis at d 3.4 (rig 1 framed her smaller); side
  camera 72 deg (18 deg off profile).

### Numbers (checks.json)
mesh sole jump max 2.76 mm (target 6) · mesh floor min -0.0 mm · mesh foot drift flat 0.000 mm, toe
to peel 0.055 mm · bone heel 0.0 / ball 3.4 mm · disc clip verts 0 on every frame, all four meshes ·
pelvis rise/fall 13.6 mm, lateral 30 mm (frames 31-91) · knee rotation max R 66.9 / L 69.1 (geometric
72.4 / 74.6) · hip flexion max ~40 · limit violations 0 · scale != 1: 0 · rest diff 2 px (max 17/255).

### Open
- Swing knee still above the 60-65 target (67/69 rotation); stance knee reaches ~30-40 deg at loading
  (human ~15-20): the pelvis dip is bought by crouching, because the front ankle lands close under
  the hip. Next lever: land the heel further ahead of the pelvis (PY lag) rather than lowering z.
- Wave passes the slab test with no spare margin.
- brow_up (lashes float) still awaits the owner.

## Rig 3 (2026-09-29)

Outputs: `D:/scratch 2026/her-c2/rig3/` (rest_front, bones_overlay, walk_contact_sheet, move.mp4,
move_side.mp4, her-rig3.blend/.glb, checks.json). Face untouched, so no mouths_sheet.

Changes in `rig_her.py`:
- Pelvis height now follows the stance leg's knee: a knee-flexion profile after each strike
  (2 deg at contact, 15 at u=3, back to ~4 by u=9) is turned into pelvis z by geometry, with pchip
  anchors at contact, low (u=2), high (u=7) and terminal stance (u=10). Pelvis lag 0.14 m lands the
  heel further ahead of the hip. Defaults: `--lag 0.14 --kl 15 --ulo 2 --uhi 7 --uts 10`.
- Only stance legs set the pelvis drop. A swing leg that cannot reach is pulled toward the hip
  (at most 3.8 mm). In terminal swing the landing spot rides with the hip.
- Heel rise starts 6 frames before toe-off, and its pitch is solved per frame so the trailing
  knee follows a target curve.
- Wave: the pick now uses the real glove-to-disc surface distance (BVH on the rest body_disc, in
  head space), checked on every frame. Minimum 12 mm. The pick is abd 65 / flex 20 / osc 16 /
  elbow 80 (rig 2 had elbow 90).
- Side camera: her right, 18 deg off profile toward her front (yaw -72), d 3.0, follows the
  smoothed pelvis.

Added to `check_rig.py` (`gait_rig3` block): stance knee per strike, swing peak, hip flexion
(thigh from vertical), pelvis low/high per step, swing clearance, glove-to-disc gap on posed meshes.

Measured, steady steps (strikes 31-79):
- Stance knee: 2.0 at contact; 14-18 at loading (u=1); 1-3 at mid-stance.
- Swing knee peak: 60-64.
- Hip flexion peak: 28-29.
- Pelvis: low at u=2 (17% of step), high at u=7 (58%), 12-13 mm per step.
- Swing clearance: at least 4.2 mm (mid-third 5.9).
- Wave gap: at least 37.8 mm (f143).
- Unchanged: sole jump max 3.49 mm; mesh foot drift 0.055 mm; 0 clip; 0 limit violations;
  0 scale != 1; rest diff 2 px; GLB 17 keys, import ok.

Left:
- Trailing knee jumps to ~50 at opposite contact (u=12), because the ankle ROM guard (dorsiflexion
  up to 20) forces the heel up. Real gait is ~35-40 near toe-off.
- Start and stop steps are outside the targets: first swings reach hip flexion 40; the stop swing
  reaches knee 70; the stop stance loads to 22.
- The pelvis 31-91 window reads 19.6 mm because it includes the stop step.
- The planted ball point drifts 3.4 mm, the same as rig 2; the mesh does not move.
- brow_up still awaits the owner.

## Rig 4 (2026-09-29)

This round fixes the refuter's rig 3 FAIL. Outputs are in `D:/scratch 2026/her-c2/rig4/`.
`build_her.py`, the rest look, the face keys and brow_up are unchanged.

### Heel pop (the blocker)

Root cause: with LAG 0.14 the hip sat far back and low at the opposite strike. The trailing leg then
needed ~58 deg of knee to keep the ankle inside 20 deg of dorsiflexion, and the ROM guard threw the
heel up in one frame.

- LAG is now 0.10.
- The heel-rise solve now starts at u=6 (`RISE` 10). The heel lifts only when the leg needs it.
- KT is the pre-swing knee: 4 deg to u=9, then ramping to ~40 deg at u=15.
- The toe-off pitch is extrapolated from the solve.
- The pelvis is lowered only by a planted leg's reach deficit. The deficit is max-filtered, then
  blurred.
- The guard's per-frame correction is spread over time (max-filter r2, then blur) before it is
  applied.

Result, trailing knee across the opposite strike (R, f41-45): 8, 13, 20, 28, 35. Toe-off is at f46.

### Swing

The heel phase seats the rounded heel on the floor from the strike frame, so the mesh now touches down
on the strike frame. The swing-foot pitch returns evenly after toe-off.

`SXY` now lands the foot still moving at about hip speed. Swing reach pulls are now at most 0.3 mm
(rig 3: up to 5.7 mm). The first swing lags (`sh^1.4`). The closing swing uses 0.8x clearance.

### Stop

The start and stop loading anchors take 0.4x the loading knee (`--ksend`).

After the stop, the pelvis settles over f89-101: knees 14 -> 3, a 6 mm weight shift onto the left
foot, then an idle sway of 1.5 mm and breathing of 0.6 deg on the chest. Breathing is held while the
arm is up; unheld, it cut the glove gap to 37.0 mm.

### Wave

The raise and the lower are smootherstep over 14 frames: raise 116-130, lower 164-178.

- A backswing bump over 108-120 gives the raise its anticipation.
- A 4% overshoot settles over 126-138.
- A 5% lift over 157-167 gives the lower its anticipation.
- The osc envelope runs 128-134 in and 156-162 out.

The glove moves at most 134 mm/frame (max vertex, f124). Rig 3 read 238 on the refuter's glove
measure.

### check_rig.py additions

- `motion_rig4`: per-bone local rotation deg/frame, per-mesh max-vertex mm/frame, and angular
  acceleration on the shin, foot and upper arm. Each comes with its top offenders.
- `gait_rig4`: knee = bone vectors minus the 5.53 deg rest bend, and hip relative to the pelvis.

Thresholds for a 24 fps walk are listed in the file and in `checks.json`.

### Numbers (`checks.json`)

| Check | Value |
|---|---|
| Sole jump | 2.76 mm |
| Limit violations | 0 |
| Scale not 1 | 0 |
| Rest diff | 2 px |
| Glove gap | 38.1 mm (f143) |
| GLB | 17 keys, imports ok |

Stance, steady steps:

- Contact 2.3 deg.
- Loading 15.1 deg.

Swing knee / hip (vs pelvis), in deg:

| Swing | Knee | Hip |
|---|---|---|
| Start R | 56.6 | 35.4 |
| Steady | 62-63.5 | 29-30.5 |
| Stop L | 66.6 | 20.9 |

Stop stance loading 11.9 deg.

### Still open

- Terminal-swing knee extension is 27 deg/frame, over the 17 threshold (shin_R f52: 60 -> 45 -> 18
  -> 0). The knee is straight 1-2 frames before the strike, and the shin shows acceleration spikes at
  the strike.
- The toe returns at 14 deg/frame after toe-off.
- The thigh reaches 13.7 deg/frame at mid swing.
- Start hip 35.4 (target <= 35). Stop swing knee 66.6 (target <= 65).
- The stop-swing ankle guard is still active, smoothed, peaking at 17.8 deg.
- The heel_g marker rises up to 4.1 mm while planted. This is the vertical heel seat; there is no
  slide.
- The contact sheet labels R_passing and R_up as the same frame, f61.

## Rig 5 diagnosis (2026-09-29)

Owner verdict on rig 4: lower limbs fine, upper limb a disaster (arm join, elbow bend, wrists, walking swing,
wave). Measured on `rig4/her-rig4.blend` with `D:/scratch 2026/her-c2/rig5/arm_shots.py` (bone frames, joint
angles at rest / f45 / f57 / f140 / f137, arm-mesh slices vs the disc; close-ups front / side / three-quarter,
sheet `rig5/_diag_rig4.png`, probe `rig5/_arms/rig4_probe.json`).

1. **Arm join.** The glenohumeral pivot is the arm curve's first control point, (-0.300, 0, 0.700) R /
   (0.300, 0, 0.710) L. The arm mesh leaves the disc 45-55 mm further along the arm, at about
   (-0.345, -0.007, 0.663) R / (0.357, -0.002, 0.680) L. So the pivot sits 40-55 mm inside the rim, and the
   arm swings about a buried point. The exit point then slides along the rim. In the wave the upper arm lies
   along the disc edge and reads as a short stick pushed out of the disc. There is no shoulder girdle: the
   clavicle is a non-deform bone and is never keyed, so a raised arm cannot shrug or rotate the shoulder.
   The arm tube is 100 % upperarm right up to the pivot.
2. **Elbow bend.** The forearm hinge is the forearm's local X from roll FWD. That is about world -/+X
   (R x (-0.88, 0, 0.48), L x (-0.99, 0, 0.11)), so the forearm always flexes FORWARD. Her left arm's rest
   bend is 40 deg and lies in the FRONTAL plane: the upper arm goes out 34 deg, and the forearm comes back
   in toward her side. Any flexion therefore adds a forward kink on top of a sideways curve, and the forearm
   travels diagonally. The right arm's rest bend is only 9 deg. The upper arm/forearm weight blend is only
   +/-25 mm of arclength, which gives a hard crease at 80 deg (wave). The elbow sits at 50 % of the
   pivot-to-wrist arclength; in humans the humerus is ~56 % of shoulder-to-wrist.
3. **Wrists.** The hand bone also has roll FWD, so its local X is not the palm's flexion axis. The wave
   "hand lag" rotates the glove about an axis tilted off the palm. The glove is 100 % hand and the arm tube
   is 100 % forearm up to the cuff, so any wrist rotation shears the cuff against the tube end. There is no
   forearm twist bone and no pronation was ever keyed, so the palm cannot turn. The right hand's rest offset
   (36 deg from the forearm line, the art's welcoming gesture) is carried rigidly into the walk and the wave.
4. **Walking swing.** The right arm walks in the welcoming pose: 29-40 deg from vertical with the flat open
   palm forward (the rig 4 `hang` drops it only 15 deg). The swing is a world-X rotation of +/-14.4 deg
   (2.4 x pelvis yaw) about the buried pivot. The left arm swings with its 40 deg frontal bend, so the
   forearm slices sideways. The elbow flexes forward by 10-20 deg on one side only (+0.4 x swing). There is
   no hand follow-through, no finger curl (the right hand stays flat, the "offering tray" in the side view),
   and no girdle counter-rotation.
5. **Wave.** The upper arm goes straight out horizontally (elevation 96 deg, along the rim) with no girdle
   elevation. External rotation is only 62 deg, about the rest humerus axis. The forward hinge then lifts
   the forearm to vertical, and the elbow is 82 deg at a +/-25 mm crease. With no pronation, the palm faces
   her head: hand z = (0.98, 0.16, 0.13) at f140, and the front view shows the glove edge-on. The side-to-side
   wave is elbow flexion +/-16 deg about that forward hinge. The euler order was YXZ (twist first);
   upperarm euler (0, 71.8, -56.5) at f140, so there was no flip, but the pose itself is not a human wave.

## Face rig 1 (2026-09-29)

Code: `face_rig.py` (`add_face_rig(context, armature_or_None, face_objects)`, plus standalone stages
`--stage build|render|export` and `--compose`) and `check_face.py`, which writes `face1/checks_face.json`.
Outputs are in `D:/scratch 2026/her-c2/face1/`.

- **Method.** Bones DRIVE surface-conformed shape keys; they do not skin the verts. Her face is a
  paint-thin decal on a rigid disc, so a hinge rotation would lift verts off the surface or push them
  into it. Only `lip_corner_L/R` skin directly, weight `sstep(0.55, 1, s*u)` on the mouth, clamped to
  12 mm. The eye SUBSURF is applied before any key is added; without that, the glTF exporter drops the keys.
- **Bones (13):** `face_root`, `jaw` (hinge at z 0.745), `eye_target`, and per side `eye_S`, `lid_up_S`,
  `lid_lo_S`, `eye_target_S`, `lip_corner_S`.
  - Eyes: Damped Track to their targets, limited to +/-35 yaw and +25/-30 pitch.
  - Jaw: 35 deg open, 8 deg side, 5 mm forward. The forward slide drives no key.
  - Lids: 40 deg close; the lower lid raises 25 deg. Lid follow is Copy Rotation ADD, 0.3 upper and
    0.15 lower.
  - 17 drivers in total. The ROM readback clamps exactly at every one of these limits.
- **Keys:** eye 12 per eye, lash 7 per side, mouth 30.
  - Eye region: AU1, AU2, AU4, AU5, AU6 and AU7, one per side. There are no brows (owner ruling), so the
    frontalis, corrugator and procerus act on the lashes and upper lids.
  - Eye bone keys: `blink_S` (rig-1 geometry), `lid_lo_raise_S`, `look_L/R/up/down`.
  - Mouth, paired L/R: AU10, AU12, AU14, AU15, AU16, AU20.
  - Mouth, single: AU17, AU18, AU22, AU23, AU24, AU25.
  - Mouth, other: `jaw_open`, `jaw_side_L/R`, and Rhubarb `A`-`H` plus `X`, baked from muscle and jaw mixes.
  - Presets are stored as the custom property `face_presets` on the armature: happy, warm_smile, surprise,
    frown_concern, thinking, sad, wink.
- **Skipped.** Each of these has no geometry on her to act on:
  - AU9: the nose is a rigid dot.
  - AU11: there is no nasolabial fold.
  - AU13, cheek bulge, dimple pit: the cheeks are the rigid clock disc.
  - AU19, AU28, AU38/39: no tongue, no lip volume, no nostrils.
  - AU43: this is the same as blink.
- **Toga room limits the jaw.** The lips sit 21 mm above the toga top, so JAW_DROP is capped at 10 mm.
  Minimum clearance: D 2.05 mm, AU16_L 1.1 mm, preset surprise 0.62 mm. AU15 at -40 mm put the lip 3.6 mm
  INTO the toga; it was reshaped to corners -30 mm with a +6 mm centre arch.
- **Glint is not mirrored** (it sits upper-left in both eyes), so the eye symmetry check excludes it
  (218 verts). The asymmetric look-flatten counts come from the glint too: 250 vs 103.
- **Neutral.**
  - Rig vs pre-rig, both Cycles at 64 spp: 0 px, max 0.
  - Rig vs test-8 (EEVEE): 45,248 of 420,000 px differ by more than 12/255. That is engine noise and grain.
  - In Cycles the inverted-hull outline has to be an emulated backface cull: opaque to camera rays on
    front faces only, otherwise the face renders brown or black.
- **Pupil vs rim.** On look extremes the pupil tucks up to 3.35 mm under the 5.5 mm-radius rim tube and
  never passes its centreline.

## Rig 5 (2026-09-29)

This round rebuilt the upper limb only: bones, weights and animation. The mesh shapes are untouched
(face-key sha 58506fb855580c29 across 34 blocks, identical to rig 4). The outputs are in
`D:/scratch 2026/her-c2/rig5/`.

**Changes**
- **GH pivot.** Moved to 10 mm inside the rim (`--ghin`); it was 40–55 mm inside. R GH is at 49.0 mm of
  arm arclength, L at 50.6 mm. The elbow sits at 56% of the arm past GH.
- **Clavicle.** Now deforming and animated: elevation is (el−30)/3 above 30° (about 2:1 rhythm), plus
  protraction.
- **Elbow.** A pure hinge on the forearm rest X, limited to 0–145° from straight. The rotation mode is
  YXZ (twist first, then hinge). The R hinge was chosen to flex forward, because the art's R rest bend
  is 0.3° and defines no plane. The L hinge is the art's own bend plane (rest flex 31.7°).
- **Forearm.** Split into forearm + forearm_tw, with the twist spread half-and-half.
- **Wrist.** Limits are measured from the neutral wrist (forearm line), not the art rest. The art's R
  hand sits 32° off neutral. Limits: flexion/extension 70/70, Y ±12, radial 20 / ulnar 30.
- **Weights.** Clavicle/upper/forearm/twist/hand gradients; the glove cuff blends onto forearm_tw.
- **Walk.** Swing opposite the legs, 4 + 18·sw about the shoulder. Elbow flexion 18 + 12 on the
  forward swing (lag 2), relaxed curl, wrist follow-through lagged 4, small clavicle protraction.
  Blend is smooth(2,28)·(1−smooth(88,110)).
- **Wave.** Elbow at 84° elevation, 20° into the scapular plane, forearm vertical, palm forward.
  Elbow waves 15° (2–3 cycles), with a 4° wiper and a little wrist deviation. There is an
  anticipation dip; on the way down the elbow lags 3 frames and the wrist flops.
- **Pelvis bob.** The default loading knee is now `--kl` 25.
- **Markers.** Distinct: R_up 62, L_up 78.
- **check_rig.** Now outputs `arms_rig5`: ROM table, reversed and over-145 elbow frames, pronation per
  bone, wrist ranges, glove-to-disc per side, vertex speed/acceleration on arm and glove, and the
  shape-key hash.

**Numbers (checks.json)**
- Limit violations 0, scale≠1 0, disc clip 0.
- Stance drift max 4.09 mm (heel roll, as in rig 4), sole jump 2.76 mm.
- Rest diff: 2 px, max 17.
- GLB re-imports clean with 17 keys.
- Elbow from straight: R 15.3–109°, L 8.0–31.7°. Never reversed, never over 145°.
- Humerus elevation: R 18–86°, L 18–28°.
- Pronation: R −148° total (−74° per bone), L 0–129°.
- Wrist: flexion −25..13°, deviation 0..37° (inside the neutral-based limit).
- Glove-to-disc: R 31.9 mm (f142), L 87.4 mm.
- Bob per step: 7.2 / 8.6 / 8.6 / 8.5 / 8.5 mm (was 3.7).

**Open, not solved**
- **Bob.** The target of 20–30 mm is not reachable on her 29%-of-height legs without a deep crouch:
  kl 35 gives about 15 mm, but needs a 35° knee and ankle-guard frames. This is escalated to the owner.
- **Wave.** Inward travel is capped near 8° by the disc.
- **Vertex speed.** glove_R peaks at 132.9 mm/frame at f173 (acceleration 105.6), where the wrist flops
  on the lower. There are 17 walk frames over 40 mm/frame (worst 63.7 at f65). Slow the lower, or cut
  the flop.
- **Pronation.** The large totals (−148° R in the wave, 129° L) are within the limits but need a visual
  check up close.
- **Wave-close camera.** Reuses the side movie camera (target z 0.58). It crops the glove top in some
  frames and needs its own target.
- **Not produced:** `arm_deform_close.png`, `walk_contact_sheet.png` (rig 5), `rest_front_diff.png`
  (the diff number is in checks.json only).
- **Film quality.** Every film is a quick test: EEVEE, 16 samples, 960×540, test-8 materials, on a
  flat grey studio sweep with dim fill. None is near final look.

## Rig 5b (2026-09-29)

Outputs are in `D:/scratch 2026/her-c2/rig5b/`. The numbers come from checks.json (check_rig).

**Forearm rotation**
- Forearm rotation is now anatomical: `sup = atan2(n·bend, n·medial)`, where 0 means the palm faces the
  midline, +85 is full supination and −80 is full pronation.
- The keyed twist is `tau = −s·(sup − sup0)`, split half-and-half between forearm_ and forearm_tw_.
- R hinge re-picked (`--rsup0 85`). Her R arm is straight, so the art does not fix its hinge. Side effect:
  rest reads as 2.2° of hyperextension.
- R: per-bone twist −50..0, total −100 from rest, anatomical rotation −15..85, 0 frames outside human range.
- L: per-bone twist 0..55, total 111 from rest, but anatomical rotation reads 20..130.6.
- **Escalated:** L's art hinge (31.7° bend) puts her rest palm at 130.6°. That is outside human range at
  rest, but it is her art, so the rest pose was left unchanged.
- The close sheet `arm_deform_close.png` shows no candy-wrapper wrist. The forearm stripes stay level at
  both twist extremes. The cuff hides the wrist itself.
- A small elbow crease dimple shows at 98° of flexion.

**Wave lower**
- The ease is now 24 frames long. The elbow lags the shoulder by 3 frames and the wrist by 5, and the flop
  bump is removed.
- glove_R peaks at 62.6 mm/frame at f169, down from 133 in rig 5. The speed curve rises and falls
  smoothly, with 0 pops.
- The raise still peaks at 101 mm/frame (f124). It is smooth, not a pop.

**Walk**
- 54 mesh-frames run over 40 mm/frame. All of them are natural swing peaks: 0 are pops and the worst
  neighbour ratio is 1.07.
- The elbow kink came from `max(0, sw2)`. It is replaced by a smooth positive part.
- `mix()` returned ARM0 by reference, which corrupted the rest intents and caused the f181 pop. Fixed by
  copying (`dict(...)`).

**Pop checks (check_rig `pops_rig5b`)**
- Criterion: a frame is a pop if v > 1.5× the mean of its neighbours AND above a floor of 8 mm/frame or
  3°/frame.
- Result: vertex 0, hand 0, bone 0.

**Look**
- `studio_look()` replaces the flat grey with a warm floor (0.46/0.38/0.31, roughness 0.92), a warm world,
  soft fill at 520 W and a floor bounce. It is applied only in the movie and review stages, so rest_front
  is unaffected.
- The film camera for the wave (`fit_cam`) is fixed and keeps glove_R + arm_R inside a 7% margin on
  f104–191.

**Unchanged and clean**
- Rest diff: 2 px (max 17/255). Face hash: 58506fb855580c29. Limit violations: 0. Disc clip: 0.
- Sole jump: 2.76 mm. Foot drift: 4.09 mm. GLB: ok.

**Pelvis bob, owner ruling "go like a real person" (not built)**
- Rig 5 gives a 10.6 mm pelvis range over f31–91, about 8.5 mm per step. The stance leg is straight at
  mid-stance, and the loading knee is about 25°.
- Sweep (`--fast`, `_sweep/`):
  - Knee profile alone moves the bob by less than 1 mm. With a straight mid-stance knee it is 10.7 mm; with
    an 18° loading knee it is 9.8 mm.
  - Only leg inclination helps. `--lag 0.11` gives 13.6 mm, but sole jump rises from 2.76 to 3.0 mm.
  - `--lag 0.12` or `0.13` gives 13.7–14.8 mm, but the ankle guard then fires on 52–73 frames and sole
    jump reaches 3.1–3.6 mm.
- Limit:
  - Inverted-pendulum excursion scales with LEG length and step angle, not with height.
  - Her hip-to-ankle length is about 0.25 m, and the step is 0.245 m. A human-equivalent figure is about
    3–5% of leg length, which is 10–18 mm.
  - 25–30 mm would need about 23° of leg inclination at double support. That means a longer stride
    (changing the approved gait) or a crouch (ruled out).
- Knobs `--k3/--k45/--kmid/--kts` were added. Their defaults equal rig 5, so the build is unchanged.
- Escalated to the owner: accept about 14 mm with lag 0.11 (sole jump +0.24 mm), or lengthen the stride.

**Still reads as cheap CGI**
- The horizon is a hard floor/backdrop line, not a soft cyclorama.
- move.mp4 and move_side.mp4 show the rig 5 bob (8.5 mm/step), because no bob change was adopted. The
  side film shows it.

## Rig 5c (2026-09-29)

Outputs are in `D:/scratch 2026/her-c2/rig5c/` (move.mp4, move_side.mp4, wave_close.mp4, arm_deform_close.png,
walk_contact_sheet.png, rest_front.png, rest_front_diff.png, her-rig5c.blend, her-rig5c.glb, checks.json).
Only `rig_her.py` was edited. Defaults for `--out` and `--tag` are now rig5c.

**Bob (owner ruling "go like a real person")**
- Default `--lag` is now 0.11 (was 0.10). The stride and the knee were not changed.
- `--fast` sweep: lag 0.11 gives pelvis z range 14.1 mm, sole jump 2.87 mm, 26 ankle-guard frames.
  Lag 0.115 gives the same 14.1 mm, but sole jump 3.15 mm (over 3.1) and 45 guard frames. 0.11 was chosen.
- Full build: pelvis rise/fall 14.85 mm over f31-91, per step 9.3 / 10.7 / 10.7 / 10.7 / 10.8 mm (was 7.2-8.6).
  Sole jump 2.87 mm, foot drift 4.09 mm. Pops: vertex 0, hand 0, bone 0.

**Floor**
- `studio_look()` hides the 30 m `backdrop_floor` in the films and adds a seamless sweep `cyc`: a flat disc
  (r 9 m) that curves up on a 3.5 m radius quarter circle into a 9 m wall all round her. It has the same warm
  material, so every camera yaw sees a soft floor-to-wall gradient and no horizon line. Camera clip_end is 200 m.
  Options: `--cycr`, `--cycc`. rest_front is untouched (`studio_look` is not run in the build stage).

**Elbow crease**
- Weights only, no shape key (a new key on the arm meshes would change the shape-key hash). After the weights
  are set, the elbow ring (+/-0.14 of arm arclength) is relaxed toward mesh-neighbour weights: 14 Laplacian
  iterations at 0.8, faded out toward the ring edge. Options `--elw --eln --ela`. No vertex is moved.
- Probe at 98-101 deg flexion: at the earlier setting (0.07 / 6 / 0.6) the dark dimple stayed; at 0.14 / 14 / 0.8
  it is gone, and the inner corner is a clean tight notch with a smooth outer curve.
- NOT measured: mesh volume at the bend. "No volume loss" is judged by eye only.
- New `--shots 1,2` option in stage review renders only those deform shots (probe use).

**Numbers (checks.json)**
- Limit violations 0, disc clip 0, scale != 1 0. Rest diff 2 px (max 17/255). Face hash 58506fb855580c29 (34
  blocks). GLB imports ok, no missing keys. Glove-to-disc min 30.7 mm.
- R elbow from straight -2.2..101 deg (the -2.2 is the rig 5b rest hyperextension side effect).

**Left**
- Ankle-guard fires on 26 frames (guard values up to about 20 deg on L f82-88); it is a consequence of the lag.
- Bob is 14 mm, about 1.3% of her height. It reads as subtle, as the ruling on leg length implies.
- L rest forearm rotation 130.6 deg (art) is still escalated from 5b.

## Face rig 2 (2026-09-29)

This round fixes the refuter's FAIL on face rig 1. Files: `face_rig.py`, `check_face.py`. Outputs are in
`D:/scratch 2026/her-c2/face2/`. No new meshes, and every key name is kept (Rhubarb A-H and X included).

**What changed**
- **Blink.** The eye now closes vertically. The upper rim comes down and the lower rim comes up, and they
  meet on a curved line (SAG 0.35). The width is kept. Sclera, pupil and glint are clamped between the
  lids, so the lid cuts the pupil instead of the pupil shrinking. Because clamping is not linear, there are
  in-between correctives at b = 0.2, 0.4, 0.6 and 0.8 (`blink_ibNN_S`, hat drivers).
- **Lid follow.** The upper lid now follows the eye DOWN only (a TRANSFORM constraint). Rig 1 also
  followed up, which stopped a full blink at b 0.81 and showed the pupil.
- **Look fade.** Each look key is multiplied by a fade on an equivalent blink:
  B = b + (1-b) * sum(w * closing muscle). The weights w come from each key's rim travel, stored in
  `face_rig_info.json` as `look_fade_close_weights`. The fade is solved with the perpendicular look also at
  full, so diagonal looks stay inside. The tolerance is at least 3 mm, or the open eye's own overhang
  under the rim band if larger.
- **Blender limit.** The simple-expression parser rejects deep call nesting, so B is left unclamped. The
  outer clamp makes that harmless.
- **Cancel keys.** Every eye muscle key has a `blink_x_*` cancel, so a full blink looks the same whatever
  else is set.
- **Lashes.** Roots ride the rim only. Raise keys are capped.
- **Mouth.** AU15 was rebuilt so the corners turn down. `frown_concern` is now AU17 0.4 and AU23 0.1.
- **Render.** Cycles persistent data is now OFF. With it on, film frames 49-63 rendered both eyes black
  (stale geometry after the closed states); the same frame rendered fresh was correct.
- **Checks.** `check_face.py` found three faults in its own metric, all fixed. Rim vertices are sparse at
  the top and bottom of the oval, so pupil escape is now measured against separate upper and lower rim
  envelopes, not one span per column.
- **GLB runtime.** Drivers do not export. The runtime must reproduce the formulas stored on the armature
  (`face_driver_formulas`).

**Numbers (`checks_face.json`)**
| Check | Result |
|---|---|
| Neutral vs pre-rig Cycles | 0 px, max 0; geometry deviation 0 mm on all 5 meshes |
| Magenta pupil pixels at full blink | 0 on all 7 looks, wink, blink + all eye muscles, blink + lid_lo + AU6 + AU7 |
| Pupil past rim outline, blink x look (b 0-1, 10 looks) | worst 4.47 mm, at b 0.2; rendered b 0.2 up and up-left, nothing visible |
| Pupil past rim outline, keys and presets | worst 3.17 mm |
| Lash root to rim | 0.88 mm at rest, 3.07 mm max |
| Lash to ticks / wreath | 7.29 mm min over keys and presets (rest 18.5) |
| Obstacle overlaps | 0 |
| Max radius fraction | 0.794 over keys and presets; 0.788 over 200 random combinations |
| Corner drop | AU15 24 mm, frown_concern 25.6 mm, sad 26 mm (rest -22 mm, a smile) |
| Lips to toga | 1.1 mm min over keys, 6.41 mm for sad and frown |
| GLB | 23/23/17/17/30 morphs, 13 bones, re-import ok |

**Left**
- **Random stacks are not clean.** 108 of 200 random combinations put the pupil more than 3 mm past the
  rim, up to 33.7 mm. Probe renders show it visibly. The cause is stacked closing muscles (AU4, AU6, AU7
  and lid_lo together at about 1): each key clips the pupil on its own, and those clips do not add
  linearly. The fix is pairwise correctives, or a runtime cap on the sum of closing muscles.
- **Random mouths.** Toga clearance goes down to -13.2 mm (lower lip over the toga) and 64 of 200 random
  combinations have inverted mouth columns. Both come from heavy mouth stacks with the jaw.
- **Sad.** It reads through a partly closed round eye plus the mouth, with no inner-corner tilt. It could
  read sadder.
- **EEVEE diff.** The diff against test 8 in EEVEE is still 45,248 px, the same as rig 1: a renderer
  difference.

## Rig 5d (2026-09-29)

Outputs in `D:/scratch 2026/her-c2/rig5d/`: move.mp4, move_side.mp4, wave_close.mp4, raise_strip.png (every 2nd
frame f108-136), wave_peak_front.png, wave_peak_tq.png (f143), her-rig5d.blend, her-rig5d.glb, checks.json.
Edited: `rig_her.py`, `check_rig.py` only. Defaults for `--out`/`--tag` are now rig5d.

**Wave raise (refuter note 1)**
- The 5c raise was a quintic ease over 14 frames that moved in about 8. Now a cubic smoothstep over `--upn 18`
  frames (R_UP 112, was 116), humerus first, elbow `--eu 4` frames behind, wrist `--wu 7` behind (same layering as
  the 5b lower). Anticipation dip 10 deg (`--antd`), starting 10 frames before. Wave phase and envelope start at
  W0 = R_UP + UPN = 130 (5c: 128), brow-up keys shifted with it. The lower is unchanged.
- glove_R raise peak 63.9 mm/frame at f123 (5c: 100.8). Target was 12-16 frames at <= ~65 mm/frame: 16 frames
  gave 72.8 mm/frame, so the length went to 18 to meet the speed. Say so if 16 is a hard limit.
- Look (raise_strip.png): it eases. f112-118 the arm barely moves, f120-126 is the fast part, f128-130 settles into the wave.
  Not a snap.

**check_rig.py (notes 2 and 4)**
- The blanket right-arm exemption is gone (bone flags, acceleration flags, vertex flags). New honest numbers:
  whole-clip glove_R peak **63.9 mm/frame at f123** (raise); lower 59.5 (f170); walk 59.9 (f40). Now flagged and
  visible: forearm_R 8.57 deg/frame at f126 (thr 8, 7 frames, the raise plus the first wave beats); glove_R
  over 40 mm/frame on 38 frames (walk swing plus wave); glove_L 17 (walk swing). Not fixed, only reported.
- Right elbow: 22 frames read below -0.5 deg geometrically (art rest = -2.24 deg, frames 0-6, 114-116, 181-191).
  `elbow_hyperext` now lists them: **22 rest-pose-from-art, 0 beyond the art rest.** The Limit Rotation
  constraint count (0) is separate. Both are in checks.json (`geometric_elbow_hyperext`).
- New in checks.json: `vertex_speed_peaks` (per-mesh whole-clip / raise / lower / walk peaks) and `walk_f30_90_wrist`.
  Note: `wrist_dev` in `check_rig` is the bone euler z (relaxation from the art), NOT the geometric radial
  deviation; use the probe (`p_probe.py`, copied from the refuter) for the geometric number.

**Walk wrist (note 3)**
- Right hand walk relax `k` 0.6 -> 0.88 (`--walkk`). Probe (geometric radial deviation, f30-90): **3.7 to 9.9 deg**
  (5c: 13.5-19.9). Wrist flexion 5.7 to 21.9 in the 5d 0.75 pass; not re-read at 0.88.

**Owner "fix": arm forward at the wave**
- Wave pick order now starts at scapular-plane 30 / 26 / 32 deg (was 20). Picked elevation 80, plane 32 (84/30 and
  84/26 gave glove gap 25.5 / 27.9 mm, under the 30 mm rule). Glove-to-disc min 33.3 mm (f144; was 30.7); disc clip 0.
- Probe over the wave (f132-154): forearm 1.5-26 deg off vertical, elbow 19-15 mm below the shoulder, palm.front 0.72-0.92
  (5c 0.95-0.97, so the palm is a little less square to the front now; not tuned), elbow flex 72-98, humerus elevation 84 at the start.
- Front still: the whole arm now reads, upper arm outside the rim, elbow, forearm up, palm front. Three-quarter
  still: the upper arm is mostly hidden by the rim and the elbow still looks like a small stub at the edge; only partly fixed.

**Numbers unchanged**
- pops vertex 0 / hand 0 / bone 1 (forearm_R f151, 3.03 deg/frame, ratio 1.55: a wave-oscillation quirk just over the
  1.5 rule; 5c had 0). Limit violations 0. Disc clip 0. Rest diff 2 px (max 17/255). Sole jump 2.867 mm, bob 14.85 mm,
  foot drift 4.09 mm. Face hash 58506fb855580c29, 34 blocks. GLB imports, 17 keys, none missing.

**Left**
- forearm_R 8.57 deg/frame (thr 8) and one 3.03 deg pop at f151 in the wave; palm.front 0.72 minimum.
- 3/4 view still shows the elbow as a stub; the disc is wider than the reach.
- Process slip: one probe run overlapped another agent's Blender (pid running at start). It finished clean.

## Rig 5e (2026-09-29)

Outputs in `D:/scratch 2026/her-c2/rig5e/`: move.mp4, move_side.mp4, wave_close.mp4, raise_strip.png, wave_peak_front.png,
wave_peak_tq.png, her-rig5e.blend, her-rig5e.glb, checks.json. Edited: `rig_her.py` only (defaults now rig5e). The
18-frame humerus raise is unchanged. New options (baked as defaults): `--eln 22` elbow raise duration (elbow starts 2
frames behind the humerus), `--eld 28` / `--wld 28` elbow and wrist lower durations, `--wu 5` and `--wun 20` twist/wrist
raise start and length, `--envo 12 --envo2 0` wave fade-out window, `--wavesup -30`, `--gap 0.025`, `--wflex`, `--cands`.
The sweep runs are in `rig5e/a1..f3` (sweep.sh, diag2.py).

**Fixed**
- Pop: the 3.03 deg/frame at f151 was a wave turnaround falling between two frames (speed 0.08 then 3.03). A longer
  fade-out (frames 144-156 instead of 146-154) moves it. Bone pops 0, vertex 0, hand 0.
- forearm_R speed: 8.57 -> **7.56 deg/frame** (f126), 0 flagged frames (5d: 7). The elbow raise takes 22 frames and the
  elbow and twist lower take 28; the lower was also over 8 (8.11 at f172).
- Palm: forearm rotation -15 -> -30 deg anatomical (twist total -57.7 per bone, limit -82.7; human about -80).
  Palm-forward over f132-154: **0.88-0.99** (5d 0.72-0.92). The wrist is untouched. Twist starts at f117 so the palm is square when the wave starts.
- glove_R peak 59.9 mm/frame (walk, f40); raise 57.2, lower 55.4.

**Not fixed: 3/4 view**
- Looked at wave_peak_tq.png: the upper arm is still hidden behind the rim and the elbow still reads as a small stub.
  The front view reads well (elbow, forearm up, palm out, spread fingers).
- Reason: the glove-to-disc gap is the limit. Sweep at elevation 80: plane 32 -> 27.1 mm, 36 -> 22.9, 38 -> 23.7 (el 82),
  40 -> 19.2, 45 -> 21.4 and below (fails the 25 mm rule). Going further forward also drops the palm (0.62-0.72 at plane 40-45 with twist -15..-27).
  The elbow only moves about 1 cm forward from plane 32 to 45. Forearm tilt (`--wflex 96`) drove the glove to 3 mm of the disc.
  Stopped at the best natural pose: elevation 80, plane 32, elbow 15-19 mm below the shoulder, forearm 1.5-26 deg off vertical.

**Numbers kept**
- Limit violations 0. Disc clip 0 (all four meshes). Glove-to-disc 27.1 mm (5d 33.3; the target is now 25). Rest diff 2 px.
  Sole jump 2.867 mm, bob 14.85 mm, foot drift 4.09 mm. Walk wrist 27.6-28.3 dev bone euler, flex -15.9..1.7 (unchanged from 5d).
  Face hash 58506fb855580c29, 34 blocks. GLB imports, 17 keys, none missing. Probe hits: arm_L|toga 192 frames, identical to 5d.
- Elbow beyond the art rest: 0 frames.

**Left**
- 3/4 elbow stub (above). The head-on ratio between disc width and reach cannot be beaten by pose alone; a narrower stance
  of the disc in that camera, or a camera moved toward her right, would show the upper arm.
- Process: the laptop lost power mid-sweep; rig_her.py was checked (parses, all edits present) before continuing.

## Face rig 3 (2026-09-29)

Files: `face_rig.py`, `check_face.py`. Outputs in `D:/scratch 2026/her-c2/face3/`.

**What changed**
- Every face key is driven now. Inputs are armature props `in_<key>`. Intermediate values are armature props `cx_<step>`. Bones feed in as TRANSFORMS vars.
  - The whole chain is one ordered formula list, `face_caps.json`, also stored as `arm['face_caps']`. Its sections are inputs, bones, steps and keys.
  - The Blender drivers are generated from the same strings, so the web runtime evaluates exactly what Blender does. GLB morphs stay linear and drivers do not export.
  - Checked: the formulas evaluated in pure Python match Blender's key values to 3.1e-5 over 60 random states.
- Eye cap. The close muscles on each lid share one unit of weight:
  - fu = 1/max(1, AU4+AU6+AU7) and fl = 1/max(1, AU6+AU7+lid_lo), with a muscle on both lids taking the min.
  - Blink is scaled by 1 - A, where A = (1-b)*max(capped upper sum, capped lower sum).
  - Looks fade on B = Wb*b + (1-b)*sum(w*capped muscle).
  - Why it holds: every single key keeps the pupil inside, lids are linear, so a mix with weights summing to 1 or less stays inside.
- Mouth cap. Each key has a share of the toga room (margin 0.8 mm) and of the lip gap (margin 0.2 mm), taken per lip column (25 columns).
  - Each column's sum stays at or below 1, and a key takes the min factor over the columns it touches.
  - The toga top is the max over a +/-1 cm bin window. A single bin lookup flipped at a bin edge (x = -15 mm, empty bin) and read a 0.07 mm move as 91% of the room.
  - Five-column bands were also too coarse: they added AU15_L and AU15_R where the two never meet, which halved happy, sad and frown.
- Sad: AU1 is now gt 1 + 0.18(1-o)^2 with lash tilt_in -10, and the sad preset is AU1 1 + AU15 1 + AU17 0.5.
  - AU4 was dropped from sad; frown_concern keeps it.
  - The eye tops tilt up at the nose and the tall oval is kept.
- check_face now runs 500 random states (seed 29) and writes the 6 worst pupil and 6 worst toga states to `_stress_states.json`. Two new renders use them: `stress_sheet.png` and `sad_close.png`.

**Numbers** (face 2 -> face 3)
| check | face 2 | face 3 |
|---|---|---|
| random states with pupil past the single-key baseline (3.17 mm, blink-key metric artefact) | 108 of 200 over 3 mm, max 33.7 | 0 of 500, max 3.15 |
| toga clearance under 0.5 mm | min -13.2 | 0 of 500, min 0.66 |
| inverted mouths | 64 of 200 | 0 of 500 |
| presets (happy / frown / sad corner drop, mm) | -37.7 / 25.6 / 26.0 | -37.7 / 25.6 / 26.0; surprise 5.2 -> 4.3 |
| neutral px vs pre-rig | 0 | 0 |
| magenta pupil px (10 blink states) | 0 | 0 |
| GLB | 23/23/17/17/30 morphs, 13 bones | same |
| steps in face_caps | - | 272 |

**Seen**
- stress sheet: no pupil past the rim and no lip into the toga. Three of the twelve are crumpled zig-zag lips (#38, #75, #102): legal, but they read cheap.
- expressions: all eight presets are true to face 2. Sad tilts correctly.
- film: 94 frames step cleanly.

**Left**
- Random mouth piles of AU20/AU14/AU16 on one side can still make a zig-zag lip. The caps guard geometry, not taste, so the app should play presets or blends near them rather than free random stacks.
- `sad_close.png` frames too low: the eye tops are cropped. Move the camera from z 0.81 to about 0.86.
- `_neutral_diff.json` was computed by hand (PIL). No overlay render was run in this round.

## Rig 5f (2026-09-29)

Outputs in `D:/scratch 2026/her-c2/rig5f/`: move.mp4, move_side.mp4, wave_close.mp4, raise_strip.png, wave_peak_front.png,
wave_peak_tq.png (both f139, eyes open), her-rig5f.blend, her-rig5f.glb, checks.json. Edited `rig_her.py` and `check_rig.py`.
Sweeps: `rig5f/g0..g4, h1..h4` (sweep.sh, diag3.py). The laptop lost power twice; both files were re-checked (parse, edits present).

**3/4 view (refuter fail of 5e)**
- The 5e diagnosis was wrong: the upper arm was foreshortened, not hidden. The lever is the scapular-plane angle, not more
  forward flexion. Plane 32 -> 10 (elevation 80 unchanged) swings the humerus back toward the side plane. Sweep (diag3.py: glove-to-disc gap /
  upper-arm angle to the 3/4 camera, clavicle elevation 6.7 except plane 32): plane 32 (wavece 16.7) 21 mm / 18-19 deg; 16 35.4 / 33; 12 38.5 / 37; 8 41.6 / 41.
  These diag gaps are not the same metric as check_rig's glove-to-disc (44.2 mm final).
- Clavicle depression (`--wavece 6.7`, 10 deg less elevation than 5e's 16.7) changed the gap by 0.3 mm (38.5 vs 38.8, g1 vs g4 at plane 12,
  wavece 6.7 vs 11) and the view angle not at all (37 both), so it is a small lever here; kept because the refuter suggested it.
- Look: in wave_peak_tq.png the elbow, upper arm, forearm, glove now read clearly beside the disc; in wave_peak_front.png the upper arm goes out, the forearm up, palm forward.
- Wave pick order is now (80,10), (80,14), (84,14), (80,20), (80,32); picked 80/10. `--gap` default 0.025.

**Wider wave**
- Humerus yaw beat +-8 deg in the scapular plane with the elbow beat (`--wavehy 8`, phase 0.5) and wrist wag 15 (was 10, `--wavewd`).
  Sweep: hand lateral travel 46 -> 55 mm with the yaw (a negative yaw sign gave 40 mm, so the sign matters). The elbow beat stays
  +-15 deg: it cannot grow, forearm_R is at 7.56 deg/frame against 8 with the 12-frame period.
- hand_R peak 7.61 deg/frame at f145 (limit 8; was 5.07), upperarm_R acceleration 2.39, no spikes.

**Numbers**
- Glove-to-disc 44.2 mm (f144; limit 25). Palm-forward 0.963-1.0 (f132-154). Forearm 1.4-25.3 deg off vertical, elbow 14-19 mm below the shoulder.
- forearm_R 7.56 deg/frame, 0 flagged. Bone/vertex/hand pops 0. glove_R peak 59.9 (walk, f40), raise 55.5, lower 56.9.
- ROM: limit violations 0; hand_R.z 0..40 (limit 51.9); upperarm_R.y -57.7..57.5; clavicle_R.z -6.7..0; upperarm_R.x -25.1..7.8; upperarm_R.z -39.8..20.5; twist total -57.7 (limit -82.7); forearm rotation -30 anatomical, 0 frames out of human range.
- Disc clip 0. Rest diff 2 px (max 17/255). Sole jump 2.867 mm, bob 14.85 mm, drift 4.09 mm, floor 0. Walk wrist unchanged.
  Face hash 58506fb855580c29, 34 blocks. GLB imports, none missing. Probe hits arm_L|toga 192 frames, same as before.

**check_rig rest diff**: it now looks for `rest_front.png` in `--out`, then next to the blend, and writes an explicit `error` if it is in neither
(5e's re-run wrote `{}` with no reason). It does not render the rest pose itself (that needs the build's camera and lights); a fresh check on a blend
from `--stage build` finds the render beside it. Not tested with a blend lacking the render.

**Left**
- raise_strip.png (3/4 camera, f108-136, viewed): the arm shows in every frame, upper arm and elbow separate from the rim, hand rises to head height by f128, palm and spread fingers face the camera from f130. No frame where the hand sprouts from the rim was seen at f120-122, but only 2-frame steps were looked at.
- The 3/4 film frames were not reviewed frame by frame.

## Face rig 4 (2026-09-29)

This round answers the face 3 refute (`D:/scratch 2026/her-c2/face3-refute/REFUTE.md`). Outputs are in
`D:/scratch 2026/her-c2/face4/`. Only `face_rig.py` and `check_face.py` were edited.

**Changes**
- One-sided mouth keys: the mask is now `sstep(-1, 1, s*u)`, so the falloff runs across the whole lip and L+R sums to 1. It used to be a narrow band near the corner.
- AU15 lip part raised to `0.005 + 0.016*(1-u^2)`. AU6 lower-lid lift is stronger (`gb` 0.62 to 0.48).
- Presets:
  - happy: AU6 1.0.
  - warm_smile: AU6 0.6.
  - surprise: AU15 dropped, AU25 0.6 + AU22 0.85 + jaw 0.3.
  - frown_concern: AU1 and AU23 dropped, AU15 1.0.
  - sad: lid_up dropped, AU15 1.0.
  - Why: a raise-type lid key (AU1/AU2/AU5) mixed with a clip-type key cannot un-clip in linear morphs. That mix left the invisible chord over the pupil.
- Mouth toga cap: room is now measured against the toga ceiling over every x the vertex can reach. The reach is the largest single-key dx each way, plus or minus 1 bin. A vertex whose reach room is 2 mm or less falls back to its own +/-1 bin window. Room min is 5.02 mm.
  - Summed reach failed: the corner reached the rope knot, which crushed AU15.
- `check_face` toga_clear now uses the same +/-1 cm window. It takes a `FACE_SEED` env var and writes `checks_face_seed<N>.json`.
- sad_close camera z is 0.86. Its tiles are now neutral / sad / happy / frown.

**Numbers (seeds 29 / 4242 / 777)**
- Pupil over baseline: 0 / 0 / 1 of 500. Max 3.15 / 3.15 / 3.47 mm, baseline 3.17.
- Toga under 0.5 mm: 0 / 0 / 0. Min 2.37 / 2.48 / 2.43 mm.
- Inverted mouths: 0.
- Other checks:
  - runtime formula vs Blender: 7.2e-5;
  - neutral: 0 px (PIL diff, `_neutral_diff.json`);
  - GLB: 23/23/17/17/30 morphs + 13 bones.
- zig probe: 0 flagged, including the refuter's calibration states (#38 was 3) and single AU15_L/R and AU20_L.
- Preset corner drop / toga (mm):
  - happy -29.5 / 5.7
  - warm_smile -31.4 / 19.3
  - surprise -14.8 / 4.2
  - frown 11.5 / 8.9 (face 3: 25.6)
  - sad 11.7 / 8.9

**Seen** (expressions_sheet, sad_close, zig_sheet)
- happy: lower lids visibly lift and the eyes read squashed.
- sad and frown: the pupil top follows a curved lid line; no chord, glint whole.
- AU20_L single: a smooth lopsided curve.

**Left - still fails the look bar**
- Single AU15_L / AU15_R and the AU12_L+AU15_R smirk still read as an S with a hooked end. The zig metric passes them, so the metric does not catch this.
- frown and sad mouths are still a thin, nearly flat stroke. The caps halve the AU15 drop.
- The surprise mouth reads as an open smile crescent, not an O.
- Seed 777: 1 of 500 pupil at 3.47 mm (AU7_L 1 + look up 27 deg, past the 25 deg range, + lid_lo 0.23). This is pre-existing; a gentler look-up fade would fix it.
- Raise x clip lid mixes in random combos still chord. Only the presets avoid it.

## Rig 5g (2026-09-29)

Outputs in D:/scratch 2026/her-c2/rig5g/: move.mp4, move_side.mp4, move_front.mp4 (new), wave_close.mp4, wave_peak_front.png, wave_peak_tq.png
(f139, eyes open), her-rig5g.blend, her-rig5g.glb, checks.json, lower_tq.png and lower_front.png (f164-178 contact sheets, looked at).
Edited rig_her.py and check_rig.py only. Sweeps: rig5g/a5, a2, a7, a85, c1, d1 (sv.sh builds a variant and runs ov.py, the overlap diagnostic).

**1. Lower (refuter: fist pasted on the disc face, f169-172)**
- Measured first (ov.py: share of glove vertices that project inside the disc silhouette AND sit nearer the camera than the disc centre):
  5f 3/4 view 44% at f168, 47% at f169, 45% at f170, 38% at f171, 25% at f172; front view 0% in every frame. So the fault is 3/4 only.
- Cause: on the lower the elbow's bend side (B) blended to the walk pose with the humerus, so the forearm swung forward across the disc
  front while the elbow was still bent. Fix: new option --lowb (default 0.85): from R_DN on, B keeps the wave's value until the elbow has
  extended (weight smooth(0, LOWB, rl)). 3/4 overlap is now 0% from f167 on (7.0/4.5/1.6% at f164-166, before the arm is low).
- Cost: lowb 0.5 flagged upperarm_R (9.84 deg/frame at f176), 0.25 flagged 14.07 (f179) and one acceleration spike, 0.7 gave 8.06 (1 frame). 0.85 clears it:
  upperarm_R not flagged, accel 2.39, no spikes. glove_R lower peak rose 56.9 to 60.0 mm/frame (f172), inside the 65 keep-list cap.
- Side effect seen in the front film: the hand goes out to the side a little further at f174-178 before the arm settles.

**2. Cuff (detached ring)** NOT FIXED BY WEIGHTS - partial, needs a decision.
- Changed: glove cuff now follows the forearm (CFA 1.0, was 0.5 shared with the hand) and the arm end no longer follows the hand (ARMHD 0.0, was 0.5).
  Options --cfa and --armhd; the 5f behaviour is --cfa 0.5 --armhd 0.5. Numbers unchanged (limits 0, clip 0, pops 0, rest 2 px).
- Compared f170/173/176 at 2x before/after (cuffcmp.png, cuffd1.png in rig5g/): no visible difference. The hollow mouth with the orange arm end inside is still there.
- Measured why (cuffgeo.py, rest pose): the arm tube is 31 mm radius; the glove cuff is a flared bell, mouth 28 mm at 42 mm before the wrist end
  growing to 48-49 mm at the wrist end. So a 17 mm gap between arm and cuff is in the rest MESH (build_her.py), not the weights. Closing it means
  reshaping the cuff in the build script (not allowed in this round) and would change the rest render. Owner/art decision: keep the bell as the art, or narrow it.

**3. check_rig rest diff fails loud**
- rest_front.png is read from --out only (no fallback beside the blend). Missing or size mismatch: checks.json still written, message printed, exit code 2.
- Tested: a blend checked with an empty --out gave rc 2 and the error in checks.json, even with a rest_front.png sitting beside the blend. A normal build+check gives rc 0, changed_px 2.

**4. Front film**: stage_movie --cam front (yaw 0, d 3.4, target x -0.1 so the waving arm stays in frame, follows her like tq) -> move_front.mp4.

**Keep list (final checks.json, same as 5f unless noted)**: limit violations 0; disc clip 0/0/0/0; rest diff 2 px; sole jump 2.867 mm; bob 14.85 mm; face hash
58506fb855580c29 (34 blocks); GLB imports, 17 keys, none missing; floor min -0.0 at f173; forearm_R 7.56 deg/frame, hand_R 7.61, 0 flagged; pops 0/0/0;
glove-to-disc 44.2 mm; palm-forward 0.963-1.0 (f132-154); forearm 1.4-25.3 deg off vertical; glove_R peak 60.0 (was 59.9, now at lower f172); 3/4 upper-arm lever unchanged (plane 10, el 80).
Probe hits: only arm_L|toga 192 frames, same as before.

**Looked at**: lower f164-178 frame by frame, 3/4 (move) and front, cropped to her right side. The hand goes down beside the disc in every frame, never over the face.
**Left**: the cuff bell (decision above); the walk-wrist keep-list number was not re-read this round (rig_her walk code untouched); raise_strip.png not regenerated.

## Face rig 5 (2026-09-29)
Out: D:/scratch 2026/her-c2/face5/ (face5.blend, face5.glb, face_caps.json, checks_face*.json, sheets, face_seq.mp4). Only face_rig.py / check_face.py edited.

**Mouth**
- AU15 is built per side (`au15_side`), no longer a masked symmetric key. Each side: half the midline arch (1-u^2), unmasked; a corner drop local to that side (`corner_ramp`, 4th power from v=-0.5); lens closes 0.5 unmasked + 0.6*corner_ramp. The masked lens close was what bent the mid line twice (S).
- AU15 fit to the toga at build: 0.665, corner drop 20.0 mm (caps meta `au15_fit`, `au15_corner_drop_mm`).
- AU17 = the sad arch: raises the lower-lip middle 9 mm, upper 13 mm, (1-u^2). Presets: frown_concern = AU4 .8 + AU15 both + AU17 .6 + AU23 .25; sad = AU1 + AU15 both + AU17 1.
- AU22 = the O (vertical ellipse A 28 / B 35 mm half-axes at 1.0); surprise = AU1/2/5 + AU22 + jaw .3, AU25 dropped.
- `curve_probe` (face_rig.py): turn-angle sign changes per line (turns < 0.8 deg ignored), end hooks, monotonic midline-to-corner. Smirks (moving=2) are judged per half. check_face runs it on every curve tile, preset and random state.

**Eyes**: raise keys (AU1/2/5) fade out on the equivalent upper blink (`fr_S`, gone at Bu 0.03). look_up has a soft knee from 0.6 of range (full pitch = 0.88 of the key).

**Numbers (seeds 29 / 4242 / 777 / 1234)**
- Pupil over the 3.17 baseline: 1 / 1 / 0 / 0. **REGRESSION, open.** Seed 29 #236: AU7_R .93 + AU5_R 1 + look (28.7, 21.4) = 4.57 mm. Seed 4242 #37: AU1 both 1 + AU7_L 1 + lid_up_R .78 + look up 19.7 = 3.37. The raise fade removes the AU5 rim lift that used to cover AU7 + diagonal look-up. The fix belongs in the look fade, not the raise fade.
- Toga < 0.5 mm: 0 on all four (min 2.40). Inverted 0. Obstacle overlaps 0.
- Runtime vs Blender: 7.2e-5 / 3e-6 / 3e-6 / 3e-6. GLB 23/23/17/17/30, 13 bones, none missing.
- Lip curve: every one-sided key and both smirks pass; all presets pass except surprise (mid line 2 changes: that line is not meaningful on a ring). Random 500: 81-92 fail and 21-30 with a hook. Random stacks were not fixed this round.
- AU7_L 1 + look up 40 + lid_lo_L .23 = 2.76 mm (the seed-777 shape).
- Neutral px diff and magenta: not run this round.

**Looked at**: expressions_sheet and mouth_curve_sheet.
- One-sided keys and smirks: one bend, no S, no hook. AU15 single reads lopsided and flat on the moving side.
- Surprise reads as a small vertical O.
- Frown and sad are a ∩ now, but in 3D still a thin stroke. The 2D preview lens was thicker, so the toga caps are probably thinning it. It reads only mildly sad at sheet size.
- Not looked at: muscle_keys_sheet, mouths_sheet, blink_look_grid, zig_sheet, sad_close, face_seq.mp4.

## Rig 5h (2026-09-29)

Owner: "close the cuff and look at the wrist at the radius and ulnar bones joints the movement isn't quite right". Outputs in `D:/scratch 2026/her-c2/rig5h/`; edits only in `rig_her.py` and `check_rig.py`.

**What was wrong at the wrist (5g).** (1) Half the forearm twist sat on `forearm_S`, the elbow-hinge bone, so the skin twisted at the elbow. (2) The pronation axis followed the arm centreline, not the radial head to ulnar head line. (3) The wave put coupled axial twist into the wrist (up to 11.9 deg by probe).

**What changed.**
- The ulna (`forearm_S`) is the hinge carrier and never twists (limit 0). The radius is three chained bones `forearm_tw1/tw2/tw_S`, a third of the twist each, along an axis from the radial head (elbow, lateral, 0.25 arm radius off the centreline) to the ulnar head (wrist, medial). `hand_S` hangs off the last one. Skin weights are hat weights over four stations, so twist grows linearly from 0 at the elbow to full at the wrist.
- `wrist_q()`: the hand rotation is a pure swing (flex, radial/ulnar deviation, relax toward the forearm line) from her art's rest wrist; any change in twist about the pronation axis is removed, so the wrist carries no axial twist.
- Cuff cap: post-build bmesh step in the glove loop. 12 rim verts joined to an inner ring at 0.55 of the rim radius around the arm centreline, glove material, rim edges creased, outer ring keeps cuff weights, inner ring takes the arm weights at its arc (never tears). `--nocap` restores 5g.
- `check_rig.py`: new series `wrist_axial`, `twist_segs`, `wrist_in_ulna`; new per-arm `pronation_probe_5h` block (twist split, ulna twist, wrist axial max, axis offsets, `axis_ulnar_sided_at_wrist`, axis tilt, wrist orbit about ulna).
- New stage `wrist` (`--mode sweep|cuff`) for the films.

**Numbers.** Wrist axial twist 0.0 deg (5g: 11.9). Twist split R at peak (f148): ulna 0, -38.44 x 3 = -115.33 (rig range, includes the wave's rest offset). Axis ulnar-sided: true; tilt from forearm line 7.52 deg. Limit violations 0, disc clip 0, pops 0, sole jump 2.867 mm, bob 14.85 mm, GLB imports, lower overlap 0% f164-176, REST palm.front R 0.858 (target 0.85). forearm_R 7.5 deg/frame (limit 8), glove_R peak 59.9 mm/frame (limit 65). Walk wrist range unchanged.

**Keep-list items that are NOT clean.**
- Rest diff is 930 px, not <= 3. Cause: the cap fills the visible mouth, which is the requested change. With `--nocap` it is 2 px (build in `nocap/`). The 3 px gate cannot hold when the mouth is intentionally filled; needs the owner or a re-baselined TEST8.
- Glove-to-disc R fell from 44.2 to 27.3 mm at f144 (gate 25, still passes, thin margin). Cause is the radius axis moving hand path.
- Wrist centre orbits the ulna about 13 mm during full pronation. If sideways slide shows, try `--axo 0.15`.
- Face hash and eyes-open peak stills: not re-verified by me beyond the build; peak stills exist.

**Looked at** `cuff_close.png` (f170-176 front and 3/4) and contact sheets of the wrist sweep (front, 3/4). Cuff reads closed in the wave; a flat white annulus joins the rim to the arm. In the sweep, the arm still shows orange through the annulus gap at supination extremes. Near full pronation (about -80 deg) the cuff folds and wrinkles with orange showing through, and small pinch dots appear on the glove. Not fixed; needs cap weights or cuff-rim weights tuned for extreme twist. The twist itself now spreads down the forearm and the elbow no longer twists. Not looked at frame by frame: `wave_close.mp4`, `move*.mp4` beyond the peak stills.

## Rig 5i (2026-09-29)

Outputs in `D:/scratch 2026/her-c2/rig5i/`; edits only in `rig_her.py`, `check_rig.py`. Build args: `--axo 0.15 --wavesup -38`.

**Rest diff, re-baselined (owner: "yes, close the cuff").** 5h capped render vs TEST8: 923 px changed, 921 inside the cuff-mouth mask, 2 outside (mask = pixels the cap changed vs the `--nocap` render, dilated ~7 px, 5653 px; `rest_diff_mask.png`, kept at `test8/cuff_mask_5i.png`). New baseline `test8/her_front_capped_5i.png` (the 5h capped rest render). `check_rig.py` now reports `vs_test8_inside_cuff_mask_px`, `vs_test8_outside_cuff_mask_px`, `vs_capped_baseline_px`; the gate number `changed_px` = outside + baseline diff, fail-loud path kept. 5i result: 928 inside, 2 outside, 0 vs baseline, `changed_px` 2. Mask is derived from the cap itself, so it proves the cap changed nothing else, not that the cap looks right.

**Weights.** Cuff to hand blend widened 25 to 45 mm (`--cufz`); glove weights Laplacian-smoothed across cuff, cap and wrist blend (`--gln 10`, `--gla 0.6`, mesh untouched); cap verts pruned to the distal radius bones (`forearm_tw2`, `forearm_tw`). New per-frame metrics in `stage_wrist` on the armature-only glove deformation: fold pairs (dihedral change over 60 deg vs rest), pinch faces (area under 0.35 of rest), stretch faces; `wrist_metrics_5i.json`. Sweep is now +-85 both ways. Result: pronation/supination sweep fold 0, pinch 0; deviation fold 0, pinch 0; flexion/extension fold 1 pair (frame 68), pinch 0. Not zero at wrist flexion.

**Palm forward.** The 0.858 is the REST palm.front (her art, target 0.85), not a wave value; unchanged. Wave values (`probe_bones.json`): f128-168 mean 0.912, min 0.826, f144 0.929; f100-180 mean 0.841 (wag dips to 0.56 near f120-124, existing).

**Glove-to-disc R.** 27.3 at 5h, 5g 44.2. Cause: the ulnar-sided radius axis swings the hand medially towards the disc. Tried (fast builds): `--axo 0.15` 33.7; `--axo 0.10` 38.5; wave_pl 4 33.2; `--wavesup -22` 21.0; `--axo 0.15 --wavesup -38` 42.9 (chosen, f145). Wrist orbit about the ulna 13 to 8.2 mm; axis still ulnar-sided (tail 4.65 mm ulnar, tilt 4.53 deg).

**Kept.** Wrist axial twist 0, ulna twist 0, limit violations 0, disc clip 0, sole jump 2.867 mm, forearm_R 7.5 deg/frame, glove_R 60.9 mm/frame, GLB imports (no missing keys). Twist split at peak -41.11 x 3.

**Looked at** `cuff_close.png` (sweep f36 pronated, f60 flexion, f12, f68; front + 3/4). Cuff reads as a solid white annulus; orange seen inside is the arm passing through the cap, not show-through. Flexion frames still crowd the cuff rim against the hand at the inner side (the 1 fold pair). NOT verified: face hash 58506fb855580c29 (face files untouched by me, hash not recomputed), lower overlap 0%, bob 14.85 mm (not re-extracted), eyes-open peak stills and `wave_close`/`move*.mp4` frame by frame (files exist, not stepped through).

## Face rig 6 (2026-09-29)
Out: D:/scratch 2026/her-c2/face6/ (face6.blend, face6.glb, face_caps.json, checks_face*.json, sheets, face_seq.mp4). Run script: D:/scratch 2026/her-c2/face6_run.sh (checks | all). Only face_rig.py / check_face.py edited.

**Changes**
- Pupil: look_up gets a new step `lkup7_S = lk * max(0, 1 - e_AU7 * (0.30 + 0.55 * max(lkL, lkR)))` (`LOOKUP_AU7`), before the Bu fade. AU7 eases the look-up, most on upward diagonals.
- Sad/frown lens: thickened UPWARD in AU17 only (AU17_TOP 13 -> 19 mm, AU17_BOT 9 -> 5 mm, pout forward dy -3 -> -6 mm). First try put a top-lens extra on the per-side AU15 keys: single AU15_L/R and both smirks failed the lip-curve probe (two bends). Reverted; AU15 is as face 5.
- check_face: adds the app states to `states` and the lip-curve fail list: every preset + each Rhubarb mouth at 1.0 (63) and every preset pair at 50/50 (21).

**Numbers (seeds 29 / 4242 / 777 / 1234)**
- Pupil over 3.17 baseline: 0 / 0 / 0 / 0 (max 3.15 each). No app state over baseline.
- Toga < 0.5 mm: 0 all (min 2.40). Inverted 0. Preset toga: frown 10.66, sad 10.16 mm (same as face 5 - lower lip untouched).
- Runtime vs Blender 7.2e-5 / 3e-6 x3. GLB 23/23/17/17/30, 13 bones, none missing. Magenta: 0 px on all 10 states.
- Corner drop: frown 20.9 mm, sad 28.5 mm (face 5: 23.3 / 28.5).
- Lip curve: every single key, both smirks, every preset pass except surprise (O, exempt). App states failing: surprise + B / E / X (mid line on the O), warm_smile + E, thinking + F, wink + F (all 2 sign changes on one line); 50/50 blends happy/sad, warm_smile/surprise, warm_smile/frown, frown/thinking, thinking/sad, sad/wink (2 sign changes, top or mid). Not fixed.
- Neutral px diff: NOT RUN - compose did not write `_neutral_diff.json` (the diff sits behind the overlay path; `overlay` was not in the --only list). Geometry at neutral: 0.0 mm deviation.

**Looked at**: expressions_sheet, zig_sheet, mouths_sheet.
- Sad close-up: a fuller ∩ lens, cream band plus dark lip, clearly thicker than face 5. Frown: thinner, flatter ∩.
- At thumbnail, sad reads down-turned but still mild; frown reads flat/pressed more than cross. Corner drop is capped by the toga at 20 mm, and the ∩ is shallow at that size.
- AU17 alone now reads as a wide open grin lens (upper lip up 19 mm). Viseme G (AU17 .7) is wider open than before.
- Surprise O, happy, warm_smile, wink, visemes A-H/X: on-model.
- Not looked at: muscle_keys_sheet, blink_look_grid, mouth_curve_sheet, sad_close, face_seq.mp4 (budget).

## Face rig 7 (2026-09-29)
Out: D:/scratch 2026/her-c2/face7/ (face7.blend/.glb, checks_face*.json, stills). Run script: D:/scratch 2026/her-c2/face7_run.sh (`all`; now includes `overlay` in the stills list). Only face_rig.py / check_face.py edited. Budget stop hit at 40 tool calls: the run was STILL RUNNING (seq2 of 3, then compose + recheck) when this was written. face_seq.mp4, the sheets and `_neutral_diff.json` are therefore UNCONFIRMED - check `face7/_run.log` for ALL_DONE and `ls face7`.

**Changes**
- Shared cause found with a plain-python replica of the mouth keys (D:/scratch 2026/her-c2/face7/lipsim.py, no caps): the failing blends were opposite-curvature deltas summed - the u^2 smile lift (AU12/AU14) against the quartic AU15 corner drop and the AU22 ellipse. Two fixes, applied once in the driver layer, not per combination:
  1. `purse` / `purse_fade` steps: pucker + funnel (AU18, AU22, and the E / F letters that carry them) fade AU12, AU14, AU15, AU17, AU23, AU24 out; fade = clamp(1 - 2 * purse). Lip-sync overrides the expression.
  2. `ag_net_/ag_up_/ag_dn_` per side: AU12 + AU14 and AU15 are antagonists on one corner; the stronger keeps the difference, the weaker goes to 0 (happy 50/50 sad = level corners). Smirks (opposite sides) unchanged.
- AU17: TOP 19 -> 14 mm, BOT 5 -> 18 mm (lower lip rises more than the upper: lens closes 4 mm) so it no longer opens a grin. Not yet LOOKED at (see above).
- Tried and reverted: quadratic `corner_ramp` (constant curvature). It fixed the blends but killed the arch (AU15 both corner drop 9 mm) and failed single AU15 and both smirks.
- Frown preset not changed; sad/frown thumbnail read NOT re-checked by eye.

**Numbers (seeds 29 / 4242 / 777 / 1234)**
- Pupil over 3.17 baseline: 0 / 0 / 0 / 0 (max 3.15). Toga < 0.5 mm: 0 all (min 2.40 / 2.35 / 2.45 / 2.31). Inverted 0. Runtime vs Blender 7.2e-5 / 3e-6 x3. GLB 23/23/17/17/30 morphs, 13 bones, none missing. Neutral geometry 0.0 mm. Magenta: not run in the checks json (render pass pending).
- Corner drop: AU15 both 9.5 mm, frown 17.9 mm (face 6: 20.9), sad 23.5 mm (face 6: 28.5) - LOWER than face 6, because the antagonist/purse steps and AU17 change shift the arch. Preset toga: frown 10.66, sad 10.16 mm.
- Lip curve, all four seeds identical. Original list: warm_smile+E, thinking+F, wink+F, happy/sad, warm_smile/frown, frown/thinking, thinking/sad, sad/wink now PASS. STILL FAILING: `warm_smile 50/50 surprise`, and surprise 50/50 with frown, thinking, sad, wink (the half-O, new in this list or previously masked), plus the exempt surprise, surprise+B/E/X. Not fixed: the half-way O blends.
- Single keys, smirks and every preset except surprise: pass.
- Not done: items 2 (thumbnail proof), 3 (AU17 look), 4 (neutral diff file) and 5 (look at every sheet) - no eyes were put on face7 output.

## Face rig 8 (2026-09-29)
Out: D:/scratch 2026/her-c2/face8/ (face8.blend/.glb, checks_face*.json, run log `_run.log`). Run script: D:/scratch 2026/her-c2/face8_run.sh (`all`). Only face_rig.py / check_face.py edited. Face7's run finished first (ALL_DONE, face_seq.mp4 and `_neutral_diff.json` exist in face7). Tool budget hit before the face8 render pass finished: the STILLS, FILM, COMPOSE and `_neutral_diff.json` / magenta of face8 are UNCONFIRMED here - check `face8/_run.log` for ALL_DONE. No sheet of face8 was looked at.

**Cause of the face7 loss.** `corner_drop_mm` = top-lip midpoint minus mean of the two corners. It is the AU17 arch (top lift) plus the AU15 corner drop (9.5 mm, toga-fitted). Face7 cut AU17_TOP 19 -> 14, and that 5 mm is the whole loss (sad 28.5 -> 23.5, frown 0.6 x 5 = 3 -> 20.9 -> 17.9). The smile / depressor per-side cancel does NOT touch sad or frown (no smile key, net < 0, ag_dn = 1); the earlier guess was wrong.

**Changes**
- AU17: TOP 0.014 -> 0.021, BOT 0.018 -> 0.025 (lens still 4 mm thinner, arch up 7 mm). Face7's AU17-alone tile (zig 03) LOOKED at: a crescent smile lens with a dark lower lip = still reads as a grin, because the rest lens is 34 mm.
- New `AU17_CLOSE = 0.55`: `src['AU24_lip_presser']` is now step `au24x` = AU24 + 0.55 x AU17 x (1 - min(AU15_L, AU15_R)) - AU17 alone also closes the lens through the presser (lens 34 -> ~13 mm in the python replica), and adds nothing where AU15 already closes it (sad / frown).
- Presets: frown_concern AU17 0.6 -> 0.8, AU23 dropped (cross, not pressed). sad gains AU25_lips_part 0.3 (soft, lips a little parted).
- check_face: named exemption `LIP_EXEMPT_NAMED` (preset surprise, app surprise + B / E / X) + every `app A 50/50 B` with surprise as A or B, applied by `lip_exempt()`. `summary_rig5` lists each exempt label with whether it FAILS or passes the probe, the exempt states' toga min / inverted count, and `inverted_states_all_named`. The sign-change probe is the only thing waived.
- OUT paths moved to face8.

**Numbers (seeds 29 / 4242 / 777 / 1234)**
- Pupil over 3.17: 0 / 0 / 0 / 0 (max 3.15). Toga min 2.40 / 2.35 / 2.45 / 2.31 mm (>= 0.5). Inverted 0. Runtime vs Blender 7.2e-5 / 3e-6 x3. GLB 23/23/17/17/30 morphs, 13 bones, none missing. Exempt states: toga min 8.87 mm, inverted 0.
- Corner drop: frown 26.27 mm (face7 17.9, face6 20.9), sad 31.37 mm (face7 23.5, face6 28.5). AU15 both 9.47.
- Lip curve: every single key, both smirks and every preset pass. ONE REGRESSION: `app thinking + E` fails (face7 passed). Likely cause, not verified: the caps read the raw `src` weights, and `au24x` carries thinking's AU17 0.3 (+0.165 closure), so E's close-cap shrinks E's O. Proposed fix (NOT applied, NOT run): drop `'AU17_chin_raiser': 0.3` from `thinking`. The python replica (`face8/lipsim8.py`, no caps) showed no new failure, so it cannot see this.
- Exempt states that fail the probe: preset surprise, surprise + B / E / X, warm_smile / frown_concern / thinking / wink 50/50 surprise. These are NOT yet checked on film.

## Face rig 9 (2026-09-29)
Out: D:/scratch 2026/her-c2/face9/ (face9.blend/.glb, checks_face*.json, sheets, face_seq.mp4, `_neutral_diff.json`, `_run.log` ends ALL_DONE). Run script D:/scratch 2026/her-c2/face9_run.sh. Edited only face_rig.py (OUT -> face9; `thinking` preset loses `AU17_chin_raiser` 0.3) and check_face.py (header/OUT). One run, no extra run.

**Fix.** Dropped AU17 0.3 from `thinking`, so `au24x` no longer carries it and E's close-cap is not shrunk. AU17 itself is unchanged (TOP 0.021, BOT 0.025, AU17_CLOSE 0.55).

**Numbers (seeds 29 / 4242 / 777 / 1234).** `lip_curve_fail` = [] (face8 had `app thinking + E`). Pupil over 3.17 mm: 0 / 0 / 0 / 0 (max 3.15). Toga min 2.40 / 2.35 / 2.45 / 2.31 mm, `n_toga_under_0_5mm` 0, inverted 0. Runtime vs Blender 7.2e-5 (seed 29), 3e-6 (others). GLB import ok, morphs 23/23/17/17/30, 13 bones, none missing. Neutral geometry 0.0 mm on all five meshes. Magenta: 10/10 blink states 0 px. `_neutral_diff.json`: vs prerig Cycles 0 px over 12. Corner drop: frown 26.27 mm, sad 31.37 mm, AU15 both 9.47. Exempt states: toga min 8.87 mm, inverted 0; the exempt list still FAILS the probe for surprise, surprise + B/E/X, warm_smile/frown_concern/thinking/wink 50/50 surprise (waived by name).

**LOOKED at** expressions_sheet, zig_sheet, mouths_sheet, muscle_keys_sheet, blink_look_grid, mouth_curve_sheet, sad_close, film_samples.png (12 of 94 frames, made from `_seq/`), sadfrown_128.png.
- AU17 alone (zig tile 4): a flat, thin closed slit, dark lower lip, no upward curve. NOT a grin. The pout reads weakly: it is a pressed, closed line, not a full forward lower lip.
- Sad and frown at 128 px: both clearly down-turned arches; frown = thin closed arch with lowered brow lids (cross), sad = thicker arch with a soft opening and inner-brow lift (sad). Distinguishable.
- Mouth curves: one bend, no hooks on every key and both smirks. AU15_L/R alone leave a tapered, one-sided lens.
- Blink grid: clean closes, lashes seat on the line, no chord through the pupil.
- muscle_keys_sheet: every key readable, jaw / lid / look bones posed.
- Film: neutral > happy > surprise (small round mouth) > blink > frown > sad > neutral > mouths. No pop, no lens tear seen in the 12 samples.
- NOT done: the exempt surprise BLENDS (`surprise 50/50 X`, `surprise + B/E/X`) are not in the film or on any sheet, so they are still unseen. Only the preset surprise was seen on film. Also `stress_sheet.png` and `surprise_lash_zoom.png` were not opened.


## Rig 5j (2026-09-29)

Outputs in `D:/scratch 2026/her-c2/rig5j/`; edits only in `rig_her.py`, `check_rig.py`. Build args: `--axo 0.15 --wavesup -38 --tag rig5j`. INCOMPLETE at hand-off: see "Not done".

**Cause (measured, not the refuter's guess).** The arm mesh ran on past the cuff cap plane to the wrist, inside the cuff well. At full pronation the tilted hand opened a gap onto it (orange in the mouth). The old cap also had a hole (inner ring at 0.55 R inside the 31 mm arm). A ray test showed no arm vertex outside the glove; the orange was arm surface seen through the mouth, not a vertex leaving the glove.

**Fix.** (1) The 41 R arm verts on the hand side of the cap plane are flattened onto a plane 1.2 mm on the elbow side of it and take the cap's own weights (tw2/tw_S), `--notuck` restores 5i. (2) The cap is now a closed disc: a centre vertex plus 12 triangles from the inner ring, so the well floor is white (glove material). Cap inner ring and centre carry the tucked arm end's weights exactly, so the arm end and the cap move as one.

**Checks added.** `rig_her.py` stage wrist: `arm_past_cap` (arm_R verts more than 0.5 mm on the hand side of the cap plane, armature-only, per sweep frame) and orange arm pixels in the hull of the far half of the cuff tube, with arm_R-hidden render subtracted so background orange does not count; both go to `wrist_metrics_5j.json` under `poke`. `check_rig.py`: `arm_past_cap_5j` = same plane test over the whole move plus the sweep numbers when `wrist_metrics_5j.json` sits beside the blend. Gate 0 for both.

**Looked at.** `pronation_f30-42_sheet.png` (front and 3/4, f30/34/36/40): cuff interior is white speckled cloth, no orange, no gap. Front orange px in the sweep pronation range was 0 in the first 5j run (5i: 1986 to 2559). The first 3/4 pixel count still read 620 to 2300 because it counted background orange; the arm-hidden subtraction was added afterwards and is not yet read.

**Not done.** The final `check_rig` run and the re-read `poke` numbers (arm_past_cap 0 and 3/4 pixels 0): the first arm_past_cap read 125 verts because it used the REST arm axis to orient the plane; fixed to the posed axis, rerun was in progress. The keep-list (rest diff, hash, sole, bob, limits, GLB, forearm_R and glove_R speed) is NOT re-verified for 5j. Lower overlap and eyes-open stills not re-run. The 3/4 wrist_close frames not stepped through frame by frame. Rest diff may change: the arm tuck and disc sit inside the cuff, hidden at rest, but this is unmeasured.

**NOTES corrections to 5i.** (a) The fold threshold in code is a normal-dot drop > 1.0, about 90 degrees on flat pairs, not the 60 degrees stated in Rig 5i; the note was wrong, the code stays. (b) Lower overlap is NOT 0%: 3/4 glove 16.9% at f164, 5.0% at f168, 0.7% at f173, 0 from f174 (refuter measurement, at or below 5h on every frame; on film the hand stays beside the disc edge). Fine visually.

## Rig 5k (2026-09-29)

INCOMPLETE, stopped at the 30-call budget. Outputs `D:/scratch 2026/her-c2/rig5k/` (blend, glb, checks.json, wrist_metrics_5j.json, build/wrist/check logs, `rest_cmp.png`, `s12.png`). NO films, NO peak stills, NO `--notuck` comparison were rendered.

**Change (rig_her.py, stage build, TUCK block).** The 5j flatten is gone. Arm faces lying wholly past the cap plane are deleted with bmesh (R 26 of 360, L 22 of 360; vertex count asserted unchanged so ARC/SOCKET/SKIN indices stay aligned); the 41 R / 36 L past-plane verts are clamped onto a plane 0.3 mm hand-side of the cap and take the cap weights. Option (a) as a Mask modifier was not tried; a direct face delete gives the same result and needs no export step. (A first try that also deleted loose edges removed vertices and crashed the build; reverted to faces only.)

**Gates added.** `rig_her.py` stage wrist writes `poke.orange_gate_5k` (orange px, sup and pron directions separately, front and 3/4, gate <= 2, plus arm_past_cap 0). `check_rig.py` prints `CHECK FAIL orange_gate_5k` and exits 3 if it fails or is missing.

**Numbers (5k build).** arm_past_cap 0 (max -4.13 mm). Orange px: pronation front 0, 3/4 2 (pass); supination +11 to +85 front max 2737 (f4-20, peak f12), 3/4 max 275: FAIL. Rest diff FAIL: changed_px 637 = 613 vs capped baseline + 24 outside mask (gate 3).

**Looked at.** `rest_cmp.png` (5i baseline left, 5k right): the dark jagged shard at the elbow-side cuff mouth is GONE on the right arm. What remains is a thin grey sliver where the arm end now meets the cap (the arm used to run through the cap plane), and a hairline at the left arm end. `s12.png` (sweep f12 front, 3/4, f8): the arm is seen entering the cuff mouth, no shard.

**Open question, needs the owner or a decision.** The orange gate is confounded in supination: at +60 to +85 the elbow-side mouth faces the camera and the arm tube is legitimately visible entering it, so orange there is the arm, not the defect. The `--notuck` (5i) supination count was not run, so it is unknown whether 5i also reads about 2700; if it does, the gate must become a shard test (dark pixels vs 5i), not an orange count. The rest-diff gate (<= 3) cannot pass while the arm ends at the plane, because the visible arm tip differs by the sliver; passing it needs the arm to run on past the plane as in 5i, tapered radially over 10 to 15 mm (option b), not cut. Next: build `--notuck` to `rig5k/notuck`, compare sup counts, then try the taper.

## Rig 5l (2026-09-29)

Root cause of the gaping cuff (5i-5k). The glove is six loose parts. The cuff is its own open tube whose hand-side mouth (a 45-degree tilted 12-vert loop) only rests against the palm part; nothing joins them. The 5i edge-graph smoothing never crosses loose parts, so it carried the cap's forearm weights down the whole cuff: mouth about 0.82 forearm_tw_S, 0.15 hand, while the palm right under it is about 0.55 hand, 0.42 forearm_tw (L1 weight gap 0.87; 5h stayed under 0.42). Under pronation the palm turns away from the mouth and the sleeve opens onto the arm inside. The 5j/5k tuck and cut treated the symptom at the arm end and broke the rest silhouette under subsurf and the solidify outline.

Fix (rig_her.py, flag SEAT, on by default, --noseat to disable; --tuck now opt-in and off). The mouth verts take the palm's own weights at their spot (3 nearest palm verts, inverse distance). The cuff between the mouth and the elbow rim is a harmonic blend (80 Jacobi steps, rim and mouth pinned). The arm verts past the cap, inside the closed cuff, take the cuff's weights at their spot. The rest mesh is untouched.

Gate 5l replaces the orange-pixel gate. seam = BVH distance from the mouth verts to the palm, opening over rest. seen = arm points past the cap surface (ray toward the elbow hits the cap) that the camera ray reaches first on arm_R, with subsurf on. Pass needs seam at most 1.0 mm and seen 0 in the front and 3/4 views. check_rig adds the whole-move seam and fails with exit 3 on gate_5l.

Proof on the 5i blend: seam 14.46 mm, seen 13 front / 12 in 3/4. It FAILS, as required. The rest shard of 5j is caught by the rest-diff gate, not by gate 5l.

5l numbers:
- seam 0.574 mm over the sweep (supination 0.214), 0.39 mm over the whole move
- rest diff outside the cuff mask 2 px
- face hash 58506fb855580c29, sole 2.867 mm, bob 14.85 mm
- limits 0, clip 0, forearm_R 7.5 deg/frame, glove_R 60.9 mm/frame
- glove-to-disc R 42.9 mm, orbit 8.16 mm ulnar-sided, ulna and wrist twist 0
- folds: supination 0/0, deviation 0/0, flexion 4 pairs / 5 pinch

Pronation and supination are now closed: seen 0 across most of the sweep, with the odd frame at 1-4.

NOT FIXED: deep wrist EXTENSION (sweep indices 50-61). seen reaches 36 front / 24 in 3/4. The frame looked at, frames_wrist_front 0055, shows the cuff riding with the hand: the cuff flares open on the dorsal side and the orange arm shows between the cuff and the palm. A cuff seated on the palm cannot also hug the forearm at 85 degrees of extension. The next step is to split the mouth weights between palm and forearm by the flexion angle, or to limit extension to what the cuff can cover. The gate is FAILING (check exit 3), so 5l is not done.

Outputs in D:/scratch 2026/her-c2/rig5l: wrist_close.mp4, cuff_close.mp4, move.mp4, checks.json, her-rig5l.blend and glb. NOT made (the background chain stopped after move.mp4): move_side, move_front, wave_close, peak stills. Rerun the tail of c2.sh.

## Rig 5m (2026-09-29)

**Result: FAIL on gate_5l (seen at extension, flex folds). Keep-list all PASS. Limits NOT tightened.**

Changes in rig_her.py (5l version backed up at D:/scratch 2026/her-c2/rig5m/rig_her.5l.py):
- `wrist_<S>` helper bone (child of forearm_tw, 35% toward the knuckle), COPY_ROTATION of hand_<S> in LOCAL space at influence `--hsi` (default 0.5): it takes half the wrist swing. Weights: on every vert holding both forearm_tw* and hand weight, min(forearm, hand) x `--hsw` moves to the helper (2x, taken half from each side). Off with `--nohalf`.
- `ARMPALM`: the arm end inside the cuff takes IDW weights from the nearest cuff OR palm verts (was cuff only). Off with `--noarmpalm`.
- glTF export: `export_force_sampling=True`, so constraint-driven bones bake.
- stage_wrist: the seen probe now logs each hit's distance from the wrist and runs once at the armature REST pose (`RIG seen at rest`).

Numbers (sweep): seam max 0.841 mm (5l 0.33), whole move 0.428 mm; seen front 34 / tq 27, all at extension 28-70 deg (sweep idx 50-61), hits 27.5-35 mm from the wrist = the arm tip ring. Flexion: seen only 1-2 noise, folds 3 / pinch 4 (from about -52 deg). Baseline noise 1-2 hits at neutral (front hits at 43-44 mm, tq at 27-28 mm) in sup/dev frames - the gate asks seen == 0, so it fails on noise alone.
Auditor question: at the armature REST pose the tq probe reads 22 hits (28-34 mm) while the posed neutral reads 0-3. Either the rest armature pose genuinely opens the cuff (it is not her art pose) or the probe is miscounting. Unresolved - check the auditor before the next round.

Keep-list (check.log): face hash 58506fb855580c29, sole 2.867, bob 14.85, limits 0, clip 0, forearm_R 7.5 deg/frame, glove_R 60.9 mm/frame, glove-disc R 42.9 mm, orbit 8.16 mm ulnar, twists 0, rest diff outside mask 2 px. GLB exported.

Limit choice: NOT tightened. Motions use hand_R -8.7..+16.9 deg from neutral, gap opens at about 28 deg, so a 25 deg extension cap would be allowed by the brief - but the gate would still fail on the neutral noise, and 25 deg is well under the functional wrist (not from course material). Left at 70/70.

Seen in the film (wrist_close): twist phase closed. Extension phase: an orange sliver of arm shows between palm and cuff mouth. Flexion phase: the cuff mouth creases and a jagged white spike stands off the palm edge. Rest cuff close-up clean. Wave peak fine at thumbnail size.

Root cause (hypothesis, not proven): the 3-ring cuff is too coarse - under subsurf the mouth ring shrinks and cannot follow the palm across more than about 28 deg of swing. Next: more cuff rings (build_her*.py is off limits for this brief - owner call), or a corrective shape key on the cuff driven by hand x.

Films: D:/scratch 2026/her-c2/rig5m/ wrist_close.mp4, cuff_close.mp4, wave_close.mp4, move.mp4, move_front.mp4, move_side.mp4, wave_peak_front.png, wave_peak_tq.png, checks.json, her-rig5m.blend, her-rig5m.glb. The chain c5m.sh runs every stage (5l's idle exit 3 removed); proof5i stage had no log dir (harmless).

## Rig 5n (2026-09-29)

**Result: FAIL on gate_5l (seen at extension and at combined flex + deviation). Cuff loop cuts tried and measured WORSE, left off by default.**

Probe audit (diag3.py in D:/scratch 2026/her-c2/rig5n, 5m blend):
- The neutral 1-4 hits were a PROBE fault: the probe evaluated subsurf at the viewport level (1) while the film renders level 2. At level 2 (plus the outline shell, culling-aware) neutral front and 3/4 read 0. Fixed in sleeve_seen: subsurf levels = render_levels during the probe, restored after.
- The 22 hits at armature REST are REAL, not a probe fault. The undeformed build mesh has the cuff mouth 19.95 mm off the palm on one side (rest_seam_mm_max); a render at the rest pose, 3/4 close, shows orange arm with its dark stripes in that gap (_d_rest_tq.png vs _d_rest_tq_noarm.png). The film never shows the armature rest pose, so it stays informational, not gated.
- Root cause of the extension leak (new finding): the seam gate measures OPENING over rest, so the 20 mm gap the build already has on the mouth's far side passes it. Extension tilts the palm's proximal end away and the camera looks straight into that pre-existing gap. The 12 mouth verts ride the palm (seam 0.84 mm) but they were never touching it on that side.
- Proof on the 5i blend with the corrected probe: seam 15.5 mm, seen 52 front / 48 in 3/4, gate FAILS as required (proof5i/wrist.log).

Cuff rings (--cuffcuts N, default 0): BFS rings from the elbow rim, longitudinal edges subdivided before the cap is built (cap stays the last 13 verts). x2 (3 rings to 7): seen at extension 147 front / 107 in 3/4 (5m 34/27), flex pinch 13 - WORSE, so off. The coarse ring count is not the cause; the unseated far side of the mouth is. Build and sweep log of that try: rig5n/cuts2/.

Sweep additions: a 'combo' phase (24 frames, flex/ext 22 deg with deviation 42 deg, her real move reaches 41.7 deg at f147). cuff mode now renders the WHOLE move by default; c5n.sh encodes cuff_close.mp4 from cuff/cuff_*_NNN.png (the 5m chain encoded the wrist frames twice).

5n CORRECTIONS after the full run (supersede the lines above where they differ):
- "x2 measured WORSE" was an unfair compare: 34/27 was the 5m level-1 probe. Same level-2 probe: cuts x2 147/107 vs cuts 0 135/102, flex pinch 13 vs 4. Cuts give no gain and more pinch, so off; the coarse ring count is not the cause.
- The level-2 fix alone still reads 3-5 at neutral front. diag3 shows those points sit under the outline shell (ink): with every show_render modifier on and a backface-culling-aware ray (the outline material culls) neutral reads 0, ext50 62 front / 47 tq. That full probe is in diag3.py (render_geo_cull) and is NOT yet ported into sleeve_seen - next round.
- The 20 mm unseated far side of the mouth as the extension cause is a hypothesis backed by the ext50 crop (_cmp.png), not proven by a geometry test.
- Full chain (cuts 0 = 5m rig + level-2 probe + combo phase): seam 0.841 mm sweep / 0.428 mm whole move, seen 135 front / 102 tq at extension 28-70, combo up to 55 tq at flex 19 + dev about 40 (her real move range). Folds: flex 3 / pinch 4, combo 0/0, dev 0/0, sup 0/0. check.log: the only CHECK FAIL is gate_5l (exit 3); GLB import ok.
- LOOKED: neutral clean; extension 55-70 shows orange striped arm inside the cuff mouth (front and 3/4); flexion -70 shows the jagged white flap at the thumb root / palm edge, also visible at sup and combo frames in 3/4 - same flap the refuter saw at f170-176.
- Next: seat the far side of the mouth (close the rest gap at rig time inside the cuff mask, or a corrective shape key on hand extension that lifts the dorsal cuff onto the palm), port the culling-aware probe, find the flap's verts (thumb-root palm edge) before touching weights.
Films: D:/scratch 2026/her-c2/rig5n/ wrist_close.mp4, cuff_close.mp4 (whole move from cuff/, 384 frames), move.mp4, move_side.mp4, move_front.mp4, wave_close.mp4, checks.json, her-rig5n.blend/.glb, diag3.py + _d_*.png, cuts2/ (the loop-cut try).

## Rig 5o (2026-09-30)

In progress (interim, overwritten by the result block below when the chain finishes). rig_her.py backed up as rig_her.5n.py. Added: wrist piece (`WRISTP`, `--nowristpiece`), thumb-root weight softening (`THUMBSOFT`, `--nothumbsoft`), diag3's culling-aware all-render-modifier probe ported into `sleeve_seen`, rest probe + stills in front / 3/4 / side. Flap diag (diag5o.py): worst glove_R edge ratio f165-176 was 3.15 (verts 407/408 forearm_tw/wrist next to 417/418 thumb 1.0; cuff mouth vert 24 took thumb_R 0.72 via the palm IDW); after THUMBSOFT 1.47, 0 edges past 1.6 / 0.5.

### Rig 5o result (2026-09-30)
- gate_5l: FAIL. Sweep seam_open_max 0.528 mm (5n 0.841), whole-move 0.462; seen front 15 / 3/4 4 (5n 135/102). Rest seen front 5, 3/4 5, side 0 (5n 3/4 99). Remaining front hits 38-44.5 mm from wrist even at neutral.
- rest_seam 19.95 mm unchanged: metric measures glove mouth to palm, not the wrist piece that now fills it.
- Probe cull sign in sleeve_seen is the flip-normal-hull sign, OPPOSITE to diag3 (diag3's was validated vs pixels). Unresolved.
- orange_in_cuff supination peaks (front 3069 / 3/4 537) match 5n (3167 / 572): pre-existing pixel-test artifact (forearm below cuff seen at supination; frame 0012 viewed, no gap at palm). Not a 5o regression.
- Stills rest_3q / rest_side viewed: no orange at wrist, glove reads as one piece.
- Keep-list held: face 58506fb855580c29, sole 2.867, bob 14.85, limits 0, disc clip 0, forearm_R 7.5 deg/f, glove_R 60.9 mm/f, glove-disc R 42.9, ulna/wrist twist 0.
- Front rest vs 5n: 382 px changed (>12/255), max diff 116/255.
- GLB imports ok; exports wristpiece_L, wristpiece_R. New meshes appear in motion_rig4 vertex_flagged_meshes (move with glove, >40 mm/f).
- Thumb flap f165-176: edge ratio max 3.15 -> 1.47, 0 bad edges (THUMBSOFT).
- build_her.py SHA-256 5297fab354191062 unchanged.

## Rig 5p (2026-09-30)

In progress (interim, replaced by the result block when the chain finishes). rig_her.py backed up as rig_her.5o.py.
- Cause of the band look (measured, D:/scratch 2026/her-c2/rig5p/_exp, variants on the 5o blend): (1) SHADE - the piece's own normals face down the funnel, away from the key light; the glove's outline hull OFF did not change the shade (v1). (2) SEAM - subsurf pulls the piece's M0 ring toward (A + M1) / 6, so its limit surface sat ~2 mm under the cuff rim; the rim shadowed it, a speckled line. Hull off still showed the line (v3), so the ink shell is NOT the cause.
- Fix (`SEAT5P`, `--noseat5p` = the 5o piece; `--nowristpiece` still = 5n): M0 is pre-compensated so the limit surface sits 0.3 mm outside the mouth vert (inside the 5 mm ink hull, silhouette cannot move); custom normals A/M0 = the mouth vert's glove normal, B = the palm normal, M1 = their mean; piece subsurf `use_custom_normals`. v4 (0.3 mm) and v5 (0.8 mm) both read as one glove; 0.3 kept.
- Probe: sleeve_seen scoped to the wrist-side half of the cuff (axial < L/2 from the mouth centre, L = mouth-to-rim length per pose, reported as `seen_scope`); `--seenall` restores the 5o probe.

### Rig 5p result (2026-09-30)
- gate_5l PASS: seam_open_max 0.533 mm (whole move 0.451, worst f147); seen front/3q/side 0 at rest and across sweep, seen_pts_min 278, scope = mouth half of cuff (cuff 38.26-41.75 mm).
- Keep-list held: face 58506fb855580c29, sole jump 2.867 mm, bob 14.85 mm, limits 0, disc clip 0, forearm_R 7.5 deg/f, glove_R 59.9 mm/f (f172), twist 0, GLB carries wristpiece_L/R. build_her.py sha 5297fab3 unchanged.
- REGRESSION, OPEN: glove-to-disc R min 27.3 mm at f144 (5o 42.9, target 30). Not yet traced; suspect the seated M0 (x1.5 pre-compensation) pushes piece verts toward the disc, or the metric now counts piece verts. Try --noseat5p on the metric to split the two.
- Front rest vs 5n: 432 px (5o 382), max 224/255; vs 5o: 501 px, max 150, bbox x290-1203 y915-1029 (wrist band rows).
- LOOK: rest_3q/front: shade band gone, no creases, one glove; at 3x zoom a faint dotted trace on the old edge + 3-4 px dark dot at thumb corner (3q). f171/f173 crops: no seam line, no band.
- Outputs: D:/scratch 2026/her-c2/rig5p/ - wrist_close, cuff_close, move, move_side, move_front, wave_close .mp4; rest_3q/side/front .png; f171_f173_sheet.png; checks.json.

## Rig 5q (2026-09-30)

In progress (interim, replaced by the result block when the chain finishes). rig_her.py backed up as rig_her.5p.py; check_rig.py as D:/scratch 2026/her-c2/check_rig.5p.py.
- 5p FAIL cause (refuter): c5p.sh dropped `--axo 0.15 --wavesup -38`. Fix: those are now the DEFAULTS in rig_her.py (`opt('--axo', '0.15')`, `opt('--wavesup', '-38')`), so a bare build line gets the 5i-5o motion. No rig5o/rig5p driver passes either flag.
- check_rig.py: glove-to-disc gap (R and L) and a glove+piece speed series now use `glovewp_S` = glove_S verts + wristpiece_S verts (reported as extra keys glovewp_R/L in vertex_speed_peaks).
- Thumb-corner notch, measured (diag_seat.py, render subsurf levels, hull off): every glove mouth limit point sits 0.14-0.27 mm UNDER the piece at f0/70/144; the one exception is the THUMB SHELL's open base loop (glove boundary 407-416, vert 408 = thumb_R 0.78 / wrist_R 0.175) whose rim stands 5.9 mm OUTSIDE the piece next to mouth vert 25 (k=1) at rest, and 2891/2892 (subdivided rim) join it at f70/f144 (4.6-5.1 mm). The notch/lip is that open thumb rim, not the SEAT5P seam.
- Fix (`THUMB5Q`, `--nothumbseat` = 5p): where a thumb-shell rim vert lies within 8 mm of a mouth vert (R: mouth 25 / rim 408; L: 26 / 407), ring B lands 2 mm inside the thumb shell next to that rim vert, weighted by palm+thumb IDW, so the piece closes up to the rim and moves with it. First try (B at the nearest palm/thumb point to the mouth vert) moved nothing: rim still +5.9 mm.

### Rig 5q result (2026-09-30)
- Motion restored by the new defaults: glove-to-disc R 42.9 mm f145 (now counts wristpiece_R), pronation axis head 4.65 mm, twist -123.3 (peak f159), glove+piece R speed 60.9 mm/f f172. Keep-list held: face 58506fb855580c29, sole jump 2.867 f55, limits 0, disc clip 0, GLB carries wristpiece_L/R, build_her.py sha 5297fab3 unchanged.
- gate_5l FAIL (check exit 3): seam_open_max 0.528 mm (whole move 0.462 f147) passes, but sweep seen_front_max 1 (two sweep samples), seen_tq 0, rest seen 0. Not split yet whether THUMB5Q or the restored motion causes it: nothumb/ and seenall/ sweeps ran (logs in rig5q/) but their metric files were not located in this pass.
- Thumb rim vs piece (diag_seat): rim 408 no longer stands out at f0-f96 (all rim points 0.13-0.28 mm under the piece); at f144 it still stands 3.69 mm out (5p 5.25).
- LOOK: f70 3/4 close crop (crop_f70_tq_5p_left_5q_right.png): white lip smaller, a small white fold + dark notch remain at the thumb corner; the speckle is EEVEE 4-sample shadow noise over the cuff corner, unchanged. f144 3/4: hand stands clear of the disc rim (5p crowded it). rest_3q: glove one piece, no band.
- Outputs: D:/scratch 2026/her-c2/rig5q/ - wrist_close, cuff_close, move, move_side, move_front, wave_close .mp4; rest_3q/side/front .png; crop_f70_{tq,front}_5p_left_5q_right.png; crop_f144_tq_5p_5q_rest3q.png; checks.json; diag_seat.json.

## Rig 5r (2026-10-01)

rig_her.py backed up as rig_her.5q.py; check_rig.py as D:/scratch 2026/her-c2/check_rig.5q.py. Driver: D:/scratch 2026/her-c2/rig5r/c5r.sh.
- Why the 5q seenall/nothumb runs wrote nothing: `BLEND = <out>/her-<tag>.blend`, and the subfolder --out had no blend, so the wrist stage died on open_mainfile (traceback in their wrist.log; the chain echoed exit 0 anyway). Also: THUMB5Q is build-time, so `--nothumbseat` on a wrist stage could never have split anything. Fix: `--blend <path>` option (rig_her.py); nothumb split = its own build + sweep.
- Correction to the 5q result: rig5q/diag_seat.json shows rim 408 standing OUT at every frame (f0 4.99, f55 4.08, f70 4.05, f96 4.29, f144 3.69 mm), not only at f144.
- `THUMB5R` (`--nothumb5r` = 5q): at each thumb-corner mouth vert (R 25/408, L 26/407) the piece's B ring LIMIT point sits 0.3 mm outside the rim vert (boundary limit (B[k-1]+4B[k]+B[k+1])/6 solved for B[k]) and B takes the rim vert's own weights.
- `SHADOWQ` (`--noshadowq` = 5q), studio_look only (film, wrist, peak renders): scene.eevee.shadow_ray_count 4, shadow_step_count 12, every light shadow_filter_radius 2.0.
- check_rig.py: top-level `bob_mm` and `forearm_R_deg_per_f` keys.

### Rig 5r result (2026-10-01)
- Split (5q script as-is): 5q + --nothumbseat (own build) sweep seen_front_max 1 / tq 0, same as 5q. THUMB5Q is NOT the cause; the restored motion is. 5q --seenall: front 15 / tq 4 (unscoped probe).
- gate_5l STILL FAIL (check exit 3): seam_open_max 0.528 mm passes; sweep seen_front_max 1, tq 0, rest 0/0/0. Which two samples not extracted.
- Thumb rim (diag_seat, R): 408 now -0.82 f0, -2.2 f55/f70, -1.8 f96, -2.21 f144 (under the piece). Worst rim point f144 = 2891 at +0.95 mm (target 1 mm, met).
- Keep-list held: face 58506fb855580c29, sole 2.867 f55, bob 14.85, limits 0, disc clip 0, forearm_R 7.5 deg/f f143, glove+piece R 60.9 mm/f f172, glove-disc R 42.9 f145, twist -123.3, GLB carries wristpiece_L/R, build_her.py 5297fab354191062 unchanged.
- LOOK (look_sheet_5r.png, sheet scale only, no 3x zoom): f70 sweep 3/4 - grain over the arm and cuff corner gone with SHADOWQ; a small white fold at the thumb corner still reads, notch not judged at this scale. f70 film noshadowq vs shadowq: floor/shoe grain smoother. f144 3/4: hand clear of the disc, no change visible. rest_3q: one glove, no band.
- Outputs: D:/scratch 2026/her-c2/rig5r/ - wrist_close, cuff_close, move, move_side, move_front, wave_close .mp4; rest_3q/side/front .png; crop_f70_tq_5q_left_5r_right.png, crop_f144_tq_5q_left_5r_right.png, crop_f70_film_noshadowq_left_shadowq_right.png (diff-bbox crops came out near full frame); look_sheet_5r.png; checks.json; diag_seat.json; split5q/.

## Rig 5s (2026-10-01)

In progress (interim; a replacement agent resumes from here). rig_her.py backup = rig_her.5r.py (made by the dead first 5s attempt, equal to 5r); check_rig.py backed up as D:/scratch 2026/her-c2/check_rig.5r.py. Driver: D:/scratch 2026/her-c2/rig5s/c5s.sh. Outputs: D:/scratch 2026/her-c2/rig5s/.
- The two gate_5l sweep hits, extracted from rig5r/wrist.log (`RIG seen` lines) and wrist_metrics_sweep.json: samples 53 and 58, kind flex, wrist flexion 60.6 deg (70 sin(2pi i/30), i = 5 and 10), sup 0, FRONT view only, 1 arm point each, 27.6 mm from the wrist. Same two samples in split5q/nothumb (THUMB5Q off). Sample 53 is also the worst seam frame (0.528 mm). Flex at the 69.6 deg peak (i 7, 8) did not hit.
- `--seendiag` (probe only, rig_her.py sleeve_seen): on each hit prints the ray's closest approach to glove_R and wristpiece_R and the nearest glove vert (mouth? part?), to find the gap the ray escapes through.
- CAUSE, measured (--seendiag camera-to-point hit list, sample 53): the ray meets glove_R her_outline BACK face (culled) 28.39 mm from the arm point, then wristpiece_R her_glove FRONT face at 28.30 mm (axial -2.4 mm, radial 31.4 mm, near piece M1 ring k=11 = mouth vert 35, not the thumb corner), then the arm. sleeve_seen stepped 1e-4 m (0.1 mm) past each culled face, so it jumped the piece face 0.09 mm behind the hull face and counted the arm as seen. A PROBE step-over, not a hole: the render meets the piece. The restored motion only produced that 0.09 mm coincidence on one ray.
- Geometry variants tried first (try.sh, rig5s/try_*), all still 1 hit at samples 53/58, confirming no gap: --bdepth 0.0035 (ring B depth, 5r 0.002), --m1t 0.6 (5r 0.5), --seatoff 0.0006 (5r 0.0003), --ain 0.0005 (5r 0.0015). All four options stay in rig_her.py at their 5r defaults (no geometry change).
- FIX (`SEENSTEP5S`, `--seenstep4` = 5o-5r probe): step 1e-5 m past a culled face, up to 12 faces (was 6). Sweep on the 5s build: seen front 0 / tq 0; --seenstep4 reproduces 1 at 53/58; --seenall still finds the elbow-rim hits (front 14 / tq 4, 37.6-44.5 mm; 5q seenall 15 / 4), so the finer step did not blind the probe.
- `--thumbzoom K` (movie stage): optical Kx close-up of each thumb corner (glove mouth vert R 25 / L 26) from the film camera at --f0, writes thumb_<S>_f<f>_<view>_x<K>.png. 5r close-ups: rig5s/crop5r/.
