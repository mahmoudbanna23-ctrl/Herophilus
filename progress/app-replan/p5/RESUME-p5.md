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
- 2026-09-26: WP.com phone-preview site CREATED, PRIVATE (is_private true, verified settings.get), comments closed: https://herophiluspreview.wordpress.com (blog_id 257603600). Holds spike films/shots only; nothing public without owner yes. Scroll spike built by Codex (p5/scroll-spike/, node --check pass, not rendered by Codex); Opus refuter filming it to D:/tmp-spike-ref (REFUTE-spike.md).
- 2026-09-26: 10 design skills installed in .claude/skills/ (Emil Kowalski x7, Taste x3; taste-skill main SKIPPED, mandates React/Tailwind). Provenance + project overrides: .claude/skills/THIRD-PARTY.md. Load at next session start. Spike fix round 1 landed (Codex); Opus refuter round 2 filming to D:/tmp-spike-ref2 (REFUTE-spike-round2.md); then commit scroll-spike/ and post film to the WP preview site.
- 2026-09-26: refuter round 2 FAIL (2 major, 8 minor; 0 console errors; films D:/tmp-spike-ref2/*.mp4, sent to owner). Fix round 2 dispatched to Codex (p5/scroll-spike-fix2-brief.md, log scroll-spike-fix2-codex.log). NEXT: fresh Opus refuter round 3 (film with p5/scroll-spike-film.mjs into D:/tmp-spike-ref3b, no double dash), then commit scroll-spike/ + REFUTE-scroll-spike-round2.md + fix2 brief/log, then post film to herophiluspreview.wordpress.com (private).
- 2026-09-26 (latest): scroll-spike refuter round 3 FAIL (2 major rings-never-fill + mid-word title break, 4 minor; fallback now exact; 0 console errors) -> p5/REFUTE-scroll-spike-round3.md, films D:/tmp-spike-ref3b/. Scroll-spike refuter files are named REFUTE-scroll-spike-*; REFUTE-spike-round2..6 belong to the 3D pilot stream. Codex failed 3 dispatches, so fix round 3 goes to lean-drafter with ROUTE-OK: p5/scroll-spike-fix3-brief.md (builder films its own output). Reference frames beat-1..5 in p5/ref-frames/ (Codex image_gen, Sonnet check: all pass, beat-4 weakest: rings read as handles, sage too olive) SENT TO OWNER, awaiting his pick/reject. NEXT: dispatch fix3, then Opus refuter round 4; on owner's frame picks, layered 2x plates + sequences; post films/frames to the private WP preview site.
- 2026-09-26 open items: owner never answered "do you design in Figma (Figma MCP)?" - ask once. Later queue: Automattic WP design plugin (needs WordPress Studio download - owner's yes first); P1b round 4 (simplify) + P2a round 4 (no budget), each then Opus refuter; public front page waits on owner's rights attestation; every WP post drafted private, published only on owner's yes. Scratch dirs delete-safe on owner's yes: D:/tmp-spike-ref, tmp-spike-ref2, tmp-spike-ref3b, tmp-refframes-chk, tmp-grades, tmp-grades-ref, tmp-sprite-look, tmp-sprite-ref, ref3..ref6, tmp-p1a-ref, tmp-p1a-ref2, tmp-p1a-fix, tmp-p1b-ref, tmp-p1b-ref2, tmp-p1b-ref3, tmp-p2a-ref2, tmp-p2a-ref3.
- 2026-09-26: owner does NOT design in Figma (answered) - no Figma MCP; keep Codex image_gen plates + PNG review. Fix round 3 dispatched to lean-drafter (Sonnet, background), films D:/tmp-spike-fix3/. NEXT: Opus refuter round 4 on its return.
- 2026-09-26: fix round 3 back (lean-drafter): claims 6/6 round-3 defects closed, 0 console errors, touched scroll-spike/index.html, spike.css, NOTES.md; m6 checked by computed style only; brief item 4 (warm shaft) possibly short. Opus refuter round 4 running -> REFUTE-scroll-spike-round4.md, films D:/tmp-spike-ref4/. Uncommitted until refuter reports.
- 2026-09-26: owner rulings on ref frames: beat-4 = SCROLL RACK (4 scrolls, subject-coloured tags, progress = unrolled length; replaces books+rings); beats 1+3 = text-free plates + REAL TYPE overlay (Cinzel title letter-spaced gold, "Today" EB Garamond italic top-left of sheet). Codex job running: ref-frames-v2-brief.md -> ref-frames/v2/ (log ref-frames-v2-codex.log). NEXT: check plates (Sonnet), then lean-drafter composites type in HTML + headless screenshot; send to owner. Beats 2 + 5 not yet ruled.
- 2026-09-26: refuter round 4 FAIL (2 major: titles still split via &shy; + 12px; wipe sliver 0-45%; 4 minor: ring 45-deg jerks, shaft green-grey veil, stall 70-71.5% by pixel diff, stale NOTES) -> REFUTE-scroll-spike-round4.md, frames D:/tmp-spike-ref4/. Fix round 4 dispatched to FRESH lean-drafter (scroll-spike-fix4-brief.md; title rule: layout gives, word never breaks, min 16/14px). If round 5 refuter fails -> Opus builder, no third Sonnet. Ref-frames v2: beat-1/3 plates done, type-mock builder running; beat-4 retake (4 lanes) Codex running.
- 2026-09-26: ref-frames v2 SENT to owner: v2/beat-1-typed.png, beat-3-typed.png (type-mock.html, TYPE-NOTES.md; Cinzel 86px 0.34em gold + italic subhead; Today EB Garamond italic 78px multiply), v2/beat-4-scrollrack-b.png (Sonnet check PASS; strips 2/3 close in length; Codex self-note said sage olive, checker says green). First take beat-4-scrollrack.png FAILED (one sheet). Awaiting owner verdict on v2 + beats 2/5. Fix round 4 builder running.
- 2026-09-26: fix round 4 back (fresh lean-drafter): claims titles/wipe/ring closed, shaft PARTIAL (faint), stall improved with dip ~0.38 at 63-63.5%, 0 console errors; files scroll-spike/{spike.css,index.html,NOTES.md}. Opus refuter round 5 running -> REFUTE-scroll-spike-round5.md, films D:/tmp-spike-ref5/. Uncommitted.
- 2026-09-26: refuter round 5 FAIL (1 major: titles clip 701-1024px, builder checked only 1280/390; 4 minor: stall 18-33% < 40%, wipe centre-slot + dead zone 45-54%, phone spines shrank, NOTES misquote; PASS: ring even 2.8-5.4 deg, shaft faint glow ok). Fix round 5 -> OPUS lean-drafter (scroll-spike-fix5-brief.md, width sweep 320-1600). Next: refuter round 6 -> REFUTE-scroll-spike-round6.md, films D:/tmp-spike-ref6b/.
- 2026-09-26: fix round 5 back (Opus builder): claims 6/6; grid 4col>=1080 / 2x2 701-1079 / 1col<=700, sweep 0 failures; stall min 61% of 85% level but 85% level fell 0.70->0.544; wipe top-down 46-74%; open: fallback unverified, wipe straight cut on 2-deg paper, 320x640 overlap 24px, dip 44.5-47%. Changed spike.css + NOTES.md only. Refuter round 6 running -> REFUTE-scroll-spike-round6.md, D:/tmp-spike-ref6b/.
- 2026-09-26: refuter round 6 PASS (0 major; 1 minor regression: 2x2 band 701-1079 spines 8-14x40 at 1024x768, fix = raise .subjects height there; cosmetic: NOTES spine size, wipe straight cut vs 2-deg paper; out of scope: 320x640 + 600px-tall overlap, fallback unverified). Spike committed. Carried into the P5 build as known items.
- 2026-09-26: spike films SENT to owner: D:/tmp-spike-film6/spike-desktop-1280x800.mp4 (464.9 KB, 11.93 s), spike-phone-390x844.mp4 (240.5 KB, 12 s); scratch, not in repo. NEXT: WP private drafts on herophiluspreview.wordpress.com (awaiting owner yes); owner verdict on v2 frames + beats 2/5.
- 2026-09-26: owner rulings on films + v2: (1) beat 4 REVERTS to the old books frame ref-frames/beat-4.png — scroll rack v2/beat-4-scrollrack-b.png REJECTED (supersedes the scroll-rack ruling). (2) spike film rejected on feel: low-quality items fading in from nothing = the three desk props letters-many/tablet-half/pile (160-200x90 px shown up to 300px, opacity 0->1). Build rule: every raster >= 2x display size; every entrance has a physical cause, opacity never carries it alone. Next: Codex regenerates the props at 2x, cut as layers from painted-codex-3; builder swaps them in with slide-from-edge entrances. Still open: owner verdict on v2 beat-1/3 typed, beats 2/5. WP drafts on hold.
