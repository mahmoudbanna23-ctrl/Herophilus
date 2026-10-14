cd "D:/scratch 2026/her-c2/face8"
python lipsim8.py 2>&1 | grep -v "^FAIL" ; python lipsim8.py 2>&1 | grep FAIL | sed 's/ {.*//' | sort > cur_fails.txt; echo NEW FAILS:; comm -13 base_fails.txt cur_fails.txt; echo FIXED:; comm -23 base_fails.txt cur_fails.txt
