import { cstr, Pointer, readCString } from "@vosk/libvosk/safe-ffi.ts";
import type { libvosk as v } from "@vosk/libvosk/types.ts";
import { SpeakerModel } from "@vosk/Model.ts";
import { isGrammarRecognizerParam, isSpeakerRecognizerParam } from "@vosk/types.ts";
import { type BaseRecognizerParam, PartialResults, Result } from "@vosk/types.ts";
import Vosk from "vosk";

/**
 * Create a Recognizer that will be able to transform audio streams into text using a Model.
 *
 * @template {XOR<SpeakerRecognizerParam, Partial<GrammarRecognizerParam>>} T extra parameter
 * @see Model
 */
export class Recognizer<T extends BaseRecognizerParam> {
  handle: Pointer<v.$VoskRecognizer>;

  /**
   * Create a Recognizer that will handle speech to text recognition.
   *
   * @constructor
   * @param {T & BaseRecognizerParam} param The Recognizer parameters
   *
   *  Sometimes when you want to improve recognition accuracy and when you don't need
   *  to recognize large vocabulary you can specify a list of phrases to recognize. This
   *  will improve recognizer speed and accuracy but might return [unk] if user said
   *  something different.
   *
   *  Only recognizers with lookahead models support this type of quick configuration.
   *  Precompiled HCLG graph models are not supported.
   */
  constructor(private vosk: Vosk, param: BaseRecognizerParam & T) {
    const { model, sampleRate } = param;

    if ("speakerModel" in param && "grammar" in param) {
      throw new Error(
        "grammar and speakerModel cannot be used together for now.",
      );
    }

    if (isGrammarRecognizerParam(param)) {
      this.handle = this.vosk.call.recognizer_new_grm(
        model.handle,
        sampleRate as unknown as bigint,
        cstr(JSON.stringify(param.grammar)),
      );
    } else if (isSpeakerRecognizerParam(param)) {
      this.handle = this.vosk.call.recognizer_new_spk(
        model.handle,
        sampleRate as unknown as bigint,
        (param.speakerModel!).handle,
      );
    } else {
      this.handle = this.vosk.call.recognizer_new(
        model.handle,
        sampleRate as unknown as bigint,
      );
    }
  }

  /**
   * Releases the model memory
   *
   * The model object is reference-counted so if some recognizer
   * depends on this model, model might still stay alive. When
   * last recognizer is released, model will be released too.
   */
  free() {
    this.vosk.call.recognizer_free(this.handle);
  }

  /** Configures recognizer to output n-best results
   *
   * <pre>
   *   {
   *      "alternatives": [
   *          { "text": "one two three four five", "confidence": 0.97 },
   *          { "text": "one two three for five", "confidence": 0.03 },
   *      ]
   *   }
   * </pre>
   *
   * @param {number} max_alternatives Maximum alternatives to return from recognition results
   */
  setMaxAlternatives(max_alternatives: number) {
    this.vosk.call.recognizer_set_max_alternatives(
      this.handle,
      max_alternatives,
    );
  }

  /** Configures recognizer to output words with times
   *
   * <pre>
   *   "result" : [{
   *       "conf" : 1.000000,
   *       "end" : 1.110000,
   *       "start" : 0.870000,
   *       "word" : "what"
   *     }, {
   *       "conf" : 1.000000,
   *       "end" : 1.530000,
   *       "start" : 1.110000,
   *       "word" : "zero"
   *     }, {
   *       "conf" : 1.000000,
   *       "end" : 1.950000,
   *       "start" : 1.530000,
   *       "word" : "zero"
   *     }, {
   *       "conf" : 1.000000,
   *       "end" : 2.340000,
   *       "start" : 1.950000,
   *       "word" : "zero"
   *     }, {
   *       "conf" : 1.000000,
   *       "end" : 2.610000,
   *       "start" : 2.340000,
   *       "word" : "one"
   *     }],
   * </pre>
   *
   * @param words - boolean value
   */
  setWords(words: boolean) {
    this.vosk.call.recognizer_set_words(this.handle, Number(words));
  }

  /** Same as configuring output word count, but for partial results. */
  setPartialWords(partial_words: number) {
    this.vosk.call.recognizer_set_partial_words(this.handle, partial_words);
  }

  /** Adds speaker recognition model to already created recognizer. Helps to initialize
   * speaker recognition for grammar-based recognizer.
   *
   * @param spk_model Speaker recognition model
   */
  setSpkModel(spk_model: SpeakerModel) {
    this.vosk.call.recognizer_set_spk_model(this.handle, spk_model.handle);
  }

  /**
   * Accept voice data
   *
   * Accept and process new chunk of voice data
   *
   *  @param data Audio data in PCM 16-bit mono format
   *  @param length Length of the audio data
   *  @returns 1 if silence is occured and you can retrieve a new utterance with result method
   *           0 if decoding continues
   *          -1 if exception occured
   */
  acceptWaveform(data: Uint8Array): -1 | 0 | 1 {
    const result = this.vosk.call.recognizer_accept_waveform(
      this.handle,
      Deno.UnsafePointer.of(data) as unknown as Pointer<number>,
      data.length,
    ) as -1 | 0 | 1;
    console.log("acceptWaveform", result);
    return result;
  }

  /** Returns speech recognition result in a string
   *
   * @returns the result in JSON format which contains decoded line, decoded
   *          words, times in seconds and confidences. You can parse this result
   *          with any json parser
   * <pre>
   * {
   *   "result" : [{
   *       "conf" : 1.000000,
   *       "end" : 1.110000,
   *       "start" : 0.870000,
   *       "word" : "what"
   *     }, {
   *       "conf" : 1.000000,
   *       "end" : 1.530000,
   *       "start" : 1.110000,
   *       "word" : "zero"
   *     }, {
   *       "conf" : 1.000000,
   *       "end" : 1.950000,
   *       "start" : 1.530000,
   *       "word" : "zero"
   *     }, {
   *       "conf" : 1.000000,
   *       "end" : 2.340000,
   *       "start" : 1.950000,
   *       "word" : "zero"
   *     }, {
   *       "conf" : 1.000000,
   *      "end" : 2.610000,
   *       "start" : 2.340000,
   *       "word" : "one"
   *     }],
   *   "text" : "what zero zero zero one"
   *  }
   * </pre>
   */
  resultString() {
    return this.vosk.call.recognizer_result(this.handle);
  }

  /**
   * Returns speech recognition results
   * @returns {VoskResult<T>} The results
   */
  result(): Result<T> {
    return JSON.parse(
      readCString(this.vosk.call.recognizer_result(this.handle)!),
    );
  }

  /**
   * speech recognition text which is not yet finalized.
   * result may change as recognizer process more data.
   *
   * @returns {PartialResults} The partial results
   */
  partialResult(): PartialResults {
    return JSON.parse(
      readCString(this.vosk.call.recognizer_partial_result(this.handle)!),
    );
  }

  /**
   * Returns speech recognition result. Same as result, but doesn't wait for silence
   * You usually call it in the end of the stream to get final bits of audio. It
   * flushes the feature pipeline, so all remaining audio chunks got processed.
   *
   * @returns {VoskResult<T>} speech result.
   */
  finalResult(): Result<T> {
    return JSON.parse(
      readCString(this.vosk.call.recognizer_final_result(this.handle)!),
    );
  }

  /**
   * Resets current results so the recognition can continue from scratch
   */
  reset() {
    this.vosk.call.recognizer_reset(this.handle);
  }
}
