function poseSrc(p){ return `assets/clep/${CLEP_POSES[p]||CLEP_POSES[CL_REST]}.png`; }

/* Which pose belongs to which screen. Anything not named here falls back to
   CL_REST, so a view added later cannot throw. */
const CL_POSE_VIEW={
  home:'welcoming', module:'pointing', theory:'pointing', flagged:'pointing',
  moved:'pointing', schedule:'presenting', session:'presenting',
  quiz:'thinking', mock:'thinking', review:'thinking'
};
/* The rest poses she drifts between when nothing is happening. Kept to the two
   that read as "waiting" — the expressive ones are reserved for events, or
   they stop meaning anything. */
const CL_IDLE_POSES=['waving','welcoming'];

/* Every pose is fetched once, up front. Without this the first swap to a pose
   shows an EMPTY frame while the file loads — the ghost has already faded and
   the incoming image has no pixels yet. Decoding costs nothing later. */
function clepPreload(){
  Object.keys(CLEP_POSES).forEach(p=>{ const i=new Image(); i.src=poseSrc(p); });
}
function clepFigure(){
  return `<img class="cl-fig cl-main" id="clepFig" src="${poseSrc(CL_REST)}"
            alt="" draggable="false" width="360" height="360">`+
         /* the ghost carries a src from the start: an <img> with none draws a
            broken-image glyph in the corner, which is what shipped for one
            render before a screenshot caught it */
         `<img class="cl-fig cl-ghost" id="clepGhost" src="${poseSrc(CL_REST)}"
            alt="" aria-hidden="true" draggable="false" width="360" height="360">`;
}

/* ---- changing pose ------------------------------------------------------
   The swap is hidden inside a glitch burst rather than cross-faded: she is a
   projection, and a projection that changes should fail and re-form. The
   outgoing frame is copied into the ghost so it can be torn apart while the
   new one comes up underneath it; both animations live in CSS.

   Restarting the animation needs the class removed, a forced reflow, and the
   class added again — without the reflow the browser coalesces the two style
   changes and a second swap inside .46s simply does nothing. */
const CL_SWAP_MS=460;
function clepPose(name,opt){
  opt=opt||{};
  const el=$('clep'), fig=$('clepFig'), gh=$('clepGhost');
  if(!el||!fig)return;
  const p=CLEP_POSES[name]?name:CL_REST;
  if(p===CLEP.pose&&!opt.force)return;
  const prev=CLEP.pose||CL_REST;
  CLEP.pose=p;
  /* collapsed or hidden: no one can see her, so just hold the state */
  if(el.hidden||CLEP.mini){ fig.src=poseSrc(p); return }
  if(clepReduced()){ fig.src=poseSrc(p); return }   /* cut, no tear */
  if(gh)gh.src=poseSrc(prev);
  fig.src=poseSrc(p);
  el.style.setProperty('--cl-band-y',(10+Math.random()*70).toFixed(0)+'%');
  el.classList.remove('swap','gl');
  void el.offsetWidth;                               /* reflow — see above */
  el.classList.add('swap','gl');
  clearTimeout(CLEP.swapT);
  CLEP.swapT=setTimeout(()=>{ el.classList.remove('swap','gl') },CL_SWAP_MS);
}
/* The pose the current screen asks for. Used to settle her back after an
   event pose, so "she reacted" always returns to "she is here with you". */
/* guarded: clepShow() can run before `view` exists on a cold boot, and an
   undefined global there would throw inside the mount rather than degrade */
function clepViewPose(){
  try{ return CL_POSE_VIEW[clepViewKey()]||CL_REST }catch(e){ return CL_REST }
}
function clepSettle(ms){
  clearTimeout(CLEP.settleT);
  CLEP.settleT=setTimeout(()=>clepPose(clepViewPose()),ms||2600);
}
function clepMiniDial(){
  return `<svg viewBox="0 0 24 24" width="21" height="21" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="var(--cl-1)" stroke-width="1.8"/>
    <path d="M12 7.2V12l3.2 2.1" stroke="var(--cl-w)" stroke-width="1.8" stroke-linecap="round"/></svg>`;
}

/* ---- device preferences ------------------------------------------------- */
function clepLoadCfg(){
  try{
    const o=JSON.parse(localStorage.getItem(CLKEY)||'null');
    /* posQ is the question screens' own spot and is read separately: an older
       stored value has only `pos`, and she should fall back to the new default
       corner there rather than inheriting the browsing one */
    if(o){CLEP.mini=!!o.mini;CLEP.muted=!!o.muted;CLEP.pos=o.pos||null;CLEP.posQ=o.posQ||null}
  }catch(e){}
}
function clepSaveCfg(){
  try{localStorage.setItem(CLKEY,JSON.stringify(
    {mini:CLEP.mini,muted:CLEP.muted,pos:CLEP.pos,posQ:CLEP.posQ}))}catch(e){}
}
const clepReduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ---- mounting ----------------------------------------------------------- */
function clepMount(){
  const el=$('clep');
  if(!el||el.dataset.built)return;
  el.dataset.built='1';
  el.innerHTML=`
  <div class="cl-col">
    <div class="cl-say" id="clepSay">
      <button class="cl-x" onclick="clepDismiss()" aria-label="Dismiss">&times;</button>
      <span id="clepTxt"></span>
    </div>
    <div class="cl-hud" id="clepHud"></div>
    <div class="cl-tools">
      <button class="cl-tool" onclick="clepAsk()" title="What is this screen?" aria-label="Explain this screen">?</button>
      <button class="cl-tool" id="clepMuteBtn" onclick="clepMute()"></button>
      <button class="cl-tool" onclick="clepMini()" title="Collapse" aria-label="Collapse">&minus;</button>
    </div>
  </div>
  <div class="cl-body" id="clepBody" role="button" tabindex="0" aria-label="Clepsydra — ask about this screen">
    <div class="cl-stage">${clepFigure()}</div>
    <span class="cl-base"></span>
    <span class="cl-scan"></span><span class="cl-band"></span>
  </div>
  <button class="cl-mini" onclick="clepMini()" aria-label="Bring the Clepsydra back">
    ${clepMiniDial()}<span id="clepMiniT">Clepsydra</span></button>`;
  const b=$('clepBody');
  b.addEventListener('pointerdown',clepDrag);
  b.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){e.preventDefault();clepAsk()}
  });
  addEventListener('resize',clepPlace);
  /* Re-measure the book on resize — the column width IS the view width, so a
     window change repaginates. Debounced: measuring forces layout, and a drag
     fires this continuously. The page index is kept by anchoring on the section
     currently in view rather than the number, which a repagination invalidates. */
  let bkRT=null;
  addEventListener('resize',()=>{
    if(!bkOn())return;
    let anchor='';BK.secs.forEach(s=>{if(s.page<=BK.page)anchor=s.id});
    clearTimeout(bkRT);
    bkRT=setTimeout(()=>{bkMeasure();if(anchor)bkToSec(anchor);else bkPaint();},140);
  });
  /* Swipe, for reading on a phone or tablet. Horizontal intent only — a mostly
     vertical drag is the user trying to scroll the page, not turn a leaf. */
  let sx=0,sy=0,sw=false;
  document.addEventListener('touchstart',e=>{
    if(!bkOn()||!e.touches[0])return;
    sx=e.touches[0].clientX;sy=e.touches[0].clientY;sw=true;
  },{passive:true});
  document.addEventListener('touchend',e=>{
    if(!sw||!bkOn()||!e.changedTouches[0])return;
    sw=false;
    const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;
    if(Math.abs(dx)<48||Math.abs(dx)<Math.abs(dy)*1.4)return;
    bkTurn(dx<0?1:-1);
  },{passive:true});
  clepPaintTools();
  clepPreload();
}
function clepShow(){
  clepMount();
  const el=$('clep'); if(!el)return;
  CLEP.on=true; el.hidden=false;
  el.classList.toggle('mini',CLEP.mini);
  clepPlace(); clepGlitchLoop(); clepPaint(); clepIdleLoop(); clepShiftLoop();
  /* arrive in the pose this screen asks for, without a tear — there is no
     previous pose to fail out of */
  CLEP.pose=clepViewPose();
  const fig=$('clepFig'); if(fig)fig.src=poseSrc(CLEP.pose);
}
function clepHide(){
  CLEP.on=false;
  const el=$('clep'); if(el)el.hidden=true;
  clearTimeout(CLEP.glT); clearTimeout(CLEP.idleT);
  clearTimeout(CLEP.shiftT); clearTimeout(CLEP.settleT); clearTimeout(CLEP.swapT);
}

/* ---- where she stands ---------------------------------------------------
   She keeps TWO spots, not one. On the question screens Skip and Next are
   pinned to the right edge of the card and she was covering them, so there she
   docks bottom-LEFT; everywhere else she keeps her usual bottom-right corner.
   Two remembered positions rather than one, because a single one would mean
   dragging her anywhere on a browse screen puts her back over the buttons the
   next time a question opens. Both are device preferences, like the theme. */
const CL_LEFT_VIEWS=['quiz','mock','review'];
/* guarded the same way clepViewPose() is: clepPlace() can run before `view`
   exists on a cold boot */
function clepOnLeft(){
  try{ return CL_LEFT_VIEWS.includes(view.name) }catch(e){ return false }
}
function clepPlace(){
  const el=$('clep'); if(!el||el.hidden)return;
  const left=clepOnLeft();
  el.classList.toggle('left',left);
  const p=left?CLEP.posQ:CLEP.pos;
  if(!p){
    el.style.left=el.style.top=el.style.right=el.style.bottom='';
    if(left)clepClearRail(el);
    return;
  }
  /* clamped every time, not just on drag: a window that shrank between visits
     would otherwise leave her parked off-screen with no way back */
  const w=el.offsetWidth||160, h=el.offsetHeight||140;
  const x=Math.min(Math.max(p.x,6),Math.max(6,innerWidth-w-6));
  const y=Math.min(Math.max(p.y,6),Math.max(6,innerHeight-h-6));
  el.style.left=x+'px'; el.style.top=y+'px';
  el.style.right='auto'; el.style.bottom='auto';
}
/* ⚠️ The window's bottom-left corner IS THE RAIL — 238px wide and full height —
   and moving her onto it would only trade one covered control for another. The
   rail is fixed too, so unlike an overlap with the question card that one
   cannot be scrolled out of the way: the links would be under her for good.
   Measured, not assumed: docked at the window edge at 1440x760 she landed on
   Review deck and Mock exam.

   So the left dock is the RAIL'S right edge, not the window's — the bottom-left
   of the reading column. Asked of the element rather than encoded as a
   breakpoint, because the rail slides off-canvas below 860px and there the bare
   window edge is right again; one geometry test covers both.

   Collapsed counts too. The pill looked small enough to be exempt and is not:
   measured at 1366x768 it sat on Review deck. .cl-body is display:none then, so
   its rect is all zeros — which reads as "at the window edge" and moves the
   pill for the same reason, with no special case needed. */
function clepClearRail(el){
  const nav=$('nav'), body=el.querySelector('.cl-body');
  if(!nav||!body)return;
  const r=nav.getBoundingClientRect();
  if(r.right<=body.getBoundingClientRect().left)return;   /* off-canvas, or clear */
  el.style.left=Math.round(r.right+12)+'px';
  el.style.right='auto';
}
function clepDrag(e){
  if(e.button!==undefined&&e.button!==0)return;
  const el=$('clep');
  const r=el.getBoundingClientRect();
  const ox=e.clientX-r.left, oy=e.clientY-r.top;
  let moved=false;
  try{e.target.setPointerCapture(e.pointerId)}catch(err){}
  const mv=ev=>{
    if(!moved&&Math.abs(ev.clientX-e.clientX)+Math.abs(ev.clientY-e.clientY)>4){
      moved=true; el.classList.add('drag');
    }
    if(!moved)return;
    /* the drag writes to whichever of the two spots this screen is using */
    const at={x:ev.clientX-ox,y:ev.clientY-oy};
    if(clepOnLeft())CLEP.posQ=at; else CLEP.pos=at;
    clepPlace();
  };
  const up=()=>{
    e.target.removeEventListener('pointermove',mv);
    e.target.removeEventListener('pointerup',up);
    e.target.removeEventListener('pointercancel',up);
    el.classList.remove('drag');
    /* a press that never moved is a tap, and a tap asks her a question */
    if(moved)clepSaveCfg(); else clepAsk();
  };
  e.target.addEventListener('pointermove',mv);
  e.target.addEventListener('pointerup',up);
  e.target.addEventListener('pointercancel',up);
}

/* ---- controls ----------------------------------------------------------- */
function clepMini(){
  CLEP.mini=!CLEP.mini; clepSaveCfg();
  const el=$('clep'); if(el)el.classList.toggle('mini',CLEP.mini);
  if(CLEP.mini)clepDismiss();
  clepPlace(); clepPaint();
}
function clepMute(){
  CLEP.muted=!CLEP.muted; clepSaveCfg(); clepPaintTools();
  if(CLEP.muted){clepDismiss(); toast('The Clepsydra will keep quiet')}
  else clepSay('Back with you. Tap me on any screen and I will explain it.',{force:true});
}
function clepPaintTools(){
  const b=$('clepMuteBtn'); if(!b)return;
  /* This assigns textContent, so an ico() SVG cannot go here — it would
     show as a literal <svg> string. The icon set has no speaker glyph
     either. The pause/play pair is the convention every start button in
     the app already uses, and it says the right thing: she is talking,
     or she is stopped. The title and aria-label carry the words. */
  b.textContent=CLEP.muted?'\u25b6':'\u275a\u275a';
  b.title=CLEP.muted?'Let her talk':'Quiet her';
  b.setAttribute('aria-label',b.title);
}

/* ---- speech ------------------------------------------------------------- */
/* Typed out, because a projection that assembles itself reads as one. The text
   is split on ** first so bold survives a partial reveal — revealing rendered
   HTML character by character would slice a tag in half. */
function clepSegs(s){
  const out=[];
  s.split('**').forEach((part,k)=>{ if(part)out.push({b:k%2===1,t:part}) });
  return out;
}
function clepPartial(segs,n){
  let left=n,h='';
  for(const s of segs){
    if(left<=0)break;
    const t=s.t.slice(0,left); left-=t.length;
    h+=s.b?`<b>${esc(t)}</b>`:esc(t);
  }
  return h;
}
function clepSay(text,opt){
  opt=opt||{};
  if(!CLEP.on||!text)return;
  if((CLEP.muted||CLEP.mini)&&!opt.force)return;
  const box=$('clepSay'), t=$('clepTxt');
  if(!box||!t)return;
  clearTimeout(CLEP.hideT); clearInterval(CLEP.typer);
  CLEP.lastSay=Date.now();
  const segs=clepSegs(text);
  const total=segs.reduce((n,s)=>n+s.t.length,0);
  box.classList.add('show');
  if(clepReduced()){ t.innerHTML=clepPartial(segs,total); }
  else{
    const step=Math.max(1,Math.ceil(total/90));   /* always lands inside ~1.4s */
    let n=0;
    t.innerHTML='';
    CLEP.typer=setInterval(()=>{
      n+=step;
      t.innerHTML=clepPartial(segs,n);
      if(n>=total)clearInterval(CLEP.typer);
    },16);
  }
  const dwell=Math.min(15000,Math.max(4500,2600+total*46));
  CLEP.hideT=setTimeout(clepDismiss,dwell);
  /* She turns to speak. The swap carries its own burst, so the bare flicker
     that used to fire here would be a second, overlapping one. */
  clearTimeout(CLEP.settleT);
  if(opt.pose!==false)clepPose('talking');
  else if(!clepReduced())clepGlitchBurst(120);
}
function clepDismiss(){
  clearInterval(CLEP.typer); clearTimeout(CLEP.hideT);
  const box=$('clepSay'); if(box)box.classList.remove('show');
  /* back to whatever this screen asks for, so "she said something" always
     resolves rather than leaving her mid-gesture */
  if(CLEP.pose==='talking')clepSettle(900);
}

/* ---- the glitch --------------------------------------------------------- */
/* Randomised in JS rather than left to a keyframe loop: a fault on a fixed
   cadence reads as an animation, which is the opposite of the intention. */
function clepGlitchBurst(ms){
  const el=$('clep');
  if(!el||el.hidden||clepReduced())return;
  el.style.setProperty('--cl-band-y',(6+Math.random()*82).toFixed(0)+'%');
  el.classList.add('gl');
  setTimeout(()=>el.classList.remove('gl'),ms||(90+Math.random()*170));
}
function clepGlitchLoop(){
  clearTimeout(CLEP.glT);
  if(!CLEP.on||clepReduced())return;
  CLEP.glT=setTimeout(()=>{ clepGlitchBurst(); clepGlitchLoop() },2400+Math.random()*7600);
}

/* ---- what she knows ----------------------------------------------------- */
/* Every line is generated from the same data the screen renders from, so a
   number she quotes cannot disagree with the number on the page. */
function clepChapterCount(){
  /* Walks MODULES, which deliberately still holds the locked subjects so their
     cards render — so it has to skip them itself, unlike everything that counts
     off QUESTIONS. */
  return openModules().reduce((n,m)=>n+m.groups.reduce((k,g)=>k+g.chapters.length,0),0);
}
/* Kept deliberately short (user's request, 2026-08-02): same facts, fewer
   words. A companion who talks past the second line stops being read. */
const CL_TIPS={
  home(){
    const due=dueNow().length, done=QUESTIONS.filter(q=>isAnswered(q.id)).length;
    /* On a first visit "0 of 4049 answered, nothing due" is the same empty
       scoreboard the dashboard has just stopped printing, and hearing it from
       her as well makes it two. She says what to do instead. */
    if(!done)return `**${QUESTIONS.length}** questions, waiting. Pick a subject — I keep your place in every chapter.`;
    return `**${done}** of **${QUESTIONS.length}** answered. `+
      (due?`**${due}** due for review — what the spacing algorithm says you are about to forget.`
         :`Nothing due for review today.`);
  },
  module(){
    return `Chapters. Greyed ones are on the syllabus with nothing transcribed yet — kept visible so the `+
      `course's shape is. **Source** chips filter by question bank.`;
  },
  quiz(){
    return `Answer, check, then say how sure you were — honestly: a right answer you call a **guess** still `+
      `enters review. **A**–**E** pick, **Enter** checks, **F** flags, **1**–**4** highlight, **0** erases.`;
  },
  theory(){
    return `Notes written backwards from the questions — shaped around what examiners keep asking, not `+
      `around a textbook's ordering.`;
  },
  schedule(){
    return `Your plan, day by day. Mark a subject **missed** and it moves to a catch-up slot on a free day. `+
      `Nothing else shifts.`;
  },
  moved(){
    return `Everything you marked missed, and where it landed. **No slot left** means the plan has run out `+
      `of room before the exam.`;
  },
  review(){
    return `Wrong answers, plus right ones you called a guess. They return after 1, 3, 7, 21 and 60 days — `+
      `right moves one step out, wrong goes back to the start.`;
  },
  flagged(){
    return `Whatever you parked with **F**, right or wrong.`;
  },
  mock(){
    return `Exam conditions: your modules, your length, random order, explanations held until you finish.`;
  },
  session(){
    return `Set a block and I keep the time. I follow you into every other screen while it runs.`;
  }
};
function clepFacts(){
  const s=sess();
  const out=[
    `**${QUESTIONS.length}** questions across **${clepChapterCount()}** chapters, and more as the banks are transcribed.`,
    `Every question names its bank and the page it came from — the pill under the explanation.`,
    `A **κλεψύδρα** is a water clock. Alexandria kept time with them; I keep yours.`,
    `Progress saves after every answer, with dated snapshots behind the shield. Nothing to press.`,
    `**/** jumps to search. **J** inside a quiz jumps to a question by number.`,
    `**T** flips parchment and night. Until you pick, the app follows your system.`,
    `The whole app runs offline, from the file itself.`,
    `Question order is hashed from each id — identical on every device, and new questions land in the middle rather than on the end.`
  ];
  if(s)out.push(`**${clMMSS(phaseLeft())}** left in this block. I will say when it turns.`);
  return out;
}
const clPick=a=>a[Math.floor(Math.random()*a.length)];

function clepViewKey(){ return view.name==='module'?'module':(view.name||'home') }
function clepTip(){
  const f=CL_TIPS[clepViewKey()];
  return f?f():null;
}
/* Tapping her always re-explains; the automatic version only fires once per
   screen per visit, which is the line between a companion and a nag. */
function clepAsk(){
  if(CLEP.mini){clepMini();return}
  const t=clepTip();
  clepSay(t||clPick(clepFacts()),{force:true});
}
let _clLastView='';
function clepOnView(){
  const k=clepViewKey()+(view.name==='module'?':'+view.id:'');
  if(k===_clLastView)return;
  _clLastView=k;
  /* The pose follows the screen even when she is muted: muting silences her,
     it does not freeze her. It sits ABOVE the mute check for that reason. */
  clearTimeout(CLEP.settleT);
  clepPose(clepViewPose());
  if(!CLEP.on||CLEP.muted||CLEP.mini)return;
  const seenKey=clepViewKey();
  if(CLEP.seen[seenKey])return;
  CLEP.seen[seenKey]=1;
  const t=clepTip();
  if(t)setTimeout(()=>clepSay(t),620);   /* let the page entrance land first */
}
/* Idle chatter is the one thing held back from the reading screens. A tip you
   asked for by arriving is welcome mid-question; an unprompted aside about the
   app is not. */
function clepIdleLoop(){
  clearTimeout(CLEP.idleT);
  if(!CLEP.on||clepReduced())return;
  CLEP.idleT=setTimeout(()=>{
    if(CLEP.on&&!CLEP.muted&&!CLEP.mini&&!STILL_VIEWS.includes(view.name)
       &&Date.now()-CLEP.lastSay>200000){
      clepSay(clPick(clepFacts()));
    }
    clepIdleLoop();
  },240000);
}
/* Ambient pose drift, separate from the idle chatter above and much more
   frequent — she shifts her weight between the two resting poses so the corner
   is not a still image, but she never does it on a reading screen, mid-speech,
   or while an event pose is on display. Those three guards are what keep it
   from becoming noise beside a clinical stem. */
function clepShiftLoop(){
  clearTimeout(CLEP.shiftT);
  if(!CLEP.on||clepReduced())return;
  CLEP.shiftT=setTimeout(()=>{
    if(CLEP.on&&!CLEP.mini&&!STILL_VIEWS.includes(view.name)
       &&CL_IDLE_POSES.includes(CLEP.pose)
       &&Date.now()-CLEP.lastSay>9000){
      clepPose(clPick(CL_IDLE_POSES.filter(p=>p!==CLEP.pose)));
    }
    clepShiftLoop();
  },26000+Math.random()*44000);
}

/* ---- the readout -------------------------------------------------------- */
function clMMSS(ms){
  const s=Math.max(0,Math.round(ms/1000));
  return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
}
function clepPaint(){
  const el=$('clep'); if(!el||el.hidden)return;
  const s=sess();
  el.classList.toggle('timed',!!s);
  const hud=$('clepHud'), mt=$('clepMiniT');
  if(s){
    const rest=s.phase==='break';
    const label=s.paused?'Paused':(rest?'Break':'Focus');
    if(hud){
      hud.classList.toggle('rest',rest);
      hud.innerHTML=`<span class="ph">${label}</span>${clMMSS(phaseLeft())}`;
    }
    if(mt)mt.textContent=clMMSS(phaseLeft());
    /* The minute hand used to wind down here, one full turn per block. The
       artwork has no hands, so the block's progress now lives only in the HUD
       pill and the ring on the session screen. */
  }else{
    if(hud)hud.innerHTML='';
    if(mt)mt.textContent='Clepsydra';
  }
}

/* ============================================================================
   STUDY SESSIONS

   Every time is stored as a TIMESTAMP, never as "seconds remaining". A phone
   that sleeps, a laptop lid, a reload — all of them stop a countdown that is
   decremented by a timer, and none of them touch a clock that is recomputed
   from when the block started. `lost` accumulates paused time so a pause does
   not silently eat the block.
   ============================================================================ */
const SESS_MAX=12;                     /* cycles; a sanity bound, not a policy */
let sessDraft={focus:25,brk:5,cycles:4,scope:'all'};

function sessionTerm(s){return s.term||'y4s2'}
function sess(){
  return S.sess&&!S.sess.done&&sessionTerm(S.sess)===activeTerm?S.sess:null;
}
function phaseMs(){
  const s=sess(); if(!s)return 0;
  return (s.phase==='focus'?s.plan.focus:s.plan.brk)*60000;
}
function phaseElapsed(){
  const s=sess(); if(!s)return 0;
  const now=s.paused?s.pausedAt:Date.now();
  return Math.max(0,now-s.phaseStart-(s.lost||0));
}
function phaseLeft(){ return Math.max(0,phaseMs()-phaseElapsed()) }

/* Answered DURING the session, read off the answer timestamps rather than
   counted as we go — so it survives a reload, and a question answered in a
   quiz opened before the session started is correctly not counted. */
function sessStats(s){
  let n=0,ok=0;
  QUESTIONS.forEach(q=>{
    const a=S.answers[q.id];
    if(a&&a.at&&a.at>=s.startedAt){n++; if(a.ok)ok++}
  });
  return {n:n,ok:ok,acc:n?Math.round(ok/n*100):null};
}
function sessFocusMs(s){
  return (s.focusMs||0)+(s.phase==='focus'?phaseElapsed():0);
}

function startSession(o){
  /* There is one active session per profile. Hiding it in another semester
     must not turn Begin into an unnoticed replacement of its running clock. */
  if(S.sess&&!S.sess.done&&sessionTerm(S.sess)!==activeTerm){
    toast('A study session is running in another semester. Switch back and end it before starting another.');
    return;
  }
  S.sess={
    term:activeTerm,
    startedAt:Date.now(), phase:'focus', phaseStart:Date.now(), lost:0, focusMs:0,
    cycle:1, plan:{focus:o.focus,brk:o.brk,cycles:Math.min(o.cycles,SESS_MAX)},
    scope:o.scope||'all', paused:false, pausedAt:0
  };
  save(); sessStartTick(); clepPaint();
  /* pose:false — startQuiz is about to move her to the quiz screen's pose,
     and a turn-to-talk in between would be a third swap in under a second */
  clepSay(`**${o.focus} minutes.** I have the clock — go.`,{force:true,pose:false});
  /* Starting a session should start the studying, not just the timer. */
  const ids=sessScopeIds(o.scope);
  if(ids.length)startQuiz(ids,sessScopeName(o.scope));
  else render();
}
function sessScopeIds(scope){
  if(scope==='review')return dueNow().map(q=>q.id);
  if(scope==='flagged')return QUESTIONS.filter(q=>S.flags[q.id]).map(q=>q.id);
  const m=MODULES.find(x=>x.id===scope);
  if(m){
    const all=qsInModule(m.id);
    const un=all.filter(q=>!isAnswered(q.id));
    return (un.length?un:all).map(q=>q.id);
  }
  return [];
}
function sessScopeName(scope){
  if(scope==='review')return 'Session — review due';
  if(scope==='flagged')return 'Session — flagged';
  const m=MODULES.find(x=>x.id===scope);
  return m?`Session — ${m.name}`:'Session';
}
function sessPause(){
  const s=sess(); if(!s)return;
  if(s.paused){ s.lost=(s.lost||0)+(Date.now()-s.pausedAt); s.paused=false; s.pausedAt=0 }
  else{ s.paused=true; s.pausedAt=Date.now() }
  save(); clepPaint(); paintSessionLive();
}
function sessSkip(){ advancePhase(true) }
function advancePhase(manual){
  const s=sess(); if(!s)return;
  if(s.phase==='focus'){
    s.focusMs=(s.focusMs||0)+phaseElapsed();
    if(s.cycle>=s.plan.cycles){ s.phase=''; endSession(true); return }
    s.phase='break'; s.phaseStart=Date.now(); s.lost=0; s.paused=false; s.pausedAt=0;
    clepSay(manual?`Break early, then. **${s.plan.brk} minutes.**`
                  :`Block ${s.cycle} done. **${s.plan.brk} minutes** — stand up, find a window.`,{force:true});
  }else{
    s.cycle++; s.phase='focus'; s.phaseStart=Date.now(); s.lost=0; s.paused=false; s.pausedAt=0;
    clepSay(`Block **${s.cycle}/${s.plan.cycles}**. ${s.plan.focus} minutes.`,{force:true});
  }
  save(); clepGlitchBurst(420); clepPaint();
  if(view.name==='session')render(); else paintSessionLive();
}
function endSession(completed){
  const s=S.sess; if(!s)return;
  const st=sessStats(s), mins=Math.round(sessFocusMs(s)/60000);
  S.sessLog=(S.sessLog||[]);
  S.sessLog.unshift({
    term:sessionTerm(s),
    start:s.startedAt, end:Date.now(), cycles:s.cycle, focusMin:mins,
    answered:st.n, correct:st.ok, scope:s.scope, completed:!!completed
  });
  S.sessLog=S.sessLog.slice(0,80);
  S.sess=null; save(); sessStopTick(); clepPaint();
  /* finishing the set she timed is worth a jump; stopping early is not.
     The pose carries its own burst, so the bare one that was here is gone. */
  clepPose(completed?'jumping':'presenting'); clepSettle(4200);
  clepSay(completed
    ? `Set complete: **${mins} min**, **${st.n}** questions${st.acc!==null?` at **${st.acc}%**`:''}.`
    : `Stopped. **${mins} min**, **${st.n}** questions logged.`,
    {force:true,pose:false});   /* pose:false — she is mid-jump, do not turn her */
  render();
}
/* One second is enough: nothing here animates off this timer, it only repaints
   two numbers and a ring. It runs solely while a session exists. */
function sessStartTick(){
  sessStopTick();
  CLEP.tickT=setInterval(()=>{
    const s=sess(); if(!s){sessStopTick();return}
    if(!s.paused&&phaseLeft()<=0){advancePhase(false);return}
    clepPaint(); paintNavClock(); paintSessionLive();
  },1000);
}
function sessStopTick(){ clearInterval(CLEP.tickT); CLEP.tickT=null }
/* A backgrounded tab has its one-second interval throttled hard, and iOS
   Safari suspends it outright — often for good. The phase is stored as
   timestamps, so no time is actually lost; what is lost is the repainting.
   Restart the interval and redraw from those timestamps the moment the tab is
   looked at again, or the clocks keep showing the minute the tab went away. */
document.addEventListener('visibilitychange',()=>{
  if(document.hidden||!sess())return;
  /* showGate() stops the tick on purpose — nobody is studying on the gate —
     and enterProfile() is what starts it again. Do not undo that here. */
  const g=$('gate'); if(g&&!g.classList.contains('hide'))return;
  sessStartTick();
  clepPaint(); paintNavClock(); paintSessionLive();
});

/* ============ MODALS / IO ============ */
