import { MsgSend, MsgMultiSend } from '../../proto/cosmos/bank/tx'
import { Metadata } from '../../proto/cosmos/bank/bank'

export const bankRegistryTypes = [MsgSend, MsgMultiSend, Metadata]
