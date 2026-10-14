p = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her/rig_her.py'
s = open(p, encoding='utf-8', newline='').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, a[:60]
    s = s.replace(a, b)
rep("        bone('fingers_' + S, A['knuckle'], A['tip'], 'hand_' + S, True, roll=A['Np'])\n",
    "        bone('fingers_' + S, A['knuckle'], A['tip'], 'hand_' + S, True, roll=A['Np'])\n"
    "        if HALF:   # rig 5m: wrist helper, same rest frame as the hand, turns HSI of the hand's swing (Copy Rotation below)\n"
    "            bone('wrist_' + S, A['wrist'], A['wrist'].lerp(A['knuckle'], 0.35), 'forearm_tw_' + S, False, roll=A['Np'])\n")
rep("        LIM['fingers_' + S] = (-30, 90, 0, 0, -20, 20)\n",
    "        LIM['fingers_' + S] = (-30, 90, 0, 0, -20, 20)\n"
    "        LIM['wrist_' + S] = (0, 0, 0, 0, 0, 0)      # rig 5m: never keyed; its pose is the Copy Rotation of the hand\n")
rep("            setattr(c, 'min_' + ax, l[2 * i] * D2R); setattr(c, 'max_' + ax, l[2 * i + 1] * D2R)\n",
    "            setattr(c, 'min_' + ax, l[2 * i] * D2R); setattr(c, 'max_' + ax, l[2 * i + 1] * D2R)\n"
    "        if pb.name.startswith('wrist_'):\n"
    "            c = pb.constraints.new('COPY_ROTATION'); c.target = arm; c.subtarget = 'hand_' + pb.name[-1]\n"
    "            c.owner_space = c.target_space = 'LOCAL'; c.influence = HSI\n")
rep("        if CUFFCAP and SEAT:\n",
    "        # rig 5m: HALF-SWING wrist. Wherever a glove vert splits between forearm_tw* and hand, the shared part min(fore, hand)\n"
    "        # of each moves onto wrist_S, a rigid bone that turns HSI (0.5) of the hand's swing: at small angles this equals the\n"
    "        # old blend, at deep flexion / extension it no longer collapses (linear-blend volume loss), so the cuff, the palm\n"
    "        # under its mouth and the arm end inside it keep their shape and stay nested. Rest mesh untouched.\n"
    "        if HALF:\n"
    "            for i_, w_ in enumerate(W):\n"
    "                fa_ = sum(v for k, v in w_.items() if k.startswith('forearm_tw')); h_ = w_.get('hand_' + S, 0.0)\n"
    "                m_ = min(fa_, h_) * HSW\n"
    "                if m_ > 1e-6:\n"
    "                    nw = {k: (v * (1 - m_ / fa_) if k.startswith('forearm_tw') else v) for k, v in w_.items()}\n"
    "                    nw['hand_' + S] = h_ - m_; nw['wrist_' + S] = 2 * m_; W[i_] = nw\n"
    "        if CUFFCAP and SEAT:\n")
rep("    SEAT = '--noseat' not in argv      # rig 5l: cuff hand-side mouth seated on the palm (weights), see the build step\n",
    "    SEAT = '--noseat' not in argv      # rig 5l: cuff hand-side mouth seated on the palm (weights), see the build step\n")
rep("argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []\n",
    "argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []\n"
    "HALF = '--nohalf' not in argv          # rig 5m: half-swing wrist helper bone (see the skinning step)\n")
rep("export_animations=True, export_skins=True, export_morph=True)",
    "export_animations=True, export_skins=True, export_morph=True,\n"
    "                              export_force_sampling=True)   # rig 5m: sampled, so wrist_S carries its Copy Rotation")
s = s.replace("HALF = '--nohalf' not in argv          # rig 5m: half-swing wrist helper bone (see the skinning step)\n",
    "HALF = '--nohalf' not in argv          # rig 5m: half-swing wrist helper bone (see the skinning step)\n"
    "HSI, HSW = 0.5, 1.0                    # rig 5m: helper share of the hand swing / share of the split weight it takes\n", 1)
open(p, 'w', encoding='utf-8', newline='').write(s)
print('ok')
