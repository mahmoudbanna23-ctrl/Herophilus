# Clepsydra — guide line sheet (draft for owner review)

Draft only. Nothing in `app/` changed. Voice: warm, brief scholar. Max 14 words/line, most
under 10. No `!`, no emoji, no exclamation-cheer, no slang, no shame words. She never states
medical content — she points at the explanation or the chapter theory instead. Second person,
present tense. Classical nod (Alexandria / water / time / Herophilus) capped at 1 in 6 lines.

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
  readout, not a companion aside — it doesn't fit the "brief scholar" bubble voice the owner
  asked for here. New lines below are plain sentences, no inline markdown.
- `CL_TIPS`/`clepFacts()` are NOT retired — they run 20–90+ words with bold stats and serve a
  different, still-live feature (the `?` "explain this screen" button). Flagging only that their
  register does not match the new bubble voice, in case the owner later wants one voice everywhere.

## 1. Intro cinematic

| id | trigger | line | alt line |
|---|---|---|---|
| intro-herophilus | intro step 4: one line about Herophilus | Herophilus dissected here first, in Alexandria — the start of anatomy. | Here, Herophilus first opened the body to study it directly. |
| intro-wake | intro step 3: she wakes by the bowl | Good, you are here. Let's begin. | You have arrived. Time to start. |

## 2. First-run tour (skippable, one line per stop)

| id | trigger | line | alt line |
|---|---|---|---|
| tour-books | stop 1: the 4 books (skippable) | Four books, one for each subject. Tap one to open it. | — |
| tour-scroll | stop 2: the open scroll — continue, schedule, count, exam countdown (skippable) | The scroll holds today's plan, your count, and the exam countdown. | — |
| tour-letters | stop 3: the letters — spaced review due (skippable) | Letters mean review is due. Answer them before they pile up. | — |
| tour-tablet | stop 4: the wax tablet — mock exam (skippable) | The tablet starts a timed mock, exam conditions, no help. | — |
| tour-pages | stop 5: the marked pages — weak-spot drill (skippable) | This pile gathers what trips you up most, for one focused pass. | — |
| tour-bundle | stop 6: the scroll bundle — theory (skippable) | The bundle opens your notes, chapter by chapter. | — |
| tour-bowl | stop 7: the bowl — focus timer (skippable) | The bowl times your focus. Set a block and go. | — |
| tour-ledger | stop 8: the Ledger — settings/stats (skippable) | The ledger holds your stats, settings, and sound. | — |
| tour-close | stop 9: closing line (skippable) | That's the desk. Everything else you'll find by looking. | Now it's yours. Go pick a book. |

## 3. Context hints

| id | trigger | line | alt line |
|---|---|---|---|
| hint-unopened | a book never opened | Haven't opened this one yet. Curious? | This book is still closed. Give it a look. |
| hint-wrong-streak | 3 wrong in a row, same chapter | The explanation is right below each question. | It's explained just under the question, every time. |
| hint-idle-home | idle 5 min on home | Still deciding? Pick a book, or ask me anything. | Take your time. I'll be here when you're ready. |
| hint-mock-unfinished | an unfinished mock waiting | Your mock is paused, half done. Finish when ready. | The tablet is waiting, half filled. |
| hint-letters-pile | letters piling up (10+) | The letters are piling up. A few now saves more later. | Ten letters waiting. A small batch now, easier later. |

## 4. Quiz reactions (after Check)

| id | trigger | line | alt line |
|---|---|---|---|
| quiz-correct | correct | Good. | That's right. |
| quiz-correct-2 | correct (2nd alt) | Well reasoned. | — |
| quiz-wrong-explain | wrong — points to the explanation | The explanation below has it. | It's explained right below the question. |
| quiz-wrong-theory | wrong, repeats in the chapter — points to chapter theory | Chapter theory covers this in full. | The chapter notes go deeper on this. |
| quiz-streak5 | 5 correct in a row | Five in a row. Steady hands. | Five straight. You're finding your rhythm. |
| quiz-slow | a slow answer | Take the time you need. | No rush — think it through. |

## 5. Outros

| id | trigger | line | alt line |
|---|---|---|---|
| outro-session-end | session end, she closes the book | Closing the book for now. Well studied. | That's the session. Rest well. |
| outro-daily100 | daily target of 100 met (once/day) | The water clock is full today. Well done. | That's the target met for today. |
| outro-close-desk | "Close the desk" — lamp out, she sleeps | Lamp's out. I'll be here at dawn. | The desk is closed. Sleep well. |
| outro-exam-sendoff | day before a real exam, per subject | Tomorrow is {subject}. You are ready for it. | {subject} is tomorrow. Rest, then walk in steady. |

## 6. Focus timer

| id | trigger | line | alt line |
|---|---|---|---|
| timer-start | block starts | Time is set. I'll keep it. | Block started. Go. |
| timer-halfway | block reaches halfway | Halfway through the block. | Halfway there. Keep going. |
| timer-empty | block ends, water drains — take a break | Time's up. Take a break. | Block done. Stand up, stretch. |
| timer-break-over | break period ends | Break's over. Back to it. | Time to return. Ready? |

## 7. Welcome back (per visit)

| id | trigger | line | alt line |
|---|---|---|---|
| welcome-dawn | dawn | Early start. Good morning. | You're up early. Good. |
| welcome-day | day | Welcome back. | Good to see you again. |
| welcome-dusk | dusk | Evening study. Welcome back. | The light is fading. Welcome back. |
| welcome-night | night | Working late. Welcome back. | Still up? Welcome back. |

## Counts

| Section | Rows | Lines (incl. alts) |
|---|---|---|
| 1. Intro | 2 | 2 |
| 2. Tour | 9 | 10 |
| 3. Hints | 5 | 10 |
| 4. Quiz | 6 | 11 |
| 5. Outros | 4 | 8 |
| 6. Timer | 4 | 9 |
| 7. Welcome back | 4 | 8 |
| **Total** | **34** | **58** |

## Self-check

- `!` count: 0.
- Emoji count: 0.
- Medical content: 0 — every quiz-wrong line points at the explanation or chapter theory, states
  no fact itself.
- Word count: every line ≤ 14 words (longest is `tour-pages` and `hint-letters-pile` alt, both
  12); the large majority sit at 4–9 words.
- Shame language: 0 — no "oops", "wrong", "careless", or equivalent anywhere in a spoken line.
- Classical nod ratio: counted narrowly (explicit Alexandria/Herophilus/water-clock-as-identity
  references, not generic use of the word "time" in a timer line, which is unavoidable for a
  water-clock feature) — 3 of 58 lines (`intro-herophilus` line + alt, `outro-daily100` line),
  well under the 1-in-6 (≈9-line) cap. If the owner wants the stricter reading (any mention of
  "time"/"clock" counted), flag it and I'll cut the Section 6 lines that use those words.
