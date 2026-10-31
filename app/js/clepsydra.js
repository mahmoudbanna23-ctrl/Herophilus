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
  if(['quiz','results'].includes(view.name))return;
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
    if(o){CLEP.mini=!!o.mini;CLEP.muted=!!o.muted}
  }catch(e){}
}
function clepSaveCfg(){
  try{localStorage.setItem(CLKEY,JSON.stringify(
    {mini:CLEP.mini,muted:CLEP.muted}))}catch(e){}
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
  b.addEventListener('click',clepAsk);
  b.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){e.preventDefault();clepAsk()}
  });
  addEventListener('resize',clepTuck);
  /* a page can swap its empty message in without a full render (filters) */
  let awayT=0;
  new MutationObserver(()=>{ clearTimeout(awayT); awayT=setTimeout(clepAway,120) }).observe(document.body,{childList:true,subtree:true});
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
  clepTuck(true); clepPaint();
  /* her ambient life: the glitch (not gated on reading views) and the weight shift between two
     resting poses. The idle chatter loop is NOT restarted: nothing of hers talks on its own. */
  clepGlitchLoop(); clepShiftLoop();
  /* arrive in the pose this screen asks for, without a tear — there is no
     previous pose to fail out of */
  CLEP.pose=clepViewPose();
  const fig=$('clepFig'); if(fig)fig.src=poseSrc(CLEP.pose);
}
function clepHide(){
  CLEP.on=false;
  const el=$('clep'); if(el)el.hidden=true;
  clearTimeout(CLEP.glT); clearTimeout(CLEP.idleT);
  clearTimeout(CLEP.shiftT); clearTimeout(CLEP.settleT); clearTimeout(CLEP.swapT); clearTimeout(CLEP.tuckT);
}

/* ---- where she stands ---------------------------------------------------
   One place on every screen: the RIGHT edge of the window, fixed to the
   viewport (never the page, so she cannot widen it). At rest she is tucked
   there with about half of the figure showing, cut only by the screen edge. She comes
   out for an event or a press, says her line, and slides back by herself.

   ⚠️ A tuck is only allowed where it covers nothing. clepEdgeFree() asks the
   page: does any pressable thing reach into the strip she would occupy? If so
   (a narrow window, a question card that runs to the edge) she rests wholly
   off-screen instead and still slides out on events. Asked of the page rather
   than encoded as a breakpoint, so a new layout cannot reintroduce the overlap.

   Older builds stored a dragged position (CLEP.pos / CLEP.posQ). Dragging is
   gone; those fields are left in storage, unread and unwritten. */
function clepPlace(){
  const el=$('clep'); if(!el||el.hidden)return;
  el.classList.remove('left');
  el.style.left=el.style.top=el.style.right='';
}

/* GSAP is already shipped under its recorded licence (js/lib). The slide is a
   GSAP tween, no hand-written keyframes. Without it she still ends in the right
   place: the fallback writes the final transform directly. */
const CL_SHOW=.45;     /* share of her 112px canvas that shows while tucked. Owner 2026-10-31: about a third of her (was .55). .45 of the canvas is ~35-40% of her drawn pixels; by eye on all five rest poses it keeps wreath + eye (at .40 the welcoming pose is an arm and a sliver) */
const CL_OUT=12;       /* gap to the screen edge while she is out */
const CL_HIT='a[href],button,input,select,textarea,summary,label,[role=button],[tabindex]:not([tabindex="-1"])';
function clepSlide(el,x,y,d,ease){
  if(window.gsap&&gsap.to){
    gsap.killTweensOf(el);
    if(d>0)gsap.to(el,{x:x,y:y,duration:d,ease:ease}); else gsap.set(el,{x:x,y:y});
  }else el.style.transform=`translate(${x}px,${y}px)`;
}
/* the thing that tucks: the figure, or the pill when she is collapsed */
function clepUnit(el){
  return el.querySelector(el.classList.contains('mini')?'.cl-mini':'.cl-body');
}
/* a bar that stays put while the page scrolls (top bar, focus bar). It only matters
   where it sits in her band along the bottom edge; scrolled content matters anywhere. */
function clepPinned(e){
  for(let n=e;n&&n!==document.body;n=n.parentElement){
    const p=getComputedStyle(n).position;
    if(p==='fixed'||p==='sticky')return true;
  }
  return false;
}
/* rectangles of everything pressable on the screen, except her own parts */
/* rest=true: only what could ever sit in her band along the bottom edge (she is tucked at any scroll);
   rest=false: everything on screen right now (she is out, lifted anywhere) */
function clepControls(el,rest,text){
  const out=[], band=innerHeight-(parseFloat(getComputedStyle(el).bottom)||18)-190;
  document.querySelectorAll(CL_HIT).forEach(e=>{
    if(el.contains(e))return;
    const r=e.getBoundingClientRect();
    if(r.width<1||r.height<1)return;
    const cs=getComputedStyle(e);
    if(cs.visibility==='hidden'||cs.display==='none')return;
    /* a pinned bar matters only if it sits in her band now; anything else only if the page can
       ever scroll it into her band (its bottom, from the top of the document, is below the band) */
    if(rest){ if(r.bottom+(clepPinned(e)?0:scrollY)<band)return; }
    else if(r.bottom<0||r.top>innerHeight)return;
    out.push(r);
  });
  /* the question stem and the page's own text are not pressable but they are what is being read:
     while she is out, her bubble should not sit on them (step 5 fix 2, V5/V6). Every element that
     holds text of its own counts; `text` asks for it. */
  if(!rest&&text){
    document.querySelectorAll('.page *,.stem').forEach(e=>{
      if(el.contains(e))return;
      /* the lines of text themselves (a Range per text node), not the element's box: a block is as wide as its
         column even where its text is short, which left no clear spot at 1180 */
      for(const n of e.childNodes){
        if(n.nodeType!==3||!n.nodeValue.trim())continue;
        const rg=document.createRange(); rg.selectNodeContents(n);
        for(const r of rg.getClientRects()){
          if(r.width<1||r.height<1||r.bottom<0||r.top>innerHeight)continue;
          out.push(r);
        }
      }
    });
  }
  return out;
}
/* true when no pressable thing reaches into the strip `shown` px wide at the
   right edge, at ANY scroll position (x does not change with scroll) */
function clepEdgeFree(el,shown){
  const vw=document.documentElement.clientWidth, x0=vw-shown-6;   /* clientWidth: a scrollbar is not screen she can use */
  return !clepControls(el,true).some(r=>r.right>x0&&r.left<vw);
}
function clepSpeaking(){
  const box=$('clepSay'), el=$('clep'); return !!((box&&box.classList.contains('show'))||(el&&el.classList.contains('nosay')));   /* nosay = a peek without the bubble: still out until its own timer tucks her */
}
function clepTuck(now){
  const el=$('clep'); if(!el||el.hidden)return;
  if(now!==true&&clepSpeaking())return;   /* she tucks when the line ends */
  clearTimeout(CLEP.tuckT);
  el.classList.remove('pass');
  el.classList.remove('nosay');
  el.classList.add('tucked');             /* bubble and tools leave the layout */
  clepAway();
  const u=clepUnit(el), w=(u&&u.offsetWidth)||el.offsetWidth;
  const shown=Math.round(w*CL_SHOW);
  const free=clepEdgeFree(el,shown);
  el.dataset.rest=free?'edge':'off';
  clepSlide(el,free?w-shown:w+4,0,(now===true||clepReduced())?0:.42,'power2.in');
}
/* An empty page already shows her in a pose inside its message. Two of her on one page is one too
   many, so the tucked figure hides while that image is on the page; she is back as soon as the page
   changes, and a peek always shows her. */
function clepAway(){
  const el=$('clep'); if(!el)return;
  el.classList.toggle('away',!!document.querySelector('.clep-empty')&&el.classList.contains('tucked'));
}
/* After a render: tuck now, and once more when the new screen has settled,
   because a late layout can change whether the edge is free. */
function clepRest(){
  if(clepSpeaking())return;
  clepTuck(true);
  setTimeout(()=>{ if(!CLEP.on||clepSpeaking())return; clepTuck(true) },450);
}
/* Where she and her bubble stand while out: the lowest spot, then upward in
   20px steps, where their box meets no pressable thing. Returns the lift in px,
   or null when no clear spot exists (a narrow window). The bubble is measured
   at the size its finished line will have. */
function clepClearLift(el,text,strict){
  clepClearLift.coversText=false;
  const t=$('clepTxt'); if(!t)return 0;
  const keep=t.innerHTML;
  t.innerHTML=clepPartial(clepSegs(text),1e6);
  const W=el.offsetWidth, H=el.offsetHeight;
  t.innerHTML=keep;
  const bot=parseFloat(getComputedStyle(el).bottom)||18;
  const vw=document.documentElement.clientWidth;
  const L=vw-CL_OUT-W, R=vw-CL_OUT, pad=6;
  /* first a spot clear of controls AND text; failing that, clear of controls only (it covers a little
     text, so the caller shortens her stay: lift.text) */
  for(const text of (strict?[true]:[true,false])){
    const cs=clepControls(el,false,text);
    for(let lift=0;bot+lift+H<=innerHeight-8;lift+=20){
      const B=innerHeight-bot-lift, T=B-H;
      if(!cs.some(r=>r.left<R+pad&&r.right>L-pad&&r.top<B+pad&&r.bottom>T-pad)){
        clepClearLift.coversText=!text;
        return lift;
      }
    }
  }
  return null;
}
function clepPeek(text,opt){
  const el=$('clep'); if(!el||el.hidden)return;
  opt=opt||{};
  /* muted or collapsed = no automatic peeks; only a press gets through */
  if((CLEP.muted||CLEP.mini)&&!opt.press)return;
  clearTimeout(CLEP.tuckT);
  el.classList.remove('tucked','pass','away','nosay');
  /* opt.quiet (the set-finish line over the results page): the line may never cover text. If no clear spot
     exists for bubble plus figure, she peeks without the bubble and the line is simply not shown */
  if(opt.quiet&&clepClearLift(el,text,true)===null){
    el.classList.add('nosay');
    const l2=clepClearLift(el,'',true);
    /* opt.hold (the chapter moment): no clear spot for the figure either = no peek at all; she stays tucked
       and the page's own chapter-done state is the moment (390: the figure had sat over the stem) */
    if(l2===null&&opt.hold){clepTuck(true);return}
    if(l2===null)el.classList.add('pass');
    clepSlide(el,-CL_OUT,-(l2||0),clepReduced()?0:.42,'power2.out');
    clepPose(clepViewPose());
    CLEP.tuckT=setTimeout(()=>clepTuck(true),2200);
    return;
  }
  const lift=clepClearLift(el,text);
  /* no clear spot: nothing of hers may block a press, and she leaves by herself */
  if(lift===null)el.classList.add('pass');
  /* it sits on some text: short stay, so the page is readable again within seconds */
  if(lift===null||clepClearLift.coversText)opt.dwell=Math.min(4000,Math.max(2600,1400+clepSegs(text).reduce((n,x)=>n+x.t.length,0)*35));
  clepSlide(el,-CL_OUT,-(lift||0),clepReduced()?0:.42,'power2.out');
  clepSay(text,{force:true,peek:true,pose:opt.pose,tipK:opt.tipK,dwell:opt.dwell});
}

/* ---- controls ----------------------------------------------------------- */
function clepMini(){
  CLEP.mini=!CLEP.mini; clepSaveCfg();
  const el=$('clep'); if(el)el.classList.toggle('mini',CLEP.mini);
  if(CLEP.mini)clepDismiss();
  clepPlace(); clepPaint(); clepTuck(true);
}
function clepMute(){
  CLEP.muted=!CLEP.muted; clepSaveCfg(); clepPaintTools();
  if(CLEP.muted){clepDismiss(); toast('The Clepsydra will keep quiet')}
  else clepPeek('Back with you. Tap me on any screen and I will explain it.',{press:true});
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
  if(!opt.peek)return;
  if(!CLEP.on||!text)return;
  if((CLEP.muted||CLEP.mini)&&!opt.force)return;
  const box=$('clepSay'), t=$('clepTxt');
  if(!box||!t)return;
  clearTimeout(CLEP.hideT); clearInterval(CLEP.typer);
  CLEP.lastSay=Date.now();
  CLEP.tipK=opt.tipK||null;   /* which screen this line describes; null = about no screen */
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
  const dwell=opt.dwell||Math.min(15000,Math.max(4500,2600+total*46));
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
  CLEP.tuckT=setTimeout(()=>clepTuck(),clepReduced()?0:500);
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
  const box=$('clepSay'); if(box&&box.classList.contains('show')){clepDismiss();return}
  const t=clepTip();
  clepPeek(t||clPick(clepFacts()),{press:true,tipK:t?clepViewKey()+(view.name==='module'?':'+view.id:''):null});
}
let _clLastView='';
function clepOnView(){
  if(['quiz','results'].includes(view.name))return;
  const k=clepViewKey()+(view.name==='module'?':'+view.id:'');
  if(k===_clLastView)return;
  _clLastView=k;
  /* A tip belongs to the screen it described. Arriving somewhere else takes it down; a timer
     message (no tipK) is about the block, not the screen, and stays. */
  if(CLEP.tipK&&CLEP.tipK!==k)clepDismiss();
  /* The pose follows the screen even when she is muted: muting silences her,
     it does not freeze her. It sits ABOVE the mute check for that reason. */
  clearTimeout(CLEP.settleT);
  clepPose(clepViewPose());
  /* no talk on arrival: she only comes out for an event or a press */
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
    if(CLEP.on&&!CLEP.mini&&!clepReduced()&&!clepSpeaking()&&!STILL_VIEWS.includes(view.name)
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
  if(['quiz','results'].includes(view.name))return;
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
  /* muted or collapsed = no automatic pose change either (a press still works) */
  if(!CLEP.muted&&!CLEP.mini){clepPose(completed?'jumping':'presenting'); clepSettle(4200)}
  clepPeek(completed
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
