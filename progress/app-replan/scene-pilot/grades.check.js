/* grades.check.js — validates SCENE_GRADES. Node built-ins only (vm, fs, assert, path).
   Run: node progress/app-replan/scene-pilot/grades.check.js */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const file = path.join(__dirname, 'grades.js');
const src = fs.readFileSync(file, 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(src, sandbox, { filename: file });

const SCENE_GRADES = sandbox.SCENE_GRADES;
let passed = 0;
function check(label, cond) {
  assert.ok(cond, 'FAILED: ' + label);
  passed++;
}

check('SCENE_GRADES is an object', SCENE_GRADES && typeof SCENE_GRADES === 'object');

const REQUIRED_KEYS = ['dawn', 'day', 'dusk', 'night'];
const HEX_RE = /^#[0-9a-fA-F]{6}$/;
const ALLOWED_BLENDS = new Set(['color', 'soft-light', 'screen']);

check('all four keys present', REQUIRED_KEYS.every((k) => k in SCENE_GRADES));

for (const key of REQUIRED_KEYS) {
  const g = SCENE_GRADES[key];
  check(key + ': grade exists', g && typeof g === 'object');

  check(key + ': has ambient', g.ambient && typeof g.ambient === 'object');
  check(key + ': ambient.multiply is #rrggbb', HEX_RE.test(g.ambient.multiply));
  check(key + ': ambient.screen is #rrggbb', HEX_RE.test(g.ambient.screen));

  check(key + ': has window', g.window && typeof g.window === 'object');
  check(key + ': window.color is #rrggbb', HEX_RE.test(g.window.color));
  check(key + ': window.blend is allowed', ALLOWED_BLENDS.has(g.window.blend));
  check(
    key + ': window.opacity in [0,1]',
    typeof g.window.opacity === 'number' && g.window.opacity >= 0 && g.window.opacity <= 1
  );

  check(
    key + ': lamp in [0,1]',
    typeof g.lamp === 'number' && g.lamp >= 0 && g.lamp <= 1
  );
}

// night must be the identity grade: no darkening/lightening, no window tint.
const n = SCENE_GRADES.night;
check('night.ambient.multiply is #ffffff (identity)', n.ambient.multiply.toLowerCase() === '#ffffff');
check('night.ambient.screen is #000000 (identity)', n.ambient.screen.toLowerCase() === '#000000');
check('night.window.opacity is 0 (identity)', n.window.opacity === 0);
check('night.lamp is 1', n.lamp === 1);

console.log(passed + ' passed');
process.exit(0);
