---
title: Installation
---


## Installation

Add `Lbox` to your existing Node.js project.

<CodeSwitcher :languages="{npm:'Npm',yarn:'Yarn'}" name="packge-manger">
  <template v-slot:npm>

```bash
npm i lbox
```

  </template>
  <template v-slot:yarn>

```bash
yarn add lbox
```

  </template>
</CodeSwitcher>

## Used with node.js

```js
const LBOX = require("lbox");
const lbox = new LBOX();
```

## How to use Lbox

- this library is not complete and we are developing it
- now we just support lbox.Address
- before using `lbox.Address.fromXPub` or `lbox.Address.fromXPriv` you need to make compelled asm code in libauth with `init()`
