import { MsgBeginRedelegate } from '@althea-net/althea-proto/types/codegen/cosmos/staking/v1beta1/tx.js'
import {
  generateTypes,
  MSG_BEGIN_REDELEGATE_TYPES,
  createMsgBeginRedelegate,
} from '@althea-net/eip712'

import { createTransactionPayload, TxContext } from '../base.js'

export interface MsgBeginRedelegateParams {
  validatorSrcAddress: string
  validatorDstAddress: string
  amount: string
  denom: string
}

const createEIP712MsgBeginRedelegate = (
  context: TxContext,
  params: MsgBeginRedelegateParams,
) => {
  const types = generateTypes(MSG_BEGIN_REDELEGATE_TYPES)

  const message = createMsgBeginRedelegate(
    context.sender.accountAddress,
    params.validatorSrcAddress,
    params.validatorDstAddress,
    params.amount,
    params.denom,
  )

  return {
    types,
    message,
  }
}

const createCosmosMsgBeginRedelegate = (
  context: TxContext,
  params: MsgBeginRedelegateParams,
) => {
  return MsgBeginRedelegate.fromJSON({
    delegatorAddress: context.sender.accountAddress,
    validatorSrcAddress: params.validatorSrcAddress,
    validatorDstAddress: params.validatorDstAddress,
    amount: {amount: params.amount, denom: params.denom},
  })
}

/**
 * Creates a transaction for a MsgBeginRedelegate object.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/staking#msgbeginredelegate | MsgBeginRedelegate}
 *
 * @param context - Transaction Context
 * @param params - MsgBeginRedelegate Params
 * @returns Transaction with the MsgBeginRedelegate payload
 *
 */
export const createTxMsgBeginRedelegate = (
  context: TxContext,
  params: MsgBeginRedelegateParams,
) => {
  const typedData = createEIP712MsgBeginRedelegate(context, params)
  const cosmosMsg = createCosmosMsgBeginRedelegate(context, params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
