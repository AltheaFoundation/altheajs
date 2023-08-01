import { RegisterERC20Proposal } from '../../proto/canto/erc20/v1/erc20_pb'

export function createMsgRegisterERC20(
  title: string,
  description: string,
  erc20address: string,
) {
  const msg = new RegisterERC20Proposal({
    title,
    description,
    erc20address,
  })

  return {
    message: msg,
    path: RegisterERC20Proposal.typeName,
  }
}
