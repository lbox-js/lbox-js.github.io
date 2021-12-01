### install

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

### lbox vs libauth syntax

<CodeSwitcher :languages="{lbox:'Lbox' , libauth:'libauth'}" name="libauth-bitbox">
  <template v-slot:lbox>

```js
lbox.Address.toLegacyAddress(
  "bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl"
);
```

  </template>
  <template v-slot:libauth>

```js
let decoded;
let type;
if (cashAddress.split(":").length == 2) {
  // decode Address with prefix
  decoded = libauth.decodeCashAddress(cashAddress);
  if (typeof decoded != "object") throw new Error(decoded);
  type = libauth.CashAddressType[decoded.type].toLocaleLowerCase();
} else {
  decoded = libauth.decodeCashAddressFormatWithoutPrefix(cashAddress);
  if (typeof decoded != "object") throw new Error(decoded);
  type = libauth.CashAddressType[decoded.version].toLocaleLowerCase();
}

// check if Address from test net
type = decoded.prefix == "bitcoincash" ? type : type + "-testnet";

libauth.encodeBase58Address(this.instantiateSha256, type, decoded.hash);
```

  </template>
</CodeSwitcher>

## support

> BCH :
>
> bitcoincash:qqqxpdhdu8umgzr9adzfvypdu65xqtejtq9nssqyww

<img src="./.vuepress/public/qrcode.png" />