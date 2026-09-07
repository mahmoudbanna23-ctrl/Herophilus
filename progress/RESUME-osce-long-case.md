# Resume prompt — Long case OSCE

Paste everything below the line as the first message of a fresh chat.

---

We are starting the **Long case OSCE** workstream in Herophilus.

## Read this first — the deferral is lifted

On 2026-08-31 the owner ruled: *"skip ALL OSCE content — if I needed it later I'll tell you."* It was
deferred, not cut. **On 2026-09-08 the owner asked for this chat, which is them telling you.** Do not
re-ask whether OSCE is wanted; it is. Confirm only the shape of the deliverable, below.

## Honest starting state — nothing exists

No draft, no cache, no page count, no map. The sources have never been opened. The `ps-osce` chapter
already in the app is **psychiatry OSCE, a different subject** — do not treat it as prior work here,
and do not overwrite it.

## The sources

All three under `D:\claude os\Medical school\Herophilus\Semester 8\Pedo\OSCE\`:

- `pediatrics long cases.pdf` — the one this workstream is named for; start here
- `pediatrics OSCE.pdf`
- `pediatric OSCE 2.pdf`

Assume **image-only scans** until proven otherwise. Test cheaply first: `pdftotext` on a couple of
pages. If it returns text, this is a far cheaper job than expected and the plan changes — say so.

## Read first, in this order

1. `D:\claude os\Medical school\Herophilus\CLAUDE.md`
2. `D:\claude os\Medical school\Herophilus\MEMORY.md` — including the 2026-08-31 OSCE ruling above,
   so you can see it in context
3. `D:\claude os\Medical school\Herophilus\progress\PLAN-sprint-to-17-sep.md`
4. `D:\claude os\Medical school\Herophilus\content\ophtho\book-map.md` — as the mapping template

## First deliverable — map and a decision, not content

1. Page-count and structure the three PDFs. Which is the real long-case source, which overlap.
2. Write `content\peds\osce-map.md`: the case list with page ranges, the offset, the house format
   a long case follows in this book.
3. **Put one question to the owner and stop:** what is the output — revision notes to read, an app
   chapter alongside the existing ones, or a printable case checklist? These are different builds and
   the wrong guess wastes the whole job.

Do not transcribe cases before that answer.

## Hard rules

- **Never modify, rename, move, or delete a source PDF.** Rendered pages go to the scratchpad.
- **Render and read scanned pages inside a subagent**, never in the main chat.
  `pdftoppm -png -r 150 -f <first> -l <last> "<source.pdf>" "<scratchpad>\<prefix>"`
- **Explicit page ranges only.** Never open a whole PDF.
- **Cite `<file>.pdf p.<N>` on every clinical fact.** No page citation means it is not from the
  material, and this is medicine — the bar is higher here than anywhere else in the workspace.
- If the material does not cover something, **say the material does not cover it.** Do not fill the
  gap from general knowledge; if outside knowledge genuinely helps, mark it clearly as not from the
  source and keep it separate.
- **Scanned pages never leave Claude.** Codex running locally is the only vision seat, per the
  owner's 2026-09-05 ruling — that ruling covers OpenAI through the Codex CLI and travels nowhere
  else. Transcribing a page does not launder it.

## How the work is routed

Lowest rung that can do the job, and **say which rung before starting**:

1. Fleet seat — cannot take any of this material.
2. Cheapest capable seat inside the fleet.
3. **Claude subagent — where the render-and-transcribe work lives.** `sonnet` to transcribe,
   `haiku` for read-only search. One bounded job per agent, then return.
4. Main chat: review and routing, not labour.
5. Opus itself: critical only, and ask first.

## Register

Caveman ultra per `C:\Users\Alfa388\.claude\caveman.md`, which **outranks the output style**. The
`PostToolUse` hook `Tools\guard\drift-guard.js` reminds every ten tool calls; act on it.

## Deadlines

⚠️ **Peds OSCE is 14 Sep — six days from 2026-09-08.** Peds papers 17 Sep; further papers 18–19 Oct.
That window is the whole constraint: it is too short to transcribe three scanned PDFs. Plan for the
highest-yield subset the owner names, not for coverage. Exam freeze until 3 Oct: Herophilus only.

## Git

Git is Claude's job. `git commit -F <msgfile> -- <explicit paths>`. **Never `git add -A`** — a dirty
tree is normal, two chats run at once. Never `--force`.
