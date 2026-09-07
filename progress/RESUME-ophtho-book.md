# Resume prompt — Ophthalmology book

Paste everything below the line as the first message of a fresh chat.

---

We are resuming the **Ophthalmology book** workstream in Herophilus. Read this whole message before
acting, then read the files it names before writing anything.

## The source

`D:\claude os\Medical school\Herophilus\Semester 8\Opthalmo\Theoritical\Books\ophthalmology.pdf` —
218,498,117 bytes, **274 PDF pages / 270 printed**, 20 chapters, image-only scan.
**PDF page = printed page + 2**, with one exception in chapter 1 — the map records it; do not
re-derive the offset.

## State — 13 of 20 chapters cached

**Done.** The structural map is complete: `content\ophtho\book-map.md` (built 2026-08-18) carries the
page offset, the 20-chapter table with page ranges and exam-weight percentages, and the house-style
notes (tutorial markers, the inconsistent figure numbering, the star-glyph ratings). Read it before
touching any ophtho citation.

**Cached to `content\ophtho\book\`** — ch01 examination · ch03 orbit · ch04 lacrimal system ·
ch05 eyelids · ch06 conjunctiva · ch07 sclera · ch10 uveal tract · ch14 neuro-ophthalmology ·
ch15 squint · ch16 paediatric · ch17 malignancies · ch19 systemic tumours · ch20 drugs.

**Missing — seven chapters, and the notes nowhere say they were deliberately skipped:**
ch02 optics · ch08 cornea · ch09 lens · ch11 glaucoma · ch12 vitreous · ch13 retina · ch18 trauma.

⚠️ Those seven include glaucoma, cornea, lens and retina — the high-weight clinical core. Before
transcribing, **ask the owner whether the gap is deliberate**; a large part of it may be covered
already by the 29 lecture decks, which are the cheap source and are already cited alongside the book
in `progress\resume-ophtho.md`. Check the coverage before spending a page render.

## Read first, in this order

1. `D:\claude os\Medical school\Herophilus\CLAUDE.md`
2. `D:\claude os\Medical school\Herophilus\MEMORY.md`
3. `D:\claude os\Medical school\Herophilus\content\ophtho\book-map.md` — whole file, ~5.5 KB, cheap
4. `D:\claude os\Medical school\Herophilus\progress\resume-ophtho.md`
5. One existing chapter file in `content\ophtho\book\` — match its shape exactly; do not invent a
   second format.

## Hard rules

- **Never modify, rename, move, or delete the source PDF.** Rendered images go to the session
  scratchpad, never into `Semester 8\`.
- **Render and read scanned pages inside a subagent**, never in the main chat. An image read in the
  main chat is re-sent with every later request for the whole session.
  `pdftoppm -png -r 150 -f <first> -l <last> "<source.pdf>" "<scratchpad>\<prefix>"`
- **Never open the whole PDF** — it is 218 MB, over the reader's 100 MB limit anyway. Explicit page
  ranges only, taken from the map.
- **Cite `<file>.pdf p.<N>` on every fact**, using the printed page, and say so.
- **Scanned pages never leave Claude.** The only vision seat is Codex running locally, under the
  owner's 2026-09-05 ruling — OpenAI through the Codex CLI, and nothing else. Not Gemini, not Groq,
  not OpenRouter, not any fleet seat. Transcribing a page does not launder it.

## How the work is routed

Lowest rung that can do the job, and **say which rung before starting**:

1. Fleet seat for anything that can leave Anthropic — none of this book can.
2. Cheapest capable seat inside the fleet.
3. **Claude subagent — where this work lives.** `sonnet` to render and transcribe a chapter,
   `haiku` for read-only search. One chapter per agent, then return. Do not run one agent across
   many chapters: cost is step count and the context grows every step.
4. Main chat: review and routing, not labour.
5. Opus itself: critical only, and ask first.

## Register

Caveman ultra per `C:\Users\Alfa388\.claude\caveman.md`, which **outranks the output style**. The
`PostToolUse` hook `Tools\guard\drift-guard.js` fires a reminder every ten tool calls — when it fires,
re-check the register and the rung rather than reading past it.

## Deadlines

**Ophthalmology exam 27 Sep.** Exam freeze until 3 Oct: Herophilus only.

⚠️ Ophthalmology is one of the two **locked modules** in the shipped build
(`LOCKED_MODULES=['ophtho','neuropsych']`). Book work here feeds revision and the future unlock; it
does not go into `dist\` without a deliberate decision to unlock.

## Git

Git is Claude's job. `git commit -F <msgfile> -- <explicit paths>`. **Never `git add -A`** — a dirty
tree is normal because two chats run at once. Never `--force`. Repo is private; confirm before public.
