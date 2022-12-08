---
title: "customize-sort"
date: "2022-12-08 14:41:17"
---

### Ruby

```ruby
[['a', 7], ['b', 2]].sort_by { |k, v| v }  => [["b", 2], ["a", 7]]

# Ruby的类里面如果include了Enumerable并定义了<=>方法，那他们的实例就是可以比较的
# 具体的比较方法通过定义的<=>来实现的
# 比如下面的就是一个简单的二叉树节点的比较

class Bst

  include Enumerable

  attr_reader :left, :right, :data

  def initialize(new_data)
    @data = new_data
  end

  def insert(new_data)
    if new_data <= @data
      @left ? @left.insert(new_data) : @left = Bst.new(new_data)
    else
      @right ? @right.insert(new_data) : @right = Bst.new(new_data)
    end
    self
  end

  def each(&block)
    return to_enum unless block_given?

    @left&.each(&block)
    yield @data
    @right&.each(&block)

    self
  end

  def <=>(other)
    @data <=> other.data
  end

  def predecessor(key)
    self.each_cons(2).select { |e| e.last == key }.map(&:first)[0]
  end

  def successor(key)
    self.each_cons(2).select { |e| e.first == key }.map(&:last)[0]
  end

end
```

### Python

```python
>>> a = [['a', 7], ['b', 2]]
>>> a.sort(key=lambda e: (e[1], e[0]), reverse=True)
>>> a
[['b', 2], ['a', 7]]

# Python 好像不屑于Ruby的spaceship operator
# 如果需要排序，用自定义排序就可以搞定了

```

### Javascript

```javascript
// 如果记得Ruby中的宇宙飞船符的话，下面的通过函数自定义排序其实也是类似的
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```

### Go

```go
// Need to implement sort.Interface - Len, Less, and Swap on type byLength

type byLength []string

func (s byLength) Len() int {
    return len(s)
}
func (s byLength) Swap(i, j int) {
    s[i], s[j] = s[j], s[i]
}
func (s byLength) Less(i, j int) bool {
    return len(s[i]) < len(s[j])
}

func main() {
    fruits := []string{"peach", "banana", "kiwi"}
    sort.Sort(byLength(fruits))
    fmt.Println(fruits)
}
```

### Rust

```rust

```
