# REFUTE round 1 — P0 diagnoses (Opus refuter, 2026-09-25)

Verdict: FAIL as final. A PARTLY · B PARTLY · C HOLDS · D PARTLY · E strike HOLDS / table fix PARTLY · G PARTLY.
app/data not opened. Checks run one Chrome at a time.

## A-checks — PARTLY
- Holds for navclock + attempt. enterProfile stops at the term gate (app/js/gate.js:714,729); sess() is null unless session term === activeTerm (clepsydra.js:524-527). Re-ran: navclock "rail clock (DOM) : (no node) x3 · phaseLeft 00:00 x3 · INVALID"; attempt "threw: no MCQ chapter with 3+ questions · INVALID".
- Wrong for lock-check. The empty list only explains today's exit. On 09-20/21 ophtho/neuro were still locked, yet it failed identically. Same term gap: lock-check.js has no term seed (grep y4s2|finishProfileEntry = 0 hits). `lock-check.js --selftest` gives "0 cards", "0 vs 156 open", "NO RAW LOCKED QUESTIONS LOADED", "SELFTEST FAILED — 4 check(s) ... blind".
- Term gate came in with 13433b6 (2026-09-07), before B2/B12, so all three checks share one cause: a stale harness, not an app bug.
- REJECT "Do not infer a term id in the harness". Working harnesses already seed y4s2: boot-check.js:109-124, strike-check.js:49, dist-check.js:33-35. Copy that block.

## B-dist — PARTLY
- Flake not reproduced: 6 sequential runs, 6/6 "7 passed, 0 failed" (B saw 1/5).
- Mechanism is plausible, and stronger than B wrote. Right after one run, 4 chrome.exe with herophilus_dist in the command line were still alive. A few s later 2 remained, orphaned (parent dead). After 20 s there were 0. prof/DevToolsActivePort stays on disk. rmrf swallows errors (dist-check.js:15), so a busy prof dir can survive into the next run. Then :49 reads a stale port, t stays null, and :54 throws the TypeError B saw.
- build-launch.js:95-101,117-118,240-257 are synchronous. Agree: the "image-copy race" label has no support.
- CHANGE fix: awaiting the parent's exit is not enough, because children outlive it. Use a unique dir (mkdtemp; prefer a prefix with no dash), then CDP Browser.close + wait, taskkill /T /F /PID fallback, a null-guard on t with a diagnostic, and a kill on the :72 path.
- REJECT "run two instances concurrently". It breaks the one-Chrome-at-a-time rule (brief :32).

## C-rows — HOLDS
- boot-check.js re-run: "per module: ent 30 · ophtho 39 · neuropsych 36 · pediatrics 51", "console errors: 0". go() sends a locked module home (render.js:4-10). No fix needed.

## D-count — PARTLY
- Reproduced "QUESTIONS 6956 THEORY 153 MODULES 4 chapters 156". The cause is confirmable, not UNCONFIRMED. app/js/storage.js:269-272 says "QUESTIONS and THEORY already exclude these in data/questions.js and data/theory.js"; lock-check.js:7-8 says the same.
- Arithmetic: 4049 = ENT (2,240 + 82 cases) + peds (393 + 704 + 630) = 2,322 + 1,727 (MEMORY recount 2026-09-25). That is the corpus minus ophtho + neuro, both locked on 09-20. THEORY moved 81 -> 153 by the same shift.
- WRONG: "LOCKED_MODULES is consulted only by UI/storage helpers". The storage.js comment D cited next to it says the opposite.

## E-quiz — strike HOLDS · table fix PARTLY
- Strike: quiz.js:372 stops propagation for any letter with OPT_LETTERS.indexOf < options.length (OPT_LETTERS 'A..Z', :322). F on a 6-option question is guarded. The guard came in with af16306 (B12), and no quiz/boot commit follows it. The plan :217 note is likely stale. strike-check.js never sends F (only ArrowRight, :61), so E's new probe is right.
- Table: isMdRule theory.js:167-170 and mdTable :191 confirmed.
- CHANGE fix: the per-cell -{3,} rule departs from GFM. A GFM delimiter cell needs only one dash, so "| - | - |" is a valid delimiter. It would drop real 1-2-dash separators, and no corpus scan is possible. Prefer a positional rule: treat rows[1] as the separator only if isMdRule, and never filter body rows. Callers: theory.js:253, utils.js:13.
- Low priority: the refuter on 2026-09-17 called it latent (bugs.md:171), and dist ships no theory.

## G-perf — PARTLY
- Bytes: JS 25,480,595 and CSS 162,319 reproduced exactly (node stat of the index.html refs). Media is undercounted: 4 files (icon-180.png, ambient-library.jpg, ambient-library.mp4, icon-96.png) = 437,045 B, not 3 = 405,105. Total is 26,079,959.
- Heap WRONG. My CDP run (file://, 1440x1000, fresh profile, Runtime.getHeapUsage polled for 20 s) gave peak usedSize 46,109,024 B, against G's 663,136 B. 25 MB of eager JS cannot fit in 0.66 MB, so G probably sampled the wrong target or sampled before navigation. My DCL/load were 181/229 ms; G measured 77/78 ms over HTTP with a different method, so the two do not compare.
- The 18.8 s splash is mostly the 15 s cloud race (boot.js:379-386). Agree. Slow-3G/CPU-4x UNCONFIRMED, as G says. Resource timing was also empty on file://, so take transfer from Network.loadingFinished instead.

## Round-2 fix list (ordered)
1. tools/boot-check/navclock-check.js, attempt-check.js, lock-check.js: after enterProfile, add the y4s2 term seed from boot-check.js:109-124. Run each twice. Pass means navclock "TICKS", navclock --nofix "FROZEN", attempt PASS.
2. tools/boot-check/lock-check.js: when the list is empty, print SKIP and exit 0 (owner rules SKIP vs delete, per its own :63). With the term seed in, --selftest must stop reporting BLIND.
3. tools/dist-check.js: mkdtemp dir, try/finally with Browser.close + wait, taskkill /T fallback, null-guard t, kill on the :72 path. Then 20 sequential runs, never concurrent.
4. tools/boot-check/strike-check.js: add a 6-option F-on-focused-X probe (Q.sel null, Q.shown false, focus unchanged). Run twice. App change only if it fails.
5. app/js/theory.js mdTable: drop only rows[1] when isMdRule. Add a node self-check covering "| - | - |" as a body row and a 1-dash separator.
6. G-perf.md: redo heap and transfer on the navigated page target (Network domain) and fix media to 4 files / 437,045 B. Then run slow-3G + CPU 4x.
7. D-count.md: replace UNCONFIRMED with the lock-filter cause and the arithmetic above. Delete the "only UI helpers" line.
