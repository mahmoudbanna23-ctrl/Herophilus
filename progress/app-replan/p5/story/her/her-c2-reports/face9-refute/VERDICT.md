# Face rig 9 refute - PASS-WITH-NOTES (2026-09-29)

No blocking failure.

Re-run myself (check_face.py via wrapper, OUT=face9-refute, seeds 29/4242/777/1234): lip_curve_fail [] on every seed; pupil over 3.17 mm 0/500 on every seed (max 3.15); toga min 2.40/2.35/2.45/2.31 mm; inverted 0; runtime 7.2e-5 / 3e-6; GLB 23/23/17/17/30, 13 bones; neutral 0.0 mm; frown 26.27, sad 31.37. Summary and random_500 byte-identical to the builder's. Neutral pixel diff re-computed from the PNGs: 0 px over 12.
Not re-rendered: magenta (builder _magenta.json = 0).

Looked at: surprise blends (face + mouth sheets), stress_sheet, surprise_lash_zoom, AU15/AU20 singles, AU17 alone, sad/frown at 128 px and full, all 94 film frames (no pops; frame diffs smooth), eye crops (half blink + look up, AU7 + look up 40).
Face3 failures gone: AU15/AU20 singles show one bend, no S. No chord over the pupil.

Notes:
1. Sad and frown_concern are near-identical at 128 px: same thin down arch, eyes barely differ. The builder's claim that they are "distinguishable" is overstated. Tune the presets (brow/lid).
2. sad/frown/thinking/warm_smile/wink 50/50 surprise all render the same open grin; no kink, but sad+surprise reads happy.
3. thinking, now without AU17, reads as warm_smile.
4. AU17 alone is a flat pressed slit, not a pout. Not blocking, since no preset uses it alone.

Fit to send owner: face9/expressions_sheet.png, face9/face_seq.mp4, face9/mouth_curve_sheet.png, face9-refute/surprise_blends_face.png, face9-refute/singles_eyes.png, face9/sadfrown_128.png
