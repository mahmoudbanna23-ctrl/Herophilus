# Redesign direction — 2026-09-07

The owner's ruling that started this: *"anyone that used Claude for a few days can tell at a
glance that the app is the work of Opus 5."* The fix chosen was not to hunt and sand off tells.
It was to get genuinely different design minds to design the app **blind**, from a product brief
that contained no description of the current design, and fuse what came back.

## How this was produced

Three independent inputs, none of which saw the others, and none of which read `app/index.html`:

1. **Astra** (Codex, `--profile astra`) — 1,046 words. `<scratchpad>/astra-direction.md`.
2. **Fable 5.1** (subagent) — 1,157 words. `<scratchpad>/fable-direction.md`.
3. **Outside sweep** (Sonnet + web) — 1,230 words, 13 sources. `<scratchpad>/web-sweep.md`.

The shared commission is `<scratchpad>/design-brief.md`. It described the product, the user, the
views and the hard constraints, and deliberately described no visual decision. Both design seats
were told not to read the repository, and neither did.

**Copy these four files into `progress/redesign-inputs/` before the scratchpad is cleaned.** They
are the evidence behind every decision below and they are not reproducible cheaply.

## The locked core — owner's ruling, 2026-09-07

Everything visual is on the table **except**:

- the name **Herophilus**
- the medallion logo, in all five places it lives (favicon, apple-touch, rail, splash, gate ×2)
- the **four module card images**
- the **Clepsydra** and her nine poses
- the `wardround.*` storage keys (not visual, but renaming one orphans every user's progress)

A direction that removes any of these is wrong on arrival, however good the rest of it is.

## What the app actually is today — measured, not remembered

Measured from `app/index.html` on 2026-09-07:

| Property | Value |
|---|---|
| `box-shadow` declarations | 141 |
| `linear-gradient` / `radial-gradient` | 25 / 26 |
| `backdrop-filter` | 16 |
| radius scale | `--r-1:4px --r-2:8px --r-3:12px --r:16px --r-pill:999px` |
| `text-transform:uppercase` | 39 |
| `letter-spacing` | 70 |
| subject brand colours | `--ent:#b4472f --ophtho:#5c7a52 --neuro:#6d4c7d --peds:#2e5f8a` |
| body/display faces | EB Garamond, Iowan Old Style / Palatino — serif already |
| Inter, or an indigo brand accent | **none** |

This matters, because it means the popular diagnosis is wrong for this app. The outside sweep's
top-ranked tells — untouched shadcn neutrals, Inter used twice, "AI purple" `#5E6AD2`, glass
cards over a hero, a three-feature-card grid — are **not present here**. The app was never
generic in that way.

What *is* present is a different family of tells, and they are the ones above: a five-step radius
scale, 141 shadows, 51 gradients, 16 `backdrop-filter`s in a codebase whose own rules forbid them
off fixed furniture, and uppercase-plus-letterspacing used 39 and 70 times as a hierarchy device.
That is the signature — not a wrong palette, but **decoration standing in for typography**.

The owner's own standing note said as much before any of this ran: *the tells are emoji, chirpy
copy and a scattered radius scale, not the layout.*

## The direction — a physician's casebook

**One sentence: the app is a bound casebook a student is annotating, not a dashboard watching
them.** Every surface is either the page, the ink on it, or a note in its margin.

Both design seats arrived here independently from different vocabularies — Astra called it a
*working medical folio*, Fable a *bound casebook*. Two seats that never saw each other's work
converging on the same governing metaphor is the strongest single signal this exercise produced,
and it is what the rest of the plan is built on.

### Where the two seats agreed — adopt without further argument

- **Serif for everything the student reads.** Stems, vignettes, explanations, theory.
- **The subject view is a table of contents, not a field of cards.** 153 numbered lines, group
  heads sticky, count and accuracy aligned right in tabular figures.
- **Subject colour-coding goes.** Colour stops meaning *which subject* and starts meaning *what
  happened*.
- **Warm paper light, lamp-lit dark. Never pure black, never pure white.** Fable's specific
  refinement: hold body contrast near 12:1 rather than maxing at 21:1 — a 21:1 page at 2 a.m. is
  glare. The outside sweep independently corroborates this from NN/g, which recommends 15:1–18:1
  rather than the maximum.
- **An unwritten chapter says "not yet written", never a zero or a dash.** Same row, same
  contrast, no quiz action. It is a promise, not a fault — and it tells the truth about the
  boundary of a hand-transcribed collection.
- **The quiz gives up everything that is not the question.** No rail, no progress bar, no score,
  no subject colour. Stem, options, then explanation revealed beneath without moving them.
- **Tabular lining figures on every number in the interface.** Georgia and Constantia default to
  old-style figures, which wreck a column of counts.
- **Print is a real deliverable, not a stylesheet afterthought.**
- **Refuse: confetti, streaks, badges, leaderboards, celebration on finishing, motivational copy,
  emoji.**

### Where they split — rulings

**1. The rail. Fable abolishes it; Astra keeps 208px.**
→ **Keep the rail.** Fable's page-column-with-live-margin is the more beautiful idea and it loses
anyway, because the medallion lives in the rail and the medallion is locked. Take Fable's margin
*idea* inside the content column instead: folio numbers, option letters and citations sit in a
left margin gutter within the page, not in the chrome.

**2. A sans UI layer. Astra sets navigation and controls in Arial; Fable uses one serif for
everything including buttons.**
→ **One serif family, Fable's way.** Astra's split is the safer, more conventional choice, and
conventional is the exact thing being fixed. A single family with two weights and true small caps
carries the whole interface, and it is the decision most responsible for the app not reading as
software.

**3. The live score. Fable deletes it from quiz, case and session; Astra keeps it labelled.**
→ **Fable's, and it is the plan's one real heresy.** Accuracy survives on the contents page, in
Review and in Weak chapters — places the student goes on purpose. It does not follow them through
a question set. The outside sweep supplies the evidence Fable was reasoning toward without it: in
a survey of medical students using Anki, *overwhelmed by the number of cards* (65.7%) outranked
*not enough time* (37.0%). Overload beats time pressure. A percentage recomputed after every
answer is overload wearing the costume of feedback.
→ **This is the decision most likely to be wrong for this particular owner, and it is question 1
in the interview.**

**4. Accent colour. Astra proposes teal; Fable proposes vermilion and ochre as a teacher's two
marking inks.**
→ **Fable's two inks**, because they mean something — wrong, and flagged — where teal means only
*interactive*. Astra's underlying rule is kept: every verdict is also a glyph and a word, so
colour is never load-bearing.

**5. Module card images vs. no second illustration.**
→ **The images stay; Fable's refusal is overruled by the locked core.** The mitigation is that
they appear in exactly one place — the home contents page — and nowhere else. The Clepsydra
remains the only illustration inside a working view.

### What this concretely means for the CSS

- **Radius: 5 steps → 2.** One for the module cards and modals, one for controls. `--r-pill` dies
  with the pill-shaped chips. The scattered scale is the owner's own named tell.
- **`box-shadow`: 141 → near zero on content.** Elevation is a hairline and a change of paper
  tone. Shadows survive only on genuinely floating furniture (modal, toast, the gate).
- **Gradients: 51 → the rail and the Clepsydra's own artwork only.** No gradient on a card, row,
  button or option.
- **`backdrop-filter`: 16 → fixed furniture only**, which is what `CLAUDE.md` §6 already requires
  and the code has drifted from.
- **`text-transform:uppercase` 39 and `letter-spacing` 70 → true small caps and size.** This is
  the single biggest visual change and the one that removes the "eyebrow chrome" tell.
- **Subject colours leave the UI** and survive only where the four module images already are.
- **`--ok` / `--bad` become the two marking inks**, and every use gains a glyph and a word.

### Motion — the complete list

Three, and no others. Page change: 120ms crossfade of the content column. Answer reveal: the
margin mark draws once, 200ms. Her pose change: 300ms crossfade. `prefers-reduced-motion` removes
all three. No motion on hover, scroll, lists, theme switch, loading, timers or focus. No spinners,
no skeletons.

Her existing exemption stands: the owner ruled her glitch is not gated on reading views.

### Housing her

She keeps the rail foot, on flat paper — no card, border, glow or vignette behind her, which is
what 141 shadows and 16 backdrop-filters currently give her. Because the interface holds no other
chromatic colour and no icon system inside a working view, nothing competes with her palette and
nothing imitates it. Her poses change on events, not on a timer. She does not print.

## Typography — the one open technical question

Fable proposes bundling **Literata** (OFL, variable, optical sizes, true small caps, tabular
figures) as local `woff2` files. That is legal here — it is a file in the folder, not a CDN — and
`app/data/fonts.js` already exists as the mechanism.

The app currently ships EB Garamond and an Iowan Old Style stack. Whether to add Literata, or
tune what is already there, is a real decision with a real cost: a variable serif with small caps
is roughly 150–250 KB, against an app that already ships 27.5 MB. Cheap in bytes, not free in
work. **Interview question 3.**

## What is deliberately NOT in this plan

- No change to any question, case, explanation or theory text. This is a design pass.
- No change to the data files, the aggregator, the storage keys or the sync.
- No new view, no removed view, no change to what the app does.
- No framework, no build step, no CDN, no npm — unchanged and non-negotiable.

## Execution — routing

This plan is a direction, not an implementation. Execution goes down the ladder: the CSS token
work and the mechanical sweeps (radius consolidation, shadow removal, uppercase → small caps) are
bounded, verifiable and belong to a seat. The main chat reviews the diff, runs `boot-check` and
`dist-check`, and commits.

**Nothing starts until the owner has answered the interview.**

## Owner's rulings — 2026-09-07

Interviewed after the direction was fused. These are decisions, not suggestions.

1. **The live score is removed from the quiz.** Quiz, case and session views show position only
   ("17 of 40"). Accuracy survives on home, in Review and in Weak chapters. Fable's heresy is
   adopted in full.
2. **Subject colour is kept, but only on the rail and on chapter/group headers.** It leaves
   buttons, rows, chips, options, progress and every other surface. This is the middle path
   neither seat proposed: subjects stay identifiable at a glance where the student is navigating,
   and the reading surface goes achromatic so the two marking inks mean something. ⚠️ **The four
   subject colours must therefore be measurably distinct from the wrong-ink and flagged-ink** —
   `--neuro:#6d4c7d` against vermilion, and `--ent:#b4472f` against vermilion especially, need
   measuring, not eyeballing.
3. **EB Garamond stays. Literata is not bundled.** Main chat's recommendation, accepted: the
   existing stack works, small caps are solvable without it, and 200 KB plus a day of fitting
   buys a difference nobody would see.
4. **Scope: the CSS/token pass AND the subject index rebuilt as a table of contents.** The quiz
   view's markup is NOT restructured — it changes only through the token pass and the score
   removal.
5. **Timing: before publishing.** The owner was told plainly this means the app is not in
   classmates' hands for the Peds OSCE on 14 September, and chose it anyway. Work to it. **Keep
   every stage independently shippable** so a publishable state always exists if the ruling
   changes mid-way.

## Execution stages

Each stage ends green on `node tools/boot-check/boot-check.js` (QUESTIONS 4049 · THEORY 81 ·
MODULES 4 · 0 console errors) and `node tools/build-launch.js && node tools/dist-check.js`
(8 passed, 0 failed), and is committed on its own.

- **Stage 1 — tokens and CSS.** Radius 5 → 2. `box-shadow` 141 → floating furniture only.
  Gradients 51 → rail and her artwork only. `backdrop-filter` 16 → fixed furniture only.
  `text-transform:uppercase` 39 and `letter-spacing` 70 → true small caps and size. Subject
  colour withdrawn to rail and headers. `--ok`/`--bad` become the two marking inks, each with a
  glyph and a word. No markup change, no JS change. Fully reversible.
- **Stage 2 — the live score.** Removed from quiz, case and session render paths; untouched on
  home, Review and Weak chapters. JS, small and surgical.
- **Stage 3 — the subject index.** Rebuilt as a table of contents: 153 numbered lines, sticky
  group heads, right-aligned tabular count and accuracy, "not yet written" in place of a zero.
  One view's markup.

⚠️ Print must be re-tested after Stage 1 — `CLAUDE.md` §6 requires the print block's selector to
stay `:root, :root[data-theme="light"], :root[data-theme="dark"]`, and the token work lands
directly on it. Portraits at 820×1180 and 1180×820 after any film, scrim or page-width change.

---

## What actually landed — 2026-09-07

Four commits on `main`, all pushed. Each was verified by the orchestrator against the repo's own
gates before it was committed, never on the executing agent's self-report.

| commit | stage | what |
|---|---|---|
| earlier | 1 + 1b | tokens, decoration, highlighter inks |
| `612d070` | 2 | the study run stops keeping score; colour stops being the only mark |
| `7885f90` | 3 | the subject page becomes a contents page |

**Two rulings from the owner override this document where they disagree with it.**

1. **Subject colour is kept**, on the rail and on chapter/group headers only. The line above
   reading "Subject colour-coding goes" is superseded. Colour leaves every other surface.
2. **Accuracy leaves the study run only.** The quiz, the case and the live session show position,
   not score. Accuracy survives on home, on this contents page, in Review and in Weak chapters.

**Numbers that look wrong and are not.** A healthy boot reports `QUESTIONS 4049 · THEORY 81 ·
MODULES 4` and renders **81** chapter rows, 80 of them carrying questions. Ophthalmology and
Neuropsychiatry are launch-locked and theory is locked, which holds 1,873 questions and 72 theory
chapters out at the aggregator. A gate expecting 153 rows or 5,922 questions is stale, not a loss.

**Three faults the Stage 2 agent's own green light did not catch**, found by independent checking
and fixed before the commit: removing one of three session stats left the grid painting two stats
into three tracks; and a bare `!` was prepended to two prose sentences that already named the
fault in words — exactly the machine-look this redesign exists to remove.

**Still open, and the owner's call, not Claude's: the host.** Netlify is ruled out by measurement
— its edge times out from this connection. Vercel and GitHub Pages are both reachable. The choice
is permanent because `localStorage` is per-origin, so a later move orphans every student's saved
progress. Firebase's authorised-domain list must gain the chosen host on the same day or Google
sign-in breaks. **Nothing publishes until this is decided.**
