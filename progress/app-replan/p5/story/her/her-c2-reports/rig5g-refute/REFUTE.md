# Rig 5g refute - 2026-09-29

Verdict: PASS-WITH-NOTES. Show the owner as a test film, with the cuff put to him as a question.

## Re-run check_rig (check/checks.json)
- Keep list CONFIRMED: limits 0, disc clip 0/0/0/0, rest 2 px (max 17/255), sole 2.867, bob 14.85, floor 0 @f173, hash 58506fb855580c29,
  GLB ok 17 keys none missing, forearm_R 7.56 / hand_R 7.61 / 0 flagged, upperarm_R accel 2.39 no spikes, pops 0/0/0, glove-disc 44.2,
  walk wrist dev 27.6-28.3 flex -15.9..1.7.
- glove_R lower peak 60.0 mm/frame @f172 (cap 65) - CONFIRMED.
- Fail-loud rest diff - CONFIRMED: empty --out gave rc 2 + "CHECK FAIL rest_diff" printed, even with rest_front.png beside the blend (no fallback).
- Lower 0% overlap from f167: ov.py numbers not re-run; visually confirmed below.

## Looked at
- 3/4 f160-183 (tq_f160_183.png): hand drops beside the disc rim every frame, no fist over the face. Lower FIXED.
- Front f160-183 (front_f160_183.png): my crop cut the hand on some frames; visible part shows arm swinging out to the side then settling - matches builder's side-effect note, reads natural.
- move_front.mp4 whole, every 8th frame (front_whole_step8.png): walk, raise, wave, lower all read; no snap/clip seen. Not viewed every frame.

## Cuff
- cuffgeo.py re-run (cuffgeo.out): arm radius ~31 mm, glove cuff median 44-46 mm near the wrist end - CONFIRMED (gap is in the mesh).
- Owner art (app/assets/clep/waving, welcoming, presenting): gloves DO have a short flared cuff; NOTES line 74 measured it as "small cuff ring".
  The art never shows the cuff from the open end, so the hollow mouth is not a design fact, it is an unmodelled interior.
- Lever builder did not name: close the cuff mouth (inner cap/liner, glove or arm colour). Silhouette and rest render unchanged, ring gone.
  Narrowing the bell is the other option and does change the rest look - that one is the owner's call.

## Quality bar
Raise/wave/lower: not cheap CGI - PASS. Cuff ring on f170-176 is the one cheap-looking moment left.
