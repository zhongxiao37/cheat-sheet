---
title: "Array"
date: "2022-12-07 14:56:50"
---

### Ruby

```ruby
arr = [1,2,3]
arr[1..]  # [2, 3]
arr[-1]   # [3]
arr[1..2] # [2, 3]
# 但是不支持 arr[::2]这样的操作

arr + [4, 5, 6] # [1,2,3,4,5,6]
```

### Python

```python
arr = [1,2,3]
arr[1:]  # [2, 3]
arr[:2]  # [1, 2]
arr[::2] # [1, 3]
arr + [4, 5, 6] # [1,2,3,4,5,6]

for i in arr:
  print(i)
```

Python 里面还有一种数据类型叫元组。元组是不可变的，对应的就是列表是可变的。

### Python

此外，如果列表的元素都是数字，可以用`array.array`更为高效。

```python
from array import array
from random import random
floats = array('d', (random() for i in range(10**7)))
fp = open('floats.bin', 'wb')
floats.tofile(fp)
```

![array.array types](../_images/array_array_types.png)

### Javascript

```javascript
var arr = [1,2,3]
arr.slice(0, 2) // [1, 2]

[...arr, ...arr] // [1,2,3,1,2,3]
```

### Go

```go
// Go语言里面很少使用数组，因为是固定长度的。
q := [...]int{1, 2, 3}
fmt.Printf("%T\n", q) // "[3]int"
fmt.Printf("%v\n", q) // "[1,2,3]"
// 相对应的是Slice，动态序列，和Python一样，支持各种切片操作
data := []string{"one", "", "three"}

fmt.Printf("%q\n", data)           // `["one" "three" "three"]`
fmt.Printf("%q\n", data[:2])      // `["one" ""]`

numbers := []int{1,2}
numbers = append(numbers, 3, 4)  // [1,2,3,4]
fmt.Printf("%v\n", numbers) // "[1,2,3,4]"
```

### Rust

```rust
// 切片
let s = String::from("hello world");

// 引用了s的一部分
let hello = &s[0..5];
let world = &s[6..11];

// 包括最后一个字符
let len = s.len();

let slice = &s[4..len];
let slice = &s[4..];
```

![引用字符串的一部分](../_images/string_slice.jpeg)
