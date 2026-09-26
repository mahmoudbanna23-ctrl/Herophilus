# P5 resume — state at 2026-09-26 (end of session block)

## Lane A — spike: CLOSED 2026-09-26, OWNER PICKED B (hand-written renderer)
- Four lean-drafter fix rounds, each checked by an Opus refuter (`p5/REFUTE-spike-round{3,4,5,6}.md`).
  Round 6 passes the code. Commits: `df4b83b`, `2db6f25`, `0630d58`, `4b64c454`.
- Final numbers (refuter round 6, `spike-measure.md` Round 6):
  - B: 14,424 B code, 192,423 B http, heap ~1 MB.
  - A: 719,908 B code, 898,309 B http.
- Budget unit: 900,000 B decimal (owner, 2026-09-26).
- B plays the full rig (every channel down the GLB node tree, world × IBM) and falls back to 2D on
  any load failure.
- `make-glb.js` derives its IBMs from node TRS; self-check `82 passed`, confirmed by the refuter's
  own matrix check.
- P5 build notes:
  - The placeholder model leaves a gap between body top (y=0.55) and cap (y=0.94). That is a
    geometry issue; the real glb comes from Meshy.
  - Lit materials in B must be hand-written.
  - `app/vendor/` is NOT needed (the owner picked B).
- Scratch probes live in the session scratchpad, not `spike/`. The three old probe files
  (`verify-round4.mjs`, `probe-sweep.mjs`, `_pngdiff.mjs`) are gone from `spike/`.

## Lane A — master plate v2
- Three candidates are in `scene-pilot/plates/master-v2-{a,b,c}.png`, sent to the owner.
- The independent check found:
  - A fails the 400 px cluster (451 px).
  - C fails the cluster (429 px) and its wick box is ~55 px off.
  - B passes all 10 checks. It has an extra closed book near the bowl, which is not a violation.
- **Owner PICKED B (2026-09-26).** B + notes committed `047f401`; a/c stay uncommitted on disk.
- `SCENE_MAP` measured, `plates/scene-map-b.js` + `.check.js` (35 passed). Refuter: round 1 FAIL
  (9/15 boxes), round 2 FAIL (portrait typed in), round 3 PASS — `p5/REFUTE-scenemap-b{,-round2}.md`.
  Violet w 43 = occlusion touch, confirmed. No desk-edge field; letters slot ends y=612 < edge ~619.
- Owner ruled 2026-09-26, applied `64b62f8a` (refuter round 4 PASS, 64 passed): tablet
  [932,458,200,90] + pile [1160,458,200,90] sit ON openScroll; portrait crop x0 = bookCluster left
  (1066..1445.4), every book inside, lamp handle clips ~29.6 px.
- Grades DONE `dd7332da`: time of day = programmatic grade presets (`REFUTE-grades.md`, round 2 PASS).
- Sprites: 12 in `app/assets/scene/`, made by `plates/cut-sprites.js` (`12 passed`), after 4 Codex dispatches
  (`p5/sprites-brief{,-2,-3,-4}.md`). Method: keyed objects on `#00b140`, overlaid on the master, box-sized
  RGBA, 8 px margin, bottom-centred, contact shadow away from the lamp. Families share one width.
  letters-many = script stack of letters-1 ×9. tablet-half = blank's alpha + wax-confined strokes. gilt ×4
  and letters-0 are cut from master edits. Refuter rounds 1-4 in `REFUTE-sprites.md` +
  `D:\tmp-sprite-ref{3,4,5}\findings.txt`; round 5 is tablet-half only.
- Codex call that works: `timeout -k 10 2400 codex exec -m gpt-5.6-terra -c model_reasoning_effort=low
  --sandbox workspace-write -C "$R" -i <img> - < promptfile > log 2>&1`. A last line of `Node.js vNN` is a
  thrown error, not a pass; re-run the script yourself.
- Next: wire sprites + grades into the home desk.

## Parallel lanes opened 2026-09-26 (owner: P1, P2, P3 alongside P5)
- P1a gate (Codex): `tools/validate`, `tools/check-all`, `app/smoke.*`, report `p1/p1a-report.md`. It caught
  23 neuro MS questions on a non-existent chapter `nr-demyelinating` (since `5a479760`); fixed to `nr-ms`,
  CHECK-ALL 4/4.
- P2a design (Sonnet): `p2/P2a-design.md`. The home floor is already 1,055,663 B (> 1 MB), so shared
  bytes must be cut first. It has 3 owner questions.
- P3: only B1 (subject page) is left. The owner ruled on 2026-09-26: re-mock both options after P5,
  against the finished desk.

## Owner decisions owed
- ~~Plate pick~~ B, decided 2026-09-26.
- ~~Fields~~ APPROVED 2026-09-26: `S.tally` {"YYYY-MM-DD":n} and `S.miss` {qid:n} are added in J4, and every path goes through `checkedProgressState` (storage.js:65-72), import, export and backup.
- Read the ElevenLabs ToS and OEM terms before generating.
- The lwdickens CC BY-NC tone.
- Mubert.
- The 7 MEMORY items.
- ~~Push~~ push freely, no asking (owner 2026-09-26); main = origin at `abc09e28`.

## Carried into J4 (desk-data.js nits, refuter round 2 PASS, none fires today)
- `desk-data.js:23`/`:32` test `a.ok===true`, but utils only checks that `ok` is truthy.
- `:22` tests `!a`, but utils uses `!==undefined`.
- `:26` takes `maxLvl` as a parameter, so the caller must pass `SRS.length-1` (4).

Align all three when J4 wires the file in.

## Uncommitted on disk, deliberately
- `p5/*.reply.txt`, `p5/*-codex.log`, `p5/shots/`, `p5/.keep_check`: job leftovers.
- `master-v2-{a,c}.png`.
- `D:\tmp-spike-ud`, `D:\tmp-scenemap-ref`, `D:\tmp-scenemap-r2`, `D:\tmp-grades{,-ref}`,
  `D:\tmp-sprite-{look,ref,ref3,ref4,ref5,ref6}`, `D:\tmp-p1a-ref`: refuter scratch. Safe to delete.

## Changed since — 2026-09-26 late
- P1b round 2 FAIL (`p1/REFUTE-P1b-round2.md`). Owner ruled: banks/sessLog/sess/editSched keep syncing; old clients force-upgrade; shared legacy profile = first account to link. Round 3 = Claude lean-drafter on `p1/p1b-revise3-brief.md`, then Opus refuter.
- P2a round 3 lean-drafter running; next an Opus refuter on it.
- Owner sent TikTok @wearebrand.io "Claude Code + WordPress premium site" as the look he wants; a subagent is describing its effects. Next: shortlist what fits the desk, rebuild vanilla via fleet.
- Owner ruling 2026-09-26: art style = OUR painted Greek world, raised to the TikTok's premium finish (not a switch to its navy/purple web look). Research agent writing section (d): techniques for a consistent premium painted set. WordPress: connected, 0 sites; official Automattic plugin = developer.wordpress.com/wordpress-com-claude-code-plugin — WP-only, nothing needed for the app.
- P2a round 3 drafted (179 lines, floor 2,861,102 B -> 673,895 B claimed); Opus refuter running, evidence D:\tmp-p2a-ref3\findings.txt.
- Art research done (all aggregator sources, unverified): top move = ONE written style guide (medium, light, palette, materials, framing) reused as the prompt head for every asset, core plate first then variants. Owed: `p5/STYLE-GUIDE.md` derived from `painted-codex-3.png` by a vision seat, then every new desk asset prompted from it.
- OWNER CLARIFIED 2026-09-26: what he craves is NOT colour/neon — it is smoothness and SCROLL CHOREOGRAPHY, "every inch you scroll something happens". Plan (not yet built): native CSS scroll-driven animations (`animation-timeline: view()/scroll()`, 0 bytes, file:// safe) with an IntersectionObserver fallback where unsupported; GSAP+ScrollTrigger (local copy) only if native falls short. Browse views only (desk home, subject, chapter list) per ALIVE TO BROWSE / CALM TO READ; quiz/mock/review/theory stay still; reduced-motion kills all. No scroll-jacking. Next: a scroll spike on one browse view by Codex, filmed for the owner, before any wide rollout; fold into J2.
- OWNER RULING 2026-09-26 (supersedes the "no gradients" standing rule for P5 on): wants "all of that" (scroll choreography + View Transitions between views) PLUS high-end graphics and SMOOTH COLOUR GRADIENTS, "work of pros + gaming vibe, not AI". Gradients now allowed (dithered/noise-overlaid so they never band); still banned: emoji, chirpy copy, scattered radius scale, side-tabs, pills. Game feel = light/bloom on the painted world, depth parallax, weighty press feedback, answer/level-up moments, sound (J5). The one-page spike must show all of it together; owner judges the film.
- P2a round 3 FAIL, 15 defects (`p2/REFUTE-P2a-round3.md`). OWNER RULING 2026-09-26: NO LOAD BUDGET — full art loads up front; the 1 MB target (PLAN-app-master L148) is dropped. Round 4 keeps the rest of P2 (lazy subjects, loader design, subjStats from saved state via id prefix, const fixes, build steps) minus the byte trim; still no waste (re-encode where lossless-looking). Owner must still get a fast-enough open on Telecom Egypt: show a real 3G timing, not a promise.
- Graphics method (told owner): reference board from him -> STYLE-GUIDE.md by a vision seat -> plates regenerated at 2x in LAYERS (back wall, desk, objects, light/glow, dust/embers) for depth parallax -> CSS light: layered radial/conic gradients + grain, screen/overlay blend bloom, light shafts -> motion on transform/opacity only, spring easing -> film at 60 fps side by side with his reference, owner judges.
- P1b round 3 Opus refuter running (D:\tmp-p1b-ref3\findings.txt).
- P1b round 3 FAIL, 12 defects (`p1/REFUTE-P1b-round3.md`) — third fail; each round patches and reopens old holes. Round 4 = SIMPLIFY, not patch: brand-new cloud path + Firestore rules that DENY every legacy write after rollout (old clients fail at the server, not by courtesy), one global create-once owner doc, legacy-origin records rank below any v1 record everywhere, kinds listed inline (the doc is untracked — commit each round's doc before revising). Seat: Opus `Plan`/debugger role with ROUTE-OK, then a fresh Opus refuter.
- P2a round 4 per the no-budget ruling above. Both P1 and P2 docs + all REFUTE rounds still UNCOMMITTED — commit them as-is (labelled "draft, failed round N") at the start of next session so rounds stop overwriting history.
- Owner sent IMG_0539.MP4 (the TikTok, full clip). Teardown: `p5/REF-video-teardown.md` — several showcase sites; the craft = pinned sticky scenes, scroll-scrubbed layered parallax + zoom, mask/line text reveals, pre-rendered image sequences, big editorial type. Spike should copy the choreography onto the desk, not the sites.
