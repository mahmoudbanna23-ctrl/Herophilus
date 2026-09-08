# Herophilus — Memory

**⚠️ OCR ROUTE (2026-08-31) — WPS, SUPERSEDING the cost ladder in `progress\ocr-pipeline.md`.**
`pdftoppm` → PNG → `wpscli photo2word`, **$0** (paid tier already owned; Kingsoft's terms carry a
no-training clause). The PaddleOCR → AppleVision → Mistral ladder and the six Tesseract-gate changes
are **DEAD — do not build them.** The three remaining endpoint books **CANNOT be split**, so
rasterising is mandatory. Timings, page counts, defects, exit codes: **`tools\wps-ocr-reference.md`**.
⚠️ **OCR text is a SEARCH INDEX, never a clinical source** — confirm every fact against the rendered
page. ⚠️⚠️ **SUPERSCRIPTS FAIL SILENTLY: WPS read a printed 10⁶ as 10⁹**, and they also flatten
(10⁶ → 106) — a **plausible wrong number, not visible garbage. Never take an exponent, a unit or a
dose from OCR; read those three off the page image.** ⚠️ **Exit 429 is a RATE limit, NOT a quota** —
back off, double the gap (cap 60 s), **retry the same page.**

Running record, organised around *resuming*. ISO dates; unverified marked as such. Method in
`CLAUDE.md`; per-topic history in **`progress\ledger.md` (17+) and `progress\ledger-closed-1-16.md`
(1-16, SPLIT 2026-09-01, byte-exact, nothing renumbered — the index atop `ledger.md` says which file
each section is in)**; war stories, superseded state and every block pruned from THIS file in
**`progress\memory-archive.md`** — read the block you are pointed at before resuming a paused stream.
Where this file and the archive disagree, this file wins. ⚠️ **Before opening anything in
`progress\`, check what it costs in `progress\READING-COSTS.md` — and RE-MEASURE, never quote it.**
`CLAUDE.md` was trimmed 2026-09-02 into `reference.md` (`## Moved from CLAUDE.md - 2026-09-02`);
**no live rule left it.**

## Resume here — state at 2026-09-05
**BOTH CHATS RAN the night of 2026-09-02/03; both prompts were REWRITTEN IN PLACE 2026-09-03 late
against measured disk state.** ⚠️ **RELAUNCH ONLY FROM `progress\resume-2026-09-03b-chatB-peds.md`
(v4 — House now via `tools\chapter-loop.js` + Codex). **BOTH peds endpoint prompts are now SPENT — `resume-2026-09-03-late-peds-endpoint.md` (v6, part 1 closed under it) and `resume-peds-endpoint-part2.md` (v1, part 2 closed under it 2026-09-06); do not relaunch either.** Every earlier prompt is stale and pays
~50k more per read. ⚠️ **A DIRTY TREE IS NORMAL while two chats run** — **never stage another
chat's file; commit explicit paths only, and wait on `index.lock`, never delete it.**
⚠️ **The watch runs FROM THE MAIN `D:\claude os` CHAT, not its own** (user, 2026-09-03) — note atop
`progress\WATCH.md`. ✅ **SECOND ANCHORS PLACED 2026-09-03**: open `resume-ophtho.md` (~41k → ~14k)
and `resume-peds.md` (~37k → ~13k) with **`RESUME-READ-FROM-HERE-2`**, nothing deleted;
`resume-peds-endpoint.md` (~14k, growing fast) is the next anchor due.
✅ ENT CLOSED (`ledger.md` §15–§16). ✅ **OPHTHO CLOSED 2026-09-02** — **1,598**, 0 holes, CLEAN, boots;
all 3 carried debts cleared. Close-out: `progress\resume-ophtho.md`. ⚠️ **The ophtho ENDPOINT is a separate book — 2,442 pp / 293 MB; do NOT split the PDF, split the page RANGE.** Printed page = PDF **+1** past an unpinned flip in PDF 2151–2170. ✅ **GATE 0 CLOSED 2026-09-08** — `-oph-ep` toolchain (`sec-oph.js`/`val-oph-ep.js`/`splice-oph-ep.js`/`pagecov-oph.js`, `--part 1|2`) + stubs + both `index.html` tags done, **OPH-B unblocked**. Bank still 0 questions; section 1 (PDF 6–133) next. Close-out: `progress\resume-ophtho-endpoint-A-chapters.md`.**

- ✅ **PEDS HOUSE CLOSED 2026-09-04 — `questions.peds.js` holds 393, the full measured bank**, all
  20 chapter prefixes present (array loaded 2026-09-05, 0 holes, boots clean). Close-out: `resume-peds.md`.
- ✅ **PEDS ENDPOINT PART 1 CLOSED 2026-09-05 — `questions.peds.ep.js` holds 704, 0 holes** — it closed
  at 705 and `47d4d76` folded `pedep-inf-82` into part 2's fuller printing, which is the legitimate
  drop (re-measured commit by commit 2026-09-06). 15 sections (body pp.5–1156 · 4 Model Final Exams pp.1157–1804 · 2 Model Training Exams pp.1805–1936; tail pp.1937–1991 measured, stages nothing). Close-out: `progress\resume-peds-endpoint.md`.
  ⚠️ **THE CLOSING TEST IS PAGE COVERAGE, NOT A SECTION COUNT** — every `p.<n>` in the `source`
  fields against every OCR-`answered` page: 855 answered, 854 cited; the one gap, p.938, was rendered
  and is prose the classifier mis-tagged. **The classifier errs BOTH ways** — it also called
  pp.1889/1890 notes when they hold a real question, which is the expensive direction.
- ✅ **PEDS ENDPOINT PART 2 CLOSED 2026-09-06 — `questions.peds.ep2.js` holds 630, 0 holes**, 17
  sections pp.5–1949 (tail pp.1950–1993 stages nothing; `val-pd-ep2.js` must never get a section 18 row). Close-out: `progress\resume-peds-endpoint-part2.md`. ⚠️ **THE CLOSING TEST IS A REPO TOOL: `node tools\bank-harness\pagecov-ep2.js`** — exit 0 is clean, and it fails on a page outside its two measured classifier-error lists. **An adjudication is not a citation**; it caught six of those.
  part2.pdf 1993 pp / 272 MB. ⚠️ **A FOLD MAKES THIS FILE SHRINK LEGITIMATELY** — a drop with no fold
  commit behind it is the finding. A section that outgrows one file splits `part-A/B` →
  `tools\bank-harness\merge-parts-ep.js` → `.draft-*` → `.array.js`. ⚠️ **Never run
  `val-pd.js`/`splice-pd.js` on endpoint files — they write Chat B's live file**; the `-pd-ep` pair is
  the endpoint's, and it refuses unless its validator gate exits 0. Search index
  `content\peds\qb-pages\ocr\ep1\`, tool `tools\ep-index\run-all.ps1`. ⚠️⚠️ **ENDPOINT AND HOUSE
  OVERLAP, AND IT IS CHAPTER-SHAPED** — 5 collisions in the first 150 entries, four endpoint Nutrition
  ≡ House ch.10 = 27% of that chapter; **nothing folds mid-stream**, and **`pedhd-card-6..10` must NOT
  be folded** (5 identical stems, 5 different figures). Log: `resume-peds.md` tail. Pruned detail ->
  archive, `## Pruned from MEMORY.md - 2026-09-05`.
- ⏳ **NEURO — 268 live** (nr 133 · ps 135); topics 18–21 spliced 2026-09-02, **untouched since.**
  **Next: topic 22, Q137 on PDF 94 / book p.89** — ⚠️ banner says "Psychopharmacology", contents says
  "Pharmacology"; psychiatry ends **Q165** in topic 23. ⚠️ **The 142 renders died with a scratchpad,
  only 2 pages OCR'd** — re-render ~45 s, the OCR is the rate-limited part. ⚠️ **Bank identity is
  GRADE GAIN** (cover: "QS BANK + GRADE GAIN EDITION") — not House, not endpoint; **ONE book page per
  sheet, A4 portrait, NOT 2-up** — do not carry the peds/ophtho House arithmetic across.
  ⚠️⚠️ **THE PAGE OFFSET IS NOT GLOBAL: neuropsychiatry PDF = book + 5, neurosurgery PDF = book + 7.
  In scope = PDF 6–98 ONLY; SKIP PDF 99–140, neurosurgery, out of scope.** Two numbering runs:
  neurology topics 01–14, then psychiatry 15–23 **restarts at Q1** and ends Q165; ⚠️ the contents
  page's counts sum to 157 against a true 165 — **trust no printed count.** Full 23-topic map:
  `progress\resume-neuro.md`, last block.
- **Five-option cap settled; OSCE skipped by user ruling 2026-08-31** — both **PRUNED 2026-09-08 ->**
  archive, `## Pruned from MEMORY.md - 2026-09-08`. Still binding, just no longer re-read every turn.

## The watch — oversight every ~12 h (set up 2026-09-02)
- **A fresh chat runs `progress\WATCH.md` top to bottom every ~12 h, reports changed / stale / at
  risk, and dies. It never builds, splices, edits content or commits** unless told to in that chat.
  ⚠️ **It reads the repo and the journals, never a work chat's conversation — anything not written
  into a journal dies with that session.** Rest of the block **PRUNED 2026-09-03 ->** archive,
  `## Pruned from MEMORY.md - 2026-09-03`. **Append to a resume prompt's `## Changed since` block,
  never its body; always start a work chat fresh from its prompt.**

## Running three chats in parallel — what it actually costs and breaks
- **MOVED 2026-09-01 ->** the ~75k-token boot cost per chat and the four-chat endpoint plan. Reach any `MOVED`/`PRUNED` block with `grep -n "Pruned from MEMORY" progress\memory-archive.md` then `sed`.
- ⚠️ **Two chats share one WPS account, so the account-wide request rate is DOUBLE what either
  driver thinks it is issuing.** Pace as if you own half. This is what produces the 429s.
- ✅ **Keep in every parallel brief:** image work in subagents only, **commit with an explicit
  pathspec** (see Environment — `git add -A` alone was found insufficient), no writes to
  `MEMORY.md`/`ledger.md` mid-run, no cross-module writes.
- **⚠️ AGENTS STOP AT ~70 TOOL CALLS AND HAND BACK** (user, 2026-09-03) — close out at 60, reported
  and stopped by 80, even with work left; a partial pass reported honestly is a success. **Cost is
  step count, not starting context**: all agents start at 29–31k, the five priciest averaged
  **88–107k a step over 133–287 steps**. §0 of `pd-staging-brief` / `pd-draft-brief` /
  `pd-ep-draft-brief` — **keep §0 when editing a brief.** Write entries to disk as you go, so the
  replacement resumes from the file.
- **Standing rules for the running bank stream** (war stories: archive, 2026-08-31 block):
  **a repaired back-reference must not answer its own question — hand-read each against its antecedent
  AND its own key; no instrument sees this** · **an offsetting error is invisible to a sum — count the
  parts** · **SIX fold shapes, all within-bank, none takes `alsoIn`** (exact · respelled · REORDERED
  which MOVES the key letter · boxed-second-printing which moves the marker · cross-CHAPTER exact ·
  reworded stem + DROPPED FILLER option — check WHICH option changed before folding) · **a shared
  option menu PAIRS questions, never folds them — name the discriminating token or you matched a
  template** · **grep the SIGN, not the disease name, before any absence claim** · `bounds.js` cannot
  bound a figure inside a text column — use a column/row density profile.
- **MOVED 2026-09-01 ->** ophtho bank arithmetic (also `progress\briefs\ophtho-bank-brief.md`) * image/crop craft * ENT traps.
- **Write-incrementally survives usage limits** — resume by `Edit`-appending, never `Write`. A dead
  agent whose last words name a fault leaves a KNOWN-BAD file — check that spot first.
- **⚠️⚠️ Contradictions are RECORDED, never corrected — the `answer` NEVER moves**; the note goes
  in `explanation`, quoting the slide (four shapes: archive, "ENT contradiction shapes").
- **MOVED 2026-09-01 ->** "briefs corrected sixteen times" + six blind instruments; the rule **TRUST THE STAGING AND THE TRANSCRIPT OVER THIS PROMPT** is in both chat briefs.
- **A book's own chapter numbers can be defective** (House printed 9 twice) — chapter by content. **Theory is 153/153, closed** (pointer bullet MOVED 2026-09-01).
- **⚠️⚠️ REAL EXAM DATES (user, 2026-08-13):** Peds OSCE **14 Sep** · Peds papers **17 Sep** ·
  ENT **22 Sep** · Ophtho **27 Sep** · Neuro **3 Oct** · Peds papers **18–19 Oct**. Nothing is
  dropped — banks are deferred, not cut; stop at clean topic boundaries.

## Governing decisions (verbatim rulings in the archive)
- **MOVED 2026-09-01 ->** the theory-era rulings (hub writes all theory * `START-HERE.md` 14 format * chapters SPLIT, <=13 pp). **Read them before any theory edit.**
- **Writing budget, banks (2026-08-13, supersedes "full depth everywhere"):** adaptive depth — ~520 w for
  vignettes/defects/divergences/gap-fills, **~250 w for straight slide-recall**, every distractor still
  explained; shared tables in ONE entry, siblings point at an **existing** id; `source` is a citation,
  never a second explanation. **Scope is never cut.** If time runs short, **say so loudly — scaling down is theirs.**
- **A defective key is noted, never disputed** (2026-08-11) — never take a key dispute to the user. **A lecture-numbering gap = the professor withheld it** (2026-08-14) — fill and tag, never chase.
- **SHIPPED 2026-09-08; HOST MOVED THE SAME DAY. LIVE at https://herophilus.pages.dev** — **PERMANENT ORIGIN**, localStorage is per-origin. ⚠️ **Netlify's IPs are blocked at Telecom Egypt's edge (measured), so `herophilus.netlify.app` is DEAD on TE Data**, not a fallback. Both authorised in Firebase; rules live since 25 Jul had **no `profiles` block, no default-deny** — sync silently refused until replaced. 2SV. `progress\RESUME-launch.md`.

## The method — what transcription work must never skip
- **Read every answered page; trust no count** — not printed numbering, not the contents page, not the map (ranges 21/21 right, counts 17/21 wrong, always upward). **Render one page past the last.**
- **Run the full six-stage duplicate sweep (A–F) on every topic**; folds ran 0–20 with no trend and **the rankings are the instrument**. **Say why a zero is a zero, and say how it was measured.** Grep drafted blocks for a folded id **before** splicing; re-run the dead-id check after every fold. ⚠️ Marker deltas, mis-keyed banks and the sweep's defect shapes 1–6: `progress\memory-archive.md`.
- **MOVED 2026-09-01 ->** "read the slide before declaring a gap" (paid 17 times; 29 not 34 ophtho decks). ⚠️ **Read it before any absence claim.**
- **⚠️ Bank sampling and provenance — PRUNED 2026-09-08 ->** archive, same dated heading. Verify every printed count; the end-of-ENT "outside knowledge" list is half wrong; 67 entries have no provenance (`ledger.md` §11).

## Validation state
- **Corpus 5,922** (re-measured from disk 2026-09-06, **re-measure before quoting; it drifts by the
  commit**. Every array loaded and indexed for sparse holes,
  `for i… if(!(i in A))`, **zero holes, every file `eval`s clean**): ENT **2,322** (2,240 q + 82 c) ·
  **Ophtho 1,598** · Neuro **275** (268 q + 7 c) · Peds House **393** · Peds endpoint **1,334**
  (p1 704 + p2 630, both CLOSED). ⚠️ **The case arrays are `C_ENT`/`C_NEURO`/`C_OPHTHO`/`C_PEDS`, not
  `CASES_*`** (ophtho and peds hold 0). **5,922 is the CORPUS and no longer what the app reports:** ⚠️ `LOCKED_MODULES=['ophtho','neuropsych']` + `THEORY_LOCKED` hold 1,873 q (1,598 ophtho + 275 neuro) and 72 theory chapters out at the aggregator, so **a healthy boot reports 4,049 / 81** — a check wanting 5,922/153 is STALE, not a loss.
  ✅ **BOOTED `file://` 2026-09-07, 0 errors**: `QUESTIONS 4049 · THEORY 81 · MODULES 4 · 153 chapter rows, 80 with questions`; per module ent 30 · ophtho 36 · neuropsych 36 · pediatrics 51. Keys `ent`, `ophtho`, `pediatrics`, `neuropsych`; options 2–10 coexist (2:10 · 3:67 · 4:3836 · 5:1365 · 8:1 · 9:1 · 10:6).
  ⚠️ **`grep -c "^  { id:"` UNDERCOUNTS `questions.ophtho.js` BY ~440 — load the array.**
- **✅ THE BOOT CHECK IS NOW A REPO TOOL: `node tools\boot-check\boot-check.js`** (2026-09-02) —
  copies `app\`, probes errors ahead of the app's own scripts, stubs the gate, seeds a profile,
  kills animation, walks all four modules, **refuses to run under a path containing `--`**.
  ⚠️ **Six probe faults each produced a confident zero from a HEALTHY app**: `THEORY` is an OBJECT
  not an array · chapters nest **two** deep (`MODULES[].groups[].chapters[]`) · **nothing renders
  until `enterProfile()` runs** · `.ch-row` exists only inside a module view. **A zero from a probe
  you just wrote is a claim about the probe first.** ⚠️ `CLAUDE.md` §7 says "134 chapters"; it is **153**. ⚠️ **Faults 5-6, 2026-09-05:** `modules.js` declares `const MODULES` and a `const` does NOT leak out of `eval()` the way the data files' `var` does (append `;MODULES` to the source); and **a chapter is a TUPLE `["<id>","<name>"]`, not an object** — reading `.id` off it made all 5,375 entries look unresolvable.
- **✅ CACHES AND HARNESS NOW LIVE IN THE REPO, not a scratchpad** (2026-09-02):
  `content\peds\qb-pages\ocr\` **139 files** (pp.32–151 = all remaining peds House; grep `ph_all.txt`
  first) · `content\neuro\qb-pages\ocr\` **2 only** + `nb-anchors.txt` · **`tools\bank-harness\`**
  (`norm.js`, `sweep-pd4/5.js`, **`splice-ch04.js`** = the validate-then-splice model to copy per
  chapter, `vB.js`, `wc.js`, `d17.js`, `dx.py`).
- **MOVED 2026-09-01 ->** theory chapter counts * the 2026-08-30 boot * scratchpad harness roster. ⚠️⚠️ **A NEW
  SCRATCHPAD STARTS EMPTY — LIST it, never guess a harness name.** ⚠️⚠️ **`Array.filter` SKIPS SPARSE HOLES — index it.**
- **⚠️ THE THEORY READER IS AN A4 PAGE AND MUST NOT BE MADE WHITE** (2026-08-19, three complaints); `overflow:hidden` clips over-tall tables rather than breaking them. **Full bullet PRUNED 2026-09-08 ->** archive, same dated heading.
- **⚠️ A draft header is a claim, not a measurement — re-count from disk after the final edit.** Wrong nine times; **the sum check alone no longer suffices.** Page divisors: resume block + plan §4.

## Environment — what changes what you do first
- Poppler **25.07.0** (off PATH, under `…\WinGet\Packages\oschwartz10612.Poppler_…\`); `pdftotext` = 0
  chars on every book/bank; `Read` rejects >100 MB. **`.ps1` blocked by policy — pass PowerShell
  inline.** **Node v26.7.0** · **Python 3.12.10 + pip 25.0.1**; no ImageMagick, Ghostscript or `gh`;
  Tesseract 5.4.0 at `C:\Program Files\Tesseract-OCR\` (fallback only). Images via `System.Drawing`
  (⚠️ `Sort-Object` no-ops on hashtables; cast `Measure-Object` doubles to `[int]`). Headless Chrome
  is the only screenshot/probe route — **⚠️ never under a path containing `--`** (`CLAUDE.md` §7).
- **⚠️⚠️ ESCAPING IS THE PROJECT’S MOST EXPENSIVE PROBLEM — FOUR TRAPS, ALL MEASURED** (war stories
  in the archive). **(1)** `\n` **is a real newline and a real newline ENDS A JSON STRING.**
  **(2)** ⚠️⚠️ **the Bash tool’s quoted heredoc collapses `\\` to `\`** (`\d`→`d`, `\b`→ a real
  backspace), corrupting paths, regexes and MEMORY.md itself — **quoting is NO protection whatever
  the body's language; the collapse happens BEFORE that language sees it.** **(3)** a heredoc over
  **~7 KB** fails to parse — **APPEND one section per call.** **(4)** ⚠️⚠️ **a backtick in a
  DOUBLE-QUOTED bash string is COMMAND SUBSTITUTION, and `node -e "…"` IS one** — and **every
  chapter id we write is in backticks.** **FIX FOR ALL FOUR: never type a literal `\` or a backtick
  in a heredoc — build them as `chr(92)`/`String.fromCharCode(92)`, or use `Write`/`Edit`;
  `node --check` after every append; then GREP EVERY PATH AND REGEX — the write reports success
  either way.** ⚠️ **`questions.ent.js` is MIXED CRLF/LF** (13,767 CRLF of 19,023 lines, 2026-09-02)
  — **nothing may anchor on a bare newline there**; scan structurally. ophtho/neuro/peds are pure LF.
- **Three more traps, all measured 2026-09-06/07:** ⚠️ a **plain backtick template literal in JS eats backslashes too** (`` `\d` `` becomes `d`) — **`String.raw` on every patch payload** carrying a regex, and reject a payload holding a backtick or `${` · ⚠️ **`cd "<path>" && git …` is DENIED by permissions; `git -C "<path>" …` is not** · ⚠️ **node resolves a Git-Bash `/tmp/x` as `D:\tmp\x`** — pass the scratchpad's full Windows path. ⚠️ **Python writes CRLF on Windows: `newline=''` on every read AND write of a project file**; the definitive test is `tr -cd '\r' < <file> | wc -c`.
- **⚠️⚠️ COUNTING QUESTIONS IS A TRAP: `app\data\*.js` MIXES TWO KEY STYLES** — `questions.neuro.js`
  held **151 quoted-key** (`"id":`) + **22 bare-key** (`id:`) entries, so a bare-key grep counted
  **22 of 173** on 2026-09-02 and read as catastrophic loss. **It was not.** Count BOTH styles
  (command in `progress\WATCH.md` §4). **Bytes rising while a count falls means THE COUNT is
  broken** — cross-check `git cat-file -s HEAD:<path>` before reporting loss.
- **GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`. `Semester 8\` gitignored.
  ✅ **2026-09-02: `main` FAST-FORWARDED onto `design/clepsydra-and-sessions`, both pushed, 0 ahead**
  — it had been a 2026-08-02 design snapshot with **no bank content** for a month (history:
  archive). **Work on `main` from here.** No device-code flow; Credential Manager is cached.
  **⚠️ Stage EXPLICIT PATHS — never `git add -A`, never a directory a subagent writes into**; `index.lock` = another chat is mid-commit.
  **⚠️⚠️ STAGING EXPLICIT PATHS IS NOT ENOUGH — `git commit` COMMITS THE INDEX, NOT WHAT YOU
  STAGED.** Measured 2026-09-02: `6f27079` staged 14 ophtho paths, Chat B `git add`ed in the gap,
  **three peds files were swallowed in** (nothing lost, history NOT rewritten — another chat was
  live). **THE FIX, USE IT EVERY TIME: `git commit -F <msgfile> -- <paths>`** (or `--only`) — it
  commits only those paths and leaves the other chat's staging intact. Held on three commits since.
- **Measure, then believe:** check the sum, check the auditor, reconcile written + folded = printed; a
  counter that does not move is a finding. **Never write a page number, filename or id from memory**
  (7/7 and 3/3 wrong) — read the `source`, list the directory, grep the id. **An adjudication not in the map did not happen.**
- Cleanup awaiting approval (nothing without a yes): 173 MB ophtho zip, two Peds PPT stubs, `files.zip`. The 2026-08-31 move to `_archive\` is done — pointer `progress\token-economy\ARCHIVE-MOVED.md`.

**⚠️ THE ONE THING THAT MUST SURVIVE ANY SUMMARY: the Clepsydra is the user's own artwork —
do not redraw her, do not draw anything onto her.**

## Connections to other projects

- **Herophilus Book** and the **Pediatrics OSCE pack** read from `Semester 8\` here, **read-only** — neither has git, neither commits into this repo. Nothing else in the workspace depends on this project.
