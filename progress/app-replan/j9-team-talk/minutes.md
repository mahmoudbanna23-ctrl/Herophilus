# J9 team talk — minutes, 2026-09-25

MSN Mode 3 on the draft master plan (`progress\PLAN-app-master-2026-09.md`), agenda `agenda.md`,
forks 1-8. Round 1 blind, round 2 on the anonymised shuffled transcript (`transcript-r1-anon.md`).

Seats: groq `openai/gpt-oss-120b` · nemotron `nvidia/nemotron-3-ultra-550b-a55b:free` (OpenRouter) ·
Codex `gpt-5.6-terra` · Codex `gpt-6-astra`. **gemini `gemini-3.1-flash-lite` dropped** after two
504s (OmniRoute local queue, `maxWaitMs=15000`) — two-failure rule. **terra and astra are one house
(OpenAI via Codex)**, so their agreement counts as one opinion, not two. Cost: $0 on groq/OpenRouter,
Codex on its own login; Gemini's two failed calls sit inside today's $0.005 Gemini total.

## Agreed (all four seats)
- Fork 3: drop the IndexedDB cache. Condition carried into P9a: prove the full corpus answers
  offline, version the cache, recover an interrupted download, show an honest quota failure.
- Fork 4: 3D loops as baked-background H.264 mp4, not WebM/HEVC alpha. Test phone/tablet playback,
  crop, loop seams, battery.
- Fork 2: water level is a separate element now; five baked states only if 3D ships. Define what
  counts, the target and the reset.
- Fork 7: keep the deploy freeze; make the windows inclusive of exam days; say whether urgent fixes
  may ship; watch service-worker activation.

## Majority
- Fork 1 (3 of 4: astra, terra, nemotron): Clepsydra absent while a question is on screen; she
  speaks at session boundaries. groq wanted a corner figure. **Taken.**
- Fork 6 (3 of 4): neon stays dropped, but P3 shows one labelled neon comparison. **Taken.**

## Split
- Fork 5, phase order, 2-2: astra + terra (one house) said static mock-ups first, alongside the
  baseline/gate; groq + nemotron said P0/P1 first. **Claude's call:** P3 touches no app code, so it
  runs beside P0/P1; nothing functional starts before P0 and P1 pass; a study-blocking bug is fixed
  at once, outside the order.

## Missed items raised in round 2 (all folded into J8)
Split P7 (pilot / integration), P8 (lab panel / trends), P9 (offline shell + data / pages) ·
per-phase accessibility (R11) and P10 before P11 · progress export/import before P2 ships ·
PNG fallback so 3D never blocks a release · disk and Pages as separate release evidence (R10) ·
one release version across HTML, scripts, manifest and SW cache · battery-measurement protocol ·
CSP must allow the classic data `<script>` tags.

## Unverified / discarded
- groq: `assets/mascot-corner.svg`, a `freeze-dates.json`, and "CI" — none exist; invented.
- groq's freeze dates did not match the exam calendar (`MEMORY.md`, real exam dates).
- "Exact f20 threshold definitions" was raised as missing; they already exist (`f20:44-54`).

## Verified before folding (Opus refuter's file reads, checked by the manager)
Exam dates against `MEMORY.md`; f20 trigger count (11) and wording against the file; the one live
film (`index.html:55`, `gate.js:551`); B3b not built (`plan-until-codex-2026-09-20.md:278`).

## Team sheet
| Work item | Seat | Data rule | Fallback |
|---|---|---|---|
| P0 baseline triage, per item | Codex `gpt-5.6-terra` | app code, no secrets | Claude `lean-drafter` |
| P1 validator + smoke page | Codex terra | app code | `lean-drafter` |
| P2 manifest + lazy load | Codex terra; `gpt-6-astra` if the load order fights | app code | `lean-drafter` |
| P3 static mock-ups | Codex terra (HTML), owner picks | no study text beyond sample stems | `lean-drafter` |
| P4-P6, P8, P9b, P11 builds | Codex terra | app code | `lean-drafter` |
| P7a 3D pilot | owner on Meshy (licence first) | Clepsydra art never uploaded before the licence ruling | Live2D brief, or PNGs |
| P9a service worker | Codex astra (must be right) | app code | Claude `debugger` |
| P10 security + a11y | Codex astra | app code | Claude `refuter` + `debugger` |
| Bulk text jobs (copy lists, voice lines) | gateway `work-text` | owner's material only | Codex terra |
| Every phase review | Claude Opus `refuter` (never the maker's house) | — | a measured non-maker seat |
| Git, `CLAUDE.md`, `MEMORY.md`, final judgement | Claude main chat | — | — |

## Recommendation
Owner approves J8 as amended; fork 5 is the one pick to confirm or overrule.
