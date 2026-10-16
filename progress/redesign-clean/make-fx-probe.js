/* Builds tools/ui-tasks-style probe "fx-probe.js" next to this file from tools/ui-tasks/tasks.js (same harness, new tasks),
   then run: node progress/redesign-clean/fx-probe.js [motion]
   With "motion" the browser is NOT told to prefer reduced motion, so the Lottie players really play.
   Checks: answer motion mounts once per check, panel focus/Escape/return, grid jump, explanation escaping, exam mode silence. */
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..','..');
let s=fs.readFileSync(path.join(root,'tools','ui-tasks','tasks.js'),'utf8');
s=s.replace("const root=path.resolve(__dirname,'../..');","const root="+JSON.stringify(root.replace(/\\/g,'/'))+";");
/* labels */
s=s.replace(/const labels=\[[^\]]*\];/,"const labels=['wrong answer: cross + shake once, tick static','redraw does not replay','right answer: tick + pulse','panel: dialog, Escape returns focus to button','panel: J returns focus to option; grid click jumps','explanation render rule escapes','exam mode: no motion, no check answer button'];");
/* motion flag: skip reduced-motion emulation */
s=s.replace("await cdp('Emulation.setEmulatedMedia'","if(!process.argv.includes('motion'))await cdp('Emulation.setEmulatedMedia'");
/* keep the harness' animation kill only when reduced; with motion we leave animations alone */
s=s.replace("<style>*,*::before,*::after{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}</style>","<style>.reveal{opacity:1!important;transform:none!important}</style>");
const a=s.indexOf('  await task(1,');
const b=s.indexOf('})().catch');
const tasks=`  await task(1,()=>check(\`
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
  \`));
  await task(2,async()=>{
    await check(\`
    toggleFlag(__q.id);
    assert(!document.querySelector('.animate__animated'),'animation replayed on redraw');
    assert(document.querySelectorAll('.fx svg').length===2,'end-state icons missing after redraw');
    window.__f0=document.querySelector('.opt.wrong .fx svg path[fill]').getAttribute('fill');
    setTheme(currentTheme()==='light'?'dark':'light',false);
    \`);
    await pause(150);
    await check(\`
    const f1=document.querySelector('.opt.wrong .fx svg path[fill]').getAttribute('fill');
    assert(f1!==__f0,'tint stale after theme change: '+f1);
    assert(document.querySelectorAll('.fx svg').length===2,'icons lost after theme change');
    assert(!document.querySelector('.animate__animated'),'animation replayed on theme change');
    \`);
  });
  await task(3,()=>check(\`
    startChapter(__q.chapter,true);
    const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
    pick(q.answer);reveal();
    const good=document.querySelector('.opt.correct');
    assert(good&&!document.querySelector('.opt.wrong'),'rows wrong');
    assert(good.querySelector('.fx svg'),'tick missing');
    assert(good.classList.contains('animate__pulse')||matchMedia('(prefers-reduced-motion:reduce)').matches,'pulse missing');
  \`));
  await task(4,async()=>{
    await evaluate(\`go({name:'quiz'});const btn=document.getElementById('questionsButton');btn.focus();btn.click();\`);
    await pause(150);
    await check(\`const d=document.getElementById('questionPanel');assert(d.open&&d.matches(':modal'),'dialog not modal-open');
      assert(d.contains(document.activeElement),'focus not inside dialog');
      assert(d.querySelectorAll('.radio-input input').length===Q.ids.length,'grid count');\`);
    await cdp('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
    await cdp('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
    await pause(200);
    await check(\`assert(!document.getElementById('questionPanel').open,'Escape did not close');
      assert(document.activeElement===document.getElementById('questionsButton'),'focus not back on button: '+(document.activeElement&&document.activeElement.outerHTML.slice(0,60)));\`);
  });
  await task(5,async()=>{
    await evaluate(\`startQuiz(QUESTIONS.filter(x=>x.type!=='case'&&x.options&&x.options.length>1).slice(10,14).map(x=>x.id),'probe');const o=document.querySelector('.opts .opt-answer');o.focus();window.__o=o;
      document.dispatchEvent(new KeyboardEvent('keydown',{key:'j',bubbles:true}));\`);
    await pause(100);
    await check(\`assert(document.getElementById('questionPanel').open,'J did not open');
      closeQuestionPanel();\`);
    await pause(200);
    await check(\`assert(document.activeElement===__o,'focus not back on option after J');
      const i0=Q.i;openJump();const spans=document.querySelectorAll('#questionPanel .check');
      assert(Q.ids.length>=3,'need 3 questions');spans[2].click();
      assert(Q.i===2&&!document.getElementById('questionPanel').open,'grid click did not jump');\`);
  });
  await task(6,()=>check(\`
    const h=explanationHTML('> quote <img src=x onerror=alert(1)>\\\\nitem one • item two • item three\\\\nplain with \\\\u0060code\\\\u0060 here');
    assert(!/<img/i.test(h),'html injected: '+h);
    assert(/<blockquote>/.test(h)&&/<ul><li>/.test(h)&&/<code>code<\\\\/code>/.test(h),'rule outputs missing: '+h);
  \`));
  await task(7,()=>check(\`
    go({name:'mock'});runMock(10);const q=QUESTIONS.find(x=>x.id===Q.ids[Q.i]);
    pick(q.answer);
    assert(!document.querySelector('.fx')&&!document.querySelector('.animate__animated'),'motion in exam');
    assert(!document.querySelector('.check-answer'),'check answer button in exam');
  \`));
`;
s=s.slice(0,a)+tasks+s.slice(b);
fs.writeFileSync(path.join(__dirname,'fx-probe.js'),s);
console.log('written fx-probe.js');
