# Drafting brief — Dr. HOUSE in ENT, Ear section

You are writing question-bank entries for a medical revision app. **Accuracy and grounding matter
more than speed. A wrong clinical claim is worse than no claim.**

## Input / output

- **Input:** `content/ent/qb-pages/house-ear-batch<N>.array.js` — `HD_BATCH`, verbatim staging.
  `n` = printed question number, `p` = book page, `key` = 0-based index into `opts`.
  Folds are already removed; every question in your file must be written.
- **Output:** `content/ent/qb-pages/house-ear-batch<N>.draft.js` — **entry objects only,
  comma-separated, no wrapper, no `var`**. One object per input question, in order.
- Read `content/ent/qb-pages/house-ent-ear-ch2.array.js` and any existing `enthd-ear-` entry in
  `app/data/questions.ent.js` first to match the established voice.

## Schema — copy exactly

```
{ id:'enthd-ear-<n>', bank:'house', module:'ent', chapter:'<chapter-id>',
  stem:'<stem, markdown bold on the load-bearing clause>',
  options:['..','..','..','..'],
  answer:<0-based index — MUST equal the staged key>,
  explanation:'<see below>',
  objective:'<one sentence: the fact this question tests>',
  source:'Dr. HOUSE in ENT, End-of-round MCQs 2025, p.<book page>. <notes>' },
```

## Non-negotiable rules

1. **`answer` is ALWAYS the bank's printed key.** Never change it. Where the key is defensible only
   on a technicality, or is arguably wrong, say so **inside `explanation`** and keep the key.
   **Never dispute a key; record it.**
2. **Every entry ends with this exact sentence, as its own final paragraph:**
   `Written for this bank — d house ENT mcq prints no explanation here.`
   This bank prints **no explanation boxes anywhere** — verified across book pp.23–107. The marker
   is not optional and **must never appear in `source`**.
3. **No clinical fact without a citation.** Cite the cached lecture as `` `L21.1) acute otitis media.pdf` ``
   and quote the slide's own words where you can. Caches are in `content/ent/lectures/*.txt`; the
   Ear decks are `L13,14) AudioVestibulae Evaluation` · `L15) Facial nerve disorders` ·
   `L16) Chronic otitis media` · `L17,18) Otorrhea and otalgia` · `L19.1) hearing loss` ·
   `L19.2) Tinnitus` · `L20) vertigo` · `L21.1) acute otitis media` · `L21.2) Otitis media with
   effusion` · `L22) Anatomy of  Ear Undergraduate`. **Read the slide before you claim it is absent.**
4. **A GAP IS ANSWERED, NOT DECLARED.** If the decks do not cover a point, supply it from general
   medical knowledge and tag it inline — *(not taken from the course material)* — as a short tag on
   the claim, never a dead-end sentence. **Prefer another bank's printed answer to outside knowledge**
   where one exists.
5. **Explain every distractor**, not just the key. A distractor is wrong for a reason and the reason
   is usually the teaching point.
6. **Never backtick an id you have not verified exists** in `app/data/questions.ent.js`. Cross-
   references are valuable — grep for the id first. You may freely reference other `enthd-ear-<n>`
   numbers inside your own batch range.

## Depth budget (adaptive — 2026-08-13 ruling)

- **~250 words** for straight slide-recall.
- **~520 words** for a clinical vignette, a defective or arguable key, a cross-bank divergence, or a
  gap you had to fill.
- Shared tables live in **one** entry; siblings point at it rather than repeating it.
- `source` is a **citation plus notes**, never a second explanation.

## House style for `explanation`

Open with a **bold one-sentence answer** stating why the key is right. Then the grounding, quoting
the slide. Then **why the others are wrong** — a compact markdown table is usually best. Close with a
**clinical bottom line** and any cross-references. Use `\n\n` between paragraphs (a literal
backslash-n pair inside the single-quoted JS string). Markdown tables render.

## Valid chapter ids — use ONE, exactly

`ent-earanat` `ent-aom` `ent-csom` `ent-otalgia` `ent-otorrhea` `ent-hearing` `ent-vertigo`
`ent-audio` `ent-facial` `ent-noseanat` `ent-epistaxis` `ent-rhin` `ent-sinusitis` `ent-sinuscomp`
`ent-septum` `ent-nasalmass` `ent-nasalobs` `ent-pharanat` `ent-tonsils` `ent-pharsupp` `ent-neck`
`ent-dysph` `ent-swallow` `ent-hoarse` `ent-vocal` `ent-phon` `ent-paedlar` `ent-stridor`
`ent-osa` `ent-facialpain`

Chapter is assigned **by content**, not by which chapter of the book the question sits in. The
book's Ear chapters map roughly: anatomy → `ent-earanat`; external ear → `ent-otalgia`/`ent-otorrhea`;
otitis media & effusion → `ent-aom`; CSOM & complications → `ent-csom`; facial nerve →
`ent-facial`; tinnitus & hearing loss → `ent-hearing`; audiological evaluation → `ent-audio`;
vertigo & vestibular diagnosis → `ent-vertigo`. **A question that straddles gets the primary
chapter, with the secondary noted in `source`.**

## ⚠️ Escaping — the project's most expensive problem

- Fields are **single-quoted JS strings**. Use the source's own **curly apostrophes** (’) rather than
  `\'` — more faithful and immune to the parse bug that has broken this file five times.
- A literal newline inside a field **ends the string**. Use the two-character `\n` sequence.
- Do **not** write a lone backslash for any other purpose.
- **Run `node --check` on a wrapper** before you finish: write your file, then verify with
  `node -e "const fs=require('fs');new Function('return ['+fs.readFileSync('<yourfile>','utf8')+']')()"`
  and fix anything that throws. **A file that does not parse ships nothing.**

## Defects already recorded for this section — do not re-litigate, but honour them

- **Q212 is printed twice on book p.69** as two different questions. Only the first is in your batch.
- **Q233 is skipped** — the number is unused; no content is missing.
- **Q56 / Q57 / Q58 are a three-question ladder on one vignette**: same 7-year-old, same options;
  *2 days* → wait and see, *6 months* → grommet, *6 months + nasal obstruction* → adenoidectomy.
  Q56 and Q59 are folds and are not in your batch; if you write Q57 or Q58, say this explicitly.
- **Q167 prints its option letters A, B, C, B** — the fourth should be D.
- **Q80 vs Q81** — identical options; *most serious* (key B) versus *most common* (key A).
- **Q92** keys *All of the above*; **Q91** keys A while option D reads *A and C*.
- **Q50** promises an attached photo that is not printed.
- **Q183** back-references *the opposite pattern of PTA* while printing its own audiogram.

## Return

A compact text summary only: entries written, chapter spread, any question whose key you consider
defective (with the reason), any gap you filled and tagged, any cross-reference you verified, and
confirmation that your file parses. **Do not paste the draft into your reply — it is on disk.**
