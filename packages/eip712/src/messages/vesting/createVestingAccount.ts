export const MSG_CREATE_VESTING_ACCOUNT_TYPES = {
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

type Amount = {
  denom: string
  amount: string
}

/* eslint-disable camelcase */
export function createMsgCreateVestingAccount(
  from_address: string,
  to_address: string,
  amount: Amount[],
  end_time: number,
  delayed: boolean,
) {
  // EIP712 requires the date to be a string in format YYYY-MM-DDTHH:MM:SSZ
  const date = new Date()
  date.setTime(end_time * 1000)
  let endTime = date.toISOString()
  endTime = endTime.replace('.000Z', 'Z')

  return {
    type: 'cosmos-sdk/MsgCreateVestingAccount',
    value: {
      from_address,
      to_address,
      amount,
      end_time: endTime,
      delayed,
    },
  }
}
