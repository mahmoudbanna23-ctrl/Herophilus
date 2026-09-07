# Resume prompt — Pediatrics book

Paste everything below the line as the first message of a fresh chat.

---

We are starting the **Pediatrics book** workstream in Herophilus. Read this whole message before
acting, then read the files it names before writing anything.

## Honest starting state — this is a START, not a resume

There is no peds book cache, no `content\peds\book\` directory, and no book map. Peds theory so far
was written from lecture PPTs, not from this book. The entire existing footprint of the book is three
pages: `content\peds\theory-drafts\accidents.draft.js` cites `B1 = pediatrics p1.pdf`, Chapter 4
"Accidents and Poisoning" = **book pp.84–86**, with the offset note **PDF page = book page + 4**
(recorded 2026-08-16). Nothing else has been read.

## The sources

- `D:\claude os\Medical school\Herophilus\Semester 8\Pedo\Theoritical\Books\pediatrics p1.pdf` — 250 pages
- `D:\claude os\Medical school\Herophilus\Semester 8\Pedo\Theoritical\Books\pediatrics p2.pdf` — 264 pages

Both are **image-only scans**. `pdftotext` returns 0 characters. Visual reading is the only route.

## Read first, in this order

1. `D:\claude os\Medical school\Herophilus\CLAUDE.md`
2. `D:\claude os\Medical school\Herophilus\MEMORY.md` — the governing decisions section
3. `D:\claude os\Medical school\Herophilus\content\peds\theory-plan.md` — in full; it carries the
   chapter-split rules and the "no 3,000-word cap" ruling
4. `D:\claude os\Medical school\Herophilus\content\ophtho\book-map.md` — **as the template.** The
   ophthalmology book was mapped before it was read, and that is why it is usable. Do the same here.

## First deliverable — the map, not the transcription

Build `content\peds\book-map.md` for p1 and p2 the way `content\ophtho\book-map.md` is built:
printed-page ↔ PDF-page offset (verified, not assumed — the known offset for p1 is +4, confirm it and
find p2's separately), the chapter table with page ranges, and the house-style notes. **Agree the map
with the owner before transcribing a single chapter.** Mapping is cheap; transcribing the wrong 500
pages is not.

## Hard rules

- **Never modify, rename, move, or delete a source PDF.** Rendered images go to the session
  scratchpad, never into `Semester 8\`.
- **Render and read scanned pages inside a subagent**, never in the main chat. An image read in the
  main chat is re-sent with every later request for the whole session — measured as this workspace's
  largest token drain.
  `pdftoppm -png -r 150 -f <first> -l <last> "<source.pdf>" "<scratchpad>\<prefix>"`
- **Never open a whole PDF.** Explicit page ranges only. If the needed range is unknown, ask.
- **Cite `<file>.pdf p.<N>` on every fact.** No citation means it did not come from the material.
- **Cache on first read** into the project, so a page is read once and never re-read.
- **Scanned pages never leave Claude.** The only vision seat for them is Codex running locally, under
  the owner's 2026-09-05 ruling, which covers OpenAI through the Codex CLI and nothing else. Not
  Gemini, not Groq, not OpenRouter, not any fleet seat. Transcribing a page does not launder it.

## How the work is routed

Take the lowest rung that can do the job, and **say which rung before starting**:

1. Fleet seat for anything that can leave Anthropic — but see the rule above: none of this book can.
2. Cheapest capable seat inside the fleet.
3. **Claude subagent — this is the rung most of this work lives on.** `sonnet` for render-and-transcribe,
   `haiku` for read-only search. One bounded job, then return; split long work across fresh agents.
4. Main chat: review and routing, not labour.
5. Opus doing it itself: critical only, and ask first.

Cost is step count, not starting context — the whole context re-sends every step and grows. A subagent
left running long costs its full context on every remaining step.

## Register

Caveman ultra per `C:\Users\Alfa388\.claude\caveman.md`, which **outranks the output style**. Drift
starts after tool-heavy turns. A `PostToolUse` hook (`Tools\guard\drift-guard.js`) will remind you every
ten tool calls — when it fires, actually re-check, do not just read past it.

## Deadlines

Peds papers **17 Sep**, Peds papers **18–19 Oct**. Exam freeze until 3 Oct: Herophilus only.

## Git

Git is Claude's job, not the owner's. `git commit -F <msgfile> -- <explicit paths>`. **Never `git add -A`**
— a dirty tree is normal here because two chats run at once, and `-A` swallows the other chat's live
edits. Never `--force`. The repo is private; confirm before anything public.
