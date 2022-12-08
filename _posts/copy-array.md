---
title: "Copy Array"
date: "2022-12-07 15:51:40"
---

### Ruby

```ruby
2.6.6 :027 > a = [1,2,3]
 => [1, 2, 3]
2.6.6 :028 > b = a
 => [1, 2, 3]
irb(main):011:0> a.object_id
=> 70076125215020
irb(main):012:0> b.object_id
=> 70076125215020
```

### Python

```python
>>> a = [1,2,3]
>>> b = a
>>> id(b)
4315631168
>>> id(a)
4315631168
>>> a[2] = 4
>>> a
[1, 2, 4]
>>> b
[1, 2, 4]

# 一般不这样复制数组，而是通过一下方法
>>> a = [1,2,3]
>>> b = list(a)
>>> id(a)
4408133312
>>> id(b)
4408170944
```

### Javascript

```javascript

```

### Go

```go
a := []int{1,2,3}
b := a

fmt.Printf("%v\n", a)  // [1,2,3]
fmt.Printf("%v\n", b)  // [1,2,3]

a = append(a, 4)

fmt.Printf("%v\n", a)  // [1,2,3,4]
fmt.Printf("%v\n", b)  // [1,2,3]

// 这里需要注意的是，a和b共享了同一片内存空间，即[1,2,3]。
// 任何这里的修改都会互相影响。
```

### Rust

```rust

```
