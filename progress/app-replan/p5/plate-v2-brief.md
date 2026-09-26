# P5 Lane A step 2 — master plate v2, three candidates (2026-09-26)

Seat: Codex `gpt-5.6-terra`, built-in `image_gen` tool (imagegen skill, default mode). Final reply
begins with `AGENTS.md loaded — Herophilus`, then ≤ 5 lines.

WRITE GRANT (overrides AGENTS.md read-only default for this job only): you may create
`progress/app-replan/scene-pilot/plates/master-v2-a.png`, `master-v2-b.png`, `master-v2-c.png` and
`progress/app-replan/scene-pilot/plates/master-v2-notes.md`. Everything else is read-only.

## Attached images
1. `painted-codex-3.png` — the current final plate. It is the reference for the room and style:
   keep its smooth, glossy, soft-lit 3D-cartoon finish, its warm palette, and its desk and wall.
   Revise it; do not restyle it.
2. A Clepsydra pose — STYLE REFERENCE ONLY. Do not draw her. Do not include her, or any part of
   her, in any output.

## What changes from painted-codex-3
The plate becomes the whole app's background, a living desk. Keep the same room and the same
front view at desk height. Add or rearrange only the following:

- **Four closed books** stand upright together, spines facing the viewer, with no text on them.
  One spine colour each, matched as closely as the render allows:
  - ENT `#b4472f` (terracotta);
  - Ophthalmology `#5c7a52` (sage green);
  - Neuropsychiatry `#6d4c7d` (muted violet);
  - Pediatrics `#2e5f8a` (deep blue).

  Plain leather spines with subtle raised bands. No lettering, no symbols.
- **The clay oil lamp stays**, with an UNLIT wick and no flame, glow or smoke. The flame is drawn
  later in code.
- **Tight cluster:** the four books and the lamp sit together within about 400 px horizontally at
  1916 px image width, right of centre. The phone view crops to about 400 px of the image, and that
  crop must hold all of them.
- **A window** in the back wall, upper area, with an arched or rectangular stone frame and no glass
  glare. Through it, a dark night sky above a calm sea horizon (Alexandria's harbour). Keep it
  plain and even-toned: rain, lightning and waves are drawn onto it later in code.
- **Keep:**
  - the bronze outflow water-clock bowl on its basin (open bowl, small spout near the base, faint
    level lines inside, no numerals);
  - the bundle of rolled scrolls;
  - the reed pen.
- **One open scroll, blank**, lying flat on the desk in front. It is unrolled, pale parchment with
  no writing and no marks. Text is laid on it later in code.
- **Free desk space:** leave three clear, evenly lit patches of desk surface, each at least 120 px
  across, for small objects added later (a stack of letters, a wax tablet, a small pile of pages).
- **Left third:** calm, as in painted-codex-3. Plain dark wall and desk, nothing lit, no bright
  highlight. A character stands there later.
- **Bottom 15%** fades toward near-black, so UI can sit on it.

## Three candidates
Same brief, three distinct arrangements. One `image_gen` call per candidate; save each at 21:9,
ideally 1916×821.
- **a** — the window centre-left behind the desk; books upright in a row beside the lamp.
- **b** — the window right, above the book cluster; books in a row with one leaning.
- **c** — the window centred high; books as two pairs flanking the lamp (still within ~400 px).

## Never, in any candidate
- A person, figure, face, hand or statue.
- Text, letters, numbers, logo or watermark, including on the spines and the scroll.
- A modern object.
- A lit flame, glow halo or smoke.
- Neon, emoji style, lens flare, frame or border.
- Ink outlines, hatching or grain (keep painted-codex-3's smooth finish).

## Notes file
`master-v2-notes.md`, ≤ 25 lines. Give each candidate's pixel size, then the approximate pixel
boxes of:
- wick;
- each book spine;
- lamp;
- window;
- open scroll;
- bowl;
- scroll bundle;
- the three free desk patches.

Say which of these you measured and which are estimates. Also say whether the four books plus the
lamp fit in a 400 px-wide window.

## Do not
- Draw the Clepsydra.
- Edit painted-codex-3.png or any `app/` file.
- Commit, push, `git add` or tag.
- Download anything.
- Start a second job.
