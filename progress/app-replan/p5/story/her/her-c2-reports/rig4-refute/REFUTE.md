# Rig 4 refute - 2026-09-29 (in progress)
1. build_her.py sha256 == build_her.test8.py (5297fab3...). CONFIRMED.
2. check_rig.py rerun (--glb) on rig4/her-rig4.blend -> rig4-refute/checks.json: 0 differing leaves vs builder rig4/checks.json except rest_diff (empty in rerun: check reads OUT/rest_front.png, absent in my folder). GLB import ok, 17 keys, missing {}. CONFIRMED.
   rest_diff recomputed by me on rig4/rest_front.png vs test8/her_front.png: 2 px >12, max 17. CONFIRMED (same as accepted round 1).
3. Own probe (probe.py from rig3-refute, all meshes, non-armature mods off; ana.py/ana2.py/stance.py):
   - Round-2 blocker FIXED: trailing knee (bone vectors, geometric) R f41-45 14,19,26,34,41 = 8.5,13.5,20.5,28.5,35.5 net. CONFIRMED. L f53-57 same. No one-frame jump anywhere: body meshes accel max <=7 mm/f^2, legs 24 (rig3: 64), sandals 40 f83.
   - Stance slide: contact verts (z<1mm both frames) max 0.375 mm/frame (R f39); total drift of strike-contact verts 0 on steady stances, 0.59 mm on start stances. PASS.
   - Heel "rise 4.1 mm while planted" = rounded sandal heel rolling as the foot flattens (rear point 6.6->7.4->10.2->12.1 mm over strike..flat, contact count 1,1,3,9). Not a lift, no slide. Heel rise at push-off gradual: 14,21,31,45,62,78,97,112 mm/frame-by-frame. PASS.
   - Glove_R->disc min 38.5 mm f143. Wave vel bell-shaped 117:7 ...124:134... 130:24; lower 164:7 ...172:131... 178:6. Rig3 snap fixed.
   - NEW small hitch at every toe-off: knee 41->38->50 and hip -8->-10->-2 (R f45-47; L f57-59; R f69-71). Leg reverses ~2-3 deg for 1 frame then swings. Check on film.
   - Terminal swing: knee 66,50,23,6 (f50-53), straight 2 frames before strike f55, then re-flexes to 8 at strike. Check on film.
   - Pelvis vertical bob steady steps 3.7 mm p-p (342.2 at u=2, plateau 345.9 u=6..11) = 0.3% of her 1213 mm height (~1.5 px on 540p film). Human ~2.5% of height; compass-vault for hip 350/step 245 predicts ~8-12 mm after knee smoothing. Lateral sway +-14 mm (28 p-p, 2.3%, human-like). Bob present, right phase, ~1/3 amplitude: effectively invisible on film.
   - arm_R vert 71 comes 0.44 mm to a disc vert f162: it is in rig_meta socket exempt list (96) -> shoulder socket, not a clip. Glove gap 38.5 mm.
   - GLB fresh factory import: FINISHED, 17 keys, actions her_rigAction 0-191, eye/lash 0-158. CONFIRMED.
   - Face shape keys: sha of all 34 key blocks rig2 == rig4 (58506fb855580c29). CONFIRMED unchanged.
4. Look (ffmpeg tiles in rig4-refute/fr/):
   - side_feet_41_56: trailing heel rises gradually f41-47, toe-off, swing, landing. No snap. Toe-off knee hitch NOT visible (shins are thin sticks under skirt).
   - side_feet_18_33 start step: gradual heel rise, clean landing.
   - side_stop_80_103: stop step lands beside, settle small, no pop.
   - tq_wave_raise/lower (every 2nd frame): bell-shaped raise, arm down->overhead mostly in f120-126 (~0.25 s) but eased both ends; not a snap. Lower mirror. No clip.
   - rest_vs_test8.png (rig4 rest_front vs test8 her_front): identical by eye; 2 px >12, max 17.
   - walk_contact_sheet: R_passing and R_up both labelled f61 (confirmed, cosmetic; R_up should be ~f63-65).
   - heel_strike_strip: gradual trailing heel rise at all 4 opposite strikes. Blocker gone on film.
   - Terminal swing: knee 66->50->23->6 (f50-53), straight 2 frames early then re-flexes to 8 at strike. Not visible on film (shin is a thin stick under skirt, foot path smooth, lands in 3 frames 5.9->4.4->2.3->0 mm). Note.
   - Start hip 38.0 world / 35.4 vs pelvis, stop knee 66.6: under 3 deg over -> notes.
   - Stop-step contact knee 13 deg (steady 2.3): stop foot lands soft-kneed; not visible. Note.
VERDICT: PASS-WITH-NOTES. Only fix-before-owner item: vertical pelvis bob 3.7 mm p-p (~1/3 of human-scaled, invisible on film) - owner rule "pelvis rise/fall" is present in phase but not readable.
Show owner: rig4/move_side.mp4, rig4/move.mp4, rig4-refute/walk_cycle_side_f41_63.png, rig4/heel_strike_strip.png, rig4-refute/fr/tq_wave_raise.png (+ tq_wave_lower.png).
