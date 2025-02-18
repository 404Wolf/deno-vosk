#!/usr/bin/env bash

# Ensure script fails on any error
set -e

# Create necessary directories if they don't exist
mkdir -p vosk/build/input
mkdir -p vosk/libvosk
chmod 755 vosk/build/input

# Change to the build directory
cd vosk/build || exit 1

# Build and move the library
nix build "github:404wolf/nix-vosk"
cp -f result/lib/libvosk.so input/ || sudo cp -f result/lib/libvosk.so input/
rm -rf result

C_LIB=libvosk
INPUT_DIR="input"

# Generate FFI bindings
podman run -v "$(pwd)/$INPUT_DIR:/data" glebbash/deno-ffigen-c2ffi \
    /data/vosk_api.h > $C_LIB.json

# Format JSON
jq --indent 4 '.' "$C_LIB.json" > "$C_LIB-tmp.json"
mv "$C_LIB-tmp.json" "$C_LIB.json"

# Generate symbols
readelf -Ws --dyn-syms "$INPUT_DIR/$C_LIB.so" > ${C_LIB}_symbols.txt

# Generate FFI bindings
deno run -A https://deno.land/x/ffigen/cli.ts \
    --definitions $C_LIB.json \
    --symbols ${C_LIB}_symbols.txt \
    --headers "$INPUT_DIR/vosk_api.h" \
    --lib-name libvosk \
    --lib-prefix vosk_

# Move generated files to the correct locations
cp --no-preserve=mode -f $C_LIB.json input/ || sudo cp -f $C_LIB.json input/
cp --no-preserve=mode -f ${C_LIB}_symbols.txt input/ || sudo cp -f ${C_LIB}_symbols.txt input/

# Move TypeScript files to libvosk directory
mv ./**/*.ts ../libvosk/

echo "Finished generating FFI bindings"
