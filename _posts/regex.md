---
title: "regex"
date: "2022-12-08 14:44:07"
---

### Ruby

```ruby
'13243432432'.scan(/\d/) => ["1", "3", "2", "4", "3", "4", "3", "2", "4", "3", "2"]

m = /\A(\d{3})(\d)/.match('13243432432') => #<MatchData "1324" 1:"132" 2:"4">
m[0] # "1324"
m[1] # "132"
```

### Python

```python
import re
re.findall(r'\d', '1234232432')
# ['1', '2', '3', '4', '2', '3', '2', '4', '3', '2']

import re
s = 'a1b2c3'
s = 'a1b#2c3'
m = re.match(r'([^#]*)#(.*)', s)
m.group() # => 'a1b#2c3'
m.group(1) # => 'a1b'
m.group(2) # => '2c3'
```

### Javascript

```javascript
const regex = /[a-zA-Z]/g;
const matched_chars = "abcdefg".match(regex);
// ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```

### Go

```go

```

### Rust

```rust

```
