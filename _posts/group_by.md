---
title: "group_by"
date: "2022-12-09 15:21:07"
---

### Ruby

```ruby
[1,2,3,4,5,6,7,1,3].group_by {|e| e}.map { |k, v| [k, v.size]}.to_h
```

### Python

```python
import collections
dict(collections.Counter([1,2,3,4,5,6,7,1,3]))
```

### Javascript

```javascript
[1, 2, 3, 4, 5, 6, 7, 1, 3].reduce((acc, x) => {
  if (!acc[x]) acc[x] = 0;
  acc[x] += 1;
  return acc;
}, {});
```

### Go

```go

```

### Rust

```rust

```
