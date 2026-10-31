/* Front page (step 4, 2026-10-29). Shown to a visitor on a device with no profile, before the gate.
   Everything that moves here is copied published code; this file wires it to the page and tears it down again.
   It contains NO animation, easing, timing or keyframes of its own.
     - N1 "heading rises line by line": codrops/CoverPageTransition, src/js/textLinesReveal.js (MIT), TextLinesReveal
       class and wrapLines (utils.js) copied as published. SplitType 0.3.4 (vendor/split-type.min.js) does the line split.
       Only the class prefix (oh -> fp-oh) and the import lines changed.
     - M3 "depth on scroll", on the painting: codrops/OneElementScroll, js/index.js lines 138-158,
       addParallaxToColumnImages (y intensity to -intensity, ease 'sine', trigger the element, 'top bottom' to 'bottom top',
       scrub:true). Only the intensity number (a size) is ours.
     - M4 self-drawing ring: progressbar.js (vendor/progressbar.min.js), options as in the subject page (subject-fx.js).
     - Counter: HubSpot odometer 0.4.8 (MIT), init as in its README: new Odometer({el, value, format, theme}); od.update(n).
     - GSAP + ScrollTrigger + Lenis: the files already in vendor/; Lenis wired as subject-fx.js wires it.
   Licences: assets/licences/front-page-LICENSE.txt.
   Lifecycle: open() builds the page, close() (called first thing by showGate) reverts the gsap context, destroys Lenis,
   the rings and the counter and empties the root, so nothing of this page runs once the gate is up.
   The live demo has its own tiny renderer, DOM ids prefixed fp-, and reads the question pool only. It never calls the quiz
   engine, record(), save(), S, localStorage or any wardround.* key.
   Reduced motion: no Lenis, no split, no scroll motion; the counter shows its final number, the ring is drawn. */
const FrontPage=(function(){
  /* Demo choice is fixed: one question per subject, printed key, printed explanation. */
  const DEMO_IDS=['entep-ear-20','opqb-t20-830','npep-loc-6'];
  const TINT={ent:'ent',ophtho:'ophtho',neuropsych:'neuro',pediatrics:'peds'};
  let root=null,ctx=null,lenis=null,tick=null,bars=[],resizers=[],od=null,demo=[],di=0,picked=-1;
  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const have=()=>typeof gsap!=='undefined'&&typeof ScrollTrigger!=='undefined'&&typeof Lenis!=='undefined'&&typeof SplitType!=='undefined';
  const fmt=n=>n.toLocaleString('en-US');
  const esc2=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  /* the stems carry **bold** markers; escape first, then turn the markers into <strong> */
  const bold=s=>esc2(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');

  /* ---- N1: TextLinesReveal and wrapLines, copied from codrops/CoverPageTransition -------------------------- */
  const wrapLines=(arr,wrapType,wrapClass)=>{
    arr.forEach(el=>{
      const wrapEl=document.createElement(wrapType);
      wrapEl.classList=wrapClass;
      el.parentNode.appendChild(wrapEl);
      wrapEl.appendChild(el);
    });
  };
  class TextLinesReveal{
    DOM={el:null};
    SplitTypeInstance;
    isVisible;
    inTimeline;
    outTimeline;
    constructor(DOM_el){
      this.DOM={el:DOM_el};
      this.SplitTypeInstance=new SplitType(this.DOM.el,{types:'lines'});
      wrapLines(this.SplitTypeInstance.lines,'div','fp-oh');
      this.initEvents();
    }
    in(animation=true){
      this.isVisible=true;
      gsap.killTweensOf(this.SplitTypeInstance.lines);
      this.inTimeline=gsap.timeline({defaults:{duration:1.1,ease:'power4.inOut'}})
        .addLabel('start',0)
        .set(this.SplitTypeInstance.lines,{yPercent:105},'start');
      if(animation){
        this.inTimeline.to(this.SplitTypeInstance.lines,{yPercent:0,stagger:0.05},'start');
      }else{
        this.inTimeline.set(this.SplitTypeInstance.lines,{yPercent:0},'start');
      }
      return this.inTimeline;
    }
    out(animation=true){
      this.isVisible=false;
      gsap.killTweensOf(this.SplitTypeInstance.lines);
      this.outTimeline=gsap.timeline({defaults:{duration:1.1,ease:'power4.inOut'}}).addLabel('start',0);
      if(animation){
        this.outTimeline.to(this.SplitTypeInstance.lines,{yPercent:-105,stagger:0.05},'start');
      }else{
        this.outTimeline.set(this.SplitTypeInstance.lines,{yPercent:-105},'start');
      }
      return this.outTimeline;
    }
    initEvents(){
      const onResize=()=>{
        this.SplitTypeInstance.split();
        wrapLines(this.SplitTypeInstance.lines,'div','fp-oh');
        if(!this.isVisible){
          gsap.set(this.SplitTypeInstance.lines,{yPercent:105});
        }
      };
      window.addEventListener('resize',onResize);
      resizers.push(onResize);
    }
  }

  /* ---- data read at runtime, never typed ------------------------------------------------------------------- */
  /* QUESTIONS is empty until a profile picks its term (data/questions.js, rebuildQuestions), so this page reads the
     whole pool, Q_ALL, held back only by LOCKED_MODULES, the same rule rebuildQuestions applies. */
  const pool=()=>Q_ALL.filter(q=>LOCKED_MODULES.indexOf(q.module)<0);
  function facts(){
    const P=pool();
    const subjects=MODULES.map(m=>{
      const own=P.filter(q=>q.module===m.id);
      return {id:m.id,name:m.name,n:own.length,
        banks:BANKS.filter(b=>own.some(q=>banksOf(q).indexOf(b.id)>=0)).map(b=>b.name)};
    }).filter(s=>s.n>0);
    const banks=BANKS.map(b=>({name:b.name,n:P.filter(q=>banksOf(q).indexOf(b.id)>=0).length})).filter(b=>b.n>0);
    const withExp=P.filter(q=>q.explanation&&String(q.explanation).trim()).length;
    return {subjects,banks,total:P.length,expShare:P.length?withExp/P.length:0};
  }

  /* ---- page markup ----------------------------------------------------------------------------------------- */
  function build(f){
    /* the demo count is the array length, spelt out only for the heading */
    const demoWord=['no','one','two','three','four','five'][demo.length]||String(demo.length);
    const names=f.subjects.map(s=>s.name);
    const list=names.length>1?names.slice(0,-1).join(', ')+' and '+names[names.length-1]:names.join('');
    const subjRows=f.subjects.map(s=>`<li class="fp-subj" data-tint="${TINT[s.id]||''}">
        <span class="fp-subj-name">${esc2(s.name)}</span>
        <span class="fp-subj-n">${fmt(s.n)} questions</span>
        <span class="fp-subj-banks">${esc2(s.banks.join(', '))}</span></li>`).join('');
    const bankRows=f.banks.map(b=>`<li><span>${esc2(b.name)}</span><span class="fp-bank-n">${fmt(b.n)}</span></li>`).join('');
    return `<header class="fp-bar">
        <span class="fp-mark"><img src="assets/icon-96.png" alt="" width="28" height="28"> Herophilus</span>
        <button class="tb-btn themebtn" onclick="toggleTheme()"></button>
      </header>
      <section class="fp-hero" aria-labelledby="fp-h1">
        <div class="fp-art" aria-hidden="true"></div>
        <div class="fp-scrim" aria-hidden="true"></div>
        <div class="fp-hero-in">
          <h1 id="fp-h1" class="fp-h1 fp-split">Practise clinical questions, review what you miss, sit timed exams.</h1>
          <p class="fp-lede">A question bank for ${esc2(list)}.</p>
          <div class="fp-cta">
            <button class="btn go" onclick="showGate()">Start</button>
            <button class="btn" onclick="showGate('signin')">Sign in</button>
          </div>
        </div>
      </section>
      <section class="fp-sec" id="fp-what" aria-labelledby="fp-what-h"><div class="fp-wrap">
        <div class="fp-cols"><div>
        <h2 id="fp-what-h" class="fp-h2 fp-split">What is in it</h2>
        <p class="fp-total"><span class="fp-total-n" id="fp-total" data-final="${f.total}">${fmt(f.total)}</span> <span class="fp-total-l">questions</span></p>
        <h3 class="fp-h3">Question books</h3>
        <ul class="fp-banks">${bankRows}</ul>
        <p class="fp-note">A question that more than one book prints counts under each of them.</p>
        </div>
        <ul class="fp-subjs">${subjRows}</ul></div>
      </div></section>
      <section class="fp-sec" id="fp-how" aria-labelledby="fp-how-h"><div class="fp-wrap">
        <div class="fp-cols"><div class="fp-how-l">
        <h2 id="fp-how-h" class="fp-h2 fp-split">How it works</h2>
        <div class="fp-ringbox">
          <div class="fp-ring" id="fp-ring" data-v="${f.expShare}" role="img" aria-label="${Math.floor(f.expShare*100)} percent of questions carry an explanation"></div>
          <p class="fp-note">of the questions come with the explanation printed in the book.</p>
        </div></div>
        <div class="fp-steps">
          <article class="fp-step">
            <h3 class="fp-h3 fp-split">Focus quiz</h3>
            <p class="fp-split">One question at a time. After each answer you see the right option and the explanation printed with it.</p>
          </article>
          <article class="fp-step">
            <h3 class="fp-h3 fp-split">Spaced review</h3>
            <p class="fp-split">Questions come back on a schedule built from your past answers. The ones due are gathered in one review deck.</p>
          </article>
          <article class="fp-step">
            <h3 class="fp-h3 fp-split">Timed exams</h3>
            <p class="fp-split">Sit a mock exam under a clock. Choose the subjects, chapters and question books it draws from.</p>
          </article>
        </div></div>
      </div></section>
      <section class="fp-sec" id="fp-try" aria-labelledby="fp-try-h"><div class="fp-wrap">
        <div class="fp-solo"><div>
        <h2 id="fp-try-h" class="fp-h2 fp-split">Try ${demoWord} ${demo.length===1?'question':'questions'}</h2>
        <p class="fp-note">Nothing you answer here is saved.</p></div>
        <div class="fp-demo" id="fp-demo"></div></div>
      </div></section>
      <section class="fp-sec fp-end" aria-labelledby="fp-end-h"><div class="fp-wrap">
        <h2 id="fp-end-h" class="fp-h2">Ready when you are</h2>
        <div class="fp-cta">
          <button class="btn go" onclick="showGate()">Start</button>
          <button class="btn" onclick="showGate('signin')">Sign in</button>
        </div>
      </div></section>`;
  }

  /* ---- live demo: own renderer, own ids, reads the question pool only ---------------------------------------------- */
  function drawDemo(){
    const host=root&&root.querySelector('#fp-demo');
    if(!host)return;
    if(!demo.length){host.innerHTML='';return}
    if(di>=demo.length){
      host.innerHTML=`<div class="fp-card" id="fp-card"><p class="fp-q-stem">That was all ${demo.length===1?'one':'of them'}.</p>
        <div class="fp-cta"><button class="btn go" onclick="showGate()">Start</button><button class="btn" id="fp-again" type="button">Try them again</button></div></div>`;
      host.querySelector('#fp-again').onclick=()=>{di=0;picked=-1;drawDemo();if(typeof ScrollTrigger!=='undefined')ScrollTrigger.refresh()};
      return;
    }
    const q=demo[di],done=picked>=0;
    const mod=MODULES.find(m=>m.id===q.module);
    const opts=q.options.map((o,i)=>{
      let st='';
      if(done)st=i===q.answer?'right':(i===picked?'wrong':'');
      return `<li><button type="button" class="fp-opt" id="fp-opt-${i}" data-state="${st}" aria-pressed="${i===picked}" data-i="${i}">
        <span class="fp-opt-k">${String.fromCharCode(65+i)}</span><span>${esc2(o)}</span></button></li>`;
    }).join('');
    let fb='';
    if(done){
      const ok=picked===q.answer;
      fb=`<div class="fp-fb" id="fp-fb" data-ok="${ok}" role="status">
        <p class="fp-fb-t">${ok?'Correct.':'Not quite. The answer is '+String.fromCharCode(65+q.answer)+', '+esc2(q.options[q.answer])+'.'}</p>
        <p class="fp-fb-x">${esc2(q.explanation)}</p>
        <button type="button" class="btn go" id="fp-next">${di<demo.length-1?'Next question':'Finish'}</button></div>`;
    }
    host.innerHTML=`<div class="fp-card" id="fp-card">
      <p class="fp-q-meta">${esc2(mod?mod.name:'')} &middot; question ${di+1} of ${demo.length}</p>
      <p class="fp-q-stem" id="fp-stem">${bold(q.stem)}</p>
      <ul class="fp-opts" aria-labelledby="fp-stem">${opts}</ul>${fb}</div>`;
    host.querySelectorAll('.fp-opt').forEach(b=>b.onclick=()=>{
      if(picked>=0)return;
      picked=+b.dataset.i;drawDemo();
      const nx=host.querySelector('#fp-next');if(nx)nx.focus({preventScroll:true});
      if(typeof ScrollTrigger!=='undefined')ScrollTrigger.refresh();
    });
    const nx=host.querySelector('#fp-next');
    if(nx)nx.onclick=()=>{di++;picked=-1;drawDemo();if(typeof ScrollTrigger!=='undefined')ScrollTrigger.refresh()};
  }

  /* ---- motion wiring (all copied published code; this only chooses where it runs) --------------------------- */
  function ringIn(host,v){
    if(typeof ProgressBar==='undefined')return null;
    const bar=new ProgressBar.Circle(host,{strokeWidth:6,easing:'easeInOut',duration:1400,color:'#888',trailColor:'#888',trailWidth:1,svgStyle:null,
      text:{value:'0'},step:function(s,c){c.setText(Math.floor(c.value()*100)+' %')}});
    bars.push(bar);
    return bar;
  }
  function counterIn(el,total){
    if(typeof Odometer==='undefined'){return null}
    od=new Odometer({el:el,value:0,format:'(,ddd)',theme:'minimal'});
    return od;
  }

  function wire(f){
    const still=reduced()||!have();
    const ringEl=root.querySelector('#fp-ring');
    const bar=ringEl?ringIn(ringEl,f.expShare):null;
    const totalEl=root.querySelector('#fp-total');
    if(still){
      /* reading view: final number, ring drawn, no scroll motion, no Lenis, lines left as plain text */
      if(bar)bar.set(f.expShare);
      root.classList.remove('fp-pre');
      return;
    }
    const odo=totalEl?counterIn(totalEl,f.total):null;
    gsap.registerPlugin(ScrollTrigger);
    lenis=new Lenis({lerp:.2});
    lenis.on('scroll',ScrollTrigger.update);
    tick=time=>{lenis.raf(time*1000)};
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    ctx=gsap.context(()=>{
      /* N1: the hero heading rises on arrival; every other heading and block line rises as it scrolls into view */
      const splits=[...root.querySelectorAll('.fp-split')].map(el=>({el,t:new TextLinesReveal(el)}));
      splits.forEach(({el,t},i)=>{
        if(el.closest('.fp-hero')){
          t.in();
        }else{
          t.out(false);
          ScrollTrigger.create({trigger:el,start:'top 96%',once:true,onEnter:()=>t.in()});
        }
      });
      root.classList.remove('fp-pre');   /* headings are split and positioned: show them */
      /* M3: depth on scroll, on the painting. Copied as published from codrops/OneElementScroll, js/index.js
         lines 138-158 (addParallaxToColumnImages, MIT): gsap.fromTo(image,{y:intensity},{y:-intensity,ease:'sine',
         scrollTrigger:{trigger:image,start:'top bottom',end:'bottom top',scrub:true}}). Same direction, same start/end,
         same ease and scrub; only the intensity number (a size) is ours: 75, the demo's own step, which the painting's
         80 px overhang (css/front.css) covers. */
      const intensity=75;
      const art=root.querySelector('.fp-art');
      gsap.fromTo(art,{y:intensity},{
        y:-intensity,ease:'sine',
        scrollTrigger:{trigger:art,start:'top bottom',end:'bottom top',scrub:true}
      });
      /* counter and ring start when they scroll into view */
      if(odo&&totalEl)ScrollTrigger.create({trigger:totalEl,start:'top 90%',once:true,onEnter:()=>odo.update(f.total)});
      if(bar&&ringEl)ScrollTrigger.create({trigger:ringEl,start:'top 90%',once:true,onEnter:()=>bar.animate(f.expShare)});
    },root);
  }

  /* ---- lifecycle ------------------------------------------------------------------------------------------- */
  function open(){
    if(root)close();
    if(typeof hideGate==='function')hideGate();
    if(typeof hideSplash==='function')hideSplash();
    if(typeof clepHide==='function')clepHide();
    const f=facts();
    demo=DEMO_IDS.map(id=>pool().find(q=>q.id===id)).filter(Boolean);
    di=0;picked=-1;
    root=document.createElement('div');
    root.className='front';root.id='front';
    root.innerHTML=build(f);
    document.body.appendChild(root);
    document.documentElement.classList.add('front-on');
    if(typeof paintThemeBtn==='function')paintThemeBtn();
    drawDemo();
    scrollTo(0,0);
    /* headings stay hidden until they are split into lines (else they flash unsplit); wire() lifts the class */
    if(!reduced()&&have())root.classList.add('fp-pre');
    const mine=root;
    const go=()=>{if(root===mine&&!mine.__wired){mine.__wired=true;wire(f)}};
    Promise.race([document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve(),new Promise(r=>setTimeout(r,2500))]).then(go);
  }
  function close(){
    resizers.forEach(fn=>window.removeEventListener('resize',fn));resizers=[];
    if(ctx){ctx.revert();ctx=null}
    if(typeof ScrollTrigger!=='undefined'&&root)ScrollTrigger.getAll().forEach(t=>t.kill());
    if(tick){gsap.ticker.remove(tick);tick=null;gsap.ticker.lagSmoothing(500,33)}   /* 500,33 = GSAP's published default */
    if(lenis){lenis.off('scroll',ScrollTrigger.update);lenis.destroy();lenis=null}
    bars.forEach(b=>{try{b.destroy()}catch(e){}});bars=[];
    od=null;
    if(root){root.remove();root=null}
    document.documentElement.classList.remove('front-on');
  }
  const isOpen=()=>!!root;
  const stats=()=>({open:!!root,lenis:lenis?1:0,triggers:typeof ScrollTrigger!=='undefined'?ScrollTrigger.getAll().length:0,bars:bars.length});
  return {open,close,isOpen,stats};
})();
