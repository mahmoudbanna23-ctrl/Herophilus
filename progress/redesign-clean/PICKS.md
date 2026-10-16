# Owner's build picks — 2026-10-16

Chosen from live previews (artifact https://claude.ai/artifact/M1T2BmqmMMDfWzrQuCt1Jx), pasted verbatim:

> Colours: Ready style kit (Open Props defaults) | Icons: Tabler | Main font: Geist | Title font: Newsreader |
> Reading font: Newsreader | App motion: Browser built-in | Front page: Film engine + glide scrolling (GSAP + Lenis) |
> Panels: Browser built-in

| Choice | Means | Version staged |
|---|---|---|
| Colours | Open Props gray ladder + blue accent, values copied into our own semantic tokens | open-props 1.7.16 |
| Icons | Tabler outline, inlined | @tabler/icons 3.49.0 |
| Main font | Geist (UI, stems, options) | geist 1.3.1, Geist-Variable.woff2 |
| Title + reading font | Newsreader (opsz variable) | @fontsource-variable/newsreader 5.1.1 |
| App motion | Browser CSS only, no library | — |
| Front page (step 4) | GSAP + ScrollTrigger + Lenis | pin at step 4 |
| Panels | native `<dialog>` / popover | — |

## Approved moves carried over (owner 2026-10-16: "yes keep all 11")

Approved 2026-10-11 in the painted-city round (`progress/redesign/RESUME-redesign.md` lines 143-150, 207-219).
In-app moves are rebuilt with browser CSS / View Transitions (owner's app-motion pick); front-page moves use GSAP.

| Move | What it does | Where | Step |
|---|---|---|---|
| N4 | answer ring melts into a tick | quiz, on check | 1a part B |
| M5 | small shake on a wrong answer | quiz | 1a part B |
| M6 | small bounce on a right answer | quiz | 1a part B |
| M1 | subject card opens into its page | Today -> subject | 1b / 2 |
| M2 | chapter row grows into a card | subject page | 1b |
| A3 | chapter rows arrive in a wave | subject page | 1b |
| A1 | ripple across a tile grid from the pressed tile | subject tiles | 2 |
| A4 | ring and underline draw themselves | progress rings, headings | 1b / 2 |
| N1 | heading rises line by line | front page | 4 |
| M3 | depth on scroll | front page | 4 |
| M4 | self-drawing ring | front page | 4 |

All still obey: transform / opacity / clip-path (plus SVG stroke-dashoffset for the drawn ones), 120-320 ms in the app,
no idle loops, prefers-reduced-motion stops every one.

Not chosen by the owner (invisible, my call): keep the vanilla engine; no build step until step 4 needs one.
Staged files: `D:\scratch 2026\clean-vendor\` (fonts + licences, Open Props sheets, Tabler outline set).
Licences: Geist OFL-1.1, Newsreader OFL-1.1, Open Props MIT, Tabler MIT.

## Ready-made animations (owner 2026-10-16, picked from the live shelf https://claude.ai/artifact/PF5cPLVPCR8sJu73shVYU8)

Files staged in `progress/redesign-clean/anim-picks/` (Lottie JSON), licences in `anim-picks/LICENCES.md`.
Shelf of all 37 candidates + manifest: `D:\scratch 2026\anim-shelf\`.

| # | Picked | File | Likely use |
|---|---|---|---|
| 7 | Time hourglass | time-hourglass-H3UkbK6hVS.json | exam clock / timed mode |
| 14 | Calm flame | calm-flame-oIGx0ljGQN.json | streak (step 2 Today) |
| 20 | Book open | bookOpen.json (line icon) | subject / chapter open |
| 22 | Checkmark | checkmark-UaMrRzGt3G.json | right answer (1a part B, beside or instead of N4) |
| 24 | Cross | cross-close-cancel-icon-animation-imJWR2OMg7.json | wrong answer (1a part B, with M5) |
| 28 | Visibility eye | visibility.json (line icon) | show explanation / reveal |
| 32 | Loading v2 | loading2.json (line icon) | loading / sync |
| 33 | Search | search-imm-xZN2Dotxbr.json | search empty / searching |
| 35 | Bell | bell-notification-ZkcfxiLlPr.json | due-review reminder |
| 36 | Empty state | empty-state-EfSeWUwwKs.json | empty pages (step 5, beside the Clepsydra helper) |
| 37 | Success celebration | success-celebration-Sn1bJRj6pz.json | set / chapter finished (step 5) |

Open for the builder: these need a Lottie player in the app (lottie-web `lottie_light` svg build, served from our own
site per CLAUDE.md §2) - the one exception to "browser built-in motion". Colours must be re-tinted to our tokens;
line icons recoloured for dark. Reduced motion shows the last frame, no play. Placement above is my proposal, not the owner's.

## Big motion - direction (owner 2026-10-16)

Showcases rejected: 12 texture/gradient scenes (https://claude.ai/artifact/H3HEq89hYEooZFVt5ENbBS) - "textures or fades
not objects"; anatomy 3D objects (https://claude.ai/artifact/CP52722jnsgp5d1xZLsSqU) - all but one.
Picked: scene 8, Flying question cards (three.js: subject-tinted question cards flying toward the camera, mouse steers,
scroll boosts). Likely use: front page hero (step 4).
Direction, owner's own words: "things like what you find on motion UI" - reference site he named: https://motion.dev/
(Motion library examples: cards stacking/fanning, layout morphs, a card growing into a page, springy panels, scroll-linked
reveals). Read: the app's own pieces moving big, not ambient art. Next: a showcase of motion.dev-style moves built from our
own question cards, panels and progress, for the owner to pick from. Unbuilt as of this entry.
Owner correction 2026-10-16: "not just questions cards all the site" - motion.dev-style motion runs across EVERY screen
(front page, Today, subject pages, quiz, results, review, exams, schedule, menus, sign-in), not only on question cards.
Showcase must show moves for each screen. Still binding: reading surfaces (quiz stem, explanation, theory) stay still
while being read; motion happens on change of screen/state; reduced motion stops all.
Owner widening 2026-10-16: "not just spring motions look for anything that might fit and look modern" - motion.dev is ONE
reference, not the limit. The showcase scouts every current modern web-motion style that could fit (springs, scroll-linked
and pinned scenes, layout/shared-element morphs, view transitions, text reveals, number counters, clip/mask wipes, magnetic
and cursor-follow, marquee, parallax depth, staggered grids, blur/gradient-mesh accents, 3D tilt, Lottie/Rive, WebGL
backgrounds, etc.), sources each (site + licence), and shows them on our own screens for the owner to pick.
Owner ruling 2026-10-16: "Never recreate just copy" - every motion is the REAL published code/file from its source, never a
hand-built look-alike. Open licence only (MIT, Apache, ISC, CC0, CodePen public = MIT, uiverse = MIT, Magic UI = MIT ...),
source URL + licence recorded per piece. Company sites (Apple, Linear, Stripe, Vercel) are not copyable: open-licence
equivalent or leave out, owner told which. Edits allowed: colours, text, size - not the motion. The 45-move hand-built
showcase (scratchpad herophilus-motion-ui.html) is VOID under this rule and was never shown to the owner.

## Small motion picks - owner 2026-10-16 (9 of 35)
From the copied pick-page (https://claude.ai/artifact/2iU2kqb5HGa4UKsHGButBh; file D:\scratch 2026\motion-copied\
herophilus-motion-copied.html, MANIFEST.md beside it). All MIT. Copy as published; only colours, text, size may change.

| # | Move | Screen | Source | Author |
|---|---|---|---|---|
| 1 | Question counter | Front page | https://github.com/HubSpot/odometer | HubSpot |
| 6 | Chapter progress ring | Subject page | https://github.com/kimmobrunfeldt/progressbar.js | Kimmo Brunfeldt |
| 10 | Question number panel | Quiz | https://uiverse.io/AmIt-DasIT/neat-turkey-32 | AmIt-DasIT |
| 11 | Check answer button | Quiz | https://uiverse.io/adamgiebl/rude-bear-14 | adamgiebl |
| 13 | Score ring | Results | https://github.com/chartjs/Chart.js (doughnut) | Chart.js contributors |
| 23 | Add to schedule button | Schedule | https://uiverse.io/andrew-demchenk0/giant-termite-81 | andrew-demchenk0 |
| 24 | Menu icon, folding | Navigation | https://uiverse.io/JulanDeAlb/tall-swan-6 | JulanDeAlb |
| 27 | Search field | Navigation | https://uiverse.io/alexruix/slippery-snail-18 | alexruix |
| 28 | Email field | Sign-in and profile | https://uiverse.io/SanthoshSJ-Dev/mean-wolverine-8 | SanthoshSJ-Dev |

Not picked: the other 26 on that page. Big-moves page still owed (RESUME-clean.md).
