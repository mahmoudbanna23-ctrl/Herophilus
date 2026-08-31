# Herophilus — Memory

**⚠️ OCR ROUTE (2026-08-31) — WPS, and it SUPERSEDES the cost ladder in `progress\ocr-pipeline.md`.**
`pdftoppm` renders pages to PNG → `wpscli photo2word` OCRs them. **$0** (WPS paid tier already
owned), measured **0.32 s/page render + 1.29 s/page OCR**; all 9,173 remaining pages ≈ 4 h machine
time. The PaddleOCR → AppleVision → Mistral ladder and the six Tesseract-gate changes are **DEAD —
do not build them** (fallback record only). **The user lifted the no-free-tier-cloud rule for WPS
on 2026-08-31** — *"I don't care that much if they violated the policy a little, the project is not
that private"*; Kingsoft's terms carry a no-training clause. The **three remaining** endpoint books
(**8,616 pp** — ophtho 2,442 · neuro 2,190 · peds 1,991+1,993; **ENT endpoint is CLOSED, not
deferred**) CANNOT be split (every page carries the whole resource pool — a 4-page split of a
317 MB book came out 331 MB), so rasterising is mandatory, not optional. Verified commands, OCR
defect list and exit codes: **`tools\wps-ocr-reference.md`**.
⚠️ **OCR text is a SEARCH INDEX, never a clinical source** — confirm every fact against the
rendered page before it ships. ⚠️⚠️ **AND SUPERSCRIPTS FAIL SILENTLY: WPS read a printed 10⁶ as
10⁹** (peds House ch.1 Q28, verified at 900 dpi, 2026-08-31); they also flatten (10⁶ → 106). A
wrong exponent is a **plausible wrong number, not visible garbage** — every other defect in this
engine announces itself, this one ships. **Never take an exponent, a unit or a dose from OCR text;
read those three off the page image.** ⚠️ **Exit 429 is a RATE limit, NOT a quota** — do not stop
on it; back off, double the gap (cap 60 s), **retry the same page**. Content rules unchanged.

Running record, organised around *resuming*. ISO dates; unverified marked as such. Method in
`CLAUDE.md`, per-topic history in `progress\ledger.md`, **war stories and superseded state in
`progress\memory-archive.md`** (pre-2026-08-17 memory + every block pruned since, incl. the full
2026-08-30 resume paragraph, moved 2026-08-31) — read the relevant block there before resuming a
paused stream. Where this file and the archive disagree, this file wins.

## Resume here — state at end of 2026-08-31

**Three module chats, run in parallel, all STOPPED cleanly tonight. Relaunch from
`progress\resume-2026-08-31-chatA-ophtho.md` and `…-chatB-peds-neuro.md`** (both corrected
tonight; the 429 rule in their first version was wrong). ✅ ENT CLOSED (`ledger.md` §15–§16).

- ⏳ **OPHTHO — 242 bank questions left against 27 Sep**, and both banks close on it. House
  **ch.17 + ch.18 MERGED** (ophtho now **1,399**, +69 today: 1,330 + 69); **ch.19 (42, one fold
  into `opmcq-c13-17`) and ch.20 (29, zero folds) are STAGED, not merged**; GG EE4/EE5/EE6/Tutorial/
  Final all rendered + OCR'd. **House closes at ch.20, GG at the Final Exam.** ⚠️ The only
  image-heavy work left in the module is **EE6's 35 photos**; everything else is text.
- ⚠️⚠️ **OPHTHO'S FIRST TASK ON RESUME IS THE EXPONENT AUDIT of ch.17–ch.20** — the chat merged
  them without ever receiving the superscript warning (verified by transcript audit: zero
  mentions in its whole run). Procedure in `progress\resume-ophtho.md`, last section.
- ⏳ **PEDS — bank MEASURED at 393 (81 shipped + ch.4–20 = 312); the inherited "~160" was low by
  95%.** ch.4 (25, drafted) and ch.5 (20, staged) are **NOT SPLICED**; `questions.peds.js` still
  holds **81**; 267 unstarted. 6 ch.5 crops cut (103 → 109). Peds OSCE **14 Sep**, nearest exam.
- ⏳ **NEURO — topic 16 "Anxiety & Related" SPLICED and committed (22).** All **142 pages
  rendered**. ⚠️ **Bank identity is GRADE GAIN**, cover prints "QS BANK + GRADE GAIN EDITION" —
  not House, not endpoint. ⚠️ **ONE book page per sheet, A4 portrait** — NOT 2-up; do not carry
  the peds/ophtho House arithmetic across. ⚠️⚠️ **THE PAGE OFFSET IS NOT GLOBAL: neuropsychiatry
  PDF = book + 5, neurosurgery PDF = book + 7** (two unnumbered contents pages at PDF 99–100).
  **In scope = PDF 6–98 only; SKIP PDF 99–140, neurosurgery, out of scope.** Two numbering runs,
  each continuous across topics: neurology topics 01–14, then psychiatry 15–23 **restarts at Q1**
  and ends Q165. ⚠️ The contents page's per-topic counts sum to 157 against a true 165 — trust no
  printed count. Full 23-topic map: `progress\resume-neuro.md`, last block.
- ✅ **CLOSED 2026-08-31: `content\ophtho\book\ch20-drugs.txt` was NOT lost** — recorded as dying
  with its agent, verified from disk as **18 page sections, printed 254–271, no gaps**. **Validate
  a dead agent's file from disk before believing a report that it died.** ⚠️ Debts left: 12
  `nr-intro`/`nr-exam` tags the book can replace (`npqb-nr-14` first) · ophtho theory reconciliation
  (~63 rows, `theory-plan.md`; book caches exist — do NOT re-read).
- **USER RULING 2026-08-31: skip ALL OSCE content** — *"If I needed it later I'll tell you."*
  Deferred, not cut: skip it, say it was skipped and why, carry on. Not a scope cut needing approval.

## Running three chats in parallel — what it actually costs and breaks

- **Boot cost is ~75,000 tokens per chat, not the ~12,000 I first estimated** (measured from
  transcript `usage`: 33,768 cache_creation + 41,627 cache_read at message 3). The low figure
  counted project files only and omitted system prompt, tool definitions and MCP schemas.
  Three duplicate boots ≈ 225k — still trivial against what the OCR route saves.
- **The endpoint plan is FOUR chats** (peds splits part1/part2 — peds alone is 46% of the 8,616
  pages): 9–15 working days wall-clock, against 33–51 sequential at the measured ~115 q/day.
- ⚠️ **Two chats share one WPS account, so the account-wide request rate is DOUBLE what either
  driver thinks it is issuing.** Pace as if you own half. This is what produces the 429s.
- ✅ **The parallel-chat rules held on their first real run** (audited 2026-08-31, 1,581 events):
  **0 page images in either main conversation** (all image work in subagents), 0 `git add -A`,
  0 writes to `MEMORY.md` or `ledger.md`, 0 cross-module writes. Peak context 167k of 200k.
  **Keep these rules in every parallel brief — they are the reason the day was cheap.**
- **Standing rules for the running bank stream** (war-story detail in the archive, 2026-08-31
  block): **a repaired back-reference must not answer its own question — hand-read each against
  its antecedent AND its own key; no instrument sees this** · **an offsetting error is invisible
  to a sum — count the parts** · **SIX fold shapes so far, all within-bank, none takes `alsoIn`**
  (exact · respelled · REORDERED which MOVES the key letter · boxed-second-printing which moves
  the marker · cross-CHAPTER exact · reworded stem + DROPPED FILLER option — check WHICH option
  dropped/changed before folding) · **a shared option menu PAIRS questions, it never folds them —
  name the discriminating token or you matched a template** · **grep the SIGN, not just the
  disease name, before any absence claim** · `bounds.js` cannot bound a figure inside a text
  column — use a column/row density profile.
- **⚠️ OPHTHO BANK ARITHMETIC — full brief `progress\briefs\ophtho-bank-brief.md`.** GG:
  **PDF = book + 7**, continuous numbering (exam sections restart at Q1). House: **A4 LANDSCAPE,
  TWO book pages per PDF sheet**, `PDF = floor(book/2)+2`, answers inline, numbering restarts
  each chapter (`-c<n>-` ids). **Render past the LAST answer page** (the "Page As" figure has
  failed three ways). **Confirm the box list two ways; markers = entries − boxes BEFORE
  splicing.** Tools `<scratch>\oph\` (older sessions — `find` the temp root).
- ⚠️ ~304 of the remaining ophtho questions are IMAGE questions (every crop LOOKED at — the
  dominant cost); 132 model-exam items are SHORT-ANSWER → `type:'case'`. Crop craft (ink test
  `max(r,g,b)<225 OR (max−min)>30`, full-resolution bounds, 3 px pad is a MAXIMUM, `image`
  stores basename without extension): full block in the archive, 2026-08-31.
- **ENT general traps, any sweep** (stories in the archive): British-vs-American spelling shipped a
  duplicate twice · comparator tolerance belongs on the WORD (`norm.js`) · a stem match is not a
  question match · a reconstructed stem can leak the NEXT question's answer.
- **Write-incrementally survives usage limits** — resume by `Edit`-appending, never `Write`. A dead
  agent whose last words name a fault leaves a KNOWN-BAD file — check that spot first.
- **⚠️⚠️ Contradictions are RECORDED, never corrected — the `answer` NEVER moves**; the note goes
  in `explanation`, quoting the slide (four shapes: archive, "ENT contradiction shapes").
- **My briefs have been corrected by the agent that read the source SIXTEEN times** — "TRUST THE
  STAGING AND THE TRANSCRIPT OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG" goes in every
  brief. It is a prior, not a verdict. · **Six instruments have been blind to the exact fault
  they were built to catch** (roster in archive) — read the function before writing the check.
- **A book's own chapter numbers can be defective** (House printed 9 twice) — chapter by content.
- **Theory 153/153 COMPLETE; neuro theory 36/36** — craft rules, registers and book caches are
  REFERENCE, not resume state: read the archive blocks (2026-08-23/24 + "Theory-done block"
  2026-08-31) before ANY theory edit. §14.5 register: ZERO open rows, all four modules.
- **⚠️⚠️ REAL EXAM DATES (user, 2026-08-13):** Peds OSCE **14 Sep** · Peds papers **17 Sep** ·
  ENT **22 Sep** · Ophtho **27 Sep** · Neuro **3 Oct** · Peds papers **18–19 Oct**. Nothing is
  dropped — banks are deferred, not cut; stop at clean topic boundaries.
- Untracked `content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js` is PARKED endpoint work —
  never stage or edit it from the hub. (`gg-ps-t16.*` spliced and committed 2026-08-31.)

## Governing decisions (verbatim rulings in the archive)

- **All theory is written from THIS hub chat** (2026-08-14); module chats resume **banks** only. Hub
  plans, validates, prints, commits; **Opus subagents write, cap 2 concurrent**. **A dead agent's file
  is usually complete: validate from disk before rewriting** (6 recoveries) — **but it may not exist
  at all** (529 deaths). §11.
- **Theory format = `START-HERE.md` §14** (2026-08-04 brief + first two §14s DEAD — user rejected
  30–47 pp chapters; the distractor-essay rule caused it, REVOKED). Budget `max(source words, 25×q)`,
  floor 600, **ceiling ~2,400 w / ~10 pp**; telegraphic; tables by default; §14.3a bold leads need
  `:`/`—` within 44 chars for `mdLead()`; §14.5 register — *an unrecorded promise is a deletion*.
- **Chapters are SPLIT, not compressed** (user, 2026-08-15, peds 21 → 51): every chapter ≤13 pp **measured by printing**. Safe (`SCHEDULE` is keyed by date+title, progress by question id) but **reassign questions from the theory `qs` links** — tie-breaks misfile most. ⚠️ **A seam that needs the chapter REORDERED is not a seam** (rejected one at `op-intro`).
- **Writing budget, banks (2026-08-13, supersedes "full depth everywhere"):** adaptive depth — ~520 w for
  vignettes/defects/divergences/gap-fills, **~250 w for straight slide-recall**, every distractor still
  explained; shared tables in ONE entry, siblings point at an **existing** id; `source` is a citation,
  never a second explanation. **Scope is never cut.** If time runs short, **say so loudly — scaling down is theirs.**
- **A defective key is noted, never disputed** (2026-08-11) — never take a key dispute to the user. **A lecture-numbering gap = the professor withheld it** (2026-08-14) — fill and tag, never chase.
- **Publishing agreed, parked until ENT done.** First: **fix the final domain** (localStorage is per-origin), **cache-bust the data `<script>` tags**, fold, review. Host/visibility undecided.

## The method — what transcription work must never skip

- **Read every answered page; trust no count** — not printed numbering, not the contents page, not the map (ranges 21/21 right, counts 17/21 wrong, always upward). **Render one page past the last.**
- **Run the full six-stage duplicate sweep (A–F) on every topic**; folds ran 0–20 with no trend and **the rankings are the instrument**. **Say why a zero is a zero, and say how it was measured.** Grep drafted blocks for a folded id **before** splicing; re-run the dead-id check after every fold. ⚠️ Marker deltas, mis-keyed banks and the sweep's defect shapes 1–6: `progress\memory-archive.md`.
- **Read the slide before declaring a gap — paid 17 times, and a BOOK CROSS-REFERENCE IS NOT A VERDICT.** ⚠️ **OPEN THE HIT BEFORE WRITING THE ABSENCE**; grep the shortest stem AND the misspelling; **an absence claim must name the specific thing absent, not the topic** — and say how it was measured (*"exactly 2 hits across all 29 decks"* beats *"not taught"*). ⚠️ **OPHTHO HAS 29 CACHED LECTURE FILES, NOT 34** — nine merge two lectures each (`L1,2`, `L3,4`, `L7,8`, `L13,14`, `L15,16`, `L27,28`, `L31,32`, `L33,34`, `L35,36`); **count the directory, never the lecture numbers.** ⚠️⚠️ **TWO DECKS AGREEING IS NOT CORROBORATION WHEN BOTH NOT-COVERED LISTS ARE SCOPED TO THEMSELVES** — `L20` and `L31,32` both record PVD absent; the BOOK explains it at p.17, p.41, p.42.
- **⚠️ Bank sampling and provenance: `progress\memory-archive.md`** — a contents page may print per-section counts (**verify, never trust**); the end-of-ENT "outside knowledge" list is **half wrong**, re-grep item by item; 67 entries record no provenance, roster in `ledger.md` §11.

## Validation state

- **Corpus 3,982** (2026-08-31 — **measured by loading each array and reading `.length`**, then
  cross-checked with the tolerant id regex; both agree): ENT **2,322** (2,240 q + 82 c) · **Ophtho
  1,399** (1,399 q + 0 c; +69 today = 1,330 + 69 — the "1,400" recorded earlier was a slip) ·
  Neuro **180** (173 q + 7 c) · Peds **81**; **109 images**. Keys `ent`, `ophtho`, `pediatrics`,
  `neuropsych`. Options 2–9 coexist. ⚠️ **`grep -c "^  { id:"` UNDERCOUNTS `questions.ophtho.js`**
  (mixed CRLF/LF, mixed indentation) — **load the array, or use the tolerant id regex.**
- **Theory: ✅ 153 of 153 chapters, 1,604 sections — COMPLETE.** ENT 30 (261 pp) · Peds 51
  (340 / 8.3) · Ophtho 36 (331 / 9.2) · Neuro 36. Drafts in `content\<mod>\theory-drafts\`
  (⚠️ ENT's bare `ent-csom/tonsils/aom/stridor` are the DEAD format; their `*.v2/v3` are current).
- Last `file://` boot **2026-08-30** (post-§17v): **0 console errors, 876 CSS rules, 4 modules,
  153 chapters, 3,891 q, 89 cases, 1,604 sections** (q count pre-dates today's merges).
  ⚠️⚠️ **THE SESSION SCRATCHPAD STARTS EMPTY AND THE HARNESSES DO NOT LIVE IN THE CURRENT ONE —
  `find` the temp root before rebuilding anything.** Theory/boot set (`print.sh` · `boot.sh` ·
  `vdraft.js` · `qdump.js` · `shot.sh`) under `3528b857-…\scratchpad`; the **House** set
  (`hparse`/`hsweep`/`deepsweep`/`norm`/**`splice-tail`**/**`mergeapply`** + 12 more) under
  `7e50a9f0-…\scratchpad\t10\`; renders + `ocr-cal\` under `fa979a62-…\scratchpad\`. **List the
  directory — never guess a harness name.** ⚠️⚠️ **`Array.filter` SKIPS SPARSE HOLES — index it:
  `for i… if(!(i in A))`.**
- **⚠️ THE THEORY READER IS AN A4 PAGE (2026-08-19, three user complaints) AND MUST NOT BE MADE WHITE.** 210:297 by `aspect-ratio`; **margins set in JS from the PAGE's width** (percentages resolve against the containing block). Mechanics in the archive.
- **⚠️⚠️ `overflow:hidden` MAKES A BLOCK MONOLITHIC, AND MONOLITHIC MEANS CLIPPED, NOT BROKEN** — `.th-table` silently lost over-tall tables' last rows. Fixed screen-side; print never affected.
- **⚠️ A draft header is a claim, not a measurement — re-count from disk after the final edit.** Wrong nine times; **the sum check alone no longer suffices.** Page divisors: resume block + plan §4.

## Environment — what changes what you do first

- Poppler **25.07.0** (off PATH, under `…\WinGet\Packages\oschwartz10612.Poppler_…\`); `pdftotext` = 0
  chars on every book/bank; `Read` rejects >100 MB. **`.ps1` blocked by policy — pass PowerShell
  inline.** **Node v26.7.0** · **Python 3.12.10 + pip 25.0.1 (verified 2026-08-31)**; no
  ImageMagick, Ghostscript or `gh`. Images via `System.Drawing`
  (⚠️ `Sort-Object` no-ops on hashtables; cast `Measure-Object` doubles to `[int]`). Headless Chrome is
  the only screenshot/probe route — **⚠️ never under a path containing `--`** (`CLAUDE.md` §7).
  Tesseract 5.4.0 at `C:\Program Files\Tesseract-OCR\tesseract.exe` (fallback path only).
- **⚠️⚠️ ESCAPING IS THE PROJECT'S MOST EXPENSIVE PROBLEM — FOUR TRAPS, ALL MEASURED. (1)** `\n` **is a
  real newline and a real newline ENDS A JSON STRING** — writing to a FILE does not save you.
  **(2)** ⚠️⚠️ **the Bash tool's quoted heredoc collapses `\\` to `\`** (`\d`→`d`, `\s`→`s`), corrupting
  paths, citations and MEMORY.md itself — **fired SIX times**, most recently 2026-08-31 twice in one
  hour with a **Python** body, where `content\\ophtho\\book` became `content\ophtho` + a real
  **backspace** (`\b` is a valid escape) and the edit silently failed to match. **A QUOTED HEREDOC IS
  NO PROTECTION WHATEVER THE BODY'S LANGUAGE — the collapse happens BEFORE that language sees it.
  Fix: never type a literal `\` in a heredoc body — build it as `chr(92)` / `String.fromCharCode(92)`,
  or use the `Write`/`Edit` tools instead. GREP EVERY PATH AND REGEX AFTER WRITING; the write reports
  success either way.** **(3)** a heredoc over **~7 KB** fails to parse —
  **APPEND one section per call.** **(4)** ⚠️⚠️ **a backtick in a DOUBLE-QUOTED bash string is COMMAND
  SUBSTITUTION, and `node -e "…"` IS one** — it blanked six terms from a plan edit, and **every chapter
  id we write is in backticks.** **Fix: `String.fromCharCode(92)`/`(10)`/`(13)`; `node --check` after
  every append; the `Write`/`Edit` tools for anything with a backtick; then GREP THE RESULT.**
  ⚠️ **`app\data\*.js` is MIXED CRLF/LF** — the original body is CRLF, spliced entries are LF, so
  **nothing may anchor on a bare newline**; scan structurally.
- **GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`, `main` + `design/clepsydra-and-sessions`
  (only off-drive copy of the Clepsydra art). `Semester 8\` gitignored. Push: `ledger.md` §13 —
  **262+ commits ahead, UNPUSHED; needs the user's device-code flow** (a plain `git push` hangs).
  **⚠️ Stage EXPLICIT PATHS — never `git add -A`, never a directory a subagent writes into**; `index.lock` = another chat is mid-commit.
- **Measure, then believe:** check the sum, check the auditor, reconcile written + folded = printed; a
  counter that does not move is a finding. **Never write a page number, filename or id from memory**
  (7/7 and 3/3 wrong) — read the `source`, list the directory, grep the id. **An adjudication not in the map did not happen.**
- Cleanup awaiting approval (nothing without a yes): 173 MB ophtho zip, two Peds PPT stubs, `files.zip`, and the 4.8 MB untracked `app\data\questions.ophtho.PRESPLICE18.js` (git history already holds that state).

**⚠️ THE ONE THING THAT MUST SURVIVE ANY SUMMARY: the Clepsydra is the user's own artwork —
do not redraw her, do not draw anything onto her.**
