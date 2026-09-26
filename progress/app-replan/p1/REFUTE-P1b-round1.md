FAIL. P1b-sync-design.md. Citations 13/14 correct; storage.js:47-75 also rescues on INVALID (checkedProgressState throw, L63), not just missing/unparseable (doc L17, minor).
D1 L21: deviceId+clock live IN synced state; mergeStates clones newer (gate.js:205), import Object.assign (boot.js:284) - device adopts peer's deviceId, tie rule breaks, sched ids collide. Fix: device-local key, never merged.
D2 L99-100: migration stamps every record tick()=migration time, not state.updatedAt. Stale device upgrading last beats fresher device on every record = loss (regression vs today). Fix: clock=[updatedAt, deviceId].
D3 L27/L38: merge not said to raise S.clock to max received wallMs. Slow device's later edit loses for skew window. Fix: HLC, bump on merge.
D4 L23 vs L51: k "exactly" six, yet notes join envelopes - contradiction. S.schedule array (days/items/labels) merge unspecified; today whole-array newer wins (gate.js:244).
D5 L71-75,L109: whether new client keeps writing legacy `state` unstated; legacy-import clock + absent-means-delete undecided.
D6 old client: migrateSched (storage.js:80-83) turns `date|<dev>-<ms>` into `date|..|0`+`|1`; rosterProfile (gate.js:178) strips ownerUid/c/del on set (gate.js:196,294) - erased tombstone resurrects profile. Doc silent.
D7 L54: srs/flags/conf/days tombstone lifetime unstated; no stale-device horizon after GC.
D8 L77-84: existing profiles ownerUid null - every user prompted per profile, no auto-link for ones in own roster; undecided.
D9 L134-136: step 1 sets syncV:1 but helpers arrive step 2 - envelopes go stale, never re-migrated. Step 1 ids hit old clients (D6). Not independently shippable. Merge steps 1+2.
Interleavings: A offline edit + B delete - LWW by wall, converges, OK. Equal clocks - deviceId tiebreak OK unless D1 shares ids = diverge. A 1h fast - B's later edit lost <=1h (D3). Old client after new - sched mangled, roster tombstone stripped = resurrect; legacy import resurrect undecided. GC: device offline >90d re-pushes GC'd record = resurrect, yes.
Kept: no wardround.* rename; theme/clep untouched (separate keys, icons.js:19, sessions.js:581); loadSDK 8s/boot 15s (L95); file:// (cloudEnabled gate.js:9); SRI pins 10.12.2 already versioned (theory.js:664).
Q1 90 days: real product decision, but doc must state D7 resurrection risk. Q2: already answered by doc L82-84 and brief item 6 (bak removed, failures reported) - drop.
