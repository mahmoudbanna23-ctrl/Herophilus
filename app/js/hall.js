/* The home screen as a library: seen from outside first, then walked into.

   The four subject cards are replaced by one round hall of five walls: a statue wall
   and one wall per subject, each a button holding that subject's carved card. This file
   touches NO existing script: it wraps the three functions it needs by name (render.js
   looks them up at call time) and builds the hall around whatever vHome already wrote.

     vHome        — after it runs, everything it made moves into .hall-below, the
                    old "Subjects" heading and .mod-grid are dropped, and the
                    welcome <h1> moves onto the outside painting.
     syncFilm     — runs first on every render; it is where we learn which view
                    is showing, so body.hall-on is switched here, the ambient film
                    is stopped while the hall covers it, and any walk-in built by
                    the last render is killed before the page is replaced.
     inkMarkChips — runs right after render() adds the saved-mock button above
                    the page; the button is tucked into .hall-below so the hall
                    stays the first thing on screen.

   THE WALK-IN AND THE RING. Home opens on the outside painting (assets/hall/outside-*.jpg).
   A pinned, scroll-scrubbed section scales that painting about the doorway while the hall,
   clipped to the doorway's shape, is seen through it from the first pixel; the opening grows
   with the building until it covers the screen. The hall is then a ring: five flat walls
   (.wall, each 1.3x the 3:2 plate in height, the plate in .wall-frame) stand on a regular
   pentagon, the eye at its middle (each wall's transform carries perspective = the apothem and
   turns about the eye). Scrolling turns the room on the spot: four turns of 72
   degrees (.6 turn + .3 hold each), snapping to the nearest wall once the walk-in is over.
   R (0..4) is the one scrubbed value of the ring; only the wall in view and its neighbours
   stand on the ring, the others are parked flat off to the left so their buttons stay
   focusable, and focusing a subject button turns the room to its wall. When R is past wall 4
   the rest of home laps up over the hall's lower edge, the hall drifting a little slower.
   Only transform, opacity and clip-path are animated. GSAP, ScrollTrigger and DrawSVG are
   classic scripts in js/lib/, loaded from here, never from index.html, and never allowed to
   strand the boot: if they are missing, or take over 3 s, or 3D transforms are unsupported,
   or motion is reduced, the plain stack stays — outside with its welcome card, the statue
   block, then the four subject walls as a grid, plaques in place and rings full — no pin,
   no scrub, no timers.

   Coming back to home from another view lands in the hall on the wall the student left
   (lastWall); a fresh load starts outside. That is one in-memory variable, never storage.
   Alcove click keeps the push-in; reduced motion: none of it. */
(function(){
  'use strict';

  const link=document.createElement('link');
  link.rel='stylesheet'; link.href='css/hall.css';
  document.head.appendChild(link);
  const rooms=document.createElement('link');
  rooms.rel='stylesheet'; rooms.href='css/rooms.css';
  document.head.appendChild(rooms);
  const warm=document.createElement('link');
  warm.rel='stylesheet'; warm.href='css/warm.css';
  document.head.appendChild(warm);
  const type=document.createElement('link');
  type.rel='stylesheet'; type.href='css/type.css';
  document.head.appendChild(type);

  /* Left to right on the painting. The order is fixed here, by module id — never
     taken from the order activeModules() returns. */
  const ORDER=['ent','ophtho','neuropsych','pediatrics'];
  /* The five walls of the ring, in turning order. Wall 0 is the statue wall; wall n
     (1..4) carries ORDER[n-1]. */
  const WALLS=['statue','ent','ophtho','neuropsych','pediatrics'];
  const STEP=72;          // degrees between neighbouring walls (a regular pentagon)
  /* The doorway, as fractions of the 1536x1024 outside painting (pixel-scanned
     by the painter; the two themes agree within 0.3%). */
  const DOOR={cx:.498,cy:.528,l:.412,t:.326,w:.173,h:.404,arch:.425,inset:.004};
  const PAINT_W=1536, PAINT_H=1024;

  let prev=null;          // the view before this render: {name,id}
  let returned=false;     // this render entered home from another view
  let keepY=0;            // scroll position to keep when home re-renders in place
  let pushing=false;      // one-shot guard: a push-in is under way
  let pushTimer=0;        // the 450 ms push-in timer; killWalk cancels it
  let lastWall=0;         // the wall (0..4) the student left from; startWalk lands there on return
  let hallObs=null;       // watches the hall to pause loops and swap the Clepsydra
  let walk=null;          // the live walk-in: {kill()}
  let gateSeen=false;     // the opening gate has started once in this page life (memory only, no storage)
  let buildToken=0;       // bumped on every kill; a late async upgrade checks it
  let libState='idle';    // 'idle' | 'loading' | 'ok' | 'fail'
  let libPromise=null;
  let decodedTheme='';    // the theme whose two paintings are already decoded

  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const tall=()=>matchMedia('(orientation:portrait)').matches;   // same test as hall.css: upright window, tall painting
  const body=()=>document.body;
  /* The ring needs real 3D. Without it the plain stack stays (no pin, no doors). */
  const can3d=()=>!!(window.CSS&&CSS.supports&&CSS.supports('transform-style','preserve-3d')&&CSS.supports('perspective','1px'));
  const theme=()=>document.documentElement.getAttribute('data-theme')==='light'?'light':'dark';

  function unwatch(){
    if(hallObs){hallObs.disconnect();hallObs=null}
    body().classList.remove('hall-clep');
  }

  /* ---- motion libraries ----------------------------------------------- */
  /* Three local classic scripts, loaded in order. DrawSVG is optional (the rings
     fall back to a dash-offset move without it); gsap and ScrollTrigger are not. */
  function loadLibs(){
    if(libPromise) return libPromise;
    libState='loading';
    const files=['gsap.min.js','ScrollTrigger.min.js','DrawSVGPlugin.min.js'];
    libPromise=new Promise(resolve=>{
      const fin=ok=>{
        libState=ok&&window.gsap&&window.ScrollTrigger?'ok':'fail';
        resolve(libState==='ok');
      };
      (function next(i){
        if(i===files.length){fin(true);return}
        const s=document.createElement('script');
        s.src='js/lib/'+files[i];
        s.onload=()=>next(i+1);
        s.onerror=()=>{ if(i===2) next(3); else fin(false) };
        document.head.appendChild(s);
      })(0);
    });
    return libPromise;
  }
  if(!reduced()){
    loadLibs();
    /* the two bronze leaves are in the first paint of home, so they are fetched now */
    ['door-l.png','door-r.png'].forEach(n=>{ const im=new Image(); im.src='assets/hall/'+n; });
  }

  function decodePaintings(){
    const th=theme();
    /* the wall plates are not decoded here yet: the ring runs on CSS stand-ins */
    return Promise.all(['outside-'+th+'.jpg','door-l.png','door-r.png'].map(n=>{
      const im=new Image();
      im.src='assets/hall/'+n;
      return im.decode?im.decode().catch(()=>{}):Promise.resolve();
    })).then(()=>{decodedTheme=th});
  }

  /* Resolves true when motion can start, false when the plain version must stay.
     The 3 s clock covers the libraries and the two paintings together. */
  function motionReady(){
    return new Promise(resolve=>{
      let done=false;
      const fin=ok=>{ if(done) return; done=true; clearTimeout(t); resolve(ok) };
      const t=setTimeout(()=>fin(false),3000);
      loadLibs().then(ok=>ok?decodePaintings().then(()=>fin(true)):fin(false)).catch(()=>fin(false));
    });
  }
  const motionNow=()=>libState==='ok'&&decodedTheme===theme();

  /* ---- the shut doors, from first paint -------------------------------- */
  /* The two leaves are part of the hall's first markup, shut, so the doorway is never
     seen empty. They exist only while motion may still start: reduced motion and a
     failed library never get them, and the 3 s fallback takes them out again (a shut
     door that cannot open is forbidden). */
  /* Each leaf is a box (it turns, and carries the ruin overlay) round its painting. The
     .wk-fx layer beside the door box holds the grit and dust of the opening gate; the
     door box has an arch clip that would cut them. */
  const DOORS_HTML='<div class="wk-doors" aria-hidden="true"><div class="wk-dbox"><i class="wk-shade"></i>'+
    '<div class="wk-leaf l"><img src="assets/hall/door-l.png" alt=""></div>'+
    '<div class="wk-leaf r"><img src="assets/hall/door-r.png" alt=""></div></div>'+
    '<div class="wk-fx">'+[8,17,26,35,44,53,62,71,80,90].map(x=>'<i class="g" style="left:'+x+'%"></i>').join('')+
    '<i class="p a"></i><i class="p b"></i></div></div>';
  function dropDoors(hall){
    const d=hall&&hall.querySelector('.wk-doors');
    if(d) d.remove();
  }
  /* Put the door box on the painted doorway. o = where the outside painting lies in
     the view (px), Wo x Ho = its size. The one place the box is sized, for the plain
     shape (before the walk starts) and the walk shape alike. */
  function fitDoors(hall,ox,oy,Wo,Ho){
    const doors=hall.querySelector('.wk-doors');
    if(!doors) return;
    const dbox=doors.firstElementChild;
    doors.style.left=ox+'px'; doors.style.top=oy+'px';
    doors.style.width=Wo+'px'; doors.style.height=Ho+'px';
    /* a half-inset in from the doorway's edge (the hall's own clip is one full inset in,
       so the doors always cover it), arch clipped round */
    const Dm=DOOR.inset*Wo*.5, bw=DOOR.w*Wo-2*Dm, bh=DOOR.h*Ho-Dm, bry=(DOOR.arch-DOOR.t)*Ho-Dm;
    dbox.style.left=(DOOR.l*Wo+Dm).toFixed(2)+'px'; dbox.style.top=(DOOR.t*Ho+Dm).toFixed(2)+'px';
    dbox.style.width=bw.toFixed(2)+'px'; dbox.style.height=bh.toFixed(2)+'px';
    dbox.style.perspective=(bw*2.4).toFixed(0)+'px';
    dbox.style.clipPath='inset(0 round '+(bw/2).toFixed(2)+'px '+(bw/2).toFixed(2)+'px 0 0 / '+bry.toFixed(2)+'px '+bry.toFixed(2)+'px 0 0)';
    const fx=doors.querySelector('.wk-fx');   // same box, no clip; --u = 1 % of the door width
    if(fx){ Object.assign(fx.style,{left:dbox.style.left,top:dbox.style.top,width:dbox.style.width,height:dbox.style.height}); fx.style.setProperty('--u',(bw/100).toFixed(3)+'px'); }
  }
  /* Before the walk: the outside painting is a screen-tall block (background cover,
     centred across, 56% down), and the leaves sit on its doorway there. */
  function placePlain(hall){
    if(hall.classList.contains('walk')) return;
    const out=hall.querySelector('.wk-out');
    const W=out.clientWidth, H=out.clientHeight;
    if(!W||!H) return;
    const k=Math.max(W/PAINT_W,H/PAINT_H), Wo=PAINT_W*k, Ho=PAINT_H*k;
    fitDoors(hall,(W-Wo)*.5,(H-Ho)*.56,Wo,Ho);
  }

  /* ---- wraps ---------------------------------------------------------- */
  const _syncFilm=syncFilm;
  syncFilm=function(){
    /* Before the page is replaced: remember where a re-render of home stood, and
       take the old walk-in apart while its elements still exist. */
    keepY=prev&&prev.name==='home'&&view.name==='home'?(window.scrollY||0):0;
    killWalk();
    const r=_syncFilm.apply(this,arguments);
    const home=view.name==='home'&&activeModules().length>0;
    returned=home&&!!prev&&prev.name!=='home';
    prev={name:view.name,id:view.id};
    body().classList.toggle('hall-on',home);
    if(home){
      /* display:none does not stop a <video> decoding — pause it explicitly. */
      setFilm(document.querySelector('.ambient .film'),false);
    }else{
      unwatch();
    }
    return r;
  };
  /* Painted rooms wrap syncFilm once more, so rooms.js loads after the wrap above. */
  const roomsJs=document.createElement('script');
  roomsJs.src='js/rooms.js';
  document.body.appendChild(roomsJs);

  const _vHome=vHome;
  vHome=function(p){
    const r=_vHome.apply(this,arguments);
    buildHall(p);
    return r;
  };

  const _ink=inkMarkChips;
  inkMarkChips=function(root){
    const r=_ink.apply(this,arguments);
    tuck(root);
    return r;
  };

  /* Anything render() put in front of the hall (the saved-mock button) goes in
     front of the content below it instead. */
  function tuck(root){
    const hall=root&&root.querySelector(':scope > .hall');
    const below=root&&root.querySelector(':scope > .hall-below');
    if(!hall||!below) return;
    const strays=[];
    for(const el of Array.from(root.children)){
      if(el===hall) break;
      strays.push(el);
    }
    const first=below.firstChild;
    strays.forEach(el=>below.insertBefore(el,first));
  }

  /* ---- build ---------------------------------------------------------- */
  function buildHall(p){
    unwatch();
    const mods=activeModules();
    const byId={};
    mods.forEach(m=>{byId[m.id]=m});
    if(!ORDER.some(id=>byId[id])){body().classList.remove('hall-on');return}
    body().classList.add('hall-on');

    const below=document.createElement('div');
    below.className='hall-below';
    while(p.firstChild) below.appendChild(p.firstChild);
    /* the three lines of the statue block go to wall 0; the rest of the old panel goes with it */
    const hero=below.querySelector('.hero-panel');
    const heroLines=hero?['.hp-kicker','.hp-name','.hp-sub'].map(c=>hero.querySelector(c)).filter(Boolean):[];
    const h1=below.querySelector('h1');
    const grid=below.querySelector('.mod-grid');
    if(grid){
      const head=grid.previousElementSibling;
      if(head&&head.tagName==='H2') head.remove();
      grid.remove();
    }

    /* One slot per painted alcove. A subject missing from the data leaves its
       alcove dimmed and inert; it never moves the others. */
    const inner=[`<div class="wall-card"></div>`];   // what each wall's frame holds; wall 0 = the statue wall
    ORDER.forEach((id,i)=>{
      const m=byId[id], n=i+1;
      let alcoves='',glows='';
      inner[n]='';
      if(!m){inner[n]=`<i class="veil"></i>`;return}
      const locked=isLocked(m.id);
      const qs=qsInModule(m.id);
      const d=qs.filter(q=>isAnswered(q.id)).length;
      const a=accuracy(qs);
      const chs=m.groups.reduce((k,g)=>k+g.chapters.length,0);
      if(locked){
        glows+=`<i class="veil"></i>`;
        alcoves+=`<button class="alcove locked" type="button" data-i="${n}" data-id="${m.id}"
          style="--hex:${m.hex}" aria-disabled="true" aria-label="${esc(m.name)}, coming soon">
          <span class="plaque"><span class="pl-name">${esc(m.name)}</span>
          <span class="pl-count">Coming soon</span></span></button>`;
        inner[n]=glows+alcoves;
        return;
      }
      const pct=qs.length?d/qs.length*100:0;
      const foot=d===0
        ?`<span class="pl-count">Start studying</span>`
        :`<span class="pl-row">${ring(pct,m.hex,38).replace('<svg ','<svg viewBox="0 0 38 38" ')}<span class="pl-meta">
            <span class="pl-acc" style="color:${accColor(a)}">${a===null?'—':a+'%'}</span>
            <span class="pl-count">${d}/${qs.length}<span class="pl-w"> answered</span></span></span></span>`;
      const say=`${m.name}, ${chs} chapters, ${qs.length} question${qs.length===1?'':'s'}`+
        (d?`, ${d} answered${a===null?'':', '+a+'% accuracy'}`:', not started');
      alcoves+=`<button class="alcove" type="button" data-i="${n}" data-id="${m.id}"
        style="--hex:${m.hex}" aria-label="${esc(say)}">
        <span class="plaque"><span class="pl-name">${esc(m.name)}</span>${foot}</span></button>`;
      inner[n]=glows+alcoves;
    });
    /* five walls; each frame is the 3:2 plate box holding that wall's content */
    const wallsHtml=WALLS.map((w,i)=>
      `<div class="wall" data-i="${i}" data-w="${w}"><div class="wall-frame" data-name="${w}">${inner[i]||''}</div></div>`).join('');

    let dust='';
    for(let i=0;i<30;i++){
      dust+=`<i style="--x:${(Math.random()*100).toFixed(1)}%;--y:${(Math.random()*100).toFixed(1)}%;`+
        `--s:${(1+Math.random()*2).toFixed(1)}px;--d:${(14+Math.random()*18).toFixed(1)}s;`+
        `--dl:-${(Math.random()*30).toFixed(1)}s;--dx:${(Math.random()*40-20).toFixed(0)}px;`+
        `--dy:${(-30-Math.random()*50).toFixed(0)}px"></i>`;
    }

    const hall=document.createElement('section');
    hall.className='hall';
    hall.setAttribute('aria-label','Subjects');
    const doorsOn=!reduced()&&libState!=='fail'&&can3d();
    hall.innerHTML=
      `<div class="hall-view">
         <div class="wk-out" aria-hidden="true"></div>
         <div class="wk-text"></div>
         <div class="wk-clip"><div class="hall-push"><div class="hall-stage">
           <div class="hall-prism">${wallsHtml}</div>
           <div class="hall-dust" aria-hidden="true">${dust}</div>
           <div class="hall-fore" aria-hidden="true"></div>
           <div class="hall-greet"></div>
         </div></div></div>
         ${doorsOn?DOORS_HTML:''}
       </div>`;

    const wcard=hall.querySelector('.wall-card');
    if(wcard) heroLines.forEach(el=>wcard.appendChild(el));
    if(hero) hero.remove();

    /* The welcome line and the student's name: real text on the outside painting. */
    const wk=hall.querySelector('.wk-text');
    const who=(typeof me!=='undefined'&&me&&me.name&&me.name!=='Untitled')?me.name:'';
    if(who) wk.insertAdjacentHTML('beforeend',`<p class="wk-name">Welcome, ${esc(who)}</p>`);
    if(h1) wk.appendChild(h1);

    /* The Clepsydra's greeting is unchanged: her existing picture, in the hall. */
    const showClep=!!(CLEP.on&&!CLEP.mini);
    if(showClep){
      const img=document.createElement('img');
      img.className='hall-clep';
      img.src=poseSrc('welcoming');
      img.alt='';
      hall.querySelector('.hall-greet').appendChild(img);
    }

    p.appendChild(hall);
    p.appendChild(below);
    sizeHall(hall);
    placePlain(hall);

    const st={vis:false,gate:true,showClep};   // gate: the door has been passed
    const syncClep=()=>{
      hall.classList.toggle('live',st.vis);
      body().classList.toggle('hall-clep',st.showClep&&st.vis&&st.gate);
    };
    st.sync=syncClep;

    hall.addEventListener('click',e=>{
      const b=e.target.closest('.alcove');
      if(!b||b.getAttribute('aria-disabled')==='true') return;
      if(hall.classList.contains('walk')&&!hall.classList.contains('open')) return;
      choose(hall,b,e.detail===0);
    });

    if('IntersectionObserver' in window){
      hallObs=new IntersectionObserver(es=>{
        st.vis=es[es.length-1].isIntersecting;
        syncClep();
      },{threshold:.35});
      hallObs.observe(hall);
    }else{
      st.vis=true;
      syncClep();
    }

    /* Motion: only when allowed, and only once the libraries and both paintings
       are ready. Anything less leaves the plain stacked version as built above. */
    const landed=returned;
    returned=false;                      // consumed here, whatever path follows
    if(!reduced()){
      const token=++buildToken;
      const go_=()=>{ if(token===buildToken&&hall.isConnected) startWalk(hall,below,st,landed,keepY) };
      if(motionNow()) go_();
      else motionReady().then(ok=>{ if(ok) go_(); else dropDoors(hall) });
    }
  }

  function sizeHall(hall){
    const bar=document.querySelector('.topbar');
    hall.style.setProperty('--hall-top',(bar?bar.offsetHeight:64)+'px');
  }
  addEventListener('resize',()=>{
    const hall=document.querySelector('.hall');
    if(hall){ sizeHall(hall); placePlain(hall) }
  });

  /* ---- the walk-in ---------------------------------------------------- */
  function killWalk(){
    buildToken++;
    clearTimeout(pushTimer);
    pushing=false;
    if(!walk) return;
    const w=walk;
    walk=null;
    try{w.kill()}catch(e){}
  }

  function startWalk(hall,below,st,landed,y0){
    const g=window.gsap, ST=window.ScrollTrigger;
    if(!g||!ST||walk||!can3d()){ dropDoors(hall); return }
    g.registerPlugin(ST);
    const hasDraw=!!window.DrawSVGPlugin;
    if(hasDraw) g.registerPlugin(window.DrawSVGPlugin);
    ST.config({ignoreMobileResize:true});

    const view_=hall.querySelector('.hall-view');
    const out=hall.querySelector('.wk-out');
    const text=hall.querySelector('.wk-text');
    const clip=hall.querySelector('.wk-clip');
    const stage=hall.querySelector('.hall-stage');
    const prism=hall.querySelector('.hall-prism');
    const wallEls=Array.from(hall.querySelectorAll('.wall'));
    /* The bronze doors: two leaves in a box that sits exactly on the painted doorway,
       on top of the hall (which is already behind it). The layer is placed and scaled
       like the outside painting, so it grows with it. buildHall put it in the first
       markup (shut); the walk takes it over. No library, 3 s clock or reduced motion =
       no leaves (dropDoors), doors open. */
    if(!view_.querySelector('.wk-doors')) view_.insertAdjacentHTML('beforeend',DOORS_HTML);
    const doors=view_.querySelector('.wk-doors');
    const dbox=doors.firstElementChild, shade=dbox.querySelector('.wk-shade');
    const leafL=dbox.querySelector('.wk-leaf.l'), leafR=dbox.querySelector('.wk-leaf.r');

    hall.classList.add('walk');
    below.classList.add('lap');
    clip.inert=true;
    st.gate=false;

    const P={p:0};            // walk-in progress, 0..1
    const RG={v:0};           // where the ring stands: 0 = wall 0 faces you .. 4 = wall 4; 0.5 = half-way to wall 1
    const DR={l:0,r:0};       // door swing per leaf, 0 shut .. 1 fully open; written only by the gate
    let gateDone=false;       // until the gate has ended, apply() holds the walk-in and ring at 0
    const SWING=100;          // degrees of the open leaf; past 90 it is edge-on and hidden
    let shown=true;           // are the leaves currently displayed
    const G={};               // geometry, rebuilt on every refresh
    const clamp=(v,lo,hi)=>Math.min(hi,Math.max(lo,v));

    const setOut=v=>g.set([out,doors],{scale:v});
    const setStage=v=>g.set(stage,{scale:v});
    /* The ring. Eye at the middle of the pentagon: each wall carries its own perspective(r),
       is pushed forward by the apothem r, turned (i-R)*72 and pushed back r (no shared
       preserve-3d prism: its depth sort split the face at the view edge). Only
       the wall in view and its neighbours stand on the ring (|i-R| <= 1); the others are
       parked flat, off to the left, so the park never moves. */
    function placeRing(R){
      const r=G.r, wf=G.wf;
      for(let i=0;i<wallEls.length;i++){
        wallEls[i].style.transform=Math.abs(i-R)<=1.0001
          ?'perspective('+r.toFixed(2)+'px) translateZ('+r.toFixed(2)+'px) rotateY('+((i-R)*STEP).toFixed(3)+'deg) translateZ('+(-r).toFixed(2)+'px)'
          :'translate3d('+(-3*wf).toFixed(1)+'px,0,0)';
      }
      hall.dataset.ring=R.toFixed(3);
    }
    const setTx=g.quickSetter(text,'x','px'), setTy=g.quickSetter(text,'y','px');
    /* Geometry. Runs on build and again on every ScrollTrigger refresh (resize,
       orientation change) — the only place layout is read. */
    function layout(){
      const bar=document.querySelector('.topbar');
      const W=view_.clientWidth, H=view_.clientHeight;
      const k=Math.max(W/PAINT_W,H/PAINT_H), Wo=PAINT_W*k, Ho=PAINT_H*k;
      const ox=clamp(W/2-DOOR.cx*Wo,W-Wo,0), oy=clamp(H/2-DOOR.cy*Ho,H-Ho,0);
      const Px=ox+DOOR.cx*Wo, Py=oy+DOOR.cy*Ho;
      const m=DOOR.inset*Wo;
      const d={l:ox+DOOR.l*Wo+m, r:ox+(DOOR.l+DOOR.w)*Wo-m,
               t:oy+DOOR.t*Ho+m, b:oy+(DOOR.t+DOOR.h)*Ho,
               arch:(DOOR.arch-DOOR.t)*Ho-m};
      /* outside scale: the smallest at which the opening covers the box,
         both sides and the bottom first, then both top corners of the arch */
      let S=Math.max(Px/(Px-d.l),(W-Px)/(d.r-Px),(H-Py)/(d.b-Py))*1.03;
      const inside=(x,yy,s)=>{
        const L=Px+(d.l-Px)*s, R=Px+(d.r-Px)*s;
        if(x<L||x>R) return false;
        const ya=Py+(d.t+d.arch-Py)*s;
        if(yy>=ya) return true;
        const rx=(R-L)/2, ry=d.arch*s, dx=(x-(L+R)/2)/rx, dy=(yy-ya)/ry;
        return dx*dx+dy*dy<=1;
      };
      for(let i=0;i<60&&!(inside(0,0,S)&&inside(W,0,S));i++) S*=1.02;
      /* the hall's own scale at the start: the smallest that still covers the doorway */
      const R=Math.min(1,Math.max((Px-d.l)/Px,(d.r-Px)/(W-Px),(Py-d.t)/Py,(d.b-Py)/(H-Py))*1.04);
      /* the ring: a face is Wf wide (it covers the view, plate 3:2), the apothem of a
         regular pentagon with that side is r, and the eye sits r back from the plate */
      const wf=Math.max(W,1.5*H)+10, r=wf/(2*Math.tan(Math.PI/5));
      stage.style.setProperty('--wf',wf.toFixed(2)+'px');
      stage.style.setProperty('--ring-r',r.toFixed(2)+'px');
      const tr=text.getBoundingClientRect?{x:text.offsetLeft+text.offsetWidth/2,y:text.offsetTop+text.offsetHeight/2}:{x:0,y:0};
      Object.assign(G,{W,H,Px,Py,d,S,R,wf,r,tr,top:bar?bar.offsetHeight:64});
      out.style.left=ox+'px'; out.style.top=oy+'px';
      out.style.width=Wo+'px'; out.style.height=Ho+'px';
      g.set([out,doors],{transformOrigin:(Px-ox)+'px '+(Py-oy)+'px'});
      /* the door box: the painted doorway, a half-inset in from its edge (the hall's own
         clip is one full inset in, so the doors always cover it), arch clipped round */
      fitDoors(hall,ox,oy,Wo,Ho);
      g.set(stage,{transformOrigin:Px+'px '+Py+'px'});
    }

    function clipFor(so){
      const {W,H,Px,Py,d}=G;
      const L=Px+(d.l-Px)*so, Rr=Px+(d.r-Px)*so, T=Py+(d.t-Py)*so, B=Py+(d.b-Py)*so;
      const rx=(Rr-L)/2, ry=d.arch*so;
      return 'inset('+T.toFixed(1)+'px '+(W-Rr).toFixed(1)+'px '+(H-B).toFixed(1)+'px '+L.toFixed(1)+'px round '+
        rx.toFixed(1)+'px '+rx.toFixed(1)+'px 0 0 / '+ry.toFixed(1)+'px '+ry.toFixed(1)+'px 0 0)';
    }

    /* One scrubbed state -> every moving thing. No layout reads in here. The
       last part of the growth is the quick part of the scroll (u = p^1.5), so the
       enlarged outside painting is on screen for as little time as possible. */
    function apply(){
      const vis=DR.l<1||DR.r<1;
      if(vis!==shown){shown=vis;doors.style.visibility=vis?'':'hidden'}
      if(vis){
        leafL.style.transform='rotateY('+(DR.l*SWING).toFixed(2)+'deg)';
        leafR.style.transform='rotateY('+(-DR.r*SWING).toFixed(2)+'deg)';
        shade.style.transform='scaleY('+(1-(DR.l+DR.r)/2).toFixed(3)+')';   /* the interior glaze shrinks to the threshold as the leaves open */
      }
      const pp=gateDone?P.p:0;      // the gate holds the scene at the door; the scrub catches up when it ends
      const u=Math.pow(pp,1.5);
      const so=Math.pow(G.S,u);
      setOut(so);
      setStage(Math.min(1,G.R*so));
      placeRing(gateDone?RG.v:0);
      clip.style.clipPath=u>=1?'none':clipFor(so);
      const f=so-1;
      setTx((G.tr.x-G.Px)*f); setTy((G.tr.y-G.Py)*f);
      const open=pp>=.985;
      if(open!==st.gate){
        st.gate=open;
        hall.classList.toggle('open',open);
        clip.inert=!open;
        st.sync();
      }
    }

    layout();

    /* The scrubbed timeline: 2 units of walk-in, then four turns of the ring (.6 turn + .3
       hold each). Labels w0..w4 mark the walls: w0 as the walk-in ends, wk as turn k ends.
       Eased "none". Each plaque rises and its ring draws as its wall arrives. The doors are
       not in it: the gate (below) opens them on its own clock. */
    const TW=2, TURN=.6, HOLD=.3;
    const tl=g.timeline({paused:true,defaults:{ease:'none'}});
    tl.to(P,{p:1,duration:2,onUpdate:apply},0);
    tl.addLabel('w0',TW);
    for(let k=1;k<=4;k++){
      const t0=TW+(k-1)*(TURN+HOLD);
      tl.to(RG,{v:k,duration:TURN,onUpdate:apply},t0);
      tl.addLabel('w'+k,t0+TURN);
      const pl=wallEls[k].querySelector('.plaque');
      if(pl) tl.fromTo(pl,{yPercent:130},{yPercent:0,duration:.3},t0+.2);
      const c=wallEls[k].querySelector('.plaque .ring svg circle:nth-of-type(2)');
      if(c){
        const len=parseFloat(c.getAttribute('stroke-dasharray'))||0;
        const off=parseFloat(c.getAttribute('stroke-dashoffset'))||0;
        const pct=len?Math.max(0,Math.min(100,(1-off/len)*100)):0;
        if(hasDraw) tl.fromTo(c,{drawSVG:'0% 0%'},{drawSVG:'0% '+pct.toFixed(2)+'%',duration:.35},t0+.25);
        else tl.fromTo(c,{attr:{'stroke-dashoffset':len}},{attr:{'stroke-dashoffset':off},duration:.35},t0+.25);
      }
    }
    /* snap: free during the walk-in, the nearest wall after it */
    const snapAt=v=>{
      const dur=tl.duration(), p0=tl.labels.w0/dur;
      if(v<p0-.0005) return v;
      /* nearest by ring angle, not by timeline time: the hold follows each wall but the first,
         so the halfway point of a turn (R = k+.5) is the dividing line */
      const t=v*dur;
      let k=0;
      while(k<4 && t>tl.labels['w'+k]+(k?HOLD:0)+TURN/2) k++;
      return tl.labels['w'+k]/dur;
    };

    const pin=ST.create({
      trigger:hall,
      start:()=>'top '+G.top+'px',
      end:()=>'+='+Math.round(G.H*tl.duration()),
      pin:true,pinSpacing:true,scrub:.8,anticipatePin:1,animation:tl,
      snap:{snapTo:snapAt,inertia:false,directional:false,duration:{min:.2,max:.7},delay:.12,ease:'power1.inOut'},
      onToggle:self=>hall.classList.toggle('pinned',self.isActive)
    });

    /* Release: while the rest of home laps up, the hall drifts down inside its box
       by a quarter of the distance — it moves slower than the content. */
    const depthTween=g.fromTo(view_,{y:0},{y:()=>G.H*.25,ease:'none'});
    const depth=ST.create({
      trigger:hall,
      start:()=>pin.end,
      end:()=>pin.end+G.H,
      scrub:true,animation:depthTween,invalidateOnRefresh:true
    });

    /* The gate: a paused clock of its own (~2.4 s, never scrubbed, never locks scroll). The
       ruined doors strain, stall, one leaf drags, then both swing. It starts on the first
       input or 0.8 s after the walk is ready; any input while it plays runs it five times
       faster. Until it ends apply() holds the scene at the door; then the scrub catches up
       to wherever the page is scrolled. Back from a subject, a scrolled page, or a gate
       already seen in this page life: doors set open, no gate. */
    const gate=g.timeline({paused:true,id:'gate',defaults:{ease:'none'},onComplete:endGate});
    const fx=doors.querySelector('.wk-fx');
    const dd=(t,o)=>gate.to(DR,Object.assign({onUpdate:apply},o),t);
    // 1. strain 0-.5: the leaves rock about 1.5 deg twice; plate and doors jitter; grit falls
    dd(0,{l:.015,r:.013,duration:.125,ease:'sine.inOut'}); dd(.125,{l:.004,r:.006,duration:.125,ease:'sine.inOut'});
    dd(.25,{l:.016,r:.015,duration:.125,ease:'sine.inOut'}); dd(.375,{l:.01,r:.008,duration:.125,ease:'sine.inOut'});
    [[1.5,-1],[-1,1.5],[2,.5],[-1.5,-1],[1,-.5],[-2,1],[1,1.5],[0,0]].forEach((v,i)=>gate.to([out,doors],{x:v[0],y:v[1],duration:.0625},i*.0625));
    if(fx){
      fx.querySelectorAll('.g').forEach((s,i)=>{
        const t=i*.03+((i*7)%3)*.015;   // the grit starts within the first .3 s, so it can be seen at once
        gate.fromTo(s,{yPercent:0},{yPercent:4000+(i%4)*600,duration:.55+(i%3)*.08,ease:'power1.in'},t);
        gate.to(s,{opacity:.9,duration:.06},t);
        gate.to(s,{opacity:0,duration:.18},t+.4);
      });
      // dust: the first puff at the threshold as the leaves slip shut, the second as the left one drags
      const puff=(p,t,s1,fade)=>{
        gate.fromTo(p,{scale:.35},{scale:s1,duration:.8,ease:'power2.out'},t);
        gate.to(p,{opacity:.8,duration:.1},t);
        gate.to(p,{opacity:0,duration:fade},t+.2);
      };
      puff(fx.querySelector('.p.a'),.55,1.5,.6); puff(fx.querySelector('.p.b'),.95,1.8,.7);
    }
    // 2. stall .5-.8: the leaves slip back shut
    dd(.5,{l:0,r:0,duration:.12,ease:'power3.in'});
    // 3. .8-1.6: the left leaf drags to 30 %, the right stays shut
    dd(.8,{l:.3,duration:.8,ease:'power2.inOut'});
    // 4. 1.6-2.4: both swing, the right 0.25 s late
    dd(1.6,{l:1,duration:.8,ease:'power2.inOut'}); dd(1.85,{r:1,duration:.55,ease:'power2.inOut'});

    let started=false, gateTimer=0;
    const inputs=['wheel','touchstart','keydown','pointerdown'];
    const unlisten=()=>{ inputs.forEach(n=>removeEventListener(n,onInput,true)); clearTimeout(gateTimer) };
    function onInput(){ if(!started) startGate(); else if(!gateDone) gate.timeScale(5) }
    function startGate(){ if(started) return; started=true; gateSeen=true; clearTimeout(gateTimer); gate.play() }
    function endGate(){ gateDone=true; unlisten(); apply() }

    const relayout=()=>{layout();apply()};
    ST.addEventListener('refreshInit',relayout);
    if(landed||y0>0||(window.scrollY||0)>2||gateSeen){
      DR.l=DR.r=1; gateDone=true; started=true;
    }else{
      inputs.forEach(n=>addEventListener(n,onInput,{capture:true,passive:true}));
    }
    apply();
    ST.refresh();
    if(!gateDone) gateTimer=setTimeout(()=>{ if(!started) startGate() },800);

    const jumpTo=yy=>{
      window.scrollTo(0,yy);
      ST.update();
      if(pin.scrubTween) pin.scrubTween.progress(1);
      apply();
    };
    /* scroll position of a wall's label */
    const posOf=i=>pin.start+(tl.labels['w'+i]/tl.duration())*(pin.end-pin.start);
    /* Back on the wall the student left; the same place on an in-place re-render. */
    if(landed||y0>0){
      const run=()=>{ if(walk&&walk.hall===hall) jumpTo(landed?posOf(lastWall):y0) };
      Promise.resolve().then(run);
    }
    /* Tab into a subject button turns the room to its wall. The browser also scrolls the
       overflow:hidden boxes to show the button; put them back. */
    const onFocus=e=>{
      const b=e.target&&e.target.closest?e.target.closest('.alcove'):null;
      const w=b&&b.closest('.wall');
      if(!w||!walk||walk.hall!==hall) return;
      const i=Number(w.dataset.i);
      const turn=()=>{ if(Math.round(RG.v)!==i) window.scrollTo(0,posOf(i)) };
      turn();
      /* the browser scrolls a focused box into view after this handler: ask again once it has */
      requestAnimationFrame(()=>{ turn(); setTimeout(turn,60) });
    };
    hall.addEventListener('focusin',onFocus);

    walk={
      hall,
      kill(){
        ST.removeEventListener('refreshInit',relayout);
        hall.removeEventListener('focusin',onFocus);
        try{depth.kill(true)}catch(e){}
        try{pin.kill(true)}catch(e){}
        unlisten();
        try{gate.kill()}catch(e){}
        try{tl.kill();depthTween.kill()}catch(e){}
        doors.remove();
        hall.classList.remove('walk','pinned','open');
        below.classList.remove('lap');
        clip.inert=false;
        clip.style.clipPath='';
        st.gate=true;
        st.sync();
      }
    };
  }

  /* The origin is a share of the hall, so it survives the stage being scaled. */
  function setOrigin(hall,b){
    const push=hall.querySelector('.hall-push');
    const hr=push.getBoundingClientRect(), br=b.getBoundingClientRect();
    if(!hr.width||!hr.height) return;
    hall.style.setProperty('--ox',((br.left+br.width/2-hr.left)/hr.width*100).toFixed(1)+'%');
    hall.style.setProperty('--oy',((br.top+br.height/2-hr.top)/hr.height*100).toFixed(1)+'%');
  }

  function choose(hall,b,kbd){
    if(pushing) return;
    const id=b.dataset.id;
    const wl=b.closest('.wall');
    if(wl) lastWall=Number(wl.dataset.i)||0;
    if(kbd||reduced()){go({name:'module',id});return}
    pushing=true;
    setOrigin(hall,b);
    b.classList.add('pick');
    hall.classList.add('pushing');
    pushTimer=setTimeout(()=>{pushing=false;go({name:'module',id})},450);
  }
})();
