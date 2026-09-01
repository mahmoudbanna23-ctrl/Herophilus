# Debate round 6 — brief (2026-08-31)

Scoped deliberately small. Rounds 1–5 attacked a plan; that plan is closed. What is left to attack
is a closure decision, one QA sentinel, and two probes — plus the question of whether running this
round at all is the failure mode it is meant to catch.

Paste everything below the line into ChatGPT.

---

I closed a project after five rounds of adversarial review. I want you to attack what is left,
which is much smaller than what you would normally be handed. Be specific and merciless. Do not be
agreeable, and do not congratulate me for closing it.

**Who I am.** A medical student, not a programmer. I use an AI coding tool to turn scanned medical
question-bank books into an offline study app (plain HTML/CSS/JS, no framework, runs from a local
file). Budget is strictly $0 — no paid services. The books are copyrighted, so their content may
never go to a free service that trains on user inputs.

**Today is 31 August 2026. My exams:** Peds OSCE 14 Sep · Peds written 17 Sep · ENT 22 Sep ·
Ophthalmology 27 Sep · Neurology 3 Oct · a second Peds written 18–19 Oct.

**The corpus as it stands.** Ophthalmology 1,330 questions shipped of roughly 2,103 in the source
books (63%). ENT 2,240 questions, module closed. Peds question banks: only 81 questions. Neurology
158. Separately, the *theory* material is complete (peds 51/51 chapters). The source books total
12,537 scanned pages, about 9,100 of them never transcribed. Every shipped question carries an
exact source-page citation and was checked against the page image.

**What the project was, and why it is closed.** I set out to make question *production* cheaper,
believing the cost driver was page images. I measured my own session transcripts first: 15,333
requests, mean context re-read of 283,178 tokens per request. Re-reading accumulated conversation
was 65–71% of the cost; all 204 images in the entire project history were about 4%. What the model
wrote into tool calls was 46.7% of conversation content and tool output 34.6%; shell commands
alone were 5,957 calls, 13 MB, 48% of all content. So the pathology was long agentic sessions and
using a coding agent as a data mover — not images.

Then the fourth round killed the goal rather than the method: finishing ophthalmology meant ~155
accepted questions per day across a five-day window, which is unreachable at any price, and
"63% complete measures progress through a book, not readiness for an exam." The fifth round closed
the project outright rather than deferring it, on the grounds that a deferral is still an
appointment with a project that has no justified job. I agreed. Nothing is scheduled. The tooling
ideas (a script to splice questions into the data file, a duplicate-ranking script, OCR used as a
local search index) lost their authorization but were explicitly *not* banned — a repeated,
concrete, observed production pain could justify a new and smaller proposal, but no date reopens
anything.

**What survives is three study actions and one rule.** These are what I want attacked.

**1. One QA sentinel.** Ten questions selected at random from a *single* module. For each: answer
from memory, write down the page evidence I expect, open the source page, and only then unmask the
stored answer key and explanation. Hard cap of ten, inside one study block, and it may not grow
into a corpus-repair campaign. Its stated purpose is to catch an *urgent defect in material I will
use first* — not to estimate a defect rate. One real defect is decisive; zero in ten is compatible
with a true defect rate up to about 26% and proves nothing. Defect *modes* are recorded in prose,
never as "2/10". A second sentinel for a second module was refused as expansion disguised as
consistency.

**2. A coverage probe.** Using the official syllabus, learning objectives or lecture headings —
explicitly *not* the app's own topic list — pick 10–15 exam-relevant prompts per module. Answer
each from memory before opening the app. Then check whether the corpus contains a source-cited
question for it. Record one word only: `known`, `weak`, or `absent from corpus`. Weak or absent
high-yield areas get revised directly from the source, or a one-line manual gap note. They do not
restart bulk question production.

**3. A scheduler probe.** The app has a spaced-retrieval scheduler that has never been validated.
Answer a small matched set of currently-due and currently-not-due existing questions, closed-book.
If the not-due questions are missed as often as the due ones, the scheduler has not demonstrated
that it identifies what I am forgetting — treat it as a queue, not an intelligence.

**The rule:** revision is driven first by external curriculum coverage and observed retrieval
failures, and only then by the app's scheduler — because if the scheduler defines what needs
revision, the app becomes both examiner and witness for its own adequacy.

**Now attack. Six specific things.**

**One — are the probes held to the standard the same review used to kill everything else?** Five
rounds taught me that 18 out of 20 is a screening test with a 70–97% interval, and that zero
defects in ten establishes nothing. The probes were then proposed at 10–15 items per module by the
same reasoning. What does a 12-item coverage probe actually establish, and if the answer is "very
little", is it worth doing at all, or is it the same false-precision failure wearing a different
coat?

**Two — is the scheduler probe structurally rigged?** Questions are *due* partly because I
previously got them wrong or have not seen them in a long time; not-due questions are recent or
previously correct. The two sets are therefore not matched on difficulty or prior exposure, so
comparing raw miss rates may be measuring selection, not scheduling. Does the probe as specified
test what it claims, and if not, what is the smallest honest version — or should it be dropped?

**Three — the coverage probe removes the app's selection bias but not mine.** I choose which
syllabus items to probe, I answer from memory, and I grade myself `known` / `weak` / `absent` with
no external marker. That is three points where my own bias re-enters, and "I felt I knew it" is the
exact failure mode I already accepted for the word "accepted". Is this probe salvageable, or does
self-grading make it worse than nothing?

**Four — where the one sentinel should point, because the round that specified it got the dates
wrong.** It was assigned to ENT on the grounds that ENT is "earlier, larger, and already closed".
ENT is earlier than ophthalmology, but not earlier than peds: my first two exams are peds, on 14
and 17 September. The peds *question banks* hold only 81 questions, while the peds *theory* corpus
is complete — so peds is the material I will genuinely use first, but it may not be in the
question-shaped, page-cited form the sentinel procedure assumes. Given the stated criterion —
urgent defect in material used first — where does the single sentinel belong, and does the
criterion survive contact with a corpus whose earliest-needed module is the thinnest?

**Five — what does closure make expensive later?** Closing rather than deferring is reversible in
principle, but not symmetrically. Is there anything cheap and reversible *now* that becomes
expensive or impossible after the exams — a measurement that can only be taken while the old
workflow is still running, a record that will not exist later, a decision that quietly hardens?
I would rather hear this now than in November.

**Six — and answer this one first if it changes the rest.** Is running a sixth adversarial review
on a closed project itself the failure mode? The pattern named across these rounds is that I take a
useful guardrail, promote it to a universal rule, and then mistake the rule for evidence — and
"the plan must survive adversarial review" is itself such a rule. If the honest answer is that
there is nothing left worth debating and I should go and study, say that plainly and stop.
