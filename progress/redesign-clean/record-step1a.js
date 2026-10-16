'use strict';
// Step 1a Part B recording: a slow, real-input walk through the quiz screen, four videos (dark/light x 1440x900/1180x820).
// Pattern: city-walk/walk.js (CDP screencast + ffmpeg concat) and capture-step1b.js (copy app\ to a temp path with no "--",
// stub the gate, seed a profile, enterProfile(), fresh --user-data-dir, retry once). Animations are NOT killed: the motion is the point.
// Clicks and keys are real CDP input events. Page data is READ only to choose the chapter and which option is right/wrong.
// Never opens or reads an image or video. usage: node record-step1a.js [dark|light] [1440x900|1180x820]  (no args = all four)
const fs=require('fs'), path=require('path'), os=require('os');
const {spawn,spawnSync}=require('child_process');
const {pathToFileURL}=require('url');
const root=path.resolve(__dirname,'../..');
const OUT='D:/scratch 2026/clean-1a/rec';
const FFDIR='C:/Users/Alfa388/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-8.1.2-full_build/bin/';
const FFMPEG=FFDIR+'ffmpeg.exe', FFPROBE=FFDIR+'ffprobe.exe';
const PAUSE=1500;
const pause=ms=>new Promise(r=>setTimeout(r,ms));

async function record(theme,W,H){
  let browser,socket,work;
  const pending=new Map();let seq=0;
  const consoleErrors=[],log=[],frames=[];
  const t0=Date.now();
  const note=s=>{log.push(((Date.now()-t0)/1000).toFixed(1)+'s '+s)};
  const cdp=(method,params={})=>{
    const id=++seq;
    return new Promise((resolve,reject)=>{
      const timer=setTimeout(()=>{pending.delete(id);reject(Error('CDP timeout: '+method));},30000);
      pending.set(id,{resolve:v=>{clearTimeout(timer);resolve(v)},reject:e=>{clearTimeout(timer);reject(e)}});
      socket.send(JSON.stringify({id,method,params}));
    });
  };
  const evaluate=async code=>{
    const r=await cdp('Runtime.evaluate',{expression:'(async()=>{'+code+'})()',awaitPromise:true,returnByValue:true});
    if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);
    return r.result.value;
  };
  const until=async(fn,ms=25000)=>{const end=Date.now()+ms;let last;while(Date.now()<end){try{if(await fn())return}catch(e){last=e}await pause(100)}throw last||Error('Wait timed out');};
  try{
    work=fs.mkdtempSync(path.join(os.tmpdir(),'herophilus-rec1a-'));
    if(work.includes('--'))throw Error('Temporary path must not contain --');
    const app=path.join(work,'app');fs.cpSync(path.join(root,'app'),app,{recursive:true});
    const frDir=path.join(work,'frames');fs.mkdirSync(frDir);
    const indexHtml=path.join(app,'index.html');
    const probe=`<script>Object.defineProperty(window,'showGate',{configurable:true,get:()=>()=>{},set:()=>{}});
      localStorage.setItem('wardround.profiles',JSON.stringify([{id:'rec1a',name:'Student',av:0,col:0}]));
      window.__errs=[];window.addEventListener('error',e=>window.__errs.push(e.message));window.addEventListener('unhandledrejection',e=>window.__errs.push(String(e.reason)));</script>
`;
    fs.writeFileSync(indexHtml,fs.readFileSync(indexHtml,'utf8').replace('<head>','<head>'+probe));
    const exe=['C:/Program Files/Google/Chrome/Application/chrome.exe','C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p=>fs.existsSync(p));
    if(!exe)throw Error('Chrome or Edge not found');
    const profile=path.join(work,'profile');
    browser=spawn(exe,['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--disable-extensions','--disable-background-networking','--allow-file-access-from-files','--remote-debugging-port=0','--user-data-dir='+profile,'--window-size='+W+','+H,'about:blank'],{windowsHide:true,stdio:'ignore'});
    const portFile=path.join(profile,'DevToolsActivePort');
    await until(()=>fs.existsSync(portFile));
    const port=fs.readFileSync(portFile,'utf8').split('\n')[0];
    const targets=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json();
    socket=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
    await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject});
    let fcount=0;
    socket.onmessage=e=>{
      const m=JSON.parse(e.data);
      if(m.id){const p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result)}return}
      if(m.method==='Page.screencastFrame'){
        const p=m.params,f=path.join(frDir,'f'+String(fcount++).padStart(6,'0')+'.jpg');
        fs.writeFileSync(f,Buffer.from(p.data,'base64'));
        frames.push({file:f,ts:p.metadata.timestamp});
        socket.send(JSON.stringify({id:++seq,method:'Page.screencastFrameAck',params:{sessionId:p.sessionId}}));
        return;
      }
      if(m.method==='Runtime.exceptionThrown')consoleErrors.push('exception: '+(m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text).split('\n')[0]);
      else if(m.method==='Runtime.consoleAPICalled'&&m.params.type==='error')consoleErrors.push('console.error: '+m.params.args.map(a=>a.value??a.description).join(' ').slice(0,200));
      else if(m.method==='Log.entryAdded'&&m.params.entry.level==='error')consoleErrors.push('log: '+m.params.entry.text+' '+(m.params.entry.url||'').slice(0,120));
    };
    await cdp('Page.enable');await cdp('Runtime.enable');await cdp('Network.enable');await cdp('Log.enable');
    await cdp('Network.setBlockedURLs',{urls:['http://*','https://*']});
    await cdp('Emulation.setDeviceMetricsOverride',{width:W,height:H,deviceScaleFactor:1,mobile:false});
    await cdp('Page.navigate',{url:pathToFileURL(indexHtml).href});
    await until(()=>evaluate('return document.readyState==="complete" && typeof enterProfile==="function";'));
    await evaluate(`await enterProfile({id:'rec1a',name:'Student',av:0,col:0});
      if(!S.term){S.term={id:'y4s2',at:Date.now()};await save();finishProfileEntry();}
      S.answers={};S.conf={};S.flags={};S.resumeByChapter={};setTheme('${theme}');return 1;`);
    await pause(800);

    // choose an ENT chapter: first two questions are plain MCQs, and a later one (index 3+) has a quote AND a list in its explanation
    // (the shape of entqb-thr11-576 in b-index.txt, which is the FIRST question of its own chapter, so it cannot serve a jump). Page data read only here.
    const plan=await evaluate(`const plainMcq=q=>q&&q.type!=='case'&&!q.image&&q.options&&q.options.length>=3&&q.options.length<=5&&Number.isInteger(q.answer);
      const hasQL=q=>plainMcq(q)&&/(^|\\n)> /.test(q.explanation||'')&&/ • /.test(q.explanation||'');
      for(const g of moduleOf('ent').groups)for(const c of g.chapters){
        const qs=qsIn(c[0]);if(qs.length<10||qs.length>60||!plainMcq(qs[0])||!plainMcq(qs[1]))continue;
        const t=qs.findIndex((q,i)=>i>=3&&hasQL(q));
        if(t>0)return {cid:c[0],name:c[1],n:qs.length,target:qs[t].id,targetNo:t+1,module:'ent'};
      }
      return {err:'no chapter fits'};`);
    if(!plan||plan.err)throw Error('plan: '+JSON.stringify(plan));
    note('chapter '+JSON.stringify(plan));

    // ---- input helpers (real CDP events)
    const centre=async(css,re)=>evaluate(`const vis=e=>{const r=e.getBoundingClientRect(),c=getComputedStyle(e);return r.width>0&&r.height>0&&c.visibility!=='hidden'&&c.display!=='none'};
      const rx=${re?`new RegExp(${JSON.stringify(re)},'i')`:'null'};
      const e=[...document.querySelectorAll(${JSON.stringify(css)})].filter(x=>vis(x)&&(!rx||rx.test((x.textContent||'').replace(/\\s+/g,' ').trim())))[0];
      if(!e)return null;e.scrollIntoView({block:'center',inline:'center',behavior:'instant'});
      const r=e.getBoundingClientRect(),x=Math.round(r.left+r.width/2),y=Math.round(r.top+r.height/2);
      const top=document.elementFromPoint(x,y);
      return {x,y,disabled:!!e.disabled,covered:!(top&&(top===e||e.contains(top)||top.contains(e))),text:(e.textContent||'').trim().slice(0,40)};`);
    const click=async(label,css,re)=>{
      const c=await centre(css,re);
      if(!c)throw Error('click target not found: '+label+' '+css);
      if(c.disabled||c.covered)note('WARN '+label+' disabled='+c.disabled+' covered='+c.covered);
      await cdp('Input.dispatchMouseEvent',{type:'mouseMoved',x:c.x,y:c.y});
      await pause(250);
      await cdp('Input.dispatchMouseEvent',{type:'mousePressed',x:c.x,y:c.y,button:'left',clickCount:1});
      await pause(90);
      await cdp('Input.dispatchMouseEvent',{type:'mouseReleased',x:c.x,y:c.y,button:'left',clickCount:1});
      note('click '+label+' ('+c.text+')');
    };
    const KEYS={Tab:{key:'Tab',code:'Tab',vk:9},Escape:{key:'Escape',code:'Escape',vk:27},j:{key:'j',code:'KeyJ',vk:74,text:'j'}};
    const key=async name=>{
      const k=KEYS[name];
      await cdp('Input.dispatchKeyEvent',{type:k.text?'keyDown':'rawKeyDown',key:k.key,code:k.code,windowsVirtualKeyCode:k.vk,text:k.text});
      await pause(60);
      await cdp('Input.dispatchKeyEvent',{type:'keyUp',key:k.key,code:k.code,windowsVirtualKeyCode:k.vk});
      note('key '+name);
    };
    const wheel=async(dy,steps)=>{ // unhurried: small wheel ticks, as a hand on a trackpad
      for(let i=0;i<steps;i++){await cdp('Input.dispatchMouseEvent',{type:'mouseWheel',x:Math.round(W/2),y:Math.round(H/2),deltaX:0,deltaY:dy});await pause(160)}
      note('scroll '+dy*steps);
    };
    const focusDesc=()=>evaluate(`const a=document.activeElement;return a?(a.tagName+'#'+a.id+'.'+String(a.className).slice(0,40)+' '+(a.getAttribute('aria-label')||(a.textContent||'').trim().slice(0,20))):null;`);
    const curQ=()=>evaluate(`const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);return {id:q.id,type:q.type||'mcq',answer:q.answer,n:(q.options||[]).length,i:Q.i,total:Q.ids.length,shown:!!Q.shown};`);
    const skipCases=async()=>{ // case questions have no option rows; use the visible Skip button until an MCQ shows
      for(let i=0;i<10;i++){const c=await curQ();if(c.type!=='case'&&c.n>=2)return c;await click('Skip (case)','.focus-actions .focus-btn','^Skip');await pause(PAUSE)}
      throw Error('no MCQ reached');
    };
    const answer=async(wantRight)=>{
      const c=await skipCases();
      const idx=wantRight?c.answer:(c.answer+1)%c.n;
      note('Q '+c.id+' ('+(c.i+1)+'/'+c.total+') pick '+idx+(wantRight?' right':' wrong'));
      await click('option '+idx,'.opts .opt:nth-child('+(idx+1)+') .opt-answer');
      await pause(PAUSE);
      await click('Check answer','.focus-actions .check-answer');
      await pause(PAUSE+700); // let the cross/tick and the shake/pulse play out
      note('fx state '+await evaluate(`return JSON.stringify({svg:document.querySelectorAll('.opt .fx svg').length,animated:[...document.querySelectorAll('.animate__animated')].map(e=>[...e.classList].filter(c=>c.startsWith('animate__')&&c!=='animate__animated').join('+')),verdict:(document.querySelector('.focus-verdict')||{}).textContent});`));
    };

    // ---- screencast starts here; the walk
    await cdp('Page.startScreencast',{format:'jpeg',quality:85,maxWidth:W,maxHeight:H,everyNthFrame:1});
    await pause(600);
    await evaluate(`go({name:'module',id:'ent'});return view.name;`); // the app's own view change; the chapter row below is a real click
    await pause(PAUSE+500);
    await click('ENT chapter '+plan.name,`.ch-row[onclick*="startChapter('${plan.cid}')"]`);
    await until(()=>evaluate(`return view.name==='quiz'&&!!document.querySelector('.opts .opt-answer');`));
    await pause(PAUSE+1500); // read the question
    await answer(false);
    await pause(PAUSE);
    await wheel(110,6);       // scroll the explanation
    await pause(PAUSE);
    await wheel(-110,6);
    await pause(900);
    await click('Next','.focus-actions .primary');
    await pause(PAUSE+500);
    await answer(true);
    await pause(PAUSE+800);
    await evaluate(`window.scrollTo(0,0);return 1;`);
    await pause(PAUSE);
    for(let i=0;i<30;i++){ // a keyboard user tabs to the Next button, then opens the panel from there (so Escape has somewhere to return)
      if(await evaluate(`return document.activeElement&&document.activeElement.matches('.focus-actions .primary');`))break;
      await key('Tab');await pause(120);
    }
    note('focus before J '+await focusDesc());
    await pause(900);
    await key('j');
    await until(()=>evaluate(`return !!document.querySelector('dialog#questionPanel[open]');`),5000);
    note('panel open after J; focus '+await focusDesc());
    await pause(PAUSE+500);
    await key('Tab');await pause(900);
    await key('Tab');await pause(900);
    note('focus in panel '+await focusDesc());
    await key('Escape');
    await until(()=>evaluate(`return !document.querySelector('dialog#questionPanel[open]');`),5000);
    note('panel closed; focus back on '+await focusDesc());
    await pause(PAUSE);
    await click('Questions button','#questionsButton');
    await until(()=>evaluate(`return !!document.querySelector('dialog#questionPanel[open]');`),5000);
    await pause(PAUSE+500);
    const num=await evaluate(`return Q.ids.indexOf('${plan.target}')+1;`);
    if(!num)throw Error('target id not in the chapter set');
    note('jump to number '+num+' ('+plan.target+')');
    await click('grid number '+num,`#qgrid .check[onclick="jumpTo(${num-1})"]`);
    await until(()=>evaluate(`return !document.querySelector('dialog#questionPanel[open]')&&Q.ids[Q.i]==='${plan.target}';`),5000);
    await pause(PAUSE+1000);
    await answer(true);       // the quote / list explanation
    await pause(PAUSE);
    await wheel(120,5);await pause(PAUSE);
    await wheel(120,5);await pause(PAUSE);
    await wheel(120,5);await pause(PAUSE);
    await click('Exit','.focus-header .tb-btn','Exit');
    await pause(PAUSE+500);
    const pageErrs=await evaluate('return window.__errs;');
    await cdp('Page.stopScreencast');await pause(500);
    if(pageErrs.length)consoleErrors.push(...pageErrs.map(e=>'PAGE '+e));
    note('done');

    // ---- encode
    fs.mkdirSync(OUT,{recursive:true});
    const base=`step1a-${theme}-${W}x${H}`;
    const lines=[];
    for(let i=0;i<frames.length;i++){
      let d=i+1<frames.length?frames[i+1].ts-frames[i].ts:1.0;if(d<0.001)d=0.001;
      lines.push(`file '${frames[i].file.split('\\').join('/')}'`,`duration ${d.toFixed(4)}`);
    }
    if(frames.length)lines.push(`file '${frames[frames.length-1].file.split('\\').join('/')}'`);
    const lst=path.join(work,'concat.txt');fs.writeFileSync(lst,lines.join('\n')+'\n');
    const mp4=path.join(OUT,base+'.mp4');
    const r=spawnSync(FFMPEG,['-y','-f','concat','-safe','0','-i',lst,'-vf',`fps=25,scale=${W}:${H},format=yuv420p`,'-c:v','libx264','-crf','24','-preset','medium','-movflags','+faststart',mp4],{encoding:'utf8'});
    if(r.status!==0)throw Error('ffmpeg mp4 exit '+r.status+' '+(r.stderr||'').slice(-300));
    const dur=parseFloat(spawnSync(FFPROBE,['-v','error','-show_entries','format=duration','-of','csv=p=0',mp4],{encoding:'utf8'}).stdout);
    // contact sheet: 12 tiles (4x3) spread over the whole video
    const sheet=path.join(OUT,base+'-sheet.jpg');
    const r2=spawnSync(FFMPEG,['-y','-i',mp4,'-vf',`fps=${(12/dur).toFixed(5)},scale=480:-1,tile=4x3`,'-frames:v','1','-update','1','-q:v','3',sheet],{encoding:'utf8'});
    if(r2.status!==0)throw Error('ffmpeg sheet exit '+r2.status+' '+(r2.stderr||'').slice(-300));
    fs.writeFileSync(path.join(OUT,base+'.log.txt'),log.join('\n')+'\nconsole/page errors: '+consoleErrors.length+'\n'+consoleErrors.join('\n')+'\nframes: '+frames.length+'\nduration: '+dur+'\n');
    return {base,dur,frames:frames.length,errors:consoleErrors.length,log};
  } catch(e) {
    e.message+=' | LOG: '+log.join(' ; ');
    throw e;
  } finally {
    if(socket){try{await cdp('Browser.close')}catch(_){}try{socket.close()}catch(_){}}
    if(browser){browser.kill();await pause(700)}
    if(work&&path.dirname(path.resolve(work))===path.resolve(os.tmpdir())&&path.basename(work).startsWith('herophilus-rec1a-')){
      try{fs.rmSync(work,{recursive:true,force:true,maxRetries:10,retryDelay:300})}catch(e){console.error('Cleanup: '+e.message)}
    }
  }
}

(async()=>{
  const themes=process.argv[2]?[process.argv[2]]:['dark','light'];
  const sizes=process.argv[3]?[process.argv[3].split('x').map(Number)]:[[1440,900],[1180,820]];
  let failed=0;
  for(const [W,H] of sizes)for(const theme of themes){
    let res,lastErr;
    for(let n=1;n<=2&&!res;n++){ // retry once on a silent failure
      try{res=await record(theme,W,H);}catch(e){lastErr=e;console.error(`attempt ${n} failed (${theme} ${W}x${H}): `+e.message);await pause(1500);}
    }
    if(!res){failed++;console.error('GAVE UP '+theme+' '+W+'x'+H+' '+(lastErr&&lastErr.stack));continue;}
    console.log(`${res.base}.mp4 duration ${res.dur.toFixed(2)}s frames ${res.frames} errors ${res.errors}`);
    if(process.env.VERBOSE)console.log(res.log.join('\n'));
  }
  process.exitCode=failed?1:0;
})();
