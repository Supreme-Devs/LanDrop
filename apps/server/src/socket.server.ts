import { server } from "./index.ts";
import { Server } from "socket.io";
import { Devices } from "./dns/dns.ts";
import { serverStarted } from "./index.ts";

const io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN, // or your frontend URL
      methods: ["GET", "POST"]
    }
  });

//socket connection setup
serverStarted().then(() => {
  io.on("connection", (socket) => {
    console.log("socket is connected");

    socket.emit("devices:", Devices);
  });
});
