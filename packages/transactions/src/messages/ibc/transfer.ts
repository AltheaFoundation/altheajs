import { MsgTransfer } from '@althea-net/althea-proto/src/codegen/ibc/applications/transfer/v1/tx.js'

import {
  generateTypes,
  createIBCMsgTransfer,
  CREATE_IBC_MSG_TRANSFER_TYPES,
} from '@althea-net/eip712'
import { createTransactionPayload, TxContext } from '../base.js'

export interface IBCMsgTransferParams {
  // Connection
  sourcePort: string
  sourceChannel: string
  // Token
  amount: string
  denom: string
  // Addresses
  receiver: string
  // Timeout
  revisionNumber: number
  revisionHeight: number
  timeoutTimestamp: string
}

const createEIP712IBCMsgTransfer = (
  context: TxContext,
  params: IBCMsgTransferParams,
) => {
  const msgTransferTypes = CREATE_IBC_MSG_TRANSFER_TYPES()
  const types = generateTypes(msgTransferTypes)

  const message = createIBCMsgTransfer(
    params.receiver,
    context.sender.accountAddress,
    params.sourceChannel,
    params.sourcePort,
    params.revisionHeight,
    params.revisionNumber,
    params.timeoutTimestamp,
    params.amount,
    params.denom,
  )

  return {
    types,
    message,
  }
}

const createCosmosIBCMsgTransfer = (
  context: TxContext,
  params: IBCMsgTransferParams,
) => {
  return MsgTransfer.fromJSON({
    sourcePort: params.sourcePort,
    sourceChannel: params.sourceChannel,
    token: { amount: params.amount, denom: params.denom},
    sender: context.sender.accountAddress,
    receiver: params.receiver,
    timeoutHeight: {revisionNumber: params.revisionNumber, revisionHeight: params.revisionHeight},
    timeoutTimestamp: params.timeoutTimestamp,
  })
}

/**
 * Creates a transaction for a `IBCMsgTransfer` object.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK
 * {@link https://github.com/cosmos/ibc-go/blob/main/docs/apps/transfer/messages.md | IBCMsgTransfer}
 *
 * @param context - Transaction Context
 * @param params - IBCMsgTransfer Params
 * @returns Transaction with the IBCMsgTransfer payload
 *
 */
export const createTxIBCMsgTransfer = (
  context: TxContext,
  params: IBCMsgTransferParams,
) => {
  const typedData = createEIP712IBCMsgTransfer(context, params)
  const cosmosMsg = createCosmosIBCMsgTransfer(context, params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
