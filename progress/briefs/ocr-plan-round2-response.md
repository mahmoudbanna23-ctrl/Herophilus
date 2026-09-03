# Response to the consolidated OCR/cost plan — challenge pass, 2026-09-03

**Nothing is implemented. This is a consensus document.** It answers the eight questions asked, and
it argues with the plan rather than ratifying it.

**One fact the plan was never given, and it changes almost every priority below:**

> **The first exam is in 11 days.** Peds OSCE **14 Sep** · Peds papers **17 Sep** · ENT 22 Sep ·
> Ophtho 27 Sep · Neuro 3 Oct · Peds papers 18–19 Oct. Today is **3 Sep 2026**.
>
> Remaining scoped content: **124 House peds questions** (ch.13–20) · endpoint part 1 at **216 of
> 855** · neuro live at 268 with more to stage. Measured drafting throughput: **110–121 questions
> per day.**

The plan optimises the **reading** stage. The project's own record says the binding constraint is
the **drafting** stage — that is the stated reason the endpoints are deferred at all. Reading is
already cheap; days before an exam are not. **Any item below that costs more than an evening has to
justify itself against questions that will not get drafted.**

---

## 1. What I agree with

Agreed without reservation, in the plan's own numbering:

- **(1) Two independent signals for the answer key, and fail loudly when they disagree.** This is
  the correct reading of the p.584 failure and the most valuable idea in the document. See §4 below
  — the project has a better independent signal available than the one proposed.
- **(1, second half) Recalibrate the yellow threshold per book.** Already the written instruction in
  `tools\ep-index\README.md`; making it a required step rather than advice is right.
- **(4) The validator must be meaningfully independent of the logic it validates.** This is the
  correct generalisation of the off-by-one that passed every automated check.
- **(10) Exception-based second opinions.** Agreed — and already how the project runs.
- **(11) Deterministic work belongs in scripts.** Agreed in principle; mostly already true.
- **Cost strategy — do not reopen Mistral.** Agreed. Nothing to buy.
- **The 40× caveat.** Agreed, and it is the project's own caveat quoted back correctly.
- **Both quality principles** (plausible-but-wrong OCR; systems agreeing on a shared wrong
  assumption). These are the two real lessons and they are stated accurately.

---

## 2. What is wrong, already done, or more complicated than it needs to be

### ⚠️ (6) The verified-question cache **already exists**. This is the plan's biggest factual error.

The plan calls it "one of the biggest remaining cost optimizations". It has been running for weeks.

Every chapter and section is staged into an array file — `endpoint-s0N-*.array.js`,
`house-chNN-*.array.js` — with exactly the schema the plan proposes:

```
{ n:<printed question number>, p:'<book page>', boiler:<bool>, stem:'…',
  opts:['…'], key:'<letter>', fig:'…', note:'<how it was established>' }
```

The `note` field already records the crops used, the straddles, and what was escalated — which is
more than the plan's proposed record carries. Drafting already reads from this and not from the PDF.

**What is genuinely missing is small:** the staging record has no explicit *verification state*
field, and there is no single index of "which pages have ever been read". Both are minor additions
to an existing structure, not a new subsystem. Budget an hour, not a project.

### ⚠️ (7) and (8) are also already the architecture

Reading and drafting are separate passes with separate briefs. Image isolation is enforced
structurally: renders happen **inside a subagent whose entire context is discarded when it returns**,
so a page image cannot leak into a later stage even by accident. The drafting pass does occasionally
re-open a page — for adjudications that genuinely needed the image rather than an argument. **That
is the exception path working, not a leak.** No change needed.

### ⚠️ (3) Load-bearing-token detection will probably fire on nearly every question

The trigger list is: numbers, decimals, doses, units, percentages, exponents, ages, lab values,
**answer letters**, ±, arrows, </>.

Every question in the bank has an answer letter. A large share of paediatric questions carry an age,
a weight, a dose or a centile. **On this corpus the detector plausibly fires on 80–100 % of
questions, at which point it is not a gate — it is the current flow with extra machinery and a new
thing to calibrate.**

**This is cheaply testable before building anything:** run a token-class regex over the OCR text that
already exists for a completed section and count the flag rate. If it is above ~60 %, items (2) and
(3) do not pay for themselves and should be dropped, not deferred. **That measurement is one of my
recommendations for now; the feature is not.**

### ⚠️ (2) The safer OCR gate has an unsolved dependency and a weak savings case

Two problems the plan cannot see:

1. **A "tight crop" requires word boxes** — coordinates for where the question sits on the page.
   Tesseract's TSV output provides them; it is the engine that was rejected. Whether
   `wpscli photo2word --json` returns box geometry is **unverified**. If it does not, item (2)
   requires reintroducing a second OCR engine purely to compute crop rectangles. That must be
   checked before the item is costed at all.
2. **For the endpoint PDFs the saving barely exists.** An endpoint page *is* a single 800×450 image
   — about 360k pixels. A scanned book half is ~1754×2480 — about 4.35M pixels, twelve times larger.
   Cropping a book page is a real reduction; cropping an already-tiny slide capture is not.
   **The gate's case is class-A-only, and the plan treats it as universal.**

### ⚠️ (5) `options-differ` → warning is a no-op

It is already a warning. It is a string in a JSON field that a human reads before deciding whether to
re-render. There is no code path that treats it as proof of failure. Agreed with the reasoning;
there is nothing to change.

### ⚠️ (12) A seven-stage pipeline state machine is complexity the project does not need

The §10a fix worked because **the checkpoint granularity matched the failure granularity** — agents
died mid-page, so the checkpoint is a page.

The stages the plan lists are already checkpointed, by a mechanism that is free and battle-tested:
**each stage's output is a file, and the files are committed to git.** Resume-from-last-good is
`git status` plus reading the array. Adding a state machine on top adds a second source of truth
about what is done — and *two sources of truth that can disagree* is precisely the failure class
this plan is trying to eliminate.

**Recommend: drop item 12 entirely.** Keep the per-page rule that works.

### ⚠️ (9) Batch sizing is stated in the wrong unit

"Don't create giant batches" is right, but the measured mechanism is sharper: **cost is step count ×
context size, and context grows with every step.** In a measured 7-hour block, the five most
expensive agents averaged **88–107k tokens per step, peaking at 167k**, over 133–287 steps.

So the variable to control is **steps per agent, not questions per batch.** A useful anchor from the
same measurements: chapter drafting ran ~62 tool uses. **Size batches so an agent finishes in
roughly 60–80 steps and then returns.** That is a discipline, not a feature, and it is free.

### ⚠️ (4) The oracle the plan proposes is not actually independent

"Printed question number → physical page/position → extracted answer" reads the question number from
OCR and the position from the index — **the same two systems that produced the answer.** That is the
same shared-assumption failure in new clothing.

There is a genuinely independent signal, and the project already computes half of it. See below.

---

## 3. Top 5 changes by expected cost reduction

Most of the plan's cost items are already implemented, so the real remaining savings are elsewhere.

| # | Change | Why it is the biggest lever | Build cost |
|---|---|---|---|
| 1 | **Cap agent length by steps (~60–80), not by task size** | Directly attacks the measured 88–107k/step × 133–287 steps that produced 82M of 109M agent tokens in one block. Cost is superlinear in agent length | **Zero** — discipline |
| 2 | **Anchor `resume-peds-endpoint.md`, then `resume-neuro.md`** | The two anchors placed today cut a journal read from ~47k → ~14k and ~37k → ~14k tokens, on files read at the start of every session. The endpoint journal is next and already past threshold | **Minutes** — one marker line |
| 3 | **A "pages already rendered/read" index** | The most common silent waste is a page read twice across chats or sessions. Nothing currently prevents it | ~1 hour |
| 4 | **Crop instead of full page — scanned books only** | Real on 4.35M-pixel book halves. Explicitly **not** worth it on 360k-pixel endpoint slides | Blocked on the word-box question |
| 5 | **Actually kill sessions per work block** | Already a rule, poorly followed. The audit found four main chats at 274–327 steps pinned at 166k — 248M of 369M tokens overall | **Zero** — discipline |

**Note that items 1, 2 and 5 are free and account for most of the available saving.** That is the
uncomfortable headline: the largest cost reductions available require no engineering at all, and no
amount of pipeline work substitutes for them.

---

## 4. Top 5 changes by quality and safety improvement

### ⭐ 1. The highlight-**position** oracle — a genuinely independent key check

This is the best idea available and the plan does not contain it.

`extract.py` already counts yellow pixels. It does not record **where** they are. Add the yellow
region's vertical centroid, map it to an option row, and you get:

- **Path A:** OCR reads the printed key letter — a *text* measurement
- **Path B:** the highlight's geometry says which option row is coloured — a *pixel* measurement

These share no code, no engine, and no assumption. **They are independent in the way the plan asks
for and its own proposal is not.** Disagreement → fail loudly → a human looks. This also catches the
p.584 class by a second route, and it would have caught the 1-based/0-based bug, because path B
knows the option's *position* directly.

⚠️ **Asymmetry the plan must record: this works for endpoint PDFs only.** The scanned House books
print a bare key letter with **no highlight and no option name**, so no second signal exists there.
The project already documents that the letter-vs-name cross-check is unavailable in that bank and
**must never be reported as having passed**. Books stay on visual verification.

### 2. Two-signal disagreement fails loudly (the plan's item 1)

Correct, and cheap once item 1 above exists — the two signals are the ones it produces.

### 3. Per-book recalibration of the yellow threshold, as a required gate

p.584 measured **748 against a 750 threshold** that had shown *clean, gap-free separation* across 178
calibration pages. Its highlight covered two characters instead of a whole option line. A threshold
calibrated on one distribution of highlight sizes is not calibrated for a page that highlights
differently — and that can happen inside one book, not only between books.

### 4. A mandatory N-sample cross-read per section, by a different reader

The off-by-one that would have mis-keyed 67 questions was caught by **one person reading one drafted
entry beside its staging row**. That was luck. Make it a required step: after each section is
drafted, a small random sample is re-read against the staged record by a reader that did not produce
it. Cheap, and it targets the exact failure class the plan names.

### 5. Close the p.584 sweep gap

The reprint sweep for the next section reported "60 answered pages" because it consumed the index's
classification — so **p.584 was never swept for reprints at all.** This is a known, named, already-
owed measurement. Minutes of work.

---

## 5. Implement NOW

Everything here is hours, not days, and none of it invalidates an existing calibration:

1. **The p.584 sweep re-run** — owed, trivial.
2. **Second anchor on `resume-peds-endpoint.md`** — one line, saves ~30k tokens per session read.
3. **Agent step-cap (~60–80) + session-per-work-block, written into the briefs** — free.
4. **The highlight-position oracle + fail-loud on disagreement** — one script against an existing
   `extract.py`; the highest safety return in the document.
5. **Per-book recalibration promoted from advice to a required checklist step** — documentation.
6. **The flag-rate measurement for item (3)** — run the token-class regex over an existing section's
   OCR text and count. This is a measurement that *decides* whether items (2) and (3) are ever
   built. Cheap, and it prevents building the wrong thing.
7. **The N-sample cross-read, written into the drafting brief** — documentation.

**Total: roughly one evening, most of it writing rules rather than code.**

---

## 6. Defer

**Until after 3 Oct at the earliest — realistically, until the exam period is over:**

- **(2) The OCR gate with crops** — blocked on the word-box question, weak savings for class B, and
  it requires re-calibration *against print* on a frozen holdout, which is the step most likely to be
  skipped under time pressure and the one whose absence invalidated the last calibration.
- **(3) Load-bearing-token detection** — gated behind the flag-rate measurement. If it fires above
  ~60 %, **drop it rather than defer it.**
- **(12) The pipeline state machine** — recommend dropping outright, not deferring.
- **Any engine revisit** — Mistral, Tesseract, Google Vision. Settled; nothing to buy.
- **Measuring Windows OCR on the scanned books** — a real gap, but it would only change a route that
  is currently working.

---

## 7. Do NOT touch

Each of these is load-bearing and was paid for with a failure:

1. **The two-pass OCR union** (native + 150 dpi, both kept). Each pass silently drops a *different*
   line; the union is the only reason every option survives. Collapsing to one pass to save time
   re-opens a silent data-loss class.
2. **The `key` zero-based convention.** Touching it re-opens the exact off-by-one that would have
   mis-keyed 67 questions while passing every check.
3. **`reprint-pd-ep.js --self-test` pinned at 89.** It exists because the probe's first version
   returned 0 matches on data it should have matched perfectly.
4. **§10a's page-by-page order** — write the file before rendering anything, never render page N+1
   before page N is on disk. Two agents died leaving zero bytes before this existed.
5. **600 dpi band crops for every numeral, dose, unit and key letter.** Nothing numeric may come from
   the 300 dpi read. No proposed optimisation may weaken this.
6. **The duplex show-through pairing rule.** It nearly produced a question that does not exist, and
   the naive assumption (the ghost is the opposite page) is wrong — it is three pages away.
7. **Every crop is looked at.** No numeric check has ever caught a bad crop on this project.
8. **`imgAlt` gives modality and view only.** Naming the finding answers the question.
9. **WPS as the book route, and the section-1 yellow calibration record.**
10. **The endpoint part-2 deferral.** It is a *drafting-time* decision. A cheaper reading pipeline is
    not an argument to un-defer it, and treating it as one is the fastest way to lose the exam
    schedule.
11. **The staging→drafting split and the staging schema** — item (6) would otherwise duplicate a
    working system.

---

## 8. Hidden costs and failure modes the plan misses

1. **⚠️ The schedule is the dominant hidden cost.** Eleven days to the first exam and ~124 House
   questions plus neuro still to draft at 110–121/day. The plan proposes roughly twelve workstreams
   against the stage that is *already cheap*. **Time spent building the pipeline is measured in
   questions that do not exist on exam day.**

2. **⚠️ Every pipeline change invalidates the calibration behind it.** The 89/89 self-test, the
   936–20,128 yellow separation, the option-recall figures — all are properties of the current
   pipeline. Change the gate and each must be re-measured. The record already contains one
   calibration that looked clean and turned out to be an *agreement study against our own previous
   output*, where a shared miss scores as a match. Re-calibration is not optional and is not free.

3. **⚠️ Two work chats are live against these files.** A running session keeps the rules it started
   with; a tooling change reaches it only on relaunch. Shared tools changed mid-flight are exactly
   how one chat's commit once swallowed another's work.

4. **⚠️ Complexity is itself a failure mode on this project specifically.** The two worst incidents
   were *tools agreeing with each other* and *a brief specifying 1-based where the code assumed
   0-based*. Every new automated check adds another opportunity for both. **A check that is not
   independently calibrated is decoration that looks like safety** — which is worse than no check,
   because it consumes the attention a human would otherwise have spent.

5. **⚠️ A large fraction of the corpus is immune to all of this.** Of 773 remaining ophtho questions,
   **~304 are image questions and 132 are short-answer.** OCR, gates and token detectors do nothing
   for either. The plan's savings apply to a shrinking majority of a shrinking remainder.

6. **⚠️ The duplicated-option-line defect is still unexplained.** It appeared on 3 of 9 sampled pages
   and it is still unknown whether it is an OCR artifact or a printed defect. **It can turn a
   4-option question into a 5-option one with a repeated distractor** — which changes what the key
   letter refers to. No item in the plan addresses it, and it is arguably more dangerous than
   anything the plan does address.

7. **⚠️ WPS reorders options and deletes spaces.** It has emitted option blocks *above* the stem and
   options in the order A, C, B, D, E. When the key is a bare letter, **a reordering silently
   re-keys the question.** The mitigation is currently a discipline rule an agent must remember
   ("search index, never a source"). A rule that must be remembered is not a control. The
   highlight-position oracle in §4 is the only proposed mechanism that would actually catch this.

8. **⚠️ Nobody has measured how often the current flow is wrong.** Every accuracy number in the
   record is from a calibration set, not from live output. The honest position is that the error
   rate of the shipped corpus is **unknown** — and the one time it was checked incidentally, the
   OCR was faithful and the *shipped* text had been silently normalised. **Before optimising the
   pipeline, it may be worth measuring what the pipeline is currently producing.**

---

## Bottom line

**The plan's diagnosis is right and its priorities are inverted by the calendar.**

Roughly half of it is already built. Of the remainder, one item — an independent, pixel-based key
oracle — is worth more than the other eleven combined, and it costs an evening. Two items should be
dropped rather than deferred. The largest cost savings available require no engineering at all.

**Recommended: do §5's list this evening, then go back to drafting questions.** Revisit items (2)
and (3) after 3 Oct, and only if the flag-rate measurement says they would ever fire selectively.

**No changes have been made. Awaiting approval.**
