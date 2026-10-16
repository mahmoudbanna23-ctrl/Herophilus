'use strict';
// selectors - update when the UI changes
const selectors = {modal:'#questionPanel', jump:'#jumpNum', resume:'#mockContinue', sync:'#railSync', page:'#page'};
const fs=require('fs'), path=require('path'), os=require('os');
const {spawn}=require('child_process');
const {pathToFileURL}=require('url');
const root="D:/claude os/Medical school/Herophilus-redesign";
const labels=['wrong answer: cross + shake once, tick static','redraw does not replay','right answer: tick + pulse','panel: dialog, Escape returns focus to button','panel: J returns focus to option; grid click jumps','explanation render rule escapes','exam mode: no motion, no check answer button'];
const pause=ms=>new Promise(r=>setTimeout(r,ms));
let browser, socket, work, failures=0, reported=0;
const pending=new Map();let seq=0;
async function cdp(method,params={}){
  const id=++seq;
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{pending.delete(id);reject(Error('CDP timeout: '+method));},20000);
    pending.set(id,{resolve:v=>{clearTimeout(timer);resolve(v)},reject:e=>{clearTimeout(timer);reject(e)}});
    socket.send(JSON.stringify({id,method,params}));
  });
}
async function evaluate(code){
  const r=await cdp('Runtime.evaluate',{expression:'(async()=>{'+code+'})()',awaitPromise:true,returnByValue:true});
  if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);
  return r.result.value;
}
async function until(fn){const end=Date.now()+25000;let last;while(Date.now()<end){try{if(await fn())return}catch(e){last=e}await pause(100)}throw last||Error('Wait timed out');}
async function ready(){
  await until(()=>evaluate('return document.readyState==="complete" && typeof enterProfile==="function";'));
  await evaluate(`await enterProfile({id:'uiTask',name:'UI Task',av:0,col:0});
    if(!S.term){S.term={id:'y4s2',at:Date.now()};await save();finishProfileEntry();}
    window.__selectors=${JSON.stringify(selectors)}; return QUESTIONS.length;`);
}
async function reload(){await cdp('Page.reload',{ignoreCache:true});await pause(300);await ready();}
async function task(n,fn){try{await fn();console.log('PASS '+n+' '+labels[n-1])}catch(e){failures++;console.log('FAIL '+n+' '+labels[n-1]+': '+e.message.split('\n')[0])}reported=n;}
async function check(code){await evaluate('function assert(v,m){if(!v)throw Error(m)}\n'+code);}
(async()=>{
  work=fs.mkdtempSync(path.join(os.tmpdir(),'herophilus-ui-tasks-'));
  if(work.includes('--'))throw Error('Temporary path must not contain --');
  const app=path.join(work,'app');fs.cpSync(path.join(root,'app'),app,{recursive:true});
  const index=path.join(app,'index.html');
  const probe=`<script>Object.defineProperty(window,'showGate',{configurable:true,get:()=>()=>{},set:()=>{}});
    localStorage.setItem('wardround.profiles',JSON.stringify([{id:'uiTask',name:'UI Task',av:0,col:0}]));</script>
    <style>.reveal{opacity:1!important;transform:none!important}</style>`;
  fs.writeFileSync(index,fs.readFileSync(index,'utf8').replace('<head>','<head>'+probe));
  const exe=[process.env.UI_TASK_BROWSER,'C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].filter(Boolean).find(p=>fs.existsSync(p));
  if(!exe)throw Error('Chrome or Edge not found');
  const profile=path.join(work,'profile');
  browser=spawn(exe,['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--disable-extensions','--disable-background-networking','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{windowsHide:true,stdio:'ignore'});
  const portFile=path.join(profile,'DevToolsActivePort');
  await until(()=>fs.existsSync(portFile));
  const port=fs.readFileSync(portFile,'utf8').split('\n')[0];
  const targets=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json();
  socket=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject});
  socket.onmessage=e=>{const m=JSON.parse(e.data);const p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result)}};
  await cdp('Page.enable');await cdp('Network.enable');
  await cdp('Network.setBlockedURLs',{urls:['http://*','https://*']});
  if(!process.argv.includes('motion'))await cdp('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  await cdp('Page.navigate',{url:pathToFileURL(index).href});await ready();
  await task(1,()=>check(`
    const q=QUESTIONS.find(q=>q.type!=='case'&&Number.isInteger(q.answer)&&q.options.length>=4&&qsIn(q.chapter).length>=4);
    startChapter(q.chapter,true);const q0=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
    window.__q=q0;const wrongI=(q0.answer+1)%q0.options.length;
    assert(document.querySelector('.check-answer')&&document.querySelector('.check-answer').disabled,'Check answer button missing/not disabled');
    if(!matchMedia('(prefers-reduced-motion:reduce)').matches){const ca=document.querySelector('.check-answer');assert(getComputedStyle(ca).transitionDuration==='0.5s','check-answer transition '+getComputedStyle(ca).transitionDuration);}
    pick(wrongI);assert(!document.querySelector('.fx'),'motion before check');
    reveal();
    const bad=document.querySelector('.opt.wrong'),good=document.querySelector('.opt.correct');
    assert(bad&&good,'rows missing');
    assert(bad.querySelector('.fx svg')&&good.querySelector('.fx svg'),'lottie svg not mounted');
    assert(bad.classList.contains('animate__headShake')||matchMedia('(prefers-reduced-motion:reduce)').matches,'shake class missing');
    assert(!good.classList.contains('animate__pulse'),'pulse on correct when wrong');
    assert(fxLive.length===2,'expected 2 lottie instances, got '+fxLive.length);
    const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
    if(reduced)assert(!document.querySelector('.animate__animated'),'animate class applied under reduced motion');
    const path=bad.querySelector('.fx svg path[fill]');
    window.__fxinfo={reduced,fill:path&&path.getAttribute('fill')};
  `));
  await task(2,async()=>{
    await check(`
    toggleFlag(__q.id);
    assert(!document.querySelector('.animate__animated'),'animation replayed on redraw');
    assert(document.querySelectorAll('.fx svg').length===2,'end-state icons missing after redraw');
    window.__f0=document.querySelector('.opt.wrong .fx svg path[fill]').getAttribute('fill');
    setTheme(currentTheme()==='light'?'dark':'light',false);
    `);
    await pause(150);
    await check(`
    const f1=document.querySelector('.opt.wrong .fx svg path[fill]').getAttribute('fill');
    assert(f1!==__f0,'tint stale after theme change: '+f1);
    assert(document.querySelectorAll('.fx svg').length===2,'icons lost after theme change');
    assert(!document.querySelector('.animate__animated'),'animation replayed on theme change');
    `);
  });
  await task(3,()=>check(`
    startChapter(__q.chapter,true);
    const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
    pick(q.answer);reveal();
    const good=document.querySelector('.opt.correct');
    assert(good&&!document.querySelector('.opt.wrong'),'rows wrong');
    assert(good.querySelector('.fx svg'),'tick missing');
    assert(good.classList.contains('animate__pulse')||matchMedia('(prefers-reduced-motion:reduce)').matches,'pulse missing');
  `));
  await task(4,async()=>{
    await evaluate(`go({name:'quiz'});const btn=document.getElementById('questionsButton');btn.focus();btn.click();`);
    await pause(150);
    await check(`const d=document.getElementById('questionPanel');assert(d.open&&d.matches(':modal'),'dialog not modal-open');
      assert(d.contains(document.activeElement),'focus not inside dialog');
      assert(d.querySelectorAll('.radio-input input').length===Q.ids.length,'grid count');`);
    await cdp('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
    await cdp('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
    await pause(200);
    await check(`assert(!document.getElementById('questionPanel').open,'Escape did not close');
      assert(document.activeElement===document.getElementById('questionsButton'),'focus not back on button: '+(document.activeElement&&document.activeElement.outerHTML.slice(0,60)));`);
  });
  await task(5,async()=>{
    await evaluate(`startQuiz(QUESTIONS.filter(x=>x.type!=='case'&&x.options&&x.options.length>1).slice(10,14).map(x=>x.id),'probe');const o=document.querySelector('.opts .opt-answer');o.focus();window.__o=o;
      document.dispatchEvent(new KeyboardEvent('keydown',{key:'j',bubbles:true}));`);
    await pause(100);
    await check(`assert(document.getElementById('questionPanel').open,'J did not open');
      closeQuestionPanel();`);
    await pause(200);
    await check(`assert(document.activeElement===__o,'focus not back on option after J');
      const i0=Q.i;openJump();const spans=document.querySelectorAll('#questionPanel .check');
      assert(Q.ids.length>=3,'need 3 questions');spans[2].click();
      assert(Q.i===2&&!document.getElementById('questionPanel').open,'grid click did not jump');`);
  });
  await task(6,()=>check(`
    const h=explanationHTML('> quote <img src=x onerror=alert(1)>\\nitem one • item two • item three\\nplain with \\u0060code\\u0060 here');
    assert(!/<img/i.test(h),'html injected: '+h);
    assert(/<blockquote>/.test(h)&&/<ul><li>/.test(h)&&/<code>code<\\/code>/.test(h),'rule outputs missing: '+h);
  `));
  await task(7,()=>check(`
    go({name:'mock'});runMock(10);const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
    pick(q.answer);
    assert(!document.querySelector('.fx')&&!document.querySelector('.animate__animated'),'motion in exam');
    assert(!document.querySelector('.check-answer'),'check answer button in exam');
  `));
})().catch(e=>{for(let n=reported+1;n<=7;n++){console.log('FAIL '+n+' '+labels[n-1]+': '+e.message.split('\n')[0]);failures++}}).finally(async()=>{
  if(socket){try{await cdp('Browser.close')}catch(_){}socket.close()}
  if(browser){browser.kill();await pause(500)}
  // Only remove our freshly allocated child of os.tmpdir(), after absolute path validation.
  if(work&&path.dirname(path.resolve(work))===path.resolve(os.tmpdir())&&path.basename(work).startsWith('herophilus-ui-tasks-')){
    try{fs.rmSync(work,{recursive:true,force:true,maxRetries:10,retryDelay:200})}catch(e){console.error('Temporary cleanup failed: '+e.message);failures++}
  }
  process.exitCode=failures?1:0;
});
