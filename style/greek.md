# Greek layer - image style sheet

For an image-generation skill making NEW supporting art for the Herophilus app:
backgrounds, section art, share/social images, screen mock-ups. Read this before
prompting. It does not cover existing assets - see section 7.

## 1. Identity

Herophilus is a dark, cinematic Greek study app for medical students, named for
Herophilus of Alexandria, an ancient anatomist. Mood words: nocturnal, scholarly,
candlelit, classical, quiet, precise, warm-on-dark, exam-paper serious.

## 2. Palette

All values copied from `reference.md` lines 507-1083 ("## 6. Design"), with the
exact line cited.

- Ground: `--bg: #070d16` (reference.md L509). Deep navy, "the library at night."
- Module colours (reference.md L607-614):
  - ENT: `#b4472f` - terracotta
  - Ophthalmology: `#5c7a52` - olive
  - Neuropsychiatry: `#6d4c7d` - tyrian purple
  - Pediatrics: `#2e5f8a` - lapis
- Bank colours (reference.md L614):
  - endpoint: `#9a6b1f` - bronze
  - house: `#2f6b8f` - aegean
  - gradegain: `#8f3f5c` - madder
- Gold: token is `--gold`, value `#d9b44a` (from app/index.html line 124, not from
  reference.md); not in reference.md L507-1083 as a hex value. Its rule
  IS given (reference.md L576-578): `--gold` stays bright in light mode, because
  it is used as a background in 7 places and never as text; `--ok` and `--bad` do
  darken in light mode, gold does not.
- Measured consequence (reference.md L616-619): all module and bank colours are
  dark enough that white text passes AA against every one of them (4.6-7.1:1).

If a colour is needed that is not on this list, write "not in reference.md"
rather than inventing a hex.

## 3. Type

Cinzel for display/titling, EB Garamond for body copy (reference.md L621-626).
Cinzel is a titling face - anything set in it is tracked out (letter-spaced);
body copy is always Garamond, never Cinzel. Question stems read like an exam
paper (reference.md L514-515) - keep that register in any lettering used inside
generated art (prefer none; see section 8).

## 4. Light and atmosphere

- Ambient orbs: four slow-drifting blurred orbs behind the app, pulled from
  opacity `.55` to `.38` once the ambient film was added, because two ambient
  systems at full strength cancel out (reference.md L692-693).
- Ambient film: a candlelit Alexandrian desk scene, 960x540 (reference.md
  L667-671). Dark mode film runs at `.48`, the gate's own copy of the film runs
  harder at `.66` dark / `.62` light, `.86` / `.78` in portrait (reference.md
  L702-703).
- Light mode brightens the film rather than dimming it: `brightness(1.78)`,
  `contrast(.68)`, run at `.42` - higher relative to its own ground than dark
  mode's `.48` (reference.md L715-719).
- Centre pool (the radial fix that protects type sitting on the film): `.88`
  dark / `.72` light, measured at 4.78:1 dark and 5.20:1 light contrast across
  five frames of the loop (reference.md L706-707).
- Gate text-band contrast, measured with type hidden so only the ground was
  sampled: 4.89:1 dark, 5.57:1 light, both past AA (reference.md L748-752).
- No cool white or blue-grey anywhere in the palette - beside terracotta and
  bronze it reads as a colder design pasted on top (reference.md L600-601).

## 5. Materials and surfaces

Three token families that must never merge (reference.md L527-535):

- `--tx` / `--ink` - text, near-white. Never used for borders or backgrounds.
- `--line`, `--line-2` - translucent white hairlines. Never used for text.
- `--fill` - solid raised fills (buttons, table heads). Never used for text.

Hairline borders and soft elevation over a dark navy ground, with coloured glow
(reference.md L509-510). No `backdrop-filter` (glass) on cards, chapter rows, or
options - it is the most expensive property on the page and is reserved for
fixed furniture like the rail, top bar and modals (reference.md L580-581).

## 6. Iconography

Glyphs, not emoji: stroked SVG icons on a 24-unit grid, drawn in `currentColor`
so they theme for free (reference.md L628-629). The medallion icon - a navy disc
with a gold rule - is the site icon and the app's own mark, living in five
places that must move together: the browser tab favicon, `apple-touch-icon`,
the rail logo, the splash logo, and the gate mark (reference.md L780-784). It is
unrotated, transparent-backed, `border-radius:50%` (reference.md L797-802).

## 7. NEVER

- **The Clepsydra figure (`app/assets/clep/`, nine poses) is the owner's own
  artwork: never redraw her, never restyle her, never draw anything onto her,
  never use her as a base image for anything new.** Settled three times
  (reference.md L818-838).
- Existing Herophilus images and the medallion icon are never regenerated.
- No emoji in generated art.
- No generic "AI art" tells: random gradients, lens flares, glowing neon, stock
  marble columns repeated in every frame.
- No text baked into images.
- No real people.
- No logos of other brands.

## 7a. Owner exceptions to section 7

- **2026-09-21, home screen only.** The owner likes the neon (coloured glow) card edges and the
  photo-real desk in `generated/home-dir-c-desk/image-v2.png` and ruled to KEEP both, over this
  sheet's "no glowing neon" and its painterly-not-photoreal mood. They apply to the home screen's
  desk background and its four subject cards, nowhere else; reading and question views get
  neither. The M10 dimmed-painting backdrop is not used behind the desk (the photo owns the
  background, never both). A simple animated candle flicker over the photo's own candle is
  planned. Proposed, NOT yet confirmed by the owner: in light theme the glow becomes a plain
  coloured line.
- An exception here is the owner's call alone. A refuter checking new art against this sheet
  must treat the items above as allowed, and everything else in section 7 as still binding.

## 8. Prompt scaffolding

Three example openers, each under 40 words, using the palette names above:

- Background: "Candlelit Alexandrian library at night, deep navy ground with
  terracotta and bronze accents, warm glow on stone and scrolls, no people, no
  text, cinematic and quiet, restrained classical detail."
- Section art: "Ink-navy and cream study of a single Greek architectural motif
  in bronze and olive, flat stroked linework on a dark ground, no clutter, no
  crowns or wreaths as the subject, calm and precise."
- Share image: "Dark cinematic Greek scene, lapis and tyrian purple accents on
  navy, gold hairline framing, warm candle light, no logos, no faces, no baked-
  in text, composed for a square social crop."

WROTE style/greek.md 880 words
