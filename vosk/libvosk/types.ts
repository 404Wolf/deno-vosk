// deno-lint-ignore-file
import { Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";

export namespace libvosk {
  /** /data/input/vosk_api.h#L27 */
  export type $VoskModel = StructPointer<"$VoskModel">;

  /** /data/input/vosk_api.h#L32 */
  export type $VoskSpkModel = StructPointer<"$VoskSpkModel">;

  /** /data/input/vosk_api.h#L40 */
  export type $VoskRecognizer = StructPointer<"$VoskRecognizer">;

  /** /data/input/vosk_api.h#L46 */
  export type $VoskBatchModel = StructPointer<"$VoskBatchModel">;

  /** /data/input/vosk_api.h#L51 */
  export type $VoskBatchRecognizer = StructPointer<"$VoskBatchRecognizer">;



  /** /data/input/vosk_api.h#L58 */
  export declare function model_new(model_path: Pointer<number>): Pointer<libvosk.$VoskModel>;

  /** /data/input/vosk_api.h#L66 */
  export declare function model_free(model: Pointer<libvosk.$VoskModel>): void;

  /** /data/input/vosk_api.h#L74 */
  export declare function model_find_word(model: Pointer<libvosk.$VoskModel>, word: Pointer<number>): number;

  /** /data/input/vosk_api.h#L81 */
  export declare function spk_model_new(model_path: Pointer<number>): Pointer<libvosk.$VoskSpkModel>;

  /** /data/input/vosk_api.h#L89 */
  export declare function spk_model_free(model: Pointer<libvosk.$VoskSpkModel>): void;

  /** /data/input/vosk_api.h#L100 */
  export declare function recognizer_new(model: Pointer<libvosk.$VoskModel>, sample_rate: bigint): Pointer<libvosk.$VoskRecognizer>;

  /** /data/input/vosk_api.h#L115 */
  export declare function recognizer_new_spk(model: Pointer<libvosk.$VoskModel>, sample_rate: bigint, spk_model: Pointer<libvosk.$VoskSpkModel>): Pointer<libvosk.$VoskRecognizer>;

  /** /data/input/vosk_api.h#L137 */
  export declare function recognizer_new_grm(model: Pointer<libvosk.$VoskModel>, sample_rate: bigint, grammar: Pointer<number>): Pointer<libvosk.$VoskRecognizer>;

  /** /data/input/vosk_api.h#L146 */
  export declare function recognizer_set_spk_model(recognizer: Pointer<libvosk.$VoskRecognizer>, spk_model: Pointer<libvosk.$VoskSpkModel>): void;

  /** /data/input/vosk_api.h#L155 */
  export declare function recognizer_set_grm(recognizer: Pointer<libvosk.$VoskRecognizer>, grammar: Pointer<number>): void;

  /** /data/input/vosk_api.h#L171 */
  export declare function recognizer_set_max_alternatives(recognizer: Pointer<libvosk.$VoskRecognizer>, max_alternatives: number): void;

  /** /data/input/vosk_api.h#L207 */
  export declare function recognizer_set_words(recognizer: Pointer<libvosk.$VoskRecognizer>, words: number): void;

  /** /data/input/vosk_api.h#L213 */
  export declare function recognizer_set_partial_words(recognizer: Pointer<libvosk.$VoskRecognizer>, partial_words: number): void;

  /** /data/input/vosk_api.h#L218 */
  export declare function recognizer_set_nlsml(recognizer: Pointer<libvosk.$VoskRecognizer>, nlsml: number): void;

  /** /data/input/vosk_api.h#L230 */
  export declare function recognizer_accept_waveform(recognizer: Pointer<libvosk.$VoskRecognizer>, data: Pointer<number>, length: number): number;

  /** /data/input/vosk_api.h#L235 */
  export declare function recognizer_accept_waveform_s(recognizer: Pointer<libvosk.$VoskRecognizer>, data: Pointer<number>, length: number): number;

  /** /data/input/vosk_api.h#L240 */
  export declare function recognizer_accept_waveform_f(recognizer: Pointer<libvosk.$VoskRecognizer>, data: Pointer<bigint>, length: number): number;

  /** /data/input/vosk_api.h#L259 */
  export declare function recognizer_result(recognizer: Pointer<libvosk.$VoskRecognizer>): Pointer<number>;

  /** /data/input/vosk_api.h#L273 */
  export declare function recognizer_partial_result(recognizer: Pointer<libvosk.$VoskRecognizer>): Pointer<number>;

  /** /data/input/vosk_api.h#L282 */
  export declare function recognizer_final_result(recognizer: Pointer<libvosk.$VoskRecognizer>): Pointer<number>;

  /** /data/input/vosk_api.h#L288 */
  export declare function recognizer_reset(recognizer: Pointer<libvosk.$VoskRecognizer>): void;

  /** /data/input/vosk_api.h#L294 */
  export declare function recognizer_free(recognizer: Pointer<libvosk.$VoskRecognizer>): void;

  /** /data/input/vosk_api.h#L303 */
  export declare function set_log_level(log_level: number): void;

  /** /data/input/vosk_api.h#L310 */
  export declare function gpu_init(): void;

  /** /data/input/vosk_api.h#L317 */
  export declare function gpu_thread_init(): void;

  /** /data/input/vosk_api.h#L322 */
  export declare function batch_model_new(model_path: Pointer<number>): Pointer<libvosk.$VoskBatchModel>;

  /** /data/input/vosk_api.h#L325 */
  export declare function batch_model_free(model: Pointer<libvosk.$VoskBatchModel>): void;

  /** /data/input/vosk_api.h#L328 */
  export declare function batch_model_wait(model: Pointer<libvosk.$VoskBatchModel>): void;

  /** /data/input/vosk_api.h#L332 */
  export declare function batch_recognizer_new(model: Pointer<libvosk.$VoskBatchModel>, sample_rate: bigint): Pointer<libvosk.$VoskBatchRecognizer>;

  /** /data/input/vosk_api.h#L335 */
  export declare function batch_recognizer_free(recognizer: Pointer<libvosk.$VoskBatchRecognizer>): void;

  /** /data/input/vosk_api.h#L338 */
  export declare function batch_recognizer_accept_waveform(recognizer: Pointer<libvosk.$VoskBatchRecognizer>, data: Pointer<number>, length: number): void;

  /** /data/input/vosk_api.h#L343 */
  export declare function batch_recognizer_set_nlsml(recognizer: Pointer<libvosk.$VoskBatchRecognizer>, nlsml: number): void;

  /** /data/input/vosk_api.h#L346 */
  export declare function batch_recognizer_finish_stream(recognizer: Pointer<libvosk.$VoskBatchRecognizer>): void;

  /** /data/input/vosk_api.h#L349 */
  export declare function batch_recognizer_front_result(recognizer: Pointer<libvosk.$VoskBatchRecognizer>): Pointer<number>;

  /** /data/input/vosk_api.h#L352 */
  export declare function batch_recognizer_pop(recognizer: Pointer<libvosk.$VoskBatchRecognizer>): void;

  /** /data/input/vosk_api.h#L355 */
  export declare function batch_recognizer_get_pending_chunks(recognizer: Pointer<libvosk.$VoskBatchRecognizer>): number;

  export declare function $$close(): void;
}
