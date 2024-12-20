import Vosk from "vosk";

const modelPath = "path/to/your/vosk-model";

async function setupRecognizer() {
  Vosk.setLogLevel(0);
  const model = await Vosk.loadModel(modelPath);
  const recognizer = new Vosk.Recognizer({ model });
  recognizer.setMaxAlternatives(0);
  recognizer.setWords(true);
  return recognizer;
}

console.log("WebSocket server running");

Deno.serve((req) => {
  if (req.headers.get("upgrade") === "websocket") {
    const { socket, response } = Deno.upgradeWebSocket(req);

    socket.onopen = async () => {
      console.log("WebSocket connection established");
      const recognizer = await setupRecognizer();

      socket.onmessage = (event) => {
        if (event.data instanceof ArrayBuffer) {
          const audioData = new Uint8Array(event.data);
          if (recognizer.acceptWaveform(audioData)) {
            const result = recognizer.result();
            socket.send(JSON.stringify(result));
          }
        }
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed");
        const finalResult = recognizer.finalResult();
        socket.send(JSON.stringify(finalResult));
        recognizer.free();
      };

      socket.onerror = (err) => {
        console.error("WebSocket error:", err);
      };
    };

    return response;
  } else {
    return new Response("WebSocket endpoint only", { status: 400 });
  }
});
