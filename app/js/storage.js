
/* ==========================================================================
   CLOUD SYNC  \u2014  paste your Firebase config between the braces below.
   Leave it empty and the app simply runs offline with local profiles.
   Setup instructions are in the app: profile screen \u2192 "Set up sync".
   ========================================================================== */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAg9OGSUbn7A04K5nRdStjzwGrO0nrvidk",
  /* auth handler proxied by _worker.js so sign-in stays same-origin */
  authDomain: "herophilus.pages.dev",
  projectId: "ward-round-e4822",
  storageBucket: "ward-round-e4822.firebasestorage.app",
  messagingSenderId: "353156608996",
  appId: "1:353156608996:web:1b8faf5f9fa01dafd48df1"
};




/* ============ SCHEDULE ============ */
const SUBJ_COLOURS=[['#b4472f','ENT'],['#5c7a52','Ophthalmology'],['#6d4c7d','Neuro/Psych'],
                    ['#2e5f8a','Pediatrics'],['#7a6a55','Revision'],['#9a6b1f','Buffer'],['#2f6b8f','Other']];

/* Shape: [{date, rest, items:[{label,text,hex}]}], sorted by date.

   THERE IS NO BUILT-IN PLAN, and that is deliberate. The app used to ship one
   author's revision timetable, built around one faculty's exam dates. Everyone
   who opened it inherited a stranger's plan and had to demolish it before their
   own could exist — and the dates were wrong for them the moment the calendar
   moved on. A schedule is the one thing here that cannot be written for someone
   else, so every profile starts empty and builds its own. `data/schedule.js` was
   deleted with this change; nothing else read it. */
function activeSchedule(){
  if(!S.schedule)S.schedule=[];
  return S.schedule;
}
function saveSchedule(){save();render()}

/* ============ STORAGE ============ */
let KEY='wardround.v2';
/* banks: per-module source filter, {ent:['endpoint','house'], …}. An absent or
   empty entry means "all sources" — never store the full set, so a bank added
   later is included by default instead of silently hidden. */
let S={answers:{},flags:{},conf:{},sched:{},srs:{},days:{},hl:{},banks:{},resumeByChapter:{},notes:{},reports:{}};
let storageMode='memory';

async function loadState(){
  const key=KEY,p=me,entry=profileLoad;
  let raw=null,mode='local';
  try{
    if(typeof window!=='undefined'&&window.storage&&window.storage.get){
      const r=await window.storage.get(key);
      if(entry!==profileLoad||me!==p)return;
      raw=r&&r.value;mode='cloud';
    }
  }catch(e){if(entry!==profileLoad||me!==p)return;mode='local'}
  /* Parsing and checking share their own try so a missing, unreadable or
     unusable value reaches the existing snapshot ladder instead of becoming
     live state or dropping the app to memory-only storage. */
  try{
    if(mode==='local'){try{ raw=localStorage.getItem(key) }catch(e){}}
    let parsed=null;
    if(raw){ try{ parsed=checkedProgressState(JSON.parse(raw)) }catch(e){ parsed=null } }
    if(!parsed){
      const r=bakNewest();
      if(r){
        try{ parsed=checkedProgressState(r.state); bakRestored=r.at }catch(e){}
      }
    }
    if(parsed)S=Object.assign(S,parsed);
    if(!S.hl)S.hl={};
    storageMode=mode;
    migrateSched();dropAI();
  }catch(e){storageMode='memory'}
}
function dropAI(){delete S.ai;delete S.aiKey;delete S.hideFileWarn}
function migrateSched(){
  const out={};
  Object.keys(S.sched||{}).forEach(k=>{
    if(/\|\d+$/.test(k)){out[k]=S.sched[k];return}
    if(k.indexOf('|main')>0){out[k.replace('|main','|0')]=S.sched[k];return}
    if(k.indexOf('|peds')>0){out[k.replace('|peds','|1')]=S.sched[k];return}
    out[k+'|0']=S.sched[k];out[k+'|1']=S.sched[k];
  });
  S.sched=out;
}
/* A toast disappears and the page is rebuilt on every answer. This notice lives
   outside the page, so a storage failure stays visible throughout this visit. */
function warnSaveFailure(message,id='saveWarning'){
  if(document.getElementById(id))return;
  const box=document.createElement('div');
  box.id=id;
  box.setAttribute('role','alert');
  box.innerHTML='<span class="warnico" aria-hidden="true">!</span>'+(message||'<p><strong>Saving failed during this visit.</strong> Recent progress may be missing from storage. Keep this tab open and download a copy before leaving.</p>'+
    '<button class="btn sec" onclick="exportData()">Download progress</button>');
  const page=document.getElementById('page');
  page.parentNode.insertBefore(box,page);
  if(!message)toast('Progress could not be saved. Please read the saving warning.');
}
/* The aggregators deliberately tolerate absent files. Checking their inputs
   here prevents a missing or unparseable script from looking like a small bank.
   Empty arrays and maps are valid, including subjects still being prepared. */
warnSaveFailure.checkData=function(){
  const missing=[];
  const subjects=[
    ['ENT','ent',['Q_ENT','C_ENT'],['T_ENT']],
    ['Pediatrics','pediatrics',['Q_PEDS','Q_PEDS_EP','Q_PEDS_EP2','C_PEDS'],['T_PEDS']],
    ['Ophthalmology','ophtho',['Q_OPHTHO','Q_OPHTHO_EP','Q_OPHTHO_EP2','C_OPHTHO'],['T_OPHTHO']],
    ['Neuro/Psych','neuropsych',['Q_NEURO','C_NEURO'],['T_NEURO']]
  ];
  /* The launch build leaves out the data for a locked subject on purpose, and
     every theory file while that section is locked. Looking for those files is
     looking for something the build was told not to ship, which is why the
     upload showed all four subjects failing while the rail counted 4,049
     questions. Only the files that should be present are checked. */
  let locked=[];
  try{if(typeof LOCKED_MODULES!=='undefined'&&Array.isArray(LOCKED_MODULES))locked=LOCKED_MODULES}catch(e){}
  let notesLocked=false;
  try{notesLocked=typeof THEORY_LOCKED!=='undefined'&&!!THEORY_LOCKED}catch(e){}
  subjects.forEach(s=>{
    if(locked.indexOf(s[1])>=0)return;
    const banksGone=s[2].some(k=>!Array.isArray(window[k]));
    const notesGone=!notesLocked&&s[3].some(k=>
      !window[k]||typeof window[k]!=='object'||Array.isArray(window[k]));
    if(banksGone||notesGone)missing.push(s[0]);
  });
  /* MODULES is a lexical constant, so looking on window would falsely report
     a failure on every healthy boot. Without the catalogue no subject can open. */
  let catalogue=false;
  try{catalogue=typeof MODULES!=='undefined'&&Array.isArray(MODULES)}catch(e){}
  if(!catalogue)missing.push('all subjects (module list)');
  if(missing.length)warnSaveFailure('<p><strong>Part of the question bank failed to load.</strong> Affected: '+
    missing.join(', ')+'. Reload the page.'+(catalogue?' You can study the subjects that loaded.':'')+'</p>', 'dataWarning');
  return catalogue;
};
async function save(){
  S.updatedAt=Date.now();
  let saved=false;
  try{
    if(storageMode==='cloud'&&window.storage&&window.storage.set){
      const key=KEY,raw=JSON.stringify(S),storage=window.storage;
      /* Each key has one active write and one replaceable pending write, so
         a slow earlier request cannot overwrite a later answer. Keeping the
         key and payload together also prevents writes crossing profiles.
         A superseded caller gets false because its payload was not persisted. */
      const writes=save.cloudWrites||(save.cloudWrites=new Map());
      let queue=writes.get(key);
      if(!queue){queue={running:false,pending:null};writes.set(key,queue)}
      saved=await new Promise(resolve=>{
        if(queue.pending)queue.pending.resolve(false);
        queue.pending={raw:raw,storage:storage,resolve:resolve};
        if(queue.running)return;
        queue.running=true;
        (async()=>{
          while(queue.pending){
            const job=queue.pending;queue.pending=null;
            let ok=false;
            try{await job.storage.set(key,job.raw);ok=true}catch(e){warnSaveFailure()}
            job.resolve(ok);
          }
          writes.delete(key);
        })();
      });
    }
    else if(storageMode==='local'){localStorage.setItem(KEY,JSON.stringify(S));saved=true}
    else throw new Error('No persistent storage is available');
  }catch(e){warnSaveFailure()}
  schedulePush();
  bakSchedule();
  return saved;
}

/* ============ HELPERS ============ */
const $=id=>document.getElementById(id);
const chapterName=id=>{for(const m of MODULES)for(const g of m.groups)for(const c of g.chapters)if(c[0]===id)return c[1];return id};
const moduleOf=id=>MODULES.find(m=>m.id===id);
/* The three question banks the material comes from. Order here is the order the
   filter chips render in. `bank` on a question is one of these ids; anything
   missing one is treated as 'endpoint', which is where every question
   transcribed before the field existed came from. */
const BANKS=[
  {id:'endpoint', name:'Endpoint',   hex:'#9a6b1f'},
  {id:'house',    name:'House',      hex:'#2f6b8f'},
  {id:'gradegain',name:'Grade Gain', hex:'#8f3f5c'}
];
/* Module id -> artwork basename. The ids and the filenames diverge (neuropsych
   vs mod-neuro), so this map exists rather than a string template. */
const MOD_ART={ent:'mod-ent',ophtho:'mod-ophtho',neuropsych:'mod-neuro',pediatrics:'mod-peds'};

/* A question's clinical photograph, cropped out of the bank by
   Design\scripts\q-images.ps1 and named for the source page it came from —
   q.image is 'q-2844', which cites ENT endpoint.pdf p.2844 by itself.

   ⚠️ The path is BUILT HERE and never written as a literal src in a template.
   A single-file build has no assets\ folder, so the bundler has to rewrite
   these to data: URIs — the same reason poseSrc() and MOD_ART exist. One
   function is one place for it to intercept; a literal src is a broken image
   that the bundler cannot see and that throws nothing when it fails. */
function qImgSrc(name){ return `assets/q/${name}.jpg`; }

/* The figure block. `imgAlt` is the bank's own wording for what the picture is
   ("otoscopy of the left ear"); where a question is unanswerable without the
   picture the caption says so, because a learner whose images failed to load
   otherwise just sees a question that makes no sense. */
function qFigure(q){
  if(!q.image) return '';
  const alt=q.imgAlt||'Clinical image printed with this question';
  return `<figure class="qfig">
    <div class="qfig-media"><img src="${qImgSrc(q.image)}" alt="${esc(alt)}" onclick="openZoom('${q.image}')" onerror="qFigure.failed(this)">
      <p class="qfig-failure" role="alert" hidden>The figure could not be loaded. This question needs it. Reload the page to try again.</p></div>
    <figcaption>${esc(alt)}${q.imgEssential?' — this question cannot be answered without it.':''}
      <span class="qfig-hint">Tap to enlarge.</span></figcaption>
  </figure>`;
}
/* The image gives up its place to an explanation and loses the zoom it can no
   longer open, so a missing file cannot leave the browser's broken-image glyph
   sitting in a question the student cannot answer without the picture. The
   caption's invitation to enlarge goes with it, because there is nothing left
   to enlarge. */
qFigure.failed=function(img){
  img.onerror=null;
  img.onclick=null;
  img.style.display='none';
  img.setAttribute('aria-hidden','true');
  const box=img.parentNode;
  box.querySelector('.qfig-failure').hidden=false;
  const fig=box.closest('.qfig');
  const hint=fig?fig.querySelector('.qfig-hint'):null;
  if(hint)hint.hidden=true;
};
function openZoom(name){
  const d=document.createElement('div');
  d.className='qzoom';
  d.innerHTML=`<img src="${qImgSrc(name)}" alt="" onerror="qFigure.failed(this)">
    <p class="qfig-failure" role="alert" hidden>The figure could not be loaded. This question needs it. Reload the page to try again. Tap to close.</p>`;
  d.onclick=()=>d.remove();
  document.body.appendChild(d);
}

const bankOf=q=>q.bank||'endpoint';
const bankName=b=>(BANKS.find(x=>x.id===b)||{name:b}).name;
/* ---- a question can belong to MORE THAN ONE bank ------------------------
   The commercial banks reprint each other, so the same question genuinely
   appears in two of them. It used to be stored as TWO entries, one per bank,
   which meant that ticking both sources showed the learner the same question
   twice (user, 2026-08-03).

   So a question now carries its origin bank in `bank` and any OTHER bank it
   also appears in in `alsoIn`. One entry, several banks: it shows up whichever
   of its banks is ticked, exactly once however many are ticked, and vanishes
   only when none of them is.

   ⚠️ EVERYTHING THAT TOUCHES A BANK MUST GO THROUGH banksOf(), NOT bankOf().
   Miss one and the failure is silent and asymmetric — the question filters
   correctly but is missing from a count, or counts but cannot be filtered to.
   `bankOf` survives only as "which bank was this transcribed from", which is
   what the id prefix and the source citation record.
   ------------------------------------------------------------------------ */
const banksOf=q=>[bankOf(q)].concat(q.alsoIn||[]);
/* One pill per bank the question appears in, origin first. */
const bankPills=q=>banksOf(q).map(id=>
  `<span class="pill bankpill" style="background:${(BANKS.find(b=>b.id===id)||{hex:'#7a6a55'}).hex}">${esc(bankName(id))}</span>`
).join('');
/* Empty or absent filter = show everything. Filtering lives here, in the two
   selectors the whole app already reads through, so chapter rows, counts,
   quizzes, search and progress all agree without any of them knowing about it. */
/* A subject whose bank is not finished. QUESTIONS and THEORY already exclude
   these in data/questions.js and data/theory.js, so nothing here has to filter
   anything — this is only for the places that walk MODULES itself, which still
   holds all four so the cards keep appearing. */
const isLocked=id=>LOCKED_MODULES.indexOf(id)>=0;
const openModules=()=>activeModules().filter(m=>!isLocked(m.id));
const bankOn=q=>{const f=S.banks&&S.banks[q.module];
  return !f||!f.length||banksOf(q).some(b=>f.indexOf(b)>=0)};
const qsIn=ch=>QUESTIONS.filter(q=>q.chapter===ch&&bankOn(q));
const qsInModule=m=>QUESTIONS.filter(q=>q.module===m&&bankOn(q));
/* Unfiltered, for the filter UI itself — it must count what it would reveal. */
const allQsInModule=m=>QUESTIONS.filter(q=>q.module===m);
/* Banks this module actually holds questions from. The filter must work over
   THIS, not over all of BANKS — otherwise a bank with no questions yet counts
   as "still selected", so turning off every visible source leaves the module
   showing nothing while the guard below thinks a source is still on. */
const banksPresent=mod=>BANKS.map(x=>x.id).filter(id=>QUESTIONS.some(q=>q.module===mod&&banksOf(q).indexOf(id)>=0));
function toggleBank(mod,b){
  const present=banksPresent(mod);
  const stored=S.banks[mod]||[];
  /* Drop anything stored that this module no longer has, so a stale id cannot
     linger invisibly and desync the chips from what is actually shown. */
  let cur=stored.length?stored.filter(x=>present.indexOf(x)>=0):present.slice();
  if(!cur.length)cur=present.slice();
  cur=cur.indexOf(b)>=0?cur.filter(x=>x!==b):cur.concat([b]);
  if(!cur.length){toast('Keep at least one source turned on');return}
  /* Store [] when everything present is on, so a bank added later is included
     by default rather than silently filtered out. */
  S.banks[mod]=(cur.length===present.length)?[]:cur;
  save();render();
}
function clearBanks(mod){S.banks[mod]=[];save();render()}
/* Run once after state loads. A saved filter can name a bank the module no
   longer has — content gets re-chaptered and re-sourced as transcription goes
   on — and a filter that matches nothing would show an empty module with no
   obvious cause. Anything left with no live banks falls back to "show all". */
function sanitiseBanks(){
  if(!S.banks)S.banks={};
  Object.keys(S.banks).forEach(mod=>{
    /* A hidden subject has no visible banks, which does not mean its saved
       filter is obsolete. Leave it intact until that subject is available. */
    if(!activeModules().some(m=>m.id===mod)||isLocked(mod))return;
    const present=banksPresent(mod);
    const kept=(S.banks[mod]||[]).filter(b=>present.indexOf(b)>=0);
    S.banks[mod]=(!kept.length||kept.length===present.length)?[]:kept;
  });
}
const isAnswered=id=>S.answers[id]!==undefined;
const isCorrect=id=>S.answers[id]&&S.answers[id].ok;
/* ⚠️⚠️ NEVER BUILD A CALENDAR DATE WITH toISOString() — IT CONVERTS TO UTC.
   This app's user is at UTC+3, so every night between 00:00 and 03:00 local
   `new Date().toISOString().slice(0,10)` returns YESTERDAY. Measured, not
   reasoned: at 00:41 local on 14 Aug the schedule highlighted 13 Aug as TODAY,
   and the same off-by-one moved every SRS due date and broke `nextFreeDate()`,
   which returned the last scheduled day again instead of the day after it.
   A study app is used late at night; this was wrong for three hours a night.
   Dates here are CALENDAR days in the reader's own timezone — read the local
   components. */
const isoLocal=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const todayISO=()=>isoLocal(new Date());

function accuracy(list){
  const a=list.filter(q=>isAnswered(q.id));
  if(!a.length)return null;
  return Math.round(a.filter(q=>isCorrect(q.id)).length/a.length*100);
}
function accColor(p){
  if(p===null)return 'var(--ink-4)';
  if(p>=80)return 'var(--ok)';
  if(p>=60)return 'var(--warn)';   /* was a hardcoded #e08a00 — too pale to pass
                                      AA once it sat on a white card */
  return 'var(--bad)';
}
/* ============ GREEK GLYPHS ============
   The emoji are gone. They were the last thing on the page still rendered by
   the operating system's own colour font, so they looked like stickers on an
   engraving and they changed shape between Windows, iOS and Android.

   These are line drawings on a 24-unit grid, stroked in currentColor, so they
   take the colour of whatever they sit in and invert with the theme for free —
   which no emoji can do.

   THE FOUR MODULE GLYPHS SAY THE SPECIALTY FIRST AND GREEK SECOND — they are
   navigation, so being recognised beats being clever. That is why neuro is a
   brain and pediatrics a teddy bear rather than the labyrinth and the plain
   standing figure they replaced on 2026-07-28 (the user asked for "something
   more obvious and representative"): drawn at 18px the labyrinth read as a
   Greek key and the figure as a generic person. Both were checked by rendering
   them at 14/18/25/26px and looking, not by reading the path data — a first
   round of candidates that looked right in the numbers came out as a flower
   and a leaf. The rest of the set may lean classical (laurel, amphora, olive,
   the rod of Asclepius, a temple front), because nothing navigates by them. */
const ICONS={
  /* brand */
  asclepius:'M12 2v20M12 5.5c-3.2 0-3.2 3.2 0 3.2s3.2 3.2 0 3.2-3.2 3.2 0 3.2 3.2 3.2 0 3.2M9.5 4.3h5',
  /* page turning — plain chevrons; they are a control, not an ornament */
  'chev-l':'M15 5 8 12l7 7',
  'chev-r':'M9 5l7 7-7 7',
  /* modules — these must read as the specialty first and as Greek second */
  ear:'M8.5 21c0-2.5-1.5-3.5-1.5-8a5 5 0 0 1 10 0c0 2.5-1.5 3-2.5 4.5S13.5 21 12 21M12 8.6a2.4 2.4 0 0 1 0 4.8',
  eye:'M2 12s3.8-6.6 10-6.6S22 12 22 12s-3.8 6.6-10 6.6S2 12 2 12z@M12 12m-2.8 0a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0-5.6 0',
  brain:'M4.5 13.5c0-1 .4-1.9 1.1-2.5-.2-.4-.3-.9-.3-1.4 0-1.7 1.4-3.1 3.1-3.1.3 0 .6 0 .9.1.5-1.4 1.9-2.4 3.5-2.4s3 1 3.5 2.4c.3-.1.6-.1.9-.1 1.7 0 3.1 1.4 3.1 3.1 0 .5-.1 1-.3 1.4.7.6 1.1 1.5 1.1 2.5 0 1.4-.9 2.6-2.1 3.1 0 1.8-1.5 3.3-3.3 3.3-.9 0-1.7-.4-2.3-1-.6.6-1.4 1-2.3 1-1.8 0-3.3-1.5-3.3-3.3-1.2-.5-2.1-1.7-2.1-3.1z@M12 6.7v13.8@M9 11.5c.9.3 1.6 1 1.9 1.9@M15 11.5c-.9.3-1.6 1-1.9 1.9',
  teddy:'M7.7 5.6m-2.1 0a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0-4.2 0@M16.3 5.6m-2.1 0a2.1 2.1 0 1 0 4.2 0a2.1 2.1 0 1 0-4.2 0@M12 9.7m-4.4 0a4.4 4.4 0 1 0 8.8 0a4.4 4.4 0 1 0-8.8 0@M10.4 9h.01@M13.6 9h.01@M12 11.2m-.8 0a.8 .8 0 1 0 1.6 0a.8 .8 0 1 0-1.6 0@M8.6 13.4c-1.2.9-2 2.3-2 3.9 0 1.5 1.2 2.7 2.7 2.7h5.4c1.5 0 2.7-1.2 2.7-2.7 0-1.6-.8-3-2-3.9',
  /* navigation */
  temple:'M3 10l9-6 9 6M3 20h18M5.5 10v10M9.5 10v10M14.5 10v10M18.5 10v10',
  tablet:'M4.5 5.5h15v14h-15zM4.5 9.5h15M8.5 3v4M15.5 3v4M8 13h8M8 16.5h5',
  shuffle:'M4 8h4l8 8h4M16 4l4 4-4 4M4 16h4l2-2M16 20l4-4-4-4',
  scroll:'M6.5 3h11a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3zM8.5 7.5h7M8.5 11.5h7M8.5 15.5h4.5',
  hourglass:'M7 3h10M7 21h10M9 3v3.4L12 11l3-4.6V3M9 21v-3.4L12 13l3 4.6V21',
  laurel:'M12 21V8M12 14c-3.5 0-5.6-2.4-5.6-5.6 2.9 0 5.6 1.9 5.6 5.6zM12 18.2c3.5 0 5.6-2.4 5.6-5.6-2.9 0-5.6 1.9-5.6 5.6z',
  amphora:'M9.5 3h5M10 3c0 2.6-3.6 3.6-3.6 7.6a5.6 5.6 0 0 0 11.2 0C17.6 6.6 14 5.6 14 3M10.5 21h3M12 16.2V21',
  /* dashboard stats */
  stylus:'M4 20l1-4L16 5l3 3L8 19zM14.5 6.5l3 3',
  target:'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0@M12 12m-4.6 0a4.6 4.6 0 1 0 9.2 0a4.6 4.6 0 1 0-9.2 0@M12 12m-1.3 0a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0-2.6 0',
  olive:'M4.5 19.5C10 18 15.5 13 19 5M9.2 15.4c-1.6.4-3-.4-3.4-2 1.6-.4 3 .4 3.4 2zM12.8 10.9c-1.6.4-3-.4-3.4-2 1.6-.4 3 .4 3.4 2zM16.4 6.4c-1.6.4-3-.4-3.4-2 1.6-.4 3 .4 3.4 2z',
  /* interface */
  search:'M11 11m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0@M20 20l-4.2-4.2',
  menu:'M4 7h16M4 12h16M4 17h16',
  keys:'M2.5 6.5h19v11h-19zM6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10',
  sun:'M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0@M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  moon:'M20.5 14.8A8.6 8.6 0 1 1 9.7 3.9a6.7 6.7 0 0 0 10.8 10.9z',
  lamp:'M3.5 13.2c0-2 2.2-3.2 5.2-3.2h3.6c3 0 5.2 1.2 5.2 3.2s-2.2 3.2-5.2 3.2H8.7c-3 0-5.2-1.2-5.2-3.2zM17.5 13.2l3.3-1.8M8.5 10V8.2A2.2 2.2 0 0 1 10.7 6h1.1M7 16.4V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.6',
  /* the water clock: an upper vessel draining into a graduated tank. Distinct
     from `hourglass`, which the review deck already owns. */
  clepsydra:'M4.6 3.6h11l-1.9 6.4H6.5z@M10.1 10v2.3@M10.1 14.3m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0@M6.4 15.6h7.4v5h-7.4z@M6.4 18.4h7.4@M15.2 16.6h1.9M15.2 19.2h1.9',
  /* backup: a shield taking the blow, with the tick that says it held */
  shield:'M12 3.2l7 2.8v5.4c0 4.1-2.8 7.4-7 8.8-4.2-1.4-7-4.7-7-8.8V6z@M9 12.1l2.1 2.1 4-4.1',
  printer:'M6 8V3.5h12V8@M5 19.5h14v-9H5z@M7.5 14.5h9v6h-9z@M16.5 11h.01',
  cloud:'M6.2 18.5h11.2a4.1 4.1 0 0 0 .4-8.2A6.2 6.2 0 0 0 6 11.6a3.5 3.5 0 0 0 .2 6.9z',
  lock:'M6.5 11h11v9.5h-11z@M8.8 11V7.7a3.2 3.2 0 0 1 6.4 0V11@M12 15v2',
  warning:'M12 3.5l9 16H3z@M12 9v4.5@M12 16.8h.01',
  check:'M5 12.5l4.2 4.2L19 7',
  sleep:'M20 14.8A8.6 8.6 0 1 1 9.7 3.9a6.7 6.7 0 0 0 10.8 10.9z@M3.5 5.5h3M2.5 8.5h4',
  speaker:'M4 10h4l5-4v12l-5-4H4z@M16.5 9.2a4 4 0 0 1 0 5.6@M19 6.8a7.4 7.4 0 0 1 0 10.4',
  play:'M8.5 5.5l9 6.5-9 6.5z',
  pause:'M9 6v12M15 6v12',

  /* The last four, with asclepius, amphora, olive and lamp above, were the
     profile emblems. Nothing calls them any more — profiles wear painted
     portraits now (see AVATARS) — and they are kept only because a line
     emblem is the obvious fallback if the portraits ever have to go, and
     redrawing eight glyphs to this grammar costs more than 1.5 KB does. */
  owl:'M6 8.6V4.2l3.6 2.6@M18 8.6V4.2l-3.6 2.6'
    +'@M12 6.4c-3.9 0-6 2.8-6 6.5C6 17.1 8.7 21 12 21s6-3.9 6-8.1c0-3.7-2.1-6.5-6-6.5z'
    +'@M9.6 11.6m-1.7 0a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0'
    +'@M14.4 11.6m-1.7 0a1.7 1.7 0 1 0 3.4 0a1.7 1.7 0 1 0-3.4 0'
    +'@M12 13.6l-1.1 1.6h2.2z',
  /* The arms scroll OUTWARD at the top and the strings are few. Three earlier
     drafts failed the only test that matters: a lyre whose arms bow inward
     reads as a purse, and one with the strings filled in reads as a basket or
     a barrel. The open top is what says instrument at 35px. */
  lyre:'M8.2 19h7.6'
     +'@M8.6 19V9.4c0-2.6-1-4-2.8-4.2-1.4-.1-2.2 1-1.8 2.6'
     +'@M15.4 19V9.4c0-2.6 1-4 2.8-4.2 1.4-.1 2.2 1 1.8 2.6'
     +'@M8.6 8.4h6.8'
     +'@M10.9 8.8V19M13.1 8.8V19',
  column:'M4.4 21h15.2@M6.4 21v-1.8h11.2V21'
       +'@M7.8 19.2V8.8M10.6 19.2V8.8M13.4 19.2V8.8M16.2 19.2V8.8'
       +'@M6.6 8.8c.7-1.3 1.2-2.3 1.2-3.4h8.4c0 1.1.5 2.1 1.2 3.4z'
       +'@M4.8 5.4h14.4V3.2H4.8z',
  mask:'M5.4 5.4h13.2c0 6.8-1.2 10.6-3 12.8-1.5 1.9-3 2.6-3.6 2.6s-2.1-.7-3.6-2.6C6.6 16 5.4 12.2 5.4 5.4z'
     +'@M8.2 10c.7-1.2 2.4-1.2 3.1 0-.7 1.2-2.4 1.2-3.1 0z'
     +'@M12.7 10c.7-1.2 2.4-1.2 3.1 0-.7 1.2-2.4 1.2-3.1 0z'
     +'@M9.8 15.2c1.4.9 3 .9 4.4 0'
};
/* `@` splits one icon into several subpaths — it keeps the map readable and
   avoids repeating the <path> wrapper for every circle. */
