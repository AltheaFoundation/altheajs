import { MSG_MICROTX_TYPES, createMsgMicrotx } from './microtx'
import TestUtils from '../../tests/utils'

describe('test MsgMicrotx types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'receiver', type: 'string' },
        { name: 'sender', type: 'string' },
        { name: 'amount', type: 'TypeCoin' },
      ],
      TypeCoin: [
        { name: 'denom', type: 'string' },
        { name: 'amount', type: 'string' },
      ],
    }

    expect(MSG_MICROTX_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const { denom } = TestUtils
    const amount = TestUtils.amount1
    const senderBech32 = TestUtils.addr1
    const receiverHex = TestUtils.addrHex1

    const msg = createMsgMicrotx(denom, amount, receiverHex, senderBech32)

    const expMsg = {
      type: 'althea/MsgMicrotx',
      value: {
        coin: {
          denom,
          amount,
        },
        receiver: receiverHex,
        sender: senderBech32,
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
