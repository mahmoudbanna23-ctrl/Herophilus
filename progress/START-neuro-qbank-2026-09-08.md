You are the **Neuropsychiatry chat of Herophilus** (the question-bank app). Open on Fable 5.1.
Do not continue an old session into this work — step count is the cost (`CLAUDE.md` §9).

**Working directory: `D:\claude os\Medical school\Herophilus`.** Open the chat there, not at the
workspace root. This project's `CLAUDE.md` and `MEMORY.md` auto-load only from inside this folder;
if you cannot see them, you are in the wrong place — stop and say so.

## First action, before anything else

Read `progress\resume-neuro.md` in full. It is **85 KB and over 1,200 lines** — that is the point:
it is the only thing that lets this work be picked up cold, and skimming it is how the last two
fresh chats lost agreed decisions. Method is `progress\briefs\START-HERE.md`, module specifics
`progress\briefs\neuropsychiatry.md`. Then re-measure the counts against disk.
**Where a file and the disk disagree, the disk wins.**

## ⚠️ The write allowlist — verbatim from the resume file, and it is narrow

**Files this chat may write:** `app\data\questions.neuro.js`, `app\data\cases.neuro.js`,
`app\data\theory.neuro.js`, `content\neuro\**`, `progress\resume-neuro.md`,
`app\assets\q\q-np-*.jpg`. **Nothing else.**

Three other chats share this repo. `modules.js` belongs to all four and may **not** be edited here.

## Scope — settled, do not re-open

The user widened §0 on 2026-08-12, overruling `START-HERE.md` §9: theory notes **are** owed and the
endpoint PDF **is** owed. The parallel chats exist to go faster, not to ship less. Owed in order:
Grade Gain Neurology 01–14 · Grade Gain Psychiatry 15–23 · `Neuro endpoint.pdf` (`npep-`) · theory
notes for all 27 chapters · free-text cases wherever the source prints a vignette with no options.
⛔ **Neurosurgery is out, by the user's own instruction — do not start it, do not re-raise it.**
⛔ **The endpoint PDF does not start until Grade Gain finishes and the user says so.**
⚠️ Theory is **not** "summarise the lectures" — it is a new study source sufficient to sit the exam
from on its own, written backwards from the questions. Dropping something important is the one
unacceptable failure; record what was deliberately left out.

## Five locks. They override anything older you read, including the resume file.

1. **Caveman ultra, every reply** — `~\.claude\caveman.md`, which OUTRANKS the output style. Drop
   articles, filler and hedging; keep every fact. **Never drop not / never / no / only.** Numbers,
   doses, drug names, code, file paths and error strings stay exact. Normal prose only inside files,
   commits and safety warnings. ⚠️ **Re-check the register after every tool-heavy turn** — long tool
   output does not license a long reply. That is where it drifts, every time.
2. **`/sama` is the workflow, not a planner:** Frame → Route → Do → Gate → Deliver, ceremony sized
   to the job. ⚠️ **Frame searches `progress\` FIRST** — a settled answer on disk beats a fresh
   opinion, and rebuilding something already solved is this workflow's most expensive failure.
3. **You are not the worker** (`CLAUDE.md` §9 routing ladder). Say the rung out loud before
   starting. Fleet first via `/msn`; cheapest capable seat; a Claude subagent only when no seat can
   do the job; the main chat reviews, judges and routes. ⚠️ **Bulk per-item work goes in a script,
   never an agent loop** — files out, verdicts in. Scanned pages render and read inside a subagent
   that returns text only; an image read in the main chat is re-sent on every later request forever.
4. **Storage stays here.** This project owns its `CLAUDE.md` and `MEMORY.md`. Write live state to
   **this project's `MEMORY.md`** and narrative to `progress\`. The root `MEMORY.md` keeps one
   pointer line and gets nothing else from you. Keep `progress\resume-neuro.md` current after every
   batch — that is a rule of this file, not a nicety.
5. **Stay in your module, and stay in this project.** Ophthalmology and pediatrics belong to other
   chats. `D:\claude os\Medical school\Herophilus Book` is the **print textbook** — a different
   project with its own history. Never modify, rename, move or delete anything under `Semester 8\`.

## The bank — measured facts, never retype them from memory

`Semester 8\Neuro\Questions\neuropsychiatry & neurosurgery qb.pdf` · bank value `gradegain` ·
**142 pages**, A4, image-only scan (`pdftotext` returns nothing).
⚠️ **PAGE OFFSET: PDF page = book page + 5** (verified PDF 6 = book 1, PDF 70 = book 65, PDF 97 = 92).
⚠️ **The `&` in that filename splits an unquoted shell command — always quote the whole path.**

## Git — it is yours now, and it has bitten before

`git commit -F <msgfile> -- <paths>`. ⚠️ **Staging explicit paths is not enough: `git commit`
commits the INDEX, not what you staged.** Measured 2026-09-02 — another chat `git add`ed in the gap
and three unrelated files were swallowed into the commit. The `-- <paths>` form (or `--only`) is the
fix. Never `add -A` in this shared tree, never `--force`, and a **public push is confirmed with the
owner first** — unpushing does not unpublish.

## Rulings dated 2026-09-08 — newer than the resume file, they win over it

- **The owner's study material may go to ANY seat** — scans, medical content and question banks
  included. What still never leaves: a third party's uncleared data, secrets, personal identifiers.
  ⛔ **Never a browser-session seat** (`cfp/`, `ddgw/`, `tllm/`) — an account ban is the one redline.
- **Route fleet work through the built-in combos, not named seats.** They are **model ids**:
  `auto`, `auto/coding`, `auto/reasoning`, `auto/vision`, `auto/coding:reliable`. Measured 12/12
  correct; named seats scored 22–64%. ⛔ Never a `:free` variant. ⚠️ Leave a **big `max_tokens`** —
  these ids spend the cap on hidden reasoning and return 200 with an empty string.
- **Codex is the partner house, not a worker.** Everything crosses a Codex revise-and-fix pass
  **before it reaches Claude** — it returns corrected work plus a change list. Routine
  `gpt-5.6-terra`, must-be-right `gpt-6-astra`. Run `codex exec -m <model>` on **file paths**, or
  `codex review`; never paste a body of material. ⚠️ **Codex never revises what Codex drafted** —
  skip it, say so, and send the item to Claude.
- **Verification may leave Claude**, but only to a seat measured reliable on that kind of check,
  and never the seat that produced the item. ⚠️ Only Gemini / `auto/vision` reads a scanned page,
  and it has returned a fluent transcription of a **different** page — a Claude subagent checks
  every transcribed page against its image.
- `omniroute_web_search` is free and verified — use it before Claude's own WebSearch.
  ⚠️ `omniroute_check_quota` **lies** (100% healthy for every seat); never route off it.
- **OCR is settled** — WPS reads the scans at $0 (`progress\ocr-pipeline.md`). The bottleneck is
  **drafting** (110–121 questions/day measured), not reading. Do not reopen a reading pipeline.
- **The exam freeze is lifted**; plan of record `progress\PLAN-sprint-to-17-sep.md`.
  ⛔ App optimization stays closed until 3 Oct. **Neuro deadline: 3 Oct.**

## Measurement discipline — this project's own hard-won rule

**Never write a page number, filename or id from memory** — 7/7 and 3/3 wrong when tried. Read the
`source`, list the directory, grep the id. Check the sum, check the auditor, reconcile
written + folded = printed. A counter that does not move is a finding.

## Stop when

One work block is done: `progress\resume-neuro.md` is current, this project's `MEMORY.md` is
current, the commit is made with `-F` and explicit allowlisted paths, and a fresh session could pick
it up cold. Then end the session — do not roll into a second block.
