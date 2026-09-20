function toast(msg){
  const t=$('toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2500);
}
function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function md(s){
  if(!s)return '';
  let h=esc(s);
  h=h.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\*(.+?)\*/g,'<em>$1</em>');
  const lines=h.split('\n');let out='',tbl=[],para=[];
  const flushT=()=>{
    if(!tbl.length)return;
    out+=mdTable(tbl,'');tbl=[];
  };
  const flushP=()=>{if(para.length){out+='<p>'+para.join(' ')+'</p>';para=[]}};
  for(const ln of lines){
    if(ln.trim().startsWith('|')){flushP();tbl.push(ln);continue}
    flushT();
    if(!ln.trim()){flushP();continue}
    para.push(ln.trim());
  }
  flushT();flushP();
  return out;
}
function ring(pct,color,size){
  size=size||52;
  const r=(size-7)/2, c=2*Math.PI*r;
  return `<div class="ring" style="width:${size}px;height:${size}px">
    <svg width="${size}" height="${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#e5e2f5" stroke-width="6"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="6"
        stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-pct/100)}"/>
    </svg><div class="rv">${Math.round(pct)}<span style="font-size:8px">%</span></div></div>`;
}
function confetti(){
  const cols=['#b4472f','#ffc94a','#6d4c7d','#2e5f8a','#5c7a52'];
  for(let i=0;i<44;i++){
    const d=document.createElement('div');
    d.className='confetti';
    d.style.left=Math.random()*100+'vw';
    d.style.background=cols[i%cols.length];
    d.style.animationDuration=(1.9+Math.random()*1.5)+'s';
    d.style.animationDelay=(Math.random()*.35)+'s';
    if(i%3===0)d.style.borderRadius='50%';
    document.body.appendChild(d);
    setTimeout(()=>d.remove(),4000);
  }
}

/* SRS */
const SRS=[1,3,7,21,60];
function scheduleSRS(qid,ok){
  const cur=S.srs[qid]||{lvl:0};
  cur.lvl = ok ? Math.min(cur.lvl+1,SRS.length-1) : 0;
  const d=new Date();d.setDate(d.getDate()+SRS[cur.lvl]);
  cur.due=isoLocal(d);
  S.srs[qid]=cur;
}
/* Guessed and unsure questions belong in the deck even when correct.
   Unsure used to be excluded here, which is what made the middle button of
   the confidence rating dead: it stored a 1 and nothing read it, so the
   question never came back and the toast promising it would was false.
   Confident is deliberately still out — that is what confident means.
   An old record saved before ratings existed has no conf at all, and
   undefined matches neither number, so it stays out exactly as before. */
function inDeck(q){
  if(!isAnswered(q.id))return false;
  if(!isCorrect(q.id))return true;
  const c=S.answers[q.id].conf;
  return c===0||c===1;
}
function deckAll(){return QUESTIONS.filter(inDeck)}
function dueNow(){
  const t=todayISO();
  return deckAll().filter(q=>{
    const s=S.srs[q.id];
    if(!s)return true;
    if(isCorrect(q.id)&&s.lvl>=SRS.length-1)return false;
    return s.due<=t;
  });
}
function streakCount(){
  const days=Object.keys(S.days).sort().reverse();
  if(!days.length)return 0;
  let n=0;const d=new Date();
  for(;;){
    const iso=isoLocal(d);
    if(S.days[iso]){n++;d.setDate(d.getDate()-1)}
    else if(iso===todayISO()){d.setDate(d.getDate()-1)}
    else break;
    if(n>400)break;
  }
  return n;
}
function markDayActive(){S.days[todayISO()]=true}




/* ============ THEORY ============ */
