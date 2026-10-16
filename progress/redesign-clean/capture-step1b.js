'use strict';
// Part B capture: 11 quiz states x dark/light x 1440x900 and 1180x820. Screenshots only; never reads images.
// Harness pattern from capture-step1a.js / tools/boot-check/boot-check.js. Output prefix "b-".
const fs=require('fs'), path=require('path'), os=require('os');
const {spawn}=require('child_process');
const {pathToFileURL}=require('url');
const root=path.resolve(__dirname,'../..');
const out='D:/scratch 2026/clean-1a';
const pause=ms=>new Promise(r=>setTimeout(r,ms));

async function attempt(){
  let browser, socket, work;
  const pending=new Map();let seq=0;
  const consoleErrors=[], index=[], failed=[];
  const cdp=(method,params={})=>{
    const id=++seq;
    return new Promise((resolve,reject)=>{
      const timer=setTimeout(()=>{pending.delete(id);reject(Error('CDP timeout: '+method));},20000);
      pending.set(id,{resolve:v=>{clearTimeout(timer);resolve(v)},reject:e=>{clearTimeout(timer);reject(e)}});
      socket.send(JSON.stringify({id,method,params}));
    });
  };
  const evaluate=async code=>{
    const r=await cdp('Runtime.evaluate',{expression:'(async()=>{'+code+'})()',awaitPromise:true,returnByValue:true});
    if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);
    return r.result.value;
  };
  const until=async fn=>{const end=Date.now()+25000;let last;while(Date.now()<end){try{if(await fn())return}catch(e){last=e}await pause(100)}throw last||Error('Wait timed out');};
  try{
    work=fs.mkdtempSync(path.join(os.tmpdir(),'herophilus-step1b-'));
    if(work.includes('--'))throw Error('Temporary path must not contain --');
    const app=path.join(work,'app');fs.cpSync(path.join(root,'app'),app,{recursive:true});
    const indexHtml=path.join(app,'index.html');
    const probe=`<script>Object.defineProperty(window,'showGate',{configurable:true,get:()=>()=>{},set:()=>{}});
      localStorage.setItem('wardround.profiles',JSON.stringify([{id:'uiTask',name:'UI Task',av:0,col:0}]));</script>
<style>*,*::before,*::after{animation-duration:0s!important;animation-delay:0s!important;transition-duration:0s!important}.reveal{opacity:1!important;transform:none!important}</style>
`;
    fs.writeFileSync(indexHtml,fs.readFileSync(indexHtml,'utf8').replace('<head>','<head>'+probe));
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
    socket.onmessage=e=>{
      const m=JSON.parse(e.data);
      if(m.id){const p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result)}return}
      if(m.method==='Runtime.exceptionThrown')consoleErrors.push('exception: '+(m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text).split('\n')[0]);
      else if(m.method==='Runtime.consoleAPICalled'&&m.params.type==='error')consoleErrors.push('console.error: '+m.params.args.map(a=>a.value??a.description).join(' ').slice(0,200));
      else if(m.method==='Log.entryAdded'&&m.params.entry.level==='error')consoleErrors.push('log: '+m.params.entry.text+' '+(m.params.entry.url||'').slice(0,120));
    };
    await cdp('Page.enable');await cdp('Runtime.enable');await cdp('Network.enable');await cdp('Log.enable');
    await cdp('Network.setBlockedURLs',{urls:['http://*','https://*']});
    await cdp('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
    await cdp('Page.navigate',{url:pathToFileURL(indexHtml).href});
    await until(()=>evaluate('return document.readyState==="complete" && typeof enterProfile==="function";'));
    await evaluate(`await enterProfile({id:'uiTask',name:'UI Task',av:0,col:0});
      if(!S.term){S.term={id:'y4s2',at:Date.now()};await save();finishProfileEntry();}return QUESTIONS.length;`);

    fs.mkdirSync(out,{recursive:true});
    const fx=await evaluate(`window.__qaErrors=[];window.addEventListener('error',e=>__qaErrors.push(e.message));
      window.addEventListener('unhandledrejection',e=>__qaErrors.push(String(e.reason)));
      const mcq=QUESTIONS.filter(q=>q.type!=='case'&&Number.isInteger(q.answer)&&q.options);
      const ordinary=mcq.filter(q=>q.options.length>=4&&q.options.length<=5&&!q.image);
      window.__base=ordinary.find(q=>q.stem.length>130&&q.stem.length<350&&q.explanation&&q.explanation.length>200&&q.explanation.length<850)||ordinary[0];
      window.__figure=QUESTIONS.filter(q=>q.image&&!q.imgSpoils&&q.type!=='case').sort((a,b)=>b.stem.length-a.stem.length)[0];
      window.__case=QUESTIONS.find(q=>q.type==='case'&&q.stem.length>200&&q.stem.length<600);
      window.__two=mcq.find(q=>q.options.length===2&&q.explanation&&q.explanation.length>40);
      const big=mcq.filter(q=>q.options.length>=8&&q.options.length<=10);
      window.__many=big.slice().sort((a,b)=>b.options.length-a.options.length)[0];
      let missing=mcq.find(q=>!q.explanation||!String(q.explanation).trim());
      window.__missingSynthetic=!missing;
      if(!missing){missing={...__base,id:'qa-missing-explanation',explanation:''};QUESTIONS.push(missing);}
      window.__missing=missing;
      const dRe=/(^|\\n)> |•|\`[^\`\\n]+\`/;
      const debrisAll=QUESTIONS.filter(q=>q.explanation&&(/(^|\\n)> /.test(q.explanation)||/ • /.test(q.explanation)||/\`[^\`\\n]+\`/.test(q.explanation)));
      const hasQ=q=>/(^|\\n)> /.test(q.explanation),hasL=q=>/ • /.test(q.explanation),hasC=q=>/\`[^\`\\n]+\`/.test(q.explanation);window.__debris=debrisAll.find(q=>q.type!=='case'&&hasQ(q)&&hasL(q)&&hasC(q))||debrisAll.find(q=>q.type!=='case'&&hasL(q)&&hasQ(q))||debrisAll.find(q=>q.type!=='case'&&hasL(q))||debrisAll[0];
      window.__ids=[__base.id,...ordinary.filter(q=>q.id!==__base.id).slice(0,11).map(q=>q.id)];
      window.__start=()=>{closeQuestionPanel();closeModal();startQuiz(__ids,chapterName(__base.chapter));};
      return {base:__base.id,figure:__figure&&__figure.id,figStem:__figure&&__figure.stem.length,case:__case&&__case.id,two:__two&&__two.id,many:__many&&[__many.id,__many.options.length],manyCount:big.length,missing:[missing.id,__missingSynthetic],debris:__debris&&__debris.id,debrisCount:debrisAll.length,
        debrisKinds:{quote:debrisAll.filter(q=>/(^|\\n)> /.test(q.explanation)).length,list:debrisAll.filter(q=>/ • /.test(q.explanation)).length,code:debrisAll.filter(q=>/\`[^\`\\n]+\`/.test(q.explanation)).length}};`);
    console.log('Fixtures '+JSON.stringify(fx));
    index.push('FIXTURES '+JSON.stringify(fx));

    async function shot(nn,name,width,height,theme,qid,scrollFeedback){
      const file=`b-${nn}-${name}-${theme}-${width}x${height}.png`;
      try{
        await evaluate(`window.scrollTo(0,${scrollFeedback?"(document.querySelector('.focus-feedback')?Math.max(0,document.querySelector('.focus-feedback').offsetTop-innerHeight*.4):0)":'0'});document.activeElement&&document.activeElement.blur&&document.activeElement.blur();`);
        await pause(250);
        const pic=await cdp('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
        fs.writeFileSync(path.join(out,file),Buffer.from(pic.data,'base64'));
        const layout=await evaluate(`return {dlg:!!document.querySelector('dialog[open]'),h:document.documentElement.scrollHeight,w:document.documentElement.scrollWidth,view:view.name,q:(Q&&Q.ids&&Q.ids[Q.i])||null};`);
        let note='';
        if(layout.dlg&&nn!=='07')note+=' DIALOG-OPEN-LEAK';
        if(!layout.dlg&&nn==='07')note+=' DIALOG-MISSING';
        if(layout.w>width)note+=' OVERFLOW-X scrollWidth='+layout.w;
        if(layout.h>height){
          const full=await cdp('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width,height:layout.h,scale:1}});
          fs.writeFileSync(path.join(out,file.replace('.png','-full.png')),Buffer.from(full.data,'base64'));
          note+=' (+full, page height '+layout.h+')';
        }
        index.push(`${file} | question ${layout.q||qid||'-'} | view ${layout.view}${note}`);
        return 1;
      }catch(e){failed.push(file+': '+e.message.split('\n')[0]);index.push(`${file} | FAILED ${e.message.split('\n')[0]}`);return 0;}
    }
    async function step(label,code){try{await evaluate(code);return true}catch(e){failed.push(label+': '+e.message.split('\n')[0]);index.push(label+' | FAILED '+e.message.split('\n')[0]);return false}}

    let made=0;
    const answerRight=`pick(Q_ans());reveal();`;
    for(const [width,height] of [[1440,900],[1180,820]]){
      await cdp('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});
      for(const theme of ['dark','light']){
        const reset=`setTheme('${theme}');S.answers={};S.conf={};S.flags={};`;
        // 1 unanswered
        if(await step('01-'+theme+width,reset+`__start();`))made+=await shot('01','unanswered',width,height,theme,'');
        // 2 right
        if(await step('02-'+theme+width,reset+`__start();pick(__base.answer);reveal();`))made+=await shot('02','right',width,height,theme,'',true);
        // 3 wrong
        if(await step('03-'+theme+width,reset+`__start();pick((__base.answer+1)%__base.options.length);reveal();`))made+=await shot('03','wrong',width,height,theme,'',true);
        // 4 long stem + figure
        if(await step('04-'+theme+width,reset+`startQuiz([__figure.id],chapterName(__figure.chapter));await Promise.all(Array.from(document.images).filter(i=>i.closest('.qfig')).map(i=>i.decode().catch(()=>{})));`))made+=await shot('04','long-figure',width,height,theme,'');
        // 5 case
        if(await step('05-'+theme+width,reset+`startQuiz([__case.id],chapterName(__case.chapter));`))made+=await shot('05','case',width,height,theme,'');
        // 6 exam
        if(await step('06-'+theme+width,reset+`startQuiz(__ids,'Timed practice',null,null,{end:Date.now()+720000,mins:12,done:false,picked:{}});pick(__base.answer);`))made+=await shot('06','exam',width,height,theme,'');
        // 7 panel
        if(await step('07-'+theme+width,reset+`__start();S.flags[Q.ids[3]]=true;openJump();await new Promise(r=>setTimeout(r,150));`))made+=await shot('07','panel',width,height,theme,'');
        await step('close-'+theme+width,`closeQuestionPanel();closeModal();`);
        // 8 two options
        if(__skip(fx.two)){failed.push('08 no 2-option question');}
        else if(await step('08-'+theme+width,reset+`startQuiz([__two.id],chapterName(__two.chapter));`))made+=await shot('08','options-2',width,height,theme,fx.two);
        // 8b answered 2-option? not requested
        // 9 many options
        if(__skip(fx.many)){failed.push('09 no 8-10 option question');}
        else if(await step('09-'+theme+width,reset+`startQuiz([__many.id],chapterName(__many.chapter));`))made+=await shot('09','options-'+fx.many[1],width,height,theme,fx.many[0]);
        // 10 missing explanation
        if(await step('10-'+theme+width,reset+`startQuiz([__missing.id],'Missing explanation');pick(__missing.answer);reveal();$('toast').classList.remove('show');`))made+=await shot('10','missing-explanation',width,height,theme,fx.missing[0],true);
        // 11 debris
        if(__skip(fx.debris)){failed.push('11 no debris explanation in data');}
        else if(await step('11-'+theme+width,reset+`startQuiz([__debris.id],chapterName(__debris.chapter));if(__debris.type==='case'){$('caseInput').value='sample';revealCase();}else{pick(__debris.answer);reveal();}`))made+=await shot('11','debris',width,height,theme,fx.debris,true);
      }
    }
    const errs=await evaluate('return __qaErrors');
    return {made,failed,index,consoleErrors,pageErrors:errs,fx};
  } finally {
    if(socket){try{await cdp('Browser.close')}catch(_){}try{socket.close()}catch(_){}}
    if(browser){browser.kill();await pause(500)}
    if(work&&path.dirname(path.resolve(work))===path.resolve(os.tmpdir())&&path.basename(work).startsWith('herophilus-step1b-')){
      try{fs.rmSync(work,{recursive:true,force:true,maxRetries:10,retryDelay:200})}catch(e){console.error('Cleanup: '+e.message)}
    }
  }
}
function __skip(v){return !v}

(async()=>{
  let res,lastErr;
  for(let n=1;n<=4&&!res;n++){
    try{res=await attempt();}catch(e){lastErr=e;console.error('attempt '+n+' failed: '+e.message);await pause(1500);}
  }
  if(!res){console.error('ALL ATTEMPTS FAILED '+(lastErr&&lastErr.stack));process.exitCode=1;return;}
  const all=[...res.consoleErrors.map(e=>'CONSOLE '+e),...res.pageErrors.map(e=>'PAGE '+e)];
  const lines=[...res.index,'',`FILES MADE (viewport captures): ${res.made}`,'FAILED / NOT FOUND: '+(res.failed.length?'':'none'),...res.failed.map(f=>'  '+f),'',`CONSOLE+PAGE ERRORS: ${all.length}`,...all.map(e=>'  '+e)];
  fs.writeFileSync(path.join(out,'b-index.txt'),lines.join('\n')+'\n');
  console.log(`made ${res.made}, failed ${res.failed.length}, errors ${all.length}`);
})();
