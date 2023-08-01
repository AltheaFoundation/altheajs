import { createMsgMicrotx as protoMsgMicrotx } from '@althea-net/proto'

import {
  generateTypes,
  createMsgMicrotx,
  MSG_MICROTX_TYPES,
} from '@althea-net/eip712'
import { createTransactionPayload, TxContext } from '../base'

export interface MsgMicrotxParams {
  denom: string
  amount: string
  receiver: string
  sender: string
}

const createEIP712MsgMicrotx = (params: MsgMicrotxParams) => {
  const types = generateTypes(MSG_MICROTX_TYPES)

  const message = createMsgMicrotx(
    params.denom,
    params.amount,
    params.receiver,
    params.sender,
  )

  return {
    types,
    message,
  }
}

const createCosmosMsgMicrotx = (params: MsgMicrotxParams) => {
  return protoMsgMicrotx(
    params.denom,
    params.amount,
    params.receiver,
    params.sender,
  )
}

/**
 * Creates a transaction for a `MsgMicrotx` object.
 *
 * @remarks
 * This method creates a transaction wrapping the Althea
 * {@link https://github.com/althea-net/althea-L1/blob/main/proto/microtx/v1/msgs.proto#L28-L33 | MsgMicrotx}
 *
 * @param context - Transaction Context
 * @param params - MsgMicrotx Params
 * @returns Transaction with the MsgMicrotx payload
 *
 */
export const createTxMsgMicrotx = (
  context: TxContext,
  params: MsgMicrotxParams,
) => {
  const typedData = createEIP712MsgMicrotx(params)
  const cosmosMsg = createCosmosMsgMicrotx(params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
