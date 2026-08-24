# Ophthalmology bank brief — the reusable template

**What this is.** The subagent brief for transcribing and drafting ONE topic of ONE ophthalmology
question bank. Written 2026-08-24 when the ophthalmology bank stream reopened at ~1,918 remaining
questions against the 27 September exam. Every paragraph in it is a rule the project has already
paid for once; nothing here is decoration.

**How to use it.** Copy the body below, substitute the `«…»` slots, and launch. The hub renders the
pages first with `qpages.js` and hands the agent the file list — an agent that has to derive its own
page offset will eventually derive it wrong, and the failure is silent.

**⚠️ The last line of the brief is load-bearing.** *"Trust the page images and the files on disk over
this prompt, and tell me where I was wrong."* It has corrected the hub's briefs sixteen times in this
project, including a crop brief that called a CT/MRI composite a barium swallow and a back-reference
aimed at the wrong question. It goes in every brief.

---

## The slots

| Slot | Example |
|---|---|
| `«BANK»` | Grade Gain / House |
| `«FILE»` | `ophthalmology qb.pdf` · `ophthalmology MCQ.pdf` · `Opthalmology endpoint.pdf` |
| `«BANKVAL»` | `gradegain` · `house` · `endpoint` |
| `«TOPIC»` | topic 4 "Lacrimal System" · Part A chapter 2 |
| `«PREFIX»` | `opqb-t4-` · `opmcq-c2-` |
| `«PAGES»` | the rendered file→book-page table, pasted from `qpages.js` output |
| `«PROMISED»` | what the contents page claims, or "unknown — this bank prints no contents page" |
| `«DECKS»` | the lecture caches that ground this topic, by exact filename |
| `«BOOK»` | the matching cache in `content\ophtho\book\`, if one exists |

---

## The three page-defect warnings — Grade Gain

1. **THE "Page As" FIGURE LIES.** Topic 2's entry says answers start p.14; fourteen of its
   forty-one keys are on **p.15**. Topic 3's said 19; eleven of twenty-six keys were on **p.20**.
   **RENDER ONE PAGE PAST THE LAST STATED ANSWER PAGE, EVERY TIME, WITHOUT EXCEPTION** — `qpages.js`
   does it automatically and says so.
2. **A QUESTION TAIL CAN SHARE THE FIRST ANSWER PAGE.** On topic 3, Q138 was printed in the LEFT
   column of the page whose RIGHT column started the answers. Read both columns of every page.
3. **THE PROMISED COUNT IS A PROMISE.** Exact three times running on this bank (71, 41, 26) — a
   pattern, not a guarantee. ENT's Grade Gain was wrong 17 times in 21, always upward. **Count what
   is printed.**

## The page-arithmetic warnings — House

**⚠️ A4 LANDSCAPE, TWO BOOK PAGES PER PDF PAGE**, left = even, right = odd, from PDF p.3 onward.
`PDF page = floor(book page / 2) + 2`; PDF page N carries book pages `2N−4` and `2N−3`. PDF p.1 is
`[book p.1 | the cover]`, PDF p.2 is blank. **A simple "book + k" offset does not exist for this
file — assuming one silently halves your reading.** Each rendered sheet carries two book pages side
by side; read both halves.

**Answers are printed INLINE beneath each question** ("Answer: C"). No pooled answer page and no key
section, so the "Page As lies" defect cannot occur — but neither can a missing key be spotted by a
page count.

**⚠️ QUESTION NUMBERING RESTARTS AT 1 IN EVERY CHAPTER.** Ids must carry a chapter token —
`opmcq-c2-<n>` — or every chapter collides.

---

## The body of the brief

> You are transcribing and drafting **one topic of one ophthalmology question bank** for a medical
> revision app. You do NOT touch any app data file and you do NOT run git — a hub session merges
> your output.
>
> **The topic:** «BANK», «TOPIC», from `Semester 8\Opthalmo\Questions\«FILE»`. «PROMISED»
>
> **Your input: page images, already rendered at 200 dpi.** «PAGES». Cite the **BOOK** page in every
> `source` field, never the PDF page. To render more:
> `node "<scratch>\oph\qpages.js" «BANKVAL» <firstBook> <lastBook> "<out dir>"`
>
> «the matching page-defect block from above»
>
> **Read every page in full before you write anything.**
>
> ### Two outputs, both into `content\ophtho\qb-pages\`
>
> **1. `«slug».array.js` — the VERBATIM staging record. Write this FIRST and completely.**
> Copy `gg-t3.array.js` (same bank, an earlier topic). Header comment: the page map you actually
> used, the defects you hit, the printed count, and the number of printed explanation boxes. Then
> `{ n, p, key:'B', stem, opts:[…], note }` per question — `n` the printed number, `p` the **book**
> page, `key` the printed **letter**. Verbatim means verbatim: keep the source's typos and capitals.
>
> **2. `«slug».draft.js` — the finished entries. Append in blocks of ~6 as you go.**
> A **bare comma-separated run of object literals with no wrapper and no trailing comma** — no
> `var`, no brackets. Copy `house-c1.draft.js`. Fields: `id` (`«PREFIX»<printed number>`), `bank`
> (`'«BANKVAL»'`), `module:'ophtho'`, `chapter`, `stem`, `options`, `answer` (**zero-based index**,
> converted from the printed letter), `explanation`, `objective`, `source`. Read `opqb-t3-116` and
> `opqb-t3-127` in `app\data\questions.ophtho.js` for register, depth and markdown.
>
> **⚠️ WRITE INCREMENTALLY.** Staging complete first, then draft blocks appended. Whatever is on
> disk when you stop must be valid and must say how far you got. A complete draft held in your head
> and never written is worth nothing — this has cost the project real work.
>
> **⚠️ Use the Write and Edit tools, never a bash heredoc.** A heredoc here collapses `\\` to `\`,
> so `\n` in your text becomes a real newline and breaks the file, and it fails outright over ~7 KB.
>
> ### Explanations
> - **A printed box is captured VERBATIM and unmarked**, then your own notes may follow after a
>   `---` rule, introduced as `opqb-t3-116` does.
> - **Where no box is printed**, write from the lecture cache and end `explanation` — never `source`
>   — with exactly: `Written for this bank — «FILE» prints no explanation here.` The marker is
>   audited against `new entries − boxed`; a missing or misplaced one shows up as a fault.
> - **Count the boxes.** Box presence is a property of the PAGE, not the bank: Grade Gain topic 1
>   printed 0 in 71, topic 2 printed 8 in 41, topic 3 printed 4 in 26; House chapter 1 printed 0 in
>   56. State the count in the staging header.
> - **Depth is adaptive.** ~520 words for a vignette, a defect, a divergence or a gap-fill; **~250
>   for straight slide-recall**. Every distractor explained either way. A shared table is written
>   ONCE in the fullest entry; siblings point at that id.
>
> ### Grounding and citation
> - **No clinical fact without a citation** — `` `«deck»` `` plus slide number, and
>   `«FILE» p.<book page>`.
> - **⚠️ LIST `content\ophtho\lectures\` BEFORE CITING A FILENAME.** Citing from memory has been
>   wrong three times here. `L9) lacrimal system..txt` and `L24) Ocular tumors..txt` carry a
>   **double dot**; `L29) Sqint I.txt` is spelled "Sqint" in the source.
> - Your grounding decks are «DECKS». «BOOK». **Read them before drafting**, including each one's
>   closing `NOT COVERED ANYWHERE IN THIS DECK` list — that list is how a gap gets settled by
>   proving a negative instead of guessing.
> - **⚠️ READ THE SLIDE BEFORE DECLARING A GAP** — paid for sixteen times. Grep the shortest stem
>   and the likely misspelling, **case-insensitively**: these decks SHOUT in capitals and a
>   case-sensitive probe has manufactured absences here. **Open the hit before writing the
>   absence.** An absence claim names the specific thing absent, not the topic, and says how it was
>   measured — *"`Schirmer` returns zero across all 27 cached decks"* beats *"not taught"*.
> - **A gap in the material is ANSWERED, NOT DECLARED.** Fill from general medical knowledge and
>   carry `not taken from the course material` as a short tag on the claim itself — never a
>   dead-end sentence. **Prefer another source in the module to outside knowledge.**
>
> ### Defects — recorded, never corrected
> **`answer` is ALWAYS the bank's printed key.** Where the key is defective, key it as printed and
> explain the discrepancy in `explanation`, quoting the source. **Never dispute a key.** Shapes
> already seen on this module: two options describing the same thing (`opqb-t3-127`); an option that
> is also true (`opqb-t3-132`); a question printed with no question sentence at all (Q126); a stem
> that back-references a shuffled deck.
>
> ### Back-references — this bank's densest trap, 10 of 71 on topic 1
> Repair by restating the antecedent inside the stem.
> - **⚠️ READ THE ANTECEDENT — DO NOT ASSUME IT IS THE PREVIOUS NUMBER.** Wrong before.
> - **⚠️ A RECONSTRUCTED STEM MUST NOT ANSWER ITS OWN QUESTION, AND MUST NOT LEAK THE NEXT ONE'S.**
>   One reconstructed ENT stem invented a finding that keyed the following question.
> - Erratic capitalisation inside stems is repaired silently — transcription hygiene, not content.
>
> ### Chapter filing — file by what the QUESTION TESTS, not the organ it names
> Valid ids are in `app\data\modules.js` under `id:'ophtho'` — **read it, use nothing else.** The
> precedent: *"which of these causes a painful red eye"* is `op-red` **even though the answer is
> uveitis**. Where a question sits in two, file the primary and name the secondary in italics as
> `*(Secondary chapter: … — why.)*`.
>
> ### ⚠️ Never backtick an id that does not exist yet
> Backticked ids are checked against the corpus. Reference only ids already in
> `questions.ophtho.js` or ids you are creating in this batch. Caught three times.
>
> ### Boundaries
> Write ONLY those two files. Do not touch `app\data\*` or `progress\*`; do not run git. **Never
> modify, rename, move, or delete anything under `Semester 8\`.** Everything in English.
>
> ### Finally
> **Trust the page images and the files on disk over this prompt, and tell me where I was wrong.**
> If the count differs, if the topic is not what I said, if the offset is off, if the boundary falls
> elsewhere — say so plainly rather than working around it silently.
>
> Final answer, short: printed count vs promised · the page map you actually used · number of
> printed boxes · entries drafted · defects and back-references found · where this brief was wrong.

---

## What the hub does with the output

1. `node <scratch>\oph\sweep.js content\ophtho\qb-pages\«slug».draft.js` — the six-stage sweep
   against the ophthalmology corpus **and against the batch itself**. Read the per-entry E/F top-3
   for every entry, not just the flagged candidates: **a real fold on this module has scored 0.13 at
   F and 0.17 at E.** Neither ranking dominates — `opqb-t1-11`/`-14` is a false positive at F = 1.00
   with E = 0.04, and `opqb-t2-95`/`-112` is its mirror at E = 0.50 with F = 0.00.
2. Decide every fold by hand. **On a cross-bank match ADD THE BANK via `alsoIn` — never a second
   entry.** Options replaced means a new entry. Grep the drafted block for any folded id **before**
   splicing.
3. `node <scratch>\oph\splice.js "<banner>" «slug».draft.js` — five guards, rolls back on any fault.
4. `node <scratch>\oph\validate.js` — 0 BAD, 0 dead ids, 0 holes, and the **marker delta must equal
   `new entries − boxed`**.
5. Boot from `file://` and record the probe. Then the ledger, then `MEMORY.md`.
