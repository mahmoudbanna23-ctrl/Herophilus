**Fork 1 — Mascot on quiz: fully absent (A/B).** The brief explicitly rules out the decorative scene on quiz/review/reading; a corner figure *is* decorative scene. C/D keep it for “companion feel” but the owner defined companionship on home/subject pages only. Threshold speech on quiz interrupts the exam-like focus the owner studies for.

**Fork 2 — Water level: separate element beside PNG vessel now; five baked states only if 3D ships (B/D).** A defers entirely — the owner asked for “today’s progress” now. The 2D art must not be drawn on; a CSS-transformed gauge beside the vessel satisfies this without waiting for an owner-gated 3D pilot. C agrees but omits the 3D handoff condition.

**Fork 3 — Drop IndexedDB: sound, but A’s P9 rigor is the real position.** All four drop it; only A specifies what “works offline” must prove: download scope, completion indicator, version consistency, interrupted-download recovery. B’s “open previously used subject after reload” is necessary but insufficient.

**Fork 4 — 3D delivery: baked-background H.264 MP4 (unanimous).** A adds the critical acceptance criteria: phone/tablet playback, crop, transition, battery checks — laptop autoplay evidence is not enough.

**Fork 5 — Phase order: P0/P1 before P3 (B/C/D).** A’s “mock-ups first” builds on a broken baseline (P0 has known F-on-✕/c2-1 bugs). Green checks and a reproducible gate must precede owner review time.

**Fork 6 — Neon: keep dropped, show one labelled comparison in P3 (B/D).** The rules section supersedes the owner’s four-day-old comment. A reopens debate; C ignores the signal. A narrowly labelled “owner may overrule” variant in P3 lets the owner decide without churn.

**Fork 7 — Exam freeze: keep, correct to Oct 16–19 inclusive (A).** Exams are 17–19; the eve is 16. B’s “exam-window” rename and local-work exclusion are useful additions, but A’s date precision is the gap the plan must fix.

**Fork 8 — Structural fixes: A catches the most (split P7/P8/P9, accessibility per-screen, P0 explained-failures vs R8, P1 manifest before P2, P6 route-level triggers, PNG→video element lifecycle, P9 upgrade/rollback, P10 manual checklist, P8 weak-chapters/due-list retention).** C’s P10-before-P11 and B’s P2 script-load tests are correct additions.

**What every proposal missed:**
- Definition of “f20 thresholds” — what exact events trigger mascot speech? (session start? subject change? 20-question boundary?)
- “Today’s progress” denominator: unique questions attempted? Correct answers? Session time? Day boundary (local midnight vs study session)?
- Service worker versioning strategy for question-data updates (cache-first vs stale-while-revalidate, cache-key schema).
- Brave Shields / `file://` CSP interaction with inline scripts — the app loads 20 MB via `<script>` tags; CSP in P10 must allow this without `unsafe-inline`.
- Battery measurement protocol for candle animation + 3D loops (owner studies on battery laptop).
- Verification that 7,000 questions / 20 MB matches actual disk payload (manifest count in P1 should prove this).