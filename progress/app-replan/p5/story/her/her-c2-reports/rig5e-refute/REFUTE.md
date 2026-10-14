# Rig 5e refute - 2026-09-29

Verdict: FAIL (numbers all confirmed; claim 6 refuted; 3/4 view misses the owner quality bar).

## Re-run
- check_rig.py re-run on rig5e/her-rig5e.blend -> check/checks.json (check.log). diag2.py re-run -> diag2.out.

## Claims
1. Pops 0 (bone/vertex/hand), no f151 pop - CONFIRMED (pops_rig5b count 0/0/0).
2. forearm_R 7.56 deg/frame at f126, 0 flagged - CONFIRMED.
3. Palm-forward 0.880-0.989 over f132-154, forearm rotation -30 anat, 0 out-of-human frames, twist -57.7 (limit -82.7) - CONFIRMED.
4. Limit violations 0, disc clip 0, sole jump 2.867, bob 14.85, glove_R 59.9 @f40, hash 58506fb855580c29, GLB 17 keys none missing - CONFIRMED.
   Rest diff: builder checks.json says changed_px 2 (max diff 17/255); my re-run returns rest_diff {} (needs a rest render in --out), so 2 px is read off the builder file, not reproduced.
   Note: glove_R is over the 40 mm/frame vertex threshold on 37 frames (walk swing) - same as before, not new.
5. Glove-disc min 27.1 mm @f144 - CONFIRMED.
6. "3/4 stub unfixable within ROM + 25 mm gap" - REFUTED.
   - Diagnosis wrong: the upper arm is not hidden behind the rim. Ray casts from the tq camera (yaw -45) hit arm_R on 9/9 upper-arm samples.
     It is FORESHORTENED: upper arm points 19.3 deg off the camera axis (projected 22.6 px of 600; ratio 0.33).
   - Builder swept the wrong direction (more flexion, plane 32->45). Swinging the humerus BACK toward the coronal plane
     (world-Z swing about the shoulder) raises the gap AND shows the arm:
       swing -15: gap 44.0 mm, view angle 32.8 deg (ratio 0.54)
       swing -25: gap 53.1 mm, 42.3 deg (0.67)
       swing -25 + clavicle Z +10 (depression; -16.6 -> -6.6, limit +-30): gap 76.7 mm, 44.1 deg (0.70)
     Clavicle protraction +-15 alone: gap 37-40 mm, but barely changes visibility.
     Evidence: lever_probe2.json, lever3_compare.png (left = rig5e, right = swing -25 + clav +10: elbow and upper arm read).
   - Not checked for the lever: bone ROM table, palm-forward dot (hand turns ~25 deg with the swing; twist would need to
     compensate), speed limits. These are the builder's to verify.

## Looked at
- Raise (raise_strip, wave_f116_138_step2): smooth, no snap. In 3/4 the arm swings behind the rim f120-122, then the hand
  appears to sprout from the rim - reads as cheap CGI. Front view reads well.
- Wave turnaround (wave_f138_149): no snap; hand-only amplitude is small.
- Blink f142-145 (eye verts 88 mm/frame, exempt) - normal blink, but wave_peak_front/tq are rendered at f143, mid-blink, so
  both owner stills show half-shut eyes. Pick another peak frame.
- No clipping seen.
