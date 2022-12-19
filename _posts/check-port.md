---
title: "check-port"
date: "2022-12-19 02:29:36"
---

### Bash

```bash
lsof -i -n -P | grep 3080
nc -zvt smtp.gmail.com 654
telnet smtp.gmail.com 654
```

### Ruby

```ruby
require 'socket'

port_is_open = Socket.tcp(host, port, connect_timeout: 5) { true } rescue false

# non-blocking
require 'socket'
TIMEOUT = 2
def scan_port(port)
  socket      = Socket.new(:INET, :STREAM)
  remote_addr = Socket.sockaddr_in(port, 'www.example.com')
  begin
    socket.connect_nonblock(remote_addr)
  rescue Errno::EINPROGRESS
  end
  _, sockets, _ = IO.select(nil, [socket], nil, TIMEOUT)
  if sockets
    p "Port #{port} is open"
  else
    # Port is closed
  end
end

```

### Python

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
result = sock.connect_ex(('127.0.0.1',80))
if result == 0:
   print "Port is open"
else:
   print "Port is not open"
sock.close()
```

### Javascript

```javascript

```

### Go

```go

```

### Rust

```rust

```
