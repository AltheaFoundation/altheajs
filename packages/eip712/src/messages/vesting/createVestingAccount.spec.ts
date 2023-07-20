import {
  MSG_CREATE_VESTING_ACCOUNT_TYPES,
  createMsgCreateVestingAccount,
} from './createVestingAccount'
import TestUtils from '../../tests/utils'

describe('test MsgCreateVestingAccount types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'from_address', type: 'string' },
        { name: 'to_address', type: 'string' },
        { name: 'amount', type: 'TypeAmount[]' },
        { name: 'end_time', type: 'int64' },
        { name: 'delayed', type: 'bool' },
      ],
      TypeAmount: [
        { name: 'denom', type: 'string' },
        { name: 'amount', type: 'string' },
      ],
    }

    expect(MSG_CREATE_VESTING_ACCOUNT_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const { denom } = TestUtils
    const amount = TestUtils.amount1

    const funderAddress = TestUtils.addr1
    const accountAddress = TestUtils.addr2
    const endTime = 20000
    // 20000 is just over 5.5 hours
    const endTimestamp = '1970-01-01T05:33:20Z'

    const delayed = true
    const amounts = [{denom, amount}]

    const msg = createMsgCreateVestingAccount(
      funderAddress,
      accountAddress,
      amounts,
      endTime,
      delayed,
    )

    const expMsg = {
      type: 'cosmos-sdk/MsgCreateVestingAccount',
      value: {
        from_address: funderAddress,
        to_address: accountAddress,
        amount: amounts,
        end_time: endTimestamp,
        delayed,
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
