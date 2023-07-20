import {
  MSG_GRANT_ALLOWANCE_TYPES,
  createMsgGrantAllowance,
} from './grantAllowance'
import TestUtils from '../../tests/utils'

describe('test generic auth grant types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'granter', type: 'string' },
        { name: 'grantee', type: 'string' },
        { name: 'allowance', type: 'string' },
      ],
    }

    expect(MSG_GRANT_ALLOWANCE_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const granter = TestUtils.addr1
    const grantee = TestUtils.addr2
    const allowance = TestUtils.pubKey

    const msg = createMsgGrantAllowance(
      granter,
      grantee,
      allowance
    )

    const expMsg = {
      type: 'cosmos-sdk/MsgGrantAllowance',
      value: {
        grantee,
        granter,
        allowance,
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
