/* Self-check for the Pediatrics separate-progress logic and the two-right-answers
   helper. Pulls the real source text out of app/js/storage.js and
   app/data/questions.js and runs it in a vm with a tiny fake state.
   Run: node tools/exams/selfcheck-peds-logic.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const app = path.join(__dirname, '..', '..', 'app');
const storage = fs.readFileSync(path.join(app, 'js', 'storage.js'), 'utf8');
const questions = fs.readFileSync(path.join(app, 'data', 'questions.js'), 'utf8');

function between(src, startMarker, endMarker) {
  const a = src.indexOf(startMarker);
  assert(a >= 0, 'marker not found: ' + startMarker);
  const b = endMarker ? src.indexOf(endMarker, a) : src.length;
  assert(b >= 0, 'marker not found: ' + endMarker);
  return src.slice(a, b);
}

/* pure pieces */
const lookups = between(storage, 'const qById=', 'const isDoneAny');
const answerAny = between(storage, 'const answerAny=', 'const isDoneAny');
const helpers = between(storage, 'const isRight=', 'const isAnswered=');
const shadows = between(questions, 'let QBYID', null);

const ctx = {
  S: { answers: {}, flags: {}, conf: {}, srs: {}, hl: {}, notes: {}, reports: {}, resumeByChapter: {} },
  QUESTIONS: [], FOLDED: {}, EXAMS_PEDS: {},
};
vm.createContext(ctx);
/* `let`/`const` stay script-scoped in a vm, so expose through one wrapper script */
vm.runInContext(
  shadows + '\n' + lookups + '\n' + helpers + '\n' +
  'globalThis.api={isRight,rightLetters,foldState,qById,realId,shareKey,buildShadows,' +
  'shadow:()=>SHADOW_BY_ID};',
  ctx
);
const api = ctx.api;
let n = 0;
const ok = (c, m) => { assert(c, m); n++; };

/* 1. isRight accepts both picks, rejects others */
const q2 = { id: 'a', answer: 0, alsoRight: [2], options: ['x', 'y', 'z', 'w'] };
ok(api.isRight(q2, 0) && api.isRight(q2, 2), 'both picks accepted');
ok(!api.isRight(q2, 1) && !api.isRight(q2, null), 'other picks rejected');
ok(api.isRight({ answer: 3 }, 3) && !api.isRight({ answer: 3 }, 0), 'plain question unchanged');
ok(api.rightLetters(q2) === 'A or C', 'verdict letters: ' + api.rightLetters(q2));
ok(api.rightLetters({ answer: 1 }) === 'B', 'single letter');

/* 2. shadow id resolves through qById and carries rid */
const real = { id: 'ped-1', chapter: 'c1', module: 'pediatrics', answer: 1, options: ['a', 'b'] };
const dead = { id: 'ped-dead', chapter: 'c1', module: 'pediatrics', answer: 0, options: ['a', 'b'] };
ctx.QUESTIONS = [real, dead];
ctx.EXAMS_PEDS = { 'exam-1': ['ped-1'] };
api.buildShadows();
const sh = api.qById('exam-1~ped-1');
ok(sh && sh.rid === 'ped-1' && sh.id === 'exam-1~ped-1' && sh.exam === 'exam-1', 'shadow resolves with rid');
ok(sh.stem === real.stem && sh.answer === 1, 'shadow inherits the question');
ok(api.qById('ped-1') === real, 'real id resolves to the real question');
ok(api.shareKey(sh) === 'ped-1' && api.realId('exam-1~ped-1') === 'ped-1' && api.realId('ped-1') === 'ped-1', 'share key is the real id');
ok(!ctx.QUESTIONS.some(q => q.id === sh.id), 'shadows never enter QUESTIONS');

/* 3. foldState: twice == once, no dead key left */
ctx.FOLDED = { 'ped-dead': 'ped-1' };
const mk = () => ({
  answers: {
    'ped-dead': { pick: 0, ok: false, at: 200, conf: 0 },
    'ped-1': { pick: 1, ok: true, at: 100 },
    'exam-1~ped-dead': { pick: 1, ok: true, at: 50 },
  },
  flags: { 'ped-dead': true, 'ped-1': false },
  conf: { 'ped-dead': 0, 'ped-1': 2 },
  srs: { 'ped-dead': { lvl: 1, due: '2026-10-12' }, 'ped-1': { lvl: 2, due: '2026-10-20' } },
  hl: { 'ped-dead': [{ s: 0, e: 3, c: 'y' }] },
  notes: { 'ped-dead': { txt: 'old', at: 5 }, 'ped-1': { txt: 'new', at: 9 } },
  reports: { 'ped-dead': { kind: 'other', txt: 'r', at: 7 } },
  resumeByChapter: { c1: { qid: 'ped-dead', sources: [], at: 1, finished: false },
                     'exam-1': { qid: 'exam-1~ped-dead', sources: [], at: 1, finished: false } },
});
const once = api.foldState(mk());
const twice = api.foldState(JSON.parse(JSON.stringify(once)));
ok(JSON.stringify(once) === JSON.stringify(twice), 'foldState twice equals once');
const dumped = JSON.stringify(once);
ok(!/ped-dead/.test(dumped), 'no dead key or value left: ' + dumped);
ok(once.answers['ped-1'].at === 200 && once.answers['ped-1'].ok === false, 'later answer wins');
ok(once.answers['exam-1~ped-1'].at === 50, 'shadow id moved to exam~kept');
ok(once.flags['ped-1'] === true, 'flags OR');
ok(once.conf['ped-1'] === 0, 'conf follows the winning answer');
ok(once.srs['ped-1'].due === '2026-10-12', 'earlier due date wins');
ok(once.hl['ped-1'].length === 1, 'highlight carried');
ok(once.notes['ped-1'].txt === 'new\nold', 'both note texts kept');
ok(once.reports['ped-1'].txt === 'r', 'report carried');
ok(once.resumeByChapter.c1.qid === 'ped-1' && once.resumeByChapter['exam-1'].qid === 'exam-1~ped-1', 'resume pointers mapped');

/* 4. review deck belongs to the question: a wrong answer in an exam row counts (utils.js inDeck) */
const utils = fs.readFileSync(path.join(app, 'js', 'utils.js'), 'utf8');
const clep = fs.readFileSync(path.join(app, 'js', 'clepsydra.js'), 'utf8');
vm.runInContext(
  between(storage, 'const isDoneAny', 'const qsIn') + '\n' +
  between(storage, 'const isAnswered=', 'const isoLocal') + '\n' +
  between(utils, 'function inDeck', 'function deckAll') + '\n' +
  between(clep, 'function sessStats', 'function sessFocusMs') + '\n' +
  'globalThis.api2={inDeck,sessStats,isDoneAny};',
  ctx
);
const api2 = ctx.api2;
ctx.FOLDED = {};
ctx.S.answers = { 'exam-1~ped-1': { pick: 0, ok: false, at: 500 } };
ok(api2.inDeck(real) === true, 'wrong answer only in exam row reaches the deck');
ctx.S.answers = { 'exam-1~ped-1': { pick: 1, ok: true, at: 500, conf: 2 } };
ok(api2.inDeck(real) === false, 'confident right answer in exam row stays out');
ctx.S.answers = { 'ped-1': { pick: 0, ok: false, at: 400 }, 'exam-1~ped-1': { pick: 0, ok: false, at: 500 } };
ok(ctx.QUESTIONS.filter(api2.inDeck).length === 1, 'wrong in both places: question in deck once');
ctx.S.deckResetAt = 600;
ok(api2.inDeck(real) === false, 'deck reset still hides answers at or before the stamp');
delete ctx.S.deckResetAt;
ctx.S.answers = { 'ped-1': { pick: 1, ok: true, at: 400, conf: 2 } };
ok(api2.inDeck(real) === false, 'topic-only confident right answer unchanged');

/* 5. totals: answered in both places counts once (clepsydra.js) */
ctx.S.answers = { 'ped-1': { pick: 1, ok: true, at: 400 }, 'exam-1~ped-1': { pick: 1, ok: true, at: 500 } };
ok(ctx.QUESTIONS.filter(api2.isDoneAny).length === 1, 'done count: both places = 1');
ok(api2.sessStats({ startedAt: 300 }).n === 1, 'sessStats: both places = 1');
ctx.S.answers = { 'exam-1~ped-1': { pick: 1, ok: true, at: 500 } };
ok(ctx.QUESTIONS.filter(api2.isDoneAny).length === 1 && api2.sessStats({ startedAt: 300 }).n === 1, 'exam-only answer counts once');
ok(/done=QUESTIONS\.filter\(isDoneAny\)/.test(clep) && /un=all\.filter\(q=>!isDoneAny\(q\)\)/.test(clep), 'clepsydra.js uses isDoneAny at both sites');

/* 6. foldState maps the saved mock (ids, place, picks), de-duplicated, idempotent */
ctx.FOLDED = { 'ped-dead': 'ped-1' };
const mkMock = () => ({ mockResume: { at: 1, paper: {
  ids: ['x', 'ped-dead', 'y', 'ped-1', 'z'], i: 3, title: 't', t0: 1,
  exam: { end: 9, mins: 1, done: false, picked: { 'ped-dead': 2, y: 1 } } } } });
const m1 = api.foldState(mkMock());
const m2 = api.foldState(JSON.parse(JSON.stringify(m1)));
ok(JSON.stringify(m1) === JSON.stringify(m2), 'mock fold idempotent');
ok(JSON.stringify(m1.mockResume.paper.ids) === '["x","ped-1","y","z"]', 'mock ids mapped and de-duplicated: ' + m1.mockResume.paper.ids);
ok(m1.mockResume.paper.i === 1 && m1.mockResume.paper.ids[1] === 'ped-1', 'mock place follows its question');
ok(m1.mockResume.paper.exam.picked['ped-1'] === 2 && !('ped-dead' in m1.mockResume.paper.exam.picked), 'mock pick carried to kept id');
const m3 = mkMock(); m3.mockResume.paper.exam.picked['ped-1'] = 0;
ok(api.foldState(m3).mockResume.paper.exam.picked['ped-1'] === 0, 'kept id pick beats dead id pick');
ok(api.foldState({ mockResume: null }).mockResume === null, 'no saved mock: untouched');

/* 7. quiz.js review screen: deck question answered wrong ONLY in an exam row renders, no throw */
const quizSrc = fs.readFileSync(path.join(app, 'js', 'quiz.js'), 'utf8');
const bootSrc = fs.readFileSync(path.join(app, 'js', 'boot.js'), 'utf8');
ctx.FOLDED = {};
ctx.QUESTIONS[0].stem = 'A stem long enough to slice';
vm.runInContext(
  'const SRS=[1,3,7,21,60];' +
  'const ico=()=>"",esc=s=>s,activeModules=()=>[{id:"pediatrics",name:"Peds",hex:"#000",icon:"x"}],chapterName=()=>"c";' +
  between(storage, 'const isoLocal', 'function accuracy') + '\n' +
  'function deckAll(){return QUESTIONS.filter(inDeck)}\n' +
  between(utils, 'function dueNow', 'function streakCount') + '\n' +
  between(quizSrc, 'function vReview', 'function resetDeck') + '\n' +
  'globalThis.api3={vReview};',
  ctx
);
const reviewHtml = (answers) => { ctx.S.answers = answers; ctx.S.srs = {}; const p = { innerHTML: '' }; ctx.api3.vReview(p); return p.innerHTML; };
let html;
try { html = reviewHtml({ 'exam-1~ped-1': { pick: 0, ok: false, at: 500 } }); } catch (e) { html = null; }
ok(html && html.indexOf('In the deck') > 0 && html.indexOf('ch-row') > 0, 'vReview renders exam-only wrong deck question without throwing');
try { html = reviewHtml({ 'exam-1~ped-1': { pick: 1, ok: true, at: 500, conf: 0 } }); } catch (e) { html = null; }
ok(html && /<div class="n">1<\/div><div class="l">Lucky guesses/.test(html), 'exam-only guessed-right counts as a lucky guess');

/* 8. desk-data.js lettersDue honours exam-row answers, and does not throw on a missing real answer */
const desk = require(path.join(app, 'js', 'desk-data.js'));
const dd = desk.lettersDue({ 'exam-1~ped-1': { ok: false } }, { 'ped-1': { lvl: 0, due: '2026-10-11' } }, ['ped-1'], '2026-10-11', 4, { 'ped-1': ['exam-1~ped-1'] });
ok(dd.count === 1, 'desk-data lettersDue counts exam-row wrong answer');
ok(desk.lettersDue({ 'exam-1~ped-1': { ok: false } }, {}, ['ped-1'], '2026-10-11', 4).count === 0, 'desk-data without shadow map unchanged');

/* 9. boot.js backup count: both places = one answered question */
let shown = '';
Object.assign(ctx, {
  bakRead: () => ({ snaps: [{ at: 1, json: JSON.stringify({ answers: { 'ped-1': {}, 'exam-1~ped-1': {}, b: {} } }) }] }),
  bakWhen: () => 'then', showModal: (h) => { shown = h; },
});
vm.runInContext(between(bootSrc, 'function bakConfirm', 'function bakRestore') + '\nglobalThis.api4={bakConfirm};', ctx);
ctx.S.answers = { 'ped-1': {}, 'exam-1~ped-1': {} };
ctx.api4.bakConfirm(1);
ok(/holds <b>2<\/b>/.test(shown) && /currently have <b>1<\/b>/.test(shown), 'backup counts questions once: ' + shown.slice(0, 120));

/* empty FOLDED = no-op */
ctx.FOLDED = {};
ctx.FOLDED = {};
const same = mk();
ok(JSON.stringify(api.foldState(mk())) === JSON.stringify(same), 'empty FOLDED changes nothing');

console.log('selfcheck-peds-logic: ' + n + ' assertions passed');
