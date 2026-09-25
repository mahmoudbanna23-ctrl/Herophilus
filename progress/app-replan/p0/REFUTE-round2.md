# REFUTE round 2 — P0 fixes (Opus refuter, 2026-09-25)
Verdict: PARTLY overall. R-table HOLD · R-dist HOLD · R-count HOLD · R-checks PARTLY · R-perf PARTLY.
app/data not opened. One Chrome at a time. Baseline chrome.exe = 13 (owner's own), 13 after every run.
## R-checks — PARTLY
- A-checks.md has NO Round 2 section (no "## Round 2" header, no notes). The brief requires one.
- navclock x2: "rail clock (DOM) : 25:00 24:57 24:53 · TICKS off the session view", exit 0. HOLD.
- navclock --nofix x2: "rail clock (DOM) : 25:00 25:00 25:00 · FROZEN, as it must be", exit 0. HOLD.
  --nofix now patches js/clepsydra.js, not index.html. The regex has no /g and hits only :642 of the two
  tick lines (:642, :657). It freezes, so it works, but nothing documents why.
- attempt x2: "RESUMES at entep-ear-169 (idx 2) · PASS", exit 0. HOLD.
- lock x2: "SKIP — LOCKED_MODULES is empty; no locked subject to check.", exit 0. HOLD.
- lock --selftest x2: "SELFTEST PASS", exit 0. The headline is no longer BLIND, but 2 of the 6 "broke" rows
  still fail blind. With the 'ent' fixture, the search probe (lock-check.js:141) and the survived probe (:188)
  still read only Q_OPHTHO/Q_NEURO. Output: `term "NO RAW LOCKED QUESTIONS LOADED" -> null hits`,
  `answer on undefined ... NO LOCKED QUESTIONS LOADED`. The mustBreak list counts that as detection.
- Loosened assertion, not noted: 'nav shows soon, disabled' was removed from mustBreak (lock-check.js ~:271).
  The brief says to write down why. Nothing was written.
- strike x2: 12/12 PASS, incl. "PASS F on focused X is ignored for six options". Probe valid:
  quiz.js:372 guard uses event.key.toUpperCase(). HOLD.
## R-table — HOLD
- mdtable-check x2: 4/4 PASS, "All mdtable-check cases PASS", exit 0.
- theory.js diff: 1 line swapped for a positional rows[1] drop, plus a comment. isMdRule is untouched.
  Callers: theory.js:258, utils.js:13.
- One behaviour change, not measured: a rule row at rows[0], or mid-table, now renders as dash cells.
  Before, it was dropped. Corpus is in app/data, so I did not scan it. Low risk.
- boot-check x1 (the builder left it unrun): "QUESTIONS 6956 THEORY 153 MODULES 4 chapters 156 ·
  ent 30 · ophtho 39 · neuropsych 36 · pediatrics 51 · console errors: 0".
## R-dist — HOLD
- 3 sequential runs: "7 passed, 0 failed" x3, exit 0. chrome.exe 13 -> 13 -> 13 -> 13. 0 herodist-* dirs left in %TEMP%.
- Code: mkdtemp :15, Browser.close :50, taskkill /T :60, throw instead of null-deref :92, :116 throw, finally :181.
## R-perf — PARTLY
- Heap 47,318,896 B, media 4 files / 437,045 B. Coherent with round 1.
- JS 25,480,957 (+362 B). Checked: theory.js is HEAD 34,181 B, now 34,543 B, a delta of exactly 362. Coherent.
- Slow-3G/CPU-4x stays labelled UNCONFIRMED. OK.
- Not corrected in place: Symptom (G-perf.md:5-7) still says 26,048,019 / "three ... media" / 405,105 with no mark.
  The heap line was marked. The media line was not.
- Transfer 26,652,934 B over 48 requests, against 41 referenced files. That is 572,975 B over the file total;
  the mp4 double-fetch explains 329,236 B. The remaining ~244 KB is put down to "HTTP framing" (~5 KB/request),
  which is implausible. The 7 extra requests are more likely lazy assets. It needs a per-URL list, or a label as unexplained.
## R-count — HOLD
- D-count.md:11-13 gives 2,322 + 1,727 = 4,049, and the "only UI" line is gone (grep: 0 hits).
- Lock state was checked without opening app/data: storage.js:269-272 (QUESTIONS/THEORY exclude locked);
  git log on modules.js, 89d1480 (09-21 ophtho launch) and 1e1e5a1 (09-22 neuropsych unlock);
  lock-check reports the list empty today.
- Cross-check: 6956 - 4049 = 2907 = neuro 1,054 + ophtho 1,853 (MEMORY recount). Selftest also shows ENT = 2322 in QUESTIONS.
## Round-3 list
1. A-checks.md: add the Round 2 notes, covering the navclock target move, why 'nav soon' was dropped from mustBreak, and the run output.
2. lock-check.js:141,188: under the fixture, take raw locked questions from QUESTIONS (or the fixture's source), not only Q_OPHTHO/Q_NEURO. Or drop those two rows from mustBreak, with a reason.
3. G-perf.md:5-7: mark the old media/total numbers as superseded in place. List the 48 requests by URL, or relabel the 244 KB as unexplained.

## Round 3
Refuter re-ran everything itself, 2026-09-25.
- R3-checks: HOLD against the brief. lock-check --selftest x2: all 6 mustBreak rows "broke", 0 BLIND, 0 console errors, exit 0. Plain run x2: SKIP, exit 0. strike-check 12/12 PASS; navclock TICKS, exit 0. rawLocked() (lock-check.js:125) walks window Q_* and feeds :136 and :184. Nav-soon reason is sound: render.js:129-130 draws a permanent Theory "soon" row while THEORY_LOCKED is set (selftest: 1 soon, 0 enabled).
- Latent 1: the search row breaks only on its sentinel ("NO LOCKED-ONLY WORD EXISTS" -> -1). searchHits is 0 by construction (locked vocab minus QUESTIONS vocab, then searched in QUESTIONS). It never calls the app's search, so it only stands in for qLeak.
- Latent 2: in a real locked run with THEORY_LOCKED set, navSoon = LOCKED.length+1, so "nav shows soon" would FAIL falsely. Suggested fix: count only the module rail items.
- Nit: lock-check.js:258 says "Four checks" but lists six.
- R3-perf: HOLD. :5-7 are marked SUPERSEDED in place. The arithmetic checks out: 26,652,934-26,080,321=572,613; 658,132-328,896=329,236; 572,613-329,236=243,377, labelled unexplained. Both inventory sums check.
- Nit: :73 and :94 still use the stale 26,079,959 B inventory (new media plus old JS, 362 B low). :72-74 still carry the framing sentence, but :80 marks it superseded.
