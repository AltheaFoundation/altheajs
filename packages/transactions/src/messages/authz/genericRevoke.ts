import {
  MsgRevoke
} from '@althea-net/althea-proto/src/codegen/cosmos/authz/v1beta1/tx.js'

import {
  generateTypes,
  createMsgRevokeGenericAuthorization,
  MSG_REVOKE_GENERIC_AUTHORIZATION_TYPES,
} from '@althea-net/eip712'
import { createTransactionPayload, TxContext } from '../base.js'

export interface MsgGenericRevokeParams {
  granteeAddress: string
  typeUrl: string
}

const createEIP712MsgGenericRevoke = (
  context: TxContext,
  params: MsgGenericRevokeParams,
) => {
  const types = generateTypes(MSG_REVOKE_GENERIC_AUTHORIZATION_TYPES)

  const message = createMsgRevokeGenericAuthorization(
    context.sender.accountAddress,
    params.granteeAddress,
    params.typeUrl,
  )

  return {
    types,
    message,
  }
}

const createCosmosMsgGenericRevoke = (
  context: TxContext,
  params: MsgGenericRevokeParams,
) => {
  return MsgRevoke.fromJSON({
    granter: context.sender.accountAddress,
    grantee: params.granteeAddress,
    msg_type_url: params.typeUrl,
  })
}

/**
 * Creates a transaction for a generic MsgRevoke.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/authz#msgrevoke | MsgRevoke}
 *
 * @param context - Transaction Context
 * @param params - MsgRevoke Generic Auth Params
 * @returns Transaction with the MsgRevoke payload
 *
 */
export const createTxMsgGenericRevoke = (
  context: TxContext,
  params: MsgGenericRevokeParams,
) => {
  const typedData = createEIP712MsgGenericRevoke(context, params)
  const cosmosMsg = createCosmosMsgGenericRevoke(context, params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
