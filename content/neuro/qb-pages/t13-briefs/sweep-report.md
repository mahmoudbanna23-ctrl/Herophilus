# Mechanical duplicate-detection sweep

Staged: t13 (20 entries, n 296-315) + t14 (23 entries, n 316-338) = 43. Live corpus: 450 entries.

## 1. Exact stem match
- staged-vs-staged: none
- staged-vs-live: none

## 2. Option-set match
- staged-vs-staged: staged n=337 <-> staged n=338 sc=1.000; staged n=338 <-> staged n=337 sc=1.000
- staged-vs-live: none

## 3. Token-Jaccard on normalized stems (>= 0.5, ranked desc)
- staged-vs-staged: staged n=302 <-> staged n=304 sc=0.500; staged n=304 <-> staged n=302 sc=0.500
- staged-vs-live: staged n=321 <-> npqb-nr-281 sc=0.600; staged n=315 <-> npqb-ps-2 sc=0.545; staged n=321 <-> npqb-nr-132 sc=0.545; staged n=316 <-> npqb-nr-248 sc=0.533; staged n=315 <-> npqb-nr-10 sc=0.500; staged n=315 <-> npqb-ps-15 sc=0.500; staged n=315 <-> npqb-ps-60 sc=0.500; staged n=315 <-> npqb-nr-264 sc=0.500; staged n=321 <-> npqb-nr-36 sc=0.500; staged n=321 <-> npqb-nr-75 sc=0.500; staged n=321 <-> npqb-nr-233 sc=0.500

## 4. Contiguity & n-uniqueness
- t13 n 296-315 contiguous (20): true
- t14 n 316-338 contiguous (23): true
- duplicate n across files: none
