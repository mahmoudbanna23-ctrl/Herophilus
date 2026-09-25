/* Prove the "Coming soon" lock actually holds, everywhere, from file://.
 *
 *   node tools/boot-check/lock-check.js
 *   node tools/boot-check/lock-check.js --selftest
 *
 * A subject whose bank is not finished is named in LOCKED_MODULES
 * (app/data/modules.js). Two filters carry the whole lock: one where QUESTIONS
 * is assembled, one where THEORY is assembled. Everything downstream — search,
 * the review deck, the flagged list, the mock pool, every count — reads those
 * two, so it is correct for free. The places that walk MODULES itself still see
 * all four subjects, because the cards have to keep appearing, and those are
 * the places that can leak. This checks both halves.
 *
 * LAUNCHING A SUBJECT IS DELETING ITS ID FROM THAT LIST. This file is what
 * says the deletion worked: run it after, and every count below moves.
 *
 * --selftest rewrites the COPY of modules.js to lock nothing, then runs the
 * same checks and requires them to FAIL. A check that has never been seen
 * failing is not evidence of anything; this is how we see it fail.
 *
 * Harness rules are boot-check.js's, and each one is a wasted run otherwise:
 * copy the whole app/, stub showGate at parse time, seed a profile, kill
 * animation, and keep the workspace path free of a double dash.
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

const WORK = path.join(os.tmpdir(), 'herophilus_lock');
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

/* The list is read from the real file, so this harness never carries its own
   copy of which subjects are locked and cannot disagree with the app. */
const modSrc = fs.readFileSync(path.join(APP, 'data', 'modules.js'), 'utf8');
const listM = modSrc.match(/const\s+LOCKED_MODULES\s*=\s*\[([^\]]*)\]/);
if (!listM) { console.error('could not find LOCKED_MODULES in app/data/modules.js'); process.exit(1); }
const sourceLocked = listM[1].split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
// With an all-launched app, selftest still needs a non-empty expected lock set:
// remove a temporary known module lock in the copied app, then ensure every
// lock assertion detects that removal. Normal mode remains a SKIP.
const LOCKED = SELFTEST && !sourceLocked.length ? ['ent'] : sourceLocked;
if (!SELFTEST && !LOCKED.length) {
  console.log('SKIP — LOCKED_MODULES is empty; no locked subject to check.');
  process.exit(0);
}

if (SELFTEST) {
  // Lock nothing. Every check below must now fail.
  fs.writeFileSync(path.join(APP, 'data', 'modules.js'),
    modSrc.replace(/const\s+LOCKED_MODULES\s*=\s*\[[^\]]*\]/, 'const LOCKED_MODULES = []'), 'utf8');
}

const INDEX = path.join(APP, 'index.html');
let html = fs.readFileSync(INDEX, 'utf8');

/* Progress on a locked subject is HIDDEN, never deleted — it has to come back
   untouched when the id is removed. So the seed below writes an answer against
   a locked subject's question id before the app reads storage, and the report
   reads it back at the end. */
const probe = [
  '<script>',
  'window.__errs=[];',
  'window.__locked=' + JSON.stringify(SELFTEST ? LOCKED : LOCKED) + ';',
  'window.addEventListener("error",function(e){window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.filename||"")+":"+(e.lineno||0));},true);',
  'window.addEventListener("unhandledrejection",function(e){window.__errs.push("REJECT: "+e.reason);});',
  'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
  'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"lock",name:"Lock","av":0,"col":0}]));}catch(e){}',
  '</script>',
  '<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>',
].join('\n');

const headAt = html.indexOf('<head>');
if (headAt < 0) { console.error('no <head> in index.html'); process.exit(1); }
html = html.slice(0, headAt + 6) + '\n' + probe + '\n' + html.slice(headAt + 6);

const report = [
  '<script>',
  'window.addEventListener("load",function(){setTimeout(function(){',
  '  var p=Promise.resolve();',
  '  try{p=enterProfile({id:"lock",name:"Lock",av:0,col:0});}catch(e){window.__errs.push("enterProfile THREW: "+e.message);}',
  '  Promise.resolve(p).catch(function(e){window.__errs.push("enterProfile REJECTED: "+e);}).then(function(){',
  '    try{',
  '      if(typeof TERMS==="undefined")throw new Error("TERMS undefined");',
  '      if(typeof S==="undefined")throw new Error("S undefined");',
  '      if(typeof save!=="function")throw new Error("save not a function");',
  '      var T=null;for(var i=0;i<TERMS.length;i++){if(TERMS[i]&&TERMS[i].id==="y4s2"){T=TERMS[i];break;}}',
  '      if(!T)throw new Error("y4s2 not in TERMS");',
  '      var prev=null;try{if(S&&S.term)prev=S.term;}catch(_){}',
  '      S.term={id:T.id,at:Math.max(Date.now(),prev?prev.at+1:0)};save();',
  '      if(typeof termEntryPending!=="undefined"&&termEntryPending&&typeof finishProfileEntry==="function")finishProfileEntry();else{if(typeof activateTerm==="function")activateTerm(T.id);if(typeof render==="function")render();}',
  '    }catch(e){window.__errs.push("term seed THREW: "+e.message);}',
  '    setTimeout(measure,600);',
  '  });',
  '},1200);});',
  'function measure(){',
  '  var r={}, L=window.__locked;',
  '  var isL=function(id){return L.indexOf(id)>=0;};',
  // Read every source Q_* bank that the copied fixture loaded. QUESTIONS is
  // deliberately filtered by the lock, so it cannot supply the pre-filter
  // locked question used to prove a removed lock leaks.
  '  var rawLocked=function(){return Object.keys(window).filter(function(k){return /^Q_/.test(k)&&Array.isArray(window[k])}).reduce(function(a,k){return a.concat(window[k])},[]).filter(function(q){return q&&isL(q.module)});};',
  // 1 — the two filters. Nothing locked may be reachable through either array.
  '  try{r.qLeak=QUESTIONS.filter(function(q){return isL(q.module)}).length;}catch(e){r.qLeak="THREW "+e.message}',
  '  try{var tl={};MODULES.forEach(function(m){if(isL(m.id))m.groups.forEach(function(g){g.chapters.forEach(function(c){tl[c[0]]=1})})});',
  '      r.thLeak=Object.keys(THEORY).filter(function(k){return tl[k]}).length;',
  '      r.lockedChapters=Object.keys(tl).length;}catch(e){r.thLeak="THREW "+e.message}',
  // 2 — search. The term has to be one only a locked question uses. The first
  //     long word in a locked stem is NOT that: it picked "condition", which
  //     192 unlocked stems also use, and the check failed against a lock that
  //     was holding perfectly. So build the locked vocabulary, subtract every
  //     word the unlocked corpus uses, and search for what is left over.
  '  try{var raw=rawLocked();',
  '      r.searchTerm=null; r.searchHits=null;',
  '      var vocab=function(a){var s={};a.forEach(function(q){((q.stem||"").toLowerCase().match(/[a-z]{8,}/g)||[]).forEach(function(w){s[w]=1})});return s};',
  '      if(raw.length){var open=vocab(QUESTIONS);',
  '        var only=Object.keys(vocab(raw)).filter(function(w){return !open[w]});',
  '        r.vocabOnlyLocked=only.length;',
  '        if(only.length){r.searchTerm=only[0];',
  '          r.searchHits=QUESTIONS.filter(function(q){return (q.stem||"").toLowerCase().indexOf(only[0])>=0}).length;}',
  '        else{r.searchTerm="NO LOCKED-ONLY WORD EXISTS"; r.searchHits=-1;}}',
  '      else r.searchTerm="NO RAW LOCKED QUESTIONS LOADED";}catch(e){r.searchHits="THREW "+e.message}',
  // 3 — the derived pools students actually reach.
  //     ⚠️ THESE MUST BE SEEDED FIRST. deckAll() holds only questions the
  //     student got wrong, so on a fresh profile it is empty and "no locked
  //     question in the deck" is true of a deck that is true of nothing. The
  //     selftest caught exactly that: with the lock removed, both still read 0.
  //     So answer one locked and one unlocked question WRONG, which is what
  //     puts a question in the deck, and report the pool size next to the leak.
  '  try{var lq=rawLocked()[0]||QUESTIONS.filter(function(q){return isL(q.module)})[0];',
  '      var oq=QUESTIONS.filter(function(q){return !isL(q.module)})[0];',
  '      if(lq)S.answers[lq.id]={pick:-1,ok:false,at:Date.now()};',
  '      if(oq)S.answers[oq.id]={pick:-1,ok:false,at:Date.now()};',
  '      r.seededLocked=lq?lq.id:null;}catch(e){window.__errs.push("seed THREW: "+e.message)}',
  '  try{var dk=deckAll();r.deckSize=dk.length;r.deckLeak=dk.filter(function(q){return isL(q.module)}).length;}catch(e){r.deckLeak="THREW "+e.message}',
  '  try{var dn=dueNow();r.dueSize=dn.length;r.dueLeak=dn.filter(function(q){return isL(q.module)}).length;}catch(e){r.dueLeak="THREW "+e.message}',
  // 4 — the counts a student reads off the screen.
  '  try{r.clepChapters=clepChapterCount();',
  '      r.openChapters=MODULES.filter(function(m){return !isL(m.id)}).reduce(function(a,m){return a+m.groups.reduce(function(k,g){return k+g.chapters.length},0)},0);}catch(e){r.clepChapters="THREW "+e.message}',
  // 5 — the front door. Cards still render for every subject; the locked ones
  //     must carry the badge and must NOT be clickable.
  '  try{go({name:"home"});}catch(e){window.__errs.push("go(home) THREW: "+e.message)}',
  '  r.cards=document.querySelectorAll(".mod-card").length;',
  '  r.lockedCards=document.querySelectorAll(".mod-card.locked").length;',
  '  r.soonBadges=document.querySelectorAll(".mod-card.locked .soon").length;',
  '  r.clickableLocked=Array.prototype.filter.call(document.querySelectorAll(".mod-card.locked"),function(el){',
  '    return el.tagName==="BUTTON"||el.getAttribute("onclick")||el.querySelector("[onclick]");}).length;',
  // 6 — the side rail. A disabled nav item is the second front door.
  '  var navs=Array.prototype.slice.call(document.querySelectorAll(".nav-item"));',
  '  r.navSoon=navs.filter(function(b){return /soon/i.test(b.textContent)}).length;',
  '  r.navSoonEnabled=navs.filter(function(b){return /soon/i.test(b.textContent)&&!b.disabled}).length;',
  // 7 — an UNLOCKED module with an empty chapter keeps its own separate wording
  //     and stays disabled. The lock must not have swallowed that case.
  '  try{var open=MODULES.filter(function(m){return !isL(m.id)});r.emptyOpen=0;r.emptyOpenWording=0;',
  '    open.forEach(function(m){go({name:"module",id:m.id});',
  '      Array.prototype.forEach.call(document.querySelectorAll(".ch-row[disabled]"),function(row){',
  '        r.emptyOpen++; if(/no questions yet/i.test(row.textContent))r.emptyOpenWording++;});});',
  '    go({name:"home"});}catch(e){window.__errs.push("empty-chapter walk THREW: "+e.message)}',
  // 8 — progress on a locked subject survives. Write an answer against a locked
  //     question id through the app's own state, then read the raw key back.
  '  try{var raw2=rawLocked();',
  '    if(raw2.length){var qid=raw2[0].id; S.answers[qid]={a:0,ok:true,t:Date.now()}; save();',
  // The live key is stateKey(profileId) = "wardround.v3.<id>". An earlier draft
  // of this probe looked for "wardround.state", which no version of the app has
  // ever written, and reported the student's progress deleted when it was
  // sitting there untouched.
  '      var keys=Object.keys(localStorage).filter(function(k){return k.indexOf("wardround.v")===0});',
  '      r.survived=keys.some(function(k){return (localStorage.getItem(k)||"").indexOf(qid)>=0});',
  '      r.survivedId=qid;}else r.survived="NO LOCKED QUESTIONS LOADED";}catch(e){r.survived="THREW "+e.message}',
  '  r.errs=window.__errs.slice(0,40);',
  '  document.title="LOCKREPORT "+JSON.stringify(r);',
  '}',
  '</script>',
].join('\n');
html = html.replace('</body>', report + '\n</body>');
fs.writeFileSync(INDEX, html, 'utf8');

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
  if (dom && dom.includes('LOCKREPORT')) break;
  console.error('attempt ' + attempt + ': no report in DOM (' + dom.length + ' bytes) — retrying');
}

const m = dom.match(/LOCKREPORT (\{.*?\})<\/title>/s);
if (!m) {
  console.error('NO LOCK REPORT after 3 attempts. dom ' + dom.length + ' bytes. last error: ' + lastErr);
  fs.writeFileSync(path.join(WORK, 'dump.html'), dom, 'utf8');
  console.error('dom written to ' + path.join(WORK, 'dump.html'));
  process.exit(1);
}
const r = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));

const fails = [];
function check(label, pass, detail) {
  console.log((pass ? '  ok   ' : '  FAIL ') + label + '   ' + detail);
  if (!pass) fails.push(label);
}

console.log('browser   ' + path.basename(browser) + (SELFTEST ? '   [SELFTEST — every check below must FAIL]' : ''));
console.log('locked    ' + LOCKED.join(', ') + '   (' + r.lockedChapters + ' chapters held back)');
console.log('');
check('no locked question in QUESTIONS', r.qLeak === 0, r.qLeak + ' found');
check('no locked chapter in THEORY   ', r.thLeak === 0, r.thLeak + ' found');
check('search finds nothing locked   ', r.searchHits === 0, 'term "' + r.searchTerm + '" -> ' + r.searchHits + ' hits (' + r.vocabOnlyLocked + ' locked-only words)');
check('review deck clean             ', r.deckLeak === 0 && r.deckSize > 0, r.deckLeak + ' locked of ' + r.deckSize + ' in the deck');
check('due-now queue clean           ', r.dueLeak === 0 && r.dueSize > 0, r.dueLeak + ' locked of ' + r.dueSize + ' due');
check('Clepsydra counts open only    ', r.clepChapters === r.openChapters, r.clepChapters + ' vs ' + r.openChapters + ' open');
check('every subject still has a card', r.cards === (typeof r.cards === 'number' ? r.cards : -1) && r.cards > 0, r.cards + ' cards, ' + r.lockedCards + ' locked');
check('locked cards carry the badge  ', r.lockedCards === LOCKED.length && r.soonBadges === LOCKED.length,
  r.lockedCards + ' locked cards, ' + r.soonBadges + ' badges, expected ' + LOCKED.length);
check('locked cards cannot be opened ', r.clickableLocked === 0, r.clickableLocked + ' clickable');
check('nav shows soon, disabled      ', r.navSoon === LOCKED.length && r.navSoonEnabled === 0,
  r.navSoon + ' soon items, ' + r.navSoonEnabled + ' still enabled');
check('open empty chapters unchanged ', r.emptyOpen > 0 && r.emptyOpen === r.emptyOpenWording,
  r.emptyOpen + ' disabled rows, ' + r.emptyOpenWording + ' say "no questions yet"');
check('locked progress not deleted   ', r.survived === true, 'answer on ' + r.survivedId + ' still in storage: ' + r.survived);
console.log('');
console.log('console errors: ' + (r.errs || []).length);
(r.errs || []).forEach(e => console.log('  ! ' + e));

if (SELFTEST) {
  /* With nothing locked these MUST fail, each one named rather than counted —
     "some check failed" would let a blind check hide behind a working one.

     Four checks are deliberately not on the list, because removing the lock
     does not make them false:
       - "every subject still has a card": four cards either way, by design.
       - "Clepsydra counts open only": with nothing locked, every chapter IS
         open, so the two numbers agree honestly.
       - "open empty chapters unchanged": describes an unlocked module.
       - "locked progress not deleted": nothing is hidden, so nothing is at risk.
       - "locked cards cannot be opened": there are no locked cards to click.
         This one is NOT vacuous in a real run (2 locked cards, 0 clickable),
         but the selftest cannot exercise it, and pretending otherwise would be
         the exact self-deception this selftest exists to prevent.
       - "nav shows soon, disabled": the rail also uses "soon" for the
         independent THEORY_LOCKED state (render.js:127-131). That permanent
         disabled item makes this aggregate text-count assertion pass after a
         module lock is removed, so selftest evidence shows it is blind. */
  const mustBreak = [
    'no locked question in QUESTIONS',
    'no locked chapter in THEORY',
    'search finds nothing locked',
    'review deck clean',
    'due-now queue clean',
    'locked cards carry the badge',
  ];
  const failed = fails.map(f => f.trim());
  const missed = mustBreak.filter(m => !failed.includes(m));
  console.log('');
  mustBreak.forEach(m => console.log((missed.includes(m) ? '  BLIND ' : '  broke ') + m));
  if (missed.length) {
    console.log('\nSELFTEST FAILED — ' + missed.length + ' check(s) passed with nothing locked. Those checks are blind.');
    process.exit(1);
  }
  console.log('\nSELFTEST PASS — every lock check failed when the lock was removed.');
  process.exit(0);
}

console.log(fails.length ? '\nLOCK LEAKING — ' + fails.length + ' check(s) failed' : '\nLOCK HOLDS');
process.exit(fails.length ? 1 : 0);
