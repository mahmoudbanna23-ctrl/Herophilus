# Herophilus perf scan - measured numbers

- Date: 2026-10-12
- Browser: Chrome/154.0.8037.98 headless (--headless=new), driven over CDP, page loaded from file:// out of a scratch copy of app\ (index.html patched in the copy only: timing marks, gate stub, probe script).
- Machine: desktop PC, 16 logical cores (11th Gen Intel(R) Core(TM) i7-11800H @ 2.30GHz), 16114.8 MB RAM, win32 10.0.19045. CPU throttling (Emulation.setCPUThrottlingRate) slows script/layout on this fast CPU; it imitates a weak device only roughly. Headless uses software drawing, so paint/composite cost is not representative.
- Units: milliseconds unless stated. Rate = CPU slowdown factor (1 = none). Each run = fresh page load; state restored to the seeded copy before each run. Median of 3 runs.
- Heavy profile: 3000 answers (750 per subject, ~65% correct, ~12% of correct ones rated guess/unsure), SRS entry on each, ~150 flags (148 distinct landed), 45 active days, 10 notes. Fresh profile: empty state, term chosen only.
- Gate: showGate is stubbed to a no-op right after gate.js loads, so the gate screen is not drawn; enterProfile() is called by the probe at the end of the page. Cloud/Firebase not loaded (file://).

## M1 Boot

"Usable" = navigation start to: all scripts parsed and run, enterProfile() resolved (home view rendered), two animation frames later. Time origin = navigation start (performance.now()).

### heavy profile

**Boot to usable (home rendered + 2 frames)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 291.4 | 387.0 | 343.1 | 343.1 |
| 4 | 1550.8 | 1528.4 | 1710.3 | 1550.8 |
| 6 | 2935.8 | 3072.9 | 2827.3 | 2935.8 |

**Data files: first data script to start of js/storage.js (modules.js .. theory.js, fetch + parse + run)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 139.8 | 264.3 | 197.3 | 197.3 |
| 4 | 635.5 | 936.9 | 982.0 | 936.9 |
| 6 | 1381.5 | 1793.7 | 1612.6 | 1612.6 |

**App scripts: js/storage.js .. boot.js (parse + run)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 2.1 | 5.6 | 7.4 | 5.6 |
| 4 | 16.5 | 28.4 | 40.5 | 28.4 |
| 6 | 45.4 | 90.8 | 104.5 | 90.8 |

**enterProfile() until it resolves (load state, activate term, render home)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 52.7 | 41.3 | 64.2 | 52.7 |
| 4 | 229.1 | 248.3 | 343.5 | 248.3 |
| 6 | 521.9 | 582.0 | 542.7 | 542.7 |

**Before the data scripts (head: fonts.js, CSS, first body markup)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 41.8 | 52.4 | 40.1 | 41.8 |
| 4 | 223.0 | 174.3 | 146.0 | 174.3 |
| 6 | 461.8 | 270.8 | 240.0 | 270.8 |

**Load event end (navigation timing)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 295.6 | 388.5 | 346.0 | 346.0 |
| 4 | 1603.1 | 1538.8 | 1724.6 | 1603.1 |
| 6 | 2967.7 | 3095.1 | 2858.2 | 2967.7 |

### fresh profile

**Boot to usable (home rendered + 2 frames)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 446.8 | 328.3 | 535.4 | 446.8 |
| 4 | 2234.1 | 1968.1 | 1815.8 | 1968.1 |
| 6 | 2179.7 | 2992.8 | 3023.5 | 2992.8 |

**Data files: first data script to start of js/storage.js (modules.js .. theory.js, fetch + parse + run)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 148.5 | 226.6 | 338.4 | 226.6 |
| 4 | 1299.5 | 1179.3 | 1114.6 | 1179.3 |
| 6 | 908.4 | 1774.6 | 1744.9 | 1744.9 |

**App scripts: js/storage.js .. boot.js (parse + run)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 3.7 | 5.3 | 7.7 | 5.3 |
| 4 | 22.1 | 46.9 | 56.2 | 46.9 |
| 6 | 20.0 | 112.1 | 107.0 | 107.0 |

**enterProfile() until it resolves (load state, activate term, render home)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 51.3 | 31.5 | 94.5 | 51.3 |
| 4 | 346.3 | 362.5 | 295.7 | 346.3 |
| 6 | 355.3 | 541.0 | 551.1 | 541.0 |

**Before the data scripts (head: fonts.js, CSS, first body markup)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 51.9 | 42.4 | 52.5 | 51.9 |
| 4 | 219.7 | 162.6 | 172.0 | 172.0 |
| 6 | 284.5 | 309.0 | 256.6 | 284.5 |

**Load event end (navigation timing)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 269.2 | 329.1 | 538.7 | 329.1 |
| 4 | 2253.1 | 1971.8 | 1814.3 | 1971.8 |
| 6 | 2217.0 | 3009.4 | 3038.0 | 3009.4 |

## M2 Memory after boot

Performance.getMetrics JSHeapUsedSize / JSHeapTotalSize, taken ~0.6 s after boot, then again after HeapProfiler.collectGarbage. MB (1 MB = 1048576 B).

### heavy profile

| rate | run | used before GC | total before GC | used after GC | total after GC | DOM nodes (Nodes) | QUESTIONS.length |
|---|---|---|---|---|---|---|---|
| 1 | 1 | 49.0 | 57.9 | 43.3 | 45.3 | 855 | 7126 |
| 1 | 2 | 55.7 | 61.7 | 43.4 | 45.3 | 850 | 7126 |
| 1 | 3 | 55.5 | 61.0 | 43.4 | 45.0 | 854 | 7126 |
| 4 | 1 | 48.9 | 57.9 | 43.3 | 44.3 | 859 | 7126 |
| 4 | 2 | 46.3 | 58.6 | 43.4 | 44.5 | 856 | 7126 |
| 4 | 3 | 46.3 | 57.6 | 43.4 | 44.5 | 868 | 7126 |
| 6 | 1 | 49.1 | 58.9 | 43.3 | 44.5 | 861 | 7126 |
| 6 | 2 | 46.3 | 57.3 | 43.4 | 44.8 | 859 | 7126 |
| 6 | 3 | 48.2 | 57.1 | 43.4 | 44.3 | 868 | 7126 |

### fresh profile

| rate | run | used before GC | total before GC | used after GC | total after GC | DOM nodes (Nodes) | QUESTIONS.length |
|---|---|---|---|---|---|---|---|
| 1 | 1 | 46.2 | 56.0 | 42.9 | 44.3 | 740 | 7126 |
| 1 | 2 | 48.2 | 56.0 | 42.9 | 44.3 | 739 | 7126 |
| 1 | 3 | 48.2 | 56.0 | 42.9 | 44.0 | 741 | 7126 |
| 4 | 1 | 48.9 | 54.5 | 42.9 | 44.3 | 743 | 7126 |
| 4 | 2 | 48.3 | 55.8 | 42.9 | 44.3 | 740 | 7126 |
| 4 | 3 | 48.3 | 55.5 | 42.9 | 44.3 | 740 | 7126 |
| 6 | 1 | 48.9 | 55.0 | 42.9 | 44.3 | 743 | 7126 |
| 6 | 2 | 50.6 | 56.0 | 42.9 | 44.3 | 740 | 7126 |
| 6 | 3 | 48.2 | 55.8 | 42.9 | 44.0 | 740 | 7126 |

## M3 One answer click (Pediatrics quiz)

Path timed: the Check-answer handler `reveal()` (quiz.js, records answer, scheduleSRS, markDayActive, save(), render(), clepPose) as one call; then separately `save()` alone and `render()` alone on the same state; `pick(0)` (select an option, which itself calls render()) also timed. The chapter used is the Pediatrics chapter with most non-case questions. 10 answers per run; cells are median / max of the 10. save() time is the synchronous part only (save is async, localStorage branch has no await).

### heavy profile

**reveal() handler total - median / max per run**

| rate | run 1 | run 2 | run 3 | median of runs |
|---|---|---|---|---|
| 1 | 15.8 / 28.7 | 15.0 / 20.9 | 20.3 / 25.2 | 15.8 |
| 4 | 106.9 / 150.2 | 83.1 / 93.5 | 102.3 / 145.8 | 102.3 |
| 6 | 187.1 / 313.6 | 156.3 / 183.2 | 223.7 / 316.0 | 187.1 |

**save() alone - median / max per run**

| rate | run 1 | run 2 | run 3 | median of runs |
|---|---|---|---|---|
| 1 | 2.5 / 3.9 | 2.0 / 2.6 | 2.5 / 3.5 | 2.5 |
| 4 | 14.4 / 18.3 | 12.8 / 17.1 | 13.7 / 17.4 | 13.7 |
| 6 | 26.9 / 30.7 | 24.5 / 27.7 | 27.3 / 37.8 | 26.9 |

**render() alone - median / max per run**

| rate | run 1 | run 2 | run 3 | median of runs |
|---|---|---|---|---|
| 1 | 12.5 / 20.3 | 10.8 / 13.7 | 13.6 / 20.3 | 12.5 |
| 4 | 79.6 / 97.3 | 66.7 / 82.2 | 79.2 / 187.4 | 79.2 |
| 6 | 135.8 / 153.3 | 118.0 / 131.6 | 164.1 / 228.8 | 135.8 |

**pick(0) (option select, includes a render) - median / max per run**

| rate | run 1 | run 2 | run 3 | median of runs |
|---|---|---|---|---|
| 1 | 11.5 / 17.8 | 10.9 / 15.0 | 14.4 / 21.4 | 11.5 |
| 4 | 79.8 / 101.8 | 58.8 / 75.6 | 82.3 / 128.6 | 79.8 |
| 6 | 136.1 / 153.4 | 115.7 / 127.0 | 175.1 / 245.5 | 136.1 |

Answers recorded per run: 10 (shown=true), 10 (shown=true), 10 (shown=true). Chapter: emergencies (103 non-case questions).

**startChapter() opening the quiz (restart=true)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 49.9 | 18.9 | 23.1 | 23.1 |
| 4 | 253.2 | 108.5 | 176.5 | 176.5 |
| 6 | 507.2 | 211.6 | 279.2 | 279.2 |

### fresh profile

**reveal() handler total - median / max per run**

| rate | run 1 | run 2 | run 3 | median of runs |
|---|---|---|---|---|
| 1 | 26.1 / 52.9 | 20.5 / 31.2 | 26.1 / 37.0 | 26.1 |
| 4 | 115.3 / 205.2 | 123.5 / 147.9 | 126.4 / 137.6 | 123.5 |
| 6 | 197.3 / 311.8 | 218.0 / 254.1 | 170.5 / 206.0 | 197.3 |

**save() alone - median / max per run**

| rate | run 1 | run 2 | run 3 | median of runs |
|---|---|---|---|---|
| 1 | 0.1 / 0.1 | 0.1 / 0.2 | 0.1 / 0.4 | 0.1 |
| 4 | 0.3 / 0.7 | 0.4 / 0.9 | 0.3 / 1.3 | 0.3 |
| 6 | 0.6 / 1.2 | 0.8 / 1.0 | 0.5 / 1.2 | 0.6 |

**render() alone - median / max per run**

| rate | run 1 | run 2 | run 3 | median of runs |
|---|---|---|---|---|
| 1 | 25.3 / 46.3 | 17.7 / 38.3 | 19.4 / 36.0 | 19.4 |
| 4 | 98.8 / 127.2 | 114.5 / 157.5 | 115.1 / 118.4 | 114.5 |
| 6 | 162.3 / 218.8 | 195.2 / 225.6 | 159.4 / 216.0 | 162.3 |

**pick(0) (option select, includes a render) - median / max per run**

| rate | run 1 | run 2 | run 3 | median of runs |
|---|---|---|---|---|
| 1 | 23.0 / 44.3 | 20.8 / 26.1 | 24.3 / 37.8 | 23.0 |
| 4 | 96.6 / 133.1 | 115.4 / 130.0 | 116.4 / 126.4 | 115.4 |
| 6 | 165.2 / 210.5 | 185.8 / 242.9 | 152.5 / 193.8 | 165.2 |

Answers recorded per run: 10 (shown=true), 10 (shown=true), 10 (shown=true). Chapter: emergencies (103 non-case questions).

**startChapter() opening the quiz (restart=true)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 51.1 | 38.6 | 22.0 | 38.6 |
| 4 | 324.3 | 129.8 | 158.5 | 158.5 |
| 6 | 506.7 | 383.5 | 234.1 | 383.5 |

## M4 Open a subject (go({name:"module",id:"pediatrics"}) until it returns)

### heavy profile

**first call after home**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 50.7 | 51.9 | 54.0 | 51.9 |
| 4 | 864.3 | 667.4 | 701.2 | 701.2 |
| 6 | 1249.5 | 1287.1 | 1798.2 | 1287.1 |

**second call (module view already open)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 44.0 | 38.9 | 48.1 | 44.0 |
| 4 | 678.4 | 564.2 | 633.5 | 633.5 |
| 6 | 900.8 | 1029.0 | 1421.1 | 1029.0 |

**forced layout read (document.body.offsetHeight) right after the first call**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 0.4 | 0.4 | 0.5 | 0.4 |
| 4 | 3.0 | 3.4 | 3.5 | 3.4 |
| 6 | 7.6 | 6.0 | 5.5 | 6.0 |

Chapter rows rendered: 60; DOM nodes after: 595.

### fresh profile

**first call after home**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 57.9 | 125.9 | 90.7 | 90.7 |
| 4 | 1218.0 | 1115.7 | 908.6 | 1115.7 |
| 6 | 1041.0 | 1658.4 | 1513.3 | 1513.3 |

**second call (module view already open)**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 43.4 | 40.3 | 203.9 | 43.4 |
| 4 | 1332.0 | 856.2 | 902.9 | 902.9 |
| 6 | 782.1 | 1343.4 | 1584.6 | 1343.4 |

**forced layout read (document.body.offsetHeight) right after the first call**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 0.5 | 0.7 | 1.1 | 0.7 |
| 4 | 5.7 | 5.1 | 3.4 | 5.1 |
| 6 | 3.9 | 6.0 | 7.7 | 6.0 |

Chapter rows rendered: 60; DOM nodes after: 592.

## M5 Search (doSearch() after setting the input value, one call per query)

Note: doSearch returns immediately when the trimmed query is shorter than 2 characters, so query "a" is the early-return path. Theory search is off in this build (THEORY_LOCKED = true).

### heavy profile

**query "a"**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 0.3 | 0.4 | 0.4 | 0.4 |
| 4 | 1.6 | 1.6 | 1.2 | 1.6 |
| 6 | 4.7 | 2.5 | 3.8 | 3.8 |

**query "ot"**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 1.0 | 1.3 | 1.2 | 1.2 |
| 4 | 5.4 | 4.8 | 6.5 | 5.4 |
| 6 | 11.4 | 11.5 | 5.0 | 11.4 |

**query "otitis"**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 5.2 | 6.2 | 6.9 | 6.2 |
| 4 | 23.6 | 29.5 | 33.5 | 29.5 |
| 6 | 47.1 | 49.9 | 76.9 | 49.9 |

Result rows shown: a=0, ot=13, otitis=13.

### fresh profile

**query "a"**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 0.3 | 0.3 | 1.1 | 0.3 |
| 4 | 1.8 | 1.0 | 1.6 | 1.6 |
| 6 | 2.0 | 2.0 | 3.8 | 2.0 |

**query "ot"**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 1.6 | 1.0 | 1.5 | 1.5 |
| 4 | 7.3 | 6.5 | 7.8 | 7.3 |
| 6 | 12.3 | 13.8 | 9.5 | 12.3 |

**query "otitis"**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 6.1 | 7.5 | 11.7 | 7.5 |
| 4 | 29.9 | 35.7 | 41.1 | 35.7 |
| 6 | 43.2 | 59.2 | 61.4 | 59.2 |

Result rows shown: a=0, ot=13, otitis=13.

## M6 Review deck and Flagged views (heavy profile; fresh for contrast)

### heavy profile

**Review view - go({name:"review"}) until it returns**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 94.5 | 95.3 | 112.9 | 95.3 |
| 4 | 510.0 | 633.1 | 663.3 | 633.1 |
| 6 | 1571.7 | 1254.7 | 1258.8 | 1258.8 |

**Flagged view - go({name:"flagged"}) until it returns**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 17.6 | 18.3 | 24.4 | 18.3 |
| 4 | 120.1 | 141.9 | 138.3 | 138.3 |
| 6 | 311.7 | 235.2 | 265.4 | 265.4 |

**Review view forced layout read after**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 0.4 | 0.4 | 0.6 | 0.4 |
| 4 | 1.8 | 2.2 | 2.0 | 2.0 |
| 6 | 10.1 | 5.7 | 4.8 | 5.7 |

**Flagged view forced layout read after**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 0.8 | 0.9 | 0.5 | 0.8 |
| 4 | 6.5 | 3.3 | 3.4 | 3.4 |
| 6 | 7.4 | 7.7 | 8.1 | 7.7 |

DOM nodes (document.querySelectorAll("*").length), run 1 rate 1: Review before 372 after 7086; Flagged before 372 after 879. Deck size 1254, due 268, flagged 148.

### fresh profile

**Review view - go({name:"review"}) until it returns**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 18.1 | 32.1 | 34.3 | 32.1 |
| 4 | 182.2 | 176.5 | 152.7 | 176.5 |
| 6 | 222.9 | 256.8 | 272.8 | 256.8 |

**Flagged view - go({name:"flagged"}) until it returns**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 32.0 | 24.1 | 28.1 | 28.1 |
| 4 | 123.2 | 145.2 | 105.4 | 123.2 |
| 6 | 146.1 | 175.8 | 295.7 | 175.8 |

**Review view forced layout read after**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 0.2 | 0.3 | 1.2 | 0.3 |
| 4 | 1.8 | 3.3 | 2.4 | 2.4 |
| 6 | 4.0 | 4.7 | 8.3 | 4.7 |

**Flagged view forced layout read after**

| rate | run 1 | run 2 | run 3 | median |
|---|---|---|---|---|
| 1 | 1.2 | 0.8 | 1.0 | 1.0 |
| 4 | 5.2 | 2.8 | 2.6 | 2.8 |
| 6 | 4.6 | 7.6 | 12.7 | 7.6 |

DOM nodes (document.querySelectorAll("*").length), run 1 rate 1: Review before 309 after 248; Flagged before 309 after 249. Deck size 0, due 0, flagged 0.

## M7 Idle cost of decoration (proxy only)

Animations NOT disabled. Headless Chrome with software drawing: the compositor/paint cost of animations and the ambient video is not what a GPU browser pays, so these are a proxy for main-thread work only. Heavy profile, rate 1 and 4, 3 runs each. Deltas over a 5 s idle sit (Performance.getMetrics), ms. Settle of 1.5 s before each window. TaskDuration is all main-thread tasks; the part not covered by Script, Layout and RecalcStyle (paint, compositing, video, timers, other) is not broken down here.

### rate 1

| run | view | wall | TaskDuration | ScriptDuration | LayoutDuration | RecalcStyleDuration | document.getAnimations() total / running | video elements / playing |
|---|---|---|---|---|---|---|---|---|
| 1 | home | 5005 | 432.9 | 0.5 | 0.1 | 107.4 | 7 / 7 | 1 / 1 |
| 1 | quiz question | 5016 | 922.3 | 11.6 | 10.7 | 317.0 | 10 / 6 | 1 / 0 |
| 2 | home | 5011 | 445.1 | 0.0 | 0.0 | 102.0 | 7 / 7 | 1 / 1 |
| 2 | quiz question | 5011 | 987.9 | 9.2 | 12.5 | 304.6 | 10 / 6 | 1 / 0 |
| 3 | home | 5017 | 458.6 | 0.0 | 0.0 | 105.2 | 7 / 7 | 1 / 1 |
| 3 | quiz question | 5010 | 989.2 | 8.6 | 11.8 | 316.3 | 10 / 6 | 1 / 0 |
| median | home | | 445.1 | 0.0 | 0.0 | 105.2 | | |
| median | quiz question | | 987.9 | 9.2 | 11.8 | 316.3 | | |

### rate 4

| run | view | wall | TaskDuration | ScriptDuration | LayoutDuration | RecalcStyleDuration | document.getAnimations() total / running | video elements / playing |
|---|---|---|---|---|---|---|---|---|
| 1 | home | 5020 | 2014.6 | 1.3 | 0.6 | 525.6 | 7 / 7 | 1 / 1 |
| 1 | quiz question | 5030 | 4155.5 | 49.7 | 74.7 | 1507.9 | 10 / 6 | 1 / 0 |
| 2 | home | 5009 | 2426.3 | 1.0 | 0.6 | 586.4 | 7 / 7 | 1 / 1 |
| 2 | quiz question | 5019 | 4182.1 | 36.2 | 47.6 | 1552.3 | 10 / 6 | 1 / 0 |
| 3 | home | 5013 | 2173.4 | 1.6 | 0.8 | 570.7 | 7 / 7 | 1 / 1 |
| 3 | quiz question | 5006 | 3216.9 | 35.9 | 33.4 | 1187.4 | 10 / 6 | 1 / 0 |
| median | home | | 2173.4 | 1.3 | 0.6 | 570.7 | | |
| median | quiz question | | 4155.5 | 36.2 | 47.6 | 1507.9 | | |

## M8 Save and sync weight (heavy profile)

JSON.stringify(S) in the page, no cloud call. "stringify+parse" = one JSON.parse(JSON.stringify(S)). "load validate" = checkedProgressState(JSON.parse(raw)) as loadState does (extra, not asked).

| rate | run | bytes | stringify | stringify+parse | load validate |
|---|---|---|---|---|---|
| 1 | 1 | 308988 | 1.4 | 4.0 | 8.8 |
| 1 | 2 | 308988 | 2.0 | 3.6 | 8.5 |
| 1 | 3 | 308988 | 1.7 | 4.2 | 7.9 |
| 4 | 1 | 308988 | 12.3 | 29.9 | 66.9 |
| 4 | 2 | 308988 | 13.1 | 29.5 | 51.4 |
| 4 | 3 | 308988 | 12.7 | 36.4 | 59.6 |
| 6 | 1 | 308988 | 15.9 | 40.0 | 79.5 |
| 6 | 2 | 308988 | 29.8 | 82.0 | 106.3 |
| 6 | 3 | 308988 | 23.5 | 64.8 | 114.7 |

Median at rate 1: stringify 1.7, stringify+parse 4.0, load validate 8.5.
Median at rate 4: stringify 12.7, stringify+parse 29.9, load validate 59.6.
Median at rate 6: stringify 23.5, stringify+parse 64.8, load validate 106.3.

## Probe sanity

| profile | rate | run | QUESTIONS.length | profile entered (me.id) | view | answers in S | flags | srs | deck / due | gate hidden | home DOM nodes | console errors seen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| heavy | 1 | 1 | 7126 | yes (heavy) | home | 3000 | 148 | 3000 | 1254 / 268 | true | 370 | 0 |
| heavy | 1 | 2 | 7126 | yes (heavy) | home | 3000 | 148 | 3000 | 1254 / 268 | true | 369 | 0 |
| heavy | 1 | 3 | 7126 | yes (heavy) | home | 3000 | 148 | 3000 | 1254 / 268 | true | 370 | 0 |
| heavy | 4 | 1 | 7126 | yes (heavy) | home | 3000 | 148 | 3000 | 1254 / 268 | true | 372 | 0 |
| heavy | 4 | 2 | 7126 | yes (heavy) | home | 3000 | 148 | 3000 | 1254 / 268 | true | 371 | 0 |
| heavy | 4 | 3 | 7126 | yes (heavy) | home | 3000 | 148 | 3000 | 1254 / 268 | true | 372 | 0 |
| heavy | 6 | 1 | 7126 | yes (heavy) | home | 3000 | 148 | 3000 | 1254 / 268 | true | 372 | 0 |
| heavy | 6 | 2 | 7126 | yes (heavy) | home | 3000 | 148 | 3000 | 1254 / 268 | true | 372 | 0 |
| heavy | 6 | 3 | 7126 | yes (heavy) | home | 3000 | 148 | 3000 | 1254 / 268 | true | 372 | 0 |
| fresh | 1 | 1 | 7126 | yes (fresh) | home | 0 | 0 | 0 | 0 / 0 | true | 309 | 0 |
| fresh | 1 | 2 | 7126 | yes (fresh) | home | 0 | 0 | 0 | 0 / 0 | true | 308 | 0 |
| fresh | 1 | 3 | 7126 | yes (fresh) | home | 0 | 0 | 0 | 0 / 0 | true | 309 | 0 |
| fresh | 4 | 1 | 7126 | yes (fresh) | home | 0 | 0 | 0 | 0 / 0 | true | 309 | 0 |
| fresh | 4 | 2 | 7126 | yes (fresh) | home | 0 | 0 | 0 | 0 / 0 | true | 309 | 0 |
| fresh | 4 | 3 | 7126 | yes (fresh) | home | 0 | 0 | 0 | 0 / 0 | true | 309 | 0 |
| fresh | 6 | 1 | 7126 | yes (fresh) | home | 0 | 0 | 0 | 0 / 0 | true | 309 | 0 |
| fresh | 6 | 2 | 7126 | yes (fresh) | home | 0 | 0 | 0 | 0 / 0 | true | 309 | 0 |
| fresh | 6 | 3 | 7126 | yes (fresh) | home | 0 | 0 | 0 | 0 / 0 | true | 309 | 0 |

Heavy state size: 308988 chars stored; seeded per subject {"ent":750,"ophtho":750,"neuropsych":750,"pediatrics":750}.

Setup per Chrome launch: profile seeded once at rate 1, then the stored state is restored byte-for-byte before every run, so run N does not see answers added in run N-1. Run 1 of each launch is the first load after the seed run (possibly warmer on disk/code caches than a true first visit).

## Could not measure / caveats

- Real paint, compositing and GPU cost: headless software drawing only (M7 is main-thread proxy).
- Cloud sync cost (Firebase never loaded over file://); only the JSON weight is reported (M8).
- Tab crash / memory limit on a real phone or tablet: not reproducible here; M2 gives desktop heap only.
- Theory-reader and mock-exam views were not in the brief and were not measured. Search over THEORY not measured (THEORY_LOCKED).
- "Forced layout" columns only time one document.body.offsetHeight read right after the call; whether layout was already forced earlier inside go()/render() was not investigated, so small values there do not show layout is free. Paint after layout is not measured.
- Observed, not investigated: M4 module view median goes 52 ms (rate 1) to 701 ms (rate 4) to 1287 ms (rate 6), a far steeper rise than the other measures; cause unknown. Fresh-profile boot medians are higher than heavy at rate 1 and 4 (run-to-run noise, not explained).
