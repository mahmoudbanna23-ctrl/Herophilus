# Refuter (Opus) — P2a design, round 1 (2026-09-26): FAIL

1. L87-90: Q_ALL/T_ALL are const snapshots at parse (data/questions.js:4, data/theory.js:2); late subjects never reach rebuildQuestions/rebuildTheory. Rebuild from window.Q_* inside each rebuild.
2. L95-96: checkData skips only LOCKED_MODULES (storage.js:117-126), runs at boot (boot.js:374) - deferral makes every boot report a load failure for all 4 subjects. Check only requested subjects.
3. L34-36: home cards need per-module data (render.js:241-244 qsInModule/isAnswered/accuracy/N questions). Deferring shows 0 and empty rings. Counts from MANIFEST; decide how progress shows before load.
4. L28, L134: home floor omits mod-*.jpg 617,885 B (render.js:252) and a Clepsydra pose PNG 110-132 KB (clepsydra.js:1). Real floor ~1.8 MB, not 1.06 MB.
5. L28 floor re-sums 1,055,712 not 1,055,663; L24 table sums 26,099,866 not 26,080,321 (copied from G-perf). questions.neuro.js 2,524,330 HEAD vs 2,524,077 working tree (chapter-id fix). fonts.js and components+views correct.
6. L32, L134: no trim plan - name each cut with its bytes.
7. L63-65: validate.js:7-10 finds data files by parsing index.html script tags; boot-check.js:133,146-150 counts QUESTIONS and chapter rows synchronously. Both must read MANIFEST and wait for loads.
8. L102: mergeStates is gate.js:202.

Passes: no fetch/XHR; bankOf( 0; no wardround.* rename; Firebase untouched.
Open questions: Q1 not owner (PLAN:145, counts generated); Q2 answered (PLAN:340-342); Q3 answered (PLAN:340, 178-179). None goes to the owner.
