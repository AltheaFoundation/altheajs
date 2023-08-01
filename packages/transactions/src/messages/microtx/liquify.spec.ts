import { createMsgLiquify as protoMsgLiquify } from '@althea-net/proto'

import {
  generateTypes,
  createMsgLiquify,
  MSG_LIQUIFY_TYPES,
} from '@althea-net/eip712'
import { MsgLiquifyParams, createTxMsgLiquify } from './liquify'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const sender = context.sender.accountAddress

const params: MsgLiquifyParams = {
  sender,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_LIQUIFY_TYPES)
    const message = createMsgLiquify(
      params.sender,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = protoMsgLiquify(
      params.sender,
    )

    const payload = createTxMsgLiquify(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
