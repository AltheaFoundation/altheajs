import { MsgConvertERC20 } from '@althea-net/althea-proto/src/codegen/canto/erc20/v1/tx.js'

import {
  generateTypes,
  createMsgConvertERC20,
  MSG_CONVERT_ERC20_TYPES,
} from '@althea-net/eip712'
import { createTransactionPayload, TxContext } from '../base.js'

export interface MsgConvertERC20Params {
  contractAddress: string
  amount: string
  receiverBech32: string
  senderHex: string
}

const createEIP712MsgConvertERC20 = (params: MsgConvertERC20Params) => {
  const types = generateTypes(MSG_CONVERT_ERC20_TYPES)

  const message = createMsgConvertERC20(
    params.contractAddress,
    params.amount,
    params.receiverBech32,
    params.senderHex,
  )

  return {
    types,
    message,
  }
}

const createCosmosMsgConvertERC20 = (params: MsgConvertERC20Params) => {
  return MsgConvertERC20.fromJSON({
    contractAddress: params.contractAddress,
    amount: params.amount,
    receiver: params.receiverBech32,
    sender: params.senderHex,
  })
}

/**
 * Creates a transaction for a `MsgConvertERC20` object.
 *
 * @remarks
 * This method creates a transaction wrapping the Evmos
 * {@link https://docs.evmos.org/protocol/modules/erc20/transactions#msgconverterc20 | MsgConvertERC20}
 *
 * @param context - Transaction Context
 * @param params - MsgConvertERC20 Params
 * @returns Transaction with the MsgConvertERC20 payload
 *
 */
export const createTxMsgConvertERC20 = (
  context: TxContext,
  params: MsgConvertERC20Params,
) => {
  const typedData = createEIP712MsgConvertERC20(params)
  const cosmosMsg = createCosmosMsgConvertERC20(params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
