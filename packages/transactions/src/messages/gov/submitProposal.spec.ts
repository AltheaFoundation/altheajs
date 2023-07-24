import { createAnyMessage } from '../common'
import {
  generateTypes,
  createMsgSubmitProposal,
  MSG_SUBMIT_PROPOSAL_TYPES,
} from '@althea-net/eip712'
import {
  MsgSubmitProposalParams,
  createTxMsgSubmitProposal,
} from './submitProposal'
import { MsgSubmitProposal, MsgVote } from '@althea-net/althea-proto/src/codegen/cosmos/gov/v1/tx'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context, denom } = TestUtils
const amount = TestUtils.amount1
const proposer = context.sender.accountAddress

const proposalId = TestUtils.proposalId1
const option = TestUtils.voteOption1
const content = MsgVote.fromJSON({
  proposalId: proposalId,
  voter: proposer,
  option: option,
  metadata: "",
})

const params: MsgSubmitProposalParams = {
  content,
  denom,
  amount,
  proposer,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_SUBMIT_PROPOSAL_TYPES)

    const contentAsJSON = params.content.message.toJSON({
      useProtoFieldName: true,
    })
    const message = createMsgSubmitProposal(
      contentAsJSON,
      params.denom,
      params.amount,
      params.proposer,
    )

    const typedData = {
      types,
      message,
    }

    const contentAsAny = createAnyMessage(params.content)
    const messageCosmos = MsgSubmitProposal.fromJSON({
      messages: contentAsAny,
      initialDeposit: {denom: params.denom, amount: params.amount},
      proposer: params.proposer,
      metadata: "",
    })

    const payload = createTxMsgSubmitProposal(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
