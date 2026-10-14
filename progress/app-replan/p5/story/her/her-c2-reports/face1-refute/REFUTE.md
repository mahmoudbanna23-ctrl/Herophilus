# Refute: face rig 1 (2026-09-29)

## Static
- build_her.py SHA-256 = build_her.test8.py = 5297fab3541910628df56e4c39ad23c008c3d776d110919ec34b384f04d0f4ab : CONFIRMED
- Builder checks_face.json (read): 68 keys (12/12/7/7/30), 13 bones, max radius frac 0.776, rest dev 0.00 mm, non-face keyed meshes none, ROM clamps exact, GLB 68 morphs + 13 bones, preset surprise toga 0.62 mm.
- neutral_front.png vs prerig: pixel-identical (max 0); hashes differ (PNG metadata only).
- check_face.py re-run (OUT patched to face1-refute): checks_face.json IDENTICAL to builder's, every field.

## Independent (stress.json, probe2.json, seq_steps.json)
- GLB: 68 morphs re-imported, each driven to 1 deforms; max mm equals blend key max on all 68 (X = 0, idle by design). CONFIRMED.
- EEVEE diff (neutral_diff_vs_test8_eevee.png): edge/shading/grain pattern only, no shifted shape. Excuse plausible; not re-provable, EEVEE needs GPU (barred).
- Combos exceed per-key radius claim: AU1+AU2+AU5 (= surprise preset) 0.857 of disc radius vs claimed 0.776; random 120 combos max 0.82.
- Lashes intersect face_marks (hour ticks) in surprise preset, AU1+AU2+AU5, AU6+AU7+blink (BVH overlap). Visible: surprise_lash_zoom.png. Lashes also float ~15 mm clear of rim.
- Pupil escapes closed lid: blink + look down 29.85 mm below rim, look up 7.3, look side 2.6. Visible: close_blink_lookdown (second dark sliver under closed eye).
- Mid-blink / look_down / sad: whole eye squashes to a circle, pupil shrinks; no lid crosses the pupil. seq/034.png, close_look_down, close_sad. Identity drift (her eyes are tall ovals).
- Frown / sad / AU15=1: mouth goes flat line, corners never turn down.
- Pops: per-frame max vertex step constant inside every transition (linear, drivers linear), no spikes. face_seq.mp4 68 frames.
- Mouth-vs-body_disc overlap on AU18/AU22/E/F is the inverted outline hull, not visible. ALL keys=1 puts mouth into toga (unrealistic combo, note only).

## Verdict: FAIL (quality bar)
