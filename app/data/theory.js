/* Rebuilds the single THEORY map the app reads. Load after the per-subject files. */
const THEORY = Object.assign({},
  window.T_ENT    || {},
  window.T_PEDS   || {},
  window.T_OPHTHO || {},
  window.T_NEURO  || {}
);