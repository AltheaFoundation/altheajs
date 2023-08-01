import { createMsgMicrotx as protoMsgMicrotx } from '@althea-net/proto'

import {
  generateTypes,
  createMsgMicrotx,
  MSG_MICROTX_TYPES,
} from '@althea-net/eip712'
import { MsgMicrotxParams, createTxMsgMicrotx } from './microtx'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context, denom } = TestUtils
const amount = TestUtils.amount1
const receiver = TestUtils.addr1
const sender = context.sender.accountAddress

const params: MsgMicrotxParams = {
  denom,
  amount,
  receiver,
  sender,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_MICROTX_TYPES)
    const message = createMsgMicrotx(
      params.denom,
      params.amount,
      params.receiver,
      params.sender,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = protoMsgMicrotx(
      params.denom,
      params.amount,
      params.receiver,
      params.sender,
    )

    const payload = createTxMsgMicrotx(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
