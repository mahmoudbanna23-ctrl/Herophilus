# Drafting brief — GG "End Exam 6 (Photos)", `opqb-t26-1 … -35`

You are drafting app entries for the Herophilus ophthalmology question bank. Read this whole brief
before writing anything. **Where this brief and the staging disagree, the staging wins** — it was
transcribed off the page pixels and re-audited; this brief is prose.

## Your inputs — read all four

| what | path |
|---|---|
| **Staging** (stems, options, keys, page — the authority) | `content\ophtho\qb-pages\gg-ee6.array.js`, entries begin line 57 |
| **Figure reads** (what each crop actually shows) | `content\ophtho\qb-pages\gg-ee6.figread.md` |
| **Spec header** (id space, key run, option counts) | `content\ophtho\qb-pages\gg-ee6.draft.js` — read it, do not edit it |
| **Caches** for explanations | `content\ophtho\lectures\*.txt` (29 decks) · `content\ophtho\book\*.txt` (13 chapters) |

Do **not** render or open any PDF. Everything you need is already cached. Do not read
`app\data\questions.ophtho.js` in full — it is 1,505 entries; `grep` it if you need to check an id.

## Output

Write a **bare comma-separated run of object literals** — no array wrapper, no trailing comma, no
`var`. Your block only; the header and the other blocks are assembled by the hub.

**Append as you go with `Edit`, never `Write` the whole file at the end.** Agents die on usage
limits, and a file that stops mid-run is recoverable while an unwritten one is not. Write one
entry, append it, move to the next.

## Entry shape

```js
{ id: 'opqb-t26-<n>', module: 'ophtho', chapter: '<from the live vocabulary>',
  bank: 'gradegain',
  stem: '...',
  options: ['...', '...', '...', '...'],
  answer: <zero-based index>,
  image: 'q-op-gg-ee6-<n>', imgAlt: '...', imgEssential: true,
  objective: '...',
  explanation: '...',
  source: '...' }
```

### The rules that are not negotiable

1. **`answer` is the bank's printed key, always.** The printed run for 1–35 is in the spec header.
   Q22–Q32 are eleven consecutive `A`; that was read three times and is **not** a transcription
   fault. **A defective key is noted, never disputed — the `answer` never moves.** If the key looks
   wrong to you, ship the printed key and put the disagreement in `explanation`, cited.
2. **`answer` is a zero-based index into `options` as you write them.** 34 questions print four
   options; **Q32 prints three (A–C)**. Do not pad it to four.
3. **`imgAlt` states modality and view ONLY** — "colour external photograph of the right eye",
   "slit-lamp view of the anterior segment". **It must not name the diagnosis or any finding that
   answers the stem.** This has given away six answers before. The diagnostic read goes in
   `explanation`.
4. **`image` is the basename without extension**: `q-op-gg-ee6-<n>`, matching the printed question
   number. The `ee6` is load-bearing — `q-op-gg-11.jpg` already exists and belongs to a different
   question. All 35 crops are confirmed present.
5. **Every entry ends its `explanation` with exactly this marker**, because this section prints no
   explanation boxes at all:
   `Written for this bank — ophthalmology qb.pdf prints no explanation here.`
   **The marker never appears in `source`.**
6. **`source` is a citation, never a second explanation.** Shape:
   `ophthalmology qb.pdf p.<N>, Q<n> (Grade Gain, "End Exam 6 (Photos)"), key p.159. Supporting: \`L15,16) Cornea\` (what it gave you); ...`
7. **Explain every distractor**, not just the key — why each wrong option is wrong.
8. **Budget is adaptive**: ~520 words where the question is a vignette, turns on a defect or a
   divergence, or needs a gap filled; **~250 words for straight slide-recall**. Do not pad.
9. **A gap in the material is answered, not declared.** If the caches do not cover it, fill it from
   general medical knowledge and tag the claim `not taken from the course material` — a short tag on
   the claim itself, never a dead-end sentence and never a refusal to answer.
10. **Cross-references only to ids that exist**: `opmcq-c1-*`…`opmcq-c20-*` and `opqb-t1-*`…`opqb-t25-*`.
    **Do not cite `opqb-t26-*`, `opqb-t27-*` or `opqb-t28-*`** — t26 is what you are writing and the
    other two are being spliced in the same pass.
11. **Use the figure read, but read it critically.** It says plainly where a crop does *not* support
    the printed key (Q1 is an example). Where the crop is inconclusive, say so in the explanation and
    reason from the stem and the caches — do not invent a finding the figure read did not see.
12. **Chapter must come from the live vocabulary — these 35 tokens and no others.** An invented
    token fails validation. Counts are the current corpus, given so you can sanity-check placement:

    `op-acute`(23) · `op-ant`(2) · `op-cat`(62) · `op-cat-surg`(57) · `op-conj`(112) ·
    `op-cornea`(85) · `op-cornea-surg`(23) · `op-glauc`(123) · `op-insid`(33) · `op-intro`(18) ·
    `op-intro-exam`(3) · `op-lac`(70) · `op-lid`(100) · `op-neuro`(34) · `op-neuro-motil`(36) ·
    `op-neuro-optic`(49) · `op-onc`(35) · `op-orbit`(35) · `op-orbit-mass`(29) · `op-pupil`(47) ·
    `op-red`(3) · `op-red-mgmt`(2) · `op-refract`(51) · `op-refract-astig`(32) · `op-ret`(46) ·
    `op-ret-dr`(49) · `op-ret-vasc`(44) · `op-sclera`(34) · `op-squint`(53) · `op-systemic`(22) ·
    `op-trauma`(68) · `op-uvea`(72) · `op-va`(30) · `op-vissym`(18) · `op-white`(5)

    ⚠️ **Do not try to derive this list yourself with a grep.** `app\data\questions.ophtho.js` mixes
    two key styles — quoted (`"chapter":`) and bare (`chapter:`) — so a single-pattern grep silently
    returns a fraction of the vocabulary. It returned **three** tokens of the thirty-five when tried.
    The list above was produced by loading the array and reading the values.

### Escalate, do not decide

If the staging is ambiguous, two options read as equally correct, the key contradicts both the
figure read and the caches, or you cannot tell which chapter a question belongs to — **stop and
report it to the parent**. Do not guess and do not quietly pick one. Flagging one uncertain entry is
cheap; a wrong clinical claim shipped into an exam bank is not.

### Escaping — this project's most expensive bug

Never type a literal backslash or a backtick into a shell heredoc. Use the `Write` and `Edit` tools
for all content writes; use Bash only for reads, greps and validation. If you must build a
backslash in code, use `String.fromCharCode(92)`. After writing, grep back what you wrote — the
write reports success either way.

### Cosmetic defects

Typos and punctuation faults in the source bank are transcribed silently and **not** reported.
Numbers, units and doses are the exception — flag any of those that look wrong.
