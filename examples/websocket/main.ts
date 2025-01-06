import Vosk from "vosk";

const VOSK_MODEL_PATH = Deno.env.get("VOSK_MODEL_PATH");
if (!VOSK_MODEL_PATH) {
  throw new Error("VOSK_MODEL_PATH is not set");
}
const SAMPLE_RATE = 16000;

const vosk = new Vosk(Deno.env.get("VOSKLIB_PATH")!);
vosk.setLogLevel(3);

const recognizer = vosk.loadRecognizer(VOSK_MODEL_PATH, SAMPLE_RATE);

Deno.serve({
  port: 8080,
  handler: (request) => {
    if (request.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(request);
      console.log("Connected to websocket");

      socket.onmessage = (event: MessageEvent<ArrayBuffer>) => {
        const message = event.data;
        const accepted = recognizer.acceptWaveform(new Uint8Array(message));

        if (accepted) {
          const result = recognizer.result();
          socket.send(JSON.stringify(result));
        } else {
          const partialResult = recognizer.partialResult();
          socket.send(JSON.stringify(partialResult));
        }
      };

      socket.onclose = () => {
        recognizer.reset();
      };

      return response;
    } else {
      return Response.json({ "error": "Not a websocket request" }, {
        status: 400,
      });
    }
  },
});
