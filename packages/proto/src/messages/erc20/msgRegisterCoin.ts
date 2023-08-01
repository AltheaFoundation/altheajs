import { Metadata } from '../../proto/cosmos/bank/bank'
import { RegisterCoinProposal } from '../../proto/canto/erc20/v1/erc20_pb'

export function createMsgRegisterCoin(
  title: string,
  description: string,
  metadata: Metadata,
) {
  const msg = new RegisterCoinProposal({
    title,
    description,
    metadata,
  })

  return {
    message: msg,
    path: RegisterCoinProposal.typeName,
  }
}
