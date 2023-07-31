#!/bin/bash
# NOTE: protoc is required

# Generates compiled proto ts files from the althea src protos via protoc

ALTHEA_FOLDER="$(pwd)/althea-proto-src"
CANTO_FOLDER="$ALTHEA_FOLDER/third_party/proto/canto"
ETHERMINT_FOLDER="$ALTHEA_FOLDER/third_party/proto/ethermint"
OUT_FOLDER="$(pwd)/packages/proto/src/proto"
I="$ALTHEA_FOLDER/proto"
INCLUDES="$ALTHEA_FOLDER/third_party/proto"
mkdir -p $OUT_FOLDER

compile-protos () {
    if [ ! $# -eq 1 ]; then
        echo "Expected 1 argument, got $#"
        exit 1
    fi

    PATH=$PATH:$(pwd)/node_modules/.bin \
    protoc \
    --es_out $OUT_FOLDER \
    --es_opt target=ts \
    --proto_path="$I" \
    --proto_path="$INCLUDES" \
    $(find $1 -iname "*.proto")
}

# Create the compiled protos for the althea modules
compile-protos $ALTHEA_FOLDER/proto

# Create the compiled protos for canto too
compile-protos $CANTO_FOLDER

# Create the compiled protos for ethermint too
compile-protos $ETHERMINT_FOLDER
