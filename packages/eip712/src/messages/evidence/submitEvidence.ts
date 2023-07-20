export const MSG_SUBMIT_EVIDENCE_TYPES = {
  MsgValue: [
    { name: 'submitter', type: 'string' },
    { name: 'evidence', type: 'string' },
  ],
}
export function createMsgSubmitEvidence(
  submitter: string,
  evidence: string,
) {
  return {
    type: 'cosmos-sdk/MsgSubmitEvidence',
    value: {
      submitter,
      evidence,
    },
  }
}
