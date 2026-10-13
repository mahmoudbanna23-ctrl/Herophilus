"""Kill test: one painted plate projected onto simple solids, one straight camera move.

Run:  blender --background --python kill_test.py
Rebuilds scene (Version A = far card + tower solids), renders 12 frames at two sizes,
runs the checks, writes clips + contact sheets. Everything lands in OUT below.
"""
import bpy, math, os, sys, glob, shutil, subprocess, json
import numpy as np
from mathutils import Vector, Matrix
from bpy_extras.object_utils import world_to_camera_view

OUT = "D:/scratch 2026/city-kill"
PAINT = "D:/claude os/Medical school/Herophilus-redesign/progress/redesign/paint"
FULL = PAINT + "/kill-pharos-dark.png"
CLEAN = PAINT + "/kill-pharos-dark-clean.png"
SAMPLES = int(os.environ.get("KT_SAMPLES", "24"))

# ---- fitting constants (plate fitted in its 768x512 downscale) ----
BW, BH = 768.0, 512.0
LENS_P = 35.0
F = LENS_P / 36.0 * BW           # focal length in 768-plate pixels (746.67)
FAR_D = 400.0
PITCH_P = 8.0                    # P looks 8 degrees down

# camera move in P-local axes (x right, y up, z back): passes through the origin = P
MOVE_DIR = Vector((10.0, -5.0, -4.0))     # total travel: 10 right, 5 down, 4 forward
S_FRAC, E_FRAC = -0.7, 0.3                # start / end along MOVE_DIR (0 = P)

SIZES = {
    # name: (w, h, lens, sensor_fit, aim tan x, aim tan y)
    # aim is a tangent offset from P's axis; edge rays are atan-added, so margins were tuned by magenta count
    "land": (1280, 800, 50.0, 'HORIZONTAL', -0.05, 0.07),
    "up":   (640, 920, 55.0, 'VERTICAL', -0.26, 0.07),
}


def log(*a):
    print("KT|", *a, flush=True)


# ---------------------------------------------------------------- scene
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
for eng in ('BLENDER_EEVEE', 'BLENDER_EEVEE_NEXT'):
    try:
        scene.render.engine = eng
        break
    except TypeError:
        continue
log("engine", scene.render.engine)
try:
    scene.eevee.taa_render_samples = SAMPLES
except Exception as e:
    log("samples not set", e)
scene.view_settings.view_transform = 'Standard'
try:
    scene.view_settings.look = 'None'
except Exception:
    pass
scene.render.dither_intensity = 0.0
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_depth = '8'

# world = pure magenta (edge-leak probe); emission-only objects ignore it
world = bpy.data.worlds.new("W")
scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes.get("Background")
bg.inputs[0].default_value = (1.0, 0.0, 1.0, 1.0)
bg.inputs[1].default_value = 1.0

# projection camera P
pdata = bpy.data.cameras.new("P")
pdata.lens = LENS_P
pdata.sensor_width = 36.0
pdata.sensor_height = 24.0
pdata.sensor_fit = 'HORIZONTAL'
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
    """P-local point -> world.  x right, y up, d = depth in front of P."""
    return PM @ Vector((x, y, -d))


def px_to_loc(px, py, d):
    return ((px - BW / 2) / F * d, -(py - BH / 2) / F * d, d)


# ---------------------------------------------------------------- materials
def projected_material(name, path):
    img = bpy.data.images.load(path)
    img.colorspace_settings.name = 'sRGB'
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.clear()
    N = nt.nodes
    geo = N.new('ShaderNodeNewGeometry')
    sub = N.new('ShaderNodeVectorMath'); sub.operation = 'SUBTRACT'
    sub.inputs[1].default_value = tuple(P_C)
    nt.links.new(geo.outputs['Position'], sub.inputs[0])
    dots = []
    for vec in (P_RIGHT, P_UP, P_FWD):
        d = N.new('ShaderNodeVectorMath'); d.operation = 'DOT_PRODUCT'
        d.inputs[1].default_value = tuple(vec)
        nt.links.new(sub.outputs['Vector'], d.inputs[0])
        dots.append(d)
    divs = []
    for k in (0, 1):
        dv = N.new('ShaderNodeMath'); dv.operation = 'DIVIDE'
        nt.links.new(dots[k].outputs['Value'], dv.inputs[0])
        nt.links.new(dots[2].outputs['Value'], dv.inputs[1])
        divs.append(dv)
    mads = []
    for k, scale in ((0, LENS_P / 36.0), (1, LENS_P / 24.0)):
        mad = N.new('ShaderNodeMath'); mad.operation = 'MULTIPLY_ADD'
        nt.links.new(divs[k].outputs[0], mad.inputs[0])
        mad.inputs[1].default_value = scale
        mad.inputs[2].default_value = 0.5
        mads.append(mad)
    comb = N.new('ShaderNodeCombineXYZ')
    nt.links.new(mads[0].outputs[0], comb.inputs['X'])
    nt.links.new(mads[1].outputs[0], comb.inputs['Y'])
    tex = N.new('ShaderNodeTexImage')
    tex.image = img
    tex.interpolation = 'Linear'
    tex.extension = 'EXTEND'
    nt.links.new(comb.outputs['Vector'], tex.inputs['Vector'])
    em = N.new('ShaderNodeEmission')
    em.inputs['Strength'].default_value = 1.0
    nt.links.new(tex.outputs['Color'], em.inputs['Color'])
    out = N.new('ShaderNodeOutputMaterial')
    nt.links.new(em.outputs['Emission'], out.inputs['Surface'])
    return m


mat_full = projected_material("proj_full", FULL)
mat_clean = projected_material("proj_clean", CLEAN)


def add_mesh(name, verts, faces, mat):
    me = bpy.data.meshes.new(name)
    me.from_pydata([tuple(v) for v in verts], [], faces)
    me.update()
    ob = bpy.data.objects.new(name, me)
    scene.collection.objects.link(ob)
    ob.data.materials.append(mat)
    return ob


# ---------------------------------------------------------------- far card
hw = FAR_D * 18.0 / LENS_P * 1.004
hh = FAR_D * 12.0 / LENS_P * 1.004
card = add_mesh("far_card",
                [loc(-hw, -hh, FAR_D), loc(hw, -hh, FAR_D), loc(hw, hh, FAR_D), loc(-hw, hh, FAR_D)],
                [[0, 1, 2, 3]], mat_clean)


# ---------------------------------------------------------------- tower solids (fitted from the 768 plate)
def ring_prism(name, top, bot, mat, cap=True, apex=None):
    """top, bot: lists of P-local (x,y,depth) tuples, same length k."""
    k = len(top)
    verts = [loc(x, y, d) for (x, y, d) in top] + [loc(x, y, d) for (x, y, d) in bot]
    faces = [[i, (i + 1) % k, k + (i + 1) % k, k + i] for i in range(k)]
    if cap:
        faces.append(list(range(k)))
    return add_mesh(name, verts, faces, mat)


# square tier: parapet top ring read off the plate (L, N = near corner, R) at fitted depths
dN = 60.0
dL, dR = 67.9, 72.7     # solved so a true square seen corner-on gives x=33 / 145 / 268
def sq_pt(px, py, d):
    return px_to_loc(px, py, d)
Nt = sq_pt(145, 268, dN); Lt = sq_pt(33, 243, dL); Rt = sq_pt(268, 245, dR)
Nb = sq_pt(140, 700, dN); Lb = sq_pt(7, 700, dL); Rb = sq_pt(288, 700, dR)
def fourth(L, R, N):
    return (L[0] + R[0] - N[0], L[1] + R[1] - N[1], L[2] + R[2] - N[2])
Ft = fourth(Lt, Rt, Nt); Fb = fourth(Lb, Rb, Nb)
square = ring_prism("tower_square", [Nt, Rt, Ft, Lt], [Nb, Rb, Fb, Lb], mat_full)

# axis of the upper tiers
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
octa = ring_prism("tower_octagon", ring_pts(r_oct, y_oct1, 8, th0), ring_pts(r_oct, y_oct0, 8, th0), mat_full)
y_cyl = ytop(40, cd)
r_cyl = 45.5 / F * cd            # column drum, no inflation (less sky stuck on the sides)
r_cap = 47.5 / F * cd            # cap overhang
cyl = ring_prism("tower_round", ring_pts(r_cyl, y_cyl, 32), ring_pts(r_cyl, y_oct1 - 0.5, 32), mat_full)
y_dome = ytop(10, cd)
dome = ring_prism("tower_dome", ring_pts(0.4, y_dome, 12), ring_pts(r_cap, y_cyl - 0.01, 12), mat_full, cap=True)
# braziers on the parapet corners (their flames stick up past the rim)
def box(name, px, d, w=0.45):
    x = (px - BW / 2) / F * d
    y0, y1 = ytop(246, d), ytop(224, d)
    top = [(x - w, y1, d - w), (x + w, y1, d - w), (x + w, y1, d + w), (x - w, y1, d + w)]
    bot = [(x - w, y0, d - w), (x + w, y0, d - w), (x + w, y0, d + w), (x - w, y0, d + w)]
    return ring_prism(name, top, bot, mat_full)
brazL = box("brazier_L", 47, 66.0)
brazR = box("brazier_R", 253, 71.0)
tower_objs = [square, octa, cyl, dome, brazL, brazR]
bpy.context.view_layer.update()

# ---------------------------------------------------------------- render camera R
rdata = bpy.data.cameras.new("R")
R = bpy.data.objects.new("R", rdata)
scene.collection.objects.link(R)
scene.camera = R


def setup_size(key):
    w, h, lens, fit, tx, ty = SIZES[key]
    scene.render.resolution_x, scene.render.resolution_y = w, h
    scene.render.resolution_percentage = 100
    rdata.lens = lens
    rdata.sensor_width = 36.0
    rdata.sensor_height = 24.0
    rdata.sensor_fit = fit


def place_R(key, i):
    w, h, lens, fit, tx, ty = SIZES[key]
    t = S_FRAC + (E_FRAC - S_FRAC) * i / 11.0
    off = MOVE_DIR * t
    # aim without roll: local -Z toward (tx, ty, -1) in P-local axes, local X kept horizontal
    zc = -Vector((tx, ty, -1.0)).normalized()
    xc = Vector((0.0, 1.0, 0.0)).cross(zc).normalized()
    yc = zc.cross(xc)
    rot = Matrix(((xc.x, yc.x, zc.x, 0), (xc.y, yc.y, zc.y, 0), (xc.z, yc.z, zc.z, 0), (0, 0, 0, 1)))
    R.matrix_world = PM @ Matrix.Translation(off) @ rot
    bpy.context.view_layer.update()
    return off


def render_to(path, transparent=False, hide=()):
    scene.render.film_transparent = transparent
    scene.render.image_settings.color_mode = 'RGBA' if transparent else 'RGB'
    for ob in hide:
        ob.hide_render = True
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    for ob in hide:
        ob.hide_render = False


def load_px(path):
    img = bpy.data.images.load(path, check_existing=False)
    img.colorspace_settings.name = 'Non-Color'
    w, h = img.size
    a = np.empty(w * h * 4, dtype=np.float32)
    img.pixels.foreach_get(a)
    bpy.data.images.remove(img)
    return a.reshape(h, w, 4)[::-1].copy()      # top row first


def magenta_count(a):
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    return int(((r > 0.6) & (g < 0.25) & (b > 0.6)).sum())


# ---------------------------------------------------------------- measuring
def pool(g, k):
    h, w = g.shape
    return g[:h // k * k, :w // k * k].reshape(h // k, k, w // k, k).mean((1, 3))


def track(a, b, half=48, need_alpha=False):
    """Pick the most textured patch in a, find it in b. Returns (dx, dy, quality)."""
    ga = a[..., :3].mean(2); gb = b[..., :3].mean(2)
    H, W = ga.shape
    best = None
    for cy in range(half + 8, H - half - 8, 24):
        for cx_ in range(half + 8, W - half - 8, 24):
            if need_alpha and a[cy - half:cy + half, cx_ - half:cx_ + half, 3].min() < 0.99:
                continue
            if magenta_count(a[cy - half:cy + half, cx_ - half:cx_ + half]) or magenta_count(b[cy - half:cy + half, cx_ - half:cx_ + half]):
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
    x0, y0 = ix * k, iy * k                         # top-left of match, coarse
    bestf = None
    for yy in range(max(0, y0 - 6), min(H - 2 * half, y0 + 7)):
        for xx in range(max(0, x0 - 6), min(W - 2 * half, x0 + 7)):
            e = ((gb[yy:yy + 2 * half, xx:xx + 2 * half] - T) ** 2).sum()
            if bestf is None or e < bestf[0]:
                bestf = (e, xx, yy)
    e, xx, yy = bestf
    energy = ((T - T.mean()) ** 2).sum()
    return (xx - (bx - half), yy - (by - half), float(e / max(energy, 1e-9)), (bx, by))


def edge_x(a, side):
    al = a[..., 3]
    H, W = al.shape
    xs = []
    for y in range(int(.4 * H), int(.8 * H)):
        idx = np.where(al[y] > 0.5)[0]
        if len(idx):
            xs.append(idx.max() if side == 'right' else idx.min())
    if not xs:
        return None
    m = float(np.median(xs))
    if m >= W - 3 or m <= 2:
        return None
    return m


def plate_px(p):
    """world point -> plate pixel in the 1536x1024 plate via P's projection"""
    v = p - P_C
    x, y, z = v.dot(P_RIGHT), v.dot(P_UP), v.dot(P_FWD)
    u = 0.5 + (LENS_P / 36.0) * x / z
    w = 0.5 + (LENS_P / 24.0) * y / z
    return Vector((u * 1536.0, (1 - w) * 1024.0))


def src_per_out(key, i):
    """median |plate px| per output px along the two face directions on the near faces"""
    setup_size(key); place_R(key, i)
    w, h = SIZES[key][0], SIZES[key][1]
    def out_px(p):
        c = world_to_camera_view(scene, R, p)
        return Vector((c.x * w, (1 - c.y) * h)), c
    rat_h, rat_v = [], []
    faces = [(Nt, Rt, Nb, Rb), (Lt, Nt, Lb, Nb)]
    for (t0, t1, b0, b1) in faces:
        for a_ in np.linspace(0.08, 0.92, 9):
            for b_ in np.linspace(0.02, 0.30, 9):
                def pt(aa, bb):
                    top = Vector(t0) * (1 - aa) + Vector(t1) * aa
                    bot = Vector(b0) * (1 - aa) + Vector(b1) * aa
                    q = top * (1 - bb) + bot * bb
                    return PM @ Vector((q[0], q[1], -q[2]))
                p = pt(a_, b_)
                o, c = out_px(p)
                if not (0.02 < c.x < 0.98 and 0.02 < c.y < 0.98):
                    continue
                ph = pt(a_ + 0.01, b_); pv = pt(a_, b_ + 0.01)
                oh, _ = out_px(ph); ov, _ = out_px(pv)
                dh = (oh - o).length; dv = (ov - o).length
                # horizontal step: use the larger of the two in-plate directions only if it moves on screen
                sh = (plate_px(ph) - plate_px(p)).length; sv = (plate_px(pv) - plate_px(p)).length
                if dh > 0.3:
                    rat_h.append(sh / dh)
                if dv > 0.3:
                    rat_v.append(sv / dv)
    return (float(np.median(rat_h)) if rat_h else None, float(np.median(rat_v)) if rat_v else None)


# ---------------------------------------------------------------- main
report = {}
FR = OUT + "/frames"
for key in SIZES:
    os.makedirs(FR + "/" + key, exist_ok=True)
    setup_size(key)
    w, h = SIZES[key][0], SIZES[key][1]
    counts = []
    dists = []
    for i in range(12):
        off = place_R(key, i)
        dists.append((R.matrix_world.translation - Vector(loc(cx, 0, cd))).length)
        path = "%s/%s/f%02d.png" % (FR, key, i + 1)
        render_to(path)
        counts.append(magenta_count(load_px(path)))
    log(key, "magenta per frame", counts)
    report[key] = {"magenta_per_frame": counts, "magenta_total": sum(counts)}
    # mattes for frames 1 and 12: tower alone / card alone
    mats = {}
    for i in (0, 11):
        place_R(key, i)
        tp = "%s/%s/tower-only-f%02d.png" % (FR, key, i + 1)
        cp = "%s/%s/card-only-f%02d.png" % (FR, key, i + 1)
        render_to(tp, transparent=True, hide=[card])
        render_to(cp, transparent=False, hide=tower_objs)
        mats[i] = (load_px(tp), load_px(cp))
    tdx, tdy, tq, tpos = track(mats[0][0], mats[11][0], need_alpha=True)
    fdx, fdy, fq, fpos = track(mats[0][1], mats[11][1])
    # analytic cross-check: project tower near-corner top point and a far-card point through R at frames 1 and 12
    def proj_at(i, p):
        place_R(key, i)
        c = world_to_camera_view(scene, R, p)
        return Vector((c.x * w, (1 - c.y) * h))
    pt_tower = PM @ Vector((Nt[0], Nt[1], -Nt[2]))
    pt_far = loc(0.0, 0.0, FAR_D)
    edge = {"tower_corner_px": (proj_at(11, pt_tower) - proj_at(0, pt_tower))[0],
            "far_point_px": (proj_at(11, pt_far) - proj_at(0, pt_far))[0]}
    report[key].update({
        "tower_patch_shift_px": [tdx, tdy], "tower_patch_quality": tq, "tower_patch_at": tpos,
        "far_patch_shift_px": [fdx, fdy], "far_patch_quality": fq, "far_patch_at": fpos,
        "tower_silhouette_edge_shift_px": edge,
        "relative_shift_pct_of_width": abs(tdx - fdx) / w * 100.0,
        "tower_shift_pct": abs(tdx) / w * 100.0, "far_shift_pct": abs(fdx) / w * 100.0,
    })
    ci = int(np.argmin(dists))
    sh, sv = src_per_out(key, ci)
    report[key]["closest_frame"] = ci + 1
    report[key]["closest_dist"] = dists[ci]
    report[key]["src_px_per_out_px_horiz"] = sh
    report[key]["src_px_per_out_px_vert"] = sv
    log(key, json.dumps(report[key]))

with open(OUT + "/report.json", "w") as fh:
    json.dump(report, fh, indent=1)

# ---------------------------------------------------------------- clips + contact sheets
ff = shutil.which("ffmpeg")
if not ff:
    c = glob.glob(os.path.join(os.environ.get("LOCALAPPDATA", ""), "Microsoft/WinGet/Packages/Gyan.FFmpeg*/**/bin/ffmpeg.exe"), recursive=True)
    ff = c[0] if c else None
log("ffmpeg", ff)
if ff:
    order = list(range(1, 13)) + list(range(11, 1, -1))
    for key in SIZES:
        sq = "%s/seq/%s" % (OUT, key)
        shutil.rmtree(sq, ignore_errors=True)
        os.makedirs(sq)
        n = 0
        for _ in range(4):
            for f in order:
                shutil.copy("%s/%s/f%02d.png" % (FR, key, f), "%s/s%03d.png" % (sq, n))
                n += 1
        for fps in (12, 6):
            out = "%s/kill-%s-%dfps.mp4" % (OUT, key, fps)
            subprocess.run([ff, "-y", "-loglevel", "error", "-framerate", str(fps), "-i", sq + "/s%03d.png",
                            "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", out], check=True)
        subprocess.run([ff, "-y", "-loglevel", "error",
                        "-i", "%s/%s/f01.png" % (FR, key), "-i", "%s/%s/f06.png" % (FR, key), "-i", "%s/%s/f12.png" % (FR, key),
                        "-filter_complex", "[0:v]scale=533:-1[a];[1:v]scale=533:-1[b];[2:v]scale=533:-1[c];[a][b][c]hstack=inputs=3",
                        "-frames:v", "1", "%s/contact-%s.png" % (OUT, key)], check=True)
log("DONE")
