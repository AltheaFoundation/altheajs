import { createMsgWithdrawDelegatorReward as protoMsgWithdrawDelegatorReward } from '@althea-net/proto'

import {
  generateTypes,
  MSG_WITHDRAW_DELEGATOR_REWARD_TYPES,
  createMsgWithdrawDelegatorReward,
} from '@althea-net/eip712'
import {
  MultipleMsgWithdrawDelegatorRewardParams,
  createTxMultipleMsgWithdrawDelegatorReward,
} from './multipleWithdrawDelegatorRewards'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const validatorAddresses = [TestUtils.addrVal1, TestUtils.addrVal2]

const params: MultipleMsgWithdrawDelegatorRewardParams = {
  validatorAddresses,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_WITHDRAW_DELEGATOR_REWARD_TYPES)
    const messages = params.validatorAddresses.map((valAddr) =>
      createMsgWithdrawDelegatorReward(context.sender.accountAddress, valAddr),
    )
    const typedData = {
      types,
      message: messages,
    }

    const messagesCosmos = params.validatorAddresses.map((valAddr) =>
      protoMsgWithdrawDelegatorReward(context.sender.accountAddress, valAddr),
    )

    const payload = createTxMultipleMsgWithdrawDelegatorReward(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messagesCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
