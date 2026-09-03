# Resume prompt — CHAT B: Pediatrics then Neuro banks

**Rewritten 2026-08-31, end of day, to the state actually on disk.** The morning version of this
file said ~493 questions, estimated peds at ~160, and called exit 429 a daily quota. All three were
wrong — the session that ran measured the real figures. This is the current one.

Paste everything below the rule into a fresh session opened at
`D:\claude os\Medical school\Herophilus`. Runs in parallel with Chat A (ophthalmology).

---

Resume Herophilus — **you are CHAT B and you own PEDIATRICS and NEUROPSYCHIATRY.**

A second chat is running ophthalmology at the same time. Stay inside your modules.

**Read first:**
1. `MEMORY.md` "Resume here — state at end of 2026-08-31", then the OCR banner at the very top.
2. `tools\wps-ocr-reference.md` — the pipeline, its defects, its exit codes.
3. `progress\resume-peds.md` and `progress\resume-neuro.md` — ⚠️ **DO NOT READ EITHER WHOLE**
   (1,126 and 529 lines). Read only from the anchor in each:

   ```bash
   sed -n '/RESUME-READ-FROM-HERE-2/,$p' progress/resume-peds.md
   sed -n '/RESUME-READ-FROM-HERE/,$p' progress/resume-neuro.md
   ```

   That is ~8k + ~2.5k tokens instead of ~18k + ~9k, and it is exactly the 2026-08-31 blocks —
   everything you need was measured there; do not re-derive it. Above the anchors is closed
   history: `grep -n "^#\{1,3\} " <file>` then `sed -n '<a>,<b>p'` on the one block you need.
   ⚠️ Large earlier parts of `resume-peds.md` document the peds **ENDPOINT**, which is deferred —
   do not inherit its numbers, page maps, or offsets for the House bank. Different book,
   different structure.

⚠️ **The same rule applies to every file in `progress\`.** Measured 2026-09-01, this chat's
"read first" list was **139k chars ≈ 35k tokens** before the anchors — a sixth of your window
gone before question one. With them it is ~22k. **Before opening anything in `progress\`, check
its price in `progress\READING-COSTS.md`.**

⚠️ **`progress\ledger.md` WAS SPLIT ON 2026-09-01.** It had reached 830k chars ≈ 207k tokens —
larger than your whole context window, so it could not be opened at all. Sections 1–16 (ENT,
closed) are now `progress\ledger-closed-1-16.md`; `ledger.md` keeps §17 onward and is ~32k tokens.
**No section was renumbered and nothing was deleted** — verified byte-exact against git. A
reference written anywhere as `ledger.md` §7 / §11 / §13 / §14 / §15 / §16 still means that
section; the index at the top of `ledger.md` says which file it is in and on what line. Your
end-of-run consolidation pass still writes to `ledger.md`, unchanged.

**Files you own:** `app\data\questions.peds.js` · `questions.neuro.js` · `cases.peds.js` ·
`cases.neuro.js` · `content\peds\` · `content\neuro\`. Touch nothing under `content\ophtho\`.
Untracked `content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js` is **parked endpoint work** —
never stage or edit it.

**NOT yours:** ophthalmology, ENT, and **all three remaining endpoint books** — do not start,
render, or plan for `Pediatrics endpoint part1/part2.pdf` or `Neuro endpoint.pdf`.

---

## 1. PEDIATRICS HOUSE — first, because Peds OSCE is 14 Sep

**Source:** `Semester 8\Pedo\Questions\pediatric .pdf` — ⚠️ **there is a SPACE before `.pdf`.
Quote the path.** 104 PDF pages, 80.4 MB. Cover reads *"Dr. HOUSE in pediatric medicine & surgery
MCQs"*; `bank` value is **`house`**, verified. **2-up spread scan — each PDF sheet holds TWO book
pages.**

**⚠️ THE REAL COUNT, MEASURED 2026-08-31: ch.4–20 = 312, not the ~160 that was estimated.** The old
figure came from a density ratio and was low by ~95%. Bank total = 312 + 81 shipped = **393**.
Per-chapter table with page ranges and how each disagreement was settled: `resume-peds.md`, the
"THE COUNT, MEASURED" block. **Do not re-derive it and do not re-run the counters.**

**Where you actually are:**

| ch | title | q | state |
|---|---|---|---|
| 1–3 | — | 81 | ✅ merged, shipped |
| **4** | Haematological disorders | 25 | **staged + drafted 25/25, NOT SPLICED.** 2 crops cut |
| **5** | Genetics | 20 | **staged, zero folds, NOT SPLICED.** 6 crops cut and looked at |
| 6–20 | — | **267** | not started |

`questions.peds.js` still holds **81**. **Your first peds job is to splice ch.4 and ch.5** — the work
is already done and on disk, it just never landed. Validate from disk before rewriting anything;
a dead agent's file is usually complete.

**Three printing defects already verified — recorded, never corrected:**
- **ch.9 prints "18." TWICE** on book p.74, on two different questions, and prints no Q19. **The
  printed number is not a unique identifier in ch.9** — do not derive ids from it blind.
- **ch.13 skips Q11 entirely.** Highest printed is 28; confirmed at 400 dpi. A publisher skip.
- **ch.13 Q14–Q17 share one five-option menu that lists "Bronchiolitis" twice**, as A and D.
  Transcribe as printed, note it in `explanation`, the `answer` never moves.

**⚠️ The `Answer:` marker counter is a FLOOR, not a count** — it dropped one marker on book p.66 and
once in ch.16. Neither text instrument may stand alone. Two counters that were tried and are **not
usable**: "Select one answer only" occurrences and option-A line starts. Recorded so nobody
rebuilds them.

**Stop line:** book p.149 is the "Pediatric surgery end-of-round MCQs" divider. **Book p.150 onward
is not MCQ format** — out of current scope.

**Image load:** at least 36 figure references across 27 pages — an OCR-derived **floor**, not a
count. Every crop gets LOOKED at; this is the dominant cost of the remaining 267.

---

## 2. NEURO / PSYCH — the bank is fully rendered and fully mapped

**Source:** `neuropsychiatry & neurosurgery qb.pdf`, 142 pages. **All 142 pages are already
rendered** at 200 dpi (previous session's scratchpad — `find` the temp root; re-render if gone,
it is only ~45 s). Ids `npqb-nr-<printed>` and `npqb-ps-<printed>`.

**Where you are:** neuro corpus holds **180** (151 + 7 + topic 16 "Anxiety & Related", 22, spliced
and committed today). Both `gg-ps-t16.array.js` and `gg-ps-t16.draft.js` are kept and committed —
**drafts are kept, not deleted** (`gg-nr-t07.draft.js` is still tracked long after t07 merged).

**Next boundary, already established and not to be re-derived:** topic 17 "Mood Disorders" opens at
**Q41 on PDF 77 / book 72.**

**⚠️ THE STRUCTURE — this bank is not like the others:**
- **Bank identity is GRADE GAIN.** Cover (PDF 1) prints "QS BANK + GRADE GAIN EDITION". Not House,
  not endpoint.
- **ONE book page per sheet, A4 portrait**, two columns inside each page. **NOT 2-up** — do not
  carry the peds/ophtho House arithmetic across.
- ⚠️⚠️ **THE PAGE OFFSET IS NOT GLOBAL.** Neuropsychiatry half: **PDF = book + 5** (verified
  PDF 77 = book 72, PDF 98 = book 93). Neurosurgery half: **PDF = book + 7** (verified PDF 101 =
  book 94), because of two unnumbered contents pages at PDF 99–100. A global "+5" misfiles every
  neurosurgery citation by two pages.
- Layout: PDF 1 cover / 2 blank / 3–5 contents / **6–98 neuropsychiatry body (book 1–93)** /
  99–100 neurosurgery contents / 101–140 neurosurgery body / 141 blank / 142 advert.
- **In scope = PDF 6–98 only. SKIP PDF 99–140 — neurosurgery, out of scope.**
- **Two independent numbering runs, both continuous ACROSS topics.** Neurology (topics 01–14,
  book 1–64, PDF 6–69) starts at Q1. Psychiatry (topics 15–23, book 65–93, PDF 70–98) **restarts
  at Q1** and ends at **Q165**.
- ⚠️ **The contents page's per-topic counts are unreliable** — psychiatry's sum to 157 against a
  true 165, and it prints book page 14 twice (topics 04 and 05). The 23-topic map is in
  `resume-neuro.md`, last block; **those are the contents page's claim, not a measurement.**
  Count every topic by reading its answered pages.
- Answers print as `<n>. Correct Answer: (X)` with an optional `Explanation:` block, and **may
  share a page with the tail of that topic's questions** (e.g. PDF 98). Do not assume answers start
  on a fresh page.
- ⚠️ **Explanation boxes are a property of the TOPIC, not the bank.** Topic 01 printed keys only;
  topic 02 printed a full set.
- ⚠️ **`questions.neuro.js` is now MIXED-STYLE** — the original body is double-quoted
  (`"id": "npqb-nr-1"`), spliced batches are single-quoted (`id:'npqb-ps-19'`). **Any id regex must
  be the tolerant form** `/["']?id["']?\s*:\s*["']([a-z0-9-]+)["']/` — a pattern written for one
  style returns a silent, plausible undercount.

✅ **THE OPTION CAP IS FIXED (2026-09-02) — topic 03 is safe to splice.** This block used to
say the app broke past five options and to hold topic 03 back. It no longer does: `app\index.html`
letters options A–Z via `OPT_LETTERS`. **Q43 (nine options) and Q51 (eight) render correctly.**
The earlier note that "no shipped question exceeds five options today" was **wrong** — eight
already did. Letters are positional, so where a bank prints non-contiguous keys the badge can
differ from the book; record the printed key in `source`. `index.html` is still NOT yours to
edit — report rendering problems, do not fix them. Detail in `resume-neuro.md` §4a.

**Open debt:** 12 `nr-intro`/`nr-exam` outside-knowledge tags the book can replace, `npqb-nr-14`
first. Defects already recorded are rostered in `resume-neuro.md` §7 — read it before
re-adjudicating anything.

---

## The pipeline

```
pdftoppm -png -r 200 -f <first> -l <last> "<source.pdf>" "<scratch>/<prefix>"
wpscli photo2word "<scratch>/*.png" --output "<scratch>/" --json
```
Extract text from each `.docx` (zip → `word/document.xml`). Full detail in
`tools\wps-ocr-reference.md`. Measured 0.32 s/page render + 1.29 s/page OCR.

**⚠️ Exit 429 is a RATE limit, NOT a daily quota** — you proved this yourself on 2026-08-31 with a
single-page probe: *"The operation is too frequent, please try again later."* A page that returned
five consecutive 429s succeeded on `tries=3` about 100 s later. Do **not** stop on it. Back off,
double the gap (cap 60 s), **retry the same page**, ease down 20% after two clean successes
(floor 2 s). With two chats on one WPS login the account-wide rate is **double** what your driver
thinks. Genuine saturation = 8 consecutive 429s on one page at the 60 s cap, or fewer than 20 pages
in any 15-minute stretch.

**⚠️⚠️ SUPERSCRIPTS FAIL SILENTLY.** WPS read a printed **10⁶ as 10⁹** in your own peds House ch.1
Q28, verified at 900 dpi; superscripts also flatten (10⁶ → 106). **A wrong exponent is a plausible
wrong number, not visible garbage.** **Never take an exponent, a unit, or a dose from OCR text —
read those three off the page image.** This applies to every peds and neuro question you draft.

---

## PARALLEL-CHAT RULES — these are why today was cheap. Audited and they held.

- **Do not edit `MEMORY.md` or `progress\ledger.md` mid-run.** Write progress to
  `progress\resume-peds.md` / `resume-neuro.md`. One consolidation pass at the end.
- **Render and read page images inside a subagent only**, never in this conversation. Audited
  2026-08-31 across 1,581 events: **0 page images in either main conversation.** Keep it that way.
- **Spawn drafting agents as `subagent_type: "lean-drafter"`, never `general-purpose`.** Measured
  2026-09-02: a general-purpose agent starts at **~58k tokens before it does any work** — it carries
  every tool schema. The same job on `lean-drafter` (`Read, Write, Edit, Bash, Glob, Grep` only)
  starts at **~13k**. That is **~37k saved on every agent step**, and ~2,000 agent steps ran across
  the two chats on the night of 2026-09-01/02. Defined at
  `D:\claude os\.claude\agents\lean-drafter.md`; the agent registry loads at **session start**, so
  it only exists in a fresh chat.
- **`lean-drafter` runs on Sonnet 5 — you stay on Opus 5.** Cache reads are 97% of the bill and
  Sonnet 5 charges $0.20/MTok for them against Opus 5's $0.50. Drafting agents transcribe and
  format against your brief; the clinical judgment stays with you. **Write the brief so nothing is
  left to the agent's discretion** — name the pages, the file, the format, and what to do when the
  source is unclear. The agent is told to escalate rather than guess: expect questions back, and
  answer them rather than letting it decide. Verify its output the same way you always have.
- **Stage explicit paths.** Never `git add -A`, never a directory a subagent writes into.
  `index.lock` means Chat A is mid-commit — wait, never force.
- Peak context last run was 167k of 200k. Kill the session at the end of the work block.

## HARD RULES — each has already cost this project real work

- **OCR text is a SEARCH INDEX, never a clinical source.** Confirm against the rendered page.
- **Never modify, rename, move, or delete a source PDF.**
- **Append as you go** (`Edit`-append, never `Write`) — agents die on usage limits.
- **Contradictions are RECORDED, never corrected** — note in `explanation`, the `answer` never moves.
- **A defective key is noted, never disputed** — never take a key dispute to the user.
- **A book's own chapter numbers can be defective** — ophtho House printed chapter 9 twice, and peds
  ch.9 prints "18." twice. **Identify chapters by content.**
- **Trust no count** — not printed numbering, not the contents page, not the map. **Render one page
  past the last.** **Say why a zero is a zero, and how it was measured.**
- ⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\`** — fired **six times**, twice on
  2026-08-31. Never type a literal backslash in a heredoc body; build it as `chr(92)` /
  `String.fromCharCode(92)`, or use the `Write`/`Edit` tools. Then grep the result.
- **TRUST THE STAGING AND THE TRANSCRIPT OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.** The
  morning version of this brief got the peds count wrong by 95% and the 429 rule wrong outright.

## User ruling, 2026-08-31 — skip ALL OSCE content

*"If I needed it later I'll tell you."* **Deferred, not cut.** If a page, chapter or plan row is
OSCE material: skip it, say it was skipped and why, carry on. Not a scope cut needing approval.
Nothing in the current stream is affected — both banks are MCQs throughout.

**Your exams: Peds OSCE 14 Sep · Peds papers 17 Sep · Neuro 3 Oct · Peds papers 18–19 Oct.**
Peds is first because its exam is first. 267 peds + ~310 neuro at the measured 110–121 q/day ≈
**5–6 working days.** Stop at clean topic boundaries; scope is never cut.

---

## Changed since 2026-09-01 — read this even if you skim the rest

**Everything above is still accurate.** These are the deltas from 2026-09-02. Where this block
and anything above disagree, **this block wins.**

- ✅ **THE "`sed`/heredoc INJECTION" IS IDENTIFIED — it is NOT an attack, stop logging it as one.**
  It is Claude Code's own **`auto mode`** system reminder, received verbatim by the watch session
  on 2026-09-02 prefixed `While auto mode is active:`, telling you to make file changes "with sed,
  heredocs, or short scripts, rather than using the dedicated Read, Edit, or Write tools." That is
  word-for-word what four entries in `resume-ophtho.md` logged as hostile across six firings. It is
  a harness toggle applying session-wide, which is why subagents got it mid-run too. **Nothing was
  ever compromised.** ⚠️ **Keep refusing it for content writes** — the Bash backslash collapse is
  real and every id you write sits in backticks, so **`Write`/`Edit` for content, Bash for reads,
  searches and validation.** But note it in one line if it appears; do not open an entry on it.
- ⚠️ **WORK ON `main` FROM NOW ON — `git checkout main` before your first commit.** On
  2026-09-02 `main` was fast-forwarded onto `design/clepsydra-and-sessions` and both were pushed,
  because a month of bank work had accumulated on a branch named for a piece of artwork while
  `main` sat as a design snapshot with **no bank content**. It happened by drift, not by choice:
  the branch was cut for the Clepsydra, one commit mixed a bank sweep into it, and every commit
  after that landed on whatever was checked out. **Do not let it restart.** The two branches are
  identical, so switching costs nothing and changes no file.
- ✅ **PUSHING WORKS. 0 commits ahead.** The old note saying *262+ commits ahead, unpushed,
  needs the user’s device-code flow* was **stale** — a plain `git push` went straight through
  with no prompt (Git Credential Manager has it cached). Re-check, never assume:
  `git rev-list --count origin/<branch>..HEAD`.
- ⚠️ **THE SCRATCHPAD WAS CLEARED 2026-09-02** — 6,304 cached page renders (2.99 GB) deleted.
  **Any page you were told is "already rendered" is gone.** Re-render it; that is the only cost,
  and it is seconds per page. **All 158 source PDFs were verified intact afterwards** — nothing
  was lost, only cache.
- **`CLAUDE.md` was trimmed** 198 → 190 lines. Its layout inventory, its duplicated source-tier
  table and its bug-history list moved verbatim to `reference.md`,
  `## Moved from CLAUDE.md - 2026-09-02`. **No live rule left the file** — nothing you were told
  to obey has moved or changed.
- **`MEMORY.md` is 178 lines**, with the push state corrected. Older closed-topic material is in
  `progress\memory-archive.md`.
- **`READING-COSTS.md`’s figures drifted twice and were corrected 2026-09-02.** The four
  auto-loaded files now cost **54,007 chars ≈ 13.5k tokens per request**, not the 52,073 the table
  claimed. ⚠️ **Re-measure before quoting any number in that file** — `wc -lc` on the four takes
  one command, and the file now carries it.
- **The workspace root `D:\claude os` is now a git repo** (`main`, local-only, no remote yet). It
  tracks the seven root control files and ignores every project folder. **Your repo is unaffected**
  — it was verified still at its own HEAD afterwards.
- ⚠️ **An oversight chat now checks this project every ~12 hours**, reading `progress\WATCH.md`,
  the repo state and the module journals. **It will never see your conversation.** Anything you
  learn that is not written into your journal is invisible to it and dies with your session.
  Keep the journal current as you go — this is now the main reason to.

### Chat B only — two corrections to the text above

- ⚠️ **`content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js` is no longer untracked.**
  It was **committed 2026-09-02** (`7351007`) to stop it being lost — 89 questions, 375,979 bytes,
  a splice fragment that opens on a bare `{`, never exponent-audited. Section "Files you own"
  above tells you never to stage it; that instruction is now moot, it is staged. **The rest of the
  instruction stands unchanged: it is parked ENDPOINT work under the user’s deferral ruling — do
  not edit it, do not splice it, do not audit it, do not plan around it.** It is committed and
  safe; leave it alone.
- ⚠️ **The 142 rendered neuro pages are GONE.** Section 2 says all 142 are already rendered in a
  previous session’s scratchpad. That scratchpad was cleared 2026-09-02. **Re-render them** — the
  file itself measures this at ~45 s, so this costs you almost nothing:

  ```bash
  pdftoppm -png -r 200 -f 6 -l 98 "<neuro qb source>" "<scratch>/npqb"
  ```

  **Your first job is unchanged and is NOT the endpoint draft: splice peds ch.4 (25 q) and ch.5
  (20 q).** Both are drafted on disk and never landed; `questions.peds.js` still holds 81.
- **`MEMORY.md` was trimmed 2026-09-02** (194 → 179 lines), and `CLAUDE.md` before it
  (198 → 190). Six blocks moved **verbatim** into `progress\memory-archive.md` under
  `## Pruned from MEMORY.md - 2026-09-02`: the OCR banner’s measured timings and page counts,
  the `CLAUDE.md` cost figure, the ch20-drugs investigation, the first parallel run’s audit
  detail, the escaping war stories, and the completed `_archive\` move.
  ✅ **No live rule and no clinical safety rule left the file.** The exponent rule, the
  "OCR is never a clinical source" rule and the 429 rule are all still in the banner; all
  four escaping traps and their fixes are still in the environment section. This was checked
  by assertion before a byte was written.
  **If a detail you remember is missing, it MOVED — it was not deleted.** Find it with
  `grep -n "Pruned from MEMORY" progress\memory-archive.md` then `sed` the line range.
- ⚠️ **Never quote a per-request token cost from memory.** `progress\READING-COSTS.md` is the
  only figure, and four separate snapshots of it were written and invalidated on 2026-09-02
  alone. Re-measure with the `wc -lc` command at the top of that file.
- **✅ THE FIVE-OPTION CAP IS FIXED (2026-09-02) — the earlier "do not splice" order is LIFTED.**
  `app\index.html` now letters options A–Z via `OPT_LETTERS`, so **an extended-matching block
  or any question with more than five options is safe to splice.** Previously eight neuro
  questions (`npqb-nr-43`, `-51`, `npqb-nr-113`–`118`) lettered options `undefined` and printed
  “the answer is undefined”; they render correctly now.
  ✅ Letters are **positional** — **DECIDED 2026-09-02 by the user, do not raise it as a bug.**
  If a source set prints non-contiguous keys (topic 06 prints
  A B C D E F J k L M), the badge will not match the book for options past the gap — keep
  recording the printed key in each entry’s `source`, as topic 06 already does.
  ⚠️ `app\index.html` **stays on your forbidden list** — the fix was the watch chat acting on
  the user’s explicit instruction, not a licence for you to edit it. If you hit a rendering
  problem, report it; do not fix it.
  After splicing, confirm answers still line up with their options:
  `cd "D:/claude os/Medical school/Herophilus" && python tools/count-options.py`
  Full detail in `progress\WATCH.md` §4.
