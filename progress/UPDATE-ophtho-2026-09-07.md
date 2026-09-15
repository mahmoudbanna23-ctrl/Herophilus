# Rule updates for the ophthalmology chat — 2026-09-07

Paste this whole file into the running ophthalmology chat (or into a fresh one, after its resume
prompt, not instead of it). Four rulings landed today. Two change routing, one changes how anything
written is shaped, one changes who commits. Nothing below cuts scope or changes a single clinical
fact.

---

## 1. OmniRoute may now take course-material text — the content ban is LIFTED

Owner ruling, verbatim: *"OmniRoute can act freely, no restrictions. Saving tokens is a greater gain.
But don't forget that when dealing with scanned pages we WPS."*

The old rule said no source text, no transcription and no draft could go to an off-machine seat.
**That is superseded. Route text work out by default and do not re-litigate it.**

So these now belong on rung 1 (fleet / OmniRoute), not on a Claude subagent:

- drafting and rewriting explanations
- reshaping OCR text into question entries
- normalising, de-duplicating and diffing text
- writing tooling, audits, index generation — unchanged, already rung 1

**What the lifting does not change:**

- **A scanned page is OCR'd first and never sent as an image.** Route: `pdftoppm` → PNG →
  `wpscli photo2word`, $0. Send the seat the OCR **text**.
- ⚠️ **OCR text is a search index, never a clinical source.** Confirm every fact against the rendered
  page. **Never take an exponent, a unit or a dose from OCR** — WPS read a printed 10⁶ as 10⁹ and
  also flattens 10⁶ to 106. That is a plausible wrong number, not visible garbage.
- ~~**Vision never leaves Claude.**~~ **SUPERSEDED 2026-09-15** (`CLAUDE.md` §8): vision goes
  Codex `-i` → gateway `auto/vision` → Gemini by key → Claude last. `auto/*` now allowed; the
  prefix bans below still stand.
- **Verification of fleet output never leaves Claude.**
- **The OmniRoute prefix bans stand** — never `dva/` `cxa/` `aug/` `zc/`, never `auto/*`, never a Web
  Cookie provider, and **select by prefix allowlist, never by matching text in a model id** (a
  `/gemini/i` filter once matched `dva/gemini-…` and fired a banned pool). These protect the owner's
  own Claude account, not content, so this ruling does not touch them.

Gateway: `http://localhost:20128/v1`, bearer token in the Windows user env var `OMNIROUTE_API_KEY`,
read inside the script and never printed or written to any file under `D:\claude os`. It must be
running — call `/v1/models` first; `ECONNREFUSED` means ask the owner to double-click
`Desktop\start-omniroute.bat`. **Never start it from a Claude shell.**

Seats verified 2026-09-07, fastest first: `groq/groq/compound-mini` 640 ms ·
`opencode-zen/big-pickle` 635 ms · `cl/google/gemma-4-31b-it:free` 886 ms · `cl/moonshotai/kimi-k3`
1.5 s · `cl/x-ai/grok-4.5` 1.6 s · `cl/z-ai/glm-5.2` 2.0 s · `cl/minimax/minimax-m3` 2.4 s ·
`gemini/gemini-flash-latest` 3.3 s. Gemini's free tier is **20 requests per day total** and needs
`max_tokens >= 200`.

---

## 2. The form is decided all the way down

Owner ruling, verbatim, and it is **general — every project, not only the book**: *"What you decide
fits better as a paragraph, you also decide the shape of the paragraph. If it fits better as a
bulleted sentence or any other form."*

The earlier rule settled the **outer** choice — paragraph, table, list, figure. This one says the
decision does not stop there. **Choosing "paragraph" is the start of a second decision, not the end
of the first.**

| Form chosen | The decision still to make |
|---|---|
| Paragraph | One flowing block · a lead sentence then a short list · a sentence broken into bulleted clauses |
| List | Bullets or numbers — **numbering means order or count matters, bullets mean it does not** · a definition list · an inline series kept inside the sentence |
| Table | Column order · whether the key column leads · whether rows group under a spanning header |
| Section | Heading depth · what gets promoted into a callout · the order of the parts |

**Do not ask which to use.** Pick it, build it, report the choice in one line.

**Where this bites in this chat:** `explanation` bodies, written-for-this-bank explanations, and any
theory prose. It does **not** touch the question schema, the option letters, the id scheme or
anything `START-HERE.md` §14 fixes.

⚠️ **The limit is absolute: creativity is in the FORM, never in the FACTS.** No clinical content is
invented, softened, reworded away or dropped to make a shape work. Terminology stays exactly as the
source writes it. Numbers, units and doses are never touched. **If a shape would force cutting
content, the shape is wrong — not the content.** And a defective printed key is still recorded, never
disputed: `answer` is always the bank's printed key, and the discrepancy is a note in `explanation`.

---

## 3. Git is Claude's job now

Changed in workspace `CLAUDE.md` §9 on 2026-09-07: **git is Claude's, not the owner's.** Do it, or
hand it to a cheap subagent. The mechanics are unchanged and still mandatory:

- `git commit -F <msgfile> -- <explicit paths>` — **never `git add -A`**, never a directory a
  subagent writes into. `git commit` commits the INDEX, not what you staged; the `-- <paths>` form is
  what stops another chat's staging being swallowed in. This has been paid for once already.
- ⚠️ `cd "<path>" && git …` is **denied by permissions**; `git -C "<path>" …` is not.
- `index.lock` means another chat is mid-commit — **wait, never delete it.**
- **A public push is confirmed with the owner first.** Unpushing does not unpublish.
- Repo is `mahmoudbanna23-ctrl/Herophilus`, **private**, work on `main`.

---

## 4. Routing, restated in one line

Rung 1 fleet / OmniRoute for anything made of words · rung 2 cheap Claude subagents for looking and
verifying · rung 3 you, the main chat, for judging and routing, hands only on what cannot be
delegated, and ask first · **never** for scanned-page vision, verification of fleet output, or edits
to `CLAUDE.md` / `MEMORY.md` / `settings.json`.

**Say which rung before you start each job.** Cost is step count, not starting context: agents stop
at ~70 tool calls, so brief them to close out at 60 and report honestly with work left. Write results
to disk as you go so a replacement resumes from the file. ⚠️ **A background agent dies when the
Claude Code process exits** — measured 2026-09-07; its file edits survive, its report does not.

---

## Unchanged, and worth re-reading before you resume

The ophthalmology endpoint is a separate, **unstarted** book — 2,442 pp / 293 MB, the largest of the
four. Do **not** split the PDF; split the page range. No ophtho toolchain exists in `bank-harness`.
Conditions are in `progress\ophtho-endpoint-scoping-2026-09-06.md`; the 28-section map and the
⚠️ printed-page = PDF **+1** flip are in `progress\ophtho-endpoint-section-map-2026-09-07.md`. Seam is
PDF 1390|1391. Launch from `progress\resume-ophtho-endpoint-A-chapters.md` and `…-B-exams.md`; A
builds the shared `-oph-ep` toolchain and both `index.html` tags at gate 0, and B is blocked until
that lands.
