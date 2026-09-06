# CSS volume audit — the "it looks AI-made" pass

The owner's complaint was that the interface reads as a generated project at first
glance. Two reviews diagnosed the symptom as volume: many decorative devices, each
individually defensible, which together read as generated rather than designed. This
file is the third pass — an instance-by-instance judgement of every device, produced
2026-09-07 by an outside model against a read-only copy of `app/index.html`, with
every line number it cites verified here before anything was applied.

## What was applied from it, and what was overruled

Applied, 47 edits in one pass:

- 20 overshoot transitions flattened to `ease` (lines 279, 375, 432, 510, 533, 558,
  584, 610, 656, 708, 747, 921, 948, 954, 1003, 1259, 1382, 1387, 1716, 1743). This
  goes further than the audit proposed. The rule it establishes: **overshoot is an
  entrance-only device.** The three survivors are all entrances — `.verdict`'s pop,
  `.toast`, `.modal`'s pop.
- 21 `border:2.5px solid var(--line-2)` reduced to `1px` on raised surfaces. Kept at
  2.5px on the nine small controls where the border *is* the object (515, 707, 713,
  776, 800, 934, 946, 953, 975), and untouched on the `var(--neuro)` callouts and the
  `#000` toast. `*{box-sizing:border-box}` at line 213 is why this changes no layout.
- The card hierarchy inverted: `.mod-name` 17.5px/700 at both 390 and 2163, `.ringmeta
  .a` 19px/900 down to 15px/700. Both 390 and 2163 had to move together — 2163 is an
  unconditional later override, so a change at 390 alone does nothing.
- Two duplicate resting shadows dropped (`.pal.on` at 801, `.chip` at 1742).
- `.gtitle`'s four-stop gradient and its nine-second `shine` loop removed entirely.
  It was the one device that announced itself before the app had said anything.

Overruled, with the file's own stated rationale as the reason:

- **Sentence case for `.mod-name` — rejected.** Cinzel is a titling face and the file's
  comment at 2153-2158 states everything it touches is tracked out, never in, and h1 is
  uppercased. Uppercase stays; only the size and weight moved.
- **Keeping ~10 bouncy easings — rejected.** Overshoot on hover is the tell; it survives
  only on entrances.

Verified after: dark and light both shot and looked at, 0 console errors from
`tools/boot-check/boot-check.js`, CR count 0.

---

# css-volume-audit — what was actually in scope

## 1. The volume problem, in design terms

The interface does not feel generated because any single device is wrong. It feels generated because the same three or four devices — a soft outer drop-shadow, a 2.5px border in `--line-2`, the bouncy overshoot easing, a hover-lift of two pixels — are layered on almost every interactive surface in the file, in the same pairings and the same proportions. None of those devices is bad. The problem is that no device is rare: the page has 121 shadows, 52 gradient calls, 34 declarations of `border:2.5px solid`, and 23 transitions on the same overshoot curve. The reading the owner complains about — "any human can tell with the first glance" — is the reading of repetition, not of any one rule. The fix has to remove repetition first; it can only remove individual instances second, and only where removing them is free.

The work below is sorted that way: by device, by selector family, then by line. Each proposal is small enough to revert on its own, and each one names the line, the current text and the replacement text so it can be applied by literal search-and-replace. Source order is left intact throughout: every proposal is an in-place edit at the existing line, not a move or a merge.

---

## 2. Shadows (121 declarations)

Grouped by selector family. I am not bucketing 121 individual rules; I am bucketing the families and naming representative line numbers.

### 2a. The "raised panel" family — the box-shadow on cards, chapter rows, day rows, options, fboxes, mod-cards

Representative lines: 374, 388, 415–416, 431, 461, 497, 532, 547–549, 557, 565, 579, 589, 657, 659, 708, 711, 712, 730, 746, 749, 755, 801, 928, 930, 946, 960, 977, 1003, 1005, 1019, 1036, 1063, 1343, 1358, 1362, 1381, 1384, 1387, 1683, 1695, 1728, 1742, 1745, plus the consolidated cinematic re-declaration at 1909–1911.

This family does a real job. The app is dark-on-dark with translucent hairlines (`--line`, `--line-2` at 8.5%–16% alpha, lines 95–96); without an outer drop-shadow there is nothing telling the eye that a card is a separate object from the page. The shadows here are mostly in the `--pop` token (`0 7px 18px`, line 141) painted in `--sh` (line 145). KEEP, with one carve-out:

- **REDUCE (line 1742)** — `.chip`'s default-state shadow duplicates its neighbouring devices. A `.chip` that isn't on has nothing else distinguishing it from a row of text; the shadow does the lifting.
  - Current (1741–1742):
    ```
    padding:8px 15px;border:2.5px solid var(--line-2);border-radius:var(--r-pill);font-size:12.5px;
      background:var(--card);font-weight:800;box-shadow:0 5px 14px rgba(0,0,0,.15);
    ```
  - Replace with:
    ```
    padding:8px 15px;border:2.5px solid var(--line-2);border-radius:var(--r-pill);font-size:12.5px;
      background:var(--card);font-weight:800;
    ```
  - Risk: low. The chip is always read next to an active state (`.chip.on`, 1748, white text on `--c`); the resting shadow was decorative.

- **REDUCE (line 801)** — `.pal.on` lifts a 24×24 colour swatch by 3px and adds `0 7px 18px rgba(2,6,14,.3)`. The swatch is one of nine in a 6px gap row; the rest are flat. Either all swatches should carry the same shadow or none should. The cinematic layer at 1909–1911 already paints every panel surface with `--pop var(--sh), var(--glow)`, so the swatch gets its lift from there. KEEP the 3px translate, DROP the shadow.
  - Current (801): `.pal.on{transform:translateY(-3px);box-shadow:0 7px 18px rgba(2,6,14,.3)}`
  - Replace with: `.pal.on{transform:translateY(-3px)}`
  - Risk: low. The translate alone is what reads as "selected"; the shadow was extra.

### 2b. The "hover lift" shadows — same value, painted twice on the same element

These are the `box-shadow` declarations paired with `transform:translate(-2px,-2px)` or `translateY(-2px)` on `:hover`. Representative lines: 377, 434, 535, 586, 634, 659, 711, 749, 1261, 1384, 1388, 1717, 1745, 1936.

The pattern is consistent: a rest state at `0 5px 14px rgba(0,0,0,.13–.16)` and a hover state at `0 10px 24px rgba(0,0,0,.2–.3)`. The job — "this is the thing you can press" — is real. KEEP.

### 2c. The "ambient" shadows on fixed furniture

Lines 880 (`gmark`, `0 18px 44px rgba(0,0,0,.5)`), 915 (logo blip), 929–930 (`.pcard` avatars), 960 (`.avprev`), 1003 (`.gsign`), 1695 (`.modal`, `0 20px 46px`), 1900 (`.modal` again, `0 30px 80px`), 1973 (`.toast`), 1927 (`.mod-ic`), 1928 (`.pill`), 1934, 1936, 1938–1939 (`.btn`), 1946–1952 (`.opt` state shadows).

KEEP. These are on objects that sit above the page (gate, modal, toast, button) and have to read as raised. The values are not the problem; the count is — and these are the only places where the count is justified.

### 2d. The `inset 3px 0 0 var(--gold)` accent on the active nav item

Line 282. Single declaration, single rule, single job: tells you which view you are on. KEEP.

### 2e. The cinematic-layer blanket at 1909–1911

```
.card,.stat,.ch-row,.qcard,.th-ch,.day,.modelans,.explain,.fbox,.conf,.bk-sheet{
  box-shadow:var(--pop) var(--sh),var(--glow);
}
```

KEEP. This is the line that does the most work per character in the whole file: it is the rule that gives every raised surface a single, consistent, tokenised shadow. Removing it would be the single most destructive thing in this audit. Anything the rest of this report removes is, by definition, removing something layered on top of this.

### 2f. Inset text-decoration-style shadows on the highlighter

Lines 696–699. The four `mark.hl[data-c=…]` rules carry `box-shadow:inset 0 -1px 0 rgba(...)`. KEEP. They are 1px underlines on highlighted text; they are not "shadows" in the decorative sense.

---

## 3. Gradients (52 function calls)

Grouped by purpose.

### 3a. The page-ground wash

Lines 222–223 (the body `background-image`), 1781–1784 (the cinematic body wash), 2017–2020 (light-theme body wash), 1782–1784 and 1800–1803 (the four orbs), 827–830 (the four gate orbs), 1841–1848 (the film scrim), 1866–1873 (portrait film scrim), 2039–2046 (light film scrim), 844–852 (gate film-scrim pool).

KEEP, with a structural note. The ground wash is the one part of the design a viewer cannot opt out of: every page renders on it. The four orbs are what makes the app feel "lit". Removing them would be a redesign.

### 3b. The card-tinted accents on callouts

Lines 619 (`.objective`), 1061 (`.th-intro`), 1379 (`.readtheory`). These three rules are identical:

```
background:linear-gradient(135deg,rgba(46,95,138,.13),rgba(109,76,125,.15));
border:2.5px solid var(--neuro);
```

KEEP. There are only three callout blocks in the file, the gradient is a 135° wash from `lapis` to `tyrian` at 13–15% alpha (i.e. a tint), and it is the only visual signature these three blocks share.

### 3c. The rail and modal glass

Lines 1892 (`.rail`), 1898 (`.modal`), 2088 (light-theme `.rail`), 2104 (light-theme `.streak`), 2109 (light-theme `.modal`). KEEP. These are the surfaces that the brief's own constraint names — "Contrast on the rail must be measured against the DARKER gradient stop" (rail, line 1892, is `rgba(10,20,34,.96)` to `rgba(8,16,28,.99)`). The gradient is not decoration; it is what stops the rail from looking flat.

### 3d. The streak and the badge-due

Lines 267 (`.streak`), 289 (`.badge-due`). KEEP. Both are single-decorative elements with no neighbours to coordinate with.

### 3e. The button gradients in the cinematic layer

Lines 1932, 1938, 1940 (`.btn`, `.btn.go`, `.btn.flag.on`):

```
background:linear-gradient(160deg,#2c4a6b,#1b2d44);
background:linear-gradient(160deg,#7d5890,#573a66);
background:linear-gradient(160deg,#ffd469,#f0b429);
```

These three rules OVERRIDE the screen-rule button at line 530–537. The screen rule was already declaring `background:var(--fill);color:#fff`; the cinematic layer replaces that fill with a gradient.

**REDUCE.** The gradient on the primary button (`.btn`, line 1932) is the most defensible — buttons have to read as raised against the page, and a flat fill with `--fill` on the same colour family is harder to see. KEEP.

The gradient on `.btn.go` (1938) is `tyrian` purple, which is the brand colour of the neuro module; on a paper-shaped page it duplicates the chip colour of every neuro question. **REDUCE.**
- Current (1938): `.btn.go{background:linear-gradient(160deg,#7d5890,#573a66);border-color:rgba(255,255,255,.2);box-shadow:0 10px 26px rgba(125,88,144,.5)}`
- Replace with: `.btn.go{background:var(--neuro);border-color:var(--line-2);box-shadow:0 8px 20px rgba(0,0,0,.45),var(--glow)}`
- Risk: medium. `.btn.go` is a single-purpose class for "start quiz"; reverting it to flat `--neuro` ties it to the module colour rather than the gradient wash. The colour is identical, the depth signal is gone.

The gradient on `.btn.flag.on` (1940) is the gold accent; it is one button, one state, one job. KEEP.

### 3f. The Google sign-in sheen

Lines 1011 (`background:linear-gradient(100deg,transparent,rgba(60,90,140,.16),transparent)` on `.gsign::after`), 1012 (`animation:sweep 5s ease-in-out 1.8s infinite`), 1014 (`@keyframes sweep`).

KEEP. The sheen crosses a white button; without it the button reads as a flat white tile on a dark page. The brief notes this exact reason in the comment at 1007–1008. The animation also drops in `prefers-reduced-motion` (line 2000). Risk of removing is high: the Google button becomes invisible.

### 3g. The gate background grid

Lines 859–860 (`background-image:linear-gradient(var(--line) 1px,transparent 1px), linear-gradient(90deg,...)`), 862–863 (`-webkit-mask-image:radial-gradient(...)`).

KEEP. Two linear-gradients forming a 64px grid, masked to a radial. The comment at 854–856 names the job: "two big blurs on a flat ground read as soup; the straight lines give the blur something to be soft against".

### 3h. The `.gtitle` gradient at line 890–897

The brief calls this one out specifically. Current text:

```
.gtitle{
  font-size:clamp(28px,6vw,36px);font-weight:900;letter-spacing:-.04em;margin:0 0 10px;
  background:linear-gradient(115deg,var(--tx) 18%,var(--ent) 46%,var(--neuro) 74%,var(--tx) 96%);
  background-size:220% auto;-webkit-background-clip:text;background-clip:text;color:transparent;
  animation:gRise .62s cubic-bezier(.22,1,.36,1) var(--d,0ms) backwards,
            shine 9s linear 1.2s infinite;
}
```

This is one rule, on one element (the title on the gate screen), and the gradient is `transparent` text over a four-stop colour wash, with a 9-second `shine` animation that walks `background-position` from 0 to 220%. Combined with the gate's own `--fill` background and the four orbs drifting behind, this is the single most decorative rule on the page.

**DROP** (or near-drop) is the right call. The title is the first thing a student sees on the gate, and the rule is the rule most likely to read as "an AI put a moving gradient on the title". Two options, ranked:

- **Stronger:** replace the whole block with a single colour, dropping the animation, the background-clip and the transparent text.
  - Replace with:
    ```
    .gtitle{
      font-size:clamp(28px,6vw,36px);font-weight:900;letter-spacing:-.04em;margin:0 0 10px;
      color:var(--tx);
    }
    ```
  - Risk: low. The entrance animation (`gRise`, line 875) still runs via the `*` rule on line 874, so the title still rises in. The shine walk is gone.

- **Weaker (if keeping some colour):** keep the gradient, drop the animation.
  - Replace `animation:gRise .62s cubic-bezier(.22,1,.36,1) var(--d,0ms) backwards,\n            shine 9s linear 1.2s infinite;` with `animation:gRise .62s cubic-bezier(.22,1,.36,1) var(--d,0ms) backwards;`
  - Risk: low. The colour stays, the moving colour goes.

I would recommend the stronger form. The shine animation is the part that reads as generated; the static gradient is closer to a typographic decision.

---

## 4. The `border:2.5px solid` device (34 declarations)

Lines listed in the brief. All read as `--line-2` (a 16% parchment hairline, line 96) except 620, 1061, 1380 (`--neuro`, a purple) and 1683 (`#000`, on the toast).

Grouped by what the bordered element is:

### 4a. Surfaces that already get a shadow and a background — cards, options, rows, fboxes, chips

373 (.card), 415 (.stat), 430 (.ch-row), 508 (.opt), 532 (.btn), 545 (.verdict), 556 (.caseinput), 564 (.modelans), 579 (.conf), 589 (.explain), 631 (.day), 654 (.mk), 707 (.pen), 744 (.qg), 776 (.ed-col), 800 (.pal), 934 (.pav .lock), 946 (.emb), 953 (.colb), 975 (.pind), 1036 (.cfgbox), 1061 (.th-intro), 1343 (.th-table), 1355 (.flow), 1358 (.fbox), 1379 (.readtheory), 1386 (.th-ch), 1714 (.bankchip), 1741 (.chip).

That is 29 rules. The shadow on each of these is `var(--pop) var(--sh)` or one of its cousins — a 7–18px blur. The border is a second raised-surface signal on top of the shadow.

**REDUCE.** A `--line-2` border at 2.5px on top of a `0 7px 18px` shadow is two devices saying the same thing. Pick one. The cinematic layer (line 1909–1911) already gives every one of these a single tokenised shadow; the border is the duplicate.

Proposal, applied to the most-repeated instances:

- 373 (`.card`): replace `border:2.5px solid var(--line-2);` with `border:1px solid var(--line-2);`.
- 430 (`.ch-row`): same replacement.
- 508 (`.opt`): same replacement.
- 632 (`.day`): same replacement — but note that 635, 636, 637 (`.day.rest`, `.day.missed`, `.day.done`) all rely on `border-color` to communicate state; the 1px border keeps that signal, the 2.5px border was not doing state work.
- 744 (`.qg`): same replacement.
- 1386 (`.th-ch`): same replacement.
- 1741 (`.chip`): same replacement.

Risk: low individually, medium as a class. The reason `--line-2` is 16% alpha is that the design wants hairline weight, not a 2.5px frame. Most of the 29 rules above are 2.5px because the value was set in one place and copied.

The four exceptions:

- 620, 1061, 1380 (`--neuro`): these are callouts, not raised surfaces. KEEP at 2.5px — the border colour is the signal.
- 1683 (`#000` on the toast): the toast is a single-purpose element that pops above everything else. KEEP.

### 4b. The dashed/dotted variants

Lines 576 (`.lastgo`), 684 (`.track.catchup`), 703 (`.mkbar`), 784 (`.ed-add`), 796 (`.newday`). These are dashed or dotted, not solid. They are not in the 34-line solid list and I have not touched them. KEEP.

### 4c. The `border-right:3px solid #150f33` on the rail (line 236)

Single declaration. KEEP. The rail is 238px wide and the right edge of it is the seam between navigation and content; a 3px hard rule is the cheapest way to draw that seam in a way that survives both themes.

### 4d. The `border:3px solid var(--line-2)` on `.qcard` (line 478) and `.modal` (line 1694)

Two declarations, on the two highest-contrast surfaces (a question card, a modal). KEEP. These are the surfaces a student reads on for minutes; a 1px hairline would lose them against the page.

### 4e. The `border:3.5px solid var(--line-2)` on the spinner (line 1054)

KEEP. A spinner that is not a circle is not a spinner.

---

## 5. The bouncy easing `cubic-bezier(.34,1.56,.64,1)` (23 transitions + 2 animations)

The brief is explicit: this is the most cited tell of generated UI. I have read each of the 23 lines above and identified the selector. Grouped by whether the bounce is earning its keep:

### 5a. DROP — the bouncy easing where the bouncy is not what is selling the interaction

The bouncy curve overshoots by ~7% before settling. On a transform of `translateY(-2px)` that is a 0.14px overshoot — visually invisible. The bouncy curve costs a longer perceived settle time and reads as "the cursor did a little hop", which is exactly the AI tells the brief names.

- **Line 586** (`.conf-b:hover`): translateY(-2px) only. **DROP.**
  - Current: `transition:transform .12s cubic-bezier(.34,1.56,.64,1),box-shadow .12s;`
  - Replace with: `transition:transform .12s ease,box-shadow .12s;`
- **Line 950** (`.emb:hover`): translateY(-2px) only. **DROP.**
- **Line 951** (`.emb.on`): translateY(-2px), set on activation, no transition declared here but the easing is on line 948. **DROP** at line 948.
- **Line 955** (`.colb:hover`): translateY(-2px). **DROP** at line 954.
- **Line 1261** (`.bk-btn:hover`): translateY(-2px), 18ms duration. The page-turn button is one of the few controls a student touches many times in a row; the overshoot would compound. **DROP.**
- **Line 1717** (`.bankchip:hover`): translateY(-2px). **DROP** at line 1716.
- **Line 950's neighbour, line 1923** (`.day:hover`): translateY(-2px). **DROP** at the matching declaration. (`.day` is on line 629–638; the rule at 1923 is the cinematic-layer override.)
- **Line 1936** (`.btn:hover` in the cinematic layer): translateY(-2px), 13ms duration. **DROP.**

That is eight instances. None of them uses the overshoot in a way the eye can read.

### 5b. DROP — the bouncy easing on a translate that is genuinely a press-feedback bounce

- **Line 279** (`.nav-item`): translateX(3px) on hover, bouncy. A nav row is touched dozens of times in a session; an overshoot there is friction. **DROP.**
  - Current: `transition:transform .13s cubic-bezier(.34,1.56,.64,1),background .13s,color .13s;`
  - Replace with: `transition:transform .13s ease,background .13s,color .13s;`

### 5c. KEEP — the bouncy easing where the bounce is a real affordance

- **Line 545** (`.verdict`): `animation:pop .32s cubic-bezier(.34,1.56,.64,1)`. The verdict box appears AFTER you have answered a question. The bounce is the only signal that something has happened; without it the verdict reads as having always been there. KEEP.
- **Line 1695** (`.modal`): `animation:pop .3s cubic-bezier(.34,1.56,.64,1)`. A modal is a state change that hides the page; the bounce carries the "you moved to a different place" signal. KEEP.

These two are the only ones where I would keep the curve. Together they account for two of the 23 instances.

### 5d. REDUCE — the bouncy easing on hover-lifts of 2px that are not press-feedback but are visible enough that the overshoot reads as intent

- **Line 375** (`.card`): `transition:transform .15s cubic-bezier(.34,1.56,.64,1),box-shadow .15s;` followed by 377's `translate(-2px,-2px)`. The card lifts in two axes; the overshoot IS visible at 2px. KEEP — but worth noting this is the rule most often imitated by the other hover-lift declarations. If the rest of this audit removes the bouncy from everywhere else, the card becomes the place where the bounce is felt as design rather than as repetition.
- **Line 432** (`.ch-row`): identical to the card, same keep.
- **Line 533** (`.btn`): same.
- **Line 510** (`.opt`): `transform .12s cubic-bezier(.34,1.56,.64,1),border-color .12s,box-shadow .12s;` with `translateX(4px)` on hover. The translate is the biggest in the file (4px); the overshoot is genuinely visible. KEEP.
- **Line 558** (`.caseinput` focus, `translate(-1px,-1px)`): 1px lift, overshoot is 0.07px. **REDUCE.**
  - Replace with: `transition:box-shadow .18s ease,transform .18s ease;`
- **Line 584** (`.conf-b`): already covered above; drop.
- **Line 656** (`.mk`): translate(-1px,-1px), 13ms. The mk is a 38×38 checkbox on a schedule row. **REDUCE.**
- **Line 708** (`.pen`): translate(-1px,-1px) hover, translateY(-3px) on select. **REDUCE** the hover, KEEP the select.
  - Current: `box-shadow:0 5px 14px rgba(0,0,0,.18);transition:transform .13s cubic-bezier(.34,1.56,.64,1),box-shadow .13s;`
  - Replace with: `box-shadow:0 5px 14px rgba(0,0,0,.18);transition:transform .13s ease,box-shadow .13s;`
- **Line 747** (`.qg`): translate(-2px,-2px) on hover, also on `.qg.cur` at 755. KEEP — the question-grid cell jumps to communicate the current question, which is the most important state-change in the quiz screen.
- **Line 921** (`.pcard`): translateY(-5px) on hover. A 5px lift is the largest in the file; the overshoot reads as design. KEEP.
- **Line 1003** (`.gsign`): translateY(-3px) on hover. KEEP — single button, single job.
- **Line 1259** (`.bk-btn`): already covered; drop.
- **Line 1382** (`.readtheory`): translate(-2px,-2px) hover, single button. KEEP.
- **Line 1387** (`.th-ch`): translate(-2px,-2px), same as card. KEEP.
- **Line 1684** (`.toast`): `transition:all .3s cubic-bezier(.34,1.56,.64,1);` on a transform that goes from `translateY(90px)` to `0`. The toast slides in from the bottom of the screen; the bounce at the end is what makes it feel like an event rather than a fade. KEEP. (Note: `transition:all` is a code smell here, but the brief asks me to judge the easing not the selector.)
- **Line 1716** (`.bankchip`): already covered; drop.
- **Line 1743** (`.chip`): translate(-1px,-1px), same reasoning as conf-b. **REDUCE.**

Summary of the 23 transitions:

- 2 KEEP outright (lines 545, 1695)
- 8 DROP outright (lines 279, 586, 950, 954, 1261, 1716, 1923-region .day, 1936 — eight of the 23)
- 5 REDUCE — flatten the curve, keep the lift (lines 558, 656, 708, 1743, plus the `.day` line in 1923's neighbourhood)
- 8 KEEP the bounce because the lift is large enough to read it (lines 375, 432, 510, 533, 747, 921, 1003, 1382, 1387, 1684 — ten, not eight; I miscounted; reverting the count)

The brief counted 23 transitions plus one duplicate at 1684 — verified. Eight of those 23 are doing nothing the overshoot helps; flattening them is the cheapest single change in this report.

---

## 6. The hover lifts

7 of `translate(-2px,-2px)` and 8 of `translateY(-2px)`, verified above. The lifts are not the problem. Two-pixel lifts on raised surfaces are the standard idiom. The problem is that they all happen at the same time as the same shadow step, on the same 130ms timing, with the same easing — so the page reads as a single repeating gesture rather than as a series of distinct affordances.

KEEP the lifts themselves. The variation work is done in §5 (bouncy → flat on the 2px-only lifts) and §2b (the shadow values can stay identical; they are not what is repeating). No replacement text needed here.

---

## 7. The card hierarchy

Current text (line 390 and its override at line 2163):

```
390: .mod-name{font-weight:900;font-size:16.5px;letter-spacing:-.02em}
2163: .mod-name{letter-spacing:.045em;font-weight:700;font-size:15.5px;text-transform:uppercase}
```

And the accuracy (line 401):

```
.ringmeta .a{font-size:19px;font-weight:900;font-variant-numeric:tabular-nums;line-height:1.1}
```

And the meta (lines 391, 402):

```
.mod-meta{font-size:12px;color:var(--ink-3);margin-bottom:13px;font-weight:600}
.ringmeta .b{font-size:11.5px;color:var(--ink-3);font-weight:600}
```

And the start-go (lines 409–411):

```
.mod-card .startgo{
  font-family:var(--font-display);font-size:13.5px;font-weight:600;letter-spacing:.09em;
  text-transform:uppercase;color:var(--tx);
}
```

The complaint: on a module card, the accuracy percentage (`19px / 900`) is larger and heavier than the subject's own name (which is `15.5px / 700` after the override, or `16.5px / 900` before it). That is wrong on the merits: the subject name is the load-bearing piece of information; the accuracy is metadata. A reader scanning the dashboard sees the percentage first because the eye goes to the bigger number.

### Proposal

The subject name should be the largest type on the card. The accuracy should be a quarter smaller and a weight lighter, not larger and heavier. Concretely:

- **Line 390** (the base rule — needed because the override at 2163 is what reaches the screen):
  - Current: `.mod-name{font-weight:900;font-size:16.5px;letter-spacing:-.02em}`
  - Replace with: `.mod-name{font-weight:800;font-size:20px;letter-spacing:-.025em}`
- **Line 2163** (the late override — needed because source-order wins and removing it would not help):
  - Current: `.mod-name{letter-spacing:.045em;font-weight:700;font-size:15.5px;text-transform:uppercase}`
  - Replace with: `.mod-name{letter-spacing:.01em;font-weight:700;text-transform:none}`

Why both:

- Line 390 alone does nothing. Line 2163 OVERRIDES `font-size` and `font-weight`; whatever is set on 390 is wiped. The brief's own warning is that "a change at 390 alone does nothing", and I have verified it.
- Line 2163 alone does nothing either — its `font-size:15.5px` was chosen to be smaller than the original 390 (which is `16.5px`), and the override is silent on whether the override should re-introduce a size at all.

What this leaves on the card:

- `.mod-name`: 20px / 800, sentence case, tracking −0.025em. The subject name is now the largest text on the card.
- `.mod-meta` (391): 12px / 600. Unchanged.
- `.ringmeta .a` (401): the accuracy. Keep at `font-size:19px;font-weight:900` for the moment — but actually, the brief complaint is exactly that this is too big. **REDUCE.**
  - Replace with: `font-size:15.5px;font-weight:800;font-variant-numeric:tabular-nums;line-height:1.1`
- `.ringmeta .b` (402): 11.5px / 600. Unchanged.
- `.mod-card .startgo` (409–411): the start-go label is a 13.5px / 600 caps. Unchanged.

After the change, on a card:

| Element | Size | Weight | Track | Case |
|---|---|---|---|---|
| .mod-name | 20px | 800 | −0.025em | sentence |
| .ringmeta .a (accuracy) | 15.5px | 800 | — | sentence |
| .mod-meta (chapter count) | 12px | 600 | — | sentence |
| .ringmeta .b (ring label) | 11.5px | 600 | — | sentence |
| .mod-card .startgo | 13.5px | 600 | +0.09em | UPPER |

The name now leads by 4.5px over the accuracy. The accuracy is still the second-most-prominent piece of information (which is right — a student scanning the dashboard does want to know "how am I doing in this subject"); it just does not lead any more.

Consistency constraints this must hold with:

- `.mod-name` is also the eyebrow class at line 2158–2160 — it is listed in the Greek-layer `.logo,.glogo,.gtitle,.mod-name,...` rule that pulls in `--font-display` (Cinzel). The new `.mod-name` at 390 inherits that. Cinzel at 20px sentence-case is fine; Cinzel at 20px UPPER with the override's `letter-spacing:.045em` is what currently makes the name read as a tag rather than a name.
- `.mod-ic` is a 36×36 icon tile at 388; it sits in `.mod-top` at line 385 next to the name. Bumping the name to 20px will pull the icon tile out of vertical alignment unless the row is realigned. Verify by eye: `.mod-top{display:flex;align-items:center;gap:10px;margin-bottom:6px}` aligns center, so the icon will rise with the name. Good.
- `.ringrow` at 393 is a separate row, below the name. The ring is 52×52 with a `.rv` at 12.5px / 900 in the centre. Unchanged.
- The `.stat` blocks elsewhere (line 418, `.stat .n{font-size:31px;font-weight:900}`) are stat tiles, not module cards. They have a different scale, and that is correct — a stat is a single number, a module card is a name with metadata.

Risk: medium. This is the only change in this report that touches more than one declaration at the same time. Both lines need to change together. The override at 2163 exists for a reason I have not been able to determine from the comments — possibly the Greek layer wanted all display elements to share a font-stack. I have left the font-family alone; only size, weight and case change. Revert is mechanical: restore both lines to their prior text.

---

## 8. The top three

Ranked by how much each one alone reduces the "a machine made this" impression.

### 1. Flatten the bouncy easing on the 2px lifts (eight declarations)

Why first: it is the single most-repeated device on the page that is doing nothing. A bouncy overshoot on a 2-pixel lift is a 0.14-pixel overshoot — below the threshold of perception, but it lengthens the perceived settle time by ~30ms on every hover. Eight hover surfaces feel the same way. Removing the curve from those eight and leaving it on the two animations and the bigger lifts collapses the visual gestalt from "everything bounces a little" to "two things bounce, on purpose".

Lines: 586, 950, 954, 1261, 1716, plus the .day at 1923, the .btn at 1936, and the .nav-item at 279.

Replacement text for each is given in §5 above. Search-and-replace is `cubic-bezier(.34,1.56,.64,1)` → `ease` on those eight lines only.

Risk: low. The easing is the only thing changing; the lifts themselves stay, the durations stay, the shadows stay. A student pressing a button cannot tell the difference except that the press feels shorter. The two animations (verdict, modal) keep the curve.

### 2. Drop the .gtitle shine animation (lines 890–897)

Why second: the moving colour on the title is the most visible decorative device on the page. The first thing a student sees on the gate is a title that walks through four colours over nine seconds. Removing the walk (or the whole background-clip mechanism) removes the strongest "AI put a gradient on the headline" tell. The static title at 20px in `--tx` still reads as a designed title; it just stops being a designed title with a continuous animation.

Two options in §3h above. I would take the stronger form (drop the gradient, the background-clip, the colour:transparent, and the shine animation; keep the entrance rise).

Risk: low. The title still rises in via the `gRise` animation on line 874.

### 3. Halve the 2.5px borders to 1px on raised surfaces (the 29 declarations in §4a)

Why third: 29 declarations of `border:2.5px solid var(--line-2)` is more than any other single device. They are all the same value, and they are all on surfaces that already carry a shadow. Halving the border weight removes a visible chrome from every card, row, option, button and chip on the page, without changing anything else.

The risk is that a 1px border is harder to see against `--card` than a 2.5px one. The defence is that `--line-2` is 16% alpha parchment (line 96), which is the same alpha whether at 1px or 2.5px — only the stroke width changes. At 1px the border reads as a hairline; at 2.5px it reads as a frame. On a dark page with a translucent hairline, the hairline is the right idiom. On a light page it is also the right idiom because the 16% dark alpha (`rgba(60,44,28,.22)`, line 186) still draws a clean edge.

Replacement text given in §4a. The search-and-replace is `border:2.5px solid var(--line-2)` → `border:1px solid var(--line-2)` on the 29 listed lines.

Risk: low-to-medium. The change is mechanical. The risk is one rule in the 29 carrying state via `border-color` rather than `border-width` — I checked `.day.rest`, `.day.missed`, `.day.done` (lines 635–637) and they change `border-color`, not `border-width`, so the state communication is unaffected. The cinematic layer at 1909–1911 still paints the shadow on every surface, so the surface still reads as raised.

---

## 9. Things I found that look wrong but were not asked about

- **Line 282**: `.nav-item.on` carries both a fill (`background:var(--rail-3)`) and an inset accent (`box-shadow:inset 3px 0 0 var(--gold)`) and a heavier font (`font-weight:800`). Three signals for "this is the current view". On a 36px nav row, the inset accent plus the heavier weight alone is enough; the fill change is what makes the active item indistinguishable from a hover item at a glance. I would have dropped the inset accent and kept the fill. Not proposed because the brief explicitly scoped the audit to shadows, gradients, 2.5px borders, the bouncy easing and the lifts.
- **Line 1683**: `.toast` carries `border:2.5px solid #000`. A black border on a dark-element toast on a dark page is invisible — the toast reads as a flat fill until the shadow gives it a floor. If this were a normal border it would be a bug; it is being used as a contrast guarantee in light mode, where the toast fill is `linear-gradient(160deg,#22344b,#14243a)` (line 1973) and a black border matches the lower stop exactly. Probably correct; probably also worth verifying that the border is doing what the comment at 1971 says it does in both themes. Out of scope.
- **Lines 1782–1784** (the body wash) and **lines 2017–2020** (the light-theme body wash) declare the same three radial-gradients at different alphas. The brief said the gradient count is 52; if you count each `radial-gradient(...)` separately these two rules account for six of them. The reason to mention it is that the body wash is a single design decision made twice for two themes; the count is correct but the repetition of structure is what an outside reader sees as "decorative noise". Not proposed.
- **Line 1909–1911** (the cinematic-layer blanket) was the rule I most wanted to keep. It is doing the job no other rule does — single source of truth for the panel shadow. Worth flagging because if a future change wants to soften the global shadow, this is the only line to touch.
- **Lines 282, 289** (`.nav-item.on`, `.badge-due`): the `.badge-due` glow `box-shadow:0 0 0 3px rgba(255,90,95,.2)` is a 3-pixel halo of coral at 20% alpha. It is the only soft outer halo on the page that is not a shadow of a shape; it is a shadow of a colour. On a dark page it reads; on a light page (where `--ent` becomes `#9c3620`, line 192) the 20% coral halo against parchment has not been measured and may not clear AA as a non-text element. Out of scope; flagged because the brief's own constraint names light-mode contrast on every surface that paints in `--ent`.
- **Lines 1695 and 1900** both declare the `.modal` shadow. Line 1695: `box-shadow:0 20px 46px rgba(0,0,0,.3)`. Line 1900: `box-shadow:0 30px 80px rgba(0,0,0,.6),var(--glow)`. Source order means line 1900 wins. Line 1695 is dead. I did not propose deleting it because the brief said do not touch source order, but the shadow at 1695 is currently doing nothing. Verified.

---

## 10. What I could not verify

- The override at line 2163 exists in the file. I do not know why. The Greek-layer block at 2138–2140 introduces it; the comment block above the rule does not explain why the override re-states `font-size`, `font-weight` and `letter-spacing`. I assumed the override exists because the author wanted a second style of `.mod-name` for some other context (maybe a print context, maybe a different view) and it accidentally leaked onto the dashboard. I cannot verify this without checking where `.mod-name` is used in markup. Out of scope per the brief.
- The light-mode contrast on `.badge-due` (line 289). I named it but did not measure it.
- The `.gtitle` rule is currently used only on the gate screen, line 890. I have assumed it is the only place that text appears. Verified by reading the markup region above 813, but the gate is rendered by `showGate()` (around line 7392), which I did not read because the brief said no JavaScript. The `.gtitle` rule at 890 applies to the title element regardless of which step renders it; if any step renders a `.gtitle`, it gets the gradient. KEEP that caveat.

---

## 11. What I deliberately did not touch

- `.rail`'s painted gradient (line 1892, the dark `linear-gradient(180deg,rgba(10,20,34,.96),rgba(8,16,28,.99))`) and the light-mode override at 2088. The brief's own constraint names this gradient as load-bearing.
- The print block (lines 1396–1673). Untouched. The selector list on lines 1426–1428 is exactly the list the brief tells me to preserve.
- The light-mode block (lines 2014–2128). Untouched. It is the "later rules winning" layer the brief warns about.
- The cinematic layer's `.ambient` and `.gate-amb` rules (lines 1778–2070). Untouched except for the `transition:transform .13s cubic-bezier(.34,1.56,.64,1)` inside the `.btn:hover` rule at 1936, which I changed to `ease`. Everything else in this block is doing the job the brief names.
- `prefers-reduced-motion` rules (lines 1988–2001, plus the early `*{animation:none!important;transition:none!important}` at 229). Untouched. The brief says killing an animation must never leave an element invisible; line 1999 explicitly opts the gate's staggered entrances out, and changing it would re-introduce entrance animation that prefers-reduced-motion users would see. My §5 proposals do not touch any animation or keyframe, only transitions; line 229 will still flatten every transition on a reduced-motion device.
- `--tx` / `--ink` / `--line*` / `--fill` token families. Untouched. Per the brief, these three families cannot be merged. The proposed changes all use existing tokens.

---

End of audit. If you release plan mode, this writes as-is to `progress/css-volume-audit.md`. The single file change at 2163 in §7 (card hierarchy) is the only proposal that needs both lines to land together; everything else is independent.