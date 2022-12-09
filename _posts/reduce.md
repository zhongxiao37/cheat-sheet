---
title: "reduce"
date: "2022-12-09 15:18:44"
---

### Ruby

```ruby
[1,2,3].reduce(0) { |sum, x| sum + x }
[1,2,3].reduce(&:+)
```

### Python

```python
from functools import reduce
reduce(lambda sum, x: sum + x, [1,2,3], 0)
```

### Javascript

```javascript
const array1 = [1, 2, 3, 4];
array1.reduce((sum, x) => sum + x);
```

### Go

```go

```

### Rust

```rust

```
