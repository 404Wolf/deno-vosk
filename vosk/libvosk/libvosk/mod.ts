import { libvosk } from "./types.ts";
import { libvosk_SYMBOLS } from "./symbols.ts";

export * from "./safe-ffi.ts";
export type { libvosk };

export function loadlibvosk(path: string): typeof libvosk {
  const lib = Deno.dlopen(path, libvosk_SYMBOLS);

  return { ...lib.symbols, $$close: () => lib.close() } as never;
}
