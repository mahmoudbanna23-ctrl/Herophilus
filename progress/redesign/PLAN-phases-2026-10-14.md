# Plan: one phase at a time, heavy design work on Kaggle

## Context

The owner, 2026-10-14: "regroup and arrange everything into phase to avoid overlapping and messy work and move every hard design work to kaggle".
His answer on the same day: her 3D model may go to Kaggle **privately**. Nothing about her goes public before he picks the licence.

What is open right now:
- **Dashboard + welcome (Job C):** a builder is running. It is page code only, local.
- **Her look (E1):** the builder stopped before rendering anything. Nothing is lost, and it moves to Kaggle.
  - It found that the brief's "hourglass body" wording was wrong. She is a clock-face disc with a laurel wreath, a toga, gloves and shoes.
  - Her rig file: `D:/scratch 2026/her-c2/rig5r/her-rig5r.blend`.
  - City still: `app/assets/city/city-dark.jpg`.
  - Blender 5.2 is installed locally.
- **Shot 1 plate:** painted with Codex, but the looker failed it (camera too low, cloud above the horizon). It will be redone on Kaggle.
- **Not started:** shot 1 film + join, Job D rooms (12 plates), E2 arms, E3 face, E4 her in the site.

## The rules for every phase

- One phase at a time. A phase ends with a refuter check, then the owner's yes, then a commit + push of the trial branch. No phase starts while the one before is still open.
- **"Hard design work" means anything that renders pixels: paintings, Blender renders, films.** All of it runs on Kaggle.
  - The local PC only writes scripts and briefs, and runs the page harnesses (headless Chrome).
  - No local Blender renders, and no Codex painting, unless the Kaggle painting trial in Phase 2 fails.
- **Kaggle:**
  - Every CLI call takes `-p <dir inside the trial copy>`.
  - Her files go up only as a **private** dataset (owner OK 2026-10-14). Never public.
  - Weekly GPU quota is 30 h, with about 4.3 h used. Each phase states its budget, and a report shows h used.
- Everything from the old plan still holds: trial copy only, no live folder, no merge, no upload; Sonnet builders that open with `ROUTE-OK: gateway down`; hard limits on files, animation and storage; her identity never redrawn.
- Builder briefs keep their scripts in the trial copy. Kaggle notebooks live in `tools/kaggle/<job>/`, one folder per job, with `kernel-metadata.json` set to private.

## Phases

### Phase 1: finish the dashboard + welcome (page code, local)

- The running Job C builder finishes, following `progress/redesign/build/city-dash-BRIEF.md`.
- A refuter checks it against the brief and the harness `D:\scratch 2026\city-dash\dash.js`.
- The owner sees the screenshots plus one mid-welcome shot. Then commit.
- Also commit the loose files: the briefs, the status files and the `shot1-sky-dark` section, with the failed plate kept for the record.
- No Kaggle use.

### Phase 2: the Kaggle design kit, proven on shot 1

1. **Kit.** Use one builder for these three Kaggle notebooks:
   - **Paint:** an open image model on a T4, img2img/style reference from `city-dark-3.png` plus the matte style words from `paint/prompts-city.md`. A researcher picks the model first: it must fit a T4 and carry a licence that allows use on the site.
   - **Blender:** Blender 5.2 Linux, headless, Cycles on GPU. Inputs come from a private dataset.
   - **Film:** the existing Wan 2.2 notebook (`tools/city-film/ai-film/shot2/`), reused as is.
2. **Shot 1 plate, redone on Kaggle.** Camera higher, cloud bank below the horizon (the looker's fixes). Make 4 variants, then the looker checks them.
   - **Trial gate:** if no Kaggle plate matches the city's painted look, paintings fall back to Codex (8 a day). The owner is told plainly.
3. **Owner picks** the plate.
4. **Shot 1 film:** two seeds, then Real-ESRGAN x2. The owner picks the seed.
5. **Join (page code, local):**
   - Encode `app/assets/city/shot1-dark.mp4` at 1350x900.
   - Generalise the cover chain in `city.js` to a list of films. Fix the stale comment at `city.js:15`.
   - Extend the `city-join` harness to three films.

Budget: about 1.5 GPU h.

### Phase 3: her look in 3D (Kaggle Blender)

- Upload her rig + the city still as a private dataset.
- Render two looks over the city at 1536x1024, plus close crops:
  - **A:** painted;
  - **B:** ink cartoon, with the five toon1 refuter fixes.
- Pose: pick a frame with both arms down, or frame 0 if none has, and say so.
- Painterly/ink passes: done in numpy if the Blender 5.2 compositor misbehaves.
- The brief is corrected to describe her truly (clock-face disc, wreath, toga) and changes the shading only, never the model.
- A refuter checks it, then the owner picks A or B.

Budget: about 1 GPU h.

### Phase 4: rooms (Job D), eyes first

1. Paint the eyes entrance, library and desk on Kaggle (Codex only if Phase 2's gate failed). Shelves and the desk top stay empty.
2. Page code on those plates:
   - two door buttons;
   - scrolls per chapter on the library wall;
   - wax tablets on the desk, plus the sand-glass (timed exam) and the chest (weak spots);
   - everything through existing calls.
3. A refuter runs the building harness at 4 sizes. The owner says yes on eyes.
4. The other 3 buildings: 9 plates, then the same page code. A refuter checks, then the owner looks.

Budget: about 2 GPU h.

### Phase 5: her body and face (Kaggle Blender)

- **E2:** rebuild the arms (round 5s, from her NOTES and `rig5s/`). The scripts are written locally and every test render runs on Kaggle. Test move: a walk plus a wave.
- **E3:** merge the face rig into the body rig, with Rhubarb mouths.
- A refuter checks each, then the owner judges each.
- If the arms fail twice, they go to a Claude role, never a third try.

Budget: about 3 GPU h.

### Phase 6: her in the site (E4)

- The built hand-written player plays her rig on the city in place of the 2D figure.
- She speaks the 9 welcome lines.
- She falls back to the 2D art if anything fails.
- Exported model files go into the app only; nothing is uploaded live.
- A refuter checks it, then the owner looks.

### Phase 7: polish from public design guides (page code, local; owner yes 2026-10-15)

Source, values and links: `progress/redesign/research/design-systems-RESEARCH.md`. Five items:

1. **Motion scale** (Material 3): durations of 100, 200, 300, 400 and 500 ms.
   - Entrance easing: `cubic-bezier(0.05,0.7,0.1,1)`.
   - Exit easing: `cubic-bezier(0.3,0,0.8,0.15)`.
   - Reduced motion: changes are instant, or a fade only.
2. **Focus ring**: 3px (GOV.UK), with an inset contrast colour (Carbon).
   - A transparent-outline fallback for forced-colours mode.
   - At least 3:1 against every painted ground. This clears the P10 debt of `--neuro` at 2.71:1.
3. **Touch targets** (Apple HIG): 44x44 pt by default, with 28 pt as the floor.
   - Spacing around targets: 12 pt for shaped controls, 24 pt for bare ones.
4. **Token tiers** (Carbon): reference, then theme, then component.
   - Depth comes from stacked fills and hairlines, not shadows.
   - The three token families (`--tx`/`--ink`, `--line*`, `--fill`) stay separate.
5. **Text** (Xbox Accessibility Guidelines):
   - It survives 200% zoom.
   - Lines are at most 80 characters, with line-height of at least 1.5.
   - No text is baked into paintings.
   - Nothing flashes more than 3 times per second.

Avoid stock looks: no Material ripples, no Fluent acrylic, no Shopify Polaris copying (its licence forbids it).

Checks:
- A refuter runs the harnesses at 4 sizes, dark and light.
- Contrast is measured, and the print test is run.
- Then the owner looks.

### Phase 8: the whole run, end to end

- One recording: shot 1, shot 2, mist, city, welcome, a building, a room.
- Boot-check, then the owner's final yes on the trial branch.
- Merge and upload stay his call, separately.

## Verification (per phase, same as before)

- `node tools/boot-check/boot-check.js` shows 0 errors after any page code.
- The phase's harness: `city-dash`, `city-join`, or `city-library`.
- Screenshots at 1440x900, 1180x820, 820x1180 and 390x844.
- Kaggle runs: output files are listed and their sizes checked. A looker views the images inside a subagent (never main chat). GPU h used is reported.
- `RESUME-redesign.md` is updated at the end of every phase with what is done and the next phase.
