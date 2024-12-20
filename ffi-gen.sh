podman run -v "$(pwd):/data" glebbash/deno-ffigen-c2ffi \
    /data/input/vosk_api.h > input/vosk_api.json
prettier --write input/vosk_api.json

readelf -Ws --dyn-syms input/libvosk.so > input/libvosk_symbols.txt

