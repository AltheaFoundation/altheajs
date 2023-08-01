import {
  MsgEthereumTx,
  LegacyTx,
  AccessListTx,
  DynamicFeeTx,
} from '../../proto/ethermint/evm/v1/tx_pb'
import { ExtensionOptionsWeb3Tx } from '../../proto/ethermint/types/v1/web3_pb'

export const evmRegistryTypes = [
  MsgEthereumTx,
  LegacyTx,
  AccessListTx,
  DynamicFeeTx,
  ExtensionOptionsWeb3Tx,
]
