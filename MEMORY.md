# Herophilus — Memory

**⚠️ OCR ROUTE (2026-08-31) — WPS, and it SUPERSEDES the cost ladder in `progress\ocr-pipeline.md`.**
`pdftoppm` → PNG → `wpscli photo2word`, **$0** (WPS paid tier already owned). The PaddleOCR →
AppleVision → Mistral ladder and the six Tesseract-gate changes are **DEAD — do not build them**
(fallback record only). The user lifted the no-free-tier-cloud rule for WPS on 2026-08-31;
Kingsoft’s terms carry a no-training clause. The three remaining endpoint books **CANNOT be split**,
so rasterising is mandatory. Timings, page counts, defect list and exit codes:
**`tools\wps-ocr-reference.md`** (detail pruned from here 2026-09-02: `progress\memory-archive.md`).
⚠️ **OCR text is a SEARCH INDEX, never a clinical source** — confirm every fact against the rendered
page before it ships. ⚠️⚠️ **SUPERSCRIPTS FAIL SILENTLY: WPS read a printed 10⁶ as 10⁹**, and they
also flatten (10⁶ → 106) — a **plausible wrong number, not visible garbage. Never take an exponent,
a unit or a dose from OCR text; read those three off the page image.** ⚠️ **Exit 429 is a RATE
limit, NOT a quota** — back off, double the gap (cap 60 s), **retry the same page.**

Running record, organised around *resuming*. ISO dates; unverified marked as such. Method in
`CLAUDE.md`; per-topic history in **`progress\ledger.md` (17+) and `progress\ledger-closed-1-16.md`
(1-16, SPLIT 2026-09-01, byte-exact, nothing renumbered — the index atop `ledger.md` says which file
each section is in)**; war stories, superseded state and every block pruned from THIS file in
**`progress\memory-archive.md`** — read the block you are pointed at before resuming a paused stream.
Where this file and the archive disagree, this file wins. ⚠️ **Before opening anything in
`progress\`, check what it costs in `progress\READING-COSTS.md`.**
**`CLAUDE.md` was trimmed 2026-09-02** (198 → 190 lines) into `reference.md`, `## Moved from
CLAUDE.md - 2026-09-02` — **no live rule left it.** ⚠️ **Never quote a per-request cost from here;
`progress\READING-COSTS.md` is the only figure, and it drifted three times on 2026-09-02 alone.**

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
- ⏳ **PEDS — bank MEASURED at 393; `questions.peds.js` holds 183, ch.1–8 spliced; 210 remain
  (ch.9–20).** **ch.9 is ALREADY STAGED** (`content\peds\qb-pages\house-ch09-dev-problems.array.js`)
  — resume at drafting. ⚠️ ch.9 prints **"18." twice with no Q19**, tokens `dev-problems`/`dev-nd`,
  boiler is a **fifth shape**. Peds OSCE **14 Sep**, nearest exam.
- ⏳ **NEURO — 268 live** (nr 133 · ps 135); topics 18–21 spliced 2026-09-02. **Next: topic 22,
  Q137 on PDF 94 / book p.89** — ⚠️ banner says "Psychopharmacology", contents says "Pharmacology";
  psychiatry ends **Q165** in topic 23. ⚠️ **The 142 renders died with a scratchpad and only 2
  pages were ever OCR'd** — re-render is ~45 s, the OCR is the rate-limited part. ⚠️ **Bank identity is GRADE GAIN**, cover prints "QS BANK + GRADE GAIN EDITION" —
  not House, not endpoint. ⚠️ **ONE book page per sheet, A4 portrait** — NOT 2-up; do not carry
  the peds/ophtho House arithmetic across. ⚠️⚠️ **THE PAGE OFFSET IS NOT GLOBAL: neuropsychiatry
  PDF = book + 5, neurosurgery PDF = book + 7** (two unnumbered contents pages at PDF 99–100).
  **In scope = PDF 6–98 only; SKIP PDF 99–140, neurosurgery, out of scope.** Two numbering runs,
  each continuous across topics: neurology topics 01–14, then psychiatry 15–23 **restarts at Q1**
  and ends Q165. ⚠️ The contents page's per-topic counts sum to 157 against a true 165 — trust no
  printed count. Full 23-topic map: `progress\resume-neuro.md`, last block.
- **Validate a dead agent’s file from disk before believing a report that it died** (ch20-drugs,
  reported lost, found intact 2026-08-31 — archive). ⚠️ Debts: 12 `nr-intro`/`nr-exam` tags the book
  can replace (`npqb-nr-14` first) · ophtho theory reconciliation (~63 rows, `theory-plan.md`; book
  caches exist — do NOT re-read).
- **✅ The five-option cap was FIXED 2026-09-02** in `app\index.html` (`OPT_LETTERS`, A–Z).
  Eight `questions.neuro.js` questions exceed five options — `npqb-nr-43`, `-51`, and the
  `-113`–`118` matching block (10 shared) — and used to print “the answer is undefined”.
  **Letter keys now pick any shown option**, so on those eight F/J select options instead of
  flag/jump until the answer is revealed. Check: `python tools\count-options.py`.
  On `-114`/`-115`/`-117` the app letter (I/H/G) differs from the book’s printed key (L/K/J):
  **DECIDED 2026-09-02 — letters stay POSITIONAL. Not a bug, do not re-open.**
- **USER RULING 2026-08-31: skip ALL OSCE content** — *"If I needed it later I'll tell you."*
  Deferred, not cut: skip it, say it was skipped and why, carry on. Not a scope cut needing approval.

## The watch — oversight every ~12 h (set up 2026-09-02)

- **A fresh chat runs `progress\WATCH.md` roughly every 12 hours and then dies.** It inspects
  and reports — changed / stale / at risk — and **does not build, splice, edit content or commit.**
  The *role* is permanent; the *session* never is (workspace §9 — a standing overseer chat would
  become the exact drain §9 exists to stop).
- ⚠️ **The watch reads the repo and the journals — never a work chat’s conversation.** Anything a
  session learns and does not write into `resume-ophtho.md` / `resume-peds.md` / `resume-neuro.md`
  is invisible to it and dies with that session. **This is now the main reason to keep the
  journals current**, and `WATCH.md` §3 checks for exactly that failure.
- **Both chat resume prompts carry a `## Changed since 2026-09-01` block** that declares itself
  authoritative where it and the older text above it disagree. Append to that block rather than
  editing the body when something changes.
- **Always start a work chat fresh from its resume prompt** — never paste one into a live chat,
  which re-sends that chat’s whole stale context and wastes the prompt entirely.

## Running three chats in parallel — what it actually costs and breaks

- **MOVED 2026-09-01 ->** the measured ~75k-token boot cost per chat and the four-chat endpoint plan: archive block `Pruned from MEMORY.md - 2026-09-01`
  in `progress\memory-archive.md`. Reach any of these with `grep -n "Pruned from MEMORY" <file>` then `sed`.
- ⚠️ **Two chats share one WPS account, so the account-wide request rate is DOUBLE what either
  driver thinks it is issuing.** Pace as if you own half. This is what produces the 429s.
- ✅ **The parallel-chat rules held on their first real run** (audited 2026-08-31; detail in the
  archive). **Keep them in every parallel brief:** image work in subagents only, no `git add -A`, no
  writes to `MEMORY.md`/`ledger.md`, no cross-module writes.
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
- **MOVED 2026-09-01 ->** ophtho bank arithmetic * ~304 image questions + crop craft * ENT general traps.
  Arithmetic is also in full in `progress\briefs\ophtho-bank-brief.md`; ENT is CLOSED.
- **Write-incrementally survives usage limits** — resume by `Edit`-appending, never `Write`. A dead
  agent whose last words name a fault leaves a KNOWN-BAD file — check that spot first.
- **⚠️⚠️ Contradictions are RECORDED, never corrected — the `answer` NEVER moves**; the note goes
  in `explanation`, quoting the slide (four shapes: archive, "ENT contradiction shapes").
- **MOVED 2026-09-01 ->** "briefs corrected sixteen times" + the six blind instruments. The rule itself --
  **TRUST THE STAGING AND THE TRANSCRIPT OVER THIS PROMPT** -- is in both chat briefs already.
- **A book's own chapter numbers can be defective** (House printed 9 twice) — chapter by content.
- **MOVED 2026-09-01 ->** the theory-complete pointer bullet. **Theory is 153/153, closed.**
- **⚠️⚠️ REAL EXAM DATES (user, 2026-08-13):** Peds OSCE **14 Sep** · Peds papers **17 Sep** ·
  ENT **22 Sep** · Ophtho **27 Sep** · Neuro **3 Oct** · Peds papers **18–19 Oct**. Nothing is
  dropped — banks are deferred, not cut; stop at clean topic boundaries.
- Untracked `content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js` is PARKED endpoint work —
  never stage or edit it from the hub. (`gg-ps-t16.*` spliced and committed 2026-08-31.)

## Governing decisions (verbatim rulings in the archive)

- **MOVED 2026-09-01 ->** the theory-era rulings (hub writes all theory * format = `START-HERE.md` 14 *
  chapters are SPLIT, <=13 pp measured by printing). **Read them before any theory edit.**
- **Writing budget, banks (2026-08-13, supersedes "full depth everywhere"):** adaptive depth — ~520 w for
  vignettes/defects/divergences/gap-fills, **~250 w for straight slide-recall**, every distractor still
  explained; shared tables in ONE entry, siblings point at an **existing** id; `source` is a citation,
  never a second explanation. **Scope is never cut.** If time runs short, **say so loudly — scaling down is theirs.**
- **A defective key is noted, never disputed** (2026-08-11) — never take a key dispute to the user. **A lecture-numbering gap = the professor withheld it** (2026-08-14) — fill and tag, never chase.
- **Publishing agreed, parked until ENT done.** First: **fix the final domain** (localStorage is per-origin), **cache-bust the data `<script>` tags**, fold, review. Host/visibility undecided.

## The method — what transcription work must never skip

- **Read every answered page; trust no count** — not printed numbering, not the contents page, not the map (ranges 21/21 right, counts 17/21 wrong, always upward). **Render one page past the last.**
- **Run the full six-stage duplicate sweep (A–F) on every topic**; folds ran 0–20 with no trend and **the rankings are the instrument**. **Say why a zero is a zero, and say how it was measured.** Grep drafted blocks for a folded id **before** splicing; re-run the dead-id check after every fold. ⚠️ Marker deltas, mis-keyed banks and the sweep's defect shapes 1–6: `progress\memory-archive.md`.
- **MOVED 2026-09-01 ->** "read the slide before declaring a gap" -- paid 17 times, the 29 (not 34) cached
  ophtho decks, the two-decks-agreeing trap. ⚠️ **Read it before writing any absence claim.**
- **⚠️ Bank sampling and provenance: `progress\memory-archive.md`** — a contents page may print per-section counts (**verify, never trust**); the end-of-ENT "outside knowledge" list is **half wrong**, re-grep item by item; 67 entries record no provenance, roster in `ledger.md` §11.

## Validation state

- **Corpus 4,265** (2026-09-02 — **measured by loading each array and reading `.length`**, sparse
  holes checked with `for i… if(!(i in A))`; zero holes, every file `eval`s clean): ENT **2,322**
  (2,240 q + 82 c) · **Ophtho 1,485** (1,485 q + 0 c) · Neuro **275** (268 q + 7 c) ·
  Peds **183** (183 q + 0 c); **118 images**. ⚠️ **A `file://` boot has NOT been run since
  2026-08-30** — an `eval` check is not a boot check. Keys `ent`, `ophtho`, `pediatrics`,
  `neuropsych`. Options 2–9 coexist. ⚠️ **`grep -c "^  { id:"` UNDERCOUNTS `questions.ophtho.js`**
  (mixed CRLF/LF, mixed indentation) — **load the array, or use the tolerant id regex.**
- **✅ CACHES AND HARNESS NOW LIVE IN THE REPO, not a scratchpad** (2026-09-02):
  `content\peds\qb-pages\ocr\` **139 files** (book pp.32–151 = all remaining peds House; grep
  `ph_all.txt` first) · `content\neuro\qb-pages\ocr\` **2 only** + `nb-anchors.txt` (neuro map) ·
  **`tools\bank-harness\`** (`norm.js`, `sweep-pd4/5.js`, **`splice-ch04.js`** = the
  validate-then-splice model to copy per chapter, `vB.js`, `wc.js`, `d17.js`, `dx.py`).
- **MOVED 2026-09-01 ->** theory chapter counts * the 2026-08-30 `file://` boot * the scratchpad harness roster.
  Two warnings stay here: ⚠️⚠️ **THE SCRATCHPAD STARTS EMPTY AND THE HARNESSES ARE NOT IN THE
  CURRENT ONE — `find` the temp root and LIST it; never guess a harness name.** ⚠️⚠️ **`Array.filter`
  SKIPS SPARSE HOLES — index it: `for i… if(!(i in A))`.**
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
- **⚠️⚠️ ESCAPING IS THE PROJECT’S MOST EXPENSIVE PROBLEM — FOUR TRAPS, ALL MEASURED** (war
  stories in the archive). **(1)** `\n` **is a real newline and a real newline ENDS A JSON STRING.**
  **(2)** ⚠️⚠️ **the Bash tool’s quoted heredoc collapses `\\` to `\`** (`\d`→`d`, `\b`→ a real
  backspace), silently corrupting paths, regexes and MEMORY.md itself — **quoting is NO protection
  whatever the body’s language; the collapse happens BEFORE that language sees it.** **(3)** a heredoc
  over **~7 KB** fails to parse — **APPEND one section per call.** **(4)** ⚠️⚠️ **a backtick in a
  DOUBLE-QUOTED bash string is COMMAND SUBSTITUTION, and `node -e "…"` IS one** — and **every chapter
  id we write is in backticks.** **FIX FOR ALL FOUR: never type a literal `\` or a backtick in a
  heredoc — build them as `chr(92)`/`String.fromCharCode(92)`, or use the `Write`/`Edit` tools;
  `node --check` after every append; then GREP EVERY PATH AND REGEX — the write reports success
  either way.** ⚠️ **`app\data\*.js` is MIXED CRLF/LF** — original body CRLF, spliced entries LF,
  so **nothing may anchor on a bare newline**; scan structurally.
- **⚠️⚠️ COUNTING QUESTIONS IS A TRAP: `app\data\*.js` MIXES TWO KEY STYLES.**
  `questions.neuro.js` holds **151 JSON-style quoted-key entries** (`"id":`) and **22 bare-key**
  ones (`id:`). A bare-key grep counted **22 of 173** on 2026-09-02 and read as catastrophic
  loss — **it was not: neuro is 173 q + 7 cases = 180, corpus 3,982, matching this file exactly.**
  Count BOTH styles (command in `progress\WATCH.md` §4). **Bytes rising while a count falls
  means THE COUNT is broken** — cross-check `git cat-file -s HEAD:<path>` before reporting loss.
- **GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`, `main` + `design/clepsydra-and-sessions`
  (only off-drive copy of the Clepsydra art). `Semester 8\` gitignored.
  ✅ **PUSHED AND CURRENT 2026-09-02 — 0 commits ahead.** The old note claiming 262+ unpushed and
  a required device-code flow was **stale**: a plain `git push` went straight through, no prompt
  (Git Credential Manager has it cached). Verify with `git rev-list --count origin/<branch>..HEAD`.
  **⚠️ Stage EXPLICIT PATHS — never `git add -A`, never a directory a subagent writes into**; `index.lock` = another chat is mid-commit.
- **Measure, then believe:** check the sum, check the auditor, reconcile written + folded = printed; a
  counter that does not move is a finding. **Never write a page number, filename or id from memory**
  (7/7 and 3/3 wrong) — read the `source`, list the directory, grep the id. **An adjudication not in the map did not happen.**
- Cleanup awaiting approval (nothing without a yes): 173 MB ophtho zip, two Peds PPT stubs, `files.zip`.
  The 2026-08-31 move to `_archive\` is done — pointer `progress\token-economy\ARCHIVE-MOVED.md`.

**⚠️ THE ONE THING THAT MUST SURVIVE ANY SUMMARY: the Clepsydra is the user's own artwork —
do not redraw her, do not draw anything onto her.**
