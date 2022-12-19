---
title: "string"
date: "2022-12-19 06:26:17"
---

在 Rust 里面，字符串`String`是放在堆里面的，而字符串字面量是要编译进可执行文件的，会存放在栈里面的。

### Rust

字符串字面量是切片，但是切片的时候要小心，因为不一定刚好切在字符的后面。

```rust
let s: &str = "Hello, world!"; // 字符串切片
let s = String::from("hello,world!"); // 字符串
```

字符串无法索引，原因是`s1`实际上是字节数组，对于双字节的字符，拆开索引没有任何意义。

```rust
let s1 = String::from("hello");
let h = s1[0]; // 会报错
```

### Rust

Push

```rust
let mut s = String::from("Hello ");
s.push('r');
println!("追加字符 push() -> {}", s);

s.push_str("ust!");
println!("追加字符串 push_str() -> {}", s);
```

Insert

```rust
fn main() {
    let mut s = String::from("Hello rust!");
    s.insert(5, ',');
    println!("插入字符 insert() -> {}", s);
    s.insert_str(6, " I like");
    println!("插入字符串 insert_str() -> {}", s);
}
```

Replace

```rust
fn main() {
    let string_replace = String::from("I like rust. Learning rust is my favorite!");
    let new_string_replace = string_replace.replace("rust", "RUST");
    dbg!(new_string_replace);
}
```

### Rust

Pop

```rust
fn main() {
    let mut string_pop = String::from("rust pop 中文!");
    let p1 = string_pop.pop();
    let p2 = string_pop.pop();
    dbg!(p1);
    dbg!(p2);
    dbg!(string_pop);
}

```

Remove

```rust
fn main() {
    let mut string_remove = String::from("测试remove方法");
    println!(
        "string_remove 占 {} 个字节",
        std::mem::size_of_val(string_remove.as_str())
    );
    // 删除第一个汉字
    string_remove.remove(0);
    // 下面代码会发生错误
    // string_remove.remove(1);
    // 直接删除第二个汉字
    // string_remove.remove(3);
    dbg!(string_remove);
}

```

Truncate

```rust
fn main() {
    let mut string_truncate = String::from("测试truncate");
    string_truncate.truncate(3);
    dbg!(string_truncate); // 测
}

```

Clear

```rust
fn main() {
    let mut string_clear = String::from("string clear");
    string_clear.clear();
    dbg!(string_clear);
}

```

### Rust

Concatenate

`+` 和 `+=` 之后必须是 `&str` 类型。原因是背后实际调用的是`add`方法：`fn add(self, s: &str) -> String`。

```rust
fn main() {
    let string_append = String::from("hello ");
    let string_rust = String::from("rust");
    // &string_rust会自动解引用为&str
    let result = string_append + &string_rust;
    let mut result = result + "!";
    result += "!!!";

    println!("连接字符串 + -> {}", result);
}


```

### Rust

Format

```rust
fn main() {
    let s1 = "hello";
    let s2 = String::from("rust");
    let s = format!("{} {}!", s1, s2);
    println!("{}", s);
}


```

```rust
#![allow(unused)]
fn main() {
    println!("Hello");                 // => "Hello"
    println!("Hello, {}!", "world");   // => "Hello, world!"
    println!("The number is {}", 1);   // => "The number is 1"
    println!("{:?}", (3, 4));          // => "(3, 4)"
    println!("{value}", value=4);      // => "4"
    println!("{} {}", 1, 2);           // => "1 2"
    println!("{:04}", 42);             // => "0042" with leading zeros
}
```

### Rust

转义

```rust
fn main() {
    println!("{}", "hello \\x52\\x75\\x73\\x74");
    let raw_str = r"Escapes don't work here: \x3F \u{211D}";
    println!("{}", raw_str);

    // 如果字符串包含双引号，可以在开头和结尾加 #
    let quotes = r#"And then I said: "There is no escape!""#;
    println!("{}", quotes);

    // 如果还是有歧义，可以继续增加，没有限制
    let longer_delimiter = r###"A string with "# in it. And even "##!"###;
    println!("{}", longer_delimiter);
}

```
