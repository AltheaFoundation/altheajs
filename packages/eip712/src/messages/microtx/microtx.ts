export const MSG_MICROTX_TYPES = {
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

export function createMsgMicrotx(
  denom: string,
  amount: string,
  receiver: string,
  sender: string,
) {
  return {
    type: 'althea/MsgMicrotx',
    value: {
      coin: {
        denom,
        amount,
      },
      receiver,
      sender,
    },
  }
}
