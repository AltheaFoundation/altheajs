 Address converter

A simple converter between `ETH` (0x...) addresses and `Althea-L1` (althea1...) addresses.

## Installation

```sh
npm install @althea-net/address-converter
```

## Usage

### Converter

```ts
import { ethToEthermint, ethermintToEth } from '@althea-net/address-converter'

let address = ethToAlthea('0xACA5D5F3DC8DDFE820890314350BC507F64A7C6E')
// "althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm"

let address = ethermintToEth('althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm')
// "0xACA5D5F3DC8DDFE820890314350BC507F64A7C6E"
```

### Decoders

```ts
import { ETH, ALTHEA } from '@althea-net/address-converter'
let hex = ETH.decoder('0xACA5D5F3DC8DDFE820890314350BC507F64A7C6E')
// hex.toString('hex') === "ACA5D5F3DC8DDFE820890314350BC507F64A7C6E"

hex = ALTHEA.decoder('althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm')
// hex.toString('hex') === "ACA5D5F3DC8DDFE820890314350BC507F64A7C6E"
```

### Encoders

```ts
import { ETH, ALTHEA } from '@althea-net/address-converter'
let address = ETH.encoder(
  Buffer.from('ACA5D5F3DC8DDFE820890314350BC507F64A7C6E', 'hex'),
)
// address === "ACA5D5F3DC8DDFE820890314350BC507F64A7C6E"

address = ALTHEA.encoder(
  Buffer.from('ACA5D5F3DC8DDFE820890314350BC507F64A7C6E', 'hex'),
)
// address === "althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm"
```

### Althea-L1 support

```ts
import { ethToAlthea, altheaToEth } from '@althea-net/address-converter'

let address = ethToAlthea('0xACA5D5F3DC8DDFE820890314350BC507F64A7C6E')
// "althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm"

let address = altheaToEth('althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm')
// "ACA5D5F3DC8DDFE820890314350BC507F64A7C6E"
```

To work with Gravity Bridge:

```ts
import { gravityToAlthea, altheaToGravity } from '@althea-net/address-converter'

let address = gravityToAlthea('gravity14jjatu7u3h07sgyfqv2r2z79qlmy5lrw6v2xmk')
// "althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm"

let address = altheaToGravity('althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm')
// "gravity14jjatu7u3h07sgyfqv2r2z79qlmy5lrw6v2xmk"
```

### Canto support

```ts
import { ethToCanto, cantoToEth } from '@althea-net/address-converter'

let address = ethToCanto('0xACA5D5F3DC8DDFE820890314350BC507F64A7C6E')
// "canto14jjatu7u3h07sgyfqv2r2z79qlmy5lrw<checksum>"

let address = cantoToEth('canto14jjatu7u3h07sgyfqv2r2z79qlmy5lrw<checksum>') // replace <checksum> with the actual last 6 digits of the bech32 address
// "ACA5D5F3DC8DDFE820890314350BC507F64A7C6E"
```
## Reference

- [ENSDOMAINS-AddressEnconder](https://github.com/ensdomains/address-encoder)
