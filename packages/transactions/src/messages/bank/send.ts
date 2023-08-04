import { createMsgSend as protoCreateMsgSend } from '@althea-net/proto'
import { createMsgSend } from '@althea-net/eip712'
import { createTransactionPayload, newCreateTransactionPayload, TxContext } from '../base'
import { generateTypes, MSG_SEND_TYPES } from '@althea-net/eip712'

export const createEIP712MsgSend = (context: TxContext, params: MsgSendParams) => {
  const types = generateTypes(MSG_SEND_TYPES)

  const message = createMsgSend(params.amount, params.denom, context.sender.accountAddress, params.destinationAddress)

  return {
    types,
    message,
  }
}

export interface MsgSendParams {
  destinationAddress: string
  amount: string
  denom: string
}

export const createCosmosMsgSend = (context: TxContext, params: MsgSendParams) => {
  return protoCreateMsgSend(
    context.sender.accountAddress,
    params.destinationAddress,
    params.amount,
    params.denom,
  )
}

/**
 * Creates a transaction for a MsgSend object.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/bank#msgsend | MsgSend}
 *
 * @param context - Transaction Context
 * @param params - MsgSend Params
 * @returns Transaction with the MsgSend payload
 *
 */
export const createTxMsgSend = (context: TxContext, params: MsgSendParams) => {
  const typedData = createEIP712MsgSend(context, params)
  const cosmosMsg = createCosmosMsgSend(context, params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
