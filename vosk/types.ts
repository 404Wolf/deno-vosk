import type { Model, SpeakerModel } from "./Model.ts";

export type WordResult = {
  conf: number;
  start: number;
  end: number;
  word: string;
};

export type RecognitionResults = {
  result: WordResult[];
  text: string;
};

export type SpeakerResults = {
  spk: number[];
  spk_frames: number;
};

export type BaseRecognizerParam = {
  model: Model;
  sampleRate: number;
};

export type GrammarRecognizerParam = {
  grammar: string[];
};

export type SpeakerRecognizerParam = {
  speakerModel: SpeakerModel;
};

export type Result<T extends BaseRecognizerParam> = T extends
  SpeakerRecognizerParam ? SpeakerResults & RecognitionResults
  : RecognitionResults;

export type PartialResults = {
  partial: string;
};

export type Grammar = string[];

export function isSpeakerRecognizerParam(
  param: object,
): param is SpeakerRecognizerParam {
  return param && "speakerModel" in param;
}

export function isGrammarRecognizerParam(
  param: object,
): param is GrammarRecognizerParam {
  return param && "grammar" in param;
}
