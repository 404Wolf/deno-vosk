import { loadlibvosk } from "_libvosk";
import { Model, SpeakerModel } from "./Model.ts";
import { Recognizer } from "./Recognizer.ts";
import { BaseRecognizerParam } from "./types.ts";

/**
 * Client to interact with Vosk API.
 */
export default class Vosk {
  client: ReturnType<typeof loadlibvosk>;

  /**
   * Create a Vosk API client.
   *
   * @param [voskPath="./libvosk/libvosk.so"] The path to the shared library
   * for Vosk.
   */
  constructor(public voskPath: string = "./libvosk/libvosk.so") {
    this.client = loadlibvosk(voskPath);
    this.loadRecognizer = this.loadRecognizer.bind(this);
  }

  /**
   * Get libvosk interactive symbols.
   */
  get call() {
    return this.client;
  }

  /**
   * Set log level for Kaldi messages
   * @param {number} level The higher, the more verbose. 0 for infos and errors. Less than 0 for silence.
   */
  setLogLevel(level: number) {
    this.call.set_log_level(level);
  }

  /**
   * Load a model from a model folder.
   *
   * @param {string} modelPath The path to the model.
   */
  loadModel(modelPath: string) {
    return new Model(this, modelPath);
  }

  /**
   * Load a speaker model from a model folder.
   *
   * @param {string} modelPath The path to the model.
   */
  loadSpeakerModel(modelPath: string) {
    return new SpeakerModel(this, modelPath);
  }

  /**
   * Create a Recognizer that will be able to transform audio streams into text using a Model.
   *
   * @param {Model} model The model to use for the recognizer.
   * @param sampleRate The sample rate of the audio stream.
   */
  loadRecognizer(
    model: string,
    sampleRate: number,
  ): Recognizer<BaseRecognizerParam>;
  loadRecognizer(
    model: Model,
    sampleRate: number,
  ): Recognizer<BaseRecognizerParam>;
  loadRecognizer(
    model: string | Model,
    sampleRate: number,
  ): Recognizer<BaseRecognizerParam> {
    if (typeof model === "string") {
      console.log("Loading model from path", model);
      model = this.loadModel(model);
    }
    return new Recognizer(this, { model, sampleRate });
  }

  /**
   * Close the Vosk API client.
   */
  close() {
    this.client.$$close();
  }
}
