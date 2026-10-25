function go(v){
  if(!v)v={name:'home'};
  if(v.name==='theory'&&THEORY_LOCKED)v={name:'home'};
  if(v.name==='module'||(v.name==='theory'&&v.mod)){
    const id=v.name==='module'?v.id:v.mod;
    const m=activeModules().find(x=>x.id===id);
    if(!m||isLocked(id)||(v.ch&&
       (!THEORY[v.ch]||!m.groups.some(g=>g.chapters.some(c=>c[0]===v.ch))))){
      v={name:'home'};
    }
  }
  if(v.name==='quiz'&&(!Q.ids.length||
     Q.ids.some(id=>!QUESTIONS.some(q=>q.id===id))))v={name:'home'};
  view=v;render();window.scrollTo(0,0);closeRail();
}
/* Screens where the learner READS for minutes at a time: no entrance motion on these
   (revealOnScroll) and the Clepsydra stays quiet (clepsydra.js). Everything else is a browse screen. */
const STILL_VIEWS=['quiz','results','mock','review','theory'];

/* render() runs through SubjFx.vt (js/subject-fx.js): when a home subject card or a subject chapter row was just clicked and the browser has View Transitions, the swap is wrapped in the browser's own default transition; otherwise it is the plain swap. */
function render(){if(SubjFx.vt(renderNow))return;renderNow()}
function renderNow(){
  SubjFx.destroy();
  /* Imports, snapshots and cloud merges can replace S without entering a
     profile again. Reconcile here before any page reads its question pool. */
  if(me){
    const choice=termChoice(S.term);
    if(!choice){
      termEntryPending=true;
      activateTerm(null);
      showGate('profiles');
      return;
    }
    if(termEntryPending)return;
    if(activateTerm(choice.id))toast('Semester updated to '+termName()+'. Saved progress is kept.');
  }
  renderNav();
  const p=$('page');
  // Drives body[data-view] in CSS — the alive-to-browse / calm-to-read gate.
  document.body.dataset.view=view.name||'home';
  /* ⚠️ Drop the reader before EVERY render. bk-on is set by bkInit() on the way
     into a chapter; left on, its overflow:hidden and fixed column height apply
     to whatever view comes next and clip it. Clearing here means only the
     chapter view can ever turn it back on. */
  document.body.classList.remove('bk-on');
  const emptyCourse=activeModules().length===0&&
    ['home','module','quiz','review','theory','flagged','mock','weak'].indexOf(view.name)>=0;
  if(emptyCourse)vEmptyTerm(p);
  else ({home:vHome,module:vModule,quiz:vQuiz,results:vResults,review:vReview,schedule:vSchedule,theory:vTheory,
    moved:vMoved,flagged:vFlagged,mock:vMock,session:vSession,weak:vWeak}[view.name]||vHome)(p);
  if(view.name==='module'&&!emptyCourse)SubjFx.init(p);
  if((view.name==='home'||view.name==='mock')&&hasSavedMock()){
    p.insertAdjacentHTML('afterbegin','<p><button class="btn sec" onclick="offerMockResume()">Open saved mock exam</button></p>');
  }
  const focusView=['quiz','results'].includes(view.name);
  if(!focusView){inkMarkChips(p);revealOnScroll(p)}
  else if(_revealObs){_revealObs.disconnect();_revealObs=null}
  /* The companion travels with the view: she repaints her readout and, the
     first time she meets a screen, explains it. */
  if(!focusView){clepPaint();clepPlace();clepOnView()}
}

/* Fade cards up as they enter the viewport — browse screens only. Reading
   screens get the page entrance animation and then hold completely still.
   Falls back to showing everything if IntersectionObserver is unavailable. */
let _revealObs=null;
function revealOnScroll(root){
  if(_revealObs){_revealObs.disconnect();_revealObs=null}
  if(STILL_VIEWS.includes(view.name)) return;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const items=root.querySelectorAll('.card:not(.sk-card):not([data-dolly]),.stat,.ch-row,.th-ch,.day');
  if(!items.length||!('IntersectionObserver' in window)) return;
  _revealObs=new IntersectionObserver((entries,obs)=>{
    entries.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target)} });
  },{rootMargin:'0px 0px -40px 0px',threshold:.06});
  items.forEach((el,i)=>{
    el.classList.add('reveal');
    el.style.transitionDelay=Math.min(i,10)*26+'ms';
    _revealObs.observe(el);
  });
}


/* Ink-mark chips strike their label rather than drawing across the control. */
function inkMarkChips(root){
  root.querySelectorAll('.chip').forEach(chip=>{
    if(chip.querySelector(':scope > .chiplabel'))return;
    const label=document.createElement('span');
    label.className='chiplabel';
    while(chip.firstChild)label.appendChild(chip.firstChild);
    chip.appendChild(label);
  });
}

function renderNav(){
  $('railTerm').textContent=termName()+' · Q-Bank';
  const rp=$('railProf');
  if(rp&&me){
    rp.innerHTML=avHTML(me.av,'rav')+
      `<span style="flex:1;min-width:0"><span class="rn">${esc(me.name)}</span><br><span class="rs">Switch profile</span></span>`;
  }
  drawRailSync();
  const st=streakCount();
  $('streakBox').innerHTML=st===0?`<span class="fl">${ico('olive',18)}</span>
    <span><span class="t">Answer a question to start a streak</span></span>`:`<span class="fl">${ico('olive',18)}</span>
    <span><span class="n">${st}</span> <span class="t">day${st===1?'':'s'} in a row</span></span>`;
  const due=dueNow().length;
  const flagged=QUESTIONS.filter(q=>S.flags[q.id]).length;
  const moves=buildSchedule().catchups.length;
  let h=`<button class="nav-item ${view.name==='home'?'on':''}" onclick="go({name:'home'})"><span class="ic">${ico('temple',17)}</span> Dashboard</button>`;
  h+=`<button class="nav-item ${view.name==='schedule'?'on':''}" onclick="go({name:'schedule'})"><span class="ic">${ico('tablet',17)}</span> Schedule</button>`;
  h+=`<button class="nav-item ${view.name==='moved'?'on':''}" onclick="go({name:'moved'})"><span class="ic">${ico('shuffle',17)}</span> Rescheduled${moves?`<span class="badge-due">${moves}</span>`:'<span class="cnt">0</span>'}</button>`;
  /* Theory sits back exactly the way a locked subject does — same disabled row,
     same "soon" count — because it is the same promise: the section is coming,
     it is not broken and it is not gone. */
  h+=THEORY_LOCKED
    ? `<button class="nav-item" disabled style="opacity:.45"><span class="ic">${ico('scroll',17)}</span> Theory<span class="cnt">soon</span></button>`
    : `<button class="nav-item ${view.name==='theory'?'on':''}" onclick="go({name:'theory'})"><span class="ic">${ico('scroll',17)}</span> Theory<span class="cnt">${theoryCount()}</span></button>`;
  h+=`<div class="nav-label">Modules</div>`;
  activeModules().forEach(m=>{
    if(isLocked(m.id)){
      h+=`<button class="nav-item" disabled style="opacity:.45">
        <span class="ic">${ico(m.icon,17)}</span> ${m.name}<span class="cnt">soon</span></button>`;
      return;
    }
    h+=`<button class="nav-item ${view.name==='module'&&view.id===m.id?'on':''}" onclick="go({name:'module',id:'${m.id}'})">
      <span class="ic">${ico(m.icon,17)}</span> ${m.name}<span class="cnt">${qsInModule(m.id).length}</span></button>`;
  });
  h+=`<div class="nav-label">Practice</div>`;
  /* A live session shows its clock here as well as on the Clepsydra, so the
     rail tells you one is running even when she is collapsed. */
  const ls=sess();
  h+=`<button class="nav-item ${view.name==='session'?'on':''}" onclick="go({name:'session'})">
    <span class="ic">${ico('clepsydra',17)}</span> Study session${
      ls?`<span class="badge-due" id="navSessClock">${clMMSS(phaseLeft())}</span>`
        :'<span class="cnt" id="navSessClock">—</span>'}</button>`;
  h+=`<button class="nav-item ${view.name==='review'?'on':''}" onclick="go({name:'review'})"><span class="ic">${ico('hourglass',17)}</span> Review deck
    ${due?`<span class="badge-due">${due}</span>`:'<span class="cnt">0</span>'}</button>`;
  h+=`<button class="nav-item ${view.name==='flagged'?'on':''}" onclick="go({name:'flagged'})"><span class="ic">${ico('laurel',17)}</span> Flagged<span class="cnt">${flagged}</span></button>`;
  const weak=weakChapters().filter(c=>c.done>=WEAK_MIN&&c.acc<60).length;
  h+=`<button class="nav-item ${view.name==='weak'?'on':''}" onclick="go({name:'weak'})"><span class="ic">${ico('target',17)}</span> Weakest chapters${
    weak?`<span class="badge-due">${weak}</span>`:'<span class="cnt">0</span>'}</button>`;
  h+=`<button class="nav-item ${view.name==='mock'?'on':''}" onclick="go({name:'mock'})"><span class="ic">${ico('amphora',17)}</span> Mock exam</button>`;
  $('nav').innerHTML=`<button class="nav-item" onclick="showTermPicker()">
    <span class="ic">${ico('tablet',17)}</span> Change semester</button>`+h;
}

/* ============ DASHBOARD ============ */
function vHome(p){
  const total=QUESTIONS.length;
  const done=QUESTIONS.filter(q=>isAnswered(q.id)).length;
  const acc=accuracy(QUESTIONS);
  const dueList=dueNow();
  const due=dueList.length;
  /* A profile that has answered nothing has nothing to stand on, and the four
     stat tiles say so in the bluntest possible way: 0 / — / 0 / 0. That is an
     empty scoreboard shown to somebody who has not played yet, and it was the
     first sentence the app spoke to a new colleague. The first run asks for a
     subject instead, and puts the subjects directly underneath the question.
     The moment one answer lands the dashboard becomes the ledger it was built
     to be — nothing is removed, it is deferred until it means something. */
  const fresh=done===0;

  let h=`<div class="eyebrow">${esc(termName())}</div>`;
  h+=fresh
    ?`<h1>Choose a subject to begin</h1>
      <p class="page-sub">${total} questions, transcribed from the printed banks. Start anywhere — every chapter remembers where you stopped.</p>`
    :`<h1>Where you stand</h1>
      <p class="page-sub">${total} questions loaded. Work through them by chapter, by module, or build a custom set.</p>`;

  /* lean-in: the heading block ends here; everything else in h goes after the scene. */
  const headHTML=h;h="";
  if(!fresh){
    h+=`<div class="grid g4" style="margin-bottom:30px">
    <div class="stat"><span class="emo">${ico('stylus',20)}</span><div class="n">${done}<span style="font-size:15px;color:var(--ink-4)">/${total}</span></div><div class="l">Answered</div></div>
    <div class="stat"><span class="emo">${ico('target',20)}</span><div class="n" style="color:${accColor(acc)}">${acc===null?'—':acc+'%'}</div><div class="l">Accuracy</div></div>
    <div class="stat"><span class="emo">${ico('hourglass',20)}</span><div class="n" style="color:${due?'var(--ent)':'var(--ok)'}">${due}</div><div class="l">Due for review</div></div>
    <div class="stat"><span class="emo">${ico('laurel',20)}</span><div class="n">${QUESTIONS.filter(q=>S.flags[q.id]).length}</div><div class="l">Flagged</div></div>
  </div>`;
  }

  /* openModules(), not MODULES: a student who practised a subject before it was
     locked still has its place saved, and offering to continue it would open a
     chapter with nothing in it. The pointer is kept, just not offered. */
  const recent=Object.keys(S.resumeByChapter||{}).filter(cid=>
    openModules().some(m=>m.groups.some(g=>g.chapters.some(c=>c[0]===cid)))
  ).sort((a,b)=>S.resumeByChapter[b].at-S.resumeByChapter[a].at)[0];
  if(recent){
    const r=S.resumeByChapter[recent];
    h+=`<div class="filterbar"><button class="btn go" onclick="startChapter('${recent}')">${r.finished?'Restart':'Continue'} &mdash; ${esc(chapterName(recent))}</button></div>`;
  }

  const t=todayISO();
  const rows=buildSchedule().rows;
  const today=rows.find(d=>d.date===t);
  let todayHTML='';
  if(today&&today.items&&today.items.length){
    todayHTML=`<h2>${ico('laurel',20)} On today</h2><div class="card" style="margin-bottom:28px;--c:rgba(109,76,125,.4)">
      ${today.items.map(it=>`<div class="day-line">${it.label?`<span class="tag" style="background:${it.hex}">${esc(it.label)}</span>`:''}${esc(it.text)}</div>`).join('')}
      </div>`;
  }

  /* The man the app is named after. The engraving and the biography both come
     from the user's own supplied image (Design\Images\Father of anatomy 2.jpg) — this
     is NOT from the Semester 8 course material and carries no page citation,
     which is why it is kept to biography and never touches clinical content. */
  const heroHTML=`<section class="hero-panel">
    <div class="hp-art"><img src="assets/herophilus-bust.jpg" alt="Engraved bust of Herophilus" loading="lazy"></div>
    <div class="hp-txt">
      <div class="hp-kicker">Alexandria · c. 335–280 BC</div>
      <div class="hp-name">Herophilus</div>
      <div class="hp-sub">Father of Anatomy</div>
      <p>An ancient Greek physician, the first to dissect and study the human body. His work laid the foundations for understanding the <b>brain</b>, the <b>nerves</b>, the <b>eye</b> and the <b>blood vessels</b>.</p>
      <p>Twenty-three centuries later, you are revising the same four things.</p>
    </div>
  </section>`;

  let modsHTML=`<h2 class="lean-h2">${fresh?'Subjects':'Modules'}</h2><div class="grid g3 mod-grid" data-dolly-stagger>`;
  activeModules().forEach(m=>{
    const qs=qsInModule(m.id);
    const d=qs.filter(q=>isAnswered(q.id)).length;
    const a=accuracy(qs);
    const pct=qs.length?d/qs.length*100:0;
    const chs=m.groups.reduce((n,g)=>n+g.chapters.length,0);
    /* A locked subject keeps its card and its artwork — dropping it would read
       as an app that only covers two subjects — but shows no counts and no
       progress ring, because both would be zero and a zero reads as broken. */
    if(isLocked(m.id)){
      modsHTML+=`<div class="card mod-card locked" data-dolly="tilt-up" style="--c:${m.color}" aria-disabled="true">
        ${(m.art||MOD_ART[m.id])?`<span class="mod-art" style="--art:url('../assets/${m.art||MOD_ART[m.id]}.jpg')"></span>`:''}
        <span class="soon">Coming soon</span>
        <div class="mod-info">
          <div class="mod-top"><span class="mod-ic">${ico(m.icon,25)}</span><span class="mod-name">${m.name}</span></div>
          <div class="mod-meta">${chs} chapters on the syllabus. The questions are still being transcribed.</div>
        </div>
      </div>`;
      return;
    }
    /* An untouched subject has no ring worth drawing. A 0% arc, a dash for
       accuracy and "0/1598 answered" are three separate ways of printing the
       same nothing, and printed three times they read as a fault rather than a
       beginning. The card says what to do instead, and earns its ring with the
       first answer. Same height either way, so the grid does not jump when one
       subject crosses over. */
    const foot=d===0
      ?`<div class="ringrow startrow"><span class="startgo">Start studying</span></div>`
      :`<div class="ringrow">${ring(pct,m.hex)}
          <div class="ringmeta"><div class="a" style="color:${accColor(a)}">${a===null?'—':a+'%'}</div>
          <div class="b">${d}/${qs.length} answered</div></div></div>`;
    modsHTML+=`<button class="card mod-card" data-dolly="tilt-up" style="--c:${m.color}" onclick="go({name:'module',id:'${m.id}'})">
      ${(m.art||MOD_ART[m.id])?`<span class="mod-art" style="--art:url('../assets/${m.art||MOD_ART[m.id]}.jpg')"></span>`:''}
      <div class="mod-info">
        <div class="mod-top"><span class="mod-ic">${ico(m.icon,25)}</span><span class="mod-name">${m.name}</span></div>
        <div class="mod-meta">${chs} chapters · ${qs.length} question${qs.length===1?'':'s'}</div>
        ${foot}
      </div>
    </button>`;
  });
  modsHTML+=`</div>`;

  /* lean-in: Dolly scene = pinned painting (zoom), heading (fly), cards (tilt-up); the rest of the dashboard follows the scene. */
  const plate="assets/lean/painted-codex-3@2x",plateDay="assets/lean/painted-day-v2@2x"; /* night plate (dark) and day plate (light); lean.css shows one, hides the other */
  const lightNow=document.documentElement.getAttribute("data-theme")==="light",lzNight=lightNow?' loading="lazy"':"",lzDay=lightNow?"":' loading="lazy"'; /* only a loading hint for the plate not showing now; a later theme switch still works (lazy loads when shown) */
  p.innerHTML=`<div class="lean" data-dolly-scene>
    <div class="lean-pin" data-dolly-pin>
      <div class="lean-plate" data-dolly="zoom" data-dolly-on="scene"><picture class="plate-night"><source type="image/webp" srcset="${plate}.webp"><img src="${plate}.png" alt="" width="3832" height="1642" decoding="async"${lzNight}></picture><picture class="plate-day"><source type="image/webp" srcset="${plateDay}.webp"><img src="${plateDay}.png" alt="" width="3072" height="1316" decoding="async"${lzDay}></picture></div>
    </div>
    <div class="lean-copy">
      <div class="lean-head" data-dolly-space><div class="lean-head-in" data-dolly="fly"><div class="lean-head-txt">${headHTML}</div></div></div>
      <div class="lean-cards">${modsHTML}</div>
    </div>
  </div>
  <div class="lean-after">${h}${todayHTML}${heroHTML}</div>`;
}

/* ============ MODULE ============ */
/* Subject page (step 1b, 2026-10-22). Order: tinted header, source tags, Practise buttons, then the 3D stack
   of this subject's chapters (js/subject-fx.js; absent under reduced motion), then the plain list with a
   progress ring per row. Class names of the old page are kept: print.css, tasks.js and boot-check use them. */
function vModule(p){
  const m=moduleOf(view.id);
  const qs=qsInModule(m.id);
  const a=accuracy(qs);
  let h=`<div class="subj" style="--sj:${m.hex}">
  <button class="tb-btn" style="padding-left:0;margin-bottom:8px" onclick="go({name:'home'})">← Dashboard</button>
  <header class="subj-head">
    <div class="eyebrow">Subject</div>
    <h1>${ico(m.icon,26)} ${m.name}</h1>
    <p class="page-sub subj-counts"><b>${qs.length}</b> question${qs.length===1?'':'s'} · <b>${qs.filter(q=>isAnswered(q.id)).length}</b> answered${a!==null?` · <b style="color:${accColor(a)}">${a}% accuracy</b>`:''}</p>
  </header>`;

  /* Source filter. Only rendered for banks this module actually has questions
     from, so an empty module does not offer four dead toggles. */
  const allQ=allQsInModule(m.id);
  const present=BANKS.filter(b=>allQ.some(q=>banksOf(q).indexOf(b.id)>=0));
  if(present.length>1){
    const sel=S.banks[m.id]||[];
    const filtering=sel.length>0;
    h+=`<div class="bankbar">
      <span class="bank-lbl">Source</span>
      ${present.map(b=>{
        /* A shared question counts for EVERY bank it is in, so these tags can
           sum to more than the module's question count. That is the honest
           reading — the question really is in both banks — and it is the
           user's choice (2026-08-03). Do not "fix" it by counting origins. */
        const on=!filtering||sel.indexOf(b.id)>=0;
        const n=allQ.filter(q=>banksOf(q).indexOf(b.id)>=0).length;
        return `<button class="bankchip ${on?'on':''}" style="--bk:${b.hex}"
          onclick="toggleBank('${m.id}','${b.id}')"
          aria-pressed="${on}"><span class="banklabel">${b.name}</span><span class="bankn">${n}</span></button>`;
      }).join('')}
      ${filtering?`<button class="bankchip reset" onclick="clearBanks('${m.id}')"><span class="banklabel">Show all</span></button>`:''}
    </div>`;
  }

  if(qs.length){
    const un=qs.filter(q=>!isAnswered(q.id));
    /* Neuropsychiatry is two subjects examined apart (owner 2026-10-02): one
       "practise all" per half, by the question's topic chapter. */
    const halves=m.id==='neuropsych'?m.groups.filter(g=>g.name==='Neurology'||g.name==='Psychiatry'):[];
    const allBtn=halves.length===2?halves.map(g=>{
      const ids=g.chapters.map(c=>c[0]);
      const gq=qs.filter(q=>ids.indexOf(q.chapter)>=0);
      return `<button class="btn go" onclick="startQuiz(${JSON.stringify(gq.map(q=>q.id)).replace(/"/g,'&quot;')},'${g.name} — all')">${ico('play')} Practise all ${g.name} ${gq.length}</button>`;
    }).join('\n      '):`<button class="btn go" onclick="startQuiz(${JSON.stringify(qs.map(q=>q.id)).replace(/"/g,'&quot;')},'${m.name} — all')">${ico('play')} Practise all ${qs.length}</button>`;
    h+=`<div class="filterbar">
      ${allBtn}
      ${un.length?`<button class="btn sec" onclick="startQuiz(${JSON.stringify(un.map(q=>q.id)).replace(/"/g,'&quot;')},'${m.name} — new')">Unanswered (${un.length})</button>`:''}
    </div>`;
  }

  /* Rows first as data: the stack and the list read the same numbers. */
  const rows=[];
  m.groups.forEach(g=>g.chapters.forEach(([cid,cname])=>{
    const cq=qsIn(cid);
    rows.push({cid,cname,cq,ca:accuracy(cq),cd:cq.filter(q=>isAnswered(q.id)).length});
  }));

  /* 3D stack: this subject's chapters that have questions, one card each, the demo's 27 cards at most.
     Subjects with fewer chapters get fewer cards; beyond 27 the first 27 in course order are used and
     the list below still holds every chapter. Decorative duplicate of the list, so it is hidden from
     assistive tech and the tab order. */
  const stackRows=rows.filter(r=>r.cq.length).slice(0,SubjFx.CARDS);
  if(stackRows.length&&SubjFx.stackOn()){
    h+=`<section class="subj-stack" aria-hidden="true"><div class="wrap"><div data-stack-1 class="wrap__inner"><div class="content content--1">
      ${stackRows.map(r=>`<button class="card sk-card" tabindex="-1" onclick="startChapter('${r.cid}')"><span class="sk-name">${r.cname}</span><span class="sk-n">${r.cd}/${r.cq.length}</span></button>`).join('')}
    </div></div></div></section>`;
  }

  let gi=0;
  m.groups.forEach(g=>{
    h+=`<div class="grouphdr">${g.name}</div>`;
    g.chapters.forEach(([cid,cname])=>{
      const r=rows[gi++];
      const cq=r.cq,ca=r.ca,cd=r.cd;
      const resume=(S.resumeByChapter||{})[cid];
      /* .ch-dot is now the ring's host (progressbar.js Circle, drawn by SubjFx.init); data-v is the answered share. */
      h+=`<button class="ch-row" ${cq.length?'':'disabled'} onclick="startChapter('${cid}')">
        <span class="ch-dot" ${cq.length?`data-v="${cd/cq.length}" data-c="${m.hex}"`:''}></span>
        <span class="ch-name">${cname}${resume?` &middot; ${resume.finished?'Restart':'Continue'}`:''}</span>
        <span class="ch-count">${cq.length?`${cd}/${cq.length}`:'no questions yet'}</span>
        <span class="ch-acc" style="color:${accColor(ca)}">${ca===null?'':ca+'%'}</span>
      </button>`;
    });
  });
  h+=`</div>`;
  p.innerHTML=h;
}

/* ============ QUIZ ============ */
let Q={ids:[],i:0,title:'',sel:null,shown:false,t0:null,txt:'',peek:false,caret:null,did:{},attempts:{},chapter:null,sources:[]};
/* The profile already has a storage key. Keeping the paper inside it makes picks
   and the paper recover together, including through exports and cloud merges. */
