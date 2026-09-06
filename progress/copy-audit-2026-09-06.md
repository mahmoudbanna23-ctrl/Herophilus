# Copy and emoji audit — app/index.html, 2026-09-06

Produced by a read-only audit agent, every item verified against the actual line. Line numbers
are as of commit `90ef5d9` and **will shift** once the profile-sync change lands — each row
carries the exact current string so it can be found by grep instead.

Purpose: the owner's rule that the site must not read as AI-made. The tells are emoji, chirpy
copy and developer-facing language, not the layout.

## Constraint discovered while auditing

`toast()` sets `t.textContent`, and the mute button at `:5820` sets `b.textContent`. **No `ico()`
SVG can render in either.** Every emoji inside a `toast(...)` call is deleted, never swapped.

Available `ico()` glyphs (`:2817`–`:2851`): asclepius, chev-l, chev-r, ear, eye, brain, teddy,
temple, tablet, shuffle, scroll, hourglass, laurel, amphora, stylus, target, olive, search, menu,
keys, sun, moon, lamp, clepsydra, shield. **No glyph exists for** printer, cloud, lock, warning,
checkmark, sleep, speaker.

## 1. Copy written to the wrong audience

| Anchor string | Replace with |
|---|---|
| `More arrive as you send sources — every chapter is already wired and waiting` | `Work through them by chapter, by module, or build a custom set.` |
| `'coming soon'` in the `ch-count` span | `'no questions yet'` — and note the collision: the Coming-soon lock for Ophtho/Neuro needs different wording from this |
| `'not written yet'` (mod-meta) | `'no notes yet'` |
| `<h3>Not written yet</h3>` (theory empty state) | `<h3>No notes for this lecture</h3>` |
| `questions, transcribed from the real banks` (gate tagline, appears twice) | `questions from the real exam question banks.` — "transcribed" describes production, not content |
| `No explanation came with this question. Flag it and I can write one.` | drop the second sentence — there is no delivery mechanism behind that promise |
| `tell me and I'll re-compress the whole plan` | `Double up on a catch-up day, or drop something from the plan.` |

## 2. Emoji — delete (text-only context, no SVG possible)

`toast('Keep at least one source on 🙂')` · `'☀️ Light mode'` / `'🌙 Dark mode'` ·
`'No questions there yet 🤷'` · `'Type a diagnosis first ✍️'` · `'Added to your review deck 🎲'` /
`'Nice 💪'` · `'Flagged 🚩'` · `'Every question in this set is answered ✅'` ·
`'Nothing wrong in this set ✅'` · the `⚠️` / `✅` pair in the catch-up toast ·
`'Nice work ✅'` · `'The Clepsydra will keep quiet 🤫'` · `'Restored your progress from '` ·
`'Progress downloaded 💾'` · `'Progress restored ✅'`

Mute button `b.textContent=CLEP.muted?'🔈':'🔇'` — plain text label; the button already has a title.

## 3. Emoji — replace with `ico()` (innerHTML context)

| Current | Becomes |
|---|---|
| `&#128220;` theory empty state | `${ico('scroll',46)}` |
| `&#10024;` "Nothing missed" | `${ico('laurel',46)}` — matches the "Set complete" state |
| `⏰` Due today stat | `${ico('hourglass',20)}` — same `.emo` slot already uses it for "Due for review" |
| `⏱️` in `.mod-ic` | `${ico('clepsydra',22)}` — same slot uses `ico('target',22)` two lines later |
| `✏️ Edit schedule` | `${ico('stylus',14)}` |
| `&#128260;` ×2 (rescheduled) | `${ico('shuffle',20)}` |
| `&#128203;` catch-up capacity | `${ico('tablet',20)}` |
| `⌨️ Shortcuts` | `${ico('keys',19)}` — `keys` exists and is currently unused |
| `&#128424;&#65039; Save as PDF` | `${ico('scroll',16)}` or drop the glyph |
| `&#127919; Go to question` | `${ico('target',19)}` — literally the same bullseye |
| `&#128396;&#65039; Marker` | `${ico('stylus',14)}` (overlaps with "Answered"; acceptable) |
| `&#128218;` ×3 (Notes links) | `${ico('scroll',16)}` — matches the Theory module icon |

No glyph fits — delete the emoji and keep the text: `&#9888;&#65039;` overflow warning ·
`&#128564; Free day` · the `⚠️`/`✅` stat span (the colour already carries it) ·
`⚠️ ${overflow} item…`

## 4. Voice

`'Correct!'` → `'Correct.'` (the miss state has no exclamation; the asymmetry is the tell) ·
`Nice` button → `Continue` · `' Clean sweep.'` → `' All correct.'` ·
`You're on plan.` → `Nothing is behind.` ·
`Keep going and this fills itself.` → delete; the preceding sentence already says it.

## Explicitly NOT defects — checked and cleared

- The `AVATARS` emoji picker is a real feature: the student chooses their own. Do not touch.
- The ▶ / ❚❚ glyphs are one convention applied uniformly across every start button. Clean.
- `✓ Signed in as` is a Dingbat check, not a colour emoji.
- No AI buzzwords anywhere in the file (seamless, leverage, empower, streamline, unlock).
- No hedging language in any user-facing string.
- The `page-sub` subtitles each add real information beyond their heading — they stay.

## Left for a live judgement

The lock/cloud badges on the profile picker and the sync button. No glyph fits "cloud", and
changing the badges risks the picker's layout. Decide with the page open, not from a diff.
