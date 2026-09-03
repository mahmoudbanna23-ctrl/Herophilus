# Shared brief — staging a chapter of the peds House bank

**You transcribe. You do not author, draft, explain, tidy or interpret.** The output of a staging
pass is a verbatim record of what is printed on the page, plus measurements of how you established
it. A separate drafting pass turns it into app entries later.

Project root: `D:\claude os\Medical school\Herophilus`.

## 0. STOP AT ~70 STEPS AND HAND BACK — this is a hard cap, not a target

**Count your tool calls. At 60 you start closing out; by 80 you have reported and stopped**, even
with pages left. Say exactly where you stopped and what the next page is; a replacement resumes
from your file, which is why §10a writes every entry to disk as it goes.

This is not a token-saving nicety, it is the single biggest cost in this project. **Cost is step
count, not starting context** — the whole conversation is re-sent every step and it GROWS as you
work. Measured over a real 7-hour block: agents all start at 29–31k tokens, but the five most
expensive averaged **88–107k a step, peaking 167k, over 133–287 steps**. A run that stops at 70
steps and hands over costs a fraction of one that grinds to 250, and the two produce the same work.

**A partial pass reported honestly is a success.** Running long to "finish" is the failure.
Never spawn a sub-agent of your own — one agent at a time is a standing project rule.

---

## 1. The source, and the one rule about it

`Semester 8\Pedo\Questions\pediatric .pdf` — 80.4 MB. **Note the space in the filename.**

⚠️ **NEVER modify, rename, move or delete it.** Rendered images go to the session scratchpad, never
into `Semester 8\`. Never open it with the `Read` tool — it is far over the 100 MB reader limit and
would fail anyway.

## 2. Geometry — 2-up, and the folio is the proof

The scan is **2-up**: one PDF sheet carries two book pages side by side.

**PDF sheet N = book page 2N-2 on the LEFT, book page 2N-1 on the RIGHT.**

⚠️ **This mapping is a prediction, not a fact.** Confirm it by reading the **printed folio at the
foot of every half you render**, and record the sheet→page table you actually measured. It has held
on every peds House chapter so far; say so explicitly if it holds, and stop and escalate if it does
not.

## 3. Render recipe

Poppler is off PATH:

```
C:\Users\Alfa388\AppData\Local\Microsoft\WinGet\Packages\oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe\poppler-25.07.0\Library\bin\pdftoppm.exe
```

**Two passes, and the second is not optional.**

**Pass 1 — the whole page, for prose.** Render the sheet at 300 dpi, then split it into left and
right halves (each about 1754 x 2480 px). The reader shows those at roughly 1415 x 2000 — **legible
for prose, and NOT good enough to swear to a numeral.**

**Pass 2 — band crops at 600 dpi, for every number.** Re-render every weight, dose, volume, age,
centile, z-score, unit and **every answer-key letter** as a `-x/-y/-W/-H` band crop **no wider than
about 1150 px**, which the reader shows 1:1. **Nothing numeric may come from the 300 dpi half.**
Name the crop in the note of the entry it belongs to, so the read can be audited later.

If a band clips a digit at the image edge, **re-render the band shifted** — never guess the digit,
and say in the note that it took a second render.

## 4. ⚠️ OCR is not a source

`content\peds\qb-pages\ocr\` is a **search index only**. It may be used to locate something, never
to transcribe it. **Do not open it during a staging pass**, and say in the header that you did not.

Its specific failure mode is why: **superscripts fail silently.** WPS read a printed 10⁶ as 10⁹ on
this project, and exponents also flatten (10⁶ becomes 106). That is a plausible wrong number, not
visible garbage. **Never take an exponent, a unit or a dose from OCR text.**

## 5. ⚠️⚠️ Duplex show-through — the trap that nearly invented a question

The paper is thin and the reverse side ghosts through. **The ghost is mirrored text that reads like
real content.** In ch.9 it nearly produced a transcribed question that does not exist.

The proven pairing for this scan, continuing the physical leaf structure:

- **LEFT half of an odd sheet ↔ RIGHT half of the next sheet** — three book pages away.
- **RIGHT half of an odd sheet ↔ LEFT half of the next sheet** — one book page away.

Measured and proven on sheets 38–41: 39L↔40R, 39R↔40L, 41L↔42R. In book pages, p.80's ghost is
**p.83**, three pages away — never simply the page opposite.

**Treat the pairing above as a prediction for any new sheet range.** Where a faint passage matters,
render its predicted partner and **match the ghost word for word** before writing anything down or
discarding it. Say in the header which ghosts you matched and to what.

**Nothing may ever be transcribed from a ghost.**

## 6. Counting — trust nothing

- **Read every page in the range, top folio to bottom folio.** No page is skipped as "an answer
  page": in this bank the answer line lives inside the question box and there are no separate
  answer pages.
- **Walk the printed question numbers in order across the halves** and record the walk in the
  header, page by page. Note any repeat or skip. (ch.9 printed "18." twice and never printed 19.)
- **A book's own chapter numbers can be defective** — identify a chapter by content and by its
  banner, never by a printed chapter number.
- **Render one page PAST the last one**, and prove the boundary off it: quote the next chapter's
  banner and the opening words of its first question, and note that its numbering restarts at 1.
- Re-count the finished array from disk in node — `.length` plus an index walk for sparse holes,
  `for (let i=0;i<A.length;i++) if(!(i in A))`. ⚠️ **`Array.filter` skips sparse holes.**
- **Say why a zero is a zero and how you measured it.** "No figures on these pages" means each page
  was rendered as its own half and examined whole — say that, or do not claim it.

## 7. What goes in each entry

```
{ n:<printed question number>, p:'<book page the NUMBER is printed on>', boiler:<true|false>,
  straddle:true,                      // ONLY on entries that actually straddle; omit otherwise
  stem:'…', opts:['…','…','…','…','…'], key:'<bare letter>',
  fig:'<only when the question prints an image>',
  note:'<how you established it: crops named, straddles, oddities, verification>' }
```

- **`stem` and `opts` are VERBATIM.** Typos, curly quotes, en dashes, doubled verbs, a real ½ glyph
  — all reproduced exactly as printed. **Per a user ruling of 2026-09-02 you do not comment on any
  of them** in a report or a catalogue; transcribe them silently. **The one exception, always
  flagged: numbers, units, doses and exponents.**
- **`boiler`** is the line "Select one answer only." printed on its own line between the lead-in and
  option A. **Inspect every single box for it — never assume a block.** It is flagged here and kept
  **out of the stem**. Record the bit string across the whole chapter.
- **`key`** is the bare printed letter. ⚠️ In this bank the key prints as a **bare letter with no
  option name** ("Answer: C."). The letter-vs-name cross-check that catches a mis-keyed
  transcription is therefore **unavailable, and must never be reported as having passed** — say it
  was not possible.
- **`fig`** describes the image fully: how many panels, their labels, modality, view, where they sit
  in the box. **Do not crop anything** — cropping is a separate pass. Note that the drafting pass
  must give `imgAlt` **modality and view only**, because naming the finding answers the question.
- **`p` is the page the question NUMBER is printed on**, even when the question straddles a break.

## 8. Straddles

A question whose box crosses a page break is filed on the page its **number** is printed on, and its
note says **exactly what crossed** — usually the answer line printed alone at the top of the next
page. Record every one.

⚠️ **Mark a straddle in TWO places, and the validator checks that they agree:**

1. the field **`straddle:true`** on the entry — present only on entries that really straddle, omitted
   entirely otherwise (never `straddle:false`);
2. the phrase **`⚠️ STRADDLES THE PAGE BREAK p.<a> -> p.<b>`** in uppercase at the head of the note,
   followed by what crossed.

**Why both:** the note is prose, and prose can be negated. Deriving straddles by grepping notes for
"straddle" returned **14** on ch.11 where there are **6**, because it also matched "no straddle" and
"wrongly flagged this one as a straddle". A boolean field cannot be negated; the uppercase marker
catches a field you forgot. **A row carrying one without the other is a hard validator failure.**

Where a re-read shows a question does **not** straddle after all, say so in its note in those words
and leave the field off. That correction is worth recording — ch.11's n:5 was miscounted as a
straddle mid-pass and caught by direct re-reading of p.82.

## 9. Folds and shared menus — record, never decide

- **A shared option menu PAIRS questions; it never folds them.** Where several questions print the
  same option ladder in the same order, record that as a pairing, name the **discriminating clinical
  token** for each, and note the keys. They stay separate questions.
- If two questions look like the same question, **record the observation and escalate** — do not
  fold anything during staging. Folding is a decision made later, with the whole chapter in view.

## 10. Writing the file

- Path and variable name are given in your task prompt.
- ⚠️ **`Edit`-APPEND one entry at a time.** Never hold the chapter in memory for one big `Write` at
  the end — agents die on usage limits and an incrementally written file survives. If you die
  mid-chapter, whoever resumes starts from your last complete entry.

### ⚠️⚠️ 10a. WORK PAGE BY PAGE. DO NOT BATCH THE PHASES. (added 2026-09-03, measured twice)

**Two consecutive ch.12 staging agents died leaving a ZERO-BYTE result** — the second after
rendering the whole range and generating all 30 band crops, dying at "now let's review them in
batches". Both had the append-one-entry-at-a-time rule above and both obeyed it in the letter:
they never reached an entry to append. **The rule was not enough, because nothing forbade doing
all the rendering, then all the cropping, then all the reading, and only then the first write.**

**The required order, and it is not negotiable:**

1. **Write the file with its header block and an empty array declaration BEFORE you render
   anything.** The file must exist on disk within your first few tool calls. A later pass can
   extend the header; an absent file is unrecoverable.
2. Then loop, **one book page at a time**: render that page's half → band-crop that page's
   numerals and key letters → read them → **append that page's entries** → `node --check` →
   next page.
3. **Never render page N+1 before the entries of page N are on disk.**

**Rendering ahead is the specific thing that killed both agents.** A render pass you have not
yet written up is worth nothing to whoever resumes; a page you have written up is worth its full
cost even if you die on the next call. Cheap re-renders are fine — the render is ~seconds, the
reading is what costs.

If you are resuming a dead agent's file, your first act is to find its last complete entry and
continue from the page after it. Do not restart the range.
- ⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\`**, and a backtick inside a
  double-quoted `node -e` is command substitution. **Use `Write`/`Edit` for content; Bash for
  reads, searches and validation.** Then grep the result.
- **`node --check` after every append.**
- Write the measurement header **first**, before the array, and extend it as you go.

## 11. Scope

Your one output file. **No git. No `app\`. No `MEMORY.md`. No `progress\`. Nothing under
`content\ophtho\` or `content\neuro\`** — parallel chats own those. **Do not open, audit or plan
around `content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js`**, parked endpoint work under a
user deferral ruling. **Skip any OSCE content entirely** — say you skipped it and why, then carry on.

### 11a. ⚠️ THE PAEDIATRIC SURGERY PART IS ENTIRELY OUT OF SCOPE (user ruling, 2026-09-02)

The back of this PDF is a **Pediatric surgery** section. **It is ignored completely** — not deferred,
not sampled, not counted, not mentioned in a count. Do not render it, do not transcribe it, do not
let it into any total.

**Where it starts, measured:**

| | |
|---|---|
| Last House MCQ page | **book p.148 = PDF sheet 75, LEFT half** — the oncology chapter's Q22 (red reflex in one eye), "Answer. A." |
| Surgery title page | **book p.149 = PDF sheet 75, RIGHT half** — reads "Pediatric surgery / end-of-round MCQs" over a "Question resources used" list |
| Surgery runs to | the end of the file — **PDF sheet 104**, about book p.207 |

**So the House MCQ bank you are staging lives in book pp. ≤ 148 / PDF sheets ≤ 75-LEFT. Nothing
beyond that is ever in range.**

⚠️ **The surgery part is not MCQ-shaped and will not look like the rest of the bank.** It is numbered
short-answer facts — "1. Incidence of esophageal atresia: 1 in 3000–4500 live births", "12. Treatment
of IHPS: Ramstedt's pyloromyotomy" — with no options and no answer letter. Its numbering **restarts
at 1**, so a numbering restart near the back of the book is **not** a new House chapter. Its running
header still prints the word "MCQs" and still prints "HOUSE"; **neither makes it in scope.**

If your render-one-past (§6) lands on p.149 or later, that **is** your boundary proof: quote the
surgery banner, say the chapter ended, and stop. Do not continue into it.

## 12. When the page is unclear

**Escalate to the parent rather than guessing.** An illegible numeral, a key that will not resolve,
a box that does not parse, a figure you cannot classify: ask. That is the rule that makes a cheaper
model safe on medical content.

## 13. Report back

The sheet→page table you measured · the question-number walk, page by page · the total and how you
counted it · the boiler bit string · the key string · figures and their pages, with the measured
zero stated as measured · every straddle · every shared menu with its discriminating tokens · every
numeral you escalated to 600 dpi and every crop that needed a second render · which ghosts you
matched and to what · the boundary proof off the one-past page · **and every place this brief was
wrong.**

**Trust the page and your own measurements over this brief, and say where it was wrong.**
