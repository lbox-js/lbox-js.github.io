---
title: init
---

instantiate WebAssembly ECDSA & Schnorr & WebAssembly Hashing Functions

if any function need init lbox we will write this before function

```js
const LBOX = require("lbox");
const lbox = new LBOX();

const lbox = require("lbox");

async () => {
  await lbox.init();
  // generate mainnet external change address
  let xpub =
    "xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA";
  console.log(lbox.Address.fromXPub(xpub, "0/0"));

  // bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh
};
```