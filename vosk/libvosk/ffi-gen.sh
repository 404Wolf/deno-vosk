C_LIB=libvosk
INPUT_DIR="input"

podman run -v "$(pwd)/$INPUT_DIR:/data" glebbash/deno-ffigen-c2ffi \
    /data/vosk_api.h > $C_LIB.json
jq --indent 4 '.' "$C_LIB.json" > "$C_LIB-tmp.json"
mv "$C_LIB-tmp.json" "$C_LIB.json"

readelf -Ws --dyn-syms "$INPUT_DIR/$C_LIB.so" > ${C_LIB}_symbols.txt

deno run -A https://deno.land/x/ffigen/cli.ts \
    --definitions $C_LIB.json \
    --symbols ${C_LIB}_symbols.txt \
    --headers "$INPUT_DIR/vosk_api.h" \
    --lib-name libvosk \
    --lib-prefix vosk_

