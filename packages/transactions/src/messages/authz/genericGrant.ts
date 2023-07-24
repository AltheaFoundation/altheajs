import {
  MsgGrant
} from '@althea-net/althea-proto/src/codegen/cosmos/authz/v1beta1/tx.js'
import {
  Grant, GenericAuthorization
} from '@althea-net/althea-proto/src/codegen/cosmos/authz/v1beta1/authz.js'


import {
  generateTypes,
  MSG_GENERIC_AUTHORIZATION_TYPES,
} from '@althea-net/eip712'
import { createTransactionPayload, TxContext } from '../base.js'

export interface MsgGenericAuthorizationParams {
  granteeAddress: string
  typeUrl: string
  expires: number
}

const createEIP712MsgGenericGrant = (
  context: TxContext,
  params: MsgGenericAuthorizationParams,
) => {
  const types = generateTypes(MSG_GENERIC_AUTHORIZATION_TYPES)

  const message = createCosmosMsgGenericGrant(context, params)

  return {
    types,
    message,
  }
}

const createCosmosMsgGenericGrant = (
  context: TxContext,
  params: MsgGenericAuthorizationParams,
) => {
  const authz = GenericAuthorization.fromJSON({
    msg: params.typeUrl,
  })
  const grant = Grant.fromJSON({
    authorization: authz,
    expiration: params.expires,
  })
  return MsgGrant.fromJSON({
    granter: context.sender.accountAddress,
    grantee: params.granteeAddress,
    grant,
  })
}

/**
 * Creates a transaction for a generic MsgGrant.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/authz#msggrant | MsgGrant}
 *
 * @param context - Transaction Context
 * @param params - MsgGrant Generic Auth Params
 * @returns Transaction with the MsgGrant payload
 *
 */
export const createTxMsgGenericGrant = (
  context: TxContext,
  params: MsgGenericAuthorizationParams,
) => {
  const typedData = createEIP712MsgGenericGrant(context, params)
  const cosmosMsg = createCosmosMsgGenericGrant(context, params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
