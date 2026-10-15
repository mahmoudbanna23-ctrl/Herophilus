# Library research for the Herophilus redesign (checked 2026-10-16)

Constraint update from owner (mid-task): online-only is fine, no offline, no file://. Libraries via npm + build step; serve from our own Cloudflare Pages site. The file:// Vite question is dropped.
Versions and licences come from the npm registry (registry.npmjs.org/<pkg>/latest). Gzip sizes come from the bundlephobia API (bundlephobia.com/api/size?package=<pkg>@<ver>). "unverified" = could not confirm.

## 0. CDN reachability from Egypt (evidence only)
- No source found saying Telecom Egypt blocks jsDelivr, cdnjs, unpkg, or pages.dev/workers.dev. Absence of evidence, not proof.
- A GitHub issue titled "why cdn.jsdelivr.net is blocked in Egypt" exists (title seen only in https://opencollective.ecosyste.ms/collectives/jsdelivr/issues?page=9; body unread, unverified).
- Cloudflare status logged an Egypt connectivity incident on 2026-08-08, cause "outside Cloudflare's network", ISP unnamed: https://isdown.app/status/cloudflare/incidents/635691-connectivity-issues-in-egypt
- Project's own measured fact (MEMORY.md): Netlify IPs blocked on TE Data; herophilus.pages.dev works.
- Verdict: self-host everything on the Pages origin. No CDN needed. Test with OONI/Cloudflare Radar or an Egyptian connection if anyone insists.

## 1. Motion / scroll
- **GSAP 3.15.0**: "Standard no charge" licence, free for all, ScrollTrigger and former club plugins included (https://gsap.com/pricing/, https://gsap.com/standard-license/, npm). Commercial use allowed on any site/app. Prohibited: tools that let users build visual animations competing with Webflow; a question bank is not that. Webflow may revise terms; newer versions bind to new terms, older versions stay under old ones, so pin the version. Core gzip 27,350 B (bundlephobia). ScrollTrigger gzip unverified (bundlephobia 404).
- **Motion 14.3.0** (motion.dev): MIT (npm). `animate()` mini 3.2 kB (https://motion.dev/docs/quick-start). Whole package 51,458 B gzip untreeshaken (bundlephobia). Motion+ is paid extras; core needs none.
- **Lenis 1.3.27**: MIT, 5,458 B gzip. Smooth-scroll hijack: judgement, skip in the app; at most the landing page. Native scroll feels best on iPad Safari.
- **Native scroll-driven CSS** (`animation-timeline`): Chrome 115+, Safari desktop and iOS 26.0+, Firefox 161 only (https://caniuse.com/mdn-css_properties_animation-timeline_scroll). iPads on iOS 18 get nothing: need an IntersectionObserver fallback behind `@supports`.
- **View Transitions, same-document**: Chrome 111+, Safari and iOS 18.0+, Firefox 144+ (https://caniuse.com/view-transitions). Cross-document support: unverified.
- Pick: native CSS + View Transitions for in-app reveals and the question-panel slide; GSAP + ScrollTrigger as a lazy chunk on the landing scroll-story only. Skip Lenis and Motion.

## 2. Design-system foundations
- **Radix Colors 3.0.0**, MIT. 12-step scales with matched dark variants, plain CSS files; fits dark+light. Size unverified (CSS only).
- **Open Props 1.7.23**, MIT. Easings/shadows/sizes as CSS vars; useful but generic. Optional.
- **Geist**: font is OFL-1.1 (https://github.com/vercel/geist-font, npm `geist` 1.7.2, OFL). The Geist design system/tokens: no public licence found, unverified; do not copy.
- **Tailwind 4.3.3**, MIT. Works as a build tool but utility soup across 15 files adds churn and a template look. Not needed.
- Pick: Radix Colors (grays/accent mapped to our own semantic tokens) + hand-written CSS custom properties. Lightning CSS ships inside Vite, so no extra tool.

## 3. Accessible components
- **Native `<dialog>`**: Safari and iOS 15.4+ (https://caniuse.com/dialog). `showModal()` gives focus trap, Esc, inert background, top layer. Use it for the focus-mode drawer and modals.
- **Popover API**: Chrome 114, Firefox 125, Safari 17.0, iOS 17.0 partial, full 18.3 (https://caniuse.com/mdn-api_htmlelement_popover). Use for menus and toasts (`popover="manual"`), with `aria-live`.
- **Floating UI `@floating-ui/dom` 1.8.0**, MIT, 8,209 B gzip. For tooltip/popover positioning only.
- **Command palette**: hand-build on `<dialog>` + input + list (~100 lines). No framework-agnostic kit worth adding found.
- **Web Awesome** (Shoelace successor): free tier kept free/open per FAQ; licence file fetched reads MIT, Fonticons copyright, but the link to Web Awesome is an assumption. Shoelace's last release was 2025-03-11 (https://blog.fontawesome.com/introducing-web-awesome/). Shadow-DOM styling fights a bespoke look and carries a generic-kit risk. Pro pricing unverified. Skip.

## 4. Icons
- **Lucide** 1.57.0, ISC; per-icon SVG, tree-shakable. Pick this one.
- Phosphor core 2.1.1, MIT, six weights; fine alternative.

## 5. Fonts (self-hosted via fontsource npm, woff2)
- Geist 1.7.2 OFL (UI + numerals; the Vercel register). Inter variable (`@fontsource-variable/inter`) 5.3.0 OFL, safe fallback.
- Serif: Newsreader variable (`@fontsource-variable/newsreader`) 5.3.0 OFL for theory/reading text. GFS Didot (`@fontsource/gfs-didot`) 5.3.0 OFL for display only (landing headline, wordmark); never body.

## 6. Build tool
- **Vite 8.3.4**, MIT, needs Node ^20.19 or >=22.12 (local Node 26.7 qualifies). Multi-page via `build.rollupOptions.input`, static `dist/` for Pages. Smallest setup: `vite` as the only devDependency, plain `index.html`, no plugins.
- Existing data files are classic `var` scripts. Keep them in `public/` and load by plain `<script>`; Vite leaves those untouched. Not tested here, unverified: do a spike first.

## 7. Framework question
- Honest answer: no. The goal (look, motion, calm quiz panel) is driven by tokens, CSS, and a few animations, not by a component model. The engine (quiz logic, storage, Firebase sync) stays valid only if views keep calling it as today.
- Preact 11.0.1 is 5,003 B gzip, Svelte 5.57.2 MIT: both small, so size is not the argument. The cost is rewriting ~15 view files plus re-wiring state and sync glue (I did not read the view files, so the effort figure is unmeasured). The risk is regressions in the 7,000-question flows.
- shadcn needs React + Tailwind + Radix and is the most recognisable template look. Against the "must not look AI-built" rule.

## 8. Local design aids
**ui-ux-pro-max** (the path in the brief does not exist; found at `D:/claude os/Medical school/Herophilus/.claude/skills/ui-ux-pro-max/SKILL.md`)
- Python lookup (`search.py`) over local data: 79 styles, 192 palettes, 74 font pairings, 119 UX guidelines, 17 GSAP presets, 22 stacks.
- Gives a priority checklist: accessibility, touch 44 px, performance/CLS, reduced motion, plus a pre-delivery list in `references/pro-rules.md`.

**impeccable 4.0.4** (`C:/Users/Alfa388/.claude/plugins/cache/impeccable/impeccable/4.0.4/skills/impeccable/SKILL.md`, Apache 2.0)
- Design commands: shape, critique/audit, animate, colorize, layout, typeset, polish, harden, adapt, and more. Modes: Persuade (landing), Operate (app UI), Read (theory).
- Carries a craft floor with absolute bans and an anti-pattern detector, run once per bounded pass.
- Writes PRODUCT.md/DESIGN.md; per workspace rule section 7 these must live inside the project folder. Our constraints win on conflict; "the brief wins", so pin our Greek/dark identity in it.

---

## RECOMMENDED STACK
- Build: Vite 8.3.4 (only devDependency), static `dist/` to Cloudflare Pages; data files stay classic scripts in `public/`.
- Keep the vanilla engine and views; no framework (Preact/Svelte/shadcn rejected).
- Tokens: Radix Colors 3.0.0 + own CSS custom properties; Lightning CSS via Vite; no Tailwind.
- Components: native `<dialog>` (drawer, modals, palette), Popover API (menus, toasts), Floating UI 1.8.0 (tooltips). No component kit.
- Motion: native CSS + View Transitions for the app (with `@supports` fallback for iOS 18); GSAP 3.15.0 + ScrollTrigger lazy-loaded on landing only; no Lenis.
- Icons: Lucide 1.57.0, inlined SVG at build.
- Fonts: Geist (UI) + Newsreader (reading), GFS Didot (display only), all fontsource woff2 self-hosted. Zero third-party hosts at run-time.

## WHAT IT CHANGES in the plan
- A Vite step and `package.json` enter the repo; the deploy becomes `dist/`. Run a spike to prove classic data scripts and the boot check still work.
- No file:// or offline testing; `tools/boot-check` needs to point at `dist/` or the Vite dev server.
- Scroll-story timing must work on iPad iOS 18 (no native scroll timelines): GSAP covers landing, an IntersectionObserver fallback covers the app.
