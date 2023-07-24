import { MsgSetWithdrawAddress } from '@althea-net/althea-proto/src/codegen/cosmos/distribution/v1beta1/tx.js'

import {
  generateTypes,
  MSG_SET_WITHDRAW_ADDRESS_TYPES,
  createMsgSetWithdrawAddress,
} from '@althea-net/eip712'
import { createTransactionPayload, TxContext } from '../base.js'

export interface MsgSetWithdrawAddressParams {
  delegatorAddress: string
  withdrawAddress: string
}

const createEIP712MsgSetWithdrawAddress = (
  params: MsgSetWithdrawAddressParams,
) => {
  const types = generateTypes(MSG_SET_WITHDRAW_ADDRESS_TYPES)

  const message = createMsgSetWithdrawAddress(
    params.delegatorAddress,
    params.withdrawAddress,
  )

  return {
    types,
    message,
  }
}

const createCosmosMsgSetWithdrawAddress = (
  params: MsgSetWithdrawAddressParams,
) => {
  return MsgSetWithdrawAddress.fromJSON({delegatorAddress: params.delegatorAddress, validatorAddress: params.withdrawAddress})
}

/**
 * Creates a transaction for a MsgWithdrawRewards object.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/distribution#msgsetwithdrawaddress | MsgSetWithdrawAddress}
 *
 * @param context - Transaction Context
 * @param params - MsgSetWithdrawAddress Params
 * @returns Transaction with the MsgSetWithdrawAddress payload
 *
 */
export const createTxMsgSetWithdrawAddress = (
  context: TxContext,
  params: MsgSetWithdrawAddressParams,
) => {
  const typedData = createEIP712MsgSetWithdrawAddress(params)
  const cosmosMsg = createCosmosMsgSetWithdrawAddress(params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
