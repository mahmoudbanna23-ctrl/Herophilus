# P2a — revised speed design (round 2 repairs) — 2026-09-26

Scope unchanged: design only. P2 is `manifest.js` + per-subject classic-script injection; home
target <1,000,000 B. `file://`, offline, no build/npm, `banksOf(q)` only, `wardround.*` keys
unchanged (additive fields only), Firebase optional/untouched, export/import before ship
(PLAN:149, 340-342). One release version covers HTML/scripts/manifest/SW cache (PLAN:178-179).

## 1. Manifest lists every global, not one per subject (closes D1)

`app/data/questions.js:4-17` concatenates 12 globals across 4 subjects (`Q_ENT`, `Q_PEDS`,
`Q_PEDS_EP`, `Q_PEDS_EP2`, `Q_OPHTHO`, `Q_OPHTHO_EP`, `Q_OPHTHO_EP2`, `Q_NEURO`, `C_ENT`,
`C_PEDS`, `C_OPHTHO`, `C_NEURO`). `MANIFEST[id].q[]`/`c[]` list one `{file,global}` pair per
script, not one per subject:

```js
MANIFEST.pediatrics = {
  q:[{file:'questions.peds.js',global:'Q_PEDS'},
     {file:'questions.peds.ep.js',global:'Q_PEDS_EP'},
     {file:'questions.peds.ep2.js',global:'Q_PEDS_EP2'}],
  c:[{file:'cases.peds.js',global:'C_PEDS'}],
  t:[{file:'theory.peds.js',global:'T_PEDS'}],
  counts:{questions:__,cases:__,theoryKeys:__}, version:'v1'
};
```

Rebuild collects every listed global for every `loaded` subject, keeps the `termId` param
(`questions.js:55`), and mutates `THEORY` in place — never reassigns the `const`
(`theory.js:23`, matches its existing clear-then-refill pattern):

```js
function collectLoaded(kind){ // 'q' or 'c'
  let arr=[];
  for(const id in MANIFEST){
    if(subjectState[id]!=='loaded') continue;
    MANIFEST[id][kind].forEach(e=>{ const g=window[e.global]; if(Array.isArray(g)) arr=arr.concat(g) });
  }
  return arr;
}
function rebuildQuestions(termId){
  Q_ALL = collectLoaded('q').concat(collectLoaded('c'));
  const ids=new Set(MODULES.filter(m=>m.term===termId).map(m=>m.id));
  QUESTIONS = Q_ALL.filter(q=>ids.has(q.module)&&LOCKED_MODULES.indexOf(q.module)<0)
    .map(q=>({q,k:qHash(q.id)})).sort((a,b)=>a.k-b.k||(a.q.id<b.q.id?-1:1)).map(x=>x.q);
}
function rebuildTheory(termId){
  const T_ALL=Object.assign({}, ...Object.keys(MANIFEST)
    .filter(id=>subjectState[id]==='loaded')
    .flatMap(id=>MANIFEST[id].t.map(e=>window[e.global]||{})));
  Object.keys(THEORY).forEach(k=>{delete THEORY[k]});   // in-place, THEORY stays const
  /* existing T_LOCKED / chapter-tuple walk over T_ALL, unchanged */
}
```

`checkData` (`storage.js:117-126`, called `boot.js:374`) already skips `LOCKED_MODULES`; extend
the same skip to any subject whose `subjectState!=='requested'&&!=='loaded'` — deferred is not
failure, matching the fix already closed in round 1 (D2 there).

## 2. Home stats before any subject loads (closes D2)

`vHome` (`render.js:175-178,186,200`) reads `QUESTIONS` directly for total/done/accuracy/due/
flagged. `S.answers`, `S.flags`, `S.srs` (`quiz.js:195,219,338,477,529,838`; `storage.js:316-330`;
`utils.js:73-80`) are keyed only by qid — no subject field — so none of the five stats can be
computed correctly from state alone once a subject is unloaded, and computing them by scanning
`QUESTIONS` needs question objects that are not yet in memory. Loading everything to answer this
defeats the manifest's purpose.

Fix: two **new, additive** `wardround.*` fields, written at the point each action already has the
question object loaded (answering, flagging, scheduling) — never a rename, never a schema bump:

- `S.subjStats[subjectId] = {answered, correct, flagged, due}` — bumped in `quiz.js` wherever
  `S.answers[q.id]=…`, `S.flags[q.id]=…`, `S.srs[q.id]=…` are already written (the code there
  already holds `q.module`, hence the subject, at write time).
- `due` inside `subjStats` is a live count refreshed daily (same `todayISO()` cadence as
  `dueNow()`), not a boolean, so date rollover doesn't need a subject loaded either.

`vHome` pre-load: `total=Σ MANIFEST[id].counts.questions` (open subjects); `done=Σ
subjStats[id].answered`; `acc` from `Σ correct/Σ answered`; `due=Σ subjStats[id].due`;
`flagged=Σ subjStats[id].flagged`. `fresh=done===0` now reads the real lifetime total, so a
returning student is never shown first-run. On settlement, subjects that are loaded may recompute
their own slice straight from `QUESTIONS` as today, reconciling any drift. Legacy profiles (no
`subjStats` yet) backfill it the first time each subject next loads, by scanning that subject's
slice of `QUESTIONS` once — old data is not lost, it catches up as each subject reloads.

Cards (`render.js:241-244`) already show manifest counts pre-load (round 1 fix, unchanged); the
gap closed here is the top-of-page dashboard, which read raw `QUESTIONS` and nothing else.

## 3. Real disk-measured floor (closes D3)

Re-measured with `fs.statSync` against the live tree (not the round-1 table):

| Part | B | Source |
|---|---:|---|
| `index.html` | 14,439 | disk |
| `data/fonts.js` | 129,691 | disk |
| CSS (tokens+base+layout+components+print+views) | 165,497 | disk: 8,959+1,015+15,064+69,000+17,161+54,298 |
| shared JS (11 files, `boot`…`utils`, excludes `desk-data.js`) | 277,461 | disk |
| `data/modules.js` | 27,280 | disk |
| aggregators (`questions.js`+`theory.js`) | 4,299 | disk: 2,954+1,345 |
| `icon-96.png` (rail + splash logo, always in DOM) | 18,040 | disk |
| `icon-180.png` (gate medallion, `gate.js:594,603`) | 58,169 | disk |
| `ambient-library.jpg` (poster, shared by gate + home `<video>`) | 31,940 | disk |
| `ambient-library.mp4` | 328,896 | disk |
| Clepsydra: **all 9 poses** (`clepPreload`, `clepsydra.js:18-19`, called from `clepMount`→
  `clepShow`, `gate.js:744`, unconditionally after every profile entry) | 1,107,811 | disk, 9 files |
| `herophilus-bust.jpg` (hero panel, `render.js:230,286`, every home paint) | 92,194 | disk |
| four `mod-*.jpg` (`render.js:252`) | 617,885 | disk |
| manifest.js (not on disk; planned compact cap) | 3,000 | estimate |
| **Real pre-trim floor** | **2,861,102** | Σ above |

`app/assets/scene/*` (12 files, 249,229 B) and `app/js/desk-data.js` (10,786 B): **grepped —
neither is referenced anywhere in `index.html`/`render.js`/`boot.js`.** Not part of any current
home load; listed here only as a future P5 cost, not summed into the floor.

**Gate is unconditional, not a branch.** `boot.js:373-396`: `showGate()` runs on every boot except
when `restoreSession()` succeeds — and its own comment says that path "has already drawn the
gate." `gate.js:568`: under `file://`, `cloudEnabled()` is false, so `gateStep` resolves straight
to `'profiles'` regardless of returning/new user — never `'signin'`. **There is no code path from
boot to home that skips the gate**, so "signed-in returning user" and "gate showing" are the same
byte cost, not two cases. The one real second axis is hosted (non-`file://`) mode: `cloudEnabled()`
loads the Firebase SDK (`gate.js:11-24`) — external, not in this repo, size not measured here,
and only paid when online. Flagged, not counted, per §9's "never fill a gap."

## 4. Trim plan — every cut named (closes D4)

| Cut | Before | After | Method |
|---|---:|---:|---|
| `ambient-library.mp4` body | 328,896 | 0 | **Both** `<video>` tags (`render.js` `.ambient`, and gate's own copy `gate.js:549-552`) drop `preload="auto"` for `preload="none"`; poster still shows instantly. Round-1 doc trimmed only home's copy — gate's own eager `preload="auto"` tag would have re-fetched the same file regardless. Fetch on `canplay`-deferred idle callback after first paint. Same look (poster is already the first frame), same timings for the video itself. |
| Clepsydra: 8 of 9 poses | 1,107,811 | 127,068 | `clepPreload()` fetches only `poseSrc(clepViewPose())` — `'welcoming'` for the first view (`home`) — at `clepShow()`. Remaining 8 fetched on `requestIdleCallback` after first paint (`setTimeout` fallback). No IntersectionObserver: poses aren't in the DOM as visible `<img>` until swapped, so idle-gating is the only trigger. |
| `herophilus-bust.jpg` | 92,194 | 0 | Native `loading="lazy"` (`render.js:230`) does not reliably defer a near-top image — same idle-gate as poses: `data-src`, real `src` assigned on the same post-paint idle callback, not on scroll. |
| four `mod-*.jpg` | 617,885 | 0 | Same idle-gate (`data-src`), not native `lazy` — the 3-col grid sits in the first viewport on common widths, so visibility-based lazy would not defer it either. CSS-colour placeholder (`m.color`) fills the card until the callback fires. |
| CSS: `components.css`+`views.css` | 123,298 | 25,000 est. | Split into home-critical (cards, nav, gate, dashboard) vs quiz/mock/review/theory-only selectors (class-prefix scan, e.g. `.qz-`,`.rev-`,`.mock-`,`.theory-`); non-home half loads on first navigation to those views. Estimate only — P2 is a design change here, not yet built; ships on remeasurement. `tokens/base/layout/print` (42,199) stay as-is, always loaded. |
| `data/fonts.js` | 129,691 | 45,000 est. | `pyftsubset` (fontTools 4.63, installed) generates a subset covering the glyph set actually used in chrome + UI copy, re-embedded as base64, checked in — offline one-time step, no runtime build. Glyphs **outside** the subset: a second `@font-face`, same family, `unicode-range` covering the complement, pointing at the **full, un-subsetted** file (not base64) — the browser only fetches it if a page actually renders a glyph in that range, per the CSS Font Loading spec's native unicode-range demand-fetch. No visible change either way: same family, same weights, whichever range is asked for. |
| `icon-180.png` | 58,169 | 58,169 | **No cut** — gate medallion, CLAUDE.md §6 fixed design. |
| manifest.js | 3,000 est. | 3,000 est. | Unchanged, compact `{file,global}` pairs + counts. |

Re-add, after-trim: 14,439 (html) + 45,000 (fonts) + 67,199 (CSS: 42,199 kept + 25,000 est split)
+ 277,461 (JS) + 27,280 (modules) + 4,299 (aggregators) + 3,000 (manifest) + 18,040 (icon-96) +
58,169 (icon-180) + 31,940 (poster) + 0 (mp4, deferred) + 127,068 (1 pose) + 0 (bust, deferred) +
0 (mod-jpgs, deferred) = **673,895 B**.

**<1 MB is reached, by ~326 KB, with no branch left over for "gate vs signed-in" — the same
number covers every boot**, since the gate is unconditional (§3). `components+views` split (25,000
est.) and font subset (45,000 est.) are the only unmeasured lines; both ship only after the actual
split/subset files exist and are remeasured, per §3's own rule against claiming an unmeasured cut.
If either estimate runs over, the difference is small against the 326 KB of headroom.

## 5. Tooling, migration, checks (unchanged from round 1, carried forward)

- Validator (`tools/validate/validate.js:7-10`) reads `MANIFEST` instead of parsing
  `index.html`'s script tags; evaluates every listed q/c/t file per subject in its own VM;
  compares declared bytes/counts; checks all 4 ids.
- Boot check (`tools/boot-check/boot-check.js:133,146-150`) evaluates the manifest, injects each
  subject via the loader, awaits settlement, then reads `QUESTIONS`/chapter rows. Success equals
  declared count; a bad path shows failure UI, never a hung route.
- Exit: each subject independently reaches its pre-P2 q/c/theory count; `bankOf(` = 0 outside its
  own definition (`banksOf`, `storage.js:261`); deferred subjects never warn at boot; cold `file://`
  home <1,000,000 B.
- Before ship: export/import `wardround.*`, including `subjStats`, an unloaded-subject answer/
  resume id, and a legacy profile missing `subjStats` entirely. `mergeStates` (`gate.js:202`)
  retains all of it — newer-`updatedAt` wins whole-object, so a partial `subjStats` never merges
  field-by-field. No schema bump: v2, global qid ownership, old eager clients, `wardround.bak.
  <profile>` all unchanged; `subjStats` is additive and defaults to backfill-on-load for absence.

## 6. Decisions (not open questions)

1. Manifest counts are generated and committed at P2 validation time; `counts.json` stays a
   temporary cross-check only (PLAN:145).
2. Late/missing-script fixtures belong to the P2 boot-check/loader harness (PLAN:340-342).
3. Loading timing is not a profile-format concern: state stays v2, no new marker; export/import is
   the recovery route (PLAN:340, 178-179).

## Refuter round 2 — how each defect is closed

| Defect | What was wrong | Fix | Doc section |
|---:|---|---|---|
| D1 (#1) | Manifest read one global per subject; missed `Q_PEDS_EP/EP2`, `Q_OPHTHO_EP/EP2`, all `C_*` (~1,900 q); `THEORY=` reassigned a `const`; `termId` dropped | `{file,global}[]` per kind per subject; in-place `THEORY` clear; `termId` param kept | §1 |
| D2 (#3) | Only cards covered; `vHome` still reads `QUESTIONS` for total/done/acc/due/flagged, so `done=0` reads as first-run for a returning student | Additive `S.subjStats[id]` counters, summed pre-load; cards' manifest-count fix carried forward | §2 |
| D3 (#4) | Clepsydra preload counted as 1 pose (110,842) not 9 (1,107,811); `herophilus-bust.jpg` (92,194) not counted at all | Real floor recomputed at 2,861,102 B pre-trim, both items included, both re-measured from disk | §3 |
| D4 (#6) | Trim plan deferred only home's `<video>`, missing gate's own eager copy; icon-180/CSS/font estimates gave no method; font subset tool unnamed; no design for glyphs outside the subset | Both `<video>` tags deferred; `pyftsubset` named; `unicode-range` fallback designed (no look change); icon-180 kept, explicitly no cut | §4 |
