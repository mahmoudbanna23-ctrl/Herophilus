/* Rebuilds the single THEORY map the app reads. Load after the per-subject files. */
const T_ALL = Object.assign({},
  window.T_ENT    || {},
  window.T_PEDS   || {},
  window.T_OPHTHO || {},
  window.T_NEURO  || {}
);

/* Theory is keyed by chapter id and carries no module of its own, so the locked
   subjects' chapter ids come from MODULES.

   ⚠️ THE ONE-LINE FLIP IS THE NEXT LINE BUT ONE. If the notes should ship as
   reading while the questions stay locked, change `LOCKED_MODULES.forEach` to
   `[].forEach` and change nothing else — the questions stay locked, because
   questions.js reads the real list and this file does not touch it. */
const T_LOCKED = new Set();
LOCKED_MODULES.forEach(id => {
  const m = MODULES.find(x => x.id === id);
  if (!m) return;
  m.groups.forEach(g => g.chapters.forEach(c => T_LOCKED.add(c[0])));
});

const THEORY = {};
/* Chapter ids come from the selected term's tuples. Clearing the same object
   prevents notes from the previous profile or semester surviving a switch. */
function rebuildTheory(termId){
  Object.keys(THEORY).forEach(k=>{delete THEORY[k]});
  MODULES.filter(m=>m.term===termId).forEach(m=>{
    m.groups.forEach(g=>g.chapters.forEach(c=>{
      const k=c[0];
      if(!T_LOCKED.has(k)&&Object.prototype.hasOwnProperty.call(T_ALL,k))THEORY[k]=T_ALL[k];
    }));
  });
}
