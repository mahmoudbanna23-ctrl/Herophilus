# Rig 5i refute - FAIL

Failures
1. Cuff not closed at pronation (owner's own request). wrist_close sweep f30-42 (about -60 to -85 deg), front and 3/4: hand-side cuff mouth gapes, orange arm visible inside (f36_f68.png, f36_5h_vs_5i.png). 5h same frames show white interior (pron_5h_more.png): a 5i regression from the weight changes. Builder called it "arm passing through the cap"; that is poke-through. Fold/pinch metrics miss it: glove-only, armature-only, arm_R never tested. Fix: keep arm_R end inside glove at full pronation (arm tip weights to forearm_tw, or cap/cuff-rim weights), re-look f30-42.

Notes
- Fold metric: dot drop > 1.0 = about 90 deg on flat pairs, not the 60 NOTES states.
- Lower overlap not 0%: 3/4 glove 16.9% f164, 5.0 f168, 0.7 f173, 0 from f174; at or below 5h every frame; on film the hand stays beside the disc edge (lower_tq.png). Fine visually; fix the claim.
- f68 flexion: rim crease visible in close-up only; invisible at film size.
- f120-126 palm dip reads as natural turn during raise.
- Radius roll unreadable: forearm bands are rotationally symmetric.

Verified by rebuild + check_rig (identical checks.json): rest 2 px outside mask (mask 5653 px, tight to cap, 2.3x changed area), hash 58506fb855580c29, bob 14.85, sole 2.867, limits 0, clip 0, disc R 42.9 f145, orbit 8.16, axial/ulna 0, forearm_R 7.5, glove_R 60.9. Eyes open f139. Fold/pinch rerun still running (wrist_metrics_5i.json here).

Wrist rerun done: same series True sup30-42 folds [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] pinch [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
