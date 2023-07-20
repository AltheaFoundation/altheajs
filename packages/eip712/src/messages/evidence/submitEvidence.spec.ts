import { MSG_SUBMIT_EVIDENCE_TYPES, createMsgSubmitEvidence } from './submitEvidence'
import TestUtils from '../../tests/utils'

describe('test MsgSubmitEvidence types and messages', () => {
  it('creates types as expected', () => {
    const expTypes = {
      MsgValue: [
        { name: 'submitter', type: 'string' },
        { name: 'evidence', type: 'string' },
      ],
    }

    expect(MSG_SUBMIT_EVIDENCE_TYPES).toStrictEqual(expTypes)
  })

  it('creates messages as expected', () => {
    const evidence = TestUtils.pubKey
    const submitter = TestUtils.addr1

    const msg = createMsgSubmitEvidence(submitter, evidence)

    const expMsg = {
      type: 'cosmos-sdk/MsgSubmitEvidence',
      value: {
        submitter,
        evidence,
      },
    }

    expect(msg).toStrictEqual(expMsg)
  })
})
