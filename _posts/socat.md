---
title: "用socat进行端口转发"
date: "2023-02-15 05:03:37"
---

遇到一个问题，想在本地访问在 K8S 集群里面的内网地址，因为公网没法直接访问，需要把内网地址转发出来。解决方法是，在集群的 pod 内部用`socat`进行端口转发，再用`k port-forward`就可以将两者连起来。

### Bash

```bash
socat TCP-LISTEN:3309,fork,reuseaddr  TCP:mysql:3306
```
