C_LIB=libvosk

podman run -v "$(pwd):/data" glebbash/deno-ffigen-c2ffi \
    /data/input/vosk_api.h > input/$C_LIB.json
jq --indent 4 '.' "input/$C_LIB.json" > "input/$C_LIB-tmp.json"
mv "input/$C_LIB-tmp.json" "input/$C_LIB.json"

readelf -Ws --dyn-syms input/$C_LIB.so > input/${C_LIB}_symbols.txt

deno run -A https://deno.land/x/ffigen/cli.ts \
    --definitions input/$C_LIB.json \
    --symbols input/${C_LIB}_symbols.txt \
    --headers inputs/vosk_api.h \
    --lib-name libvosk \
    --lib-prefix vosk_

mv libvosk/* vosk/libvosk
rmdir libvosk
