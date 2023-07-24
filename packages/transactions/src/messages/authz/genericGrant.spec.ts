import {
  MsgGrant
} from '@althea-net/althea-proto/src/codegen/cosmos/authz/v1beta1/tx.js'
import {
  Grant, GenericAuthorization
} from '@althea-net/althea-proto/src/codegen/cosmos/authz/v1beta1/authz.js'


import {
  generateTypes,
  createMsgGenericAuthorization,
  MSG_GENERIC_AUTHORIZATION_TYPES,
} from '@althea-net/eip712'

import {
  createTxMsgGenericGrant,
  MsgGenericAuthorizationParams,
} from './genericGrant'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const granteeAddress = TestUtils.addr1
const typeUrl = 'cosmos-sdk/MsgSend'
const expires = 420

const params: MsgGenericAuthorizationParams = {
  granteeAddress,
  typeUrl,
  expires,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_GENERIC_AUTHORIZATION_TYPES)
    const message = createMsgGenericAuthorization(
      context.sender.accountAddress,
      params.granteeAddress,
      params.typeUrl,
      params.expires,
    )
    const typedData = {
      types,
      message,
    }

    const authz = GenericAuthorization.fromJSON({
      msg: params.typeUrl,
    })
    const grant = Grant.fromJSON({
      authorization: authz,
      expiration: params.expires,
    })
    const messageCosmos = MsgGrant.fromJSON({
      granter: context.sender.accountAddress,
      grantee: params.granteeAddress,
      grant,
    })

    const payload = createTxMsgGenericGrant(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
