import {
  genTestEthSecp256k1PubKey,
  genTestMsgConvertCoin,
} from './evmos-utils'
import { testMessageEncodeDecode } from './utils'

// Test Encode/Decode serialization against Cosmos SDK encodings in Go.
describe('test ethermint encode/decode', () => {
  it('handles pubkey types', () => {
    const [msg, expBase64] = genTestEthSecp256k1PubKey()
    testMessageEncodeDecode(msg, expBase64)
  })
})

describe('test evmos encode/decode', () => {
  it('handles erc20 types', () => {
    const [msg, expBase64] = genTestMsgConvertCoin()
    testMessageEncodeDecode(msg, expBase64)
  })

})
