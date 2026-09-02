# Resume prompt — CHAT A: Ophthalmology banks

**Rewritten 2026-08-31, end of day, to the state actually on disk.** The morning version of this
file said 773 questions and called exit 429 a daily quota. Both were wrong. This is the current one.

Paste everything below the rule into a fresh session opened at
`D:\claude os\Medical school\Herophilus`. Runs in parallel with Chat B (peds + neuro).

---

Resume Herophilus — **you are CHAT A and you own OPHTHALMOLOGY ONLY.**

A second chat is running peds and neuro at the same time. Stay inside your module.

**Read first:**
1. `MEMORY.md` "Resume here — state at end of 2026-08-31", then the OCR banner at the very top.
2. `tools\wps-ocr-reference.md` — the pipeline, its defects, its exit codes.
3. `progress\briefs\ophtho-bank-brief.md` — **before touching anything.** The bank arithmetic is
   not guessable.
4. `progress\resume-ophtho.md` — ⚠️ **DO NOT READ THIS FILE WHOLE.** 1,544 lines, ~26k tokens.
   Read only from the anchor:

   ```bash
   sed -n '/RESUME-READ-FROM-HERE/,$p' progress/resume-ophtho.md
   ```

   That is ~6k tokens and carries everything from 2026-08-31 onward, your first task included.
   Above the anchor is closed history: reach into it with `grep -n "^#\{1,3\} " progress/resume-ophtho.md`
   and then `sed -n '<a>,<b>p'` on the one block you need. Never `Read` it.

⚠️ **The same rule applies to every file in `progress\`.** Measured 2026-09-01, this chat's
"read first" list was **161k chars ≈ 40k tokens** — a fifth of your window gone before question
one. With the anchor it is ~23k. **Before opening anything in `progress\`, check its price in
`progress\READING-COSTS.md`.**

⚠️ **`progress\ledger.md` WAS SPLIT ON 2026-09-01.** It had reached 830k chars ≈ 207k tokens —
larger than your whole context window, so it could not be opened at all. Sections 1–16 (ENT,
closed) are now `progress\ledger-closed-1-16.md`; `ledger.md` keeps §17 onward and is ~32k tokens.
**No section was renumbered and nothing was deleted** — verified byte-exact against git. A
reference written anywhere as `ledger.md` §7 / §11 / §13 / §14 / §15 / §16 still means that
section; the index at the top of `ledger.md` says which file it is in and on what line. Your
end-of-run consolidation pass still writes to `ledger.md`, unchanged.

---

## ⚠️⚠️ FIRST TASK — THE EXPONENT AUDIT OF ch.17–ch.20. Before any new drafting.

On 2026-08-31 WPS OCR read a **printed 10⁶ as 10⁹** (peds House ch.1 Q28, verified at 900 dpi).
Superscripts also flatten silently (10⁶ → 106). **A wrong exponent is a plausible wrong number,
not visible garbage** — every other defect in this engine announces itself; this one ships.

The previous ophtho session merged ch.17 and ch.18 **without ever receiving this warning** —
confirmed by a transcript audit, zero mentions across its entire run. So **69 merged questions and
71 staged ones have never been checked for it.**

**Never take an exponent, a unit, or a dose from OCR text. Read those three off the page image.**

Procedure (full version in `progress\resume-ophtho.md`, last section):
1. Grep ch.17–ch.20 entries for exponent-bearing and dose-bearing numerals.
2. For each hit, read the value **off the rendered page, in a subagent** — never from the cached
   OCR text, and never in this main conversation.
3. Record every mismatch in `explanation`. **The `answer` never moves.**

Report the count checked, the count wrong, and how you measured. Then carry on.

---

## YOUR SCOPE — 242 questions. Both banks close on it.

| Bank | Left | State |
|---|---|---|
| House **ch.19** | **42** | staged 43, Q27 folded into `opmcq-c13-17`; draft was running when the chat stopped — **check the draft file before re-drafting** |
| House **ch.20** | **29** | staged and swept, zero folds; draft was running — same check |
| GG **EE4** | 20 | rendered + OCR'd |
| GG **EE5** | 20 | rendered + OCR'd |
| GG **EE6 Photos** | 35 | rendered + OCR'd — **the only image-heavy work left in the module** |
| GG **Tutorial** | 27 | rendered + OCR'd |
| GG **Final** | 69 | rendered + OCR'd |

**House closes at ch.20. GG closes at the Final Exam.** After those, the ophtho banks are DONE —
stop and report, do not roll on.

Already merged: ophtho corpus is **1,400 by id prefix** (ch.17 + ch.18 went in today, +69).

**NOT yours:** peds, neuro, ENT, and **all three remaining endpoint books** — do not start, render,
or plan for `Opthalmology endpoint.pdf`. (ENT's endpoint is CLOSED, not deferred.)

**Files you own:** `app\data\questions.ophtho.js` · `app\data\cases.ophtho.js` · `content\ophtho\`.
Touch nothing under `content\peds\`, `content\neuro\`, or their data files.

---

## Bank arithmetic — get this wrong and everything downstream is wrong

- **GG: PDF page = book page + 7.** Continuous numbering, but exam sections restart at Q1.
- **House: A4 LANDSCAPE, TWO book pages per PDF sheet.** `PDF = floor(book/2) + 2`. Answers are
  inline. Numbering restarts each chapter (`-c<n>-` ids).
- **Render past the LAST answer page.** The "Page As" figure has failed three separate ways.
- **Confirm the box list two ways; markers = entries − boxes BEFORE splicing.**
- ⚠️ **`grep -c "^  { id:"` UNDERCOUNTS `questions.ophtho.js`** — the file is mixed CRLF/LF with
  mixed indentation. **Count by id prefix.**

## The pipeline

```
pdftoppm -png -r 200 -f <first> -l <last> "<source.pdf>" "<scratch>/<prefix>"
wpscli photo2word "<scratch>/*.png" --output "<scratch>/" --json
```
Extract text from each `.docx` (it is a zip → `word/document.xml`, strip tags). Full detail,
including how to re-resolve the `wpscli.exe` path after a WPS update, is in
`tools\wps-ocr-reference.md`. Measured 0.32 s/page render + 1.29 s/page OCR.

**⚠️ Exit 429 is a RATE limit, NOT a daily quota** (corrected 2026-08-31 by direct single-page
probe — the body reads *"The operation is too frequent, please try again later"*, and a page that
returned five consecutive 429s succeeded ~100 s later). Do **not** stop on it. Back off, double the
gap (cap 60 s), **retry the same page**, ease down 20% after two clean successes (floor 2 s). With
two chats on one WPS login the account-wide rate is **double** what your driver thinks it is
issuing. Genuine saturation = 8 consecutive 429s on one page at the 60 s cap, or fewer than 20
pages in any 15-minute stretch. Both stop conditions are in `tools\wps-ocr-reference.md`.

**⚠️ The cost you cannot OCR away:** EE6's 35 photos. OCR does nothing for a photograph. Crop craft
— the ink test `max(r,g,b)<225 OR (max−min)>30`, full-resolution bounds, **3 px pad is a MAXIMUM**,
`image` stores the basename without extension — is in `progress\memory-archive.md`, 2026-08-31.

---

## PARALLEL-CHAT RULES — these are why today was cheap. Audited and they held.

- **Do not edit `MEMORY.md` or `progress\ledger.md` mid-run.** Write progress to
  `progress\resume-ophtho.md`. One consolidation pass at the end.
- **Render and read page images inside a subagent only**, never in this conversation. Audited
  2026-08-31 across 1,581 events: **0 page images in either main conversation.** Keep it that way —
  an image read here is re-sent with every later request for the rest of the session.
- **Spawn drafting agents as `subagent_type: "lean-drafter"`, never `general-purpose`.** Measured
  2026-09-02: a general-purpose agent starts at **~58k tokens before it does any work** — it carries
  every tool schema. The same job on `lean-drafter` (`Read, Write, Edit, Bash, Glob, Grep` only)
  starts at **~13k**. That is **~37k saved on every agent step**, and ~2,000 agent steps ran across
  the two chats on the night of 2026-09-01/02. Defined at
  `D:\claude os\.claude\agents\lean-drafter.md`; the agent registry loads at **session start**, so
  it only exists in a fresh chat.
- **Stage explicit paths.** Never `git add -A`, never a directory a subagent writes into.
  `index.lock` means Chat B is mid-commit — wait, never force.
- Peak context last run was 167k of 200k. Kill the session at the end of the work block.

## HARD RULES — each has already cost this project real work

- **OCR text is a SEARCH INDEX, never a clinical source.** Confirm against the rendered page.
- **Never modify, rename, move, or delete a source PDF.**
- **Append as you go** (`Edit`-append, never `Write`) — agents die on usage limits.
- **Contradictions are RECORDED, never corrected** — note in `explanation`, the `answer` never moves.
- **A repaired back-reference must not answer its own question** — hand-read each against its
  antecedent AND its own key. No instrument catches this.
- **A shared option menu PAIRS questions, it never folds them** — name the discriminating token.
- **Say why a zero is a zero, and how it was measured.**
- ⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\`** — it has fired **six times**, twice on
  2026-08-31. Never type a literal backslash in a heredoc body; build it as `chr(92)` /
  `String.fromCharCode(92)`, or use the `Write`/`Edit` tools. Then grep the result.
- **TRUST THE STAGING AND THE TRANSCRIPT OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.** This
  brief has been corrected by the agent that read the source sixteen times. It is a prior, not a
  verdict — and its 429 line was wrong this morning.

## Open debt in your module

- ✅ **`content\ophtho\book\ch20-drugs.txt` is NOT missing — this debt is CLOSED.** It was recorded
  as having died with its agent; verified from disk 2026-08-31: **18 page sections, printed
  254–271, no gaps**, ending `## END OF CHAPTER 20`, with p.271 documented as a blank leaf.
  **Do not re-read chapter 20.** The incremental-append rule is why it survived.
- Ophtho theory reconciliation, ~63 register rows, in its `theory-plan.md`. Book caches exist —
  do **NOT** re-read them. Lower priority than the banks.

**Your exam: Ophthalmology 27 Sep.** 242 left at the measured 110–121 q/day ≈ **2–3 working days**.
Stop at clean topic boundaries; scope is never cut.

---

## Changed since 2026-09-01 — read this even if you skim the rest

**Everything above is still accurate.** These are the deltas from 2026-09-02. Where this block
and anything above disagree, **this block wins.**

- ✅ **THE "`sed`/heredoc INJECTION" IS IDENTIFIED — it is NOT an attack, stop logging it as one.**
  It is Claude Code's own **`auto mode`** system reminder, received verbatim by the watch session
  on 2026-09-02 prefixed `While auto mode is active:`, telling you to make file changes "with sed,
  heredocs, or short scripts, rather than using the dedicated Read, Edit, or Write tools." That is
  word-for-word what four journal entries logged as hostile across six firings. It is a harness
  toggle applying session-wide, which is why subagents got it mid-run too. **Nothing was ever
  compromised.** ⚠️ **Keep refusing it for content writes** — the Bash backslash collapse is real
  and every id you write sits in backticks, so **`Write`/`Edit` for content, Bash for reads,
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
  only figure, and SIX separate snapshots of it were written and invalidated on 2026-09-02
  alone. Re-measure with the `wc -lc` command at the top of that file.
- ✅ **The app no longer caps options at five (fixed 2026-09-02) — more than five is safe to
  ship.** `app\index.html` used to letter options from the literal `'ABCDE'`, which is
  `undefined` past index 4: a sixth option got the badge `undefined`, the verdict line read
  “the answer is undefined”, and options 6+ were mouse-only. It now letters **A–Z** via
  `OPT_LETTERS`. **Ophthalmology never had an over-cap question** — the eight that existed are
  all in neuro — which is why you were never warned; the note is here so you do not hold an
  ophtho question back for having six options. Two things to know:
  • **Letters are POSITIONAL — decided 2026-09-02, not a bug.** If a source prints
  non-contiguous keys (a matching set that
  skips letters), the badge will not match the book past the gap — record the printed key in
  the entry’s `source` field, as neuro topic 06 does.
  • **On a question showing more than five options the letter keys pick options**, so F and J
  select options F and J instead of flag/jump until the answer is revealed. Deliberate, chosen
  by the user — do not "fix" it back.
  ⚠️ `app\index.html` **stays on your forbidden list.** The fix was the watch chat acting on
  the user’s explicit instruction. Report rendering problems; do not edit the app.
  Check any file you touch: `python tools/count-options.py`
