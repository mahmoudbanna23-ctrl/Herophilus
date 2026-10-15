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
