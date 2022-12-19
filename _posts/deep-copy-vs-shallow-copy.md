---
title: "deep-copy-vs-shallow-copy"
date: "2022-12-19 08:52:25"
---

### Ruby

```ruby

```

### Python

```python

```

### Javascript

```javascript

```

### Go

```go

```

### Rust

浅拷贝只发生在栈上，因此性能很高。
任何基本类型的组合可以 Copy ，不需要分配内存或某种形式资源的类型是可以 Copy 的。

```markdown
所有整数类型，比如 u32。
布尔类型，bool，它的值是 true 和 false。
所有浮点数类型，比如 f64。
字符类型，char。
元组，当且仅当其包含的类型也都是 Copy 的时候。比如，(i32, i32) 是 Copy 的，但 (i32, String) 就不是。
不可变引用 &T ，例如转移所有权中的最后一个例子，但是注意: 可变引用 &mut T 是不可以 Copy 的
```

### Rust

深拷贝
Rust 永远也不会自动创建数据的 “深拷贝”。除非显式的用`clone()`方法。

```rust
fn main() {
  let s1 = String::from("hello");
  let s2 = s1.clone();

  println!("s1 = {}, s2 = {}", s1, s2);
}

```
