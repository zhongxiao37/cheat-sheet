---
title: "each"
date: "2022-12-08 14:34:31"
---

### Ruby

```ruby
(0..10).each do |i|
    puts i
end

{a: 1, b: 2}.each do |k, v|
    puts [k, v]
end
```

### Python

```python
for i in [1,2,3]:
  print(i)

for i in range(10):
    print(i)

for i in count(start=0, step=1):
    print(i)

d = {'x': 1, 'y': 2, 'z': 3}
for k, v in d.items():
    print(k, v)

while True:
    quotient = num // output_base
    remainder = num % output_base

    output.append(remainder)
    num = quotient

    if quotient == 0:
        break
```

### Python

还可以通过推导式把列表转换成为字典

```python
items = [
  ('apple', 10),
  ('orange', 5),
  ('banana', 7)
]

{item: price for item, price in items}
```

，或者集合。

```python
from unicodedata import name
{ chr(i) for i in range(32, 256) if 'SIGN' in name(chr(i), '')}

```

### Javascript

```javascript
let arr = ["a", "b", "c"];
for (let [k, v] of arr.entries()) {
  console.log(k);
  console.log(v);
}

let dict = { a: 1, b: 2, c: 3 };
for (let [k, v] of Object.entries(dict)) {
  console.log(k);
  console.log(v);
}
```

### Go

```go
// Only for loop in Go

sum := 1
for sum < 100 {
  sum += 1
}
fmt.Println(sum)

// Infinite loop
// while true in Ruby

for {
  // do something
}

// each
kvs := map[string]string{"name": "Amy", "lastName": "Amy"}
for k, v := range kvs {
  fmt.Printf("%s -> %s\n", k, v)
}

// 如果是数组，第一个就是index
arr := []string{"a", "b", "c", "d", "e"}
for i, v := range arr {
  fmt.Println(i, v)
}
```

### Rust

```rust

```
