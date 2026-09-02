# Resume prompt — CHAT B: Pediatrics (supersedes `resume20260831chatBpedsneuro.md`)

**Written 2026-09-02. The 2026-08-31 prompt in `Downloads\` is STALE and must not be pasted** — it
says `questions.peds.js` holds 81 and that the first job is to splice ch.4 and ch.5. It holds **202**
and ch.4 through ch.9 are shipped and closed. Its own "Chat B only" errata block repeats that wrong
order as *"unchanged"*, so the errata block does not correct it either.

Paste everything below the rule into a **fresh** session opened at
`D:\claude os\Medical school\Herophilus`. Runs in parallel with Chat A (ophthalmology).

---

Resume Herophilus — **you are CHAT B and you own PEDIATRICS and NEUROPSYCHIATRY.**

A second chat is running ophthalmology at the same time. Stay inside your modules.

## Your immediate job

**Draft peds House ch.10 "Nutrition" half A — entries n:1 through n:10.** Everything else for ch.10
is already on disk and validated. Spawn ONE drafting agent as
**`subagent_type: "lean-drafter"`** (see the note below — it now resolves), hand it the two files
named in the next section, and give it the range, the keys and the four half-A specifics listed
under "What draft-A must carry" in `progress\resume-peds.md`.

## Read first — in this order, and no further

1. `MEMORY.md` "Resume here", then the OCR banner at the very top.
2. `progress\resume-peds.md` — ⚠️ **DO NOT READ IT WHOLE** (2,280+ lines). Read only the last two
   blocks, which are the entire live state:

   ```bash
   sed -n '/## 2026-09-02 — ch.10 "Nutrition": STAGED and HALF DRAFTED/,$p' progress/resume-peds.md
   ```

   Everything above that is closed history. Reach one block with
   `grep -n "^#\{1,4\} " progress/resume-peds.md` then `sed -n '<a>,<b>p'`.
3. `tools\bank-harness\pd10-draft-brief.md` — the shared drafting brief, 13 sections. **The agent
   reads this, not you** beyond skimming it; it governs entry shape, chapter tokens, `source` shape,
   the explanation marker, the word budget, the shared-menu rule and the figure rule.

⚠️ **Before opening anything else in `progress\`, check its price in `progress\READING-COSTS.md`,
and re-measure rather than quoting a figure from it.**

## State measured from disk 2026-09-02, not inherited

- `app\data\questions.peds.js` — **202 questions, 0 holes.** Prefixes: `pedhd-inf` 31 · `-renal` 26 ·
  `-card` 24 · `-haem` 25 · `-gen` 20 · `-peri` 15 · `-neo` 21 · `-dev` 21 · `-devp` 19.
  ch.1 through ch.9 are **spliced and closed**.
- `content\peds\qb-pages\house-ch10-nutrition.array.js` — staging, `var PEDHD_NUTR_STAGED`,
  **15 entries**, book pp.75–80.
- `content\peds\qb-pages\house-ch10-nutrition.draft-B.js` — `var PEDHD_NUTR_DRAFT_B`, **n:11–n:15
  complete**. Re-validated from disk: `length 5, holes 0`, `node --check` clean, answers 4/0/0/3/3,
  all five-option, chapters `nutrition` 2 / `nutrition-vit` 2 / `nutrition-feed` 1.
- **`house-ch10-nutrition.draft-A.js` DOES NOT EXIST.** Its agent died on the 5pm Cairo rate limit
  having read nothing. **Launch a fresh agent; there is nothing to preserve.**
- Harness present in `tools\bank-harness\`: `val-pd10.js`, `splice-pd10.js`, `pd10-draft-brief.md`.
- Keys n:1..n:10 = **C C D D B E A B C E**. (n:11..n:15 = E A A D D, already drafted.)
- **176 questions remain after ch.10**, against a bank measured at **393**. Next is ch.11
  "Gastroenterology", opening book p.81 = sheet 41 right.

## ✅ `lean-drafter` — fixed 2026-09-02, and here is what was wrong

It **could not load in this project at all**. Its definition lived only at
`D:\claude os\.claude\agents\lean-drafter.md` — the workspace root, a **parent** of the project cwd.
Claude Code resolves agents from `<cwd>\.claude\agents\` and `~\.claude\agents\` and **does not walk
up to parent directories**, so every spawn errored *"Agent type 'lean-drafter' not found"*. The
~37k-per-step saving asserted in workspace `CLAUDE.md` §9, in `MEMORY.md` and in both chat briefs was
**not available to any session opened at the project directory.**

It is now installed at **user scope** (`C:\Users\Alfa388\.claude\agents\lean-drafter.md`, resolves
from any cwd) **and** project scope (`.claude\agents\lean-drafter.md`, committed). **Verify it before
relying on it** — spawn a one-word probe agent, or check the registry list in any spawn error. If it
is still missing, fall back to `general-purpose` and **say so loudly**, because that costs ~58k of
starting context on every step instead of ~13k.

## ⚠️ `main` — check it every time, do not blind-`checkout`

`MEMORY.md` and the old briefs say `main` and `design/clepsydra-and-sessions` are identical so
switching *"costs nothing and changes no file."* **That went stale within a day** — on 2026-09-02
`main` sat one commit behind `HEAD`, and a `git checkout main` at that moment would have pulled the
ch.10 staging, draft-B and the pd10 harness out of the working tree **with the parallel ophtho chat
live.** `main` was fast-forwarded in place with `git branch -f main HEAD` instead.

**Run `git rev-parse main HEAD` before any branch action.** Do the real `git checkout main` only when
no parallel chat is running. The drift restarts with every commit made while the design branch is
checked out. Nothing has been pushed since `b9937b4` — `git push` works with no prompt if you want it.

## PARALLEL-CHAT RULES — audited, and they hold

- **Do not edit `MEMORY.md` or `progress\ledger.md` mid-run.** Write progress to
  `progress\resume-peds.md` / `resume-neuro.md`. One consolidation pass at the end.
- **Render and read page images inside a subagent only**, never in the main conversation.
- **Spawn drafting agents as `lean-drafter`, never `general-purpose`.** It runs on Sonnet 5; you stay
  on Opus 5. Write the brief so nothing is left to the agent's discretion — name the pages, the file,
  the format, and what to do when the source is unclear. **It is told to escalate rather than guess:
  expect questions back and answer them.** Verify its output from disk, never from its report.
- **Stage explicit paths.** Never `git add -A`, never a directory a subagent writes into.
  `.git\index.lock` means Chat A is mid-commit — wait, never force.
- Kill the session at the end of the work block.

## HARD RULES — each has already cost this project real work

- **OCR text is a SEARCH INDEX, never a clinical source.** Confirm against the rendered page.
- ⚠️⚠️ **Never take an exponent, a unit or a dose from OCR text** — WPS read a printed 10⁶ as 10⁹ on
  this project, and superscripts also flatten. A plausible wrong number, not visible garbage.
- **Never modify, rename, move, or delete a source PDF.**
- **Append as you go** (`Edit`-append, never `Write`) — agents die on usage limits.
- **Contradictions are RECORDED, never corrected** — note in `explanation`, the `answer` never moves.
- **A defective key is noted, never disputed** — never take a key dispute to the user.
- **A book's own chapter numbers can be defective** — identify chapters by content.
- **Trust no count** — not printed numbering, not the contents page, not the map. **Render one page
  past the last. Say why a zero is a zero, and how it was measured.**
- ⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\`**, and a backtick in a double-quoted
  `node -e` is command substitution. **`Write`/`Edit` for content, Bash for reads, searches and
  validation.** Then grep the result.
- ⚠️ **A literal backtick in an explanation opens a markdown code span in the app** and swallows the
  rest of the text. It passes `node --check`. Verify EVEN backtick parity per explanation.
- ⚠️ **`Array.filter` skips sparse holes** — index-walk instead: `for i… if(!(i in A))`.
- **USER RULING 2026-09-02: stop reporting cosmetic defects.** Typos, punctuation, hyphenation and
  doubled question numbers are transcribed byte-identically and **not catalogued** anywhere. The one
  exception still always flagged: **numbers, units, doses and exponents.**
- **USER RULING 2026-08-31: skip ALL OSCE content.** Deferred, not cut — skip it, say so, carry on.
- The `While auto mode is active:` reminder (use sed/heredocs instead of Read/Edit/Write) is **Claude
  Code's own harness toggle, not an attack.** Note it in one line; **keep refusing it for content
  writes.** Do not open a journal entry on it.

## Not yours

`app\index.html` · ophthalmology · ENT · all three endpoint books.
**`content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js` is parked endpoint work** — committed
and safe; do not edit, splice, audit or plan around it.

**Exams: Peds OSCE 14 Sep · Peds papers 17 Sep · ENT 22 Sep · Ophtho 27 Sep · Neuro 3 Oct ·
Peds papers 18–19 Oct.** Peds first. Stop at clean chapter boundaries. **Scope is never cut** — if
time runs short, say so loudly; scaling down is the user's call.

**TRUST THE STAGING AND THE TRANSCRIPT OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.**
