import sys
p = sys.argv[1]
s = open(p, newline='').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, a
    s = s.replace(a, b)
rep("AU17_TOP, AU17_BOT = 0.014, 0.018   # face rig 7: lower lip rises MORE than the upper (chin raiser), lens closes 4 mm - no grin",
    "AU17_TOP, AU17_BOT = 0.021, 0.025   # face rig 8: arch back up (face 6 was 19 / 5, face 7 14 / 18); lower lip rises 4 mm MORE than the upper\nAU17_CLOSE = 0.55   # face rig 8: AU17 alone also closes the lens (share of AU24 through the driver), less as AU15 closes it already")
rep("    src['jaw_open'] = step('jaw',",
    "    src['AU24_lip_presser'] = step('au24x', cl('AU24_lip_presser + %.3f * AU17_chin_raiser * (1.0 - min(AU15_lip_corner_depressor_L, AU15_lip_corner_depressor_R))' % AU17_CLOSE))\n    src['jaw_open'] = step('jaw',")
rep("**both('AU4_brow_lowerer', 0.8),\n                                **both('AU15_lip_corner_depressor', 1.0), 'AU17_chin_raiser': 0.6,\n                                'AU23_lip_tightener': 0.25}),",
    "**both('AU4_brow_lowerer', 0.8),\n                                **both('AU15_lip_corner_depressor', 1.0), 'AU17_chin_raiser': 0.8}),   # face rig 8: cross, not pressed (no AU23)")
rep("**both('AU15_lip_corner_depressor', 1.0), 'AU17_chin_raiser': 1.0},\n                look=(0, -12)),",
    "**both('AU15_lip_corner_depressor', 1.0), 'AU17_chin_raiser': 1.0, 'AU25_lips_part': 0.3},   # face rig 8: soft, lips a little parted\n                look=(0, -12)),")
open(p, 'w', newline='').write(s)
