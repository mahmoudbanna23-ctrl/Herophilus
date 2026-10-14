# Refute: face rig 3 (2026-09-29)

Verdict: FAIL (quality bar - looks, not geometry)

## Re-run (check_face_r.py = check_face.py with OUT -> this folder, seed 29 -> 4242; checks_face.json)
1. Pupil: 0 of 500 over baseline 3.17, max 3.15. CONFIRMED.
2. Toga: seed 4242 gives min -1.39 mm, 2 of 500 under 0.5 mm. REFUTED as stated. Render toga_worst_seed4242.png
   shows no visible toga contact, so likely check artefact: check_face.toga_clear still uses the single 1 cm
   bin lookup the builder says was fatal in the cap (NOTES "flipped at a bin edge"). Inverted mouths 0. CONFIRMED.
   The -1.39 state is itself an S-shaped lip.
3. Neutral 0 px (PIL re-diff, render newer than blend), GLB 23/23/17/17/30 + 13 bones re-imported: CONFIRMED.
   Magenta 0: read from _magenta.json, not re-rendered.
4. Runtime vs Blender: 3e-6 on my states. CONFIRMED.
5. Presets vs face 2 (corner drop, toga): identical except surprise 5.2 -> 4.25. CONFIRMED.
6. Sad tilt: present, but pupil is cut by an invisible chord (no lid drawn) and the right-eye glint
   straddles the cut (zoom_sad_frown_pupiltop.png). frown_concern flattens pupil top the same way. AU1 alone ~ no visible change.
7. Film: 94 frames, blinks read as blinks; no pops seen (seq_contact.png, seq_blink.png).

## Zig-zag scope (zig.json, zig_sheet.png, au15_single_crop.png)
- Metric calibrated on builder's #38/#75 (3), #102 (2) vs clean #74/#56 (0).
- 0 in 8 presets, 63 preset+viseme, 28 preset 50/50 mixes.
- NOT only random stacks: SINGLE keys AU15_L=1, AU15_R=1 (muscle_keys_sheet) and AU20_L=1 make S/zig lips;
  AU12_L+AU15_R (lopsided smirk) crumples; AU15_L+AU17+AU20_R thins one side to a hairline.

## Look
- frown/sad mouths collapse to a hairline stroke, near invisible at film size.
- surprise mouth = flat slit, reads bored.
- happy/warm_smile eyes ~ neutral (AU6 0.7 barely reads).
