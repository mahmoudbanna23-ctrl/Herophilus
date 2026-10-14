import json, os
D = 'D:/scratch 2026/her-c2/face6'
for sd in ('29', '4242', '777', '1234'):
    p = os.path.join(D, 'checks_face.json' if sd == '29' else 'checks_face_seed%s.json' % sd)
    if not os.path.exists(p):
        print(sd, 'MISSING'); continue
    d = json.load(open(p))
    r = d.get('random_500', {})
    print('seed', sd, {k: v for k, v in r.items() if not isinstance(v, (list, dict)) or k.startswith('worst')})
    print('  runtime', d.get('runtime_formulas_vs_blender_max_abs'), 'neutral_px', d.get('neutral_pixels'),
          'magenta', d.get('render_magenta_pupil_px'))
    if sd == '29':
        print('  toga', d.get('preset_toga_clear_mm'))
        for k, v in d.items():
            if k.startswith('summary'):
                print(' ', k, json.dumps(v)[:1500])
        g = d.get('glb', {})
        print('  glb', g.get('import'), g.get('morph_count'), g.get('missing'), g.get('bones', g.get('bone_count')))
