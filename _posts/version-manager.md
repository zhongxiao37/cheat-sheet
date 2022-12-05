---
title: "Version Manager"
date: "2022-12-01 10:34:16"
---

我们可以通过 version manager 方便的切换多个版本。有时候你想要尝试新的功能，但又不想破坏当前项目。或者每个项目的版本又不一致，需要来回切换。

### Ruby

Ruby 的版本管理有`rvm`和`rbenv`。现在主要的是用`rbenv`。

```bash
brew install rbenv
rbenv versions
rbenv use 2.7.2
```

```ruby
def say
  puts 'yes'
end
```

### Python

```bash
brew install pyenv
pyenv versions
pyenv global
pyenv local
```

### Javascript

```bash
yarn global add n
n
```

```javascript
import js from "js";
```

### Go

```bash

```

### Rust

```bash

```
