# Design systems survey for Herophilus (research, 2026-10-15)

Method: official pages and official GitHub raw files fetched through WebFetch. Anything I could not read from an official page is marked UNVERIFIED. Several official sites (m3.material.io, fluent2, spectrum, Apple HIG HTML) render by script and gave little text; where I used a substitute official file I say so. Not surveyed (budget): Game UI Database or any dedicated game design system; none fetched, so none claimed.

## Summary table

| system | licence | most useful for us | link |
|---|---|---|---|
| Material 3 (Google) | Code and token files: Apache 2.0 (material-web LICENSE, read). Licence of guideline text on m3.material.io: UNVERIFIED. | 16-step duration scale 50 to 1000 ms; emphasized easing curves; window size classes 600/840/1200/1600 dp | https://raw.githubusercontent.com/material-components/material-web/main/tokens/versions/v0_192/_md-sys-motion.scss |
| Fluent 2 (Microsoft) | Fluent UI repo: MIT (read). Fonts and icons carry separate terms. Licence of fluent2.microsoft.design text: UNVERIFIED. | Duration scale 50 to 500 ms; nine named curves; large text rule 18.5px bold or 24px regular | https://github.com/microsoft/fluentui/tree/master/packages/tokens/src/global |
| Apple HIG | No licence to copy; guidance only. No token files exist. | Control sizes 44x44 pt default and 28x28 pt minimum on iPad; Reduce Motion rules; flashing rules | https://developer.apple.com/design/human-interface-guidelines/accessibility |
| IBM Carbon | Apache 2.0 (repo LICENSE, read). Site text licence UNVERIFIED. | Productive vs expressive curves; six duration tokens; layer stacking for depth without shadows; core / theme / component token layering; grid breakpoints | https://carbondesignsystem.com/elements/motion/overview/ |
| GOV.UK | Code: MIT, Crown Copyright GDS (LICENSE.txt, read). Design system page text licence UNVERIFIED. | Focus width 3px; focus built from transparent outline plus no-blur box-shadows; breakpoints 320/641/769 | https://github.com/alphagov/govuk-frontend |
| Adobe Spectrum | Spectrum tokens repo: Apache 2.0 (LICENSE, read). | Little: motion page says motion still in development; only a reduced-motion sentence | https://spectrum.adobe.com/page/motion/ |
| Atlassian | UNVERIFIED (not fetched). | Duration bands 50-150 ms interactions, 150-400 ms transitions; four named curves; reduced motion means instant | https://atlassian.design/foundations/motion |
| Shopify Polaris | Modified MIT. Rights only for apps that integrate with Shopify; standalone apps must be visually distinct from Shopify products (LICENSE.md, read). Treat as NOT copyable. | Nothing worth the licence risk. Motion page timed out; tokens page redirected away. | https://raw.githubusercontent.com/Shopify/polaris/main/LICENSE.md |
| Xbox Accessibility Guidelines (XAG) | MicrosoftDocs licence file not retrieved (404): UNVERIFIED. Quote numbers with credit, do not copy prose. | Text size, line width, spacing, 200 percent scaling; contrast tiers 3 / 4.5 / 7:1; flash thresholds | https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/101 |
| Game Accessibility Guidelines | UNVERIFIED (about page 404). | Basic / Intermediate / Advanced checklist; 0.5 s input cool-down; no essential info by colour alone | https://gameaccessibilityguidelines.com/full-list/ |

Values are facts and numbers; copy from the Apache/MIT sources (Material, Fluent, Carbon, GOV.UK, Spectrum) and treat the rest as reference only. Legal reading of "numbers are free" is not verified.

## Motion

Our limits: transform, opacity, clip-path only; reduced motion must be respected.

Material 3 durations (material-web v0_192 _md-sys-motion.scss, https://raw.githubusercontent.com/material-components/material-web/main/tokens/versions/v0_192/_md-sys-motion.scss):
- short1 50 ms, short2 100, short3 150, short4 200
- medium1 250, medium2 300, medium3 350, medium4 400
- long1 450, long2 500, long3 550, long4 600
- extra-long1 700, extra-long2 800, extra-long3 900, extra-long4 1000

Material 3 easing (same file):
- standard cubic-bezier(0.2, 0, 0, 1); standard-accelerate (0.3, 0, 1, 1); standard-decelerate (0, 0, 0, 1)
- emphasized (0.2, 0, 0, 1); emphasized-accelerate (0.3, 0, 0.8, 0.15); emphasized-decelerate (0.05, 0.7, 0.1, 1)
- legacy (0.4, 0, 0.2, 1); legacy-accelerate (0.4, 0, 1, 1); legacy-decelerate (0, 0, 0.2, 1)
- The m3.material.io easing page returned only its title, so the page's own pairing of durations to uses is UNVERIFIED.

Fluent durations (https://raw.githubusercontent.com/microsoft/fluentui/master/packages/tokens/src/global/durations.ts): ultraFast 50, faster 100, fast 150, normal 200, gentle 250, slow 300, slower 400, ultraSlow 500 ms.

Fluent curves (same folder, curves.ts):
- accelerateMax (0.9, 0.1, 1, 0.2); accelerateMid (1, 0, 1, 1); accelerateMin (0.8, 0, 0.78, 1)
- decelerateMax (0.1, 0.9, 0.2, 1); decelerateMid (0, 0, 0, 1); decelerateMin (0.33, 0, 0.1, 1)
- easyEaseMax (0.8, 0, 0.2, 1); easyEase (0.33, 0, 0.67, 1); linear (0, 0, 1, 1)

Carbon (https://carbondesignsystem.com/elements/motion/overview/):
- Productive: standard (0.2, 0, 0.38, 0.9); entrance (0, 0, 0.38, 0.9); exit (0.2, 0, 1, 0.9)
- Expressive: standard (0.4, 0.14, 0.3, 1); entrance (0, 0, 0.3, 1); exit (0.4, 0.14, 1, 1)
- Durations: fast-01 70 ms (button, toggle); fast-02 110 (fade); moderate-01 150 (small expansion); moderate-02 240 (expansion, system communication, toast); slow-01 400 (large expansion, important notifications); slow-02 700 (background dimming)
- Carbon's own checklist says micro-interactions sit at 90-120 ms, which disagrees with its 70 ms token. Duration should scale with the size of the change.

Atlassian (https://atlassian.design/foundations/motion):
- Interactions 50-150 ms (hover, press); transitions 150-400 ms (enter, exit, move); examples: dropdown 150 ms, modal 250 ms
- Curves: ease-out bold (0, 0.4, 0, 1); ease-in-out bold (0.4, 0, 0, 1); ease-in practical (0.6, 0, 0.8, 0.6); ease-out practical (0.4, 1, 0.6, 1)
- Motion tokens bundle duration, easing and properties (example name motion.popup.enter). Status: early access behind a feature flag.

Apple (https://developer.apple.com/tutorials/data/design/human-interface-guidelines/motion.json): no duration or curve values. Rules worth keeping: add motion purposefully; avoid motion on frequent interactions; brief precise feedback; let people cancel motion, do not make them wait for an animation; supplement visual feedback with haptics or audio.

Spectrum: no values published (page says Spectrum 2 motion is in development).

## Reduced motion

- Apple (https://developer.apple.com/tutorials/data/design/human-interface-guidelines/accessibility.json): when Reduce Motion is on, reduce automatic and repetitive animations including zooming, scaling and peripheral motion; tighten springs; replace x/y/z transitions with fades; avoid animating into and out of blurs.
- Atlassian (motion page above): reduced motion means motion is off and instant; avoid flashing, rapid oscillation, sweeps of large areas; verify the interface is fully usable with all motion disabled.
- Spectrum (https://spectrum.adobe.com/page/motion/): motion over large surface areas must support browser and system reduced-motion settings.
- Carbon (motion page above): always provide alternatives for state transitions; communicate the same message statically.
- Fluent: reduced motion not addressed on the accessibility page.

## Focus ring and keyboard

- GOV.UK focus width 3px (https://raw.githubusercontent.com/alphagov/govuk-frontend/main/packages/govuk-frontend/src/govuk/settings/_measurements.scss).
- GOV.UK focus mixins (https://raw.githubusercontent.com/alphagov/govuk-frontend/main/packages/govuk-frontend/src/govuk/helpers/_focused.scss): every style starts with an outline of focus-width solid transparent, so the ring survives forced-colours overrides. Text focus: background in focus colour plus box-shadows 0 -2px focus colour and 0 4px focus-text colour, no blur. Box focus: two 4px-spread no-blur shadows, inner focus colour, outer 8px in focus-text colour. Form input: outline focus-width solid in focus colour, offset 0, plus an inset shadow in the border colour.
- GOV.UK focus colour hex values: not retrieved (palette file 404, focus page failed). UNVERIFIED.
- Carbon focus tokens (https://carbondesignsystem.com/elements/color/tokens/): focus #0f62fe, focus-inset #ffffff, focus-inverse #ffffff. The white inset beside the blue is a two-colour ring that survives any background. Per-theme values not on the page.
- Carbon keyboard page (https://carbondesignsystem.com/guidelines/accessibility/keyboard/): Tab moves, Enter or Space activates, DOM order equals tab order, prefer native elements; no focus specs there.
- Fluent accessibility page (https://fluent2.microsoft.design/accessibility): focus moves left-to-right, top-to-bottom; focus must not be lost after a temporary UI such as a dialog closes. No ring size or colour published there.
- Game Accessibility Guidelines (https://gameaccessibilityguidelines.com/full-list/): 0.5 s cool-down between inputs (Advanced).

## Touch targets

- Apple (accessibility.json URL above): default / minimum control sizes: iOS and iPadOS 44x44 pt default, 28x28 pt minimum; macOS 28 / 20; visionOS 60 / 28; tvOS 66 / 56; watchOS 44 / 28. Padding: about 12 pt around bezeled elements, about 24 pt around elements without a bezel.
- Material 48 dp: UNVERIFIED. The Android accessibility page I fetched did not state it; the figure came from the fetch tool's background knowledge, not the page.
- WCAG 2.2 24x24 CSS px minimum: UNVERIFIED (same reason; W3C was outside the named list).
- GOV.UK: no touch-target variable in its measurements file.
- Fluent: not specified on the accessibility page.

## Type scale, line length, text settings

- XAG 101 (https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/101): minimum default text, measured as body height (ascender to descender pixels, NOT CSS font-size): PC 18 px at 1080p, 36 px at 4K; console 26 px at 1080p; mobile 18 px at 100 DPI scaling linearly. Text must scale to 200 percent without loss; no scrolling in two directions at once. Without user controls: line width not over 80 characters, leading at least 1.5, paragraph spacing at least 2x line spacing, letter spacing at least 0.12 of font size, word spacing at least 0.16. Sentence case for lines of text; left or right aligned, not centred or justified. At least one sans-serif option; a non-stylised fallback for decorative fonts. Complete glyph sets for supported languages.
- Apple (accessibility.json): iOS/iPadOS text default 17 pt, minimum 11 pt; macOS 13 / 10. Offer enlarging text by at least 200 percent.
- Fluent accessibility page: large text means above 18.5 px bold or 24 px regular; content reflows down to 320 px and to 400 percent zoom; no clipping at 200 percent.
- GOV.UK typography sizes: page returned 404. UNVERIFIED.
- GAG: Basic "use an easily readable default font size"; Advanced "allow the font size to be adjusted".

## Tokens: naming and layering

- Carbon (https://carbondesignsystem.com/elements/color/tokens/): three layers. Core tokens (semantic names; example layer-01 maps to Gray 10 #f4f4f4). Theme tokens (same names, values change per theme: White, Gray 10, Gray 90, Gray 100). Component tokens (for example button-primary; "should never be used for anything other than their own component").
- Material 3: token files are split md-ref / md-sys / md-comp (reference / system / component); the versioned file name md-sys-motion fits this. The explicit three-tier wording was not read from an official page: UNVERIFIED as a quote.
- Fluent: flat global tokens (durations.ts, curves.ts) named by role.
- Atlassian: semantic tokens bundle duration, easing and property.

## Elevation without shadows or blur

- Carbon layers (colour tokens page above): background #ffffff, layer-01 #f4f4f4, layer-02 #ffffff, layer-03 #f4f4f4; hover #e8e8e8, selected #e0e0e0 (hover #d1d1d1), active #c6c6c6; layer-accent 01-03 #e0e0e0, hover #d1d1d1, active #a8a8a8. Depth comes from alternating container fills.
- GOV.UK uses no-blur box-shadow rings for focus (static, not animated).
- Apple: avoid animating into and out of blurs (Reduce Motion list).
- Our project already forbids backdrop-filter on cards; stacked fills plus hairlines match the Carbon technique.

## Dark theme contrast

- XAG 102 (https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/102): standard text and elements 4.5:1; large-scale 3:1; text on inactive elements 3:1; placeholder / input text 4.5:1 (3:1 large); a high contrast mode (light, dark or both) at 7:1 for all UI elements. Large text on PC: 36 px at 1080p. Text over a non-solid background is measured against the lowest-contrast area. Images must not contain text except logotypes. Decorative elements have no contrast requirement. Read the platform high-contrast setting at launch.
- Apple (accessibility.json): up to 17 pt 4.5:1; 18 pt 3:1; bold any size 3:1; offer a higher-contrast scheme when Increase Contrast is on.
- Fluent accessibility page: text 4.5:1; large 3:1; interactive and non-text components 3:1 against neighbours.

## iPad and large-screen breakpoints

- Android window size classes, width: compact under 600 dp; medium 600 to under 840; expanded 840 to under 1200; large 1200 to under 1600; extra-large 1600+. Height: compact under 480; medium 480 to under 900; expanded 900+. Page says 93.73 percent of tablets in portrait are medium and 97.22 percent of tablets in landscape are expanded. Source: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes
- Carbon: sm 320 (4 col), md 672 (8 col), lg 1056 (16 col), xlg 1312, max 1584; 16 px padding, 32 px total gutter. Source: https://carbondesignsystem.com/elements/2x-grid/overview/
- GOV.UK: mobile 320, tablet 641, desktop 769. Source: https://raw.githubusercontent.com/alphagov/govuk-frontend/main/packages/govuk-frontend/src/govuk/settings/_media-queries.scss
- Apple iPad point widths: not retrieved. UNVERIFIED.

## Loading and skeleton patterns

Not found. I did not fetch a loading or skeleton page from any system. Related facts only: XAG 101 says loading-screen text that carries information must meet text size and contrast rules; Carbon slow-02 700 ms is for background dimming. Everything else UNVERIFIED.

## Toasts and notifications

- Carbon: moderate-02 240 ms covers toast; slow-01 400 ms covers important system notifications (motion page above).
- XAG 101: error messages, toasts and notifications must follow the same text size, weight and contrast settings, overlay dialogs included.
- Dedicated toast on-screen time, placement and stacking rules: not retrieved. UNVERIFIED.

## Accessibility for games

- XAG 118 (https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/118): a flash is a 10 percent change in luminance with the darker value below 0.8; fails if more than about 3 per second, or covering about 20 percent of the screen or more; lower-intensity flashing also fails if sustained. Red flash: saturated red, R/(R+G+B) at or above 0.8, flash when the change in (R-G-B) x 320 exceeds 20. Spatial pattern: alternating high-contrast bands, contrast difference over 10 percent, covering about 20 percent or more. Fixes: reduce contrast, frequency or size; desaturate red.
- GAG full list (https://gameaccessibilityguidelines.com/full-list/): subtitles for all important speech; customisable subtitles; subtitles available before sound; appropriate words per minute. Avoid flickering and repetitive patterns; avoid sudden unexpected movement. High contrast text/UI; option to adjust contrast; choice of text colour. No essential information by fixed colour alone. Interactive elements large and well spaced; UI resizable. Controls remappable. Do not make precise timing essential; offer alternatives, actions usable while paused, or a skip.
- XAG 101/102: text must be its own element over art, not baked into images, so it can be recoloured and enlarged. Matters for our painted rooms.

## Avoid (would make us look like a stock product)

- Material: pill buttons and chips (already banned), tonal-surface colour tint, ripple on press, floating action button, Roboto / Google Sans look, filled-tonal buttons.
- Fluent: acrylic / mica blur, Segoe UI Variable, uniform small rounded corners, the default blue accent.
- Carbon: IBM Plex, the square grey grid look and Blue 60 #0f62fe as accent. Copy the method (layers, token tiers), not the palette.
- GOV.UK: the bright yellow focus block with black underline is recognisably government (exact hex UNVERIFIED). Reuse the construction (3px, transparent outline, two-colour ring) with our own colour pair.
- Polaris: do not copy at all (licence, and Shopify-coded).
- Apple: vibrancy, blurred materials, springy bounce.
- Any system's default easing used unchanged on everything, and one uniform duration for every element: a tell of generated UI.
- Skeleton shimmer sweeps and idle pulses: forbidden by our rules anyway.

## Top 5 to adopt first

1. Motion scale from Material 3: durations 100 / 200 / 300 / 400 / 500 ms (short2, short4, medium2, medium4, long2); entrances emphasized-decelerate (0.05, 0.7, 0.1, 1); exits emphasized-accelerate (0.3, 0, 0.8, 0.15); default (0.2, 0, 0, 1). Under reduced motion: instant (Atlassian), fades instead of translation (Apple), loops stopped.
2. Focus ring: 3px (GOV.UK) two-colour ring with a transparent outline fallback, and an inset contrast colour paired with the ring colour (Carbon focus / focus-inset). Ring must hit 3:1 on every painted ground (3:1 for non-text is from Fluent's page).
3. Touch targets: 44 x 44 pt default and 28 x 28 pt floor on iPad (Apple), 12 pt padding around bezeled controls, 24 pt around bare ones.
4. Token tiers and elevation from Carbon: reference palette, theme tokens that flip per theme, component tokens used only by their component; depth by layer fills and hairlines, not shadows.
5. XAG text and contrast pack: 200 percent text scaling, line width max 80 characters, leading at least 1.5, contrast tiers 4.5 / 3 / 7:1 with an optional high-contrast mode, no text baked into paintings, flash limits (3 per second, 10 percent luminance, 20 percent of screen).
