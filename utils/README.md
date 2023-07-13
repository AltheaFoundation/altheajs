# Transaction tester

Send a transaction to the local node

## Usage

```sh
cd utils
yarn install

# ./link.sh if you want to link you want to work with your current changes
# make sure that you are running yarn run build:watch on the root folder so the packages are up to date
# ./link.sh
```

- Edit the `prepareMessage` function to create the message that you want to test.

```sh
yarn run dev
```

- If success, it will log:

```sh
Success sign transaction
Success sign transaction
```

- If error, it will log the transaction result.

## Requirements

- `althea` node running
- `enabled-unsafe-cors` set as `true` (`~/.althea/config/app.toml` or `--api.enabled-unsafe-cors true`)
- rest api (`1317`) enabled (`~/.althea/config/app.toml` or `--api.enabled true`)
- some coins (`althea tx bank send mykey althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm 100althea --keyring-backend test --fees=20aalthea`)

## Note

Wallet address:

- Hex: 0xACA5D5F3DC8DDFE820890314350BC507F64A7C6E
- Althea: althea14jjatu7u3h07sgyfqv2r2z79qlmy5lrw27asjm
