"""Kill test, round two: real depth in the background, motion in the air, finished render.

Run:  blender --background --python kill_test2.py
Env:  KT_PREVIEW=1  -> 3 low-res frames only (round2/preview), no clip
      KT_SAMPLES    -> Eevee samples (default 64)
      KT_TOWER      -> 'v1' or 'v2' to force the tower plate (default: v2 if the file exists, else v1)

Layers (all emission-only, all projected from camera P, so they agree exactly at frame P):
  sky card (3500) / water plane (tilted so its horizon is plate row 128) / shore strip (per-column depth
  = the water plane's depth at the shoreline row, so it meets the plane exactly) / tower solids /
  3 mist planes (noise alpha, drifting) / 4 additive fire glows (flicker) / water shimmer in the shader.
Everything lands in OUT below.
"""
import bpy, math, os, sys, glob, shutil, subprocess, json, time
import numpy as np
from mathutils import Vector, Matrix
from bpy_extras.object_utils import world_to_camera_view

OUT = "D:/scratch 2026/city-kill/round2"
PAINT = "D:/claude os/Medical school/Herophilus-redesign/progress/redesign/paint"
FULL = PAINT + "/kill-pharos-dark.png"
CLEAN = PAINT + "/kill-pharos-dark-clean.png"
V2 = PAINT + "/kill-pharos-dark-v2.png"
PREVIEW = os.environ.get("KT_PREVIEW") == "1"
SAMPLES = int(os.environ.get("KT_SAMPLES", "16" if PREVIEW else "64"))
NFR = 72
RES = (720, 450) if PREVIEW else (1440, 900)
FRAMES = [0, 35, 71] if PREVIEW else list(range(NFR))
if PREVIEW:
    OUT_FR = OUT + "/preview"
else:
    OUT_FR = OUT + "/frames"
os.makedirs(OUT_FR, exist_ok=True)

BW, BH = 768.0, 512.0
LENS_P = 35.0
F = LENS_P / 36.0 * BW
PITCH_P = 8.0
HC = 40.0                         # P height above the water (P is at z=40)
HORIZON_ROW = 128.0               # plate row where the water plane meets the sky (768 scale)
A_TILT = (BH / 2 - HORIZON_ROW) / F

MOVE_DIR = Vector((10.0, -5.0, -4.0))
S_FRAC, E_FRAC = -0.7, 0.3
AIM_TX, AIM_TY = -0.05, 0.07
LENS_R = 50.0


def log(*a):
    print("KT|", *a, flush=True)


def smoothstep(s):
    return s * s * (3 - 2 * s)


# ---------------------------------------------------------------- scene
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
for eng in ('BLENDER_EEVEE', 'BLENDER_EEVEE_NEXT'):
    try:
        scene.render.engine = eng
        break
    except TypeError:
        continue
try:
    scene.eevee.taa_render_samples = SAMPLES
except Exception as e:
    log("samples not set", e)
scene.render.filter_size = 1.5
scene.view_settings.view_transform = 'Standard'
try:
    scene.view_settings.look = 'None'
except Exception:
    pass
scene.render.dither_intensity = 1.0
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_depth = '16'

world = bpy.data.worlds.new("W")
scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes.get("Background")
bg.inputs[0].default_value = (1.0, 0.0, 1.0, 1.0)
bg.inputs[1].default_value = 1.0

pdata = bpy.data.cameras.new("P")
pdata.lens = LENS_P
pdata.sensor_width = 36.0
pdata.sensor_height = 24.0
pdata.sensor_fit = 'HORIZONTAL'
pdata.clip_start = 0.5
pdata.clip_end = 30000.0
P = bpy.data.objects.new("P", pdata)
scene.collection.objects.link(P)
P.location = (0.0, 0.0, 40.0)
P.rotation_euler = (math.radians(90.0 - PITCH_P), 0.0, 0.0)
bpy.context.view_layer.update()
PM = P.matrix_world.copy()
M3 = PM.to_3x3()
P_C = PM.translation.copy()
P_RIGHT = M3 @ Vector((1, 0, 0))
P_UP = M3 @ Vector((0, 1, 0))
P_FWD = M3 @ Vector((0, 0, -1))


def loc(x, y, d):
    return PM @ Vector((x, y, -d))


def px_to_loc(px, py, d):
    return ((px - BW / 2) / F * d, -(py - BH / 2) / F * d, d)


# ---------------------------------------------------------------- node helpers
UPDATERS = []          # callables(frame_index) run before each render


def nd(nt, kind, **kw):
    n = nt.nodes.new(kind)
    for k, v in kw.items():
        setattr(n, k, v)
    return n


def vmath(nt, op, a=None, b=None, scale=None):
    n = nd(nt, 'ShaderNodeVectorMath', operation=op)
    if a is not None:
        if isinstance(a, tuple):
            n.inputs[0].default_value = a
        else:
            nt.links.new(a, n.inputs[0])
    if b is not None:
        if isinstance(b, tuple):
            n.inputs[1].default_value = b
        else:
            nt.links.new(b, n.inputs[1])
    if scale is not None:
        if isinstance(scale, float):
            n.inputs[3].default_value = scale
        else:
            nt.links.new(scale, n.inputs[3])
    return n


def fmath(nt, op, a=None, b=None):
    n = nd(nt, 'ShaderNodeMath', operation=op)
    for i, v in enumerate((a, b)):
        if v is None:
            continue
        if isinstance(v, float):
            n.inputs[i].default_value = v
        else:
            nt.links.new(v, n.inputs[i])
    return n


def maprange(nt, val, a0, a1, b0=0.0, b1=1.0):
    n = nd(nt, 'ShaderNodeMapRange', interpolation_type='SMOOTHSTEP', clamp=True)
    if isinstance(val, float):
        n.inputs[0].default_value = val
    else:
        nt.links.new(val, n.inputs[0])
    n.inputs[1].default_value = a0
    n.inputs[2].default_value = a1
    n.inputs[3].default_value = b0
    n.inputs[4].default_value = b1
    return n


def set_blended(m):
    for attr, val in (('surface_render_method', 'BLENDED'), ('blend_method', 'BLEND')):
        try:
            setattr(m, attr, val)
            break
        except Exception:
            continue
    try:
        m.use_backface_culling = False
    except Exception:
        pass


def proj_chain(nt, path):
    """P-projection of an image. Returns dict of the useful sockets."""
    img = bpy.data.images.load(path)
    img.colorspace_settings.name = 'sRGB'
    geo = nd(nt, 'ShaderNodeNewGeometry')
    sub = vmath(nt, 'SUBTRACT', geo.outputs['Position'], tuple(P_C))
    dots = []
    for vec in (P_RIGHT, P_UP, P_FWD):
        d = vmath(nt, 'DOT_PRODUCT', sub.outputs['Vector'], tuple(vec))
        dots.append(d)
    divs = []
    for k in (0, 1):
        dv = fmath(nt, 'DIVIDE', dots[k].outputs['Value'], dots[2].outputs['Value'])
        divs.append(dv)
    mads = []
    for k, scale in ((0, LENS_P / 36.0), (1, LENS_P / 24.0)):
        mad = nd(nt, 'ShaderNodeMath', operation='MULTIPLY_ADD')
        nt.links.new(divs[k].outputs[0], mad.inputs[0])
        mad.inputs[1].default_value = scale
        mad.inputs[2].default_value = 0.5
        mads.append(mad)
    comb = nd(nt, 'ShaderNodeCombineXYZ')
    nt.links.new(mads[0].outputs[0], comb.inputs['X'])
    nt.links.new(mads[1].outputs[0], comb.inputs['Y'])
    tex = nd(nt, 'ShaderNodeTexImage', image=img, interpolation='Linear', extension='EXTEND')
    nt.links.new(comb.outputs['Vector'], tex.inputs['Vector'])
    return {"color": tex.outputs['Color'], "depth": dots[2].outputs['Value'],
            "v": mads[1].outputs[0], "pos": geo.outputs['Position']}


HAZE = (0.03, 0.055, 0.11)


def proj_material(name, path, haze_const=0.0, haze_depth=0.0, fade=None, shimmer=0.0):
    """haze_const: flat mix toward HAZE. haze_depth: max mix, ramps with depth 80..1500.
    fade: (row_zero, row_one) in 768 plate rows -> alpha ramps 0..1 as the row goes zero->one (BLENDED).
    shimmer: +-fraction brightness noise on bright streaks (water)."""
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.clear()
    c = proj_chain(nt, path)
    col = c["color"]
    if shimmer > 0:
        mp = nd(nt, 'ShaderNodeMapping', vector_type='POINT')
        nt.links.new(c["pos"], mp.inputs['Vector'])
        mp.inputs['Scale'].default_value = (0.40, 1.60, 0.40)
        nz = nd(nt, 'ShaderNodeTexNoise', noise_dimensions='4D')
        nt.links.new(mp.outputs['Vector'], nz.inputs['Vector'])
        nz.inputs['Scale'].default_value = 1.0
        nz.inputs['Detail'].default_value = 2.0
        nz.inputs['Roughness'].default_value = 0.5

        def upd(i, nz=nz):
            nz.inputs['W'].default_value = i / 24.0 * 0.9
        UPDATERS.append(upd)
        bw = nd(nt, 'ShaderNodeRGBToBW')
        nt.links.new(col, bw.inputs['Color'])
        mask = maprange(nt, bw.outputs['Val'], 0.10, 0.40)
        near = maprange(nt, c["depth"], 400.0, 90.0)           # 1 near, 0 far: no aliasing flicker in the distance
        mm = fmath(nt, 'MULTIPLY', mask.outputs[0], near.outputs[0])
        centred = fmath(nt, 'SUBTRACT', nz.outputs['Fac'], 0.5)
        amp = fmath(nt, 'MULTIPLY', centred.outputs[0], 2.0 * shimmer)
        mod = fmath(nt, 'MULTIPLY', amp.outputs[0], mm.outputs[0])
        gain = fmath(nt, 'ADD', mod.outputs[0], 1.0)
        col = vmath(nt, 'SCALE', col, scale=gain.outputs[0]).outputs['Vector']
    if haze_const > 0 or haze_depth > 0:
        if haze_depth > 0:
            amt = maprange(nt, c["depth"], 80.0, 1500.0, 0.0, haze_depth).outputs[0]
        else:
            amt = float(haze_const)
        diff = vmath(nt, 'SUBTRACT', HAZE, col)
        part = vmath(nt, 'SCALE', diff.outputs['Vector'], scale=amt)
        col = vmath(nt, 'ADD', col, part.outputs['Vector']).outputs['Vector']
    em = nd(nt, 'ShaderNodeEmission')
    nt.links.new(col, em.inputs['Color'])
    out = nd(nt, 'ShaderNodeOutputMaterial')
    if fade:
        a = maprange(nt, c["v"], 1.0 - fade[0] / BH, 1.0 - fade[1] / BH)
        tr = nd(nt, 'ShaderNodeBsdfTransparent')
        mix = nd(nt, 'ShaderNodeMixShader')
        nt.links.new(a.outputs[0], mix.inputs[0])
        nt.links.new(tr.outputs[0], mix.inputs[1])
        nt.links.new(em.outputs[0], mix.inputs[2])
        nt.links.new(mix.outputs[0], out.inputs['Surface'])
        set_blended(m)
    else:
        nt.links.new(em.outputs[0], out.inputs['Surface'])
    return m


def add_mesh(name, verts, faces, mat):
    """world-space verts; object origin at the centroid (blended sorting uses the origin)."""
    cen = sum((Vector(v) for v in verts), Vector()) / len(verts)
    me = bpy.data.meshes.new(name)
    me.from_pydata([tuple(Vector(v) - cen) for v in verts], [], faces)
    me.update()
    ob = bpy.data.objects.new(name, me)
    ob.location = cen
    scene.collection.objects.link(ob)
    ob.data.materials.append(mat)
    return ob


def add_plane(name, cx, cy, d, w, h, mat):
    """flat quad facing P at P-local (cx, cy, depth d); local XY plane, Generated coords 0..1"""
    me = bpy.data.meshes.new(name)
    me.from_pydata([(-w / 2, -h / 2, 0), (w / 2, -h / 2, 0), (w / 2, h / 2, 0), (-w / 2, h / 2, 0)], [], [[0, 1, 2, 3]])
    me.update()
    ob = bpy.data.objects.new(name, me)
    ob.matrix_world = PM @ Matrix.Translation((cx, cy, -d))
    scene.collection.objects.link(ob)
    ob.data.materials.append(mat)
    return ob


# ---------------------------------------------------------------- pixel helpers
def load_px(path):
    img = bpy.data.images.load(path, check_existing=False)
    img.colorspace_settings.name = 'Non-Color'
    w, h = img.size
    a = np.empty(w * h * 4, dtype=np.float32)
    img.pixels.foreach_get(a)
    bpy.data.images.remove(img)
    return a.reshape(h, w, 4)[::-1].copy()


def save_rgb(arr, path):
    h, w = arr.shape[:2]
    img = bpy.data.images.new("tt", w, h, alpha=True)
    img.colorspace_settings.name = 'Non-Color'
    rgba = np.ones((h, w, 4), dtype=np.float32)
    rgba[..., :3] = arr[..., :3]
    img.pixels.foreach_set(rgba[::-1].ravel())
    img.filepath_raw = path
    img.file_format = 'PNG'
    img.save()
    bpy.data.images.remove(img)


def magenta_count(a):
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    return int(((r > 0.6) & (g < 0.25) & (b > 0.6)).sum())


def dil(m, r):
    m = m.copy()
    for _ in range(r):
        n = m.copy()
        n[1:] |= m[:-1]; n[:-1] |= m[1:]; n[:, 1:] |= m[:, :-1]; n[:, :-1] |= m[:, 1:]
        n[1:, 1:] |= m[:-1, :-1]; n[:-1, :-1] |= m[1:, 1:]; n[1:, :-1] |= m[:-1, 1:]; n[:-1, 1:] |= m[1:, :-1]
        m = n
    return m


def ero(m, r):
    return ~dil(~m, r)


def fill_out(img, known, iters=90):
    """grow the known colours outward (nearest-first, 8-neighbour) over the unknown pixels"""
    img = img.copy()
    k = known.copy()
    for _ in range(iters):
        if k.all():
            break
        new = np.zeros_like(k)
        acc = np.zeros(img.shape, dtype=np.float32)
        cnt = np.zeros(k.shape, dtype=np.float32)
        for dy in (-1, 0, 1):
            for dx in (-1, 0, 1):
                if dy == 0 and dx == 0:
                    continue
                sk = np.roll(np.roll(k, dy, 0), dx, 1)
                si = np.roll(np.roll(img, dy, 0), dx, 1)
                use = sk & ~k
                acc += si * use[..., None]
                cnt += use
        new = cnt > 0
        img[new] = acc[new] / cnt[new][:, None]
        k = k | new
    return img


# ---------------------------------------------------------------- tower solids (same fit as round one)
tmp = bpy.data.materials.new("tmp_white")
tmp.use_nodes = True
tmp.node_tree.nodes.clear()
_e = tmp.node_tree.nodes.new('ShaderNodeEmission')
_o = tmp.node_tree.nodes.new('ShaderNodeOutputMaterial')
tmp.node_tree.links.new(_e.outputs[0], _o.inputs['Surface'])


def ring_prism(name, top, bot, mat, cap=True):
    k = len(top)
    verts = [loc(x, y, d) for (x, y, d) in top] + [loc(x, y, d) for (x, y, d) in bot]
    faces = [[i, (i + 1) % k, k + (i + 1) % k, k + i] for i in range(k)]
    if cap:
        faces.append(list(range(k)))
    return add_mesh(name, verts, faces, mat)


dN = 60.0
dL, dR = 67.9, 72.7
Nt = px_to_loc(145, 268, dN); Lt = px_to_loc(33, 243, dL); Rt = px_to_loc(268, 245, dR)
Nb = px_to_loc(140, 700, dN); Lb = px_to_loc(7, 700, dL); Rb = px_to_loc(288, 700, dR)


def fourth(L, R, N):
    return (L[0] + R[0] - N[0], L[1] + R[1] - N[1], L[2] + R[2] - N[2])


Ft = fourth(Lt, Rt, Nt); Fb = fourth(Lb, Rb, Nb)
square = ring_prism("tower_square", [Nt, Rt, Ft, Lt], [Nb, Rb, Fb, Lb], tmp)
cx = (Lt[0] + Rt[0]) / 2.0
cd = (Lt[2] + Rt[2]) / 2.0
th0 = math.atan2(Nt[2] - cd, Nt[0] - cx)


def ring_pts(r, y, n, th=0.0):
    return [(cx + r * math.cos(th + 2 * math.pi * i / n), y, cd + r * math.sin(th + 2 * math.pi * i / n))
            for i in range(n)]


def ytop(py, d):
    return (BH / 2 - py) / F * d


y_oct0, y_oct1 = 0.6, ytop(150, cd)
r_oct = (64.5 / F * cd) / 0.985 * 1.02
octa = ring_prism("tower_octagon", ring_pts(r_oct, y_oct1, 8, th0), ring_pts(r_oct, y_oct0, 8, th0), tmp)
y_cyl = ytop(40, cd)
r_cyl = 45.5 / F * cd
r_cap = 47.5 / F * cd
cyl = ring_prism("tower_round", ring_pts(r_cyl, y_cyl, 32), ring_pts(r_cyl, y_oct1 - 0.5, 32), tmp)
y_dome = ytop(10, cd)
# dome as a lathe following the painted profile (768-plate row, radius in plate px): round one's plain cone was far
# fatter than the painted dome and carried sky on its flanks. Includes the stem and the finial ball.
DOME_PROFILE = [(42, 47.5), (38, 41.0), (33, 31.0), (28, 20.0), (24, 9.0), (21, 3.5), (14, 3.0),
                (12, 7.0), (6.5, 8.0), (1.5, 5.0), (0.3, 1.0)]


def lathe(name, prof, n, mat):
    verts = []
    for (py, rp) in prof:
        y = ytop(py, cd)
        r = rp / F * cd
        verts += [loc(cx + r * math.cos(2 * math.pi * k / n), y, cd + r * math.sin(2 * math.pi * k / n)) for k in range(n)]
    faces = []
    for a in range(len(prof) - 1):
        for k in range(n):
            faces.append([a * n + k, a * n + (k + 1) % n, (a + 1) * n + (k + 1) % n, (a + 1) * n + k])
    faces.append(list(range((len(prof) - 1) * n, len(prof) * n)))
    return add_mesh(name, verts, faces, mat)


dome = lathe("tower_dome", DOME_PROFILE, 32, tmp)


def box(name, px, d, w=0.45):
    x = (px - BW / 2) / F * d
    y0, y1 = ytop(246, d), ytop(224, d)
    top = [(x - w, y1, d - w), (x + w, y1, d - w), (x + w, y1, d + w), (x - w, y1, d + w)]
    bot = [(x - w, y0, d - w), (x + w, y0, d - w), (x + w, y0, d + w), (x - w, y0, d + w)]
    return ring_prism(name, top, bot, tmp)


brazL = box("brazier_L", 47, 66.0)
brazR = box("brazier_R", 253, 71.0)
tower_objs = [square, octa, cyl, dome, brazL, brazR]
bpy.context.view_layer.update()

# ---------------------------------------------------------------- tower texture (matte + outward fill)
report = {}
tower_src = os.environ.get("KT_TOWER") or ("v2" if os.path.exists(V2) else "v1")
tower_path = V2 if tower_src == "v2" else FULL
log("tower plate", tower_src, tower_path)

scene.camera = P
scene.render.resolution_x, scene.render.resolution_y = 1536, 1024
scene.render.resolution_percentage = 100
scene.render.film_transparent = True
scene.render.image_settings.color_mode = 'RGBA'
scene.render.image_settings.color_depth = '8'
sil_path = OUT + "/tower-silhouette-P.png"
scene.render.filepath = sil_path
bpy.ops.render.render(write_still=True)
S = load_px(sil_path)[..., 3] > 0.5
clean_px = load_px(CLEAN)[..., :3]


def tower_matte(plate):
    diff = np.abs(plate - clean_px).sum(2)
    guard = dil(S, 16)
    m = ((diff > 0.30) & guard) | ero(S, 12)
    m = ero(dil(m, 4), 4)            # close
    m = dil(ero(m, 2), 2)            # open
    return m


plate_px = load_px(tower_path)[..., :3]
M = tower_matte(plate_px)
known = ero(M, 2)
tex = fill_out(plate_px, known)
save_rgb(tex, OUT + "/tower-tex.png")
sliver_before = int((S & ~M).sum())
sliver_after_known = int((S & ~known).sum())
report["tower"] = {
    "plate_used": tower_src, "plate_mtime": time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(os.path.getmtime(tower_path))),
    "geometry_silhouette_px": int(S.sum()), "matte_px": int(M.sum()),
    "iou_geometry_vs_matte": float((S & M).sum() / max(1, (S | M).sum())),
    "geometry_px_outside_matte_before": sliver_before,
    "geometry_px_painted_by_outward_fill": sliver_after_known,
    "matte_px_outside_geometry": int((M & ~S).sum()),
}
if tower_src == "v2":
    M1 = tower_matte(load_px(FULL)[..., :3])
    report["tower"]["iou_v2_matte_vs_v1_matte"] = float((M & M1).sum() / max(1, (M | M1).sum()))
log("tower", json.dumps(report["tower"]))

mat_tower = proj_material("proj_tower", OUT + "/tower-tex.png")
for ob in tower_objs:
    ob.data.materials[0] = mat_tower

# ---------------------------------------------------------------- background layers
SHORE = [(-400, 152), (180, 152), (236, 188), (330, 196), (450, 214), (540, 230), (600, 252), (660, 285), (768, 316), (1200, 330)]
SXS = [p[0] for p in SHORE]; SYS = [p[1] for p in SHORE]


def shore_row(x):
    return float(np.interp(x, SXS, SYS))


def water_depth(py):
    return HC * F / (py - HORIZON_ROW)


def plane_pt(px, py):
    d = water_depth(py)
    return loc(*px_to_loc(px, py, d))


mat_sky = proj_material("sky", CLEAN)
mat_water = proj_material("water", CLEAN, haze_depth=0.22, shimmer=0.08)
mat_shore = proj_material("shore", CLEAN, haze_const=0.08, fade=(100.0, 124.0))

SKY_D = 3500.0
hw = SKY_D * 18.0 / LENS_P * 1.6
hh = SKY_D * 12.0 / LENS_P * 1.6
sky = add_mesh("sky_card", [loc(-hw, -hh, SKY_D), loc(hw, -hh, SKY_D), loc(hw, hh, SKY_D), loc(-hw, hh, SKY_D)],
               [[0, 1, 2, 3]], mat_sky)

W_TOP, W_BOT, W_L, W_R = 138.0, 700.0, -400.0, 1168.0
water = add_mesh("water_plane", [plane_pt(W_L, W_BOT), plane_pt(W_R, W_BOT), plane_pt(W_R, W_TOP), plane_pt(W_L, W_TOP)],
                 [[0, 1, 2, 3]], mat_water)

xs = list(range(-160, 940, 16))
sv, sf = [], []
for i, x in enumerate(xs):
    s = shore_row(x)
    d = min(1500.0, water_depth(s))
    sv.append(loc(*px_to_loc(x, s + 30.0, d)))     # bottom, below the shoreline (the plane hides it)
    sv.append(loc(*px_to_loc(x, 96.0, d)))         # top, above the roofs
for i in range(len(xs) - 1):
    a = 2 * i
    sf.append([a, a + 2, a + 3, a + 1])
shore = add_mesh("shore_strip", sv, sf, mat_shore)
bg_objs = [sky, water, shore]

# ---------------------------------------------------------------- mist
def mist(name, d, y0, y1, peak, speed, wspeed, noise_scale, seed):
    hwid = d * 18.0 / LENS_P * 1.7
    hgt = y1 - y0
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.clear()
    tc = nd(nt, 'ShaderNodeTexCoord')
    sep = nd(nt, 'ShaderNodeSeparateXYZ')
    nt.links.new(tc.outputs['Generated'], sep.inputs['Vector'])
    comb = nd(nt, 'ShaderNodeCombineXYZ')
    nt.links.new(sep.outputs['X'], comb.inputs['X'])
    nt.links.new(sep.outputs['Y'], comb.inputs['Y'])
    mp = nd(nt, 'ShaderNodeMapping', vector_type='POINT')
    nt.links.new(comb.outputs['Vector'], mp.inputs['Vector'])
    mp.inputs['Scale'].default_value = (noise_scale[0], noise_scale[1], 1.0)
    mp.inputs['Location'].default_value = (seed, seed * 0.37, 0.0)
    nz = nd(nt, 'ShaderNodeTexNoise', noise_dimensions='4D')
    nt.links.new(mp.outputs['Vector'], nz.inputs['Vector'])
    nz.inputs['Scale'].default_value = 1.0
    nz.inputs['Detail'].default_value = 4.0
    nz.inputs['Roughness'].default_value = 0.55
    nz.inputs['Distortion'].default_value = 0.15
    dens = maprange(nt, nz.outputs['Fac'], 0.36, 0.74)
    ex = fmath(nt, 'MULTIPLY',
               maprange(nt, sep.outputs['X'], 0.0, 0.20).outputs[0],
               maprange(nt, sep.outputs['X'], 1.0, 0.80).outputs[0])
    ey = fmath(nt, 'MULTIPLY',
               maprange(nt, sep.outputs['Y'], 0.0, 0.42).outputs[0],
               maprange(nt, sep.outputs['Y'], 1.0, 0.58).outputs[0])
    env = fmath(nt, 'MULTIPLY', ex.outputs[0], ey.outputs[0])
    al = fmath(nt, 'MULTIPLY', dens.outputs[0], env.outputs[0])
    al = fmath(nt, 'MULTIPLY', al.outputs[0], float(peak))
    em = nd(nt, 'ShaderNodeEmission')
    em.inputs['Color'].default_value = (0.35, 0.45, 0.60, 1.0)
    tr = nd(nt, 'ShaderNodeBsdfTransparent')
    mix = nd(nt, 'ShaderNodeMixShader')
    nt.links.new(al.outputs[0], mix.inputs[0])
    nt.links.new(tr.outputs[0], mix.inputs[1])
    nt.links.new(em.outputs[0], mix.inputs[2])
    out = nd(nt, 'ShaderNodeOutputMaterial')
    nt.links.new(mix.outputs[0], out.inputs['Surface'])
    set_blended(m)

    def upd(i):
        t = i / 24.0
        mp.inputs['Location'].default_value = (seed + speed * t, seed * 0.37, 0.0)
        nz.inputs['W'].default_value = seed + wspeed * t
    UPDATERS.append(upd)
    return add_plane(name, 0.0, (y0 + y1) / 2.0, d, 2 * hwid, hgt, m)


mist1 = mist("mist_low", 110.0, -21.5, 2.0, 0.25, 0.22, 0.10, (3.5, 1.6), 1.7)
mist2 = mist("mist_city", 160.0, -13.0, 24.0, 0.24, -0.12, 0.08, (3.0, 1.5), 5.3)
mist3 = mist("mist_wisp", 45.0, -33.0, -8.0, 0.16, 0.35, 0.14, (3.5, 1.4), 9.1)
mist_objs = [mist1, mist2, mist3]


# ---------------------------------------------------------------- fire glow
def flicker(i, phase):
    t = i / 24.0
    n = (0.5 * math.sin(5.3 * t + phase) + 0.3 * math.sin(9.1 * t + 1.7 * phase + 0.6) + 0.2 * math.sin(17.3 * t + 2.3 * phase))
    return 1.0 + 0.25 * n            # |n| <= 1 -> +-25 %


def glow(name, px, py, d, half_px, peak, phase):
    size = 2.0 * half_px / F * d
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.clear()
    tc = nd(nt, 'ShaderNodeTexCoord')
    sep = nd(nt, 'ShaderNodeSeparateXYZ')
    nt.links.new(tc.outputs['Generated'], sep.inputs['Vector'])
    comb = nd(nt, 'ShaderNodeCombineXYZ')
    nt.links.new(sep.outputs['X'], comb.inputs['X'])
    nt.links.new(sep.outputs['Y'], comb.inputs['Y'])
    dist = vmath(nt, 'DISTANCE', comb.outputs['Vector'], (0.5, 0.5, 0.0))
    fall = maprange(nt, dist.outputs['Value'], 0.5, 0.0)
    fall2 = fmath(nt, 'POWER', fall.outputs[0], 2.0)
    strength = fmath(nt, 'MULTIPLY', fall2.outputs[0], float(peak))
    em = nd(nt, 'ShaderNodeEmission')
    em.inputs['Color'].default_value = (1.0, 0.52, 0.16, 1.0)
    nt.links.new(strength.outputs[0], em.inputs['Strength'])
    tr = nd(nt, 'ShaderNodeBsdfTransparent')
    add = nd(nt, 'ShaderNodeAddShader')
    nt.links.new(em.outputs[0], add.inputs[0])
    nt.links.new(tr.outputs[0], add.inputs[1])
    out = nd(nt, 'ShaderNodeOutputMaterial')
    nt.links.new(add.outputs[0], out.inputs['Surface'])
    set_blended(m)

    def upd(i):
        strength.inputs[1].default_value = peak * flicker(i, phase)
    UPDATERS.append(upd)
    x, y, _ = px_to_loc(px, py, d)
    return add_plane(name, x, y, d, size, size, m)


glow_objs = [glow("glow_lantern", 149, 84, cd - 5.0, 56, 0.38, 0.0),
             glow("glow_brazier_L", 47, 232, 64.0, 20, 0.42, 2.1),
             glow("glow_brazier_N", 146, 249, 58.0, 20, 0.42, 4.0),
             glow("glow_brazier_R", 253, 230, 69.0, 20, 0.42, 5.4)]

# ---------------------------------------------------------------- render camera R
rdata = bpy.data.cameras.new("R")
R = bpy.data.objects.new("R", rdata)
scene.collection.objects.link(R)
scene.camera = R
scene.render.resolution_x, scene.render.resolution_y = RES
scene.render.resolution_percentage = 100
rdata.lens = LENS_R
rdata.sensor_width = 36.0
rdata.sensor_height = 24.0
rdata.sensor_fit = 'HORIZONTAL'
rdata.clip_start = 0.5
rdata.clip_end = 30000.0


def place_R(i):
    s = i / float(NFR - 1)
    e = smoothstep(s)
    t = S_FRAC + (E_FRAC - S_FRAC) * e
    arc = math.sin(math.pi * e)
    off = MOVE_DIR * t + Vector((0.0, 0.9 * arc, 0.0))
    tx = AIM_TX - 0.012 * (e - 0.5)            # yaws a little back toward the subject
    ty = AIM_TY + 0.008 * arc
    roll = math.radians(0.25) * arc
    zc = -Vector((tx, ty, -1.0)).normalized()
    xc = Vector((0.0, 1.0, 0.0)).cross(zc).normalized()
    yc = zc.cross(xc)
    rot = Matrix(((xc.x, yc.x, zc.x, 0), (xc.y, yc.y, zc.y, 0), (xc.z, yc.z, zc.z, 0), (0, 0, 0, 1)))
    R.matrix_world = PM @ Matrix.Translation(off) @ rot @ Matrix.Rotation(roll, 4, 'Z')
    bpy.context.view_layer.update()


def set_hidden(objs, hid):
    for ob in objs:
        ob.hide_render = hid


def render_to(path, transparent=False, only=None, hide=()):
    scene.render.film_transparent = transparent
    scene.render.image_settings.color_mode = 'RGBA' if transparent else 'RGB'
    scene.render.image_settings.color_depth = '8' if transparent else '16'
    allobjs = tower_objs + bg_objs + mist_objs + glow_objs
    if only is not None:
        set_hidden(allobjs, True)
        set_hidden(only, False)
    else:
        set_hidden(hide, True)
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    set_hidden(allobjs, False)


# ---------------------------------------------------------------- measuring
def pool(g, k):
    h, w = g.shape
    return g[:h // k * k, :w // k * k].reshape(h // k, k, w // k, k).mean((1, 3))


def track(a, b, half=48):
    """most textured fully-opaque patch in a (alpha RGBA), found again in b -> (dx, dy, residual, at)"""
    ga = a[..., :3].mean(2); gb = b[..., :3].mean(2)
    H, W = ga.shape
    best = None
    for cy in range(half + 8, H - half - 8, 24):
        for cx_ in range(half + 8, W - half - 8, 24):
            if a[cy - half:cy + half, cx_ - half:cx_ + half, 3].min() < 0.99:
                continue
            s = ga[cy - half:cy + half, cx_ - half:cx_ + half].std()
            if best is None or s > best[0]:
                best = (s, cx_, cy)
    _, bx, by = best
    k = 4
    T = ga[by - half:by + half, bx - half:bx + half]
    Tp = pool(T, k); gp = pool(gb, k)
    win = np.lib.stride_tricks.sliding_window_view(gp, Tp.shape)
    ssd = ((win - Tp) ** 2).sum((2, 3))
    iy, ix = np.unravel_index(ssd.argmin(), ssd.shape)
    x0, y0 = ix * k, iy * k
    bestf = None
    for yy in range(max(0, y0 - 6), min(H - 2 * half, y0 + 7)):
        for xx in range(max(0, x0 - 6), min(W - 2 * half, x0 + 7)):
            e = ((gb[yy:yy + 2 * half, xx:xx + 2 * half] - T) ** 2).sum()
            if bestf is None or e < bestf[0]:
                bestf = (e, xx, yy)
    e, xx, yy = bestf
    energy = ((T - T.mean()) ** 2).sum()
    return (xx - (bx - half), yy - (by - half), float(e / max(energy, 1e-9)), (bx, by))


# ---------------------------------------------------------------- main render
t0 = time.time()
counts = []
for i in FRAMES:
    place_R(i)
    for u in UPDATERS:
        u(i)
    path = "%s/f%03d.png" % (OUT_FR, i + 1)
    render_to(path)
    counts.append(magenta_count(load_px(path)))
    if i % 12 == 0:
        log("frame", i + 1, "magenta", counts[-1], "t=%.0fs" % (time.time() - t0))
report["frames_rendered"] = [i + 1 for i in FRAMES]
report["resolution"] = list(RES)
report["magenta_per_frame"] = counts
report["magenta_total"] = int(sum(counts))
report["render_seconds"] = round(time.time() - t0, 1)

# mist and glow hidden: magenta must still be 0 (mist cannot hide a hole)
nomist = {}
for i in (0, 35, 71):
    place_R(i)
    for u in UPDATERS:
        u(i)
    p = "%s/nomist-f%03d.png" % (OUT_FR, i + 1)
    render_to(p, hide=mist_objs + glow_objs)
    nomist["f%d" % (i + 1)] = magenta_count(load_px(p))
report["magenta_mist_and_glow_hidden"] = nomist

# parallax, frame 1 vs 72, layer by layer (tracked) + analytic anchor points
w_out = RES[0]
layers = {"tower": tower_objs, "city": [shore], "sky": [sky]}
shots = {}
for i in (0, 71):
    place_R(i)
    for u in UPDATERS:
        u(i)
    for k, objs in layers.items():
        p = "%s/layer-%s-f%03d.png" % (OUT_FR, k, i + 1)
        render_to(p, transparent=True, only=objs)
        shots[(k, i)] = load_px(p)
tracked = {}
for k in layers:
    dx, dy, q, at = track(shots[(k, 0)], shots[(k, 71)])
    tracked[k] = {"dx_px": dx, "dy_px": dy, "residual": q, "patch_at": list(at)}
anchors = {"tower": PM @ Vector((Nt[0], Nt[1], -Nt[2])),
           "city": loc(*px_to_loc(540, shore_row(540) - 40.0, min(1500.0, water_depth(shore_row(540))))),
           "sky": loc(*px_to_loc(545, 55, SKY_D))}
analytic = {}
for k, p3 in anchors.items():
    xs_ = []
    for i in (0, 71):
        place_R(i)
        c = world_to_camera_view(scene, R, p3)
        xs_.append(c.x * w_out)
    analytic[k] = xs_[1] - xs_[0]
pct = lambda a, b: abs(a - b) / w_out * 100.0
report["parallax"] = {
    "tracked_layers": tracked,
    "analytic_dx_px": analytic,
    "tower_vs_city_pct_width_tracked": pct(tracked["tower"]["dx_px"], tracked["city"]["dx_px"]),
    "city_vs_sky_pct_width_tracked": pct(tracked["city"]["dx_px"], tracked["sky"]["dx_px"]),
    "tower_vs_city_pct_width_analytic": pct(analytic["tower"], analytic["city"]),
    "city_vs_sky_pct_width_analytic": pct(analytic["city"], analytic["sky"]),
}
log("parallax", json.dumps(report["parallax"]))

rep_path = OUT + ("/report2-preview.json" if PREVIEW else "/report2.json")
with open(rep_path, "w") as fh:
    json.dump(report, fh, indent=1)

# ---------------------------------------------------------------- clip + contact sheet
ff = shutil.which("ffmpeg")
if not ff:
    c = glob.glob(os.path.join(os.environ.get("LOCALAPPDATA", ""), "Microsoft/WinGet/Packages/Gyan.FFmpeg*/**/bin/ffmpeg.exe"), recursive=True)
    ff = c[0] if c else None
log("ffmpeg", ff)
if ff and not PREVIEW:
    fwd = list(range(1, NFR + 1))
    cycle = fwd + [NFR] * 24 + list(range(NFR - 1, 0, -1)) + [1] * 24
    seq = cycle * 3
    lst = OUT + "/concat.txt"
    with open(lst, "w") as fh:
        for f in seq:
            fh.write("file '%s/f%03d.png'\nduration 0.0416667\n" % (OUT_FR, f))
        fh.write("file '%s/f%03d.png'\n" % (OUT_FR, seq[-1]))
    mp4 = OUT + "/kill2-land.mp4"
    base = [ff, "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", lst, "-r", "24"]
    enc = ["-c:v", "libx264", "-preset", "slow", "-crf", "14", "-pix_fmt", "yuv420p", "-movflags", "+faststart", mp4]
    r = subprocess.run(base + ["-vf", "scale=flags=accurate_rnd+full_chroma_int+error_diffusion,format=yuv420p"] + enc)
    if r.returncode != 0:
        subprocess.run(base + enc, check=True)
    subprocess.run([ff, "-y", "-loglevel", "error",
                    "-i", "%s/f001.png" % OUT_FR, "-i", "%s/f036.png" % OUT_FR, "-i", "%s/f072.png" % OUT_FR,
                    "-filter_complex", "[0:v]scale=600:-1[a];[1:v]scale=600:-1[b];[2:v]scale=600:-1[c];[a][b][c]hstack=inputs=3,format=rgb24",
                    "-frames:v", "1", OUT + "/contact2-land.png"], check=True)
    report["clip_frames"] = len(seq)
    with open(rep_path, "w") as fh:
        json.dump(report, fh, indent=1)
elif ff and PREVIEW:
    subprocess.run([ff, "-y", "-loglevel", "error",
                    "-i", "%s/f001.png" % OUT_FR, "-i", "%s/f036.png" % OUT_FR, "-i", "%s/f072.png" % OUT_FR,
                    "-filter_complex", "[0:v]scale=600:-1[a];[1:v]scale=600:-1[b];[2:v]scale=600:-1[c];[a][b][c]hstack=inputs=3,format=rgb24",
                    "-frames:v", "1", OUT + "/preview-contact.png"], check=True)
log("DONE")
