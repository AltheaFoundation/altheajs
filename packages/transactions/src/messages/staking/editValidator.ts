import { MsgEditValidator } from '@althea-net/althea-proto/src/codegen/cosmos/staking/v1beta1/tx.js'

import {
  generateTypes,
  MSG_EDIT_VALIDATOR_TYPES,
  createMsgEditValidator,
} from '@althea-net/eip712'

import { createTransactionPayload, TxContext } from '../base.js'

export interface MsgEditValidatorParams {
  moniker: string | undefined
  identity: string | undefined
  website: string | undefined
  securityContact: string | undefined
  details: string | undefined
  validatorAddress: string | undefined
  commissionRate: string | undefined
  minSelfDelegation: string | undefined
}

const createEIP712MsgEditValidator = (params: MsgEditValidatorParams) => {
  const types = generateTypes(MSG_EDIT_VALIDATOR_TYPES)

  const message = createMsgEditValidator(
    params.moniker,
    params.identity,
    params.website,
    params.securityContact,
    params.details,
    params.validatorAddress,
    params.commissionRate,
    params.minSelfDelegation,
  )

  return {
    types,
    message,
  }
}

const createCosmosMsgEditValidator = (params: MsgEditValidatorParams) => {
  return MsgEditValidator.fromJSON({
    description: {
      moniker: params.moniker,
      identity: params.identity,
      website: params.website,
      securityContact: params.securityContact,
      details: params.details,
    },
    validatorAddress: params.validatorAddress,
    commissionRate: params.commissionRate,
    minSelfDelegation: params.minSelfDelegation,
  })
}

/**
 * Creates a transaction for a `MsgEditValidator` object.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/staking#msgeditvalidator | MsgEditValidator}
 *
 * @param context - Transaction Context
 * @param params - MsgEditValidator Params
 * @returns Transaction with the MsgEditValidator payload
 *
 */
export const createTxMsgEditValidator = (
  context: TxContext,
  params: MsgEditValidatorParams,
) => {
  const typedData = createEIP712MsgEditValidator(params)
  const cosmosMsg = createCosmosMsgEditValidator(params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
