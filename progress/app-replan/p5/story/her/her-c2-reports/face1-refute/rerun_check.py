import sys, runpy
H = 'D:/claude os/Medical school/Herophilus/progress/app-replan/p5/story/her'
sys.path.insert(0, H)
import face_rig as FR
FR.OUT = 'D:/scratch 2026/her-c2/face1-refute'   # checks_face.json lands here, not in the builder's folder
runpy.run_path(H + '/check_face.py', run_name='__main__')
