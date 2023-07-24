import { MsgWithdrawDelegatorReward } from '@althea-net/althea-proto/src/codegen/cosmos/distribution/v1beta1/tx.js'


import {
  generateTypes,
  MSG_WITHDRAW_DELEGATOR_REWARD_TYPES,
  createMsgWithdrawDelegatorReward,
} from '@althea-net/eip712'
import {
  MsgWithdrawDelegatorRewardParams,
  createTxMsgWithdrawDelegatorReward,
} from './withdrawDelegatorRewards'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const validatorAddress = TestUtils.addrVal1

const params: MsgWithdrawDelegatorRewardParams = {
  validatorAddress,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_WITHDRAW_DELEGATOR_REWARD_TYPES)
    const message = createMsgWithdrawDelegatorReward(
      context.sender.accountAddress,
      params.validatorAddress,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = MsgWithdrawDelegatorReward.fromJSON({delegatorAddress: context.sender.accountAddress, validatorAddress: params.validatorAddress})

    const payload = createTxMsgWithdrawDelegatorReward(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
