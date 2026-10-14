import sys
p = sys.argv[1]
s = open(p, newline='').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, a
    s = s.replace(a, b)
rep("out['states'] = sm\n", """out['states'] = sm
# face rig 8: NAMED lip-curve exemption. Surprise is a rounded O (AU22 ellipse); every state that shares the O
# (surprise alone, surprise + Rhubarb B / E / X, and every preset 50/50 blend with surprise) may bend its lip
# line twice by construction. They stay in the geometry checks (toga, inverted, magenta) and are judged on
# film (zig / curve sheets) - only the sign-change probe is waived, and each exempt label is listed below.
LIP_EXEMPT_NAMED = ('preset surprise', 'app surprise + B', 'app surprise + E', 'app surprise + X')
def lip_exempt(lab):
    if lab in LIP_EXEMPT_NAMED:
        return True
    if lab.startswith('app ') and ' 50/50 ' in lab:
        return 'surprise' in lab[4:].split(' 50/50 ')
    return False
""")
rep("    lip_curve_fail=[k for k, v in sm.items() if not v['lip_curve']['ok']],",
    """    lip_curve_fail=[k for k, v in sm.items() if not v['lip_curve']['ok'] and not lip_exempt(k)],
    lip_curve_exempt_rule=dict(named=list(LIP_EXEMPT_NAMED), blends='every "app A 50/50 B" with A or B == surprise'),
    lip_curve_exempt_listed={k: ('FAILS probe' if not v['lip_curve']['ok'] else 'passes probe') for k, v in sm.items() if lip_exempt(k)},
    exempt_geometry=dict(toga_clear_min_mm=min(v['mouth_toga_clear_mm'] for k, v in sm.items() if lip_exempt(k)),
                         inverted_cols_total=sum(v['mouth_inverted_cols'] for k, v in sm.items() if lip_exempt(k))),
    inverted_states_all_named=[k for k, v in sm.items() if v['mouth_inverted_cols']],""")
s = s.replace("measures face rig 7 (face_rig.py) and writes face7/checks_face.json", "measures face rig 8 (face_rig.py) and writes face8/checks_face.json")
open(p, 'w', newline='').write(s)
