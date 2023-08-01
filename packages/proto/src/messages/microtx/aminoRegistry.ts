import { AminoConverters } from '@cosmjs/stargate'
import { MsgMicrotx, MsgLiquify } from '../../proto/microtx/v1/msgs_pb'
import { createAminoConverter } from '../../amino/objectConverter'

// TODO: Add MsgUpdateParams registration when type is added
export function createMicrotxAminoConverters(): AminoConverters {
  return {
    ...createAminoConverter(MsgMicrotx, 'althea/MsgMicrotx'),
    ...createAminoConverter(MsgLiquify, 'althea/MsgLiquify'),
  }
}
