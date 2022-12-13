---
title: "numpy"
date: "2022-12-13 15:25:14"
---

### Python

```python
import numpy
a = numpy.arange(12)
# array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])

a.shape
# (12,)

a.shape = 3,4
# array([[ 0,  1,  2,  3],
#        [ 4,  5,  6,  7],
#        [ 8,  9, 10, 11]])

a[2]
# array([ 8,  9, 10, 11])

a[2, 1]
# 9

a[:, 1]
# array([1, 5, 9])

a.transpose()

# array([[ 0,  4,  8],
#        [ 1,  5,  9],
#        [ 2,  6, 10],
#        [ 3,  7, 11]])
```
