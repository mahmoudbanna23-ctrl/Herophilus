/* Rebuilds the single QUESTIONS array the app reads. Load after the per-subject files.
   Free-text cases (type:'case') live in the same array so the quiz engine, SRS,
   search and progress counters pick them up with no special casing. */
const Q_ALL = [].concat(
  window.Q_ENT    || [],
  window.Q_PEDS   || [],
  window.Q_PEDS_EP || [],
  window.Q_PEDS_EP2 || [],
  window.Q_OPHTHO || [],
  window.Q_OPHTHO_EP || [],
  window.Q_OPHTHO_EP2 || [],
  window.Q_NEURO  || [],
  window.C_ENT    || [],
  window.C_PEDS   || [],
  window.C_OPHTHO || [],
  window.C_NEURO  || []
);

/* Questions are transcribed source by source, so on disk they arrive in reading
   order: every Ear question, then every Nose question, then the next bank. Sat
   in that order they would be practised in it — 250 ear questions before the
   first nose one, and every question from one bank before the next.

   So the array is shuffled. It is shuffled by HASHING EACH ID rather than by
   Math.random(), which matters for three reasons:

     - it is stable across reloads, so "question 40 of 300" means the same
       question tomorrow as it did today;
     - it is stable across devices, so cloud-synced progress lines up;
     - a question added later lands in the middle rather than on the end, so the
       order stays mixed as transcription continues and never needs re-shuffling
       when a module is finished.

   FNV-1a over the id, THEN a murmur3 finalizer. The finalizer is not optional:
   ids differ only in their last characters, and plain FNV-1a moves the result
   by roughly 1% of the range for a one-character change, so entep-ear-211,
   212 and 213 came out adjacent — measured, not assumed. The finalizer
   avalanches that into a full spread; sequential ids now land a median of ~90
   positions apart. */
function qHash(s){
  let h = 0x811c9dc5;
  for(let i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) }
  h ^= h>>>16; h = Math.imul(h, 0x85ebca6b);
  h ^= h>>>13; h = Math.imul(h, 0xc2b2ae35);
  h ^= h>>>16; return h>>>0;
}
/* One filter, here, rather than fifteen at the call sites. Everything that
   shows a question to a student reads QUESTIONS — search, the review deck, the
   flagged list, the mock pool, every count — so holding a locked subject out
   here is what makes the lock hold on every route instead of only the front
   door, and keeps holding when something new starts reading this array. */
/* A profile is chosen after this script loads. Until its term is known there
   is no student-facing pool; rebuilding here keeps every reader on one policy. */
let QUESTIONS = [];
function rebuildQuestions(termId){
  const ids=new Set(MODULES.filter(m=>m.term===termId).map(m=>m.id));
  QUESTIONS = Q_ALL
    .filter(q => ids.has(q.module) && LOCKED_MODULES.indexOf(q.module) < 0)
    .map(q => ({q, k: qHash(q.id)}))
    .sort((a,b) => a.k - b.k || (a.q.id < b.q.id ? -1 : 1))
    .map(x => x.q);
}
