# Vesting

This package creates transaction payloads with messages from the [Vesting Module](https://docs.evmos.org/modules/vesting/).

Find the `TxContext` and `TxGenerated` types in the Transaction Docs.

### MsgClawback

```ts
export interface MsgClawbackParams {
  funderAddress: string
  accountAddress: string
  destAddress?: string
}

/**
 * Creates a transaction for a MsgClawback object.
 *
 * @remarks
 * This method creates a transaction wrapping the Evmos
 * {@link https://docs.evmos.org/protocol/modules/vesting/transactions#clawback | MsgClawback}
 *
 * @param context - Transaction Context
 * @param params - MsgClawback Params
 * @returns Transaction with the MsgClawback payload
 *
 */
export const createTxMsgClawback: (
  context: TxContext,
  params: MsgClawbackParams,
): TxGenerated
```

### MsgCreateClawbackVestingAccount

```ts
export interface MsgCreateClawbackVestingAccountParams {
  fromAddress: string
  toAddress: string
  startTime: number
  lockupPeriods: Period[]
  vestingPeriods: Period[]
  merge: boolean
}

/**
 * Creates a transaction for a MsgCreateClawbackVestingAccount object.
 *
 * @remarks
 * This method creates a transaction wrapping the Evmos
 * {@link https://docs.evmos.org/protocol/modules/vesting/transactions#createclawbackvestingaccount | MsgCreateClawbackVestingAccount}
 *
 * @param context - Transaction Context
 * @param params - MsgCreateClawbackVestingAccount Params
 * @returns Transaction with the MsgCreateClawbackVestingAccount payload
 *
 */
export const createTxMsgCreateClawbackVestingAccount: (
  context: TxContext,
  params: MsgCreateClawbackVestingAccountParams,
): TxGenerated
```
