# EIP712

EIP712 transactions creator.

# Installation

- `yarn add @althea-net/eip712`

# Example

- MsgSend:

```ts
import {
  createEIP712,
  generateFee,
  generateMessage,
  generateTypes,
  createMsgSend,
  MSG_SEND_TYPES,
} from '@althea-net/eip712'

let fee = generateFee(
  '20',
  'aalthea',
  '20000',
  'althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm',
)
let types = generateTypes(MSG_SEND_TYPES)
let msg = createMsgSend(
  '1',
  'aalthea',
  'althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm',
  'althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm',
)
let messages = generateMessage('9', '0', 'althea_417834-3', '', fee, msg)
let complete = createEIP712(types, 9000, messages)
console.log(complete)
```

```json
{
  "types": {
    "EIP712Domain": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "version",
        "type": "string"
      },
      {
        "name": "chainId",
        "type": "uint256"
      },
      {
        "name": "verifyingContract",
        "type": "string"
      },
      {
        "name": "salt",
        "type": "string"
      }
    ],
    "Tx": [
      {
        "name": "account_number",
        "type": "string"
      },
      {
        "name": "chain_id",
        "type": "string"
      },
      {
        "name": "fee",
        "type": "Fee"
      },
      {
        "name": "memo",
        "type": "string"
      },
      {
        "name": "msgs",
        "type": "Msg[]"
      },
      {
        "name": "sequence",
        "type": "string"
      }
    ],
    "Fee": [
      {
        "name": "feePayer",
        "type": "string"
      },
      {
        "name": "amount",
        "type": "Coin[]"
      },
      {
        "name": "gas",
        "type": "string"
      }
    ],
    "Coin": [
      {
        "name": "denom",
        "type": "string"
      },
      {
        "name": "amount",
        "type": "string"
      }
    ],
    "Msg": [
      {
        "name": "type",
        "type": "string"
      },
      {
        "name": "value",
        "type": "MsgValue"
      }
    ],
    "MsgValue": [
      {
        "name": "from_address",
        "type": "string"
      },
      {
        "name": "to_address",
        "type": "string"
      },
      {
        "name": "amount",
        "type": "TypeAmount[]"
      }
    ],
    "TypeAmount": [
      {
        "name": "denom",
        "type": "string"
      },
      {
        "name": "amount",
        "type": "string"
      }
    ]
  },
  "primaryType": "Tx",
  "domain": {
    "name": "Cosmos Web3",
    "version": "1.0.0",
    "chainId": 9000,
    "verifyingContract": "cosmos",
    "salt": "0"
  },
  "message": {
    "account_number": "9",
    "chain_id": "althea_417834-3",
    "fee": {
      "amount": [
        {
          "amount": "20",
          "denom": "aalthea"
        }
      ],
      "gas": "20000",
      "feePayer": "althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm"
    },
    "memo": "",
    "msgs": [
      {
        "type": "cosmos-sdk/MsgSend",
        "value": {
          "amount": [
            {
              "amount": "1",
              "denom": "aalthea"
            }
          ],
          "from_address": "althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm",
          "to_address": "althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm"
        }
      }
    ],
    "sequence": "0"
  }
}
```
