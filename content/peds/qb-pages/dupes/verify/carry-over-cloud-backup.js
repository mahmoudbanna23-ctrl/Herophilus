/* Carry-over check, part 2: cloud pull and backup paths. Saved progress on a removed (folded)
 * Pediatrics question must land on the kept copy when it arrives by
 *   (a)  cloud      pullCloud() -> pushCloud() -> mergeStates() -> foldState()       gate.js:258/271/202/256
 *   (b1) snapshot   loadState() rescue via bakNewest()/checkedProgressState()        storage.js:47-70, boot.js:102
 *        and the user's own "Restore it" button, bakRestore()                        boot.js:183
 *   (b2) file       importData() FileReader -> checkedProgressState + mergeStates    boot.js:273-306
 * (The brief also named a FileReader at gate.js:866. It is pfUpload(), the profile PHOTO reader
 * (readAsDataURL); it never touches progress. Reported as a finding, nothing to test there.)
 *
 *   node content/peds/qb-pages/dupes/verify/carry-over-cloud-backup.js <app | dist>
 *
 * Harness reused from carry-over.js (same copy-to-scratch, head probe, gate stub, seeded profile,
 * animation kill, fresh user-data-dir, 3 attempts, report in a <pre> as base64). Real app code runs
 * unmodified. Stubbed, and only these: (1) the Firestore transport: window.firebase.firestore() is a
 * fake that hands pushCloud()'s own transaction callback a fake cloud document and records tx.set();
 * cloudEnabled() is overridden to true because the real one refuses file: pages (gate.js:9); fbUser
 * is set to a fake user. (2) window.confirm returns true (importData asks before merging).
 * The file source is a real Blob read by the real FileReader. Nothing else is replaced.
 *
 * Every scenario uses ALL removed ids in FOLDED. Expectations come from an independent model of the
 * rules in foldState (storage.js:354-443), written order-independent: every timestamp and due date
 * is distinct, so "later at wins" and "earlier due wins" have one answer however keys are ordered.
 * Negative control per path: FOLDED emptied in the scratch copy, same input, must FAIL.
 * Writes only to D:\scratch 2026\carry-cloud\ (+ stdout). Run it against app and against dist.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..', '..', '..', '..');
const APPARG = process.argv[2] || 'app';
const SRC = path.resolve(ROOT, APPARG);
const SCRATCH = 'D:\\scratch 2026\\carry-cloud';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = fs.existsSync(CHROME) ? CHROME : EDGE;
if (SCRATCH.includes('--') || SRC.includes('--')) { console.error('REFUSING: path contains "--"'); process.exit(1); }
if (!fs.existsSync(path.join(SRC, 'data', 'folds.js'))) { console.error('no data/folds.js under ' + SRC); process.exit(1); }
fs.mkdirSync(SCRATCH, { recursive: true });
const ONLY = process.env.CCB_ONLY ? process.env.CCB_ONLY.split(',') : null; // debug: run listed scenario ids only

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
const has = (o, k) => Object.prototype.hasOwnProperty.call(o || {}, k);
const pad2 = n => String(n).padStart(2, '0');
const addDays = (n) => new Date(Date.UTC(2027, 0, 1 + n)).toISOString().slice(0, 10);

/* ---------------- FOLDED and ids ---------------- */
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(SRC, 'data', 'folds.js'), 'utf8'), ctx);
const FOLDED = ctx.FOLDED;
const deads = Object.keys(FOLDED);
const mapId = id => { /* same chain walk + shadow rule as foldState */
  let cur = id, g = 0;
  while (has(FOLDED, cur) && g++ < 20) cur = FOLDED[cur];
  if (cur !== id) return cur;
  const t = id.indexOf('~');
  if (t > 0) { let k = id.slice(t + 1); g = 0; const r = k; while (has(FOLDED, k) && g++ < 20) k = FOLDED[k]; if (k !== r) return id.slice(0, t + 1) + k; }
  return id;
};
const finalKept = d => mapId(d);
const keptSet = new Set(deads.map(finalKept));
const groupOfKept = {}; // kept -> [deads in FOLDED order]
deads.forEach(d => { (groupOfKept[finalKept(d)] = groupOfKept[finalKept(d)] || []).push(d); });
const keptIds = Object.keys(groupOfKept);
const multiKept = keptIds.filter(k => groupOfKept[k].length >= 2);
const keptThatAreAlsoRemoved = keptIds.filter(k => has(FOLDED, k));
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
const SECTIONS = ['answers', 'flags', 'conf', 'srs', 'hl', 'notes', 'reports'];
const SHADOW = 'pedep-mf1~';

/* ---------------- seed builder ---------------- */
const posInGroup = {};
keptIds.forEach(k => groupOfKept[k].forEach((d, p) => { posInGroup[d] = p; }));
function deadSide(mode) { // everything that sits under a removed id
  const s = { answers: {}, flags: {}, conf: {}, sched: {}, srs: {}, days: {}, hl: {}, banks: {}, resumeByChapter: {}, notes: {}, reports: {},
    term: { id: 'y4s2', at: 1 }, updatedAt: 1000 };
  deads.forEach((d, i) => {
    s.answers[d] = { ok: i % 2 === 0, at: 100000 + i * 10, pick: i % 4 };
    s.flags[d] = i % 3 === 0;
    s.conf[d] = (i + posInGroup[d]) % 3;
    s.srs[d] = { lvl: i % 5, due: addDays(i) };
    s.hl[d] = [{ s: i % 7, e: (i % 7) + 5, c: 'ygpb'[i % 4] }];
    s.notes[d] = { txt: 'note-' + d, at: 200000 + i };
    s.reports[d] = { kind: 'k' + (i % 3), txt: 'rep-' + d, at: 300000 + i * 10 };
    s.resumeByChapter['rc-' + i] = { qid: d, sources: ['endpoint'], at: 1000 + i, finished: i % 2 === 0 };
    s.answers[SHADOW + d] = { ok: i % 2 === 1, at: 700000 + i, pick: 1 };
    s.flags[SHADOW + d] = i % 2 === 0;
  });
  /* a saved timed paper: u (lone removed id), da+db (two removed ids sharing one kept id), a control */
  const G = multiKept[0], da = groupOfKept[G][0], db = groupOfKept[G][1];
  const u = deads.find(d => groupOfKept[finalKept(d)].length === 1);
  const ids = mode === 'both' ? [u, da, G, db, ctlIds[0]] : [u, da, db, ctlIds[0]];
  const picked = mode === 'both' ? { [u]: 3, [da]: 2, [G]: 0, [db]: 1 } : { [u]: 3, [da]: 2, [db]: 1 };
  s.mockResume = { at: 5000, paper: { ids, i: ids.indexOf(db), title: 'Carry-over cloud/backup paper', t0: 1700000000000,
    exam: { end: 4102444800000, mins: 60, done: false, picked } } };
  return s;
}
function keptSide(mode) { // controls always; kept-id own records only in 'both'
  const s = { answers: {}, flags: {}, conf: {}, sched: {}, srs: {}, days: {}, hl: {}, banks: {}, resumeByChapter: {}, notes: {}, reports: {}, updatedAt: 1000 };
  ctlIds.forEach((id, j) => {
    s.answers[id] = { ok: j % 2 === 0, at: 900000 + j, pick: j % 4 };
    s.flags[id] = j % 2 === 1;
    s.conf[id] = j % 3;
    s.srs[id] = { lvl: j % 5, due: '2027-02-' + pad2(10 + j) };
    s.hl[id] = [{ s: 1, e: 4 + j, c: 'b' }];
    s.notes[id] = { txt: 'ctl-note-' + id, at: 910000 + j };
    s.reports[id] = { kind: 'ctl', txt: 'ctl-rep-' + id, at: 920000 + j };
  });
  s.resumeByChapter['rc-ctl'] = { qid: ctlIds[1], sources: ['house'], at: 5, finished: false };
  if (mode === 'both') keptIds.forEach((k, j) => {
    const i0 = deads.indexOf(groupOfKept[k][0]), early = j % 2 === 0;
    s.answers[k] = { ok: j % 2 === 0, at: 100000 + i0 * 10 + (early ? -5 : 5), pick: (j + 1) % 4 };
    s.flags[k] = j % 4 < 2;
    s.conf[k] = (j + 1) % 3;
    s.srs[k] = { lvl: 1, due: early ? '2026-12-15' : '2028-03-01' };
    s.hl[k] = j % 3 === 0 ? [] : [{ s: 20, e: 30, c: 'y' }];
    s.notes[k] = { txt: 'own-note-' + k, at: 150000 + j };
    s.reports[k] = { kind: 'own', txt: 'own-rep-' + k, at: 300000 + i0 * 10 + (early ? -5 : 5) };
  });
  return s;
}
function unionOf(a, b) { // a, b have disjoint keys by construction
  const u = clone(a);
  [...SECTIONS, 'resumeByChapter'].forEach(s => Object.assign(u[s], clone(b[s])));
  if (b.mockResume) u.mockResume = clone(b.mockResume);
  if (b.term) u.term = clone(b.term);
  u.updatedAt = Math.max(a.updatedAt, b.updatedAt);
  return u;
}

/* ---------------- scenarios ---------------- */
const BIG = 9000000000000;
function scenario(id, kind, mode, o) {
  o = o || {};
  const D = deadSide(mode), K = keptSide(mode);
  const sc = { id, kind, mode, variant: o.variant || '', ls: {}, union: null, freshBak: false };
  if (kind === 'cloud') {
    const loc = clone(K), cl = clone(D);
    if (o.localNewer) { loc.updatedAt = Date.now(); cl.updatedAt = 1000; } else { loc.updatedAt = 1000; cl.updatedAt = BIG; }
    sc.ls['wardround.v3.boot'] = JSON.stringify(loc);       // no term: enterProfile then asks the cloud (gate.js:727)
    if (o.legacy) sc.cloudLegacy = JSON.stringify(cl); else sc.cloudDoc = JSON.stringify(cl);
    sc.union = unionOf(loc, cl);
    sc.freshBak = true;
  } else if (kind === 'bak') {
    const U = unionOf(K, D); U.term = { id: 'y4s2', at: 1 };
    const at = 1700000000000;
    sc.ls['wardround.bak.boot'] = JSON.stringify({ v: 1, snaps: [{ at, day: '2026-10-01', json: JSON.stringify(U) }] });
    if (o.live === 'broken') sc.ls['wardround.v3.boot'] = '{"answers":{"x":';
    if (o.live === 'valid') sc.ls['wardround.v3.boot'] = JSON.stringify({ answers: {}, flags: {}, conf: {}, sched: {}, srs: {}, days: {}, hl: {}, banks: {}, resumeByChapter: {}, notes: {}, reports: {}, term: { id: 'y4s2', at: 1 }, updatedAt: 1 });
    if (o.restore) sc.restoreAt = at;
    sc.union = U; sc.freshBak = true;
  } else if (kind === 'file') {
    const loc = clone(K); loc.term = { id: 'y4s2', at: 1 }; loc.updatedAt = 1000;
    const fl = clone(D); fl.updatedAt = 2000;
    sc.ls['wardround.v3.boot'] = JSON.stringify(loc);
    sc.fileJson = JSON.stringify({ v: 2, saved: '2026-10-11T00:00:00.000Z', state: fl }, null, 2);
    sc.union = unionOf(loc, fl); sc.freshBak = true;
  }
  return sc;
}
const SCEN = [
  /* [scenario, negative-control-twin?] */
  scenario('a-doc-only', 'cloud', 'only', { variant: 'cloud doc holds removed ids, local holds nothing for them' }),
  scenario('a-legacy-only', 'cloud', 'only', { legacy: true, variant: 'legacy roster-level state holds removed ids (gate.js:293)' }),
  scenario('a-doc-both-localNewer', 'cloud', 'both', { localNewer: true, variant: 'local has kept-id progress and is the newer clock' }),
  scenario('a-doc-both-cloudNewer', 'cloud', 'both', { localNewer: false, variant: 'local has kept-id progress, cloud is the newer clock' }),
  scenario('b1-missing-only', 'bak', 'only', { variant: 'live key missing, snapshot rescue' }),
  scenario('b1-missing-both', 'bak', 'both', { variant: 'live key missing, snapshot rescue' }),
  scenario('b1-broken-both', 'bak', 'both', { live: 'broken', variant: 'live key unparseable, snapshot rescue' }),
  scenario('b1-restore-both', 'bak', 'both', { live: 'valid', restore: true, variant: 'bakRestore() button path, boot.js:183' }),
  scenario('b2-boot-only', 'file', 'only', { variant: 'importData() boot.js:273, file holds removed ids' }),
  scenario('b2-boot-both', 'file', 'both', { variant: 'importData() boot.js:273, local holds kept ids, file holds removed ids' }),
];
const NEG = ['a-doc-only', 'a-doc-both-localNewer', 'b1-missing-only', 'b1-missing-both', 'b2-boot-only', 'b2-boot-both'];

/* ---------------- page side ---------------- */
function pageDriver() {
  var SC = window.__SC, r = {};
  var wait = function (ms) { return new Promise(function (res) { setTimeout(res, ms); }); };
  window.addEventListener('load', function () { setTimeout(function () { (async function () {
    try {
      window.showGate = function () {};
      window.__writes = [];
      if (SC.kind === 'cloud') {
        var cfg = { doc: SC.cloudDoc || null, legacy: SC.cloudLegacy || null };
        var profRef = { kind: 'prof' };
        var rootRef = { kind: 'root', collection: function () { return { doc: function () { return profRef; } }; } };
        var fsx = {
          collection: function () { return { doc: function () { return rootRef; } }; },
          runTransaction: function (fn) {
            var tx = {
              get: function (ref) {
                return Promise.resolve(ref === rootRef
                  ? { exists: true, data: function () { var d = { profiles: [] }; if (cfg.legacy) d.state = cfg.legacy; return d; } }
                  : { exists: !!cfg.doc, data: function () { return { state: cfg.doc }; } });
              },
              set: function (ref, data) {
                window.__writes.push({ kind: ref.kind, state: data.state === undefined ? null : data.state });
                if (ref === profRef) cfg.doc = data.state; else cfg.legacy = null;
              }
            };
            return fn(tx);
          }
        };
        window.firebase = { firestore: function () { return fsx; } };
        window.cloudEnabled = function () { return true; };
        fbUser = { uid: 'u1', displayName: 'T' };
      }
      await Promise.resolve(enterProfile({ id: 'boot', name: 'Boot', av: 0, col: 0 }));
      await wait(800);
      r.memPre = JSON.stringify(S);
      r.livePre = localStorage.getItem('wardround.v3.boot');
      if (SC.restoreAt) { bakRestore(SC.restoreAt); await wait(800); }
      if (SC.kind === 'file') {
        window.confirm = function () { return true; };
        importData({ target: { files: [new Blob([SC.fileJson], { type: 'application/json' })], value: 'x' } });
        await wait(2000);
      }
      r.memMid = JSON.stringify(S);
      await save();
      await wait(2800);
      await wait(4500);
      r.memFinal = JSON.stringify(S);
      r.liveFinal = localStorage.getItem('wardround.v3.boot');
      r.bak = localStorage.getItem('wardround.bak.boot');
      r.writes = window.__writes;
      r.storageMode = storageMode;
      r.foldedInPage = (typeof FOLDED !== 'undefined') ? Object.keys(FOLDED).length : -1;
    } catch (e) { window.__errs.push('driver THREW: ' + e.message); }
    r.errs = window.__errs.slice(0, 40);
    var pre = document.createElement('pre'); pre.id = 'CCBOUT';
    pre.textContent = 'CCBB64:' + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + ':END';
    document.body.appendChild(pre); document.title = 'CCBREPORT';
  })(); }, 1200); });
}
function buildApp(sc, work, emptyFolded) {
  rmrf(work);
  copyDir(SRC, work);
  if (emptyFolded) fs.writeFileSync(path.join(work, 'data', 'folds.js'), 'var FOLDED = {};\n', 'utf8');
  const INDEX = path.join(work, 'index.html');
  let html = fs.readFileSync(INDEX, 'utf8');
  const safe = s => s.replace(/</g, '\\u003c');
  const scPage = { kind: sc.kind, restoreAt: sc.restoreAt || 0, fileJson: sc.fileJson || '', cloudDoc: sc.cloudDoc || '', cloudLegacy: sc.cloudLegacy || '' };
  const probe = [
    '<script>',
    'window.__errs=[];',
    'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.filename||"")+":"+(e.lineno||0));},true);',
    'window.addEventListener("unhandledrejection",function(e){window.__errs.push("REJECT: "+e.reason);});',
    '(function(){var ce=console.error;console.error=function(){window.__errs.push("console.error: "+Array.prototype.join.call(arguments," "));return ce.apply(console,arguments);};})();',
    'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
    'window.__SC=' + safe(JSON.stringify(scPage)) + ';',
    'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"boot",name:"Boot","av":0,"col":0}]));',
    'var LS=' + safe(JSON.stringify(sc.ls)) + ';for(var k in LS)localStorage.setItem(k,LS[k]);}catch(e){window.__errs.push("seed THREW: "+e.message);}',
    '</script>',
    '<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>',
  ].join('\n');
  const head = /<head[^>]*>/.exec(html);
  if (!head) throw new Error('no <head> in index.html');
  const at = head.index + head[0].length;
  html = html.slice(0, at) + '\n' + probe + '\n' + html.slice(at);
  html = html.replace('</body>', '<script>(' + pageDriver.toString() + ')();</script>\n</body>');
  fs.writeFileSync(INDEX, html, 'utf8');
  return INDEX;
}
function runPage(sc, emptyFolded) {
  const work = path.join(SCRATCH, 'work_' + path.basename(SRC) + (emptyFolded ? '_empty' : ''));
  const INDEX = buildApp(sc, work, emptyFolded);
  const url = 'file:///' + INDEX.replace(/\\/g, '/');
  let lastErr = '';
  for (let attempt = 1; attempt <= 3; attempt++) {
    const udd = path.join(SCRATCH, 'chrome_' + path.basename(SRC) + '_' + attempt);
    rmrf(udd);
    const args = ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run', '--disable-extensions',
      '--allow-file-access-from-files', '--window-size=1180,820', '--user-data-dir=' + udd, '--virtual-time-budget=40000', '--dump-dom', url];
    let dom = '';
    try { dom = execFileSync(browser, args, { encoding: 'utf8', maxBuffer: 512 * 1024 * 1024, timeout: 240000, stdio: ['ignore', 'pipe', 'pipe'] }); }
    catch (e) { lastErr = e.message; dom = e.stdout || ''; }
    const m = /CCBB64:([A-Za-z0-9+\/=]+):END/.exec(dom);
    if (m) { rmrf(work); return JSON.parse(Buffer.from(m[1], 'base64').toString('utf8')); }
    console.error('attempt ' + attempt + ' (' + sc.id + ') gave no report, retrying');
  }
  throw new Error('no report after 3 attempts: ' + lastErr);
}

/* ---------------- checking ---------------- */
const deadSet = new Set(deads);
function scanDead(raw) { // quoted exact id, or as a shadow suffix
  let n = 0;
  deads.forEach(d => { if (raw.includes('"' + d + '"') || raw.includes('~' + d + '"')) n++; });
  return n;
}
const at = o => (o && o.at) || 0;
function groupsOf(rec) {
  const g = {};
  Object.keys(rec || {}).forEach(k => { const m = mapId(k); (g[m] = g[m] || []).push(k); });
  return g;
}
function checkState(st, U, opt) {
  opt = opt || {};
  const R = { rules: { ok: 0, tot: 0, fail: [] }, multi: { ok: 0, tot: 0 }, keys: { ok: 0, tot: 0, fail: [] }, dead: scanDead(JSON.stringify(st)),
    ctl: { ok: 0, tot: 0 }, bySec: {}, mock: false, rc: { ok: 0, tot: 0 }, tally: {}, confNotWinner: 0, confExample: '' };
  const tally = (n) => { R.tally[n] = (R.tally[n] || 0) + 1; };
  const rec = s => (st[s] || {});
  SECTIONS.forEach(s => {
    const g = groupsOf(U[s]);
    const exp = Object.keys(g).sort(), got = Object.keys(rec(s)).sort();
    R.keys.tot++; if (canon(exp) === canon(got)) R.keys.ok++; else R.keys.fail.push(s + ' got ' + got.length + ' want ' + exp.length);
    Object.keys(g).forEach(m => {
      const keys = g[m], recs = keys.map(k => U[s][k]), others = keys.filter(k => k !== m);
      const isMulti = others.length >= 2;
      if (!others.length) { // untouched record (controls, or a kept id nothing folded into)
        R.ctl.tot++; if (has(rec(s), m) && canon(rec(s)[m]) === canon(U[s][m])) R.ctl.ok++; return;
      }
      const got1 = rec(s)[m]; let ok = has(rec(s), m);
      if (ok) {
        if (s === 'answers') { const w = recs.reduce((a, b) => at(b) > at(a) ? b : a); ok = canon(got1) === canon(w); if (keys.includes(m)) tally(canon(w) === canon(U[s][m]) ? 'answers kept-newer' : 'answers removed-newer'); }
        else if (s === 'flags') ok = got1 === recs.some(Boolean);
        else if (s === 'srs') { const w = recs.reduce((a, b) => b.due < a.due ? b : a); ok = canon(got1) === canon(w); if (keys.includes(m)) tally(canon(w) === canon(U[s][m]) ? 'srs kept-earlier' : 'srs removed-earlier'); }
        else if (s === 'reports') { const w = recs.reduce((a, b) => at(b) > at(a) ? b : a); ok = canon(got1) === canon(w); }
        else if (s === 'notes') {
          const want = Array.from(new Set(recs.map(x => x.txt))).sort(), have = Array.from(new Set(String(got1.txt).split('\n'))).sort();
          ok = canon(want) === canon(have) && got1.at === Math.max.apply(null, recs.map(at)) && String(got1.txt).split('\n').length === want.length;
        }
        else if (s === 'hl') {
          const own = keys.includes(m) ? U.hl[m] : null;
          if (own && own.length) { ok = canon(got1) === canon(own); tally('hl kept-kept'); }
          else { ok = others.map(k => U.hl[k]).filter(x => x && x.length).some(x => canon(x) === canon(got1)); tally('hl removed-filled'); }
        }
        else if (s === 'conf') {
          const aw = (U.answers && groupsOf(U.answers)[m]) || [];
          const wr = aw.map(k => U.answers[k]), wm = wr.length ? wr.reduce((a, b) => at(b) > at(a) ? b : a) : null;
          const wk = wm ? aw.find(k => U.answers[k] === wm) : null;
          if (wk && wk !== m) { // a removed id's answer won: conf must be one of the removed ids' confs
            ok = others.map(k => U.conf[k]).some(x => x === got1);
            if (others.length === 1) ok = ok && got1 === U.conf[others[0]];
            if (isMulti && got1 !== U.conf[wk]) { R.confNotWinner++; if (!R.confExample) R.confExample = m + ' (answer won by ' + wk + ' conf ' + U.conf[wk] + ', got ' + got1 + ')'; }
          } else if (keys.includes(m) && U.conf[m] !== undefined) ok = got1 === U.conf[m];
        }
      }
      R.rules.tot++; if (ok) R.rules.ok++; else { R.rules.fail.push(s + ':' + m); R.bySec[s] = (R.bySec[s] || 0) + 1; }
      if (isMulti) { R.multi.tot++; if (ok) R.multi.ok++; }
    });
  });
  /* resume pointers */
  Object.keys(U.resumeByChapter).forEach(c => {
    R.rc.tot++; const g = rec('resumeByChapter')[c];
    if (g && g.qid === mapId(U.resumeByChapter[c].qid) && canon(Object.assign({}, g, { qid: 0 })) === canon(Object.assign({}, U.resumeByChapter[c], { qid: 0 }))) R.rc.ok++;
  });
  /* mock paper */
  const mp = st.mockResume && st.mockResume.paper, up = U.mockResume.paper;
  if (mp) {
    const seen = {}, ids = []; up.ids.forEach(id => { const k = mapId(id); if (!seen[k]) { seen[k] = 1; ids.push(k); } });
    const pk = {}; const pkeys = Object.keys(up.exam.picked);
    pkeys.forEach(id => { if (mapId(id) === id) pk[id] = up.exam.picked[id]; });
    pkeys.forEach(id => { const k = mapId(id); if (k !== id && !has(pk, k) ) pk[k] = up.exam.picked[id]; });
    R.mock = canon(mp.ids) === canon(ids) && mp.i === ids.indexOf(mapId(up.ids[up.i])) && canon(mp.exam.picked) === canon(pk);
    R.mockGot = { ids: mp.ids.length, i: mp.i, picked: Object.keys(mp.exam.picked).length };
    R.mockWant = { ids: ids.length, i: ids.indexOf(mapId(up.ids[up.i])), picked: Object.keys(pk).length };
  }
  return R;
}
function viewLine(name, R) {
  /* core = items 1,3,4,5 (nothing left under a removed id, right key sets, controls untouched, resume + paper moved);
     rule = item 2 (both ids had progress: does the outcome equal the foldState rule) */
  const core = !!(R.dead || R.keys.ok !== R.keys.tot || R.ctl.ok !== R.ctl.tot || R.rc.ok !== R.rc.tot || !R.mock);
  const rule = R.rules.ok !== R.rules.tot;
  const bad = core || rule;
  return { bad, core, rule, text: name + ': removed ids left ' + R.dead + '/' + deads.length + ', rule ' + R.rules.ok + '/' + R.rules.tot + ' (multi-removed groups ' + R.multi.ok + '/' + R.multi.tot + '), key sets ' + R.keys.ok + '/' + R.keys.tot +
    ', controls ' + R.ctl.ok + '/' + R.ctl.tot + ', resume ' + R.rc.ok + '/' + R.rc.tot + ', paper ' + R.mock + (R.rules.fail.length ? ' misses by section ' + JSON.stringify(R.bySec) + ' first ' + R.rules.fail.slice(0, 3).join(' ') : '') + (R.keys.fail.length ? ' keys ' + R.keys.fail.slice(0, 2).join('; ') : '') };
}
function evaluate(sc, r) {
  const U = sc.union, views = [];
  const add = (name, json, expectFolded) => { if (!json) { views.push({ name, missing: true, bad: true, text: name + ': NOT PRESENT' }); return; }
    let st; try { st = JSON.parse(json); } catch (e) { views.push({ name, bad: true, text: name + ': UNPARSEABLE' }); return; }
    const R = checkState(st, U); const v = viewLine(name, R); v.R = R; views.push(v); };
  if (sc.kind !== 'file' && !sc.restoreAt) add('memory after profile entry', r.memPre);
  if (sc.kind === 'file' || sc.restoreAt) add('memory after the path ran', r.memMid);
  add('memory final', r.memFinal);
  add('localStorage live key (app write-back)', r.liveFinal);
  const extra = [];
  if (sc.kind === 'cloud') {
    const w = (r.writes || []).filter(x => x.kind === 'prof');
    extra.push('cloud pushes recorded: ' + w.length + (w.length ? '' : '  <-- NONE, stub did not run the push'));
    w.forEach((x, i) => add('cloud push payload #' + (i + 1), x.state));
    const rootW = (r.writes || []).filter(x => x.kind === 'root');
    rootW.forEach(x => { if (x.state) { const n = scanDead(x.state); extra.push('root doc write holds removed ids: ' + n); if (n) views.push({ bad: true, text: 'root write: removed ids ' + n }); } });
    if (!w.length) views.push({ bad: true, text: 'no cloud push happened' });
  }
  /* newest snapshot the app took by itself */
  let box = null; try { box = JSON.parse(r.bak || 'null'); } catch (e) {}
  const snaps = (box && box.snaps) || [];
  const fresh = snaps.length && (snaps[0].at > 1700000000001) ? snaps[0] : null;
  if (fresh) add('newest automatic snapshot (wardround.bak.boot, snaps[0])', fresh.json);
  else views.push({ bad: true, text: 'newest automatic snapshot: none taken in the window (snaps ' + snaps.length + ')' });
  if (sc.kind === 'bak') extra.push('original rescued snapshot still in storage holds removed ids: ' + (snaps.length ? scanDead(snaps[snaps.length - 1].json) : 'n/a') + ' (by design: bakNewest leaves it alone, boot.js:111; it is folded again on every restore)');
  const other = []; // anything else the page stored? only the keys we know
  const errs = (r.errs || []);
  const bad = views.some(v => v.bad) || errs.length > 0;
  const coreBad = views.some(v => v.core === undefined ? v.bad : v.core) || errs.length > 0;
  return { views, extra, errs, bad, coreBad, foldedInPage: r.foldedInPage, storageMode: r.storageMode };
}

/* ---------------- run ---------------- */
const out = [];
const say = s => { out.push(s); console.log(s); };
say('CARRY-OVER cloud+backup on ' + SRC);
say('FOLDED: ' + deads.length + ' removed -> ' + keptIds.length + ' kept; kept ids receiving 2+ removed ids: ' + multiKept.length + ' (largest ' + Math.max.apply(null, keptIds.map(k => groupOfKept[k].length)) + '); kept ids that are themselves removed (chains): ' + keptThatAreAlsoRemoved.length + '; controls ' + ctlIds.join(','));
say('stores checked (everything foldState touches + generic scan): ' + SECTIONS.join(', ') + ', resumeByChapter[*].qid, mockResume.paper.ids/.i/.exam.picked, shadow ids "' + SHADOW + '<id>" (answers+flags); removed-id scan runs over the whole serialised state, so any other store keyed by id is caught too');
say('rule used (read from foldState, storage.js:383-441): answers strictly later at wins; conf follows when a removed id answer wins; flags OR; srs earlier due; hl kept non-empty else removed; notes both texts joined, at = max; reports later at; resume qid remapped; paper ids deduped, place follows, kept pick beats removed');
const results = {};
const summary = [];
let hardFail = false;
const toRun = SCEN.filter(sc => !ONLY || ONLY.includes(sc.id));
function runOne(sc, empty) {
  let r;
  try { r = runPage(sc, empty); } catch (e) { return { err: e.message }; }
  return { r, ev: evaluate(sc, r) };
}
for (const sc of toRun) {
  const res = runOne(sc, false);
  if (res.err) { say('FAIL ' + sc.id + ': RUN FAILED ' + res.err); hardFail = true; results[sc.id] = 'FAIL'; continue; }
  const ev = res.ev;
  say((ev.bad ? 'FAIL' + (ev.coreBad ? ' (core: removed id left / lost)' : ' (core items 1,3,4,5 ok; item 2 collision rule differs)') : 'PASS') + ' ' + sc.id + '  [' + sc.variant + ']  FOLDED in page ' + ev.foldedInPage + ', storageMode ' + ev.storageMode);
  ev.views.forEach(v => say('    ' + (v.bad ? 'x ' : 'ok ') + v.text));
  ev.extra.forEach(t => say('    info ' + t));
  if (ev.errs.length) say('    console errors: ' + ev.errs.slice(0, 3).join(' | '));
  const R = (ev.views.find(v => v.R) || {}).R;
  if (R && Object.keys(R.tally).length) say('    outcomes in first view: ' + Object.keys(R.tally).sort().map(k => k + ' ' + R.tally[k]).join(', '));
  const cw = ev.views.find(v => v.R && v.R.confNotWinner);
  if (cw) say('    note (observation, not a fail by itself): in ' + cw.R.confNotWinner + ' groups where 2 removed ids fold into one kept id, conf is not the conf of the winning answer, e.g. ' + cw.R.confExample + ' (storage.js:395 overwrites on every removed id once deadWon is set)');
  results[sc.id] = ev.bad ? 'FAIL' : 'PASS'; if (ev.bad) hardFail = true;
}
say('--- negative controls: same input, FOLDED emptied in the scratch copy; each MUST fail ---');
let negBroken = false;
for (const id of NEG) {
  if (ONLY && !ONLY.includes(id)) continue;
  const sc = SCEN.find(x => x.id === id);
  const res = runOne(sc, true);
  if (res.err) { say('NEG ' + id + ': RUN FAILED ' + res.err); negBroken = true; continue; }
  const dead = res.ev.views.filter(v => v.R).map(v => v.R.dead);
  const maxDead = dead.length ? Math.max.apply(null, dead) : 0;
  const ok = res.ev.bad && maxDead > 0;
  say((ok ? 'NEG-OK ' : 'NEG-BROKEN-PROBE ') + id + ': with FOLDED empty the test ' + (res.ev.bad ? 'failed' : 'PASSED') + ', removed ids surviving in up to ' + maxDead + '/' + deads.length + ' per view');
  if (!ok) negBroken = true;
}
const verdict = (hardFail || negBroken) ? 'CARRY-OVER-CLOUD-BACKUP FAIL' : 'CARRY-OVER-CLOUD-BACKUP PASS';
say(verdict);
fs.writeFileSync(path.join(SCRATCH, 'result_' + path.basename(SRC) + '.txt'), out.join('\n') + '\n');
process.exit(hardFail || negBroken ? 1 : 0);
