C_LIB=libvosk

podman run -v "$(pwd):/data" glebbash/deno-ffigen-c2ffi \
    /data/input/vosk_api.h > input/vosk_api.json
jq --indent 4 '.' input/vosk_api.json > input/$C_LIB.json

readelf -Ws --dyn-syms input/$C_LIB.so > input/${C_LIB}_symbols.txt

deno run -A https://deno.land/x/ffigen/cli.ts \
    --definitions input/$C_LIB.json \
    --symbols input/${C_LIB}_symbols.txt \
    --headers inputs/vosk_api.h \
    --lib-name vosk
