# Proto

Protobuf files used to generate cosmos transactions for Althea-L1, Canto, and Ethermint.

This package is not meant to be used directly, `@althea-net/transactions` contains convenient transaction generation functions which should be used instead.

## Convert protobuf to Eth Transaction

Example on how to convert protobuf message -> ethereum tx [here]('./tests/messages/msgEthereumTx.spec.ts')

## Local generation

Either run the script from the root directory `bash scripts/create-proto-files.sh`, or use npm `npm run compileproto`.
That script will call protoc with the [protoc-gen-es plugin](https://github.com/bufbuild/protobuf-es/tree/main/packages/protoc-gen-es) created by bufbuild, once each for Althea-L1 and Canto and Ethermint.
The protoc-gen-es tool will create special ts files to be used elsewhere in the repo.

To see the proto source files check out the althea-proto-src folder in the root of this repo.

After compiling the protos, this project can be built (just run `npm run build` in the root of this repo) to generate the publishable js files.
