import { MsgWithdrawDelegatorReward } from '@althea-net/althea-proto/src/codegen/cosmos/distribution/v1beta1/tx.js'

import {
  generateTypes,
  MSG_WITHDRAW_DELEGATOR_REWARD_TYPES,
  createMsgWithdrawDelegatorReward,
} from '@althea-net/eip712'
import { createTransactionPayload, TxContext } from '../base.js'

export interface MultipleMsgWithdrawDelegatorRewardParams {
  validatorAddresses: string[]
}

const createEIP712MultipleMsgWithdrawDelegatorReward = (
  context: TxContext,
  params: MultipleMsgWithdrawDelegatorRewardParams,
) => {
  const types = generateTypes(MSG_WITHDRAW_DELEGATOR_REWARD_TYPES)

  const messages = params.validatorAddresses.map((valAddr) =>
    createMsgWithdrawDelegatorReward(context.sender.accountAddress, valAddr),
  )

  return {
    types,
    message: messages,
  }
}

const createCosmosMultipleMsgWithdrawDelegatorReward = (
  context: TxContext,
  params: MultipleMsgWithdrawDelegatorRewardParams,
) => {
  return params.validatorAddresses.map((valAddr) =>
    MsgWithdrawDelegatorReward.fromJSON({delegatorAddress: context.sender.accountAddress, validatorAddress: valAddr})
  )
}

/**
 * Creates a transaction for multiple MsgWithdrawDelegatorReward objects.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/distribution#msgwithdrawdelegatorreward | MsgWithdrawDelegatorReward}
 *
 * @param context - Transaction Context
 * @param params - MultipleMsgWithdrawDelegatorReward Params
 * @returns Transaction with multiple MsgWithdrawDelegatorReward objects in the payload
 *
 */
export const createTxMultipleMsgWithdrawDelegatorReward = (
  context: TxContext,
  params: MultipleMsgWithdrawDelegatorRewardParams,
) => {
  const typedData = createEIP712MultipleMsgWithdrawDelegatorReward(
    context,
    params,
  )
  const cosmosMsgs = createCosmosMultipleMsgWithdrawDelegatorReward(
    context,
    params,
  )

  return createTransactionPayload(context, typedData, cosmosMsgs)
}
