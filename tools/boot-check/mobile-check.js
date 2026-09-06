/* mobile-check.js — does the app fit on a phone?
 *
 * Walks every view at three viewport widths and reports horizontal overflow,
 * which is the mobile failure that actually reaches students: a page that
 * scrolls sideways, a row that pushes past the screen edge, a tap target too
 * small to hit. It reports numbers, not pictures, because a number can be
 * checked in a diff and a screenshot cannot.
 *
 * Numbers are the first pass, never the whole test. Anything this flags gets
 * looked at with --shot, because no numeric check has ever caught a crop and
 * none of them catches ugly either.
 *
 * Harness rules inherited from boot-check.js, each one a wasted run otherwise:
 *  - Copy the WHOLE app/ to a work dir; the data files must sit beside index.
 *  - ⚠️ The Chrome --user-data-dir must not sit under a path containing "--".
 *    The session scratchpad path does, and both browsers die there with
 *    "Multiple targets are not supported".
 *  - Stub showGate at parse time AND keep it stubbed — the app assigns its own.
 *  - Nothing renders until enterProfile() runs. Without it every count is zero,
 *    which reads exactly like a broken app.
 *  - Kill animation and force .reveal visible; IntersectionObserver never fires
 *    under virtual time, so cards stay at opacity 0 and measure as collapsed.
 *
 *   node tools/boot-check/mobile-check.js            all widths, numbers only
 *   node tools/boot-check/mobile-check.js --shot     also write PNGs
 *   node tools/boot-check/mobile-check.js --selftest prove it can report failure
 */
const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = fs.existsSync(CHROME) ? CHROME : EDGE;
const SHOT = process.argv.includes('--shot');
const SELFTEST = process.argv.includes('--selftest');

const WORK = path.join(os.tmpdir(), 'herophilus_mobile');
if (WORK.includes('--')) {
  console.error('REFUSING: work path contains "--" — Chrome dies with "Multiple targets are not supported".');
  process.exit(1);
}

/* The three that matter: the narrowest phone still in real use, a common
   Android, and portrait tablet where the rail starts to reappear. */
const VIEWPORTS = [
  { name: '360x800', w: 360, h: 800 },
  { name: '390x844', w: 390, h: 844 },
  { name: '768x1024', w: 768, h: 1024 },
];

const VIEWS = ['home', 'module', 'quiz', 'review', 'flagged', 'theory', 'schedule', 'session', 'mock', 'moved'];

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

const probe = [
  '<script>',
  'window.__errs=[];',
  'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.filename||"")+":"+(e.lineno||0));},true);',
  'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
  'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"mob",name:"Mob","av":0,"col":0}]));}catch(e){}',
  '</script>',
  '<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>',
].join('\n');
const headAt = html.indexOf('<head>');
if (headAt < 0) { console.error('no <head> in index.html'); process.exit(1); }
html = html.slice(0, headAt + 6) + '\n' + probe + '\n' + html.slice(headAt + 6);

/* SELFTEST widens one element past the viewport on purpose. A check that has
   never been seen failing is not evidence that it can fail. */
const selftestCss = SELFTEST
  ? '<style>#page::after{content:"";display:block;width:2000px;height:4px}</style>'
  : '';

const report = [
  '<script>',
  'window.addEventListener("load",function(){setTimeout(function(){',
  '  var p=Promise.resolve();',
  '  try{p=enterProfile({id:"mob",name:"Mob",av:0,col:0});}catch(e){window.__errs.push("enterProfile THREW: "+e.message);}',
  '  Promise.resolve(p).catch(function(e){window.__errs.push("enterProfile REJECTED: "+e);}).then(function(){setTimeout(walk,700);});',
  '},1200);});',
  'function widest(){',
  /* Report the offender by name, not just that something overflowed — a bare
     "the page is 40px too wide" costs an afternoon of bisecting by hand. */
  '  var vw=document.documentElement.clientWidth, worst=null, wmax=0;',
  '  var all=document.querySelectorAll("body *");',
  '  for(var i=0;i<all.length;i++){',
  '    var el=all[i]; if(!el.getClientRects().length) continue;',
  '    var r=el.getBoundingClientRect();',
  '    if(r.right>vw+1 && r.right-vw>wmax){ wmax=r.right-vw;',
  '      worst=(el.tagName.toLowerCase())+(el.className&&typeof el.className==="string"?"."+el.className.trim().split(/\\s+/).join("."):"")+" +"+Math.round(r.right-vw)+"px";',
  '    }',
  '  }',
  '  return worst;',
  '}',
  'function tinyTaps(){',
  /* 44px is the long-standing minimum comfortable touch target. Count, don't
     fail on it — a few small controls are a judgement call, not a defect. */
  '  var n=0, els=document.querySelectorAll("button,a,.opt,.ch-row,.conf-b");',
  '  for(var i=0;i<els.length;i++){ var r=els[i].getBoundingClientRect();',
  '    if(r.width>0&&r.height>0&&r.height<44) n++; }',
  '  return n;',
  '}',
  'function walk(){',
  '  var out={vw:document.documentElement.clientWidth,views:{}};',
  '  var names=' + JSON.stringify(VIEWS) + ';',
  '  var firstMod=(typeof MODULES!=="undefined"&&MODULES.length)?MODULES[0].id:null;',
  '  var someQ=(typeof QUESTIONS!=="undefined"&&QUESTIONS.length)?QUESTIONS[0]:null;',
  '  for(var i=0;i<names.length;i++){',
  '    var n=names[i];',
  '    try{',
  '      if(n==="module"&&firstMod) go({name:"module",id:firstMod});',
  '      else if(n==="quiz"&&someQ){ startQuiz([someQ.id],"Probe"); }',
  '      else go({name:n});',
  '      out.views[n]={scrollW:document.documentElement.scrollWidth,over:widest(),tiny:tinyTaps()};',
  '    }catch(e){ out.views[n]="THREW "+e.message; }',
  '  }',
  '  try{go({name:"home"});}catch(e){}',
  '  out.errs=window.__errs.slice(0,20);',
  '  document.title="MOBILEREPORT "+JSON.stringify(out);',
  '}',
  '</script>',
].join('\n');
html = html.replace('</body>', selftestCss + report + '\n</body>');
fs.writeFileSync(INDEX, html, 'utf8');

const url = 'file:///' + INDEX.replace(/\\/g, '/');
let bad = 0;

for (const vp of VIEWPORTS) {
  let dom = '', lastErr = '';
  /* The silent ~1-in-3 launch failure is real; retry rather than report a
     browser problem as an app problem. */
  for (let attempt = 1; attempt <= 3; attempt++) {
    const udd = path.join(WORK, 'chrome_profile_' + vp.name + '_' + attempt);
    const args = [
      '--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run',
      '--disable-extensions', '--allow-file-access-from-files',
      '--virtual-time-budget=20000', '--user-data-dir=' + udd,
      '--window-size=' + vp.w + ',' + vp.h,
      '--dump-dom', url,
    ];
    const r = spawnSync(browser, args, { encoding: 'utf8', maxBuffer: 1 << 28 });
    dom = r.stdout || '';
    lastErr = (r.stderr || '').split('\n').slice(0, 3).join(' ');
    if (dom.includes('MOBILEREPORT')) break;
  }
  const m = dom.match(/<title>MOBILEREPORT ([\s\S]*?)<\/title>/);
  if (!m) {
    console.log(vp.name + '  NO REPORT  ' + lastErr);
    bad++;
    continue;
  }
  const rep = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
  console.log('\n' + vp.name + '  (measured viewport ' + rep.vw + 'px)');
  for (const [name, v] of Object.entries(rep.views)) {
    if (typeof v === 'string') { console.log('  ' + name.padEnd(10) + v); bad++; continue; }
    const overflow = v.scrollW > rep.vw + 1;
    if (overflow) bad++;
    console.log('  ' + name.padEnd(10)
      + (overflow ? 'OVERFLOWS  scrollWidth ' + v.scrollW : 'fits')
      + (v.over ? '   widest: ' + v.over : '')
      + (v.tiny ? '   ' + v.tiny + ' controls under 44px' : ''));
  }
  if (rep.errs && rep.errs.length) { console.log('  console: ' + rep.errs.join(' | ')); bad++; }

  if (SHOT) {
    const png = path.join(WORK, 'home_' + vp.name + '.png');
    spawnSync(browser, [
      '--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run',
      '--allow-file-access-from-files', '--virtual-time-budget=20000',
      '--user-data-dir=' + path.join(WORK, 'shotprof_' + vp.name),
      '--window-size=' + vp.w + ',' + vp.h, '--screenshot=' + png, url,
    ], { encoding: 'utf8', maxBuffer: 1 << 28 });
    if (fs.existsSync(png)) console.log('  shot: ' + png);
  }
}

console.log('\n' + (bad === 0 ? 'PASS — no view overflows at any width' : bad + ' finding(s)'));
if (SELFTEST) {
  console.log(bad > 0
    ? 'SELFTEST OK — the check reports overflow when overflow exists'
    : 'SELFTEST FAILED — a 2000px element went unreported; this probe proves nothing');
  process.exit(bad > 0 ? 0 : 1);
}
process.exit(bad === 0 ? 0 : 1);
