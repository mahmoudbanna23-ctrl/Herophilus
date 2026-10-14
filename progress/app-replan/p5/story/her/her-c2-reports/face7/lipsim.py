# plain-python replica of the mouth keys (no caps): lip-curve probe on every app state
import sys, math, itertools
sys.path.insert(0, 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her')
import importlib
import face_rig as FR
class V:
    def __init__(s,t): s.x,s.y,s.z=t
    def copy(s): return V((s.x,s.y,s.z))
FR.Vector=lambda t: V(t)
import json
FR.AU15_FIT=json.load(open('D:/scratch 2026/her-c2/face6/face_rig_info.json'))['au15_fit']

def build():
    mk = {}
    for mname, fn in FR.MOUTH_PAIRED.items():
        for S, s in FR.SIDES:
            mk[mname + '_' + S] = FR.mouth_shape(fn, mask=lambda u, s=s: FR.sstep(-1.0, 1.0, s * u))
    for S, s in FR.SIDES:
        mk['AU15_lip_corner_depressor_' + S] = FR.mouth_shape(FR.au15_side(s, FR.AU15_FIT))
    for n, fn in FR.MOUTH_SINGLE.items():
        mk[n] = FR.mouth_shape(fn)
    mk['jaw_open'] = FR.mouth_shape(FR.jaw_open_fn(FR.JAW_DROP))
    base = FR.mouth_shape(lambda u, c: {})
    D = {n: [(c.x - b.x, c.y - b.y, c.z - b.z) for c, b in zip(co, base)] for n, co in mk.items()}
    for L, rec in FR.MOUTH_RECIPES.items():
        d = [[0, 0, 0] for _ in base]
        for k, w in rec.items():
            for i, t in enumerate(D[k]):
                for a in range(3):
                    d[i][a] += t[a] * w
        D[L] = [tuple(x) for x in d]
    return base, D

ATT = 1.0
def lines(base, D, state):
    w = dict(state.get('keys', {}))
    if state.get('jaw'):
        w['jaw_open'] = w.get('jaw_open', 0) + state['jaw']
    fun = min(1.0, sum(w.get(k_, 0) + sum(FR.MOUTH_RECIPES[L].get(k_, 0) * w.get(L, 0) for L in FR.MOUTH_RECIPES) for k_ in ('AU22_lip_funneler', 'AU18_lip_pucker')))
    att = 1.0 - ATT * fun
    for k in list(w):
        if k.startswith(('AU12_', 'AU14_', 'AU24_', 'AU23_', 'AU17_', 'AU15_')): w[k] *= att
    co = [[b.x, b.y, b.z] for b in base]
    for k, wt in w.items():
        if k in D:
            for i, t in enumerate(D[k]):
                for a in range(3):
                    co[i][a] += t[a] * wt
    top = [(co[c * 5][0], co[c * 5][2]) for c in range(FR.NU + 1)]
    bot = [(co[c * 5 + 4][0], co[c * 5 + 4][2]) for c in range(FR.NU + 1)]
    return top, bot

def app_states():
    pn = list(FR.PRESETS); out = {}
    for p in pn:
        out['preset ' + p] = FR.preset_state(p)
        for vm in FR.MOUTH_RECIPES:
            st = dict(FR.preset_state(p)); st['keys'] = dict(st['keys'], **{vm: 1.0}); out['%s + %s' % (p, vm)] = st
    for i, a in enumerate(pn):
        for b in pn[i + 1:]:
            out['%s 50/50 %s' % (a, b)] = FR.lerp_state(FR.preset_state(a), FR.preset_state(b), 0.5)
    for vm in FR.MOUTH_RECIPES:
        out['viseme ' + vm] = dict(keys={vm: 1.0})
    for k in list(D_KEYS):
        out['key ' + k] = dict(keys={k: 1.0})
    return out

if __name__ == '__main__':
    base, D = build()
    D_KEYS = list(D)
    fails = []
    for lab, st in app_states().items():
        top, bot = lines(base, D, st)
        r = FR.curve_probe(top, bot, 0)
        if not r['pass']:
            fails.append(lab); print('FAIL', lab, {k: (v['curv_sign_changes'], v['hooks']) for k, v in r.items() if k != 'pass'})
    print(len(fails), 'fails of', len(app_states()))
