export const MSG_GRANT_ALLOWANCE_TYPES = {
  MsgValue: [
    { name: 'granter', type: 'string' },
    { name: 'grantee', type: 'string' },
    { name: 'allowance', type: 'string' },
  ],
}

export function createMsgGrantAllowance(
  sender: string,
  granteeAddress: string,
  allowance: string,
) {
  return {
    type: 'cosmos-sdk/MsgGrantAllowance',
    value: {
      grantee: granteeAddress,
      granter: sender,
      allowance,
    },
  }
}
