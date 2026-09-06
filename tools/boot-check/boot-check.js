/* Boot the app from file:// under headless Chrome and report console errors.
 *
 *   node tools/boot-check/boot-check.js
 *
 * There was no boot harness in the repo — every session rebuilt one in a
 * scratchpad and threw it away. This is that harness, kept.
 *
 * The rules below are each a wasted run otherwise (CLAUDE.md §7):
 *
 *  - Copy the WHOLE app/ folder. A partial copy boots and lies.
 *  - ⚠️ The Chrome --user-data-dir must not sit under a path containing "--".
 *    The session scratchpad path does (D--claude-os-...), and both Chrome and
 *    Edge die there with "Multiple targets are not supported". This script
 *    therefore builds its own workspace under a double-dash-free temp path and
 *    refuses to run if that path still contains one.
 *  - Stub showGate at PARSE time, before the app's own script runs, or the boot
 *    stops at the gate and every later check reports nothing.
 *  - Seed a profile so the app has state to render.
 *  - Kill animations and force .reveal{opacity:1} — IntersectionObserver never
 *    fires under virtual time, so unrevealed content reads as missing content.
 *  - One Chrome at a time, fresh profile dir, and retry: roughly one run in
 *    three fails silently with no DOM at all.
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
const SELFTEST = process.argv.includes('--selftest');

/* --dir=<path> boots something other than app\. The reason it exists: the
   folder that actually ships is dist\, built by tools\build-launch.js with the
   locked subjects' data files removed, and until now nothing had ever booted
   the thing being uploaded — only the source it was built from. A build that
   orphans a global the aggregators do not guard would look identical here. */
const SRC = (() => {
  const a = process.argv.find(x => x.startsWith('--dir='));
  return a ? path.resolve(ROOT, a.slice(6)) : path.join(ROOT, 'app');
})();

// A double dash anywhere in the workspace path kills both browsers.
const WORK = path.join(os.tmpdir(), 'herophilus_boot');
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
copyDir(SRC, APP);
if (SRC !== path.join(ROOT, 'app')) console.log('source    ' + path.relative(ROOT, SRC));

// The probe goes in FIRST, before the app's own <head> scripts, so it catches a
// parse-time throw in a data file as well as a runtime one.
const INDEX = path.join(APP, 'index.html');
let html = fs.readFileSync(INDEX, 'utf8');

const probe = [
  '<script>',
  'window.__errs=[];',
  'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.filename||"")+":"+(e.lineno||0));},true);',
  'window.addEventListener("unhandledrejection",function(e){window.__errs.push("REJECT: "+e.reason);});',
  '(function(){var ce=console.error;console.error=function(){window.__errs.push("console.error: "+Array.prototype.join.call(arguments," "));return ce.apply(console,arguments);};})();',
  // Stub the gate before the app defines it, and re-stub after, since the app
  // assigns its own. A defineProperty setter keeps ours on top either way.
  'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
  // Seed a local profile before the app reads localStorage. Nothing renders on
  // the home view until a profile is entered, so without this the DOM is empty
  // and every element count reads zero — which looks exactly like a broken app.
  'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"boot",name:"Boot","av":0,"col":0}]));}catch(e){}',
  '</script>',
  '<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>',
].join('\n');

const headAt = html.indexOf('<head>');
if (headAt < 0) { console.error('no <head> in index.html'); process.exit(1); }
html = html.slice(0, headAt + 6) + '\n' + probe + '\n' + html.slice(headAt + 6);

// The report runs after load, reads what the app actually rendered, and parks
// the result where --dump-dom will show it.
const report = [
  '<script>',
  'window.addEventListener("load",function(){setTimeout(function(){',
  // enterProfile() is what paints the home view; it is async, so measure after.
  '  var p=Promise.resolve();',
  '  try{p=enterProfile({id:"boot",name:"Boot",av:0,col:0});}catch(e){window.__errs.push("enterProfile THREW: "+e.message);}',
  // Content is now scoped to a chosen term and QUESTIONS/THEORY start empty. A
  // seeded profile alone measures an empty app — render() returns early while
  // termEntryPending is true — which reads as catastrophic loss of all questions
  // and theory chapters. Mirror chooseTerm()'s tail for the term whose content
  // is published (id "y4s2") so the harness measures what the user actually sees
  // after picking a semester. Guard every new symbol with typeof so the harness
  // still runs against a pre-term build and reports honestly rather than
  // throwing on the first reference.
  '  Promise.resolve(p).catch(function(e){window.__errs.push("enterProfile REJECTED: "+e);}).then(function(){',
  '    try{',
  '      if(typeof TERMS==="undefined"){window.__errs.push("term seed: TERMS undefined");setTimeout(measure,600);return;}',
  '      if(typeof S==="undefined"){window.__errs.push("term seed: S undefined");setTimeout(measure,600);return;}',
  '      if(typeof save!=="function"){window.__errs.push("term seed: save not a function");setTimeout(measure,600);return;}',
  '      var T=null;',
  '      for(var i=0;i<TERMS.length;i++){if(TERMS[i]&&TERMS[i].id==="y4s2"){T=TERMS[i];break;}}',
  '      if(!T){window.__errs.push("term seed: y4s2 not in TERMS");setTimeout(measure,600);return;}',
  '      var prev=null;',
  '      try{if(S&&S.term)prev=S.term;}catch(_){}',
  '      S.term={id:T.id,at:Math.max(Date.now(),prev?prev.at+1:0)};',
  '      save();',
  '      if(typeof termEntryPending!=="undefined"&&termEntryPending&&typeof finishProfileEntry==="function"){finishProfileEntry();}',
  '      else{if(typeof activateTerm==="function")activateTerm(T.id);if(typeof render==="function")render();}',
  '    }catch(e){window.__errs.push("term seed THREW: "+e.message);}',
  '    setTimeout(measure,600);',
  '  });',
  '},1200);});',
  'function measure(){',
  // r.errs is filled at the END of this function, never here. The module walk
  // below pushes into window.__errs, so a snapshot taken now reports zero errors
  // for a walk that threw — which is exactly how this harness once passed a
  // broken app. Capture last, after everything that can fail has run.
  '  var r={};',
  '  try{r.questions=(typeof QUESTIONS!=="undefined")?QUESTIONS.length:-1;}catch(e){r.questions="THREW "+e.message;}',
  // THEORY is an OBJECT keyed by chapter id, not an array — .length is undefined.
  '  try{r.theory=(typeof THEORY!=="undefined")?Object.keys(THEORY).length:-1;}catch(e){r.theory="THREW "+e.message;}',
  '  try{r.modules=(typeof MODULES!=="undefined")?MODULES.length:-1;}catch(e){r.modules="THREW "+e.message;}',
  // Chapters are nested TWO deep: module -> groups[] -> chapters[].
  '  try{r.chapters=(typeof MODULES!=="undefined")?MODULES.reduce(function(a,m){return a+m.groups.reduce(function(k,g){return k+g.chapters.length;},0);},0):-1;}catch(e){r.chapters="THREW "+e.message;}',
  '  try{r.ophtho=(typeof Q_OPHTHO!=="undefined")?Q_OPHTHO.length:-1;}catch(e){r.ophtho="THREW "+e.message;}',
  '  r.modCards=document.querySelectorAll(".mod-name").length;',
  // Chapter rows only exist inside a module view, so open each module in turn.
  // A disabled row is an EMPTY chapter, which is deliberate — count both.
  // --selftest makes the module walk throw on purpose. A harness that has never
  // been seen failing is not evidence that it can fail: this is how we check.
  SELFTEST ? '  (function(){var g=go;go=function(v){if(v&&v.name==="module")throw new Error("selftest injected fault");return g(v);};})();' : '',
  '  r.chapRows=0; r.chapLive=0; r.perMod={};',
  '  try{MODULES.forEach(function(m){go({name:"module",id:m.id});',
  '    var rows=document.querySelectorAll(".ch-row");',
  '    r.perMod[m.id]=rows.length; r.chapRows+=rows.length;',
  '    r.chapLive+=document.querySelectorAll(".ch-row:not([disabled])").length;});',
  '    go({name:"home"});}catch(e){window.__errs.push("module walk THREW: "+e.message);}',
  '  r.errs=window.__errs.slice(0,40);',
  '  document.title="BOOTREPORT "+JSON.stringify(r);',
  '}',
  '</script>',
].join('\n');
html = html.replace('</body>', report + '\n</body>');
fs.writeFileSync(INDEX, html, 'utf8');

// Seed a profile into a first-run localStorage. file:// origins do not share
// storage, so the app starts empty; the gate stub is what carries the boot.

const url = 'file:///' + INDEX.replace(/\\/g, '/');
let dom = '', lastErr = '';
for (let attempt = 1; attempt <= 3; attempt++) {
  const udd = path.join(WORK, 'chrome_profile_' + attempt);
  try {
    dom = execFileSync(browser, [
      '--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run',
      '--disable-extensions', '--allow-file-access-from-files',
      '--virtual-time-budget=20000', '--user-data-dir=' + udd,
      '--dump-dom', url,
    ], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, timeout: 180000 });
  } catch (e) { lastErr = e.message; dom = (e.stdout || ''); }
  if (dom && dom.includes('BOOTREPORT')) break;
  console.error('attempt ' + attempt + ': no report in DOM (' + dom.length + ' bytes) — retrying');
}

const m = dom.match(/BOOTREPORT (\{.*?\})<\/title>/s);
if (!m) {
  console.error('NO BOOT REPORT after 3 attempts. dom ' + dom.length + ' bytes. last error: ' + lastErr);
  fs.writeFileSync(path.join(WORK, 'dump.html'), dom, 'utf8');
  console.error('dom written to ' + path.join(WORK, 'dump.html'));
  process.exit(1);
}
const r = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
console.log('browser   ' + path.basename(browser));
console.log('QUESTIONS ' + r.questions + '   THEORY ' + r.theory + '   MODULES ' + r.modules +
  '   chapters ' + r.chapters);
console.log('Q_OPHTHO  ' + r.ophtho + '   module cards in DOM ' + r.modCards);
console.log('chapter rows rendered ' + r.chapRows + ' (' + r.chapLive + ' with questions, ' +
  (r.chapRows - r.chapLive) + ' empty — empty is deliberate)');
console.log('  per module: ' + Object.keys(r.perMod || {}).map(k => k + ' ' + r.perMod[k]).join(' · '));
console.log('console errors: ' + r.errs.length);
r.errs.forEach(e => console.log('  ! ' + e));
process.exit(r.errs.length ? 1 : 0);
