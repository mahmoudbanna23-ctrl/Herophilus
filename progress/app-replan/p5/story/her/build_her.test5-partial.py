# build_her.py - C2 test model of the Clepsydra (the owner's own character).
# Rerunnable: wipes the scene, builds every part from code, renders test stills, exports a GLB.
# Blender 5.2, background mode. No add-ons, no downloads, procedural materials only.
# She faces -Y (Blender front). Her left = +X. Height ~1.2 m. Units: metres.
#
#   blender --background --python build_her.py -- [--res 1600] [--views front,threequarter,side,back]
#                                                  [--no-export] [--out D:/tmp-her-c2]

import bpy, bmesh, math, sys, os, json, struct, random
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
def opt(name, default):
    return argv[argv.index(name) + 1] if name in argv else default
OUT = opt('--out', 'D:/tmp-her-c2')
RES = int(opt('--res', '1600'))
VIEWS = [v for v in opt('--views', 'front,threequarter,side,back').split(',') if v]
EXPORT = '--no-export' not in argv
GLB_NAME = opt('--glb', 'her-test4.glb')
# Test 2: Standard view transform. AgX desaturated her orange towards salmon (test 1 face #DE6C42
# lit median vs art #FA791B); Standard keeps the saturated paint. See NOTES.md "## Test 2".
VIEW_TF = opt('--view', 'Standard')
EXPOSURE = float(opt('--exposure', '-1.6'))
LOOK = opt('--look', 'None')
os.makedirs(OUT, exist_ok=True)

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene

# ---------------------------------------------------------------- proportions (from welcoming.png)
RX, RZ, ZC, T = 0.345, 0.37, 0.76, 0.16       # disc half-width, half-height, centre z, thickness
DOME_F, DOME_B = 0.02, 0.01                   # front / back face bulge
# Test 4 (owner target image): eyes ~20% bigger (0.40 of the disc height), centre a touch lower.
EYE_X, EYE_Z, EYE_W, EYE_H = 0.122, 0.80, 0.074, 0.142

def face_y(x, z):
    """Front surface of the disc (y is negative towards the viewer)."""
    r2 = (x / RX) ** 2 + ((z - ZC) / RZ) ** 2
    return -T / 2 - DOME_F * max(0.0, 1.0 - r2)

def ell(theta, f=1.0, y=0.0):
    """Point on the disc outline at angle theta (0 = her left, 90 = top), radius fraction f."""
    return Vector((f * RX * math.cos(theta), y, ZC + f * RZ * math.sin(theta)))

# ---------------------------------------------------------------- colour + materials
def lin(h):
    h = h.lstrip('#')
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c)

def sock(node, ident, out=False):
    for s in (node.outputs if out else node.inputs):
        if s.identifier == ident:
            return s
    raise KeyError(ident)

def new_mat(name):
    m = bpy.data.materials.new(name)
    try:
        m.use_nodes = True
    except Exception:
        pass
    nt = m.node_tree
    bsdf = nt.nodes.get('Principled BSDF')
    if bsdf is None:
        nt.nodes.clear()
        bsdf = nt.nodes.new('ShaderNodeBsdfPrincipled')
        out = nt.nodes.new('ShaderNodeOutputMaterial')
        nt.links.new(bsdf.outputs[0], out.inputs[0])
    return m, nt, bsdf

def principled(name, hexcol, rough=0.5, metal=0.0, sheen=0.0, coat=0.0):
    m, nt, b = new_mat(name)
    b.inputs['Base Color'].default_value = (*lin(hexcol), 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    if sheen:
        b.inputs['Sheen Weight'].default_value = sheen
    if coat:
        b.inputs['Coat Weight'].default_value = coat
    m.diffuse_color = (*lin(hexcol), 1)
    return m

def grained(name, dark, light, rough=0.5, scale=16.0, bump=0.06, distortion=5.0, painted=None):
    """Painted-wood orange: horizontal grain bands (identity anchor 1).
    painted = (fibre sx, fibre sz, patch sx, patch sz) switches to the test-3 irregular streak grain."""
    m, nt, b = new_mat(name)
    tc = nt.nodes.new('ShaderNodeTexCoord')
    if painted:
        # Test 3 disc grain, read off 6x crops of welcoming/waving/thinking: fine horizontal streaks
        # broken into short runs of uneven length, width and spacing, a soft patchy tone under them,
        # gentle waviness; no knots in the art, so none here. Two noise fields stretched along X
        # (so streaks run horizontally), warped by a low-frequency noise for the waviness.
        warp = nt.nodes.new('ShaderNodeTexNoise')
        warp.inputs['Scale'].default_value = 2.5
        warp.inputs['Detail'].default_value = 1.0
        wadd = nt.nodes.new('ShaderNodeVectorMath'); wadd.operation = 'MULTIPLY_ADD'
        wadd.inputs[1].default_value = (0.0, 0.0, 0.035)          # wobble the streaks up/down only
        nt.links.new(tc.outputs['Object'], warp.inputs['Vector'])
        nt.links.new(warp.outputs['Color'], wadd.inputs[0])
        nt.links.new(tc.outputs['Object'], wadd.inputs[2])
        fields = []
        for sx, sz, det in ((painted[0], painted[1], 4.0), (painted[2], painted[3], 2.0)):
            mp = nt.nodes.new('ShaderNodeMapping')
            mp.inputs['Scale'].default_value = (sx, sx, sz)
            nz = nt.nodes.new('ShaderNodeTexNoise')
            nz.inputs['Scale'].default_value = 1.0
            nz.inputs['Detail'].default_value = det
            nz.inputs['Roughness'].default_value = 0.6
            nt.links.new(wadd.outputs['Vector'], mp.inputs['Vector'])
            nt.links.new(mp.outputs['Vector'], nz.inputs['Vector'])
            fields.append(nz)
        mx = nt.nodes.new('ShaderNodeMath'); mx.operation = 'MULTIPLY_ADD'
        mx.inputs[1].default_value = 0.6
        pm = nt.nodes.new('ShaderNodeMath'); pm.operation = 'MULTIPLY'
        pm.inputs[1].default_value = 0.4
        nt.links.new(fields[1].outputs['Fac'], pm.inputs[0])
        nt.links.new(fields[0].outputs['Fac'], mx.inputs[0])
        nt.links.new(pm.outputs['Value'], mx.inputs[2])
        ramp = nt.nodes.new('ShaderNodeValToRGB')
        ramp.color_ramp.elements[0].position = 0.36
        ramp.color_ramp.elements[0].color = (*lin(dark), 1)
        ramp.color_ramp.elements[1].position = 0.64
        ramp.color_ramp.elements[1].color = (*lin(light), 1)
        bp = nt.nodes.new('ShaderNodeBump')
        bp.inputs['Strength'].default_value = bump
        nt.links.new(mx.outputs['Value'], ramp.inputs['Fac'])
        nt.links.new(ramp.outputs['Color'], b.inputs['Base Color'])
        nt.links.new(mx.outputs['Value'], bp.inputs['Height'])
        nt.links.new(bp.outputs['Normal'], b.inputs['Normal'])
        b.inputs['Roughness'].default_value = rough
        b.inputs['Specular IOR Level'].default_value = 0.2
        m.diffuse_color = (*lin(light), 1)
        return m
    wv = nt.nodes.new('ShaderNodeTexWave')
    wv.wave_type = 'BANDS'
    wv.bands_direction = 'Z'
    wv.inputs['Scale'].default_value = scale
    wv.inputs['Distortion'].default_value = distortion
    wv.inputs['Detail'].default_value = 3.0
    ramp = nt.nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].position = 0.1
    ramp.color_ramp.elements[0].color = (*lin(dark), 1)
    ramp.color_ramp.elements[1].position = 0.9
    ramp.color_ramp.elements[1].color = (*lin(light), 1)
    bp = nt.nodes.new('ShaderNodeBump')
    bp.inputs['Strength'].default_value = bump
    nt.links.new(tc.outputs['Object'], wv.inputs['Vector'])
    nt.links.new(wv.outputs['Fac'], ramp.inputs['Fac'])
    nt.links.new(ramp.outputs['Color'], b.inputs['Base Color'])
    nt.links.new(wv.outputs['Fac'], bp.inputs['Height'])
    nt.links.new(bp.outputs['Normal'], b.inputs['Normal'])
    b.inputs['Roughness'].default_value = rough
    b.inputs['Specular IOR Level'].default_value = 0.2   # keep the painted orange from washing to salmon
    m.diffuse_color = (*lin(light), 1)
    return m

def meander(name, base_hex, line_hex):
    """Greek-key border, procedural, driven by the strip UVs (u along, v across)."""
    m, nt, b = new_mat(name)
    tc = nt.nodes.new('ShaderNodeTexCoord')
    sep = nt.nodes.new('ShaderNodeSeparateXYZ')
    nt.links.new(tc.outputs['UV'], sep.inputs[0])
    fr = nt.nodes.new('ShaderNodeMath'); fr.operation = 'FRACT'
    nt.links.new(sep.outputs['X'], fr.inputs[0])
    f_out, v_out = fr.outputs[0], sep.outputs['Y']

    def cmp(src, op, val):
        n = nt.nodes.new('ShaderNodeMath'); n.operation = op
        nt.links.new(src, n.inputs[0]); n.inputs[1].default_value = val
        return n.outputs[0]

    def bop(a, b2, op):
        n = nt.nodes.new('ShaderNodeMath'); n.operation = op
        nt.links.new(a, n.inputs[0]); nt.links.new(b2, n.inputs[1])
        return n.outputs[0]

    def rect(u0, u1, v0, v1):
        a = bop(cmp(f_out, 'GREATER_THAN', u0), cmp(f_out, 'LESS_THAN', u1), 'MULTIPLY')
        c = bop(cmp(v_out, 'GREATER_THAN', v0), cmp(v_out, 'LESS_THAN', v1), 'MULTIPLY')
        return bop(a, c, 'MULTIPLY')

    rects = [(-0.1, 1.1, 0.03, 0.11), (-0.1, 1.1, 0.89, 0.97),       # border lines
             (0.05, 0.17, 0.22, 0.78), (0.05, 0.75, 0.66, 0.78),        # meander unit
             (0.63, 0.75, 0.36, 0.78), (0.35, 0.75, 0.36, 0.48),
             (0.35, 0.47, 0.36, 0.58), (-0.1, 1.1, 0.22, 0.32)]
    acc = rect(*rects[0])
    for r in rects[1:]:
        acc = bop(acc, rect(*r), 'MAXIMUM')
    mix = nt.nodes.new('ShaderNodeMix'); mix.data_type = 'RGBA'
    nt.links.new(acc, sock(mix, 'Factor_Float'))
    sock(mix, 'A_Color').default_value = (*lin(base_hex), 1)
    sock(mix, 'B_Color').default_value = (*lin(line_hex), 1)
    nt.links.new(sock(mix, 'Result_Color', out=True), b.inputs['Base Color'])
    b.inputs['Roughness'].default_value = 0.4
    b.inputs['Metallic'].default_value = 0.35
    m.diffuse_color = (*lin(base_hex), 1)
    return m

def leaf_gold(name, hexcol, rough=0.4, metal=0.6):
    """Test 3: wreath gold reads its colour from the per-vertex 'tone' leaf() paints (exports to glTF
    as COLOR_0). Every wreath vertex is painted - fill_tone() covers stems and the bead."""
    m = principled(name, hexcol, rough=rough, metal=metal)
    nt = m.node_tree
    b = [n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'][0]
    ca = nt.nodes.new('ShaderNodeVertexColor'); ca.layer_name = 'tone'
    nt.links.new(ca.outputs['Color'], b.inputs['Base Color'])
    return m

# Test 4: re-tuned against the owner's target image (disc #EC8C3C, shoe #ED913E - lighter, yellower,
# less saturated than the nine PNGs); whites darkened (target toga #DDD1BE, glove #E8DEC9).
ORANGE_DARK = opt('--orange-dark', '#CC6414')
ORANGE_LIGHT = opt('--orange-light', '#DC7622')
RIM_LIGHT = opt('--rim-light', '#E27C22')
GOLD = opt('--gold', '#E6BC7A')
SHOE = opt('--shoe', '#DE8024')
CLOTH = opt('--cloth', '#C9BEAA')
GLOVE = opt('--glove', '#CFC4AE')
GRAIN_FACE = tuple(float(x) for x in opt('--grain-face', '6,160,3,22').split(','))
GRAIN_RIM = tuple(float(x) for x in opt('--grain-rim', '6,120,3,18').split(','))

M = {
    # Test 2 oranges: tuned under the Standard view transform against the sampled art face #FA791B;
    # grain softened (closer ramp, finer, less distortion) - it read as stripes in test 1.
    # Test 3: disc grain is irregular painted-wood streaks (see grained(painted=...)); arm unchanged.
    'face':    grained('her_face', ORANGE_DARK, ORANGE_LIGHT, rough=0.6, bump=0.004, painted=GRAIN_FACE),
    'rim':     grained('her_rim', ORANGE_DARK, RIM_LIGHT, rough=0.45, bump=0.01, painted=GRAIN_RIM),
    'dark':    principled('her_dark_brown', '#3C1B0C', rough=0.6),
    # Test 4: target eyes are flat painted ovals (no lens gloss); a wedge glint, not a round one.
    'sclera':  principled('her_sclera', '#DCD0B8', rough=0.7),
    'pupil':   principled('her_pupil', '#26130A', rough=0.55),
    'glint':   principled('her_catchlight', '#F4F0E8', rough=0.6),
    'nose':    principled('her_nose', '#4A1C0B', rough=0.6),
    'teeth':   principled('her_teeth', '#E4DAC6', rough=0.6),
    'gold':    leaf_gold('her_gold_leaf', GOLD, rough=0.32, metal=0.7),
    'cloth':   principled('her_cloth', CLOTH, rough=0.85, sheen=0.2),
    'trim':    meander('her_trim', '#D8B26A', '#8A5E28'),
    'rope':    principled('her_rope', '#C99A55', rough=0.55, metal=0.15),
    'arm':     grained('her_arm', ORANGE_DARK, ORANGE_LIGHT, rough=0.5, scale=40, bump=0.01, distortion=2.5),
    'stripe':  principled('her_arm_stripe', '#5E2A12', rough=0.55),
    'glove':   principled('her_glove', GLOVE, rough=0.7),
    'leg':     principled('her_leg', '#4A2A18', rough=0.6),       # target legs are brown, not black
    'shoe':    principled('her_shoe', SHOE, rough=0.55),
    'sole':    principled('her_sole', '#5A2410', rough=0.6),       # dark band lines on the boot
    'outline': principled('her_outline', '#3A1709', rough=1.0),
    'floor':   principled('backdrop', '#1A1A1C', rough=0.95),
}
M['outline'].use_backface_culling = True
try:
    M['outline'].use_backface_culling_shadow = True
except Exception:
    pass

# ---------------------------------------------------------------- mesh helpers
CHAR = []

def merge(dst, src, mat=0):
    vm = {v: dst.verts.new(v.co) for v in src.verts}
    for f in src.faces:
        nf = dst.faces.new([vm[v] for v in f.verts])
        nf.material_index = mat
    src.free()

def make_obj(name, bm, mats, subsurf=0, outline=0.0, cloth=0.0, recalc=True):
    if recalc:
        bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me); bm.free()
    for p in me.polygons:
        p.use_smooth = True
    ob = bpy.data.objects.new(name, me)
    scene.collection.objects.link(ob)
    for m in mats:
        me.materials.append(M[m])
    if cloth:
        s = ob.modifiers.new('cloth_thickness', 'SOLIDIFY')
        s.thickness = cloth; s.offset = 0.0
    if subsurf:
        s = ob.modifiers.new('subd', 'SUBSURF')
        s.levels = 1; s.render_levels = subsurf
    if outline:
        me.materials.append(M['outline'])
        o = ob.modifiers.new('outline_hull', 'SOLIDIFY')   # render-only ink line, removed before export
        o.thickness = outline; o.offset = 1.0
        o.use_flip_normals = True; o.use_rim = False
        o.material_offset = len(mats)
    CHAR.append(ob)
    return ob

def frames(pts, closed=False):
    n = len(pts); Ts = []
    for i in range(n):
        a = pts[(i - 1) % n] if closed else pts[max(i - 1, 0)]
        b = pts[(i + 1) % n] if closed else pts[min(i + 1, n - 1)]
        Ts.append((b - a).normalized())
    ref = Vector((0, 0, 1)) if abs(Ts[0].z) < 0.9 else Vector((1, 0, 0))
    Ns = [(ref - Ts[0] * ref.dot(Ts[0])).normalized()]
    for i in range(1, n):
        v = Ns[-1] - Ts[i] * Ns[-1].dot(Ts[i])
        Ns.append(v.normalized())
    Bs = [Ts[i].cross(Ns[i]) for i in range(n)]
    return Ts, Ns, Bs

def tube(bm, pts, radius, seg=12, mat=0, matfn=None, closed=False, cap0=False, cap1=False):
    Ts, Ns, Bs = frames(pts, closed)
    rings = []
    for i, p in enumerate(pts):
        r = radius[i] if isinstance(radius, (list, tuple)) else radius
        rings.append([bm.verts.new(p + (Ns[i] * math.cos(2 * math.pi * k / seg) +
                                         Bs[i] * math.sin(2 * math.pi * k / seg)) * r)
                      for k in range(seg)])
    n = len(rings)
    for i in range(n if closed else n - 1):
        r0, r1 = rings[i], rings[(i + 1) % n]
        mi = matfn(i / max(1, n - 2)) if matfn else mat
        for k in range(seg):
            f = bm.faces.new((r0[k], r0[(k + 1) % seg], r1[(k + 1) % seg], r1[k]))
            f.material_index = mi
    for flag, idx, sgn in ((cap0, 0, -1), (cap1, n - 1, 1)):
        if flag:
            r = radius[idx] if isinstance(radius, (list, tuple)) else radius
            c = bm.verts.new(pts[idx] + Ts[idx] * sgn * r * 0.7)
            for k in range(seg):
                f = bm.faces.new((rings[idx][k], rings[idx][(k + 1) % seg], c))
                f.material_index = mat
    return rings

def cr(ctrl, n=8):
    """Catmull-Rom through control points."""
    P = [ctrl[0]] + list(ctrl) + [ctrl[-1]]
    out = []
    for i in range(1, len(P) - 2):
        p0, p1, p2, p3 = P[i - 1], P[i], P[i + 1], P[i + 2]
        for j in range(n):
            t = j / n; t2 = t * t; t3 = t2 * t
            out.append(0.5 * ((2 * p1) + (p2 - p0) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
                              (3 * p1 - p0 - 3 * p2 + p3) * t3))
    out.append(ctrl[-1].copy())
    return out

def qsphere(center, radii, cuts=3, rot=None, box=0.0):
    """All-quad sphere (subdivided cube cast to a sphere) in its own bmesh."""
    b = bmesh.new()
    bmesh.ops.create_cube(b, size=2.0)
    bmesh.ops.subdivide_edges(b, edges=b.edges[:], cuts=cuts, use_grid_fill=True)
    rot = rot or Matrix.Identity(3)
    for v in b.verts:
        n = v.co.normalized()
        if box:
            n = Vector([math.copysign(abs(c) ** box, c) for c in n])
        v.co = rot @ Vector((n.x * radii[0], n.y * radii[1], n.z * radii[2])) + Vector(center)
    return b

def rope(bm, pts, R, closed=False, mat=0, pitch=0.035):
    Ts, Ns, Bs = frames(pts, closed)
    s = [0.0]
    for i in range(1, len(pts)):
        s.append(s[-1] + (pts[i] - pts[i - 1]).length)
    L = s[-1] + ((pts[0] - pts[-1]).length if closed else 0.0)
    turns = max(1, round(L / pitch)) if closed else L / pitch
    for k in range(3):
        strand = []
        for i, p in enumerate(pts):
            th = 2 * math.pi * turns * s[i] / L + 2 * math.pi * k / 3
            strand.append(p + (Ns[i] * math.cos(th) + Bs[i] * math.sin(th)) * R * 0.55)
        tube(bm, strand, R * 0.55, seg=8, mat=mat, closed=closed)

PAINTED = set()                           # verts leaf() has toned
LEAF_RNG = random.Random(1873)            # fixed seed: rerunnable, same crumple every build
LEAF_BROWN = opt('--leaf-brown', '#7A4A1A')  # test 3: brown shading toward base, edges, midrib

def tone_layer(bm):
    return bm.verts.layers.float_color.get('tone') or bm.verts.layers.float_color.new('tone')

def fill_tone(bm, hexcol):
    """Give every vertex not painted by leaf() (stems, bead) a flat tone."""
    cl = tone_layer(bm); c = (*lin(hexcol), 1.0)
    for v in bm.verts:
        if v not in PAINTED:
            v[cl] = c

def leaf(bm, base, D, Nrm, L, W, mat=0, curl=0.06, tone=1.0):
    """Laurel leaf (test 3): broad almond blade, widest ~40% up, pointed tip, thin solid.
    Test 3 adds, from the art's crumpled painted leaves: a sharper V fold with a narrow midrib crease,
    per-leaf crumple (edge waviness, a bent midline, a twist, varied tip curl), and a vertex-colour
    'tone' - gold body, brown toward the base, the edges and along the midrib, varied per leaf.
    tone < 1 darkens a leaf that sits buried under its neighbours (the art's brown gaps)."""
    D = D.normalized(); Nrm = (Nrm - D * Nrm.dot(D)).normalized()
    X = Nrm.cross(D).normalized()
    R = LEAF_RNG
    p1, p2, p3 = (R.uniform(0, 2 * math.pi) for _ in range(3))
    wav = W * R.uniform(0.25, 0.38)                   # crumple amplitude
    bend = W * R.uniform(-0.25, 0.25)                 # midline not quite straight
    twist = R.uniform(-0.5, 0.5)                    # one half rolls up, the other down
    curl *= R.uniform(0.5, 1.7)
    bright = R.uniform(0.95, 1.15) * tone
    warm = (1.0, R.uniform(0.95, 1.02), R.uniform(0.85, 1.05))
    extra = R.uniform(0.0, 0.12)                      # some leaves browner overall
    body = [c * bright * k for c, k in zip(lin(GOLD), warm)]
    brown = lin(LEAF_BROWN)
    cl = tone_layer(bm)
    NS, TS = 10, (-1, -0.55, -0.12, 0, 0.12, 0.55, 1)
    layers = []
    for lay, off in enumerate((0.0, -0.0022)):
        rows = []
        for si in range(NS):
            s = si / (NS - 1)
            w = W * math.sin(math.pi * min(1.0, max(0.0, s)) ** 0.8) ** 0.9 if 0 < s < 1 else W * 0.12 * (s == 0)
            env = math.sin(math.pi * s)               # no crumple at base or tip
            row = []
            for t in TS:
                h = (0.3 * w * abs(t) ** 0.8                               # V fold, crease at the midrib
                     + curl * L * s * s
                     + env * wav * (0.6 * t * math.sin(2.5 * math.pi * s + p1)
                                    + 0.5 * abs(t) ** 1.5 * math.sin(4.5 * math.pi * s + p2))
                     + twist * w * t * s)
                p = base + D * (L * s) + X * (t * w + bend * math.sin(math.pi * s * 1.3 + p3) * env) + Nrm * (h + off)
                v = bm.verts.new(p)
                f = (max(0.0, 1 - s / 0.3) * 0.7                          # base
                     + max(0.0, abs(t) - 0.55) / 0.45 * 0.35                  # edges
                     + (0.5 if t == 0 and 0.06 < s < 0.92 else 0.0)         # midrib line
                     + extra)
                f = min(1.0, f)
                v[cl] = (*[a + (b - a) * f for a, b in zip(body, brown)], 1.0)
                PAINTED.add(v)
                row.append(v)
            rows.append(row)
        layers.append(rows)
    top, bot = layers
    for i in range(NS - 1):
        for j in range(len(TS) - 1):
            f = bm.faces.new((top[i][j], top[i][j + 1], top[i + 1][j + 1], top[i + 1][j])); f.material_index = mat
            f = bm.faces.new((bot[i][j], bot[i + 1][j], bot[i + 1][j + 1], bot[i][j + 1])); f.material_index = mat
    J = len(TS) - 1
    for i in range(NS - 1):                                  # close the two long edges
        for j in (0, J):
            q = (top[i][j], top[i + 1][j], bot[i + 1][j], bot[i][j])
            f = bm.faces.new(q if j == 0 else q[::-1]); f.material_index = mat

def rotY(v, ang):
    """Rotate a vector about the Y axis (in the face plane)."""
    return Matrix.Rotation(ang, 3, 'Y') @ v

# ---------------------------------------------------------------- body_disc
def build_disc():
    bm = bmesh.new()
    N = 16
    grid = lambda i, j: (-1 + 2 * i / N, -1 + 2 * j / N)
    def disc_xy(u, v):
        return u * math.sqrt(1 - v * v / 2), v * math.sqrt(1 - u * u / 2)
    F, B = {}, {}
    for i in range(N + 1):
        for j in range(N + 1):
            a, c = disc_xy(*grid(i, j))
            x, z = a * RX, ZC + c * RZ
            F[i, j] = bm.verts.new((x, face_y(x, z), z))
            r2 = a * a + c * c
            B[i, j] = bm.verts.new((x, T / 2 + DOME_B * max(0, 1 - r2), z))
    for i in range(N):
        for j in range(N):
            bm.faces.new((F[i, j], F[i + 1, j], F[i + 1, j + 1], F[i, j + 1]))
            bm.faces.new((B[i, j], B[i, j + 1], B[i + 1, j + 1], B[i + 1, j]))
    per = [(i, 0) for i in range(N)] + [(N, j) for j in range(N)] + \
          [(i, N) for i in range(N, 0, -1)] + [(0, j) for j in range(N, 0, -1)]
    ys = [-T / 2 + 0.014, -0.02, 0.02, T / 2 - 0.014]
    rings = [[F[p] for p in per]]
    for y in ys:
        rings.append([bm.verts.new((F[p].co.x, y, F[p].co.z)) for p in per])
    rings.append([B[p] for p in per])
    n = len(per)
    for r in range(len(rings) - 1):
        for k in range(n):
            bm.faces.new((rings[r][k], rings[r][(k + 1) % n], rings[r + 1][(k + 1) % n], rings[r + 1][k]))
    return make_obj('body_disc', bm, ['face'], subsurf=2, outline=0.006)

# ---------------------------------------------------------------- rim (bezel lips, front + back)
def build_rim():
    # Test 4: target edge = a dark brown line round the face, a thin orange lip, then the side
    # thickness with its own dark outline. Lip slimmed 0.024 -> 0.015; brown face line added.
    bm = bmesh.new()
    for y in (-T / 2 + 0.004, T / 2 - 0.004):
        pts = [ell(2 * math.pi * k / 72, 1.0, y) for k in range(72)]
        tube(bm, pts, 0.015, seg=12, closed=True)
    pts = []
    for k in range(96):
        p = ell(2 * math.pi * k / 96, 0.955)
        p.y = face_y(p.x, p.z) - 0.0012
        pts.append(p)
    tube(bm, pts, 0.0055, seg=8, mat=1, closed=True)
    return make_obj('rim', bm, ['rim', 'dark'], subsurf=2, outline=0.005)

# ---------------------------------------------------------------- face_marks (12 ticks)
def build_ticks():
    bm = bmesh.new()
    for h in range(12):
        th = math.radians(90 - 30 * h)
        # Test 4: target ticks are thin painted dashes, nearly flush - 12 a short vertical dash,
        # 3 and 9 longer bars, short dashes between.
        if h in (3, 9):
            f0, f1, w = 0.66, 0.89, 0.017
        elif h == 0:
            f0, f1, w = 0.72, 0.85, 0.013
        else:
            f0, f1, w = 0.78, 0.88, 0.012
        rad = Vector((math.cos(th), 0, math.sin(th)))
        tan = Vector((-math.sin(th), 0, math.cos(th)))
        corners = []
        for f in (f0, f1):
            for s in (-1, 1):
                p = ell(th, f) + tan * (s * w / 2)
                corners.append(p)
        vs = []
        for dy in (-0.0012, 0.003):
            for p in corners:
                vs.append(bm.verts.new((p.x, face_y(p.x, p.z) + dy - 0.001, p.z)))
        a, b, c, d, e, f2, g, hh = vs  # front: a b c d, back: e f g h (order f0-, f0+, f1-, f1+)
        for q in ((a, b, d, c), (e, g, hh, f2), (a, e, f2, b), (c, d, hh, g), (a, c, g, e), (b, f2, hh, d)):
            bm.faces.new(q)
    return make_obj('face_marks', bm, ['dark'])

# ---------------------------------------------------------------- eyes, lashes, nose, mouth
def sclera_y(xc, zc, x, z):
    base = face_y(xc, zc) - 0.002
    e = 1 - ((x - xc) / EYE_W) ** 2 - ((z - zc) / EYE_H) ** 2
    return base - 0.004 * math.sqrt(max(0.0, e))      # test 4: near-flush painted eye (was 0.012)

def conform(b, xc, zc, ax, az, surf, lift):
    """Flatten a sphere onto a curved surface, keeping concentric loops (rig-ready eye/pupil)."""
    for v in b.verts:
        e = 1 - ((v.co.x - xc) / ax) ** 2 - ((v.co.z - zc) / az) ** 2
        s = surf(v.co.x, v.co.z)
        v.co.y = s - lift * math.sqrt(max(0.0, e)) - 0.0006 if v.co.y < 0 else s + 0.002

def build_eye(side):
    name = 'eye_L' if side > 0 else 'eye_R'
    xc, zc = side * EYE_X, EYE_Z
    bm = bmesh.new()
    sb = qsphere((xc, 0, zc), (EYE_W, 0.012, EYE_H), cuts=4)
    conform(sb, xc, zc, EYE_W, EYE_H, lambda x, z: face_y(x, z) - 0.002, 0.004)
    merge(bm, sb, 0)
    # Test 4, target read: both pupils sit high and to the VIEWER's left (-X), filling ~0.62 of the
    # eye width, top close to the eye's top; glint = small pale wedge at the pupil's upper left.
    pax, paz = 0.047, 0.088
    px, pz = xc - 0.013, zc + 0.034
    pb = qsphere((px, 0, pz), (pax, 0.01, paz), cuts=3)
    conform(pb, px, pz, pax, paz, lambda x, z: sclera_y(xc, zc, x, z), 0.0015)
    merge(bm, pb, 1)
    gx, gz = px - 0.022, pz + 0.05
    gb = bmesh.new()                                   # wedge: thin triangle pointing down-right
    tri = [(gx - 0.006, gz + 0.012), (gx + 0.007, gz + 0.004), (gx + 0.004, gz - 0.016)]
    gv = [gb.verts.new((x, sclera_y(xc, zc, x, z) - 0.0024, z)) for x, z in tri]
    gb.faces.new(gv)
    merge(bm, gb, 2)
    ol = []
    for k in range(48):
        a = 2 * math.pi * k / 48
        x, z = xc + (EYE_W + 0.003) * math.cos(a), zc + (EYE_H + 0.003) * math.sin(a)
        ol.append(Vector((x, face_y(x, z) - 0.003, z)))
    tube(bm, ol, 0.0085, seg=8, mat=3, closed=True)     # thick brown outline, as drawn
    return make_obj(name, bm, ['sclera', 'pupil', 'glint', 'dark'], subsurf=1)

def build_lashes(side):
    name = 'lash_L' if side > 0 else 'lash_R'
    xc, zc = side * EYE_X, EYE_Z
    bm = bmesh.new()
    for deg in (52, 74, 97):
        a = math.radians(deg if side > 0 else 180 - deg)
        R = Vector((math.cos(a), 0, math.sin(a)))
        b = Vector((xc + (EYE_W + 0.006) * R.x, 0, zc + (EYE_H + 0.006) * R.z))
        ctrl = [b, b + R * 0.022, b + R * 0.038 + Vector((side * 0.016, 0, 0.004))]
        pts = cr(ctrl, 5)
        for p in pts:
            p.y = face_y(p.x, p.z) - 0.003
        radii = [0.006 - 0.004 * i / (len(pts) - 1) for i in range(len(pts))]   # test 4: bolder lashes
        tube(bm, pts, radii, seg=6, cap1=True)
    return make_obj(name, bm, ['dark'])

def build_nose():
    z = 0.728                                          # test 4: target nose sits between the eyes' lower half
    b = qsphere((0, 0, z), (0.019, 0.01, 0.018), cuts=3)
    conform(b, 0, z, 0.019, 0.018, face_y, 0.004)
    return make_obj('nose', b, ['nose'], subsurf=1)

def build_mouth():
    bm = bmesh.new()
    # Test 4: target mouth is a narrow CLOSED smile - dark upper line, a thin pale band under it,
    # a thin dark lower line; shallow curve. Was a wide open crescent.
    zm, hw, NU = 0.59, 0.088, 24
    fr = [0.0, 0.3, 0.55, 0.82, 1.0]
    mats = [0, 0, 1, 0]
    grid = []
    for iu in range(NU + 1):
        u = -1 + 2 * iu / NU
        top = zm + 0.016 * u * u
        bot = top - (0.007 + 0.013 * (1 - u * u) ** 0.8)
        col = []
        for f in fr:
            x, z = u * hw, top + (bot - top) * f
            col.append(bm.verts.new((x, face_y(x, z) - 0.0025, z)))
        grid.append(col)
    for iu in range(NU):
        for r in range(len(fr) - 1):
            fc = bm.faces.new((grid[iu][r], grid[iu + 1][r], grid[iu + 1][r + 1], grid[iu][r + 1]))
            fc.material_index = mats[r]
    return make_obj('mouth', bm, ['dark', 'teeth'])

# ---------------------------------------------------------------- wreath + ornament
def build_wreath():
    """Test 2 laurel crown, rebuilt from the art (welcoming/waving/thinking/presenting crops):
    one band hugging the top of the disc edge from ~22 deg to ~158 deg; broad pointed almond leaves
    in overlapping pairs along it (one leaning out over the rim, one in onto the face), every pair
    pointing up towards the front ornament at 12 o'clock; small upright leafy sprigs above the band.
    Guess 4 kept: the band continues over the rim and down the back face."""
    bm = bmesh.new()
    # Test 4, owner target: a slimmer band of smaller leaves riding the top edge, no centre ornament,
    # 7 tall thin upright sprigs. Leaves x0.8; over-rim and back-band leaves kept off the sides
    # (they stacked into the ear-like column in three-quarter and the pale sliver at the right end).
    LL, LW = 0.045, 0.0105
    SPREAD = math.radians(34)
    BAND_Y = T / 2 + 0.026                  # bezel lip reaches T/2 + 0.02

    def frame(deg):
        th = math.radians(deg)
        sgn = 1 if deg < 90 else -1
        tan = Vector((-RX * math.sin(th), 0, RZ * math.cos(th))).normalized() * sgn
        rad = Vector((math.cos(th) / RX, 0, math.sin(th) / RZ)).normalized()
        return th, tan, rad

    half = [22 + i * 6.3 for i in range(11)]           # 22 .. 85 deg, tips reach the ornament
    stations = half + [180 - d for d in half]
    for idx, deg in enumerate(stations):
        th, tan, rad = frame(deg)
        jit = 0.9 + 0.2 * ((idx * 7) % 5) / 4
        for yside in (-1, 1):                          # front band on the face edge, back band mirrored
            if yside > 0 and not 42 <= deg <= 138:
                continue
            p = ell(th, 1.0)                         # band straddles the silhouette edge, as drawn
            p.y = yside * BAND_Y                     # in front of the bezel lip, never under it
            face_n = Vector((0, yside, 0))
            for k, a in enumerate((SPREAD, -SPREAD * 1.15)):
                d = tan * math.cos(a) + rad * math.sin(a)
                n = face_n + rad * (0.45 if a > 0 else 0.0)
                leaf(bm, p + tan * (0.006 * k) + rad * (0.004 if a > 0 else -0.004), d, n, LL * jit, LW * jit)
            leaf(bm, p + tan * 0.02 + face_n * 0.004, tan, face_n, LL * 0.8, LW * 0.9, tone=0.8)   # crowding mid leaf
        if 46 <= deg <= 134:                           # over the rim itself, joining front and back
            for yy, a in ((-0.05, 0.45), (0.0, -0.45 if idx % 2 else 0.45), (0.05, -0.45)):
                p = ell(th, 1.0, yy) + rad * 0.03         # clear of the bezel tube (r 0.024)
                d = tan * math.cos(a) + Vector((0, math.sin(a), 0))
                leaf(bm, p, d, rad, LL * 0.95 * jit, LW * jit)
    for yside in (-1, 1):                              # band stems (mostly hidden)
        pts = []
        for d in (range(20, 161, 5) if yside < 0 else range(42, 139, 4)):
            p = ell(math.radians(d), 0.99)
            p.y = yside * (BAND_Y - 0.004)
            pts.append(p)
        tube(bm, pts, 0.004, seg=6)
    # Test 3 sprigs, re-read at 8x (welcoming, thinking, presenting): each is a small upright laurel
    # twig TIP - one dominant pointed tip leaf, one pair of broad leaves springing wide (~55 deg) from
    # just below it, and on the outer sprigs a second, smaller pair lower down. Short bare stem.
    # Test 2 stacked 2 even pairs + a small tip close along the stem: that is what read as a wheat ear.
    # Side leaves are cupped (normals tilted ~30 deg about their own axis) so they keep a body in
    # three-quarter and back views instead of going edge-on into a spike.
    # Test 4 sprigs, owner target: 7 tall thin twigs standing up off the band (ends, mids, centre),
    # each a thin stem with 2-3 pairs of small narrow leaflets and a pointed tip leaf. Nearly vertical,
    # leaning only slightly outward. No centre fan ornament (target shows none) - guess 5 dropped.
    for deg, tall in ((24, 0.85), (47, 1.0), (68, 0.9), (90, 1.05), (112, 0.9), (133, 1.0), (156, 0.85)):
        th, tan, rad = frame(deg)
        S = (rad * 0.35 + Vector((0, 0, 1.0))).normalized()
        b = ell(th, 1.0, -BAND_Y) + rad * 0.012
        SL = 0.075 * tall
        tube(bm, [b, b + S * SL * 0.5, b + S * SL], [0.0026, 0.0022, 0.0016], seg=6, cap1=True)
        for s, ls in ((0.38, 0.8), (0.6, 0.9), (0.8, 0.85)):
            for sg in (-1, 1):
                d = rotY(S, sg * math.radians(50))
                n = Matrix.Rotation(sg * math.radians(30), 3, d) @ Vector((0, -1, 0))
                leaf(bm, b + S * (SL * s), d, n, 0.027 * ls * tall, 0.0095 * ls, curl=0.08)
        leaf(bm, b + S * SL * 0.93, S, Vector((0, -1, 0)), 0.034 * tall, 0.0098, curl=0.06)
    fill_tone(bm, '#B98A45')                           # stems: darker gold, as drawn
    ob = make_obj('wreath', bm, ['gold'], recalc=False)
    return ob

# ---------------------------------------------------------------- toga, trim, knot, cord, skirt
TB = T / 2 + 0.032
ZB = 0.37
def smax(a, b, k=0.04):
    return 0.5 * (a + b + math.sqrt((a - b) ** 2 + k * k))
def disc_hw(z):
    q = (z - ZC) / RZ
    return RX * math.sqrt(max(0.0, 1 - q * q))
def toga_a(z):
    return smax(disc_hw(z) + 0.028, 0.17)          # test 4: narrower waist (was 0.2)
def ztop(x):
    return 0.55 + 0.43 * x
def sup(phi):
    c, s = math.cos(phi), math.sin(phi)
    return math.copysign(abs(c) ** 0.5, c), math.copysign(abs(s) ** 0.5, s)

def toga_pt(phi, frac, dz=0.0, scale=1.0):
    cx, sy = sup(phi)
    z = ZB + (0.55 - ZB) * frac
    for _ in range(8):
        z = ZB + (ztop(toga_a(z) * cx) - ZB) * frac
    z += dz
    a = toga_a(z)
    rip = 1 + 0.035 * math.sin(7 * phi + 1.3) * (1 - frac) ** 1.5 + 0.012 * math.sin(13 * phi) * (1 - frac)
    return Vector((a * cx * rip * scale, TB * sy * rip * scale, z))

def skirt_pt(phi, z, scale=1.0):
    h = (0.41 - z) / (0.41 - 0.205)
    # Test 4, target skirt: narrower (~0.62 of the face width), a slight flare, soft vertical folds.
    a, b = 0.158 + 0.03 * h, 0.105 + 0.022 * h
    cx, sy = sup(phi)
    rip = 1 + (0.015 + 0.045 * h) * math.sin(13 * phi + 0.7) + 0.02 * h * math.sin(6 * phi + 2)
    return Vector((a * cx * rip * scale, b * sy * rip * scale, z))

def grid_surface(bm, fn, cols, rows, cyclic=True, mat=0, uv=None):
    V = [[bm.verts.new(fn(c, r)) for c in range(cols + (0 if cyclic else 1))] for r in range(rows + 1)]
    # test 4 fix: reuse the layer - a second new() put the hem UVs on 'UVMap.001', so the hem read
    # the first layer (all zeros) and rendered as plain gold with no Greek key
    uvl = (bm.loops.layers.uv.get('UVMap') or bm.loops.layers.uv.new('UVMap')) if uv else None
    w = len(V[0])
    for r in range(rows):
        for c in range(cols):
            c2 = (c + 1) % w if cyclic else c + 1
            f = bm.faces.new((V[r][c], V[r][c2], V[r + 1][c2], V[r + 1][c]))
            f.material_index = mat
            if uv:
                for lp, (cc, rr) in zip(f.loops, ((c, r), (c + 1, r), (c + 1, r + 1), (c, r + 1))):
                    lp[uvl].uv = uv(cc, rr)
    return V

def build_cloth():
    COLS, ROWS = 64, 18
    ph = lambda c: -math.pi / 2 + 2 * math.pi * c / COLS      # seam at the back
    bm = bmesh.new()
    grid_surface(bm, lambda c, r: toga_pt(ph(c), r / ROWS), COLS, ROWS)
    make_obj('toga', bm, ['cloth'], subsurf=2, outline=0.005, cloth=0.006, recalc=False)

    bm = bmesh.new()
    SR = 10
    grid_surface(bm, lambda c, r: skirt_pt(ph(c), 0.41 - (0.41 - 0.205) * r / SR), COLS, SR)
    make_obj('skirt', bm, ['cloth'], subsurf=2, outline=0.005, cloth=0.006, recalc=False)

    # trim: sash edge + hem, UV u = metres / 0.034 along the strip
    bm = bmesh.new()
    per = 2 * (0.25 + 0.12) * 1.1 / COLS / 0.034
    grid_surface(bm, lambda c, r: toga_pt(ph(c), 1.0, -0.034 * (1 - r / 2), 1.03), COLS, 2,
                 cyclic=False, uv=lambda c, r: (c * per, r / 2))
    # test 4: hem band taller (target Greek-key hem ~0.3 of the skirt), pushed clear of the folds
    grid_surface(bm, lambda c, r: skirt_pt(ph(c), 0.205 + 0.05 * r / 2, 1.05), COLS, 2,
                 cyclic=False, uv=lambda c, r: (c * per * 0.75, r / 2))
    make_obj('toga_trim', bm, ['trim'], subsurf=1, recalc=False)

    # Test 4 shoulder fastening, owner target: a small gold LAUREL RING (two rows of leaves round a
    # thin stem hoop), the sash cloth pulled through it and folding up and back over the disc edge.
    # Replaces test 3's rope ring + white ball.
    bm = bmesh.new()
    kc = Vector((0.25, -TB - 0.014, 0.672))
    hoop = [kc + Vector((0.038 * math.cos(2 * math.pi * k / 40), -0.004, 0.038 * math.sin(2 * math.pi * k / 40)))
            for k in range(40)]
    tube(bm, hoop, 0.004, seg=6, closed=True)
    for k in range(16):
        a = 2 * math.pi * k / 16
        rad = Vector((math.cos(a), 0, math.sin(a)))
        tan = Vector((-math.sin(a), 0, math.cos(a)))
        p = kc + rad * 0.038 + Vector((0, -0.006, 0))
        for off, lean in ((1, 0.55), (-1, -0.55)):
            d = (tan + rad * lean).normalized()
            leaf(bm, p + rad * 0.003 * off, d, Vector((0, -1, 0)) + rad * 0.3 * off, 0.024, 0.0075, curl=0.05)
    fill_tone(bm, '#B98A45')
    make_obj('shoulder_ring', bm, ['gold'], recalc=False)
    bm = bmesh.new()
    tail = [kc + Vector((-0.004, 0.008, -0.012)), kc + Vector((0.01, -0.004, 0.018)),
            Vector((0.29, -0.112, 0.725)), Vector((0.322, -0.09, 0.765)), Vector((0.35, -0.04, 0.782)),
            Vector((0.356, 0.02, 0.77)), Vector((0.345, 0.07, 0.735))]
    pts = cr(tail, 6)
    tube(bm, pts, [0.02 + 0.007 * math.sin(math.pi * i / (len(pts) - 1)) for i in range(len(pts))],
         seg=12, cap0=True, cap1=True)
    make_obj('shoulder_drape', bm, ['cloth'], subsurf=2, outline=0.005)

    # Test 4 waist cord, target: thicker, paler rope; a real knot left of centre; two ends hanging
    # almost to the hem band, frayed at the tips.
    bm = bmesh.new()
    loop = [toga_pt(2 * math.pi * k / 72, 0.0, 0.002, 1.13) for k in range(72)]
    for p in loop:
        p.z = 0.372
    rope(bm, loop, 0.019, closed=True, pitch=0.04)
    yf = -TB * 1.13 - 0.02
    fc = Vector((-0.03, yf - 0.006, 0.37))
    merge(bm, qsphere(fc, (0.026, 0.018, 0.024), cuts=3), 0)
    rope(bm, [fc + Vector((0.026 * math.cos(2 * math.pi * k / 24), -0.01, 0.022 * math.sin(2 * math.pi * k / 24)))
              for k in range(24)], 0.009, closed=True, pitch=0.02)
    for ends in ([(-0.04, 0.355), (-0.06, 0.31), (-0.066, 0.262)], [(-0.02, 0.355), (0.0, 0.31), (0.01, 0.258)]):
        ctrl = [Vector((x, yf, z)) for x, z in ends]
        rope(bm, cr(ctrl, 6), 0.014, pitch=0.03)
        e = ctrl[-1]
        for j in range(5):                            # frayed tassel tip
            aj = 2 * math.pi * j / 5
            tip = e + Vector((0.009 * math.cos(aj), 0.006 * math.sin(aj), -0.024))
            tube(bm, [e + Vector((0, 0, 0.004)), tip], [0.004, 0.0018], seg=5, cap1=True)
    make_obj('waist_cord', bm, ['rope'], subsurf=1)

# ---------------------------------------------------------------- arms + gloves
def stripe_fn(s):
    return 1 if any(a <= s <= b for a, b in ((0.72, 0.77), (0.81, 0.86), (0.90, 0.95))) else 0

def build_arm(side, ctrl):
    name = 'arm_L' if side > 0 else 'arm_R'
    pts = cr([Vector(p) for p in ctrl], 10)
    bm = bmesh.new()
    tube(bm, pts, 0.025, seg=12, matfn=stripe_fn)   # test 4: target arms thinner (was 0.03)
    make_obj(name, bm, ['arm', 'stripe'], subsurf=2, outline=0.005)
    return pts[-1], (pts[-1] - pts[-2]).normalized()

# ---------------------------------------------------------------- legs + sandals
def build_leg(side):
    x = side * 0.058
    zs = [0.35, 0.31, 0.27, 0.24, 0.227, 0.215, 0.203, 0.19, 0.16, 0.13, 0.115, 0.107, 0.10, 0.093, 0.08]
    pts = [Vector((x, -0.006 * math.exp(-((z - 0.215) / 0.03) ** 2), z)) for z in zs]
    bm = bmesh.new()
    tube(bm, pts, 0.011, seg=10)
    make_obj('leg_L' if side > 0 else 'leg_R', bm, ['leg'], subsurf=1)

def build_sandal(side):
    # Test 4, owner target: a chunky BOOT - an upright ankle block at the back and a lower rounded
    # toe block in front, two dark band lines (round the toe block and round the ankle block).
    x = side * 0.058
    rot = Matrix.Rotation(math.radians(10 * side), 3, 'Z')
    bm = bmesh.new()
    blocks = (((0, -0.052, 0.03), (0.05, 0.062, 0.03)), ((0, -0.004, 0.056), (0.043, 0.042, 0.052)))
    for c, r in blocks:
        b = qsphere(c, r, cuts=3, box=0.6)
        for v in b.verts:
            v.co.z = max(v.co.z, 0.004)
        merge(bm, b, 0)
    for (c, r), zb in zip(blocks, (c[2] for c, r in blocks)):
        ring = []
        for k in range(40):
            a = 2 * math.pi * k / 40
            ca, sa = math.cos(a), math.sin(a)
            ring.append(Vector((c[0] + r[0] * 1.01 * math.copysign(abs(ca) ** 0.6, ca),
                                c[1] + r[1] * 1.01 * math.copysign(abs(sa) ** 0.6, sa), zb)))
        tube(bm, ring, 0.0035, seg=6, mat=1, closed=True)
    for v in bm.verts:
        v.co = rot @ v.co + Vector((x, 0, 0))
    make_obj('sandal_L' if side > 0 else 'sandal_R', bm, ['shoe', 'sole'], subsurf=2, outline=0.005)

# ---------------------------------------------------------------- build all parts
build_disc(); build_rim(); build_ticks()
for s in (1, -1):
    build_eye(s); build_lashes(s)
build_nose(); build_mouth(); build_wreath(); build_cloth()

# welcoming pose: her right arm (-X) out and low, palm open to the viewer; her left arm (+X) relaxed down
wR, dR = build_arm(-1, [(-0.30, 0.0, 0.70), (-0.37, -0.02, 0.62), (-0.43, -0.05, 0.52), (-0.47, -0.07, 0.445)])
wL, dL = build_arm(1, [(0.30, 0.0, 0.71), (0.37, -0.01, 0.63), (0.385, -0.02, 0.53), (0.365, -0.03, 0.44)])

def glove(side, wrist, F, Np, thumb, curl):
    F = Vector(F).normalized()
    Npv = Vector(Np); Npv = (Npv - F * Npv.dot(F)).normalized()
    X = Npv.cross(F).normalized()
    ts = 1 if X.dot(Vector(thumb)) > 0 else -1
    R = Matrix((X, -Npv, -F)).transposed()
    GS = 1.3                                        # her gloves read large in every pose
    loc = lambda p: R @ (Vector(p) * GS) + wrist
    bm = bmesh.new()
    tube(bm, [loc((0, 0, 0.012)), loc((0, 0, -0.004)), loc((0, 0, -0.02))], [0.034 * GS, 0.036 * GS, 0.034 * GS], seg=12)
    pb = qsphere((0, 0, -0.05), (0.043, 0.024, 0.045), cuts=3)
    for v in pb.verts:
        v.co = loc(v.co)
    merge(bm, pb, 0)
    for xf in (-0.026, 0.0, 0.026):
        ctrl = [Vector((xf, 0, -0.07)), Vector((xf * 1.2, -0.004 - 0.012 * curl, -0.10 + 0.006 * curl)),
                Vector((xf * 1.35, -0.008 - 0.035 * curl, -0.125 + 0.02 * curl))]
        pts = cr(ctrl, 4)
        tube(bm, [loc(p) for p in pts], [(0.0135 - 0.0015 * i / (len(pts) - 1)) * GS for i in range(len(pts))],
             seg=10, cap1=True)
    ctrl = [Vector((ts * 0.03, -0.006, -0.03)), Vector((ts * 0.054, -0.014, -0.047)),
            Vector((ts * 0.068, -0.02, -0.066))]
    tube(bm, [loc(p) for p in cr(ctrl, 4)], 0.013 * GS, seg=10, cap1=True)
    make_obj('glove_L' if side > 0 else 'glove_R', bm, ['glove'], subsurf=2, outline=0.005)

glove(-1, wR, (-1.0, -0.25, -0.45), (0.15, -0.75, 0.65), (0, 0, 1), 0.1)
glove(1, wL, (0.05, -0.15, -1.0), (-0.7, -0.6, 0.0), (0, -1, 0), 0.6)
for s in (1, -1):
    build_leg(s); build_sandal(s)

# ---------------------------------------------------------------- stage: backdrop, lights, world
bpy.ops.mesh.primitive_plane_add(size=30, location=(0, 0, 0))
floor = bpy.context.active_object; floor.name = 'backdrop_floor'
floor.data.materials.append(M['floor'])
floor.hide_render = True        # test 4: target is a flat near-black ground, no floor line (kept in file)

world = bpy.data.worlds.new('dark'); scene.world = world
try:
    world.use_nodes = True
except Exception:
    pass
bgn = world.node_tree.nodes.get('Background') if world.node_tree else None
if bgn is None and world.node_tree:
    world.node_tree.nodes.clear()
    bgn = world.node_tree.nodes.new('ShaderNodeBackground')
    wo = world.node_tree.nodes.new('ShaderNodeOutputWorld')
    world.node_tree.links.new(bgn.outputs[0], wo.inputs[0])
# test 4: world set so it renders the target's #1C1C1E under Standard + exposure -1.6
BG = (0.033, 0.033, 0.037)
if bgn:
    bgn.inputs['Color'].default_value = (*BG, 1)
    bgn.inputs['Strength'].default_value = 1.0
world.color = BG

TARGET = Vector((0, 0, 0.6))
def add_light(name, loc, energy, size, color):
    ld = bpy.data.lights.new(name, 'AREA'); ld.energy = energy; ld.size = size; ld.color = color
    ob = bpy.data.objects.new(name, ld); scene.collection.objects.link(ob)
    ob.location = loc
    ob.rotation_euler = (TARGET - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
    return ob
# test 4: target mood = soft key from upper left, gentle fill; key area light enlarged for softness
add_light('key_warm', (-2.2, -2.8, 2.9), 900, 2.6, (1.0, 0.88, 0.75))
add_light('fill_soft', (2.8, -2.4, 1.1), 340, 3.5, (0.92, 0.94, 1.0))
add_light('rim_back', (1.4, 2.8, 2.3), 600, 1.5, (1.0, 0.9, 0.78))
add_light('rim_back2', (-1.6, 2.6, 1.6), 350, 1.5, (1.0, 0.9, 0.78))

cd = bpy.data.cameras.new('cam'); cd.lens = 85
cam = bpy.data.objects.new('cam', cd); scene.collection.objects.link(cam); scene.camera = cam
VIEW_YAW = {'front': float(opt('--front-yaw', '20')), 'threequarter': -45, 'side': 90, 'back': 180}
CAM_D = float(opt('--cam-d', '3.35'))          # test 4: she fills ~85% of the frame height, like the target

# ---------------------------------------------------------------- render settings
for eng in ('BLENDER_EEVEE', 'BLENDER_EEVEE_NEXT'):
    try:
        scene.render.engine = eng; break
    except Exception:
        continue
try:
    scene.eevee.taa_render_samples = 64
except Exception:
    pass
try:
    scene.eevee.use_raytracing = True
except Exception:
    pass
# test 4: the speckled shadow under the wreath = noisy EEVEE shadow/ray sampling on the grain.
# More shadow rays + steps, full-res tracing, and more TAA samples.
for attr, val in (('shadow_ray_count', 4), ('shadow_step_count', 16), ('taa_render_samples', 128)):
    try:
        setattr(scene.eevee, attr, val)
    except Exception:
        pass
try:
    scene.eevee.ray_tracing_options.resolution_scale = '1'
    scene.eevee.ray_tracing_options.use_denoise = True
except Exception:
    pass
scene.view_settings.view_transform = VIEW_TF
scene.view_settings.exposure = EXPOSURE
for look in ((LOOK,) if VIEW_TF != 'AgX' else (LOOK, 'AgX - ' + LOOK)):
    try:
        scene.view_settings.look = look; break
    except Exception:
        continue
scene.render.resolution_x = scene.render.resolution_y = RES
scene.render.resolution_percentage = 100
scene.render.image_settings.file_format = 'PNG'

# measure her
deps = bpy.context.evaluated_depsgraph_get()
lo = Vector((1e9,) * 3); hi = Vector((-1e9,) * 3)
for ob in CHAR:
    for c in ob.bound_box:
        w = ob.matrix_world @ Vector(c)
        lo = Vector(map(min, lo, w)); hi = Vector(map(max, hi, w))
summary = {'engine': scene.render.engine, 'look': scene.view_settings.look,
           'bbox_min': list(lo), 'bbox_max': list(hi), 'height_m': hi.z - lo.z, 'renders': []}

for v in VIEWS:
    yaw = math.radians(VIEW_YAW[v]); d = CAM_D
    cam.location = TARGET + Vector((d * math.sin(yaw), -d * math.cos(yaw), 0.3))
    cam.rotation_euler = (TARGET - cam.location).to_track_quat('-Z', 'Y').to_euler()
    scene.render.filepath = os.path.join(OUT, 'her_%s.png' % v)
    bpy.ops.render.render(write_still=True)
    summary['renders'].append(scene.render.filepath)

# ---------------------------------------------------------------- GLB export (no Draco / KTX2 / meshopt)
if EXPORT:
    for ob in CHAR:
        for mod in list(ob.modifiers):
            if mod.name == 'outline_hull':
                ob.modifiers.remove(mod)
        if ob.data.materials and ob.data.materials[-1] == M['outline']:
            ob.data.materials.pop()
    # glTF cannot carry procedural nodes: flatten grain / meander to their light colour for the GLB
    for key in ('face', 'rim', 'arm', 'trim'):
        nt = M[key].node_tree
        b = nt.nodes.get('Principled BSDF') or [n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'][0]
        for ln in list(b.inputs['Base Color'].links) + list(b.inputs['Normal'].links):
            nt.links.remove(ln)
        b.inputs['Base Color'].default_value = M[key].diffuse_color
    bpy.ops.object.select_all(action='DESELECT')
    for ob in CHAR:
        ob.select_set(True)
    glb = os.path.join(OUT, GLB_NAME)
    bpy.ops.export_scene.gltf(filepath=glb, export_format='GLB', use_selection=True, export_yup=True,
                              export_apply=True, export_draco_mesh_compression_enable=False)
    data = open(glb, 'rb').read()
    jl = struct.unpack_from('<I', data, 12)[0]
    js = json.loads(data[20:20 + jl])
    tris = 0
    for mesh in js['meshes']:
        for p in mesh['primitives']:
            if p.get('mode', 4) == 4:
                acc = js['accessors'][p['indices'] if 'indices' in p else p['attributes']['POSITION']]
                tris += acc['count'] // 3
    summary.update(glb=glb, glb_bytes=len(data), glb_tris=tris, glb_meshes=len(js['meshes']),
                   extensions=js.get('extensionsUsed', []))
summary['parts'] = sorted(o.name for o in CHAR)
print('HER_SUMMARY ' + json.dumps(summary))
