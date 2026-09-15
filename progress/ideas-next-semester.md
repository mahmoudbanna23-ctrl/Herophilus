# Ideas parked for after the exams

Not work. Not decisions. Ideas the owner wants kept, to be taken up when the
17 Sep / 3 Oct window is over. **Nothing here is scheduled or approved.**

---

## Lecture-derived practice questions

**Owner's idea, confirmed 2026-09-03** — he had it independently before it came up here, and
wants it for **next semester**, not this one. **This window is printed-bank questions only.**

Write practice questions straight from the lecture transcripts, for topics the printed bank does
not cover. These are **newly authored questions, not bank questions** — a different product from
everything shipped so far, and the difference must stay visible to the student using them.

**Why it is attractive:** it needs no staging. Staging is the vision pass over scanned pages, and
it is the one step that cannot be delegated (`PLAN-sprint-to-17-sep.md` §4). A lecture transcript
is already text, so a drafting agent can work end to end without competing with the work chats
for the printed-bank queue — which is what killed all three earlier attempts to find Codex a
drafting slice (§6, "you cannot schedule a benchmark against a queue the work chats are draining
faster than you can write the brief").

**Verified on disk 2026-09-03** — `content/peds/lectures/` holds 64 transcripts. Seven of the ten
empty pediatrics chapters already have a dedicated lecture:

| Empty chapter | Lecture file |
|---|---|
| `respiratory` / `resp-bronch` | `31).1)Asthma part 1.txt`, `31).2)Asthma part 2.txt`, `Asthma_.txt`, `Asthma  e-book.txt` |
| `resp-pneumonia` | `30) Pneumonia.txt`, `PNEUMONIA.txt` |
| `resp-bronch` | `32)Acute bronchiloitis_.txt` |
| `endo-dka` | `51) DKA.txt` |
| `endo-thyroid` | `52) hypothyrodism.txt` |
| `endocrine` | `diabetes mellitus for under grad_8acf29c9d51bcde47ca89846d49176b2.txt` |
| `infection-immunity` | `25)Immunodeficiency_.txt` |

No dedicated lecture found for `mental` or `liver-hep` (`43)Infantile cholestasis_.txt` is
neonatal cholestasis, not childhood hepatitis). `puberty` is **not** a real gap — 27 questions
sit in its parent chapter `growth-puberty`.

**Open questions to settle before any of this starts:**
- Do lecture-derived questions live in the same chapters as bank questions, or a separate bank
  the student can switch off? Mixing them silently would be wrong.
- Does the §5 medical-verification floor apply unchanged? It was written for questions with a
  printed key to check against; these have none, so "the key never moves" has no anchor.

Empty-chapter evidence: `audit-2026-09-03-silent-defects.md`.

---

## PDF text layer: search and copy are broken inside the book PDFs

**Owner ruling 2026-09-06: the PDF is fine as it is for this semester. Fix scheduled for next
semester's content, not now.**

**The symptom, measured repeatedly this session.** The book is authored as HTML and printed to PDF
by headless Chrome. Every page prints perfectly on paper and on screen. But inside the PDF,
select-and-copy and Ctrl+F both fail on any character outside plain ASCII: they come back as
U+FFFD, the replacement character. A probe extracted the phrase as
"Well and one side [FFFD] Wilms" from a PDF that renders flawlessly.

**The suspected cause, NOT yet tested.** Chrome embeds webfonts loaded at runtime as Type 3 fonts
and writes no ToUnicode map. A Type 3 glyph is a drawing program, not a character, and without the
ToUnicode table nothing tells a reader which character each drawing represents. The book loads
EB Garamond and Cinzel through assets/fonts.js, which is the runtime-webfont path. This diagnosis
matches the evidence but has not been confirmed by experiment.

**Why it matters more from now on.** The A4 lean build (2026-09-06) adopts a fixed glyph vocabulary
to replace words in mechanism chains and tables. Every glyph in it is non-ASCII: the arrow, the up
and down arrows, the greater-or-equal and less-or-equal signs, the tick, the cross, the warning
sign and the multiplication sign. Under the current pipeline all of them print correctly and none
of them is findable by search. That was a minor annoyance when only em dashes were affected; with a
symbol vocabulary in use it becomes structural.

**Three routes, cheapest first.**

1. Do nothing. Printing is unaffected. Search and copy stay broken. Free. This is the standing
   position as of 2026-09-06.
2. Self-host the two typefaces as real font files rather than injecting them at runtime, so Chrome
   embeds them as TrueType with a real character map. Estimated 20 minutes to test. Untested.
   This is the first thing to try when the fix is taken up.
3. Post-process the finished PDF to attach the missing ToUnicode table. Needs a tool that is not
   installed on this machine, so it carries an install gate the owner has to run.

**How to verify any fix.** Render the chapter, then extract its text with PyMuPDF and grep the
output for U+FFFD. Zero occurrences plus a visually unchanged render is the pass condition. A fix
that removes the replacement characters but changes how the page looks has failed.

---

## Revision notebook: the telegraphic build

**Owner's idea, 2026-09-06**, raised while choosing how far to push symbols in the main book. He
picked the medium symbol level for the book and parked the heavy level here.

The main book teaches from cold, so it keeps full sentences wherever a sentence explains better
than a symbol. A revision notebook is a different product with a different reader: someone who has
already learned the material and wants the shortest possible reminder. That reader can take
telegraphic prose, dense symbol chains and fragments that would be unteachable in the book.

Build it from the finished book rather than from the sources, so the facts are already adjudicated
and the notebook cannot drift from the book it revises.
