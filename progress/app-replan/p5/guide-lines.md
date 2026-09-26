# Clepsydra — guide line sheet (draft for owner review)

Draft only. Nothing in `app/` changed. Voice: normal human voice (owner 2026-09-26) — she talks
like a warm, ordinary person talking to a friend who's studying, not a scholar or a narrator. Max
14 words/line, most under 10. No `!`, no emoji, no exclamation-cheer, no slang, no shame words, no
greeting-card lines (no "journey", no "you've got this", no "great job"). She never states medical
content — she points at the explanation or the chapter theory instead. Second person, present
tense. Classical nod (Alexandria / water / time / Herophilus) capped at 1 in 6 lines.

## Existing voice, read from `app/js/clepsydra.js`

Read: `clepSay`/`clepDismiss` (lines ~298–334), `CL_TIPS` (~363–406, the "explain this screen"
facts), `clepFacts()` (~408–422, idle-chatter trivia), and the focus-timer `clepSay` calls in
`startSession`/`advancePhase`/`endSession` (~570, 606–610, 629–632).

**Keep:** the dwell/typing mechanics, the mute line ("Back with you. Tap me on any screen and I
will explain it."), and `CL_TIPS`/`clepFacts()` as a separate "explain this screen" feature —
out of this brief's scope, untouched.

**Retire, and why:**
- The five focus-timer `clepSay` calls (start / break / resume / complete / stopped) — the new
  Guide system (`guide.js`) centralises timer speech as table-driven triggers (Section 6 below);
  keeping both means two sources say the same moment.
- Their style (bold markdown mid-sentence, em dashes, stat-first phrasing) reads as a stats
  readout, not a companion aside — it doesn't fit the normal-human voice the owner asked for here.
  New lines below are plain sentences, no inline markdown.
- `CL_TIPS`/`clepFacts()` are NOT retired — they run 20–90+ words with bold stats and serve a
  different, still-live feature (the `?` "explain this screen" button). Flagging only that their
  register does not match the new bubble voice, in case the owner later wants one voice everywhere.

## 1. Intro cinematic

| id | trigger | line | alt line |
|---|---|---|---|
| intro-herophilus | intro step 4: one line about Herophilus | Here, Herophilus first opened the body to study it directly. | — |
| intro-wake | intro step 3: she wakes by the bowl | You have arrived. Time to start. | — |

## 2. First-run tour (skippable, one line per stop)

| id | trigger | line | alt line |
|---|---|---|---|
| tour-books | stop 1: the 4 books (skippable) | Four books, one per subject. Tap one to open it. | — |
| tour-scroll | stop 2: the open scroll — continue, schedule, count, exam countdown (skippable) | The scroll's got today's plan, your count, and the countdown. | — |
| tour-letters | stop 3: the letters — spaced review due (skippable) | Letters mean it's time to review. Don't let them stack up. | — |
| tour-tablet | stop 4: the wax tablet — mock exam (skippable) | Tap the tablet for a timed mock, no help allowed. | — |
| tour-pages | stop 5: the marked pages — weak-spot drill (skippable) | This pile's the stuff that trips you up most. | — |
| tour-bundle | stop 6: the scroll bundle — theory (skippable) | The bundle's got your notes, chapter by chapter. | — |
| tour-bowl | stop 7: the bowl — focus timer (skippable) | The bowl runs your focus timer. Set a block, go. | — |
| tour-ledger | stop 8: the Ledger — settings/stats (skippable) | The ledger's got your stats, settings, and sound. | — |
| tour-close | stop 9: closing line (skippable) | That's the desk. You'll find the rest just by looking. | It's yours now. Go pick a book. |

## 3. Context hints

| id | trigger | line | alt line |
|---|---|---|---|
| hint-unopened | a book never opened | Haven't opened this one yet. Want to look inside? | This one's still closed. Curious what's in it? |
| hint-wrong-streak | 3 wrong in a row, same chapter | The explanation's right below the question, every time. | Check right under the question, it's explained there. |
| hint-idle-home | idle 5 min on home | Still deciding? Pick a book, or ask me something. | Take your time, I'm right here. |
| hint-mock-unfinished | an unfinished mock waiting | Your mock's paused, halfway done. Finish whenever you're ready. | The tablet's waiting, half filled in. |
| hint-letters-pile | letters piling up (10+) | Letters are piling up. Clear a few now, easier later. | Ten letters waiting. A small batch beats a big one. |

## 4. Quiz reactions (after Check)

| id | trigger | line | alt line |
|---|---|---|---|
| quiz-correct | correct | Nice, that one's right. | Yep, got it. |
| quiz-correct-2 | correct (2nd alt) | Good thinking there. | — |
| quiz-wrong-explain | wrong — points to the explanation | Look at the explanation below. | It's explained right under the question. |
| quiz-wrong-theory | wrong, repeats in the chapter — points to chapter theory | This one comes up again, the chapter covers it. | The chapter notes go deeper on this. |
| quiz-streak5 | 5 correct in a row | Five in a row, nice rhythm. | Five straight, you're on a roll. |
| quiz-slow | a slow answer | Take whatever time you need. | No rush, think it through. |

## 5. Outros

| id | trigger | line | alt line |
|---|---|---|---|
| outro-session-end | session end, she closes the book | Closing the book for now. See you soon. | That's the session. Go rest a bit. |
| outro-daily100 | daily target of 100 met (once/day) | You hit today's target. Nice one. | That's 100 for today, done. |
| outro-close-desk | "Close the desk" — lamp out, she sleeps | Lamp's out. I'll be here at dawn. | Desk's closed. Sleep well. |
| outro-exam-sendoff | day before a real exam, per subject | Tomorrow's {subject}. You're ready for it. | {subject}'s tomorrow. Rest up, then walk in steady. |

## 6. Focus timer

| id | trigger | line | alt line |
|---|---|---|---|
| timer-start | block starts | Time's set. I've got it. | Block started, go. |
| timer-halfway | block reaches halfway | You're halfway through the block. | Halfway there, keep going. |
| timer-empty | block ends, water drains — take a break | Time's up. Take a break. | Block's done. Stand up, stretch. |
| timer-break-over | break period ends | Break's over. Back to it. | Time to get back. Ready? |

## 7. Welcome back (per visit)

| id | trigger | line | alt line |
|---|---|---|---|
| welcome-dawn | dawn | Early start. Morning. | You're up early, good. |
| welcome-day | day | Hey, welcome back. | Good to see you again. |
| welcome-dusk | dusk | Evening study, welcome back. | Getting dark out. Welcome back. |
| welcome-night | night | Working late. Welcome back. | Still up? Welcome back. |

## Counts

| Section | Rows | Lines (incl. alts) |
|---|---|---|
| 1. Intro | 2 | 2 |
| 2. Tour | 9 | 10 |
| 3. Hints | 5 | 10 |
| 4. Quiz | 6 | 11 |
| 5. Outros | 4 | 8 |
| 6. Timer | 4 | 8 |
| 7. Welcome back | 4 | 8 |
| **Total** | **34** | **57** |

## Self-check

- `!` count: 0.
- Emoji count: 0.
- Medical content: 0 — every quiz-wrong line points at the explanation or chapter theory, states
  no fact itself.
- Word count: every line ≤ 14 words, checked by script, not by eye.
- Shame language: 0 — no "oops", "wrong", "careless", or equivalent anywhere in a spoken line.
- Greeting-card language: 0 — no "journey", no "you've got this", no "great job"; checked by grep.
- Classical nod ratio: counted narrowly (explicit Alexandria/Herophilus/water-clock-as-identity
  references, not generic use of the word "time" in a timer line, which is unavoidable for a
  water-clock feature) — 2 of 57 lines (`intro-herophilus`, `intro-wake`), well under the 1-in-6
  (≈9-line) cap. If the owner wants the stricter reading (any mention of "time"/"clock" counted),
  flag it and I'll cut the Section 6 lines that use those words.
