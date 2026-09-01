# Token economy — CLOSED 2026-08-31

**Status: closed, not deferred.** There is no build window, no 28 September appointment, no
schedule, and no forecast. Closed after five adversarial debate rounds; the full reasoning is in
`plan.md`, which is retained as an archive and carries no authorization.

**The debate is terminated at round 6.** Round 6's verdict, adopted in full: *"A sixth review would
be the failure mode. You have turned adversarial review into a production system for new
safeguards, probes, and definitions. It has no natural stopping condition because every plan has
residual uncertainty."* Its four corrections are applied below, **once**. They are not fed into a
round 7, and no further probes, safeguards or definitions are generated from this document.

**This is the eighth instance of pre-mortem item 5's pattern** — take a useful guardrail, promote
it into a universal rule, then treat the rule as evidence. The guardrail here was *"the plan must
survive adversarial review."* Round 3 named the pattern; rounds 4, 5 and 6 each caught a fresh
instance of it, including this one, which was the review process itself.

---

## What this project produced

Two findings. That is the whole output, and it is worth having.

**1. The cost pathology was long agentic sessions and model-mediated file operations — not images.**
Measured across 11 Herophilus session transcripts on 2026-08-31: 15,333 requests, mean context
re-read **283,178 tokens** per request. Cache-read was **65–71%** of the bill; output 13–14%; fresh
input 0.01%. All 204 images in the entire project history came to roughly **4%**. What Claude wrote
*into* tool calls was 46.7% of conversation content, tool output 34.6%, and Bash alone was 5,957
calls / 13.0 MB / 48% of all content. The original premise — that scanned page images were the
cost — was wrong by an order of magnitude, and measuring it first is the only reason four weeks of
building did not happen.

**2. Source-verified revision has higher expected value than corpus completion before these exams.**
Ophthalmology is 1,330 of ~2,103 questions shipped. Finishing it meant ~155 accepted questions per
day in a five-day window, which is not achievable at any token price. *"63% complete" measures
progress through a book, not readiness for an exam.*

---

## What does NOT survive

The splice script, the duplicate-ranking script, the OCR-as-index lever, the context-cap
experiment, the brief split, the 20-question pilot, the blinded comparative audit, the cost
forecast, the work-block schedule, and the "afterlife" commitments. All of them were justified by
bulk production that is no longer the goal.

**They are not banned — their standing authorization is removed.** That distinction is
load-bearing. A permanent ban would be the same error as a standing plan, pointed the other way.
If revision later exposes a **repeated, concrete production pain**, that observation justifies a
new and smaller proposal written from scratch. The calendar justifies nothing.

**"End sessions at work-block boundaries" is a measured preference, not a law.** It rests on
~$0.14 to boot a session against ~$0.09 saved per request, i.e. break-even at about two requests —
derived from historical transcripts, and resting on an **unverified** assumption about what a cold
resume actually re-writes. Useful. Not a rule.

---

## What would justify reopening

A production pain that is **repeated**, **concrete**, and **observed** — not anticipated. One
awkward afternoon is not evidence. Nothing else reopens this, and no date reopens it.

---

## Measurement archive

**`archive\README.md` is the manifest** — what was kept, the parser's exact definitions of
*request*, *cache read* and each cost class, the tool versions, and the cache-price assumptions
every figure was computed at. Read that before trusting any number in this file.

The archive holds: the **11 raw session transcripts** (205 MB, the primary evidence), the `ccusage`
export the money figures came from, the parser that read it, a **17-file snapshot of `app\data\`**
as the corpus stood at closure, the settings file, and SHA-256 sums of all thirty files.

**This is evidence, not a project.** Round 6: *"Do not build an exporter, tracker, or new
measurement system to capture any of this. If a snapshot is not already trivial, let it go."*
Applied literally, and it cost something: **the scheduler's accumulated state lives in the
browser's `localStorage`**, so capturing it would have meant writing an exporter. **It was let go
on purpose.** `schedule.js` — the code — is in the snapshot; the per-card history is gone. Nothing
in the archive is scheduled to be updated, and nothing reopens on its existence.

**Stated honestly:** the archived parser produced the *money and session* figures only. The
conversation-content breakdown (tool_use 46.7% · tool_result 34.6% · images 4.1%, the per-image
token formula, the Bash byte counts) came from an **ad-hoc script that was never saved and no
longer exists.** Reproducing those numbers would mean rewriting it. Under closure, nothing needs
re-deriving, so this is recorded as a limitation rather than a task.

---

## What leaves with this project, into revision

These are **study actions, not project actions.** They have no owner here, no schedule, and no
follow-up deliverable.

> **⚠ Rewritten once, after debate round 6, and then closed to further revision.** The versions
> below replace everything rounds 4 and 5 specified. Round 6's reasoning is recorded with each,
> because in two of the three cases the earlier version was not merely weaker — it was **malformed**,
> and would have produced a number that looked like evidence.

### 1. The peds high-yield stress test — the only one that runs before the first exam

**Do this before 14 September. Peds only. Tightly capped.**

Round 6 rejected the coverage probe as specified, and it was right on the mechanics: `known`,
`weak` and `absent from corpus` **are not alternatives.** A topic can be known *and* absent from
the corpus; it can be weak *despite* several cards existing. One word cannot carry two independent
facts, and forcing it to produces a category that is neither.

**Two fields, recorded separately:**

| Field | Values | How it is decided |
|---|---|---|
| **Retrieval** | `correct` · `wrong/partial` | **Write the answer down first**, then compare it to an external source |
| **Resource coverage** | `present` · `absent` | Does a source-cited question or a theory section actually cover it |

**No self-grading.** *"I felt I knew it"* is not a value. It is the identical failure already
admitted for the word *"accepted"* — the judge and the judged being the same person at the same
moment. A written answer checked against a source is the whole difference.

**Then name the selection honestly, because there are two versions and they establish different
things:**

- A **mechanically selected sample** from the official objective list is a **weak coverage
  screen** — *not* an exam forecast. Round 6: a 12-item probe was proposed by the same reasoning
  that already labelled 18/20 a screening test with a 70–97% interval, and 0/10 compatible with a
  26% defect rate.
- A **deliberately chosen high-risk list** is a **high-yield stress test** — *not* a representative
  sample. It cannot estimate coverage, and it is not asked to.

**Do the second one.** It is more useful before an exam, and it is the only action here that
attacks the named failure mode of revision-first — *training recognition of my own selection bias* —
before the first paper. Drive it from the **official syllabus, learning objectives or lecture
headings, never the app's own topic list.**

**"10–15 prompts per module" is deleted.** Round 6: *"the same expansion instinct in a lab coat."*
There is no per-module allocation, because there is no second module. Weak or uncovered high-yield
areas are revised **directly from the source**, or get a one-line gap note. They do not restart
bulk question production.

### 2. One QA sentinel — ENT, in the ENT revision window, after 17 September

**The criterion had to split in two, and that is what fixed the dating problem.** *"Material used
first"* was silently doing two different jobs:

- A **QA sentinel** audits a **structured artefact** — something with a prompt, a key, an
  explanation and an authoritative source to check them against. It tests the *corpus*.
- A **retrieval / coverage stress test** checks **curriculum knowledge**. It tests *me*.

Peds needs the second, and gets it above. Peds cannot have the first: its bank holds **81
questions**, and its complete material is theory, which is not question-shaped. **Do not force a
malformed peds sentinel merely because peds is earlier.** That was the trap in round 5's version,
and I had routed the question rather than resolving it.

**So: ENT, and ENT alone**, because ENT is the module with a suitable artefact — 2,240 shipped,
closed, page-cited — and its exam is 22 September, so its revision window opens naturally after
the peds written paper on the 17th.

**Ten questions selected at random. For each:** answer from memory → write the page evidence you
expect → open the source page → **only then** unmask the stored key and explanation.

**Hard cap of ten, inside one block.** It may not grow into a corpus-repair campaign. Its purpose
is to catch an **urgent defect in material about to be used**, not to estimate a defect rate: one
real defect is decisive, while zero in ten is compatible with a true defect rate up to ~26% and
proves nothing. Record defect **modes in prose**, never as "2/10".

**Ophthalmology gets none** — unless an ENT defect reveals a *cross-module defect mode*, in which
case the finding, not the symmetry, is the reason. A second sentinel added for consistency would be
expansion wearing a uniform. The post-exam comparative audit remains a separate thing and is not
scheduled.

### 3. The scheduler probe — deleted

**It was structurally rigged and could not have been fixed by resizing it.** A question is *due*
partly **because** of prior errors, prior exposure and elapsed time; it is *not due* partly
**because** of recent success. Comparing raw miss rates between the two sets therefore measures
the scheduler's own **input variables**, and would have returned a confident number about a
relationship it never tested.

Honest validation needs **prospective prediction** — does due-status forecast tomorrow's failure
better than chance — which is post-exam research, not a study action. It is not scheduled either.

**The operational rule survives the probe's deletion, and never depended on it:**

> **Treat the scheduler as a queue, not as an intelligence.** It has never been validated, so it
> orders work; it does not decide what needs work.

**The rule that rule protects:** revision is driven first by **external curriculum coverage** and
**observed retrieval failures**, and only then by the app's scheduler. If the scheduler is allowed
to define what needs revision, **the app becomes both examiner and witness for its own adequacy.**

**Why these are affordable:** two capped actions, one per exam window, roughly 45 minutes each.
Closing the project frees far more time than they cost. **If either starts growing — more prompts,
a second sentinel, a repair campaign, a new probe — it has failed the same test the project failed,
and the correct response is to stop it, not to design a better version of it.**

---

## Recorded failure modes of revision-first, so they are not discovered late

Revision-first is not self-evidently safe, and no debate round before the fifth attacked it:
coverage holes concentrated in the unbuilt 37% of ophthalmology · a scheduler that prioritises due
dates rather than exam relevance or actual weakness · multiple-choice familiarity mistaken for
recall · the same concept repeated under different wording · questions that are faithful to the
source but poorly matched to the exam blueprint. **None of these can be detected by reviewing more
app questions** — that only measures performance inside the corpus.

**The peds high-yield stress test is the only action here that looks outside the corpus**, and it
is the only one that runs before the first exam. That is the whole reason it survived round 6 while
the scheduler probe did not.
