# Refute: rig 5c upper limb (2026-09-29)

Verdict: PASS-WITH-NOTES

## Claims re-run (check_rig.py on rig5c/her-rig5c.blend -> rig5c-refute/checks.json)
- pops 0/0/0 CONFIRMED. limit violations 0 CONFIRMED. disc clip 0 CONFIRMED.
- rest diff: my own diff of rig5c/rest_front.png vs test8/her_front.png: 2 px >12/255, max 17 CONFIRMED.
- sole jump 2.867 mm CONFIRMED. bob 14.85 mm (per step 9.3-10.8) CONFIRMED.
- glove_R peak 62.6 mm/frame: MISLEADING. 62.6 is the wave LOWER only (f169). Whole-clip peak is 100.8 mm/frame at f124 (raise).
- twist R -100.3 / L 110.6 CONFIRMED. face hash 58506fb855580c29 CONFIRMED. GLB import ok, 17 keys CONFIRMED.
- check's own elbow_reversed_frames lists 22 R frames (rest -2.2 deg); limit table says 0..145 yet violations 0. Disclosed in NOTES, cosmetic.

## Independent probe (p_probe.py -> probe_bones.json, probe_hits.json)
- Wave peak f128-160: palm . front 0.95-0.97 (palm forward TRUE); elbow 4-13 mm below shoulder; forearm 0.7-25 deg off vertical; elbow flex oscillates 69-98 deg, ~2 Hz, 2.5 cycles; wrist flex -5..0, dev -6.5..10.
- Clavicle elevation 21 deg at humerus 88 deg: plausible rhythm.
- Walk f30-90: R wrist flex 8-24, radial 13.5-19.9 (at the 20 limit); palm faces back-medial (-0.27..-0.52 front).
- Swing phase: corr handR~footL +0.88, handL~footR +0.94, same-side -0.89/-0.94, lag 0-1 frame. Hand travel 200/187 mm.
- R rest wrist (art) measures ~35 deg radial: outside human 20; art, carried only at rest/ends.
- Intersections (BVH, 7 cm socket exclusion): arm/glove vs disc, skirt, toga_trim, knot, cord, wreath, legs: 0. arm_L vs toga: 52 tris at rest (art: arm under drape), 330 in walk, up to 117 mm from GH. Rendered back/left views f0/40/64 (togaL_grid.png): no visible poke-through.

## Look
- Wave raise f120-128: 8 frames (0.33 s); forearm sweeps 125 deg, 20 deg/frame; hand ~101 mm/frame. Reads as a SNAP (raise_strip.png). motion_rig4 exempts R arm 106-168, which hides the forearm_R 13.9 deg/frame flag at f123.
- Wave from the film camera: humerus hidden behind disc, forearm + elbow stub rise from rim (wave_pair.png). Human pose now, but the arm-join read is only partly improved from this angle; inherent to disc size.
- Elbow at 98 deg: clean but a tight pipe-corner (arm_deform_close row 2).
- No candy-wrapper: stripes stay level at both twist extremes. L 130.6 deg rest: no visible trouble in walk or renders.
- Background: soft cyc, no horizon line. Plain empty studio: honest test staging, not final.
- She is still her: face, wreath, toga, rest identical to test 8.
