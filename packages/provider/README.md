# Provider

Simple provider to query the Althea-L1 rest api.

## Querying an Account for Sequence and Account Number

```ts
const restOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
    // mode: 'no-cors', // This option will break the request in a confusing way when cors support is available
}
// Note that the node will return a 400 status code if the account does not exist.
queryEndpoint = `https://althea.zone:1317${generateEndpointAccount(account)}`;
const res = await fetch(
    queryEndpoint,
    restOptions,
).json()
```

## Broadcasting a signed Tx
```js
    const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Broadcast Mode Block waits for the Tx to be included in a block, may timeout
        body: generatePostBodyBroadcast(signedTx, BroadcastMode.Block),
    }

    const broadcastEndpoint = `https://althea.zone:1317${generateEndpointBroadcast}`

    const broadcastPost = await fetch(
        broadcastEndpoint,
        postOptions,
    )

    const res = await broadcastPost.json()

    // Result may contain the Tx execution response, including the events log
```
