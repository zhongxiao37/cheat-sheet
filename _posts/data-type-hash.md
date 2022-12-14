---
title: "Data Type - Hash"
date: "2022-12-05 09:41:58"
---

### Ruby

Hash

```ruby
{a: 1, b: 2, c: 3}
```

### Python

Dictionary

```python
{'a': 1, 'b': 2, 'c': 3}
```

无论是字典`dict`还是集合`set`，背后都是散列表数据结构，结果就是占用内存很大，能够快速判断 key 是否存在。

### Javascript

```javascript
// Object
{'a': 1, 'b': 2, 'c': 3}

// ES6 Map
const mapper = new Map([['1', 'a'], ['2', 'b']]);
```

### Go

```go
// Map
ages := make(map[string]int) // 不能够初始化为nil，否则不能够赋值了
ages := map[string]int{
    "alice":   31,
    "charlie": 34,
}
```

### Rust

```rust

```
