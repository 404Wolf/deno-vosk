// deno-lint-ignore-file
import { Pointer, FnPointer, StructPointer } from "./safe-ffi.ts";

export namespace vosk {
  /** /data/input/vosk_api.h#L27 */
  export type $VoskModel = StructPointer<"$VoskModel">;

  /** /data/input/vosk_api.h#L32 */
  export type $VoskSpkModel = StructPointer<"$VoskSpkModel">;

  /** /data/input/vosk_api.h#L40 */
  export type $VoskRecognizer = StructPointer<"$VoskRecognizer">;

  /** /data/input/vosk_api.h#L43 */
  export type $VoskTextProcessor = StructPointer<"$VoskTextProcessor">;

  /** /data/input/vosk_api.h#L48 */
  export type $VoskBatchModel = StructPointer<"$VoskBatchModel">;

  /** /data/input/vosk_api.h#L53 */
  export type $VoskBatchRecognizer = StructPointer<"$VoskBatchRecognizer">;

  /** /data/input/vosk_api.h#L227 */
  export type $VoskEndpointerMode = vosk.$VoskEpMode;

  /** /data/input/vosk_api.h#L222 */
  export enum $VoskEpMode {
    VOSK_EP_ANSWER_DEFAULT = 0,
    VOSK_EP_ANSWER_SHORT = 1,
    VOSK_EP_ANSWER_LONG = 2,
    VOSK_EP_ANSWER_VERY_LONG = 3,
  }

  /** /data/input/vosk_api.h#L60 */
  export declare function _model_new(model_path: Pointer<number>): Pointer<vosk.$VoskModel>;

  /** /data/input/vosk_api.h#L68 */
  export declare function _model_free(model: Pointer<vosk.$VoskModel>): void;

  /** /data/input/vosk_api.h#L76 */
  export declare function _model_find_word(model: Pointer<vosk.$VoskModel>, word: Pointer<number>): number;

  /** /data/input/vosk_api.h#L83 */
  export declare function _spk_model_new(model_path: Pointer<number>): Pointer<vosk.$VoskSpkModel>;

  /** /data/input/vosk_api.h#L91 */
  export declare function _spk_model_free(model: Pointer<vosk.$VoskSpkModel>): void;

  /** /data/input/vosk_api.h#L102 */
  export declare function _recognizer_new(model: Pointer<vosk.$VoskModel>, sample_rate: bigint): Pointer<vosk.$VoskRecognizer>;

  /** /data/input/vosk_api.h#L117 */
  export declare function _recognizer_new_spk(model: Pointer<vosk.$VoskModel>, sample_rate: bigint, spk_model: Pointer<vosk.$VoskSpkModel>): Pointer<vosk.$VoskRecognizer>;

  /** /data/input/vosk_api.h#L139 */
  export declare function _recognizer_new_grm(model: Pointer<vosk.$VoskModel>, sample_rate: bigint, grammar: Pointer<number>): Pointer<vosk.$VoskRecognizer>;

  /** /data/input/vosk_api.h#L148 */
  export declare function _recognizer_set_spk_model(recognizer: Pointer<vosk.$VoskRecognizer>, spk_model: Pointer<vosk.$VoskSpkModel>): void;

  /** /data/input/vosk_api.h#L157 */
  export declare function _recognizer_set_grm(recognizer: Pointer<vosk.$VoskRecognizer>, grammar: Pointer<number>): void;

  /** /data/input/vosk_api.h#L173 */
  export declare function _recognizer_set_max_alternatives(recognizer: Pointer<vosk.$VoskRecognizer>, max_alternatives: number): void;

  /** /data/input/vosk_api.h#L209 */
  export declare function _recognizer_set_words(recognizer: Pointer<vosk.$VoskRecognizer>, words: number): void;

  /** /data/input/vosk_api.h#L215 */
  export declare function _recognizer_set_partial_words(recognizer: Pointer<vosk.$VoskRecognizer>, partial_words: number): void;

  /** /data/input/vosk_api.h#L220 */
  export declare function _recognizer_set_nlsml(recognizer: Pointer<vosk.$VoskRecognizer>, nlsml: number): void;

  /** /data/input/vosk_api.h#L234 */
  export declare function _recognizer_set_endpointer_mode(recognizer: Pointer<vosk.$VoskRecognizer>, mode: vosk.$VoskEndpointerMode): void;

  /** /data/input/vosk_api.h#L243 */
  export declare function _recognizer_set_endpointer_delays(recognizer: Pointer<vosk.$VoskRecognizer>, t_start_max: bigint, t_end: bigint, t_max: bigint): void;

  /** /data/input/vosk_api.h#L254 */
  export declare function _recognizer_accept_waveform(recognizer: Pointer<vosk.$VoskRecognizer>, data: Pointer<number>, length: number): number;

  /** /data/input/vosk_api.h#L259 */
  export declare function _recognizer_accept_waveform_s(recognizer: Pointer<vosk.$VoskRecognizer>, data: Pointer<number>, length: number): number;

  /** /data/input/vosk_api.h#L264 */
  export declare function _recognizer_accept_waveform_f(recognizer: Pointer<vosk.$VoskRecognizer>, data: Pointer<bigint>, length: number): number;

  /** /data/input/vosk_api.h#L283 */
  export declare function _recognizer_result(recognizer: Pointer<vosk.$VoskRecognizer>): Pointer<number>;

  /** /data/input/vosk_api.h#L297 */
  export declare function _recognizer_partial_result(recognizer: Pointer<vosk.$VoskRecognizer>): Pointer<number>;

  /** /data/input/vosk_api.h#L306 */
  export declare function _recognizer_final_result(recognizer: Pointer<vosk.$VoskRecognizer>): Pointer<number>;

  /** /data/input/vosk_api.h#L312 */
  export declare function _recognizer_reset(recognizer: Pointer<vosk.$VoskRecognizer>): void;

  /** /data/input/vosk_api.h#L318 */
  export declare function _recognizer_free(recognizer: Pointer<vosk.$VoskRecognizer>): void;

  /** /data/input/vosk_api.h#L327 */
  export declare function _set_log_level(log_level: number): void;

  /** /data/input/vosk_api.h#L334 */
  export declare function _gpu_init(): void;

  /** /data/input/vosk_api.h#L341 */
  export declare function _gpu_thread_init(): void;

  /** /data/input/vosk_api.h#L346 */
  export declare function _batch_model_new(model_path: Pointer<number>): Pointer<vosk.$VoskBatchModel>;

  /** /data/input/vosk_api.h#L349 */
  export declare function _batch_model_free(model: Pointer<vosk.$VoskBatchModel>): void;

  /** /data/input/vosk_api.h#L352 */
  export declare function _batch_model_wait(model: Pointer<vosk.$VoskBatchModel>): void;

  /** /data/input/vosk_api.h#L356 */
  export declare function _batch_recognizer_new(model: Pointer<vosk.$VoskBatchModel>, sample_rate: bigint): Pointer<vosk.$VoskBatchRecognizer>;

  /** /data/input/vosk_api.h#L359 */
  export declare function _batch_recognizer_free(recognizer: Pointer<vosk.$VoskBatchRecognizer>): void;

  /** /data/input/vosk_api.h#L362 */
  export declare function _batch_recognizer_accept_waveform(recognizer: Pointer<vosk.$VoskBatchRecognizer>, data: Pointer<number>, length: number): void;

  /** /data/input/vosk_api.h#L367 */
  export declare function _batch_recognizer_set_nlsml(recognizer: Pointer<vosk.$VoskBatchRecognizer>, nlsml: number): void;

  /** /data/input/vosk_api.h#L370 */
  export declare function _batch_recognizer_finish_stream(recognizer: Pointer<vosk.$VoskBatchRecognizer>): void;

  /** /data/input/vosk_api.h#L373 */
  export declare function _batch_recognizer_front_result(recognizer: Pointer<vosk.$VoskBatchRecognizer>): Pointer<number>;

  /** /data/input/vosk_api.h#L376 */
  export declare function _batch_recognizer_pop(recognizer: Pointer<vosk.$VoskBatchRecognizer>): void;

  /** /data/input/vosk_api.h#L379 */
  export declare function _batch_recognizer_get_pending_chunks(recognizer: Pointer<vosk.$VoskBatchRecognizer>): number;

  /** /data/input/vosk_api.h#L382 */
  export declare function _text_processor_new(tagger: Pointer<number>, verbalizer: Pointer<number>): Pointer<vosk.$VoskTextProcessor>;

  /** /data/input/vosk_api.h#L385 */
  export declare function _text_processor_free(processor: Pointer<vosk.$VoskTextProcessor>): void;

  /** /data/input/vosk_api.h#L388 */
  export declare function _text_processor_itn(processor: Pointer<vosk.$VoskTextProcessor>, input: Pointer<number>): Pointer<number>;

  export declare function $$close(): void;
}
