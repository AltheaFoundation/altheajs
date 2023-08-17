import { createMsgSend as protoCreateMsgSend } from '@althea-net/proto'
import { createMsgSend } from '@althea-net/eip712'
import { createTransactionPayload, TxContext, wrapTypeToArray } from '../base'
import { generateTypes, MSG_SEND_TYPES } from '@althea-net/eip712'

export const createEIP712MsgSend = (context: TxContext, params: MsgSendParams[]) => {
  const types = generateTypes(MSG_SEND_TYPES)

  let messages = new Array()
  for (var param of params) {
    const message = createMsgSend(param.amount, param.denom, context.sender.accountAddress, param.destinationAddress)
    messages.push(message)
  }

  return {
    types,
    message: messages,
  }
}

export interface MsgSendParams {
  destinationAddress: string
  amount: string
  denom: string
}

export const createCosmosMsgSend = (context: TxContext, params: MsgSendParams[]) => {
  let messages = new Array()
  for (var param of params) {
    const message = protoCreateMsgSend(
      context.sender.accountAddress,
      param.destinationAddress,
      param.amount,
      param.denom,
    )
    messages.push(message)
  }
  return messages
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
export const createTxMsgSend = (context: TxContext, params: MsgSendParams | MsgSendParams[]) => {
  let multiparams = wrapTypeToArray(params)
  const typedData = createEIP712MsgSend(context, multiparams)
  const cosmosMsg = createCosmosMsgSend(context, multiparams)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
