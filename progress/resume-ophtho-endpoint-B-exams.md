# START PROMPT — Ophthalmology endpoint, HALF B (exam sections)

**Paste this as the first message of a fresh chat. Open it on Fable 5.1.**
Do not continue an old session into this work (`CLAUDE.md` §9: step count is the cost).

---

You are Chat OPH-B. Workspace `D:\claude os`; project `Medical school\Herophilus`
(its `CLAUDE.md` and `MEMORY.md` auto-load — read them before doing anything).

## Your scope

Transcribe the **exam half** of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`.

- **Your pages: PDF 1391 – 2442.** 1,052 pages, sections 22–28: Model Exams 1–5, Summer Exam, Exam
  Night Review. A second chat, OPH-A, owns PDF 6–1390 (the 21 chapters). **Never render, read, cite
  or write a question from a page outside your range.**
- Section table with all seven exam ranges:
  **`progress\ophtho-endpoint-section-map-2026-09-07.md`** — read it, it is short, and it means you
  never re-render the TOC.

## ⚠️⚠️ THE PAGE OFFSET BREAKS INSIDE YOUR RANGE — this is your defining hazard

The printed page number equals the PDF page number up to **PDF 2150**. From somewhere in
**PDF 2151–2170** onward it is **+1**: `printed = PDF + 1`, i.e. `PDF = printed − 1`. Verified at
2170 (printed 2171), 2175, 2176, 2180, 2200, 2280, 2331.

**The exact flip page is NOT pinned.** Five samples bracket it; they do not locate it.

**GATE 0 for you: pin it.** Binary-search PDF 2151–2170 — about four single-page renders at 100 dpi,
read the small red number at bottom-right — and write the answer into the section map file. Do this
**before you write any `source` value for a page past 2150.** The closing test is page coverage; an
off-by-one there is a silent, systematic failure across the last ~290 pages.

Decide and record **one** convention for `source` citations (recommendation: cite the book's
**printed** number, since that is what the user sees on the page, and keep a PDF→printed note in the
ledger). Whatever you choose, `pagecov-oph.js` must be told which one, and OPH-A must be told too.

## Read these first, in this order

1. `progress\ophtho-endpoint-section-map-2026-09-07.md` — sections, ranges, the offset evidence.
2. `progress\ophtho-endpoint-scoping-2026-09-06.md` — why the split is shaped this way; the
   do-not-split-the-PDF finding; the OCR conditions.
3. `progress\resume-peds-endpoint-part2.md` — the closed peds endpoint part 2. **This is your
   template**, and it was the exam-heavy half too. Copy its method, not its content.
4. `tools\wps-ocr-reference.md` before your first OCR call.

Do **not** open anything else in `progress\` without checking `progress\READING-COSTS.md` first.

## Your outputs — names are fixed, do not improvise

| Thing | Value |
|---|---|
| Data file | `app\data\questions.ophtho.ep2.js` |
| Array | `Q_OPHTHO_EP2` |
| Id prefix | `ophep2-` |
| Bank | `endpoint` |
| Ledger section | a new section in `progress\ledger.md` |

OPH-A uses `questions.ophtho.ep.js` / `Q_OPHTHO_EP` / `ophep-`. **If you touch any of those three,
you have made the mistake this split exists to prevent.**

## You are blocked on OPH-A for two things

1. **The toolchain.** `tools\bank-harness\` is entirely pediatrics. OPH-A builds
   `val-oph-ep.js`, `splice-oph-ep.js` and `pagecov-oph.js`, each taking `--part 1|2`. You use
   `--part 2`. **Do not build a parallel copy** — two validators on one book is the same class of
   bug as two chats on one file. ⚠️ Never run `val-pd.js` / `splice-pd.js` / `pagecov-ep2.js` on an
   ophthalmology file; they write peds files.
2. **`app\index.html`.** OPH-A adds **both** `<script>` tags and creates your file as a stub with an
   empty `Q_OPHTHO_EP2`. **Do not edit `app\index.html`** — that is the one file the two of you can
   collide in.

**While blocked, do the work that does not depend on either:** pin the offset flip (above), render
and OCR your range into a search index, and map where each of the seven exam sections actually
starts and ends against the map's claimed ranges. That is real progress and none of it can be wasted.

## Method (the parts people get wrong)

- **Render + read scanned pages inside a subagent that returns text only.** An image read in the main
  conversation is re-sent every request for the rest of the session. `pdftoppm -png -r 150 -f <a>
  -l <b> "<source>" "<scratchpad>/oph-epb-"`. **Never modify the source PDF.**
- **Never split the PDF.** Splitting these books makes them *bigger*. You split the page range only.
- **OCR text is a search index, never a clinical source.** ⚠️ Never take an exponent, a unit or a
  dose from OCR — WPS read a printed 10⁶ as 10⁹ and also flattens 10⁶ → 106. Read those off the page
  image.
- **Exit 429 is a rate limit, not a quota** — back off, double the gap (cap 60 s), retry the same
  page. **You share one WPS account with OPH-A**, so the account-wide rate is double what you think
  you are issuing. Pace as if you own half.
- **Read every answered page; trust no printed count**, not the contents page, not the section map's
  own ranges. Render one page past the last page of each section.
- **Exam sections repeat the chapters' content by design.** Expect heavy within-book duplication
  against OPH-A's half. **Nothing folds mid-stream** — log every suspected collision with both ids
  and fold at the end, after both halves are closed. Six fold shapes: project `MEMORY.md`.
- Content standards, explanations, the six-shape duplicate sweep: project `CLAUDE.md` §4.
- **Cache as you go.** Transcription to `content\`, page ranges to `progress\ledger.md`, in the same
  pass. Write entries to disk incrementally (`Edit`-append, never `Write`) so a dead session resumes
  from the file.

## Routing — who does the work (workspace `CLAUDE.md` §9)

Take the lowest rung that can do the job and **say which rung before starting**.

Scanned medical pages **never leave Claude** — the fleet is not an option for transcription here.
That puts page work on rung 3: **`lean-drafter` subagents on Sonnet**, one bounded job each, back
in under ~60 tool calls. Use `haiku` for pure read-only search. Non-page work that *can* leave —
research, formatting, first-draft tool code — goes to the fleet via `/msn` or `opencode-delegate`
first. The main chat reviews and routes; it does not transcribe.

## Closing test

**Page coverage, not a section count.** Every `p.<n>` in every `source` field against every
OCR-`answered` page in PDF 1391–2442, **under the numbering convention you recorded at gate 0**.
`node tools\bank-harness\pagecov-oph.js --part 2`, exit 0.
⚠️ The classifier errs **both** ways — it calls real questions "notes" (the expensive direction) and
prose "questions". An adjudication is not a citation; record each one.

## Rules that end a session badly if broken

- **Commit with `git commit -F <msgfile> -- <explicit paths>`.** Never `git add -A`. Never stage a
  file OPH-A owns. `index.lock` present = the other chat is mid-commit; wait, never delete it.
- **Do not write to `MEMORY.md` or `ledger.md` mid-run** beyond your own appended ledger section.
- **A dirty tree is normal while two chats run.**
- Stop at a clean section boundary. A partial pass reported honestly is a success; a silent gap is
  not.

## Report back

When you stop, append to this file's `## Changed since` block (create it) — never edit the body
above. State: the pinned flip page, the citation convention you chose, sections done, page ranges
covered, entry count from disk (not from a draft header), collisions logged, anything left open.
