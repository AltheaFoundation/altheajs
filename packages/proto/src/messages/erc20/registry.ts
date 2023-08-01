import { MsgConvertCoin, MsgConvertERC20 } from '../../proto/canto/erc20/v1/tx_pb'
import {
  RegisterCoinProposal,
  RegisterERC20Proposal,
} from '../../proto/canto/erc20/v1/erc20_pb'

export const erc20RegistryTypes = [
  MsgConvertCoin,
  MsgConvertERC20,
  RegisterCoinProposal,
  RegisterERC20Proposal,
]
