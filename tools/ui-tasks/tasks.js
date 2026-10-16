'use strict';
// selectors - update when the UI changes
const selectors = {modal:'#questionPanel', jump:'#jumpNum', resume:'#mockContinue', sync:'#railSync', page:'#page'};
const fs=require('fs'), path=require('path'), os=require('os');
const {spawn}=require('child_process');
const {pathToFileURL}=require('url');
const root=path.resolve(__dirname,'../..');
const labels=['chapter answer recorded','F flags question in flagged list','J opens jump; question 3 selected','finish set reaches correct results','reload preserves chapter position','mock reload preserves two answers and clock','local profile hides sync light'];
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
    <style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>`;
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
  await cdp('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
  await cdp('Page.navigate',{url:pathToFileURL(index).href});await ready();
  await task(1,()=>check(`const q=QUESTIONS.find(q=>q.type!=='case'&&Number.isInteger(q.answer)&&qsIn(q.chapter).length>=4);
    assert(q,'No suitable chapter');startChapter(q.chapter,true);const i=Q.ids.indexOf(q.id);jumpTo(i);
    window.__chapter=q.chapter;window.__qid=q.id;pick(q.answer);assert(!Q.shown,'Pick revealed answer');reveal();await save();
    assert(Q.shown&&S.answers[q.id].ok&&JSON.parse(localStorage.getItem(KEY)).answers[q.id].pick===q.answer,'Answer not persisted');`));
  await task(2,()=>check(`document.dispatchEvent(new KeyboardEvent('keydown',{key:'f',bubbles:true}));
    assert(S.flags[__qid]&&JSON.parse(localStorage.getItem(KEY)).flags[__qid],'F did not persist flag');
    go({name:'flagged'});
    const flaggedRow=()=>Array.from(document.querySelector(__selectors.page).querySelectorAll('button.ch-row')).find(el=>el.getAttribute('onclick')==="startQuiz(['"+__qid+"'],'Flagged')");
    assert(flaggedRow(),'Flagged view missing question');go({name:'quiz'});
    document.dispatchEvent(new KeyboardEvent('keydown',{key:'f',bubbles:true}));
    assert(!JSON.parse(localStorage.getItem(KEY)).flags[__qid],'F did not persist unflag');
    go({name:'flagged'});assert(!flaggedRow(),'Unflagged question remains in flagged view');go({name:'quiz'});`));
  await task(3,()=>check(`jumpTo(0);assert(Q.i!==2,'Jump precondition already at question 3');
    document.dispatchEvent(new KeyboardEvent('keydown',{key:'j',bubbles:true}));
    assert(document.querySelector(__selectors.modal).classList.contains('show'),'Jump not open');
    document.querySelector(__selectors.jump).value='3';jumpGo();assert(Q.i===2,'Wrong question index');`));
  await task(4,()=>check(`const ids=QUESTIONS.filter(q=>q.type!=='case'&&Number.isInteger(q.answer)&&q.options.length>1).slice(0,3).map(q=>q.id);
    startQuiz(ids,'Task score');let q=QUESTIONS.find(q=>q.id===Q.ids[0]);pick(q.answer);reveal();navQ(1);
    q=QUESTIONS.find(q=>q.id===Q.ids[1]);pick((q.answer+1)%q.options.length);reveal();finishSet();
    assert(view.name==='results'&&view.result.right===1&&view.result.done===2&&view.result.missed===1&&view.result.skipped===1,'Wrong sitting score');`));
  await task(5,async()=>{
    const saved=await evaluate(`startChapter(__chapter,true);jumpTo(2);await save();return {chapter:Q.chapter,qid:Q.ids[Q.i]};`);
    await reload();await check(`startChapter(${JSON.stringify(saved.chapter)});assert(Q.i===2&&Q.ids[Q.i]===${JSON.stringify(saved.qid)},'Chapter resume changed place');`);
  });
  await task(6,async()=>{
    const saved=await evaluate(`go({name:'mock'});runMock(10);for(let i=0;i<2;i++){const q=QUESTIONS.find(q=>q.id===Q.ids[Q.i]);pick(q.answer);navQ(1)}await save();return {ids:Q.ids,picked:Q.exam.picked,end:Q.exam.end,i:Q.i};`);
    await reload();await check(`const expected=${JSON.stringify(saved)};offerMockResume();const b=document.querySelector(__selectors.resume);assert(b,'Resume action missing');b.click();
      assert(JSON.stringify(Q.ids)===JSON.stringify(expected.ids)&&Q.i===expected.i,'Paper order/place changed');
      assert(Object.keys(Q.exam.picked).length===2&&JSON.stringify(Q.exam.picked)===JSON.stringify(expected.picked),'Answers changed');
      assert(Q.exam.end===expected.end&&examLeft()>0&&examLeft()<=720000,'Clock reset');
      reveal();assert(!Q.shown,'Exam revealed explanation');`);
  });
  await task(7,()=>check(`const el=document.querySelector(__selectors.sync);
    assert(me&&me.id==='uiTask'&&!fbUser,'Expected real seeded local profile');
    assert(el,'Sync element missing');
    assert(['idle','busy','err','off'].includes(syncState),'Unknown sync state');
    // Local profile: drawRailSync (gate.js) hides and empties the light by design; cloud states need a live sign-in (CONTRACT open question).
    drawRailSync();
    assert(el.style.display==='none'&&!el.textContent.trim(),'Local profile shows a sync light');`));
})().catch(e=>{for(let n=reported+1;n<=7;n++){console.log('FAIL '+n+' '+labels[n-1]+': '+e.message.split('\n')[0]);failures++}}).finally(async()=>{
  if(socket){try{await cdp('Browser.close')}catch(_){}socket.close()}
  if(browser){browser.kill();await pause(500)}
  // Only remove our freshly allocated child of os.tmpdir(), after absolute path validation.
  if(work&&path.dirname(path.resolve(work))===path.resolve(os.tmpdir())&&path.basename(work).startsWith('herophilus-ui-tasks-')){
    try{fs.rmSync(work,{recursive:true,force:true,maxRetries:10,retryDelay:200})}catch(e){console.error('Temporary cleanup failed: '+e.message);failures++}
  }
  process.exitCode=failures?1:0;
});
