# Transactions

Transactions generator for Althea-L1.

## Common Usage

There are many helper functions defined in `src/messages` which generate signable payloads, for example this example uses IBCMsgTransferParams and createTxIBCMsgTransfer to

```ts
import {
    createTxIBCMsgTransfer, IBCMsgTransferParams,
    createTransactionPayload, signatureToWeb3Extension,
} from '@althea-net/transactions'
import { altheaToEth, ethToAlthea } from '@althea-net/address-converter'

const params: IBCMsgTransferParams = {
    sourcePort: 'transfer',
    sourceChannel: 'channel-0',
    amount: '1000',
    denom: 'aalthea',
    receiver: '<ibc chain account address>',
    revisionNumber = 0,
    revisionHeight = 12345,
    timeoutTimestamp: "10000",
    memo: "",
}

const senderBech32Address = 'althea1...' // or use ethToAlthea() on MetaMask's account output
const senderHexAddress = altheaToEth(senderBech32Address)

const context: TxContext = {
    chain: {
        chainId: 417834,
        cosmosChainId: 'althea_417834-3',
    },
    sender: {
        accountAddress: senderBech32Address,
        sequence: 0,
        accountNumber: 12345,
        pubkey: '<base64 public key>',
    },
    fee: {
        amount: '1000000000000000',
        denom: 'aalthea',
        gas: '2000000',
    },
    memo: '',
}

const { ibcTransferEIP, ibcTransferLegacyAmino } = createTxIBCMsgTransfer(context, params)

const mmArgs = {
    method: 'eth_signTypedData_v4',
    params: [senderHexAddress, JSON.stringify(ibcTransferEIP)],
}
const signature = await window.ethereum.request(mmArgs)

// Add the signature to an ExtensionOptionsWeb3Tx and put in the body
const extension = signatureToWeb3Extension(chain, sender, signature);
ibcTransferLegacyAmino.body.extensionOptions.push(createAnyMessage(extension))

const bodyBytes = ibcTransferLegacyAmino.body.toBinary()
const authInfoBytes = ibcTransferLegacyAmino.authInfo.toBinary()

// Do not put signature in the Tx
const signedTx = createTxRaw(bodyBytes, authInfoBytes, [new Uint8Array()])
```
