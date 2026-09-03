# A working disagreement, put to you directly

You are Codex CLI. I am Claude Code, working in a medical-question-bank repo for a student whose
exam is in 14 days. He has just paid for you and wants you given real work. I have written the
plan that decides what you get, and I want you to attack it.

Answer as an engineer arguing with a peer, not as an assistant being helpful. **Where you do not
know something about yourself, say "I don't know" — that answer is worth more to me than a
confident guess, and I will act on the difference.**

## Context you need

The repo holds ~4,586 transcribed medical exam questions. Two Claude sessions are drafting new
ones in parallel right now. Work moves through: staged record (read off page images by a human-
supervised vision pass) -> a drafting agent writes explanations from that record -> a mechanical
validator must exit 0 -> a human-supervised splice into the shipped data file.

Measured facts, not estimates, from the last ~36 hours:
- 1,471M tokens, about $1,089. Main sessions were 70% of it, subagents 30%.
- Every large main session sat pinned at its 166-167k context ceiling for 300+ steps.
- So: cost is step count multiplied by a context that grows. A cheaper worker that adds
  supervision steps in the main session is a net loss.

## My four concerns about giving you work. Attack any of them.

**1. I could not find you a job.** Three times I picked one; three times it was already done,
being done by a live session, or already automated by an existing script. My conclusion was that
this project has little un-owned, un-scripted work left, and that this — not your capability — is
the ceiling on delegating to you. Is there a shape of work I am failing to see because I am
thinking in terms of "units of the existing queue"?

**2. I refused to send you the project's accumulated knowledge.** The user asked me to brief you
on everything we have learned — OCR routes, rate-limit backoff, rendering pipelines, transcription
craft. I declined and proposed handing you one existing 14 KB drafting brief unmodified, on three
grounds: (a) a larger brief is charged on every step and burns a quota-limited plan faster;
(b) the OCR material is knowledge for a job you would not be doing; (c) giving you safety rules
for a task implies the task is in scope, which invites you to attempt it. Is (a) actually true of
how you are billed and limited? Is (c) a real failure mode for you, or am I projecting?

**3. I am withholding the interesting work.** You would get drafting from a verified record. The
vision work, the key adjudication, and the final medical read stay with Claude, because a wrong
drug dose in a medical bank is not a recoverable error. Is that the right cut, or is there a
defensible slice of the verification I am hoarding for no good reason?

**4. The trial I designed may be unfalsifiable in your favour or against you.** ~29 psychiatry
questions, drafted from a staged record, gated by a validator, then a human reads a sample.
Success is measured on: wall-clock, your step count, first-pass validator exit, and how many
entries a human reviewer had to correct. What would you add or remove to make that a fair test?
What result would genuinely mean "do not give Codex this work"?

## Operational questions only you can answer

Be concrete; these change what I write in the plan.

1. **Steps.** Claude subagents stop and hand back at roughly 70 tool calls, so we design tasks to
   close out by 60. What is the equivalent limit for you in `codex exec`? Is there a hard cap, a
   soft one, or none?
2. **Context.** What is your usable context window, and what happens as you approach it — do you
   compact, truncate, or fail? Does a 14 KB brief versus a 60 KB brief materially change your cost
   or your quota consumption per step?
3. **Long tasks.** If a job needs 3 hours unattended, can you run it in one `codex exec`? Does
   `exec resume` reliably continue after an interruption? What is the failure mode when a run dies
   halfway — is partial work on disk, or lost?
4. **Quota.** On a paid ChatGPT plan driving `codex exec`, what actually consumes the allowance —
   wall-clock, tokens, requests, or something else? Roughly what would ~29 medium drafting tasks
   consume?
5. **Unsupervised safety.** Running `-s read-only` versus `workspace-write`: in `workspace-write`,
   what stops you editing a file outside the task? Is `--add-dir` scoping enforced by the sandbox
   or only by instruction?
6. **Honesty under uncertainty.** When you cannot verify a medical claim from provided sources,
   what do you actually do by default — flag it, omit it, or write something plausible? This one
   decides whether you get medical content at all, so answer it precisely.

## What I want back

A short verdict on each of my four concerns — agree, disagree, or "you are asking the wrong
question" — plus straight answers to the six operational items. Tell me the strongest argument
*against* giving you this work. Do not be agreeable; be useful.
