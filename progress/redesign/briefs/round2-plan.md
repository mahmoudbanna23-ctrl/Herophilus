# Herophilus redesign trial — home screen, change round 2

## Context

The owner looked at the walk-in home screen (library from outside, scroll carries you through the
door into the hall) and gave four changes: remove the "Scroll" box, replace the dark-blue boxes
everywhere because they clash with the theme, give the library doors that open with the scroll,
and restyle the left side bar. Standing reminder from him: the whole theme is ancient Alexandria
and Greek. He picked a warm gold glow for the box edge (replacing light blue). Still a trial on
the separate copy; no merge, no live upload.

## What you will get (plain words)

1. The "Scroll" box is gone. Nothing replaces it; the closed doors are the invitation.
2. Dark blue is gone from the whole app in the evening look: page, boxes, pop-ups, small notices
   and the top strip turn to warm dark stone and aged bronze, taken from the evening painting.
   The box edge glows warm gold, like lamp light on brass. Text stays the same cream, so reading
   is unchanged. The daylight look is already parchment and only gets touched where blue leaks in.
3. The library has tall bronze double doors. At the top of the page they are shut. Your scroll
   pushes them open, the hall shows through, then you walk in as before.
4. The left bar becomes a stone-and-bronze column: gold hairline, a Greek key band, the chosen
   page marked like a lit plaque. Same buttons, same order, same words.
5. The iPad-upright view uses the two upright hall paintings made earlier, so it is no longer a
   strip with empty bands.
6. Lettering. Today the app uses two typefaces: carved Roman capitals for titles and an old
   book face for reading. I look for real typefaces that fit ancient Alexandria and Greek better
   (stone-inscription capitals, Greek-foundry book faces), free to reuse and able to sit inside
   the app with no internet. You get one page showing the real typefaces, each setting the same
   four things: the home title, a subject plaque, a question, a theory paragraph. You pick; only
   then does it go into the app. Bringing the files in needs your yes first.
7. Not touched: the Clepsydra, the questions, saved progress, printing. The theory page stays an
   A4 sheet and stays dark (warm dark now, never white).

## Things I cannot promise until tested

- The doors are one new painting, cut into two leaves. If its light or angle does not sit right
  on the outside painting, I say so and show it anyway rather than hide it. One painting serves
  both looks (brightened for daylight); if daylight looks wrong it needs a second painting, and
  the picture maker has about one left today.
- The upright hall paintings have not been seen by you yet. They arrive in the screenshots.

## Order of work (after your yes)

1. Read the outside checker's report on the last build; fold its faults into step 3.
2. Paint the doors (one picture). Check the shared helper is free first; Pediatrics goes first.
3. Build A: remove the box, new colours everywhere, new left bar.
4. Build B: doors on the scroll, upright paintings wired in.
5. Automatic check, then an outside check from a different house. A helper looks at every still.
6. Screenshots to you: laptop, iPad sideways, iPad upright, both looks, doors shut / opening /
   inside the hall, plus one subject page, one question and one theory page in the new colours.
   Then I stop and wait for your verdict.
7. Save and push the branch.

---

## Technical annex (for execution; not for the owner to review)

Worktree `D:\claude os\Medical school\Herophilus-redesign`, branch `redesign/factory-2026-10`.

### Footprint rule (unchanged)
- `app/index.html`: still the ONE existing script-tag line. Zero lines in `render.js`,
  `storage.js`, `quiz.js`, `boot.js`, `gate.js`, `theory.js`, `tokens.css`, `views.css`,
  `layout.css`, `components.css`, `base.css`, `print.css`, `app/data/*`. No `wardround.*` key.
- All new styling is an override loaded last. `hall.js:38-40` already injects `css/hall.css`
  after every app stylesheet; inject a second link the same way for the new file below.
- If a navy flash shows before the injected sheet lands, the fix is one `<link>` line in
  `index.html` `<head>`; that is a second shared-file line and must be listed in the resume note.

### 1. Remove the scroll cue
- `app/js/hall.js`: delete the `.wk-cue` element (`:234`) and its refs/setters (`:331`, `:341`,
  `:380`, `:410`).
- `app/css/hall.css`: delete `.wk-cue` rules (`:97-103`) and `.hall.walk .wk-cue` (`:254`).

### 2. Warm skin — new file `app/css/warm.css` (one concern: app-wide surface colours)
Everything inside `@media screen` so `print.css` (which forces its own tokens, `:32-48`) is
unaffected.
- Dark (`:root`, same specificity as `tokens.css:34`, wins by load order). Starting values, to be
  re-measured against the evening painting by the builder and adjusted, not taken on trust:
  `--bg:#14100b` `--bg-2:#1e1811` `--card:#231c14` `--fill:#3a2e20`
  `--glass:rgba(30,23,16,.78)` `--glass-2:rgba(20,15,10,.86)`
  `--rail:#120e09` `--rail-2:#231b12` `--rail-3:#34281a`
  `--neon:` warm gold (near `--gold:#d9b44a`, slightly paler so it reads as light, not as the
  gold accent) and `--neon-glow` rebuilt from it.
  Text tokens (`--tx/--ink*`, `--stem`, `--prose`, `--strong`), `--line*`, the four subject
  colours, `--gold`, `--r-*` and fonts are NOT changed. Three token families stay separate.
- Light (`:root[data-theme="light"]`): surfaces already parchment; only re-point `--neon`/
  `--neon-glow` to a warm bronze that passes on parchment, and fix any blue leak found in stills.
- Hard-coded navy, overridden by selector at equal-or-higher specificity:
  `.modal` gradient (`views.css:245`), `.modal-bg` (`:249`), `.toast` (`:308`), film scrims
  (`views.css:190-192`, `215-217`, `components.css:451-452`), body orbs (`views.css:127-129`,
  `base.css:10-11`), zoom overlay (`components.css:73`), callouts (`components.css:221,798,1107`).
  Locate each by grep before writing; do not trust these line numbers after Pediatrics merges.
- Theory sheet (`components.css:879`) takes `--card`, so it turns warm dark. Confirm it is not
  light and that the A4 box and `overflow` behaviour are untouched.
- No `backdrop-filter` added to cards, rows or options. Radius only `--r-sm/md/lg`.
- Contrast: measure, never assume. Body text, `--ink-3/--ink-4`, `--gold` and each subject colour
  against the new `--card` and `--bg` (darker gradient stop); AA required. Focus ring debt
  (`--neuro` 2.71:1) re-measured and reported, not silently fixed.
- `.plaque` and `.wk-text` in `hall.css` already use `--card`/`--line-2`; they inherit the skin.

### 3. Left rail — in `warm.css`, CSS only
- `.rail` (`views.css:238-242`, `layout.css:3-7`): stone-to-bronze vertical gradient, right edge
  a gold hairline replacing `#150f33`; keep the existing `backdrop-filter` (fixed furniture).
- A Greek key (meander) band under `.rail-head` and at the rail foot: one small SVG as a
  `data:` URI background (offline, no new file, no CDN), stroke in `--gold` at low alpha.
- `.nav-item`, `:hover`, `.on` (`layout.css:46-53`): keep the gold inset bar; `.on` reads as a
  lit bronze plaque (`--rail-3` + faint gold inner line). `.nav-label` as a small engraved
  caption. `.railprof` (`components.css:626-631`), `.railsync` (`:768`, drop `#b3a9dd` lilac),
  `.streak`, `.cnt`, `.badge-due`.
- Light overrides (`views.css:414-445`) and the narrow slide-in (`views.css:98-101`) checked in
  stills. No fourth `max-aspect-ratio:5/4` block.
- Markup (`index.html:62-70`) and `render.js:135-162` untouched.

### 4. Doors
- Picture: ONE Codex image job, prompt saved as `progress/redesign/paint/prompt-doors.txt`:
  tall bronze double doors of an ancient Greek/Alexandrian library, shut, dead front-on, no
  perspective, round-arched top matching the doorway, both leaves whole, a clear centre seam,
  transparent (or flat `#B8C4D6`) background, no frame, no wall, no text, style reference =
  `outside-dark`. Output `paint/doors.png`.
- Cut: script splits at the centre seam into `app/assets/hall/door-l.png` / `door-r.png`
  (alpha kept), same method as `samples/parts/`. A subagent LOOKS at both leaves.
- Place: two `<img>` leaves inside `.wk-out` so they scale with the outside painting, positioned
  from `DOOR` (`hall.js:47`: `l,t,w,h,arch`), parent clipped to the doorway arch via the existing
  `clipFor()` shape. Hinge = each jamb (`transform-origin: left` / `right`), `perspective` on the
  parent, leaves swing inward with `rotateY`. Transform only.
- Timeline (`startWalk`, `hall.js:422-433`): new first beat before `tl.to(P,{p:1…})` — leaves
  0 → about ±105° with a slight overshoot settle; extend the pin length (`:434-443`) by that
  beat. The hall layer behind the doorway is already there; the doors simply stop hiding it.
- Daylight: same leaves, `filter:brightness()/saturate()` under `:root[data-theme="light"]`.
- Fallbacks: reduced motion and the 3 s no-library branch (`:293-299`) show the leaves hidden
  (doors already open); no dead closed door that cannot be opened.
- `decodePaintings()` (`:96-102`) preloads the two leaves.

### 5. Upright hall
- Convert `paint/hall-dark-tall.png`, `hall-light-tall.png` (1024x1536) to JPG in
  `app/assets/hall/`; set `--hall-tall` (`hall.css:36`, `:52`) to them, drop the "no tall
  painting" note. Alcove hit-areas for the tall painting get their own coordinates, measured by
  a subagent looking at the picture. The outside painting has no upright version; its doorway
  scale-about-centre already covers upright. If the walk-in still letterboxes, report it.

### 6. Typography (owner's mid-turn add: "find font types and typography that matches the theme")
- Today: `--font-display` Cinzel, `--font-body` EB Garamond (`tokens.css:39-40`), both embedded
  as base64 in `app/data/fonts.js`. `app/data/` is off-limits, so that file is NOT edited.
- Find: one Sonnet `researcher` (prompt opens `ROUTE-OK:`), read-only, returns a shortlist with
  licence URL and file source per face. Hard filters: SIL OFL or equivalent reuse licence;
  static `.woff2` available; Latin coverage complete incl. digits, `µ ° ± ≤ ≥ × ⁶` (doses and
  units must not fall back to another face); a calm text face for long reading. Starting
  candidates to verify, not to trust: display — Cinzel (current), Cinzel Decorative, Marcellus,
  Forum, Cormorant SC/Unicase, GFS Didot caps; text — EB Garamond (current), Cormorant Garamond,
  GFS Didot, GFS Neohellenic, Gentium Book Plus, Alegreya. Check the factory inventory first.
- Download only after the owner's yes; each archive into its own empty folder under
  `progress/redesign/samples/lib/fonts/<name>/`, licence file kept, row added to
  `samples/lib/SOURCES.md` (source, size, hash).
- Show: `progress/redesign/samples/type.html`, real font files via relative `@font-face`
  (Chrome from `file://`), every pairing setting the same four specimens in dark and light on
  the new warm surfaces. Stills at the three sizes. Owner picks by looking.
- Apply (only after the pick): new `app/css/type.css` carrying the chosen faces as base64
  `@font-face` (so it survives `file://` in every browser, same reason `fonts.js` embeds),
  injected by `hall.js` like `warm.css`; override `--font-display` / `--font-body` there. Zero
  lines in `data/fonts.js`, `tokens.css`, `index.html`.
- Typography rules set in the same file, screen only: tracked capitals for titles and plaques
  (inscription spacing), one modular size scale, old-style figures in prose but lining tabular
  figures in stats, scores and doses, true small caps where the face has them, no faux bold or
  faux italic, measure 60-75 characters on the theory sheet. Theory A4 page count re-checked on
  two long chapters: a wider face must not push tables over the `overflow:hidden` clip.
- Print: `print.css` not edited; print one theory page before and after and compare page count.

### Routing
- Typography research and `type.html` run beside builds A and B; applying waits for the pick.
- Step 1 report: `D:\scratch 2026\redesign\walkin\check-report.txt` (background job `b5x84i8xr`);
  read only its verdict lines.
- Doors picture: Codex image, ONE job, busy test first (count `codex.exe` with ` exec`),
  Pediatrics has first call.
- Builds A and B: two separate Sonnet `lean-drafter` spawns, each one bounded job, each prompt
  opening `ROUTE-OK: the only capable outside seat is the picture maker and the outside checker
  for this job, and it cannot run the screenshot browser in its sandbox`. Each brief saved under
  `progress/redesign/briefs/` with marching orders, the footprint rule and a 60-call close-out.
- Check layer 1 (script): `node tools/boot-check/boot-check.js` in the worktree, 0 console errors
  from `file://`; contrast numbers; `git diff main...HEAD --stat` shows the footprint above;
  recursive count of live rules in `warm.css` via `document.styleSheets`.
- Check layer 2 (different house): Codex read-only against an updated
  `briefs/check-walkin.md` (cue gone, doors, skin, rail). Codex did not build this round.
- Stills: the builder's shoot script in `D:\scratch 2026\redesign\walkin\` (no `--` in the
  profile path), 1440x900 / 1180x820 / 820x1180 x dark/light x doors-shut / opening / hall /
  below, reduced-motion set, plus module view, one question, one theory page in dark. A Haiku
  subagent looks at every still against the look rules and returns text. Main chat reads no image.

### Verification
- Boot from `file://`: 0 console errors, 4 alcoves, both looks.
- No element named `.wk-cue` in the DOM; grep finds none in `app/`.
- Doors shut at scroll 0, fully open before the zoom starts, never re-close on scroll back past
  the pin except by scrolling back; keyboard users can still reach the alcoves.
- No navy left: sample background colours of `.rail`, `.card`, `.modal`, `.toast`, `.topbar`,
  `body` in dark; none has blue above red.
- Theory reader: sheet is dark and A4, unchanged box; print preview of a theory page and of home
  identical to before (print tokens forced by `print.css`).
- Reduced motion: no door swing, no walk; stacked pictures as before.
- Resume note updated with: the owner's four changes and his gold-glow pick, the whole-app order
  he approved, every shared-file line touched (expected: none new). Commit with
  `git -C … commit -F <msg> -- <paths>`, push, never `--force`.
