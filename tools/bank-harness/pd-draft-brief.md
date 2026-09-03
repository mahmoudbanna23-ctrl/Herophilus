# Shared brief — drafting app entries from a peds House staging record

You are writing app entries from an **existing verbatim staging record**. **You transcribe nothing
new and you author no stem, option or key.** Everything printed already exists; your job is the
`explanation`, the `objective`, the `source` line and the chapter assignment.

Project root: `D:\claude os\Medical school\Herophilus`.

**Chapter-specific facts — your range, your file, the staging path and variable, the chapter id
candidates, the shared option menus, the straddles, the figures — are in your own task prompt.**
This brief is the part that does not change between chapters.

## 0. STOP AT ~70 STEPS AND HAND BACK — this is a hard cap, not a target

**Count your tool calls. At 60 you start closing out; by 80 you have reported and stopped**, even
with entries left. Write entries to your file as you go, never in one batch at the end, so a
replacement can resume from disk. Say exactly which `n` you stopped after.

**Cost is step count, not starting context** — the whole conversation is re-sent every step and it
GROWS as you work. Measured over a real 7-hour block: agents all start at 29–31k tokens, but the
five most expensive averaged **88–107k a step, peaking 167k, over 133–287 steps**. Stopping at 70
and handing over costs a fraction of grinding to 250, for the same work. The drafting anchor is
**62 tool uses / ~15.5 min / ~53k** — a normal pass fits inside the cap with room to spare, so
hitting it means something is wrong and a fresh agent will do better than more of your steps.

**A partial pass reported honestly is a success.** Never spawn a sub-agent of your own.

---

## 1. Your file, and the one rule about the other halves

Write **only your own file**. **Never open, read or edit another half's draft** — the halves are
merged by a byte-level splice afterwards, and cross-contamination is exactly the failure mode that
splice cannot detect. If you think you need something from another half, you need it from the
**staging record** instead.

## 2. The staging record is the source of truth for everything printed

**Read its header in full before writing anything.** It carries the measurements — the sheet→page
table, the question-number walk, the boiler bit string, the key string, the straddle list, the figure
count and how the zero was measured, the ghost matching, and the boundary proof.

- ⚠️ **`stem` and `options` must be BYTE-IDENTICAL to the staging entry.** No normalisation, no
  tidying, no re-wrapping. A validator compares them with `JSON.stringify` and will fail you.
  Printed typos, curly quotes, en dashes, doubled words and real glyphs like ½ are reproduced exactly
  — **and per a user ruling of 2026-09-02 you do not comment on any of them.** Copy them silently.
  **The one exception, always flagged: numbers, units, doses and exponents.**
- **`answer` is the INDEX of the staged `key` letter** — `'ABCDE'.indexOf(key)`. **It never moves.**
- **A defective key is noted in `explanation`, never disputed, and never taken to the user.** Where
  the book's key disagrees with the material, record the disagreement in `explanation`, quote what
  the source says, and **leave `answer` exactly as the bank printed it.**
- ⚠️ **In this bank every key prints as a bare letter with no option name** ("Answer: D."). The
  letter-vs-name cross-check that would catch a mis-keyed transcription is therefore **unavailable —
  do not claim it passed.** Say it was not possible.

Load these files with `vm.runInThisContext`. **`require` does not work on them.**

## 3. Entry shape

**Entries open at column 0; fields indent two spaces.** Field set, and nothing else:

`id` · `bank` · `module` · `chapter` · [`image` · `imgAlt` — only where the task prompt says so] ·
`stem` · `options` · `answer` · `explanation` · `objective` · `source`

- `id`: the prefix in your task prompt plus the staged `n`. **Verify the prefix is free before you
  start** — grep it in `app\data\questions.peds.js` and say what you got.
- `bank:'house'` · `module:'pediatrics'`.
- ⚠️ **`boiler`, `straddle`, `fig` and `note` are STAGING fields. They never go into an app entry**,
  and the boiler line ("Select one answer only.") is **never** added to a stem. Do not mention any of
  them in an explanation.

## 4. Chapter assignment — one question at a time

Your task prompt lists the candidate chapter ids, **all pre-verified to resolve in `MODULES`**.

**Assign on what the STEM is about — the presenting problem the question teaches — never as a
block, and never on the answer alone.** A differential-diagnosis question inside a shared option menu
is about its **presenting problem**, so the whole menu group normally lands in one chapter even
though its keys differ. Where a question genuinely straddles two chapters, **assign the primary and
name the secondary inside the entry.**

**Give a one-line reason for every assignment in your report.**

## 5. Grounding — read the material before writing, quote it, cite it

⚠️ **`T_PEDS` is an OBJECT keyed by chapter id, not an array.** `T_PEDS.length` is `undefined` and an
index walk silently returns nothing. Address it as `T_PEDS['<chapter-id>'].sections`.

⚠️⚠️ **THEORY SECTION IDS RUN CONTINUOUSLY ACROSS SIBLING CHAPTERS — a prefix grep returns a FALSE
ZERO.** The section ids do not restart per chapter and are **not** named after it. Your task prompt
gives the measured ranges for your chapters. Confirm them off disk; **cite ids as they exist there**,
and index by position (`sections[i]`) only when you say that is what you are doing.

Lecture caches: `content\peds\lectures\*.txt`. **List the directory and read the real filenames** —
they contain brackets, stray spaces and inconsistent numbering. **Never write a filename, page
number or id from memory.**

## 6. `source` — exact shape

```
pediatric .pdf p.<page> (Part I, ch.<N> Q<n>)
```

The page is the staging entry's `p` — **the page the NUMBER is printed on**, even when the box
crosses a break.

**For a straddling question** (the staging row carries `straddle:true`) the note continues with a
semicolon **inside** the parentheses. Read that entry's staging `note` for exactly what crossed, and
say that specifically. Shape to copy:

```
pediatric .pdf p.64 (Part I, ch.8 Q11; the question straddles the page break, with its answer line printed alone at the top of p.65)
```

⚠️ **The explanation marker NEVER appears in `source`.**

## 7. `explanation` — the marker is not optional, and the budget is real

This bank **prints no explanation boxes**. Every explanation is authored, and every one must end with
this exact line, **as its final line**:

```
Written for this bank — pediatric .pdf prints no explanation here.
```

Explain the key **and every distractor**. Adaptive depth: **~250 words for straight recall, ~520 for
a vignette, a defect, a divergence or a gap-fill.**

⚠️ **ch.8 came in at ~12,900 words for 21 questions and ch.9 at ~9,340 for 19 — both over, both
reported to the user.** ch.10 held the line at ~3,290 for 10 (mean 329) and the thing that did it was
the shared-menu rule below. **Write to the guide. If a specific entry genuinely needs more, exceed it
deliberately and say which one and why in your report** — a decision to surface, not a habit.

### ⚠️ Shared option menus — the single biggest lever on both length and quality

Where several questions print **the same option ladder in the same order**, that is a **pairing**:

- **A shared menu PAIRS questions. It NEVER folds them.** They stay separate entries.
- **Write the comparative table ONCE**, in the lowest-numbered member of the group.
- **Every sibling points at that existing id** and names **only its own discriminating clinical
  token** — the feature that picks its key out of the shared ladder.
- The staging notes name those tokens per entry. **Use them.**

Repeating the table in each sibling is what produced the ch.8 and ch.9 overruns.

### ⚠️ An explanation is addressed to a student, never to me

Nothing in this pipeline reads for voice, so this is on you. **The reader has never seen this brief,
the staging record or the split.** An explanation may not mention any of them.

- **Never these**: *"per the task prompt"*, *"as the brief asks"*, *"one of this range's awkward
  assignments"*, *"in this range"*, *"noted per the prompt"*, *"half B"*, *"the staging record"*.
- **Never `n:<num>`.** That is staging notation. Name a sibling by its **id in backticks** —
  `` `pedhd-gastro-11` `` — which is the convention ch.10 set and the only one a reader can follow.
- The **substance** behind such a phrase is usually right and worth keeping. It is the framing that
  is wrong: *"Flagged as one of this range's awkward assignments, per the task prompt:"* says the
  same thing as *"Why this sits in an abdominal-pain chapter:"* without addressing me.

Five ch.11 explanations shipped this language into the drafts and **all five passed `val-pd.js`
cleanly**, because no instrument was looking. Grep your own file before reporting:

```
/task prompt|this range|the brief|staging record|per the prompt|as instructed|half [ABC]|draft-[ABC]|\bn:[0-9]+/i
```

## 8. Gaps — answered and tagged, never declared

⚠️ **A gap in the material is ANSWERED, not declared** (standing user ruling). Fill it from general
medical knowledge and keep **`not taken from the course material`** as a **short tag on the claim
itself** — never a dead-end sentence, and never an opening that announces the gap before answering
it. **Lead with the answer; the tag rides along on the claim.**

This exact shape was corrected on ch.10 and is worth copying:

> **The relationship between birthweight and adult cardiovascular disease is U-shaped, not linear**
> — *not taken from the course material; none of ch.10's four theory chapters teaches a
> birthweight–cardiovascular-risk relationship at all.*

⚠️ **"Grep the CONCEPT, not the term" has now been paid for four times on this project.** Recorded
misses: `"creatine kinase"` returns zero while the material teaches **plasma CK** in full;
`"cranial US"` returns zero while cranial ultrasound is taught in three chapters; `"Guthrie"` and
`"heel prick"` return zero while Egypt's newborn heel-stick TSH screen is printed in full in
`T_PEDS['endo-thyroid']`. **Before calling anything a gap: grep the concept, grep the abbreviation,
grep the synonyms, and grep the sibling chapters. Then say why the zero is a zero and how you
measured it.**

## 9. Figures, where your chapter has any

Your task prompt says whether any of your entries carries one; **most chapters have none.**

- The app entry holds a **single** `image` basename — `q-pd-hd-<page>`. **Never invent a second image
  field.** Where the box prints two panels, write one basename covering the pair and **say in your
  report that the entry needs a single combined crop**, so the crop pass cuts one image and not two.
- ⚠️ **`imgAlt` states MODALITY AND VIEW ONLY.** Naming the finding answers the question outright —
  this gave away six answers once. **No laterality either**: a crop cannot reliably establish which
  side it is. Shape that passed:
  `Colour close-up photograph of one eye of a young infant, taken from the front.`
- The detailed read of the image belongs in `explanation`, **after** the answer.
- **Write the entry as if the crop already exists.** Do not render, crop or create any image, and
  **do not open the source PDF.**

## 10. ⚠️ Numbers are the clinical risk

Doses, volumes, concentrations, weights, ages, centiles, lab values, blood gases. **The staging
record read every one off the page image at 600 dpi and named the crop in each note — trust it and
reproduce every figure exactly.** Do not tidy a unit, do not convert, do not round, do not harmonise
two options that are printed inconsistently. If a printed figure looks wrong, **say so in the report
and still transcribe it as printed.**

## 11. Traps that have cost real time on this project

- ⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\`**, and a backtick inside a double-quoted
  `node -e` is command substitution. **Never type a literal backslash or backtick in a heredoc** —
  use `Write`/`Edit`, or `String.fromCharCode(92)`. Then grep the result.
- ⚠️ **A heredoc over ~7 KB fails to parse. `Edit`-APPEND one entry at a time**, never one big
  `Write` at the end — agents die on usage limits and an incrementally written file survives.
- ⚠️ **A LITERAL BACKTICK inside an explanation opens a markdown code span in the app and swallows
  the rest of the text.** It passes `node --check`. **Verify an EVEN backtick count in every
  explanation.**
- ⚠️ **`Array.filter` skips sparse holes.** Measure by index walk:
  `for (let i=0;i<A.length;i++) if(!(i in A))`.
- ⚠️ **A run where everything fails identically is a broken probe, not broken data** — three
  instances so far. One read `module.chapters`, which is `undefined`; chapters live at
  `module.groups[].chapters[]` as `[id, title]` pairs. **A zero from a probe you just wrote is a
  claim about the probe first.**
- **`node --check` after every append.**

## 12. Scope

Your one output file. **No git. No `app\`. No `MEMORY.md`. No `progress\`. Nothing under
`content\ophtho\` or `content\neuro\`. Do not touch another draft half.** Do not open, audit or plan
around `content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js` — parked endpoint work under a
user deferral ruling. **Skip any OSCE content entirely.** **The paediatric surgery section at the
back of the PDF (book p.149 onward) is entirely out of scope** and nothing in it is ever cited.
**Do not open a source PDF and do not render any page image.**

## 13. Report back

Entry count **and how you measured it** · per-entry word counts, with any deliberate overrun named
and justified · chapter assignment with a one-line reason each · every outside-knowledge tag and the
grep that established each gap · every divergence between the book and the material, with the key
left unmoved · your backtick-parity check · **and every place this brief was wrong.**

**Trust the staging record and your own measurements over this brief, and tell me where I was wrong.**
