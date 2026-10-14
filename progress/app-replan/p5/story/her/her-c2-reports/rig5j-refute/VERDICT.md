# Rig 5j refute - FAIL

Failures
1. Tuck crease visible at REST (the art pose). rest_diff outside cuff mask = 42 px (gate <= 3; 5i was 2). changed_px 1163 (5i 2), vs capped baseline 1121. Both cuffs. Right arm: dark jagged shard where the arm meets the cuff mouth (rest_hands_5i_5j.png). Cause: flattening the 41 R / 36 L arm verts (rig_her.py L509-518) makes a sharp fold, and it shows through the elbow-side mouth. Fix: taper the arm end into the cap over 10-15 mm instead of flattening onto one plane, or cull under the cap. Then re-gate the rest diff.
2. Same shard in the sweep at supination +60..+85 (front f6-15; sup_5i_vs_5j.png). The builder's orange_front = 2361 at f4-20 is not gated and was not reported. Her rest pose is +85 supination, so this reaches every film.
3. No 5j films rendered (wrist_close, cuff_close, wave_close, move, peak/eyes-open). Nothing fit to send.

Passes
- Pronation f26-46: orange 0, front and 3/4. My own box count: 5i 173-2559 front, 5j 0 (tq36_5i_vs_5j.png). arm_past_cap 0 (max -4.6 mm). The --notuck soundness run was NOT done.
- Hash 58506fb855580c29 · sole 2.867 · bob 14.85 · limits 0 · clip 0 · forearm_R 7.5 · glove_R 60.9 · disc 42.9 · orbit 8.16 ulnar · twist 0 · fold/pinch 0 (sup/dev) · GLB ok. tq pron 0-1 px (noise).
