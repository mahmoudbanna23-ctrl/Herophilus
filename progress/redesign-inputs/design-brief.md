# Design this app. Do not look at how it is currently built.

You are being asked for an original design direction for a real, finished, working web
application. It already exists and works; the visual design is being reconsidered from
scratch. **Deliberately do not read `app/index.html` or any CSS in the repository.** The
point of this exercise is to get a direction that did not come from the existing one.

## What the product is

**Herophilus** — a question bank and revision app for one specific person and their
classmates: 6th-year medical students at Alexandria University, Egypt, sitting four
end-of-semester clinical exams (ENT, Ophthalmology, Neuropsychiatry, Paediatrics).

It is named for Herophilus of Alexandria, who performed the first systematic human
dissections in that city around 300 BC. The student using it is studying medicine in the
same city, roughly 2,300 years later. That is the emotional centre of the thing and it is
not decoration — it is why the app exists in this form rather than as a spreadsheet.

**Content it holds:** about 4,000 multiple-choice questions transcribed by hand out of
printed commercial question banks, plus free-text clinical cases, plus written theory
chapters. Questions are grouped into 4 subjects → chapter groups → 153 chapters. Three
different source banks are tracked per question and are filterable.

**Who uses it and how:** one student, alone, at a desk or in bed, for two to six hours at
a stretch, in the six weeks before exams that decide their year. Often at night. Often
tired. Sometimes frightened. They come back to it every single day for weeks. It is used
on a laptop mostly, sometimes a phone.

## The views that must exist

- **Gate** — sign in, then pick a profile (several people share one machine), then pick
  which academic year and semester's content to load.
- **Home** — the four subjects, with progress; what is due today; a study schedule.
- **Subject** — its chapter groups and 153 chapter rows, with per-chapter counts and
  accuracy. Many chapters are legitimately empty and must read as *not yet written*, not
  as broken.
- **Quiz** — one question: stem, sometimes a clinical figure, 2 to 10 options (usually 4
  or 5), then a revealed answer with a written explanation, a source citation, and a
  free-text note the student can write. Flag, highlight, report-an-error.
- **Case** — a free-text clinical vignette, graded on concepts rather than exact wording.
- **Mock exam** — a timed run under exam conditions, with a clock.
- **Review** — what was answered, right and wrong, and re-attempt.
- **Weak chapters** and **flagged questions** — two different ways of finding what to fix.
- **Theory reader** — long written chapters with tables, read like a document. Prints.
- **Session** — a timed study session with phases (work, break) and live statistics.
- **Schedule** — a hand-built revision calendar keyed to real exam dates.

## Hard constraints — a direction that breaks one of these is unusable

1. **Vanilla HTML, CSS and JavaScript. No framework, no build step, no bundler, no npm,
   no CDN, no external font or asset link.** It must run offline by opening the file
   directly from disk as a `file://` URL. This is not negotiable and it is not laziness —
   it is what lets the app be handed to a classmate on a USB stick and work.
2. **It prints.** The theory reader must produce a real A4 page.
3. **The app already carries the owner's own painted artwork**: a figure of a Greek water
   clock (a clepsydra), rendered in nine poses, who appears as a companion in the corner
   of the interface and reacts to what the student is doing. She is the owner's original
   art. She cannot be redrawn, restyled, recoloured or drawn onto. **A direction must
   house her, not replace her.** She is painted, warm, and figurative.
4. **Light and dark themes both.**
5. **Accessibility is real here** — it is read for hours at a time by an exhausted person.
6. **No emoji anywhere in the interface.**

## What to give back

A **design direction**, not code and not a component list. Roughly 700–1,100 words. Be
specific and opinionated. Vague adjectives ("clean", "modern", "intuitive") are worthless;
name actual decisions someone could execute.

Cover, in your own structure:

- **The governing idea in one sentence.** What is this thing pretending to be? A journal?
  An instrument? A ward? A library? A terminal? Commit to one.
- **Typography** — actual typeface choices available offline or as system stacks, actual
  size and measure decisions, and what carries hierarchy when you cannot use a webfont.
- **Colour** — the palette, how it survives both themes, and what colour is *for* here
  (state? subject identity? nothing?).
- **Layout and density** — how a 153-row list is made scannable; what the quiz screen
  gives up to keep one question calm.
- **The reading experience specifically.** Hours, at night, tired. What does that change?
- **Motion** — how much, where, and what it is for. Say explicitly where there is none.
- **How the painted figure is housed** without the rest of the design either fighting her
  or dissolving into her.
- **One thing you would deliberately do that most designers would not**, and why it is
  right for this specific product rather than merely different.
- **What you would refuse to do**, and why.

Do not hedge, do not offer three options, do not ask questions. One direction, argued.
