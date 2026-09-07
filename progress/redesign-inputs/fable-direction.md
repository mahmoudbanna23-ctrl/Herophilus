# Herophilus — design direction

## The governing idea

Herophilus is a bound casebook — a printed register of questions that the student is annotating by hand — not a dashboard. Everything on screen is either the page, the ink on it, or a note written in its margin. The app never pretends to be software watching the student; it is the book on the desk, and the clepsydra is the figure painted in its margin.

It pays for itself against every constraint at once: a page-shaped app already prints as A4; a margin is the one place a painted figure has belonged for seven hundred years without fighting the text; and a page under a lamp is the least frightening surface a tired person knows.

## Typography

One family, serif, everywhere — including buttons, counts and the gate. Bundle **Literata** (OFL, variable, optical sizes, tabular and lining figures, true small caps) as local `woff2` files inside the app folder; it was drawn for hours of screen reading and survives a USB stick. Fallback stack: `"Literata", "Charter", "Iowan Old Style", "Sitka Text", "Constantia", Georgia, serif`. Set `font-variant-numeric: lining-nums tabular-nums` on every number in the interface — Constantia and Georgia default to old-style figures, which wreck a column of counts.

Sizes are in a short fixed scale: 13 · 15 · 17 · 21 · 28. Body on quiz and theory is 17px / 1.55 on a measure of 34em (roughly 64 characters). Option text is body size, never smaller. Explanation is 16px. Margin apparatus — folio numbers, citations, chapter counts — is 13px small caps. Theory prints at 10.5pt / 1.4 on A4 with 22mm outer, 28mm inner margins, running head in small caps, page numbers at the foot.

Hierarchy is carried by size, by two weights only (400 and 600), by true small caps, and by hairlines. Never by colour, never by a third weight, never by all-caps sans.

## Colour

Colour is for **verdict** and nothing else. Subjects are not colour-coded; they are named and numbered (I–IV), like volumes. Progress is drawn in ink.

Light theme: paper `#F3EEE3`, ink `#211D17`, secondary ink `#5E574C`, hairline `#D8D0C0`. Dark theme is lamp-lit, not black: paper `#1E1B18`, ink `#E6DCCB`, secondary `#A69C8B`, hairline `#3A342D`. Body text contrast is held near 12:1, deliberately short of the maximum; a 21:1 page at 2 a.m. is glare.

Two chromatic inks, both marks a teacher would make: **vermilion** (`#B0321F` light / `#E3806B` dark) for wrong, error-report and the last five minutes of a mock clock; **ochre** (`#8A6A14` / `#D9B45A`) for flagged and highlighted. Right answers get a tick in plain ink, no green. Every verdict is also a glyph and a word, so the two inks are redundant, never load-bearing. Nothing else on the interface is chromatic — which is what keeps her the only warm, painted thing on the page.

## Layout and density

Every view is a single centred page column with a live left margin. The column is the measure; the margin (7rem wide, collapsing to nothing under 720px) holds folio numbers, letters, counts and the figure.

The subject view is a **table of contents**, not a list of cards: group heads as running heads, then 153 numbered lines at 2.25rem each. Each line is `number · name · count · accuracy`, count and accuracy in tabular 13px in the margin, accuracy as a short ink bar behind the number (width = accuracy, height 3px), never a ring or a percentage badge. Group heads stick. An empty chapter is set in secondary ink with "not yet written" in italics after the name — the same weight, the same row, not greyed as disabled, because it is a promise, not a fault. A type-to-filter field sits above the list and matches on name and number.

The quiz gives up everything: no sidebar, top bar, progress bar, subject colour or score. Running head carries the chapter name; foot carries the folio "17 of 40". Options are lettered A–J in the margin, the whole line is the target at 44px minimum, keyboard letters answer. On reveal the chosen letter gets its mark in the margin, the explanation appears under a hairline as a numbered note, the citation is a footnote line in small caps, and the student's own note is a literal margin note: a right-hand margin field over 1100px, an indented block below that. Mock exam is an exam paper: numbered questions, clock in the running head as static tabular text. Home is the contents page: four volumes, today's reading list, the schedule as a plain dated table.

## Reading for hours, at night

Dark is the default after 21:00 local, pinnable either way. Nothing is pure white or pure black. Measure capped, leading loose, no text under 13px. Focus rings are 2px ink, offset, on everything; every quiz action has a single key. The score is not on the page — see below. A study-session clock updates once a minute; only a mock ticks per second.

## Motion

Almost none, and all of it explicit. Page change: 120ms crossfade of the column only. Reveal: the margin mark draws its stroke once over 200ms. Her pose change: 300ms crossfade. That is the whole list. There is no motion on hover, lists, scroll, theme switch, loading, timers or focus; no spinners, skeletons, progress animations, or celebrations. `prefers-reduced-motion` removes the three that exist.

## Housing the figure

She is the margin figure. On wide screens she stands at the foot of the left margin, roughly 120px tall, directly on the paper — no card, border, shadow, glow, vignette or backdrop. Under 720px she moves to the page foot, never overlays text. The interface holds no other illustration, icon set, or chromatic colour, so nothing competes with her palette and nothing imitates it. Her poses change on events (reveal, flag, session phase, mock end), never on a timer, and on reading views she holds still. If she has anything to say it is one italic line in the margin beside her, in the same type as everything else, never a bubble. She does not print.

## The one thing most designers would not do

**Remove the live score.** No accuracy, streak, or percentage is shown anywhere on the quiz, case or session views; the only running figure is the folio. Accuracy exists on the contents page, in Review, and in Weak chapters — places the student goes on purpose. A frightened person at 2 a.m. does not need a number recomputed after every answer telling them how the year is going; they need the next question. The book keeps the ledger; it does not read it aloud.

## What I refuse

Cards and card grids. Subject colour coding. Progress rings, streaks and badges. Any celebration on finishing. Blur, gradients, glass, shadows on content. A sidebar or rail. A sans-serif UI layer sitting beside serif content. Pure black dark mode. Motivational copy in the interface voice. Any second illustration, mascot or icon system beside her — she is the only picture, or the page stops being hers.
