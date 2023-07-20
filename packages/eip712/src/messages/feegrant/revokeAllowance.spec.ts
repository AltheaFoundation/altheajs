import {
  MSG_REVOKE_ALLOWANCE_TYPES,
  createMsgRevokeAllowance,
} from './revokeAllowance'
import TestUtils from '../../tests/utils'

describe('test generic auth revoke types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'granter', type: 'string' },
        { name: 'grantee', type: 'string' },
      ],
    }

    expect(MSG_REVOKE_ALLOWANCE_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const granter = TestUtils.addr1
    const grantee = TestUtils.addr2

    const msg = createMsgRevokeAllowance(granter, grantee)

    const expMsg = {
      type: 'cosmos-sdk/MsgRevokeAllowance',
      value: {
        grantee,
        granter,
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
