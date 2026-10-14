# arm_shots.py - rig 5 arm diagnosis / review tiles + arm measurements.
#   blender -b <her-rigN.blend> --python arm_shots.py -- --tag rig4 [--fwd F --back F --wtop F --wside F]
# Renders rest / walk arm fwd / walk arm back / wave top / wave side x front, side (her right), three-quarter,
# tight on the upper body (camera follows the pelvis), to rig5/_arms/<tag>_<pose>_<view>.png, and prints
# the arm bone frames and joint angles at those frames to rig5/_arms/<tag>_probe.json.
import bpy, json, math, os, sys
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
opt = lambda n, d: argv[argv.index(n) + 1] if n in argv else d
TAG = opt('--tag', 'rig4')
OUT = 'D:/scratch 2026/her-c2/rig5/_arms'
os.makedirs(OUT, exist_ok=True)
NORENDER = '--norender' in argv
scene = bpy.context.scene; arm = bpy.data.objects['her_rig']; cam = bpy.data.objects['cam']
meta = json.loads(arm['rig_meta'])
REST = {b.name: b.matrix_local.copy() for b in arm.data.bones}
pb = arm.pose.bones

def wmat(n):
    return arm.matrix_world @ pb[n].matrix

def vec(v):
    return [round(x, 4) for x in v]

# walk extremes of the R arm: wrist forward/back relative to the pelvis (frames 31..91)
def wrist_rel(f, S='R'):
    scene.frame_set(f)
    return (wmat('hand_' + S).translation - wmat('pelvis').translation)
fr = range(31, 92)
ys = {f: wrist_rel(f).y for f in fr}
FWD = int(opt('--fwd', str(min(ys, key=ys.get))))      # her front is -y
BACK = int(opt('--back', str(max(ys, key=ys.get))))
WTOP = int(opt('--wtop', '140')); WSIDE = int(opt('--wside', '137'))
POSES = [('rest', None), ('swing_fwd', FWD), ('swing_back', BACK), ('wave_top', WTOP), ('wave_side', WSIDE)]

probe = {'frames': dict(POSES), 'rest': {}, 'pose': {}}
for S in 'RL':
    for n in ('clavicle_', 'shoulder_', 'upperarm_', 'forearm_', 'forearm_tw1_', 'forearm_tw2_', 'hand_', 'fingers_'):
        if n + S in REST:
            M = REST[n + S]
            probe['rest'][n + S] = {'head': vec(M.translation), 'tail': vec(arm.data.bones[n + S].tail_local),
                                    'x': vec(M.col[0].to_3d()), 'y': vec(M.col[1].to_3d()),
                                    'z': vec(M.col[2].to_3d()), 'mode': pb[n + S].rotation_mode}
    # arm mesh: centroid of each 5 mm slice along the arm, and whether that slice is inside her disc
    ob = bpy.data.objects['arm_' + S]; D = meta['disc']
    sh = REST['upperarm_' + S].translation; ax = (arm.data.bones['upperarm_' + S].tail_local - sh).normalized()
    bins = {}
    for v in ob.data.vertices:
        k = int(((v.co - sh).dot(ax)) // 0.005)
        ins = (v.co.x / D['RX']) ** 2 + ((v.co.z - D['ZC']) / D['RZ']) ** 2 < 1.0 and abs(v.co.y) < D['T'] / 2
        bins.setdefault(k, []).append((v.co.copy(), ins))
    sl = []
    for k in sorted(bins):
        c = sum((p for p, _ in bins[k]), Vector()) / len(bins[k])
        sl.append([k * 5, vec(c), round(sum(i for _, i in bins[k]) / len(bins[k]), 2), len(bins[k])])
    probe['rest']['slices_' + S] = sl

def ang(a, b):
    return math.degrees(a.angle(b)) if a.length and b.length else 0.0
for lab, f in POSES:
    if f is None:
        continue
    scene.frame_set(f); d = {}
    for S in 'RL':
        U = wmat('upperarm_' + S); Fm = wmat('forearm_' + S); H = wmat('hand_' + S); C = wmat('head')
        uy = U.col[1].to_3d().normalized(); fy = Fm.col[1].to_3d().normalized(); hy = H.col[1].to_3d().normalized()
        down = -C.col[1].to_3d().normalized()
        palm = -(H.col[2].to_3d().normalized())
        d[S] = {'elevation_from_down': round(ang(uy, down), 1), 'elbow_flex': round(ang(uy, fy), 1),
                'wrist_bend': round(ang(fy, hy), 1), 'upper_dir': vec(uy), 'fore_dir': vec(fy), 'hand_dir': vec(hy),
                'hand_z': vec(H.col[2].to_3d().normalized()), 'hand_x': vec(H.col[0].to_3d().normalized()),
                'elbow_w': vec(Fm.translation), 'wrist_w': vec(H.translation), 'shoulder_w': vec(U.translation)}
        for n in ('upperarm_', 'forearm_', 'hand_'):
            d[S]['euler_' + n] = [round(math.degrees(a), 1) for a in pb[n + S].rotation_euler]
    probe['pose'][lab] = d
json.dump(probe, open(os.path.join(OUT, '%s_probe.json' % TAG), 'w'), indent=1)
print('ARMS probe frames', dict(POSES))
if NORENDER:
    raise SystemExit

def set_cam(yaw_deg, target, d=float(opt('--d', '2.6')), up=0.12, lens=85):
    yaw = math.radians(yaw_deg); cam.data.lens = lens
    cam.location = target + Vector((d * math.sin(yaw), -d * math.cos(yaw), up))
    cam.rotation_euler = (target - cam.location).to_track_quat('-Z', 'Y').to_euler()

scene.render.resolution_x = scene.render.resolution_y = 520
scene.eevee.taa_render_samples = 12
for lab, f in POSES:
    if f is None:
        arm.data.pose_position = 'REST'; scene.frame_set(0)
    else:
        arm.data.pose_position = 'POSE'; scene.frame_set(f)
    pv = wmat('pelvis').translation
    tgt = Vector((pv.x, pv.y, 0.66))
    for view, yaw in (('front', 0), ('side', -90), ('tq', -45)):
        set_cam(yaw, tgt)
        scene.render.filepath = os.path.join(OUT, '%s_%s_%s.png' % (TAG, lab, view))
        bpy.ops.render.render(write_still=True)
arm.data.pose_position = 'POSE'
print('ARMS done')
