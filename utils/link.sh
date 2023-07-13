yarn unlink "@althea-net/address-converter"
yarn unlink "@althea-net/eip712"
yarn unlink "@althea-net/proto"
yarn unlink "@althea-net/provider"
yarn unlink "@althea-net/transactions"

cd ..
cd packages/address-converter
yarn unlink
yarn link
cd ../eip712
yarn unlink
yarn link
cd ../proto
yarn unlink
yarn link
cd ../provider
yarn unlink
yarn link
cd ../transactions
yarn unlink
yarn link
cd ..
cd utils
yarn link "@althea-net/address-converter"
yarn link "@althea-net/eip712"
yarn link "@althea-net/proto"
yarn link "@althea-net/provider"
yarn link "@althea-net/transactions"
