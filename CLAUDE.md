# Herophilus — project rules

Medical question bank and revision app for 2nd-term Semester 8 at Alexandria University: ENT,
Ophthalmology, Neuropsychiatry, Pediatrics. Built from the material in `Semester 8\`. Named for
Herophilus of Alexandria, who performed the first systematic human dissections there ~300 BC.

**`reference.md` is this file's annex** — the pre-2026-08-17 rules file preserved whole, with
every war story, measurement and superseded rule. Pointers below say when to open it. Where the
two disagree, this file wins. `MEMORY.md`'s full history is likewise in
`progress\memory-archive.md`. Workspace rules (`D:\claude os\CLAUDE.md`) still apply except where
this file explicitly overrides them.

**The project moved to `D:\claude os\Medical school\Herophilus` on 2026-08-15** — any absolute
path still saying `D:\claude os\Herophilus` is stale.

---

## 1. Layout

`app\` is the only thing that ships and `Semester 8\` is read-only (§5). The full tree — every
folder and what lives in it — is `reference.md` §1; the prose inventory that stood here **MOVED
2026-09-02** to `reference.md`, `## Moved from CLAUDE.md - 2026-09-02`.

## 2. Code constraints

Vanilla HTML/CSS/JS. **No framework, no build step, no bundler, no npm** — this is what lets the
app run from `file://`, deploy by drag-and-drop, and work offline.

- **Data files are classic scripts, not ES modules** (ES modules die on CORS over `file://`).
  Per-subject files use `var` so aggregators read them off `window` and degrade to empty rather
  than throwing. **Load order matters**: subjects → aggregators → inline script; `fonts.js` from
  `<head>` before the stylesheet.
- **Never let a network call strand the boot** — `loadSDK()` 8 s timeout, `boot()` 15 s race;
  Firebase is optional and the app must degrade to local-only. (Netlify was unreachable from the
  user's connection; slow CDNs are a real condition.)
- **Never rename the `wardround.*` storage keys** — renaming orphans every user's progress. Key
  table: `reference.md` §2. Theme and Clepsydra state are **device** keys, never synced.
- **⚠️ Everything that touches a bank goes through `banksOf(q)`, never `bankOf(q)`** — a miss is
  silent and asymmetric (filters right, counts wrong). Grep `bankOf(` after any work there.
  The source filter works over `banksPresent(mod)`, not all of `BANKS`.
- **Stacking order is deliberate**: Clepsydra 150 → gate 200 → confetti 250 → modal 300 → toast
  400.
- **The gate is two steps (sign-in, then profile)** and `gateSignInStep()` **detects `file:` and
  swaps the button order** — Google sign-in cannot work over `file://`
  (`auth/operation-not-supported-in-this-environment`, verified). Do not remove the swap.
  `enterProfile()` is the only place a cloud profile is entered. Mechanics: `reference.md` §2.
- **The Firebase config in the file is fine** — keys are public by design; security is the
  Firestore rules.

## 3. Source material — three tiers, very different costs

**Same three tiers as workspace `CLAUDE.md` §5** — slides carry a text layer (126 of 140 extract),
books and question banks are image-only scans. This project adds **16 `.pptx/.ppt`** decks, which
extract via their XML. Table **MOVED 2026-09-02** to `reference.md`, `## Moved from CLAUDE.md - 2026-09-02`.

- **Check `content\<subject>\lectures\*.txt` before rendering anything** — harvested once,
  cached. **A cached `.pptx` `.txt` is not necessarily the whole deck** — check against
  `pdftotext -layout` (details in `MEMORY.md`).
- Scans: `Read` rejects >100 MB PDFs; render page ranges with `pdftoppm -png -r 150` to the
  scratchpad. **Do the render + visual read inside a subagent that returns text** (workspace
  `CLAUDE.md` §5) — images read in the main conversation are re-sent with every later request.
- **Cache everything you read**: transcription to `content\`, range to `progress\ledger.md`,
  same pass. A page is rendered and read once, ever.

## 4. Content standards

- **Chapters:** a topic taught over two lectures is ONE chapter — never carry a `…1/…2` pair into
  `MODULES`. `SCHEDULE` is keyed by date+title, never chapter ids — restructuring cannot break
  it and it must not be edited to accommodate one.
- **Questions are transcribed, never authored**; an authored origin must be recorded. Schema,
  id prefixes and examples: `reference.md` §4.
- **Three banks** — `endpoint` (amber) / `house` (sky) / `gradegain` (pink). **Identify by the
  cover, not the filename** (`ENT QB.pdf` is Grade Gain; `ophthalmology MCQ.pdf` is House) —
  render page 1 before assigning. File map: `reference.md` §4.
- **A question can belong to several banks**: `bank` = transcribed-from origin, `alsoIn` = every
  other bank that prints it. **On a cross-bank match, ADD THE BANK — never a second entry**;
  keep the fuller printing, fold the other's citation into `source`. Per-bank counts summing
  over the question count is **correct and deliberate**. A folded id loses its backticks
  everywhere it is still mentioned.
- **Question order** is hashed from the id (FNV-1a + murmur3 finalizer — measured necessity):
  stable across devices, later additions land mid-deck. Never re-shuffle.
- **Images:** `image` stores the **basename**; `qImgSrc()` builds the path (bundler-readiness —
  **`bundle.ps1` does not exist yet**). `imgAlt` required, **and it must not answer the
  question** — modality and view only; the detailed read belongs in `explanation` (this gave
  away six answers once). Figure renders between stem and options; it prints. **Every crop is
  LOOKED at** — no numeric check has ever caught a bad crop. Cutter traps: `reference.md` §4.
- Straddling chapters: assign primary, note secondary. A bank printing no key: say so, never
  invent one.
- **Fix errors, never silently overwrite the source**: transcription faults are repaired in
  place; where **the source itself** is wrong, correct it **and record what the bank printed**,
  cited. **A defective key is noted, never disputed** (user ruling 2026-08-11 — `answer` is
  always the bank's printed key; the discrepancy is a note in `explanation`).
- **Explanations:** printed boxes captured verbatim, unmarked. Where none is printed, write it
  from the cached lecture and end with the marker `Written for this bank — the endpoint file
  prints no explanation here.` — the marker is not optional and **never lives in `source`**.
- **⚠️ A GAP IN THE MATERIAL IS ANSWERED, NOT DECLARED** (user, 2026-08-04 — **supersedes the
  workspace grounding rule for Herophilus only**): fill from general medical knowledge, keep
  `not taken from the course material` as a short tag on the claim, never a dead-end sentence.
  Shape to copy: `entep-throat-103`. **Prefer the other bank to outside knowledge** where it
  prints the fact. Interview the user before leaving anything unanswered — **batched, never
  per-sentence**. A lecture-numbering gap = the professor withheld it; fill and tag, never
  chase.
- **Free-text cases** (`type:'case'`, `cases.<sub>.js`): vignette + diagnosis sources are never
  forced into MCQ schema. Graded on concepts via `keys[].terms` — **write terms generously**
  (abbreviation, full name, misspellings, synonyms). A case never reveals its diagnosis
  unprompted; `Q.peek` resets wherever `Q.shown` does. Schema: `reference.md` §4.
- **Theory format is `START-HERE.md` §14** — budget `max(lecture words, 25×q)`, floor 600,
  operative ceiling ~2,400 words / ~10 pp; telegraphic, tables by default, §14.3a layout,
  §14.5 deferral register. **The "new study source" brief in `reference.md` §4 is DEAD** —
  kept only as history. Written backwards from the questions; importance tests and drop-list:
  `reference.md` §4.

## 5. Citations and grounding

- **No clinical fact without a page citation** — `<file>.pdf p.<N>`. Preserve medical
  terminology exactly. All study output in English.
- Gaps: answered and tagged, per §4 — outside knowledge always identifiable, never passed off
  as sourced.
- **Never modify, rename, move, or delete anything in `Semester 8\`.** Rendered PNGs go to the
  scratchpad, never the source tree.

## 6. Design

Dark cinematic Greek design, rebuilt from **the user's own artwork**. Full history, palettes,
film/ambient rules, icon pipeline and measurements: `reference.md` §6. The standing rules:

- **⚠️ THE CLEPSYDRA IS THE USER'S OWN ARTWORK. Do not redraw her, and do not draw anything
  onto her** — settled three times in one day; the answer is always *ask for artwork*. Nine
  poses at `app\assets\clep\`; the figure never re-themes.
- **ALIVE TO BROWSE, CALM TO READ**: orbs/reveal run on browse views, pause and dim on quiz,
  mock, review, theory. Exception, user's explicit decision: **her glitch is NOT gated** on
  reading views; `prefers-reduced-motion` stops every loop (JS timers included).
- **Three token families never re-merge**: `--tx`/`--ink` (text) · `--line*` (hairlines) ·
  `--fill` (raised fills). **Grep `var(--ink)` outside `color:` after any token work.**
- Theme: inline `<head>` script before the stylesheet (else a light-mode flash); dark = bare
  `:root`, light restates **tokens only**. **The print block's selector must stay
  `:root, :root[data-theme="light"], :root[data-theme="dark"]`** and it hides `.mod-art`. Test
  printing after any token change. `--gold` stays bright in light mode — do not "fix" it.
- **Text on a brand colour is chosen by measurement, never habit** — the Greek palette passes
  AA with white text everywhere; re-measure if any colour changes. Measure against the
  **darker** gradient stop.
- **No `backdrop-filter` on cards, rows or options** — fixed furniture only. The rail gradient,
  not `--rail`, is what paints the rail.
- The medallion icon lives in **five places** that move together (favicon inlined base64; the
  rest by path): tab, apple-touch, rail, splash, gate ×2 — grep `class="gmark"`/`"blip"`.
- **Anything that stores a colour needs a migration** (`migrateColours()`); prefer storing a
  token. `ico()` output contains single quotes — backticks only.
- **Portrait is a different picture — render 820×1180 and 1180×820 after touching film, scrim
  or page width.** Film/pose/gate mechanics, pool contrast numbers, swap timings:
  `reference.md` §6.
- **After any CSS edit, confirm the rule is live**: enumerate `document.styleSheets`, count
  parsed rules **recursively**, match media on `mediaText` (Chrome normalises `5 / 4`).
  **Three `max-aspect-ratio:5/4` blocks is the correct count.** A `/*`-vs-`*/` balance scan is
  a hint, never a verdict (regex literals fake it).
- Sessions: **timestamps, never countdowns**; the 1 s tick repaints via `paintSessionLive()`,
  never `render()`. Backups: `wardround.bak.<profileId>` snapshots; `loadState()` rescues only
  a **missing or unparseable** live key, never second-guesses a clean one.

## 7. Verifying a change

No test framework — verification is ad-hoc but must actually run:

- Boot `app\index.html` from `file://`: **0 console errors**, 4 module cards, all 134 chapters
  visible (empty ones greyed — deliberate).
- **The preview pane snapshots files once and cannot screenshot** — reload an edited data file
  into the live page with a cache-busted `<script>` injection (snippet: `reference.md` §7);
  `QUESTIONS`/`THEORY` are `const`, rebuild them in the check.
- **Headless Chrome is the only real screenshot** (Chrome and Edge both present). Harness
  rules, each one a wasted run otherwise: copy the **whole** `app\` to the scratchpad; stub
  `showGate` at parse time; seed `profiles` + `enterProfile()`; kill animations; force
  `.reveal{opacity:1}` (IntersectionObserver never fires under virtual time); one Chrome at a
  time, fresh `--user-data-dir`, retry the ~1-in-3 silent failure. **⚠️ A `--user-data-dir`
  under a path containing `--` (the session scratchpad!) kills both browsers with "Multiple
  targets are not supported" — use a double-dash-free path.**
- **Check the auditor before believing the audit** — three contrast auditors and two content
  auditors have produced false failures (composite alpha, gradients, walk through `<html>`,
  text Range not element box, single-frame sampling; detail: `reference.md` §7). A run where
  everything fails identically is a broken probe, not a broken app.
- **⚠️ Data-file syntax slips fail silently** — the app boots and reports 82 questions (cases
  only) when `Q_ENT` didn't parse. Inline the file in a scratch `<script>` with an
  `addEventListener('error')` probe (names line + token); run it **after the folds and again
  after the splice**. A dead-id list full of obviously-real ids means the file didn't parse.
- After any content batch: module/chapter refs resolve, `answer` in range, `qs` ids real,
  counts match `progress\ledger.md`. Canonical validator: `<scratchpad>\wrT7\validate.js` —
  copy it out of the scratchpad if it has been cleaned.
- Real bugs worth re-testing, the list: **MOVED 2026-09-02** to `reference.md`, `## Moved from CLAUDE.md - 2026-09-02`.

---

@MEMORY.md
