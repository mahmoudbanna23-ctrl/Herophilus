# Rig 5m refute - real-motion films - 2026-09-29

VERDICT: FAIL

1. cuff_close.mp4 is byte-identical to wrist_close.mp4 (md5 d1f4c387...; cf=wf, ct=wt). c5m.sh encodes frames_wrist_* after the cuff stage, which wrote only cuff/cuff_{front,tq}_170-176.png. wrist_metrics_cuff.json == sweep. No real-motion cuff film exists.
   Fix: encode cuff/ frames; render cuff mode over the whole move.
2. Real-motion stills cuff/cuff_front_171, 173 (176 edge): orange arm sliver between palm and cuff mouth. White pointed flap at thumb root, 170-176. Wrist at those frames: flex/ext 16-19 deg rest-relative, deviation 19-23 deg, so INSIDE the range. The extreme sweep frames are NOT the only bad ones.
   Zoom: zoom_wrist_171_173_175.png, zoom_cuff_front.png.
3. move, move_front, move_side, wave_close: clean at sheet scale, no pop. The hand is too small to clear the cuff.

Measured (Blender, hand_R vs forearm_tw_R, rest-relative): flex/ext -24.55 (f147) to +1.03 (f76), a 25.6 deg span. This matches the builder's -8.7..+16.9 from neutral. Deviation 0..41.7 deg (f147). Combined 49.5 deg.
Re-verified: bob 14.85 re-run, match. hand ROM matches checks.json. Hash 58506fb855580c29, sole 2.867, rest outside mask 2 px: all read from checks.json, not re-run. check stage exit 3 (gate_5l).

Fit to send: rig5m/wave_peak_front.png, rig5m/wave_peak_tq.png (eyes open, clean). The move films are fit only as full-body views, and only with the cuff caveat.
