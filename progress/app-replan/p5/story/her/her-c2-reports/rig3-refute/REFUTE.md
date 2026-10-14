# Rig 3 refute - 2026-09-29 (in progress)
1. build_her.py sha256 == build_her.test8.py (5297fab3...). CONFIRMED.
2. check_rig.py rerun (--glb) -> checks.json: 0 differing leaves vs builder's rig3/checks.json. GLB import ok, 17 keys, eye_L/R 7 each, lash 3, mouth 9, missing {}. Actions her_rigAction 0-191, eye/lash 0-158. CONFIRMED.
   Metric blind spots: sole-jump = LOWEST foot-mesh z only, blind to heel pitch pops while toe planted. Knee = shin rotation_euler.x (geometric = +5.5 deg rest bend: swing 66-70 geometric). Hip flex = thigh vs world vertical. step_m read from meta (my heel-strike measure: 0.245 steady CONFIRMED).
3. Independent probe (probe.py/ana.py/ana2.py, all meshes, non-armature mods off):
   - Foot (weight>0.5 set, 118 verts/side): max sole jump R 2.87 f27, L 3.49 f40 CONFIRMED; contact-vertex slide max 0.47 mm/frame. Swing low-z wobble persists L f36-42: 5.0,7.4,7.3,10.4,6.9,7.2,5.7 (3 mm, note). Mesh foot touches 3 frames after meta strike (L f43 low z 4.1 mm, touches f46).
   - Glove_R->disc vert-vert min 38.1 mm f143 CONFIRMED (BVH 37.8). Leg/sandal crossing min 12.9 mm sandal-sandal f93, no interpenetration.
   - BLOCKER: trailing-leg one-frame pop at every opposite strike. Knee (bone vectors) R 42:14 -> 43:58; L 54:14->55:58; R 66:14->67:58; L 78:14->79:56. Hip thigh -12 -> +10 same frame. foot_R pitch 47.3 -> 69.4 deg f42->43, sandal top +30 mm in 1 frame; again 74 -> 90 at f46. leg accel 64 mm/f^2 (median 0.14). VISIBLE on move.mp4: knee_pop_move.png (frames 40-45, 4th tile heel snaps up, sole shows). Knee hidden by skirt; foot is not.
   - Wave raise has no ease-in: glove_R vel 117:1 -> 118:93 -> 119:199 -> 120:238 mm/frame (5.7 m/s at 24 fps); lowering 166:4 -> 167:87 -> 168:154.
   - Blink eye/lash 85-88 mm/frame f143 = normal 2-frame blink.
4. Look: rest_vs_test8.png identical by eye; check rest diff 2 px/max 17 (accepted round 1). bones_overlay: chain fitted to body, OK. walk_contact_sheet: key poses read, but f55/f67 tiles are post-pop frames; sheet cannot show the pop.
   Wave (wave_move.png 114..170): no clip, 38 mm gap; raise 119->120 covers ~90 deg in 1-2 frames = snap.
   Start/stop: knees hidden by skirt, out-of-range angles not visible. Stop: knees held 26-28 deg geometric f91-99, pelvis settles then hard stop f101 (legs 10.8 -> 0.7 mm/frame) - note.
   Trailing-knee 50 deg jump: knee hidden by skirt, but the FOOT shows it (heel snaps up, sole shows) - visible.
VERDICT: FAIL (1 blocker: one-frame heel/knee pop at every opposite strike; wave-raise snap fix-before-owner).
