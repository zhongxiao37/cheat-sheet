---
title: "class-method"
date: "2022-12-08 14:37:50"
---

### Ruby

```ruby
# 如果理解透，其实每个类是Class的一个实例

class A
end
a = A.new # <A:0x00007fb508870018>
a.class # A
A.class # Class

# 所以，所谓的类方法，实际上其实也是实例（Class的一个实例A）方法

# 定义类方法，有好几种方法
class A
  def self.m1
    puts 'm1'
  end

  class << self
    def m2
      puts 'm2'
    end
  end

end

A.instance_eval do
  def m3
    puts 'm3'
  end
end

module M4
  def m4
    puts 'm4'
  end
end

# A.extend M4

# 或者像下面那样，记住隐式的self
class A
  extend M4
end

# 调用的时候直接A.m1就行了
# 记住，A其实也是一个实例
```

### Python

```python
from math import hypot

class Vector:
  def __init__(self, x = 0, y = 0):
    self.x = x
    self.y = y

  def __repr__(self):
    return 'Vector(%r, %r)' % (self.x, self.y)

  def __abs__(self):
    return hypot(self.x, self.y)

  def __bool__(self):
    return bool(abs(self))

  def __add__(self, other):
    return Vector(self.x + other.x, self.y + other.y)

  def __mul__(self, scalar):
    return Vector(self.x * scalar, self.y * scalar)
```

### Javascript

```javascript
class Robot {
  name: string;
  static availableNames: string[];

  constructor() {
    this.name = Robot.generateName();
  }

  public resetName(): void {
    this.name = Robot.generateName();
  }

  public static releaseNames(): void {
    Robot.availableNames = [];
  }

  public static generateName(): string {
    if (
      Robot.availableNames === undefined ||
      Robot.availableNames.length === 0
    ) {
      Robot.availableNames = [];
      let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      let numbers = "0123456789".split("");
      for (const a of letters) {
        for (const b of letters) {
          for (const x of numbers) {
            for (const y of numbers) {
              for (const z of numbers) {
                Robot.availableNames.push([a, b, x, y, z].join(""));
              }
            }
          }
        }
      }
      // shuffle the array list
      for (let i = Robot.availableNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Robot.availableNames[i], Robot.availableNames[j]] = [
          Robot.availableNames[j],
          Robot.availableNames[i],
        ];
      }
    }

    return Robot.availableNames.pop() as string;
  }
}
// https://googlechrome.github.io/samples/classes-es6/
```

### Go

```go

```

### Rust

```rust

```
