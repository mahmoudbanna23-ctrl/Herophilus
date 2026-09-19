# B10 bug list — sweep 2026-09-17 (Sonnet, 8 chunks; verified below by Opus refuter)

### c1-1 · loadState() drops all fallback on a cloud read failure
- Line: 2952
- Severity: medium
- Repro: with Firebase configured, make `window.storage.get(key)` throw (network blip). `loadState()`'s outer `catch` sets `storageMode='cloud'` and returns immediately, never falling through to the second `try` block that reads `localStorage`/`bakNewest()`. User opens the app after a transient network error and sees a fully blank profile (no answers, no schedule) for that session even though a local snapshot exists.
- Why: `}catch(e){if(entry===profileLoad&&me===p)storageMode='cloud';return}` exits before the local/backup fallback ladder that follows it, and also mislabels the mode as `'cloud'` despite the read having just failed.
- Fix idea: on catch, fall through to the local/backup ladder (set `mode='local'`) instead of returning early.

No other bugs found in 2906-3600 for the checked categories: no `bankOf(` misuse (only its definition and the one correct use inside `banksOf`), no `var(--ink)` outside `color:` in this range, no z-index/stacking code here, no unbounded/leaked timers (only one-shot `setTimeout`s, cleared before reuse in `toast()`), no listener bound twice (the single `matchMedia` listener runs once at parse time), cloud-write queue in `save()` correctly serializes per key.


# Bugs — chunk c2 (app\index.html lines 3600-4250)

### c2-1 · Inline markdown table row misclassified as a separator when a cell holds a bare "-"
- Line: 3654
- Severity: medium
- Repro: write theory body/explanation markdown with a pipe table row that uses `-` as a
  "not present"/placeholder cell, e.g. `| Sign | Left | Right |\n| Pain | + | - |`. Render it
  through `mdBlock()` -> `mdTable()`.
- Why: `isMdRule` is `/^[|\s:-]+$/.test(t)&&t.indexOf('-')>=0` — a data row built only from `|`,
  space, `:` and `-` characters (no letters/digits) matches this and is silently dropped by
  `mdTable`'s `rows.filter(r=>!isMdRule(r))`, which also then promotes the following row into the
  header. This is the same corner-cell defect the surrounding comments already fixed once, just
  triggered by a dash cell instead of a blank one.
- Fix idea: require the row to also start with a real separator token (e.g. `-{3,}` or `:-+:`
  per cell) rather than accepting a lone `-` anywhere in an all-punctuation row.

No other bugs found in 3600-4250 matching the brief's categories (crash, silent data loss,
stranded boot, leaked timer, doubled listener, uncleared state, corrupting write, wrong
z-index, listener surviving a view change, async race). `chooseTerm`/`activateTerm` close the
modal on every path; `bkInit`/`bkMeasure`/`bkPaint` have no listeners or intervals; `loadSDK`
caching self-heals once `window.firebase` is set; no `bankOf(` or `var(--ink)` misuse in range.
Owner-reported bug 1's actual state-loss point (redirect result / gate) sits at lines 4251-4846,
outside this chunk — only its trigger (`signInGoogle`, 4226-4250) is in range and looks correct.


# Bugs — chunk c3 (app\index.html lines 4250-4900)

### c3-1 · Google sign-in reverts to the sign-in step when the SDK reload after redirect is slow
- Line: 4469
- Severity: high
- Repro: On a mobile/PWA (standalone) device, tap "Sign in with Google" -> `signInGoogle()` uses
  `signInWithRedirect` (line 4233) since `isStandalone()` is true -> full navigation to Google ->
  redirect back to the app. `boot()` (outside range, 8270-8295) calls `restoreSession()`. If the
  network is slow enough that `initCloud()`'s `loadSDK()` misses its 8 s timeout (a real condition
  right after a cross-origin OAuth round trip), `ok` is false.
- Why: `restoreSession()` does `const ok=await initCloud(); if(!ok)return false;` (lines 4468-4469)
  — this returns BEFORE ever calling `firebase.auth().getRedirectResult()` (line 4472), so a
  completed sign-in is silently discarded. `boot()` then falls through to the bare `showGate()`
  call (line 8293), whose default in `showGate()` (line 4706) is
  `gateStep=step||((fbUser||!cloudEnabled())?'profiles':'signin')`. `fbUser` is still null because
  `afterSignIn()` (which sets it, line 4253) was never reached, so the gate defaults to `'signin'`
  even though Google auth actually completed server-side — the user sees step 1 again with no
  error, no retry, and no memory that a redirect was pending.
- Fix idea: before calling `signInWithRedirect`, set a flag (e.g. `localStorage` or a `wardround.*`
  device key) that a redirect is pending; on boot, if that flag is set, retry `initCloud()`/`
  getRedirectResult()` (or extend the timeout) instead of giving up after one failed SDK load, and
  clear the flag once `afterSignIn()` runs.

No other bugs found in 4250-4900 for the categories in scope (bankOf, storage-key renames,
z-index/stacking, `--ink` misuse, timers, listeners, races) — `afterSignIn`/`enterProfile`/
`showGate`/gate steps otherwise pass `'profiles'` explicitly and correctly once `fbUser` is set.


### c4-1 · Photo upload crashes if profile is saved before FileReader finishes
- Line: 5009
- Severity: medium
- Repro: Open "New profile" or "Edit profile", click "Upload a photo", pick a file, immediately click "Save" before the image finishes loading (small delay is enough on a slow device/large photo). `saveProfile()` (line 5025) sets `draft=null`. When the pending `FileReader`/`Image` `onload` callback then runs, `pfUpload`'s handler executes `draft.av={t:'p',...}`.
- Why: `draft` is a single shared module-level variable (`let draft=null`, line 4952) that the async upload closure captures by reference, not by value; `saveProfile()` nulls it out while the read is still in flight. `draft.av.c` on line 5009 throws `Cannot read properties of null` uncaught inside the `img.onload` handler.
- Fix idea: capture the target draft object at upload start (`const d=draft;`) and guard `if(d!==draft)return;` before writing, or ignore the callback once `draft` is null/changed.

### c4-2 · In-flight photo upload can attach to the wrong profile or reopen a dismissed editor
- Line: 5009
- Severity: high
- Repro: Open the editor for profile A, choose "Upload a photo", then before it finishes either (a) click "Cancel" and open the editor for profile B, or (b) call `editProfile(B)` directly (e.g. via "Manage profiles"). When A's read finishes, `pfUpload`'s callback fires against whatever `draft` currently holds.
- Why: same shared `draft` reference as c4-1 — `editProfile()` (line 4953-4955) overwrites `draft` with a new object for the newly opened profile, so a late `draft.av=...` write (line 5009) silently attaches profile A's photo to profile B's draft, or reopens the editor modal via `drawProfileEditor(isEdit)` (line 5010) after the user already navigated away/cancelled.
- Fix idea: same as c4-1 — bind the callback to the specific draft object it started with and no-op if that draft is no longer the live one.


# c5 — app\index.html lines 5600-6300

No bugs found in 5600-6300.

Checked: `bankOf(` misuse (none in range — only definition of `banksOf` at 3164, outside range),
`var(--ink)` misuse (no hits in range), timer leaks (`examStartTick` self-clears via
`examStopTick()` before every `setInterval`, both top-level `visibilitychange` listeners
registered once at parse time, not per-render), listener duplication (`stemEl`/`caseInput`
listeners are added to freshly-built DOM each render via `innerHTML`, old nodes are discarded,
no accumulation), state never cleared (`Q.did` is reset to `{}` on every new set at lines 3509,
5413, 5490, 5554 — confirmed, not stale), storage-write corruption (exam `pick()` writing
directly into `S.answers` mid-paper is disclosed to the user verbatim in the discard-paper
confirm text at line 5477: "Answers already recorded in your progress remain" — deliberate, not
silent), races (none found within traceable calls).

Traced outside range to confirm: `Q.exam=` call sites (4700, 5478, 5489, 6088, 8186) and
`examStartTick`/`examStopTick` call sites — all self-consistent.

Not traced: `saveResume()`, `scheduleSRS()`, `gradeCase()`, `moveQ()` internals — defined outside
5600-6300 and not needed to resolve anything suspicious inside the range.


### c6-1 · addDay() never sorts the schedule array, breaking date order and catch-up routing
- Line: 6983
- Severity: medium
- Repro: Open Study schedule, edit mode, add a day with a date earlier than an existing day
  (the `#newDate` input defaults to `nextFreeDate()` but is a native date picker the user can
  set to anything). The new day appears at the bottom of the list instead of in chronological
  order; if any day already has a "missed" mark, `buildSchedule()`'s `earliest=missed[0].date`
  and its slot walk (`rows.forEach(r=>{if(r.date<=earliest)return;...})`) both assume `rows` is
  already date-sorted, so catch-up slots can be picked from the wrong side of the plan.
- Why: `addDay(){ ... s.push({date:v,rest:false,items:[]}); ... }` (line 6989) always appends;
  nothing in `activeSchedule()`, `buildSchedule()`, or `vSchedule()`'s render loop sorts by
  `date` before use.
- Fix idea: sort `s` by `.date` after the push in `addDay()` (or sort `rows` at the top of
  `buildSchedule()`).

No other bugs found in 6300–6950 matching the brief's categories (crash, silent data loss,
stranded boot, leaked timer, doubled handler, uncleared state, corrupting write, `bankOf(` use,
wrong z-index, surviving listener, async race). Checked: highlighter paint/carve/merge logic
(6303–6402, sound), `weakChapters`/`bankOn` (6404–6451, correctly uses `bankOn`, not `bankOf`),
mock-exam pool construction (6574–6630, `bankOn` applied consistently in both `vMock` and
`runMock`, and via `qsInModule` in the chip counts), session tick painters (6633–6771, no timers
declared in this range, `paintSessionLive` correctly gated on `view.name==='session'`), and the
rest of the schedule editor (6774–6950, `delItem`'s index re-keying is correct).


# c7 findings — app\index.html lines 6950-7600

### c7-1 · Clepsydra idle-chatter loop ignores prefers-reduced-motion
- Line: 7695
- Severity: medium
- Repro: enable OS reduced-motion, open the app, leave a browsing view (not quiz/mock/review) idle 4+ minutes with Clepsydra on and unmuted.
- Why: `clepGlitchLoop()` (7585) and `clepShiftLoop()` (7711) both `return` early on `clepReduced()`, but `clepIdleLoop()` (7695) has no such check — it keeps firing every 240000ms and calls `clepSay()` regardless. Known fact states reduced motion must stop every loop, JS timers included.
- Fix idea: add `if(clepReduced())return;` to `clepIdleLoop()` like its siblings.

## Hitbox measurement (not a bug)
`.cl-body` (the drag/click target, `clepDrag` bound on it, `role="button"`) is `width:112px;height:112px` desktop, `84px;84px` at the mobile breakpoint (line 2532, 2739). `.cl-fig` inside it is `position:absolute;inset:0;width:100%;height:100%;object-fit:contain` (2535), and the source PNGs are a square 360x360 canvas. Since both container and source are square, `object-fit:contain` draws the image edge-to-edge with no letterboxing — the clickable box and the visible figure are the same pixels, no extra margin either side.

No other bugs found in 6950-7600 (schedule helpers 6959-7020, Rescheduled view 7023-7077, search 7085-7197, Clepsydra mount/drag/pose/speech/glitch 7199-7600). Checked: no `bankOf(` misuse, no `var(--ink)` misuse, resize/touch/pointer listeners are all bound once behind `clepMount`'s `dataset.built` guard, `doSearch.all` is reset on input (8250, outside range, traced as caller), timers (`swapT`,`hideT`,`glT`,`settleT`) are each cleared before reassignment.


### c8-1 · Backup restore leaves session tick stopped
- Line: 8079
- Severity: high
- Repro: start a study session, let a backup snapshot save mid-session, restore that snapshot (or any snapshot holding an active `sess`) while no session is currently running, so `sessStartTick()` never fires.
- Why: `bakRestore()` sets `S` and calls `save(); closeModal(); render();` but never checks `sess()` to call `sessStartTick()`/`sessStopTick()`, unlike `importData()` (line 8187: `if(sess())sessStartTick(); else sessStopTick();`) and `enterProfile()` (line 4883). The restored session's clock and phase auto-advance (`advancePhase` via the 1s tick) never run until some other action happens to call `sessStartTick()`.
- Fix idea: mirror importData's line 8187 pattern (and the `Q.exam` reset at 8186) inside `bakRestore()`.

### c8-2 · Focus minutes double-counted when a session's last cycle completes
- Line: 7841
- Severity: high
- Repro: run a session to its final cycle (via timer expiry or "skip"); check the reported minutes in the completion toast / `sessLog` entry.
- Why: `advancePhase()` adds `phaseElapsed()` into `s.focusMs` at line 7842, then when `s.cycle>=s.plan.cycles` calls `endSession(true)` at line 7843 with `s.phase` still `'focus'`. `endSession` computes `sessFocusMs(s)` (line 7789) as `(s.focusMs||0)+(s.phase==='focus'?phaseElapsed():0)`, adding the same elapsed span again, so the logged/reported focus time for the final block is roughly doubled.
- Fix idea: set `s.phase` to something other than `'focus'` (or zero `s.lost`/reset `phaseStart`) before calling `endSession(true)`, or have `endSession` skip re-adding `phaseElapsed()` when it was just folded into `focusMs`.

### c8-3 · Idle-chat loop not gated by reduced motion
- Line: 7695
- Severity: low
- Repro: enable `prefers-reduced-motion: reduce`, leave the app idle 4+ minutes on a non-still view.
- Why: `clepShiftLoop` (7713) and other loops check `clepReduced()`, but `clepIdleLoop` only checks `CLEP.on` — the brief's known fact says reduced motion "must stop every loop, JS timers included."
- Fix idea: add `||clepReduced()` to the guard at line 7699/7713-equivalent in `clepIdleLoop`, if idle chatter is meant to count as a stoppable loop; otherwise this is a non-issue — unsure.



## Refuter verdicts 2026-09-17 (Opus)

Read-only re-check of every cited line plus its callers. 7 confirmed, 2 wrong, 1 partly wrong.

- c1-1 loadState catch — CONFIRMED, medium right. Line 2952 does exit before the local/bakNewest ladder and mislabels the mode.
- c2-1 isMdRule — WRONG AS WRITTEN, low not medium. The quoted row `| Pain | + | - |` cannot match: `/^[|\s:-]+$/` rejects the letters and the `+`. Only an all-punctuation row like `| - | - |` is dropped. Latent trap, not a live defect.
- c3-1 redirect lost when initCloud fails — CONFIRMED but INCOMPLETE. `if(!ok)return false` (4469) does precede `getRedirectResult()` (4472), and boot 8293 then defaults to 'signin' (4706). But it needs the 8 s loadSDK timeout to expire, so it does not explain the owner's normal-network report. See sign-in pass.
- c4-1 upload vs saveProfile — CONFIRMED, medium. `saveProfile()` nulls `draft` (5026), the captured `img.onload` reads `draft.av.c` (5009) and throws.
- c4-2 upload attaches to wrong draft — CONFIRMED, severity overstated (medium). Same root cause as c4-1; one fix covers both.
- c6-1 addDay never sorts — WRONG. The sweep quoted the push at 6989 and stopped one line short: 6990 is `s.sort((a,b)=>a.date<b.date?-1:1);`, before `saveSchedule()`. No defect.
- c7-1 / c8-3 clepIdleLoop ignores reduced motion — CONFIRMED, one bug filed twice. 7695-7704 checks only CLEP.on/muted/mini/STILL_VIEWS; siblings 7585 and 7712 carry `clepReduced()`. Low, not medium: it emits speech, not movement.
- c8-1 bakRestore leaves the tick stopped — CONFIRMED, severity overstated (medium). Only the start direction fails: the tick self-stops via `if(!s){sessStopTick();return}` (7877) and visibilitychange (7894) restarts it. No time lost — phases are timestamps. It also misses the `Q.exam=null` reset 8186 pairs with.
- c8-2 final-cycle focus double-count — CONFIRMED, high is fair. 7841 folds `phaseElapsed()` into `focusMs`, 7842 calls `endSession(true)` with phase still 'focus' and phaseStart untouched, so `sessFocusMs` (7789) adds the span again — written permanently into `S.sessLog`.
- c5 "no bugs" — accepted, not independently re-swept (outside the per-bug remit).

### Hit-box re-measurement (c7) — sweep half right

Measured from CSS, not from the sweep's summary.

| Thing | Desktop | max-width:700px |
|---|---|---|
| `.cl-body` (drag target, clepDrag bound here, line 2532/2739) | 112 x 112 | 84 x 84 |
| padding / border | none | none |
| `.cl-fig` (2535) | inset:0, 100%/100%, object-fit:contain | same |
| PNG canvas | 360 x 360 square | same |
| Her figure inside that canvas (comment, 2526) | ~83% | ~83% |
| Visible figure on screen | ~93 x 93 | ~70 x 70 |
| Dead transparent margin inside the target | ~9.5px per side | ~7px per side |

`object-fit:contain` letterboxes nothing — both boxes are square, so the sweep is right about the element. But the artwork fills only ~83% of its own canvas, so the pointer target extends ~9.5px desktop / ~7px mobile beyond her visible edge on every side. Target bigger than she looks: the harmless direction. Two things the sweep missed: `.cl-stage` runs `clBob` (`translateY(-4px)`, 2588), so the drawn figure drifts up to 4px out of its static hit box; and the `drop-shadow` filters on `.cl-fig` paint outside the box but never widen the hit area.

Tool row: `.cl-tool` is 23 x 23 desktop, visible only on hover/focus-within (2666-2672) — under 44px, but pointer-only. Under `@media(hover:none)` (2681-2690) it is 36 x 36, `gap:8px`, with a 44 x 44 `::after` centred by `translate(-50%,-50%)`. 36 + 8 = 44, so the invisible targets tile edge to edge without overlapping. The comment's arithmetic checks out.

### Extra pass — the sign-in bug has a second cause, likelier than the first

c3-1's timeout story is real but cannot be the whole explanation: on a normal connection loadSDK resolves well inside 8 s and initCloud returns true.

1. Ordering is fine. `restoreSession()` calls `getRedirectResult()` (4472) before installing `onAuthStateChanged` (4476), and an empty `catch(e){}` (4474) falls through to that listener, which has its own 12 s fallback (4484). Persistence is LOCAL (4198). Nothing broken there.
2. Likely real cause — authDomain is a different origin from the app. `authDomain:"ward-round-e4822.firebaseapp.com"` (2915) while the app serves from herophilus.pages.dev, on compat SDK 10.12.2 (4147-4149). `signInWithRedirect` completes through a cross-origin iframe on that authDomain; browsers partitioning third-party storage (Chrome partitioning, Safari ITP) block it, so `getRedirectResult()` resolves with no user and nothing persists to the app's own origin. `onAuthStateChanged` then fires null, boot reaches bare `showGate()` (8293), fbUser is null, 4706 picks 'signin'. Same symptom, no network involvement, reproducible on a fast link. Known Firebase-documented breakage when authDomain is not the serving origin. UNVERIFIED — inferred from the config and SDK version, not reproduced in a browser here.
3. Which path he is on matters. The redirect branch only runs when `isStandalone()` is true (4232) — installed PWA / home-screen icon. A normal desktop tab uses `signInWithPopup` and awaits `afterSignIn` (4238-4239), which sets fbUser and calls `showGate('profiles')`. If he reproduces this in a plain tab, a third cause is open: the popup path's silent exit `if(/popup-closed|cancelled/i.test(m))return;` (4243) swallows the error with no toast, leaving the gate on step 1 — exactly the reported symptom.
4. Bare `showGate()` audit, 13 call sites: 4287, 4532, 4550, 4554, 4902, 4928, 4992, 5030, 5050, 5065, 8293. None wrong in isolation. 8293 is only as good as `fbUser`, and fbUser is set in exactly one place, `afterSignIn()` (4253). Any path completing Google auth without reaching `afterSignIn()` lands on step 1 — the structural weakness behind all three causes.

ESCALATION, not a verdict: settle which cause is live before anyone writes a fix. Ask the owner whether it happens in the installed app, a normal tab, or both, and whether the Google chooser completes or vanishes. Cause 2 is a hosting change (custom authDomain), cause 3 is a toast on the dismissed-popup branch, c3-1 is the pending-redirect flag. Three different fixes; only two are in the inline script.

## Fixes 2026-09-19

- c1-1: fixed, `loadState()`. Catch now falls through to the local/backup ladder (`mode='local'`) instead of returning early on a cloud read failure; stale-call guard kept.
- c4-1: fixed, `pfUpload()`. Captures `const d=draft` at upload start; `img.onload` no-ops if `draft` has since changed, so it can no longer write onto a nulled draft.
- c4-2: fixed, `pfUpload()` (same guard as c4-1). The captured-draft check also stops a late upload from attaching to a different profile's draft or reopening a dismissed editor.
- c7-1 / c8-3: fixed once, `clepIdleLoop()`. Added `clepReduced()` to the guard so the idle-chatter timer stops rescheduling under reduced motion, matching `clepShiftLoop`/`clepGlitchLoop`.
- c8-1: fixed, `bakRestore()`. Added the `Q.exam` reset and `sessStartTick()`/`sessStopTick()` pairing mirrored from `importData()`.
- c8-2: fixed, `advancePhase()`. Sets `s.phase=''` before calling `endSession(true)` on the final cycle so `sessFocusMs()` no longer re-adds the just-folded `phaseElapsed()`.
