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
3. **`node <scratch>\oph\stagecheck.js «slug»` — run this BEFORE the splice.** It compares the draft
   against its own verbatim staging record on **option order, option text, the printed key letter
   against the zero-based index, and coverage both ways.** `answer` is an INDEX into `options`, so a
   reordered option list silently re-keys the question to a different answer, and nothing downstream
   would ever notice. Its only expected complaints are the folded entries.
4. `node <scratch>\oph\splice.js "<banner>" «slug».draft.js` — five guards, rolls back on any fault.
5. `node <scratch>\oph\validate.js` — 0 BAD, 0 dead ids, 0 holes, and the **marker delta must equal
   `new entries − boxed`**.
6. Boot from `file://` and record the probe. Then the ledger, then `MEMORY.md`.

---

## What the first five batches taught — fold these into the next brief

**⚠️ THE CONTENTS COUNT IS RELIABLE ON THIS BANK AND THE "Page As" FIGURE IS NOT.** Seven exact
counts running (71, 41, 26, 26, 65, 52, 8) against ENT's Grade Gain being wrong 17 times in 21.
The "Page As" figure has failed **three different ways**: answers starting on a later page (t2, t3),
answers **spilling across three pages** while starting exactly where stated (t6 — *correct as a
start, silent as a span*), and being simply correct (t4, t7, t8). **Render past the LAST answer page,
not just past the first — and give the agent that range, because on t6 my range was one page short
and it cost eleven keys and four boxes until the agent rendered p.43 itself.**

**⚠️ DEFECT 2 HAS NOW FIRED THREE TIMES: a question tail in the LEFT column of the first answer
page** (t3's Q138, t8's Q348, t6's Q286–288). On t6 that was three of the sixty-five. **Say "read
both columns of every page including the first answer page" in every brief.**

**⚠️ NUMBERING: READ IT, NEVER COMPUTE IT.** I briefed topic 7 as opening at Q165 by reasoning from
topic 4's last number and forgot that topics 5 and 6 intervene. Give the agent the *previous topic's
last printed number* if you know it, and tell it to confirm from the banner.

**⚠️ QUOTE `modules.js` CHAPTER TITLES, DO NOT PARAPHRASE THEM.** I described `op-cornea-surg` as
"transplantation, refractive surgery, CXL"; it is titled *"Cornea — **ectasia**, grafts and
refractive surgery"*, so keratoconus belongs there and eight questions nearly went to the wrong
chapter.

**⚠️ A DECK'S `NOT COVERED` LIST IS SCOPED TO THAT DECK, AND IT ALSO MATCHES ITSELF.** Two separate
faults: a brief quoted `L9`'s list as module-wide and manufactured an absence (the Schirmer test is
in `L15,16) Cornea`), and an agent's grep appeared to demolish a negatives list when every hit was
inside the file's own NOT COVERED block. **Grep every deck AND every book chapter, case-insensitively,
and open the hit before writing the absence.**

### Figures — the agent describes, the hub cuts

**Tell the agent NOT to cut crops.** It records, in the staging header: the column, the page, pixel
bounds at 400 dpi, what the photograph shows, and whether the stem is answerable without it. Then:

- **Measure the photograph's true ink bounds and pad by 3 px.** The one crop that has shipped was
  cut at the transcriber's stated coordinates and **included the printed option line "A. Viral"**
  where the app renders a caption — asserting an answer, and not the keyed one. **Fifteen of fifteen
  first attempts have been wrong in this project. LOOK at every finished crop.**
- **⚠️⚠️ THE INK TEST IS `max(r,g,b) < 225  OR  (max − min) > 30`, AND THE FIRST HALF IS THE ONE THAT
  MATTERS.** A **saturated-pixel scan** — *"is this pixel colourful?"* — is **structurally blind to
  dark desaturated content, and that is what the edge of a clinical photograph is made of**:
  shadowed skin, black pupils, dark hair, grey drapes. Measured on this module: a saturation scan
  put a photograph's left edge at **x 1889** when the true edge is **x 1802**; the strip between
  samples `(130,130,130)` and `(93,94,88)` — max minus min of **6** — and reads as blank paper.
  **Seven per cent of the picture was being discarded, and the same blindness clips whichever edge
  happens to be shadowed.** Tool: `<scratch>\oph\bounds.js <page.png> x1 y1 x2 y2`.
- **⚠️ THE ASPECT RATIO IS THE CHEAP CHECK — WITH A MEASURED NOISE FLOOR AND A KNOWN BLIND SPOT.**
  A shipped crop is 560 px wide, so its ratio should match the photograph's true ratio on the page.
  On the crop that failed, the ship ratio was **2.90:1** against a true **3.04:1** — a **3.5 %**
  delta, and the ratio alone was the evidence.
  · **The noise floor is ~1 %, and it was measured, not guessed:** `q-op-gg-254` and `q-op-gg-257`
    are the SAME photograph reprinted on facing pages and scanned separately, and their true ratios
    differ by **1.07 %** from each other. **Under ~1 % is not a clip on this book.**
  · **⚠️ A SYMMETRIC CLIP PRESERVES THE RATIO EXACTLY**, so the ratio can never be the only test.
    Back it with a pixel diff: cut the true bounds, scale to the shipped size, and compare. Seven
    clean crops scored **5.7–8.2** mean absolute difference per channel; deliberately clipping 60 px
    off one edge took the same metric to **15.49**.
- **⚠️ ZERO WHITE MARGIN ON ALL FOUR SIDES IS A WARNING, NOT A COMPLIMENT.** It is the signature of a
  crop sitting *inside* the photograph on every edge. A correct cut with a 3 px pad still shows a
  hairline of paper after downscaling.
- **⚠️ DO NOT BOUND FROM A DOWNSCALED PAGE.** Reading a page at 4× reduction placed one photograph's
  right edge at x ~2992 when it is **x 3104** — dark content washes out when downscaled, which is
  the *same* failure mode as the saturation scan. **Bound at full resolution, always.**
- **⚠️ A STRICTER FILL THRESHOLD IS ITSELF A FALSE-FAILURE GENERATOR.** Using 90 %-solid row and
  column runs instead of tight ink bounds reported a correct crop as 1.7 % clipped, because
  strict-fill trims soft photo edges asymmetrically. **Tight ink bounds is the contract.**
- ✅ **All seven crops shipped before this rule existed were audited and are CLEAN** — proved by
  re-running the broken test and showing the shipped ratios track the CORRECTED bounds, not the
  broken ones. On `q-op-gg-288` the saturation test would have discarded **67 %** of the picture,
  including the lesion the question asks about, and the shipped crop has it.
- **⚠️ `image` STORES THE BASENAME WITH NO EXTENSION** — `qImgSrc()` appends `.jpg`.
- **⚠️ `imgAlt` IS MODALITY AND VIEW ONLY.** Where the stem asks *what causes the sign shown*, the
  sign itself must not be named — calling the cornea hazy hands over half the inference. The
  shipped register: *"Clinical photograph, close-up frontal view of a single eye with the lids held
  apart."*
- **⚠️ POWERSHELL VARIABLE NAMES ARE CASE-INSENSITIVE.** `$W = 560` overwrote `$w = 904` and squashed
  a crop's aspect ratio. Use `$outW`/`$srcW`.

### Folds — a fold is never just a deletion

Three consequences can follow, and ENT recorded faults from missing each:
**the held entry may be ENRICHED** by the folded printing's box · **an authored entry may become
SOURCED, so its marker must come off** · **`source` must name both printings.** All three fired on
`opqb-t8-327` → `opqb-t2-77`.
**⚠️ The marker string occurs 151× in the file**, so it cannot anchor an edit alone — span the
entry's own closing sentence through it. **⚠️ And grep the drafted block for the folded id first:**
one t8 entry and four t6 entries cited theirs mid-sentence as evidence, and the claim had to survive
the id's removal, not just lose it.
