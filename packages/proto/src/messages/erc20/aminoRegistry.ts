import { AminoConverters } from '@cosmjs/stargate'
import { MsgConvertCoin, MsgConvertERC20 } from '../../proto/canto/erc20/v1/tx_pb'
import { createAminoConverter } from '../../amino/objectConverter'

// TODO: Add MsgUpdateParams registration when type is added
export function createERC20AminoConverters(): AminoConverters {
  return {
    ...createAminoConverter(MsgConvertCoin, 'canto/MsgConvertCoin'),
    ...createAminoConverter(MsgConvertERC20, 'canto/MsgConvertERC20'),
  }
}
