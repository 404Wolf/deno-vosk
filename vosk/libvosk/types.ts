// deno-lint-ignore-file
import { Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";

export namespace libvosk {
  /** /data/vosk_api.h#L27 */
  export type $VoskModel = StructPointer<"$VoskModel">;

  /** /data/vosk_api.h#L32 */
  export type $VoskSpkModel = StructPointer<"$VoskSpkModel">;

  /** /data/vosk_api.h#L40 */
  export type $VoskRecognizer = StructPointer<"$VoskRecognizer">;

  /** /data/vosk_api.h#L43 */
  export type $VoskTextProcessor = StructPointer<"$VoskTextProcessor">;

  /** /data/vosk_api.h#L48 */
  export type $VoskBatchModel = StructPointer<"$VoskBatchModel">;

  /** /data/vosk_api.h#L53 */
  export type $VoskBatchRecognizer = StructPointer<"$VoskBatchRecognizer">;

  /** /data/vosk_api.h#L227 */
  export type $VoskEndpointerMode = libvosk.$VoskEpMode;

  /** /data/vosk_api.h#L222 */
  export enum $VoskEpMode {
    VOSK_EP_ANSWER_DEFAULT = 0,
    VOSK_EP_ANSWER_SHORT = 1,
    VOSK_EP_ANSWER_LONG = 2,
    VOSK_EP_ANSWER_VERY_LONG = 3,
  }

  /** /data/vosk_api.h#L60 */
  export declare function model_new(model_path: Pointer<number>): Pointer<libvosk.$VoskModel>;

  /** /data/vosk_api.h#L68 */
  export declare function model_free(model: Pointer<libvosk.$VoskModel>): void;

  /** /data/vosk_api.h#L76 */
  export declare function model_find_word(model: Pointer<libvosk.$VoskModel>, word: Pointer<number>): number;

  /** /data/vosk_api.h#L83 */
  export declare function spk_model_new(model_path: Pointer<number>): Pointer<libvosk.$VoskSpkModel>;

  /** /data/vosk_api.h#L91 */
  export declare function spk_model_free(model: Pointer<libvosk.$VoskSpkModel>): void;

  /** /data/vosk_api.h#L102 */
  export declare function recognizer_new(model: Pointer<libvosk.$VoskModel>, sample_rate: bigint): Pointer<libvosk.$VoskRecognizer>;

  /** /data/vosk_api.h#L117 */
  export declare function recognizer_new_spk(model: Pointer<libvosk.$VoskModel>, sample_rate: bigint, spk_model: Pointer<libvosk.$VoskSpkModel>): Pointer<libvosk.$VoskRecognizer>;

  /** /data/vosk_api.h#L139 */
  export declare function recognizer_new_grm(model: Pointer<libvosk.$VoskModel>, sample_rate: bigint, grammar: Pointer<number>): Pointer<libvosk.$VoskRecognizer>;

  /** /data/vosk_api.h#L148 */
  export declare function recognizer_set_spk_model(recognizer: Pointer<libvosk.$VoskRecognizer>, spk_model: Pointer<libvosk.$VoskSpkModel>): void;

  /** /data/vosk_api.h#L157 */
  export declare function recognizer_set_grm(recognizer: Pointer<libvosk.$VoskRecognizer>, grammar: Pointer<number>): void;

  /** /data/vosk_api.h#L173 */
  export declare function recognizer_set_max_alternatives(recognizer: Pointer<libvosk.$VoskRecognizer>, max_alternatives: number): void;

  /** /data/vosk_api.h#L209 */
  export declare function recognizer_set_words(recognizer: Pointer<libvosk.$VoskRecognizer>, words: number): void;

  /** /data/vosk_api.h#L215 */
  export declare function recognizer_set_partial_words(recognizer: Pointer<libvosk.$VoskRecognizer>, partial_words: number): void;

  /** /data/vosk_api.h#L220 */
  export declare function recognizer_set_nlsml(recognizer: Pointer<libvosk.$VoskRecognizer>, nlsml: number): void;

  /** /data/vosk_api.h#L234 */
  export declare function recognizer_set_endpointer_mode(recognizer: Pointer<libvosk.$VoskRecognizer>, mode: libvosk.$VoskEndpointerMode): void;

  /** /data/vosk_api.h#L243 */
  export declare function recognizer_set_endpointer_delays(recognizer: Pointer<libvosk.$VoskRecognizer>, t_start_max: bigint, t_end: bigint, t_max: bigint): void;

  /** /data/vosk_api.h#L254 */
  export declare function recognizer_accept_waveform(recognizer: Pointer<libvosk.$VoskRecognizer>, data: Pointer<number>, length: number): number;

  /** /data/vosk_api.h#L259 */
  export declare function recognizer_accept_waveform_s(recognizer: Pointer<libvosk.$VoskRecognizer>, data: Pointer<number>, length: number): number;

  /** /data/vosk_api.h#L264 */
  export declare function recognizer_accept_waveform_f(recognizer: Pointer<libvosk.$VoskRecognizer>, data: Pointer<bigint>, length: number): number;

  /** /data/vosk_api.h#L283 */
  export declare function recognizer_result(recognizer: Pointer<libvosk.$VoskRecognizer>): Pointer<number>;

  /** /data/vosk_api.h#L297 */
  export declare function recognizer_partial_result(recognizer: Pointer<libvosk.$VoskRecognizer>): Pointer<number>;

  /** /data/vosk_api.h#L306 */
  export declare function recognizer_final_result(recognizer: Pointer<libvosk.$VoskRecognizer>): Pointer<number>;

  /** /data/vosk_api.h#L312 */
  export declare function recognizer_reset(recognizer: Pointer<libvosk.$VoskRecognizer>): void;

  /** /data/vosk_api.h#L318 */
  export declare function recognizer_free(recognizer: Pointer<libvosk.$VoskRecognizer>): void;

  /** /data/vosk_api.h#L327 */
  export declare function set_log_level(log_level: number): void;

  /** /data/vosk_api.h#L334 */
  export declare function gpu_init(): void;

  /** /data/vosk_api.h#L341 */
  export declare function gpu_thread_init(): void;

  /** /data/vosk_api.h#L346 */
  export declare function batch_model_new(model_path: Pointer<number>): Pointer<libvosk.$VoskBatchModel>;

  /** /data/vosk_api.h#L349 */
  export declare function batch_model_free(model: Pointer<libvosk.$VoskBatchModel>): void;

  /** /data/vosk_api.h#L352 */
  export declare function batch_model_wait(model: Pointer<libvosk.$VoskBatchModel>): void;

  /** /data/vosk_api.h#L356 */
  export declare function batch_recognizer_new(model: Pointer<libvosk.$VoskBatchModel>, sample_rate: bigint): Pointer<libvosk.$VoskBatchRecognizer>;

  /** /data/vosk_api.h#L359 */
  export declare function batch_recognizer_free(recognizer: Pointer<libvosk.$VoskBatchRecognizer>): void;

  /** /data/vosk_api.h#L362 */
  export declare function batch_recognizer_accept_waveform(recognizer: Pointer<libvosk.$VoskBatchRecognizer>, data: Pointer<number>, length: number): void;

  /** /data/vosk_api.h#L367 */
  export declare function batch_recognizer_set_nlsml(recognizer: Pointer<libvosk.$VoskBatchRecognizer>, nlsml: number): void;

  /** /data/vosk_api.h#L370 */
  export declare function batch_recognizer_finish_stream(recognizer: Pointer<libvosk.$VoskBatchRecognizer>): void;

  /** /data/vosk_api.h#L373 */
  export declare function batch_recognizer_front_result(recognizer: Pointer<libvosk.$VoskBatchRecognizer>): Pointer<number>;

  /** /data/vosk_api.h#L376 */
  export declare function batch_recognizer_pop(recognizer: Pointer<libvosk.$VoskBatchRecognizer>): void;

  /** /data/vosk_api.h#L379 */
  export declare function batch_recognizer_get_pending_chunks(recognizer: Pointer<libvosk.$VoskBatchRecognizer>): number;

  /** /data/vosk_api.h#L382 */
  export declare function text_processor_new(tagger: Pointer<number>, verbalizer: Pointer<number>): Pointer<libvosk.$VoskTextProcessor>;

  /** /data/vosk_api.h#L385 */
  export declare function text_processor_free(processor: Pointer<libvosk.$VoskTextProcessor>): void;

  /** /data/vosk_api.h#L388 */
  export declare function text_processor_itn(processor: Pointer<libvosk.$VoskTextProcessor>, input: Pointer<number>): Pointer<number>;

  export declare function $$close(): void;
}
