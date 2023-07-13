# Address converter

A simple converter between `ETH` (0x...) addresses and `Ethermint` (althea1...) addresses.

## Installation

```sh
npm install @althea-net/address-converter
```

## Usage

### Converter

```ts
import { ethToEthermint, ethermintToEth } from '@althea-net/address-converter'

let address = ethToEthermint('0xACA5D5F3DC8DDFE820890314350BC507F64A7C6E')
// "althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm"

let address = ethermintToEth('althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm')
// "0xACA5D5F3DC8DDFE820890314350BC507F64A7C6E"
```

### Decoders

```ts
import { ETH, ETHERMINT } from '@althea-net/address-converter'
let hex = ETH.decoder('0xACA5D5F3DC8DDFE820890314350BC507F64A7C6E')
// hex.toString('hex') === "ACA5D5F3DC8DDFE820890314350BC507F64A7C6E"

hex = ETHERMINT.decoder('althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm')
// hex.toString('hex') === "ACA5D5F3DC8DDFE820890314350BC507F64A7C6E"
```

### Encoders

```ts
import { ETH, ETHERMINT } from '@althea-net/address-converter'
let address = ETH.encoder(
  Buffer.from('ACA5D5F3DC8DDFE820890314350BC507F64A7C6E', 'hex'),
)
// address === "ACA5D5F3DC8DDFE820890314350BC507F64A7C6E"

address = ETHERMINT.encoder(
  Buffer.from('ACA5D5F3DC8DDFE820890314350BC507F64A7C6E', 'hex'),
)
// address === "althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm"
```

### Althea-L1 support

```ts
import { ethToEvmos, evmosToEth } from '@althea-net/address-converter'

let address = ethToEvmos('0xACA5D5F3DC8DDFE820890314350BC507F64A7C6E')
// "althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm"

let address = evmosToEth('althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm')
// "ACA5D5F3DC8DDFE820890314350BC507F64A7C6E"
```

## Reference

- [ENSDOMAINS-AddressEnconder](https://github.com/ensdomains/address-encoder)
