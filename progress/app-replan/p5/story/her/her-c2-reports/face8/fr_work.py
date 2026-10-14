# face_rig.py - face rig for her (the Clepsydra): facial skeleton + muscle-action (FACS) shape keys.
# Face rig 1 (2026-09-29). Deforms ONLY her existing face geometry (eye_L/R, lash_L/R, mouth); adds no
# feature. She has NO brows: frontalis / corrugator / procerus act on her LASHES + UPPER LIDS (owner
# ruling 2026-09-29).
#
# Why bones DRIVE keys instead of skinning the face: her face is paint-thin geometry lying 2.5-3 mm on
# the curved front of a rigid disc. A hinge rotation (jaw, eyeball, lid) skinned straight onto it would
# swing the verts off the surface or into the disc. So every hinge bone carries human ROM limits and
# drives a surface-conformed shape key (jaw -> jaw_open / jaw_side_*, eye -> look_*, upper lid ->
# blink_*, lower lid -> lid_lo_raise_*). Only the two lip-corner bones skin directly (small in-plane
# translation stays on the surface). glTF carries the keys (morph targets) and the bones, not drivers:
# a runtime sets the key weights itself.
#
# Library use (rig_her.py, later):
#     import face_rig
#     info = face_rig.add_face_rig(bpy.context, her_rig, [OBJ[n] for n in face_rig.FACE_OBJECTS])
#   - call it INSTEAD of rig_her's own face add_keys block (it refuses meshes that already have keys);
#   - call it AFTER the eyes' SUBSURF is applied or let it apply them (it does, level must be 1);
#   - with an armature it parents face_root to bone 'head' and reuses vertex group 'head' as the
#     rigid weight (the lip corners take their share out of it).
# Standalone (builds her with build_her.py unchanged, then a small head armature of its own):
#     blender --background --python face_rig.py -- --stage build|render|export
#     python face_rig.py --compose          (system Python + PIL: labelled sheets, overlay, diffs)
#
# Face rig 2 (2026-09-29), fixes to the rig-1 refute:
#   - blink closes the eye VERTICALLY: the upper rim comes down and the lower rim comes up to meet on a
#     curved closed line (SAG); width is kept; sclera, pupil and glint are CLAMPED between the lids (the
#     pupil is cut by the lid, it never shrinks). Clamping is not linear in the blink value, so blink_S
#     carries in-between correctives blink_ibNN_S (hat drivers on the same lid bone);
#   - look_* fade out as the lid closes (driver), so no pupil shows below/above a closed eye; the
#     fade reads an EQUIVALENT blink B = b + (1-b)*sum(w*closing muscle) (w measured from each key's
#     rim travel) and is solved with the perpendicular look also at full (diagonals stay inside);
#   - every eye muscle key has a blink_x_<AU>_S cancel key (driven by that key's value x blink): a
#     full blink is the same closed eye whatever else is set (wink = AU6 + blink);
#   - close-type muscles (AU4, AU6, AU7, lid_lo_raise) clip the pupil instead of squashing it;
#   - lash roots ride the rim only (no free lift), raise keys capped - surprise stays off the ticks;
#   - AU15 turns the corners down (centre arches, opening thins), within the toga clearance.
# GLB runtime note: drivers do not export. The runtime sets blink_ibNN_S = hat(b), blink_x_* = key*b,
# look_* = look * fade(B) itself; the formulas are stored on the armature as 'face_driver_formulas'.
#
# Face rig 3 (2026-09-29): combination safety.
#   - EVERY face key is now driven. The runtime (and pose_state) sets INPUTS - armature custom props
#     'in_<key name>' (0..1) plus the bones - and an ordered formula list turns them into key weights.
#     The list is written to face_caps.json and stored on the armature as 'face_caps'; Blender drivers are
#     generated from the same strings, so the web runtime reproduces Blender exactly.
#   - Eye caps (per eye): close-type weights are normalised so that sum(close muscles acting on a lid) <= 1
#     and the blink key is scaled by (1 - A). Every eye state is then a CONVEX mix of single-key states,
#     each of which keeps its pupil inside its own lids; the lids are linear, so the mix keeps it inside too.
#   - Mouth caps: every key's lower-lip drop (vs the toga) and lip-gap closing are measured per vertex /
#     column and normalised; sum(weight x share) <= 1 keeps the lip over the toga and the mouth upright.
#   - Sad: AU1 raises the inner upper lid much more (inner corners tilt up); sad drops AU4, keeps the oval.
#
# Face rig 5 (2026-09-29): mouth shapes.
#   - AU15 is built PER SIDE (not a masked copy of the symmetric key): its corner drop ramps from the far
#     half to the moving corner, the midline arch is shared half/half. A one-sided key gives one smooth
#     monotonic curve (curve_probe). The corner drop is FITTED to the toga room at build time.
#   - AU17 (mentalis) raises the middle of both lips (the frown / sad arch) and fills the lower lip (pout).
#   - AU22 (funneler) is a rounded vertical O (narrow, arched top, round bottom).
#   - Eye: raise-type lid keys (AU1/AU2/AU5) fade out as soon as any close (muscle or blink) acts on the
#     upper lid, so the pupil's clipped top always sits under the drawn rim (no chord). look_up eases off
#     over the top of its range (soft knee), so AU7 + a full look-up stays under the single-key baseline.
import sys, os, math, json, re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = 'D:/scratch 2026/her-c2/face7'
BLEND = OUT + '/face7.blend'
GLB = OUT + '/face7.glb'
T8 = 'D:/scratch 2026/her-c2/test8/her_front.png'
T8_CROP = (450, 250, 1150, 850)          # px box of the face in test 8's 1600 px front view
try:
    import bpy
    from mathutils import Vector, Matrix
except ImportError:                      # --compose runs under system Python
    bpy = None

# ---------------------------------------------------------------- her face, as build_her.py makes it
# Copied constants; add_face_rig ASSERTS the meshes still match them (mouth grid exact, eye bbox).
RX, RZ, ZC, T = 0.345, 0.37, 0.76, 0.16
DOME_F = 0.02
EYE_X, EYE_Z, EYE_W, EYE_H = 0.125, 0.81, 0.066, 0.122
MOUTH_Z, MOUTH_HW, NU = 0.61, 0.09, 24
FR0 = (0.0, 0.16, 0.46, 0.75, 1.0)
LASH_STRAND = 67                         # 11 rings x 6 + tip cap, three strands per eye
FACE_OBJECTS = ('eye_L', 'eye_R', 'lash_L', 'lash_R', 'mouth', 'nose')
KEYED_OBJS = ('eye_L', 'eye_R', 'lash_L', 'lash_R', 'mouth')
SIDES = (('L', 1), ('R', -1))            # her left = +X

def face_y(x, z):
    r2 = (x / RX) ** 2 + ((z - ZC) / RZ) ** 2
    return -T / 2 - DOME_F * max(0.0, 1.0 - r2)

def sclera_y(xc, zc, x, z):
    base = face_y(xc, zc) - 0.002
    e = 1 - ((x - xc) / EYE_W) ** 2 - ((z - zc) / EYE_H) ** 2
    return base - 0.012 * math.sqrt(max(0.0, e))

def clamp(x, a=0.0, b=1.0):
    return max(a, min(b, x))

def sstep(a, b, x):
    t = clamp((x - a) / (b - a))
    return t * t * (3 - 2 * t)

def reface(p, x, z):
    """Move a face-surface vertex to (x, z) keeping its height over the disc front."""
    return Vector((x, p.y + face_y(x, z) - face_y(p.x, p.z), z))

# ---------------------------------------------------------------- eye region (lids = the eye's own rim)
def outer_of(x, s):
    """0 at the inner (nasal) corner of the eye, 1 at the outer corner."""
    return clamp((s * (x - s * EYE_X) / EYE_W + 1) / 2)

def lid_xz(x, z, s, gt, gb, dx_in=0.0):
    """Upper lid = eye rim above centre, lower lid = rim below. gt/gb(outer) scale the half-heights."""
    dz = z - EYE_Z
    g = gt(outer_of(x, s)) if dz > 0 else gb(outer_of(x, s))
    return x - s * dx_in * max(0.0, dz) / EYE_H, EYE_Z + dz * g, g

def eye_shape(base, mats, s, gt=lambda o: 1.0, gb=lambda o: 1.0, dx_in=0.0, raise_type=False,
              look=(0.0, 0.0), clip=0.965):
    """One eye key. close-type: every eye vert follows the lid map (pupil squashes under the lid, never
    pokes past it). raise_type: sclera + rim follow, pupil/glint stay put and ride the stretched
    sclera surface in depth. look: rigid pupil+glint slide, clamped inside the sclera at `clip`."""
    xc, zc = s * EYE_X, EYE_Z
    dx, dz = look
    t = 1.0 if (dx or dz) else 0.0
    nclip = 0
    out = []
    for p, m in zip(base, mats):
        q = p.copy()
        if m in (1, 2) and t:
            # full slide; a pupil vert past the rim is flattened onto it (the lid covers that part);
            # the glint keeps a wider margin so it never lands on the rim
            x, z = p.x + dx, p.z + dz
            k = clip if m == 1 else clip - 0.05
            e = ((x - xc) / (EYE_W * k)) ** 2 + ((z - zc) / (EYE_H * k)) ** 2
            if e > 1.0:
                x, z = xc + (x - xc) / math.sqrt(e), zc + (z - zc) / math.sqrt(e)
                nclip += 1
            q = Vector((x, sclera_y(xc, zc, x, z) + (p.y - sclera_y(xc, zc, p.x, p.z)), z))
        if raise_type and m in (1, 2):
            dzq = q.z - zc
            g = gt(outer_of(q.x, s)) if dzq > 0 else gb(outer_of(q.x, s))
            z0 = zc + dzq / g                              # where the sclera under q came from
            q.y += (sclera_y(xc, zc, q.x, z0) - sclera_y(xc, zc, q.x, q.z)
                    + face_y(q.x, q.z) - face_y(q.x, z0))
        elif m in (1, 2):
            # face rig 2: close-type lid moves CLIP the pupil/glint at the new lid line (the part past
            # it tucks under the rim band); the pupil keeps its size and oval
            u = clamp((q.x - xc) / EYE_W, -1.0, 1.0)
            qq = math.sqrt(max(0.0, 1 - u * u))
            o = outer_of(q.x, s)
            z = min(max(q.z, zc - EYE_H * qq * gb(o)), zc + EYE_H * qq * gt(o))
            if z != q.z:
                q = Vector((q.x, q.y + sclera_y(xc, zc, q.x, z) - sclera_y(xc, zc, q.x, q.z), z))
        else:
            x, z, _ = lid_xz(q.x, q.z, s, gt, gb, dx_in)
            q = reface(q, x, z)
        out.append(q)
    return out, nclip

def lash_shape(base, s, gt=lambda o: 1.0, dx_in=0.0, dz_extra=lambda o: 0.0, tilt_in=0.0, dx_extra=0.0):
    """Lashes ride the upper lid rim (their root follows the lid map) plus the forehead-muscle term
    (dz_extra, inward shift, tilt toward the midline in degrees)."""
    out = [p.copy() for p in base]
    th = math.radians(s * tilt_in)
    c, sn = math.cos(th), math.sin(th)
    for k in range(3):
        idx = range(k * LASH_STRAND, (k + 1) * LASH_STRAND)
        root = sum((base[i] for i in idx[:6]), Vector()) / 6
        o = outer_of(root.x, s)
        rx, rz, _ = lid_xz(root.x, root.z, s, gt, lambda _o: 1.0, dx_in)
        rx += -s * dx_extra
        rz += dz_extra(o)
        for i in idx:
            p = base[i]
            vx, vz = p.x - root.x, p.z - root.z
            out[i] = reface(p, rx + vx * c - vz * sn, rz + vx * sn + vz * c)
    return out

# ---------------------------------------------------------------- blink (face rig 2)
# Closed line: an arc from corner to corner, SAG x EYE_H below the centre at the middle (rig 1's closed
# line sat at -0.35 H too). Upper rim travels (1 + SAG) H sin(theta), lower rim (1 - SAG) H |sin(theta)|,
# so each rim point keeps its angle and the band keeps its thickness; width never changes.
SAG = 0.35
BLINK_NODES = (0.2, 0.4, 0.6, 0.8)       # in-between correctives; hat width 0.2
LOOK_TOL = 0.003                         # pupil may tuck this far past the lid line (under the rim band)

def lid_T(dxn, dzn, b):
    """Vertical travel of a rim point (eye-normalised offsets dxn, dzn) at blink b."""
    r = math.hypot(dxn, dzn)
    sn = dzn / r if r > 1e-9 else 0.0
    return -b * (1 + SAG) * EYE_H * sn if sn > 0 else -b * (1 - SAG) * EYE_H * sn

def lid_lines(u, b):
    """Upper / lower lid line (world z) over eye column u (-1..1) at blink b."""
    q = math.sqrt(max(0.0, 1 - u * u))
    return EYE_Z + EYE_H * q * (1 - b * (1 + SAG)), EYE_Z - EYE_H * q * (1 - b * (1 - SAG))

def blink_eye(base, mats, s, b):
    xc, zc = s * EYE_X, EYE_Z
    out = []
    for p, m in zip(base, mats):
        dxn, dzn = (p.x - xc) / EYE_W, (p.z - zc) / EYE_H
        if m == 3:                                   # rim band: rides down/up, keeps its angle
            z = p.z + lid_T(dxn, dzn, b)
        else:                                        # sclera, pupil, glint: clamped between the lids
            top, bot = lid_lines(clamp(dxn, -1.0, 1.0), b)
            z = min(max(p.z, bot), top)
        # everything keeps its height over the sclera dome (the band rides ON the dome, in front of
        # the clamped pupil / glint)
        out.append(Vector((p.x, p.y + sclera_y(xc, zc, p.x, z) - sclera_y(xc, zc, p.x, p.z), z)))
    return out

def blink_lash(lbase, s, b):
    xc, zc = s * EYE_X, EYE_Z
    out = [p.copy() for p in lbase]
    for k in range(3):
        idx = range(k * LASH_STRAND, (k + 1) * LASH_STRAND)
        root = sum((lbase[i] for i in idx[:6]), Vector()) / 6
        T = lid_T((root.x - xc) / EYE_W, (root.z - zc) / EYE_H, b)
        dy = sclera_y(xc, zc, root.x, root.z + T) - sclera_y(xc, zc, root.x, root.z)
        for i in idx:
            p = lbase[i]
            out[i] = Vector((p.x, p.y + dy, p.z + T))
    return out

def hat_expr(var, bk, w=0.2):
    return 'max(0.0, min((%s - %.3f) / %.3f, (%.3f - %s) / %.3f))' % (var, bk - w, w, bk + w, var, w)

# Muscle table, eye region. gt/gb scale the upper/lower lid half-height (by outer-ness o: 0 nasal,
# 1 temporal); lash terms stand in for brow motion (owner ruling: no brows, lashes + upper lid).
EYE_MUSCLES = {
    # Face rig 2: lash ROOTS ride the rim only (no dz_extra / dx_extra lift - rig 1's floated 15 mm off
    # the rim and cut the hour ticks); the brow-substitute reads through the lid shape + lash tilt.
    # Raise amounts capped so AU1 + AU2 + AU5 together lift the lid top ~13 mm (rig 1: ~35 mm).
    # frontalis, pars medialis: inner lid corner up, inner lashes tilt up (worry / sadness / surprise)
    # Face rig 3: the raise is concentrated on the nasal half ((1-o)^2: +18 % at the inner corner, +4.5 %
    # at the top, 0 at the outer corner) so the upper lid slants DOWN toward the outer corner (grief lid)
    'AU1_inner_brow_raiser': dict(gt=lambda o: 1.0 + 0.18 * (1 - o) ** 2, raise_type=True,
                                  lash=dict(tilt_in=-10)),
    # frontalis, pars lateralis: outer lid corner up, lashes fan out
    'AU2_outer_brow_raiser': dict(gt=lambda o: 1.0 + 0.05 * o, raise_type=True,
                                  lash=dict(tilt_in=-10)),
    # corrugator supercilii + procerus (+ depressor supercilii): lid top down, inner corner lower, lashes
    # tilt IN toward the midline
    'AU4_brow_lowerer': dict(gt=lambda o: 0.80 + 0.12 * o, dx_in=0.006,
                             lash=dict(tilt_in=12)),
    # levator palpebrae superioris: upper lid up (white shows above the pupil), lashes ride the rim
    'AU5_upper_lid_raiser': dict(gt=lambda o: 1.06, raise_type=True, lash=dict()),
    # orbicularis oculi, pars orbitalis: cheek push = lower lid up, slight top squint
    # face rig 4: lower lid rides higher (0.62 -> 0.48) and arches, so a smile reads in the eyes
    'AU6_cheek_raiser': dict(gt=lambda o: 0.96, gb=lambda o: 0.48, lash=dict()),
    # orbicularis oculi, pars palpebralis: both lids narrow
    'AU7_lid_tightener': dict(gt=lambda o: 0.84, gb=lambda o: 0.76, lash=dict()),
}

# ---------------------------------------------------------------- mouth (the build's 25 x 5 grid)
def mouth_cols():
    cols = []
    for iu in range(NU + 1):
        u = -1 + 2 * iu / NU
        top = MOUTH_Z + 0.022 * u * u
        cols.append(dict(u=u, X=u * MOUTH_HW, Top=top, Bot=top - (0.004 + 0.03 * (1 - u * u) ** 0.8),
                         fr=FR0, dy=0.0, sx=0.0))
    return cols

def mouth_verts(cols):
    out = []
    for c in cols:
        bot = min(c['Bot'], c['Top'] - 0.0015)
        for f in c['fr']:
            x, z = c['X'] + c['sx'] * f, c['Top'] + (bot - c['Top']) * f
            out.append(Vector((x, face_y(x, z) - 0.0025 + c['dy'], z)))
    return out

def mouth_shape(fn, mask=lambda u: 1.0):
    cols = mouth_cols()
    for c in cols:
        u = c['u']; m = mask(u); d = fn(u, c)
        c['X'] += m * d.get('dX', 0.0)
        c['Top'] += m * d.get('dTop', 0.0)
        c['Bot'] += m * d.get('dBot', 0.0)
        c['dy'] += m * d.get('dy', 0.0)
        c['sx'] += m * d.get('sx', 0.0)
        if 'fr' in d:
            c['fr'] = tuple(a + m * (b - a) for a, b in zip(c['fr'], d['fr']))
    return mouth_verts(cols)

def gap0(u):
    return 0.004 + 0.03 * (1 - u * u) ** 0.8

sg = lambda u: 1.0 if u >= 0 else -1.0
JAW_DROP = 0.028          # lower-lip drop at 35 deg; re-checked against the toga in add_face_rig
# ---- face rig 5 mouth constants
AU15_ARCH = 0.012         # midline lift of the two AU15 keys together (each side carries half, unmasked)
AU15_DROP = 0.030         # corner drop at fit 1.0; add_face_rig scales it down to the toga room (AU15_FIT)
AU15_FIT = 1.0
AU15_LENS = lambda u: 0.0035 + 0.0125 * (1 - u * u) ** 0.8   # closed-lip lens of the symmetric frown
AU17_TOP, AU17_BOT = 0.021, 0.025   # face rig 8: arch back up (face 6 was 19 / 5, face 7 14 / 18); lower lip rises 4 mm MORE than the upper
AU17_CLOSE = 0.55   # face rig 8: AU17 alone also closes the lens (share of AU24 through the driver), less as AU15 closes it already
AU17_TOP_F6 = 0.019   # sad arch + fuller lens. Face rig 6: top 13 -> 19, bot 9 -> 5 - the lens
#   grows UPWARD in the one symmetric key (a lens extra on the per-side AU15 keys bent single AU15 twice)
AU17_DY = -0.006                                                # face rig 6: lower-lip pout forward (was -0.003)
PURSE_FADED = ('AU12_', 'AU14_', 'AU15_', 'AU17_', 'AU23_', 'AU24_')   # face rig 7 (see add_face_rig)
O_A, O_B, O_ZC =0.028, 0.035, 0.001                            # the AU22 O (vertical: B > A)

def corner_ramp(v):
    """0 over the far half, rising (4th power) to 1 at the moving corner v = 1. Smooth to 3rd order at
    v = -0.5, convex, so the drop is steepest at the corner and the lip line never reverses."""
    return ((v + 0.5) / 1.5) ** 4 if v > -0.5 else 0.0

def au15_side(s, fit):
    """Depressor anguli oris, ONE side (face rig 5). Built per side instead of masking the symmetric key:
    the mask split gave each side half of the midline arch AND a corner drop, and the two bends read as
    an S with a hooked end. Here: the corner drop is local to the side (corner_ramp), the arch is shared
    unmasked, the lens closes by the smooth split mask. L + R = the symmetric frown."""
    def fn(u, c):
        v = s * u
        dT = 0.5 * AU15_ARCH * (1 - u * u) - fit * AU15_DROP * corner_ramp(v)
        # lens closes HALF per side, unmasked: a side-masked close bent the mid line twice (S)
        return dict(dTop=dT, dBot=dT + (0.5 + 0.6 * corner_ramp(v)) * (gap0(u) - AU15_LENS(u)),
                    dX=-0.002 * s * corner_ramp(v))
    return fn

def curve_probe(top, bot, moving=0, turn_deg=0.8, tol=0.0003):
    """Lip-line quality (face rig 5). top / bot: (x, z) per lip column, left to right in x. For the top
    line and the lens centre line: curvature sign changes (turns under turn_deg ignored), hooks (the
    height trend reverses by more than tol inside the outer 5 columns at either end) and, when moving
    = +1 / -1 (the side whose corner the key moves), whether the line is monotonic from that corner to
    the midline (within tol). Pass = <= 1 sign change, no hook, monotonic."""
    res = {}
    mid = [((a[0] + b[0]) / 2, (a[1] + b[1]) / 2) for a, b in zip(top, bot)]
    for name, P in (('top', top), ('mid', mid), ('bot', bot)):
        P = sorted(P)
        seg = [(b[0] - a[0], b[1] - a[1]) for a, b in zip(P, P[1:])]
        turns = []
        for (ax, az), (bx, bz) in zip(seg, seg[1:]):
            turns.append(math.degrees(math.atan2(ax * bz - az * bx, ax * bx + az * bz)))
        sg_ = [1 if t > turn_deg else -1 if t < -turn_deg else 0 for t in turns]
        def nchg(ss):
            nz = [x for x in ss if x]
            return sum(1 for a, b in zip(nz, nz[1:]) if a != b)
        changes = nchg(sg_)
        if moving == 2:                    # smirk: both corners move (one up, one down) - judge each half
            h = len(sg_) // 2
            whole = changes
            changes = max(nchg(sg_[:h + 1]), nchg(sg_[h:]))
        def hook(zs):
            # trend at the corner vs the reversal just inside it
            d = [b - a for a, b in zip(zs, zs[1:])]
            up = max(0.0, max(d)); dn = max(0.0, -min(d))
            return min(up, dn) > tol and max(abs(x) for x in d) > 0
        zl = [p[1] for p in P[:6]]; zr = [p[1] for p in P[-6:]]
        hooks = int(hook(zl)) + int(hook(zr))
        mono = None
        def mono_side(side):
            n = len(P); h = n // 2
            zs = [p[1] for p in (P[h:] if side > 0 else P[:h + 1][::-1])]    # midline -> moving corner
            d = [b - a for a, b in zip(zs, zs[1:])]
            return not (max(0.0, max(d)) > tol and max(0.0, -min(d)) > tol)
        if moving == 2:
            mono = mono_side(1) and mono_side(-1)
        elif moving:
            mono = mono_side(moving)
        res[name] = dict(curv_sign_changes=changes, hooks=hooks, monotonic_mid_to_corner=mono,
                         max_turn_deg=round(max(abs(t) for t in turns), 2))
        if moving == 2:
            res[name]['whole_line_sign_changes'] = whole
    ok = all(res[k]['curv_sign_changes'] <= 1 and res[k]['hooks'] == 0 and res[k]['monotonic_mid_to_corner'] in (None, True)
             for k in ('top', 'mid'))
    res['pass'] = ok
    return res
# Paired muscles (a _L and an _R key each, split by a smooth midline mask that sums to 1).
MOUTH_PAIRED = {
    # levator labii superioris: upper lip up, upper teeth show
    'AU10_upper_lip_raiser': lambda u, c: dict(dTop=0.008 * (1 - 0.8 * u * u), fr=(0, .08, .62, .82, 1)),
    # zygomaticus major: corner up and out along the muscle line
    'AU12_lip_corner_puller': lambda u, c: dict(dX=0.010 * sg(u) * u * u, dTop=0.018 * u * u,
                                                dBot=0.018 * u * u - 0.004 * (1 - u * u)),
    # buccinator: corner pulled in and tightened (the dimple itself needs cheek geometry - she has none)
    'AU14_dimpler': lambda u, c: dict(dX=-0.008 * sg(u) * abs(u) ** 3, dTop=0.005 * u * u,
                                      dBot=0.005 * u * u + 0.0035 * u ** 4),
    # (AU15 moved to MOUTH_SIDED in face rig 5)
    # depressor labii inferioris: lower lip down
    'AU16_lower_lip_depressor': lambda u, c: dict(dBot=-0.012 * (1 - u * u) ** 0.6),
    # risorius: corner straight out, opening thins
    'AU20_lip_stretcher': lambda u, c: dict(dX=0.016 * sg(u) * abs(u), dTop=-0.008 * u * u,
                                            dBot=-0.008 * u * u + 0.4 * gap0(u) * (1 - u * u)),
}
# Single keys (midline muscles / the orbicularis oris ring acts as one).
MOUTH_SINGLE = {
    # mentalis: the chin boss pushes the lower lip up and the closed lips arch with it (face rig 5: the
    # frown / sad arch comes from here, upward, where the toga sets no limit); the lower lip rises less
    # than the upper, so it reads fuller (pout) and comes forward a little
    'AU17_chin_raiser': lambda u, c: dict(dTop=AU17_TOP * (1 - u * u), dBot=AU17_BOT * (1 - u * u),
                                          dy=AU17_DY * (1 - u * u)),
    # orbicularis oris (+ incisivus labii): pucker - narrow, round, forward
    'AU18_lip_pucker': lambda u, c: dict(dX=-0.45 * c['X'], dTop=-0.018 * u * u + 0.004,
                                         dBot=(-0.018 * u * u + 0.004) - (0.004 + 0.02 * (1 - u * u) ** 0.5) + gap0(u),
                                         dy=-0.004 * (1 - u * u)),
    # orbicularis oris: funnel - face rig 5: a rounded VERTICAL O. The columns go round an ellipse
    # (half-width O_A, half-height O_B, centre O_ZC over MOUTH_Z): the width narrows, the top arches up
    # (the rest smile's upturned top is undone), the bottom rounds; the lips come forward.
    'AU22_lip_funneler': lambda u, c: (lambda th: dict(
        dX=O_A * math.sin(th) - c['X'],
        dTop=(O_ZC + O_B * math.cos(th)) - (c['Top'] - MOUTH_Z),
        dBot=(O_ZC - O_B * math.cos(th)) - (c['Bot'] - MOUTH_Z),
        fr=(0, .08, .24, .6, 1), dy=-0.005 * (1 - u * u)))(u * math.pi / 2),
    # orbicularis oris: tightener - red of the lip narrows
    'AU23_lip_tightener': lambda u, c: dict(dX=-0.07 * c['X'], dBot=0.5 * gap0(u)),
    # orbicularis oris: presser - lips pressed shut, smile curve eased
    'AU24_lip_presser': lambda u, c: dict(dX=-0.10 * c['X'], dTop=-0.006 * u * u,
                                          dBot=-0.006 * u * u + gap0(u) - 0.0025),
    # lips part (depressor labii / relaxed mentalis): opening grows both ways
    'AU25_lips_part': lambda u, c: dict(dTop=0.003 * (1 - u * u), dBot=-0.007 * (1 - u * u) ** 0.8),
}
def jaw_open_fn(drop):
    # AU26 jaw drop / AU27 mouth stretch: lower lip rides the mandible down, mouth narrows a little,
    # upper teeth stay under the upper lip (teeth band fraction shrinks as the opening grows)
    return lambda u, c: dict(dBot=-drop * (1 - u * u) ** 0.7, dX=-0.08 * c['X'], dTop=-0.004 * u * u,
                             fr=(0, .10, .30, .65, 1))
def jaw_side_fn(s):
    return lambda u, c: dict(sx=s * 0.010)       # lower lip follows the chin sideways (AU30)

# Rhubarb's nine mouths as muscle + jaw mixes (baked into keys A..X so the lip-sync path is unchanged).
MOUTH_RECIPES = {
    'A': {'AU24_lip_presser': 1.0},                                                  # M B P
    'B': {'AU25_lips_part': 0.5, 'AU10_upper_lip_raiser_L': 0.6, 'AU10_upper_lip_raiser_R': 0.6,
          'AU20_lip_stretcher_L': 0.4, 'AU20_lip_stretcher_R': 0.4, 'jaw_open': 0.1},   # K S T, teeth
    'C': {'jaw_open': 0.45, 'AU25_lips_part': 0.6, 'AU20_lip_stretcher_L': 0.25,
          'AU20_lip_stretcher_R': 0.25},                                            # EH
    'D': {'jaw_open': 0.95, 'AU25_lips_part': 1.0, 'AU10_upper_lip_raiser_L': 0.3,
          'AU10_upper_lip_raiser_R': 0.3},                                          # AA
    'E': {'jaw_open': 0.5, 'AU22_lip_funneler': 0.6, 'AU18_lip_pucker': 0.15},       # AO / ER
    'F': {'AU18_lip_pucker': 1.0, 'AU22_lip_funneler': 0.25, 'jaw_open': 0.1},       # UW / OO / W
    'G': {'AU10_upper_lip_raiser_L': 0.9, 'AU10_upper_lip_raiser_R': 0.9, 'AU17_chin_raiser': 0.7,
          'AU25_lips_part': 0.2},                                                   # F / V
    'H': {'jaw_open': 0.65, 'AU25_lips_part': 0.7, 'AU20_lip_stretcher_L': 0.15,
          'AU20_lip_stretcher_R': 0.15},                                            # L (no tongue geo)
    'X': {},                                                                        # idle = rest smile
}

def both(name, v):
    return {name + '_L': v, name + '_R': v}

# Expression presets: muscle keys + bone poses (look = eye yaw/pitch deg; lid_up = close fraction).
PRESETS = {
    # Face rig 4: happy carries full AU6 (lower lid arches up - the smile reads in the eyes); surprise is a
    # rounded open O (funneler + part, no corner depressor); frown drops AU1 (a raise-type lid mixed with a
    # close-type clip left an invisible chord over the pupil) and AU23, and eases AU17 so the lens reads.
    'happy': dict(keys={**both('AU12_lip_corner_puller', 1.0), **both('AU6_cheek_raiser', 1.0),
                        **both('AU2_outer_brow_raiser', 0.2), 'AU25_lips_part': 0.5}, jaw=0.2),
    'warm_smile': dict(keys={**both('AU12_lip_corner_puller', 0.6), **both('AU6_cheek_raiser', 0.6),
                             **both('AU14_dimpler', 0.2), 'AU24_lip_presser': 0.4}),
    'surprise': dict(keys={**both('AU1_inner_brow_raiser', 1.0), **both('AU2_outer_brow_raiser', 1.0),
                           **both('AU5_upper_lid_raiser', 1.0),
                           'AU22_lip_funneler': 1.0}, jaw=0.3),
    # Face rig 5: the down-turn is built upward - AU17 arches the middle, AU15 drops the corners as far as
    # the toga lets them; frown presses the lips (AU23), sad pouts (full AU17)
    'frown_concern': dict(keys={**both('AU4_brow_lowerer', 0.8),
                                **both('AU15_lip_corner_depressor', 1.0), 'AU17_chin_raiser': 0.8}),   # face rig 8: cross, not pressed (no AU23)
    'thinking': dict(keys={'AU4_brow_lowerer_L': 0.5, 'AU4_brow_lowerer_R': 0.15,
                           'AU2_outer_brow_raiser_R': 0.5, 'AU14_dimpler_L': 0.7,
                           'AU24_lip_presser': 0.4, 'AU17_chin_raiser': 0.3}, look=(-18, 16)),
    # Face rig 3: no AU4 (on her brow-less face it pulls the INNER lid down - the opposite tilt); a lighter
    # lid droop (0.1) so the eye keeps its tall oval; AU1 carries the inner-corner lift
    # Face rig 4: no lid droop (a blink clip under an AU1-raised lid cut the pupil with a chord); AU17 eased
    'sad': dict(keys={**both('AU1_inner_brow_raiser', 1.0),
                      **both('AU15_lip_corner_depressor', 1.0), 'AU17_chin_raiser': 1.0, 'AU25_lips_part': 0.3},   # face rig 8: soft, lips a little parted
                look=(0, -12)),
    'wink': dict(keys={'AU6_cheek_raiser_L': 0.8, 'AU12_lip_corner_puller_L': 1.0,
                       'AU12_lip_corner_puller_R': 0.5, 'AU14_dimpler_L': 0.3,
                       'AU2_outer_brow_raiser_R': 0.3}, lid_up={'L': 1.0}),
}

# Human ROM (degrees / metres), applied as Limit constraints; drivers map the same ranges to 0..1.
ROM = dict(jaw_open=35.0, jaw_side=8.0, jaw_fwd=0.005, eye_yaw=35.0, eye_up=25.0, eye_down=30.0,
           lid_close=40.0, lid_up_raise=5.0, lid_lo_raise=25.0, lid_lo_down=5.0, lid_follow=0.3,
           corner=0.012)
RAISE_BETA = 0.03          # face rig 5: equivalent upper blink at which the raise keys are gone
LOOKUP_KNEE = (0.6, 0.12)  # face rig 5: look_up soft knee - starts at 0.6 of the pitch range, -0.12 at full
LOOKUP_AU7 = (0.30, 0.55)  # face rig 6: look_up x (1 - AU7 * (a + b * sideways look)) - AU7 squints the lid down

# ================================================================ add_face_rig
def add_face_rig(context, armature_or_None, face_objects):
    objs = {o.name.split('.')[0]: o for o in (face_objects.values() if isinstance(face_objects, dict)
                                              else face_objects)}
    for n in ('eye_L', 'eye_R', 'lash_L', 'lash_R', 'mouth'):
        assert n in objs, 'missing face mesh ' + n
    for o in objs.values():
        assert o.data.shape_keys is None, o.name + ' already has shape keys (call add_face_rig instead)'
        assert max(abs(a - b) for r1, r2 in zip(o.matrix_world, Matrix.Identity(4))
                   for a, b in zip(r1, r2)) < 1e-9, o.name + ' has a transform'
    scene = context.scene
    info = {'keys': {}, 'bones': [], 'drivers': 0, 'skipped': {}, 'signs': {}}

    # ---- eyes: apply the build's level-1 SUBSURF first (glTF drops keys of meshes that keep one)
    for n in ('eye_L', 'eye_R'):
        ob = objs[n]
        for md in [m for m in ob.modifiers if m.type == 'SUBSURF']:
            assert md.levels == md.render_levels == 1, (n, md.levels, md.render_levels)
            with context.temp_override(object=ob, active_object=ob, selected_objects=[ob]):
                bpy.ops.object.modifier_apply(modifier=md.name)

    # ---- geometry match with the build (fail loudly if build_her.py changed under us)
    mo = objs['mouth']
    assert len(mo.data.vertices) == (NU + 1) * 5
    dev = max((a - v.co).length for a, v in zip(mouth_verts(mouth_cols()), mo.data.vertices))
    assert dev < 1e-6, 'mouth grid != build (%.2e)' % dev
    for S, s in SIDES:
        e = objs['eye_' + S].data.vertices
        xs = [v.co.x for v in e]; zs = [v.co.z for v in e]
        assert abs((max(xs) + min(xs)) / 2 - s * EYE_X) < 2e-3 and abs((max(zs) + min(zs)) / 2 - EYE_Z) < 2e-3, S
        assert len(objs['lash_' + S].data.vertices) == 3 * LASH_STRAND

    # ---- toga clearance: how far the lower lip may drop (measured on her evaluated toga + trim)
    global JAW_DROP
    dg = context.evaluated_depsgraph_get()
    tz = -1.0
    toga_bins = {}                       # face rig 3: toga top per 1 cm column (same bins as check_face)
    for n in ('toga', 'toga_trim'):
        tob = bpy.data.objects.get(n)
        if tob is None:
            continue
        em = tob.evaluated_get(dg).to_mesh()
        for v in em.vertices:
            w = tob.matrix_world @ v.co
            if w.y < 0 and abs(w.x) < 0.2:
                bb = round(w.x / 0.01)
                toga_bins[bb] = max(toga_bins.get(bb, -1.0), w.z)
            if abs(w.x) < 0.03 and w.y < 0:
                tz = max(tz, w.z)
        tob.evaluated_get(dg).to_mesh_clear()
    lip_bot = MOUTH_Z - gap0(0)
    room = lip_bot - tz
    JAW_DROP = min(0.028, max(0.0, room - 0.004 - 0.007))   # jaw + AU25 at full keep 4 mm over the toga
    info['toga_top_z_centre'] = round(tz, 4); info['lip_room_mm'] = round(room * 1000, 1)
    info['jaw_drop_mm'] = round(JAW_DROP * 1000, 1)

    # ---- armature + bones
    if armature_or_None is None:
        ad = bpy.data.armatures.new('face_rig')
        arm = bpy.data.objects.new('face_rig', ad)
        scene.collection.objects.link(arm)
        parent_name, rigid_group = None, 'face_root'
    else:
        arm = armature_or_None
        parent_name = 'head' if 'head' in arm.data.bones else None
        rigid_group = 'head'
    AW = arm.matrix_world.inverted()
    for o in list(context.selected_objects):
        o.select_set(False)
    arm.select_set(True)
    context.view_layer.objects.active = arm
    bpy.ops.object.mode_set(mode='EDIT')
    eb = arm.data.edit_bones
    def bone(name, h, t, parent, deform=False, up=(0, 0, 1)):
        b = eb.new(name)
        b.head = AW @ Vector(h); b.tail = AW @ Vector(t)
        b.align_roll(AW.to_3x3() @ Vector(up))
        b.parent = eb[parent] if parent else None
        b.use_deform = deform
        info['bones'].append(name)
        return b
    bone('face_root', (0, 0, ZC), (0, 0, ZC + 0.12), parent_name, deform=True)
    # TMJ hinge: no skull in a disc, so the condyle sits at nose height on the disc's mid-plane,
    # the bone runs to her chin point under the lower lip (human TMJ: level with the nose base)
    chin_z = MOUTH_Z - gap0(0) - 0.012
    bone('jaw', (0, 0.0, 0.745), (0, face_y(0, chin_z) - 0.004, chin_z), 'face_root', up=(0, -1, 0))
    tgt_y = -0.60
    bone('eye_target', (0, tgt_y, EYE_Z), (0, tgt_y, EYE_Z + 0.05), 'face_root')
    for S, s in SIDES:
        xc = s * EYE_X
        ey = face_y(xc, EYE_Z) + 0.03              # eyeball centre 3 cm behind her painted eye
        bone('eye_' + S, (xc, ey, EYE_Z), (xc, ey - 0.07, EYE_Z), 'face_root')
        bone('lid_up_' + S, (xc, ey, EYE_Z + 0.004), (xc, ey - 0.06, EYE_Z + 0.004), 'face_root')
        bone('lid_lo_' + S, (xc, ey, EYE_Z - 0.004), (xc, ey - 0.05, EYE_Z - 0.004), 'face_root')
        bone('eye_target_' + S, (xc, tgt_y, EYE_Z), (xc, tgt_y, EYE_Z + 0.03), 'eye_target')
        cz = MOUTH_Z + 0.022
        cy = face_y(s * MOUTH_HW, cz) - 0.0025
        bone('lip_corner_' + S, (s * MOUTH_HW, cy, cz), (s * MOUTH_HW, cy - 0.03, cz), 'face_root', deform=True)
    bpy.ops.object.mode_set(mode='POSE')
    P = arm.pose.bones
    for n in info['bones']:
        P[n].rotation_mode = 'XYZ'

    def upd():
        context.view_layer.update()
    def local_eul(n):
        pb = P[n]
        return (pb.bone.matrix_local.inverted() @ pb.matrix).to_euler('XYZ')
    def world_tail(n):
        return arm.matrix_world @ P[n].tail
    def set_world_offset(n, vec):
        P[n].location = P[n].bone.matrix_local.to_3x3().inverted() @ (arm.matrix_world.to_3x3().inverted() @ Vector(vec))

    # ---- eyes: aim (Damped Track to a per-eye target straight ahead -> rest = zero rotation)
    for S, s in SIDES:
        c = P['eye_' + S].constraints.new('DAMPED_TRACK')
        c.target = arm; c.subtarget = 'eye_target_' + S; c.track_axis = 'TRACK_Y'
    upd()
    for S, s in SIDES:
        e0 = local_eul('eye_' + S)
        assert abs(e0.x) < 1e-4 and abs(e0.z) < 1e-4, ('eye rest not neutral', S, e0)
    set_world_offset('eye_target', (0.1, 0, 0)); upd()
    sign_yaw = 1.0 if local_eul('eye_L').z > 0 else -1.0          # + = toward her left (+X)
    set_world_offset('eye_target', (0, 0, 0.1)); upd()
    sign_pitch = 1.0 if local_eul('eye_L').x > 0 else -1.0        # + = up
    P['eye_target'].location = (0, 0, 0)
    # jaw hinge sign: opening swings the chin down-and-back (+Y)
    t0 = world_tail('jaw'); P['jaw'].rotation_euler.x = 0.3; upd()
    sign_open = 1.0 if world_tail('jaw').y > t0.y else -1.0
    P['jaw'].rotation_euler.x = 0.0
    P['jaw'].rotation_euler.z = 0.2; upd()
    sign_side = 1.0 if world_tail('jaw').x > t0.x else -1.0       # + = chin to her left
    P['jaw'].rotation_euler.z = 0.0
    t0 = world_tail('lid_up_L'); P['lid_up_L'].rotation_euler.x = 0.3; upd()
    sign_lid = 1.0 if world_tail('lid_up_L').z > t0.z else -1.0    # + = lid up
    P['lid_up_L'].rotation_euler.x = 0.0; upd()
    info['signs'] = dict(yaw=sign_yaw, pitch=sign_pitch, jaw_open=sign_open, jaw_side=sign_side, lid=sign_lid)

    def rng(sign, lo, hi):      # lo..hi in the positive sense -> local euler min/max
        a, b = sign * math.radians(lo), sign * math.radians(hi)
        return min(a, b), max(a, b)
    def limit_rot(n, x=(0, 0), y=(0, 0), z=(0, 0)):
        c = P[n].constraints.new('LIMIT_ROTATION')
        c.owner_space = 'LOCAL'
        c.use_limit_x = c.use_limit_y = c.use_limit_z = True
        c.min_x, c.max_x = x; c.min_y, c.max_y = y; c.min_z, c.max_z = z
        return c
    for S, s in SIDES:
        limit_rot('eye_' + S, x=rng(sign_pitch, -ROM['eye_down'], ROM['eye_up']),
                  z=rng(sign_yaw, -ROM['eye_yaw'], ROM['eye_yaw']))
        # upper lid follows the eye's pitch DOWN a little (the lid rides the globe): 30 % of the down
        # pitch, added. Face rig 2: downward only - rig 1's Copy Rotation also followed UP, which took
        # 7.5 deg off a full blink (blink + look up stopped at 0.81 and showed the pupil).
        c = P['lid_up_' + S].constraints.new('TRANSFORM')
        c.target = arm; c.subtarget = 'eye_' + S
        c.target_space = 'LOCAL'; c.owner_space = 'LOCAL'
        c.map_from = 'ROTATION'; c.map_to = 'ROTATION'
        c.from_rotation_mode = 'XYZ'; c.to_euler_order = 'XYZ'
        lo_, hi_ = rng(sign_pitch, -ROM['eye_down'], 0.0)
        c.from_min_x_rot, c.from_max_x_rot = lo_, hi_
        dn = sign_lid * math.radians(-ROM['eye_down'] * ROM['lid_follow'])
        c.to_min_x_rot, c.to_max_x_rot = (dn, 0.0) if sign_pitch > 0 else (0.0, dn)
        c.map_to_x_from = 'X'; c.map_to_y_from = 'Y'; c.map_to_z_from = 'Z'
        c.mix_mode_rot = 'ADD'; c.use_motion_extrapolate = False
        limit_rot('lid_up_' + S, x=rng(sign_lid, -ROM['lid_close'], ROM['lid_up_raise']))
        c = P['lid_lo_' + S].constraints.new('COPY_ROTATION')
        c.target = arm; c.subtarget = 'eye_' + S
        c.use_x, c.use_y, c.use_z = True, False, False
        c.mix_mode = 'ADD'; c.target_space = 'LOCAL'; c.owner_space = 'LOCAL'; c.influence = 0.15
        limit_rot('lid_lo_' + S, x=rng(sign_lid, -ROM['lid_lo_down'], ROM['lid_lo_raise']))
        c = P['lip_corner_' + S].constraints.new('LIMIT_LOCATION')
        c.owner_space = 'LOCAL'
        for ax in 'xyz':
            lim = 0.0 if ax == 'y' else ROM['corner']      # local y = along the bone = into the face
            setattr(c, 'use_min_' + ax, True); setattr(c, 'use_max_' + ax, True)
            setattr(c, 'min_' + ax, -lim); setattr(c, 'max_' + ax, lim)
        c.use_transform_limit = True
    limit_rot('jaw', x=rng(sign_open, 0, ROM['jaw_open']), z=rng(sign_side, -ROM['jaw_side'], ROM['jaw_side']))
    # jaw forward slide (protrusion, AU29): allowed 0..5 mm along whichever local axis points forward.
    # It drives no key: her mouth is a decal on the disc front, a pure depth move cannot show.
    fwd = P['jaw'].bone.matrix_local.to_3x3().inverted() @ (AW.to_3x3() @ Vector((0, -1, 0)))
    ax = max(range(3), key=lambda i: abs(fwd[i])); axn = 'xyz'[ax]
    c = P['jaw'].constraints.new('LIMIT_LOCATION'); c.owner_space = 'LOCAL'; c.use_transform_limit = True
    for i, a in enumerate('xyz'):
        lo, hi = (0.0, 0.0) if i != ax else ((0.0, ROM['jaw_fwd']) if fwd[ax] > 0 else (-ROM['jaw_fwd'], 0.0))
        setattr(c, 'use_min_' + a, True); setattr(c, 'use_max_' + a, True)
        setattr(c, 'min_' + a, lo); setattr(c, 'max_' + a, hi)
    info['jaw_fwd_axis'] = axn
    upd()

    # ---- shape keys
    def add_keys(ob, pairs):
        if ob.data.shape_keys is None:
            ob.shape_key_add(name='Basis', from_mix=False)
        names = []
        for name, co in pairs:
            kb = ob.shape_key_add(name=name, from_mix=False)
            kb.value = 0.0                                  # Blender 5.2 creates new keys at 1.0
            assert len(co) == len(kb.data)
            kb.data.foreach_set('co', [c for p in co for c in p])
            names.append(name)
        info['keys'].setdefault(ob.name, []).extend(names)

    look_meta = {}
    fade = {}
    close_w = {}
    for S, s in SIDES:
        eo, lo_ = objs['eye_' + S], objs['lash_' + S]
        base = [v.co.copy() for v in eo.data.vertices]
        mats = [0] * len(base)
        for p in eo.data.polygons:
            for vi in p.vertices:
                mats[vi] = p.material_index
        lbase = [v.co.copy() for v in lo_.data.vertices]
        ek, lk = [], []
        for mname, spec in EYE_MUSCLES.items():
            kw = {k: v for k, v in spec.items() if k != 'lash'}
            co, _ = eye_shape(base, mats, s, **kw)
            ek.append((mname + '_' + S, co))
            lk.append((mname + '_' + S, lash_shape(lbase, s, gt=spec.get('gt', lambda o: 1.0),
                                                   dx_in=spec.get('dx_in', 0.0), **spec['lash'])))
        # blink (AU45 / AU43 at full: orbicularis oculi pars palpebralis) - face rig 2: vertical close
        # with the pupil clamped; blink_S is the closed eye, blink_ibNN_S correct the path in between
        es = {b: blink_eye(base, mats, s, b) for b in BLINK_NODES + (1.0,)}
        ls = {b: blink_lash(lbase, s, b) for b in BLINK_NODES + (1.0,)}
        ek.append(('blink_' + S, es[1.0])); lk.append(('blink_' + S, ls[1.0]))
        for st, B0, dst in ((es, base, ek), (ls, lbase, lk)):
            for bk in BLINK_NODES:
                dst.append(('blink_ib%02d_%s' % (round(bk * 100), S),
                            [b0 + (c - (b0 + (c1 - b0) * bk)) for b0, c, c1 in zip(B0, st[bk], st[1.0])]))
        # lower-lid bone key: lower rim up (pupil clipped under it, close-type)
        co, _ = eye_shape(base, mats, s, gb=lambda o: 0.55)
        ek.append(('lid_lo_raise_' + S, co))
        # eye-bone keys: rigid pupil + glint slide (glint rides the pupil - fixes rig 1's edge glint)
        looks = {}
        for nm, lk_, extra in (('look_L', (0.022, 0.0), {}), ('look_R', (-0.022, 0.0), {}),
                               ('look_up', (0.0, 0.02), dict(gt=lambda o: 1.04, raise_type=True)),
                               ('look_down', (0.0, -0.035), {})):
            co, t = eye_shape(base, mats, s, look=lk_, **extra)
            ek.append((nm, co)); look_meta['%s_%s' % (nm, S)] = t
            looks[nm] = co
        # look fade: largest look weight f(b) that keeps every pupil/glint vert within the lids (+tol)
        # along the piecewise-linear blink path; fade = 1 up to b0, linear to 0 at b1, under f everywhere
        P = [i for i, m in enumerate(mats) if m in (1, 2)]
        nodes = (0.0,) + BLINK_NODES + (1.0,)
        es[0.0] = base
        def path(b):
            for a, c in zip(nodes, nodes[1:]):
                if b <= c + 1e-9:
                    t_ = (b - a) / (c - a)
                    return {i: es[a][i].lerp(es[c][i], t_) for i in P}
        def excess(pts, b):
            e = 0.0
            for v in pts:
                top, bot = lid_lines(clamp((v.x - s * EYE_X) / EYE_W, -1.0, 1.0), b)
                e = max(e, v.z - top, bot - v.z)
            return e
        tol_now = [LOOK_TOL]
        def inside(pts, b):
            return excess(pts, b) <= tol_now[0]
        grid = [i / 50 for i in range(51)]
        perp = {'look_L': ('look_up', 'look_down'), 'look_R': ('look_up', 'look_down'),
                'look_up': ('look_L', 'look_R'), 'look_down': ('look_L', 'look_R')}
        for nm, co in looks.items():
            # solved with the perpendicular look ALSO at full (diagonal looks): each axis then fades
            # early enough that any mix of the two stays inside the lids
            ds = [{i: co[i] - base[i] for i in P}]
            ds += [{i: co[i] - base[i] + looks[o][i] - base[i] for i in P} for o in perp[nm]]
            # tolerance per combination: never further past the lid line than the OPEN eye already
            # puts it (that overhang sits under the rim band, which rides the lid), and >= LOOK_TOL
            tols = [max(LOOK_TOL, excess([base[i] + d[i] for i in P], 0.0)) for d in ds]
            fmax = []
            for b in grid:
                pb = path(b)
                fb = 1.0
                for d, tl in zip(ds, tols):
                    tol_now[0] = tl
                    if inside([pb[i] + d[i] for i in P], b):
                        continue
                    lo, hi = 0.0, 1.0
                    for _ in range(14):
                        mid = (lo + hi) / 2
                        if inside([pb[i] + d[i] * mid for i in P], b):
                            lo = mid
                        else:
                            hi = mid
                    fb = min(fb, lo)
                fmax.append(fb)
            i0 = next((k for k, f in enumerate(fmax) if f < 0.999), len(grid)) - 1
            b0 = grid[max(i0, 0)] if i0 >= 0 else 0.0
            b1 = 1.0
            for b, f in zip(grid, fmax):
                if b > b0 and f < 1.0:
                    b1 = min(b1, (b - f * b0) / (1 - f))
            b1 = max(b1, b0 + 0.02)
            fade[(nm, S)] = (round(b0, 4), round(b1, 4))
        # blink cancels every eye muscle key (a full blink is the same closed eye whatever else is set)
        eb_ = dict(ek)
        # blink-equivalent weight of every eye muscle: the b whose rim travel matches the muscle's
        # worst lid closing (upper rim down / lower rim up), so looks also fade under AU4/AU6/AU7/lid_lo
        wt = {'up': {}, 'lo': {}}
        for mname in list(EYE_MUSCLES) + ['lid_lo_raise']:
            wu = wl = 0.0
            for p, c, m in zip(base, eb_[mname + '_' + S], mats):
                if m != 3:
                    continue
                dxn, dzn = (p.x - s * EYE_X) / EYE_W, (p.z - EYE_Z) / EYE_H
                sn = dzn / max(math.hypot(dxn, dzn), 1e-9)
                if sn > 0.3:
                    wu = max(wu, (p.z - c.z) / ((1 + SAG) * EYE_H * sn))
                elif sn < -0.3:
                    wl = max(wl, (c.z - p.z) / ((1 - SAG) * EYE_H * -sn))
            if wu > 0.01:
                wt['up'][mname] = round(min(wu, 1.0), 4)
            if wl > 0.01:
                wt['lo'][mname] = round(min(wl, 1.0), 4)
        close_w[S] = wt
        for mname in list(EYE_MUSCLES) + ['lid_lo_raise']:
            kn = mname + '_' + S
            ek.append(('blink_x_' + kn, [b0 + b0 - c for b0, c in zip(base, eb_[kn])]))
        lb_ = dict(lk)
        for mname in EYE_MUSCLES:
            kn = mname + '_' + S
            lk.append(('blink_x_' + kn, [b0 + b0 - c for b0, c in zip(lbase, lb_[kn])]))
        add_keys(eo, ek); add_keys(lo_, lk)
    info['look_pupil_verts_flattened'] = look_meta
    info['look_fade_b0_b1'] = {'%s_%s' % k: v for k, v in fade.items()}
    info['look_fade_close_weights'] = close_w

    mk = []
    for mname, fn in MOUTH_PAIRED.items():
        for S, s in SIDES:
            # face rig 4: the L/R split runs smoothly across the WHOLE lip (smoothstep -1..1, still sums
            # to 1); the old -0.2..0.2 split bent the lip at the midline into an S (AU15_L, AU20_L, smirk)
            mk.append((mname + '_' + S, mouth_shape(fn, mask=lambda u, s=s: sstep(-1.0, 1.0, s * u))))
    for S, s in SIDES:                          # face rig 5: per-side AU15 (fitted to the toga below)
        mk.append(('AU15_lip_corner_depressor_' + S, mouth_shape(au15_side(s, 1.0))))
    for mname, fn in MOUTH_SINGLE.items():
        mk.append((mname, mouth_shape(fn)))
    mk.append(('jaw_open', mouth_shape(jaw_open_fn(JAW_DROP))))
    for S, s in SIDES:
        mk.append(('jaw_side_' + S, mouth_shape(jaw_side_fn(s))))
    mbase = [v.co.copy() for v in mo.data.vertices]
    D = {n: [c - b for c, b in zip(co, mbase)] for n, co in mk}
    for letter, rec in MOUTH_RECIPES.items():
        co = [b.copy() for b in mbase]
        for k, w in rec.items():
            for i, d in enumerate(D[k]):
                co[i] += d * w
        mk.append((letter, co))
    add_keys(mo, mk)
    mo['mouth_recipes'] = json.dumps(MOUTH_RECIPES)

    # ---- face rig 3: INPUTS -> CAPS -> KEY WEIGHTS. One ordered formula list (face_caps); the Blender
    # drivers are generated from the very strings the web runtime evaluates. Every face key is driven.
    r = math.radians
    cl = lambda e: 'max(0.0, min(1.0, %s))' % e
    FUNCS = ('max', 'min')
    inputs, steps, keyf, bonevars = [], [], {}, {}
    def step(name, expr):
        assert name not in dict(steps), name
        steps.append((name, expr))
        return name
    def bone_var(bn, ch):
        nm = ('rx_' if ch == 'ROT_X' else 'rz_') + bn
        bonevars[nm] = (bn, ch)
        return nm
    def wsum(name, terms):
        """weighted sum as an expression; long sums are split into partial steps (256-char driver cap)"""
        terms = [(c, v) for c, v in terms if c > 0]
        if not terms:
            return '0.0'
        txt = lambda tt: ' + '.join('%.4f * %s' % (c, v) for c, v in tt)
        if len(terms) <= 8:
            return '(%s)' % txt(terms)
        parts = [step('%s_p%d' % (name, j), txt(terms[i:i + 8])) for j, i in enumerate(range(0, len(terms), 8))]
        return '(%s)' % ' + '.join(parts)
    caps_meta = {}
    for S, s in SIDES:
        cw = close_w[S]
        K = {m: m + '_' + S for m in EYE_MUSCLES}
        inputs.extend(K[m] for m in EYE_MUSCLES)
        b = step('b_' + S, cl('%s * %.6f' % (bone_var('lid_up_' + S, 'ROT_X'), -sign_lid / r(ROM['lid_close']))))
        lo = step('lo_' + S, cl('%s * %.6f' % (bone_var('lid_lo_' + S, 'ROT_X'), sign_lid / r(ROM['lid_lo_raise']))))
        val = {m: K[m] for m in EYE_MUSCLES}; val['lid_lo_raise'] = lo
        closers = [m for m in EYE_MUSCLES if not EYE_MUSCLES[m].get('raise_type')] + ['lid_lo_raise']
        on_up = [m for m in closers if m in cw['up']]
        on_lo = [m for m in closers if m in cw['lo']]
        # normalised caps: the close muscles acting on one lid share ONE unit of weight
        fu = step('fu_' + S, '1.0 / max(1.0, %s)' % ' + '.join(val[m] for m in on_up))
        fl = step('fl_' + S, '1.0 / max(1.0, %s)' % ' + '.join(val[m] for m in on_lo))
        fm = step('fm_' + S, 'min(%s, %s)' % (fu, fl))
        eff = dict(val)
        for m in closers:
            f = fm if (m in on_up and m in on_lo) else fu if m in on_up else fl
            eff[m] = step('e_%s_%s' % (m.split('_')[0], S), '%s * %s' % (val[m], f))
        # blink shares the same unit: the blink key is scaled by 1 - A (A = what the muscles still hold)
        A = step('A_' + S, '(1.0 - %s) * max(%s, %s)' % (b, ' + '.join(eff[m] for m in on_up),
                                                        ' + '.join(eff[m] for m in on_lo)))
        Wb = step('Wb_' + S, '1.0 - %s' % A)
        caps_meta[S] = dict(close_on_upper_lid=on_up, close_on_lower_lid=on_lo)
        raisers = [m for m in EYE_MUSCLES if EYE_MUSCLES[m].get('raise_type')]
        for ob_name in ('eye_' + S, 'lash_' + S):
            for m in EYE_MUSCLES:
                if m in raisers:
                    continue                # face rig 5: set after the raise cap below
                keyf[(ob_name, K[m])] = eff[m]
                keyf[(ob_name, 'blink_x_' + K[m])] = '%s * %s' % (eff[m], b)
            keyf[(ob_name, 'blink_' + S)] = '%s * %s' % (b, Wb)
            for bk in BLINK_NODES:
                keyf[(ob_name, 'blink_ib%02d_%s' % (round(bk * 100), S))] = '%s * %s' % (hat_expr(b, bk), Wb)
        keyf[('eye_' + S, 'lid_lo_raise_' + S)] = eff['lid_lo_raise']
        keyf[('eye_' + S, 'blink_x_lid_lo_raise_' + S)] = '%s * %s' % (eff['lid_lo_raise'], b)
        # looks fade on the equivalent blink B = Wb*b + (1-b)*sum(w * capped close muscle)
        Bn = {}
        for tag, ws in (('u', dict(cw['up'])), ('d', dict(cw['lo'])),
                        ('s', {m: max(cw['up'].get(m, 0.0), cw['lo'].get(m, 0.0)) for m in set(cw['up']) | set(cw['lo'])})):
            Bn[tag] = step('B%s_%s' % (tag, S), '%s * %s + (1.0 - %s) * %s' % (
                Wb, b, b, wsum('B%s_%s' % (tag, S), sorted((w_, eff[m]) for m, w_ in ws.items()))))
        for nm, ch, sc, tag in (('look_L', 'ROT_Z', sign_yaw / r(ROM['eye_yaw']), 's'),
                                ('look_R', 'ROT_Z', -sign_yaw / r(ROM['eye_yaw']), 's'),
                                ('look_up', 'ROT_X', sign_pitch / r(ROM['eye_up']), 'u'),
                                ('look_down', 'ROT_X', -sign_pitch / r(ROM['eye_down']), 'd')):
            b0, b1 = fade[(nm, S)]
            lk = step('%s_%s' % (nm.replace('look_', 'lk'), S), cl('%s * %.6f' % (bone_var('eye_' + S, ch), sc)))
            if nm == 'look_up':
                # face rig 5: soft knee over the top of the range (15-25 deg): full pitch gives 0.88 of the
                # key. Seed 777 (AU7 1 + full look-up + lid_lo) put the pupil 0.3 mm past the baseline.
                lk = step('lkups_' + S, '%s - %.4f * max(0.0, %s - %.2f) * max(0.0, %s - %.2f)' % (
                    lk, LOOKUP_KNEE[1] / (1 - LOOKUP_KNEE[0]) ** 2, lk, LOOKUP_KNEE[0], lk, LOOKUP_KNEE[0]))
            if nm == 'look_up':
                # face rig 6: look-up eases off under AU7, most on the upward diagonals. The raise fade (face
                # rig 5) took away the AU5 rim lift that used to cover AU7 + a diagonal look-up (seed 29 #236:
                # AU7_R .93 + AU5_R 1 + look (28.7, 21.4) put the pupil 1.4 mm past the baseline).
                lk = step('lkup7_' + S, '%s * max(0.0, 1.0 - %s * (%.3f + %.3f * max(lkL_%s, lkR_%s)))' % (
                    lk, eff['AU7_lid_tightener'], LOOKUP_AU7[0], LOOKUP_AU7[1], S, S))
            keyf[('eye_' + S, nm)] = '%s * %s' % (lk, cl('(%.4f - %s) / %.4f' % (b1, Bn[tag], b1 - b0)))
        # face rig 5: raise-type lid keys (AU1 / AU2 / AU5) fade out while anything closes the upper lid.
        # A close clips the pupil at ITS lid line; a raise lifts the rim but not that cut, so the mix left
        # a flat chord over the pupil with no rim on it. Bu (equivalent upper blink) >= RAISE_BETA -> 0.
        fr_ = step('fr_' + S, cl('1.0 - %s / %.4f' % (Bn['u'], RAISE_BETA)))
        for m in raisers:
            eff[m] = step('e_%s_%s' % (m.split('_')[0], S), '%s * %s' % (val[m], fr_))
            for ob_name in ('eye_' + S, 'lash_' + S):
                keyf[(ob_name, K[m])] = eff[m]
                keyf[(ob_name, 'blink_x_' + K[m])] = '%s * %s' % (eff[m], b)

    # ---- mouth caps: per-key share of the toga room (lower-lip drop) and of the lip gap (closing)
    MG_TOGA, MG_GAP = 0.0008, 0.0002       # targets: >= 0.5 mm over the toga, lips never cross
    gap_b = [mbase[c * 5].z - mbase[c * 5 + 4].z for c in range(NU + 1)]
    # shares are taken PER COLUMN (25 lip columns): AU15_L and AU15_R peak at opposite columns, and
    # any coarser band adds them as if they met (5 bands halved sad and frown). Each column keeps its
    # own sum <= 1 - exact for linear morphs; a key takes the smallest factor of the columns it touches.
    NB = NU + 1
    band = lambda c: c
    cap_drop, cap_close = {}, {}
    up4 = lambda x: math.ceil(x * 1e4) / 1e4
    # face rig 4: the toga under a vertex is taken as the HIGHEST toga anywhere that vertex can reach (every
    # key's sideways move summed, +/-1 bin), so the drop is pure z - exactly linear, exactly additive. Face
    # rig 3 measured each key's drop over the toga at that key's own x; mixes that slid a vertex inward
    # (funneler) while another key dropped it (jaw) went under by 4-7 mm.
    # reach = muscle + jaw keys only (the viseme letters are mixes of the same muscles, not extra reach)
    mk_m = [(n, co) for n, co in mk if n not in MOUTH_RECIPES]
    # Reach = the largest single-key move each way (+/-1 bin). A summed reach (every key at once) ran the
    # corner 36 mm out onto the rope knot beside it and left AU15 no room at all (frown corners went UP).
    xneg = [min(min(0.0, co[vi].x - p0.x) for _, co in mk_m) for vi, p0 in enumerate(mbase)]
    xpos = [max(max(0.0, co[vi].x - p0.x) for _, co in mk_m) for vi, p0 in enumerate(mbase)]
    def toga_ceiling(vi, lo, hi):
        a, b = round((mbase[vi].x + lo) / 0.01) - 1, round((mbase[vi].x + hi) / 0.01) + 1
        return max(toga_bins.get(j, -1.0) for j in range(a, b + 1))
    tceil = [toga_ceiling(vi, xneg[vi], xpos[vi]) for vi in range(len(mbase))]
    # a corner vertex whose reach touches the rope (room <= 2 mm) keeps its own-window room instead
    tceil = [t if mbase[vi].z - t > 0.002 else toga_ceiling(vi, 0.0, 0.0) for vi, t in enumerate(tceil)]
    # face rig 5: fit the AU15 corner drop to the toga room - the largest fit (same on both sides, so the
    # frown stays symmetric) whose drop share stays <= 0.95 on its own. The cap then never has to scale
    # the whole key (face rig 4: a capped AU15_L lost its arch and its lens with its corner).
    global AU15_FIT
    def au15_share(fit):
        sh = 0.0
        for S, s in SIDES:
            co = mouth_shape(au15_side(s, fit))
            for vi, (p0, p) in enumerate(zip(mbase, co)):
                d = p0.z - p.z
                if d > 1e-6:
                    sh = max(sh, d / max(p0.z - tceil[vi] - MG_TOGA, 1e-4))
        return sh
    lo_, hi_ = 0.0, 1.0
    if au15_share(1.0) > 0.95:
        for _ in range(24):
            mid_ = (lo_ + hi_) / 2
            lo_, hi_ = (mid_, hi_) if au15_share(mid_) <= 0.95 else (lo_, mid_)
        AU15_FIT = lo_
    else:
        AU15_FIT = 1.0
    info['au15_fit'] = round(AU15_FIT, 4); info['au15_corner_drop_mm'] = round(AU15_FIT * AU15_DROP * 1000, 2)
    mk = [(n, mouth_shape(au15_side(dict(SIDES)[n[-1]], AU15_FIT)) if n.startswith('AU15_') else co) for n, co in mk]
    mouth_fix = {n: co for n, co in mk if n.startswith('AU15_')}
    for kb in mo.data.shape_keys.key_blocks:
        if kb.name in mouth_fix:
            kb.data.foreach_set('co', [c for p in mouth_fix[kb.name] for c in p])
    for n, co in mk:
        dd, cc = {}, {}
        for vi, (p0, p) in enumerate(zip(mbase, co)):
            d = p0.z - p.z
            if d > 1e-6:
                k_ = band(vi // 5); dd[k_] = max(dd.get(k_, 0.0), d / max(p0.z - tceil[vi] - MG_TOGA, 1e-4))
        for c in range(NU + 1):
            d = gap_b[c] - (co[c * 5].z - co[c * 5 + 4].z)
            if d > 1e-6:
                k_ = band(c); cc[k_] = max(cc.get(k_, 0.0), d / max(gap_b[c] - MG_GAP, 1e-4))
        dd = {k_: up4(v) for k_, v in dd.items() if v > 1e-3}
        cc = {k_: up4(v) for k_, v in cc.items() if v > 1e-3}
        if dd:
            cap_drop[n] = dd
        if cc:
            cap_close[n] = cc
    mouth_in = [n for n, _ in mk if n not in ('jaw_open', 'jaw_side_L', 'jaw_side_R')]
    inputs.extend(mouth_in)
    src = {n: n for n in mouth_in}
    src['AU24_lip_presser'] = step('au24x', cl('AU24_lip_presser + %.3f * AU17_chin_raiser * (1.0 - min(AU15_lip_corner_depressor_L, AU15_lip_corner_depressor_R))' % AU17_CLOSE))
    src['jaw_open'] = step('jaw', cl('%s * %.6f' % (bone_var('jaw', 'ROT_X'), sign_open / r(ROM['jaw_open']))))
    for S, s in SIDES:
        src['jaw_side_' + S] = step('js_' + S, cl('%s * %.6f' % (bone_var('jaw', 'ROT_Z'),
                                                               (sign_side if s > 0 else -sign_side) / r(ROM['jaw_side']))))
    fb = {}
    for tag, cap in (('d', cap_drop), ('c', cap_close)):
        for k_ in range(NB):
            terms = [(cap[n][k_], src[n]) for n, _ in mk if n in cap and k_ in cap[n]]
            if terms:
                fb[(tag, k_)] = step('f%s%d' % (tag, k_), '1.0 / max(1.0, %s)' % wsum('s%s%d' % (tag, k_), terms))
    fmask = {}
    def min_tree(v):
        return v[0] if len(v) == 1 else 'min(%s, %s)' % (v[0], min_tree(v[1:]))
    for n, _ in mk:
        fs = sorted(set([fb[('d', k_)] for k_ in cap_drop.get(n, {})] + [fb[('c', k_)] for k_ in cap_close.get(n, {})]))
        if not fs:
            keyf[('mouth', n)] = src[n]
            continue
        t_ = tuple(fs)
        if t_ not in fmask:                    # one factor per distinct column set: nested min, 8 per step
            j_ = len(fmask)
            parts = [step('m%d_p%d' % (j_, q), min_tree(fs[i:i + 8])) for q, i in enumerate(range(0, len(fs), 8))]
            fmask[t_] = parts[0] if len(parts) == 1 else step('m%d' % j_, min_tree(parts))
        keyf[('mouth', n)] = '%s * %s' % (src[n], fmask[t_])
    # face rig 7: the orbicularis (pucker / funnel, incl. the E / F letters that carry them) OVERRIDES the
    # expression muscles - zygomaticus, buccinator, depressor, mentalis, presser, tightener fade out as the
    # purse grows. Their deltas have opposing curvature to the O / pucker (u^2 vs ellipse), so a straight sum
    # bent one lip line twice; one shared factor, applied once, instead of a patch per combination.
    pt_ = [(1.0, 'AU22_lip_funneler'), (1.0, 'AU18_lip_pucker')] + [
        (rc_.get('AU22_lip_funneler', 0.0) + rc_.get('AU18_lip_pucker', 0.0), L_) for L_, rc_ in MOUTH_RECIPES.items()]
    purse_ = step('purse', cl(wsum('spurse', pt_)))
    fade_ = step('purse_fade', cl('1.0 - 2.0 * %s' % purse_))     # half a purse already silences them
    for (host_, n_), e_ in list(keyf.items()):
        if host_ == 'mouth' and n_.startswith(PURSE_FADED):
            keyf[(host_, n_)] = '%s * %s' % (e_, fade_)
    info['purse_faded_keys'] = list(PURSE_FADED)
    # face rig 7: zygomaticus / buccinator and the depressor are ANTAGONISTS on one corner. Summed, the u^2 lift
    # and the quartic corner drop have opposite curvature and bent the lip twice; here they cancel per side:
    # the stronger one keeps the difference, the weaker goes to zero (happy 50/50 sad = level corners).
    for S_, s_ in SIDES:
        up_ = 'AU12_lip_corner_puller_%s' % S_; um_ = 'AU14_dimpler_%s' % S_; dn_ = 'AU15_lip_corner_depressor_%s' % S_
        net_ = step('ag_net_' + S_, '%s + %s - %s' % (up_, um_, dn_))
        fu_ = step('ag_up_' + S_, cl('%s / max(%s + %s, 0.0001)' % (net_, up_, um_)))
        fd_ = step('ag_dn_' + S_, cl('-%s / max(%s, 0.0001)' % (net_, dn_)))
        for kn_, f_ in ((up_, fu_), (um_, fu_), (dn_, fd_)):
            keyf[('mouth', kn_)] = '%s * %s' % (keyf[('mouth', kn_)], f_)
    caps_meta['mouth_drop_share'] = cap_drop
    caps_meta['mouth_close_share'] = cap_close
    caps_meta['au15_fit'] = info['au15_fit']; caps_meta['au15_corner_drop_mm'] = info['au15_corner_drop_mm']
    caps_meta['mouth_margins_mm'] = dict(toga=MG_TOGA * 1000, gap=MG_GAP * 1000)
    caps_meta['mouth_toga_room_min_mm'] = round(min(p0.z - t for p0, t in zip(mbase, tceil)) * 1000, 2)

    # ---- Blender drivers from the same strings (inputs 'in_*' and steps 'cx_*' are armature props)
    names = dict(steps)
    inset = set(inputs)
    for n in inputs:
        arm['in_' + n] = 0.0
    for n, _ in steps:
        arm['cx_' + n] = 0.0
    idre = re.compile(r'[A-Za-z_][A-Za-z_0-9]*')
    def bl_drive(host, path, expr, label):
        fc_ = host.driver_add(path); d = fc_.driver; d.type = 'SCRIPTED'
        vmap = {}
        def sub(mo):
            t = mo.group(0)
            if t in FUNCS:
                return t
            if t not in vmap:
                vmap[t] = 'a%d' % len(vmap)
                v = d.variables.new(); v.name = vmap[t]
                if t in bonevars:
                    v.type = 'TRANSFORMS'; tg = v.targets[0]; tg.id = arm
                    tg.bone_target, tg.transform_type = bonevars[t]; tg.transform_space = 'LOCAL_SPACE'
                    try:
                        tg.rotation_mode = 'XYZ'
                    except Exception:
                        pass
                else:
                    assert t in inset or t in names, (label, t)
                    v.type = 'SINGLE_PROP'; tg = v.targets[0]; tg.id_type = 'OBJECT'; tg.id = arm
                    tg.data_path = '["%s%s"]' % ('in_' if t in inset else 'cx_', t)
            return vmap[t]
        e = idre.sub(sub, expr)
        d.expression = e
        assert len(e) < 256 and d.is_simple_expression, (label, e)
        info['drivers'] += 1
    for n, e in steps:
        bl_drive(arm, '["cx_%s"]' % n, e, n)
    for (on, kn), e in keyf.items():
        bl_drive(objs[on].data.shape_keys.key_blocks[kn], 'value', e, on + ':' + kn)
    missing = [(on, kb.name) for on in KEYED_OBJS for kb in objs[on].data.shape_keys.key_blocks[1:]
               if (on, kb.name) not in keyf]
    assert not missing, missing
    caps = dict(
        version='face rig 3 (2026-09-29)',
        how=('Set every input (0..1) and read the bone channels; evaluate "steps" IN ORDER (each is a '
             'plain expression over inputs, bone channels and earlier steps; only max/min/+-*/); then '
             'every morph weight = its "keys" expression. Same strings drive Blender.'),
        inputs=inputs,
        bones={n: dict(bone=b_, channel=c_, value='pose-bone local euler (XYZ, radians), after constraints')
               for n, (b_, c_) in bonevars.items()},
        steps=[dict(name=n, expr=e) for n, e in steps],
        keys={on: {kn: e for (o2, kn), e in keyf.items() if o2 == on} for on in KEYED_OBJS},
        meta=caps_meta)
    arm['face_caps'] = json.dumps(caps)
    info['face_caps'] = caps
    arm['face_driver_formulas'] = json.dumps({'see': "armature['face_caps'] / face_caps.json (face rig 3)"})

    # ---- skinning: rigid on face_root/head; lip corners take the mouth's outer quarter
    bpy.ops.object.mode_set(mode='OBJECT')
    for n, o in objs.items():
        g = o.vertex_groups.get(rigid_group) or o.vertex_groups.new(name=rigid_group)
        if n == 'mouth':
            gl = {S: o.vertex_groups.new(name='lip_corner_' + S) for S, _ in SIDES}
            for i, v in enumerate(o.data.vertices):
                u = -1 + 2 * (i // 5) / NU
                wsum = 0.0
                for S, s in SIDES:
                    w = sstep(0.55, 1.0, s * u)
                    if w > 0:
                        gl[S].add([i], w, 'REPLACE'); wsum += w
                g.add([i], 1.0 - wsum, 'REPLACE')
        elif armature_or_None is None:
            g.add(list(range(len(o.data.vertices))), 1.0, 'REPLACE')
        if not any(m.type == 'ARMATURE' for m in o.modifiers):
            md = o.modifiers.new('face_armature', 'ARMATURE'); md.object = arm
            o.modifiers.move(len(o.modifiers) - 1, 0)
    arm['face_presets'] = json.dumps(PRESETS)
    arm['face_rom'] = json.dumps(ROM)
    arm['face_signs'] = json.dumps(info['signs'])
    info['armature'] = arm.name
    info['skipped'] = SKIPPED
    return info

SKIPPED = {
    'AU9_nose_wrinkler': 'her nose is a rigid dot with no skin around it to wrinkle',
    'AU11_nasolabial_deepener': 'no nasolabial furrow geometry; its upper-lip lift is AU10',
    'AU13_cheek_puffer / AU14 dimple / AU6 cheek bulge': 'no cheek geometry - the cheeks are the rigid clock '
        'face (body_disc, shared with the torso, carries ticks); deforming it would bend the clock',
    'AU19 tongue, AU28 lip suck, AU38/39 nostrils': 'no tongue, no lip thickness, no nostrils in her mesh',
    'AU29 jaw thrust': 'bone slide allowed (0-5 mm) but drives no key: a depth-only move is invisible on a decal mouth',
    'AU43 separate key': 'AU43/45 is blink_L/R (lid bone), not duplicated',
}

# ================================================================ standalone: stages
def opt(argv, name, default):
    return argv[argv.index(name) + 1] if name in argv else default

def exec_build():
    BUILD = os.path.join(HERE, 'build_her.py')
    saved = sys.argv[:]
    sys.argv = [saved[0], '--', '--views', ',', '--no-export', '--out', OUT]
    ns = {'__name__': 'build_her', '__file__': BUILD}
    exec(compile(open(BUILD, encoding='utf-8').read(), BUILD, 'exec'), ns)    # build_her.py UNCHANGED
    sys.argv = saved
    return ns

def cycles_cpu(scene, samples):
    scene.render.engine = 'CYCLES'
    scene.cycles.device = 'CPU'
    scene.cycles.samples = samples
    scene.cycles.use_denoising = True
    try:
        scene.cycles.denoiser = 'OPENIMAGEDENOISE'
    except Exception:
        pass
    scene.cycles.seed = 0
    # OFF: with persistent data Cycles kept stale eye geometry after the closed-blink states (film
    # frames 49-63 rendered both eyes black; the same frame rendered fresh was correct, 2026-09-29)
    scene.render.use_persistent_data = False
    scene.render.image_settings.compression = 15
    # The ink outline is an inverted hull that EEVEE hides with use_backface_culling. Cycles ignores
    # that flag, so the hull's inner side covered her whole face in outline brown; and seen from
    # inside, the hull also blocked every shadow / bounce ray leaving the face (face went black).
    # Render-only emulation of what EEVEE shows: the hull is opaque ONLY to camera rays on its
    # front faces; transparent to everything else.
    m = bpy.data.materials.get('her_outline')
    if m is not None and not m.get('cycles_cull'):
        nt = m.node_tree
        out = [n for n in nt.nodes if n.type == 'OUTPUT_MATERIAL'][0]
        src = out.inputs['Surface'].links[0].from_socket
        geo = nt.nodes.new('ShaderNodeNewGeometry')
        lp = nt.nodes.new('ShaderNodeLightPath')
        front = nt.nodes.new('ShaderNodeMath'); front.operation = 'SUBTRACT'
        front.inputs[0].default_value = 1.0
        nt.links.new(geo.outputs['Backfacing'], front.inputs[1])
        opq = nt.nodes.new('ShaderNodeMath'); opq.operation = 'MULTIPLY'
        nt.links.new(lp.outputs['Is Camera Ray'], opq.inputs[0]); nt.links.new(front.outputs[0], opq.inputs[1])
        fac = nt.nodes.new('ShaderNodeMath'); fac.operation = 'SUBTRACT'
        fac.inputs[0].default_value = 1.0
        nt.links.new(opq.outputs[0], fac.inputs[1])
        tr = nt.nodes.new('ShaderNodeBsdfTransparent')
        mix = nt.nodes.new('ShaderNodeMixShader')
        nt.links.new(fac.outputs[0], mix.inputs[0])
        nt.links.new(src, mix.inputs[1]); nt.links.new(tr.outputs[0], mix.inputs[2])
        nt.links.new(mix.outputs[0], out.inputs['Surface'])
        m['cycles_cull'] = 1

def cam_at(cam, target, yaw_deg, d, up=0.0, lens=85):
    cam.data.lens = lens
    y = math.radians(yaw_deg); t = Vector(target)
    cam.location = t + Vector((d * math.sin(y), -d * math.cos(y), up))
    cam.rotation_euler = (t - cam.location).to_track_quat('-Z', 'Y').to_euler()

def neutral_render(scene, cam, path):
    """Test 8's front camera exactly (yaw 22, d 3.6, 1600 px), border-cropped to the face box."""
    cam_at(cam, (0, 0, 0.6), 22, 3.6, 0.35)
    r = scene.render
    r.resolution_x = r.resolution_y = 1600
    x0, y0, x1, y1 = T8_CROP
    r.use_border = True; r.use_crop_to_border = True
    r.border_min_x, r.border_max_x = x0 / 1600, x1 / 1600
    r.border_min_y, r.border_max_y = 1 - y1 / 1600, 1 - y0 / 1600
    r.filepath = path
    bpy.ops.render.render(write_still=True)
    r.use_border = False; r.use_crop_to_border = False

def stage_build(argv):
    ns = exec_build()
    scene = bpy.context.scene
    cam = bpy.data.objects['cam']
    cycles_cpu(scene, int(opt(argv, '--nsamples', '32')))
    if '--no-prerig' not in argv:
        neutral_render(scene, cam, OUT + '/neutral_front_prerig.png')
    objs = [bpy.data.objects[n] for n in FACE_OBJECTS]
    info = add_face_rig(bpy.context, None, objs)
    bpy.context.view_layer.update()
    info['char'] = [o.name for o in ns['CHAR']]
    bpy.data.objects['face_rig']['char'] = json.dumps(info['char'])
    json.dump(info, open(OUT + '/face_rig_info.json', 'w'), indent=1, default=str)
    json.dump(info['face_caps'], open(OUT + '/face_caps.json', 'w'), indent=1)
    bpy.ops.wm.save_as_mainfile(filepath=BLEND)
    print('FACE_INFO ' + json.dumps({k: info[k] for k in ('bones', 'drivers', 'signs', 'jaw_drop_mm',
                                                          'lip_room_mm', 'look_pupil_verts_flattened')}))

# ---- posing helpers (used by render + check)
def pose_state(arm, state):
    """state: keys{name: w} (muscle / baked keys), jaw (0..1 open), jaw_side (+-1), look (yaw, pitch deg),
    lid_up {S: close 0..1}, lid_lo {S: 0..1}. Everything else back to rest."""
    signs = json.loads(arm['face_signs'])
    P = arm.pose.bones
    for pb in P:
        pb.location = (0, 0, 0); pb.rotation_euler = (0, 0, 0)
    r = math.radians
    P['jaw'].rotation_euler.x = signs['jaw_open'] * r(ROM['jaw_open']) * state.get('jaw', 0.0)
    P['jaw'].rotation_euler.z = signs['jaw_side'] * r(ROM['jaw_side']) * state.get('jaw_side', 0.0)
    yaw, pitch = state.get('look', (0.0, 0.0))
    if yaw or pitch:
        tb = P['eye_target']
        dist = abs(tb.bone.head_local.y - P['eye_L'].bone.head_local.y)
        vec = Vector((dist * math.tan(r(yaw)), 0, dist * math.tan(r(pitch))))
        tb.location = tb.bone.matrix_local.to_3x3().inverted() @ vec
    for S, _ in SIDES:
        P['lid_up_' + S].rotation_euler.x = -signs['lid'] * r(ROM['lid_close']) * state.get('lid_up', {}).get(S, 0.0)
        P['lid_lo_' + S].rotation_euler.x = signs['lid'] * r(ROM['lid_lo_raise']) * state.get('lid_lo', {}).get(S, 0.0)
    keys = state.get('keys', {})
    # face rig 3: every key is driven; the state's key weights are the rig's INPUTS (armature props)
    inputs = json.loads(arm['face_caps'])['inputs']
    bad = set(keys) - set(inputs)
    assert not bad, ('not an input', sorted(bad))
    for n in inputs:
        arm['in_' + n] = float(keys.get(n, 0.0))
    arm.update_tag()
    bpy.context.view_layer.update()
    bpy.context.view_layer.update()        # drivers reading driven props: settle in one more pass

def key_tiles():
    """(label, state) for every key at full; bone-driven keys are posed through their bone."""
    t = []
    for m in EYE_MUSCLES:
        for S, _ in SIDES:
            t.append((m + '_' + S, dict(keys={m + '_' + S: 1.0})))
    for m in MOUTH_PAIRED:
        for S, _ in SIDES:
            t.append((m + '_' + S, dict(keys={m + '_' + S: 1.0})))
    for m in MOUTH_SINGLE:
        t.append((m, dict(keys={m: 1.0})))
    t += [('bone jaw_open (AU26/27) 35deg', dict(jaw=1.0)),
          ('bone jaw_side_L 8deg', dict(jaw_side=1.0)), ('bone jaw_side_R', dict(jaw_side=-1.0)),
          ('bone lid_up_L: blink_L 40deg', dict(lid_up={'L': 1.0})), ('bone lid_up_R: blink_R', dict(lid_up={'R': 1.0})),
          ('bone lid_up both: blink 0.5', dict(lid_up={'L': 0.5, 'R': 0.5})),
          ('bone lid_lo_L: lid_lo_raise_L', dict(lid_lo={'L': 1.0})), ('bone lid_lo_R', dict(lid_lo={'R': 1.0})),
          ('bone eyes: look_L 35deg', dict(look=(38, 0))), ('bone eyes: look_R', dict(look=(-38, 0))),
          ('bone eyes: look_up 25deg', dict(look=(0, 28))), ('bone eyes: look_down 30deg', dict(look=(0, -33)))]
    return t

def curve_tiles():
    """face rig 5: every one-sided mouth key at 1 and the two smirks, with the side whose corner moves."""
    t = []
    for m in list(MOUTH_PAIRED) + ['AU15_lip_corner_depressor']:
        for S, s in SIDES:
            t.append((m + '_' + S, dict(keys={m + '_' + S: 1.0}), s))
    t.append(('smirk AU12_L + AU15_R', dict(keys={'AU12_lip_corner_puller_L': 1.0, 'AU15_lip_corner_depressor_R': 1.0}), 2))
    t.append(('smirk AU12_R + AU15_L', dict(keys={'AU12_lip_corner_puller_R': 1.0, 'AU15_lip_corner_depressor_L': 1.0}), 2))
    return t

def zig_tiles():
    t = [('side AU20_L=1', dict(keys={'AU20_lip_stretcher_L': 1.0})),
         ('side AU15_L,AU17,AU20_R', dict(keys={'AU15_lip_corner_depressor_L': 1.0, 'AU17_chin_raiser': 1.0,
                                                 'AU20_lip_stretcher_R': 1.0})),
         ('AU15 both + AU17', dict(keys={**both('AU15_lip_corner_depressor', 1.0), 'AU17_chin_raiser': 1.0})),
         ('AU17 alone', dict(keys={'AU17_chin_raiser': 1.0})), ('AU22 alone', dict(keys={'AU22_lip_funneler': 1.0}))]
    t += [('preset ' + k, preset_state(k)) for k in PRESETS]
    t += [('viseme ' + k, dict(keys={k: 1.0})) for k in 'DEFGH']
    return t

GRID_LOOKS = (('centre', (0, 0)), ('left', (38, 0)), ('right', (-38, 0)), ('up', (0, 28)), ('down', (0, -33)),
              ('up-left', (38, 28)), ('down-right', (-38, -33)))

def lerp_state(a, b, t):
    ks = set(a.get('keys', {})) | set(b.get('keys', {}))
    def lv(n, d):
        return a.get(n, d) * (1 - t) + b.get(n, d) * t
    def ld(n):
        A, B = a.get(n, {}), b.get(n, {})
        return {k: A.get(k, 0.0) * (1 - t) + B.get(k, 0.0) * t for k in set(A) | set(B)}
    la, lb = a.get('look', (0, 0)), b.get('look', (0, 0))
    return dict(keys={k: a.get('keys', {}).get(k, 0.0) * (1 - t) + b.get('keys', {}).get(k, 0.0) * t for k in ks},
                jaw=lv('jaw', 0.0), jaw_side=lv('jaw_side', 0.0),
                look=(la[0] * (1 - t) + lb[0] * t, la[1] * (1 - t) + lb[1] * t),
                lid_up=ld('lid_up'), lid_lo=ld('lid_lo'))

def seq_frames():
    """~4 s at 24 fps: neutral > happy > surprise > blink > frown > sad > neutral, then mouths A..X."""
    ease = lambda t: t * t * (3 - 2 * t)
    blink = dict(lid_up={'L': 1.0, 'R': 1.0})
    chain = [({}, 0), (preset_state('happy'), 7), (preset_state('surprise'), 7), (blink, 4),
             (preset_state('frown_concern'), 5), (preset_state('sad'), 7), ({}, 7)]
    fr = [{}] * 3
    for (a, _), (b, n) in zip(chain, chain[1:]):
        fr += [lerp_state(a, b, ease((i + 1) / n)) for i in range(n)]
        fr += [b] * 3
    prev = {}
    for k in 'ABCDEFGHX':
        st = dict(keys={k: 1.0})
        fr += [lerp_state(prev, st, (i + 1) / 2) for i in range(2)] + [st] * 2
        prev = st
    return fr

def preset_state(name):
    p = PRESETS[name]
    return dict(keys=p.get('keys', {}), jaw=p.get('jaw', 0.0), look=p.get('look', (0, 0)),
                lid_up=p.get('lid_up', {}), lid_lo=p.get('lid_lo', {}))

def stage_render(argv):
    bpy.ops.wm.open_mainfile(filepath=BLEND)
    scene = bpy.context.scene; cam = bpy.data.objects['cam']; arm = bpy.data.objects['face_rig']
    cycles_cpu(scene, int(opt(argv, '--nsamples', '32')))
    only = opt(argv, '--only', 'neutral,overlay,keys,mouths,expr').split(',')
    labels = {}
    pose_state(arm, {})
    if 'neutral' in only:
        neutral_render(scene, cam, OUT + '/neutral_front.png')
    scene.cycles.samples = int(opt(argv, '--samples', '12'))
    r = scene.render
    if 'overlay' in only:
        from bpy_extras.object_utils import world_to_camera_view
        bones2d = {}
        r.resolution_x = r.resolution_y = 700
        for view, yaw, tgt, d in (('front', 0, (0, -0.1, 0.74), 1.35), ('side', 90, (0, -0.05, 0.74), 1.35)):
            cam_at(cam, tgt, yaw, d)
            bpy.context.view_layer.update()
            r.filepath = OUT + '/_overlay_%s_base.png' % view
            bpy.ops.render.render(write_still=True)
            bl = {}
            for pb in arm.pose.bones:
                pts = []
                for p in (pb.head, pb.tail):
                    c = world_to_camera_view(scene, cam, arm.matrix_world @ p)
                    pts.append((c.x * 700, (1 - c.y) * 700, c.z))
                bl[pb.name] = pts
            bones2d[view] = bl
        json.dump(bones2d, open(OUT + '/_bones2d.json', 'w'))
    hide = [o for o in bpy.data.objects if o.name.split('_')[0] in ('leg', 'sandal', 'skirt', 'waist', 'arm', 'glove')]
    for o in hide:
        o.hide_render = True
    groups = []
    if 'keys' in only:
        groups.append(('keys', key_tiles(), (0, -0.1, 0.78), 1.3, 360, 300))
    if 'mouths' in only:
        groups.append(('mouths', [(k, dict(keys={k: 1.0})) for k in 'ABCDEFGHX'], (0, -0.1, 0.60), 0.62, 360, 240))
    if 'expr' in only:
        groups.append(('expr', [('neutral', {})] + [(k, preset_state(k)) for k in PRESETS], (0, -0.1, 0.78), 1.3, 420, 360))
    if 'curve' in only:                    # face rig 5: one-sided keys + smirks, mouth close-up
        groups.append(('curve', [(l_, st) for l_, st, _ in curve_tiles()], (0, -0.1, 0.61), 0.62, 360, 240))
    if 'zig' in only:
        groups.append(('zig', zig_tiles(), (0, -0.1, 0.61), 0.62, 360, 240))
    if 'stress' in only:                   # face rig 3: the worst random combinations (written by check_face)
        groups.append(('stress', [tuple(x) for x in json.load(open(OUT + '/_stress_states.json'))],
                       (0, -0.1, 0.74), 1.45, 420, 420))
    if 'sadclose' in only:                 # face rig 3: eye close-ups, neutral vs sad (inner-corner tilt)
        groups.append(('sadclose', [('neutral', {}), ('sad', preset_state('sad')),
                                    ('happy', preset_state('happy')),
                                    ('frown_concern', preset_state('frown_concern'))],
                       (0, -0.1, 0.86), 0.95, 760, 400))
    for gname, items, tgt, d, rx, ry in groups:
        cam_at(cam, tgt, 0, d)
        r.resolution_x, r.resolution_y = rx, ry
        dd = OUT + '/_tiles_' + gname; os.makedirs(dd, exist_ok=True)
        labels[gname] = []
        for i, (lab, st) in enumerate(items):
            pose_state(arm, st)
            r.filepath = dd + '/%02d.png' % i
            bpy.ops.render.render(write_still=True)
            labels[gname].append(lab)
        pose_state(arm, {})
    if 'grid' in only:                     # blink 0 / 0.5 / 1 x every look
        cam_at(cam, (0, -0.1, 0.81), 0, 0.95)
        r.resolution_x, r.resolution_y = 380, 200
        dd = OUT + '/_tiles_grid'; os.makedirs(dd, exist_ok=True)
        labels['grid'] = []
        i = 0
        for b in (0.0, 0.5, 1.0):
            for ln, lk in GRID_LOOKS:
                pose_state(arm, dict(look=lk, lid_up={'L': b, 'R': b}))
                r.filepath = dd + '/%02d.png' % i; i += 1
                bpy.ops.render.render(write_still=True)
                labels['grid'].append('blink %.1f  %s' % (b, ln))
        pose_state(arm, {})
    if 'probe' in only:                    # ad-hoc states from a JSON list [[label, state], ...] (checks)
        scene.cycles.samples = 16; scene.cycles.use_denoising = True
        cam_at(cam, (0, -0.1, 0.74), 0, 1.45)
        r.resolution_x = r.resolution_y = 640
        for j, (lab, st) in enumerate(json.load(open(opt(argv, '--states', OUT + '/_probe_states.json')))):
            pose_state(arm, st)
            r.filepath = OUT + '/_probe_%02d.png' % j
            bpy.ops.render.render(write_still=True)
            print('PROBE', j, lab)
        pose_state(arm, {})
    if 'magenta' in only:                  # pupil + glint as flat magenta: must be 0 px at full blink
        import numpy as np
        mag = bpy.data.materials.new('probe_magenta'); mag.use_nodes = True
        nt = mag.node_tree
        for n in list(nt.nodes):
            if n.type != 'OUTPUT_MATERIAL':
                nt.nodes.remove(n)
        em = nt.nodes.new('ShaderNodeEmission'); em.inputs['Color'].default_value = (1, 0, 1, 1)
        em.inputs['Strength'].default_value = 3.0
        nt.links.new(em.outputs[0], [n for n in nt.nodes if n.type == 'OUTPUT_MATERIAL'][0].inputs['Surface'])
        saved = {}
        for S, _ in SIDES:
            me = bpy.data.objects['eye_' + S].data
            saved[S] = [me.materials[1], me.materials[2]]
            me.materials[1] = mag; me.materials[2] = mag
        scene.cycles.samples = 4; scene.cycles.use_denoising = False
        cam_at(cam, (0, -0.1, 0.81), 0, 0.95)
        r.resolution_x, r.resolution_y = 380, 200
        res = {}
        states = [('blink %.2f %s' % (b, ln), dict(look=lk, lid_up={'L': b, 'R': b}))
                  for b in (1.0,) for ln, lk in GRID_LOOKS]
        states += [('preset wink (L eye closed)', preset_state('wink')),
                   ('blink 1 + all eye muscles 1', dict(lid_up={'L': 1, 'R': 1}, look=(-38, -33), keys={
                       m + '_' + S: 1.0 for m in EYE_MUSCLES for S, _ in SIDES})),
                   ('blink 1 + lid_lo 1 + AU6 + AU7', dict(lid_up={'L': 1, 'R': 1}, lid_lo={'L': 1, 'R': 1},
                       keys={**both('AU6_cheek_raiser', 1.0), **both('AU7_lid_tightener', 1.0)}))]
        for lab, st in states:
            pose_state(arm, st)
            r.filepath = OUT + '/_magenta.png'
            bpy.ops.render.render(write_still=True)
            im = bpy.data.images.load(r.filepath, check_existing=False)
            px = np.empty(len(im.pixels), dtype=np.float32); im.pixels.foreach_get(px)
            px = px.reshape(-1, 4)
            magenta = (px[:, 0] > 0.6) & (px[:, 1] < 0.35) & (px[:, 2] > 0.6)
            if 'wink' in lab:                      # only her LEFT eye is closed: image right half
                w = r.resolution_x
                cols = np.arange(len(px)) % w
                magenta &= cols >= w // 2
            res[lab] = int(magenta.sum())
            bpy.data.images.remove(im)
        for S, _ in SIDES:
            me = bpy.data.objects['eye_' + S].data
            me.materials[1], me.materials[2] = saved[S]
        json.dump(res, open(OUT + '/_magenta.json', 'w'), indent=1)
        print('MAGENTA', json.dumps(res))
        pose_state(arm, {})
    if 'lash' in only:
        scene.cycles.samples = 32; scene.cycles.use_denoising = True
        pose_state(arm, preset_state('surprise'))
        cam_at(cam, (0, -0.1, 0.95), 0, 1.3)       # ~0.55 x 0.17 m: both eye tops, lashes, near ticks
        r.resolution_x, r.resolution_y = 1280, 392
        r.filepath = OUT + '/surprise_lash_zoom.png'
        bpy.ops.render.render(write_still=True)
        pose_state(arm, {})
    if 'seq' in only:
        scene.cycles.samples = int(opt(argv, '--seq-samples', '16')); scene.cycles.use_denoising = True
        cam_at(cam, (0, -0.1, 0.74), 0, 1.45)
        r.resolution_x = r.resolution_y = 720
        dd = OUT + '/_seq'; os.makedirs(dd, exist_ok=True)
        fr = seq_frames()
        a, z = [int(x) for x in opt(argv, '--frames', '0,%d' % len(fr)).split(',')]
        for i in range(a, min(z, len(fr))):
            pose_state(arm, fr[i])
            r.filepath = dd + '/%03d.png' % i
            bpy.ops.render.render(write_still=True)
        pose_state(arm, {})
    for o in hide:
        o.hide_render = False
    old = json.load(open(OUT + '/_labels.json')) if os.path.exists(OUT + '/_labels.json') else {}
    old.update(labels)
    json.dump(old, open(OUT + '/_labels.json', 'w'), indent=1)

def stage_export(argv):
    bpy.ops.wm.open_mainfile(filepath=BLEND)
    arm = bpy.data.objects['face_rig']
    pose_state(arm, {})
    char = [bpy.data.objects[n] for n in json.loads(arm['char'])]
    outline = bpy.data.materials.get('her_outline')
    for ob in char:
        for md in list(ob.modifiers):
            if md.name == 'outline_hull':
                ob.modifiers.remove(md)
        if ob.data.materials and outline is not None and ob.data.materials[-1] == outline:
            ob.data.materials.pop()
    for mn in ('her_face', 'her_arm', 'her_trim'):          # same flattening as build_her.py
        m = bpy.data.materials[mn]; nt = m.node_tree
        b = nt.nodes.get('Principled BSDF') or [n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'][0]
        for ln in list(b.inputs['Base Color'].links) + list(b.inputs['Normal'].links):
            nt.links.remove(ln)
        b.inputs['Base Color'].default_value = m.diffuse_color
    bpy.ops.object.select_all(action='DESELECT')
    for ob in char + [arm]:
        ob.select_set(True)
    bpy.context.view_layer.objects.active = arm
    bpy.ops.export_scene.gltf(filepath=GLB, export_format='GLB', use_selection=True, export_yup=True,
                              export_apply=True, export_draco_mesh_compression_enable=False,
                              export_animations=False, export_skins=True, export_morph=True)
    print('FACE glb', GLB, os.path.getsize(GLB))

# ================================================================ --compose (system Python + PIL)
def compose():
    from PIL import Image, ImageDraw, ImageFont, ImageChops
    try:
        font = ImageFont.truetype('arial.ttf', 15); big = ImageFont.truetype('arial.ttf', 22)
    except Exception:
        font = big = ImageFont.load_default()
    L = json.load(open(OUT + '/_labels.json'))
    def sheet(group, title, out, cols):
        labs = L[group]; d = OUT + '/_tiles_' + group
        ims = [Image.open(d + '/%02d.png' % i).convert('RGB') for i in range(len(labs))]
        w, h = ims[0].size; lh = 22
        rows = (len(ims) + cols - 1) // cols
        S = Image.new('RGB', (cols * w, 40 + rows * (h + lh)), (18, 18, 20))
        dr = ImageDraw.Draw(S); dr.text((10, 8), title, fill=(235, 235, 235), font=big)
        for i, (im, lab) in enumerate(zip(ims, labs)):
            x, y = (i % cols) * w, 40 + (i // cols) * (h + lh)
            S.paste(im, (x, y + lh)); dr.text((x + 6, y + 3), lab, fill=(240, 220, 170), font=font)
        S.save(OUT + '/' + out)
    def have(g):
        return g in L and os.path.exists(OUT + '/_tiles_%s/00.png' % g)
    if have('keys'):
        sheet('keys', 'Face rig 6 - every muscle key at 1.0 (Cycles CPU, straight front). "bone" = posed through its bone',
              'muscle_keys_sheet.png', 7)
    if have('mouths'):
        sheet('mouths', 'Face rig 6 - Rhubarb mouths A-H, X as muscle + jaw mixes', 'mouths_sheet.png', 5)
    if have('expr'):
        sheet('expr', 'Face rig 6 - expression presets (muscle keys + bones)', 'expressions_sheet.png', 4)
    if have('stress'):
        sheet('stress', 'Face rig 6 - the 12 worst of 500 random combinations (after the caps)', 'stress_sheet.png', 4)
    if have('sadclose'):
        sheet('sadclose', 'Face rig 6 - eye close-ups: neutral / sad / happy / frown', 'sad_close.png', 2)
    if have('curve'):
        sheet('curve', 'Face rig 6 - every one-sided mouth key at 1.0 + both smirks (lip line: one bend, no hook)',
              'mouth_curve_sheet.png', 4)
    if have('zig'):
        sheet('zig', 'Face rig 6 - mouth mixes, presets and open visemes (lip-line check)', 'zig_sheet.png', 4)
    if have('grid'):
        sheet('grid', 'Face rig 6 - blink 0 / 0.5 / 1 (rows) x look (columns), bones posed', 'blink_look_grid.png',
              len(GRID_LOOKS))
    if os.path.isdir(OUT + '/_seq') and '--movie' in sys.argv:
        import subprocess
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-framerate', '24', '-i', OUT + '/_seq/%03d.png',
                        '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '16', OUT + '/face_seq.mp4'], check=True)
    if not os.path.exists(OUT + '/_bones2d.json'):
        return
    # skeleton overlay
    B = json.load(open(OUT + '/_bones2d.json'))
    pan = []
    for view in ('front', 'side'):
        im = Image.open(OUT + '/_overlay_%s_base.png' % view).convert('RGB')
        dr = ImageDraw.Draw(im)
        for n, ((x0, y0, _), (x1, y1, _)) in B[view].items():
            col = (90, 200, 255) if n.startswith(('eye', 'lid')) else (255, 120, 200) if n.startswith('lip') \
                else (120, 255, 140) if n == 'jaw' else (255, 230, 90)
            dr.line((x0, y0, x1, y1), fill=col, width=3)
            dr.ellipse((x0 - 4, y0 - 4, x0 + 4, y0 + 4), outline=col, width=2)
            if view == 'front' or n in ('jaw', 'eye_L', 'lid_up_L', 'lid_lo_L', 'lip_corner_L', 'face_root'):
                dr.text((x0 + 6, y0 - 8), n, fill=col, font=font)
        pan.append(im)
    S = Image.new('RGB', (1400, 740), (18, 18, 20)); dr = ImageDraw.Draw(S)
    dr.text((10, 8), 'Face skeleton: front (left), her-left side (right). Eye targets sit 0.6 m ahead (off frame).',
            fill=(235, 235, 235), font=big)
    S.paste(pan[0], (0, 40)); S.paste(pan[1], (700, 40)); S.save(OUT + '/face_skeleton_overlay.png')
    # neutral diffs (threshold 12/255, as the rig checks)
    res = {}
    t8 = Image.open(T8).convert('RGB').crop(T8_CROP)
    nf = Image.open(OUT + '/neutral_front.png').convert('RGB')
    for tag, ref in (('vs_prerig_cycles', OUT + '/neutral_front_prerig.png'), ('vs_test8_eevee', None)):
        R = t8 if ref is None else Image.open(ref).convert('RGB')
        df = ImageChops.difference(nf, R).convert('L')
        hist = df.histogram()
        res[tag] = dict(px_over_12=sum(hist[13:]), max=max(i for i, c in enumerate(hist) if c), size=nf.size)
        df.point(lambda v: 255 if v > 12 else 0).save(OUT + '/neutral_diff_%s.png' % tag)
    json.dump(res, open(OUT + '/_neutral_diff.json', 'w'), indent=1)
    print('NEUTRAL_DIFF', json.dumps(res))

if __name__ == '__main__':
    argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else sys.argv[1:]
    os.makedirs(OUT, exist_ok=True)
    if '--compose' in argv or bpy is None:
        compose()
    else:
        st = opt(argv, '--stage', 'build')
        {'build': stage_build, 'render': stage_render, 'export': stage_export}[st](argv)
