/* Two questions, both about the ordinary second action against dirty state:
 *
 *   1. Does re-opening an already-answered MCQ present it UNANSWERED?
 *   2. Does leaving a chapter mid-run and coming back resume where you were?
 *
 *   node tools/boot-check/attempt-check.js            expect FRESH + RESUMES
 *   node tools/boot-check/attempt-check.js --nofix    expect REVEALED + RESTARTS
 *
 * The bug behind (1): vQuiz() used to restore the saved pick and enter revealed
 * state on sight of S.answers[q.id], so a student's second pass — which is what
 * revision is — opened with the key already showing, every option disabled and
 * the Check answer button gone. The --nofix run puts that line back in the
 * copied app and asserts the probe then reports REVEALED. A check that has
 * never been seen failing is not evidence that it can fail.
 *
 * Traps this file already pays for, each one a wasted run otherwise:
 *
 *  - The parse-time showGate stub does NOT survive; the app's own `function
 *    showGate` declaration replaces it. Re-stub AFTER enterProfile() or the
 *    test races the gate and reads an empty page.
 *  - Nothing renders at all until enterProfile() has run.
 *  - A chapter is a TUPLE ["id","name"], not an object, and chapters nest two
 *    deep: MODULES[].groups[].chapters[].
 *  - Assert on the DOM the student would see (disabled options, the presence of
 *    the Check answer button), not only on Q.shown — the flag and the render
 *    are exactly what came apart here.
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = fs.existsSync(CHROME) ? CHROME : EDGE;
const NOFIX = process.argv.includes('--nofix');

// A double dash anywhere in the workspace path kills both browsers.
const WORK = path.join(os.tmpdir(), 'herophilus_attempt');
if (WORK.includes('--')) {
  console.error('REFUSING: workspace path contains "--" — Chrome dies with "Multiple targets are not supported".');
  process.exit(1);
}

function rmrf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
}

rmrf(WORK);
const APP = path.join(WORK, 'app');
copyDir(path.join(ROOT, 'app'), APP);
const INDEX = path.join(APP, 'index.html');
let html = fs.readFileSync(INDEX, 'utf8');

// Put the defect back: restore the line that restored the saved pick and
// entered revealed state on open.
const ANCHOR = '  const flagged=!!S.flags[q.id];\n\n  let h=`<div class="qwrap">';
const RESTORED = '  if(prev&&!Q.shown&&Q.sel===null){Q.sel=prev.pick;Q.shown=true}\n' + ANCHOR;
if (NOFIX) {
  if (!html.includes(ANCHOR)) {
    console.error('--nofix: the vQuiz anchor is not in index.html, so the defect cannot be put back.');
    process.exit(1);
  }
  html = html.replace(ANCHOR, RESTORED);
}

const probe = [
  '<script>',
  'window.__errs=[];',
  'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.lineno||0));},true);',
  'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"boot",name:"Boot",av:0,col:0}]));}catch(e){}',
  '</script>',
  '<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>',
].join('\n');
const headAt = html.indexOf('<head>');
if (headAt < 0) { console.error('no <head> in index.html'); process.exit(1); }
html = html.slice(0, headAt + 6) + '\n' + probe + '\n' + html.slice(headAt + 6);

const report = [
  '<script>',
  // What the student can actually see and do, read off the rendered page.
  'function dis(){return document.querySelectorAll(".opt[disabled]").length}',
  'function opts(){return document.querySelectorAll(".opt").length}',
  'function marked(){return document.querySelectorAll(".opt.correct,.opt.wrong").length}',
  'function canCheck(){return /Check answer/.test(document.body.innerHTML)}',
  'window.addEventListener("load",function(){setTimeout(function(){',
  '  Promise.resolve(enterProfile({id:"boot",name:"Boot",av:0,col:0})).then(function(){',
  '    var r={};',
  '    window.showGate=function(){};',
  '    try{',
  // Find a real MCQ chapter with at least three questions, tuple-shaped.
  '      var cid=null;',
  '      MODULES.forEach(function(m){m.groups.forEach(function(g){g.chapters.forEach(function(c){',
  '        if(cid)return; var qs=qsIn(c[0]);',
  '        if(qs.length>=3&&qs.every(function(q){return q.type!=="case"}))cid=c[0];',
  '      })})});',
  '      r.cid=cid; if(!cid){r.fatal="no MCQ chapter with 3+ questions";throw new Error(r.fatal)}',
  '      r.n=qsIn(cid).length;',
  // ---- 1. answer the first question of the chapter for real ----
  '      startChapter(cid); render();',
  '      r.firstQid=Q.ids[Q.i]; r.i_start=Q.i;',
  '      pick(0); reveal();',
  '      r.afterReveal={shown:Q.shown,dis:dis(),opts:opts(),marked:marked(),check:canCheck()};',
  '      r.saved=!!S.answers[r.firstQid]; r.savedPick=S.answers[r.firstQid]&&S.answers[r.firstQid].pick;',
  // ---- 2. move on, so the resume pointer has somewhere to point ----
  '      navQ(1); render();',
  '      r.i_moved=Q.i; r.movedQid=Q.ids[Q.i];',
  '      r.ptr=JSON.parse(JSON.stringify((S.resumeByChapter||{})[cid]||null));',
  // ---- 3. go back within the SAME run: the attempt must survive ----
  '      navQ(-1); render();',
  '      r.backSameRun={shown:Q.shown,sel:Q.sel,dis:dis(),marked:marked()};',
  // Going back moved the place-marker back with it, correctly — moveQ() saves on
  // every move. So walk forward to a position that is NOT the start before
  // leaving, or "resumed" and "restarted" are the same observation and the test
  // proves nothing. Then read the pointer as it ACTUALLY stands on the way out.
  '      navQ(1); navQ(1); render();',
  // Answer THIS one too. The reveal defect only bites on a question that has a
  // saved answer, so resuming onto an unanswered question would make the whole
  // fresh/revealed test vacuous — it would pass with the defect fully restored.
  '      pick(0); reveal(); render();',
  '      r.leftAt=Q.ids[Q.i]; r.leftIdx=Q.i;',
  '      r.leftAnswered=!!S.answers[r.leftAt];',
  '      r.ptrAtLeave=JSON.parse(JSON.stringify((S.resumeByChapter||{})[cid]||null));',
  // ---- 4. leave the chapter entirely, then re-enter it: fresh + resumed ----
  '      go({name:"home"}); render();',
  '      r.homeHasContinue=/Continue|Restart/.test(document.body.innerHTML);',
  '      startChapter(cid); render();',
  '      r.reentry={i:Q.i,qid:Q.ids[Q.i],shown:Q.shown,sel:Q.sel,dis:dis(),opts:opts(),marked:marked(),check:canCheck()};',
  '      r.answersKept=Object.keys(S.answers).length;',
  // ---- 5. and the history is still offered, without giving the key away ----
  '      r.showsPrevious=/Previous choice/.test(document.body.innerHTML);',
  '    }catch(e){r.threw=String(e&&e.message||e)}',
  '    r.errs=window.__errs.slice(0,10);',
  '    document.title="ATTEMPT "+JSON.stringify(r);',
  '  });',
  '},1500);});',
  '</script>',
].join('\n');
html = html.replace('</body>', report + '\n</body>');
fs.writeFileSync(INDEX, html, 'utf8');

const url = 'file:///' + INDEX.replace(/\\/g, '/');
let dom = '';
for (let attempt = 1; attempt <= 3; attempt++) {
  try {
    dom = execFileSync(browser, [
      '--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run',
      '--disable-extensions', '--allow-file-access-from-files',
      '--virtual-time-budget=30000', '--user-data-dir=' + path.join(WORK, 'cp' + attempt),
      '--dump-dom', url,
    ], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, timeout: 180000 });
  } catch (e) { dom = e.stdout || ''; }
  if (dom.includes('ATTEMPT')) break;
  console.error('attempt ' + attempt + ': no report in DOM — retrying');
}
const m = dom.match(/ATTEMPT (\{.*?\})<\/title>/s);
if (!m) { console.error('NO REPORT after 3 attempts. dom ' + dom.length + ' bytes'); process.exit(1); }
const r = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));

const J = o => JSON.stringify(o);
console.log((NOFIX ? 'DEFECT RESTORED' : 'current file  ') + '   chapter ' + r.cid + ' (' + r.n + ' questions)');
if (r.fatal || r.threw) console.log('  threw: ' + (r.threw || r.fatal));
console.log('after answering q1  : ' + J(r.afterReveal) + '  saved=' + r.saved + ' pick=' + r.savedPick);
console.log('back, same run      : ' + J(r.backSameRun) + '   <- the attempt must survive this');
console.log('re-entered chapter  : ' + J(r.reentry));
console.log('pointer on the way out: ' + J(r.ptrAtLeave) + '   left at idx ' + r.leftIdx + ', answered=' + r.leftAnswered);
console.log('answers kept        : ' + r.answersKept + '   home offers continue: ' + r.homeHasContinue);
console.log('offers prior choice : ' + r.showsPrevious);
(r.errs || []).forEach(e => console.log('  ! ' + e));

// The run means nothing if the app never got as far as rendering options.
if (r.threw || r.fatal) { console.log('INVALID: the probe threw before it measured anything'); process.exit(1); }
if (!r.afterReveal || !r.afterReveal.opts) { console.log('INVALID: no options rendered at all'); process.exit(1); }
if (!r.afterReveal.shown) { console.log('INVALID: reveal() did not reveal — the probe never reached the state under test'); process.exit(1); }
if (!r.saved) { console.log('INVALID: the answer was never recorded, so there is no history to re-open'); process.exit(1); }
if (!r.leftAnswered) { console.log('INVALID: left on an unanswered question — the fresh/revealed test would be vacuous'); process.exit(1); }
if (!r.leftIdx) { console.log('INVALID: left at the start, so resumed and restarted are the same observation'); process.exit(1); }

const re = r.reentry || {};
const fresh = re.shown === false && re.sel === null && re.dis === 0 && re.marked === 0 && re.check === true;
const survived = r.backSameRun && r.backSameRun.shown === true;
const resumed = re.qid === r.leftAt;
const kept = r.answersKept > 0;

console.log('');
console.log('  re-opens unanswered      : ' + (fresh ? 'FRESH' : 'REVEALED'));
console.log('  attempt survives back    : ' + (survived ? 'yes' : 'no'));
console.log('  resumes where it left    : ' + (resumed ? 'RESUMES at ' + re.qid + ' (idx ' + re.i + ')' : 'RESTARTS at ' + re.qid + ' (idx ' + re.i + ', wanted ' + r.leftAt + ')'));
console.log('  history preserved        : ' + (kept ? 'yes (' + r.answersKept + ' answers)' : 'NO — S.answers was cleared'));

if (NOFIX) {
  const ok = !fresh;
  console.log(ok ? '\nREVEALED with the defect restored, as it must be' : '\nUNEXPECTED: still fresh with the defect restored — the probe is not measuring this');
  process.exit(ok ? 0 : 1);
}
const pass = fresh && survived && resumed && kept;
console.log(pass ? '\nPASS' : '\nFAIL');
process.exit(pass ? 0 : 1);
