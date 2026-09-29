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
