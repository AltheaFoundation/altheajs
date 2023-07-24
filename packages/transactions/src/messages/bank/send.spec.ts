import { MsgSend } from '@althea-net/althea-proto/types/codegen/cosmos/bank/v1beta1/tx'
import {
  generateTypes,
  createMsgSend,
  MSG_SEND_TYPES,
} from '@althea-net/eip712'
import { MsgSendParams, createTxMsgSend } from './send'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context, denom } = TestUtils
const destinationAddress = TestUtils.addr1
const amount = TestUtils.amount1

const params: MsgSendParams = {
  destinationAddress,
  amount,
  denom,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_SEND_TYPES)
    const message = createMsgSend(
      params.amount,
      params.denom,
      context.sender.accountAddress,
      params.destinationAddress,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = MsgSend.fromJSON({ fromAddress: context.sender.accountAddress, toAddress: params.destinationAddress, amount: [{ denom: params.denom, amount: params.amount }] })

    const payload = createTxMsgSend(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
