---
title: "select"
date: "2022-12-09 15:18:02"
---

### Ruby

```ruby
(-5..5).select { |x| x < 0 }
```

### Python

```python
less_than_zero = list(filter(lambda x: x < 0, range(-5, 5)))
[e for e in range(-5, 5) if e < 0]
```

### Javascript

```javascript
Array.from({ length: 5 }, (v, i) => i).filter((x) => x % 2 === 0);
// [0, 2, 4]
```

### Go

```go

```

### Rust

```rust

```
