# P5 report — Home A

## Gap list (recorded before build)
- Live home leads with semester and a generic dashboard heading; Home A leads with the painted desk band.
- Live home places resume, stats, today schedule, biography, then a three-column module-card grid; Home A places a compact subject list immediately below the band.
- Live module cards are image-led and grid grouped; Home A needs one compact, destination-preserving row per module with counts and progress.
- Live home shows no desk plate or candle; Home A requires a painted plate and a DOM/CSS candle over its wick.
- Live home selects a recent chapter for its Continue button but does not order subjects by last use; Home A requires last-used subject first.
- Live subject-card destinations are module buttons; the replacement rows retain `go({name:'module',id})`.
- Live resume control is moved into the desk band. Stats, today schedule, biography, and saved-mock resume have no Home A position; they are kept below the subject list. Existing module artwork files stay untouched and unused by the new rows.

## Implementation and checks
- Changed: `app/js/render.js` home markup; `app/css/desk.css`; `app/js/desk.js`; two links in `app/index.html`; `app/assets/desk/painted.jpg`.
- The plate is a 52,846-byte JPEG, 1916×821 px. It was encoded from the picked PNG at JPEG quality 55; source PNG unchanged.
- Wick measured by visual inspection of the 1916×821 source plate: `(1342,367)` px, rendered as `left:70%; top:44.6%` with the plate kept at its source aspect.
- Candle is a 44 px real button. Its click changes `aria-pressed` to false, pauses the flame, ambient/home CSS animation and video, and clears Clepsydra home timers for this visit only. At ≤600 px it is hidden. Reduced motion disables flame animation.
- Last-used source: `S.resumeByChapter[cid].at`, `app/js/render.js:180-188`; the most recent chapter's module moves first. A new profile has no `recent`, keeps `activeModules()` order, and renders without a resume button.
- Feature survival (pre-P5 home controls): resume chapter → desk band, `render.js:197`; saved mock → below subject list, `render.js:215`; unlocked module cards → compact subject row with the same `go({name:'module',id})` destination, `render.js:211`. Locked module cards remain non-controls, `render.js:210`.
- Keyboard source order checked from markup: candle (`render.js:193`), then the optional resume control (`render.js:197`), then unlocked subject rows in visual array order (`render.js:201-211`). Rows and candle have 44 px targets; visible global focus styling remains.
- `node --check app/js/render.js`: pass.
- `node --check app/js/desk.js`: pass.
- `node tools/boot-check/boot-check.js`: `QUESTIONS 6956 THEORY 153 MODULES 4 chapters 156`; `console errors: 0` (Chrome emitted OS credential-store warnings only).
- New/changed-file grep counts: emoji 0; `:hover` with transform 0; gradient 0; ease-spring 0; backdrop-filter 0; border-left ≥3px 0.
- `git diff --stat` also reports unrelated pre-existing work outside this job; `git status --short app/` includes pre-existing untracked `app/assets/q/*` and `app/graphify-out/`. P5 app paths are only `index.html`, `js/render.js`, `js/desk.js`, `css/desk.css`, and `assets/desk/painted.jpg`.
- Not verified here: required screenshots, matched performance trace, Brave check, and browser keyboard traversal; the brief assigns those to the orchestrator.
