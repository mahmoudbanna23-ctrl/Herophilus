# Walk judgement (Claude) - new student, trial build

Evidence read: both steps.json, 8 contact sheets, PNGs 01, 03, 05, 10, 13, 20, 24, 25 (1440x900) and 22 (1180x820). walk.mp4 not opened. Plan read for phase headings only. No console errors, no failed requests, no window errors in either run.

## 1. Step by step
- 01-opening-shot1: a painted dusk sea with glowing cloud tops, lighthouse as a tiny far spark. Pretty and on-style, but the four building cards ("Start studying") and the top bar, rail and orange guide are already on screen over empty sea. The student is told to "start" before any city exists.
- 02 (sheet): same sea, camera creeping toward the lighthouse. Fine.
- 03-opening-shot2: a flat, near-empty blue-grey frame (cov ~0.03-0.05) with the cards floating on it. This is the dead moment of the opening. Reads as a loading glitch, not a cloud.
- 04-opening-landing: lighthouse rising out of a mist bank. Good frame. The mist cover is soft, the lighthouse is crisp.
- 05-city-home-after-opening: the payoff. Painted night city, lamps, harbour, theatre, temple, garden. Strongest image in the walk. The first welcome line lands at once on the lower right.
- 06-08 welcome (9 lines): plate with text, "1 of 9", Next and Skip. Content is calm and short, no chirpiness. Needs 9 clicks to reach the dashboard; the Next button sits right on the Neuropsychiatry card area.
- 09-dashboard-action: "Choose a building to begin." plus "About Herophilus". No action button for a new student, which is right in principle but gives no first recommended step.
- 10-ent-building: ENT is a plain dark list, not a painted room. A faint ghost of horns and bottles sits behind it. Help tip about "Greyed ones" overlaps the last chapter rows.
- 11-19 quiz: plain reading page, no painted world at all. Marker palette, check, "How sure were you", explain accordion. Works, no errors. Explanations show raw markup debris (">", bullets joined with "•", backticks like `L7`).
- 20-quiz-finished-results: "2 / 4", Continue, Return home, Wrong answers. Two-thirds of the screen is empty dark. Functional, dead of atmosphere. "12 skipped" was my recorder, not a student failure.
- 21/23/26/28/30 back home: instant swap city to page and back. No camera move, no door, no sense of walking in or out.
- 22-ent-reopened: the page now says "50% accuracy" in red; on iPad the guide covers the last chapter's count (0/84).
- 24-ophtho-building: the only painted room. Dark stone library, shelf of scrolls, desk, hourglass, chest, window onto the city. Good depth and lighting. Four labelled hotspots. Guide stands in the middle of the floor.
- 25-ophtho-lessons-sheet: "Lessons / Lecture notes are not open yet / Nothing to read here yet." A huge, nearly empty navy panel covering the room. Dead end.
- 27/29 neuropsych and pediatrics: same plain list as ENT, each with a faint ghost background.
- 31-theory-not-reachable: rail shows "Theory soon". Theory cannot be read anywhere.

## 2. Broken or confusing
- Cards and chrome float over the opening shots before the city exists (01-04). Shot 2 (03) is a blank blue frame.
- City cards sit on top of the buildings they name: Ophthalmology covers the lighthouse base, Neuropsychiatry covers the temple front, and the welcome plate (05) lands on the Neuropsychiatry card. Lamp pips on cards render as tiny empty squares.
- Three of four buildings and the whole quiz are plain screens. Going from the painted city to a flat list is a hard style break; the ghost art behind ENT/neuro/peds looks like a mistake, not a room.
- Lessons sheet (25) is an empty shell; its "Coming soon" label on the shelf is clipped behind it.
- Guide is a bright orange cartoon cut-out. It does not share the paint or lighting of the city or the room; on iPad (22) it covers content.
- Quiz explanations carry raw source markup and wall-to-wall bold caps (13).
- Results (20) and the dashboard give no next step for a beginner.
- Navigation is instant everywhere: no transition tied to a door, a click, or a camera.
- 1180x820: opening and city fit; the city crop is tighter and cards sit closer together. A black band appears at the right edge of the city in one iPad frame (sheet 3, after results), likely a resize or reveal frame; check it.

## 3. Top 10 gaps (worst first)
1. Three of four buildings are plain lists, not painted rooms (10, 27, 29). The promise of the redesign is missing for 75% of the content. Large (9 plates plus page code, Phase 4).
2. The quiz and results are flat dark pages with no world (12-20). Students spend nearly all their time here. Large (design pass, tie to room/desk plates).
3. Theory is locked and the Lessons sheet is an empty panel (25, 31). A study app with no reading. Large (content) plus small (hide the dead sheet until real).
4. Opening has a blank frame and chrome over it (03, 01-04). Not premium; reads as a bug. Medium (shot 1 and 2 handover, hide chrome until the city lands).
5. Guide is a 2D cartoon sticker that clashes with the painted look and blocks content (05, 22, 24). Large (Phases 5-6 3D rig), small now (keep out of content, tone to the art).
6. Cards sit on the buildings and overlap the welcome plate (05). Medium (anchor labels to the building edge, move the plate).
7. No transitions: city to page to city is a hard cut (21, 23, 26). Medium (camera push into the building, door cause, Phase 7 motion scale).
8. Cold start gives no first action (09, 20). Medium (a "Start here" building with a gentle pulse; results offer a next step).
9. Quiz explanation text shows raw markup, backticks and shouting caps (13). Small to medium (text cleanup rule at render time).
10. Polish tells: oversized empty panels (25, 20), mixed corner radii on cards, tip bubble over list rows (10), empty-square lamp pips (05). Small (Phase 7).

## 4. Verdict
About 40% of the way there: the opening-to-city moment (04-05) and the ophthalmology room (24) hit the premium painted-game feel, but the rest of the walk drops straight into a plain dark app. Single most important next thing: bring painted rooms to ENT, neuropsychiatry and pediatrics and carry that world into the quiz screens, so a student never leaves the painted city.
