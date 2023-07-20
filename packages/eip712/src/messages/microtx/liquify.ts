export const MSG_LIQUIFY_TYPES = {
  MsgValue: [
    { name: 'sender', type: 'string' },
  ],
}

export function createMsgLiquify(
  sender: string,
) {
  return {
    type: 'althea/MsgLiquify',
    value: {
      sender,
    },
  }
}
