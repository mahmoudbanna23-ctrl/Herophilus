# Chat B resume — PEDIATRICS HOUSE and NEUROPSYCHIATRY (written 2026-09-03, v3)

Paste into a **fresh Opus chat** at `D:\claude os\Medical school\Herophilus`.
**Supersedes the v2 of this file entirely** — same filename, rewritten in place, so `MEMORY.md`'s
pointer still holds. **One prompt per chat.** Do not paste into a live chat.

---

## MEASURE FIRST — a resume prompt is a claim about the past, not the present

```bash
node tools/bank-harness/validate-all.js
git log --oneline -3 && git status --short && git log --oneline origin/main..HEAD | wc -l
ls -la content/peds/qb-pages/house-ch13* 2>/dev/null || echo "ch.13 not started"
```

**Where this file and the disk disagree, the disk wins. Say where this file was wrong.**
The v1 of this file was wrong about git (`3c429a6` / "2 unpushed"; truth was `4aaec6b` / 8).

---

## WHAT YOU OWN, AND WHAT YOU DO NOT

You own the pediatrics **House** bank and **neuropsychiatry**. The endpoint chat owns the
pediatrics **endpoint** bank and is running in parallel, fast.

| You own | The endpoint chat owns |
|---|---|
| `app\data\questions.peds.js` · `questions.neuro.js` | `app\data\questions.peds.ep.js` |
| `content\peds\qb-pages\house-*` · `content\neuro\` | `content\peds\qb-pages\endpoint-*` |
| `app\assets\q\q-pd-hd-*.jpg` | `app\assets\q\q-pd-ep-*.jpg` |
| `tools\bank-harness\*-pd.js`, `*-pd10.js` | `tools\bank-harness\*-pd-ep.js` · `tools\ep-index\` |
| `progress\resume-peds.md` · `resume-neuro.md` | `progress\resume-peds-endpoint.md` |

⚠️ **Do not touch `questions.peds.ep.js` or `content\peds\qb-pages\endpoint-*`.** A dirty tree
full of the endpoint chat's files is NORMAL — it commits between your commands.

⚠️ **Stage EXPLICIT PATHS — never `git add -A`.** `git commit -F <msgfile> -- <paths>`. If git
reports `index.lock`, the other chat is mid-commit: **wait and retry, never delete it.**

---

## READ THIS MUCH, AND NO MORE

1. `progress\resume-peds.md` — **the whole file is ~47k tokens. NEVER read it whole.** It got a
   second anchor on 2026-09-03; open it this way and no other way (**~14k**, nothing deleted —
   every standing USER RULING and every chapter from ch.10 on sits below the marker):

   ```bash
   sed -n '/RESUME-READ-FROM-HERE-2/,$p' progress/resume-peds.md
   ```

   ⚠️ **Print the first and last line any new `sed` range resolves to before trusting it.** A range
   that silently returns everything and its partner that silently returns nothing are the same bug
   wearing two faces — both have bitten this project.
2. `tools\bank-harness\pd-staging-brief.md` (**§10a mandatory**) and `pd-draft-brief.md`.
   **§0 of both is new and binding** — the ~70-step cap.
3. `progress\READING-COSTS.md` **before opening anything else in `progress\`** — and re-measure;
   never quote its digits.
4. `CLAUDE.md` and `MEMORY.md` load themselves. Do not re-read them.

⚠️ **Never `Read` a red-band file.** `grep -n` for headings, then `sed` the range.
⚠️ **Entry fields are `n, p, boiler, stem, opts, key, note`** — `p` not `page`, `key` not `answer`.
A probe written against the wrong names returns undefined and prints a confident empty result.

---

## STATE MEASURED FROM DISK 2026-09-03 — re-measure, do not quote

| | |
|---|---|
| `Q_PEDS` (House) | **269**, holes 0 — **ch.1–12 spliced** |
| `Q_NEURO` | **268**, holes 0 — untouched |
| `Q_PEDS_EP` | **291** — **not yours, and moving fast** |
| `Q_ENT` / `Q_OPHTHO` | 2,240 / 1,598 — closed, not yours |
| git | `084b075`, pushed. Nothing of yours is uncommitted |

**House remaining: 124 questions, ch.13–20.** Bank ends book p.148; paediatric surgery beyond it is
**entirely out of scope**.

---

## YOUR NEXT ACTION — stage ch.13 "Respiratory disorders"

**Book pp.101–110 → PDF pp.51–56.** House is a **2-up spread scan**: each PDF sheet holds two book
pages, left half = book `2P − 2`, right half = book `2P − 1`, so **book B → PDF `floor(B/2) + 1`**.
Verified: PDF p.2 shows book pp.2–3; PDF p.8 shows book pp.14–15. Source is
`Semester 8\Pedo\Questions\pediatric .pdf` — **note the space in the filename.**

**Expected count: 27.** Settled visually, and the numbering is defective in a known way:

- ⚠️ **ch.13 skips Q11 entirely.** Highest printed number is **28**; 1–10 and 12–28 each appear
  once. Confirmed by re-rendering the foot of p.104 and the head of p.105 at 400 dpi — p.104 closes
  on Q10's "Answer: E." with nothing below but the rule, the folio and bleed-through; p.105 opens on
  a sharp, unambiguous "12.". **A publisher skip, not an OCR failure or a damaged glyph.**
  **The printed number is not a unique identifier — id assignment must not derive from it blind.**
- ⚠️ **ch.13 Q14–Q17 share one five-option menu that lists "Bronchiolitis" TWICE**, as both A and D.
  **That is how pp.105–107 print it.** Transcribe as printed, note it in `explanation`, and the
  `answer` never moves. This is a confirmed class, not a suspicion: `node tools\ep-index\dup-options.js`
  scanned all 4,591 shipped questions and found three exact duplicate pairs, **every one a printed
  defect that the transcriber caught and recorded.** Zero reached the app as errors.
- **A shared option menu PAIRS questions, it never folds them.** Write the comparative table once in
  the lowest-numbered member; every sibling names that anchor's id and gives only its own
  discriminating clinical token. **The split must not cut a shared menu** — establish the runs
  before choosing the cut, as ch.12 forced `n:1-16 / n:17-26`.
- **The marker counter is a FLOOR, not a count** — one `Answer:` line was simply dropped from an
  OCR file in ch.8, and again in ch.16. **Only a visual read settles a count.**

Then: `node tools/bank-harness/val-pd.js 13` → `splice-pd.js 13` (dry run first; it refuses unless
the validator exits 0) → `node tools\boot-check\boot-check.js`.

**Chapter map for ch.14–20 with page ranges and counts:** `progress\resume-peds.md`, the table
around line 659. Counts marked "visual" there were corrected against a text instrument that was
wrong — trust the visual column.

---

## ⚠️⚠️ THE RULE THAT COST THIS PROJECT TWO DEAD AGENTS — brief §10a

Two ch.12 staging agents died leaving **zero bytes**; the second after rendering the whole range and
making all 30 crops. Both obeyed "append one entry at a time" in the letter and never reached an
entry. **§10a is the fix:** create the file with its header **before rendering anything**, then loop
**one page at a time** (render → crop → read → append → `node --check`), and **never render page N+1
before page N is on disk.** It worked first try — the third agent's file existed one minute after
launch. **Keep §10a in every staging brief.**

---

## COST RULES — these are why the session is fresh

- **⚠️ AGENTS STOP AT ~70 TOOL CALLS AND HAND BACK** (user, 2026-09-03) — close out at 60, reported
  and stopped by 80, even with work left. **A partial pass reported honestly is a success.** It is
  §0 of `pd-staging-brief.md` and `pd-draft-brief.md`; **keep §0 when you edit a brief.**
- **Cost is step count, not starting context.** The whole conversation re-sends every step and it
  GROWS. Agents all start at 29–31k; the five priciest averaged **88–107k a step over 133–287
  steps**. Anchors: **staging 128 tool uses / 38.6 min / 86.4k tokens** for 11 pages / 26 q;
  **drafting 62 tool uses / ~15.5 min / ~53k**. Check with
  `node "D:/claude os/tools/token-audit.js" --agents`.
- **One agent at a time. `lean-drafter`, never `general-purpose`.** Verify its output from disk,
  never from its report. **Fan-out was costed and DROPPED by the user** (24 agents, ~1.9–2.2M
  tokens): *"fine let's skip it, it was a crazy idea anyway."*
- **Image work in subagents only** — an image read in the main chat is re-sent with every later
  request, forever.
- **Kill this session at the end of the work block.**

---

## NEURO — untouched, 268 live

Next: **topic 22, Q137 on PDF 94 / book p.89.** Bank identity **GRADE GAIN**. **ONE page per sheet,
NOT 2-up.** Offset **PDF = book + 5**; in scope **PDF 6–98 only**. Full map:
`progress\resume-neuro.md`, last block (it still uses the original `RESUME-READ-FROM-HERE` anchor).

**Neuro is exam 3 Oct; peds papers are 17 Sep. Peds first.**

---

## STANDING CONSTRAINTS

- **OCR is a search index, never a clinical source.** Never take a numeral, exponent, unit, dose or
  key letter from it.
- **⚠️ Contradictions are RECORDED, never corrected — `answer` NEVER moves.** The note goes in
  `explanation`. **A defective key is noted, never disputed.**
- **Cosmetic defects transcribed silently, never catalogued** — exception, always flagged: numbers,
  units, doses, exponents.
- **A repaired back-reference must not answer its own question** — hand-read each against its
  antecedent AND its own key; no instrument sees this.
- **An offsetting error is invisible to a sum — count the parts.**
- **Do not edit `progress\ledger.md`** while another chat is live.
- **Skip all OSCE content.**
- **Write/Edit for content, Bash for reads** — heredocs collapse backslashes and backticks are
  command substitution.
- **`git push` was BLOCKED by the permission layer for this chat** — tried twice, denied
  identically, the command never executed. Commit normally and **say what is unpushed**; the main
  `D:\claude os` chat pushes. Do not retry the push.
- **Exams:** Peds OSCE **14 Sep** · Peds papers **17 Sep** · ENT 22 Sep · Ophtho 27 Sep ·
  Neuro 3 Oct · Peds papers 18–19 Oct. **Scope is never cut** — if time runs short, say so loudly.

**TRUST THE DISK AND THE STAGING OVER THIS PROMPT, AND TELL ME WHERE I WAS WRONG.**
