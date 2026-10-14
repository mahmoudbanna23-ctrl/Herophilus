# her-c2 index — what each round of `D:/scratch 2026/her-c2` was, before removal

Written 2026-10-15 for the disk cleanup (owner yes, 2026-10-15). Source for every "what it was" line:
`story/her/NOTES.md` (line numbers = the `##` heading; the live copy and this copy have the same 1566 lines)
and `p5/RESUME-p5.md`. Small text of every removed round (md, txt, json, log, py, sh, each under 1 MB) is copied
to `her-c2-reports/<folder>/` (loose top-level files to `her-c2-reports/_top/`). Not copied: images, video,
.blend, .glb, and two JSON files over 1 MB (`rig3-refute/probe_meta.json` 1.26 MB, `rig4-refute/probe_meta.json`
1.31 MB). MB = size on disk measured 2026-10-15 (`du -sm`). Nothing in the folder was modified after 2026-10-01.

Total in folder about 11.6 GB. Remove about 9.93 GB. Keep about 1.73 GB.

NOTES.md is the permanent record of the findings. Scripts: `rig_her.py`, `check_rig.py`, `face_rig.py`,
`check_face.py`, `build_her.py` live in `story/her/` of the live copy, backups `rig_her.5n-5r.py` there too.

## Keep

| name | MB | what it was | NOTES | verdict |
|---|---|---|---|---|
| `test8` | 48 | Her approved look (owner pick 2026-09-29): renders + `her-test8.glb`. Also holds `her_front.png`, `cuff_mask_5i.png`, `her_front_capped_5i.png` | L387 Test 8, L1303 Rig 5i | KEEP. Loaded as INPUT by `check_rig.py` (rest-diff gate, L19, L346) and `face_rig.py` (T8, L68); owner-approved look |
| `rig5r` | 872 | Current rig: thumb-corner fix, keep-list held, speckle fixed. gate_5l still FAIL (front 1 hit) | L1541 Rig 5r | KEEP. Current rig, Phase 3 renders it; `rig5s/c5s.sh` reads it |
| `rig5s` | 714 | Arms round, thumb-corner / seen-hit cause work. Unfinished (owner paused 2026-10-01) | L1558 Rig 5s | KEEP. Phase 5 round; resume point |
| `face9` | 97 | Face rig 9 = final face rig: lip-curve fails [], blend/glb/sheets/film | L1378 Face rig 9 | KEEP. Phase 5 merges it; `face_rig.py` writes/reads it (OUT, L65) |
| `face9_run.sh` | 0.002 | Run script of face 9 | L1378 | KEEP. Pairs with `face9` |
| `rig5n/rest_front.png` | 2 | Front rest render of rig 5n | L1472 Rig 5n | KEEP this one file. `check_rig.py` L352 compares the rest render against it (report only, guarded by `os.path.exists`, check runs without it). Kept because the brief says keep inputs; rest of rig5n removed |

## Remove — test rounds (look of her body)

| name | MB | what it was | NOTES | verdict |
|---|---|---|---|---|
| `test6` | 39 | Test 6: bezel rim removed, edge painted, Greek-key hem, rope knots, soft folds; also `iter/t3ref` re-render of test 3 | L297 | REMOVE. Superseded by test 8; script backup `build_her.test6.py` in repo |
| `test7` | 38 | Test 7: bigger shoulder knot, deeper toga front folds | L347 | REMOVE. Superseded by test 8; `build_her.test7.py` in repo |

## Remove — rig rounds 1 to 4 (whole body)

| name | MB | what it was | NOTES | verdict |
|---|---|---|---|---|
| `rig1` | 210 | First skeleton + face shape keys, sheets, bone overlay, movie, `compose.py` | L429 | REMOVE. Refuter FAIL (blocker: GLB shape keys); superseded |
| `rig1-refute` | 10 | Refuter report on rig 1 (`REFUTE.md`) | L514 (quoted) | REMOVE. Text copied |
| `rig2` | 218 | Fix round: GLB shape-key export blocker | L514 | REMOVE. Superseded |
| `rig3` | 228 | Pelvis follows stance knee, walk contact sheet, move.mp4 | L551 | REMOVE. Refuter FAIL (heel pop); superseded |
| `rig3-refute` | 106 | Refuter FAIL on rig 3 (heel pop); includes `probe_meta.json` 1.26 MB (not copied) | L593 (quoted) | REMOVE. Text copied except the big JSON |
| `rig4` | 232 | Heel-pop fix. Lower limbs approved, upper limb a disaster (owner 2026-09-29) | L593 | REMOVE. Superseded by round 5 |
| `rig4-refute` | 109 | Refuter PASS-WITH-NOTES on rig 4; `probe_meta.json` 1.31 MB (not copied) | L593, RESUME-p5 L6 | REMOVE. Text copied except the big JSON |

## Remove — rig round 5 series (upper-limb rebuild, a to q)

| name | MB | what it was | NOTES | verdict |
|---|---|---|---|---|
| `rig5` | 239 | Diagnosis of rig 4 arms (`arm_shots.py`) and first upper-limb rebuild | L690, L774 | REMOVE. Superseded |
| `rig5b` | 314 | Anatomical forearm rotation (sup/pron) | L832 | REMOVE. Superseded |
| `rig5c` | 320 | Bob "go like a real person", arm deform close | L903 | REMOVE. Superseded |
| `rig5c-refute` | 14 | Refuter report on 5c | L999 (quoted) | REMOVE. Text copied |
| `rig5d` | 298 | Wave raise fix (refuter note 1) | L999 | REMOVE. Superseded |
| `rig5e` | 500 | Elbow / wrist durations, 18-frame humerus raise | L1049 | REMOVE. Superseded |
| `rig5e-refute` | 5 | Refuter FAIL on 5e (3/4 view) | L1131 (quoted) | REMOVE. Text copied |
| `rig5f` | 404 | 3/4 view fix, sweeps g0..h4 | L1131 | REMOVE. Superseded |
| `rig5f-refute` | 12 | Refuter report on 5f | L1216 (quoted) | REMOVE. Text copied |
| `rig5g` | 511 | Lower-arm fist-on-disc fix, move_front added, sweeps | L1216 | REMOVE. Superseded |
| `rig5g-refute` | 7 | Refuter report on 5g | L1280 (quoted) | REMOVE. Text copied |
| `rig5h` | 501 | Owner: wrist radius/ulna movement wrong; ulna hinge, radius as 3 chained twist bones | L1280 | REMOVE. Superseded |
| `rig5i` | 485 | Cuff mouth closed (owner yes), weight smoothing, new rest baseline | L1303 | REMOVE. Superseded. Its baseline files live in `test8` (kept) |
| `rig5i-refute` | 99 | Refuter report on 5i | L1395 (quoted) | REMOVE. Text copied |
| `rig5j` | 97 | Arm-past-cap tuck, closed cap disc; INCOMPLETE | L1395 | REMOVE. Superseded |
| `rig5j-refute` | 6 | Refuter report on 5j | L1411 (quoted) | REMOVE. Text copied |
| `rig5k` | 96 | Faces past cap deleted, orange gate; INCOMPLETE, no films | L1411 | REMOVE. Superseded |
| `rig5l` | 581 | Root cause of gaping cuff (six loose glove parts), SEAT weights, gate 5l | L1425 | REMOVE. Superseded |
| `rig5m` | 581 | `wrist_` helper bone, ARMPALM weights; FAIL gate_5l | L1449 | REMOVE. Superseded |
| `rig5m-refute` | 21 | Refuter report on 5m | L1472 (quoted) | REMOVE. Text copied |
| `rig5n` | 733 (of 735) | Probe audit (diag3), loop cuts tried and WORSE; FAIL gate_5l. Only `rest_front.png` kept (see Keep) | L1472 | REMOVE all but `rest_front.png` |
| `rig5o` | 721 | Wrist piece, thumb-root softening; gate_5l FAIL, seen 15/4 | L1495 | REMOVE. Superseded |
| `rig5o-refute` | 18 | Refuter report on 5o | L1511 (quoted) | REMOVE. Text copied |
| `rig5p` | 736 | Piece shade/seam fix (SEAT5P), `_exp` variants | L1511 | REMOVE. Superseded; refuter FAIL (driver dropped `--axo`/`--wavesup`) |
| `rig5p-refute` | 5 | Refuter FAIL on 5p | L1526 (quoted) | REMOVE. Text copied |
| `rig5q` | 724 | Motion defaults restored, glovewp series, thumb-corner notch measured | L1526 | REMOVE. Superseded by 5r. Only named by `rig5r/c5r.sh` (history, a compare-crops step) |

## Remove — face rig rounds 1 to 8 and 9-refute

| name | MB | what it was | NOTES | verdict |
|---|---|---|---|---|
| `face1` | 25 | Face rig 1: jaw/eye/lid bones driving surface-conformed shape keys | L729 | REMOVE. Superseded |
| `face1-refute` | 19 | Refuter FAIL on face 1 | L941 (quoted) | REMOVE. Text copied |
| `face2` | 92 | Fix: blink closes vertically, key names kept | L941 | REMOVE. Superseded |
| `face3` | 90 | Every key driven by armature props, `face_caps.json` | L1086 | REMOVE. Superseded |
| `face3-refute` | 5 | Refuter report on face 3 | L1168 (quoted) | REMOVE. Text copied |
| `face4` | 93 | One-sided mouth masks (L+R sums to 1) | L1168 | REMOVE. Superseded |
| `face5` | 89 | Per-side AU15 corner drop, toga-fitted | L1254 | REMOVE. Superseded |
| `face6` | 96 | Look-up eased by AU7, sad/frown lens thickened | L1319 | REMOVE. Superseded |
| `face7` | 97 | Purse fade for lip-sync; run unfinished when written (face_seq done later) | L1342 | REMOVE. Superseded; sad/frown loss traced in face 8 |
| `face8` | 96 | AU17 restored (TOP .021, BOT .025); render pass unfinished when written | L1360 | REMOVE. Superseded by face 9 |
| `face9-refute` | 9 | Refuter report on face 9. The final face rig `face9` is kept | L1378 | REMOVE. Text copied; kept-folder verdict is in NOTES L1378 |

## Remove — loose files at the top of the folder

| name | MB | what it was | NOTES | verdict |
|---|---|---|---|---|
| `check_rig.5n.py`, `.5p.py`, `.5q.py`, `.5r.py` | 0.16 | Backups of `check_rig.py` per round. `5r` is byte-identical to the current `check_rig.py` (cmp) | L1495, L1526, L1541, L1558 | REMOVE. Text copied; `check_rig.py` in repo |
| `face4_render.sh`, `face4_run.sh`, `face4_zig_probe.py`, `face6_run.sh`, `face6_sum.py`, `face7_run.sh`, `face8_run.sh`, `face8_sh.log` | 0.02 | Run drivers/probes of face rounds 4 to 8 | L1168 to L1360 | REMOVE. Text copied |
| `face9_run.sh` | 0.002 | Face 9 driver | L1378 | KEEP (above) |
| `rig1_build.log`, `rig1_check.log`, `rig1_movie_side.log`, `rig1_movie_tq.log`, `rig1_sheets.log`, 5 `rig1_*.png` stills | 2.0 | Rig 1 logs and stills (png about 1.9 MB) | L429 | REMOVE. Logs copied; images not |
| `rig4_build.log`, `rig4_check.log`, `rig4_fast1..9.log` | 0.13 | Rig 4 build/check/fast-pass logs | L593 | REMOVE. Text copied |
| `rig5i_look0.png`, `rig5i_mask.py` | 1.6 | Look still and mask script of 5i | L1303 | REMOVE. Script copied |
| `toga_bins.json` | 0.001 | Toga-top bins per 1 cm column; `face_rig.py` builds these itself in memory (L521) | L1086 | REMOVE. Not loaded by any current script (grep). Text copied |

## Unsure / notes

- `rig5n/rest_front.png`: kept as the only exception inside a remove folder. If the owner prefers a clean sweep, delete that file too; `check_rig.py` then just skips the `vs_5n_px` figure.
- `rig5q` is removed even though `rig5r/c5r.sh` names it (variable `Q`). That script already ran; only a re-run of its compare-crops step would miss it.
- The trial copy of `story/her/` lacks `face_rig.py`, `check_face.py`, `rig_her.5n-5r.py`; inputs were read from the live copy (read only).
