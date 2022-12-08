---
title: "method-function"
date: "2022-12-08 14:36:03"
---

### Ruby

```ruby
# 在Ruby里面，函数和方法一般是同一个东西。
# 在英语里面，Function是独立的，可以调用的。Method是在类里面定义的函数，需要通过实例才可以调用它。

# 函数不是第一公民
# 这就意味着你不能够把函数赋值给变量，当作参数传入或者返回。
# 虽然可以通过symbol，或者lambda的方式来实现，但是总觉得是剑走偏锋了，一般都不这么用

```

### Python

```python
# 函数是第一公民
# 在Python里面最典型的例子就是装饰器。装饰器其实就是把被修饰的函数B当做参数传入装饰器函数A，然后在返回一个新的函数C。
# 这样在执行函数B的时候，实际上是执行函数C，所以你可以在C里面定义额外的操作，比如给方法计时
# 你还可以嵌套多次装饰器，实现参数化的装饰器
```

### Javascript

```javascript
// 一般没有提第一公民这事，但是的确存在
// 最显然的例子就是函数定义有两种方式，一种是函数声明，另外一种就是函数表达式
```

### Go

```go
// 函数是第一公民
// 这就意味着函数可以当做值一样地处理
// 可以当作参数传入其他函数，也可以赋值给变量
// 甚至可以把一个实例的方法绑定给某个变量，调用这个变量其实就是调用这个实例的方法


p := Point{1, 2}
q := Point{4, 6}

distanceFromP := p.Distance        // method value
fmt.Println(distanceFromP(q))      // "5"

// 如果你是绑定struct里面的方法，那就需要第一个参数需要指定receiver
// 就像Python里面定义方法的时候，第一个参数是`self`或者`cls`

distance := Point.Distance   // method expression
fmt.Println(distance(p, q))  // "5"

```

### Rust

```rust

```
