/* Does the keyboard work, and does it stop working where it should?
 *
 *   node kbd-probe.js            positive run
 *   FAULT=nomodal node ...       removes the overlay guard
 *   FAULT=nofocus node ...       removes the focus restore after pick()
 *   FAULT=nomore  node ...       restores the inert "+N more"
 *   FAULT=nokeys  node ...       removes the listbox keyboard listeners
 *   FAULT=oldbak  node ...       restores the snaps[0]-only bakNewest
 *
 * Same harness rules as tools/boot-check/boot-check.js — whole app copied, gate
 * stubbed at parse time, a profile and a term seeded, and a Chrome profile
 * directory on a path with no double dash in it.
 *
 * ⚠️ element.click() dispatches with detail 0, which is the SAME signal a real
 * keyboard Enter gives. A mouse click is therefore simulated with an explicit
 * MouseEvent carrying detail 1 — a .click() would prove nothing about the
 * mouse path.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const os = require('os');

const ROOT = path.resolve(__dirname, '..', '..');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser = fs.existsSync(CHROME) ? CHROME : EDGE;

/* ⚠️ Underscores, not dashes: headless Chrome refuses to start when its
   --user-data-dir sits under a path containing a double dash, and the session
   scratchpad's name contains one. */
const WORK = path.join(os.tmpdir(), 'herophilus_kbd');
if (WORK.includes('--')) { console.error('REFUSING: workspace path contains "--"'); process.exit(1); }

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
function must(before, after, name) {
  if (html.indexOf(before) < 0) { console.error('FAULT ' + name + ': anchor not found — ' + before.slice(0, 70)); process.exit(1); }
  html = html.replace(before, after);
}

const FAULT = process.env.FAULT || '';
if (FAULT === 'nomodal') {
  must("  if($('modalBg').classList.contains('show')){\n    if(e.key==='Escape'){closeModal();return}\n    return;\n  }", '', 'nomodal');
}
if (FAULT === 'nofocus') {
  must("  if(byKey){\n    const btn=document.querySelector('.opts .opt:nth-child('+(i+1)+')');\n    if(btn&&btn.focus)btn.focus();\n  }", '', 'nofocus');
}
if (FAULT === 'nomore') {
  must("if(j==='more'){doSearch.all=true;doSearch();return}", "if(j==='more'){doSearch();return}", 'nomore');
}
if (FAULT === 'nokeys') {
  const at = html.indexOf("$('results').addEventListener('keydown',e=>{");
  if (at < 0) { console.error('FAULT nokeys: anchor not found'); process.exit(1); }
  const end = html.indexOf('\n});', at);
  html = html.slice(0, at) + html.slice(end + 4);
}
if (FAULT === 'oldbak') {
  const at = html.indexOf('  const box=bakRead();\n  const snaps=box.snaps||[];');
  if (at < 0) { console.error('FAULT oldbak: anchor not found'); process.exit(1); }
  const end = html.indexOf('  return null;\n}', at);
  html = html.slice(0, at) +
    '  const box=bakRead();\n  const s=box.snaps[0];\n  if(!s)return null;\n  try{ return {at:s.at,state:JSON.parse(s.json)} }catch(e){ return null }\n}' +
    html.slice(end + 16);
}
if (FAULT) console.error('FAULT INJECTED: ' + FAULT + ' (failures below are the point)');

const probe = [
  '<script>',
  'window.__errs=[];',
  'window.addEventListener("error",function(e){if(e.target&&e.target.tagName==="IMG")return;window.__errs.push("ERROR: "+(e.message||"")+" @ "+(e.filename||"")+":"+(e.lineno||0));},true);',
  'window.addEventListener("unhandledrejection",function(e){window.__errs.push("REJECT: "+e.reason);});',
  'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
  'try{localStorage.setItem("wardround.profiles",JSON.stringify([{id:"boot",name:"Boot","av":0,"col":0}]));}catch(e){}',
  '</script>',
  '<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>',
].join('\n');
const headAt = html.indexOf('<head>');
html = html.slice(0, headAt + 6) + '\n' + probe + '\n' + html.slice(headAt + 6);

const report = [
  '<script>',
  'window.__out={checks:[],notes:[]};',
  /* ⚠️ The comparison is JSON, and JSON.stringify(anElement) is "{}" for EVERY
     element — document.body included. An identity check written as ok(label,
     document.activeElement, theButton) therefore passes no matter where focus
     is, which is exactly the shape of check the focus fixes need. Element
     identity goes through same() and is reported as a boolean plus a note
     naming what focus actually landed on. */
  'function ok(label,got,want){window.__out.checks.push({label:label,got:got,want:want,pass:JSON.stringify(got)===JSON.stringify(want)});}',
  'function same(a,b){return a===b;}',
  'function note(k,v){window.__out.notes.push(k+": "+v);}',
  /* A keydown on document.body: the handler bails on INPUT/TEXTAREA/SELECT, so
     the target has to be something else for the page shortcuts to be reached. */
  'function key(k,el){var t=el||document.body;t.dispatchEvent(new KeyboardEvent("keydown",{key:k,bubbles:true,cancelable:true}));}',
  'function mouseClick(el){el.dispatchEvent(new MouseEvent("click",{bubbles:true,cancelable:true,detail:1}));}',
  'function active(){var a=document.activeElement;return a?(a.tagName+(a.className?"."+String(a.className).split(" ")[0]:"")):"none";}',

  'window.addEventListener("load",function(){setTimeout(function(){',
  '  var p=Promise.resolve();',
  '  try{p=enterProfile({id:"boot",name:"Boot",av:0,col:0});}catch(e){window.__errs.push("enterProfile THREW: "+e.message);}',
  '  Promise.resolve(p).catch(function(e){window.__errs.push("enterProfile REJECTED: "+e);}).then(function(){',
  '    try{',
  '      var T=null;for(var i=0;i<TERMS.length;i++){if(TERMS[i].id==="y4s2"){T=TERMS[i];break;}}',
  '      S.term={id:T.id,at:Date.now()};save();',
  '      if(typeof termEntryPending!=="undefined"&&termEntryPending)finishProfileEntry();',
  '      else{activateTerm(T.id);render();}',
  '    }catch(e){window.__errs.push("term seed THREW: "+e.message);}',
  '    setTimeout(stage1,900);',
  '  });',
  '},1200);});',

  /* ---- 1. The regression check: with nothing open, the shortcuts still work. ---- */
  'function stage1(){',
  ' try{',
  '  startQuiz(["enthd-ear-1","enthd-ear-2"],"kbd probe");',
  '  note("options on the first question",document.querySelectorAll(".opts .opt").length);',
  '  ok("the quiz opened with options",document.querySelectorAll(".opts .opt").length>1,true);',
  '  var before=JSON.stringify(S.answers);',
  '  key("B");',
  '  ok("a letter key still picks an option",Q.sel,1);',
  '  key("A");',
  '  ok("a second letter key still moves the choice",Q.sel,0);',
  '  var themeBefore=document.documentElement.getAttribute("data-theme");',
  '  key("t");',
  '  ok("T still toggles the theme",document.documentElement.getAttribute("data-theme")!==themeBefore,true);',
  '  key("t");',
  '  key("Enter");',
  '  ok("Enter still reveals the answer",Q.shown,true);',
  '  ok("revealing recorded the answer",!!S.answers["enthd-ear-1"],true);',
  '  key("ArrowRight");',
  '  ok("ArrowRight still moves to the next question",Q.i,1);',
  '  key("ArrowLeft");',
  '  ok("ArrowLeft still moves back",Q.i,0);',
  /* The explanation, the pens and the slash are the rest of the shortcut set the
     overlay guard sits above; a guard placed one line too high would silence
     these instead of only the modal case. */
  '  var head=document.querySelector(".ex-head");',
  '  ok("the revealed question has an explanation head",!!head,true);',
  '  var openBefore=head.classList.contains("open");',
  '  key("E");',
  '  ok("E still toggles the explanation",document.querySelector(".ex-head").classList.contains("open"),!openBefore);',
  /* armed starts at PENS[0][0], so pressing 1 first would toggle the yellow pen
     OFF and a check wanting it on would fail against a healthy app. Green first,
     then yellow. */
  '  key("2");',
  '  ok("2 still arms the second pen",armed,PENS[1][0]);',
  '  key("1");',
  '  ok("1 still arms the first pen",armed,PENS[0][0]);',
  '  key("0");',
  '  ok("0 still arms the eraser",armed,"er");',
  '  key("0");',
  '  ok("pressing the same pen again disarms it",armed,null);',
  '  document.body.focus();',
  '  key("/");',
  '  ok("slash still puts the cursor in the search box",document.activeElement.id,"search");',
  '  document.getElementById("search").blur();',
  ' }catch(e){window.__errs.push("STAGE1 THREW: "+e.message+" @ "+(e.stack||"").split("\\n")[1]);}',
  '  setTimeout(stage2,500);',
  '}',

  /* ---- 2. With a modal open the page underneath must go silent. ---- */
  'function stage2(){',
  ' try{',
  '  startQuiz(["enthd-ear-3"],"kbd probe modal");',
  '  ok("a fresh question starts unanswered",Q.sel,null);',
  '  showShortcuts();',
  '  ok("the modal is open",document.getElementById("modalBg").classList.contains("show"),true);',
  '  var answersBefore=JSON.stringify(S.answers);',
  '  key("B");',
  '  ok("a letter key does not pick while the modal is open",Q.sel,null);',
  '  ok("and nothing was written to storage",JSON.stringify(S.answers),answersBefore);',
  '  var themeBefore=document.documentElement.getAttribute("data-theme");',
  '  key("t");',
  '  ok("the theme key is also held back",document.documentElement.getAttribute("data-theme"),themeBefore);',
  '  key("Escape");',
  '  ok("Escape still closes the modal",document.getElementById("modalBg").classList.contains("show"),false);',
  '  key("B");',
  '  ok("the shortcuts come back once the modal is closed",Q.sel,1);',
  ' }catch(e){window.__errs.push("STAGE2 THREW: "+e.message+" @ "+(e.stack||"").split("\\n")[1]);}',
  '  setTimeout(stage3,500);',
  '}',

  /* ---- 3. The search dropdown from the keyboard, and the "+N more" control. ---- */
  'function stage3(){',
  ' try{',
  '  var s=document.getElementById("search"), box=document.getElementById("results");',
  '  s.focus(); s.value="ear"; s.dispatchEvent(new Event("input",{bubbles:true}));',
  '  var n=box.querySelectorAll(".res-item").length;',
  '  note("rows in the dropdown",n);',
  '  ok("the dropdown opened with results",box.classList.contains("show")&&n>0,true);',
  '  ok("the results are real buttons",box.querySelector(".res-item").tagName,"BUTTON");',
  '  ok("the input announces an open listbox",s.getAttribute("aria-expanded"),"true");',
  '  key("ArrowDown",s);',
  '  ok("ArrowDown moves focus into the dropdown",document.activeElement.classList.contains("res-item"),true);',
  '  key("ArrowDown",document.activeElement);',
  '  ok("ArrowDown moves on to the second row",same(document.activeElement,box.querySelectorAll(".res-item")[1]),true);',
  '  key("ArrowUp",document.activeElement);',
  '  ok("ArrowUp moves back",same(document.activeElement,box.querySelectorAll(".res-item")[0]),true);',
  '  key("ArrowUp",document.activeElement);',
  '  ok("ArrowUp from the first row wraps to the last",same(document.activeElement,box.querySelectorAll(".res-item")[box.querySelectorAll(".res-item").length-1]),true);',
  '  key("Home",document.activeElement);',
  '  ok("Home returns to the first row",same(document.activeElement,box.querySelectorAll(".res-item")[0]),true);',
  /* The "+N more" row is the one opencode left inert. */
  '  var more=box.querySelector(".res-more");',
  '  note("the +N more row",more?more.textContent.trim():"absent");',
  '  ok("there is a +N more row to test",!!more,true);',
  '  var beforeN=box.querySelectorAll(".res-item").length;',
  '  more.click();',
  '  var afterN=document.getElementById("results").querySelectorAll(".res-item").length;',
  '  note("rows before / after the +N more click",beforeN+" / "+afterN);',
  '  ok("the +N more row actually shows more",afterN>beforeN,true);',
  '  ok("and it is gone once everything is shown",!document.getElementById("results").querySelector(".res-more"),true);',
  '  ok("expanding raised no console error",window.__errs.length,0);',
  /* A new keystroke returns to the short list. */
  '  s.value="ears"; s.dispatchEvent(new Event("input",{bubbles:true}));',
  '  ok("a new keystroke goes back to the short list",document.getElementById("results").querySelectorAll(".res-item").length<afterN,true);',
  '  s.value="ear"; s.dispatchEvent(new Event("input",{bubbles:true}));',
  '  key("Escape",document.getElementById("results").querySelector(".res-item"));',
  '  ok("Escape closes the dropdown",document.getElementById("results").classList.contains("show"),false);',
  '  ok("Escape leaves the typed term alone",document.getElementById("search").value,"ear");',
  '  ok("focus returns to the search box after Escape",document.activeElement.id,"search");',
  /* Enter on a result opens it. */
  '  var s2=document.getElementById("search");',
  '  s2.value="ear"; s2.dispatchEvent(new Event("input",{bubbles:true}));',
  '  var first=document.getElementById("results").querySelector(\'.res-item[data-jump="q"]\');',
  '  ok("a question row is reachable",!!first,true);',
  '  first.focus(); first.click();',
  '  ok("Enter on a result opens a quiz",view.name,"quiz");',
  ' }catch(e){window.__errs.push("STAGE3 THREW: "+e.message+" @ "+(e.stack||"").split("\\n")[1]);}',
  '  setTimeout(stage4,600);',
  '}',

  /* ---- 4. Focus survives the re-render for a keyboard student, and is not
           stolen from a mouse one. ---- */
  'function stage4(){',
  ' try{',
  '  startQuiz(["enthd-ear-1"],"kbd probe focus");',
  '  var opts=document.querySelectorAll(".opts .opt");',
  '  opts[2].focus();',
  '  ok("the option can be tabbed to",same(document.activeElement,opts[2]),true);',
  '  opts[2].click();',
  '  var after=document.querySelectorAll(".opts .opt");',
  '  ok("the page really was rebuilt",after[2]!==opts[2],true);',
  '  note("focus after a keyboard pick",active());',
  '  ok("focus did not fall back to the body",document.activeElement!==document.body,true);',
  '  ok("focus landed on the option the student had chosen",same(document.activeElement,after[2]),true);',
  '  ok("the choice was recorded",Q.sel,2);',
  /* Now the mouse: detail 1, and it must not plant a focus ring. */
  '  startQuiz(["enthd-ear-2"],"kbd probe mouse");',
  '  document.body.focus();',
  '  if(document.activeElement&&document.activeElement.blur)document.activeElement.blur();',
  '  var mopts=document.querySelectorAll(".opts .opt");',
  '  mouseClick(mopts[1]);',
  '  note("focus after a mouse pick",active());',
  '  ok("a mouse pick still records the choice",Q.sel,1);',
  '  ok("a mouse pick does not plant a focus ring on the option",document.activeElement.classList.contains("opt"),false);',
  ' }catch(e){window.__errs.push("STAGE4 THREW: "+e.message+" @ "+(e.stack||"").split("\\n")[1]);}',
  '  setTimeout(stage5,500);',
  '}',

  /* ---- 5. The rescue path walks past a corrupt snapshot. ---- */
  'function stage5(){',
  ' try{',
  '  var k=bakKey();',
  '  var good={answers:{"enthd-ear-1":{pick:0,ok:true,at:1}},flags:{},conf:{},sched:{},srs:{},days:{},hl:{},banks:{},resumeByChapter:{},notes:{},reports:{}};',
  '  var older={answers:{"enthd-ear-2":{pick:1,ok:false,at:2}},flags:{},conf:{},sched:{},srs:{},days:{},hl:{},banks:{},resumeByChapter:{},notes:{},reports:{}};',
  '  localStorage.setItem(k,JSON.stringify({v:1,snaps:[{at:3000,json:JSON.stringify(good)},{at:2000,json:JSON.stringify(older)}]}));',
  '  var r=bakNewest();',
  '  ok("a healthy newest snapshot is still the one returned",r&&r.at,3000);',
  /* The newest is truncated: the good one behind it must still be reachable. */
  '  localStorage.setItem(k,JSON.stringify({v:1,snaps:[{at:4000,json:"{\\"answers\\":{"},{at:2000,json:JSON.stringify(older)}]}));',
  '  var r2=bakNewest();',
  '  note("what a corrupt newest snapshot returns",r2?("snapshot at "+r2.at):"null");',
  '  ok("a corrupt newest snapshot falls through to the one behind it",r2&&r2.at,2000);',
  '  ok("and the recovered state is the real one",r2&&r2.state&&!!r2.state.answers["enthd-ear-2"],true);',
  /* Nothing usable at all must still be null, not a throw and not an empty state. */
  '  localStorage.setItem(k,JSON.stringify({v:1,snaps:[{at:5000,json:"{["},{at:4000,json:"nope"}]}));',
  '  ok("nothing usable still returns null",bakNewest(),null);',
  /* The rescue path must not delete anything. */
  '  ok("the unusable snapshots were left in storage",JSON.parse(localStorage.getItem(k)).snaps.length,2);',
  '  localStorage.setItem(k,JSON.stringify({v:1,snaps:[]}));',
  '  ok("an empty snapshot list returns null",bakNewest(),null);',
  ' }catch(e){window.__errs.push("STAGE5 THREW: "+e.message+" @ "+(e.stack||"").split("\\n")[1]);}',
  /* The brief asked for the theory page turn among the regression checks. It
     cannot be exercised in this build and the probe says so rather than passing
     a check that never ran: modules.js sets THEORY_LOCKED true for the launch,
     openTheoryFor() returns immediately on it, and go() rewrites a theory view
     to home, so the reader never opens and bkOn() is never true. The page keys
     sit inside `if(bkOn())`, which is dead code while the lock holds. */
  ' try{',
  '  note("THEORY_LOCKED",String(THEORY_LOCKED));',
  '  openTheoryFor("enthd-ear-1");',
  '  ok("the locked theory reader stays shut, so its page keys are unreachable",bkOn(),false);',
  '  ok("and the lock did not leave the student stranded on a blank view",view.name!=="theory",true);',
  ' }catch(e){window.__errs.push("STAGE6 THREW: "+e.message+" @ "+(e.stack||"").split("\\n")[1]);}',
  '  ok("no data notice was raised at any point",!!document.getElementById("dataWarning"),false);',
  '  window.__out.errs=window.__errs.slice(0,20);',
  '  document.title="PROBEREPORT "+JSON.stringify(window.__out);',
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
      '--virtual-time-budget=30000', '--user-data-dir=' + udd,
      '--dump-dom', url,
    ], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, timeout: 180000 });
  } catch (e) { lastErr = e.message; dom = (e.stdout || ''); }
  if (dom && dom.includes('PROBEREPORT')) break;
  console.error('attempt ' + attempt + ': no report in DOM (' + dom.length + ' bytes) — retrying');
}
const m = dom.match(/PROBEREPORT (\{.*?\})<\/title>/s);
if (!m) {
  console.error('NO REPORT after 3 attempts. dom ' + dom.length + ' bytes. last error: ' + lastErr);
  fs.writeFileSync(path.join(WORK, 'dump.html'), dom, 'utf8');
  process.exit(1);
}
function j(x) { var v = JSON.stringify(x); return v === undefined ? String(x) : v; }
const r = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
r.notes.forEach(n => console.log('  · ' + n));
console.log('');
let bad = 0;
r.checks.forEach(c => {
  if (c.pass) console.log('  PASS  ' + c.label);
  else { bad++; console.log('  FAIL  ' + c.label + '\n          got  ' + j(c.got).slice(0, 200) + '\n          want ' + j(c.want).slice(0, 200)); }
});
console.log('');
(r.errs || []).forEach(e => console.log('  ! ' + e));
console.log(bad ? bad + ' FAILED of ' + r.checks.length : 'PASS — ' + r.checks.length + ' checks, ' + (r.errs || []).length + ' console errors');
process.exit(bad || (r.errs || []).length ? 1 : 0);
