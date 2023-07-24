import { MsgTransfer } from '@althea-net/althea-proto/src/codegen/ibc/applications/transfer/v1/tx'
import {
  generateTypes,
  createIBCMsgTransfer,
  CREATE_IBC_MSG_TRANSFER_TYPES,
} from '@althea-net/eip712'
import { IBCMsgTransferParams, createTxIBCMsgTransfer } from './transfer'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context, denom } = TestUtils

const sender = context.sender.accountAddress
const sourcePort = 'transfer'
const sourceChannel = 'channel-0'
const amount = TestUtils.amount1
const receiver = TestUtils.addr2
const revisionNumber = 42
const revisionHeight = 84
const timeoutTimestamp = '10000'

const params: IBCMsgTransferParams = {
  sourcePort,
  sourceChannel,
  amount,
  denom,
  receiver,
  revisionNumber,
  revisionHeight,
  timeoutTimestamp,
}

const testCreatePayload = (params: IBCMsgTransferParams) => {
  const msgTypes = CREATE_IBC_MSG_TRANSFER_TYPES()
  const types = generateTypes(msgTypes)

  const message = createIBCMsgTransfer(
    params.receiver,
    sender,
    params.sourceChannel,
    params.sourcePort,
    params.revisionHeight,
    params.revisionNumber,
    params.timeoutTimestamp,
    params.amount,
    params.denom,
  )
  const typedData = {
    types,
    message,
  }

  const messageCosmos = MsgTransfer.fromJSON({
    sourcePort: params.sourcePort,
    sourceChannel: params.sourceChannel,
    token: { amount: params.amount, denom: params.denom},
    sender: context.sender.accountAddress,
    receiver: params.receiver,
    timeoutHeight: {revisionNumber: params.revisionNumber, revisionHeight: params.revisionHeight},
    timeoutTimestamp: params.timeoutTimestamp,
  })

  const payload = createTxIBCMsgTransfer(context, params)
  const expectedPayload = createTransactionPayload(
    context,
    typedData,
    messageCosmos,
  )
  expect(payload).toStrictEqual(expectedPayload)
}

describe('test tx payload', () => {
  it('produces tx payloads as expected with memo', () => {
    testCreatePayload(params)
  })

  it('produces tx payloads as expected with empty memo', () => {
    const paramsWithEmptyMemo = { ...params, memo: '' }
    testCreatePayload(paramsWithEmptyMemo)
  })

  it('produces tx payloads as expected without memo', () => {
    const paramsWithNoMemo = JSON.parse(JSON.stringify(params))
    delete paramsWithNoMemo.memo
    testCreatePayload(paramsWithNoMemo)
  })
})
