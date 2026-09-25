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

**⚠️ GATEWAY ROUTE (2026-09-20, supersedes the 2026-09-16 note) — root `CLAUDE.md` §9 ladder binds here.**
Bulk pages -> a script, single-shot calls to `work-vision` / `work-text` (`Tools/omniroute/stage-pages.mjs`,
s16 ran 52/52 that way). A job with steps -> ONE clocked attempt on a seat `Tools/omniroute/seats-alive.json`
marks capable (`node Tools/omniroute/probe.mjs` once per session; a pong proves nothing) — Codex on its
own login (`gpt-5.6-terra` routine / `gpt-6-astra` must-be-right); Codex through the gateway has NO
capable seat. **NEVER `auto/*`** (0 of 221 that week, one request fans across 165–308 models). Two failed
dispatches -> a Claude role, prompt opens `ROUTE-OK: <why>`; never a third. Checking = two layers,
different house, Codex never checks itself. "Headroom" DROPPED for good — never retest.

Running record, organised around *resuming*. ISO dates; unverified marked as such. Method in
`CLAUDE.md`; per-topic history in **`progress\ledger.md` (17+) and `progress\ledger-closed-1-16.md`
(1-16, SPLIT 2026-09-01, byte-exact, nothing renumbered — the index atop `ledger.md` says which file
each section is in)**; war stories, superseded state and every block pruned from THIS file in
**`progress\memory-archive.md`** — read the block you are pointed at before resuming a paused stream.
Where this file and the archive disagree, this file wins. ⚠️ **Before opening anything in
`progress\`, check what it costs in `progress\READING-COSTS.md` — and RE-MEASURE, never quote it.**
`CLAUDE.md` was trimmed 2026-09-02 into `reference.md` (`## Moved from CLAUDE.md - 2026-09-02`);
**no live rule left it.**

## Resume here — state at 2026-09-25
- **APP MASTER PLAN — APPROVED 2026-09-25: `progress\PLAN-app-master-2026-09.md`**
  (phases P0-P12, P7/P8/P9 split a/b; J9 team talk + Opus refuter folded in,
  `progress\app-replan\j9-team-talk\minutes.md`). Fork 5: P3 mocks beside P0/P1. Superseded-by
  lines added atop `PLAN-app-replan-2026-09-17.md` and
  `research-living-scene\DECISION-2026-09-21.md` (both untracked). NEXT: start P0. Rollback tag `pre-master-replan`
  (local). Owner answered 2026-09-25 (plan §6): Meshy CC BY approved, Peds tag plain, lab values
  source-then-tagged, screenshots dropped, candle desk = P3 mocks photo vs painted plate, water level
  = every answer counts, 100/day, midnight reset. Plan §6 gen map + audio P6b; §8 = Codex gap review (P1 sync exit conditions; P9c Firestore-only, per-subject — owner ruling; D1 DROPPED).
  Owed by owner: backup (a) paid daily export vs (b) $0 no guarantee · rights attestation · report address · students/yr · privacy wording · Astra baseline go? · push 10 local commits? P0 DONE `77372af` (slow-3G UNCONFIRMED; 2 latent lock-check flaws in `p0/REFUTE-round2.md`). P3: OWNER PICKED 2026-09-25 painted desk · Q1 B · R1 A (neon edges = DEFAULT, owner 2026-09-25; plan §2 updated); mocks pass review (fix rounds 1-6 in `mocks/p3-fix-brief.md` + NOTES); `shoot.mjs` runs only OUTSIDE Codex sandbox (CDP). Plates: Codex image gen (Gemini image 429 on this key); round-2 plates owe left-third calm (painted) + level lines (photo). ONE Codex job at a time (sandbox acct lockout 1909).
  Deploy freeze R9: no Pages upload 09-26..27, 10-02..03, 10-17..19. Superseded resume bullets:
  archive `## Pruned from MEMORY.md - 2026-09-25`.
✅ ENT CLOSED (`ledger.md` §15–§16). ✅ **OPHTHO CLOSED 2026-09-02** — **1,598**, 0 holes, CLEAN,
boots; all 3 carried debts cleared. Close-out: `progress\resume-ophtho.md`. ⚠️ **The ophtho
ENDPOINT is a separate book — 2,442 pp / 293 MB; do NOT split the PDF, split the page RANGE.**
✅ **OPHTHO ENDPOINT CLOSED 2026-09-21** — chapters 156, boot 4049/81/156, 0 holes, ophtho arrays **1,853**, UNLOCKED.
Detail (twin merges, owed items, coverage tools): archive `## Pruned from MEMORY.md - 2026-09-22`.

- ✅ **PEDS HOUSE CLOSED 2026-09-04 — `questions.peds.js` holds 393, the full measured bank**, all
  20 chapter prefixes present (array loaded 2026-09-05, 0 holes, boots clean). Close-out: `resume-peds.md`.
- ✅ **PEDS ENDPOINT PART 1 CLOSED 2026-09-05 — `questions.peds.ep.js` holds 704, 0 holes.**
  Close-out: `progress\resume-peds-endpoint.md`. Full detail: archive, `## Pruned from MEMORY.md -
  2026-09-16`.
- ✅ **PEDS ENDPOINT PART 2 CLOSED 2026-09-06 — `questions.peds.ep2.js` holds 630, 0 holes.**
  Close-out: `progress\resume-peds-endpoint-part2.md`. ⚠️ Endpoint/House overlap is chapter-shaped —
  never fold `pedhd-card-6..10` (5 identical stems, 5 different figures). Full detail: archive,
  `## Pruned from MEMORY.md - 2026-09-16`, and `## Pruned from MEMORY.md - 2026-09-05`.
- ✅ **NEURO CLOSED 2026-09-17 — 493 live.** ✅ **NEURO ENDPOINT CLOSED 2026-09-22 — 1047 live, all 22
  chapters (incl. fe1-fe6), 0 dupes, 0 holes.** History: `resume-neuro-endpoint.md` §14-16 (ch.7-8
  detail + close-out), `## Pruned from MEMORY.md - 2026-09-22 (neuro endpoint Ch.1-6 + pipeline
  detail)`. `LOCKED_MODULES` cleared in `app/data/modules.js` — neuropsych UNLOCKED, boot-check clean
  (6956 total, neuropsych 36 chapters, 0 errors). **User still needs to upload `dist` to Cloudflare.**
  ⚠️⚠️ **OFFSET NOT GLOBAL: neuropsychiatry PDF = book+5, neurosurgery PDF = book+7. In scope =
  PDF 6–98 ONLY; SKIP 99–140.**
- **Five-option cap settled; OSCE skipped by user ruling 2026-08-31** — both **PRUNED 2026-09-08 ->** archive, `## Pruned from MEMORY.md - 2026-09-08`. Still binding.

- **App redesign:** Phase 1 (depth `ae9a7b9`, warm grounds + subject colour `ea75502`) pushed
  2026-09-08 (`progress\resume-2026-09-08-depth-and-colour.md` "Changed since"). Look work now runs
  under the APP RE-PLAN above; `redesign-spec-2026-09-07-owner-interview.md` is input, not the plan.

## The watch — oversight every ~12 h (set up 2026-09-02)
- **PRUNED 2026-09-20 ->** archive. Binding: a watch chat runs `progress\WATCH.md`, reports, never
  builds or commits; it reads repo + journals only. **Append to a resume prompt's `## Changed since`
  block, never its body; always start a work chat fresh from its prompt.**

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
- **Corpus 5,951** (re-measured from disk 2026-09-08, **re-measure before quoting; it drifts by the
  commit**. Every array loaded and indexed for sparse holes,
  `for i… if(!(i in A))`, **zero holes, every file `eval`s clean**): ENT **2,322** (2,240 q + 82 c) ·
  **Ophtho 1,598** · Neuro **304** (297 q + 7 c) · Peds House **393** · Peds endpoint **1,334**
  (p1 704 + p2 630, both CLOSED). ⚠️ **The case arrays are `C_ENT`/`C_NEURO`/`C_OPHTHO`/`C_PEDS`, not
  `CASES_*`** (ophtho and peds hold 0). **5,951 is a STALE pre-neuro-endpoint corpus figure, not current** — `LOCKED_MODULES` is now `[]` (neuropsych unlocked 2026-09-22, ophtho unlocked 2026-09-21); only `THEORY_LOCKED` still holds chapters out. **RECOUNT 2026-09-25 (vm-load, holes indexed): 6,956, 0 holes, 12 files parse** — ENT 2,240+82c · neuro 1,047+7c · ophtho 1,273+433+147 · peds 393+704+630.
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
  chars on every book/bank; `Read` rejects >100 MB. **`.ps1` NOT blocked by policy** (measured
  2026-09-09). **Node v26.7.0** · **Python 3.12.10 + pip 25.0.1**; no ImageMagick, Ghostscript or `gh`;
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
- **Three more traps, all measured 2026-09-06/07:** ⚠️ a **plain backtick template literal in JS eats backslashes too** (`` `\d` `` becomes `d`) — **`String.raw` on every patch payload** carrying a regex, and reject a payload holding a backtick or `${` · ⚠️ **`cd "<path>" && git …` is DENIED by permissions; `git -C "<path>" …` is not** · ⚠️ **node resolves a Git-Bash `/tmp/x` as `D:\tmp\x`** — pass the scratchpad's full Windows path. ⚠️ **Python writes CRLF on Windows: `newline=''` on every read AND write of a project file**; the definitive test is `tr -cd '\r' < <file> | wc -c`. · ⚠️⚠️ **Codex prose can mangle em-dash/middle-dot via cp1252/UTF-8 double-encoding**: em-dash → `â€”` (3rd char is U+201D, not a dash-lookalike) — fix `fromCharCode(226,8364,8221)`→`fromCharCode(8212)`; middle-dot → simple `Â·`. Detect via `[^\x00-\x7F]+` scan. Measured t10 staging 2026-09-15, prose only.
- **⚠️⚠️ COUNTING QUESTIONS IS A TRAP: `app\data\*.js` MIXES TWO KEY STYLES** — `questions.neuro.js`
  held **151 quoted-key** (`"id":`) + **22 bare-key** (`id:`) entries, so a bare-key grep counted
  **22 of 173** on 2026-09-02 and read as catastrophic loss. **It was not.** Count BOTH styles
  (command in `progress\WATCH.md` §4). **Bytes rising while a count falls means THE COUNT is
  broken** — cross-check `git cat-file -s HEAD:<path>` before reporting loss. Same trap on quotes:
  `questions.ophtho.ep.js` mixes `id:"…"` (s3-6) and `id:'…'` (s1-2) — grep `id:['"]`, never one
  quote style alone (measured 2026-09-16: double-quote-only undercounted 169 live as 109).
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
do not redraw her, do not draw anything onto her. She is fixed; her poses may change or go 3D only
via a test render the owner sees, never uploaded before he picks the licence (3D ruling 2026-09-23).**

## Connections to other projects

- **Herophilus Book** and the **Pediatrics OSCE pack** read from `Semester 8\` here, **read-only** — neither has git, neither commits into this repo. Nothing else in the workspace depends on this project.
