import bpy, sys, os, json
HERE = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her'
sys.path.insert(0, HERE)
import face_rig as FR
R = 'D:/scratch 2026/her-c2/face9-refute/t'
bpy.ops.wm.open_mainfile(filepath=FR.BLEND)
sc = bpy.context.scene; cam = bpy.data.objects['cam']; arm = bpy.data.objects['face_rig']
FR.cycles_cpu(sc, 16); sc.cycles.samples = 16; sc.render.use_persistent_data = False
for o in bpy.data.objects:
    if o.name.split('_')[0] in ('leg', 'sandal', 'skirt', 'waist', 'arm', 'glove'): o.hide_render = True
r = sc.render
def shot(n, st, tgt, d, rx, ry):
    FR.pose_state(arm, st); FR.cam_at(cam, tgt, 0, d); bpy.context.view_layer.update()
    r.resolution_x, r.resolution_y = rx, ry; r.filepath = R + '/' + n + '.png'
    bpy.ops.render.render(write_still=True); print('SHOT', n, flush=True)
P = FR.preset_state; S = P('surprise')
sur = [('surprise', S)]
for m in 'BEX':
    st = dict(S); st['keys'] = dict(S['keys'], **{m: 1.0}); sur.append(('surprise+' + m, st))
for a in FR.PRESETS:
    if a != 'surprise': sur.append((a + '_5050_surprise', FR.lerp_state(P(a), S, 0.5)))
json.dump([n for n, _ in sur], open(R + '/_sur.json', 'w'))
for n, st in sur:
    shot('sf_' + n, st, (0, -0.1, 0.74), 1.0, 440, 420)
    shot('sm_' + n, st, (0, -0.1, 0.61), 0.62, 360, 240)
for k in ('AU15_lip_corner_depressor_L', 'AU15_lip_corner_depressor_R', 'AU20_lip_stretcher_L', 'AU20_lip_stretcher_R', 'AU17_chin_raiser'):
    shot('k_' + k, dict(keys={k: 1.0}), (0, -0.1, 0.61), 0.62, 360, 240)
shot('k_AU17_face', dict(keys={'AU17_chin_raiser': 1.0}), (0, -0.1, 0.74), 1.0, 440, 420)
for n in ('sad', 'frown_concern'):
    shot('p_' + n, P(n), (0, -0.1, 0.74), 1.0, 440, 420)
for n, st in (('eye_lookup_blink05', dict(look=(0, 40), lid_up={'L': .5, 'R': .5})),
              ('eye_sad', P('sad')), ('eye_frown', P('frown_concern')),
              ('eye_AU7L_up40', dict(keys={'AU7_lid_tightener_L': 1}, look=(0, 40), lid_lo={'L': 0.23}))):
    shot(n, st, (0, -0.1, 0.86), 0.95, 760, 400)
print('RND_DONE')
