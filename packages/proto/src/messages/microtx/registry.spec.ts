import { microtxRegistryTypes } from './registry'

import { MsgMicrotx, MsgLiquify, LiquidInfrastructureAccount } from '../../proto/microtx/v1/msgs_pb'

describe('test microtx registry types against expected', () => {
  it('exactly equals expected types', () => {
    expect(microtxRegistryTypes).toStrictEqual([MsgMicrotx, MsgLiquify, LiquidInfrastructureAccount])
  })
})
