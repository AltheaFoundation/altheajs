import { createMsgLiquify as protoMsgLiquify } from '@althea-net/proto'

import {
  generateTypes,
  createMsgLiquify,
  MSG_LIQUIFY_TYPES,
} from '@althea-net/eip712'
import { createTransactionPayload, TxContext } from '../base'

export interface MsgLiquifyParams {
  sender: string
}

const createEIP712MsgLiquify = (params: MsgLiquifyParams) => {
  const types = generateTypes(MSG_LIQUIFY_TYPES)

  const message = createMsgLiquify(
    params.sender,
  )

  return {
    types,
    message,
  }
}

const createCosmosMsgLiquify = (params: MsgLiquifyParams) => {
  return protoMsgLiquify(
    params.sender,
  )
}

/**
 * Creates a transaction for a `MsgLiquify` object.
 *
 * @remarks
 * This method creates a transaction wrapping the Althea
 * {@link https://github.com/althea-net/althea-L1/blob/main/proto/microtx/v1/msgs.proto#L71-L73 | MsgLiquify}
 *
 * @param context - Transaction Context
 * @param params - MsgLiquify Params
 * @returns Transaction with the MsgLiquify payload
 *
 */
export const createTxMsgLiquify = (
  context: TxContext,
  params: MsgLiquifyParams,
) => {
  const typedData = createEIP712MsgLiquify(params)
  const cosmosMsg = createCosmosMsgLiquify(params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
