FAIL. P1b-sync-design.md round 2. All 20 app/js citations confirmed correct. Constraints kept: Firebase optional, 8 s/15 s (L117-118), file:// (L3), no wardround.* rename (new key wardround.sync.device.v1 collides with nothing: v3.<id>, bak.<id>, profiles, theme, clep), theme/clep untouched, loadState rescue kept (L92).
Closed: fix 1 (L23-27), 2 (L94-97), 3 (L44-55), 7 (L73-77), 8 (L14). Partial: 4, 5, 6, 9, 10.
D1 L96+L101-102: legacy re-import seeds srs/hl/flags/conf/days/sched with containing updatedAt; old save() stamps Date.now() (storage.js:137). Any old-client save = every entry clock now: beats newer v1 values AND tombstones. Rollback + resurrection. Row L169 false. Fix: legacy entries without own at get clock below v1 max, or never override a v1 tombstone/record.
D2 L35-37: kind list omits banks, sessLog, sess, editSched (storage.js:44, boot.js:261-262). Canonical v1 never reads legacy state (L30): these silently stop syncing. Fix: add kinds or rule them device-only.
D3 L40: where local envelopes/syncV live unstated. Old tab still open after SW update saves whole S to wardround.v3.<id>, erasing them; unsynced tombstones lost. Fix: name local key, guard.
D4 L107: v1 roster path unnamed. Old pushCloud tx.set(root,{profiles}) has NO merge (gate.js:294): wipes any root-doc field. Fix: subcollection path.
D5 L107-109 vs owner ruling: v1 roster empty at rollout, legacy profiles excluded (L107), so auto-link has no source; legacy same profile can sit in A and B rosters (gate.js:753). Fix: seed from legacy roster, first-owner rule stated.
D6 L79: lastSeenOnlineAt is device-wide. Profile unsynced >1 y beside a daily-synced profile skips stale gate: resurrects GC'd deletes. Fix: last successful v1 sync per uid+profile.
D7 L89-91: import of export (old or new format) merge/clock rule unstated; today Object.assign(older,newer,...) (boot.js:284). Fix: per-record merge, legacy clocks per D1.
D8 L110-112: profile deleted on A, B offline edits: B push vs roster tombstone unspecified; old client delete (gate.js:197) leaves sync/v1 subdoc: diverge.
D9 L138-144: step 1 ships date|itemId marks + envelopes on legacy transport; isolation arrives step 3. Other devices on today's migrateSched (storage.js:83) turn them into |0/|1; mergeStates whole-clones envelopes. Steps 1-2 not independently shippable.
Minor L68: item id calls issue() twice. L54: far-future clock only warns, poisons all HLCs + GC.
Hidden decisions (L151 "None" false): stop syncing banks/sessLog/sess; old clients never see new edits (force-upgrade or accept divergence); first-owner rule for shared legacy profile.
Scenarios:
A offline edit vs B delete | HLC LWW, 1-y tombstone | converges, loser dropped by design | OK
Equal HLC | deviceId tie | converges | OK
1 h fast, corrected | wall pinned, monotonic; slow edits pre-receive lose <=1 h | converges, disclosed | OK
Old client after new | D1 | rollback + resurrection; old never sees new | FAIL
Offline >1 y | pull-first; device-wide stamp | resurrection (D6); unsynced >1 y dropped, disclosed | FAIL
Import old export | unspecified (D7) | undefined | FAIL
Profile del A / B offline edit | unspecified (D8) | resurrect or lose | FAIL
Account switch A to B | owned blocked; shared legacy profile unresolved (D5) | wrong-owner link | FAIL
