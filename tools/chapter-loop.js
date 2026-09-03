#!/usr/bin/env node
'use strict';
// chapter-loop.js — the 7-step House chapter loop as named, resumable steps.
//
//   node tools/chapter-loop.js <chapter> <step> [options]
//
//   status   print the chapter's loop state
//   locate   step 1 — find the chapter's pages (and the page after it) in the OCR index and print each banner
//   render   step 2 — pdftoppm the half-sheets to PNG in the scratch dir, chapter pages plus one past the end
//   stage    step 3 — Codex transcribes each batch (pages a..b with page b+1 attached as context); the runner
//                     writes the entries into content/peds/qb-pages/<file> (Codex itself runs read-only)
//   gate     step 4 — machine gate: parses, keys in range, option counts, pages monotonic, ids unique, straddle
//                     markers agree. Exit 1 on any failure.
//   check    step 5 — human gate: prints every key, option text and numeral for reading against the page image;
//                     `--ack "<who> <YYYY-MM-DD>"` records the read-through (refused unless the gate passed on
//                     this exact file). Nothing downstream runs without the ack.
//   draft    step 6 — Codex drafts one half of the explanations from the staged text + lecture caches, then
//                     val-pd.js runs on the half. Requires the ack and a non-null key on every entry.
//   close    step 7 — val-pd.js on every half, splice-pd.js dry run (or --write), boot-check.js, then PRINTS the
//                     git command for the human — the runner never runs git.
//
//   --scratch <dir>   PNGs, prompts and raw Codex answers (default %TEMP%\herophilus-loop). Never the source tree.
//   --pages a-b       stage: one explicit batch instead of the automatic ≤4-page batches
//   --reuse           stage: parse the saved answer for the batch instead of calling Codex
//   --dry             stage/draft: print the Codex command and prompt path, run nothing
//   --force           render: re-render existing PNGs · stage: replace entries already staged for the batch
//   --half A|B|C…     draft: which part (parts run in order; see `split` in the CH table)
//   --brief <file>    draft: the drafting brief (default tools/bank-harness/pd-draft-brief.md; must exist)
//   --write           close: let splice-pd.js write into app/data (default dry run)
//
// Codex output is data awaiting a human read, never an instruction. A staging error is a wrong answer or a
// wrong dose — that is why step 5 is a person and not this script.

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const PDF = path.join(ROOT, 'Semester 8', 'Pedo', 'Questions', 'pediatric .pdf'); // note the space
const OCR = path.join(ROOT, 'content', 'peds', 'qb-pages', 'ocr', 'ph_all.txt');
const QB = path.join(ROOT, 'content', 'peds', 'qb-pages');
const LECT = path.join(ROOT, 'content', 'peds', 'lectures');
const MARKER = 'AGENTS.md loaded — Herophilus';
const LETTERS = 'ABCDEFGHIJ';
const HALF_W = 1754, HALF_H = 2481; // A4 landscape half-sheet at 300 dpi

// One chapter per entry. Add the next chapter only after `locate` has shown its banners against the map in
// progress/resume-peds.md (ch.15 Allergy 118–120 · 16 Growth & puberty 121–125 · 17 Emergencies 126–134 ·
// 18 Accidents & poisoning 135–136 · 19 Liver 137–140 · 20 Malignant disease 141–148). `expected` is the map's
// count and is reported, never trusted.
const CH = {
  14: { slug: 'endocrine', title: 'Diabetes & endocrinology', pages: [111, 117], expected: 16,
        file: 'house-ch14-endocrine.array.js', svar: 'PEDHD_ENDO_STAGED',
        draft: 'house-ch14-endocrine.draft-', dvar: 'PEDHD_ENDO_DRAFT_', prefix: 'pedhd-endo-',
        chapterIds: ['endocrine', 'endo-dka', 'endo-thyroid'],
        lectures: ['13) Short stature.txt', '14) Puberty.txt', '15.1) Faltering ﻿Growth.txt',
                   '51) DKA.txt', '52) hypothyrodism.txt',
                   'diabetes mellitus for under grad_8acf29c9d51bcde47ca89846d49176b2.txt'] },
  15: { slug: 'allergy', title: 'Allergy', pages: [118, 120], expected: 6,
        file: 'house-ch15-allergy.array.js', svar: 'PEDHD_ALLERGY_STAGED',
        draft: 'house-ch15-allergy.draft-', dvar: 'PEDHD_ALLERGY_DRAFT_', prefix: 'pedhd-alg-',
        // Anaphylaxis is written inside the allergy chapter (alg-9..14), not in emergencies --
        // checked in theory.peds.js before registering, so a drafter is not offered a chapter
        // the material does not put it in.
        chapterIds: ['allergy', 'infection-immunity'],
        lectures: ['25)Immunodeficiency_.txt', '26)allergy_.txt', '27)Anaphylaxsis.txt'] },
  16: { slug: 'growth', title: 'Growth & puberty', pages: [121, 125], expected: 14,
        file: 'house-ch16-growth.array.js', svar: 'PEDHD_GROWTH_STAGED',
        draft: 'house-ch16-growth.draft-', dvar: 'PEDHD_GROWTH_DRAFT_', prefix: 'pedhd-gp-',
        // Growth and puberty are two theory chapters sharing one section run (gp-1..gp-11 growth,
        // gp-12..gp-20 puberty), so both are offered. normal-dev and dev-problems are NOT: the map
        // gives this chapter to growth, and a drafter offered a development chapter would file a
        // milestone question away from the growth material the book is teaching here.
        chapterIds: ['growth-puberty', 'puberty'],
        // n6, n7 and n8 print one identical five-option menu, so they are drafted together: split 8,
        // not the even 7, which would have put the anchor in A and n8 in B.
        split: 8,
        lectures: ['13) Short stature.txt', '14) Puberty.txt', '15.1) Faltering ﻿Growth.txt'] },
  17: { slug: 'emergencies', title: 'Paediatric emergencies', pages: [126, 134], expected: 26,
        file: 'house-ch17-emergencies.array.js', svar: 'PEDHD_EMG_STAGED',
        draft: 'house-ch17-emergencies.draft-', dvar: 'PEDHD_EMG_DRAFT_', prefix: 'pedhd-emg-',
        // Registered from the map's range so `locate` can run; the banners are what confirm it.
        // `accidents` is deliberately NOT offered -- poisoning, choking and drowning are ch.18,
        // and a drafter given both would file an emergencies question into the accidents chapter.
        chapterIds: ['emergencies'],
        // TWO shared option menus: n10+n11 (the anaphylaxis treatments) and n13..n17 (the five-step
        // resuscitation menu). Neither may be cut, and neither may sit in a part big enough to outrun
        // a drafting agent -- so a 3-way 9/8/9, not a 2-way 12/14. Both menus land whole in B.
        split: [9, 8, 9],
        lectures: ['3) Pediatric resuscitation.txt', '4) Shock in pediatrics_.txt'] },
  18: { slug: 'accidents', title: 'Accidents & poisoning', pages: [135, 136], expected: 4,
        file: 'house-ch18-accidents.array.js', svar: 'PEDHD_ACC_STAGED',
        draft: 'house-ch18-accidents.draft-', dvar: 'PEDHD_ACC_DRAFT_', prefix: 'pedhd-acc-',
        // Registered from the map's range so `locate` can run; the banners are what confirm it.
        // `emergencies` is deliberately NOT offered, the mirror of ch.17 excluding `accidents`:
        // poisoning management is full of resuscitation, and a drafter given both chapters would
        // file a poisoning question into emergencies.
        chapterIds: ['accidents'],
        // ONE lecture, and it covers only half the chapter. The theory chapter's own intro says so:
        // choking, suffocation, strangulation and drowning are the BOOK's and are algorithms; only
        // poisoning is L5's. Verified against the cache before registering -- 29 slides, zero hits
        // for choking, drowning, submersion, back blow, abdominal thrust or charcoal. A drafter must
        // expect to be filling gaps here, and the accidents theory chapter tags what it supplied.
        // Four questions, no shared option menu among them, so one part -- not the default even 2/2,
        // which would split a chapter a single agent drafts comfortably in one pass.
        split: [4],
        lectures: ['5) Poisoning in children_.txt'] },
  19: { slug: 'liver', title: 'Liver disorders', pages: [137, 140], expected: 9,
        file: 'house-ch19-liver.array.js', svar: 'PEDHD_LIV_STAGED',
        draft: 'house-ch19-liver.draft-', dvar: 'PEDHD_LIV_DRAFT_', prefix: 'pedhd-liv-',
        // Registered from the map's range so `locate` can run; the banners are what confirm it.
        // p.137's opening banner is already known -- ch.18's stage step read the next page ahead
        // and reported it opens with "Liver disorders".
        // BOTH liver chapters are offered, unlike the ch.17/18 pair. They are not a boundary a
        // drafter can misfile across: they are one section run (liv-1..liv-9 cholestasis and
        // biliary atresia, liv-10..liv-15 the hepatitis viruses and chronic liver disease), split
        // for length rather than for subject, and a bank question on jaundice may land in either.
        chapterIds: ['liver', 'liver-hep'],
        // ⚠️ ONE lecture cache for a chapter that needs two. L43 is cached as text; L42, the
        // hepatitis deck, is IMAGE-ONLY and has no .txt -- `liver-hep` records reading all of it
        // visually, pp.18, 20, 23, 33-34 re-rendered at 220 dpi. So for anything hepatitis the
        // THEORY chapter is the source of record, not the lecture folder, and a drafter that goes
        // looking for a 42) file will find nothing and wrongly call it a gap.
        // Nine questions, one part: the same size as ch.13's halves, which drafted in one pass.
        split: [9],
        lectures: ['43)Infantile cholestasis_.txt'] },
  20: { slug: 'malignant', title: 'Malignant disease', pages: [141, 148], expected: 22,
        file: 'house-ch20-malignant.array.js', svar: 'PEDHD_MAL_STAGED',
        draft: 'house-ch20-malignant.draft-', dvar: 'PEDHD_MAL_DRAFT_', prefix: 'pedhd-mal-',
        // ⚠️ THE CONTENTS PAGE IS WRONG HERE BY 16 PAGES. It prints Malignant disease as p.125,
        // which sits inside another chapter. It is book p.141, proved by render, not inferred:
        // PDF sheet 71's right half carries the full-width banner over book p.141 with the
        // numbering restarting at 1. Registered from the CORRECTED range; `locate` confirms.
        // The last question is Q22 on book p.148. PDF sheet 75's right half opens "Pediatric
        // surgery end-of-round MCQs", which the user ruled OUT OF SCOPE -- p.148 is the stop line
        // for the whole medicine part, not just this chapter. Do not read past it.
        chapterIds: ['malignant', 'malignant-solid', 'haematology', 'haem-bleeding'],
        // Four chapters offered, and unlike ch.19's pair these are NOT one continuous run.
        // `malignant` mal-1..mal-15 is leukaemia end to end; `malignant-solid` mal-16..mal-22 is
        // rhabdomyoma, tuberous sclerosis, brain tumours and the abdominal mass. The two
        // haematology chapters are offered because a leukaemia question presenting as pallor,
        // bruising or marrow failure is graded on material that lives there, not under `malignant`.
        // ⚠️ TWO SECTIONS ARE ALREADY SUPPLIED-AND-TAGGED IN FULL AND HAVE NO DECK BEHIND THEM:
        // mal-12 (treatment of ALL and its risk groups) and mal-22 (Wilms against neuroblastoma).
        // mal-13's oncological emergencies are part-sourced -- L48 pp.26, 28 cover SVC syndrome,
        // leukostasis and chloroma, the rest is supplied. A drafter must not re-tag what the
        // theory has already tagged, and must not report these as gaps in the material: they are
        // recorded gaps that were already filled under CLAUDE.md §4.
        // ⚠️ p.144 prints a LABELLED DIAGRAM, not a photograph -- a "Looking left / Looking right"
        // eye-movement figure in a yellow box beside its question. Transcribe it as markdown in
        // the stem if the labels reproduce faithfully; crop only if they do not.
        // 22 questions in two parts of 11 -- ch.13 drafted halves of 13 and 14 in one pass each,
        // so 11 is inside the size that is known to work.
        // ⚠️ NOT [11, 11]. That was the first registration and it was wrong: it cuts the shared
        // option menu n:9-n:12 down the middle, leaving n:12 in half B pointing at an anchor
        // written in half A. A shared menu must be drafted whole, by one drafter, in one pass --
        // the comparative table is written once at the lowest-numbered member and the siblings
        // give only their own token, and that cannot be co-ordinated across two passes.
        // [12, 10] puts n:9-n:12 wholly in A and n:14-n:17 wholly in B. Caught after draft A had
        // already run at 11; the 11-entry draft was discarded and A re-drafted at 12.
        split: [12, 10],
        lectures: ['48)Leukemias.txt', '49)Rhabdomyoma and Brain Tumors Overview.txt',
                   '44)BM FAILURE.txt', '47)Hemorrhagic disorders .txt'] },
};

// ---------------------------------------------------------------- args / state
const argv = process.argv.slice(2);
const chapter = Number(argv[0]);
const step = argv[1];
const opt = {};
for (let i = 2; i < argv.length; i++) {
  const a = argv[i];
  if (!a.startsWith('--')) die(`unexpected argument ${a}`);
  const k = a.slice(2);
  if (['scratch', 'pages', 'ack', 'half', 'brief'].includes(k)) opt[k] = argv[++i];
  else opt[k] = true;
}
if (!CH[chapter]) die(`chapter ${argv[0]} is not registered in CH (registered: ${Object.keys(CH).join(', ')})`);
const C = CH[chapter];
const SCRATCH = path.resolve(opt.scratch || path.join(process.env.TEMP || require('os').tmpdir(), 'herophilus-loop'));
const CHDIR = path.join(SCRATCH, `house-ch${chapter}`);
const ARRAY = path.join(QB, C.file);
const STATE = path.join(QB, C.file.replace(/\.array\.js$/, '.loop.json'));
const state = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8'))
  : { chapter, slug: C.slug, file: C.file, created: iso(), steps: {} };

function die(msg, code = 1) { console.error(`✗ ${msg}`); process.exit(code); }
function iso() { return new Date().toISOString().slice(0, 19); }
function save() { fs.writeFileSync(STATE, JSON.stringify(state, null, 2) + '\n'); }
function sha(file) { return crypto.createHash('sha1').update(fs.readFileSync(file)).digest('hex').slice(0, 12); }
function pageList(a, b) { const r = []; for (let p = a; p <= b; p++) r.push(p); return r; }
function png(p) { return path.join(CHDIR, `p${p}.png`); }
function q(s) { return `"${String(s).replace(/"/g, '\\"')}"`; }

const steps = { status, locate, render, stage, gate, check, draft, close };
if (!steps[step]) die(`unknown step "${step}" — one of ${Object.keys(steps).join(' | ')}`);
steps[step]();

// ---------------------------------------------------------------- status
function status() {
  console.log(`ch.${chapter} ${C.title} — book pp.${C.pages[0]}–${C.pages[1]} (+p.${C.pages[1] + 1} context), expected ${C.expected}`);
  console.log(`array  ${path.relative(ROOT, ARRAY)} ${fs.existsSync(ARRAY) ? `(${sha(ARRAY)})` : '(not yet written)'}`);
  console.log(`state  ${path.relative(ROOT, STATE)}`);
  console.log(JSON.stringify(state.steps, null, 2));
}

// ---------------------------------------------------------------- 1 locate
function locate() {
  if (!fs.existsSync(OCR)) die(`OCR index missing: ${OCR}`);
  const lines = fs.readFileSync(OCR, 'utf8').split(/\r?\n/);
  const found = {};
  for (const p of pageList(C.pages[0], C.pages[1] + 1)) {
    const i = lines.findIndex(l => l.startsWith(`[[book p.${p} |`));
    if (i < 0) { console.log(`p.${p}  — NOT IN INDEX`); continue; }
    const half = lines[i].match(/\| ([LR]-\d+)\.txt\]\]/)[1];
    const banner = lines.slice(i + 1, i + 12).map(s => s.trim()).filter(Boolean).slice(0, 3);
    found[p] = half;
    console.log(`p.${p}  ${half}${p > C.pages[1] ? '  (context page — next chapter)' : ''}`);
    banner.forEach(b => console.log(`        ${b}`));
  }
  state.steps.locate = { at: iso(), pages: found };
  save();
  console.log('\nThe index is a search aid only — confirm the range from the rendered banners, never from OCR text.');
}

// ---------------------------------------------------------------- 2 render
function render() {
  if (!fs.existsSync(PDF)) die(`source PDF not found: ${PDF}`);
  fs.mkdirSync(CHDIR, { recursive: true });
  const tool = pdftoppm();
  const done = [];
  for (const p of pageList(C.pages[0], C.pages[1] + 1)) {
    const out = png(p);
    if (fs.existsSync(out) && !opt.force) { console.log(`p.${p}  exists  ${out}`); done.push(p); continue; }
    const sheet = Math.floor(p / 2) + 1;       // sheet N = book 2N-2 LEFT | 2N-1 RIGHT
    const x = p % 2 === 0 ? 0 : HALF_W;
    const r = spawnSync(tool, ['-png', '-r', '300', '-f', String(sheet), '-l', String(sheet),
      '-x', String(x), '-y', '0', '-W', String(HALF_W), '-H', String(HALF_H), '-singlefile',
      PDF, path.join(CHDIR, `p${p}`)], { encoding: 'utf8' });
    if (r.status !== 0 || !fs.existsSync(out)) die(`pdftoppm failed for p.${p} (sheet ${sheet}):\n${r.stderr || r.error}`);
    console.log(`p.${p}  sheet ${sheet} ${x ? 'RIGHT' : 'LEFT '}  ${out}`);
    done.push(p);
  }
  state.steps.render = { at: iso(), dir: CHDIR, pages: done };
  save();
}

function pdftoppm() {
  if (process.env.PDFTOPPM && fs.existsSync(process.env.PDFTOPPM)) return process.env.PDFTOPPM;
  const winget = path.join(process.env.LOCALAPPDATA || '', 'Microsoft', 'WinGet', 'Packages',
    'oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe', 'poppler-25.07.0', 'Library', 'bin', 'pdftoppm.exe');
  return fs.existsSync(winget) ? winget : 'pdftoppm';
}

// ---------------------------------------------------------------- 3 stage
function stage() {
  const batches = opt.pages ? [parseRange(opt.pages)] : autoBatches();
  state.steps.stage = state.steps.stage || { batches: [] };
  for (const [a, b] of batches) {
    const ctx = b + 1;
    const tag = `p${a}-${b}`;
    const prior = state.steps.stage.batches.find(x => x.pages[0] === a && x.pages[1] === b && x.entries);
    if (prior && !opt.force && !opt.reuse) { console.log(`batch ${tag} already staged (${prior.entries.length} entries) — skip; --force to redo`); continue; }
    for (const p of pageList(a, ctx)) if (!fs.existsSync(png(p))) die(`p.${p} not rendered — run render first (scratch ${SCRATCH})`);

    const promptFile = path.join(CHDIR, `stage-${tag}.prompt.md`);
    const answerFile = path.join(CHDIR, `stage-${tag}.answer.txt`);
    const eventsFile = path.join(CHDIR, `stage-${tag}.events.jsonl`);
    fs.writeFileSync(promptFile, stagePrompt(a, b, ctx));
    const imgs = pageList(a, ctx).map(p => `-i ${q(png(p))}`).join(' ');
    const cmd = `codex exec -s read-only -C ${q(ROOT)} --skip-git-repo-check ${imgs} --json -o ${q(answerFile)} - < ${q(promptFile)}`;
    if (opt.dry) { console.log(cmd); console.log(`prompt: ${promptFile}`); continue; }

    let usage = null;
    if (!opt.reuse) {
      console.log(`▶ codex  ${tag} + p.${ctx} context  (this is a vision call; expect minutes)`);
      const r = spawnSync(cmd, { shell: true, stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', timeout: 30 * 60 * 1000 });
      fs.writeFileSync(eventsFile, (r.stdout || '') + (r.stderr || ''));
      if (r.error && r.error.code === 'ETIMEDOUT') { spawnSync('taskkill', ['/F', '/T', '/PID', String(r.pid)]); die(`codex timed out on ${tag}; events in ${eventsFile}`); }
      if (r.status !== 0) die(`codex exited ${r.status} on ${tag}; events in ${eventsFile}`);
      const m = (r.stdout || '').match(/"type":"turn\.completed","usage":(\{[^}]*\})/);
      if (m) try { usage = JSON.parse(m[1]); } catch (_) { /* leave null */ }
    }
    if (!fs.existsSync(answerFile)) die(`no answer file for ${tag} (${answerFile})`);
    const parsed = parseAnswer(fs.readFileSync(answerFile, 'utf8'), tag);
    const { entries, conversions } = normaliseEntries(parsed.entries, a, b, tag);
    writeEntries(entries, opt.force);
    const rec = { pages: [a, b], context: ctx, at: iso(), answer: answerFile, events: eventsFile, usage,
      entries: entries.map(e => e.n), keyLetterConversions: conversions,
      pagesReported: parsed.pages || null, nextPageOpensWith: parsed.next_page_opens_with || null,
      flags: parsed.flags || [] };
    state.steps.stage.batches = state.steps.stage.batches.filter(x => !(x.pages[0] === a && x.pages[1] === b));
    state.steps.stage.batches.push(rec);
    state.steps.gate = undefined; state.steps.check = undefined; // the file changed — gates reopen
    save();
    console.log(`✓ ${tag}: ${entries.length} entries → ${path.relative(ROOT, ARRAY)}; n = ${rec.entries.join(',')}`);
    if (rec.flags.length) { console.log('  Codex flags:'); rec.flags.forEach(f => console.log(`   • ${f}`)); }
    if (conversions.length) console.log(`  ⚠ letter keys converted to indices on n = ${conversions.join(',')} (Codex ignored rule 3)`);
    if (rec.nextPageOpensWith) console.log(`  p.${ctx} opens with: ${rec.nextPageOpensWith}`);
  }
}

function parseRange(s) {
  const m = String(s).match(/^(\d+)-(\d+)$/);
  if (!m) die(`--pages wants a-b, got ${s}`);
  const a = +m[1], b = +m[2];
  if (a < C.pages[0] || b > C.pages[1] || a > b) die(`--pages ${s} outside chapter ${C.pages[0]}-${C.pages[1]}`);
  return [a, b];
}
function autoBatches() {
  const out = [];
  for (let a = C.pages[0]; a <= C.pages[1]; a += 4) out.push([a, Math.min(a + 3, C.pages[1])]);
  return out;
}

function stagePrompt(a, b, ctx) {
  const list = pageList(a, b).map(p => `p${p}.png = book page ${p}`).join(', ');
  return `You are transcribing printed exam pages into a staging record. Transcribe; never author, tidy, interpret or verify.

Bank: HOUSE "Pediatric medicine end-of-round MCQs-2025", chapter ${chapter} "${C.title}". Each question box prints a number, a stem, lettered options (A, B, C … — the count varies), and a line "Answer: X." with a bare letter. Some boxes print "Select one answer only." between the lead-in and option A. Some boxes print a figure.

Images attached, in order: ${list}; and p${ctx}.png = book page ${ctx}, which is CONTEXT ONLY — use it to finish a box that overflows from page ${b} and to report what it opens with. Do NOT transcribe any question whose number is printed on page ${ctx}.

After the required opening line, return ONE JSON object and nothing else — no prose, no code fence:
{
  "pages": [ { "page": ${a}, "folio_read": "<page number printed at the foot, or null>", "banner": "<chapter banner if one is printed, else null>", "question_numbers": [<every question number printed on this page>] }, ... one per transcribed page ],
  "entries": [
    { "n": <printed question number, integer>,
      "p": "<book page the number is printed on, as a string>",
      "boiler": <true if "Select one answer only." is printed in the box, else false>,
      "stem": "<verbatim, excluding the boiler line>",
      "opts": ["<option A verbatim, without its letter>", "<option B>", ...],
      "key": <zero-based index into opts of the printed Answer letter: A=0, B=1, C=2, D=3, E=4 … ; null if the letter is unreadable or absent>,
      "fig": "<ONLY when the box prints an image: panels, printed labels, modality and view — never what it shows>",
      "straddle": true,   <- include ONLY when the box crosses a page break; omit otherwise
      "note": "<begin with 'STRADDLES THE PAGE BREAK p.<a> -> p.<b>' when straddle is true; then anything not unambiguous at this resolution, show-through you discounted, defects exactly as printed (a duplicated number, a missing option letter, an Answer letter with no matching option); empty string if nothing>" }
  ],
  "next_page_opens_with": "<page ${ctx}: its banner if any, else its first printed words>",
  "flags": ["<one line per thing a human must look at: an unresolved numeral, a doubtful key, a box you could not finish>"]
}

Transcription rules (these restate, and never loosen, AGENTS.md):
- Verbatim: keep the page's spelling, grammar, abbreviations, capitalisation, units and option order, even where plainly wrong.
- Numbers, units, doses, exponents and superscripts exactly as printed (write 10^9 as printed, e.g. "10⁹" if that is what the page shows). If a digit or superscript is not unambiguous, transcribe your best reading AND name it in "note" and in "flags".
- A defective printed key is recorded as printed, never corrected. If the Answer line is missing or unreadable, "key": null.
- Never renumber. A number printed twice or skipped is recorded as printed and flagged.
- Faint text showing through from the other side of the sheet is not content; discount it and mention it in "note" only if it could be confused with content.
- Every printed question on pages ${a}–${b} must appear in "entries", including one that starts on page ${b} and finishes on page ${ctx} (mark it straddle). Do not stop early; a box you cannot finish is still an entry, with "key": null and a flag.
`;
}

function parseAnswer(raw, tag) {
  const text = raw.replace(/^﻿/, '').trim();
  const nl = text.indexOf('\n');
  const first = (nl < 0 ? text : text.slice(0, nl)).trim();
  if (first !== MARKER) die(`${tag}: reply does not begin with "${MARKER}" — discarded (got: ${first.slice(0, 80)})`);
  let body = text.slice(nl + 1).replace(/^\s*```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '');
  const s = body.indexOf('{'), e = body.lastIndexOf('}');
  if (s < 0 || e < 0) die(`${tag}: no JSON object after the marker line`);
  let obj;
  try { obj = JSON.parse(body.slice(s, e + 1)); } catch (err) { die(`${tag}: JSON parse failed — ${err.message}`); }
  if (!Array.isArray(obj.entries)) die(`${tag}: "entries" is not an array`);
  return obj;
}

function normaliseEntries(list, a, b, tag) {
  const conversions = [];
  const out = list.map((e, i) => {
    const where = `${tag} entry #${i} (n=${e && e.n})`;
    if (!e || typeof e !== 'object') die(`${where}: not an object`);
    if (!Number.isInteger(e.n) || e.n < 1) die(`${where}: n must be a positive integer`);
    const p = String(e.p);
    if (!/^\d+$/.test(p) || +p < a || +p > b) die(`${where}: p "${e.p}" outside the batch ${a}-${b}`);
    if (typeof e.stem !== 'string' || !e.stem.trim()) die(`${where}: empty stem`);
    if (!Array.isArray(e.opts) || e.opts.length < 2 || e.opts.some(o => typeof o !== 'string')) die(`${where}: opts must be ≥2 strings`);
    let key = e.key;
    if (typeof key === 'string' && /^[A-J]$/i.test(key.trim())) { key = LETTERS.indexOf(key.trim().toUpperCase()); conversions.push(e.n); }
    if (!(key === null || (Number.isInteger(key) && key >= 0 && key < e.opts.length))) die(`${where}: key ${JSON.stringify(e.key)} is not null or an index into ${e.opts.length} opts`);
    const rec = { n: e.n, p, boiler: e.boiler === true, stem: e.stem, opts: e.opts, key };
    if (e.fig) rec.fig = String(e.fig);
    if (e.straddle === true) rec.straddle = true;
    rec.note = typeof e.note === 'string' ? e.note : '';
    return rec;
  });
  return { entries: out, conversions };
}

function serialise(e) {
  const j = JSON.stringify;
  const lines = [`  { n:${e.n}, p:${j(e.p)}, boiler:${e.boiler},`, `    stem:${j(e.stem)},`, `    opts:[${e.opts.map(j).join(', ')}],`, `    key:${e.key === null ? 'null' : e.key},`];
  if (e.fig) lines.push(`    fig:${j(e.fig)},`);
  if (e.straddle) lines.push(`    straddle:true,`);
  lines.push(`    note:${j(e.note)} },`);
  return lines.join('\n');
}

function writeEntries(entries, replace) {
  let existing = [];
  if (fs.existsSync(ARRAY)) existing = loadArray().arr;
  const byN = new Map(existing.map(e => [e.n, e]));
  for (const e of entries) {
    if (byN.has(e.n) && !replace) die(`n=${e.n} already staged in ${C.file} — --force replaces entries for the batch`);
    byN.set(e.n, e);
  }
  const all = [...byN.values()].sort((x, y) => x.n - y.n || (+x.p) - (+y.p));
  const header = `// ${C.file} — STAGED transcription of House ch.${chapter} "${C.title}", book pp.${C.pages[0]}–${C.pages[1]}.
// Staged by Codex via tools/chapter-loop.js (stage) from 300-dpi half-sheet renders; each run's raw answer sits in
// the scratchpad and is summarised in ${path.basename(STATE)}. UNVERIFIED until the \`check\` step is acked —
// every key, dose, unit and exponent must be read against the page image before this file is drafted or spliced.
// Schema: { n, p:'<book page>', boiler, stem, opts:[...], key:<zero-based index | null>, fig?, straddle?, note }.
`;
  const body = `${header}var ${C.svar} = [\n${all.map(serialise).join('\n')}\n];\n`;
  fs.writeFileSync(ARRAY, body);
  const chk = spawnSync(process.execPath, ['--check', ARRAY], { encoding: 'utf8' });
  if (chk.status !== 0) die(`written file fails node --check:\n${chk.stderr}`);
}

function loadArray() {
  const ctx = {};
  new vm.Script(fs.readFileSync(ARRAY, 'utf8'), { filename: C.file }).runInNewContext(ctx);
  const arr = ctx[C.svar];
  if (!Array.isArray(arr)) die(`${C.file} does not define array ${C.svar}`);
  return { arr, ctx };
}

// ---------------------------------------------------------------- 4 gate
function gate() {
  if (!fs.existsSync(ARRAY)) die(`${C.file} not written yet — run stage`);
  const fails = [], warns = [];
  let arr;
  try { arr = loadArray().arr; } catch (e) { die(`file does not load: ${e.message}`); }
  const allowed = new Set(['n', 'p', 'boiler', 'stem', 'opts', 'key', 'fig', 'straddle', 'note']);
  const seen = new Set();
  let lastN = 0, lastP = 0;
  const nullKeys = [];
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    const id = `[${i}] n=${e && e.n}`;
    if (!e) { fails.push(`${id}: hole in array`); continue; }
    for (const k of Object.keys(e)) if (!allowed.has(k)) fails.push(`${id}: unknown field "${k}"`);
    if (!Number.isInteger(e.n) || e.n < 1) fails.push(`${id}: bad n`);
    if (seen.has(e.n)) fails.push(`${id}: duplicate n`); seen.add(e.n);
    if (e.n <= lastN) fails.push(`${id}: n not increasing (after ${lastN})`); else if (e.n !== lastN + 1 && lastN) warns.push(`${id}: n gap after ${lastN}`);
    lastN = Math.max(lastN, e.n);
    if (typeof e.p !== 'string' || !/^\d+$/.test(e.p)) fails.push(`${id}: p must be a digit string`);
    else { const p = +e.p; if (p < C.pages[0] || p > C.pages[1]) fails.push(`${id}: p ${p} outside ${C.pages[0]}-${C.pages[1]}`); if (p < lastP) fails.push(`${id}: p ${p} goes backwards (after ${lastP})`); lastP = Math.max(lastP, p); }
    if (typeof e.boiler !== 'boolean') fails.push(`${id}: boiler not boolean`);
    if (typeof e.stem !== 'string' || !e.stem.trim()) fails.push(`${id}: empty stem`);
    else if (/select one answer only/i.test(e.stem)) warns.push(`${id}: boiler line left inside stem`);
    if (!Array.isArray(e.opts) || e.opts.some(o => typeof o !== 'string' || !o.trim())) fails.push(`${id}: opts not all non-empty strings`);
    else { if (e.opts.length < 2 || e.opts.length > 10) fails.push(`${id}: ${e.opts.length} options`); else if (e.opts.length < 4 || e.opts.length > 6) warns.push(`${id}: ${e.opts.length} options — unusual, read the page`);
           if (e.opts.some(o => /^[A-J][.)]\s/.test(o))) warns.push(`${id}: an option still carries its letter`);
           if (new Set(e.opts.map(o => o.trim().toLowerCase())).size !== e.opts.length) warns.push(`${id}: duplicate option text`); }
    if (e.key === null) nullKeys.push(e.n);
    else if (!Number.isInteger(e.key) || e.key < 0 || !Array.isArray(e.opts) || e.key >= e.opts.length) fails.push(`${id}: key ${JSON.stringify(e.key)} not null or in [0,${e.opts && e.opts.length})`);
    if ('fig' in e && (typeof e.fig !== 'string' || !e.fig.trim())) fails.push(`${id}: fig present but empty`);
    if (typeof e.note !== 'string') fails.push(`${id}: note must be a string`);
    const m = typeof e.note === 'string' && e.note.match(/STRADDLES THE PAGE BREAK p\.(\d+) -> p\.(\d+)/);
    if (e.straddle === true) { if (!m) fails.push(`${id}: straddle:true without the STRADDLES marker in note`); else if (+m[1] !== +e.p || +m[2] !== +e.p + 1) fails.push(`${id}: straddle marker p.${m[1]} -> p.${m[2]} disagrees with p=${e.p}`); }
    else if ('straddle' in e) fails.push(`${id}: straddle must be exactly true or absent`);
    else if (m) fails.push(`${id}: STRADDLES marker in note but no straddle:true`);
  }
  const stems = arr.filter(Boolean).map(e => String(e.stem).trim().toLowerCase());
  if (new Set(stems).size !== stems.length) warns.push('duplicate stems present');
  if (arr.length !== C.expected) warns.push(`count ${arr.length} ≠ map's ${C.expected} (the map is a hint — recount from the page images)`);
  if (nullKeys.length) warns.push(`null keys on n = ${nullKeys.join(',')} — a human must resolve them from the page before draft`);

  const ok = fails.length === 0;
  state.steps.gate = { at: iso(), ok, hash: sha(ARRAY), count: arr.length, fails, warns, nullKeys };
  save();
  console.log(`${ok ? '✓ GATE PASS' : '✗ GATE FAIL'}  ${C.file}  ${arr.length} entries  (${state.steps.gate.hash})`);
  fails.forEach(f => console.log(`  ✗ ${f}`));
  warns.forEach(w => console.log(`  ⚠ ${w}`));
  if (!ok) process.exit(1);
  console.log('Next: node tools/chapter-loop.js ' + chapter + ' check   — read every line against the page image');
}

// ---------------------------------------------------------------- 5 check (human)
function check() {
  const g = state.steps.gate;
  if (!g || !g.ok) die('the machine gate has not passed — run gate first');
  if (g.hash !== sha(ARRAY)) die('file changed since the gate passed — run gate again');
  const { arr } = loadArray();
  if (opt.ack) {
    if (!/\S+\s+\d{4}-\d{2}-\d{2}/.test(opt.ack)) die('--ack wants "<who> <YYYY-MM-DD>"');
    state.steps.check = { at: iso(), ack: opt.ack, hash: g.hash, count: arr.length };
    save();
    console.log(`✓ human gate recorded: ${opt.ack} on ${C.file} (${g.hash}) — draft may run`);
    return;
  }
  console.log(`HUMAN GATE — ch.${chapter} ${C.title}. Read each line against ${CHDIR}\\p<page>.png. Nothing here is verified.\n`);
  for (const e of arr) {
    const letter = e.key === null ? 'NULL' : LETTERS[e.key];
    console.log(`n=${e.n}  p.${e.p}  key ${e.key === null ? 'null' : e.key} → ${letter}${e.straddle ? '  STRADDLE' : ''}${e.fig ? '  FIG' : ''}`);
    console.log(`   answer text: ${e.key === null ? '—' : e.opts[e.key]}`);
    const nums = numerals(e.stem + ' ' + e.opts.join(' '));
    if (nums.length) console.log(`   numerals:    ${nums.join('  |  ')}`);
    if (e.note) console.log(`   note:        ${e.note}`);
  }
  if (g.nullKeys.length) console.log(`\n⚠ null keys: n = ${g.nullKeys.join(',')} — resolve from the page, edit the file, re-run gate, then check.`);
  console.log(`\nWhen every key, dose, unit and exponent has been read against the page:\n  node tools/chapter-loop.js ${chapter} check --ack "<who> ${new Date().toISOString().slice(0, 10)}"`);
}

function numerals(s) {
  const re = /\d+(?:[.,]\d+)?(?:\s*(?:[x×]\s*)?10\s*\^?\s*[-⁻]?[\d⁰¹²³⁴⁵⁶⁷⁸⁹]+)?[⁰¹²³⁴⁵⁶⁷⁸⁹]*(?:\s?(?:%|°C|mm ?Hg|m?[gGlL]\/(?:kg|dL|dl|L|l|min|h|day)|mmol\/L|mEq\/L|µ?g|mg|kg|mL|ml|cm|mm|kcal|units?|IU|weeks?|months?|years?|days?|hours?|hrs?|min|bpm|\/min|\/kg))?/g;
  return [...new Set((s.match(re) || []).map(t => t.trim()).filter(t => t.length > 0))];
}

// ---------------------------------------------------------------- 6 draft
function draft() {
  const c = state.steps.check;
  if (!c) die('no human ack recorded — run check, read against the page, then check --ack');
  if (c.hash !== sha(ARRAY)) die('file changed since the ack — gate and check again');
  if (state.steps.gate.nullKeys.length) die(`null keys remain on n = ${state.steps.gate.nullKeys.join(',')} — resolve them first`);
  const half = String(opt.half || '').toUpperCase();
  if (!/^[A-Z]$/.test(half)) die('--half A|B|C… required');
  const brief = path.resolve(ROOT, opt.brief || 'tools/bank-harness/pd-draft-brief.md');
  if (!fs.existsSync(brief)) die(`drafting brief not found: ${brief} — pass --brief <file>`);
  for (const f of ['tools/bank-harness/val-pd.js', 'tools/bank-harness/splice-pd.js']) {
    const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
    if (!new RegExp(`^\\s*${chapter}:\\s*\\{`, 'm').test(src)) die(`${f} has no CH entry for ${chapter} — add: ${chapter}: { prefix:'${C.prefix}', ${f.includes('splice') ? 'staging' : 'file'}:'${C.file}', svar:'${C.svar}', draft:'${C.draft}'${f.includes('splice') ? `, dvar:'${C.dvar}'` : ''} }`);
  }
  const { arr } = loadArray();
  // The halves default to an even cut, but an even cut is not always a LEGAL one: a run of questions
  // sharing one option menu must be drafted together, because the comparative table is written once in
  // the lowest-numbered member and the siblings point at it -- a sibling in the other half would be
  // drafted by an agent that cannot see its anchor. ch.16 is the first chapter where the even cut (7)
  // fell inside such a run (n6,n7,n8 share five identical options), so the CH entry may now name the
  // boundary. `split` is the COUNT in half A. Added 2026-09-03.
  //
  // It may also be an ARRAY of counts, one per part, for a 3-way or wider cut: ch.17 is 26 entries
  // with a FIVE-question shared menu at n13..n17, and any 2-way cut that keeps that run whole leaves
  // a 13- or 14-entry part -- more than one drafting agent finishes before it hands back at ~70 tool
  // calls. Parts are lettered A, B, C… in order and must sum to the chapter. Added 2026-09-03.
  const explicit = Array.isArray(C.split);
  const counts = explicit ? C.split.slice() : [C.split || Math.ceil(arr.length / 2)];
  // A NUMBER means "first part holds this many", so the remainder is appended. An ARRAY is already a
  // complete partition and nothing may be appended to it -- doing so turned split:[4] into [4,0] and
  // killed the partition check, making a one-part chapter impossible to draft. A 4-question chapter
  // fits one agent comfortably and should not be forced into two. Corrected 2026-09-03.
  if (!explicit && counts.length === 1) counts.push(arr.length - counts[0]);
  if (counts.some(n => !(n >= 1)) || counts.reduce((a, b) => a + b, 0) !== arr.length)
    die(`split ${counts.join('+')} does not partition ${arr.length} entries`);
  const idx = half.charCodeAt(0) - 65;
  if (idx >= counts.length) die(`--half ${half} but the split has ${counts.length} parts (A..${String.fromCharCode(64 + counts.length)})`);
  const start = counts.slice(0, idx).reduce((a, b) => a + b, 0);
  const part = arr.slice(start, start + counts[idx]);
  const lectures = C.lectures.filter(f => fs.existsSync(path.join(LECT, f)));
  const missing = C.lectures.filter(f => !lectures.includes(f));
  if (missing.length) console.log(`⚠ lecture caches not found (skipped): ${missing.join(' · ')}`);
  const promptFile = path.join(CHDIR, `draft-${half}.prompt.md`);
  const answerFile = path.join(CHDIR, `draft-${half}.answer.txt`);
  const eventsFile = path.join(CHDIR, `draft-${half}.events.jsonl`);
  fs.writeFileSync(promptFile, `${fs.readFileSync(brief, 'utf8')}

---
RUN PARAMETERS (from tools/chapter-loop.js)
- Chapter ${chapter} "${C.title}", half ${half}: entries n = ${part.map(e => e.n).join(', ')} of ${arr.length}.
- id prefix: ${C.prefix}   chapter ids allowed: ${C.chapterIds.join(', ')}
- Lecture caches (read-only, under content/peds/lectures/): ${lectures.map(f => JSON.stringify(f)).join(', ')}
- The staged entries below are the ONLY source for stems, options and keys. Never change them.
- Reply: the required opening line, then ONE JSON array of drafted records in the brief's schema and nothing else.

STAGED ENTRIES (verbatim, human-checked keys):
${JSON.stringify(part, null, 1)}
`);
  const cmd = `codex exec -s read-only -C ${q(ROOT)} --skip-git-repo-check --json -o ${q(answerFile)} - < ${q(promptFile)}`;
  if (opt.dry) { console.log(cmd); console.log(`prompt: ${promptFile}`); return; }
  console.log(`▶ codex  draft ${half} (${part.length} entries)`);
  const r = spawnSync(cmd, { shell: true, stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8', timeout: 30 * 60 * 1000 });
  fs.writeFileSync(eventsFile, (r.stdout || '') + (r.stderr || ''));
  if (r.error && r.error.code === 'ETIMEDOUT') { spawnSync('taskkill', ['/F', '/T', '/PID', String(r.pid)]); die(`codex timed out; events in ${eventsFile}`); }
  if (r.status !== 0) die(`codex exited ${r.status}; events in ${eventsFile}`);
  const raw = fs.readFileSync(answerFile, 'utf8').replace(/^﻿/, '').trim();
  const nl = raw.indexOf('\n');
  if ((nl < 0 ? raw : raw.slice(0, nl)).trim() !== MARKER) die(`draft reply does not begin with "${MARKER}" — discarded`);
  let body = raw.slice(nl + 1).replace(/^\s*```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '');
  const s = body.indexOf('['), e = body.lastIndexOf(']');
  if (s < 0 || e < 0) die('no JSON array in the draft reply');
  let list;
  try { list = JSON.parse(body.slice(s, e + 1)); } catch (err) { die(`draft JSON parse failed — ${err.message}`); }
  const out = path.join(QB, `${C.draft}${half}.js`);
  fs.writeFileSync(out, `// ${path.basename(out)} — DRAFT explanations for House ch.${chapter} "${C.title}", half ${half}, n = ${part.map(e => e.n).join(',')}.\n// Drafted by Codex via tools/chapter-loop.js (draft). Validate with val-pd.js; medical read before splice.\nvar ${C.dvar}${half} = ${JSON.stringify(list, null, 2)};\n`);
  const val = spawnSync(process.execPath, ['tools/bank-harness/val-pd.js', String(chapter), half], { cwd: ROOT, encoding: 'utf8' });
  process.stdout.write(val.stdout || ''); process.stderr.write(val.stderr || '');
  state.steps.draft = state.steps.draft || {};
  state.steps.draft[half] = { at: iso(), file: path.relative(ROOT, out), entries: list.length, valExit: val.status };
  save();
  console.log(`${val.status === 0 ? '✓' : '✗'} draft ${half} → ${path.relative(ROOT, out)}  (val-pd exit ${val.status})`);
  if (val.status !== 0) process.exit(1);
}

// ---------------------------------------------------------------- 7 close
function close() {
  if (!state.steps.check) die('no human ack — the chapter cannot close without step 5');
  // Glob the parts, do not assume two. An n-way split (CH.split as an array of counts) lands
  // A, B, C..., and a hardcoded ['A','B'] here would have validated two of ch.17's three parts
  // and printed a commit command MISSING draft-C.js -- the part that was nonetheless spliced
  // into the live file. Silent content loss at the last step. Corrected 2026-09-03.
  const pbase = `${C.draft}`;
  const halves = fs.readdirSync(QB)
    .filter(f => f.startsWith(pbase) && f.endsWith('.js'))
    .map(f => f.slice(pbase.length, -3))
    .filter(x => /^[A-Z]$/.test(x))
    .sort();
  if (!halves.length) die('no draft halves on disk');
  const run = (label, args) => {
    console.log(`\n▶ ${label}: node ${args.join(' ')}`);
    const r = spawnSync(process.execPath, args, { cwd: ROOT, encoding: 'utf8' });
    process.stdout.write(r.stdout || ''); process.stderr.write(r.stderr || '');
    if (r.status !== 0) die(`${label} exited ${r.status} — close stops here`);
  };
  for (const h of halves) run(`val-pd ${h}`, ['tools/bank-harness/val-pd.js', String(chapter), h]);
  run('splice-pd dry run', ['tools/bank-harness/splice-pd.js', String(chapter)]);
  if (opt.write) {
    run('splice-pd --write', ['tools/bank-harness/splice-pd.js', String(chapter), '--write']);
    run('boot-check', ['tools/boot-check/boot-check.js']);
  } else console.log('\n(dry run — pass --write to splice into app/data/questions.peds.js and run boot-check)');
  state.steps.close = { at: iso(), halves, wrote: !!opt.write };
  save();
  const paths = [path.relative(ROOT, ARRAY), path.relative(ROOT, STATE), ...halves.map(h => path.relative(ROOT, path.join(QB, `${C.draft}${h}.js`)))];
  if (opt.write) paths.push('app/data/questions.peds.js');
  console.log(`\nCommit is the human's step — after the medical read, with explicit paths only:\n  git commit -F <msgfile> -- ${paths.map(p => `"${p.replace(/\\/g, '/')}"`).join(' ')}`);
}
