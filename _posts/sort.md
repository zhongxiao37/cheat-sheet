---
title: "sort"
date: "2022-12-08 14:39:51"
---

### Ruby

```ruby
irb(main):001:0> a = [3,2,1]
=> [3, 2, 1]
irb(main):002:0> a.sort
=> [1, 2, 3]
irb(main):003:0> a
=> [3, 2, 1]
```

### Python

```python
a_list = [3,2,1]
a_list.sort() # None
a_list # [1,2,3]
```

如果你不想影响`a_list`，则可以用`sorted`方法。

```python
a_list = [3,2,1]
sorted(a_list)
 # [1,2,3]
```

### Javascript

```javascript
const arr = ["peach", "straw", "apple", "spork"];
arr.sort();

const arr = [5, 2, 3, 7, 9, 1];
arr.sort((a, b) => b - a);
```

### Go

```go
import "sort"

strs := []string{"c", "a", "b"}
sort.Strings(strs)
fmt.Println("Strings:", strs)

ints := []int{7, 2, 4}
sort.Ints(ints)
fmt.Println("Ints:   ", ints)
```

### Rust

```rust

```
