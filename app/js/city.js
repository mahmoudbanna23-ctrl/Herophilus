/* city.js - the home screen as a painted night city (redesign trial, slice 3).

   WHAT IT DOES. vHome (render.js) calls cityStageHTML(items) for the stage markup: one box
   holding the plate, the mist, the lighthouse glow and four real <button> hot-spots, one per
   subject, each with an always-visible text label. This file mounts it after render() builds
   the page, keeps the labels on screen, and plays the daily landing film.

   HOW IT HOOKS IN. Like hall.js before it, it touches no existing script: it wraps two
   functions by name (render.js looks them up at call time).
     syncFilm     - runs first on every render, before the page is replaced: the last mount
                    is torn down (resize listener) and body.city-on is dropped. A film still
                    playing is torn down too, unless the next view is home again (a cloud-sync
                    re-render): then the same <video> is parked and set into the new stage.
     inkMarkChips - runs right after the view function: the new stage is mounted here.
   The Tab order is the DOM order: lighthouse, theatre, temple, garden.

   THE LANDING FILM (landing-dark.mp4, 81 frames, 1350x900 (720x480 source, lanczos + unsharp), the end is a softer copy of the
   still). Once per page load, only when the very first view is home, the student has answered
   at least one question, motion is not reduced, the window is landscape and >= 768 wide. A
   muted <video> goes in above the still; if it cannot play through within 1000 ms it is
   dropped for this load. When it ends it fades out (opacity) to the sharp still and is removed.
   While it plays, the spots are inert; any key, or a click anywhere, skips to the faded-out end,
   and a click on the stage itself does not also open a subject. A click elsewhere (the menu,
   say) skips AND goes through - navigation never waits for the film. Later visits to home in
   the same page life: the still only.

   THE FIRST INTRO (nothing answered yet). A student with nothing answered gets, under the same rules
   (landscape, >= 768 wide, motion not reduced, first view is home, shot 2 playable through within
   1000 ms, any click or key skips), an ordered chain of three stages: shot 1 (the painted plate with
   a 5 s camera glide done in the page - a slow push-in plus one painted cloud layer rising over it -
   from shot1-base.jpg and shot1-near.webp; skipped for this load if both are not decoded within
   4 s), shot 2 (shot2-dark.mp4, the lighthouse drop, fetched only for them), then the landing.
   Between two stages a painted cloud cover (.city-cover, one layer above the stages, below the
   spots) rises to full opacity over the last 0.8 s of the stage, a hard swap to the next stage
   happens under it (the landing is asked for once the intro begins and waits paused on frame 0 until
   it can play), a 0.2 s hold, and a 0.9 s clear as the next stage plays. The film's own mist never
   hides the tower, so a plain crossfade would ghost it and jump in brightness; the cover hides the
   cut. Reduced motion gets none of it. In-memory flags only; nothing here touches storage. */
(function(){
  'use strict';

  /* Percent boxes on the painting: [left, top, right, bottom]. land = 3:2 plate, up = 2:3 plate.
     la / pa = where the label sits in the box (t top, b bottom) for landscape / upright, chosen
     to keep it off the lantern, roofs and stage. DOM order here is the Tab order. */
  const SPOTS=[
    {id:'ophtho',    land:[10,.5,32,43], up:[20,1,48,29], la:'b', pa:'b'},
    {id:'ent',       land:[68,20,95,39], up:[55,33,97,49],la:'t', pa:'t'},
    {id:'neuropsych',land:[71,55,86,76], up:[53,64,93,89],la:'b', pa:'t'},
    {id:'pediatrics',land:[6,59,47,89],  up:[3,56,57,74], la:'t', pa:'t'}
  ];
  const PLATE_LAND='assets/city/city-dark.jpg';
  const PLATE_TALL='assets/city/city-dark-tall.jpg';
  const FILM='assets/city/landing-dark.mp4';
  const LEAD='assets/city/shot2-dark.mp4';   // shot 2, the lighthouse drop (nothing-answered visitors only)
  const S1_BASE='assets/city/shot1-base.jpg';   // shot 1: the painted plate, pushed in slowly
  const S1_NEAR='assets/city/shot1-near.webp';  // ...and one painted cloud layer that rises over it
  const S1_MS=5000;           // shot 1 runs this long
  const S1_DEADLINE=4000;     // ms for both shot 1 pictures, else no shot 1 this load
  const FILM_DEADLINE=1000;   // ms to reach canplaythrough, else no film this load
  const FADE_MS=400;
  const RISE_MS=800;          // the cloud cover rises over the last of shot 2
  const HOLD_MS=200;          // ...stays full this long once the landing runs
  const CLEAR_MS=900;         // ...then clears as the landing plays
  const LAND_WAIT_MS=4000;    // the landing not ready this long after the swap: give up to the still

  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const upright=()=>matchMedia('(max-aspect-ratio:1/1)').matches;

  /* ---- markup (called by vHome) ------------------------------------------------------- */
  const pct=n=>(Math.round(n*100)/100)+'%';
  function boxVars(b,pre){
    return '--'+pre+'l:'+pct(b[0])+';--'+pre+'t:'+pct(b[1])+
           ';--'+pre+'w:'+pct(b[2]-b[0])+';--'+pre+'h:'+pct(b[3]-b[1]);
  }
  /* ---- what the picture says besides the four buildings (slice 4b) ------------------------- */
  const BUILDING={ophtho:'lighthouse',ent:'theatre',neuropsych:'temple',pediatrics:'garden'};
  const LAMPS=5;
  /* a row of five lamps lit in step with done/total: none at 0, one as soon as anything is done,
     all five only at 100% (rounded down) */
  const lampsLit=(done,total)=>(!total||done<=0)?0:Math.max(1,Math.min(LAMPS,Math.floor(LAMPS*done/total)));
  const FIRE='<svg viewBox="0 0 12 16" width="14" height="18" aria-hidden="true" focusable="false">'+
    '<path class="fo" d="M6 1C6.5 4 10.5 6 10.5 10.2 10.5 13.2 8.5 15 6 15 3.5 15 1.5 13.2 1.5 10.2 1.5 8 2.8 6.8 3.8 5.4 4.2 7 4.8 7.4 5.2 7.4 5.6 5 5.4 3 6 1Z"/>'+
    '<path class="fi" d="M6 8.2C6.3 9.4 8 10.2 8 11.8 8 13 7.1 13.8 6 13.8 4.9 13.8 4 13 4 11.8 4 10.6 5.4 10 6 8.2Z"/></svg>';
  /* the welcome, owner-approved wording; lines 5-8 name a building (its plaque glows) */
  const WELCOME=[
    {t:'Alexandria, about 300 BC. A doctor named Herophilus was the first to look inside the human body.'},
    {t:'He traced the nerves to the brain, named the duodenum, and studied the eye.'},
    {t:'He timed the pulse with a water clock. That clock was me.'},
    {t:'Now his city is yours to study.'},
    {t:'The lighthouse keeps the eyes.',m:'ophtho'},
    {t:'The theatre keeps the ear, nose and throat.',m:'ent'},
    {t:'The temple keeps the mind.',m:'neuropsych'},
    {t:'The garden keeps the children.',m:'pediatrics'},
    {t:'Lamps light up as you learn. A fire at a door means cards are waiting for you.'}
  ];
  let itemsBy={};          // this render's per-subject numbers
  let lines=[];            // her dashboard lines, in priority order: {text, act, ...}
  let lineAt=0;            // which of them she is showing
  const welcome={on:false,i:0,seen:false};   // in memory only; no storage key
  let settleT=0;

  function buildLines(items,dash){
    const out=[];
    items.filter(it=>!it.locked&&it.due>0).sort((a,b)=>b.due-a.due).forEach(it=>{
      out.push({text:it.due+(it.due===1?' card waits':' cards wait')+' in the '+(BUILDING[it.id]||it.name)+'.',act:'review',mod:it.id});
    });
    if(dash&&dash.today) out.push({text:'On today: '+dash.today,act:'today'});
    if(dash&&dash.cont) out.push({text:(dash.cont.finished?'Restart':'Continue')+' — '+dash.cont.name,act:'cont',cid:dash.cont.cid});
    if(!out.length) out.push({text:dash&&dash.done>0?'Choose a building to continue.':'Choose a building to begin.'});
    return out;
  }

  /* items: [{id,name,locked,done,total,acc,due,dueIds}] in any order; the painting fixes the order.
     dash: {term,total,done,today,cont} - the numbers vHome already worked out. */
  window.cityStageHTML=function(items,answered,dash){
    const by={};
    (items||[]).forEach(it=>{by[it.id]=it});
    itemsBy=by;
    lines=buildLines(items||[],dash);
    lineAt=0;
    let spots='';
    SPOTS.forEach(sp=>{
      const it=by[sp.id];
      if(!it) return;
      const meta=it.locked
        ?'Coming soon'
        :(it.done===0
          ?'Start studying'
          :(it.acc===null?'—':it.acc+'%')+' · '+it.done+'/'+it.total+' answered');
      const style=boxVars(sp.land,'')+';'+boxVars(sp.up,'u');
      let label=it.name;
      let lamps='', fire='', due='';
      if(it.locked){
        label+='. Coming soon';
      }else{
        const lit=lampsLit(it.done,it.total);
        for(let k=0;k<LAMPS;k++) lamps+='<i'+(k<lit?' class="on"':'')+'></i>';
        fire='<span class="city-fire'+(it.due>0?' lit':'')+'" aria-hidden="true">'+FIRE+'</span>';
        if(it.due>0) due='<span class="city-due">'+it.due+' due</span>';
        const exact=it.total?Math.round(it.done/it.total*1000)/10:0;
        label+='. '+it.done+' of '+it.total+' answered ('+exact+'%), accuracy '+(it.acc===null?'none yet':it.acc+'%')+
          ', '+lit+' of '+LAMPS+' lamps lit, '+(it.due>0?it.due+(it.due===1?' card':' cards')+' due for review':'no cards due for review');
      }
      const go=it.locked?' disabled aria-disabled="true"':` onclick="go({name:'module',id:'${sp.id}'})"`;
      spots+=`<button type="button" class="city-spot" data-mod="${sp.id}" data-la="${sp.la}" data-pa="${sp.pa}" style="${style}" aria-label="${esc(label)}"${go}>`+
        `<span class="city-tag"><span class="city-head"><span class="mod-name">${esc(it.name)}</span>${fire}</span>`+
        (it.locked?'':`<span class="city-row"><span class="city-lamps" aria-hidden="true">${lamps}</span>${due}</span>`)+
        `<span class="city-meta${it.done===0&&!it.locked?' go':''}">${meta}</span></span></button>`;
    });
    const term=dash?`<div class="city-term"><span class="ct-name">${esc(dash.term)}</span>`+
      `<span class="ct-count">${dash.total} questions</span></div>`:'';
    return `<section class="city" aria-label="Choose a subject">`+
      `<div class="city-box" data-done="${answered|0}">`+
      `<picture class="city-plate"><source media="(max-aspect-ratio:1/1)" srcset="${PLATE_TALL}">`+
      `<img src="${PLATE_LAND}" alt="" draggable="false"></picture>`+
      `<span class="city-mist a" aria-hidden="true"></span><span class="city-mist b" aria-hidden="true"></span>`+
      `<span class="city-glow" aria-hidden="true"><i></i></span>`+
      `<div class="city-spots">${spots}</div></div>`+
      term+
      `<div class="city-say" role="region" aria-label="The Clepsydra" aria-live="polite">`+
      `<div class="cs-main"></div><div class="cs-extra"></div></div></section>`;
  };

  /* ---- her speech plate: the welcome, or one dashboard line ------------------------------------ */
  function plateInner(){
    if(welcome.on){
      const w=WELCOME[welcome.i];
      return `<p class="cs-line">${esc(w.t)}</p>`+
        `<div class="cs-bar"><span class="cs-step">${welcome.i+1} of ${WELCOME.length}</span>`+
        `<button type="button" class="cs-btn" data-cs="next">Next</button>`+
        `<button type="button" class="cs-btn" data-cs="skip">Skip</button></div>`;
    }
    const L=lines[lineAt]||lines[0];
    if(!L) return '';
    if(sayHTML){
      let sb='';
      if(lines.length>1) sb+=`<button type="button" class="cs-btn" data-cs="more">More (${lineAt+1} of ${lines.length})</button>`;
      sb+=`<button type="button" class="cs-btn" data-cs="about">About Herophilus</button>`;
      return `<p class="cs-line">${sayHTML}</p><div class="cs-bar">${sb}</div>`;
    }
    const line=L.act
      ?`<button type="button" class="cs-line cs-act" data-cs="act">${esc(L.text)}</button>`
      :`<p class="cs-line">${esc(L.text)}</p>`;
    let bar='';
    if(lines.length>1) bar+=`<button type="button" class="cs-btn" data-cs="more">More (${lineAt+1} of ${lines.length})</button>`;
    bar+=`<button type="button" class="cs-btn" data-cs="about">About Herophilus</button>`;
    return line+`<div class="cs-bar">${bar}</div>`;
  }
  function paintPlate(){
    const say=document.querySelector('.city-say');
    if(!say) return;
    const main=say.querySelector('.cs-main');
    const had=say.contains(document.activeElement);
    const key=had&&document.activeElement.dataset?document.activeElement.dataset.cs:null;
    main.innerHTML=plateInner();
    /* lines 5-8 make that building's plaque glow */
    const w=welcome.on?WELCOME[welcome.i]:null;
    document.querySelectorAll('.city-spot').forEach(sp=>{
      const t=sp.querySelector('.city-tag');
      if(t) t.classList.toggle('glow',!!(w&&w.m&&sp.dataset.mod===w.m));
    });
    if(had){
      const el=main.querySelector('[data-cs="'+key+'"]')||main.querySelector('[data-cs="about"]')||main.querySelector('[data-cs]');
      if(el) el.focus();
    }
  }
  function startWelcome(){ clearSay(); welcome.on=true; welcome.seen=true; welcome.i=0; paintPlate(); }
  function endWelcome(){ if(!welcome.on) return; welcome.on=false; paintPlate(); }
  function nextWelcome(){ if(welcome.i>=WELCOME.length-1) endWelcome(); else{ welcome.i++; paintPlate() } }
  /* Escape is only the welcome's when nothing else is open (the shortcuts/confirm modal, the search
     results, the sign-in gate). Capture phase, so the state is read BEFORE another handler closes
     the overlay in the same keypress - otherwise closing a modal would also end the welcome. */
  function overlayOpen(){
    const mb=document.getElementById('modalBg');
    if(mb&&mb.classList.contains('show')) return true;
    const rs=document.getElementById('results');
    if(rs&&rs.classList.contains('show')) return true;
    const g=document.getElementById('gate');
    if(g&&!g.classList.contains('hide')&&g.childElementCount>0) return true;
    const sp=document.getElementById('splash');
    if(sp&&!sp.classList.contains('hide')) return true;
    return false;
  }
  document.addEventListener('keydown',function(e){
    if(!welcome.on||e.key!=='Escape'||e.defaultPrevented||overlayOpen()) return;
    e.preventDefault(); endWelcome();
  },true);

  /* Her voice on this screen. Her own bubble is shut on the home city, so what she says
     (the "?" tool, a tap on her, idle facts, timer lines) goes into the plate for a few seconds, then
     the dashboard line comes back. It never interrupts the welcome: while that plays, it is dropped. */
  let sayHTML=null, sayT=0;
  const homeCity=()=>!!(live&&view.name==='home'&&document.querySelector('.city-say'));
  function clearSay(){ sayHTML=null; clearTimeout(sayT) }
  /* her own dwell runs 4.5-15 s; the plate gives the dashboard line back sooner (2.5 s + 40 ms a character, 6 s at most) */
  function holdSay(len){
    clearTimeout(sayT);
    sayT=setTimeout(function(){ if(sayHTML){ sayHTML=null; paintPlate() } },Math.min(6000,2500+len*40));
  }
  function runLine(){
    const L=lines[lineAt]||lines[0];
    if(!L||!L.act) return;
    if(L.act==='review'){
      const it=itemsBy[L.mod];
      if(it&&it.dueIds&&it.dueIds.length) startQuiz(it.dueIds,'Review — '+it.name+', due today');
    }else if(L.act==='today') go({name:'schedule'});
    else if(L.act==='cont') startChapter(L.cid);
  }
  function bindPlate(say){
    say.addEventListener('click',function(e){
      const b=e.target.closest('[data-cs]');
      if(b){
        const k=b.dataset.cs;
        if(k==='next') nextWelcome();
        else if(k==='skip') endWelcome();
        else if(k==='more'){ if(sayHTML) clearSay(); else lineAt=(lineAt+1)%lines.length; paintPlate() }
        else if(k==='about'){ startWelcome() }
        else if(k==='act') runLine();
        return;
      }
      if(welcome.on&&!e.target.closest('button,a,.cs-extra')) nextWelcome();
    });
  }
  /* she is a fixed corner figure (#clep) the student may drag; the plate stands just left of her
     body, above her small tool row, and follows her */
  function placePlate(){
    const say=document.querySelector('.city-say');
    if(!say) return;
    const c=document.getElementById('clep');
    let r=null;
    if(c&&!c.hidden){
      const b=c.querySelector('.cl-body'), m=c.querySelector('.cl-mini');
      const rb=b&&b.getBoundingClientRect(), rm=m&&m.getBoundingClientRect();
      r=rb&&rb.width?rb:(rm&&rm.width?rm:null);
    }
    const W=window.innerWidth, H=window.innerHeight;
    const right=r?Math.max(8,W-r.left+10):20;
    const bottom=r?Math.max(8,H-r.bottom+32):18;
    const strip=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--strip-w'))||0;
    const avail=Math.max(160,W-right-Math.max(strip,0)-12);
    say.style.setProperty('--sr',Math.round(right)+'px');
    say.style.setProperty('--sb',Math.round(bottom)+'px');
    say.style.setProperty('--sw',Math.round(Math.min(340,avail))+'px');
  }

  /* ---- state, all in memory ------------------------------------------------------------ */
  let seenFirst=false;     // the first render of this page life has happened
  let firstWasHome=false;  // ...and its view was home
  let filmGone=false;      // the film has played, been dropped, or can no longer be offered
  let live=null;           // the current mount: {box, cleanup()}

  function teardown(){
    if(live){ try{live.cleanup()}catch(e){} live=null }
    document.body.classList.remove('city-on');
  }

  /* ---- keep each label inside the visible window ---------------------------------------- */
  /* The stage covers the window, so on a narrow one the painting is cropped left and right and a
     label near the cropped edge would be cut. Each label slides along its box to stay in view. */
  function fitLabels(root){
    const city=root.querySelector('.city');
    if(!city) return;
    const cr=city.getBoundingClientRect();
    /* the fixed side strip (#rail, --strip-w wide when closed; the rest of its box is clear)
       lies over the stage's left edge whenever it is on screen */
    const rail=document.getElementById('rail');
    const strip=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--strip-w'))||0;
    const rr=rail&&rail.getBoundingClientRect().right>0?strip:0;
    const vl=Math.max(cr.left,rr,0)+8, vr=Math.min(cr.right,window.innerWidth)-8;
    root.querySelectorAll('.city-spot').forEach(sp=>{
      const tag=sp.querySelector('.city-tag');
      if(!tag) return;
      tag.style.setProperty('--sx','0px');
      const tr=tag.getBoundingClientRect();
      let dx=0;
      if(tr.left<vl) dx=vl-tr.left;
      else if(tr.right>vr) dx=vr-tr.right;
      /* the window wins: a label is never held back inside its box if that would leave the screen */
      tag.style.setProperty('--sx',Math.round(dx)+'px');
    });
  }

  /* ---- the landing film ------------------------------------------------------------------ */
  /* false = no film this load; 'land' = the landing only (the student has answered something);
     'lead' = shot 1, shot 2 and the landing joined by the cloud cover (nothing answered yet) */
  function eligible(box){
    if(filmGone||!firstWasHome) return false;
    if(reduced()||window.innerWidth<768||upright()) return false;
    return parseInt(box.dataset.done,10)>=1?'land':'lead';
  }
  /* The film in flight, or null. It outlives a re-render: render() also runs on cloud-sync merges,
     and a student watching must not see a restart or a cut. So when the next view is home again,
     the SAME <video> is parked in <body> (still in the document, so it keeps playing) while the page
     is rebuilt, and mount() sets it into the new box in the same task, before anything is painted.
     When the next view is anything else it is torn down at once. The cloud cover is parked and
     adopted the same way; its motion is a Web Animation on the element itself, which carries on
     across the move (a CSS transition would restart). */
  let film=null;   // {park(), adopt(box), destroy()}

  function makeVideo(cls){
    const v=document.createElement('video');
    v.className=cls;
    v.muted=true; v.defaultMuted=true; v.playsInline=true; v.preload='auto'; v.tabIndex=-1;
    v.setAttribute('muted',''); v.setAttribute('playsinline',''); v.setAttribute('aria-hidden','true');
    return v;
  }

  /* The cloud cover: one full-frame painted mist, opaque once risen. It sits above the films and
     the still's furniture and below the hot-spots. opacity + a slight upward translate only. */
  function makeCover(){
    const el=document.createElement('span');
    el.className='city-cover';
    el.setAttribute('aria-hidden','true');
    const anims=[];
    /* never cancelled until kill(): a later animation sets only what it names, and the earlier one's
       fill keeps the rest (e.g. a quick fade keeps the translate the rise ended on) */
    function go(frames,ms,ease){
      if(!el.animate){
        const last=frames[frames.length-1];
        el.style.opacity=last.opacity;
        return Promise.resolve();
      }
      const a=el.animate(frames,{duration:ms,easing:ease,fill:'forwards'});
      anims.push(a);
      return a.finished.catch(()=>{});
    }
    return {
      el,
      alive:true,
      rise(ms){ return go([{opacity:0,transform:'translateY(8%)'},{opacity:1,transform:'translateY(0)'}],ms,'ease-in') },
      clear(ms){ return go([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-4%)'}],ms,'ease-out') },
      fade(ms){ return go([{opacity:parseFloat(getComputedStyle(el).opacity)||0},{opacity:0}],ms,'linear') },
      kill(){
        this.alive=false;
        anims.forEach(a=>{ try{a.cancel()}catch(e){} });
        el.remove();
      }
    };
  }

  /* Shot 1: the painted plate with a slow camera glide, done in the page (no film). Two stacked
     pictures in one clipped box: the base (a slow push-in 1.00 -> 1.16 with a 5% downward tilt) and one
     painted cloud layer that rises over it and swells, faster toward the end, so it reads as
     diving into cloud. transform only. The images are fetched with the intro; if they are not both
     decoded within S1_DEADLINE (or fail), there is no shot 1 this load. */
  function makeGlide(){
    const el=document.createElement('span');
    el.className='city-s1';
    el.setAttribute('aria-hidden','true');
    const base=new Image(), near=new Image();
    base.className='s1-base'; near.className='s1-near';
    [base,near].forEach(im=>{ im.alt=''; im.draggable=false; el.appendChild(im) });
    const anims=[];
    const pic=(im,src)=>new Promise((ok,no)=>{
      im.onload=()=>{ (im.decode?im.decode():Promise.resolve()).then(ok,ok) };
      im.onerror=()=>no(new Error('shot 1 image'));
      im.src=src;
    });
    /* the near layer: translateY(35%) -> 0 and scale 1 -> 1.15 about the bottom centre, on a squared
       ease-in (t=0,.25,.5,.75,1 sampled), so the last third covers over half the travel */
    const nearFrames=[0,.25,.5,.75,1].map(t=>{
      const p=t*t;
      return {offset:t,transform:'translateY('+(35*(1-p)).toFixed(2)+'%) scale('+(1+.15*p).toFixed(4)+')'};
    });
    return {
      el,
      alive:true,
      loaded:Promise.all([pic(base,S1_BASE),pic(near,S1_NEAR)]),
      /* returns a promise that settles when the glide has run its course */
      start(){
        const a=base.animate(
          [{transform:'translateY(0) scale(1)'},{transform:'translateY(5%) scale(1.16)'}],
          {duration:S1_MS,easing:'ease-in-out',fill:'forwards'});
        const b=near.animate(nearFrames,{duration:S1_MS,easing:'linear',fill:'forwards'});
        anims.push(a,b);
        this.clock=a;
        return a.finished;
      },
      clock:null,
      left(){ return this.clock?S1_MS-Number(this.clock.currentTime||0):S1_MS },
      kill(){
        this.alive=false;
        anims.forEach(a=>{ try{a.cancel()}catch(e){} });
        el.remove();
      }
    };
  }

  /* The intro is an ordered list of stages: [shot 1 glide,] shot 2 film, landing film. Between two
     stages the painted cloud cover rises over the end of the one that is playing, the swap happens
     under it while it is opaque, then it clears over the next. After the last stage it is removed. */
  function startFilm(box,withLead){
    const v=makeVideo('city-film'+(withLead?' queued':''));    // the landing
    const L=withLead?makeVideo('city-film queued'):null;        // shot 2, the lighthouse drop
    const cov=withLead?makeCover():null;
    const g=(withLead&&Element.prototype.animate)?makeGlide():null;   // shot 1
    let host=box;                                   // the box the film sits in now
    let spots=box.querySelector('.city-spots');
    host.insertBefore(v,host.querySelector('.city-plate').nextSibling);
    if(L) host.insertBefore(L,v.nextSibling);
    if(cov) host.insertBefore(cov.el,spots);
    /* the lead is fetched first and alone; the landing is only asked for once the intro has begun,
       so it cannot slow the lead's one-second chance */
    (L||v).src=L?LEAD:FILM;

    let timer=0, holdT=0, waitT=0, s1T=0, raf=0;
    let state='wait';   // wait -> run <-> swap -> out; or wait -> dropped; destroy() -> gone
                        // run = a stage is playing, swap = the cover is rising / the next stage is entering
    let parked=false, rising=false, waiting=false, leadIn=!!L, landReady=false, firstReady=false, gIn=false;
    let s1State=g?'pending':'none';   // pending -> ok | none
    let stages=[], idx=0;
    const cleanListeners=()=>{
      clearTimeout(timer); clearTimeout(holdT); clearTimeout(waitT); clearTimeout(s1T);
      cancelAnimationFrame(raf);
      document.removeEventListener('click',onClick,true);
      document.removeEventListener('keydown',onKey,true);
    };
    function dropLead(){
      if(!leadIn) return;
      leadIn=false;
      L.removeAttribute('src'); try{L.load()}catch(e){}
      L.remove();
    }
    function dropGlide(){ gIn=false; if(g&&g.alive) g.kill() }
    function unload(){
      dropGlide();
      dropLead();
      v.removeAttribute('src'); try{v.load()}catch(e){}
      v.remove();
      if(cov) cov.kill();
      if(film===api) film=null;
    }
    function drop(){
      if(state!=='wait') return;
      state='dropped'; filmGone=true;
      cleanListeners();
      unload();
    }
    const live=()=>state==='run'||state==='swap';
    /* Fade to the sharp still, then remove. */
    function finish(){
      if(!live()) return;
      state='out';
      cleanListeners();
      try{v.pause()}catch(e){}
      if(L) try{L.pause()}catch(e){}
      v.classList.add('out');
      if(leadIn) L.classList.add('out');
      if(gIn&&g.alive) g.el.classList.add('out');
      if(cov&&cov.alive) cov.fade(FADE_MS);
      host.classList.remove('playing');
      setTimeout(()=>{
        if(state!=='out') return;
        unload();
        spots.inert=false;
      },FADE_MS+40);
    }
    function onClick(e){
      if(!live()) return;
      const onStage=!!(e.target&&e.target.closest&&e.target.closest('.city'));
      if(onStage){ e.preventDefault(); e.stopPropagation() }
      finish();
    }
    function onKey(){ if(live()) finish() }
    function onError(){
      if(state==='wait') drop();
      else if(L&&live()) finish();
    }

    /* ---- the stages. show() starts one (it may return a promise that settles when it is playing),
       hide() removes it under the cover, left() is the ms it has still to run ---- */
    const glideStage={
      show(){ g.start().then(()=>endOf(glideStage),()=>{}) },
      hide:dropGlide,
      left:()=>g.left()
    };
    const leadStage={
      show(){ L.classList.remove('queued'); return L.play() },
      hide:dropLead,
      left:()=>L.duration?(L.duration-L.currentTime)*1000:Infinity
    };
    const landStage={
      show(){ v.classList.remove('queued'); return v.play() },
      hide(){},
      left:()=>Infinity,
      ready:()=>landReady
    };

    /* ---- the chain: stage -> cover rises -> hard swap -> next stage -> cover clears ---- */
    let risePromise=null;
    function startRise(){
      if(rising) return;
      rising=true;
      risePromise=cov.rise(RISE_MS);
    }
    function watch(){
      raf=requestAnimationFrame(watch);
      if(state!=='run'||idx>=stages.length-1) return;
      if(stages[idx].left()<=RISE_MS) startRise();
    }
    function endOf(s){
      if(state!=='run'||stages[idx]!==s||idx>=stages.length-1) return;
      state='swap';
      startRise();
      /* the swap waits for the cover to be fully opaque (the rise's own end) */
      risePromise.then(()=>{ if(state==='swap'&&stages[idx]===s) swap() });
    }
    function swap(){
      stages[idx].hide();                 // hard swap, under the opaque cover
      idx++;
      enter();
    }
    function enter(){
      if(state!=='swap') return;
      const s=stages[idx];
      if(s.ready&&!s.ready()){
        waiting=true;
        waitT=setTimeout(()=>{ if(state==='swap') finish() },LAND_WAIT_MS);
        return;
      }
      waiting=false;
      clearTimeout(waitT);
      const pr=s.show();
      const go=()=>{
        if(state!=='swap') return;
        state='run'; rising=false;
        const last=idx===stages.length-1;
        holdT=setTimeout(()=>{
          if(state==='run'&&cov.alive) cov.clear(CLEAR_MS).then(()=>{ if(cov.alive&&state==='run'&&last) cov.kill() });
        },HOLD_MS);
      };
      if(pr&&pr.then) pr.then(go,()=>{ if(state==='swap') finish() }); else go();
    }

    /* ---- the first stage: begin once the first video can play through and shot 1's pictures have
       either arrived or been given up on ---- */
    function begin(){
      if(state!=='wait') return;
      state='run'; filmGone=true;
      host.classList.add('playing');
      spots.inert=true;
      document.addEventListener('click',onClick,true);
      document.addEventListener('keydown',onKey,true);
      if(L){ v.src=FILM; raf=requestAnimationFrame(watch) }
    }
    function tryBegin(){
      if(state!=='wait'||!firstReady||s1State==='pending') return;
      stages=L?(s1State==='ok'?[glideStage,leadStage,landStage]:[leadStage,landStage]):[landStage];
      if(stages[0]===glideStage){
        gIn=true;
        host.insertBefore(g.el,cov.el);
        begin();
        glideStage.show();
      }else{
        const pr=stages[0].show();
        if(pr&&pr.then) pr.then(begin,drop); else begin();
      }
    }
    function s1Settled(ok){
      if(s1State!=='pending') return;
      clearTimeout(s1T);
      s1State=ok?'ok':'none';
      if(!ok&&g.alive) g.kill();
      tryBegin();
    }

    v.addEventListener('ended',finish);
    v.addEventListener('error',L?onError:drop);
    v.addEventListener('canplaythrough',function(){
      landReady=true;
      if(!L){ clearTimeout(timer); firstReady=true; tryBegin() }
      else if(waiting) enter();
    },{once:true});
    if(L){
      L.addEventListener('ended',()=>endOf(leadStage));
      L.addEventListener('error',onError);
      /* the 1 s chance is for the first video alone: once it can play, only shot 1's own 4 s limit decides */
      L.addEventListener('canplaythrough',function(){ clearTimeout(timer); firstReady=true; tryBegin() },{once:true});
    }
    if(g){
      s1T=setTimeout(()=>s1Settled(false),S1_DEADLINE);
      g.loaded.then(()=>s1Settled(true),()=>s1Settled(false));
    }
    timer=setTimeout(drop,FILM_DEADLINE);

    const api={
      /* the page is about to be rebuilt as home again: keep the element alive in <body>. If no
         mount() takes it back by the end of this task, it is torn down. */
      park(){
        if(parked||state==='gone') return;
        parked=true;
        document.body.appendChild(v);
        if(leadIn) document.body.appendChild(L);
        if(gIn&&g.alive) document.body.appendChild(g.el);
        if(cov&&cov.alive) document.body.appendChild(cov.el);
        queueMicrotask(()=>{ if(parked) api.destroy() });
      },
      /* the rebuilt home: set the same element into the new box and carry the state over */
      adopt(nb){
        parked=false;
        host=nb; spots=nb.querySelector('.city-spots');
        nb.insertBefore(v,nb.querySelector('.city-plate').nextSibling);
        if(leadIn) nb.insertBefore(L,v.nextSibling);
        if(gIn&&g.alive) nb.insertBefore(g.el,spots);
        if(cov&&cov.alive) nb.insertBefore(cov.el,spots);
        if(live()){ nb.classList.add('playing'); spots.inert=true }
      },
      /* nothing waits for the film: stop at once, drop it for this load */
      destroy(){
        cleanListeners();
        if(state==='wait') filmGone=true;
        state='gone';
        try{v.pause()}catch(e){}
        if(L) try{L.pause()}catch(e){}
        if(spots) spots.inert=false;
        if(host) host.classList.remove('playing');
        unload();
      }
    };
    film=api;
  }

  /* ---- mount (after the page is built) -------------------------------------------------- */
  function mount(){
    const page=document.getElementById('page');
    const box=page&&page.querySelector('.city-box');
    if(!box){ if(film) film.destroy(); return }   // a parked film has no home to go back to
    document.body.classList.add('city-on');
    const tb=document.querySelector('.topbar');
    const setTop=()=>{
      const t=tb?Math.round(tb.getBoundingClientRect().height):0;
      page.querySelector('.city').style.setProperty('--city-top',t+'px');
    };
    setTop(); fitLabels(page);
    let raf=0;
    const onResize=()=>{
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(()=>{ setTop(); fitLabels(page); placePlate() });
    };
    window.addEventListener('resize',onResize);
    const m={box,cleanup(){
      cancelAnimationFrame(raf);
      clearInterval(settleT);
      window.removeEventListener('resize',onResize);
    }};
    live=m;
    /* the saved-mock button render() puts in front of the page goes into her plate */
    const city=page.querySelector('.city');
    const extra=page.querySelector('.cs-extra');
    if(city&&extra){
      for(const el of Array.from(page.children)){ if(el===city) break; extra.appendChild(el) }
    }
    const say=page.querySelector('.city-say');
    if(say){ bindPlate(say); paintPlate(); placePlate() }
    /* fonts and layout settle after first paint */
    if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{ if(live===m) fitLabels(page) });

    if(film){
      film.adopt(box);   // a re-render of home mid-film: the same element carries on
    }else if(firstWasHome&&!filmGone){
      const mode=eligible(box);
      if(mode){
        startFilm(box,mode==='lead');
      }else{
        filmGone=true;   // the one chance of this load went by without a film
      }
    }
    armSettle(box,say);
  }

  /* Her plate waits out a film; once the city has settled (film over, skipped, dropped, or never
     offered) it shows, and a first visit (nothing answered) gets the welcome once per page load. */
  function armSettle(box,say){
    clearInterval(settleT);
    if(!say) return;
    const settle=()=>{
      say.classList.remove('wait');
      if(!welcome.on&&!welcome.seen&&parseInt(box.dataset.done,10)===0) startWelcome();
    };
    if(!film&&!box.classList.contains('playing')){ settle(); return }
    say.classList.add('wait');
    settleT=setInterval(()=>{
      if(!box.isConnected){ clearInterval(settleT); return }
      if(film||box.classList.contains('playing')) return;
      clearInterval(settleT); settle();
    },120);
  }

  /* ---- wraps ----------------------------------------------------------------------------- */
  const _syncFilm=syncFilm;
  syncFilm=function(){
    teardown();
    if(!me&&film) film.destroy();
    /* no profile yet = the page behind the sign-in gate; that is not the first view */
    if(!me) return _syncFilm.apply(this,arguments);
    if(!seenFirst){ seenFirst=true; firstWasHome=view.name==='home' }
    else if(view.name!=='home'){ filmGone=true }
    if(view.name!=='home'){ welcome.on=false; clearSay() }
    if(film){ if(view.name==='home') film.park(); else film.destroy() }
    return _syncFilm.apply(this,arguments);
  };
  const _cs=clepSay;
  clepSay=function(text,opt){
    const r=_cs.apply(this,arguments);
    const o=opt||{};
    /* same gate as her own bubble; a welcome in progress is never interrupted */
    if(text&&homeCity()&&!welcome.on&&CLEP.on&&!((CLEP.muted||CLEP.mini)&&!o.force)){
      sayHTML=clepPartial(clepSegs(String(text)),1e6);
      holdSay(String(text).length);
      paintPlate();
    }
    return r;
  };
  const _cd=clepDismiss;
  clepDismiss=function(){
    const r=_cd.apply(this,arguments);
    if(sayHTML){ clearSay(); paintPlate() }
    return r;
  };
  const _cp=clepPlace;
  clepPlace=function(){ const r=_cp.apply(this,arguments); if(live) placePlate(); return r };
  const _ink=inkMarkChips;
  inkMarkChips=function(root){
    const r=_ink.apply(this,arguments);
    if(view.name==='home'&&me) mount();
    else if(film) film.destroy();
    return r;
  };
})();
