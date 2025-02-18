import Vosk from "vosk";
// import "@std/dotenv/load";

const VOSK_MODEL_PATH = "model";
const SAMPLE_RATE = 16000;

// Initialize Vosk
const vosk = new Vosk("../vosk/libvosk/input/libvosk.so");
vosk.setLogLevel(2);
console.log("Vosk initialized");

// Load the model
const model = vosk.loadModel(VOSK_MODEL_PATH);
console.log("Model loaded");

// Create a recognizer
const recognizer = vosk.loadRecognizer(model, SAMPLE_RATE);
console.log("Recognizer loaded");

// Read the audio file
const audioFile = await Deno.readFile("test.wav");
console.log("Audio file read");

// Process the audio file
const data = new Int16Array(audioFile);
console.log("Data length:", data.length);
console.log("Data:", data);
recognizer.acceptWaveform(data);
console.log("Audio file processed");

// Get the final result
const result = recognizer.finalResult();
console.log("Transcription:", result.text);

// Free resources
recognizer.free();
vosk.close();
