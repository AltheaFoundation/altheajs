import {
  MsgRevoke
} from '@althea-net/althea-proto/src/codegen/cosmos/authz/v1beta1/tx.js'

import {
  generateTypes,
  createMsgRevokeGenericAuthorization,
  MSG_REVOKE_GENERIC_AUTHORIZATION_TYPES,
} from '@althea-net/eip712'

import {
  MsgGenericRevokeParams,
  createTxMsgGenericRevoke,
} from './genericRevoke'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const granteeAddress = TestUtils.addr1
const typeUrl = 'cosmos-sdk/MsgSend'

const params: MsgGenericRevokeParams = {
  granteeAddress,
  typeUrl,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_REVOKE_GENERIC_AUTHORIZATION_TYPES)
    const message = createMsgRevokeGenericAuthorization(
      context.sender.accountAddress,
      params.granteeAddress,
      params.typeUrl,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = MsgRevoke.fromJSON({
      granter: context.sender.accountAddress,
      grantee: params.granteeAddress,
      msg_type_url: params.typeUrl,
    })

    const payload = createTxMsgGenericRevoke(context, params)

    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )

    expect(payload).toStrictEqual(expectedPayload)
  })
})
