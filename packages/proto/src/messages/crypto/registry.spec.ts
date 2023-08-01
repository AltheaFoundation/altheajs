import { cryptoRegistryTypes } from './registry'

import { PubKey as ED25519PubKey } from '../../proto/cosmos/crypto/ed25519/keys'
import { PubKey as EthSecp256k1PubKey } from '../../proto/ethermint/crypto/v1/ethsecp256k1/keys_pb'

describe('test crypto registry types against expected', () => {
  it('exactly equals expected types', () => {
    expect(cryptoRegistryTypes).toStrictEqual([
      ED25519PubKey,
      EthSecp256k1PubKey,
    ])
  })
})
