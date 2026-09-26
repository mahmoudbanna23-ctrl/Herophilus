# P1b — revise the sync design after refuter round 1 FAIL (2026-09-26)

Seat: Codex `gpt-5.6-terra`. Final reply begins with `AGENTS.md loaded — Herophilus`, then ≤ 6 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): rewrite ONE file,
`progress/app-replan/p1/P1b-sync-design.md`. Everything else is read-only. No code change anywhere.

## Inputs
- The doc, and its original brief `progress/app-replan/p1/p1b-sync-design-brief.md` (all 11 items and
  the hard constraints still bind).
- Refuter round 1: `progress/app-replan/p1/REFUTE-P1b-round1.md`. Fix every defect. Open every
  file:line it cites and confirm it before designing around it.

## Owner rulings (2026-09-26) — decisions, not questions
- Tombstone / deletion-marker retention = **1 year**, for every record kind. State the residual
  risk (a device offline > 1 year can resurrect a delete) and what the client does on reconnect
  after > 1 year offline (e.g. treat local state as stale and re-pull before pushing — design it).
- Existing profiles with no owner: **auto-link** a profile silently when it is already in that
  account's cloud roster; only a profile the cloud has never seen asks before upload.

## Required fixes, each closed in the doc
1. `deviceId` and the logical clock live in a DEVICE-ONLY key that never merges, never imports,
   never exports (today `mergeStates` copies whole state, `gate.js:205`; import `Object.assign`,
   `boot.js:284`).
2. Migration clocks: seed each record's clock from the best existing timestamp (`updatedAt` and
   the like) paired with deviceId — never from the migration time.
3. Hybrid logical clock: merge raises the local clock to max(received) so a slow-clock device's
   later edit is not lost. State the skew behaviour precisely.
4. `S.schedule` (days, items, labels) and notes: an explicit merge rule for each. The record-kind
   list must be complete — no "exactly six" contradicted later.
5. Whether new clients keep writing the old `state` field; what clock imported old-format data
   gets; whether a missing entry means delete (it must not, unless a tombstone says so).
6. Old client meeting new state: its `migrateSched` (`storage.js:83`) rewrites new mark keys; its
   `rosterProfile` (`gate.js:178`, writes at `gate.js:196`, `:294`) strips `ownerUid`, `c`, `del`
   and resurrects deleted profiles. Design so an old client cannot damage new state (e.g. new
   data under new fields/paths old clients never write, or a version gate old clients respect —
   check what old clients actually do with unknown fields).
7. Deletion markers on `srs`, `flags`, `conf`, `days`: lifetime 1 year and a GC rule.
8. `loadState` citation: it also rescues when `checkedProgressState` throws (`storage.js:63`).
9. Build split: merge old steps 1 and 2 (clock + write helpers ship together); every step
   independently shippable with its own check.
10. Re-run the refuter's scenario table in the doc with the new design: A offline edit vs B
    delete · equal clocks · one device 1 h fast · old client syncs after new · device offline
    > 1 year. Each row: outcome and why.

## Output
Rewritten `P1b-sync-design.md`, ≤ 230 lines, telegraphic. End with "Refuter round 1 — how each
defect is closed" (defect · doc section). Open questions for the owner only if a real product
decision remains.

## Do not
Edit any other file. Commit, push, `git add`, tag. Touch `app/`, `tools/`, `progress/app-replan/p2/`,
`p5/`, `scene-pilot/`. Download or install anything. Start a second job.
