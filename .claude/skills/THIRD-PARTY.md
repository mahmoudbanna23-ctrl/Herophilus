# Third-party skills — provenance and project overrides (installed 2026-09-26)

Owner approved install 2026-09-26 after reference video 2 (`progress/app-replan/p5/REF-video2-teardown.md`).
Each folder is copied verbatim from upstream, plus its repo's LICENSE. Never edit the upstream text;
overrides live here.

| Skill folder | Upstream | Commit | Licence |
|---|---|---|---|
| redesign-skill, image-to-code-skill, imagegen-frontend-web | github.com/Leonxlnx/taste-skill | c184364 (2026-09-23) | MIT |
| animate, animation-vocabulary, emil-design-eng, find-animation-opportunities, improve-animations, review-animations, apple-design | github.com/emilkowalski/skills | d16ebe6 (2026-09-24) | MIT |

Screened by Codex gpt-5.6-terra (read-only) plus a grep for install/fetch/override text: no hidden
or override instructions found. Skipped: `taste-skill` main (mandates React/Next + Tailwind, npm
installs), all React Native / Swift / Expo / Sonner skills.

## Project rules win on any conflict (root `CLAUDE.md` §7, project `CLAUDE.md` §2)
- Vanilla HTML/CSS/JS, no framework, no build, no npm, no CDN, works from `file://`. Translate any
  React / Framer Motion / `useSpring` example into CSS transitions, scroll-driven animations, WAAPI
  or rAF.
- Never fetch easing curves or placeholder images from the web (easing.dev, easings.co,
  picsum.photos); write curves inline.
- redesign-skill: never invent "realistic" names or numbers — content is transcribed medical data.
- image-to-code / imagegen-frontend-web: reference images come from our own plates or Codex image
  gen; never draw on or redraw the Clepsydra.
- ALIVE TO BROWSE, CALM TO READ and `prefers-reduced-motion` still bind.
