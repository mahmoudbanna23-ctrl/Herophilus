# Wall plates — prompts

Ten plates, 1536x1024 landscape: five walls (statue, ent, ophtho, neuropsych, pediatrics) x dark and
light look. Spec: `progress/redesign/PLAN-statue-hall-2026-10-12.md`, section "Paintings". All five walls
share ONE layout (`common-wall`, `common-wall-light`); each plate section only says what the niche and the
side shelves hold. Section names: `wall-<id>-dark` and `wall-<id>-light` (the light script derives the
dark reference `wall-<id>-dark.png` from the light name).

Reuses `paint-room.sh` and `paint-room-light.sh`, which read two environment variables:
`PROMPTS_FILE` (prompt file, default `prompts-rooms.md`) and `COMMON_SECTION` (shared section, default
`common-room` / `common-room-light`). Run all commands from this folder, under bash.

## Commands

Dark (style reference is the approved hall, passed through `ROOM_REF`):

    PROMPTS_FILE=prompts-walls.md COMMON_SECTION=common-wall ROOM_REF=../../../app/assets/hall/hall-dark.jpg bash paint-room.sh wall-statue-dark

Same line for `wall-ent-dark`, `wall-ophtho-dark`, `wall-neuropsych-dark`, `wall-pediatrics-dark`.

Light (the reference is the approved dark plate of the same wall, found by the script):

    PROMPTS_FILE=prompts-walls.md COMMON_SECTION=common-wall-light bash paint-room-light.sh wall-statue-light

Same line for `wall-ent-light`, `wall-ophtho-light`, `wall-neuropsych-light`, `wall-pediatrics-light`.

Statue likeness: `wall-statue-dark` alone takes a SECOND reference, the bust, through `EXTRA_REF`
(optional in `paint-room.sh`; unset = unchanged behaviour):

    PROMPTS_FILE=prompts-walls.md COMMON_SECTION=common-wall ROOM_REF=../../../app/assets/hall/hall-dark.jpg EXTRA_REF=../../../app/assets/herophilus-bust.jpg bash paint-room.sh wall-statue-dark

PNG to JPG: System.Drawing, quality stepped down until under 399 KB, into `app/assets/hall/`. Model:
`D:\scratch 2026\redesign\round2b\tojpg.ps1` (a `.ps1`; the plan's `tojpg.py` does not exist).

Day order. Day 1: `wall-statue-dark` first, owner says yes or redo, then the four other dark walls.
Day 2: the five light walls. After each plate, a looker checks: text? figure only on the statue? panel
blank and flat? percent boxes hit?

## common-wall

STYLE. The same painted world as the style reference image: smooth, glossy, soft-lit, hand-painted 3D
finish, calm and cinematic, rich in small believable detail (worn stone edges, individual scroll ends,
grain, dust on ledges). Painterly, never photographic, never flat vector.

SETTING. Ancient Alexandria, about 300 BC, at night. A straight-on, eye-level view of ONE flat wall of
a round stone library, filling the whole picture, 1536x1024 landscape. The wall is flat and faces the
viewer directly; no floor or side walls recede, no perspective angle, vertical lines stay vertical.

LAYOUT, FIRM RULE. Work in percent of the picture width (x, from the left) and height (y, from the top).
- NICHE: a tall arched niche carved into the wall in the exact centre, from x 36% to x 64% and from
  y 8% to y 62%. Its arched top is at y 8%. What stands in the niche is described above. Everything
  important in the whole picture lives inside the central 44% of the width (x 28% to x 72%).
- PANEL: directly below the niche, a blank, flat, evenly toned carved stone panel, a plain rectangle from
  x 32% to x 68% and from y 66% to y 88%. It must be perfectly empty: smooth, one even stone tone, no
  cracks, no veins, no stains, no shadows falling across it, no objects, no carving, no pattern, no
  ornament, nothing. Text will be added there later.
- FLOOR STRIP: a free strip of plain dark stone floor along the bottom, from y 88% to the bottom edge,
  with nothing on it.
- LEFT AND RIGHT of the centre (x 0% to 28% and x 72% to 100%): the rest of the wall, full of real, rich
  detail: tall pigeonhole shelves packed with papyrus scrolls, individual scroll ends readable, and
  bronze oil lamps hanging on chains from the upper wall, each throwing a small warm amber pool on the
  shelves near it. Nothing essential is placed there, because these sides are cropped away on narrow
  screens. Left and right sides mirror each other loosely, not exactly.

LIGHT. Oil-lamp light only. Cool night-blue shadows (deep blue, never brown, never pure black, every
surface keeps visible detail) with warm amber pools of lamp light, the same night-blue palette and lamp
light as the style reference. One soft warm lamp glow gently lights the niche contents from within the
niche. The panel and the floor strip stay evenly and quietly lit.

HARD RULES.
- No text of any kind: no letters, numerals, inscriptions, labels, signage or carved writing, on the
  panel, the shelves, the scrolls, the objects or anywhere else.
- No people, no figures, no faces, no hands, no animals that are alive, unless the plate description
  above explicitly asks for one.
- No frame, no border around the picture, no vignette, no watermark, no signature, no neon, no lens flare.
- No modern objects: nothing electric, glass-bottled, printed, plastic or machine-made.
- No medical scenes, nothing gory, and no anatomy unless the plate description above explicitly asks
  for a carved stone model.

## wall-statue-dark

The wall of the statue. In the niche stands a full-length statue of Herophilus of Alexandria in
polished white marble, from the base at the foot of the niche to the arch above his head, standing
upright, robed in a long softly folded himation, calm and dignified, one hand resting quietly at his
chest, the face serene and bearded. The face and head follow the second reference image, the marble
bust of Herophilus: take his likeness from it, not its lighting or background. The statue is the
brightest object in the picture, lit by the warm lamp glow in the niche, with cool blue shadow in the
folds. The statue is the ONE figure allowed in this picture, and it is stone, not a living person. On the
shelves at the sides, rows of papyrus scrolls and a few bronze lamps.

## wall-ent-dark

The wall of the ear. In the niche, on a low stone plinth, rest a bronze ear trumpet (a long flared
listening horn) and a bronze speculum beside it, polished metal catching the warm niche glow. On the
shelves at the sides, rows of papyrus scrolls, small clay sounding jars and a few more bronze horns,
and bronze lamps hung on chains.

## wall-ophtho-dark

The wall of sight. In the niche, on a low stone plinth, rests a clear crystal reading sphere, catching
and bending the warm niche glow into a soft bright highlight. On the shelves at the sides, rows of
papyrus scrolls, polished round bronze mirrors and bronze lamps hung on chains.

## wall-neuropsych-dark

The wall of the mind. In the niche, on a low stone plinth, rests a marble brain model in pale
white marble, its folds softly lit by the warm niche glow. On the shelves at the sides, rows of
papyrus scrolls, a bronze armillary star sphere and bronze lamps hung on chains.

## wall-pediatrics-dark

The wall of childhood. In the niche, on a low stone plinth, stand a painted wooden toy horse on four
small wheels and a terracotta cup beside it, warmly lit by the niche glow. On the shelves at the
sides, rows of papyrus scrolls, a few clay toys and small terracotta cups, and bronze lamps hung on
chains.

## common-wall-light

TASK. The attached reference image is THE SAME WALL. Repaint exactly that wall: same niche, same panel,
same shelves, same objects in the same places, same camera. Change only the light and the palette.

STYLE. The same painted world as the reference: smooth, glossy, soft-lit, hand-painted 3D finish, calm
and cinematic, rich in small believable detail (worn stone edges, individual scroll ends, grain, dust
on ledges). Painterly, never photographic, never flat vector.

LIGHT. Calm morning daylight in Ancient Alexandria, about 300 BC, entering the round library softly
from above. All lamps are unlit. Pale warm-grey limestone and sand stone, gentle soft shadows, a light
airy palette of parchment, cream and pale stone, like a bright morning hall with dark text to be set on
pale parchment.

LAYOUT, FIRM RULE. Keep the layout of the reference exactly, in percent of picture width (x) and height
(y), 1536x1024 landscape.
- NICHE: the arched niche in the centre, x 36% to x 64%, y 8% to y 62%, with its contents unchanged.
  Everything important stays inside the central 44% of the width (x 28% to x 72%).
- PANEL: the blank, flat, evenly toned carved stone panel below it, x 32% to x 68%, y 66% to y 88%. It
  becomes a pale parchment-cream stone tone, perfectly even and empty: no cracks, no veins, no stains,
  no shadows falling across it, no carving, no pattern, nothing. Text will be added there later.
- FLOOR STRIP: the plain pale stone strip along the bottom, y 88% to the bottom edge, with nothing on it.
- LEFT AND RIGHT of the centre (x 0% to 28% and x 72% to 100%): the scroll shelves, scrolls and unlit
  hanging lamps stay exactly where the reference has them, softly lit by daylight.

HARD RULES.
- No text of any kind: no letters, numerals, inscriptions, labels, signage or carved writing, on the
  panel, the shelves, the scrolls, the objects or anywhere else.
- No people, no figures, no faces, no hands, no animals that are alive, unless the plate description
  above explicitly asks for one.
- No frame, no border around the picture, no vignette, no watermark, no signature, no neon, no lens flare.
- No modern objects: nothing electric, glass-bottled, printed, plastic or machine-made.
- No medical scenes, nothing gory, and no anatomy unless the plate description above explicitly asks
  for a carved stone model.

## wall-statue-light

The same wall of the statue, in morning daylight. The full-length white marble statue of Herophilus,
robed, calm, with the same face, pose and place in the niche as in the reference, stays exactly as it is,
now softly and evenly lit by daylight, with gentle warm-grey shadow in the folds. The statue is the ONE
figure allowed in this picture, and it is stone, not a living person. The shelves, scrolls and unlit
lamps at the sides stay in place.

## wall-ent-light

The same wall of the ear, in morning daylight. The bronze ear trumpet and the bronze speculum on their
plinth in the niche stay exactly where they are, catching only soft daylight. The scroll shelves, clay
sounding jars, bronze horns and unlit lamps at the sides stay in place.

## wall-ophtho-light

The same wall of sight, in morning daylight. The crystal reading sphere on its plinth in the niche stays
exactly where it is, catching only soft white daylight. The scroll shelves, bronze mirrors and unlit
lamps at the sides stay in place.

## wall-neuropsych-light

The same wall of the mind, in morning daylight. The marble brain model on its plinth in the niche stays
exactly where it is, softly lit by daylight. The scroll shelves, the bronze armillary sphere and the
unlit lamps at the sides stay in place.

## wall-pediatrics-light

The same wall of childhood, in morning daylight. The painted wooden toy horse and the terracotta cup on
the plinth in the niche stay exactly where they are, softly lit by daylight. The scroll shelves, clay
toys, cups and unlit lamps at the sides stay in place.
