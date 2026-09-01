> # ⛔⛔⛔ CLOSED 2026-08-31 — THIS DOCUMENT AUTHORIZES NOTHING
>
> Debate round 5 closed this project. **It was not deferred to 28 September.** There is no build
> window, no schedule, no forecast in force, and no date on which anything resumes.
>
> **The live document is `DECISION-2026-08-31-project-closed.md` in this folder.** Read that
> instead. This file is retained only as the reasoning trail — the measurement that found the real
> cost pathology, and the five debate rounds that dismantled the plan built on top of it.
>
> **Nothing below is an instruction.** Every block, lever, forecast, schedule, pilot, resume prompt
> and "afterlife" commitment in this file is void. They are kept unedited because deleting them
> would destroy the record of *why* they were refused — which is the only thing here still worth
> having. Round 5's own distinction applies to this document as much as to the levers: **removing
> a standing authorization is not the same as erasing the idea.**

# Herophilus Token Economy — plan (2026-08-31)

## Context — why this plan exists, and why it is not the plan you asked for

You asked for a project to make Herophilus finishable before your exams without burning your
usage limits, and you said the reading cost of scanned pages was the thing to attack — with an
explicit opening for the alternative: *"or find and attack whatever the NEXT biggest cost is."*

I measured first, as you asked. **The images are not the problem.** They are about 4% of the
bill. The measurement is below and it is not close.

Your per-image estimate was right — the median page image in your transcripts costs **2,021
tokens**, squarely inside the "1,000–2,000" you quoted. What is wrong is the *share*. There are
only 204 images in the entire project history. Meanwhile the sessions themselves re-read a
quarter-million tokens of accumulated chat **15,333 times**.

**Plain version:** it is not the pictures. It is that the chat gets very long, and Claude
re-reads the entire chat from the beginning on every single message. A chat carrying 283,000
tokens costs about **14 cents every time Claude does anything at all** — including running `ls`.

---

## The measurement (all figures from your own transcripts, 2026-08-31)

Source: 11 Herophilus session transcripts in
`C:\Users\Alfa388\.claude\projects\D--claude-os-Medical-school-Herophilus\`, parsed in full.

| | Measured |
|---|---|
| Requests (times Claude was asked to do something) | **15,333** |
| Mean context re-read per request | **283,178 tokens** |
| Cache-read total | 4,341,972,493 |
| Cache-create total | 72,095,196 |
| Output total | 17,717,274 |
| Fresh input total | **59,134** |

At Opus 5 rates ($5/M input · $25/M output · cache read 0.1× = $0.50/M · cache write 1.25–2× =
$6.25–10/M — formula and multipliers verified 2026-08-31 against
`platform.claude.com/docs/en/build-with-claude/vision` and the bundled `prompt-caching.md`):

| Cost class | Money | Share |
|---|---|---|
| **Cache-read (re-reading the chat)** | **~$2,171** | **65–71%** |
| Cache-create | $451–721 | 15–22% |
| Output (writing) | $443 | 13–14% |
| **Fresh input (where images arrive)** | **$0.30** | **0.01%** |

Total ≈ $3,065–3,335. `ccusage` reports $3,671 for this project over the same window; the gap is
subagent sessions logged under other paths, plus model mix. The *shares* are what matter.

### What is actually sitting in those 283,000 tokens

6.71M tokens of conversation content across the 11 sessions:

| Category | Tokens | Share |
|---|---|---|
| **tool_use inputs — what Claude WRITES into tool calls** | 3,133,869 | **46.7%** |
| **tool_result text — what tools return** | 2,319,873 | **34.6%** |
| user text | 454,674 | 6.8% |
| thinking | 277,520 | 4.1% |
| **images (exact formula, all 204, PNG + JPEG headers parsed)** | **327,751** | **4.1%** |
| assistant text | 253,085 | 3.8% |

Images: 204 total · mean 1,607 tokens · median 2,021 · largest 3,384 · none hit the 4,784 cap
(your renders are 130 DPI, per START-HERE §5). Carried across all requests ≈ 268M cache-read
tokens ≈ **6% of cache-read ≈ $135 ≈ ~4% of the bill.**

**Bash is the single largest line item.** 5,957 calls — 39% of all requests — 13.0 MB of command
strings and output = **48% of all conversation content**. At $0.1416 per request, the Bash
round-trips alone account for roughly **$845**.

### The two facts that drive every decision below

1. **Cost ≈ (number of requests) × (mean context size) × $0.50/M.** Nothing else is close.
   Both factors are free to attack. Neither is attacked by OCR.

> **⚠️ Debate round 1 correction — this is a historical fit, not a forecast model.** The full model
> is `C = pᵣR + p_wW + pᵢI + p_oO`, where `W` is cache **writes**. My version omits the write cost
> incurred at every compaction and the output cost of the compaction summary. That omission is not
> academic here: cache-create is only **1.66%** of cache-read *volume* but **15–22% of the money*,
> because writes cost 12.5–20× what reads cost. **Any change that increases compaction frequency
> must be forecast with `W` in it.** *(Also raised: a premium long-context rate above 200k input
> tokens exists on some API tiers. I have **not** verified whether it applies to Opus 5 under this
> subscription — marked unverified, not folded into any number below.)*
2. **Everything Claude writes is paid twice** — once to produce it (~$25/M), then again on every
   later request in that session (~$0.50/M each time). Producing a 3,000-token question costs
   $0.075. If 500 more requests follow it in the same chat, re-reading it costs **$0.75 — ten
   times the writing cost.**

**Independently corroborated.** Anthropic's own Claude Code blog states the same model almost
verbatim: *"Nothing gets sent just once... gets sent again on every turn after it, for the rest of
the session,"* and *"One long session costs more than the same work spread over a few short ones,
and by more than you'd think, because turn 40 is also re-reading the 39 turns before it."*
(https://claude.com/blog/maximizing-the-value-of-your-claude-code-sessions). A separate user report
measured cache-read at 99.93% of tokens on a real project
(https://github.com/anthropics/claude-code/issues/24147 — unresolved user report, directionally
consistent).

**Honest nuance found in research:** one practitioner argues long *continuous* sessions are
cheaper because the cache stays warm (https://recca0120.github.io/en/2026/04/13/claude-code-session-cost-cache-misconception/).
Read closely this is not a contradiction — both sources recommend clearing between **unrelated**
tasks, not blanket short sessions. The rule below is therefore *"end at a task boundary, and cap
the window mechanically"*, not *"restart constantly"*.

### Measured and rejected as levers

- **Instruction files** (`CLAUDE.md` + `MEMORY.md` at user, workspace and project level + `RTK.md`):
  **55,093 bytes ≈ 13,773 tokens loaded on every request**, reloaded after every `/compact`
  (documented: https://code.claude.com/docs/en/context-window). Project-wide ≈ 211M cache-read
  tokens ≈ **$106**. Real, but only **4.9%** of the 283k mean context, all files are already inside
  the 200-line rule, and the content is load-bearing safety rules. **Not worth cutting.**
- **`token-optimizer`** (https://github.com/alexgreensh/token-optimizer): active, real mechanism,
  but PolyForm **Noncommercial** license and its own README documents Windows install friction.
  **Rejected.**
- **`tamp`** (https://github.com/sliday/tamp): its optional `textpress` stage routes content
  through OpenRouter — that would send copyrighted book text to a third party. **Rejected on the
  data rule.** (Maintainer's own fixtures also show 45.1%→45.3%, far below the headline claim.)
- **`claude-token-efficient`**: a CLAUDE.md that asks for terser replies. Touches output verbosity
  only, not the re-read multiplier. **Rejected as irrelevant.**

---

## Goal and finish line

> ### ⛔⛔ ROUND-4 VERDICT — THE GOAL ITSELF WAS WRONG. This supersedes the whole document.
>
> Four rounds went into making question *production* cheaper. Round 4's closing line is the one
> that matters: **"the exam does not reward production."**
>
> I put the scope question to round 4 and it answered it without hedging, and the reasoning holds:
>
> - 773 questions in five days is **155 per day** before revision, ENT, source-checking or sleep.
>   Not a hard target — **impossible under this plan's own acceptance standard.**
> - New questions consume creation, validation *and later review* time. Existing questions surface
>   weak retrieval **now**.
> - More cards create the **illusion of coverage while reducing repetitions per card.**
> - **"63% complete" measures progress through a book, not readiness for an exam.** That is the
>   sharpest sentence in four rounds and it invalidates the metric the whole plan was pacing.
>
> **The 27 September target, restated and adopted:**
>
> > Use the existing ENT and ophthalmology corpus to **find and correct retrieval failures**. Add
> > no new app questions except a small number of **documented high-yield coverage gaps** found
> > during revision. **No question-count target of any kind.**
>
> *"If a question has not been retrieved twice, question 1,331 is not helping you."*
>
> **⚠️ This is a study decision, not a token decision, and it is yours — I am recording a
> recommendation, not executing one.** It is also the largest change in four rounds: it does not
> defer the plan, it **changes what the plan was for.**
>
> **The consequence nobody stated, and it is bigger than the deferral.** If the corpus stops being
> a backlog to burn down and becomes something extended **on demand**, then **throughput was never
> the requirement — friction was.** A pipeline built for 773 questions is the wrong shape for the
> ~15 a revision pass might surface. **That kills levers 3, 4 and OCR permanently, not until
> October** — they are all throughput plays. What survives is only what lowers the cost of adding
> *one* question without ceremony.
>
> **One amendment I am making to round 4.** It says gaps found in revision may be filled. In
> practice a gap found on 25 September cannot be turned into a reviewed app question before the
> 27th. So: **inside ~5 days of an exam, a discovered gap is read from the book page, not built
> into the app.** The gap list is for the second peds date (18–19 Oct) and for next year.

> ### ⛔ ROUND-3 VERDICT — NOTHING IS BUILT BEFORE THE EXAMS. This supersedes everything below it.
>
> Debate round 3 refused the four-item hardening day, and it is right. **Block 1 is cancelled.**
>
> The plan's own logic kills it: the four items are not four chores, they are **four coupled
> changes** — a new write path into the fragile canonical file, a new measurement layer, a new
> instruction-loading regime, a new source-retrieval regime. Change all four and the pilot cannot
> attribute its own result. If cost falls you will not know which change did it; if quality falls
> you will not know where. That is not a pilot, it is an unattributable release, and I had
> mislabelled it.
>
> The argument I cannot answer: **the scarce resource before the exams is verified study coverage
> and attention, not dollars.** Money errors are recoverable — a bad week resets. Two lost
> high-focus revision days before an OSCE are not. A workflow that cuts the token bill 80% and
> costs 15% of the questions, or two days of revision, loses.
>
> **The September plan is therefore observation only** — see "What September actually is" below.
> The build window opens no earlier than **28 September**, and the decision about whether it opens
> at all is made then, from the observational ledger, not now.

**Restated after debate round 2, still the target — but for the build window, not for September.**

> Prove that **one bounded, source-cited question-production workflow is cheaper and no worse
> clinically** than the old agent loop.

Not "cut the bill 65%". Not "build a pipeline". One workflow, proven on a small stratified batch,
against a matched baseline. If it cannot be proven in 20 questions, **stop building and study.**

### ⚠️ Correcting round 3's arithmetic — and the correction cuts against me, not for me

Round 3 wrote *"773 questions left and 14 days: about 55 accepted questions per day."* **That pairs
the wrong deadline with the wrong backlog.** The 773 remaining questions are **ophthalmology**,
whose exam is **27 September** — 27 days out, not 14. Peds theory is complete (51/51 chapters) and
is the studyable material for 14 and 17 September; the peds *banks* are aimed at 18–19 October.

But the corrected version is **worse for me, not better**, and this is the thing neither of us had
written down:

| Window | What it is really for | Days |
|---|---|---|
| now → 17 Sep | Peds OSCE (14th) + peds papers (17th) — **revision, not production** | 17 |
| 17 → 22 Sep | ENT (22nd). Module closed, 2,240 q shipped — **revision only** | 5 |
| 22 → 27 Sep | Ophtho (27th) — the only ophtho production window, **while also revising** | 5 |

A hardening day and a pilot run *now*, which means they come out of **peds revision time before
the nearest exam** — not out of ophtho production time. That is a straightforwardly worse trade
than round 3 described.

**And it exposes a larger question I put to round 4 rather than answer myself.** Ophtho is
**1,330 of ~2,103 questions already shipped (63%)**. The realistic ophtho production window is
about five days. 773 questions in five days is not achievable at any token price, with or without
this plan. So the honest question is not *"how do we produce 773 questions more cheaply"* — it is
**"is the marginal value of ophtho question 1,331 higher than the value of revising the 1,330 that
already exist?"**

> **✅ ANSWERED IN ROUND 4: no.** See the ROUND-4 VERDICT box at the head of this section. The
> ophtho target is now revision and retrieval-failure correction, with no question-count target.
> **One thing I cannot claim and am not claiming:** whether the *unbuilt* 773 contain a high-yield
> topic absent from the shipped 1,330. I have not checked, and the remaining questions are simply
> the back halves of two books. Round 4's answer to that is right — a **coverage hole is found
> during revision**, one gap at a time, not predicted from a page count.

Longer-term, unchanged: finish the remaining question-bank work **exam by exam, in date order**,
at materially lower cost per *accepted* question, **with no new paid services**, and with no drop
in transcription accuracy.

> **⚠️ Wording fixed after debate round 1 — "strictly $0" and "$180–230" were flatly incompatible,
> and that was my sloppiness, not a hidden assumption.** The two numbers measure different things:
> - **"$0" means no NEW spend** — no Mistral, no OCR API, no new subscription, no top-up. That
>   constraint is unchanged and absolute.
> - **The dollar figures are usage-limit consumption priced at API rates**, which is what `ccusage`
>   reports. You are on a subscription with weekly limits; no invoice grows when a session runs
>   long. The cost being attacked is *your weekly ceiling*, and dollars are just the readable unit
>   for it. "2× over at the checkpoint" therefore means "burning the week twice as fast as
>   planned", not "an unexpected bill".
>
> Everything in this plan runs on tools already installed and already paid for.

> **Separately raised and worth your knowing, but load-bearing for nothing here:** commercial API /
> Work-plan inputs are not used for training by default, while consumer plans have their own
> policy (https://privacy.anthropic.com/en/articles/7996885-how-do-you-use-personal-data-in-model-training).
> **I have not verified which applies to your account and am not claiming to have.** It changes no
> decision in this plan: the never-send-to-a-training-service rule was aimed at *third parties*
> (Gemini free tier, OpenRouter), and book content already passes through Claude either way. Worth
> checking for your own reasons; not a gate on any block below.

Recorded exam dates (user, 2026-08-13): Peds OSCE **14 Sep** · Peds papers **17 Sep** ·
ENT **22 Sep** *(module closed)* · Ophtho **27 Sep** · Neuro **3 Oct** · Peds papers **18–19 Oct**.

> **⚠️ Assumption to confirm before block 1.** Date order puts Peds first (14 Sep), but the corpus
> holds only **81 peds bank questions** against peds banks totalling ~4,088 pages — unreachable in
> two weeks at any budget. Peds *theory* is complete (51 chapters), which is the studyable material
> for 14/17 Sep. So this plan assumes **Ophtho (27 Sep, ~773 questions left) is the live target**,
> with peds banks aimed at their second date, **18–19 Oct**. If that is wrong, block order changes;
> nothing else does — every lever below is module-agnostic.

---

## OCR — REVISED after debate round 1. Not cancelled. Re-scoped to index-only.

**I had this wrong, and the correction is worth stating plainly.** My reasoning was: images are 4%
of the bill, so OCR chases 4%. That arithmetic is right *for the use OCR was designed for* —
replacing a page image with equivalent text **inside the same enormous chat**. The debate's counter
is that this was a bad project regardless, and that OCR's real value is different:

> **OCR is not a cheaper way to read a page. It is what lets a local script pick the right 1–3
> paragraphs so the model never opens the page corpus at all.** Treat OCR quality as an *index*,
> not as medical truth.

That defeats my objections 4 and 5, and it defeats them cleanly — **an index does not have to be
accurate to be useful.** The 2026-08-30 verdict killed OCR-as-transcription-source because a
fluent, high-confidence stem with a silent clinical inversion ships wrong. None of that applies to
using OCR text to answer *"which pages contain glaucoma questions"* or *"where does Q47 start"*.
No clinical claim is ever made from the index.

**What OCR is now for (all free, all local, Tesseract 5.4 already installed):**

| Use | Asserts a clinical fact? | Needs accuracy? |
|---|---|---|
| Locate topic → page range, so a subagent gets 6 pages not 60 | no | no |
| Find question boundaries, so briefs say "Q40–Q60" not "pages 12–18" | no | no |
| Feed `tools\sweep.js` text so duplicate-hunting never pulls corpus into context | no | no — ranking only |
| Figure detection by inverting word boxes (free, already designed, §6 of the pipeline file) | no | no |
| **Transcribing a question** | **yes** | **yes — stays visual, unchanged** |

**Bonus: this route is cheaper to build than the parked one.** `tools\ocr-gate.js` currently HALTs
on every real page because running headers fall outside the 4% strip. For index use **the gate is
bypassed entirely** — raw TSV is enough. The six required changes from the 2026-08-30 verdict were
all about making OCR safe to *trust*; none are needed to make it useful to *search*.

**What stays parked:** OCR as a transcription source, the confidence gate, and both paid rungs
(Mistral $19; tiled ~$5 — dead under the no-new-spend rule regardless).

**What I still refute:** the debate also argued OCR "prevents your new, shorter sessions from
forcing image reattachment." Not materially true here — each bank subagent reads a page range once
and its context dies with it; there is no re-attachment loop to prevent. Small effect, not counted.

### Three pass/fail tests — adopted from debate round 2, so this cannot quietly become a project

The debate's warning is fair and aimed at me: index-only OCR is real **if it does one job**, and it
is *"attachment-driven nonsense"* if it grows deskewing, cleanup, perfect transcription, embeddings,
a search UI, or corpus-wide correctness fixes before the exam. So it must pass all three:

1. **No manual OCR correction. Ever.** The moment anyone hand-fixes OCR text, the lever has failed
   its own premise — it was supposed to be disposable.
2. **On 20 blinded known questions, the correct page is in the top five results ≥90% of the time.**
   ⚠️ **Round-3 reframe, adopted: this test can only reject, never confirm.** 18 hits out of 20 is
   a 90% point estimate with a confidence interval of roughly **70%–97%** — wide enough that
   "passed" means only *"not obviously broken, keep testing"*. It is a screening-out test. It does
   **not** establish a reliable 90% retrieval system and the plan no longer claims it does.
3. **It reduces source-finding time or transmitted source context** without increasing
   source-verification failures.

**Miss any one → freeze it.** Keep raw OCR as a disposable local index; the scan stays the
authority.

**Scope — corrected after round 3, and the correction is real.** I had written *"current and next
module only"* and called it hard-limited. It is not a limit: ophtho + peds is **2,442 + ~4,088
pages ≈ 6,500**, which is the whole remaining corpus minus ENT. A module is not a bounded unit;
it only sounds like one.

> **Scoped by pages, not by modules: the first ~40 source pages the pilot actually needs, or two
> hours of wall-clock, whichever comes first.** Nothing beyond that without a new decision.

*(Figure correction issued in round 2 and still standing: 204 was my count of **images in the chat
transcripts**, not pages. The books run **12,537 pages**, ~9,100 still untranscribed, ophtho's
endpoint alone 2,442.)*

**And OCR does not run in September at all** — it is one of the four coupled changes round 3
refused. It moves into the build window with everything else.

**Revised action:** `progress\ocr-pipeline.md` is amended, not parked — its transcription half moves
to `ideas-parking.md`, its index half becomes a dependency of the structural change below.

---

## The structural change — adopted from debate round 1, now the spine of the plan

The sharpest thing the debate said, and it reframes everything under it:

> **You are using an agentic coding loop as a content-production line. That is why Bash is 48% of
> conversation content.**

That is a better explanation of my own measurement than the one I gave. I read "46.7% tool_use
inputs" as *"Claude writes too much into tool calls"* and prescribed batching. The real reading is
**the model is being used as a data mover** — shuttling bytes that a local script should move
deterministically. Batching a data-mover from 4 calls to 2 still leaves a data-mover.

**The target is therefore not "3.94 → 2 requests per question." It is a different shape:**

1. **Local**: OCR → index → excerpt selection → duplicate candidates → validation. No model.
2. **One bounded generation call** per batch: a small source excerpt in, strict JSON out.
3. **Local deterministic checks**: schema, IDs, citations, duplicates, length, answer fields.
4. **One repair call** — for failed records only, not the whole batch.
5. **App development happens in separate, occasional sessions** — never inside a content session.

A content-generation session must not read the app, the corpus, the duplicate set, or the 191 KB
brief. It gets a compact task-specific brief and its candidates. Nothing else.

**One amendment I am making to the debate's version.** It proposed the generation call take "a
small source excerpt and strict JSON output." For *drafting* that is right. But §5's eight
structural traps and the crop rule ("LOOK AT EVERY CROP — 13 of 13 Grade Gain crops were wrong on
the first attempt") encode real, repeated failures. So step 2 carries **excerpt + tight crop**, and
the compact brief keeps the traps. Compacting the brief is lever 6; gutting it is not.

Levers 1–8 below still hold. They are now **subordinate** to this shape rather than the whole plan.

---

## The levers, ranked by measured size

### 0 — Cap the context mechanically, not by willpower (free, one settings change, PILOT FIRST)
**This is new, and it is the most important change in the plan.** Research confirmed
`autoCompactWindow` accepts a **minimum of 100000** — it is currently pinned at 200000, and the
measured mean is 283,178. Lowering it to **100000** caps the window without relying on anyone
remembering to end a session. Documented at https://code.claude.com/docs/en/settings-reference.

Two supporting settings, both confirmed at https://code.claude.com/docs/en/env-vars:
- `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` (1–100) — fires compaction *earlier* inside the window.
- `BASH_MAX_OUTPUT_LENGTH` — chars of Bash output kept in context, **default 30,000**. Your
  average Bash result is ~1,173 bytes, so the ceiling is not the usual case; lowering it to ~8,000
  caps the rare verbose command that otherwise parks 30k chars in context permanently.

**⚠️ Pilot before adopting — now with the break-even stated, from debate round 1.** `/compact` is
not free: it re-injects startup content, up to the 5 most-recently-modified files, and invoked
skills at up to 5,000 tokens each (https://code.claude.com/docs/en/context-window). The cap wins
only when

> **N > (p_w/pᵣ) × I_c / ΔW**

— where `I_c` is what compaction re-injects, `ΔW` is the cached tokens each later request avoids,
and `N` is the requests before the next compaction. **The debate used 12.5 for the price ratio;
for this session's 1-hour cache TTL it is 20**, so the bar is higher than they stated. At
`I_c ≈ 40k` and `ΔW ≈ 100k`, break-even is ~8 requests. At `I_c ≈ 100k` it is ~20.

**The specific danger, and it is a real one:** "up to the 5 most-recently-modified files" in a
content block means the files this workflow just modified — and `questions.ophtho.js` is **4.9 MB**.
If a compaction re-injects that, `I_c` is not 40k, and more frequent compaction is catastrophically
worse, not better. **Verify what actually gets re-injected before trusting the cap.** This is
lever 0's kill condition and the reason it is piloted rather than adopted.

**⚠️ Levers 0 and 1 are not independent** — both shrink the same variable. If ending sessions at
task boundaries already keeps working context under 100k, the cap adds nothing; if the cap does the
work, the habit adds nothing. **The forecast must use one observed post-change context size, never
the product of two claimed reductions.** My original forecast made exactly that error.

### 1 — Session policy, measured — NOT a ritual (free, no build)
**Revised after debate round 2: "task boundary" is not an economic unit, and starting a session is
not free.** A fresh session must cache-*write* the whole startup payload — instruction files alone
are 13,773 tokens, and at 1-hour TTL writes cost 2× base input (~$10/M). **Booting a session costs
roughly $0.14** — about one request's worth.

So the honest arithmetic, which the debate asked for and I owe it:

- Old session at 283k vs new at 100k → each later request saves 183k × $0.50/M ≈ **$0.0915**.
- Boot cost ≈ $0.14 → **break-even at ~2 requests.**

**Which means ending sessions is cheap and almost always wins — but the reason matters, and one
refinement neither side raised:** the 1-hour TTL cuts both ways. Resuming a session after an
overnight gap re-writes the cache anyway, so **ending a session at the end of a work block is
nearly free**. Ending one mid-block by ritual is the version that can lose.

> **⚠️ Round 4 conceded this CONDITIONALLY, and the condition is not verified.** The arithmetic
> above (cold 283k session re-writes at ~$2.83; fresh boot writes 13,773 tokens at ~$0.14) assumes
> **the tool actually re-writes the whole retained prefix on resume.** If it compacts or drops
> context first, the cold write is smaller and the conclusion weakens. **So this stays a
> hypothesis:** log wall-clock timestamps *and* actual `cache_creation_input_tokens` on the first
> few resumed sessions, and confirm from the transcripts — which already record both. Nothing in
> September depends on the answer; it is priced in October.

**Policy, and it is a measurement not a rule until the pilot returns:** end at the end of a work
block, or when the next task does not need the current task's trace. Compare against the
alternative the debate named — *continue but explicitly clear irrelevant work* — using the pilot's
logged compaction and cache-write counts. `resume-<mod>.md` is what makes either option cheap;
keeping it current is part of "done".

### 2 — Fewer, bigger requests (free, no build)
15,333 requests for 3,891 questions = **3.94 requests per finished question**.

> **⚠️ Round-2 correction: the batching advice is withdrawn.** I had said "chain shell steps into
> one call with `&&`". The debate is right that this is a trap — *a giant batch that emits huge
> output, fails opaquely, and needs a repair turn is worse than several small deterministic
> commands.* Chasing a request count optimises the data-mover instead of removing it.

**The rule that replaces it:** Claude does not orchestrate routine file operations **at all**. A
fixed local script runs them; Claude receives **its result or its exceptions** — never the traffic.
- Do not verify by reading a file back — the §7 validator is already a script; run it once per
  splice.
- No exploratory `ls`/`cat` for something the next command reveals anyway.

**Revised after debate round 1:** "~2 requests per question" is the wrong target — it optimises a
data-mover instead of removing it. The real target is the **step-2 shape above**: one bounded
generation call per batch plus one repair call for failed records only. Request count then falls
out of the structure rather than being chased by hand. Measure **cost per *accepted* question**,
not requests per question.

### 3 — A splice script, so question text never enters the hub (small build)
Measured: Edit 1,201 calls / 2.40 MB + Write 309 calls / 1.94 MB = **4.34 MB ≈ 1.09M tokens of
question text typed *through* the hub's context** — then re-read on every later request.

The subagent protocol already keeps question text out of the hub ("Return ONLY a compact
manifest — no question text"). The leak is the **splice**, where the hub reads the draft and
Edits entries into `app\data\questions.<mod>.js`.

Build `tools\splice.js` (vanilla Node, no dependencies, matching `ocr-gate.js`'s style): reads
`content\<mod>\qb-pages\<bank>-t<n>.draft.js`, appends its entries to the data file, writes
atomically (temp file + rename), and prints **only counts**. The hub invokes it — still the sole
writer, still one batch at a time, so the rule that "two writers corrupt it silently" is
preserved. The bytes never pass through a context window.

**Safety, non-negotiable:** back up the data file before the first run; run the §7 validator
immediately after every splice, exactly as now; keep the marker-delta check.

**Revised after debate round 1 — the safety bar was too low.** Adopted in full:

- Write to a **temp path**, validate the built file there, then **atomically replace**. Never
  mutate in place.
- Assert **record count** and the **full ID set** are preserved plus exactly the new IDs — not just
  that the file parses.
- Run an **app import check** (`vm.createContext`, the mechanism §7's validator already uses) to
  prove the app still interprets the file, not merely that Node can read it.
- **Dated backup + hash** before every run; the operation must be **idempotent** — running it twice
  must not double-insert.

**Where I partly disagree.** The debate called a byte-identical diff "nowhere near sufficient,
it only proves the copied bytes match." That misreads the test I intended, and the plan stated it
too vaguely — my fault. The test is: **take the pre-merge file from git, splice a topic whose
post-merge state is already committed, and compare to the committed result.** The real file is
ground truth for what the splice should produce, so byte-identity does prove the records were added
correctly. It is a strong test *and* it is not sufficient alone — the count/ID/import checks above
are added, not substituted.

**The deeper point is right, and it goes in the parking lot, not this month.** The debate's real
proposal is to stop mutating the monolith at all: keep small immutable ID-named source records and
**generate** `questions.<mod>.js` from them. That is the correct architecture — and Herophilus is
already half-way there, because `content\<mod>\qb-pages\*.array.js` **are** exactly those per-topic
immutable records. But a full rebuild-and-replace fails differently and worse (one bad build takes
everything, versus one bad append taking one topic), and it is a rewrite two weeks before an exam.
**Post-exam target, recorded in `ideas-parking.md`. Open question, cheap to check in block 0:
do the array files cover *every* shipped question, or does early ENT work predate the convention?
If coverage is complete, the rebuild becomes safe to attempt in October.**

### 4 — A sweep-ranking script (small build)
§6 stages A–D and the ranking that feeds E/F are pure string mechanics (normalise: lowercase,
strip punctuation, sort options). §6 insists the *judgement* stays human — "read the ranked list,
do not trust a threshold" — and it does. Build `tools\sweep.js` to emit **only the ranked
candidate pairs**; Claude then judges candidates instead of pulling corpus text into context.

### 5 — Enforce the writing budget you already approved (free, no build)

> ### ⚠️ SAFETY CORRECTION — debate round 2, and this is the most important line in the plan
>
> **"A short wrong rationale is cheaper and more harmful than a long one."**
>
> The debate warned that a 250-word rule can produce bad medicine. It is right, and I introduced
> the risk myself: everywhere above I wrote *"the 250-word rule"*, flattening a two-tier policy
> into a single cap. **That summary was wrong and is corrected throughout.** A word budget is never
> permitted to truncate the reasoning that separates the right answer from the tempting wrong one.
>
> The binding form, by question type — a required field on every record:
>
> | Type | Budget |
> |---|---|
> | **Simple recall** | 250 words maximum |
> | **Applied / vignette** | **enough to distinguish the tempting wrong answer** — length is an outcome, not a target |
> | **Every question, both types** | **exact source-page reference — no exceptions** |
>
> **Both halves of this already exist in Herophilus** — the 2026-08-13 ruling set ~520 words for
> vignettes against ~250 for slide-recall, and page citation is already a standing rule. So this is
> a correction to *my description*, not a new policy. But the correction matters: had the plan
> shipped as "the 250-word rule", it would have pushed a cap onto reasoning questions that must not
> be capped. **Cost savings are never taken out of clinical reasoning.**

The 2026-08-13 ruling set ~520 words for vignettes and **~250 words for straight slide-recall**.
Measured across 1,330 ophtho questions: median explanation **538 words**; only **11%** fall under
300 words; **78%** exceed 450. The cheap tier is decided and unused. Remaining 773 questions at
current length ≈ **567k output tokens**; at the intended mix, materially less — and faster.
Fix: put the budget rule where the subagent actually reads it (see lever 6), with the test stated
as a question the drafter must answer before writing.

### 6 — Split START-HERE.md (free, ~10 minutes)
`START-HERE.md` is **191,038 bytes ≈ 48,000 tokens**. Every bank subagent is told to read it. What
a bank subagent needs — §2–§6 + §10 — is **11,016 bytes ≈ 2,750 tokens**. §12–§14 (**85% of the
file**) is the theory brief, and **theory is 153/153 complete**.

> **⚠️ Round-2 correction — a two-way split can silently delete a constraint.** If a rule that
> matters to bank work happens to live in a theory section, splitting by topic loses it. Adopted
> structure instead — **three parts, not two**:
>
> 1. **A very short non-negotiable global brief, always loaded.** Safety, source citation, output
>    schema, and *no invented clinical facts*. Kept deliberately tiny so it is never the thing
>    anyone trims.
> 2. **Task-specific instructions, retrieved per job** — bank work gets §2–§6 + §10.
> 3. **Theory rules**, referenced only if theory work resumes.
>
> **No agent should have to reconstruct policy from a fragment.** The split is about *retrieval*,
> never about which rules survive.

Split accordingly. Every subagent then carries **~45,000 fewer tokens for its entire life** — the
equivalent of ~22 page images spent before it looks at a single page. Historically 307 Agent
calls; content unchanged, only its location. §5's eight structural traps stay with bank work.

### 7 — Model routing: leave the drafting subagent on Opus
The Agent tool exposes `model`, not `effort`. Drafting is where §5's eight structural traps live
and where a wrong key becomes a wrong clinical fact. **Do not downgrade it.** Only plainly
mechanical helpers (page counting, file inventory) go to Haiku.

### 8 — `rtk` (free, ~5 minutes, low expectation) — verdict: optional, do not count on it
Verified: the tool is **rtk-ai/rtk** (Apache 2.0, active — last push 2026-08-30). Real mechanism:
`rtk init -g` installs a **PreToolUse hook** that rewrites Bash commands through a filter.

Honest bound, now measured: it compresses **Bash `tool_result` output only** — 34.6% of content is
all tool results, of which Bash output is a part. It does **nothing** for the 46.7% that is
`tool_use` inputs (what Claude *writes* into calls), which is the larger half of the Bash bill. Your
own `rtk discover` puts the recoverable amount at **~23.9K tokens across 26 sessions** — against
4.34 *billion* cache-read tokens. Claude Code also documents a native PreToolUse hook that could do
the same thing for free (https://code.claude.com/docs/en/hooks).
**Verdict: take it because it is five minutes and free; do not put it in the forecast.**

---

## What September actually is — revision, one capped QA check, and a two-line ledger

**Rewritten after round 4.** Round 3 made September observation-only. **Round 4 changed what is
being observed**: the work itself is now revision of the existing corpus, not cheaper production
of new questions. Through **27 September** the workflow does not change, nothing is built, and no
question-count target exists.

**Permitted in September — exactly three things, none of which is a build:**

### 1. A daily ledger, deliberately stupid — redesigned after round 4

> **⚠️ My per-block ledger was not free, and round 4's failure prediction is exact:** you skip it
> after exhausting or expensive sessions → **the missing entries cluster on precisely the messy
> sessions that matter** → in October you average the clean ones and conclude the plan works.
> **That is worse than no ledger, because it manufactures precision.** Adopted without argument.
> This is the same guardrail-becomes-rule pattern from pre-mortem item 5, applied to the one thing
> I had left in September.

**And round 4's better idea, which I should have had myself:** the session transcripts already
record requests, cache reads, cache writes and timestamps — **every number in this plan came from
parsing them.** So the ledger does not need to record cost at all. Cost is *derived later, for
free, from data that requires no human consistency.* The hand-written half shrinks to the one
thing the transcripts cannot know: **what the session was for, and whether the output was good.**

**One line per DAY — not per block. Four fields:**

| Field | Note |
|---|---|
| date | ISO. This is the join key to the transcripts; no session IDs needed. |
| accepted-question count | 0 is a real and common value |
| module / what the day was | one or two words |
| **one code, only if unusual** | `cold cache` · `retry` · `source problem` · `missing` |

**Rules that make it honest:** no per-block entries · **no retrospective reconstruction ever** ·
if it was not entered that day it is `missing` · **in October, missing days are missing — not zero
and not the average.** *(One refinement to round 4's own design: I am dropping their "total
recorded Claude cost for the day" column, because it is the field the transcripts already know and
the one most likely to be reconstructed from memory — exactly the fake precision they warned
about.)*

**What it is for, stated small:** whether there were obvious outliers. It is **not** a cost model.

### 2. A failure backlog, in the same file
One line each time the old workflow wastes a turn, re-reads something it should not have, or
returns a question you have to send back. **This becomes October's requirements document**, written
from evidence rather than from my forecasting.

### 3. The incumbent QA sentinel — renamed after round 4, because it is not revision

> **⚠️ Caught doing the exact thing round 3 had just named.** I added this in response to round 3,
> called it "free revision", and used that framing to get it past my own build freeze. Round 4:
> *"it is not free revision; it is a tightly capped risk check that happens to reinforce learning."*
> **That is the sixth instance of the pattern in pre-mortem item 5, and the first one I committed
> after being warned about it.** Renamed, re-ordered and capped accordingly.

**The order matters and I had it wrong.** I wrote *open the page image, then answer it yourself*.
With the page open you are not testing retrieval, you are proofreading. Correct order:

> **1. Answer from memory. 2. Write your reasoning and what page evidence you expect.
> 3. Open the source page. 4. Only then reveal the stored key and explanation.**

**Rules, all adopted from round 4:**
- **10 questions, selected at random** — not favourites, not ones you already suspect.
- **Hard cap of 10, inside one scheduled revision block.** It becomes procrastination the moment it
  grows past ten, turns into a repair campaign, or displaces retrieval practice.
- Log any major defect — **do not let "fixing the corpus" become a September project.**

**What it can and cannot tell you, stated before it runs:**
- **A single defect is decisive** — one wrong key, unsupported claim, or defensible competing
  answer proves the incumbent workflow has a real defect *mode*, which is what this is for.
- **0/10 proves almost nothing.** Zero defects in ten is compatible with a true defect rate up to
  roughly **26%** (95% upper bound). It may **not** be used to call the old workflow safe, and
  10-vs-20 may **not** later be used to claim non-inferiority.
- **Record defect MODES in prose, not a rate.** Writing "2/10" invites exactly the arithmetic round
  4 is warning against. Write what went wrong, or "nothing found in ten."

**Not permitted before 28 September:** the splice path, the brief split, OCR of any kind, the
`autoCompactWindow` change, `sweep.js`, `rtk init -g`, any monolith work, and any pilot. If a thing
would change what a session does, it waits.

### The blinded comparative audit — still round 3's method, still the build window
It needs 20 new-workflow questions, which needs the build round 3 refused, so it cannot run in
September. It is the acceptance protocol for **if** a pilot ever runs — see the pilot section.
**Under round 4's target, it may never be needed at all**, because there may never be a batch of
20 new questions to audit.

## Work-block slicing — build window only, opens no earlier than 28 September

**Block 0 — Confirm and record.** *(first execution session, not this chat — can run any time)*
Re-confirm two things in one line each: **module = Ophtho** and **shape = B**. Copy this plan to
`Herophilus\progress\token-economy\plan.md`. Create `ideas-parking.md` and move the OCR pipeline
into it with the 4% number attached. Create the empty September ledger file. **Amend
`progress\ocr-pipeline.md` so a fresh session cannot mistake it for an active approved plan** — it
currently reads as one. Add to Herophilus `MEMORY.md` (ISO dates, prune to stay under 200 lines):
*2026-08-31 — measured token economy: cache-read 65–71% of bill, images ~4%. **Debate round 3:
no tooling is built before 2026-09-28**; September is observation only. Plan at
`progress\token-economy\plan.md`.*
**Done when:** plan and ledger live in the project folder, OCR is parked, `ocr-pipeline.md` is
marked superseded, MEMORY records the September freeze.

> **⚠️ Re-sliced twice, then cancelled.** Round 1 collapsed three build blocks into one hardening
> day plus a pilot. Round 2 cut that day to four permitted items. **Round 3 cancelled it.** The
> four items below are kept as the *build-window* agenda, not as September work — and they are now
> explicitly **sequenced, not bundled**, because their being simultaneous was round 3's strongest
> objection.

**Block 1 — Splice path only. Against copies. Never the canonical file.**
This is round 3's own fallback and it is the right first step regardless of when it runs: git-check
out a pre-merge file → splice → byte-compare against the committed merge, plus count / ID-set /
`vm.createContext` import check / hash + dated backup / double-run idempotency. **It writes only to
temp paths and test copies until an exam-free day exists.** One change, measured alone.
**Done when:** every assert passes on a copy, and nothing in `app\data\` has been touched.

**Block 2 — One further change, chosen from the ledger, measured alone.** The September ledger and
failure backlog decide which: the brief split, crude local OCR search, or the `autoCompactWindow`
experiment. **Not all three.** Whichever is chosen, `npx ccusage` before and after, and the result
is attributable because nothing else moved.
*(`autoCompactWindow` is the cheapest candidate — a settings value with no data risk and an instant
revert — but round 3 is right that it is a hypothesis, not a new default. It is an experiment with
a same-day revert trigger: if compaction fires more often and cost or interruption rises, it goes
back. It is **not** exempt from the one-change-at-a-time rule.)*

**Block 3 — The 20-question pilot, 2×2 stratified, no subagents.** Run only if blocks 1–2 produced
a change worth measuring. Acceptance is the frozen definition below; quality is judged by the
blinded comparative audit below, not by the same session that wrote the questions.
**⛔ STOP GATE:** if the median misses ~$230/module pace, abandon workflow polish permanently.

**Deferred outright and not scheduled:** `sweep.js` · all monolith redesign · everything else.

---

## Cost forecast — WITHDRAWN as a point estimate, replaced by a measured holdout

**Debate round 1 was right and I am retracting the number.** The original table below is kept only
to show what was wrong with it.

| | Requests | Mean context | Cache-read | Output | **Total** |
|---|---|---|---|---|---|
| **Status quo** | 3,046 | 283k | $431 | $88 | **$550–650** |
| ~~**This plan**~~ *(withdrawn)* | ~1,700 | ~110k | $94 | $60–88 | ~~$180–230~~ |

Four unearned assumptions, all of them the kind most likely to fail:
1. **The reductions compound.** They do not — levers 0 and 1 shrink the *same* variable, and I
   multiplied halved requests by a reduced context as if independent.
2. **Compaction is free.** The model omitted cache-write cost entirely; writes are 15–22% of the
   historical bill.
3. **The word budget moves the mean.** I measured a *median* of 538 words. A rule that trims the
   middle of the distribution while a long tail survives moves the median far more than the mean —
   and the bill is paid on the mean. **Worse for the forecast, better for the medicine:** the
   budget binds only on *simple-recall* questions (vignettes are governed by "enough to distinguish
   the tempting wrong answer"), so it reaches a smaller share of the corpus than I assumed. The
   saving from lever 5 is therefore **smaller than forecast, and that is the correct outcome.**
4. **Lower context has no quality cost.** Untested. Retries and weaker medical questions both
   consume the saving, and the second one is worse than the first.

### What replaces it: a 20-question **stratified** pilot — a gate, not evidence

**Round-2 correction, and it retracts something I adopted in round 1.** I wrote p90 into the plan
after round 1 suggested it; round 2 sharpened its own advice and is right: **with 20 observations
the "90th percentile" is one or two expensive cases.** Twenty can detect a dramatic improvement.
It cannot establish a stable 50% median, and it cannot estimate a p90 at all.

> **⚠️ Round-3 design error, caught and fixed. My 5/5/5/5 was not a stratification.** "Simple
> recall · vignette · clean OCR · poor OCR" are not four peer groups — they are **two dimensions**,
> and I had laid them out as one. Under my design all five poor-OCR items could have been simple
> recall, which hides precisely the failure I claimed the stratification defended against: OCR that
> works for recall and falls apart on vignettes. **Adopted without qualification.**

**The correct design — 2×2, five questions in every cell:**

| | **Clean OCR page** | **Poor OCR / hard source page** |
|---|---|---|
| **Simple recall** | 5 | 5 |
| **Applied / vignette** | 5 | 5 |

**Record per question:** total spend · Claude turns · cache writes and compactions · **wall-clock
idle gaps ≥1 hour** (round 3's point: a study day's pauses turn a planned cache *read* into a cache
*write*, so token classes alone cannot price a session — timestamps can) · retrieval success ·
repair turns · **your own time** · and clinical/source corrections found *afterwards*.

**Decide on the MEDIAN.** Treat the maximum as a temporary safety alarm, **not** a p90 estimate.
**Publish no savings forecast until a second comparable batch exists.**

**Matched baseline, stated honestly:** the comparison is ophtho-vs-ophtho historical rate, which is
the closest match available — but it is *not* stratified, because the old data was never labelled
by question type. So the baseline is approximate and the plan says so rather than pretending
otherwise. A module with cleaner scans or fewer diagrams can fake an optimisation win; the
stratification is the defence.

### "Accepted" — defined NOW, before any results exist

Adopted verbatim in spirit: *if "accepted" means "I felt it was okay at 1 a.m.", the cost metric
will reward lower-quality work.* A question is **accepted** only when all of these hold:

1. Parses and passes the §7 validator.
2. Carries **exact source-page citations — one or more.**
   > **⚠️ Round-3 correction, and it is a clinical one, not a bookkeeping one.** I had written this
   > as a single page, and combined with condition 5 that forces every question to be answerable
   > from one page. **Medicine does not respect page breaks.** A question whose reasoning spans two
   > facing pages would either be truncated into something narrower than the source, or given a
   > single-page attribution that is not true. Multiple exact pages are permitted; vagueness is not.
3. Stem, all options, and the answer key were **checked against the page image** — not against OCR.
4. The explanation distinguishes the tempting wrong answer (vignettes) or is within 250 words
   (recall).
5. No invented clinical fact — nothing asserted that is not on **one of the cited pages**.
6. Passed the **exact / near-lexical duplicate screen.**
   > **⚠️ Round-3 correction, adopted.** I called this "the duplicate check", which implies semantic
   > uniqueness it cannot deliver. Plain text matching catches lexical overlap and nothing else.
   > It **blocks exact duplicates and flags candidates for a human to judge** — a pass is not
   > evidence that a question is conceptually new. §6's own design already said the judgement stays
   > human; my acceptance definition had quietly overstated it.

A question failing any of these is **not accepted**, and every repair turn it consumed still counts
against its cost. **This definition is frozen before the pilot runs.**

> ### ⚠️ What this definition does NOT test — the honest scope limit
>
> All six conditions test **source fidelity**: does the question match what the book prints. None
> of them tests **educational quality**, whether a distractor is misleading, or whether the
> explanation teaches a wrong implication. And every one of them is judged by the same person who
> watched the question being generated.
>
> **So the claim the pilot can support is "source-fidelity checks passed" — NOT "the workflow does
> not make worse medicine."** Round 3 is right that one person who saw the generation process
> cannot certify non-inferiority alone. The plan says the smaller thing.

### The blinded comparative audit — round 3's method, adopted, scheduled for the build window

This is the answer to *"how would you detect a workflow that is cheaper because it is quietly
producing worse medicine?"* It runs **with the pilot**, never before it (it needs the 20 new
questions to exist):

1. Take the 20 new-workflow questions and **20 matched historical questions**, using the 2×2 above.
2. A local script shuffles all 40 and hides workflow origin, answer key, explanation, and citation.
3. **Wait at least 48 hours** after the new questions were produced. *(This is the cheapest
   debiasing element in the whole plan and it costs nothing but patience.)*
4. Review each packet against the original page image. **Before unmasking**, record: your own
   answer · the exact page evidence · whether another option is defensible · whether the stem or
   explanation teaches a misleading implication.
5. **Unmask only after all 40 are scored.** Then compare defect rates.

**Freeze the new workflow immediately on any major defect:** wrong key · unsupported clinical
assertion · defensible competing answer · a misleading explanation that would alter management.

**For real independence:** one other medically-trained person audits 10 randomly selected packets.
Round 3 prices this at $0, and in money it is — but it spends a classmate's afternoon, which is a
real cost the plan should not pretend is free. **If it is not possible, say so and keep the smaller
claim.**

**Honest current range: material savings likely; 35–65% plausible.** Not a point estimate.

**Binding stop rule:** if the median misses a pace of **~$230 per module**, stop investing in
workflow polish and run the boring bounded workflow instead. Elegant factory < shipped questions.

**Checkpoint unchanged and still binding: after any build block, `npx ccusage`; >2× the estimate
means STOP and re-route.**

---

## Two shapes — pick one

| | **Shape A — discipline only** | **Shape B — discipline + two scripts** |
|---|---|---|
| Levers | 1, 2, 5, 6, 7, 8 | all of A, plus 3 and 4 |
| Build time | none | ~2 sessions |
| Money | $0 | $0 |
| Estimated saving | ~45–55% | ~65% |
| Risk | relies entirely on habit holding | a script writes to `questions.ophtho.js` — the exact file the single-writer rule protects |

**Recommendation: B**, because lever 3 attacks the largest measured category (47%) and habit alone
does not. **A is a legitimate choice** if you want nothing new touching the data file two weeks
before exams — it captures most of the saving with zero new risk.

**Selected: Shape B**, with lever 0 added to both shapes (it is a settings value, carries no data
risk, and belongs in A as much as in B). **Selected module: Ophtho, 27 Sep.**
⚠️ Both selections came back through a question prompt whose provenance I could not verify, so
**block 0 re-confirms them in one line before any work starts.** Nothing else in the plan depends
on either answer — every lever is module-agnostic, and dropping to Shape A only removes blocks 2–3.

---

## User-labor audit — rewritten after round 3, because September's labour is now the whole plan

**⚠️ The old table said "about 30 minutes total". That was true when the plan's work was building.
Now that September is observation only, the user's labour IS the project, and it is honest to say
so — round 3's warning that a plan can steal "two high-focus days" applies to self-reporting too.**

| Task | You | Time | When |
|---|---|---|---|
| Confirm module (Ophtho) + shape (B), and **accept or reject the round-4 target** (revision-first, no question-count) | two words, then **the biggest decision in this plan** | 5 min | Block 0 |
| **One ledger line at the end of each DAY** — date, accepted count, module, code only if unusual. **No `ccusage`, no cost column** — the transcripts already hold it | one line | ~30 sec × ~27 days ≈ **15 min total** | every day to 27 Sep |
| **Failure backlog line** when the old workflow wastes a turn | one line, when it happens | ~10 min total | as it happens |
| **The QA sentinel** — 10 *randomly selected* shipped ophtho questions: answer from memory → check the page → then unmask the key | real review work. **It is a capped risk check that happens to reinforce learning — not revision** | 20–30 min, hard cap | once, one block, before 14 Sep |
| Paste the debate brief into ChatGPT and the critique back | copy/paste | ~5 min per round | now |
| *(Build window only)* the blinded comparative audit, 40 masked packets | real review work, **not** revision | ~2 h + a 48 h wait | Oct, if it runs |
| *(Build window only)* a second medically-trained reader, 10 packets | asking a classmate | $0 in money, an afternoon of theirs | Oct, if possible |

**September total ≈ 1 hour spread over four weeks.** ~30 minutes of it reinforces learning as a
side effect; none of it is a substitute for revision, and the plan no longer claims otherwise.
**No installs, no sign-ins, no payments, no uploads.** `rtk init -g` is dropped from September —
it is a workflow change, and workflow changes are frozen.

---

## Pre-mortem

1. **The splice script corrupts `questions.ophtho.js`.**
   *Tripwire:* §7 validator fails immediately after the first scripted splice, or the pilot diff
   is not byte-identical. *Plan B:* restore the block-2 backup, revert to hub-Edit splicing —
   i.e. fall back to Shape A. Cost of being wrong: one session.
2. **Session discipline collapses under exam pressure** and context creeps back to 283k.
   *Much less likely now that lever 0 exists* — the cap is a settings value, not a habit, so
   forgetting cannot re-inflate the window. The residual risk is the opposite one: **compaction
   thrashing**, where compacting twice as often costs more than it saves because `/compact`
   re-injects instruction files, up to 5 recent files, and skills each time.
   *Tripwire:* the first post-change ccusage checkpoint shows >2× the estimate, or cache-*create*
   rises sharply while cache-read falls. *Plan B:* raise `autoCompactWindow` back toward 150000 and
   rely on lever 1's task-boundary `/clear` instead. **Round 3 note: this whole lever is frozen
   until 28 September, so the tripwire cannot fire before then.**
3. **Three weeks go to the wrong module.**
   *Tripwire:* the block-0 confirmation. *Plan B:* reorder the blocks; every lever is
   module-agnostic, so no work is lost.

4. **Added after debate round 1 — the factory outlives the exams.** Two weeks go into tooling and
   fewer questions ship than a boring bounded workflow would have produced. This is the most
   likely failure mode now, and it is the one I built into the plan by proposing three build
   blocks before a single extra question shipped.
   *Tripwire — rewritten after round 3, because the old one had a September date on it and round 3
   removed September from the build calendar entirely.* The tripwire is now: **any build activity
   dated before 2026-09-28**, or a pilot median that misses the ~$230/module pace. *Plan B:* freeze
   tooling where it stands, run the boring workflow to the exams, resume from the ledger.
   **This was the most likely failure mode, and round 3 is the reason it is now the least likely:
   the plan no longer contains a September build to overrun.**

5. **Added after debate round 3 — the standing failure mode, and it is mine, not the plan's.**
   Round 3 named the pattern behind every correction across three rounds: **I take a useful
   guardrail, promote it into a universal rule, and then treat the rule as evidence.** Five
   instances in this one document — *"the 250-word rule"* (a two-tier policy flattened into a cap),
   *"one-page citation"* (a bookkeeping convenience turned into a clinical constraint),
   *"the duplicate check"* (lexical matching described as uniqueness), *"the 90% target"* (a
   screening test described as validation), and *"the four-item hardening day"* (a release
   described as discipline because it was bounded). **Bounded is not the same as safe, and a rule I
   wrote is not a measurement.**
   *Tripwire:* any sentence in this plan that states a threshold without stating what it was
   measured on. *Plan B:* rewrite it as a question rather than a rule.

*External killer:* weekly usage limits reset — a bad week can strand a module mid-bank. The
exam-by-exam ordering already stops at clean boundaries, which is the mitigation.

---

## Backup before build

Before **any** block touches `app\data\`, copy to `progress\token-economy\backup-<ISO date>\`:
`app\data\questions.ophtho.js` (4.9 MB) · `app\data\cases.ophtho.js` · `progress\ledger.md`
(822 KB).
**⚠️ Flag:** `content\<mod>\qb-pages\*.array.js` are the *permanent verbatim record* of what the
books print and exist in **only one place**. Back them up too.

---

## Scope parking lot

`D:\claude os\Medical school\Herophilus\ideas-parking.md`. Mid-build ideas go there, never into
the current block. First entries: the OCR pipeline (with the 4% number) and the endpoint books.

## Where this project lives

Inside Herophilus, at `progress\token-economy\` — not a new top-level folder. Workspace §4 says
reuse before inventing a parallel folder, and every output here (scripts in `tools\`, rules in
Herophilus `CLAUDE.md`, split briefs in `progress\briefs\`) belongs to Herophilus.

## Afterlife

The levers become a token-economy section in Herophilus `CLAUDE.md`; the scripts live in `tools\`
alongside `ocr-gate.js`. When the last exam passes (**18–19 Oct 2026**), archive this plan and the
debate log into `progress\`, keep only the rules, and delete the backups once the corpus is
committed and validated.

---

## Verification — how each change is proved, not assumed

Nothing here is trusted on reasoning. Each lever has a measurement that either confirms it or kills
it, and all of them are free.

| Lever | How it is verified | Kill condition |
|---|---|---|
| 0 — context cap | `npx ccusage` before vs after on the same kind of work, **plus a direct check of what `/compact` re-injects** | cost/accepted-question rises; cache-**create** climbs while cache-read falls; or a multi-MB data file appears in the re-injected set → revert toward 150000 |
| **OCR-as-index** | on one topic's page range: does the index put the subagent on the right pages? | it cannot locate topics reliably → drop the index, keep manual page ranges. **Never** promoted to a transcription source — that stays parked |
| 1, 2 — session + request discipline | requests-per-finished-question from the transcript parser (currently **3.94**) | stays above ~3 after the change → the discipline is not holding; fall back on lever 0 alone |
| 3 — `tools\splice.js` | **git-checkout the pre-merge file**, splice a topic whose merged result is already committed, `fc /b` against that committed result — **byte-identical**; PLUS record-count assert, full ID-set assert, `vm.createContext` app-import check, hash + dated backup, and a double-run idempotency test | any diff, any assert, any validator failure → restore backup, drop to Shape A |
| 4 — `tools\sweep.js` | run against a topic whose folds are already recorded in `ledger.md`; it must surface **every** known fold in its ranked list | one known fold missing → do not use it; keep the manual sweep |
| 5 — writing budget | median explanation word count of the next drafted topic vs the ~250/~520 targets | median still >450 on recall questions → the rule is in the wrong file; move it |
| 6 — brief split | `START-HERE-bank.md` byte size ≤ ~12 KB, and one subagent completes a full topic reading only it | subagent asks for a rule that is not in the bank file → move that rule in, do not re-merge |
| 8 — rtk | `rtk gain` after one block | no measurable saving → uninstall the hook |

**The one binding gate — restated after round 3.** Every lever in this table is **frozen until
28 September**; none of them may be verified before then, because verifying them means running
them. The gate that applies in September is different and simpler: **if this plan causes any
change to a session's behaviour before 28 September, it has already failed its own rule.**
After the first build-window change: `npx ccusage`; more than 2× the forecast means stop and
re-route before the next one.

**And one change measured at a time.** A table of eight levers is not a licence to move eight
things — round 3's central objection was coupling, and this table is exactly where that
temptation lives.

---

## NOT doing

**Head of the list after debate round 3, and it outranks every line under it:**

- **Not building ANYTHING before 28 September.** No splice path in production, no brief split, no
  OCR, no `autoCompactWindow` change, no `sweep.js`, no pilot. September is a four-field daily
  ledger, a written failure backlog, and one capped QA sentinel. The build window opens on
  evidence, not on a date I picked while feeling organised — and after round 4 it may not open.
- **Not running the four items together, ever.** They were refused for being simultaneous, not for
  being four. One change at a time, each measured alone, or the pilot cannot attribute its result.
- **Not claiming the acceptance definition proves clinical non-inferiority.** It proves source
  fidelity. The blinded comparative audit is what tests the other thing, and it needs a second
  reader to be worth much.

**Added after debate round 4, and these are permanent, not deferrals:**

- **No question-count target of any kind — for ophtho or any module.** Not 773, not 155/day, not
  "finish the book". *"63% complete" measures progress through a book, not readiness for an exam.*
- **Not building a throughput pipeline at all.** Levers 3, 4 and OCR-as-index were all sized for a
  backlog of 773. If the corpus is extended on demand — roughly the number of gaps one revision
  pass surfaces — **they are the wrong shape permanently, not until October.** What may still earn
  a build is only whatever lowers the cost of adding *one* question without ceremony.
- **Not turning the QA sentinel into a corpus-repair campaign.** Ten questions, one block, and the
  defects are written down, not fixed en masse.
- **Not building a question in the last ~5 days before an exam.** A gap found then is read from the
  book page; it goes on the gap list for 18–19 October or for next year.

- Not building OCR **as a transcription source** (parked — the 2026-08-30 verdict's six changes
  stand unbuilt). *OCR as a local search index is now IN scope — see the revised section above.*
- Not rebuilding `questions.<mod>.js` from source records before the exams — right architecture,
  wrong month. Parked for October.
- Not building `tools\sweep.js` unless the holdout shows duplicate-hunting is actually costing.
- Not chasing "2 requests per question" as a target — it optimises a data-mover instead of
  removing it.
- Not spending money — no Mistral, no tiling pilot, no paid OCR of any kind.
- Not downgrading the drafting subagent below Opus.
- Not changing the *intent* of the single-writer rule — one writer, sequential, one batch at a
  time. Only the mechanism changes.
- Not touching the app, the data schema, the Clepsydra, or the design.
- Not installing spec-kit.
- Not raising `autoCompactWindow` above 200000 — ever. (Lowering it to 100000 is lever 0, and is
  piloted before it is kept.)
- Not installing `token-optimizer` (license), `tamp` (sends content to OpenRouter), or any tool
  whose compression routes book text through a third party.
- Not re-litigating decisions already recorded in `MEMORY.md` (GPU route dead; Gemini free tier
  banned; book content never goes to a training-on-input service).

---

## Phase 6 — ChatGPT debate brief (minimum 3 rounds; round 1 done)

> **Paste this preamble ahead of the brief for round 2**, so the critic attacks the revised plan
> rather than repeating itself:
>
> *You attacked this plan once. I adopted most of it: the cost model now includes cache writes; the
> 100k cap is piloted against the break-even you gave (corrected to a 20× write/read ratio for my
> 1-hour cache TTL, not 12.5) and I now check whether compaction re-injects a 4.9 MB data file; I
> stopped multiplying non-independent reductions; **I un-cancelled OCR and re-scoped it to a local
> search index that never asserts a clinical fact**; I made your structural point — an agentic
> coding loop used as a content-production line — the spine of the plan; I withdrew the $180–230
> forecast for a 20-question holdout scored on median and p90 cost per accepted question; I fixed
> the "$0" wording to mean no new paid services; and I collapsed three build blocks into one
> hardening day plus one pilot with a stop gate.*
>
> *I refused two things. First, your byte-diff objection misread my test: I check a pre-merge file
> spliced and compared against the already-committed merged result, so byte-identity does prove the
> records were added correctly — I added your count/ID/import/idempotency asserts on top rather
> than instead. Second, I deferred rebuilding the 4.9 MB monolith from source records to October;
> it is the right architecture but a rewrite two weeks before an exam fails differently and worse.*
>
> *Now attack the revised plan. Where did I adopt something I should have refused? Is the
> index-only OCR scope real, or am I rescuing a project I was attached to? Is the holdout of 20 big
> enough to distinguish a real 50% saving from noise? And is the hardening day itself still too
> much building, this close to 14 September?*

> **Round 3 preamble — paste this instead, now that round 2 is answered:**
>
> *Round 2 landed. Adopted: session-ending is now a measured policy with the boot cost priced
> (~$0.14, break-even ~2 requests), not a ritual; the shell-batching advice is withdrawn entirely
> in favour of "Claude does not orchestrate file operations at all"; the word budget is now a
> question-type field where vignette length is an outcome rather than a target, because a short
> wrong rationale is more harmful than a long one; the brief split became three parts with a tiny
> always-on safety brief so no agent reconstructs policy from a fragment; OCR carries your three
> pass/fail tests and is capped at ophtho plus peds; the pilot is stratified 5/5/5/5, decided on
> the median with the maximum as an alarm only, p90 removed, and "accepted" frozen as a six-part
> definition before any result exists; the hardening day is cut to four permitted items and the
> pilot runs with no subagents.*
>
> *One factual correction back to you: 204 was my count of images in chat transcripts, not pages.
> The books are 12,537 pages with ~9,100 untranscribed — which makes your no-grand-conversion
> point stronger than you framed it.*
>
> *Round 3, and be harder than round 2. Three specific questions. **First:** is even the four-item
> hardening day the wrong call with 14 September this close — should the honest answer be "build
> nothing, run the old workflow, and revisit in October"? **Second:** the pilot measures cost and
> defines acceptance, but acceptance is judged by the same system that produced the questions; how
> would you detect a workflow that is cheaper because it is quietly producing worse medicine?
> **Third:** what in this plan is still there because I am attached to it rather than because the
> measurement demands it?*

> **Round 4 preamble — paste this instead, now that round 3 is answered:**
>
> *You won round 3. Block 1 is cancelled. The coupling argument is the one I could not answer —
> I had called a four-change release a pilot, and if it had come back cheaper I would have learned
> nothing about which change did it. September is now observation only: a read-only cost ledger,
> a written failure backlog, and nothing that alters a session. The build window opens no earlier
> than 28 September and only on evidence.*
>
> *Also adopted, all of it: the 2×2 strata (my 5/5/5/5 could have hidden OCR failing on vignettes,
> the exact thing it was meant to catch); the blinded comparative audit with the 48-hour delay and
> unmasking only after all 40; the honest claim-scope line — my definition proves source fidelity,
> not "no worse medicine"; OCR scoped to ~40 pages or two hours rather than to "modules", because
> ophtho + peds is 6,500 pages and is not a scope; 18/20 relabelled a screening test with a
> ~70–97% interval; "duplicate check" renamed to an exact/near-lexical screen that flags and never
> certifies; **multiple exact pages now permitted in a citation** — you were right that forcing one
> page can distort the medicine, and that was the sharpest correction in the round. Your
> meta-pattern is pre-mortem item 5 with all five instances named.*
>
> *Three things back to you.*
>
> *__One, an arithmetic correction that goes against me.__ "773 questions, 14 days" pairs the wrong
> backlog with the wrong deadline: the 773 are ophthalmology, whose exam is 27 September; peds
> theory is complete and is what 14 and 17 September are studied from. But corrected, it is worse
> than you said, not better — the build days would come out of peds revision before the nearest
> exam, not out of ophtho production time.*
>
> *__Two, an internal tension.__ Your blinded audit needs 20 new-workflow questions, which needs the
> build you just refused. So it cannot be a September method. I have scheduled it with the pilot
> and said so.*
>
> *__Three, your TTL point runs the other way.__ You argued a study day's pauses can erase the
> two-request break-even. Going cold hurts the big session far more: a cold 283k session re-writes
> at roughly $2.83, a fresh boot writes 13,773 tokens at roughly $0.14. Your instruction — log
> timestamps, not just token classes — is adopted; the conclusion is reversed.*
>
> *Now round 4, on three things I think you have not touched.*
>
> *__First, the scope question underneath all of this.__ Ophthalmology is 1,330 of about 2,103
> questions already shipped — 63%. The realistic production window is roughly five days, 22–27
> September, while also revising. 773 questions in five days is unreachable at any token price,
> with or without this plan. So is the marginal value of ophtho question 1,331 higher than the
> value of revising the 1,330 that already exist? If the answer is no, this entire plan has been
> optimising the cost of work that should not happen. Attack that.*
>
> *__Second, is even the September ledger too much?__ I claim it is free because it is read-only.
> But it asks me to run a command and write a line at the end of every study block, and I am the
> same person who turned a guardrail into a universal rule five times. What is the failure mode of
> a plan whose only remaining action is self-reporting?*
>
> *__Third, the incumbent audit.__ I added it myself: audit 10 already-shipped ophtho questions
> against their page images, because "no worse" is meaningless without the old workflow's defect
> rate, and it doubles as revision. Is that reasoning sound, or have I just invented a new task and
> dressed it as revision to get it past my own freeze?*

> **Round 5 preamble — paste this instead, now that round 4 is answered:**
>
> *Round 4 changed the plan's goal, not its details, and I have adopted it. There is no
> question-count target any more, for ophthalmology or anything else. "63% complete measures
> progress through a book, not readiness for an exam" is the sentence that did it — the metric I
> had been pacing the entire plan against was measuring the wrong thing. September is now:
> revision of the existing ENT and ophthalmology corpus, one capped QA sentinel, and a daily
> four-field ledger. Nothing is built before 28 September.*
>
> *I took your ledger point further than you did. You suggested a daily line including total
> recorded cost. I dropped the cost column entirely — the session transcripts already record
> requests, cache reads, cache writes and timestamps, and every number in this plan came from
> parsing them, so cost is derived later from data that needs no human consistency. The
> hand-written part is only what the transcripts cannot know: what the day was for, and how many
> questions were accepted. Missing days stay missing and are never averaged.*
>
> *The QA sentinel is renamed and re-ordered. You were right that I dressed a new task as
> "revision" to get it past my own freeze — that is the sixth instance of the meta-pattern round 3
> named, and the first one I committed after being warned about it. It is ten random questions,
> one block, hard cap; answer from memory first, then the page, then unmask the key — my original
> order had the page open first, which is proofreading, not retrieval testing. 0/10 is recorded as
> compatible with a true defect rate up to ~26%, and defect modes are written as prose, never as a
> rate.*
>
> *I also extended your argument past where you left it, and I want you to check whether the
> extension holds. If the corpus stops being a backlog to burn down and becomes something extended
> on demand — roughly the number of gaps one revision pass surfaces — then throughput was never
> the requirement; friction was. That kills the splice script, the duplicate-ranking script and
> the OCR index permanently, not until October, because all three were sized for 773 questions.
> The only thing that could still earn a build is whatever lowers the cost of adding ONE question
> without ceremony. Is that extension correct, or am I over-correcting from "produce everything"
> to "produce nothing" in a single round?*
>
> *Three questions for round 5.*
>
> *__First, should this project be closed rather than deferred?__ Its stated purpose was making
> question production cheaper. If production is no longer the goal, the honest answer may be that
> the token-economy project is finished — its output was the measurement (cache-read is 65–71% of
> the bill; images are 4%) and one behavioural rule (end sessions at work-block boundaries), and
> everything else was scaffolding for a goal that no longer exists. What would be lost by deleting
> the rest of the plan instead of scheduling it for 28 September?*
>
> *__Second, ENT.__ Its exam is 22 September and the module is closed at 2,240 shipped questions —
> more than ophthalmology. Every argument you made for auditing ophthalmology applies to it, and
> it is sat earlier. But two sentinels is twenty questions of QA in the three weeks before three
> exams. Does ENT get its own sentinel, does it get the one sentinel instead of ophthalmology, or
> does adding a second one prove I have already started expanding the thing you capped?*
>
> *__Third, and this is the one nobody has asked in four rounds: what is the failure mode of the
> revision-first plan?__ Every round so far has attacked the build and none has attacked the
> alternative. "Revise the existing 1,330" is not self-evidently safe. The app's spaced-retrieval
> scheduler has never been validated. Nobody has measured whether reviewing existing questions
> actually surfaces the gaps that the exam tests, or whether it just re-drills what is already
> known — which is the classic failure of retrieval practice on a corpus you built yourself. If
> revision-first is wrong, how would I find out before 27 September rather than after?*

---

> I have a plan and I want it attacked. Find failure modes, hidden costs, wrong arithmetic,
> simpler alternatives. Be specific and merciless. Do not be agreeable.
>
> **Situation.** I am a medical student, not a programmer. I use Claude Code to turn scanned
> medical question-bank books into a study app. Exams: 14, 17, 22, 27 Sep and 3 Oct 2026. Budget
> is strictly $0 — free tools only. Book content is copyrighted, so it may never go to a free
> service that trains on user data.
>
> **I believed** the cost was page images: the books are image-only scans, Claude must look at
> each page, and images get re-sent with every later message. I had a plan to run OCR (turn page
> pictures into text) to avoid that.
>
> **Then I measured my own transcripts.** 11 sessions, 15,333 requests. Mean context re-read per
> request: 283,178 tokens. Cache-read = 65–71% of the bill; output 13–14%; fresh input (where
> images arrive) 0.01%. Only 204 images exist in the whole project — 327,751 visual tokens total,
> median 2,021 each — carried across all requests they are ~6% of cache-read, about 4% of the
> bill. By contrast: what Claude writes into tool calls is 46.7% of conversation content, tool
> output is 34.6%, and Bash alone is 5,957 calls / 13 MB / 48% of all content.
>
> **My conclusion:** cost ≈ (number of requests) × (mean context size) × cache-read price. So I am
> cancelling the OCR project (it targets ~4%) and instead: (0) lowering my tool's auto-compaction
> window setting from 200,000 to its documented minimum of 100,000 so the context is capped
> mechanically rather than by me remembering — noting that compaction itself re-injects my
> instruction files and up to 5 recent files each time it fires; (1) ending sessions at task
> boundaries instead of carrying one 283k-token chat all day;
> (2) batching shell commands to cut request count from 3.94 to ~2 per finished
> question; (3) writing a small script that splices drafted questions into the data file so that
> text never passes through the chat's context (currently 4.34 MB does); (4) a script that ranks
> duplicate candidates so only candidates, not the corpus, enter context; (5) enforcing a
> shorter-explanation rule I already decided but never applied (median is 538 words against a
> 250-word target for simple recall questions); (6) splitting a 191 KB brief file that every
> sub-agent reads, when it only needs 11 KB of it.
>
> Forecast: finishing my next module costs ~$550–650 as-is, ~$180–230 under this plan.
>
> **Attack it.** Specifically: Is the cost model right? Is capping the window at 100k actually
> cheaper, or does compacting twice as often — each compaction re-injecting instruction files and
> recent files — cost more than it saves? Am I wrong to cancel OCR when it is the only lever that
> attacks a cost that will keep growing as I add pages? Does the splice script risk corrupting a
> 4.9 MB data file that five past incidents say is fragile, and is a byte-identical diff on a copy
> a sufficient test? Is there a bigger lever I have missed — something about how the work itself is
> structured rather than how the chat is managed? Is a ~65% forecast credible, or is it motivated
> reasoning built on a plan I want to be true?

**Debate log** *(fill in as rounds complete)*

| Round | Date | Main objections | What changed in the plan |
|---|---|---|---|
| 1 | 2026-08-31 | (a) cost model omits cache writes + compaction summary; (b) 100k cap not automatically cheaper — break-even `N > (p_w/pᵣ)·I_c/ΔW`; (c) levers 0 and 1 are not independent, don't multiply reductions; (d) **don't cancel OCR — cancel manual OCR cleanup; OCR is an index, not medical truth**; (e) byte-diff insufficient for a 5-incident file; (f) make the monolith generated output, not source of truth; (g) **largest missed lever is structural — an agentic coding loop used as a content-production line**; (h) forecast unearned, use a 20-question holdout scored on median + p90 cost per *accepted* question; (i) "$0" and "$180–230" are incompatible; (j) verify account training policy; (k) one hardening day + one pilot, not two weeks of factory-building | **Adopted (a),(b),(c),(h),(i),(k) in full.** **Adopted (d)** — OCR re-scoped to index-only, un-parked; my 4% arithmetic was right for the wrong use-case. **Adopted (g) as the plan's new spine** — levers demoted to subordinate. **Adopted (f)'s safety discipline** (temp path, count/ID asserts, import check, hash, idempotent) but **deferred the rebuild to October** — right architecture, wrong month. **Partly refuted (e)** — the intended test used a *pre-merge* file vs the *committed* result, which does prove correctness; the plan stated it too vaguely, now fixed, and the extra asserts added anyway. **Refuted:** OCR "prevents image reattachment in shorter sessions" — no such loop in this workflow. **Corrected:** their price ratio 12.5 is the 5-min-TTL figure; this session is 1-hour TTL, so the bar is **20**. **Noted, not adopted:** premium >200k long-context rate — unverified for this account, left out of every number. **(j)** noted; changes no decision here |
| 2 | 2026-08-31 | (a) conceded my byte-diff test is a strong regression oracle; (b) don't end sessions by ritual — booting a session costs cache writes; measure against "continue but clear irrelevant work"; (c) don't batch shell commands to hit a request target — Claude shouldn't orchestrate file ops at all; (d) **a 250-word rule can create bad medicine — "a short wrong rationale is cheaper and more harmful than a long one"**; use a question-type field; (e) splitting the brief can delete constraints — keep a tiny non-negotiable global brief; (f) OCR must pass three pass/fail tests or freeze; current+next module only; (g) **20 cannot estimate a p90** — stratify 5/5/5/5, decide on the median, define "accepted" before seeing results, no forecast until a second batch; (h) hardening day is still six projects — permit only four things; **run the pilot with no subagents** | **Adopted (b)–(h) in full.** **(d) is the plan's most important correction** — I had flattened a two-tier policy into "the 250-word rule"; fixed throughout, and noted that both tiers plus mandatory page citation *already exist* in Herophilus, so this corrected my description rather than the policy. **(g) retracts something I adopted in round 1** — p90 removed, median is the decision metric, "accepted" now frozen as a six-part definition before any result exists. **(e)** turned the two-way split into three parts with an always-on safety brief. **(f)** three tests written in verbatim; scope capped at ophtho + peds. **(h)** block 1 cut to four permitted items; pilot runs subagent-free, flagged as a pilot condition rather than a permanent architecture change. **Corrected:** "204 pages" — 204 was my count of *images in transcripts*; the books are **12,537 pages**, which strengthens their own no-grand-conversion point. **Added, not raised by either side:** the 1-hour TTL means resuming after an overnight gap re-writes the cache anyway, so ending a session at a work-block boundary is nearly free while ending one mid-block by ritual can lose — boot cost ≈ $0.14, break-even ≈ 2 requests |
| 3 | 2026-08-31 | (a) **refuse the four-item hardening day** — four *coupled* changes, not four chores; results unattributable; the scarce resource before the exam is study coverage and attention, not dollars; (b) the 1-hour TTL means a real study day's pauses turn planned cache *reads* into *writes* — measure timestamps, not token classes; (c) **the 5/5/5/5 strata are two dimensions, not four peer groups** — must be a 2×2 with 5 per cell; (d) source fidelity ≠ educational quality, and one reviewer who saw the generation cannot certify non-inferiority — use a blinded comparative audit of 20 new vs 20 matched historical, masked, 48h delay, unmask only after all 40; (e) attachment-driven items: the hardening day · "current and next module" is not a scope · the 100k cap is a hypothesis not a default · 18/20 does not establish 90% · lexical matching is not a duplicate *check* · one-page citation can distort medicine; (f) **the meta-pattern: you turn a guardrail into a universal rule, then mistake the rule for evidence** | **Adopted (a) in full — Block 1 is cancelled and September is observation only.** The coupling argument is the one I could not answer: I had called a four-change release a pilot. **Adopted (c) without qualification** — my strata could have hidden exactly the OCR-fails-on-vignettes failure they were supposed to catch. **Adopted (d)** as the build-window acceptance protocol, plus the honest claim-scope line: the definition proves *source fidelity*, not "no worse medicine". **Adopted every item in (e):** OCR re-scoped to ~40 pages / 2 hours rather than to modules; the 90% test relabelled a screening test with a ~70–97% CI; "duplicate check" → "exact/near-lexical duplicate screen" that flags, never certifies; **citation now permits multiple exact pages** — the single-page rule was forcing questions to be answerable from one page, and medicine does not respect page breaks. **Adopted (f) as pre-mortem item 5** with all five instances named. **Refuted (b)'s direction** — going cold makes ending sessions *better*, not worse: a cold 283k session re-writes at ~$2.83 while a fresh boot writes 13,773 tokens at ~$0.14. Their instruction (log timestamps) adopted; their conclusion reversed. **Corrected their arithmetic** — "773 questions, 14 days" pairs the ophtho backlog with the peds deadline; ophtho is 27 Sep. **But the correction cuts against me:** the build days come out of *peds revision before the nearest exam*, which is worse than they argued. **Named an internal tension:** their blinded audit needs the 20 new questions the same critique forbids building — so it is an October method. **Added, raised by neither side:** (i) the September ledger is *better evidence than the pilot* — real work is naturally stratified, and 20 days of observation beats 20 designed questions, for free; (ii) **the incumbent audit** — you cannot claim "no worse" without the old workflow's defect rate, and auditing 10 shipped questions against their page images costs 20 minutes and doubles as revision; (iii) **the open scope question** — ophtho is 63% shipped with a ~5-day production window, so 773 more questions is unreachable at any price, and revising the 1,330 that exist may beat producing more |

| 4 | 2026-08-31 | (a) TTL correction conceded **conditionally** — keep logging timestamps *and* actual cache-creation tokens, because it fails if the tool compacts before the cold write; (b) **stop trying to finish ophthalmology** — 773 in five days is 155/day, impossible under my own acceptance standard; new questions consume creation, validation *and* review time while existing ones surface weak retrieval now; more cards = illusion of coverage with fewer repetitions per card; **"63% complete" measures progress through a book, not readiness for an exam**; *"if a question has not been retrieved twice, question 1,331 is not helping you"*; (c) **the September ledger is not free** — skipped entries cluster on the messy sessions, so October averages the clean ones: *"worse than no ledger because it produces fake precision"*; make it daily, four fields, one code; **better still, preserve raw transcript identifiers and derive measurements later**; (d) **the incumbent audit is QA, not revision** — I dressed a new task as revision to get it past my own freeze; ten is a **sentinel, not an estimate**; 0/10 does not establish a good baseline; (e) closing line: **"the exam does not reward production."** | **Adopted (b) as a change to the plan's GOAL, which supersedes all four previous rounds.** Four rounds optimised the cost of production; the target is now *find and correct retrieval failures in the existing corpus*, **no question-count target of any kind**, with new questions only for documented high-yield gaps found during revision. Recorded as a **recommendation to the user — it is a study decision, not a token decision.** **Extended their point further than they took it:** if the corpus is extended on demand rather than burned down, **throughput was never the requirement — friction was**, which kills levers 3, 4 and OCR **permanently, not until October.** **Adopted (c) and improved it** — the ledger drops the cost column entirely, because the transcripts already record cost and hand-logging it is the fake-precision risk in miniature; one line per day, missing days stay missing and are never averaged. **Adopted (d) in full** — renamed the QA sentinel, re-ordered it (answer from memory to inspecting the page to *then* unmasking the key; with the page open first you are proofreading, not testing retrieval), random selection, hard cap of 10 in one block, may not become a repair campaign, **0/10 is compatible with a true defect rate up to ~26%**, and defect **modes are recorded as prose, never as a rate**. **This is the sixth instance of pre-mortem item 5's pattern and the first one I committed *after* being warned about it.** **Adopted (a)'s condition** — logged as an unverified hypothesis. **One amendment made to their target:** a gap found inside ~5 days of an exam is read from the book page, not built into the app; the gap list is for 18–19 Oct and next year. **Stated but not claimed:** whether the unbuilt 773 contain a high-yield topic missing from the shipped 1,330 — I have not checked, and their answer is right that a coverage hole is *found in revision*, not predicted from a page count |

| 5 | 2026-08-31 | (a) **close the project, do not defer it** — "nothing before 28 September" is still an appointment with a project that no longer has a justified job; archive the measurements, the parser and a one-page decision record; delete the execution blocks, forecasts, build schedule and afterlife commitments; **reopen only on a repeated, concrete production pain, never on a date**; (b) **my "permanently dead" was itself an over-correction** — remove the levers' standing authorization, do not ban them; a future observed pattern can justify a new, smaller proposal from scratch; (c) **even "end sessions at work-block boundaries" is a measured preference, not a permanent law**; (d) **one sentinel, and it goes to ENT** — earlier, larger, closed at 2,240; a second sentinel would be *"expansion disguised as consistency"*; the sentinel's job is an urgent defect in material used first, **not** a project-wide defect rate, and the post-exam comparative audit must stay separate; (e) **revision-first can fail badly** — it can train recognition of my own selection bias, and none of its failure modes (coverage holes in the unbuilt 37%, a scheduler that ranks due dates rather than weakness, MCQ familiarity mistaken for recall, the same concept reworded, source-faithful questions poorly matched to the blueprint) **can be detected by reviewing more app questions**; run a **coverage probe** driven by the official syllabus rather than the app's topic list (`known` / `weak` / `absent from corpus`) and a **scheduler probe** on matched due vs not-due questions closed-book — *"treat it as a queue, not an intelligence system"*; (f) **"if you let the scheduler define what needs revision, the app becomes both examiner and witness for its own adequacy."** | **Adopted (a) — the project is closed today.** `DECISION-2026-08-31-project-closed.md` is the live document; this plan is stamped void and retained only as the reasoning trail. **Adopted (b), and it is a correction to me, not to the plan** — I wrote that round 4 killed levers 3, 4 and OCR *"permanently, not until October"*, which is the same guardrail-into-universal-rule move as pre-mortem item 5, pointed the other way. **Seventh instance, committed in the round where I was congratulating myself for catching the sixth.** Authorization removed; the ideas are not banned. **Adopted (c)** — the session rule now states its own evidence and its unverified assumption. **Adopted (e) and (f) in full**; (f) is the sharpest line in five rounds and it answers the question I asked. **Partly refuted (a)'s deletion instruction:** removing authorization does not require shredding the file, and that is round 5's own distinction from (b) applied to the document — a void-stamped archive removes the authority while keeping the record of why each lever was refused. **Corrected (d)'s premise, and routed it rather than adopting it:** ENT is earlier than *ophthalmology*, but not earlier than *peds* — OSCE 14 Sep, papers 17 Sep, ENT 22 Sep. Peds banks hold only 81 questions and 14/17 Sep is studied from peds theory (51/51 complete). So under round 5's own criterion — *urgent defect in material used first* — the target is peds if the theory corpus is question-shaped with source citations, and ENT otherwise. **I have not verified which**, and did not guess. One sentinel either way. **Round 5 produced material objections, so the debate does not terminate here** — but the object left to attack is two probes and a closure decision, not a plan |

| **6 — TERMINAL** | 2026-08-31 | **"Six first: stop after this. A sixth review would be the failure mode. You have turned adversarial review into a production system for new safeguards, probes, and definitions. It has no natural stopping condition because every plan has residual uncertainty. Make the corrections below once. Do not feed them into Round 6. Study."** Then four corrections: (a) **the coverage probe is malformed** — `known` / `weak` / `absent from corpus` are not alternatives (a topic can be known *and* absent, or weak *despite* several cards); use **two fields** — *Retrieval:* `correct` / `wrong-partial`, decided by comparing a **written** answer to an external source, and *Resource coverage:* `present` / `absent`; **no self-grading**; name the selection honestly — a mechanical sample from the objective list is **a weak coverage screen, not an exam forecast**, a deliberately chosen high-risk list is **a high-yield stress test, not a representative sample**; **do the second, peds only, before peds, tightly capped**; *"10–15 prompts per module is the same expansion instinct in a lab coat"*; (b) **drop the scheduler probe** — due status is partly *caused by* prior errors, prior exposure and elapsed time, not-due by recent success, so a raw miss-rate comparison measures the scheduler's own input variables; honest validation needs prospective prediction, i.e. post-exam research; **delete it**; (c) **the sentinel criterion must split in two** — a **QA sentinel** audits a structured artefact (prompt, key, explanation, authoritative source), a **retrieval/coverage stress test** checks curriculum knowledge; peds needs the second; **keep the one QA sentinel for ENT, in the ENT revision window after the peds written exam on 17 Sep**; ophthalmology gets none unless an ENT defect identifies a cross-module defect mode; (d) **preserve evidence, not a scheduled project** — archive raw transcripts, the parser *and its exact definitions*, versions and price assumptions, a hash or backup of the corpus, **but "do not build an exporter, tracker, or new measurement system — if a snapshot is not already trivial, let it go."** | **Verdict accepted in full; the debate is terminated at round 6 and there is no round 7.** *"The plan must survive adversarial review"* was itself a guardrail promoted into a universal rule — the **eighth instance** of pre-mortem item 5, and the one that was the review process itself. **All four corrections applied once, to `DECISION-2026-08-31-project-closed.md`**, and that document is now closed to further revision. (a) adopted verbatim — two fields, no self-grading, both selection methods named for what they establish, and the peds high-yield stress test is the only action running before the first exam; the per-module allocation is deleted. (b) adopted — probe deleted; **the operational rule survives and never depended on it: treat the scheduler as a queue, not an intelligence.** (c) adopted — and the split is what resolved the dating problem I had routed rather than answered in round 5: peds cannot host a QA sentinel because its bank holds 81 questions and its complete material is theory, which is not question-shaped, so **forcing a peds sentinel to honour "material used first" would have produced a malformed audit**; ENT has the artefact and its window opens after 17 Sep. (d) executed the same day — 11 raw transcripts (205 MB), the ccusage export, the parser, a 17-file `app\data\` snapshot, the settings file and SHA-256 sums of all thirty, plus `archive\README.md` recording the definitions, versions and price assumptions. **The instruction's cost was paid honestly: the scheduler's accumulated state lives in `localStorage`, capturing it would have required an exporter, so it was let go on purpose.** **No round 7. No further probes, safeguards or definitions.** |

Rule: adopt only where the critique is actually right. Continue past round 3 until a round
produces no material objection.

> **⛔ THE DEBATE ENDED AT ROUND 6.** The rule above is satisfied and is itself retired: round 6
> ruled that *"the plan must survive adversarial review"* is a guardrail promoted into a universal
> rule with **no natural stopping condition, because every plan has residual uncertainty.** Round
> 6's corrections were applied **once**, to `DECISION-2026-08-31-project-closed.md`. **There is no
> round 7, and no further brief is to be written from this file.**

---

## Resume prompt for the first work session

> **⚠️ Rewritten after debate round 4. Every earlier version of this prompt is void — the
> hardening day, the per-block ledger and the "incumbent audit" are all superseded.**

> Read `D:\claude os\Medical school\Herophilus\progress\token-economy\plan.md`, then Herophilus
> `CLAUDE.md` and `MEMORY.md`. Execute **Block 0 only**, and **build nothing.**
>
> Read the **ROUND-4 VERDICT** box at the top of the plan before doing anything. Round 3 froze all
> building until **28 September 2026**. Round 4 went further and changed what the plan is *for*:
> there is **no question-count target any more**, and the September work is revision of the corpus
> that already exists.
>
> 1. Ask the user to confirm in one line each: **module = Ophtho** and **shape = B**. *(Both were
>    selected through a prompt whose provenance could not be verified.)* Then put the one decision
>    that outranks every lever in this plan: **round 4 recommends dropping the ophtho backlog
>    entirely** — no target, no "finish the book" — and spending September revising the 1,330
>    questions already shipped, adding questions only for high-yield gaps revision actually
>    surfaces. **Accept or reject?** It is a study decision, not a token decision. Record the
>    answer in the plan and in `MEMORY.md`.
> 2. Copy this plan to `progress\token-economy\plan.md` if it is not already there.
> 3. Create `progress\token-economy\ledger-september.md` with two empty sections:
>    **daily ledger** — one line per DAY, four fields: date · accepted-question count · what the
>    day was (one or two words) · one code only if unusual (`cold cache` / `retry` /
>    `source problem` / `missing`). **No cost column** — the transcripts already record cost and
>    it is derived later. Missing days stay missing; never reconstruct one from memory.
>    **failure backlog** — one line per wasted turn, bad re-read, or returned question. This is
>    October's requirements document.
> 4. Create `ideas-parking.md`; move the OCR transcription pipeline into it with the 4% figure, and
>    the October monolith-rebuild-from-records idea. **Note beside them that round 4 may have
>    killed all three throughput levers permanently, not deferred them.**
> 5. **Amend `progress\ocr-pipeline.md`** so a fresh session cannot mistake it for an active
>    approved plan — it currently reads as one, and its cost ladder is superseded.
> 6. Check, cheaply, whether `content\<mod>\qb-pages\*.array.js` covers **every** shipped question
>    or whether early ENT work predates the convention. This decides whether October's
>    rebuild-from-records is safe; it is a counting job, not a build.
> 7. Add to Herophilus `MEMORY.md`, ISO dates, prune to stay under 200 lines:
>    *2026-08-31 — token economy measured: cache-read 65–71% of bill, images ~4%. Round 3: **no
>    tooling built before 2026-09-28**. Round 4: **no question-count target** — September is
>    revision of the existing corpus, not production. Plan and September ledger at
>    `progress\token-economy\`.*
>
> Then **stop and go study.** Do not build `splice.js`, do not split `START-HERE.md`, do not run
> Tesseract, do not touch `autoCompactWindow`. The next decision is made on **28 September** from
> the ledger — and it may be that nothing gets built at all.
>
> One thing worth doing away from the keyboard, once, in one scheduled block: **the QA sentinel.**
> Ten **randomly selected** shipped ophtho questions. For each: **answer it from memory, write
> your reasoning and the page evidence you expect, then open the source page, and only then
> unmask the stored key and explanation.** Hard cap of ten — it is not allowed to grow into a
> corpus-repair project. Write the defect **modes in prose** in the ledger, never as a rate: a
> single real defect is decisive, but zero in ten proves almost nothing (it is compatible with a
> true defect rate up to ~26%). **It is a capped risk check that happens to reinforce learning —
> it is not revision, and it does not replace any.**
