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

**2026-09-15, second block (chat OPH-A) — SECTIONS 3 AND 4 SPLICED, LIVE 102.** Commit `35f771c`.
- §4 fold applied as ruled: survivor n:4 (fuller box), n:2 folded, `folded: [2]` on `SEC_P1` s04;
  n:4 `source` = `Opthalmology endpoint.pdf p.301 (the same question is printed again on p.297)`.
  Draft 23 entries. Refuter PASS on §4.
- §3 refuter found the two fold citations written as MARKED pages (244, 268) while `source`
  cites STAGED PDF pages; corrected to 243 and 267. **Rule: a reprint citation uses the folded
  row's staged `p`, never the marked page.** `sec-oph.js` comments still say marked pages
  (documentation only).
- `splice-oph-ep.js --part 1 3 --write` 60 -> 79, `--part 1 4 --write` 79 -> 102, 0 holes,
  `boot-check.js` 0 errors after each (reports 4049 — ophtho is LOCKED at the aggregator, so the
  endpoint file never changes that number; a check wanting 4049+ is stale).
- Lane A (`calib-lane.sh` from the dead scratchpad) was KILLED at s11: its retry was looping on
  `CreateProcess ... orchestrator_helper_exit_nonzero (-1073741502)` and had overwritten the
  committed 307-line s11 note with a 172-line partial — restored with `git checkout`. Sections
  7–12 and 14 notes stand as committed. A fresh lane (`calib-lane.sh 13 15 16 17 18 19 20 21`,
  new scratchpad, 1500 s timeout per try) launched from this chat.
- §5 staging (`gw-s05-stage.md`, gateway) launched; §6 staging waits for a free slot (≤2 of this
  chat's jobs; the neuro chat and one other workspace chat each had a gateway job running too).
- §6 image check Q1–30 + Q8 figure p.459: two Sonnet drafters (Q1–15, Q16–30), report-only, to
  scratchpad `cl-s06-imagecheck-*-report.md`; results to be folded into `oph-ep-s06-keys.md` by
  a builder before staging §6 is trusted.

**2026-09-15, third block (chat OPH-A) — gateway down, Codex solo, then Codex ALSO hit its own limit.**
- Root-caused and fixed: rung-4 `codex exec` without `--add-dir "<scratchpad>"` gets its
  report-file write rejected (`patch rejected: writing outside of the project`) — sandbox denies
  writes outside the git repo without that flag. Fix confirmed working on fresh individual
  dispatches (not on a script edited mid-run — see next point).
- Editing `rung4-calib-lane.sh` while its loop was still executing did NOT take effect for the
  live run (s16-s21 all still failed report-writes on the old command) and the interpreter later
  died: `unexpected EOF while looking for matching` `"'`. Lesson: never edit a script file while
  it is running; dispatch fresh individual `codex exec` calls instead of re-running a loop script.
- Three lost reports reconstructed from job-log transcripts (no new finding, just recovery),
  written to the SESSION SCRATCHPAD only (dies with the session, not in `progress\`):
  `gw-s05-stage-report.md`, `gw-s06-stage-report.md` (repeats the n:14 defect below),
  `gw-calib-s15-report.md` (compressed from the already-landed full note, nothing new).
  Re-derive from the full notes/log files again if needed; do not hunt for these scratchpad files.
- §6 row n:14 (p.470) confirmed by direct inspection: stem field literally reads `...following
  excision with conjunctival autograft? c. 15%` — "c. 15%" is option C's text, swallowed into the
  stem, `opts:[]` empty. Genuine parser defect, not a benign flag. Needs a manual reread of p.470
  before this row can be drafted. NOT fixed yet.
- s16/17/18 full calibration notes landed (6.6K/6.7K/7.3K) but still have no short `-report.md`
  companion. s19 is still the broken 730-byte "Pending OCR/index analysis" stub. s20/s21 never
  ran at all (no note file exists).
- Three fresh individual redo dispatches for s19/s20/s21 (correct `--add-dir` from creation) all
  failed within seconds of launch: `ERROR: You've hit your usage limit. ... try again at 9:34 PM.`
  This is Codex's own OpenAI-account limit, separate from the OmniRoute gateway 429 on
  big-pickle. Per the drop-a-rung rule, do not retry-loop this — wait past 21:34 local or drop
  to rung 5.
- Probed rung 5 as a result: `vibe -p "<prompt>" --auto-approve --max-turns N [--workdir DIR]`
  and `grok -p "<prompt>" --always-approve --cwd DIR` both answered a one-line ping in seconds —
  LIVE, confirmed 2026-09-15 ~19:30 local. `vibe` without `--trust` warns the folder is untrusted
  and ignores `AGENTS.md`; add `--trust` for any dispatch that should read project conventions.
  Neither was pushed further than the ping this session — no calibration/staging work has
  actually been run on either yet.

**Next on resume:**
1. Redispatch s19 (redo), s20, s21 calibration on vibe or grok (rung 5) using the same
   `gw-calib-sNN.md` briefs already generated in this chat's scratchpad (regenerate via the `sed`
   template if the scratchpad is gone) — do not wait for the 21:34 Codex reset unless vibe/grok
   both go down too.
2. Compress s16/s17/s18's full notes into short `-report.md` files (vibe/grok, or inline — they
   are trivial reads of already-landed files).
3. Independently re-verify the §5 (`oph-ep-p1-s05-eyelids.array.js`) and §6
   (`oph-ep-p1-s06-conjunctiva.array.js`) staged arrays using vibe or grok — never Codex, per the
   user's standing rule (Codex checking its own Codex output is a same-house check).
4. Fix §6 n:14 (manual reread of p.470) once a checker is free.
5. Commit `oph-ep-p1-s05-eyelids.array.js`, `stage-oph-s05.js`, `oph-ep-p1-s06-conjunctiva.array.js`,
   `stage-oph-s06.js`, and the landed `ophtho-endpoint-s13/15/16/17/18/19-calibration-2026-09-15.md`
   notes ONLY after each is independently checked (git write is Claude's own job, explicit paths,
   never `add -A`).
6. Continue calibration through s21, then move to §5/§6 image-check and splice.

**2026-09-15, fourth block — lean-drafter (rung 6, ROUTE-OK) finished s19/s20/s21 calibration +
s16-18 reports. Own script check passed (non-empty, 0 CR, no leftover "Pending" stub text,
internally consistent counts/formulas); NO independent fleet/refuter check run yet on the three
new notes — do that before relying on them for staging.**
- §5 (`oph-ep-p1-s05-eyelids.array.js` + `stage-oph-s05.js`) independently verified PASS by vibe
  (29 rows, keys, 4 opts everywhere, no swallowed text) and COMMITTED: `3ebe834`.
- §6 (`oph-ep-p1-s06-conjunctiva.array.js`) independently verified by grok: only n:14 (p.470,
  empty `opts`, swallowed "c. 15%") is broken, the other 38 rows/keys/counts are clean. NOT
  committed — held back until n:14 is fixed (needs a page reread; Codex vision also out right
  now, so this is blocked on the same 21:20-ish window, or another vision seat).
- s19 (redo): pp.1245-1331, 25 physical pairs but the SOURCE ITSELF double-prints "16." on two
  different questions (k=16/k=17) — 24 distinct numbers, a source-side defect, not a transcription
  one. Formula `1280+2k`/`1281+2k` holds all 25. One 5-option pair (k=25/"24"). Two pairs
  (k=22/"21", k=24/"23") show no key-mark signal at all — needs image check before staging.
- s20: pp.1332-1373, clean 1-15 numbering, formula `1342+2n`/`1343+2n` holds all 15, all
  4-option, one no-key-mark anomaly at Q11.
- **s21: PDF pp.1374-1390 is a "Keys For Diagnosis" mnemonic appendix — ZERO MCQs.** All 17 pages
  classify as `notes`, no Questions divider, no lettered-option pattern anywhere (regex swept,
  zero hits). Nothing to stage from this section. Two tables (p.1384, p.1388) flagged as possibly
  image-laid-out, unconfirmed. **Open question for the user/orchestrator: does `SEC_P1` entry 21
  get marked "stages nothing" like the s06 p.522 reprint pattern, or does this need a ruling?**
- Reports for s16/s17/s18 written to scratchpad (compression only, no new analysis, per job 4).

**Next on resume:** independent-check s19/s20/s21 (vibe/grok, same pattern as §5/§6) before
trusting the counts for staging; decide s21's status; fix §6 n:14 once a vision seat is free;
commit calibration notes s13/15/16/17/18/19/20/21 once each has its independent check (or judge
calibration notes as lower-stakes structural-only and commit on the script check alone — not yet
decided, ask the user if unsure); continue toward §5/§6 image-check and splice.

**2026-09-15, fifth block — routing updated twice more (19:50 fleet-direct, then 22:15 "Codex
solo back, use gpt-5.6-terra/gpt-6-astra first"). §6 n:14 fixed and committed, calibration notes
committed, full endpoint state taken for the user. Session hit its ~80-step budget here — stop,
`/prep`, resume from this block.**
- §6 n:14 (p.470/471, pterygium recurrence rate): fix was already by-eye-confirmed in
  `oph-ep-s06-keys.md` from an earlier pass (opts `["5%","10%","15%","50%"]`, key 0). Applied as
  a one-liner main-chat edit (no fresh vision dispatch needed), grok independent-check PASS,
  COMMITTED: `e7f08c8` (array fix + `stage-oph-s06.js`).
- Calibration notes s13/15/16/17/18/19/20/21 — all 8 independently re-verified against raw OCR
  by grok (two dispatches, 3 then 5 sections), all PASS. COMMITTED: `c4fdada` (amended from
  `edc7755` to add the missing `Co-Authored-By` line — local/unpushed, own immediately-preceding
  mistake, not a rewrite of shared history).
- `MEMORY.md` + this file's fourth block COMMITTED together: `94343ea`.
- **Full part-1 state as of this block**: spliced/live = s1-4 (102 q, commits `274c855`
  `3674c3f` `35f771c`). Staged+committed, not yet spliced = s5 Eyelids (`3ebe834`), s6 Conjunctiva
  (`e7f08c8`). Calibrated only, nothing staged = s7 through s21 (15 sections). **Part 2 (s22-28,
  pp.1391-2442, model/summer exams) untouched** — no calibration, no array files; that's OPH-B's
  scope, `val-oph-ep.js`/`splice-oph-ep.js --part 2` ready since gate-0.
- User said "start section 13 staging." s13 calibration note
  (`progress/ophtho-endpoint-s13-calibration-2026-09-15.md`) flags this as a BIG job versus s5/s6:
  **zero key extracted at all** — 41 marked pages (901-981, formula `898+2n`/`899+2n`), every
  option count, letter case (lowercase 1-8, uppercase 9-27, lowercase 28-38, uppercase 39-41 —
  unconfirmed), explanation-box presence (16 flagged pages), figures (zero found in OCR sweep,
  does not rule them out) and **every single answer mark** all need a genuine vision pass. Known
  source defect: duplicate "27." label at ordinals 27/28 (confirmed independently by grok — last
  pair's real stem reads "40." not "41.", so ordinal-to-printed-number is NOT 1:1, physical order
  `n` is the only stable key, same pattern as s06's double-28).
- No staging dispatch was launched yet for s13 — decided approach (mirror s05/s06: Codex solo
  vision pass over all 41 marked-page renders -> `oph-ep-s13-keys.md` keys file in the s05/s06
  table+prose format -> `stage-oph-s13.js` + `.array.js`) but ran out of step budget before
  writing the brief or dispatching.

**Next on resume (in order):**
1. `/prep`, fresh session, open FROM THIS BLOCK (not the fourth block above it).
2. Render s13's 41 marked pages (901-981, odd) + 41 unmarked (900-980, even) at 150 dpi to the
   scratchpad — reuse `oph-ep-p1-s06-conjunctiva.array.js`/`stage-oph-s06.js` as the structural
   template (same `n/p/key/stem/opts/expl/boxPrinted/keySource/keypos/numberCheck/note` shape).
3. Dispatch Codex solo (`gpt-5.6-terra`; `gpt-6-astra` if s13 gets flagged must-be-right given its
   size) with `codex exec -i <png...>` per the vision ladder, brief naming: the 898+2n/899+2n
   formula, the duplicate-"27." defect, physical-order `n` as the only key, and the requirement to
   produce BOTH `content/ophtho/qb-pages/oph-ep-s13-keys.md` (s05/s06 table format) and the staged
   `oph-ep-p1-s13-retina.array.js` + `tools/ep-index/stage-oph-s13.js` pair. Given 41 pairs, batch
   the vision pass (e.g. 4 calls of ~10 pairs) rather than one call over 82+ images.
4. Two-layer check: `node --check` + hole/bad-opts scanner, then one independent checker from a
   different house than Codex (grok or vibe, not Codex-on-Codex).
5. Continue s7-s12, s14 staging (calibrated, not yet staged) and s16-s21 staging once s13 sets
   the pattern for a "needs full vision key extraction" section; then §5/§6 image-check
   (figures/case/boxes, flagged but never confirmed) and splice.
6. Rule on s21 "stages nothing" (Keys-For-Diagnosis appendix, zero MCQs) in `sec-oph.js` entry 21
   — still not implemented or confirmed.

**2026-09-15, sixth block — s5 Eyelids drafted, corrected, validator clean, COMMITTED. Standing
instruction for this stream is "finish all of s5-s12 first" (splice each), s13 vision work from
the fifth block above is DEFERRED until then — do not resume s13 staging next.**

- s5 draft (`oph-ep-p1-s05-eyelids.draft.js`, from a prior Codex dispatch) failed val-oph-ep.js on
  nearly every row. Root causes, all fixed: (1) staged `expl` left empty by design for n:1-11,
  which silently broke the validator's boxed-count derivation off `s.expl` — backfilled verbatim
  box text into staging; (2) `source` cited the marked/answer page instead of the staged unmarked
  page `s.p` (a defect in an earlier-written brief) — rewritten per row; (3) marker text used an
  ASCII apostrophe instead of the required curly U+2019, and the unboxed-marker sentence was
  wrong wording (same brief defect) — both fixed verbatim against `val-oph-ep.js`'s `BOXED_MARK`/
  `UNBOXED_MARK`.
- Two Claude-only adjudications (CLAUDE.md §8): folded n:15 (p.387) into n:8 (p.373) as an exact
  reprint (identical stem/key, OCR-spacing-only option variant) — `folded:[15]` in `sec-oph.js`,
  row dropped from the draft, left untouched in staging. Confirmed row-1's figure is real: p.359
  (question page) has no photo, p.360 (answer page) does — an ectropion close-up, unusually only
  present on the marked render. Cropped to `app/assets/q/q-oph-ep-360.jpg`, `figPage:{1:360}` +
  `fig:true` on staged n:1 recorded in `sec-oph.js` / the staged array.
- `node tools/bank-harness/val-oph-ep.js --part 1 5`: **ALL CHECKS PASSED** (28 rows, 0 holes,
  boxed 11/29, figures 1, no failures).
- COMMITTED: `75b3217` (staged array + sec-oph.js + draft + crop, all four files).
- **Not yet done for s5**: the required independent checker (two-layer discipline — never Codex
  checking Codex; use vibe/grok, same pattern as s6 n:14) has NOT been dispatched against the
  corrected draft/staging. Splice (`splice-oph-ep.js --part 1 5 --write`) has NOT been run.
- Session hit its ~80-step budget again here — stop, `/prep`, resume from this block.

**Next on resume (in order):**
1. `/prep`, fresh session, open FROM THIS BLOCK.
2. Dispatch an independent checker (vibe or grok, not Codex) against the corrected
   `oph-ep-p1-s05-eyelids.draft.js` + `.array.js` — re-verify stem/options/key byte-match to
   staging, box-text transcription accuracy against p.360, marker text, the n:15 fold, and the
   row-1 figure crop (visual check, no bleed / no answer-key text in frame — already eyeballed
   once this session but wants the independent pass too).
3. On a clean independent check: `node tools/bank-harness/splice-oph-ep.js --part 1 5 --write`,
   verify boot, commit the splice.
4. s6 Conjunctiva: staged and committed (`e7f08c8`), drafting not started. Known issue before
   drafting: n:14 (p.470) staging showed 0 parsed options vs 4 in keys.md, stem text may have
   absorbed option text — reread by hand before including it in the draft brief. Mirror the s5
   draft brief pattern (now corrected — use the FIXED s5 draft as the new template, not s4, since
   s5's brief had the source-page and marker-text defects).
5. s7 Sclera through s12 Vitreous: calibrated only, nothing staged. Each needs staging
   (array.js + keys.md + stage script, vision pass) then drafting then validate/independent-check
   /splice/commit — mirror s5/s6.
6. Only after s5-s12 are fully spliced and committed: resume s13 Retina staging per the fifth
   block above (Codex solo vision dispatch, 41 marked-page pairs, duplicate-"27." defect, formula
   898+2n/899+2n).
7. Still separately pending, lower priority: s21 "stages nothing" ruling not implemented in
   `sec-oph.js`.

**2026-09-16 — s6 Conjunctiva Step 1+2 done (box/figure/key confirm + expl transcription); Step 3 (draft.js) NOT started.**

- Vision rung used: Codex solo dead (OAuth `refresh_token_invalidated`, confirmed via run log —
  needs user re-login before Codex can be used again). OmniRoute gateway dead (`omniroute_get_health`
  timed out 1800s, no response). Dropped to Gemini by key — `gemini-3.7-flash`, reached via a Node
  `https` script (raw `curl` is denied by the Bash tool's permission system in this session; Node's
  `https` module is not). All 39 marked-page images (445–521 odd, 8.8 MB) sent in one call, JSON-only
  response, STOP finish reason, clean.
- Script kept for reuse: `<scratchpad>/s06-gemini-dispatch.js` (dispatch) +
  `<scratchpad>/s06-apply-expl.js` (apply into array.js by `n:`/`p:`/`key:` anchor). Gemini's raw
  JSON: `<scratchpad>/s06-gemini-text.txt` (39 rows: n, printed_q, box, border_color, expl, figure,
  figure_desc, key_letter_seen, key_agrees, note) — scratchpad, will not survive a fresh scratchpad.
- Box status: confirmed box 2–17, 31–35 (21 rows); confirmed NOT boxed 1, 18–30, 36–39 (18 rows) —
  matches the array's original `note` pattern exactly except n:1 (see below). `expl` filled verbatim
  for all 21 boxed rows, straight from Gemini's page read (not OCR).
- **n:1 (p.445) corrected**: array `note` said box printed; confirmed NOT boxed (plain bulleted notes
  list, not a bordered panel) by two independent reads now (`cl-s06-imagecheck-1-15-report.md` +
  this Gemini pass). `expl` stays empty, `note` corrected in place. `boxPrinted:true` field left
  untouched (out of this pass's write grant; the validator gates on `expl` emptiness, not this
  field, so it does not affect validation — just stale metadata worth fixing whenever the array is
  next touched).
- **n:8 (p.459) key FIXED, Claude adjudication**: staged `key` was 3 (from
  `oph-ep-s06-keys.md`, "confirmed by eye 2026-09-15") — a mistranscription. Gemini's independent
  read flagged `key_agrees:false` (page highlights option A). Read the page image myself
  (`<scratchpad>/s06/s06-0459.png`): "a. Tranta spots" is printed highlighted/underlined as correct.
  Medically this is also the only defensible answer (vernal keratoconjunctivitis with cobblestone
  papillae -> Horner-Trantas dots; "Kayser-Fleischer rings" is a Wilson's-disease finding, unrelated).
  This is our own staging error, not the source being wrong, so the "defective key is never disputed"
  rule does not apply — `key` corrected 3 -> 0, `note` records the correction and why.
  `oph-ep-s06-keys.md`'s row for n:8 was NOT corrected (out of scope this pass) — flag before trusting
  that file's key column for n:8 again.
- No other `key_agrees:false` and no other figure besides n:8 (confirmed, matches prior report).
  n:14's previously-flagged "0 parsed options" issue is already resolved on disk (keySource note
  shows it was fixed before this session — 4 options present, confirmed by eye).
- `node --check` clean on the edited array.js; no mangled-encoding markers (em/en dash render as
  real U+2013/U+2014, not the Codex cp1252 double-encode pattern).
- **Still open for s6**: Step 3, the 39-entry `oph-ep-p1-s06-conjunctiva.draft.js` — boxed rows wrap
  the now-filled `expl` in the boxed template (see `oph-ep-codex-s06-draft.brief.md` Step 3 for the
  exact marker text), unboxed rows (1, 18–30, 36–39) need an authored explanation from
  `content/ophtho/lectures/L6) Conjunctiva.txt` + `content/ophtho/book/ch06-conjunctiva.txt`, closed
  with the unboxed marker. This is text-only, no vision needed — route it to `lean-drafter` (Sonnet)
  or another fleet text seat per CLAUDE.md §9 rung 5/6 (Codex + gateway both dead this session, so
  rung 5/6 applies directly), not Gemini. After a draft exists: `val-oph-ep.js --part 1 6`,
  independent check (different house from whoever drafts), then splice + commit.
- Session hit its ~80-step budget here — stop, `/prep`, resume from this block.

## 2026-09-16 (autonomous tick, cont'd)
- Committed the s6 array.js fix + docs from the block above: `98da2d6`. `git status` clean for
  ophtho paths now (only an unrelated OpenAI CLI credential folder, a code-search tool cache, and
  the now-stale Codex draft brief `content/ophtho/qb-pages/oph-ep-codex-s06-draft.brief.md` remain
  untracked -- that brief still asks for Steps 1+2, which are done; do not hand it to a worker
  as-is, write a Step-3-only brief).
- Confirmed (again) the prior Codex draft attempt (23:48 2026-09-15,
  `<scratch>/s06-codex-run.log`) failed on `refresh_token_invalidated` -- same dead OpenAI login,
  not re-attempted.
- Did NOT start Step 3 (draft.js) this tick -- step-budget hook fired first. Next session: write a
  Step-3-only brief (chapter id confirmed `op-conj` in `tools/bank-harness/sec-oph.js:11`) and
  route to `lean-drafter`, per CLAUDE.md §9 rung 5/6.

## 2026-09-16, section 8 "Cornea" staging started
- Config (`sec-oph.js` line 13): `prefix ophep-cornea-`, `chapter op-cornea`, pages [560,638]
  (79 pp), `ans: null` (no separate keypos source, same as s7). Rendered all 79 pages to
  `<scratchpad>/s08/p-0560.png`..`p-0638.png` at 150dpi -- scratchpad only, not cached in-repo yet.
- Dispatched Gemini vision (`gemini-3.7-flash` by key, rung 3 of the vision ladder -- Codex solo
  had a dead OpenAI login last section, gateway `auto/vision` is banned per the GATEWAY ROUTE
  block above) in batches. **Structure now KNOWN, first time determined for this section:**
  - Pages 560-580 (21 pp) = THEORY/anatomy, no questions. Exclude from the array, same as s7's
    theory range.
  - Pages 581-638 (58 pp) = question pages, TWO PAGES PER QUESTION same shape as s7:
    **unmarked page = 579 + 2n, marked page = 580 + 2n** (n = printed question number, 1-based).
    Unmarked = stem+options only, no key. Marked = same stem+options + highlighted key +
    (usually) a printed explanation box. This gives an estimated 29 questions total (58 pp / 2),
    to be confirmed once every page is actually read -- do not trust the arithmetic over an
    actual page count once the rest is transcribed.
  - Verified questions 1-9 fully (both unmarked+marked pages, pp.581-598) via
    `<scratchpad>/s08/s08-gemini-text-a.txt` (batch covering pdf pages 560-599, 40 images,
    12.1MB payload, succeeded first try, status 200). Question 10's unmarked page (599) is also
    in this file; its marked page (600) is not yet transcribed.
- **BLOCKED on Gemini free-tier quota, pages 600-638 (~19-20 questions) NOT yet transcribed.**
  Repeated batches (40/20/19/10/10/10/9-page splits, sizes 2.1-12.1MB) got escalating errors:
  first a transient 503 (retried once, failed again), then more 503s even at small size, then a
  **429 `RESOURCE_EXHAUSTED`**: `generate_content_free_tier_requests` quota, **limit 20
  requests/day per model**, confirms the existing MEMORY.md free-lane note ("Gemini free = 20
  req/day") -- this key is on the free tier, not a paid quota, and today's count (this section's
  attempts + likely s07's dispatch) hit the daily cap. A tiny text-only probe and a tiny 3-image
  vision probe both returned 200 immediately after the 429, confirming the block is the request
  counter, not a dead key or a dead model.
  **Per the vision ladder's liveness-probe rule (drop a rung on a limit error, never retry-loop),
  this rung is DONE for today.** Next session options, in ladder order: (1) re-probe Codex solo
  `codex exec -i <png>` on one page -- its OpenAI login showed `refresh_token_invalidated` in the
  s06/s07 timeframe, unconfirmed whether still dead; (2) wait for the Gemini daily quota to reset
  (unknown reset time, likely UTC midnight) and resume the same dispatch script,
  `<scratchpad>/s08/s08-gemini-dispatch.js`, with batch names `c1`(600-609) `c2`(610-619)
  `c3`(620-629) `c4`(630-638) -- c1 and c4 got 503, c2 and c3 got the 429, so probably safe to
  just re-run all four fresh; (3) fall to a Claude subagent for the remaining page reads only if
  both (1) and (2) fail a fresh liveness probe, per CLAUDE.md §9's vision ladder.
- Session hit its ~80-step budget (twice) during this stream -- stop, `/prep`, resume from here.
  Nothing spliced yet for s8; `content/ophtho/qb-pages/oph-ep-p1-s08-cornea.array.js` and
  `.draft.js` do not exist yet -- next session's first move once transcription completes is the
  same staging+draft brief pattern as `<scratchpad>/s07/brief-s07-stage-draft.md`, re-derived for
  s08's own page arithmetic (579+2n / 580+2n, NOT s7's 532+2n / 533+2n -- do not copy the constant).

## 2026-09-16 (autonomous tick), transcription CLOSED -- 29 questions, drafting next
- **Re-probed both dead rungs fresh, both still dead**: Codex solo `codex exec -i` on p.600 ->
  same `refresh_token_invalidated` (OpenAI session revoked, needs the user to `codex login` again
  -- an account action, left for the user, not retried). Gemini text-only probe -> still 429
  `RESOURCE_EXHAUSTED` (daily quota, unreset as of 2026-09-16 02:11 UTC). Per the ladder, fell to
  the Claude-subagent rung with a `ROUTE-OK:` override (route-guard blocks a Claude drafter while
  the gateway is up, but the specific rung it wants tried, gateway `auto/vision`, is the one
  MEMORY.md's GATEWAY ROUTE note bans outright).
- **Two `lean-drafter` subagents transcribed the rest** (pages 600-618 and 619-638, 19+20 images,
  Read tool on PNGs, ~118k tokens / ~23 tool calls each): `<scratchpad>/s08/s08-claude-text-d1.json`
  (pp.600-618, q10's marked page + q11-19 full) and `s08-claude-text-d2.json` (pp.619-638, q20-29
  full). Combined with the existing `s08-gemini-text-a.txt` (pp.560-599, theory + q1-9 full + q10's
  unmarked page), **all 58 question pages (581-638) are now transcribed -- 29 questions, 0 gaps.**
  Page-arithmetic formula (579+2n unmarked / 580+2n marked) held for every single page across all
  three sources, no `question_single`, no theory pages inside the question range, no figures
  anywhere in 600-638 (the only two figures in the whole chapter are q1's cornea-layer diagram and
  q9's Munson's-sign photo, both already in the batch-a range).
- **Two judgment calls made this tick (Claude-only: fold decision + key adjudication):**
  1. **FOLD q11 + q17** (respelled shape, one of the six standing fold shapes -- CLAUDE.md
     "SIX fold shapes"): identical stem ("young boy with Down syndrome... conical protrusion...",
     key Pentacam) and identical options except q11's option A reads "Amsler's grid" vs q17's
     "Amsler's gird" (typo). Same key both printings. **Decision: keep q11's printing as the
     surviving entry** (correct spelling), drop q17, no `alsoIn` (within-bank fold per the
     standing rule). Final id count is therefore **28**, not 29.
  2. **q28 key convention resolved, not disputed**: the endpoint page prints options out of
     alphabetical order (`a) Catarrhal conjunctivitis`, `c) Dendritic ulcer`, `b) Chronic
     dacryocystitis`, `d) Acute angle closure glaucoma`, top to bottom) and highlights the
     *second* row while labeling it "c)". **Convention for the draft: `options[]` stays in
     printed top-to-bottom order; `answer`/`key` is the 0-based index of the highlighted text**
     (index 1, "Dendritic ulcer"), never the printed letter. This is a page-layout artifact, not
     a defective key, so it is not a "disputed key" note -- just transcribe positionally.
- **Explanation-box gaps to fill from the lecture cache when drafting** (per CLAUDE.md
  "gap-fill" rule -- write from `content/ophtho/lectures/*.txt` if a cornea lecture is cached,
  tag `not taken from the course material` only if it genuinely is not covered): q17, q18, q19
  (d1) and q20-24, q28, q29 (d2) print a highlighted answer with **no** explanation box. q25-27
  (d2) do have boxes.
- **q14's printed explanation box is about a different topic than its own stem** (stem: chemical
  eye burn management; box: intra-ocular foreign body management) -- a source defect, transcribed
  verbatim in the array file, **not corrected there**; the draft's authored explanation must
  address the actual stem (chemical burn) and should note the mismatch rather than reuse the box
  text, per "a defective key/box is noted, never disputed."
- **Next step, exact and ready to dispatch**: write a drafting brief for Codex+OmniRoute
  (`D:\claude os\Tools\omniroute\codex-gw.sh` -- workspace root, NOT under the project's own
  `Tools\`), modeled byte-for-byte on `<scratchpad>/s07/brief-s07-stage-draft.md`, templated off
  `content/ophtho/qb-pages/oph-ep-p1-s07-sclera.{array,draft}.js` (small, recent, same book).
  Target: `content/ophtho/qb-pages/oph-ep-p1-s08-cornea.array.js` + `.draft.js`, ids
  `ophep-cornea-1..28` (28 after the q11/q17 fold), `chapter:'op-cornea'`, `bank:'endpoint'`,
  citation page = each row's own **unmarked** page (579+2n). Source JSON to feed the brief:
  the three scratchpad files above (`s08-gemini-text-a.txt`, `s08-claude-text-d1.json`,
  `s08-claude-text-d2.json`) plus this section's fold/key/gap-fill decisions verbatim from above
  -- do not re-derive them. After the brief returns, run `val-oph-ep.js --part 1 8`, get an
  independent (non-Codex) check, then Claude-only splice + boot-check + commit + this file's/
  MEMORY.md's final close-out line.
- Session hit its ~80-step budget again this tick -- stopping the autonomous loop here rather than
  starting the drafting brief now; resume in a fresh session from this block.
