import { vosk } from "./types.ts";
import { vosk_SYMBOLS } from "./symbols.ts";

export * from "./safe-ffi.ts";
export type { vosk };

export function loadvosk(path: string): typeof vosk {
  const lib = Deno.dlopen(path, vosk_SYMBOLS);

  return { ...lib.symbols, $$close: () => lib.close() } as never;
}
