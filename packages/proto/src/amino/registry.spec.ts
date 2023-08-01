import { Message, AnyMessage } from '@bufbuild/protobuf'
import { AminoTypes } from './registry'
import {
  createMsgSend,
} from '../messages'
import { convertProtoMessageToObject } from './objectConverter'

import { MessageGenerated } from '../messages/common'
import { from, to, amount, denom } from '../proto/tests/utils'

function expectReversibleAminoConversion<T extends Message<T> = AnyMessage>(
  wrappedProtoMsg: MessageGenerated<T>,
) {
  const protoObject = convertProtoMessageToObject(wrappedProtoMsg.message)
  const aminoObject = AminoTypes.toAmino(protoObject)
  const reconstructedProtoObject = AminoTypes.fromAmino(aminoObject)

  expect(reconstructedProtoObject).toStrictEqual(protoObject)
}

describe('test integrated amino types converter', () => {
  it('converts registered cosmos messages to/from amino', () => {
    const wrappedProtoMsgSend = createMsgSend(from, to, amount, denom)
    expectReversibleAminoConversion(wrappedProtoMsgSend)
  })
})
