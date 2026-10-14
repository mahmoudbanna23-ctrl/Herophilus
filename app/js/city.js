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

   THE LANDING FILM (landing-dark.mp4, 81 frames, 720x480, the end is a softer copy of the
   still). Once per page load, only when the very first view is home, the student has answered
   at least one question, motion is not reduced, the window is landscape and >= 768 wide. A
   muted <video> goes in above the still; if it cannot play through within 1000 ms it is
   dropped for this load. When it ends it fades out (opacity) to the sharp still and is removed.
   While it plays, the spots are inert; any key, or a click anywhere, skips to the faded-out end,
   and a click on the stage itself does not also open a subject. A click elsewhere (the menu,
   say) skips AND goes through - navigation never waits for the film. Later visits to home in
   the same page life: the still only. A student with nothing answered: the still only (the
   scroll dive is a later slice). In-memory flags only; nothing here touches storage. */
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
  const FILM_DEADLINE=1000;   // ms to reach canplaythrough, else no film this load
  const FADE_MS=400;

  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const upright=()=>matchMedia('(max-aspect-ratio:1/1)').matches;

  /* ---- markup (called by vHome) ------------------------------------------------------- */
  const pct=n=>(Math.round(n*100)/100)+'%';
  function boxVars(b,pre){
    return '--'+pre+'l:'+pct(b[0])+';--'+pre+'t:'+pct(b[1])+
           ';--'+pre+'w:'+pct(b[2]-b[0])+';--'+pre+'h:'+pct(b[3]-b[1]);
  }
  /* items: [{id,name,locked,done,total,acc}] in any order; the painting fixes the order. */
  window.cityStageHTML=function(items,answered){
    const by={};
    (items||[]).forEach(it=>{by[it.id]=it});
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
      const go=it.locked?' disabled aria-disabled="true"':` onclick="go({name:'module',id:'${sp.id}'})"`;
      spots+=`<button type="button" class="city-spot" data-mod="${sp.id}" data-la="${sp.la}" data-pa="${sp.pa}" style="${style}"${go}>`+
        `<span class="city-tag"><span class="mod-name">${esc(it.name)}</span>`+
        `<span class="city-meta${it.done===0&&!it.locked?' go':''}">${meta}</span></span></button>`;
    });
    return `<section class="city" aria-label="Choose a subject">`+
      `<div class="city-box" data-done="${answered|0}">`+
      `<picture class="city-plate"><source media="(max-aspect-ratio:1/1)" srcset="${PLATE_TALL}">`+
      `<img src="${PLATE_LAND}" alt="" draggable="false"></picture>`+
      `<span class="city-mist a" aria-hidden="true"></span><span class="city-mist b" aria-hidden="true"></span>`+
      `<span class="city-glow" aria-hidden="true"><i></i></span>`+
      `<div class="city-spots">${spots}</div></div></section>`;
  };

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
  function eligible(box){
    if(filmGone||!firstWasHome) return false;
    if(!(parseInt(box.dataset.done,10)>=1)) return false;
    if(reduced()||window.innerWidth<768||upright()) return false;
    return true;
  }
  /* The film in flight, or null. It outlives a re-render: render() also runs on cloud-sync merges,
     and a student watching must not see a restart or a cut. So when the next view is home again,
     the SAME <video> is parked in <body> (still in the document, so it keeps playing) while the page
     is rebuilt, and mount() sets it into the new box in the same task, before anything is painted.
     When the next view is anything else it is torn down at once. */
  let film=null;   // {park(), adopt(box), destroy()}

  function startFilm(box){
    const v=document.createElement('video');
    v.className='city-film';
    v.muted=true; v.defaultMuted=true; v.playsInline=true; v.preload='auto'; v.tabIndex=-1;
    v.setAttribute('muted',''); v.setAttribute('playsinline',''); v.setAttribute('aria-hidden','true');
    v.src=FILM;
    let host=box;                                   // the box the film sits in now
    let spots=box.querySelector('.city-spots');
    host.insertBefore(v,host.querySelector('.city-plate').nextSibling);

    let timer=0, state='wait';   // wait -> play -> out; or wait -> dropped; destroy() -> gone
    let parked=false;
    const cleanListeners=()=>{
      clearTimeout(timer);
      document.removeEventListener('click',onClick,true);
      document.removeEventListener('keydown',onKey,true);
    };
    function unload(){
      v.removeAttribute('src'); try{v.load()}catch(e){}
      v.remove();
      if(film===api) film=null;
    }
    function drop(){
      if(state!=='wait') return;
      state='dropped'; filmGone=true;
      cleanListeners();
      unload();
    }
    /* Fade to the sharp still, then remove. */
    function finish(){
      if(state!=='play') return;
      state='out';
      cleanListeners();
      try{v.pause()}catch(e){}
      v.classList.add('out');
      host.classList.remove('playing');
      setTimeout(()=>{
        if(state!=='out') return;
        unload();
        spots.inert=false;
      },FADE_MS+40);
    }
    function onClick(e){
      if(state!=='play') return;
      const onStage=!!(e.target&&e.target.closest&&e.target.closest('.city'));
      if(onStage){ e.preventDefault(); e.stopPropagation() }
      finish();
    }
    function onKey(){ if(state==='play') finish() }

    v.addEventListener('ended',finish);
    v.addEventListener('error',drop);
    v.addEventListener('canplaythrough',function(){
      if(state!=='wait') return;
      clearTimeout(timer);
      const pr=v.play();
      const begin=()=>{
        if(state!=='wait') return;
        state='play'; filmGone=true;
        host.classList.add('playing');
        spots.inert=true;
        document.addEventListener('click',onClick,true);
        document.addEventListener('keydown',onKey,true);
      };
      if(pr&&pr.then) pr.then(begin,drop); else begin();
    },{once:true});
    timer=setTimeout(drop,FILM_DEADLINE);

    const api={
      /* the page is about to be rebuilt as home again: keep the element alive in <body>. If no
         mount() takes it back by the end of this task, it is torn down. */
      park(){
        if(parked||state==='gone') return;
        parked=true;
        document.body.appendChild(v);
        queueMicrotask(()=>{ if(parked) api.destroy() });
      },
      /* the rebuilt home: set the same element into the new box and carry the state over */
      adopt(nb){
        parked=false;
        host=nb; spots=nb.querySelector('.city-spots');
        nb.insertBefore(v,nb.querySelector('.city-plate').nextSibling);
        if(state==='play'){ nb.classList.add('playing'); spots.inert=true }
      },
      /* nothing waits for the film: stop at once, drop it for this load */
      destroy(){
        cleanListeners();
        if(state==='wait') filmGone=true;
        state='gone';
        try{v.pause()}catch(e){}
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
      raf=requestAnimationFrame(()=>{ setTop(); fitLabels(page) });
    };
    window.addEventListener('resize',onResize);
    const m={box,cleanup(){
      cancelAnimationFrame(raf);
      window.removeEventListener('resize',onResize);
    }};
    live=m;
    /* the saved-mock button render() puts in front of the page goes under the stage */
    const city=page.querySelector('.city');
    const below=page.querySelector('.city-below');
    if(city&&below){
      const strays=[];
      for(const el of Array.from(page.children)){ if(el===city) break; strays.push(el) }
      const first=below.firstChild;
      strays.forEach(el=>below.insertBefore(el,first));
    }
    /* fonts and layout settle after first paint */
    if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{ if(live===m) fitLabels(page) });

    if(film){
      film.adopt(box);   // a re-render of home mid-film: the same element carries on
    }else if(firstWasHome&&!filmGone){
      if(eligible(box)){
        startFilm(box);
      }else{
        filmGone=true;   // the one chance of this load went by without a film
      }
    }
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
    if(film){ if(view.name==='home') film.park(); else film.destroy() }
    return _syncFilm.apply(this,arguments);
  };
  const _ink=inkMarkChips;
  inkMarkChips=function(root){
    const r=_ink.apply(this,arguments);
    if(view.name==='home'&&me) mount();
    else if(film) film.destroy();
    return r;
  };
})();
