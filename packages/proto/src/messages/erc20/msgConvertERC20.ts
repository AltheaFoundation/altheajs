import { MsgConvertERC20 } from '../../proto/canto/erc20/v1/tx_pb'

export function createMsgConvertERC20(
  contractAddress: string,
  amount: string,
  receiver: string,
  sender: string,
) {
  const msg = new MsgConvertERC20({
    contractAddress,
    amount,
    receiver,
    sender,
  })
  return {
    message: msg,
    path: MsgConvertERC20.typeName,
  }
}
