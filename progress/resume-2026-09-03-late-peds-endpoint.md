# Pediatrics ENDPOINT — part 1 only (prompt v4, 2026-09-03 late)

Paste this whole file as the first message of a **fresh** chat. Opus 5, effort `high`, no Fast mode.
Written 2026-09-03 ~04:15 by the main `D:\claude os` chat, replacing v3. **Every number below was
measured from disk at that time.** Numbers move by the commit — re-measure, never quote this file.

---

## WHAT YOU OWN, AND WHAT YOU DO NOT

You are the **pediatrics endpoint chat**. Chat B owns the pediatrics **House** bank.

| You own | Chat B owns |
|---|---|
| `app\data\questions.peds.ep.js` | `app\data\questions.peds.js` |
| `content\peds\qb-pages\endpoint-*` · `…\ocr\ep1\` | `content\peds\qb-pages\house-*` |
| `app\assets\q\q-pd-ep-*.jpg` | `app\assets\q\q-pd-hd-*.jpg` |
| `tools\bank-harness\*-pd-ep.js` · `tools\ep-index\` | `tools\bank-harness\*-pd.js`, `*-pd10.js` |
| `progress\resume-peds-endpoint.md` · `pd-staging-brief.md` | `progress\resume-peds.md` |

**Scope is `Pediatrics endpoint part1.pdf` ONLY.** Part 2 is deliberately deferred by the user
(2026-09-02). Do not open it, do not plan for it, do not treat part 1 as half a job. When part 1
closes, say so and stop. **Paediatric surgery is entirely out of scope** (user ruling 2026-09-02,
`pd-staging-brief.md` §11a).

⚠️ **Stage EXPLICIT PATHS — never `git add -A`.** Chat B commits in the gaps between your commands.
`git commit -F <msgfile> -- <paths>`. If git reports `index.lock`, Chat B is mid-commit: **wait and
retry, never delete it.** A dirty tree containing Chat B's files is NORMAL.

⚠️⚠️ **`splice-pd.js` and `val-pd.js` write Chat B's live file** — `splice-pd.js` hardcodes
`questions.peds.js`, and its duplicate guard lets `pedep-` ids straight through. They are **Chat B's
files.** Never stage them, never run them on endpoint files. Your harness is **`val-pd-ep.js` /
`splice-pd-ep.js`**, and every splice you ever run is `splice-pd-ep.js`.

**Never touch:** `app\index.html` · `app\data\questions.js` · `app\data\questions.peds.js` ·
`modules.js` · `progress\ledger.md` · `content\peds\qb-pages\house-*` · `*-pd.js` · `*-pd10.js`.

---

## READ THIS MUCH, AND NO MORE

1. `progress\resume-peds-endpoint.md` — **read it whole; it was ~57k chars / ~14k tokens at 04:09
   and it is growing fast.** Re-measure first (`wc -lc`). ⚠️ **When it passes ~30k tokens it needs a
   `RESUME-READ-FROM-HERE-2` anchor at a clean section boundary** — that is the next anchor due in
   this project, and it is yours to place at a section close, not mid-section.
2. `tools\bank-harness\pd-staging-brief.md` — **§10a is mandatory**, see below. Also §7, §8, §9.
3. `progress\READING-COSTS.md` **before opening anything else in `progress\`** — and re-measure.
4. `Medical school\Herophilus\CLAUDE.md` and `MEMORY.md` load themselves. Do not re-read them.

⚠️ **Never `Read` a red-band file.** `grep -n` for headings, then `sed` the range. If you need
Chat B's journal, `sed -n '/RESUME-READ-FROM-HERE-2/,$p' progress/resume-peds.md` — ~14k, not ~47k.

---

## WHERE THE RUN STANDS — measured 2026-09-03 04:09

- Repo `main`, last commit `1f52f59`, **pushed, ahead 0**.
- **`app\data\questions.peds.ep.js` holds 216.** History: s1 Growth & Puberty 89 + s2 Nutrition 76
  = 165, folded 165 → 150 → 148; **s3 Gastroenterology `aa6881d` 148 → 215 → 213 with a fold**;
  **s4 Accidents `a10bc69` 213 → 216, no fold.**
- ⚠️ **A FOLD MAKES THIS FILE SHRINK LEGITIMATELY.** A drop with no fold commit behind it is a
  finding; a drop with one is not.
- ✅ **s1–s4 CLOSED.** s5 is mapped but **not staged**.
- Integrity at 04:09: `validate-all.js` exit **0**; `count-options.py` clean, 4,565 questions,
  the same 8 documented >5-option items and no new ones.

## YOUR NEXT TASK: STAGE §5 EMERGENCIES, pp.563–702

Mapping is already done and is in `resume-peds-endpoint.md` under **"Section 5 — Emergencies, mapped
2026-09-03 (not staged)"**. Read that block first. It carries:

- **61 questions, NOT the 60 the contents page prints.** The full answered-page list is in that
  block — use it, do not re-derive it.
- ⚠️ **p.584 IS AN ANSWERED PAGE.** The index mis-filed it `question` because its yellow measure is
  748 against a 520 baseline and a 1,400–3,400 range elsewhere — the highlight covers just the two
  characters **"B. 9"**. Q4 (pp.583 unanswered / 584 answered): GCS in a 3-year-old with fever,
  options **A.8 · B.9 · C.10 · D.11 · E.12**, key **B**, staged as zero-based index **1**.
  ⚠️ Text extraction returns only C, D, E from both pages — **read the option list off the image.**
  ⚠️ p.584's "Glasgow Coma Scale" reference table **must NOT be staged as a `fig`** — a figure
  renders between stem and options and this one hands over the answer. It belongs in the
  explanation, after the key. **A yellow measure is a proxy for a highlight, not the highlight.**
- **Index flags in range:** `thin` on 563 575 643 653 676 679 702 — **643 and 653 are `question`
  pages, read those two hard.** `options-differ` on 577 591 592 604 610 622 624 650 656 672 695 701
  — ⚠️ **spurious every time it has been checked**; check both `.txt` reads before a re-render.
- Clean question/answered alternation except the pp.583–585 run. Parity flips at p.675 and p.681.
  **No overflow boxes.**

**The reprint sweep is already run** (`reprint-pd-ep.js 563 702`): **no cross-bank hits at all** —
House's `emergencies` chapter holds 0 of its 243. Three self-reprints, all confirmed:
p.586 (Q5) ≡ p.630 (Q28) · p.689 (Q56) ≡ p.697 (Q60) · p.636 (Q31) ≡ live **`pedep-acc-2`** (p.559).

⚠️ **Stage and draft all 61 in full anyway** — the splice gate requires every staged id drafted
exactly once, and the fold is a **separate pass afterwards**. Do not skip a page because that table
names it. Expect **216 → 277 → ~274 live** after the fold.

⚠️ **The sweep reported "answered pages in range: 60" — it took the index's classification, so
p.584 was never swept.** Re-run the sweep against the staged file once §5 is staged, with p.584 in
the set. That is a measurement you still owe.

§5 is the first section since §1 large enough to want **two drafting halves** — split with
`part-A` / `part-B` and merge with `tools\bank-harness\merge-parts-ep.js`. The splicer refuses
unless its validator gate exits 0.

**Still owed, still unstarted:** the cross-bank **`alsoIn`** pass — 21 House hits in §3, plus §1 and
§2. ⚠️ **`pedhd-card-6..10` must NOT be folded** (5 identical stems, 5 different figures/keys; the
normaliser cannot see a figure). **Nothing folds across the two banks mid-stream** — `.ep.js` and
`.peds.js` stay separate while both chats write.

---

## ⚠️⚠️ §10a IS NOT OPTIONAL — TWO AGENTS DIED ON A CHAPTER LEAVING ZERO BYTES

The first wrote nothing. The second rendered a whole range, produced all 30 band crops, then died at
"now let's review them in batches" — **the entire render pass was lost.** Both obeyed the
append-one-entry-at-a-time rule in the letter; neither ever reached an entry to append.

**The fix:** write the file with its header and an empty array **before rendering anything**, then
loop **one book page at a time** — render, crop, read, append, `node --check`, next — and **never
render page N+1 before page N's entries are on disk.** It worked first try. Cheap re-renders are the
right trade: the render is seconds, the reading is what costs.

---

## COST RULES — these are why the session is fresh

- **Cost is STEP COUNT, not starting context.** The whole context re-sends every step and grows.
  Keep agents SHORT: one bounded job, then return. Split long work across fresh agents.
- **One agent at a time** (user ruling 2026-09-03; the 24-agent fan-out was costed and dropped).
- **Spawn `lean-drafter`.** Measured staging anchor: 128 tool uses / 38.6 min / ~86k tokens for
  11 pages / 26 questions. Drafting anchor: 62 tool uses / ~15.5 min / ~53k.
- **Render scanned pages inside the agent, never in this chat.** An image read here is re-sent with
  every subsequent request, forever.
- **OCR is not a source** — it drops whole lines, a different one per resolution. Use both `.txt`
  reads as a search index, and settle every option list on the image.
- **This session is one work block.** Journal as you go, then kill it — do not carry it past a day.

## REPORTING

- Cite `<file>.pdf p.<N>` on every clinical fact. No citation means it did not come from the source.
- Report faithfully: if a check failed, show the output. Say "done" only when verified **from disk**,
  not from an agent's report.
