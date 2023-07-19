import {
  createTxRaw,
  createAnyMessage,
  MessageGenerated,
  Proto,
} from '@althea-net/proto'

export function createTxRawEIP712(
  body: Proto.Cosmos.Transactions.Tx.TxBody,
  authInfo: Proto.Cosmos.Transactions.Tx.AuthInfo,
  extension: MessageGenerated,
) {
  body.extensionOptions.push(createAnyMessage(extension))

  return createTxRaw(body.toBinary(), authInfo.toBinary(), [new Uint8Array()])
}
