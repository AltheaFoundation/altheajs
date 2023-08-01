import { Coin } from '../../proto/cosmos/base/coin'
import { Height } from '../../proto/cosmos-ibc/ibc/core/client'
import { MsgTransfer } from '../../proto/cosmos-ibc/ibc/applications/tx'

export function createIBCMsgTransfer(
  // Channel
  sourcePort: string,
  sourceChannel: string,
  // Token
  amount: string,
  denom: string,
  // Addresses
  sender: string,
  receiver: string,
  // Timeout
  revisionNumber: number,
  revisionHeight: number,
  timeoutTimestamp: string,
  // Optional Memo
  memo?: string,
) {
  const token = new Coin({
    denom,
    amount,
  })

  const timeoutHeight = new Height({
    revisionNumber: BigInt(revisionNumber),
    revisionHeight: BigInt(revisionHeight),
  })

  const ibcMessage = new MsgTransfer({
    sourcePort,
    sourceChannel,
    token,
    sender,
    receiver,
    timeoutHeight,
    timeoutTimestamp: BigInt(parseInt(timeoutTimestamp, 10)),
    memo: memo ?? '',
  })

  return {
    message: ibcMessage,
    path: MsgTransfer.typeName,
  }
}
