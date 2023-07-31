import { createERC20AminoConverters } from './aminoRegistry'
import {
  MsgConvertCoin,
  MsgConvertERC20,
} from '../../proto/canto/erc20/v1/tx_pb'
import { createAminoConverter } from '../../amino/objectConverter'
import { expectEqualsDefaultAminoConverters } from '../../../testutils/compareAminoRegistry'

describe('test erc20 amino converters', () => {
  it('creates expected amino converters', () => {
    const aminoConverters = createERC20AminoConverters()
    const expAminoConverters = {
      ...createAminoConverter(MsgConvertCoin, 'canto/MsgConvertCoin'),
      ...createAminoConverter(MsgConvertERC20, 'canto/MsgConvertERC20'),
    }

    expectEqualsDefaultAminoConverters(aminoConverters, expAminoConverters)
  })
})
