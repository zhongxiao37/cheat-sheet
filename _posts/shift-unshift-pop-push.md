---
title: "shift-unshift-pop-push"
date: "2022-12-08 14:43:11"
---

### Ruby

```ruby
arr = []        # => []
arr.push(1)     # => [1]
arr.unshift(2)  # => [2, 1]
arr.shift       # => 2
arr.pop         # => 1
```

### Python

```python
arr = []
arr.append(1)
arr.insert(0, 2) # => [2, 1]
arr.pop(0)      # => 2
arr.pop()       # => 1
```

### Javascript

```javascript
var arr1 = [0, 1, 2];
arr1.push(3);
var arr2 = [4, 5, 6];
arr1.push(...arr2);
arr1.pop();
arr1.shift();
```

### Go

```go
// go 没有pop方法，只能够自己写

func pop(alist *[]int) int {
   f:=len(*alist)
   rv:=(*alist)[f-1]
   *alist=append((*alist)[:f-1])
   return rv
}

func main() {
  n:=[]int{1,2,3,4,5}
  fmt.Println(n)
  last:=pop(&n)
  fmt.Println("last is",last)
  fmt.Printf("list of n is now %v\n", n)
}
```

### Rust

```rust

```
