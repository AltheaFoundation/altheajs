import { evmRegistryTypes } from './registry'

import {
  MsgEthereumTx,
  LegacyTx,
  AccessListTx,
  DynamicFeeTx,
} from '../../proto/ethermint/evm/v1/tx_pb'
import { ExtensionOptionsWeb3Tx } from '../../proto/ethermint/types/v1/web3_pb'

describe('test evm registry types against expected', () => {
  it('exactly equals expected types', () => {
    expect(evmRegistryTypes).toStrictEqual([
      MsgEthereumTx,
      LegacyTx,
      AccessListTx,
      DynamicFeeTx,
      ExtensionOptionsWeb3Tx,
    ])
  })
})
