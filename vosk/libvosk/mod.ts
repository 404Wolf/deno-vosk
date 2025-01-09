import { libvosk } from "@vosk/libvosk/types.ts";
import { libvosk_SYMBOLS } from "@vosk/libvosk/symbols.ts";

export * from "@vosk/libvosk/safe-ffi.ts";
export type { libvosk };

export function loadlibvosk(path: string): typeof libvosk {
  const lib = Deno.dlopen(path, libvosk_SYMBOLS);

  return { ...lib.symbols, $$close: () => lib.close() } as never;
}
