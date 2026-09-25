/* Exercise option strike-out in a copied app under headless Chrome.
 *
 *   node tools/boot-check/strike-check.js
 */
'use strict';
const fs=require('fs');
const os=require('os');
const path=require('path');
const {execFileSync}=require('child_process');
const ROOT=path.resolve(__dirname,'..','..');
const CHROME='C:/Program Files/Google/Chrome/Application/chrome.exe';
const EDGE='C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const browser=fs.existsSync(CHROME)?CHROME:EDGE;
const WORK=path.join(os.tmpdir(),'herophilus_strike');
if(WORK.includes('--')){console.error('FAIL workspace path contains double dash');process.exit(1)}
function rmrf(p){if(fs.existsSync(p))fs.rmSync(p,{recursive:true,force:true})}
function copyDir(src,dst){
  fs.mkdirSync(dst,{recursive:true});
  for(const e of fs.readdirSync(src,{withFileTypes:true})){
    const s=path.join(src,e.name),d=path.join(dst,e.name);
    if(e.isDirectory())copyDir(s,d);else fs.copyFileSync(s,d);
  }
}
rmrf(WORK);
const APP=path.join(WORK,'app');
copyDir(path.join(ROOT,'app'),APP);
const INDEX=path.join(APP,'index.html');
let html=fs.readFileSync(INDEX,'utf8');
const probe=[
  '<script>',
  'window.__errs=[];',
  'window.addEventListener("error",function(e){window.__errs.push(e.message||"error");},true);',
  '(function(){var ce=console.error;console.error=function(){window.__errs.push("console.error: "+Array.prototype.join.call(arguments," "));return ce.apply(console,arguments);};})();',
  'Object.defineProperty(window,"showGate",{configurable:true,get:function(){return function(){};},set:function(){}});',
  'localStorage.setItem("wardround.profiles",JSON.stringify([{id:"strike",name:"Strike",av:0,col:0}]));',
  '</script>',
  '<style>*,*::before,*::after{animation:none!important;transition:none!important}</style>',
].join('\n');
const headAt=html.indexOf('<head>');
if(headAt<0)throw new Error('no head');
html=html.slice(0,headAt+6)+'\n'+probe+'\n'+html.slice(headAt+6);
const report=[
  '<script>',
  'window.addEventListener("load",function(){setTimeout(run,1200)});',
  'function result(name,ok){window.__strike.push([name,!!ok])}',
  'function run(){try{',
  'window.__strike=[];',
  'Promise.resolve(enterProfile({id:"strike",name:"Strike",av:0,col:0})).then(function(){',
  'var t=TERMS.find(function(x){return x.id==="y4s2"});S.term={id:t.id,at:Date.now()};if(termEntryPending&&typeof finishProfileEntry==="function")finishProfileEntry();else{activateTerm(t.id);render();}',
  'var qs=QUESTIONS.filter(function(q){return q.module==="ent"&&Array.isArray(q.options)&&q.options.length>=2});',
  'if(qs.length<2)throw new Error("need two ENT option questions");',
  'startQuiz([qs[0].id,qs[1].id],"Strike probe");',
  'var opts=document.querySelectorAll(".opts .opt"), xs=document.querySelectorAll(".strike-btn");',
  'result("X count equals option count",xs.length===opts.length&&xs.length===qs[0].options.length);',
  'var before={};for(var i=0;i<localStorage.length;i++){var k=localStorage.key(i);before[k]=localStorage.getItem(k)}',
  'xs[0].click();var first=document.querySelector(".opts .opt"),x=document.querySelector(".strike-btn");',
  'result("X strikes without answering",first.classList.contains("struck")&&x.getAttribute("aria-pressed")==="true"&&Q.sel===null&&!Q.shown);',
  'result("focus stays on X after strike",document.activeElement===x);',
  'x.click();first=document.querySelector(".opts .opt");x=document.querySelector(".strike-btn");',
  'result("X restores option",!first.classList.contains("struck")&&x.getAttribute("aria-pressed")==="false"&&Q.sel===null);',
  'x.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowRight",bubbles:true}));',
  'result("ArrowRight still navigates with focus on X",Q.i===1);',
  'result("next question has zero strikes",document.querySelectorAll(".opt.struck").length===0);',
  'var six=QUESTIONS.find(function(q){return Array.isArray(q.options)&&q.options.length===6});',
  'if(!six){result("F on focused X is ignored for six options",false)}else{startQuiz([six.id],"Six-option F probe");var sixX=document.querySelector(".strike-btn");sixX.focus();sixX.dispatchEvent(new KeyboardEvent("keydown",{key:"F",bubbles:true}));result("F on focused X is ignored for six options",Q.sel===null&&!Q.shown&&document.activeElement===sixX);}',
  'navQ(-1);x=document.querySelector(".strike-btn");x.click();document.querySelector(".opt-answer").click();',
  'result("no X after pick in normal quiz",Q.sel===0&&document.querySelectorAll(".strike-btn").length===0&&document.querySelectorAll(".opt.struck").length===0);',
  'var cq=QUESTIONS.find(function(q){return q.type==="case";});',
  'if(!cq){console.log("SKIP case question clears strikes")}else{Q.ids=[qs[0].id,cq.id];Q.i=0;Q.sel=null;Q.shown=false;render();document.querySelector(".strike-btn").click();navQ(1);result("case question clears strikes",document.querySelectorAll(".opt.struck").length===0&&strikeQuestion===cq.id);}',
  'startQuiz([qs[0].id],"Strike probe");document.querySelector(".strike-btn").click();startQuiz([qs[0].id],"Strike probe");result("restart on same question clears strikes",document.querySelectorAll(".opt.struck").length===0);',
  'var after={};for(var j=0;j<localStorage.length;j++){var key=localStorage.key(j);after[key]=localStorage.getItem(key)}',
  'result("localStorage unchanged",JSON.stringify(before)===JSON.stringify(after));',
  'result("no console errors",window.__errs.length===0);',
  'document.title="STRIKEREPORT "+JSON.stringify(window.__strike);',
  '}).catch(function(e){document.title="STRIKEREPORT "+JSON.stringify([["probe completed",false],[String(e.message||e),false]])});}catch(e){document.title="STRIKEREPORT "+JSON.stringify([["probe completed",false],[String(e.message||e),false]])}}',
  '</script>',
].join('\n');
html=html.replace('</body>',report+'\n</body>');
fs.writeFileSync(INDEX,html,'utf8');
let out='',lastErr='';
for(let attempt=1;attempt<=3;attempt++){
  try{out=execFileSync(browser,['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--disable-extensions','--allow-file-access-from-files','--hide-scrollbars','--dump-dom','--virtual-time-budget=20000','--user-data-dir='+path.join(WORK,'chrome_profile_'+attempt),'file:///'+INDEX.replace(/\\/g,'/')],{encoding:'utf8',timeout:180000,maxBuffer:256*1024*1024})}
  catch(e){lastErr=e.message;out=e.stdout||''}
  if(out.includes('STRIKEREPORT'))break;
  console.error('attempt '+attempt+': no report in DOM ('+out.length+' bytes)');
}
const m=out.match(/<title>STRIKEREPORT ([\s\S]*?)<\/title>/);
if(!m){console.error('FAIL no report');process.exit(1)}
let rows=[];try{rows=JSON.parse(m[1].replace(/&quot;/g,'"').replace(/&amp;/g,'&'))}catch(e){console.error('FAIL bad report '+m[1]+' '+lastErr);process.exit(1)}
let bad=0;
for(const row of rows){console.log((row[1]?'PASS ':'FAIL ')+row[0]);if(!row[1])bad++}
process.exitCode=bad?1:0;
