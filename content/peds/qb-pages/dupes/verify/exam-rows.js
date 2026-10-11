/* Pediatrics model-exam rows check, headless Chrome, read-only.
 *
 *   node content/peds/qb-pages/dupes/verify/exam-rows.js
 *
 * For 820x1180 and 1180x820 it checks: the 8 exam rows are in the Pediatrics
 * module view; the count each row shows equals the length of that exam's list in
 * EXAMS_PEDS after mapping ids through FOLDED; every id resolves to a live
 * question; 0 console errors. One screenshot per size goes to
 * D:\scratch 2026\peds-exam-rows\.
 *
 * Harness rules copied from tools/boot-check/boot-check.js (it exports nothing):
 * whole app/ copied to a double-dash-free temp dir, probe + gate stub injected at
 * the top of <head>, profile seeded, animation killed, .reveal forced visible,
 * term y4s2 seeded, one Chrome at a time, fresh user-data-dir, 3 attempts.
 * Writes only to the OS temp dir and the screenshot folder. Touches no app file.
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..', '..', '..', '..');
const SHOTS = 'D:\\scratch 2026\\peds-exam-rows';
const EXAM_IDS = ['pedep-mf1', 'pedep-mf2', 'pedep-mf3', 'pedep-mf4',
  'pedep2-mf1', 'pedep2-mf2', 'pedep2-mf3', 'pedep2-mf4'];
const SIZES = [[820, 1180], [1180, 820]];
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = fs.existsSync(CHROME) ? CHROME : EDGE;

const WORK = path.join(os.tmpdir(), 'herophilus_examrows');
if (WORK.includes('--')) { console.error('REFUSING: workspace path contains "--"'); process.exit(1); }
function rmrf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
}

/* ---- node side: expected counts straight from the data files (vm, no grep) ---- */
const { load } = require(path.join(ROOT, 'tools', 'validate', 'validate.js'));
const { sandbox: S0, files } = load(path.join(ROOT, 'app'));
const EXAMS = S0.EXAMS_PEDS || {};
const FOLDED = S0.FOLDED || {};
const live = new Set();
for (const f of files) {
  const src = fs.readFileSync(path.join(ROOT, 'app', 'data', f), 'utf8');
  for (const m of src.matchAll(/\bvar\s+((?:Q|C)_[A-Z0-9_]+)\s*=/g)) {
    const v = S0[m[1]];
    if (Array.isArray(v)) for (let i = 0; i < v.length; i++) if (i in v && v[i] && v[i].id) live.add(v[i].id);
  }
}
const fold = id => { let g = 0; while (Object.prototype.hasOwnProperty.call(FOLDED, id) && g++ < 20) id = FOLDED[id]; return id; };
const expected = {};
for (const id of EXAM_IDS) {
  const raw = EXAMS[id] || [];
  const mapped = raw.map(fold);
  expected[id] = {
    declared: id in EXAMS, raw: raw.length, mapped: mapped.length,
    distinct: new Set(mapped).size,
    dead: mapped.filter(x => !live.has(x)),
  };
}
console.log('node side: EXAMS_PEDS keys ' + Object.keys(EXAMS).length + ' | FOLDED size ' + Object.keys(FOLDED).length +
  ' | live ids ' + live.size);
EXAM_IDS.forEach(id => { const e = expected[id];
  console.log('  ' + id.padEnd(11) + ' list ' + e.raw + ' mapped ' + e.mapped + ' distinct ' + e.distinct +
    ' dead ' + e.dead.length + (e.dead.length ? ' [' + e.dead.slice(0, 5).join(',') + ']' : '')); });

/* ---- page side ---- */
function buildApp(mode) {
  rmrf(WORK);
  const APP = path.join(WORK, 'app');
  copyDir(path.join(ROOT, 'app'), APP);
  const INDEX = path.join(APP, 'index.html');
  let html = fs.readFileSync(INDEX, 'utf8');
  const probe = [
    '<script>',
    'window.__errs=[];',
    'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.filename||"")+":"+(e.lineno||0));},true);',
    'window.addEventListener("unhandledrejection",function(e){window.__errs.push("REJECT: "+e.reason);});',
    '(function(){var ce=console.error;console.error=function(){window.__errs.push("console.error: "+Array.prototype.join.call(arguments," "));return ce.apply(console,arguments);};})();',
    'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
    'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"boot",name:"Boot","av":0,"col":0}]));}catch(e){}',
    '</script>',
    '<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>',
  ].join('\n');
  const headAt = html.indexOf('<head>');
  if (headAt < 0) throw new Error('no <head> in index.html');
  html = html.slice(0, headAt + 6) + '\n' + probe + '\n' + html.slice(headAt + 6);
  const IDS = JSON.stringify(EXAM_IDS);
  const report = [
    '<script>',
    'window.addEventListener("load",function(){setTimeout(function(){',
    // the parse-time stub does not survive: function showGate is declared later and overwrites it, and boot() calls showGate() after its SDK race, covering the app. Re-stub here.
    '  window.showGate=function(){};',
    '  var p=Promise.resolve();',
    '  try{p=enterProfile({id:"boot",name:"Boot",av:0,col:0});}catch(e){window.__errs.push("enterProfile THREW: "+e.message);}',
    '  Promise.resolve(p).catch(function(e){window.__errs.push("enterProfile REJECTED: "+e);}).then(function(){',
    '    try{',
    '      var T=null;for(var i=0;i<TERMS.length;i++){if(TERMS[i]&&TERMS[i].id==="y4s2"){T=TERMS[i];break;}}',
    '      if(!T){window.__errs.push("term seed: y4s2 not in TERMS");}else{',
    '        var prev=null;try{if(S&&S.term)prev=S.term;}catch(_){}',
    '        S.term={id:T.id,at:Math.max(Date.now(),prev?prev.at+1:0)};save();',
    '        if(typeof termEntryPending!=="undefined"&&termEntryPending&&typeof finishProfileEntry==="function"){finishProfileEntry();}',
    '        else{if(typeof activateTerm==="function")activateTerm(T.id);if(typeof render==="function")render();}',
    '      }',
    '    }catch(e){window.__errs.push("term seed THREW: "+e.message);}',
    '    setTimeout(measure,600);',
    '  });',
    '},1200);});',
    'function measure(){',
    '  var r={rows:{}};',
    '  try{go({name:"module",id:"pediatrics"});}catch(e){window.__errs.push("go pediatrics THREW: "+e.message);}',
    '  try{',
    '    r.questions=QUESTIONS.length;',
    '    var ids=' + IDS + ';',
    '    var btns=Array.prototype.slice.call(document.querySelectorAll(".ch-row"));',
    '    r.chRows=btns.length;',
    '    ids.forEach(function(id){',
    '      var b=btns.filter(function(x){return (x.getAttribute("onclick")||"").indexOf("startChapter(\'"+id+"\')")>=0;})[0];',
    '      var o={present:!!b};',
    '      if(b){var c=b.querySelector(".ch-count");o.countText=c?c.textContent.trim():"";',
    '        var m=/(\\d+)\\s*\\/\\s*(\\d+)/.exec(o.countText);o.shown=m?+m[2]:null;',
    '        var n=b.querySelector(".ch-name");o.name=n?n.textContent.trim():"";',
    '        b.scrollIntoView({block:"center"});',
    '        var rc=b.getBoundingClientRect();var cx=rc.left+rc.width/2,cy=rc.top+rc.height/2;',
    '        var top=(cy>=0&&cy<innerHeight&&cx>=0&&cx<innerWidth)?document.elementFromPoint(cx,cy):null;',
    '        o.visible=rc.width>0&&rc.height>0&&!!top&&b.contains(top);o.disabled=!!b.disabled;}',
    '      var list=(typeof EXAMS_PEDS!=="undefined"&&EXAMS_PEDS[id])||[];',
    '      var miss=[];list.forEach(function(x){var g=0;while(typeof FOLDED!=="undefined"&&Object.prototype.hasOwnProperty.call(FOLDED,x)&&g++<20)x=FOLDED[x];if(!QBYID.get(x))miss.push(x);});',
    '      o.pageMissing=miss.length;o.pageMissingIds=miss.slice(0,5);',
    '      o.shadows=(SHADOWS_BY_EXAM[id]||[]).length;',
    '      r.rows[id]=o;',
    '    });',
    // bring the exam group on screen for the screenshot
    '    var first=btns.filter(function(x){return (x.getAttribute("onclick")||"").indexOf("startChapter(\'pedep-mf1\')")>=0;})[0];',
    '    if(first){var h=first.previousElementSibling;(h&&h.classList.contains("grouphdr")?h:first).scrollIntoView({block:"start"});}',
    '    var g=document.getElementById("gate");',
    '    if(!g||!g.classList.contains("hide"))window.__errs.push("GATE STILL SHOWING");',
    '    r.framed=ids.map(function(id){var x=btns.filter(function(y){return (y.getAttribute("onclick")||"").indexOf("startChapter(\'"+id+"\')")>=0;})[0];',
    '      if(!x)return 0;var q=x.getBoundingClientRect();return (q.top>=0&&q.bottom<=innerHeight)?1:0;}).join("");',
    '  }catch(e){window.__errs.push("measure THREW: "+e.message);}',
    '  r.errs=window.__errs.slice(0,40);',
    '  document.title="EXAMREPORT "+JSON.stringify(r);',
    '}',
    '</script>',
  ].join('\n');
  html = html.replace('</body>', report + '\n</body>');
  fs.writeFileSync(INDEX, html, 'utf8');
  return INDEX;
}

function runChrome(INDEX, w, h, shotPath) {
  const url = 'file:///' + INDEX.replace(/\\/g, '/');
  let dom = '', lastErr = '';
  for (let attempt = 1; attempt <= 3; attempt++) {
    const udd = path.join(WORK, 'chrome_' + w + 'x' + h + '_' + (shotPath ? 's' : 'd') + attempt);
    if (shotPath && fs.existsSync(shotPath)) fs.rmSync(shotPath);
    const args = ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run',
      '--disable-extensions', '--allow-file-access-from-files', '--hide-scrollbars',
      '--window-size=' + w + ',' + h, '--user-data-dir=' + udd];
    /* dump-dom: virtual time (as boot-check). screenshot: virtual time captured a blank
       single-colour frame (2026-10-11), so it runs in real time and waits --timeout ms. */
    if (shotPath) args.push('--timeout=8000', '--screenshot=' + shotPath);
    else args.push('--virtual-time-budget=20000', '--dump-dom');
    args.push(url);
    try {
      dom = execFileSync(browser, args, { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, timeout: 180000, stdio: ['ignore', 'pipe', 'pipe'] });
    } catch (e) { lastErr = e.message; dom = e.stdout || ''; }
    if (shotPath) { if (fs.existsSync(shotPath) && fs.statSync(shotPath).size > 50000) return { ok: true }; }
    else if (dom && dom.includes('EXAMREPORT')) return { ok: true, dom };
    console.error('attempt ' + attempt + ' (' + w + 'x' + h + (shotPath ? ' shot' : ' dom') + ') failed, retrying');
  }
  return { ok: false, err: lastErr };
}

fs.mkdirSync(SHOTS, { recursive: true });
let fails = 0;
const INDEX = buildApp();
for (const [w, h] of SIZES) {
  const tag = w + 'x' + h;
  const d = runChrome(INDEX, w, h, null);
  if (!d.ok) { console.log(tag + ' NO REPORT after 3 attempts: ' + d.err); fails++; continue; }
  const m = d.dom.match(/EXAMREPORT (\{.*?\})<\/title>/s);
  const r = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
  let present = 0, visible = 0, countOk = 0, resolveOk = 0;
  const notes = [];
  EXAM_IDS.forEach(id => {
    const o = r.rows[id] || {}, e = expected[id];
    if (o.present) present++; else notes.push(id + ' ROW MISSING');
    if (o.present && o.visible) visible++; else if (o.present) notes.push(id + ' not visible');
    if (o.present && o.shown === e.mapped) countOk++;
    else notes.push(id + ' shows ' + (o.present ? o.shown + ' (' + o.countText + ')' : 'n/a') + ' expected ' + e.mapped);
    if (e.dead.length === 0 && o.pageMissing === 0 && o.shadows === e.mapped) resolveOk++;
    else notes.push(id + ' resolve: nodeDead ' + e.dead.length + ' pageMissing ' + o.pageMissing + ' shadows ' + o.shadows + ' of ' + e.mapped);
  });
  const errs = r.errs || [];
  const shot = path.join(SHOTS, 'peds-exam-rows-' + tag + '.png');
  const s = runChrome(INDEX, w, h, shot);
  if (!s.ok) notes.push('SCREENSHOT FAILED');
  const bad = (8 - present) + (8 - visible) + (8 - countOk) + (8 - resolveOk) + errs.length + (s.ok ? 0 : 1);
  fails += bad;
  console.log(tag + ' rows ' + present + '/8 visible ' + visible + '/8 counts-match ' + countOk + '/8 resolve ' + resolveOk +
    '/8 errors ' + errs.length + ' framed ' + r.framed + ' QUESTIONS ' + r.questions + ' shown [' +
    EXAM_IDS.map(id => (r.rows[id] || {}).shown).join(',') + '] shot ' + (s.ok ? shot : 'NONE'));
  notes.forEach(n => console.log('    ! ' + n));
  errs.forEach(e => console.log('    ! console: ' + e));
}
rmrf(WORK);
console.log(fails ? 'EXAM-ROWS FAIL ' + fails : 'EXAM-ROWS OK');
process.exit(fails ? 1 : 0);
