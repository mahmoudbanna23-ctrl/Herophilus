# P1b — sync correctness design, revised after refuter round 2

Scope: P1 only. Vanilla classic scripts; no build/npm; `file://` and offline
remain usable. Firebase remains optional. Do not rename a `wardround.*` key.

## Owner rulings 2026-09-26 (binding)
1. `banks`, `sessLog`, `sess`, `editSched` keep syncing — kind list + merge rule below.
2. Old clients: force upgrade. v1 lives on a path old clients never write; legacy data
   never beats a v1 record or deletion marker, ever, regardless of clock.
3. Legacy profile in two accounts' rosters: first account to link owns it; the other
   gets an import-a-copy path. Auto-link seeds from the legacy roster.

## Evidence: current behaviour
| Concern | Evidence |
|---|---|
| Whole-state merge clones one selected state, six maps `Object.assign`d flat, schedule LWW. | `gate.js:202-244` |
| `pushCloud` merges legacy `state` into local, writes it back; roster write has no merge option — replaces the whole root doc. | `gate.js:268-296` |
| `save()` stamps `S.updatedAt=Date.now()` on every call, not per field. | `storage.js:136-137` |
| `setConf` writes `conf`/`srs` with no per-entry clock. | `quiz.js:527-536` |
| Schedule item delete re-keys every mark by array index. | `sessions.js:334-350` |
| `migrateSched` runs unconditionally every `loadState()`, rewrites any key not matching `\|\d+$`/`\|main`/`\|peds` into two index keys. | `storage.js:73,77-86` |
| `sessLog`/`sess`/`editSched` validated (`boot.js:260-262`) but absent from `mergeStates`' kind list (`gate.js:221-223`) — silently stop syncing today. | `boot.js:260-262`; `gate.js:221-223` |
| `sessLog` entries have no id (`unshift`, no key). | `clepsydra.js:618-625` |
| `banks` keyed per module, no clock. | `storage.js:44` |
| Legacy roster write replaces root doc content; a same-second concurrent link can wipe a v1 sibling field on that doc. | `gate.js:186-198,292-294` |
| `signOutCloud` swallows `firebase.auth().signOut()` failure. | `gate.js:135-140` |
| Import: `Object.assign(older,newer,mergeStates(...))`, bespoke, not the sync merge. | `boot.js:266-291` |
| `loadState` rescues on missing, unparseable, or validator-throw. | `storage.js:60-69` |

## Isolation and local keys
Two **separate** local keys, neither ever inside `S`, cloud, export, import, `mergeStates`,
or profile copies:
- `wardround.sync.device.v1` — `{deviceId,lastWall,lastLogical}`. One per installation
  (not per profile). Generated once, durable.
- `wardround.sync.records.v1.<profileId>` — `{syncV:1,records,lastSyncedAt}`, one per
  profile. Holds the envelopes and the profile's own last-successful-sync stamp (fixes
  D6: `lastSeenOnlineAt` was device-wide, masking a stale profile beside a daily-synced
  one on the same device — now per uid+profile, so staleness is judged per profile).

Guard: `save()` and any whole-`S` write (`localStorage.setItem(KEY,...)`, `wardround.bak.<id>`
snapshot) touch only `KEY`; neither new key is a field of `S`, so an old tab's whole-`S`
save cannot reach or erase them — verify this by construction on every new local-write
call site added.

Canonical cloud data is new child `users/{uid}/profiles/{pid}/sync/v1`, `{syncV:1,records}`.
It never reuses old profile `state`. Roster is a **separate subcollection**
`users/{uid}/rosterV1/{pid}` → `{id,ownerUid,c,del}` — fixes D4: today's
`tx.set(root,{profiles:list})` (`gate.js:294`, no merge option) replaces the whole root
doc; keeping v1 roster off that document means a legacy roster write can never wipe it.

New clients read/write only `sync/v1` + `rosterV1`; **after v1 activation a new client
never reads or writes legacy `state`/`profiles` again.** Old clients may still write
legacy fields — this has zero effect on v1 data (ruling 2; closes D8, see Scenarios).

## Record kinds and merge rules
`answers`,`notes`,`reports`,`resumeByChapter`,`mockResume`,`term`: per-id/singleton LWW as
round 1 (unchanged). `scheduleDay[date]`, `scheduleItem[id]`: LWW, id is
`deviceId+'-'+w+'-'+l` from **one** `issue()` call (fixes minor: previous draft called
`issue()` twice per id, splitting one edit across two clock ticks). `sched[date+'|'+itemId]`:
one mark LWW, keyed by stable item id, never index — delete drops the item + its marks,
never renumbers.

Added per ruling 1 (fixes D2):
| Kind | Id | Value | Merge |
|---|---|---|---|
| `banks` | module key | `{sources:[...]}` | per-key LWW, same shape as `scheduleDay` |
| `sessLog` | `deviceId+'-'+w+'-'+l`, assigned at creation (today's `unshift` has none — add it) | session-summary object | union by id; tombstone-eligible; materialised view sorts by `start` desc and **caps display to 80**, all entries still retained/GC'd on the 1-year tombstone rule like any other kind |
| `sess` | singleton `'active'` | running-session object or delete | LWW — last device to start/stop wins, consistent with `term`/`mockResume` |
| `editSched` | singleton `'flag'` | boolean | LWW |

Envelope: `{v:<value>,c:[wall,logical,deviceId],del?:true}`. Missing = unknown, never
delete; only a winning `del:true` deletes. Materialise current `S` shapes from `records`
after every merge; envelopes are canonical, `S.sched`/`S.banks`/etc become derived caches.

## HLC, writes, clock-skew clamp
`issue()`: `w=max(Date.now(),lastWall)`; if equal, `l=lastLogical+1`, else `l=0`; persist
before the state write. On a received `[rw,rl]`: **clamp** `rw` to `min(rw, Date.now()+24h)`
before folding in — `lastWall=max(lastWall,rw_clamped)`; raise `lastLogical` only from the
clamped value. Fixes a defect in the previous draft: unclamped adoption of a bad clock let
one far-future device permanently poison every later `issue()` and every tombstone-GC
horizon computed from wall time. A clock still >24h ahead after clamping shows one
non-blocking warning; never rewrite the sender's own stored clock.

Compare `(wall,logical,deviceId)` lexicographically; tombstone participates like any value.
All mutations use `put(kind,id,value)`/`drop(kind,id)` — issue clock, update envelope +
materialised view, debounce save. This replaces `setConf` and every other direct `save()`
write path for a synced kind.

## Tombstones and retention
Every `drop` writes `del:true`, retained 1 year from winning clock, for every kind above
including `banks`/`sessLog`/`sess`/`editSched`. GC only inside a successful authenticated
v1 transaction, never offline/local-only; removes only expired tombstones, atomically,
from both copies.

Stale gate is now **per uid+profile** (`lastSyncedAt` in the per-profile local key, not the
shared device key): when a profile's own `lastSyncedAt` is >1 year old, treat its local
cache as stale — pull, validate, merge; suppress any local record older than the horizon
and absent remotely (remote-absence-wins only in this stale path), save, then push. A
second profile on the same device that synced yesterday no longer masks this.

## Legacy is fill-only, never a source of truth (closes D1, D7)
Any data without a v1 envelope clock — a live legacy `state` blob written by an old
client, or a legacy-format (`v:2`) export — is merged **fill-only**: for each id, apply
the legacy value only where the local v1 record for that id **does not yet exist**;
never overwrite an existing v1 value or tombstone, regardless of any timestamp on either
side. This single rule replaces per-kind clock-guessing and is why old `save()`'s
whole-blob `Date.now()` stamp (`storage.js:137`, no per-field clock) can no longer cause
rollback or resurrection — a legacy write has no path to beat anything v1 already knows.
Seed clock on first fill from best existing timestamp (`.at` where present, else
containing `updatedAt`), `[timestamp,0,deviceId]`, never wall-clock-now.

Import (`boot.js:266-291`) is rewritten to call the **same** put/merge path as cloud sync:
a v1-format export (`syncV:1` present) merges by its own envelope clocks like a peer
device; a legacy-format export merges by the fill-only rule above. The bespoke
`Object.assign(older,newer,mergeStates(...))` is retired.

## Migration and the force-upgrade gate (closes D2 kind gap, D9)
First v1 load: seed every kind's clock from best existing timestamp as above, in one
atomic local save; assign schedule-item stable ids and translate `date|index` marks in
that same save; set `S.syncV=1` on success (idempotent — interrupted pre-save restarts,
post-save no-ops on retry).

`migrateSched` (`storage.js:73,77-86`, the `\|main`/`\|peds`→index normaliser) is gated
`if(!S.syncV)` — it runs only before a profile's one-time v1 migration and never again
after. This is what makes stable ids safe to introduce in step 1 itself: they are never
written into a shape `migrateSched` still touches, closing D9 without deferring ids to a
later step or reordering the build.

Force-upgrade gate old clients actually hit: no service worker exists in this app today
(`app/` has none) — an old tab keeps running until the user reloads regardless, so the
gate is data-side, not a push. Once a profile's `sync/v1` exists, an old client's writes
to legacy `state`/`profiles` are simply never read by any v1 client and have no effect
(ruling 2) — its own UI still appears to work, which is the intended shape: no error,
no forced reload, just increasing irrelevance until the user reloads and gets the current
client, at which point it re-syncs cleanly through v1 (fill-only rule prevents any
rollback on that transition). If a legacy write ever needs to be actively rejected (a
future security-rules choice), the existing failed-write path already surfaces it:
`catch(e){if(auth===cloudAuth)setSync('err')}` (`gate.js:133`, mirrored in `pushCloud`) —
the persistent sync-error toast is the gate the user already sees today; no new UI needed.

## Ownership, roster, profile delete (closes D4, D5, D8)
`rosterV1` doc `{id,ownerUid,c,del}` per profile, separate subcollection (above). Auto-link
seeds from the **legacy** roster at first v1 read of an account: any legacy profile id
already in that account's legacy `profiles` list auto-links with `ownerUid=uid` the first
time either account observes it. Ruling 3: whichever account's client performs this
link first (by `c` clock) owns it thereafter; the second account's client is offered an
"import a copy" (new id, new `rosterV1` row) rather than shared ownership — no split-brain
on one row. A profile the cloud has never seen (`ownerUid:null`) asks before first upload.
An A-owned profile cannot upload under B without an explicit transfer action.

Profile delete (v1 client): write `rosterV1` tombstone + `sync/v1.del:true` first; then
remove local state and `wardround.bak.<profileId>`; explicitly delete the `sync/v1` and
`rosterV1` docs as their own step rather than relying on parent-doc deletion (Firestore
subcollections outlive a deleted parent doc — the previous draft's plain roster-doc
delete, `gate.js:197`, left `sync/v1` orphaned and independently writable, which is what
let it silently resurrect). Any deletion failure is surfaced, keeps retryable local data.
Sign-out offers removal of that UID's profiles/backups and surfaces failure
(fixes `gate.js:139` swallowing `signOut()` errors — surface them the same way).

Old-client delete (legacy-only, no v1 code) touches only legacy fields: per ruling 2 it
has zero effect on v1 — the profile is intact under v1 for every v1 client, and reappears
in the old client's own view once that client reloads and becomes a v1 client itself
(see Scenarios, row 7). This is a disclosed consequence of force-upgrade, not corruption.

## Validation
`parseProgressState(raw)`: JSON parse then `checkedProgressState`, extended for v1
envelopes/ids/roster fields. Import and every cloud read call it; invalid data is not
merged/written, shows a retryable error. `loadState`'s missing/unparseable/**validator-
throw** rescue (`storage.js:60-69`) is unchanged.

## SRI / CDN
Pin exact Firebase CDN scripts with SHA-384 `integrity` and `crossOrigin='anonymous'`
before append. Keep `loadSDK()` 8s / `boot()` 15s local-only fallback.

## Ordered build split
1. Device-only identity/HLC (with clamp), parser/validator, envelope put/drop helpers,
   one-time v0→v1 migration incl. stable ids, `migrateSched` gated on `!S.syncV`. Check:
   `file://` boot, interrupted/idempotent migration, device key absent from
   export/import/merge, a fixture pre-migration blob never reaches `migrateSched` twice.
2. Per-record merge (full kind list incl. `banks`/`sessLog`/`sess`/`editSched`), receive
   clamp+bump, 1-year tombstones/GC, per-profile stale-reconnect gate, import routed
   through put/merge. Check: deterministic record/tombstone/skew/GC/import fixtures.
3. Canonical `sync/v1` + `rosterV1` children; legacy fill-only import path; SRI. Check:
   old-client fixture cannot alter v1; 8s/15s fallbacks; legacy write proven inert.
4. Ownership/auto-link/first-owner, profile + sign-out deletion incl. `sync/v1`/`rosterV1`
   explicit delete. Check: auto-link, import-a-copy, A→B block, failure surfacing.
5. Smoke harness/browser-device matrix. Check: every acceptance row recorded.

Every step boots and runs standalone; step 1 alone is now safe per its `migrateSched` gate.

## Acceptance checks
| Case | Expected result / method |
|---|---|
| Real auth | Two real test accounts: envelope winner, UID isolation, retry. |
| Blocked popup/redirect | Stub `popup-blocked`; redirect/local gate; real iOS standalone redirect. |
| Account switch | A cannot write under B; seen roster auto-links; unseen asks. |
| Offline restart | Edit offline, reload/reconnect; per-profile stale pull-before-push. iOS/Android smoke. |
| Storage failure | Throw set/remove; persistent warning; no false success/deletion claim. |
| Migration interruption | Interrupt before/after save; one id/clock mapping; no loss. |
| SW update | No SW exists; scripted as "old tab open across a deploy" instead — canonical record/tombstone survives; legacy write proven inert. |
Scripted cases: Chrome, Firefox, Edge, Safari desktop. Real-device only: real auth,
redirect, offline restart, "old tab across deploy" on iOS Safari and Android Chrome.

## Scenarios (refuter round 2, re-run)
| Scenario | Rule applied | Outcome | Verdict |
|---|---|---|---|
| A offline edit vs B delete | envelope clock LWW, 1-y tombstone | converges, loser dropped by design | OK |
| Equal HLC | `deviceId` tie-break | converges | OK |
| Device 1h fast, corrected | wall pinned, monotonic; clamp on receive | converges, disclosed | OK |
| Old client after new | legacy fill-only, never beats v1 (ruling 2) | old writes inert; old client re-syncs cleanly once reloaded | OK |
| Offline >1 year | per-profile `lastSyncedAt`, pull-first-suppress | correct per profile regardless of device's other profiles | OK |
| Import old export | same put/merge path, fill-only for legacy-format | deterministic, no silent overwrite | OK |
| Profile del A / B offline edit | v1 tombstone at `sync/v1`+`rosterV1`; legacy-only delete is inert | B's push proceeds normally unless a real v1 tombstone exists, which then wins | OK |
| Account switch A→B, shared legacy profile | first-link owns (ruling 3), seeded from legacy roster | deterministic owner, other gets import-a-copy | OK |

## Open questions for the owner
None — all eight refuter-round-2 rows resolve under the rulings already given.

## Refuter round 2 — how each defect is closed
| Defect | Doc section |
|---|---|
| D1 legacy re-import clock / rollback+resurrection | Legacy is fill-only, never a source of truth |
| D2 kind list omits banks/sessLog/sess/editSched | Record kinds and merge rules |
| D3 local envelope/syncV key unstated, old-tab erasure | Isolation and local keys |
| D4 v1 roster path unnamed, root-doc no-merge wipe | Isolation and local keys |
| D5 auto-link source, shared legacy profile in two rosters | Ownership, roster, profile delete |
| D6 `lastSeenOnlineAt` device-wide masks a stale profile | Isolation and local keys; Tombstones and retention |
| D7 import merge/clock rule unstated | Legacy is fill-only, never a source of truth |
| D8 profile delete vs offline edit; old-client delete orphans `sync/v1` | Ownership, roster, profile delete |
| D9 steps 1-2 not independently shippable | Migration and the force-upgrade gate; Ordered build split |
| Minor: `issue()` called twice per item id | Record kinds and merge rules |
| Minor: far-future clock only warns, poisons HLC+GC | HLC, writes, clock-skew clamp |
