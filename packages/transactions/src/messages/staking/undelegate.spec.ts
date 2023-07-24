import { MsgUndelegate } from '@althea-net/althea-proto/src/codegen/cosmos/staking/v1beta1/tx'
import {
  generateTypes,
  createMsgUndelegate,
  MSG_UNDELEGATE_TYPES,
} from '@althea-net/eip712'
import { MsgUndelegateParams, createTxMsgUndelegate } from './undelegate'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context, denom } = TestUtils
const validatorAddress = TestUtils.addrVal1
const amount = TestUtils.amount1

const params: MsgUndelegateParams = {
  validatorAddress,
  amount,
  denom,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_UNDELEGATE_TYPES)
    const message = createMsgUndelegate(
      context.sender.accountAddress,
      params.validatorAddress,
      params.amount,
      params.denom,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = MsgUndelegate.fromJSON({
    delegatorAddress: context.sender.accountAddress,
    validatorAddress: params.validatorAddress,
    amount: {amount: params.amount, denom: params.denom}
  })


    const payload = createTxMsgUndelegate(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
