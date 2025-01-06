import Vosk from "vosk";
import { libvosk as v } from "./libvosk/types.ts";
import { cstr, Pointer } from "./libvosk/safe-ffi.ts";

/**
 * Build a Model from a model file.
 * @see models [models](https://alphacephei.com/vosk/models)
 */
export class Model {
  handle: Pointer<v.$VoskModel>;

  /**
   * Build a Model to be used with the voice recognition. Each language should have it's own Model
   * for the speech recognition to work.
   * @param {string} modelPath The abstract pathname to the model
   * @see models [models](https://alphacephei.com/vosk/models)
   */
  constructor(private vosk: Vosk, modelPath: string) {
    /**
     * Store the handle.
     * For internal use only
     */
    this.handle = vosk.call.model_new(cstr(modelPath));
  }

  /**
   * Releases the model memory
   *
   * The model object is reference-counted so if some recognizer
   * depends on this model, model might still stay alive. When
   * last recognizer is released, model will be released too.
   */
  free() {
    this.vosk.call.model_free(this.handle);
  }
}

/**
 * Build a Speaker Model from a speaker model file.
 * The Speaker Model enables speaker identification.
 * @see models [models](https://alphacephei.com/vosk/models)
 */
export class SpeakerModel {
  handle: Pointer<v.$VoskSpkModel>;

  /**
   * Loads speaker model data from the file and returns the model object
   *
   * @param {string} modelPath the path of the model on the filesystem
   * @see models [models](https://alphacephei.com/vosk/models)
   */
  constructor(private vosk: Vosk, modelPath: string) {
    /**
     * Store the handle.
     * For internal use only
     * @type {unknown}
     */
    this.handle = this.vosk.call.spk_model_new(cstr(modelPath));
  }

  /**
   * Releases the model memory
   *
   * The model object is reference-counted so if some recognizer
   * depends on this model, model might still stay alive. When
   * last recognizer is released, model will be released too.
   */
  free() {
    this.vosk.call.spk_model_free(this.handle);
  }
}
