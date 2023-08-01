import {
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
  MsgCancelUnbondingDelegation,
  MsgEditValidator,
  MsgCreateValidator,
} from '../../proto/cosmos/staking/tx'
import {
  Description,
  CommissionRates,
} from '../../proto/cosmos/staking/staking'

export const stakingRegistryTypes = [
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
  MsgCancelUnbondingDelegation,
  MsgEditValidator,
  MsgCreateValidator,
  Description,
  CommissionRates,
]
