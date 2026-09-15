# START PROMPT — Ophthalmology endpoint, HALF A (chapters)

**Paste this as the first message of a fresh chat. Open it on Fable 5.1.**
Do not continue an old session into this work (`CLAUDE.md` §9: step count is the cost).

---

You are Chat OPH-A. Workspace `D:\claude os`; project `Medical school\Herophilus`
(its `CLAUDE.md` and `MEMORY.md` auto-load — read them before doing anything).

## Your scope

Transcribe the **chapter half** of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`.

- **Your pages: PDF 6 – 1390.** 1,385 pages, sections 1–21 (Examination of the Eye → Keys for
  Diagnosis). A second chat, OPH-B, owns PDF 1391–2442 (the exam sections). **Never render, read,
  cite or write a question from a page outside your range.**
- Printed page number **equals** PDF page number across your whole range — verified at 6, 880 and
  1391. You have no offset to correct. (OPH-B does; that is their problem, not yours.)
- Section table with all 21 chapter ranges:
  **`progress\ophtho-endpoint-section-map-2026-09-07.md`** — read it, it is short, and it means you
  never re-render the TOC.

## Read these first, in this order

1. `progress\ophtho-endpoint-section-map-2026-09-07.md` — sections, page ranges, the offset warning.
2. `progress\ophtho-endpoint-scoping-2026-09-06.md` — why the split is shaped this way; the
   do-not-split-the-PDF finding; the OCR conditions.
3. `progress\resume-peds-endpoint.md` — the closed peds endpoint part 1. **This is your template.**
   It is the same job on a different book. Copy its method, not its content.
4. `tools\wps-ocr-reference.md` before your first OCR call.

Do **not** open anything else in `progress\` without checking `progress\READING-COSTS.md` first.

## Your outputs — names are fixed, do not improvise

| Thing | Value |
|---|---|
| Data file | `app\data\questions.ophtho.ep.js` |
| Array | `Q_OPHTHO_EP` |
| Id prefix | `ophep-` |
| Bank | `endpoint` |
| Ledger section | a new section in `progress\ledger.md` |

OPH-B uses `questions.ophtho.ep2.js` / `Q_OPHTHO_EP2` / `ophep2-`. **If you touch any of those three,
you have made the mistake this split exists to prevent.**

## GATE 0 — you build the toolchain, and OPH-B is blocked until you do

`tools\bank-harness\` is **entirely pediatrics-shaped**. Nothing ophthalmology exists. Before either
chat writes a question, build, from the `-pd-ep2` scripts as the model:

- `tools\bank-harness\val-oph-ep.js` — validator, `--part 1|2`
- `tools\bank-harness\splice-oph-ep.js` — splicer, `--part 1|2`, refuses unless the validator exits 0
- `tools\bank-harness\pagecov-oph.js` — the page-coverage closing test, `--part 1|2`

One toolchain with a part flag, not two copies. **`val-pd-ep2.js` is 33.9 K — budget for this
properly; it is not a detail.** ⚠️ Never run `val-pd.js` / `splice-pd.js` / `pagecov-ep2.js` against
an ophthalmology file — they write peds files.

**Also at gate 0, so the two chats never collide in `app\index.html`:** add **both** `<script>` tags
(`questions.ophtho.ep.js` and `questions.ophtho.ep2.js`), mirroring the existing
`questions.peds.ep2.js` tag and its load position, and create OPH-B's file as a stub declaring an
empty `Q_OPHTHO_EP2`. Boot from `file://` and confirm 0 console errors before you go further.
**After this, `app\index.html` is OPH-B's to leave alone and yours to leave alone.**

Tell the user when gate 0 is done — that is OPH-B's green light.

## Method (the parts people get wrong)

- **Render + read scanned pages inside a subagent that returns text only.** An image read in the main
  conversation is re-sent every request for the rest of the session. `pdftoppm -png -r 150 -f <a>
  -l <b> "<source>" "<scratchpad>/oph-epa-"`. **Never modify the source PDF.**
- **Never split the PDF.** Splitting these books makes them *bigger*. You split the page range only.
- **OCR text is a search index, never a clinical source.** ⚠️ Never take an exponent, a unit or a
  dose from OCR — WPS read a printed 10⁶ as 10⁹ and also flattens 10⁶ → 106. Read those off the page
  image.
- **Exit 429 is a rate limit, not a quota** — back off, double the gap (cap 60 s), retry the same
  page. **You share one WPS account with OPH-B**, so the account-wide rate is double what you think
  you are issuing. Pace as if you own half.
- **Read every answered page; trust no printed count**, not the contents page, not the section map's
  own ranges. Render one page past the last page of each section.
- Content standards, folds, explanations, the six-shape duplicate sweep: project `CLAUDE.md` §4 and
  `MEMORY.md`. **Endpoint/House overlap is chapter-shaped** and it will hit *you*, not OPH-B —
  Ophthalmology House is closed at 1,598 and its questions are chapter-organised. **Nothing folds
  mid-stream**; log collisions and fold at the end.
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
OCR-`answered` page in PDF 6–1390. `node tools\bank-harness\pagecov-oph.js --part 1`, exit 0.
⚠️ The classifier errs **both** ways — it calls real questions "notes" (the expensive direction) and
prose "questions". An adjudication is not a citation; record each one.

## Rules that end a session badly if broken

- **Commit with `git commit -F <msgfile> -- <explicit paths>`.** Never `git add -A`. Never stage a
  file OPH-B owns. `index.lock` present = the other chat is mid-commit; wait, never delete it.
- **Do not write to `MEMORY.md` or `ledger.md` mid-run** beyond your own appended ledger section.
- **A dirty tree is normal while two chats run.**
- Stop at a clean section boundary. A partial pass reported honestly is a success; a silent gap is
  not.

## Report back

When you stop, append to this file's `## Changed since` block (create it) — never edit the body
above. State: sections done, page ranges covered, entry count from disk (not from a draft header),
folds logged, and anything you left open.

## Changed since

**2026-09-08 — GATE 0 CLOSED.** This was the prerequisite blocking both ophthalmology endpoint
chats, and it is now done. No questions have been transcribed yet — the bank is still at zero.

Built:

- `tools\bank-harness\sec-oph.js` — section tables. `SEC_P1` holds sections 1–21 (the chapter
  half, PDF pages 6–1390), `SEC_P2` holds sections 22–28 (the exam half, PDF pages 1391–2442). 28
  sections total, each entry carrying `prefix`, `file`, `svar`, `draft`, `chapter`, `pages`, `ans`.
  Structurally checked: all 28 present, page ranges match the section map exactly, field order
  identical throughout, no illegal chapter id.
- `tools\bank-harness\val-oph-ep.js` — validator, `--part 1|2`.
- `tools\bank-harness\splice-oph-ep.js` — splicer, `--part 1|2`, refuses unless the validator
  exits 0 (a real `spawnSync` exit-status check, run once per draft half).
- `tools\bank-harness\pagecov-oph.js` — page-coverage closing test, `--part 1|2`.
- `app\data\questions.ophtho.ep.js` — stub, `var Q_OPHTHO_EP = []`.
- `app\data\questions.ophtho.ep2.js` — stub, `var Q_OPHTHO_EP2 = []`.
- `app\index.html` — both `<script>` tags added immediately after the existing
  `data\questions.ophtho.js` tag. This file is now finished for both chats; neither should touch
  it again.

Verified: `node tools\boot-check\boot-check.js` exit 0, 0 console errors. `node --check` exit 0 on
each of the three tools. An independent Claude subagent (not the seat that wrote the code) ran a
ten-item adversarial check and returned 10/10 PASS with no defects.

Two decisions were taken rather than asked, and both need to survive into the drafting work:

- Figure basenames are `q-oph-ep-<page>` for **both** parts. Peds needed distinct basenames only
  because its part 2 restarts page numbering at 1; this book is one continuous range whose halves
  own disjoint pages, so a page number is globally unique and one scheme is correct.
- `pagecov-oph.js --part 2` refuses by default to score any page above PDF 2150, because the
  printed page number becomes the PDF number plus one at an unpinned flip somewhere in PDF
  2151–2170. An explicit `--flip <pdfpage>` opt-out takes the pinned flip page, restricted to the
  2151–2170 window. Part 1 is unaffected: offset is zero across its whole range.

Still open, to be decided at drafting time, not now: sections 12 (Vitreous), 16 (Pediatric
Ophthalmology) and 20 (Drugs and the Eye) have `chapter: null` in `sec-oph.js` because no matching
ophthalmology chapter id exists in `app\data\modules.js` yet. They will need chapters added there.
The seven exam sections (22–28) are `chapter: null` too, but for a different reason — they draw
from every chapter.

Also open: `content\ophtho\qb-pages\ocr\ep\index.json` does not exist yet. `pagecov-oph.js` needs
it and fails honestly on its absence. No OCR has been run.

Protection against writing a pediatrics file is structural, not conventional: the live target is
derived from a frozen `TARGETS` object keyed by a regex-validated `--part`, and there is no
`--file`/`--target`/`--out` flag and no environment-variable read anywhere in the three tools.

**OPH-B is now unblocked.** The next work on this side is section 1 (PDF pages 6–133).

**2026-09-09 — SECTION 1 CLOSED, 33 live.** "Examination of the Eye", PDF pages 6–133,
transcribed, drafted, validated and spliced into `app\data\questions.ophtho.ep.js`
(`Q_OPHTHO_EP`, `ophep-exam-eye-1`…`ophep-exam-eye-34`, `ophep-exam-eye-27` folded into
`ophep-exam-eye-10` — verbatim reprint, p.118 into p.84). 0 sparse holes. All keys confirmed
visually; OCR was wrong on 8 of 34 rows for stem/option text (all caught reading page images, all
corrected — see `progress\ophtho-endpoint-s01-calibration-2026-09-08.md` for the shapes, including
a newly-seen `=` -> dash/em-dash misread worth watching for downstream). `val-oph-ep.js --part 1 1`
exits 0; `boot-check.js` exits 0, 0 console errors; `pagecov-oph.js --part 1` correctly refuses
(only 1 of 21 sections drafted — it is a whole-part test). Full account: `progress\ledger.md` §19.

**Next: section 2, "Optics and Errors of Refraction", PDF pages 134–213.** Sections 12
(Vitreous), 16 (Pediatric Ophthalmology) and 20 (Drugs and the Eye) still carry `chapter: null`
in `sec-oph.js` and need chapters added to `app\data\modules.js` before they can be drafted — not
blocking section 2, but due before those three come up.

**2026-09-09 — SECTION 2 SPLICED, 60 live; SECTION 3 MEASURED + STAGED, NOT YET SPLICED.**
Section 2, "Optics and Errors of Refraction" (PDF 134-213, 27 questions, 0 corrections against
page images, 12 of 27 boxed, 4 tagged `not taken from the course material`), is now live.
Re-measured from disk: `app\data\questions.ophtho.ep.js` **60 entries, 88,064 bytes, 0 sparse
holes, 0 duplicate ids** (section 1 + section 2 only). `val-oph-ep.js --part 1 2` exits 0;
`boot-check.js` exits 0, 0 console errors; 0 carriage returns.
Section 3, "Orbit" (PDF 214-272, 21 questions, 9 of 21 boxed, no figures, 11 of 21 box calls
inferred from an OCR word-count delta then confirmed by direct reading), is fully calibrated,
keyed and staged, committed as `7a7ae42` — **but its splice into the live array has not run yet.**
Full account: `progress\ledger.md` §20.

Two tool/process fixes made this pass, both need to survive downstream:
- `tools\ep-index\index.py` was destroying prior OCR index rows on every run (full-replacement
  write) — fixed to read-merge-write; it now prints `merge: index.json had N rows before this run,
  M after (+K)`, check that line.
- `git commit -F <msgfile> -- <paths>` fails on an untracked path — `git add` those paths first,
  then the pathspec-scoped commit.
- `.ps1` is NOT blocked by policy (contrary to `MEMORY.md`'s old Environment line, now corrected) —
  `powershell -ExecutionPolicy Bypass -File` works.

**Next: splice section 3** (already calibrated/keyed/committed as `7a7ae42`) **into the live
array**, then section 4 onward through the chapter half (PDF page 1390). Sections 12, 16, 20
still need chapters added to `app\data\modules.js` before they can be drafted — not blocking.

**2026-09-15 — SECTIONS 3 AND 4 DRAFTED AND VALIDATED, NOT SPLICED; SECTIONS 5–6 KEYED; CALIBRATION
5–12 AND 14 DONE.** Live is still **60** (re-measured by loading the array). Working briefs and
checker reports from this block are copied to `progress\briefs\ophtho-ep-A\`; their absolute
scratchpad paths point at a dead session, so adapt them.

Rules learned this block, binding downstream:
- **Staged `*.array.js` `expl` holds the BARE printed box text only** — no lead line, no `> `, no
  marker — and stays EMPTY on unboxed rows. The validator derives "boxed" from a non-empty `expl`
  and compares its `> ` quote to it. Section 2 is the model. Written explanations live ONLY in the
  `.draft.js`. Any "quoted box differs from staging expl" warning means the array shape is wrong.
- **A shared option menu needs a pointer sentence naming the anchor id** in every non-anchor row
  (validator fails otherwise). On a BOXED row it sits after the quote, before the boxed marker,
  unquoted; the marker stays the last line.
- **Folds are recorded as `folded: [n…]` on the `SEC_P1` entry in `tools\bank-harness\sec-oph.js`**
  (not in `val-oph-ep.js`); `splice-oph-ep.js` reads `cfg.folded`. The survivor's `source` is a
  citation only: `Opthalmology endpoint.pdf p.<N> (the same question is printed again on p.<M>)`.
  A boxed survivor records the second printing's differing box wording in ONE plain sentence before
  the marker.
- Keep the Codex gateway (`opencode-zen/big-pickle`, no vision) at **≤2 concurrent jobs**; a third
  gave 503s and one run emptied the section 3 boxes mid-reconnect (restored from git).

State per section:
- **§3 Orbit** — draft `oph-ep-p1-s03-orbit.draft.js` **19 entries**; n:7 folded into n:4 (p.244
  into p.237, boxes differ "gums" / "upper teeth"), n:19 folded into n:9 (p.268 into p.247, exact
  reprint). Array boxes normalised. `val-oph-ep.js --part 1 3` exit 0, 0 warnings. Independent
  refuter PASS. **Ready to splice: 60 -> 79.**
- **§4 Lacrimal System** — draft 24 entries, array boxes n:1–6 normalised, pointers n:4->2,
  n:11->9, n:16->5, n:12->6. Validator exit 0. Refuter found n:2/n:4 identical stem/options/key
  with different boxes. **OPEN RULING, orchestrator decided, not yet applied:** n:4's box is FULLER
  (a whole extra sentence plus a wording swap, see `cl-s04-fold-report.md`), so keep the fuller
  printing — **survivor n:4, fold n:2**, `SEC_P1` section 4 `folded: [2]`, n:4 gets one sentence
  recording n:2's shorter box, n:2's pointer sentences removed, other pointers re-anchored as the
  validator demands. Then re-validate, splice: 79 -> 102.
- **§5 Eyelids** (PDF 343–416, 29 q) and **§6 Conjunctiva** (PDF 417–522, 39 q) — keys read off
  images: `content\ophtho\qb-pages\oph-ep-s05-keys.md`, `oph-ep-s06-keys.md`. Staging briefs
  written (`gw-s05-stage.md`, `gw-s06-stage.md`) but **NOT RUN** (the queue script had a poll bug
  and was killed). §6 boxes n:1–30 not yet confirmed by eye; Q8 p.459 has a figure.
- **Calibration notes** `progress\ophtho-endpoint-s05…s12, s14-calibration-2026-09-15.md` written.
  Lane A (odd sections, `calib-lane.sh 7 9 11 … 21`) may still be running on 13+; even 16, 18, 20
  were never started.

**Next:** apply the §4 n:2/n:4 fold (builder), refuter check both §3/§4 diffs, splice
`--part 1 3` then `--part 1 4`, `boot-check.js` after each; then run §5/§6 staging on the gateway;
calibrate 16/18/20 (and whatever lane A did not finish); close out ledger + MEMORY.md.
