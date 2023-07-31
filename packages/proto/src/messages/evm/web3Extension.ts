import { ExtensionOptionsWeb3Tx } from '../../proto/ethermint/types/v1/web3_pb.js'

export function createWeb3Extension(
  chainId: number,
  feePayer: string,
  feePayerSig: Uint8Array,
) {
  const message = new ExtensionOptionsWeb3Tx({
    typedDataChainId: BigInt(chainId),
    feePayer,
    feePayerSig,
  })
  return {
    message,
    path: ExtensionOptionsWeb3Tx.typeName,
  }
}
