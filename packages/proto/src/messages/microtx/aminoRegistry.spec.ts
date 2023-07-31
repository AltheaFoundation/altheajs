import { createMicrotxAminoConverters } from './aminoRegistry'
import { MsgMicrotx, MsgLiquify } from '../../proto/microtx/v1/msgs_pb'
import { createAminoConverter } from '../../amino/objectConverter'
import { expectEqualsDefaultAminoConverters } from '../../../testutils/compareAminoRegistry'

describe('test microtx amino converters', () => {
  it('creates expected amino converters', () => {
    const aminoConverters = createMicrotxAminoConverters()
    const expAminoConverters = {
      ...createAminoConverter(MsgMicrotx, 'althea/MsgMicrotx'),
      ...createAminoConverter(MsgLiquify, 'althea/MsgLiquify'),
    }

    expectEqualsDefaultAminoConverters(aminoConverters, expAminoConverters)
  })
})
