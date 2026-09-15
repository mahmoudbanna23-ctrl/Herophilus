# The workflow — who does what, and what gates each handoff

> ⚠️ **Delegation lines SUPERSEDED 2026-09-15** by `CLAUDE.md` §8 and root `CLAUDE.md` §9 — the "Free fleet: nothing" row and the agy ban no longer stand; measured results below still do.

Written 2026-09-03, after the Codex vision test passed (`vision-test-2026-09-03-codex-staging.md`)
and the Codex audit lane failed (`audit-2026-09-03-silent-defects.md`). Both results are measured,
not estimated. **Supersedes `PLAN-sprint-to-17-sep.md` §4's "staging is never delegated"** — staging
is now delegated *with a gate*; everything else on that list stays where it is.

## The one principle

**A handoff is only safe where a script or a page image can prove the result right.**
Codex is excellent where there is a ground truth to check against and terrible where only judgement
decides. That single line explains every row below — and it is why the audit lane died while the
staging lane lives.

## Who does what

| Tool | Cost | Verified good at | Never |
|---|---|---|---|
| `pdftoppm` / PyMuPDF | $0 | rendering page ranges, merging, bookmarks | — |
| WPS OCR index (`content/**/ocr/`) | $0 | **finding** which page holds a topic | any fact, number, unit, dose, exponent |
| **Codex — vision** (`codex exec -i`) | $0 marginal | transcribing printed pages verbatim, zero-based key — 3/3 exact, 2026-09-03 | numbers Claude has not re-read off the image |
| **Codex — text** | $0 marginal | bulk drafting from staged text + lecture transcripts | static prose/pattern audits — 3 of 5 findings false, 2026-09-03 |
| Deterministic scripts (`tools/bank-harness/`, `boot-check.js`, validators) | $0 | exact structural checks; a zero here is trustworthy | anything needing meaning |
| **Claude** | ~$0.11 per step | briefs, key + number check against the image, fold adjudication, splice, git, the medical read | bulk transcription — the expensive way to do a cheap job |
| Free fleet (`vibe`, `opencode`, `agy`, `grok`) | $0 | **nothing**, asked directly 2026-09-03 | `agy` is Gemini 3.8 Flash → banned for project content by standing rule |

**What changed today is not that Claude stops checking — it is that Claude stops typing.**
Checking a key and a dose against a rendered page is fast; transcribing every stem and option is
slow. The second job moved; the first did not.

## The loop, per chapter

1. **Locate** — grep the OCR index for the chapter's page range. Free, seconds. Index only; no fact
   leaves this step.
2. **Render** — `pdftoppm -png -r 200` over that range **plus one page past the end**, into the
   scratchpad. Never into the source tree.
3. **Stage** — `codex exec -s workspace-write -i <page N> -i <page N+1> …` against the staging brief.
   ⚠️ **Always attach page N+1**: explanation boxes overflow onto the next page, and a missing one is
   returned as `""` — silent, and the test proved it happens.
4. **Gate (machine)** — validator over the staged record: `key` in range, option count sane, pages
   monotonic, no duplicate ids, file parses. Exit 0 or the batch does not advance.
5. **Gate (Claude, irreducible)** — read every `key`, dose, unit and exponent against the page image.
   This is the step that cannot move, because its failure mode is a wrong answer the student then
   revises as fact.
6. **Draft** — Codex writes explanations from the staged text plus the cached lecture transcripts.
   Marker required where the bank prints no box (`CLAUDE.md` §4).
7. **Close** — Claude: fold sweep, medical read, splice via the validator-gated splicer,
   `boot-check.js`, then `git commit -F <msgfile> -- <paths>`.

## What was rejected, and why

- **`codex mcp-server`** (Codex as a tool Claude calls directly — the subcommand exists locally).
  Rejected: MCP tool schemas load into **every request for the whole session**, and `codex exec`
  from Bash already costs nothing extra. Real cooperation, wrong price.
- **`OpenMOSS/claude-codex-handoff`** — 37 stars, 5 commits. Append-only JSONL message streams and
  atomic claim files, for two agents *editing code* in one repo. We already own its useful half: a
  staged file plus a validator gate. Its cron/heartbeat prompts would bill Claude steps to poll.
- **`SeemSeam/claude_codex_bridge`** — 3.5k stars, actively developed, but a TUI + background daemon
  + Node + Python + an extra Windows dependency, Windows still beta. It solves *watching* agents;
  our problem is *verifying* them. Installs launched from Claude's shell have already cost this
  workspace half a day to a sandbox overlay.
- The same applies to Crewplane, `1code` and the `handoff` skill: orchestration for code, priced in
  Claude steps.

## What was adopted

**`AGENTS.md` — first-party, free, verified live 2026-09-03.** Codex reads it from the directory it
is pointed at, before doing any work; precedence runs global → project root → cwd, with
`AGENTS.override.md` winning at a level. Tested with a token instruction and it came back honoured.

The value: the hard constraints stop being retyped into every brief. One file states *never write to
`app\data\`*, *never touch `Semester 8\`*, *`key` is a zero-based index*, *verbatim means verbatim*,
*a defective key is noted never disputed* — and every future `codex exec` inherits them.
Cost to Claude: zero, because Claude never loads it.

---

# Tooling surveyed on GitHub, 2026-09-03 — whole pipeline, not just the agents

Nothing below was installed or run. Verdicts come from published docs weighed against this
project's own **measured** facts. Where a verdict rests on one of those facts, it is named.

## 1. MCQ extractors — ruled out on a measured fact

`salvacarrion/file2quiz`, `serhanylmz/mcq`, `vignesh-11/MCQ-extractor`, `fxerkan/examiner`.

They parse a **text layer**. `pdftotext` returns **0 characters** on every book and every question
bank in `Semester 8\` (workspace `CLAUDE.md` §5, re-verified). They cannot start. None of them reads
a **yellow highlight as the answer key**, which is how our banks mark the key and which Codex read
correctly 3/3 today. **Dead end, not a near miss.**

## 2. Layout-aware converters — one fits, but park it

| Tool | Fit |
|---|---|
| **Docling** (IBM, MIT, pure CPU) | the only license + hardware fit |
| Marker (Datalab) | GPL-3.0 code **plus a RAIL-M weight licence**; built for GPU batch |
| MinerU | accuracy leader, heaviest install, strongest at CJK — irrelevant here |

What Docling would buy: an OCR index whose **superscripts are right** (WPS read a printed 10⁶ as
10⁹ — a plausible wrong number, not visible garbage) and figure regions as a by-product.

**Verdict: park until after 3 Oct.** Our OCR output is only ever a *search index* — never a
clinical source — so correcting its exponents fixes a number nobody is allowed to quote. The job
that does need exponents right is fact-reading, and that is already solved by Codex vision plus a
Claude check, at $0 and zero install.

## 3. Figure-region detection — the one genuine gap

**DocLayout-YOLO / PP-DocLayout-S** — ONNX, **~14.5 ms per page on CPU**, emits bounding boxes for
figures, tables, headings and text blocks.

This is the only surveyed tool that fills a gap we have actually hit: **`bounds.js` cannot bound a
figure sitting inside a text column** (`MEMORY.md`), which is why crops are found by hand with a
row/column density profile.

**Verdict: worth doing, after the exam.** It needs a pip install plus a weights download, and
installs launched from Claude's shell have landed in a sandbox overlay here before — so it must be a
user-run `.bat` with a written-out verification report. And it would only ever *propose* crops:
`CLAUDE.md` §4's "every crop is LOOKED at" does not move, so it saves proposal time, not review time.

## 4. Pipeline runners — no

Snakemake, DVC, Taskfile. What they offer that we lack: named stages and *re-run only what changed*.
What they cost: Snakemake and DVC are Python-heavy and Linux-leaning, and every stage boundary in
this project is a **medical** gate — "the key never moves", "a defective key is noted never
disputed", "every crop is looked at" — that no generic runner encodes.

The value is real and we can have it for nothing: our stages are already scripts under `tools/`.
A single small runner **we own** gives named, resumable steps with no new dependency.

## 5. Agent orchestrators — unchanged from the section above

Install nothing. `AGENTS.md` adopted (verified live). One line worth recording: **Codex speaks MCP
too** (`codex mcp`), so a tool server attached to *Codex only* would cost Claude no context at all —
but nothing in this pipeline needs one, since rendering is a single shell command.

## The honest summary

**The glue is not on GitHub.** Every candidate either cannot read our scans, fixes a number we are
forbidden to trust anyway, or prices coordination in Claude steps. What makes these tools cooperate
is two things we can build ourselves for nothing: **`AGENTS.md`** so the hard rules stop being
retyped, and **one runner** so the seven-step loop above is a command instead of a memory.

---

# Handoff annex, written 2026-09-03 at /clear

## `AGENTS.md` — what it must contain

Hard rules only. No history, no rationale, no counts (they go stale and Codex re-reads this file on
every run). Compose it from this checklist, at the Herophilus root:

1. Read-only unless the brief says otherwise. **Never write anywhere under `app\`** — `app\data\`
   above all; that file is the live app.
2. **Never modify, rename, move or delete anything in `Semester 8\`.** Never copy a scanned page out
   of this machine. Rendered PNGs go to the scratchpad only.
3. **`key` is a zero-based index into `opts`, never a letter.** `null` if unreadable — never guess.
4. **Verbatim means verbatim**: no corrected spelling, units, grammar or abbreviations, no reordered
   options, even where the page is plainly wrong.
5. **Numbers, units, doses and exponents are transcribed, never normalised.** Anything not
   unambiguous at the given resolution goes in `notes` instead of being read confidently.
6. **A defective printed key is recorded, never disputed and never corrected.**
7. **Figures: modality and view only.** Never interpret one, and never let a description answer the
   question it belongs to.
8. Write results to disk as you go. **A partial job reported honestly is a success.**
9. **On ambiguity, stop and hand back** — do not decide.
10. Output is data awaiting a human check. Never assert that a fact is verified.

## Codex command recipes — verified on 0.153.0, 2026-09-03

- **Staging (vision):**
  `codex exec -s workspace-write -C <dir> --skip-git-repo-check -i <pN.png> -i <pN+1.png> --json -o answer.txt "<prompt>"`
- Read-only work: swap in `-s read-only`. `--add-dir` grants **writable** extra dirs, not readable.
- `AGENTS.md` is picked up from the `-C` directory (global → project root → cwd, `AGENTS.override.md`
  wins at a level). **Tested with a marker instruction; honoured.**
- ⚠️ `-i` attaches images to the **initial prompt only** — one batch per run.
- ⚠️ **credential-guard blocks any shell command naming the Codex config folder**, so Claude cannot
  inspect or change Codex's own config from a shell. That is the user's job, in Notepad.
- `codex mcp-server`, `codex queue`, `codex resume`, `codex fork` all exist. **Unused by decision** —
  see "What was rejected" above.

## Open items carried out of 2026-09-03

- **52 shipped `pedep-neo-` entries** collapsed into chapter `neonatal`. **Decision: leave until
  after 17 Sep.** The endpoint chat owns that file; a re-chapter now competes with live drafting.
- **`progress\briefs\codex-onboarding.md` §2 is STALE** — it still says *"You own drafting only."*
  Superseded by this document. Revise it before the next Codex brief is written.
- ⚠️ **Count conflict — re-measure, do not quote either.** `MEMORY.md` says Peds House **150**
  remain (ch.12–20); `PLAN-sprint-to-17-sep.md` §3 says **124** (ch.13–20, from `Q_PEDS` 269).
  ch.12 is staged and untracked. Load the array and count both key styles before planning a batch.
- Repo is **15 commits ahead of `origin/main`**, unpushed. The user's call, not a work chat's.
- ⚠️ **Another chat's work is on disk untracked**: `content\peds\qb-pages\endpoint-s09-infection.*`
  (7 files) and 5 modified files under `tools\`. **Never stage, commit or edit these.**
