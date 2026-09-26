# P1b — sync correctness: DESIGN ONLY (2026-09-26)

Seat: Codex `gpt-5.6-terra`. Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 6 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): create ONE file,
`progress/app-replan/p1/P1b-sync-design.md`. Everything else is read-only. No code change anywhere.

## Goal
A design that a later build job can implement without re-deciding anything, for the P1 sync exit
conditions in `progress/PLAN-app-master-2026-09.md` §8 (lines ~320-332; read that span only).
Read the app code the plan cites, at the cited lines first, then only what they call:
`app/js/gate.js` (~139, ~221-222, ~287-290), `app/js/quiz.js` (~526-536), `app/js/sessions.js`
(~341-348), `app/js/boot.js` (~191-284), `app/js/storage.js`. Locate before reading; never read a
whole large file.

## The design must answer, each with file:line evidence of today's behaviour
1. Per-record clocks for `srs`, `hl`, `flags`, `conf`, `days`, `sched` (today they ride one
   whole-state clock). Where the clock lives, how it is set on every write path, how merge uses it.
2. Tombstones for every delete (highlights, notes, profiles, schedule marks): shape, lifetime,
   garbage collection.
3. Deterministic tie rule and explicit clock-skew behaviour.
4. Stable ids for schedule items (deletes renumber array keys today).
5. Cloud state validated the same way import is validated (reuse, not a second validator).
6. Profile deletion also removes `wardround.bak.<profileId>` and surfaces a failed cloud delete.
7. Profiles store the owning UID: account A's profile never uploads under B without an explicit
   action; an unlinked profile asks before upload; sign-out offers device removal and surfaces
   failure (`gate.js:139` swallows it today).
8. SRI on the CDN loader.
9. Migration: existing users' state (no per-record clocks yet) upgrades without loss; old client
   meeting new state does not destroy it. Say which version marker you need, if any.
10. The named acceptance cases, each as a concrete test a script or `app/smoke.html` can run:
    real auth, blocked popup/redirect, account switch, offline restart, storage failure,
    migration interruption, SW update; browser matrix incl. iOS Safari and Android (say which
    cases need a real device and cannot be scripted).
11. Build split: ordered, independently shippable steps, each with its own check.

## Hard constraints (`CLAUDE.md` §2) — the design must keep every one
Vanilla JS, no build step/bundler/npm; data files are classic scripts, not ES modules; boots from
`file://` and offline; NEVER rename a `wardround.*` storage key; Firebase optional, `loadSDK()`
8 s / `boot()` 15 s timeouts, app degrades to local-only; theme and Clepsydra state are device keys,
never synced; `loadState()` rescues only a missing or unparseable live key.

## Output
`P1b-sync-design.md`, ≤ 220 lines, telegraphic, tables where they fit. End with "Open questions
for the owner" — only real product decisions, never something the plan or code already answers.

## Do not
- Edit any file other than the one above. Commit, push, `git add`, tag.
- Touch `app/assets/scene/`, `progress/app-replan/scene-pilot/`, `progress/app-replan/p5/`,
  `progress/app-replan/p2/`, `app/data/`.
- Download or install anything. Start a second job.
