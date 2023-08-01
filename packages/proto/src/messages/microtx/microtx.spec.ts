import { createMsgMicrotx } from './msgMicrotx'
import { createMsgLiquify } from './msgLiquify'
import { MsgMicrotx, MsgLiquify } from '../../proto/microtx/v1/msgs_pb'
import { from, to, denom } from '../../proto/tests/utils'
import { JSONOptions } from '../../registry/registry'

describe('test Microtx Module message generation', () => {
  it('correctly wraps MsgMicrotx', () => {
    const amount = '10000000'
    const msg = createMsgMicrotx(from, to, amount, denom)

    expect(msg.message.toJson(JSONOptions)).toStrictEqual({
      sender: from,
      receiver: to,
      amount: {
        amount,
        denom,
      },
    })
    expect(msg.path).toStrictEqual(MsgMicrotx.typeName)
  })

  it('correctly wraps MsgLiquify', () => {
    const msg = createMsgLiquify(from)

    expect(msg.message.toJson(JSONOptions)).toStrictEqual({
      sender: from,
    })
    expect(msg.path).toStrictEqual(MsgLiquify.typeName)
  })
})
