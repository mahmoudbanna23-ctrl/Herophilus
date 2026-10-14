# Rig 5f refute - 2026-09-29

Verdict: PASS-WITH-NOTES.

## Re-run (check/checks.json, check.log)
- Glove-disc 44.2 mm @f144 - CONFIRMED. Pops 0/0/0 - CONFIRMED.
- forearm_R 7.56 @f126, hand_R 7.61 @f145, 0 flagged; upperarm_R accel 2.39, 0 spikes - CONFIRMED.
- Limit violations 0, disc clip 0 (all four meshes) - CONFIRMED. Forearm rotation -30 anat, 0 out-of-human frames; twist -57.7 (limit -82.7).
- Hash 58506fb855580c29/34, GLB ok 17 keys none missing, sole 2.867, bob 14.85 - CONFIRMED.
- Palm 0.963-1.0, lateral travel 46->55, 3/4 angle 37 deg: builder sweep outputs (sw2.out) agree; not independently re-measured.
- Rest diff 2 px (max 17/255) - CONFIRMED.

## Rest-diff error path
- bare/: blend copied alone, no rest_front.png anywhere -> rest_diff = {"error": "rest_front.png not found ..."}, but Blender exit code 0.
  Explicit in JSON, not fail-loud at process level; anything that only checks rc sees success.
- norest/: --out without the png -> silently falls back to the png beside the blend (changed_px 2). A stale render beside a rebuilt blend would pass unnoticed.

## Looked at (per frame)
- 3/4 raise f116-139 (move_tq_f116_139.png): arm continuous, upper arm + elbow read beside the disc from ~f126, smooth arc, palm turns up then forward. No snap. PASS.
- Wave f128-163 (wave_f128/152.png): upper arm, elbow, forearm, glove all read; wave oscillation natural. Blink runs ~f142-145, so the f139 stills have eyes open (peaks_f139.png). PASS.
- Front still f139: whole arm reads, elbow anatomical, palm forward. PASS.
- Lower f166-177 (move_tq_f160_183.png, lower_f170_173_176_zoom.png): hand curls into a loose fist and drops in front of the disc rim; for ~4 frames (f169-172) upper arm hides and the fist looks pasted on the disc face. Glove cuff shows as a detached/ghost ring around the wrist at f170-176 (hollow cuff mouth visible, forearm thinner than cuff). Same ring exists in rig 5e f173/f176 (cmp_rig5e_f173_f176_rig5f_f104.png) - pre-existing, missed in my 5e review.
- No front FILM exists (films: tq, side, wave); front judged on the still only.

## Quality bar
Raise and wave: not cheap CGI - PASS. Lower: the pasted-fist beat and the cuff ghost ring are the cheapest-looking moments left - note, fix before owner-facing film.
