import { Coin } from '../../proto/cosmos/base/coin'
import { MsgMicrotx } from '../../proto/microtx/v1/msgs_pb'

export function createMsgMicrotx(
  sender: string,
  receiver: string,
  amount: string,
  denom: string,
) {
  const amounts = new Coin({
    denom,
    amount,
  })

  const message = new MsgMicrotx({
    sender,
    receiver,
    amount: amounts,
  })
  return {
    message,
    path: MsgMicrotx.typeName,
  }
}
