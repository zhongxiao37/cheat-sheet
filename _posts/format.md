---
title: "format"
date: "2022-12-09 15:31:35"
---

### Ruby

```ruby
"%02d:%02d" % exact_time
format("%02d", 7) #有点不像ruby代码耶

a = 'hello'
"#{a} world"
```

### Python

```python
'{:02d}:{:02d}'.format(7, 8)

'{:<30}'.format('left aligned')
# 'left aligned                  '
'{:>30}'.format('right aligned')
# '                 right aligned'
'{:^30}'.format('centered')
# '           centered           '
'{:*^30}'.format('centered')  # use '*' as a fill char
# '***********centered***********'

"int: {0:d};  hex: {0:x};  oct: {0:o};  bin: {0:b}".format(42)
# 'int: 42;  hex: 2a;  oct: 52;  bin: 101010'
# with 0x, 0o, or 0b as prefix:
"int: {0:d};  hex: {0:#x};  oct: {0:#o};  bin: {0:#b}".format(42)
# 'int: 42;  hex: 0x2a;  oct: 0o52;  bin: 0b101010'

'{:,}'.format(1234567890)
# '1,234,567,890'

points = 19
>>> total = 22
>>> 'Correct answers: {:.2%}'.format(points/total)
# 'Correct answers: 86.36%'
```

### Javascript

```javascript
const a = "hello";
const b = `${a} world`;
console.log(b);
```

### Go

```go

```

### Rust

```rust

```
