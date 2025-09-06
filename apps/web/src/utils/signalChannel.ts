import { io, Socket } from "socket.io-client";

export class messanger {
  private socket: Socket;

  constructor(connectionUrl: string) {
    this.socket = io(connectionUrl, {
      transports: ["websocket"],
    });
  }

  // manual connector
  connect() {
    this.socket.connect();
    return " socket is connected";
  }

  disconnect() {
    this.socket.disconnect();
    return "socket is disconnected";
  }
  //  emit event
}

const messangerService = new messanger("http://localhost:9000");

export { messangerService };
