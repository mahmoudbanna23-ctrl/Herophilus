**Round 2 – Argument Summary (≈470 words)**  

---

### Fork 1 – Mascot on quiz screens  
**Chosen position:** *Corner‑figure mascot that is silent and only speaks at threshold boundaries* (Proposal C/D).  

**Why the others miss the mark**  
* A* removes the mascot entirely, breaking the owner’s “companionship” promise on the home/subject pages and losing a subtle visual cue that the owner specifically keeps.  
* B* goes too far – “fully absent” erases the mascot from every context, contradicting the brief’s “small corner figure” language.  

**Defense** – A 12 × 12 px corner graphic adds negligible visual load, works with both PNG and future 3‑D assets, and can be toggled by a simple CSS class that the threshold‑logic already flips. The file can be inspected on disk (`assets/mascot‑corner.svg`) and its inclusion verified by a unit test that checks the DOM after a threshold event.

---

### Fork 2 – “Today’s progress” water level  
**Chosen position:** *Separate 2‑D element beside the vessel* (Proposal B/C/D).  

**Why the others miss the mark**  
* A* ties the indicator to a “five‑state” 3‑D pipeline that may never ship, locking us into a heavy asset set.  
* C* proposes the same but adds the “once 3‑D approved” clause, still deferring a simple solution.  

**Defense** – Adding a `<div id="water‑level">` with a background‑image (`water‑level‑01.png` … `‑05.png`) is a pure CSS change that can be verified by diffing the `index.html` file. It respects the rule “the only water level is in her vessel” because it is visually attached, not drawn on the vessel itself.

---

### Fork 3 – IndexedDB cache vs. service‑worker only  
**Chosen position:** *Drop IndexedDB; rely on service‑worker for hosted use and on‑disk `<script>` files for local use* (Consensus of A, B, C, D).  

**Why the others miss the mark**  
* A* mentions the need for an explicit download‑scope test but does not reject the cache; the extra layer still exists.  
* B* adds a “caveat” that P9 must prove offline reload – still a duplicate cache that adds sync‑bugs.  

**Defense** – The repository already ships the full 20 MB of questions as plain JS; a disk‑only build can be verified by grepping for `questionData` in `data/*.js`. The service‑worker cache can be validated by a test script that runs `navigator.serviceWorker.getRegistrations()` and asserts the expected URLs are present after a cold load of the hosted page.

---

### Fork 4 – 3‑D mascot video format  
**Chosen position:** *Plain H.264 MP4 with desk background baked in* (Proposals A, B, C, D agree).  

**Why the others miss the mark**  
* A* and *C* mention a transparent‑video pipeline that requires WebM VP9 + HEVC α, which fails on `file://` and Safari; the added codecs increase bundle size and risk playback stalls.  

**Defense** – A single 4 s MP4 (`assets/mascot‑loop.mp4`) can be opened in any browser, even offline, and its presence is confirmed by a SHA‑256 hash stored in `manifest.json`. Battery impact can be measured by a simple JS timer that logs `performance.now()` before/after playback.

---

### Fork 5 – Phase order (baseline vs. mock‑ups)  
**Chosen position:** *Run P0 + P1 before P3* (Proposals B, C, D).  

**Why the others miss the mark**  
* A* swaps the order, risking that mock‑up approvals hide baseline failures.  

**Defense** – P0/P1 produce a green‑check “baseline” file (`baseline‑report.json`) that the owner can view before any visual mock‑up is presented, ensuring that mock‑ups are judged on a stable platform.

---

### Fork 6 – Neon edges  
**Chosen position:** *Keep neon dropped, but expose one sample in P3 for owner‑override* (Hybrid of A & B).  

**Why the others miss the mark**  
* C* simply drops neon without a fallback, ignoring the owner’s recent “liked neon” comment.  
* D* keeps neon dropped entirely, missing the chance for a low‑effort comparison.  

**Defense** – Include a CSS class `.neon‑border` in a hidden style sheet; the mock‑up page can toggle it via a button, letting the owner make a data‑driven decision without committing to code.

---

### Fork 7 – Exam‑eve deploy freeze (R9)  
**Chosen position:** *Maintain freeze, explicitly covering both the eve and the exam day* (All proposals agree, but clarify).  

**Why the others miss the mark**  
* A*’s wording is ambiguous; *B* and *D* note the need for “exam‑window” but don’t specify exact dates.  

**Defense** – Add a `freeze‑dates.json` with `"start":"2026‑10‑15","end":"2026‑10‑19"`; CI can read this file and block merges when `process.env.CI` is true.

---

### Fork 8 – Missing / mis‑ordered items  
**Overlooked points (not covered by any proposal):**  

1. **Battery‑life regression testing** – a lightweight script (`battery‑test.js`) should log `navigator.getBattery().level` before/after major UI animations (candle, video) and fail the CI if the drop exceeds 5 %.  
2. **Accessibility‑first placement** – P10 should run **before** P11 (theme switch) to catch colour‑contrast regressions introduced by the new theme.  
3. **Legal licence gate for 3‑D assets** – a separate “owner‑approval” checkpoint (e.g., `LICENSE‑3D‑APPROVED` file) must exist before any 3‑D video is merged; otherwise the build could violate the owner’s licensing constraints.  

All three can be verified from disk (presence of the script, ordering of phase files, and the licence‑approval flag).