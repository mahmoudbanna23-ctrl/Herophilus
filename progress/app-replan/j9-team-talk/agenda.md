# Team talk agenda — draft master plan for a study web app

Context, self-contained: a single-owner study app (question bank, ~7,000 multiple-choice questions,
~20 MB of question data in plain `<script>` files). Vanilla HTML/CSS/JS only: no framework, no build
step, no bundler, no npm. It must keep working when opened straight from disk (`file://`, where
`fetch()` is blocked and Google sign-in cannot work) AND is hosted on Cloudflare Pages, where an
installable offline version (service worker) is being added. It has a mascot character drawn by the
owner (a woman whose body is a water clock); her identity is fixed, her poses may change or become 3D.
The owner studies in Brave on a battery laptop, plus tablet/phone. Exams are running now (next ones
2026-09-27, 2026-10-03, 2026-10-17 to 19).

The full draft plan follows the agenda. Phases P0-P12; section 6 maps every old item.

## Forks to argue

1. Mascot on quiz screens (where the decorative scene is ruled out): a small corner figure that
   speaks only on thresholds, OR fully absent.
2. "Today's progress" water level in her vessel: a separate element beside the vessel (2D art that
   must not be drawn on), OR five pre-rendered level states once she is 3D.
3. Drop the planned IndexedDB cache for question data and rely on the service worker on the hosted
   copy only (disk copy already has files locally). Sound, or a mistake?
4. 3D mascot delivery: video loops rendered WITH the desk background baked in (plain H.264 mp4, no
   alpha, works everywhere incl. Safari and `file://`), OR transparent video (WebM VP9 alpha plus HEVC
   alpha for Safari) layered over a separate scene.
5. Phase order: test baseline (P0) and one-command gate (P1) before the clickable mock-ups (P3) the
   owner asked for, OR mock-ups first.
6. Neon card edges dropped for thin muted borders, although the owner said he liked neon four days
   earlier. Keep the drop, or offer it back?
7. No deploy on exam eves (rule R9). Right, too much, too little?
8. Anything missing, wrong order, or any phase too big to ship alone.

## The ask — answer all three parts

1. Your position on each fork (one to three sentences each, a clear pick, the reason), then anything
   else wrong with the plan.
2. Which kind of worker should own each phase P0-P12: a coding agent with repo access, a cheap
   single-shot model call, a careful reviewer model, or the human owner — and why.
3. What you personally cannot do or cannot know here (the limits of your seat).

House rules: no invented facts; if you assume something, say "assumption". Plain words. Maximum 600
words.
