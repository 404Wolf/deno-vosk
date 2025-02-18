export const libvosk_SYMBOLS = {
  model_new: {
    name: "vosk_model_new",
    parameters: ["pointer"],
    result: "pointer"
  },
  model_free: {
    name: "vosk_model_free",
    parameters: ["pointer"],
    result: "void"
  },
  model_find_word: {
    name: "vosk_model_find_word",
    parameters: ["pointer", "pointer"],
    result: "i32"
  },
  spk_model_new: {
    name: "vosk_spk_model_new",
    parameters: ["pointer"],
    result: "pointer"
  },
  spk_model_free: {
    name: "vosk_spk_model_free",
    parameters: ["pointer"],
    result: "void"
  },
  recognizer_new: {
    name: "vosk_recognizer_new",
    parameters: ["pointer", "f64"],
    result: "pointer"
  },
  recognizer_new_spk: {
    name: "vosk_recognizer_new_spk",
    parameters: ["pointer", "f64", "pointer"],
    result: "pointer"
  },
  recognizer_new_grm: {
    name: "vosk_recognizer_new_grm",
    parameters: ["pointer", "f64", "pointer"],
    result: "pointer"
  },
  recognizer_set_spk_model: {
    name: "vosk_recognizer_set_spk_model",
    parameters: ["pointer", "pointer"],
    result: "void"
  },
  recognizer_set_grm: {
    name: "vosk_recognizer_set_grm",
    parameters: ["pointer", "pointer"],
    result: "void"
  },
  recognizer_set_max_alternatives: {
    name: "vosk_recognizer_set_max_alternatives",
    parameters: ["pointer", "i32"],
    result: "void"
  },
  recognizer_set_words: {
    name: "vosk_recognizer_set_words",
    parameters: ["pointer", "i32"],
    result: "void"
  },
  recognizer_set_partial_words: {
    name: "vosk_recognizer_set_partial_words",
    parameters: ["pointer", "i32"],
    result: "void"
  },
  recognizer_set_nlsml: {
    name: "vosk_recognizer_set_nlsml",
    parameters: ["pointer", "i32"],
    result: "void"
  },
  recognizer_set_endpointer_mode: {
    name: "vosk_recognizer_set_endpointer_mode",
    parameters: ["pointer", "i32"],
    result: "void"
  },
  recognizer_set_endpointer_delays: {
    name: "vosk_recognizer_set_endpointer_delays",
    parameters: ["pointer", "f64", "f64", "f64"],
    result: "void"
  },
  recognizer_accept_waveform: {
    name: "vosk_recognizer_accept_waveform",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32"
  },
  recognizer_accept_waveform_s: {
    name: "vosk_recognizer_accept_waveform_s",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32"
  },
  recognizer_accept_waveform_f: {
    name: "vosk_recognizer_accept_waveform_f",
    parameters: ["pointer", "pointer", "i32"],
    result: "i32"
  },
  recognizer_result: {
    name: "vosk_recognizer_result",
    parameters: ["pointer"],
    result: "pointer"
  },
  recognizer_partial_result: {
    name: "vosk_recognizer_partial_result",
    parameters: ["pointer"],
    result: "pointer"
  },
  recognizer_final_result: {
    name: "vosk_recognizer_final_result",
    parameters: ["pointer"],
    result: "pointer"
  },
  recognizer_reset: {
    name: "vosk_recognizer_reset",
    parameters: ["pointer"],
    result: "void"
  },
  recognizer_free: {
    name: "vosk_recognizer_free",
    parameters: ["pointer"],
    result: "void"
  },
  set_log_level: {
    name: "vosk_set_log_level",
    parameters: ["i32"],
    result: "void"
  },
  gpu_init: {
    name: "vosk_gpu_init",
    parameters: [],
    result: "void"
  },
  gpu_thread_init: {
    name: "vosk_gpu_thread_init",
    parameters: [],
    result: "void"
  },
  batch_model_new: {
    name: "vosk_batch_model_new",
    parameters: ["pointer"],
    result: "pointer"
  },
  batch_model_free: {
    name: "vosk_batch_model_free",
    parameters: ["pointer"],
    result: "void"
  },
  batch_model_wait: {
    name: "vosk_batch_model_wait",
    parameters: ["pointer"],
    result: "void"
  },
  batch_recognizer_new: {
    name: "vosk_batch_recognizer_new",
    parameters: ["pointer", "f64"],
    result: "pointer"
  },
  batch_recognizer_free: {
    name: "vosk_batch_recognizer_free",
    parameters: ["pointer"],
    result: "void"
  },
  batch_recognizer_accept_waveform: {
    name: "vosk_batch_recognizer_accept_waveform",
    parameters: ["pointer", "pointer", "i32"],
    result: "void"
  },
  batch_recognizer_set_nlsml: {
    name: "vosk_batch_recognizer_set_nlsml",
    parameters: ["pointer", "i32"],
    result: "void"
  },
  batch_recognizer_finish_stream: {
    name: "vosk_batch_recognizer_finish_stream",
    parameters: ["pointer"],
    result: "void"
  },
  batch_recognizer_front_result: {
    name: "vosk_batch_recognizer_front_result",
    parameters: ["pointer"],
    result: "pointer"
  },
  batch_recognizer_pop: {
    name: "vosk_batch_recognizer_pop",
    parameters: ["pointer"],
    result: "void"
  },
  batch_recognizer_get_pending_chunks: {
    name: "vosk_batch_recognizer_get_pending_chunks",
    parameters: ["pointer"],
    result: "i32"
  },
  text_processor_new: {
    name: "vosk_text_processor_new",
    parameters: ["pointer", "pointer"],
    result: "pointer"
  },
  text_processor_free: {
    name: "vosk_text_processor_free",
    parameters: ["pointer"],
    result: "void"
  },
  text_processor_itn: {
    name: "vosk_text_processor_itn",
    parameters: ["pointer", "pointer"],
    result: "pointer"
  }
} as const;
