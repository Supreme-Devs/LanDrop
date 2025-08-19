import { server } from "./index.ts";
import { Server } from "socket.io";
import { Devices } from "./dns/dns.ts";
import { serverStarted } from "./index.ts";

const startSockerServer = async () => {
  await serverStarted();

  const io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN, // or your frontend URL
      methods: ["GET", "POST"],
    },
  });

  //socket connection setup
  io.on("connection", (socket) => {
    console.log("socket is connected");

    socket.emit("devices:", Devices);
  });

  io.on("error", (error) => {
    console.log(error);
  });
};

startSockerServer();
