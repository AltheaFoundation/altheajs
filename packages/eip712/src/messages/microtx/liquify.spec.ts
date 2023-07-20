import { MSG_LIQUIFY_TYPES, createMsgLiquify } from './liquify'
import TestUtils from '../../tests/utils'

describe('test MsgLiquify types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'sender', type: 'string' },
      ],
    }

    expect(MSG_LIQUIFY_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const senderHex = TestUtils.addrHex2

    const msg = createMsgLiquify(
      senderHex,
    )

    const expMsg = {
      type: 'althea/MsgLiquify',
      value: {
        sender: senderHex,
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
