# P1b — revise the sync design, round 3 (2026-09-26)

Seat: Claude `lean-drafter` (two Codex dispatches failed review; prompt opens
`ROUTE-OK: two failed Codex dispatches on P1b`). Then an Opus refuter, never the drafter.

WRITE GRANT: rewrite ONE file, `progress/app-replan/p1/P1b-sync-design.md`, ≤ 250 lines,
telegraphic. No code change anywhere. No commit, push, add, tag.

## Inputs
- The doc (round 2), both earlier briefs `p1b-sync-design-brief.md`, `p1b-revise-brief.md`
  (all their constraints and owner rulings still bind).
- Refuter round 2: `p1/REFUTE-P1b-round2.md`. Close every defect; open every file:line it cites.

## Owner rulings 2026-09-26 (decisions, not questions)
1. `banks`, `sessLog`, `sess`, `editSched` KEEP syncing — add each to the record-kind list with a
   merge rule.
2. Old clients: FORCE UPGRADE. v1 sync lives on a new path old clients never write; an old client
   is made to reload before it can sync (design the gate old clients actually hit — check what
   today's code does on an unknown field / failed write). Legacy data never beats a v1 record or
   deletion marker.
3. A legacy profile in two accounts' rosters: FIRST ACCOUNT TO LINK owns it; the other gets an
   import-a-copy path. Seed auto-link from the legacy roster.

## Also close
- Name the local key holding envelopes and `syncV`; guard it against an old tab's whole-`S` save.
- v1 roster in a subcollection (old `tx.set(root,{profiles})`, `gate.js:294`, has no merge).
- Stale gate per account+profile, not per device.
- Import of an export: merge + clock rule (`boot.js:284`).
- Profile deleted on A while B edits offline; old client's delete leaving `sync/v1` behind.
- Build split: every step shippable alone; step 1 must not expose new ids to old `migrateSched`.
- Re-run the refuter's 8-row scenario table with the new design, each row outcome + why.
End with "Refuter round 2 — how each defect is closed". Open questions only if a real product
decision remains.
