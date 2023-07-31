import { erc20RegistryTypes } from './registry'

import { MsgConvertCoin, MsgConvertERC20 } from '../../proto/canto/erc20/v1/tx_pb'
import {
  RegisterCoinProposal,
  RegisterERC20Proposal,
} from '../../proto/canto/erc20/v1/erc20_pb'

describe('test erc20 registry types against expected', () => {
  it('exactly equals expected types', () => {
    expect(erc20RegistryTypes).toStrictEqual([
      MsgConvertCoin,
      MsgConvertERC20,
      RegisterCoinProposal,
      RegisterERC20Proposal,
    ])
  })
})
