import { Coin } from '../cosmos/base/coin'
import { PubKey } from '../ethermint/crypto/v1/ethsecp256k1/keys_pb'
import { MsgConvertCoin } from '../canto/erc20/v1/tx_pb'
import { TestMessage, from, denom, hex } from './utils'

// See ./cosmos-utils.ts for bytecode generation

export const genTestEthSecp256k1PubKey = (): TestMessage => [
  new PubKey({
    key: new Uint8Array([
      10, 33, 2, 136, 177, 245, 49, 184, 120, 113, 219, 192, 55, 41, 81, 135,
      37, 92, 174, 75, 160, 196, 188, 55, 202, 114, 97, 5, 178, 20, 10, 253, 14,
      105, 23,
    ]),
  }),
  'CiMKIQKIsfUxuHhx28A3KVGHJVyuS6DEvDfKcmEFshQK/Q5pFw==',
]

export const genTestMsgConvertCoin = (): TestMessage => {
  const coin = new Coin({
    amount: '999999999999000',
    denom,
  })

  return [
    new MsgConvertCoin({
      coin,
      receiver: hex,
      sender: from,
    }),
    'ChkKBmFldm1vcxIPOTk5OTk5OTk5OTk5MDAwEioweGUyRDYxZTQ5ZmY4YTlkNzI0Q0M1NGQzMzhEODA3NkY4NzhhQzZiNzEaLGV2bW9zMXBtazJyMzJzc3F3cHM0MnkzYzlkNGNscWxjYTQwM3lkOXd5bWdy',
  ]
}
