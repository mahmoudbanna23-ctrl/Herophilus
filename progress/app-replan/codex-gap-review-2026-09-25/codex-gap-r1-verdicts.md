# Verdicts — codex-gap-r1.md vs disk

| Claim | Verdict | Disk shows |
|---|---|---|
| gate.js:102-120 merges cloud profiles into roster | CONFIRMED | forEach pushes/merges cloud profiles into local `profiles` array |
| gate.js:135-140 keeps local progress after sign-out | CONFIRMED | clears fbUser/me only, no state removal, toast says progress stays |
| gate.js:109 syncs open profile on sign-in | CONFIRMED | `if(me)pullCloud();else showGate('profiles')` |
| gate.js:203-222 whole-state clock, ties favour first arg | CONFIRMED | `newer=at>=bt?a:b`; map keys (srs/hl/flags/conf/days/sched) assigned older-then-newer |
| gate.js:262-266 debounce | CONFIRMED | clearTimeout+setTimeout(1200ms) |
| gate.js:287-290 JSON.parse cloud state, no validation | CONFIRMED | JSON.parse into mergeStates, no try/catch or schema check |
| gate.js:23-27 loader, no integrity attr | CONFIRMED | script tag has src/onload/onerror only |
| gate.js:906-914 delete misses wardround.bak.* | CONFIRMED | removes `stateKey(id)` only; bakKey (`wardround.bak.<id>`, boot.js:44) untouched |
| quiz.js:993 deletes highlights | CONFIRMED | `delete S.hl[q.id];save()` |
| quiz.js:768 promises review | CONFIRMED | "we will check it against the book" |
| quiz.js:794-802 stores report in private progress | CONFIRMED | `S.reports[qid]=...;save()`, delivery-language toast |
| boot.js:44 reads backup key | CONFIRMED | `bakKey(){return 'wardround.bak.'+((me&&me.id)||'local')}` |
| boot.js:191-284 validated per-profile export/import | CONFIRMED | exportData (191-196) dumps current S; importData (266-284) validates via checkedProgressState |
| firestore.rules:37-57 ownership-only | CONFIRMED | uid==auth.uid checks, default-deny catch-all |
| theory.js:659-661 pinned CDN URLs | CONFIRMED | versioned gstatic.com 10.12.2 URLs |
| utils.js:6-9 md() escapes | CONFIRMED | `h=esc(s)` before markdown transforms |
| index.html:115-131 loads all subject scripts | CONFIRMED | all questions.*.js listed unconditionally |
| index.html:53 preloads video | CONFIRMED | `<video preload="auto">` |
| dist-check.js:24-35 bypasses gate | CONFIRMED | overrides window.showGate to no-op |
| dist-check.js:39 disk URL | CONFIRMED | `file:///`+path |
| No SW/webmanifest/_headers/_redirects in app/ | CONFIRMED | recursive find: none present (only _worker.js, unrelated) |
| Plan §3 "Sync: keep" | CONFIRMED | line 81 table |
| R9 freeze exists | CONFIRMED | line 40 |
| P2 home <1MB + "export all wardround.* keys" | CONFIRMED | lines 147-149 |
| P9a clears old caches on activation | CONFIRMED | line 179 "old caches cleared on activate" |
| P10 report-only CSP | CONFIRMED | line 198 "CSP Report-Only" |
| P12 security pass after final upload | CONFIRMED | lines 204-206 |

Counts: CONFIRMED 26 / WRONG 0 / PARTLY 0
