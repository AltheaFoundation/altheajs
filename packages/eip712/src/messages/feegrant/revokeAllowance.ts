export const MSG_REVOKE_ALLOWANCE_TYPES = {
  MsgValue: [
    { name: 'granter', type: 'string' },
    { name: 'grantee', type: 'string' },
  ],
}

export function createMsgRevokeAllowance(
  sender: string,
  granteeAddress: string,
) {
  return {
    type: 'cosmos-sdk/MsgRevokeAllowance',
    value: {
      grantee: granteeAddress,
      granter: sender,
    },
  }
}
