/* room.js - the lighthouse room: the Eyes subject as a painted room with four things to pick
   (redesign trial, slice 3, job 2).

   WHAT IT DOES. vModule (render.js) asks roomStageHTML(m) first. For the Eyes subject (the only
   room so far) it returns the room: a painted plate and four real <button> hot-spots, each with an
   always-visible text label - shelf (Lessons), desk (Practise), sand-glass (Timed exam), chest
   (Weak spots). Picking one opens ONE sheet, a plain scrolling ledger, that grows out of the object
   by clip-path. The other three subjects get '' back and keep today's module view untouched.

   WHERE THE LEDGER COMES FROM. Nothing is counted here. Every number comes from the functions the
   old module view, theory index, mock, weak, review and flagged views already call: qsInModule,
   qsIn, accuracy, accColor, isAnswered, theoryChapters, weakChapters, dueNow, deckAll, bankOn,
   examMins, hasSavedMock. Every action is an existing onclick function: startChapter, startQuiz,
   go, toggleBank, clearBanks, runMock (through roomMock below), offerMockResume.

   HOW IT HOOKS IN. Like city.js it touches no existing script; it wraps two functions by name.
     syncFilm     - runs first on every render, before the page is replaced: remembers an open
                    sheet (a source-filter chip re-renders the page and must not close it) and, when
                    the student comes from the city, keeps a copy of the city for the iris.
     inkMarkChips - runs right after the view function: the new room is mounted here.
   The iris: only when the click came from the lighthouse on the city and motion is not reduced.
   The room view renders at once; only a clip-path circle (the room) grows over the kept copy of the
   city, 600 ms. Back goes to the city plainly. In-memory state only; nothing here touches storage.

   Names: .rm-* is this file's; .sheet/.row/.rule/.act are the shared parts in css/ui.css.
   (.room already belongs to rooms.js, the old background layer.) */
(function(){
  'use strict';

  const ROOMS={ ophtho:{ plate:'assets/city/room-ophtho-dark.jpg' } };

  /* Percent boxes on the painting [left, top, right, bottom]; DOM order is the Tab order.
     la = where the label sits in its box (t top, b bottom). Later boxes paint over earlier ones, so
     where two overlap the nearer object wins (the desk over the shelf's foot, the chest over the
     sand-glass's plinth). */
  const SPOTS=[
    {key:'shelf', label:'Lessons',    box:[25,12,42,58], la:'t'},
    {key:'desk',  label:'Practise',   box:[1,47,36,88],  la:'t'},   // top: the stool is the box's lower right
    {key:'glass', label:'Timed exam', box:[65,21,75,61], la:'t'},
    {key:'chest', label:'Weak spots', box:[74,53,99,84], la:'b'}
  ];
  const IRIS_MS=600, SHEET_MS=380;

  const reduced=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
  const pct=n=>(Math.round(n*100)/100)+'%';
  const ids=list=>JSON.stringify(list.map(q=>q.id)).replace(/"/g,'&quot;');
  const plural=(n,w)=>n+' '+w+(n===1?'':'s');

  /* ---- numbers the labels and sheets share ------------------------------------------------- */
  const flaggedOf=m=>QUESTIONS.filter(q=>q.module===m.id&&S.flags[q.id]);
  const deckOf=m=>deckAll().filter(q=>q.module===m.id);
  const dueOf=m=>dueNow().filter(q=>q.module===m.id);
  const poolOf=m=>QUESTIONS.filter(q=>q.module===m.id&&mockable(q)&&bankOn(q));
  const lessonsOf=m=>THEORY_LOCKED?[]:theoryChapters(m.id);

  function labelMeta(m,key){
    if(key==='shelf'){
      if(THEORY_LOCKED) return 'Coming soon';
      const n=lessonsOf(m).length;
      return n?plural(n,'lecture'):'No notes yet';
    }
    if(key==='desk'){
      const qs=qsInModule(m.id);
      if(!qs.length) return 'No questions yet';
      const d=qs.filter(q=>isAnswered(q.id)).length;
      return d===0?'Start studying':d+'/'+qs.length+' answered';
    }
    if(key==='glass'){
      const n=poolOf(m).length;
      return n?plural(n,'question')+' in the pool':'No questions yet';
    }
    return dueOf(m).length+' due · '+flaggedOf(m).length+' flagged';
  }

  /* ---- markup (called by vModule) ---------------------------------------------------------- */
  window.roomStageHTML=function(m){
    const cfg=m&&ROOMS[m.id];
    if(!cfg) return '';
    let spots='', menu='';
    SPOTS.forEach(sp=>{
      const b=sp.box, meta=esc(labelMeta(m,sp.key));
      const style='--l:'+pct(b[0])+';--t:'+pct(b[1])+';--w:'+pct(b[2]-b[0])+';--h:'+pct(b[3]-b[1]);
      /* aria-label: on phones the printed label is hidden, the spot must still be named */
      spots+=`<button type="button" class="rm-spot" data-key="${sp.key}" data-la="${sp.la}" style="${style}" `+
        `aria-label="${sp.label}, ${meta}" aria-haspopup="dialog" aria-expanded="false" onclick="roomOpen('${sp.key}',this)">`+
        `<span class="rm-tag"><span class="rm-name">${sp.label}</span>`+
        `<span class="rm-meta">${meta}</span></span></button>`;
      /* the same four things again as a plain ledger; css shows it in upright windows only */
      menu+=`<div class="row"><span class="row-title">${sp.label}</span><span class="row-count">${meta}</span>`+
        `<button type="button" class="act" data-key="${sp.key}" aria-label="${sp.label}, ${meta}" aria-haspopup="dialog" `+
        `aria-expanded="false" onclick="roomOpen('${sp.key}',this)">Open</button></div>`;
    });
    return `<section class="rm" data-mod="${m.id}" aria-label="${esc(m.name)} room"><div class="rm-in">`+
      `<div class="rm-bar"><button type="button" class="rm-back" onclick="go({name:'home'})">&larr; City</button>`+
      `<h1 class="rm-title">${esc(m.name)}</h1></div>`+
      `<div class="rm-box"><img class="rm-plate" src="${cfg.plate}" alt="" draggable="false">`+
      `<div class="rm-veil" aria-hidden="true"></div><div class="rm-spots">${spots}</div></div>`+
      `<div class="rm-menu" role="group" aria-label="${esc(m.name)}: pick one">${menu}</div>`+
      `</div></section>`;
  };

  /* ---- the four ledgers --------------------------------------------------------------------- */
  const rowHTML=(title,count,actHTML,off)=>
    `<div class="row${off?' is-off':''}"><span class="row-title">${title}</span>`+
    `<span class="row-count">${count}</span>${actHTML}</div>`;
  const act=(label,onclick,disabled,keep)=>
    `<button type="button" class="act"${disabled?' disabled':''}${keep?` data-keep="${keep}"`:''}${onclick?` onclick="${onclick}"`:''}>${label}</button>`;
  const empty=txt=>`<p class="sheet-note">${txt}</p>`;
  const group=t=>`<h3 class="row-group">${t}</h3><span class="rule draw"></span>`;

  const SHEETS={
    shelf:{title:'Lessons',build(m){
      const chs=lessonsOf(m);
      if(THEORY_LOCKED) return {sub:'Lecture notes are not open yet.',body:empty('Nothing to read here yet.')};
      if(!chs.length) return {sub:'No lecture notes written for this subject.',body:empty('No lecture notes are written for '+esc(m.name)+' yet.')};
      let h='';
      chs.forEach(([cid,cname])=>{
        const t=THEORY[cid];
        const secs=t.sections||[];
        const nq=secs.reduce((n,s)=>n+(s.qs||[]).length,0);
        const must=secs.filter(s=>s.w==='must').length;
        h+=rowHTML(esc(cname),`${secs.length} sections · ${must} must-know · ${nq} linked Qs`,
          act('Read',`go({name:'theory',mod:'${m.id}',ch:'${cid}'})`));
      });
      return {sub:plural(chs.length,'lecture')+' with notes. Each opens as one document.',body:h};
    }},

    desk:{title:'Practise',build(m){
      const qs=qsInModule(m.id), a=accuracy(qs);
      const done=qs.filter(q=>isAnswered(q.id)).length;
      let sub=`${plural(qs.length,'question')} · ${done} answered`+
        (a!==null?` · <b style="color:${accColor(a)}">${a}% accuracy</b>`:'');
      let h='';
      /* source filter: only banks this subject really has questions from (as the old module view) */
      const allQ=allQsInModule(m.id);
      const present=BANKS.filter(b=>allQ.some(q=>banksOf(q).indexOf(b.id)>=0));
      if(present.length>1){
        const sel=S.banks[m.id]||[], filtering=sel.length>0;
        h+=`<div class="bankbar"><span class="bank-lbl">Source</span>`+present.map(b=>{
          const on=!filtering||sel.indexOf(b.id)>=0;
          const n=allQ.filter(q=>banksOf(q).indexOf(b.id)>=0).length;
          return `<button type="button" class="bankchip ${on?'on':''}" style="--bk:${b.hex}" data-keep="bank-${b.id}" `+
            `onclick="toggleBank('${m.id}','${b.id}')" aria-pressed="${on}"><span class="banklabel">${b.name}</span><span class="bankn">${n}</span></button>`;
        }).join('')+(filtering?`<button type="button" class="bankchip reset" data-keep="bank-reset" onclick="clearBanks('${m.id}')"><span class="banklabel">Show all</span></button>`:'')+`</div>`;
      }
      if(!qs.length){
        return {sub,body:h+empty('No questions in this subject with the current sources.')};
      }
      const un=qs.filter(q=>!isAnswered(q.id));
      h+=`<div class="sheet-bar">`+
        act('Practise all '+qs.length,`startQuiz(${ids(qs)},'${m.name} — all')`)+
        (un.length?act('Unanswered '+un.length,`startQuiz(${ids(un)},'${m.name} — new')`):'')+`</div>`;
      m.groups.forEach(g=>{
        h+=group(esc(g.name));
        g.chapters.forEach(([cid,cname])=>{
          const cq=qsIn(cid), ca=accuracy(cq);
          const cd=cq.filter(q=>isAnswered(q.id)).length;
          const resume=(S.resumeByChapter||{})[cid];
          const verb=resume?(resume.finished?'Restart':'Continue'):'Practise';
          h+=rowHTML(esc(cname),
            (cq.length?`${cd}/${cq.length}`:'no questions yet')+
              (ca!==null?` · <span class="row-acc" style="color:${accColor(ca)}">${ca}%</span>`:''),
            act(cq.length?verb:'Empty',`startChapter('${cid}')`,!cq.length),!cq.length);
        });
      });
      return {sub,body:h};
    }},

    glass:{title:'Timed exam',build(m){
      const pool=poolOf(m);
      const sub='Random order, a clock you can see, no explanations until you hand the paper in. Anything left blank counts as wrong.';
      let h='';
      if(hasSavedMock()) h+=rowHTML('Saved mock exam','a paper you paused',act('Resume','offerMockResume()'));
      if(!pool.length){
        return {sub,body:h+empty('No questions in this subject can go in a paper with the current sources.')};
      }
      [10,20,40].forEach(n=>{
        const ok=pool.length>=n;
        h+=rowHTML(plural(n,'question'),`${examMins(n)} minutes on the clock${ok?'':' · pool too small'}`,
          act('Start',`roomMock('${m.id}',${n})`,!ok),!ok);
      });
      if(pool.length<40) h+=rowHTML('All '+pool.length,`${examMins(pool.length)} minutes on the clock`,
        act('Start',`roomMock('${m.id}',${pool.length})`));
      h+=group('Several subjects')+rowHTML('Mix subjects in one paper','',act('Open',`go({name:'mock'})`));
      return {sub,body:h};
    }},

    chest:{title:'Weak spots',build(m){
      const all=weakChapters().filter(c=>c.mod.id===m.id);
      const ranked=all.filter(c=>c.done>=WEAK_MIN), early=all.filter(c=>c.done<WEAK_MIN);
      const deck=deckOf(m), due=dueOf(m), fl=flaggedOf(m);
      let h=group('Review deck');
      if(!deck.length){
        h+=empty('Deck is empty. Nothing wrong, nothing guessed, nothing unsure.');
      }else{
        h+=rowHTML(due.length?plural(due.length,'question')+' due':'Nothing due',
          due.length?'come back today':'check again tomorrow',
          due.length?act('Start',`startQuiz(${ids(due)},'${m.name} — due')`):'',!due.length);
        h+=rowHTML('Whole deck',plural(deck.length,'question'),act('Practise',`startQuiz(${ids(deck)},'${m.name} — review')`));
      }
      h+=group('Flagged');
      h+=fl.length?rowHTML('Flagged by you',plural(fl.length,'question'),act('Practise',`startQuiz(${ids(fl)},'${m.name} — flagged')`))
                  :empty('No flags yet. Hit the flag button on any question to park it here.');
      h+=group('Weakest chapters');
      if(!all.length){
        h+=empty('Nothing to rank yet. Answer a few questions and this will show where to spend your time.');
      }else{
        const worst=ranked.slice(0,5);
        const drill=[...new Set(worst.reduce((a,c)=>a.concat(c.wrong),[]))];
        if(drill.length) h+=rowHTML(`The ${drill.length} you got wrong in your ${worst.length===1?'weakest chapter':worst.length+' weakest chapters'}`,'',
          act('Drill',`startQuiz(${JSON.stringify(drill).replace(/"/g,'&quot;')},'Weakest chapters — what you got wrong')`));
        ranked.forEach(c=>{
          h+=rowHTML(esc(c.name),`${c.done} of ${c.total} answered${c.wrong.length?' · '+c.wrong.length+' wrong':''} · <span class="row-acc" style="color:${accColor(c.acc)}">${c.acc}%</span>`,
            act('Practise',`startChapter('${c.cid}')`));
        });
        if(early.length){
          h+=group('Too early to tell');
          early.forEach(c=>{
            h+=rowHTML(esc(c.name),`${c.done} of ${c.total} answered`,act('Practise',`startChapter('${c.cid}')`));
          });
        }
      }
      return {sub:`${due.length} due · ${fl.length} flagged · ${plural(ranked.length,'chapter')} ranked`,body:h};
    }}
  };

  /* A paper for this subject alone. runMock reads the shared mockMods choice, so it is set for the
     one call and put back: the Mock exam page keeps whatever the student had picked there. */
  window.roomMock=function(id,n){
    const keep=Object.assign({},mockMods);
    activeModules().forEach(m=>{mockMods[m.id]=(m.id===id)});
    try{ runMock(n) }
    finally{
      Object.keys(mockMods).forEach(k=>{delete mockMods[k]});
      Object.assign(mockMods,keep);
    }
  };

  /* ---- state, all in memory ------------------------------------------------------------------ */
  let live=null;        // the current mount: {rm, cleanup()}
  let openKey=null;     // key of the sheet that is open, or null
  let opener=null;      // the object button that opened it (focus goes back there)
  let sheetEl=null, scrimEl=null;
  let ghost=null, irisFrom=null;   // set by the syncFilm wrapper, used once by mount()
  let reopen=null;      // a sheet that was open when the page re-rendered
  let lastTap=null;     // where the lighthouse was tapped on the city
  let sheetTimer=0;

  document.addEventListener('click',e=>{
    const sp=e.target&&e.target.closest&&e.target.closest('.city-spot');
    if(sp&&!sp.disabled){
      const r=sp.getBoundingClientRect();
      lastTap={mod:sp.dataset.mod,x:r.left+r.width/2,y:r.top+r.height/2,t:Date.now()};
    }
  },true);

  /* ---- keep each label inside the visible window ---------------------------------------------- */
  function fitLabels(rm){
    const cr=rm.getBoundingClientRect();
    const rail=document.getElementById('rail');
    const strip=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--strip-w'))||0;
    const rr=rail&&rail.getBoundingClientRect().right>0?strip:0;
    const vl=Math.max(cr.left,rr,0)+8, vr=Math.min(cr.right,window.innerWidth)-8;
    const vt=Math.max(cr.top,0)+8, vb=Math.min(cr.bottom,window.innerHeight)-8;
    rm.querySelectorAll('.rm-spot').forEach(sp=>{
      const tag=sp.querySelector('.rm-tag');
      tag.style.setProperty('--sx','0px'); tag.style.setProperty('--sy','0px');
      const t=tag.getBoundingClientRect();
      let dx=0,dy=0;
      if(t.left<vl) dx=vl-t.left; else if(t.right>vr) dx=vr-t.right;
      if(t.top<vt) dy=vt-t.top; else if(t.bottom>vb) dy=vb-t.bottom;
      tag.style.setProperty('--sx',Math.round(dx)+'px');
      tag.style.setProperty('--sy',Math.round(dy)+'px');
      /* the focus ring is drawn by css inside the box, pulled in wherever the box runs past the
         window or under the side strip, so it is never cut off */
      const s=sp.getBoundingClientRect(), m=4;
      sp.style.setProperty('--rg-l',Math.round(Math.max(m,vl-8+m-s.left))+'px');
      sp.style.setProperty('--rg-r',Math.round(Math.max(m,s.right-(vr+8-m)))+'px');
      sp.style.setProperty('--rg-t',Math.round(Math.max(m,vt-8+m-s.top))+'px');
      sp.style.setProperty('--rg-b',Math.round(Math.max(m,s.bottom-(vb+8-m)))+'px');
    });
  }

  /* ---- the sheet ----------------------------------------------------------------------------- */
  function closeSheet(back){
    clearTimeout(sheetTimer);
    const rm=live&&live.rm;
    if(sheetEl){ sheetEl.remove(); sheetEl=null }
    if(scrimEl){ scrimEl.remove(); scrimEl=null }
    const btn=opener; openKey=null; opener=null;
    if(rm){
      const inn=rm.querySelector('.rm-in');
      if(inn) inn.inert=false;
      rm.querySelectorAll('[aria-expanded="true"]').forEach(b=>b.setAttribute('aria-expanded','false'));
    }
    if(back&&btn&&btn.isConnected) btn.focus({preventScroll:true});
  }
  window.roomClose=function(){ closeSheet(true) };

  /* A stable name for the thing that had focus, so it can be found again after a re-render. */
  function keyOf(el,sheet){
    if(!el||!sheet) return '';
    if(el===sheet) return 'sheet';
    if(!sheet.contains(el)) return '';
    if(el.dataset&&el.dataset.keep) return 'keep:'+el.dataset.keep;
    if(el.classList.contains('sheet-close')) return 'close';
    const oc=el.getAttribute('onclick');
    return oc?'oc:'+oc:'';
  }
  function findByKey(sheet,k){
    if(!k||k==='sheet') return null;
    if(k==='close') return sheet.querySelector('.sheet-close');
    return [].find.call(sheet.querySelectorAll('button'),b=>keyOf(b,sheet)===k)||null;
  }

  /* keepKey: key from keyOf() of the focused thing; scroll: the sheet body's scrollTop */
  function openSheet(key,btn,animate,keepKey,scroll){
    const rm=live&&live.rm, def=SHEETS[key];
    if(!rm||!def) return;
    const m=moduleOf(rm.dataset.mod);
    if(!m) return;
    closeSheet(false);
    const res=def.build(m);
    scrimEl=document.createElement('div');
    scrimEl.className='rm-scrim';
    scrimEl.addEventListener('click',()=>closeSheet(true));
    sheetEl=document.createElement('section');
    sheetEl.className='sheet rm-sheet';
    sheetEl.setAttribute('role','dialog'); sheetEl.setAttribute('aria-modal','true');
    sheetEl.setAttribute('aria-labelledby','rmSheetT'); sheetEl.tabIndex=-1;
    sheetEl.dataset.key=key;
    sheetEl.innerHTML=`<div class="sheet-head"><div><h2 class="sheet-title" id="rmSheetT">${def.title}</h2>`+
      `<p class="sheet-sub">${res.sub}</p></div>`+
      `<button type="button" class="sheet-close" onclick="roomClose()" aria-label="Close ${def.title}">Close</button></div>`+
      `<div class="sheet-body">${res.body}</div>`;
    rm.appendChild(scrimEl); rm.appendChild(sheetEl);
    openKey=key; opener=btn;
    btn.setAttribute('aria-expanded','true');
    rm.querySelector('.rm-in').inert=true;   // Tab stays in the sheet
    /* grow from the object: a circle that starts at the object's centre, held inside the sheet */
    if(animate&&!reduced()){
      const sr=sheetEl.getBoundingClientRect(), br=btn.getBoundingClientRect();
      const cx=Math.min(Math.max(br.left+br.width/2-sr.left,0),sr.width);
      const cy=Math.min(Math.max(br.top+br.height/2-sr.top,0),sr.height);
      const R=Math.ceil(Math.hypot(Math.max(cx,sr.width-cx),Math.max(cy,sr.height-cy)))+4;
      sheetEl.style.clipPath=`circle(0px at ${cx}px ${cy}px)`;
      scrimEl.style.opacity='0';
      sheetEl.getBoundingClientRect();
      sheetEl.style.transition=`clip-path ${SHEET_MS}ms cubic-bezier(.3,.1,.2,1)`;
      scrimEl.style.transition=`opacity ${SHEET_MS}ms ease-out`;
      sheetEl.style.clipPath=`circle(${R}px at ${cx}px ${cy}px)`;
      scrimEl.style.opacity='1';
      const el=sheetEl;
      sheetTimer=setTimeout(()=>{ if(sheetEl===el){ el.style.transition=''; el.style.clipPath='' } },SHEET_MS+80);
    }
    const body=sheetEl.querySelector('.sheet-body');
    if(scroll&&body) body.scrollTop=scroll;
    const keep=findByKey(sheetEl,keepKey);
    (keep||sheetEl).focus({preventScroll:true});
    if(scroll&&body) body.scrollTop=scroll;
  }
  window.roomOpen=function(key,btn){
    if(openKey===key){ closeSheet(true); return }
    openSheet(key,btn,true);
  };

  /* Escape closes the sheet and gives focus back to its object. Capture phase, and only when a sheet
     is open, so every other Escape in the app behaves as before. */
  const modalUp=()=>{ const mb=document.getElementById('modalBg'); return !!(mb&&mb.classList.contains('show')) };
  document.addEventListener('keydown',e=>{
    if(e.key!=='Escape'||!openKey) return;
    if(modalUp()) return;   // a dialog opened from the sheet (Resume a saved mock): boot.js closes that one only
    e.preventDefault(); e.stopPropagation();
    closeSheet(true);
  },true);

  /* The sheet is aria-modal, so Tab is held inside it: from the last control it wraps to the first,
     from the first (or the sheet itself) with Shift it wraps to the last. A dialog on top of the sheet
     keeps its own focus, so nothing here acts while one is up. */
  document.addEventListener('keydown',e=>{
    if(e.key!=='Tab'||!openKey||!sheetEl||modalUp()) return;
    const ae=document.activeElement;
    if(ae!==sheetEl&&!sheetEl.contains(ae)) return;
    const f=[].filter.call(sheetEl.querySelectorAll('button:not([disabled]),[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'),
      n=>n.offsetParent!==null||n===document.activeElement);
    if(!f.length){ e.preventDefault(); return }
    const first=f[0], last=f[f.length-1];
    if(e.shiftKey&&(ae===first||ae===sheetEl)){ e.preventDefault(); last.focus() }
    else if(!e.shiftKey&&ae===last){ e.preventDefault(); first.focus() }
  },true);

  /* ---- the iris ------------------------------------------------------------------------------ */
  function iris(rm){
    const g=ghost, from=irisFrom; ghost=null; irisFrom=null;
    if(!g||!from||reduced()) return;
    const inn=rm.querySelector('.rm-in');
    const rr=rm.getBoundingClientRect();
    const x=from.x-rr.left, y=from.y-rr.top;
    const R=Math.ceil(Math.hypot(Math.max(x,rr.width-x),Math.max(y,rr.height-y)))+4;
    const gh=document.createElement('div');
    gh.className='rm-ghost'; gh.setAttribute('aria-hidden','true'); gh.appendChild(g);
    rm.insertBefore(gh,inn);
    inn.style.clipPath=`circle(0px at ${x}px ${y}px)`;
    inn.getBoundingClientRect();
    inn.style.transition=`clip-path ${IRIS_MS}ms cubic-bezier(.45,.05,.2,1)`;
    inn.style.clipPath=`circle(${R}px at ${x}px ${y}px)`;
    let done=false;
    const end=()=>{ if(done) return; done=true; inn.removeEventListener('transitionend',onEnd); inn.style.transition=''; inn.style.clipPath=''; gh.remove() };
    /* transitionend bubbles up from every child: only the clip-path of .rm-in itself ends the iris */
    const onEnd=e=>{ if(e.target===inn&&e.propertyName==='clip-path') end() };
    inn.addEventListener('transitionend',onEnd);
    setTimeout(end,IRIS_MS+120);
  }
  function makeGhost(city){
    const c=city.cloneNode(true);
    c.querySelectorAll('video').forEach(n=>n.remove());
    c.querySelectorAll('[onclick]').forEach(n=>n.removeAttribute('onclick'));
    c.removeAttribute('aria-label'); c.setAttribute('aria-hidden','true'); c.inert=true;
    return c;
  }

  /* ---- mount (after the page is built) ------------------------------------------------------- */
  function teardown(){
    if(live){ try{live.cleanup()}catch(e){} live=null }
    clearTimeout(sheetTimer);
    sheetEl=null; scrimEl=null; openKey=null; opener=null;
    document.body.classList.remove('rm-on');
    GUIDE_VARS.forEach(v=>document.body.style.removeProperty(v));
  }

  /* Where the guide (the corner figure) stands in a landscape room: the painting's free centre floor.
     The numbers are handed to css as pixel offsets from the window's right and bottom edges, and the
     size of that floor, so her bubble can be held inside it. Nothing here moves her; css does. */
  const FLOOR=[37,60,72,96];
  const GUIDE_VARS=['--g-r','--g-b','--g-w','--g-h'];
  function placeGuide(rm,box){
    const br=box.getBoundingClientRect(), rr=rm.getBoundingClientRect();
    const l=Math.max(br.left+br.width*FLOOR[0]/100,rr.left), r=Math.min(br.left+br.width*FLOOR[2]/100,rr.right,window.innerWidth);
    const t=Math.max(br.top+br.height*FLOOR[1]/100,rr.top), b=Math.min(br.top+br.height*FLOOR[3]/100,rr.bottom,window.innerHeight);
    const s=document.body.style;
    s.setProperty('--g-r',Math.round(window.innerWidth-r)+'px');
    s.setProperty('--g-b',Math.round(window.innerHeight-b)+'px');
    s.setProperty('--g-w',Math.round(r-l)+'px');
    s.setProperty('--g-h',Math.round(b-t)+'px');
  }
  /* upright window: the four objects are also a plain menu under the painting, so the painting's own
     spots leave the Tab order (they stay tappable) and the keyboard never meets eight stops */
  const upright=()=>matchMedia('(max-aspect-ratio:1/1)').matches;
  function setSpotTabs(rm){
    const up=upright();
    rm.querySelectorAll('.rm-spot').forEach(sp=>{ if(up) sp.tabIndex=-1; else sp.removeAttribute('tabindex') });
  }
  function mount(){
    const page=document.getElementById('page');
    const rm=page&&page.querySelector('.rm');
    if(!rm){ ghost=null; irisFrom=null; return }
    document.body.classList.add('rm-on');
    const tb=document.querySelector('.topbar');
    const box=rm.querySelector('.rm-box');
    const fit=()=>{
      rm.style.setProperty('--rm-top',(tb?Math.round(tb.getBoundingClientRect().height):0)+'px');
      rm.style.setProperty('--rm-ph',Math.round(box.getBoundingClientRect().height)+'px');
      fitLabels(rm);
      setSpotTabs(rm);
      placeGuide(rm,box);
    };
    fit();
    let raf=0;
    const onResize=()=>{ cancelAnimationFrame(raf); raf=requestAnimationFrame(fit) };
    window.addEventListener('resize',onResize);
    live={rm,cleanup(){ cancelAnimationFrame(raf); window.removeEventListener('resize',onResize) }};
    if(document.fonts&&document.fonts.ready){
      const mine=live;
      document.fonts.ready.then(()=>{ if(live===mine) fit() });
    }
    if(reopen){
      const r=reopen; reopen=null;
      const btn=rm.querySelector(r.menu?`.rm-menu .act[data-key="${r.key}"]`:`.rm-spot[data-key="${r.key}"]`);
      if(btn) openSheet(r.key,btn,false,r.keep,r.scroll);
    }
    iris(rm);
  }

  /* ---- wraps ----------------------------------------------------------------------------------- */
  const _syncFilm=syncFilm;
  syncFilm=function(){
    const page=document.getElementById('page');
    const entering=!!(me&&view.name==='module'&&ROOMS[view.id]);
    const had=!!(page&&page.querySelector('.rm'));
    reopen=null; ghost=null; irisFrom=null;
    if(entering&&had&&openKey){
      /* the sheet is rebuilt: keep where its body was scrolled to and which control had focus */
      const sb=sheetEl&&sheetEl.querySelector('.sheet-body');
      reopen={key:openKey,keep:keyOf(document.activeElement,sheetEl),scroll:sb?sb.scrollTop:0,
        menu:!!(opener&&opener.closest&&opener.closest('.rm-menu'))};
    }else if(entering&&!had&&!reduced()){
      const city=page&&page.querySelector('.city');
      if(city&&lastTap&&lastTap.mod===view.id&&Date.now()-lastTap.t<1500){
        ghost=makeGhost(city); irisFrom={x:lastTap.x,y:lastTap.y};
      }
    }
    teardown();
    return _syncFilm.apply(this,arguments);
  };
  const _ink=inkMarkChips;
  inkMarkChips=function(root){
    const r=_ink.apply(this,arguments);
    if(view.name==='module'&&me) mount(); else { ghost=null; irisFrom=null }
    return r;
  };

  /* ---- the question view has no figure, so what she would say is a toast ---------------------
     css/ui.css hides her figure, bubble and tools on body[data-view=quiz]. A phase change
     (advancePhase) or a set-complete line would then show nothing, so while that view is up the
     same text also goes out through the app's own toast(). Her logic runs untouched: the wrapper
     calls the original first and mirrors its own gate (on, text, muted/collapsed unless forced). */
  const _say=clepSay;
  clepSay=function(text,opt){
    const r=_say.apply(this,arguments);
    try{
      const o=opt||{};
      if(view.name==='quiz'&&CLEP.on&&text&&((!CLEP.muted&&!CLEP.mini)||o.force)){
        toast(String(text).replace(/\*\*/g,'').replace(/\s+/g,' ').trim());
      }
    }catch(e){}
    return r;
  };
})();
