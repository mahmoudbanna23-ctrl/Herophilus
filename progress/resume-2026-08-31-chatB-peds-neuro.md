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
3. `progress\resume-peds.md` **from the 2026-08-31 blocks onward** and `progress\resume-neuro.md`
   **last two blocks**. Everything you need was measured there today; do not re-derive it.
   ⚠️ Large earlier parts of `resume-peds.md` document the peds **ENDPOINT**, which is deferred —
   do not inherit its numbers, page maps, or offsets for the House bank. Different book,
   different structure.

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
