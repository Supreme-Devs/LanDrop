import { io, Socket } from "socket.io-client";

export class messanger {
  private socket: Socket;

  constructor(connectionUrl: string) {
    this.socket = io(connectionUrl, {
      transports: ["websocket"],
    });
    console.log("socket connected");
    this.socket.emit("hello", "klpd hello world");
  }

  // manual connector
  connect() {
    return { message: " socket is connected" };
  }

  disconnect() {
    this.socket.disconnect();
    return "socket is disconnected";
  }

  //  emit events
  shareVal(message: any) {
    return new Promise((resolve, reject) => {
      // call the particular endpoint
      const founderSocket = io("http://localhost:9000/founder", {
        transports: ["websocket"],
      });

      //  for sending the message
      founderSocket.emit("main_message", {
        message: message,
      });

      // for recieving the message
      founderSocket.on("main_message", (message) => {
        resolve(message);
      });

      //for error handling
      founderSocket.on("connect_error", (err) => {
        reject(err);
      });
    });
  }
}

const messangerService = new messanger("http://localhost:9000");

export { messangerService };
