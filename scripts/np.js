#!/usr/bin/env node

"use strict";

var path = require("path"),
  fs = require("fs"),
  minimist = require("minimist");

var argv = minimist(process.argv.slice(2), {
  string: ["title", "t"],
  unknown: function (a) {
    return a[0] == "-"
      ? (console.error("Unknown option(s): " + a), printUsageAndExit(true))
      : true;
  },
});

const filePath = argv.t + ".md";
const datetime = new Date().toISOString().slice(0, 19).replace("T", " ");

const content = `---
title: "${argv.t}"
date: "${datetime}"
---

### Ruby

\`\`\`ruby

\`\`\`

### Python

\`\`\`python

\`\`\`

### Javascript

\`\`\`javascript

\`\`\`

### Go

\`\`\`go

\`\`\`

### Rust

\`\`\`rust

\`\`\`

`;

fs.writeFileSync(`./_posts/${filePath}`, content);
