import { MsgLiquify } from '../../proto/microtx/v1/msgs_pb.js'

export function createMsgLiquify(
  sender: string,
) {
  const message = new MsgLiquify({
    sender
  })
  return {
    message,
    path: MsgLiquify.typeName,
  }
}
