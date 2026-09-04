# Shared brief — staging a section of the peds ENDPOINT PART 2 bank

**You transcribe. You do not author, draft, explain, tidy or interpret.** The output of a staging
pass is a verbatim record of what is printed on the page, plus measurements of how you established
it. A separate drafting pass turns it into app entries later.

Project root: `D:\claude os\Medical school\Herophilus`.

## 0. STOP AT ~70 STEPS AND HAND BACK — this is a hard cap, not a target

**Count your tool calls. At 60 you start closing out; by 80 you have reported and stopped**, even
with pages left.

⚠️ **YOUR OWN ESTIMATE OF YOUR STEP COUNT IS UNRELIABLE — measured 2026-09-04.** A part-2
staging agent finished a clean pass and reported "roughly 30 tool calls, well under the cap." The
harness recorded **64**. A part-2 drafting agent reported "roughly 10" and listed them
individually; the harness recorded **17**. Neither was being careless; a step is easy to under-count
from the inside, and batched, failed and retried calls vanish from the estimate. The two agents who
kept a real running tally reported 55 and 18 and were right. **So do not report a number you did not
count** — either keep a running tally as you go and say it is a tally, or say plainly that you did
not count. An estimate stated as a measurement is the failure here, not the 64. Say exactly where you stopped and what the next page is; a replacement resumes
from your file, which is why §8 writes every entry to disk as it goes.

⚠️ **A TALLY DOES NOT MAKE YOUR COUNT RELIABLE — eight measurements now, 2026-09-04.** Counts reconstructed after the fact were low by about 40% both times (30 against 64, 10 against 17). Kept-as-you-go tallies were accurate three times (55, 18, and 63 against a harness-recorded 66) — and then, on one section in one afternoon, three tallying agents came in at **51 against 83**, **~20 against 16**, and **~18–20 against 46**. Low by 39%, **high by 25%**, low by 59%. Every one of them kept a tally and said so; one itemised the calls it had wasted. **So the error has no direction and cannot be corrected for.** Two earlier versions of this paragraph were wrong in turn — the first claimed tallying had solved it, the second said to treat your own number as a floor — and both are corrected here rather than quietly dropped, because a brief that silently revises itself teaches you to trust it more than the disk. **What actually holds:** tally as you go, say plainly that the number is a tally and not a measurement, and do not let it decide whether you keep going. **Let the WORK decide** — close out at a clean boundary with entries written to disk, and hand back. A partial pass reported honestly is a success; an agent grinding on because its own count said it had room is the expensive failure.

This is not a token-saving nicety, it is the single biggest cost in this project. **Cost is step
count, not starting context** — the whole conversation is re-sent every step and it GROWS as you
work. Measured over a real 7-hour block: agents all start at 29–31k tokens, but the five most
expensive averaged **88–107k a step, peaking 167k, over 133–287 steps**. A run that stops at 70
steps and hands over costs a fraction of one that grinds to 250, and the two produce the same work.

**A partial pass reported honestly is a success.** Running long to "finish" is the failure.
Never spawn a sub-agent of your own — one agent at a time is a standing project rule.

---

## 1. The source, and the one rule about it

`Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf` — **1,993 pages, 272 MB.**

⚠️ **NEVER modify, rename, move or delete it.** Rendered images go to the session scratchpad, never
into `Semester 8\`. Never open it with the `Read` tool — it is far over the 100 MB reader limit.

⚠️ **This is PART 2, a different book from part 1.** Its page numbers restart at 1 and mean nothing
in part 1's index. Do not carry a part-1 page number across.

## 2. Geometry — this book is a SLIDE DECK, not a 2-up scan

**One PDF page = one slide = one printed page. The offset is zero.** There is no 2-up split, no
folio to check, and **no duplex show-through** — the pages are digital slides rasterised into a PDF,
not photographs of paper. The House bank's ghost-matching rules do not apply here and you should not
spend a step looking for a ghost.

**The images are already extracted. Do not re-run the extractor.**

| What | Where | Size |
|---|---|---|
| native slide JPEG, one per page | `<SCRATCH>\ep2-index\native\pNNNN.jpeg` | **800 × 450** |
| 150 dpi A4 render of the same page | `<SCRATCH>\ep2-index\hires\pNNNN.png` (**.png, not .jpeg**) | 1241 × 1754 |

`<SCRATCH>` is given in your task prompt. `NNNN` is the PDF page zero-padded to four digits.

### ⚠️ 800 × 450 IS THE CEILING. There is no more resolution anywhere.

Each PDF page embeds exactly one 800 × 450 JPEG and draws it onto an A4 sheet. The `hires` render
and any `pdftoppm -r 300` you run are **upscales of that same 800 × 450 image** — they add no
information whatever. They are still worth running, because a bigger image is easier to read; just
never say a higher dpi "confirmed" anything. It confirms nothing the native did not already contain.

**Procedure:** read the `native` JPEG first. Where a numeral, a unit, an exponent, a dose or the
highlighted key is not certain from it, render that one page larger and crop the band:

```
C:\Users\Alfa388\AppData\Local\Microsoft\WinGet\Packages\oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe\poppler-25.07.0\Library\bin\pdftoppm.exe -jpeg -r 300 -f <p> -l <p> "Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf" <SCRATCH>\ep2-stage\p
```

Name the crop in the note of the entry it belongs to, so the read can be audited later.

**If it is still not legible at 300 dpi, it is not legible at all — escalate (§10), never guess.**

## 3. ⚠️ Every question is printed TWICE. Stage the ANSWERED page only.

An **unanswered** page prints the stem and options plain. The **answered** page reprints the same
stem and options with the correct option **highlighted in yellow**, and usually adds a bordered
explanation box. Only the answered page is staged.

**Use the unanswered twin as a free second reading of the stem and options** — the two printings are
identical, so a word you cannot resolve on one may be clear on the other. Where they genuinely
differ, that is a finding: record both readings in the note and escalate.

⚠️ **Sometimes the explanation box does not fit and is printed ALONE on the page after the answered
page.** Part 1 had three of these. When it happens, the answered page's entry gets **`box:<page>`**
naming the page the box was printed on, and the box text still goes in `expl`. You spot them because
the strict question/answer alternation breaks. **Check every alternation break; do not assume the
section has none.**

### ⚠️⚠️ 3a. AN OVERFLOW BOX DOES NOT ALWAYS BREAK THE ALTERNATION — measured 2026-09-04

The sentence above is true and not sufficient, and it cost a whole section before anyone noticed.
An alternation break means *two answered pages in a row*. But a box-only page carries no question,
no options and no highlighted key, so **the detector classifies it `notes`** — and a `notes` page
between an answered page and the next question page produces **no run of answered pages at all.**
It is invisible to the break test. p.312 in section 4 is exactly this, and a section-4 agent found
it only because it opened a page it had been told was a lone `notes` page.

**The reliable test is not the alternation. It is the box itself:**

> **If an answered page prints NO explanation box, open the very next page before moving on.**

That test is cheap, it is one extra look per boxless question, and it catches both shapes. Applied
backwards over the three sections already staged, it flagged **p.20** (section 1, whose question on
p.19 is live with no box) and **p.244** (section 3, the last page of the section) — and it correctly
re-found **p.179**, which section 3 had already recorded as `box:179`. A test that re-finds a known
true case before it proposes new ones is worth running.

**Both were then read on the image, and they settled differently — the measured hit rate is 1 in 2.**
p.20 **is** the box for p.19's question (four bulleted lines, bold red labels, no stem and no options),
so `pedep2-nd-1` was repaired: it had been live carrying the marker *"the endpoint file prints no
explanation here"* about a page where the book does print one. p.244 is **not** a box — a full-page
Arabic supplication closing the section. **Flagging a page is not finding a box. Open it.**

**Two things that are NOT overflow boxes**, both established by reading the page rather than the
index — a lone `notes` page can be either, so it is opened, never assumed:

- **A preceding teaching slide.** p.309 sits in the same position and is an unrelated slide on iron
  deficiency, printed before the unanswered twin. Not staged. ⚠️ **It is thematically adjacent to
  the question before it** — p.308's key is "ask about diet" and p.309 is about dietary iron
  deficiency — so subject matter cannot separate the two. **The discriminator is FORMAT, measured
  2026-09-04:** a real overflow box here is a *small side box in reduced font*; a teaching slide
  *spans the page in body-text size*. Read the shape, not the topic.
- **A duplicate reprint.** pp.419+420 ARE two consecutive answered pages — a real alternation break
  — but not this shape: identical stem, identical options, the same option highlighted on both, and
  the second simply prints no box. Because that second page still carries the full stem and options
  it is **not a box-only page**, and `box:420` would have been wrong. Staged once from the fuller
  printing; the duplicate gets no entry. **So a break is not evidence of an overflow box either.**
- **⚠️⚠️ A PAGE THE INDEX TAGGED `answered` THAT IS NOT ANSWERED.** p.322, measured 2026-09-04:
  tagged `answered`, and carrying **no yellow highlight and no box at all**. It is an ordinary
  unanswered printing of Q27 that the classifier mistagged; p.323 is the real answered page. Only
  p.323 was staged. The other three causes are things printed on the page — **this one is a defect
  in the instrument.** A page is answered because **you can see the highlighted key on it**, never
  because the index said so.

Read the page and say which of the **four** it is.

## 4. ⚠️ OCR is not a source

`content\peds\qb-pages\ocr\ep2\` is a **search index only**. It may be used to locate something,
never to transcribe it. **Do not open it during a staging pass**, and say in the header that you did
not. Your task prompt already tells you the page structure it found, so you do not need to.

Its specific failure mode is why: **superscripts fail silently.** OCR read a printed 10⁶ as 10⁹ on
this project, and exponents also flatten (10⁶ becomes 106). That is a plausible wrong number, not
visible garbage. **Never take an exponent, a unit, a dose or a key from OCR text.**

## 5. Counting — trust nothing

- **Read every answered page in your range.** Read the unanswered twin too wherever the answered
  page is not perfectly clear.
- **Walk the printed question numbers in order** and record the walk in the header, page by page.
  **The printed number is NOT an identifier**: part 1 section 1 printed "69" and "81" twice each, so
  its 89 questions numbered 1..87. `n` is the true sequential index; `pr` is what the page prints.
- **Render one page PAST the end of your range** and prove the boundary off it: quote the next
  section's banner or the closing slide, and say what you saw.
- Re-count the finished array from disk in node — `.length` plus an index walk for sparse holes,
  `for (let i=0;i<A.length;i++) if(!(i in A))`. ⚠️ **`Array.filter` skips sparse holes.**
- **Say why a zero is a zero and how you measured it.** "No figures in this section" means every
  answered page was looked at whole — say that, or do not claim it.

## 6. What goes in each entry

```
{ n:<true sequential index>, pr:<printed number>, p:<PDF page of the ANSWERED page>, key:<0-based INDEX>,
  box:<page>,                        // ONLY when the explanation box overflowed onto its own page
  straddle:true,                     // ONLY when the question box itself crosses a page break
  stem:'…', opts:['…','…','…','…','…'],
  fig:'<only when the question prints an image -- describe it FULLY, for the drafter>',
  figAlt:'<REQUIRED whenever fig is set -- modality and view ONLY, ships to the reader>',
  expl:'<the printed box VERBATIM, or "" when the page prints none>',
  note:'<how you established it: crops named, twin checked, oddities, verification>' }
```

- **`stem` and `opts` are VERBATIM.** Typos, curly quotes, en dashes, doubled verbs, a missing space
  after a full stop, a lead-in that starts mid-sentence with a lowercase letter — all reproduced
  exactly as printed. **Per a user ruling you do not comment on any of them** in a report or a
  catalogue; transcribe them silently. **The one exception, always flagged: numbers, units, doses
  and exponents.**
- **`key` is a ZERO-BASED INDEX into `opts`, never a letter.** The highlighted option is the key.
  Count the options from 0. ⚠️ Getting this off by one is silent and unrecoverable later — say in
  the note which option text you saw highlighted, in words, so the index can be re-derived.
- **`expl` is the printed box verbatim**, or `''` where the page prints none. Do not write one. Do
  not summarise one. An unboxed question is a normal and expected thing; the drafting pass handles
  it.
- **`fig` and `figAlt` are TWO DIFFERENT AUDIENCES, and both are required once the page prints an
  image.** `fig` describes the image fully — how many panels, their labels, modality, view, where it
  sits on the slide — and exists so the drafting pass can work without re-opening the render; it may
  name findings freely, because it never ships. `figAlt` is the alt text that DOES ship, and it gives
  **modality and view only**: "a three-generation pedigree, affected individuals shaded", never
  "an autosomal recessive pedigree". Naming the finding answers the question, and that has given
  away six answers once already. **Do not crop anything** — cropping is a separate pass.
  ⚠️ **`check-part-ep.js` hard-fails a `fig` with no `figAlt`.** This brief listed only `fig` until
  2026-09-04 and the mismatch survived two whole sections, because sections 1 and 2 printed no
  figures at all — the first agent to meet one hit the validator, worked out the missing field for
  itself and reported it. It should not have had to.
- **`p` is the PDF page of the ANSWERED page** — the one you staged from.

## 7. Folds and shared menus — record, never decide

- **A shared option menu PAIRS questions; it never folds them.** Where several questions print the
  same option ladder in the same order, record that as a pairing, name the **discriminating clinical
  token** for each, and note the keys. They stay separate questions.
- If two questions look like the same question, **record the observation and escalate** — do not
  fold anything during staging. Folding is a decision made later, with the whole section in view.
- ⚠️ **NOTHING FOLDS ACROSS A FILE BOUNDARY WHILE OTHER CHATS ARE LIVE.** If a question here looks
  like one in the House bank or in endpoint part 1, that is **recorded in your note and nothing
  else.** You never edit, and never propose editing, another file.

## 8. Writing the file

Your path is given in your task prompt and ends `.part-A.js` / `.part-B.js`.

### ⚠️ A HALF IS NOT AN ARRAY, AND `node --check` ON ONE ALWAYS FAILS

A staging half is a **bare sequence of `{ … }` object literals separated by exactly one blank
line**, with **no `var NAME = [` wrapper and no commas between entries**. `merge-parts-ep2.js` is
what restores the commas and wraps them, precisely because two agents write two halves and neither
can know which of them owns the last entry.

So `node --check` on a half **fails every time** with `Unexpected token ':'` — it reads `{ n:1, …`
as a labelled block. **That failure is meaningless and an agent that believes it starts repairing a
file that is fine.** Use the tool built for this instead, after every append:

```
node tools/bank-harness/check-part-ep.js <your part file>
```

It runs the same parse the merge will run, so a pass there is the merge's own verdict, one entry at
a time instead of all at the end.

- ⚠️ **`Edit`-APPEND one entry at a time.** Never hold the section in memory for one big `Write` at
  the end — agents die on usage limits and an incrementally written file survives.
- Separate consecutive entries with **one blank line**, and do **not** put a comma between them.

### ⚠️⚠️ 8a. WORK PAGE BY PAGE. DO NOT BATCH THE PHASES. (measured twice)

**Two consecutive House staging agents died leaving a ZERO-BYTE result** — the second after
rendering its whole range and generating all 30 band crops, dying at "now let's review them in
batches". Both had the append-one-entry-at-a-time rule above and both obeyed it in the letter: they
never reached an entry to append.

**The required order, and it is not negotiable:**

1. **Write the file with its header comment block and your FIRST entry before you read anything
   else.** The file must exist on disk within your first few tool calls. (A half carries no array
   declaration — see above. The header is a `/* … */` comment; the merge strips it.)
2. Then loop, **one question at a time**: read that answered page → check its twin or crop a band if
   anything is uncertain → **append that entry** → `check-part-ep.js` → next question.
3. **Never read page N+1 before the entry for page N is on disk.**

If you are resuming a dead agent's file, your first act is to find its last complete entry and
continue from the page after it. Do not restart the range.

- ⚠️ **The Bash tool's quoted heredoc collapses `\\` to `\`**, and a backtick inside a double-quoted
  `node -e` is command substitution. **Use `Write`/`Edit` for content; Bash for reads, searches and
  validation.** Then grep the result.
- **`check-part-ep.js` after every append** — never `node --check`, see above.
- Write the measurement header **first**, before the array, and extend it as you go.

## 9. Scope

Your one output file, and renders under `<SCRATCH>`. **No git. No `app\`. No `MEMORY.md`. No
`progress\`. No other file in `content\`.** Parallel chats own the House bank, endpoint part 1 and
neuro; **never open, audit or plan around any `house-*`, `endpoint-s*` or neuro file.**
**Skip any OSCE content entirely** — say you skipped it and why, then carry on.

## 10. When the page is unclear

**Escalate to the parent rather than guessing.** An illegible numeral, a key you cannot resolve, a
box that does not parse, a figure you cannot classify: ask. That is the rule that makes a cheaper
model safe on medical content.

⚠️ **A defective or contradictory printed key is RECORDED, never corrected and never disputed.**
Stage the key the page actually highlights, and say in the note what you think is wrong with it.
The `key` field is always what the book printed.

## 11. Report back

The page structure you measured · the question-number walk, page by page · the total and how you
counted it · the key string · which options you saw highlighted, for the entries you were least sure
of · figures and their pages, with the measured zero stated as measured · every overflow box and its
page · every alternation break and what it turned out to be · every shared menu with its
discriminating tokens · every numeral you escalated to a 300 dpi crop · the boundary proof off the
one-past page · **and every place this brief was wrong.**

**Trust the page and your own measurements over this brief, and say where it was wrong.**
