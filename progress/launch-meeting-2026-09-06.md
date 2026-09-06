# Launch board — minutes, 2026-09-06

MSN Mode 3 team talk, run as the closing gate of the `sama` pass on the launch plan
(`~/.claude/plans/attention-attention-pleaseeeeeee-herophi-purring-crystal.md`, Step 0).

**Seats:** Gemini 3.6 Flash · Groq (gpt-oss-120b) · grok · Fable · Codex (insider, repo access).
**Manager:** Claude. Two rounds. Round-1 proposals were pooled, stripped of attribution and
shuffled before round 2. Every claim below was checked against the files; where a seat was wrong
it is recorded as wrong.

**Standing warning, and it earned its keep twice today:** *unanimity is not evidence, it is
correlated training data.* Three claims that several seats agreed on were false, and the one
finding that mattered most came from a single seat.

---

## Round 1 — five seats, blind, from a genericised brief

Every seat produced a ranked attack, a build order and a stated ceiling. Four of five voted **(b)
fix the mock copy, build the timed mode later**, costing (a) at "4–8 hours", "1–2 focused days",
"a second app".

### The manager's verification pass falsified three shared claims

| Claim | Seats | Verdict |
|---|---|---|
| "Sign-in clobbers local progress / the merge is unspecified" | 2, both ranked top-3 | **False.** `mergeStates()` (`app/index.html:3648`) reconciles answers per question id on their own `at`, and object-merges `srs/hl/flags/conf/days/sched`. `pullCloud()` calls it before saving. |
| "Writes are not debounced" | 3 | **False.** `schedulePush()` (`:3685`) already debounces at 1200 ms. |
| "The user document will breach Firestore's 1 MiB ceiling" — one seat proposed a sub-collection refactor for it | 1 | **Refactor rejected.** Measured with the real arrays (`scratchpad/docsize.js`): a fully-answered, fully-rated, tenth-flagged state with an 80-entry session log serialises to **539,101 bytes — 51% of the limit**. |

### What round 1 got right that nobody had ranked

The verification pass found six defects at line. Only one seat had named any of them.

---

## Round 2 — the seats argue the verified findings

### The six defects put to the board

- **B1 — cross-profile cloud overwrite.** `docRef()` (`:3646`) always targets the signed-in UID;
  `pushCloud()` (`:3695`) serialises whatever `S` is current; `schedulePush()` (`:3685`) checks
  only `if(!fbUser)`. Signed in → pick a local profile from the picker → answer one question →
  your Google account's document is overwritten with the other profile's progress. Three taps,
  ordinary flow, no attacker. **Highest severity found.**
- **B2 — the boot check cannot report a walk failure.** `measure()` copies `window.__errs` into
  `r.errs` *before* the module walk (`tools/boot-check/boot-check.js:92`); the walk's own handler
  pushes into `window.__errs`, which nothing reads again (`:108`); the exit code tests the earlier
  snapshot (`:152`). A module walk that throws prints "console errors: 0" and exits 0.
- **B3 — the mock pre-answers itself.** `vQuiz` `:4561` stamps a previous answer onto an unseen
  question and marks it shown. Correct in practice, wrong in the mock, which shuffles from
  `QUESTIONS` at large; `finishSet()` (`:4671`) then scores from global `S.answers`.
- **B4 — an identical re-answer never advances SRS.** The write-if-changed guard at `:4643` skips
  the mastery case.
- **B5 — correct-but-Unsure never enters the review deck.** `inDeck()` (`:2970`) admits wrong
  answers and correct-but-Guessed; the toast at `:4660` promises the middle rating comes back.
- **B6 — no history integration.** Zero `pushState`/`popstate`/`hashchange` in 6,362 lines; `Q`
  (`:4383`) is memory-only.

### Codex audited the manager, and the manager was wrong

Codex is the only seat with repository access. Its job was to check the manager's findings, not
agree with them. It found four errors in the brief the manager wrote:

1. **"`pick()` is the single commit seam" — FALSE, and it was the load-bearing claim for the
   mock-exam argument.** `pick(i)` at `:4637` is `{if(Q.shown)return;Q.sel=i;render()}` — it only
   selects. Grading lives in **`reveal()` (`:4638`)**, and **`revealCase()` (`:4428`) writes
   answers and calls `scheduleSRS()` independently at `:4437`**. There are two seams, not one.
   Verified by the manager: confirmed exactly as stated.
2. **The B1 pull gate checks the `g:` prefix, not the UID** (`:3994`). Signing in as account B and
   picking account A's leftover cloud profile pulls B's document into A's local state *before any
   question is answered*. B1 is broader than the manager stated.
3. **"Cannot overflow 1 MiB" is not supported.** Highlights store offset/colour ranges, not free
   text — but free-text **case answers are stored verbatim in the answer record with no length
   limit** (`:4436`), so the payload is not bounded by question count. The measurement stands as a
   measurement; the guarantee does not.
4. **Line-number corrections**, all confirmed: `finishSet()` 4671 not 4669 · `openJump()` 4695 not
   4470 · `advancePhase()` 6059 not 6053 · the B5 toast 4660 not 4651 · B4's guard belongs to
   `reveal()`, not `pick()`.

Codex also ran the manager's proposed B1 fix rather than arguing about it — see below.

### The proposed B1 fix was falsified by execution

Put to the board: change `schedulePush()`'s guard to
`if(!fbUser||!me||me.id!=='g:'+fbUser.uid)return;`.

Codex loaded the real function into a VM with a stubbed Firestore, scheduled a push as the Google
profile, switched to a local profile, and fired the queued callback:

```
Proposed B1 guard, stale timer: [{"uid":"A","state":{"answers":{"LOCAL":{"pick":1}}}}]
```

**The patch does not fix the bug.** The guard returns *before* `clearTimeout`, so the timer armed
under the Google profile stays armed, fires 1200 ms later, and serialises whatever `S` has become.
Four seats predicted this hole by reasoning; one proved it.

Two further holes, both confirmed by the manager against the source:

- **`enterProfile()` sets `me=p` before it swaps `S`** (`:3969`–`:3975`). Any `me`-based guard
  passes inside that window and uploads the *previous* profile's state under the new identity.
- **`pushCloud()` writes `state` as one JSON string with `{merge:true}`** (`:3695`). Field-level
  merge does nothing for a single blob, so two devices overwrite each other between pulls. Logged
  as **B7**; `pullCloud()` also pushes directly, bypassing the debounce entirely (`:3682`).

**Accepted fix shape** — cancel first, check second, check again at fire time, and put the identity
test where every caller inherits it (`docRef()`, per Fable), plus flush-and-cancel before
`enterProfile()` reassigns `me` and before `signOut()` awaits.

### The mock-exam re-vote

| Seat | Round 1 | Round 2 | Why |
|---|---|---|---|
| Gemini | (b) | **(a)** | The building blocks exist; its 4–8 h estimate assumed building them |
| grok | (b) | **(a)** | "`pick()` is one seam, not a second app" — reasoning the manager had given it, and which Codex then falsified |
| Fable | (b) | **(a), minimal** | "B3 and (a) are the same edit" — the strongest argument offered all day |
| Groq | (b) | (b) | Misread section C as saying the exam mode already exists whole. Discounted. |
| Codex | (b) | **(b)** | Named six specific unbuilt pieces rather than an estimate |

**Manager's decision: build (a), scoped by Codex's objection list.** The vote is 3–2 for (a), the
owner had already ruled "build the real thing today", and **(b) is not the safe option** — B3
forces the mock screen to be edited today under either vote. But Codex's objection is not "don't
build it", it is "here are six things that are not built", and that list is now the specification:

1. A mode flag on `Q`, persisted into `S` the way `S.sess` already is.
2. An answer buffer — **`navQ()` (`:4662`) sets `Q.sel=null;Q.shown=false` on every move**, so free
   navigation currently discards the answer. Exam mode restores from the buffer instead.
3. `reveal()` suppressed in exam mode; `:4561`'s pre-answer branch suppressed with it.
4. `openJump()`'s grid (`:4695`) shows answered/not-answered only — the practice grid colours by
   correct/wrong and would leak the marking.
5. An exam clock of its own. **`S.sess` must not be reused**: `advancePhase()` (`:6059`) moves to a
   *break* at zero, not to submission. The reusable part is the pattern — `phaseElapsed()` is
   `now - start - lost`, six lines, and storing timestamps is what buys reload survival.
6. Submit → commit the buffer through `reveal()`'s logic, **each pick stamped with its own click
   time, not the finish time** (Fable: a batch stamped at finish beats genuinely newer answers from
   another device inside `mergeStates()`).

**Scope decision: exam mode is MCQ-only.** Excluding `type:'case'` removes `revealCase()` from the
picture, which restores the single-seam property the whole plan assumed. Free-text cases graded on
concept keywords do not belong in a timed paper anyway.

**Fallback, decided in advance on evidence not optimism:** if the clock is not solid when
everything else is ready, ship exam mode *untimed* with copy that says so. The buffer, the
suppressed reveal and the results screen are the value; the countdown is the garnish.

### Q4 — what the whole board was blind to

Four seats converged, independently, on the same answer, and it is worth recording because it is a
standing lesson rather than a launch item:

> The board inventoried **whether a function exists** — merge, debounce, timer, document ceiling —
> and found precisely the textbook Firebase items this codebase had already handled. It never
> traced **re-entry, identity and lifecycle**: the ordinary second action taken against state that
> is already dirty. B1 is pull-gated but push-ungated. B2 is a harness sampling before the walk it
> claims to judge. B4 is a write-if-changed guard skipping the mastery case. B6 is the OS back
> button against memory-only state. **None of them looks like a missing button in a feature list.**

**The probe the board agreed on:** negative-path fault injection with side-effect counting. Wrap
the four sinks — Firestore write, `localStorage` save, `scheduleSRS()`, history — in counters, then
walk one dirty-state scenario: inject a throw during the module walk, sign in, switch to a local
profile, answer once, answer the same option again, press back, sign out with a timer pending.
Assert the expected count per sink after each step. B2 fails at step one, B1 at step four, B4 at
step five, B6 at step six.

The rule behind it, which now applies to this project generally: **for every guard and every check,
deliberately trigger the condition it exists to catch and confirm it fires. A check that has never
been seen failing is not evidence.**

---

## What the board could not see

Recorded so nobody re-argues these from an armchair:

- **Google OAuth consent screen status.** If the project is still in *Testing*, it is capped at 100
  named users and everyone else gets "Access blocked". A launch-killer, owner-only.
- **Firebase authorized domains** and the **Firestore rules as actually published.** The repository
  contains suggested rule text inside a setup helper (`:3740`); that proves nothing about the
  deployed configuration.
- **WebKit's ~7-day eviction** of script-writable storage on iOS without first-party interaction.
  Cited from a seat's memory, not fetched. It matters here: the exams are 11 and 16 days out, and
  `wardround.bak.*` shares the store with the live key, so a signed-out iPhone student could lose
  both. Treated as a reason to push sign-in, which costs nothing either way.
- **Netlify rollback for drag-and-drop deploys.** One seat asserts there is nothing to roll back to.
  The five-minute mitigation — zip the exact folder before dragging — removes the dependency, so
  take it regardless of who is right.
- **Whether Android Back actually exits the site.** The source finding (zero history integration) is
  solid; the browser outcome needs a device, not a grep. Codex was right to mark the manager's
  phrasing overstated.

## Team sheet

| Block | Seat | Why that seat |
|---|---|---|
| B1/B7 sync identity + flush-and-cancel | **Manager**, Codex verifies by execution | Codex has repo access and has already built the VM harness that falsified the first patch |
| B2 harness repair, then prove it fails | **Manager** | One line, and it is the instrument every later fix is checked with — so it goes first |
| Exam mode (a), MCQ-only | **Manager** | Single-file 6,362-line app; no seat but the insider can even read it |
| The lock across 14 surfaces | **Manager** | |
| Trimmed build script | **Manager** | |
| Mobile pass at three viewports | **Manager** (headless Chrome) | |
| Firestore rules, authorized domains, OAuth consent screen, Netlify | **Owner** | Console access; cannot be delegated and must not be guessed at |

## Order of work, as amended by the meeting

**Today, and in this order** — B2 first because it is the instrument:

1. **B2** — move the error capture after the walk; then deliberately inject a throw and confirm the
   exit code is nonzero. ~10 min. ✅ **DONE — commit `309d797`**, verified with `--selftest`:
   injected fault exits 1, normal run exits 0 at 5,922 questions.
2. **Firestore rules** — owner publishes. Until they are live, B1 is not "you overwrite your own
   account", it is "anyone can write anyone's document". ~15 min, owner. **Status unknown — owner
   console, not verifiable from the repo.**
3. **B1 + B7** — identity test in `docRef()`, cancel-then-check in `schedulePush()`, flush before
   `enterProfile()` reassigns `me` and before `signOut()`, exact-UID test on the pull. Then the
   three-tap manual test. ~60–100 min. ✅ **DONE, verified from disk 2026-09-06** — `currentCloud(c)`
   tests the auth generation, the uid and the profile id together, and `mergeStates` merges by each
   key's own `.at` across both `answers` and `resumeByChapter`.
4. **The lock** — Ophthalmology and Neuropsychiatry across all 14 surfaces. ✅ **DONE, verified from
   disk 2026-09-06** — `LOCKED_MODULES=['ophtho','neuropsych']`, `isLocked`, the `.mod-card.locked`
   rules, the "Coming soon" badge on the module card and the chapter list, and the gate tagline. The
   trimmed build also drops the locked modules' questions and theory: boot-check reads 4,049
   questions and 81 theory chapters, which is 5,922 − 1,873 (ophtho 1,598 + neuro 275) and
   153 − 72 exactly.
5. **Exam mode**, scoped as above. ✅ **DONE, commit `38ac0e0`, probed live 2026-09-06** — no
   fallback needed, the clock did not slip. `startQuiz()` takes a fifth `exam` argument carrying the
   end time and the picks; the header shows a countdown at ~1.2 min a question that turns amber under
   two minutes, red under thirty seconds, and hands the paper in at zero. Nothing is revealed during a
   paper, and that costs nothing to enforce because the whole verdict/explanation/confidence block
   lives inside `if(Q.shown)` and a paper never sets `Q.shown` — there is nothing to find with
   devtools open. Free-text cases are excluded from the pool; they have their own reveal path and
   would have been a hole in the promise.

   **The scoring bug found while building it, which nobody had ranked:** `finishSet()` marked the
   paper with `Q.ids.filter(isAnswered)`, and `isAnswered` reads `S.answers`, which holds every
   attempt from every earlier session — so a paper drawn from an already-revised chapter was marked
   partly on last week's work, and a question left blank still counted as answered if it had ever
   been answered before. `examFinish()` scores from `Q.exam.picked` over the whole paper, so a blank
   counts as wrong. **The jump grid leaked the same way and worse**, colouring squares green and red
   from `isCorrect` mid-paper; during a paper it now shows answered-or-not only, drops "First wrong",
   and counts "next unanswered" from this paper rather than the student's history.

   Verified by driving the real functions in a live headless page — 36 checks, all passing, including
   a question deliberately pre-marked as answered-in-an-earlier-session, correctly left out of the
   mark.
6. **B5 copy** — two minutes, and the toast currently lies. ✅ **DONE, verified from disk
   2026-09-06** — `inDeck()` now admits `conf===0||conf===1`, `setConf()` pins the rung rather than
   inheriting it (so "unsure" can demote a question `scheduleSRS` has already promoted), and the
   three toasts say what actually happens: back tomorrow, back in three days, left on the normal
   schedule.
7. **Mobile pass**, then the trimmed build. ✅ **Mobile pass DONE** — `tools/boot-check/mobile-check.js`
   reports PASS with no view overflow at any width, across every view. **Trimmed build: script done,
   not yet run for shipping** — `tools/build-launch.js` is committed (`9d59634`) and reads correctly;
   no `dist\` has been produced for upload yet.

## Superseded 2026-09-06 — the deferral list is overturned

**Owner ruling, verbatim: "Don't leave any thing for next weak."** Nothing in this project is being
left for later. The paragraph below is kept as the historical record of what this meeting first
proposed deferring — it no longer describes the plan.

> *Original text, now overturned:* "Cut to next week, deliberately: B4 and B5's behaviour (they
> touch the same seam the exam commit uses — let it settle first), B6 history integration, the
> write-interval raise plus a `visibilitychange`/`pagehide` flush, the payload size warning, an
> "Export progress (JSON)" button, and a first-sign-in "bring this profile into your account"
> merge — which the B1 guard makes necessary, because the accidental route it closes was the only
> migration path that existed."

**Current status of each item, checked against the repo 2026-09-06 — none of it is scheduled for
later; each is either today's work or a stated drop:**

- **B4** (identical re-answer never advancing SRS) — **in scope for today.** `reveal()`
  (`app/index.html:4694`) now calls `scheduleSRS()` unconditionally on every submission with no
  guard visible; this may already be moot, but it has not been confirmed fixed by a named commit,
  so it stays on today's list until someone checks it off.
- **B5's behaviour** (correct-but-Unsure never entering the review deck) — **in scope for today.**
  Verified still broken (see item 6 above). It shares the B1/B7 identity seam only in copy, not in
  code, so there is no reason left to hold it for the exam-mode commit to "settle first" — do it
  today alongside the copy fix.
- **B6** (history integration / back-button) — **status: genuinely not being done today.** This is
  a real feature build (`pushState`/`popstate` wiring across the whole app), not a small fix, and
  nothing on disk suggests it has been started. Named here as out of scope for the launch, not
  quietly dropped.
- **Write-interval raise + `visibilitychange`/`pagehide` flush** — **in scope for today.** Verified
  not present: the only `visibilitychange` listener in the app (`:6178`) is the session-clock tick
  fix (commit `864b77d`), unrelated to the sync flush. This is small and belongs with the B1/B7 fix
  since it touches the same debounce.
- **Payload-size warning** — **status: genuinely not being done today.** No warning UI exists; this
  is new UI work with no start on disk, and the board's own measurement (539,101 bytes, 51% of the
  Firestore ceiling) means it is not launch-blocking.
- **"Export progress (JSON)" button** — **status: genuinely not being done today.** No such button
  exists; new UI work, not started, not launch-blocking.
- **First-sign-in "bring this profile into your account" merge** — **status: genuinely not being
  done today.** Not started. This is real follow-up work born from the B1/B7 fix closing the
  accidental migration route; it is correctly a next task, just not one that fits in today's build,
  and it is recorded here rather than silently forgotten.

## New items the meeting added to the plan

- **B7** — whole-blob `state` writes with `{merge:true}` let two devices overwrite each other.
- **Design authenticity** (owner's own instruction, raised mid-meeting, not a board item): 30 lines
  of `index.html` carry UI emoji beside a bespoke Greek `ico()` set, the toast voice is chirpy, and
  the border-radius scale is scattered across eight values. Measured, listed, and now its own block.
- **A visible sync state** ("synced 12:04" / "local only"), so a skipped push is not invisible —
  the same class of defect as B2.
- **The in-app-browser warning.** Opening a Google sign-in inside WhatsApp's or Instagram's embedded
  browser fails; a line of copy near the sign-in button costs nothing.
- **Zip the deploy folder before dragging it to Netlify**, every time.
