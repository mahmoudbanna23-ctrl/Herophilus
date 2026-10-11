/* Carry-over check: saved progress on a removed (folded) Pediatrics question lands on the kept copy.
 *
 *   node content/peds/qb-pages/dupes/verify/carry-over.js [appDir]      appDir = app (default) or dist
 *
 * HOW THE APP DOES IT (read, not assumed): loadState() (app/js/storage.js:47) parses the saved
 * state and runs it through checkedProgressState() (app/js/boot.js:205), whose last line is
 * foldState() (boot.js:271; the function is storage.js:363). So the migration runs inside the
 * normal load. This script never calls it by hand: it seeds localStorage, boots the page, calls
 * enterProfile() (the only way a profile is entered), and reads S back.
 * loadState() does NOT save, so the dead keys stay in storage until the app's next save(). The
 * script reports that, then calls save() once and checks storage after it.
 *
 * RULES (storage.js:354-362 comment, code 383-441), used as the expectation:
 *   answers  later `at` wins, strictly (:385); conf follows the winning answer (:395)
 *   flags    OR (:390)                     srs   earlier due wins (:400)
 *   hl       kept's wins unless empty/absent, then dead's (:405)
 *   notes    kept's kept; differing text -> kept txt + newline + dead txt, latest `at` (:410-413)
 *   reports  later `at` wins (:418)        resumeByChapter[*].qid remapped (:423)
 *   mockResume.paper  ids remapped, duplicates drop, first place wins, i follows the question,
 *                     picked: kept's pick beats dead's (:429-441)
 *   shadow id "exam~dead" -> "exam~kept" (:370-376)
 *
 * Harness copied from exam-rows.js: whole app copied to a double-dash-free scratch dir, probe +
 * gate stub at the top of <head>, profile seeded, animation killed, one Chrome at a time, fresh
 * user-data-dir, 3 attempts. Writes only to D:\scratch 2026\peds-carry-over\ and the result txt.
 *
 * Hidden switch for the "can this test fail" proof: CARRY_EMPTY_FOLDED=1 empties FOLDED in the
 * scratch copy (expectations still come from the real folds.js). Its output goes to the scratch dir.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..', '..', '..', '..');
const APPARG = process.argv[2] || 'app';
const SRC = path.resolve(ROOT, APPARG);
const EMPTY = process.env.CARRY_EMPTY_FOLDED === '1';
const SCRATCH = 'D:\\scratch 2026\\peds-carry-over';
const WORK = path.join(SCRATCH, EMPTY ? 'work_empty' : 'work_' + path.basename(SRC));
const OUT = EMPTY ? path.join(SCRATCH, 'after-carry-over_EMPTY-FOLDED.txt') : path.join(__dirname, 'after-carry-over.txt');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = fs.existsSync(CHROME) ? CHROME : EDGE;
if (WORK.includes('--') || SCRATCH.includes('--')) { console.error('REFUSING: path contains "--"'); process.exit(1); }
if (!fs.existsSync(path.join(SRC, 'data', 'folds.js'))) { console.error('no data/folds.js under ' + SRC); process.exit(1); }

const lines = [];
const say = s => { lines.push(s); console.log(s); };
const rmrf = p => { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); };
function copyDir(a, b) {
  fs.mkdirSync(b, { recursive: true });
  for (const e of fs.readdirSync(a, { withFileTypes: true })) {
    if (e.name === 'graphify-out') continue;
    const s = path.join(a, e.name), d = path.join(b, e.name);
    if (e.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
}
const clone = o => JSON.parse(JSON.stringify(o));
const canon = v => JSON.stringify(v, (k, x) => (x && typeof x === 'object' && !Array.isArray(x))
  ? Object.keys(x).sort().reduce((r, kk) => (r[kk] = x[kk], r), {}) : x);
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

/* ---------------- node side: FOLDED + control ids ---------------- */
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'app', 'data', 'folds.js'), 'utf8'), ctx);
const FOLDED = ctx.FOLDED;
const deads = Object.keys(FOLDED);
const keptSet = new Set(Object.values(FOLDED));
const deadsPerKept = {};
deads.forEach(d => { deadsPerKept[FOLDED[d]] = (deadsPerKept[FOLDED[d]] || 0) + 1; });
const uniq = deads.filter(d => deadsPerKept[FOLDED[d]] === 1 && !has(FOLDED, FOLDED[d]));
const mapId = id => { /* chain, then shadow "exam~real" */
  let cur = id, g = 0;
  while (has(FOLDED, cur) && g++ < 20) cur = FOLDED[cur];
  if (cur !== id) return cur;
  const t = id.indexOf('~');
  if (t > 0) { let k = id.slice(t + 1); g = 0; const r = k; while (has(FOLDED, k) && g++ < 20) k = FOLDED[k]; if (k !== r) return id.slice(0, t + 1) + k; }
  return id;
};
/* 5 ordinary ids: real Pediatrics ids, neither removed nor kept */
const ctlIds = [];
{
  const src = fs.readFileSync(path.join(SRC, 'data', 'questions.peds.sa.js'), 'utf8');
  for (const m of src.matchAll(/^\s*["']?id["']?\s*:\s*['"]([A-Za-z0-9_-]+)['"]/gm)) {
    const id = m[1];
    if (!has(FOLDED, id) && !keptSet.has(id) && !ctlIds.includes(id)) ctlIds.push(id);
    if (ctlIds.length >= 5) break;
  }
}
if (ctlIds.length < 5) { console.error('could not find 5 control ids'); process.exit(1); }

/* ---------------- build the seed ---------------- */
const pad2 = n => String(n).padStart(2, '0');
const seed = { answers: {}, flags: {}, conf: {}, sched: {}, srs: {}, days: {}, hl: {}, banks: {}, resumeByChapter: {}, notes: {}, reports: {},
  term: { id: 'y4s2', at: 1 }, updatedAt: 1000 };
deads.forEach((d, i) => {
  seed.answers[d] = { ok: i % 2 === 0, at: 100000 + i * 10, pick: i % 4 };
  seed.flags[d] = i % 3 === 0;
  seed.conf[d] = i % 3;
  seed.srs[d] = { lvl: i % 5, due: '2027-01-' + pad2(1 + (i % 28)) };
  seed.hl[d] = [{ s: i % 7, e: (i % 7) + 5, c: 'ygpb'[i % 4] }];
  seed.notes[d] = { txt: 'note-' + d, at: 200000 + i };
  seed.reports[d] = { kind: 'k' + (i % 3), txt: 'rep-' + d, at: 300000 + i * 10 };
});
/* shadow ids for 15 dead ids (kept side has no shadow record) */
const shadowDeads = uniq.slice(0, 15);
shadowDeads.forEach((d, j) => {
  seed.answers['pedep-mf1~' + d] = { ok: j % 2 === 1, at: 700000 + j, pick: 1 };
  seed.flags['pedep-mf1~' + d] = j % 2 === 0;
});
/* 20 collisions: kept id already has its own record. Alternate who is newer / earlier. */
const collDeads = uniq.slice(3, 23);
collDeads.forEach((d, j) => {
  const k = FOLDED[d], i = deads.indexOf(d);
  seed.answers[k] = { ok: j % 2 === 0, at: 100000 + i * 10 + (j % 2 === 0 ? -5 : 5), pick: (j + 1) % 4 };
  seed.flags[k] = j % 4 < 2;
  seed.conf[k] = (j + 1) % 3;
  seed.srs[k] = { lvl: 1, due: j % 2 === 0 ? '2026-12-15' : '2027-03-01' };
  seed.hl[k] = j % 3 === 0 ? [] : [{ s: 20, e: 30, c: 'y' }];
  seed.notes[k] = j % 5 === 0 ? { txt: 'note-' + d, at: 5 } : { txt: 'own-note-' + k, at: 150000 + j };
  seed.reports[k] = { kind: 'own', txt: 'own-rep-' + k, at: 300000 + i * 10 + (j % 2 === 0 ? -5 : 5) };
});
/* resume pointers */
deads.slice(0, 20).forEach((d, j) => { seed.resumeByChapter['rc-test-' + j] = { qid: d, sources: ['endpoint'], at: 1000 + j, finished: j % 2 === 0 }; });
seed.resumeByChapter['rc-test-ctl'] = { qid: ctlIds[0], sources: ['house'], at: 5, finished: false };
/* saved timed paper */
const [m0, m1, m2] = uniq.slice(0, 3);
const mockIds = [m0, m1, m2, FOLDED[m2], ctlIds[0]];
seed.mockResume = { at: 5000, paper: { ids: mockIds, i: 2, title: 'Carry-over test paper', t0: 1700000000000,
  exam: { end: 4102444800000, mins: 60, done: false, picked: { [m0]: 2, [m1]: 3, [FOLDED[m2]]: 1, [m2]: 0 } } } };
/* 5 controls on ordinary ids */
const ctlRec = {};
ctlIds.forEach((id, j) => {
  seed.answers[id] = { ok: j % 2 === 0, at: 900000 + j, pick: j % 4 };
  seed.flags[id] = j % 2 === 1;
  seed.conf[id] = j % 3;
  seed.srs[id] = { lvl: j % 5, due: '2027-02-' + pad2(10 + j) };
  seed.hl[id] = [{ s: 1, e: 4 + j, c: 'b' }];
  seed.notes[id] = { txt: 'ctl-note-' + id, at: 910000 + j };
  seed.reports[id] = { kind: 'ctl', txt: 'ctl-rep-' + id, at: 920000 + j };
  ctlRec[id] = {};
  ['answers', 'flags', 'conf', 'srs', 'hl', 'notes', 'reports'].forEach(s => { ctlRec[id][s] = JSON.stringify(seed[s][id]); });
});
const SECTIONS = ['answers', 'flags', 'conf', 'srs', 'hl', 'notes', 'reports'];

/* ---------------- expectation model ---------------- */
const E = clone(seed);
{
  const at = o => (o && o.at) || 0;
  const won = {};
  const order = s => Object.keys(seed[s]).filter(k => mapId(k) !== k); // seed insertion order
  order('answers').forEach(d => { const k = mapId(d); const a = E.answers[d], b = E.answers[k]; if (!b || at(a) > at(b)) { E.answers[k] = a; won[k] = true; } delete E.answers[d]; });
  order('flags').forEach(d => { const k = mapId(d); E.flags[k] = !!(E.flags[k] || E.flags[d]); delete E.flags[d]; });
  order('conf').forEach(d => { const k = mapId(d); if (E.conf[k] === undefined || won[k]) E.conf[k] = E.conf[d]; delete E.conf[d]; });
  order('srs').forEach(d => { const k = mapId(d); const a = E.srs[d], b = E.srs[k]; if (!b || (a && a.due && b.due && a.due < b.due)) E.srs[k] = a; delete E.srs[d]; });
  order('hl').forEach(d => { const k = mapId(d); if (!E.hl[k] || !E.hl[k].length) E.hl[k] = E.hl[d]; delete E.hl[d]; });
  order('notes').forEach(d => { const k = mapId(d); const a = E.notes[d], b = E.notes[k];
    if (!b) E.notes[k] = a; else if (a && a.txt && a.txt !== b.txt) E.notes[k] = { txt: (b.txt ? b.txt + '\n' : '') + a.txt, at: Math.max(at(a), at(b)) };
    delete E.notes[d]; });
  order('reports').forEach(d => { const k = mapId(d); const a = E.reports[d], b = E.reports[k]; if (!b || at(a) > at(b)) E.reports[k] = a; delete E.reports[d]; });
  Object.keys(E.resumeByChapter).forEach(c => { E.resumeByChapter[c].qid = mapId(E.resumeByChapter[c].qid); });
  const seen = {}, ids = [];
  seed.mockResume.paper.ids.forEach(id => { const k = mapId(id); if (!seen[k]) { seen[k] = 1; ids.push(k); } });
  E.mockResume.paper.ids = ids; E.mockResume.paper.i = ids.indexOf(mapId(mockIds[2]));
  const pk = {}; // kept's pick beats dead's
  Object.keys(seed.mockResume.paper.exam.picked).forEach(id => { const k = mapId(id); if (id === k) pk[k] = seed.mockResume.paper.exam.picked[id]; });
  Object.keys(seed.mockResume.paper.exam.picked).forEach(id => { const k = mapId(id); if (id !== k && !has(pk, k)) pk[k] = seed.mockResume.paper.exam.picked[id]; });
  E.mockResume.paper.exam.picked = pk;
}
/* classify every touched kept key per section: simple (nothing there, one dead) or collision */
const touched = {};
SECTIONS.forEach(s => {
  const bySrc = {};
  Object.keys(seed[s]).filter(k => mapId(k) !== k).forEach(d => { const k = mapId(d); (bySrc[k] = bySrc[k] || []).push(d); });
  touched[s] = { simple: [], collision: [] };
  Object.keys(bySrc).forEach(k => {
    (bySrc[k].length === 1 && !has(seed[s], k) ? touched[s].simple : touched[s].collision).push({ k, deadKeys: bySrc[k] });
  });
});

/* ---------------- page side ---------------- */
function buildApp(seedJson) {
  rmrf(WORK);
  copyDir(SRC, WORK);
  if (EMPTY) fs.writeFileSync(path.join(WORK, 'data', 'folds.js'), 'var FOLDED = {};\n', 'utf8');
  const INDEX = path.join(WORK, 'index.html');
  let html = fs.readFileSync(INDEX, 'utf8');
  const safe = s => s.replace(/</g, '\\u003c');
  const probe = [
    '<script>',
    'window.__errs=[];',
    'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.filename||"")+":"+(e.lineno||0));},true);',
    'window.addEventListener("unhandledrejection",function(e){window.__errs.push("REJECT: "+e.reason);});',
    '(function(){var ce=console.error;console.error=function(){window.__errs.push("console.error: "+Array.prototype.join.call(arguments," "));return ce.apply(console,arguments);};})();',
    'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
    'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"boot",name:"Boot","av":0,"col":0}]));',
    'localStorage.setItem("wardround.v3.boot",' + safe(JSON.stringify(seedJson)) + ');}catch(e){window.__errs.push("seed THREW: "+e.message);}',
    '</script>',
    '<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>',
  ].join('\n');
  const head = /<head[^>]*>/.exec(html);
  if (!head) throw new Error('no <head> in index.html');
  const at = head.index + head[0].length;
  html = html.slice(0, at) + '\n' + probe + '\n' + html.slice(at);
  const report = [
    '<script>',
    'window.addEventListener("load",function(){setTimeout(function(){',
    '  window.showGate=function(){};',
    '  var r={};',
    '  var p=Promise.resolve();',
    '  try{p=enterProfile({id:"boot",name:"Boot",av:0,col:0});}catch(e){window.__errs.push("enterProfile THREW: "+e.message);}',
    '  Promise.resolve(p).catch(function(e){window.__errs.push("enterProfile REJECTED: "+e);}).then(function(){',
    '    return new Promise(function(res){setTimeout(res,500);});',
    '  }).then(function(){',
    '    try{',
    '      r.foldedInPage=(typeof FOLDED!=="undefined")?Object.keys(FOLDED).length:-1;',
    '      r.storageMode=storageMode;',
    '      r.memPre=JSON.stringify(S);',
    '      r.rawPre=localStorage.getItem("wardround.v3.boot");',
    '      r.keptLive=0;r.keptTotal=0;var seenK={};',
    '      if(typeof FOLDED!=="undefined"){for(var d in FOLDED){var k=FOLDED[d];if(seenK[k])continue;seenK[k]=1;r.keptTotal++;if(QBYID.get(k))r.keptLive++;}}',
    '      r.ctlLive=' + safe(JSON.stringify(ctlIds)) + '.filter(function(x){return !!QBYID.get(x);}).length;',
    '    }catch(e){window.__errs.push("pre THREW: "+e.message);}',
    '    return Promise.resolve(save()).catch(function(e){window.__errs.push("save REJECTED: "+e);});',
    '  }).then(function(saved){',
    '    try{r.saved=saved;r.memPost=JSON.stringify(S);r.rawPost=localStorage.getItem("wardround.v3.boot");',
    '      var all={};for(var i=0;i<localStorage.length;i++){var kk=localStorage.key(i);if(kk.indexOf("wardround.")===0&&kk!=="wardround.v3.boot")all[kk]=localStorage.getItem(kk);}',
    '      r.otherKeys=all;}catch(e){window.__errs.push("post THREW: "+e.message);}',
    '    r.errs=window.__errs.slice(0,40);',
    '    var pre=document.createElement("pre");pre.id="CARRYOUT";',
    '    pre.textContent="CARRYB64:"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+":END";',
    '    document.body.appendChild(pre);document.title="CARRYREPORT";',
    '  });',
    '},1200);});',
    '</script>',
  ].join('\n');
  html = html.replace('</body>', report + '\n</body>');
  fs.writeFileSync(INDEX, html, 'utf8');
  return INDEX;
}
function runPage(seedJson, tag) {
  const INDEX = buildApp(seedJson);
  const url = 'file:///' + INDEX.replace(/\\/g, '/');
  let lastErr = '';
  for (let attempt = 1; attempt <= 3; attempt++) {
    const udd = path.join(SCRATCH, 'chrome_' + (EMPTY ? 'e' : path.basename(SRC)) + '_' + tag + attempt);
    rmrf(udd);
    const args = ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run', '--disable-extensions',
      '--allow-file-access-from-files', '--window-size=1180,820', '--user-data-dir=' + udd, '--virtual-time-budget=25000', '--dump-dom', url];
    let dom = '';
    try { dom = execFileSync(browser, args, { encoding: 'utf8', maxBuffer: 512 * 1024 * 1024, timeout: 180000, stdio: ['ignore', 'pipe', 'pipe'] }); }
    catch (e) { lastErr = e.message; dom = e.stdout || ''; }
    const m = /CARRYB64:([A-Za-z0-9+\/=]+):END/.exec(dom);
    if (m) return JSON.parse(Buffer.from(m[1], 'base64').toString('utf8'));
    console.error('attempt ' + attempt + ' (' + tag + ') gave no report, retrying');
  }
  throw new Error('no report after 3 attempts: ' + lastErr);
}

/* ---------------- assertions on one state view ---------------- */
const deadSet = new Set(deads);
function scanDead(raw) { // quoted exact id, bare or as a shadow suffix
  let n = 0;
  deads.forEach(d => { if (raw.includes('"' + d + '"') || raw.includes('~' + d + '"')) n++; });
  return n;
}
function checkView(st) {
  const R = {};
  const raw = JSON.stringify(st);
  R.a = { bad: scanDead(raw), total: deads.length };
  // (b) simple keys carry the dead record verbatim
  let bOk = 0, bTot = 0; const bFail = [];
  SECTIONS.forEach(s => touched[s].simple.forEach(t => {
    bTot++; const want = canon(seed[s][t.deadKeys[0]]);
    if (has(st[s] || {}, t.k) && canon(st[s][t.k]) === want) bOk++; else bFail.push(s + ':' + t.k);
  }));
  // resume pointers
  let rcOk = 0, rcTot = 0;
  Object.keys(seed.resumeByChapter).forEach(c => { rcTot++; const g = st.resumeByChapter && st.resumeByChapter[c]; if (g && g.qid === E.resumeByChapter[c].qid && canon(Object.assign({}, g, { qid: 0 })) === canon(Object.assign({}, seed.resumeByChapter[c], { qid: 0 }))) rcOk++; else bFail.push('rc:' + c); });
  R.b = { ok: bOk, tot: bTot, rcOk, rcTot, fail: bFail.slice(0, 8) };
  // (b2) no stray / missing keys
  let kOk = 0; const kFail = [];
  SECTIONS.forEach(s => { const a = Object.keys(st[s] || {}).sort(), e = Object.keys(E[s]).sort(); if (canon(a) === canon(e)) kOk++; else kFail.push(s + ' got ' + a.length + ' want ' + e.length); });
  R.b2 = { ok: kOk, tot: SECTIONS.length, fail: kFail };
  // (c) collisions: whole record equals the rule-derived expectation, plus explicit nothing-lost checks
  let cOk = 0, cTot = 0; const cFail = [];
  const outcome = { answers_deadWon: 0, answers_keptWon: 0, notes_joined: 0, notes_same: 0, srs_deadWon: 0, srs_keptWon: 0, hl_deadFilled: 0, hl_keptKept: 0, reports_deadWon: 0, reports_keptWon: 0 };
  SECTIONS.forEach(s => touched[s].collision.forEach(t => {
    cTot++;
    const got = (st[s] || {})[t.k];
    let ok = has(st[s] || {}, t.k) && canon(got) === canon(E[s][t.k]);
    if (ok) { // explicit rules, independent of the model
      const own = seed[s][t.k], deadRecs = t.deadKeys.map(d => seed[s][d]);
      if (s === 'flags') ok = got === (!!own || deadRecs.some(Boolean));
      if (s === 'notes' && own) deadRecs.forEach(dr => { if (!(got.txt.includes(own.txt) && got.txt.includes(dr.txt))) ok = false; });
      if (s === 'hl' && own && own.length) ok = ok && canon(got) === canon(own);
    }
    if (ok) cOk++; else cFail.push(s + ':' + t.k);
    const own = seed[s][t.k], d1 = seed[s][t.deadKeys[0]];
    if (own !== undefined && t.deadKeys.length === 1) {
      if (s === 'answers') (canon(got) === canon(d1) ? outcome.answers_deadWon++ : outcome.answers_keptWon++);
      if (s === 'srs') (canon(got) === canon(d1) ? outcome.srs_deadWon++ : outcome.srs_keptWon++);
      if (s === 'reports') (canon(got) === canon(d1) ? outcome.reports_deadWon++ : outcome.reports_keptWon++);
      if (s === 'notes') (got.txt === own.txt ? outcome.notes_same++ : outcome.notes_joined++);
      if (s === 'hl') (canon(got) === canon(d1) ? outcome.hl_deadFilled++ : outcome.hl_keptKept++);
    }
  }));
  R.c = { ok: cOk, tot: cTot, fail: cFail.slice(0, 8), outcome };
  // (d) controls byte-identical
  let dOk = 0; const dFail = [];
  ctlIds.forEach(id => SECTIONS.forEach(s => { if (has(st[s] || {}, id) && JSON.stringify(st[s][id]) === ctlRec[id][s]) dOk++; else dFail.push(s + ':' + id); }));
  R.d = { ok: dOk, tot: ctlIds.length * SECTIONS.length, fail: dFail.slice(0, 5) };
  // (g) mock paper
  const mp = st.mockResume && st.mockResume.paper, em = E.mockResume.paper;
  R.g = { ok: !!(mp && canon(mp.ids) === canon(em.ids) && mp.i === em.i && canon(mp.exam.picked) === canon(em.exam.picked)),
    got: mp ? { ids: mp.ids.length, i: mp.i, picked: Object.keys(mp.exam.picked).length } : null,
    want: { ids: em.ids.length, i: em.i, picked: Object.keys(em.exam.picked).length } };
  return R;
}

/* ---------------- run ---------------- */
say('CARRY-OVER on ' + SRC + (EMPTY ? '   [DELIBERATE-FAIL RUN: FOLDED emptied in the scratch copy]' : ''));
say('seed: FOLDED ' + deads.length + ' removed -> ' + keptSet.size + ' kept (' + (deads.length - keptSet.size) + ' removed ids share a kept id) | collisions seeded ' + collDeads.length +
  ' | shadow ids ' + shadowDeads.length + ' | controls ' + ctlIds.length + ' [' + ctlIds.join(',') + '] | sections ' + SECTIONS.join(',') + ',resumeByChapter(' + Object.keys(seed.resumeByChapter).length + '),mockResume');
const seedJson = JSON.stringify(seed);
let r1;
try { r1 = runPage(seedJson, 'run1_'); } catch (e) { say('RUN 1 FAILED: ' + e.message); say('CARRY-OVER FAIL'); fs.writeFileSync(OUT, lines.join('\n') + '\n'); process.exit(1); }
say('page: FOLDED in page ' + r1.foldedInPage + ' | storageMode ' + r1.storageMode + ' | save() returned ' + r1.saved + ' | kept ids live in page ' + r1.keptLive + '/' + r1.keptTotal + ' | controls live ' + r1.ctlLive + '/5');
const preDead = scanDead(r1.rawPre || '');
say('info: storage right after load, before the app saves, still holds ' + preDead + ' removed ids (loadState migrates in memory only, storage.js:47-75; the first save() writes it)');

const M = checkView(JSON.parse(r1.memPost));   // memory, after the migration + save
const Mpre = checkView(JSON.parse(r1.memPre)); // memory, before my save()
const S1 = checkView(JSON.parse(r1.rawPost));  // storage after save()
const raw1 = r1.rawPost;
let r2;
try { r2 = runPage(raw1, 'run2_'); } catch (e) { say('RUN 2 FAILED: ' + e.message); say('CARRY-OVER FAIL'); fs.writeFileSync(OUT, lines.join('\n') + '\n'); process.exit(1); }

const fails = [];
const line = (id, name, ok, text) => { say((ok ? 'PASS ' : 'FAIL ') + id + ' ' + name + ': ' + text); if (!ok) fails.push(id); };
const v = (f) => [f(Mpre), f(S1)];
line('a', 'no removed id left as a key or value', Mpre.a.bad === 0 && S1.a.bad === 0 && scanDead(JSON.stringify(r1.otherKeys || {})) === 0,
  'removed ids still present: memory ' + Mpre.a.bad + '/' + deads.length + ', storage ' + S1.a.bad + '/' + deads.length + ', other wardround keys ' + scanDead(JSON.stringify(r1.otherKeys || {})) + ' (backup snapshots included)');
const bAll = x => x.b.ok === x.b.tot && x.b.rcOk === x.b.rcTot;
line('b', 'kept id holds the carried record (no collision)', bAll(Mpre) && bAll(S1) && Mpre.b.tot > 0,
  'records verbatim: memory ' + Mpre.b.ok + '/' + Mpre.b.tot + ' + resume pointers ' + Mpre.b.rcOk + '/' + Mpre.b.rcTot + '; storage ' + S1.b.ok + '/' + S1.b.tot + ' + ' + S1.b.rcOk + '/' + S1.b.rcTot + (S1.b.fail.length ? ' first misses ' + S1.b.fail.join(' ') : ''));
line('b2', 'no stray or missing keys per section', Mpre.b2.ok === Mpre.b2.tot && S1.b2.ok === S1.b2.tot,
  'sections whose key set equals the expected set: memory ' + Mpre.b2.ok + '/' + Mpre.b2.tot + ', storage ' + S1.b2.ok + '/' + S1.b2.tot + (S1.b2.fail.length ? ' ' + S1.b2.fail.join('; ') : ''));
const o = S1.c.outcome;
line('c', 'collisions follow the code rule (storage.js:383-420)', Mpre.c.ok === Mpre.c.tot && S1.c.ok === S1.c.tot && S1.c.tot > 0,
  'collision records as expected: memory ' + Mpre.c.ok + '/' + Mpre.c.tot + ', storage ' + S1.c.ok + '/' + S1.c.tot + (S1.c.fail.length ? ' misses ' + S1.c.fail.join(' ') : '') +
  ' | seeded-collision outcomes: answers dead-newer ' + o.answers_deadWon + ' kept-newer ' + o.answers_keptWon + ', srs dead-earlier ' + o.srs_deadWon + ' kept-earlier ' + o.srs_keptWon +
  ', reports dead ' + o.reports_deadWon + ' kept ' + o.reports_keptWon + ', notes joined ' + o.notes_joined + ' same-text ' + o.notes_same + ', hl dead-filled ' + o.hl_deadFilled + ' kept ' + o.hl_keptKept);
line('d', 'control records byte-identical', Mpre.d.ok === Mpre.d.tot && S1.d.ok === S1.d.tot,
  'memory ' + Mpre.d.ok + '/' + Mpre.d.tot + ', storage ' + S1.d.ok + '/' + S1.d.tot + ' (5 ids x 7 sections)' + (S1.d.fail.length ? ' misses ' + S1.d.fail.join(' ') : ''));
const errs = (r1.errs || []).concat(r2.errs || []);
line('e', 'console errors', errs.length === 0, 'run 1 ' + (r1.errs || []).length + ', run 2 ' + (r2.errs || []).length + (errs.length ? ' first: ' + errs.slice(0, 3).join(' | ') : ''));
/* run 2 also calls save() (its report script does), and save() stamps updatedAt (storage.js:137): ignore that one field after the save */
const noStamp = s => { const o = JSON.parse(s); delete o.updatedAt; return canon(o); };
const same = canon(JSON.parse(r2.memPre)) === canon(JSON.parse(raw1)) && noStamp(r2.memPost) === noStamp(raw1);
const sameStore = !!r2.rawPost && r2.rawPre === raw1 && noStamp(r2.rawPost) === noStamp(raw1);
const R2 = checkView(JSON.parse(r2.rawPost || '{}'));
line('f', 'reload is idempotent', same && sameStore && R2.a.bad === 0,
  'run 2 loaded run 1 storage: state equals it ' + same + ', storage after run 2 equals it ' + !!sameStore + ', removed ids ' + R2.a.bad + ', storage bytes ' + raw1.length + ' -> ' + (r2.rawPost || '').length);
line('g', 'saved timed paper and resume pointers', M.g.ok && S1.g.ok,
  'paper ids/i/picked got ' + JSON.stringify(S1.g.got) + ' want ' + JSON.stringify(S1.g.want) + ' (duplicate dropped, place follows question, kept pick wins)');
say(fails.length ? 'CARRY-OVER FAIL' : 'CARRY-OVER PASS');
fs.writeFileSync(OUT, lines.join('\n') + '\n');
rmrf(WORK);
process.exit(fails.length ? 1 : 0);
