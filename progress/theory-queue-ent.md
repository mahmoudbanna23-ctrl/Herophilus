# ENT theory queue — the 30 chapters, their lectures, and their word budgets

Working file for the theory sprint. **One chapter per subagent**, output to
`content\ent\theory-drafts\<id>.v2.draft.js` (`.v3` for `ent-tonsils`, whose `.v2` is a stale
earlier attempt). Format contract: `START-HERE.md` §14. Worked example the user approved:
`content\ent\theory-drafts\ent-stridor.v2.draft.js` — 14 sections, 3,759 words, 13 printed pages,
113 links.

**Budget rule (§14.1):** body words ≤ the summed `wc -w` of the chapter's own cached lecture files,
floor 600, cap 3,000. The `Budget` column below is that sum, already computed, rounded to the
nearest 100. **It is a gate checked at merge, not a suggestion.**

**⚠️ Lecture mapping is a first pass made from the chapter titles.** The agent writing a chapter
**checks it against the actual slide text and says so if it is wrong** — two lectures have already
been mis-cited from memory in this project (`ledger.md` §13). List the directory before citing.

**⚠️ `L28` does not exist.** `ent-sinuscomp` has no lecture of its own — verified in both trees,
the numbering runs `L27.2 → [gap] → L29`. It is written from the questions, the book and general
knowledge under §14's tagging rule, budget floor 600.

---

## Status

| | |
|---|---|
| **Done, new format** | `ent-stridor` (13 pp) |
| **Rewrite in flight** | `ent-aom`, `ent-tonsils` |
| **Rewrite owed** | `ent-csom` |
| **Not started** | 26 |

---

## The queue — ordered by question count, heaviest first

Heaviest first because a chapter's cost is dominated by **reading its question set**, and the long
poles should start earliest. Chapters under ~30 questions are cheap and can be batched two per
agent if the usage pool allows.

| # | Chapter | Qs | Lecture(s) | Budget |
|---|---|---|---|---|
| 1 | `ent-tonsils` ↻ | 117 | L3 (+L4, L9) | 2,400 |
| 2 | `ent-stridor` ✅ | 113 | L6, L12, L11 | 3,000 |
| 3 | `ent-aom` ↻ | 106 | L21.1, L21.2 (+L17,18) | 2,000 |
| 4 | `ent-csom` ↻ | 93 | L16, L17,18 | 1,600 |
| 5 | `ent-pharsupp` | 82 | L4 | 1,500 |
| 6 | `ent-nasalmass` | 76 | L26 (+L31, L32) | 1,800 |
| 7 | `ent-otalgia` | 75 | L17,18 | 700 |
| 8 | `ent-hoarse` | 67 | L2 | 2,100 |
| 9 | `ent-paedlar` | 67 | L12 (+L6) | 900 |
| 10 | `ent-facial` | 66 | L15 | 1,600 |
| 11 | `ent-earanat` | 66 | L22 | 600 |
| 12 | `ent-septum` | 65 | L24 (+L25.1) | 1,900 |
| 13 | `ent-rhin` | 64 | L29, L30 | 1,700 |
| 14 | `ent-dysph` | 62 | L10 | 1,300 |
| 15 | `ent-audio` | 58 | L13,14 | 1,700 |
| 16 | `ent-hearing` | 58 | L19.1, L19.2 | 1,000 |
| 17 | `ent-nasalobs` | 56 | L31, L32 | 1,100 |
| 18 | `ent-vertigo` | 56 | L20 | 700 |
| 19 | `ent-epistaxis` | 50 | L25.1, L25.2 | 2,100 |
| 20 | `ent-neck` | 48 | L5 | 900 |
| 21 | `ent-sinusitis` | 47 | L27.1, L27.2 | 1,600 |
| 22 | `ent-pharanat` | 44 | L1.1, L1.2 | 2,400 |
| 23 | `ent-phon` | 44 | L8 | 2,100 |
| 24 | `ent-noseanat` | 40 | L23 | 700 |
| 25 | `ent-otorrhea` | 29 | L17,18 | 700 |
| 26 | `ent-vocal` | 25 | L11 (+L2) | 600 |
| 27 | `ent-swallow` | 13 | L7 | 1,600 |
| 28 | `ent-facialpain` | 13 | L27.1, L27.2 (+L31) | 1,600 |
| 29 | `ent-osa` | 10 | L9 | 1,100 |
| 30 | `ent-sinuscomp` | 10 | **none — L28 missing** | 600 |

Cached lecture word counts (`content\ent\lectures\*.txt`), for recomputing a budget when the
mapping changes:

```
L1.1 1286 · L1.2 1132 · L2 2066 · L3 1791 · L4 1476 · L5 883 · L6 2289 · L7 1616 · L8 2088
L9 1131 · L10 1336 · L11 560 · L12 882 · L13,14 1671 · L15 1557 · L16 884 · L17,18 684
L19.1 661 · L19.2 320 · L20 723 · L21.1 553 · L21.2 424 · L22 538 · L23 647 · L24 527
L25.1 1368 · L25.2 753 · L26 676 · L27.1 1049 · L27.2 519 · L29 947 · L30 729 · L31 456 · L32 661
```

---

## ⚠️ Owed to this module from elsewhere — the deferral register

`START-HERE.md` §14.5 holds the live register. Currently owed **into** ENT chapters:

- `ent-paedlar` — **JORRP/RRP** (HPV, recurrence, no consistently effective treatment) and the
  **benign laryngeal tumour list** (juvenile papillomatosis, chondroma, haemangioma), both deferred
  out of `ent-stridor`'s L6.
- `ent-vocal` — the **causes of laryngeal paralysis**: central vs peripheral (traumatic, neuritis,
  neuropathy, neoplastic, idiopathic) and the surgical list (neck/laryngeal trauma, thyroid surgery,
  R.N.D, tracheostomy, scalene LN biopsy), deferred out of `ent-stridor`'s L6.

**Whoever writes those two chapters must include them.** Tick the register when merged.

---

## Reconciliation debt (§13.3)

Every chapter here is being written **before its banks close** — Grade Gain topic 10 and the whole
of House ENT are still to transcribe. When they close, **re-check each chapter's new questions
against its notes and patch**. That is a diff, not a rewrite, and it is not optional.
