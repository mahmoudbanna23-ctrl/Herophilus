# Herophilus app — master plan, 2026-09

Status: **APPROVED by the owner 2026-09-25** (J9 team talk and Opus refuter folded in,
`app-replan\j9-team-talk\minutes.md`).
It supersedes `progress\PLAN-app-replan-2026-09-17.md` and
`progress\app-replan\research-living-scene\DECISION-2026-09-21.md` (each gets one "superseded by"
header line, nothing else changes in them).
Inputs: `app-replan\research-spec-app-wide.md` (f1-f22), `app-replan\retrospective-2026-09-23.md`
(lessons L1-L7), `app-replan\owner-questions-2026-09-23.md` (owner answers + Claude's calls),
`app-replan\research-a-to-z\f20-f22`, plan `hello-opus-i-pure-hejlsberg.md`.
No app code changes in this document; it orders the work.

## 1. Target

A calm, professional question bank that opens from a file on disk and installs as an offline app
from herophilus.pages.dev. Home is one layout: a desk-scene band across the top with Clepsydra at
her desk, the subject list below, last-used subject first. Quiz, review and reading screens are
plain and quiet. Clepsydra is a companion who lives in the scene: silent unless a real threshold is
crossed, at most two sentences, never a verdict; her vessel's water level shows today's progress.
She becomes 3D only if a pilot still looks like her to the owner. Two new features: a lab-values
reference panel and a progress-trends dashboard. Every phase ships alone, behind a green check.

## 2. Rules

Lessons from the retrospective, each now a working rule:
- R1 (L1) Split a file by concern as soon as a screen works. Done for `index.html`; applies to
  every new feature file.
- R2 (L2) Research is capped: no new research facet unless a phase below names the question it
  answers, one brief, one pass. The research folders are closed.
- R3 (L3) A failing check is root-caused before the next feature lands. Phase 0 exists for this.
- R4 (L4) A decision record with an open item is not a plan. Every open item is mapped in §6.
- R5 (L5) Every generation brief (image, 3D, video) carries the style rules and never-list up
  front; Claude looks at round one against them before the owner sees it.
- R6 (L6) One front at a time. The only parallel track allowed is the 3D pilot (§4), because it
  runs in an outside tool and touches no app file.
- R7 (L7) Screens are chosen from clickable static HTML mock-ups, shown once with at most three
  options, before any build (owner Q6).
- R8 Every phase: rollback tag `pre-<phase>-<date>` before, boot-check + phase check after, Opus
  refuter (or a measured non-maker seat) before commit, owner's eye on any visible change.
- R9 (Claude's proposal, sharpened by J9) Exam-window deploy freeze, eve + exam days inclusive:
  2026-09-26..27 (Ophtho), 2026-10-02..03 (Neuro), 2026-10-17..19 (Peds papers 18-19). No Pages
  upload in a window, so no new service worker reaches a device; local work and commits continue.
  Only exception: a bug that blocks studying, fixed on the owner's yes.
- R10 (J9) Disk copy and installed Pages copy are two products: every phase that touches loading,
  caching or storage records a pass for EACH, never one standing in for the other.
- R11 (J9) Each UI phase carries its own accessibility checks (keyboard, focus, AA); P10 is the
  sweep, not the first look.

Carried look rulings (owner Q3/Q5, Claude's delegated calls 2026-09-23):
no spinning icons · no pulsing idle glow · no hover lift (quiet colour change instead) · no pills ·
no emoji · no gradients in the interface (scene art exempt) · scene on home + subject pages only ·
one desk layout · clock counts up everywhere except the timed mock, which counts down like the real
exam · **neon edges DROPPED** (supersedes the 2026-09-21 keep), thin muted borders instead · dark
default, light theme later keyed to the system setting · plain line dividers; the only water level
is in Clepsydra's vessel. Already built and kept: tokens (B1), type scale (B3a-3), Gentle spring
easing. Chosen but NOT built: Travelling-light buttons + Ink-mark chips (B3b brief; nothing in
`app\` touched, `plan-until-codex-2026-09-20.md:278`), outline play icon. **Peds tag: sources
conflict** — plain text (`DECISION-2026-09-21.md:57`, A7) vs boxed (`plan-until-codex:280`); owed by
the owner (§6). Neon: kept dropped, but P3 shows ONE labelled neon comparison on the same screen so
the owner decides by eye (J9, 3 of 4 seats).

Fixed facts (measured, not opinions): `file://` blocks `fetch()` and plain-image WebGL textures;
muted mp4 autoplays from `file://`; Google sign-in impossible over `file://` (gate swap stays);
Netlify blocked at the ISP, Pages is the permanent origin; `wardround.*` keys never renamed;
`banksOf(q)` never `bankOf(q)`; stacking 150/200/250/300/400; owner studies in Brave on a laptop on
battery, plus tablet/phone. Clepsydra herself is fixed (who she is, recognisable as her); how she
appears is open (owner 2026-09-23). Workspace §7 "every page works from `file://`" stays true:
PWA parts are inert under `file://` (owner Q4 "both"), so no workspace rule changes.

## 3. Area verdicts

| Area | Verdict | What, in one line | Phase |
|---|---|---|---|
| Data loading | rework | Keep classic-script payloads (f21); add `data/manifest.js`; load a subject's files by script injection when opened; home loads < 1 MB. **IndexedDB cache dropped** (J9, 4 of 4): on Pages the service worker caches data, on disk the files are already local — closes the f21/f22 double cache. What IndexedDB would also have saved is the parse (`f21:65`); per-subject loading cuts that to one subject's files, which is the measured target instead. | P2 |
| File structure | keep | Split already done (6 CSS, 11 JS). f10's namespace/IIFE refactor only where a phase already edits a file; no big-bang rewrite. | — |
| Look system | keep + rework | Tokens and type scale stay; neon edges out, thin muted borders in; light theme later. | P4, P11 |
| Quiz | keep | SRS, notes, strike, flags, mock, cases all ship today. Fix F-on-✕ and c2-1 in P0. Timed mock gains the countdown exception. | P0, P4 |
| Sessions | keep | Timestamps, `paintSessionLive()`; untouched except Clepsydra's voice hooks. | P6 |
| Home + scene | rebuild | One combined layout: desk band + subject list; candle over the desk (method in §6 D1). | P3, P5 |
| Clepsydra | rework | Voice layer first on existing PNGs; placement moves into the scene band; 3D only via pilot. §4. | P6, P7a, P7b |
| Sync | keep | Local profiles + Firestore `mergeStates()`; rules UID-scoped. New keys added, never renamed. | — |
| Testing | rebuild | f13: Node bank validator as the primary gate + `smoke.html` + one `check-all` command; the three failing checks explained first. | P0, P1 |
| Deploy | keep, then rework | Manual `dist/` upload stays; git-integrated Pages (f14, thin, unverified) only if the owner connects the repo. | P9a |
| Offline / install | new | f22 option C: `manifest.webmanifest` + hand-written `sw.js`, Pages only, inert on `file://`; never intercept `/__/auth/*`. | P9a |
| Security | rework | f15: `textContent`/`esc()` over `innerHTML`; CSP Report-Only in `_worker.js`; count inline `onclick=`/`style=` first, cleanup scoped then. | P10 |
| Accessibility / mobile | rework | f12 + old B6: native pressed/checkbox/radiogroup, `:focus-visible`, keyboard quiz, 320 px + 200 % zoom, portrait renders. | P10 |

## 4. Clepsydra integration spec

- Job: companion + scene character (owner Q1). Not a guide, not a coach, not a timekeeper voice.
- Voice: f20 persona — dry, terse, "same facts, fewer words"; never a verdict, no guilt or
  urgency, no exclamation or emoji, no invented numbers (every number read from page state), max 2
  sentences, no costume-Greek. Default adopted as-is (owner Q2). Lines and trigger table:
  `research-a-to-z\f20-clepsydra-voice-script.md` (11 triggers `f20:44-54`, frequency caps, 10
  sample lines).
- Moments (per f20): first open, once ever · correct streaks at 5 / 10 / 20 · three wrong in a row
  on one topic gets one line; an isolated wrong answer stays silent · milestones (e.g. 500 answered;
  one-time, new `wardround.*` key) ·
  session start/end (already scripted, `clepsydra.js` 570, 606-632) · tap-to-ask stays. Idle fact
  loop and 26-70 s pose shuffle: kept, reading-screen exemption kept (`clepsydra.js:453-455`).
- Frequency: f20 caps per trigger + `clPickFresh` no-repeat; mute stays one tap away (Clippy
  lesson); `prefers-reduced-motion` stops every loop.
- Placement: home + subject pages — at her desk inside the scene band, visible, never over text or
  controls. Quiz/review/reading — **absent while a question is on screen** (J9, 3 of 4: threshold
  speech is still an interruption); she speaks at session start and end and on the three-wrong line
  once the answer is shown. Timed mock — absent and silent (Claude's proposal, like an exam hall).
  Today's corner overlay is retired from quiz screens in P6.
- Water level: her vessel shows today's progress. Not drawn onto her art: with PNGs it is a
  separate element beside the vessel; only if 3D ships, **five pre-rendered level states** (0/25/50/
  75/100 %). If the pilot fails, the separate element stays for good. Owed before P6 (decide in the
  P3 mock with the owner): what counts (answered vs correct, repeats), the target, and the reset —
  local midnight is the default proposed.
- Art form path: (a) now — the 9 existing PNGs, unchanged; (b) 3D pilot — Meshy image-to-3D from
  one existing pose, free tier (110 credits, 20 per image-to-3D), owner's eye "is this still her?";
  (c) if yes — rig + short loops rendered to video; (d) if no — Live2D fallback on her real
  drawing (hand rigging; free-tier caps UNVERIFIED, f18).
- **Licence gate before any upload:** Meshy free tier, 110 credits, 20 per image-to-3D; licence
  defaults to CC BY 4.0 (public); Private looks paid, not confirmed (all owner-reported
  2026-09-25, not in any research file; f18:150 has only $20 Pro and 20 credits a generation). The owner decides the licence before her art leaves the machine.
  Claude never makes accounts or accepts terms.
- Video, no alpha needed: she sits in the scene, so each loop is rendered **with the desk behind
  her** and plays as a plain muted `<video>` (H.264 mp4, measured to autoplay on `file://`), poster
  = still frame. This removes the WebM-alpha vs Safari problem. Pose change = clip swap on matching
  first/last frames. Light theme = a second clip set, later. Rendering route (Meshy's own export
  vs a scripted headless Blender render) is decided inside the pilot; Blender presence on this
  machine UNVERIFIED. J9 4 of 4 chose this baked mp4 over WebM/HEVC alpha. Acceptance: loop seams,
  crop at every P5 viewport, poster fallback, phone + tablet + laptop playback, battery. The nine
  PNGs remain the complete fallback, so 3D never blocks a release.
- Code seam today: `CLEP_POSES` `sessions.js:602`, `poseSrc()`, `clepPose/clepMute/clepSay/
  clepAsk/clepOnView/clepIdleLoop/clepShiftLoop` `clepsydra.js` 41/263/298/432/438/456/472,
  `CL_TIPS` 363-407, `clepFacts` 408-422, overlay z-index 150. The voice layer extends `clepSay`
  and `CL_TIPS`; a `poseSrc()` switch from PNG to video is the only seam the 3D path needs.

## 5. Phases, in order — one front at a time

Each ships alone. "Check" is the machine check; R8 applies to all.

- **P0 Honest baseline.** Root-cause `lock-check`, `navclock-check`, `attempt-check` (fix or
  rewrite the check, with the cause written down); `dist-check` image-copy race; ophtho/neuropsych
  0-row report (2026-09-20, may be gone since the 2026-09-21/22 unlocks — re-measure); boot-check
  4049 vs ~6.9k question count explained; full corpus recount from disk; F-on-✕ (6-option
  question) and c2-1 trap fixed. Check: every tool in `tools\` green or a written cause.
  Rung: Codex terra per item, Opus refuter. Done when: no unexplained red.
- **P1 One gate.** f13 Node bank validator (structure, cross-file id uniqueness, answer in range,
  counts vs manifest) + `smoke.html` (8-15 cases, opens from `file://`) + `tools\check-all` that
  runs boot-check, validator, dist-check. Check: seeded broken fixture fails it, clean tree passes.
- **P2 Speed.** `data/manifest.js` + per-subject script injection (old B7). Check: home first load
  < 1 MB (from ~20.5 MB, f21; re-measure at P0); every subject boots to its pre-change count;
  `bankOf(` = 0. Before P2 ships: progress export/import (a JSON file of the `wardround.*` keys)
  so a caching or loading fault can never cost a student their history (J9).
- **P3 Mock-ups (owner picks once).** Static HTML in `progress\app-replan\mocks\`, offline: home
  (band + list), subject browse (B1 screen), question layout (Q1), results (R1). ≤ 3 options each,
  tested at 390 px and keyboard-only on fixture tasks (resume, find a bank, read, review). Candle
  method mocked here (§6 D1), plus the neon comparison and the water-level definition (§4).
  Done when: owner has picked each screen. **Order (J9 split 2-2, Claude's call):** P3 touches no
  app code, so it may run beside P0/P1; no functional phase (P2 onward) starts before P0 and P1
  pass. A bug that blocks studying is fixed at once, outside the phase order.
- **P4 Controls + borders.** Build the existing B3b brief (Travelling-light buttons, Ink-mark
  chips); neon edges out, thin muted borders in; answer feedback settles ~150 ms (M8); timed-mock
  countdown. Check: contrast AA both themes, emoji 0, no hover-lift rule.
- **P5 Home build.** To the P3 pick: desk band, candle, subject list, last-used first. Scene on
  home + subject only. Check: shots 1280×800, 820×1180, 1180×820, 390×844; matched trace static vs
  candle (§6 D3); candle click stops motion for the visit.
- **P6 Clepsydra voice + placement.** §4 on existing PNGs: f20 trigger table, milestone keys, desk
  placement in the band, absent while a question is on screen, water level beside the vessel. Check:
  seeded profile fires each trigger once per cap; mute and reduced-motion stop all; `git diff
  --stat app/assets/clep` empty.
- **P7a 3D pilot (parallel track, owner-gated).** Licence ruling, then one pose on Meshy free, then
  the owner's eye. If no: Live2D fallback brief, or stay on PNGs. Ends in a yes/no, no app change.
- **P7b 3D integration (only on a P7a yes).** Loops rendered with the desk behind her + five water
  levels, swapped in via `poseSrc()`; PNGs stay as the fallback. Check: plays muted from `file://`
  and Pages in Brave; phone + tablet playback; battery trace (same page, same run length, idle vs
  loop) no worse than P5's candle.
- **P8a Lab-values panel.** Static, local; every value cited to course material, or tagged `not
  taken from the course material` per project §4; units exact. Mocked first (R7). Note: owner's Q7
  pick overrides `DECISION-2026-09-21.md:24`, which had barred lab tools and date graphs.
- **P8b Progress trends.** Extends `accuracy()`; earned-progress fill M6. Mocked first (R7).
- **P9a Offline shell + data.** PWA service worker (f22), Pages only, inert under `file://`. One
  release version shared by HTML, scripts, manifest and SW cache name; old caches cleared on
  activate. Check: full corpus answers offline after one visit; an interrupted download recovers;
  a storage-quota failure shows an honest message; sign-in path never cached; `file://` boot
  unchanged. Never deployed inside an R9 window.
- **P9b Pages extras.** `about.html`, `privacy.html`, `404.html`, share card (old B8). The owner
  approves the privacy wording, and a check confirms it matches what the code actually sends
  (`plan-until-codex:163-166`).
- **P10 Hardening.** f12/B6 accessibility and mobile; f15 CSP Report-Only; inline-handler count then
  cleanup plan; the CSP must allow the classic data `<script>` tags. Check: 0 AA failures,
  keyboard-only quiz, CSP report shows no violations. Runs before P11 so light theme is built on a
  swept base.
- **P11 Light theme.** Daytime desk plate (window light, no candle), system-keyed; contrast at both
  light extremes; print block selector unchanged.
- **P12 Final gate** (old B9): check-all, print test, portrait renders, full-diff Opus refuter,
  owner reads on phone and laptop. Done when the owner says it feels made.

## 6. Every open item, mapped

Old plan blocks (`PLAN-app-replan-2026-09-17.md` §4):
| Item | Fate |
|---|---|
| B0 pictures / direction | replaced by P3 mock-ups (R7); the generated desk image stays a candidate plate |
| B10 code review sweep | DONE (`bugs.md`, `bugs-c1..c8.md`); open entries feed P0 |
| B1 tokens | DONE `pre-b1-2026-09-20` |
| B2 refactor a/b/c | DONE (split `0a08d3e`, `ebc34fc`) |
| B11 bug fixes | DONE for sign-in (live 2026-09-22); remaining confirmed bugs absorbed into P0 |
| B3a-1 icons / B3a-2 copy / B3a-3 type | DONE (B3a-2 no-op; type `0e72ac8`) |
| B3 components / states / copy / icons (umbrella) | split into B3a (done) and B3b; nothing else left under it |
| B3b buttons + chips | absorbed P4 (brief `b3b\b3b-buttons-chips-brief.md`) |
| B4 home re-layout | replaced by P3 + P5 |
| B5 Clepsydra presentation | replaced by §4, P6, P7a/P7b (tool row, hit box, findable collapsed state carried into P6) |
| B6 mobile / a11y | absorbed P10 |
| B7 speed | absorbed P2 |
| B8 pages + share | absorbed P9b |
| B9 final gate | becomes P12 |
| B12 strike-out | DONE `af16306`; its F-on-✕ leftover in P0 |
| B13 smarter revision | weak chapters + due list absorbed P8b (trends dashboard); exam countdown **dropped** (count-up ruling; the timed mock is the only countdown) |
| B14 revision notebook | per-question notes already SHIPPED (`S.notes`); per-chapter notes **dropped** until asked |
| B15 book PDF text layer | stays handed off to the Herophilus Book project |
| B16 same-chapter duplicate sweep | kept, content-side, not an app phase; runs after content chats close, owner says go |
| Motion M1 card-to-module transition | optional inside P5 if the P3 pick wants it |
| M2 water clock | replaced by the vessel water level (§4) |
| M3 self-drawing gold rules · M4 candle breathing · M5 painting parallax · M7 frieze arrival · M10 console shelf | **dropped** (no-breathing, one-desk-layout and calm rulings) |
| M6 earned progress fill | absorbed P8b |
| M8 answer feedback settle | absorbed P4 |
| M9 pose crossfade | absorbed P6 (PNGs) / P7b (clip swap) |

Living-scene DECISION-2026-09-21 disputes and steps:
| Item | Fate |
|---|---|
| D1 first flame method | P3: DOM/CSS flame over an unlit wick first; canvas only if the owner rejects it by eye |
| D2 edge glow | **closed**: dropped with neon edges (Claude's call, owner may overrule) |
| D3 pass gates | P5: Astra's route — matched static-vs-candidate traces first, then write a refresh-aware budget |
| D4 exact layouts H1/B1/Q1/R1 | P3 mock-ups with fixture tasks at narrow width, keyboard-only |
| D5 video | reopened for P7b only: the one live film is the sign-in `ambient-library.mp4` (`index.html:55`); no desk loop exists (`DECISION:12`) and the first pilot stays video-free (`DECISION:33`); 3D loops would be baked mp4 |
| E0 capability pilot | DONE |
| E1 owner answers | DONE except two owed items below |
| E2 composition sketch · E3 plate · E4 look test | folded into P3 (sketch) and P5 (plate, look test) |
| E5 performance test | P5 check, repeated in P7b |
| E6 controls mocks | P3/P4 (glow variant dropped) |
| E7 contrast at brightest/dimmest frame | P5, P11 checks |
| E8 build after Neuro banks | gate met: Neuro endpoint closed 2026-09-22 |

Owner answers 2026-09-25 (recorded; the owed list below is what is left):
- Fork 5 phase order: Claude's call stands (P3 mocks beside P0/P1).
- Meshy licence: APPROVED (free tier, CC BY 4.0 public). 3D-tool search DONE 2026-09-25 (full
  gateway list, 1,752 models, read by script): no 3D model on OmniRoute or Codex, no Higgsfield,
  no Kling/Sora/Runway/Luma. Meshy stays the only P7a route.
- Generation map (owner yes 2026-09-25; listed is not proven, one probe call each before use):
  desk plates P3/P5/P11 and subject scenes P5 = Gemini image (Nano Banana Pro / 3 Pro Image),
  backup Codex `image_generation`; one gateway call per image by script, R5 brief, every image
  looked at, owner picks. Painted plate may send her PNGs as STYLE reference (owner OK) — nothing
  is drawn onto her, she is never regenerated. Her voice text P6 = `work-text`, checked against
  f20. P3 mock HTML = Codex terra. Clepsydra 3D = Meshy by the owner's hand. Water level = code.
  On hold until checked: `veo-free/*` and `veoaifree-web/*` video (unknown wrappers, Seedance
  version unstated; a `-web` scraper is banned), AI Horde (public volunteer queue).
- Audio ADDED (owner yes 2026-09-25), new phase P6b after P6: her lines spoken via Gemini TTS,
  ambient loop via Lyria. Claude's proposal, to confirm in P3: muted by default, silent on reading
  views, same rule as the scene. Lyria output licence: UNVERIFIED, check before shipping.
- Lab values: course material where found, outside values tagged `not taken from the course
  material` where not — P8a.
- Peds tag: plain text — P4.
- Candle desk: yes only on a photo-real desk, and the owner is unsure of that desk. P3 mocks two
  plates side by side (photo-real vs painted in her drawn style), both with the code flame; owner
  picks by eye.
- Osmosis / First Aid screenshots: DROPPED as owed — they were only layout references for f6
  (Osmosis returned 403 to the researcher); P3 proceeds without them.

Still owed by the owner (each blocks only the phase named):
- Privacy wording approval — P9b.
Answered the same day: water level counts every answered question, repeats included; target 100 a
day; reset at local midnight. Plan approved.

Old plan §6 parked list (`PLAN-app-replan-2026-09-17.md:424-430`): lecture-derived questions and
public launch stay parked (`ideas-parking.md`); PWA moved to P9a; new poses now allowed under the
3D ruling (P7a).

Research gaps carried: f15 inline-handler cleanup unscoped → P10 counts it first · f21/f22 double
cache → closed in §3 (IndexedDB dropped) · font load under `file://` UNVERIFIED (f7) → P1 smoke case
· Brave shields vs canvas/WebGL UNVERIFIED → P5 test in Brave.

## 7. Cost and backup

Spend: $0 by default. Codex login (paid already) does builds; free gateway combos for bulk; Claude
roles for refuters. Meshy free tier for the pilot; Meshy Pro $20/month only on the owner's explicit
yes. Backup: `git tag pre-master-replan` before the Deliver edits; per-phase tags per R8;
`wardround.bak.<profileId>` snapshots untouched.
