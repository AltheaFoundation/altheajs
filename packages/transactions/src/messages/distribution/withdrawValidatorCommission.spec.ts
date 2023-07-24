import { MsgWithdrawValidatorCommission } from '@althea-net/althea-proto/src/codegen/cosmos/distribution/v1beta1/tx.js'


import {
  generateTypes,
  MSG_WITHDRAW_VALIDATOR_COMMISSION_TYPES,
  createMsgWithdrawValidatorCommission,
} from '@althea-net/eip712'
import {
  MsgWithdrawValidatorCommissionParams,
  createTxMsgWithdrawValidatorCommission,
} from './withdrawValidatorCommission'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const validatorAddress = TestUtils.addrVal1

const params: MsgWithdrawValidatorCommissionParams = {
  validatorAddress,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_WITHDRAW_VALIDATOR_COMMISSION_TYPES)
    const message = createMsgWithdrawValidatorCommission(
      params.validatorAddress,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = MsgWithdrawValidatorCommission.fromJSON(params)

    const payload = createTxMsgWithdrawValidatorCommission(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
