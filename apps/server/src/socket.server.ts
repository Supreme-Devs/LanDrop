/*
import { server } from "./index.ts";
import { Server } from "socket.io";
import { Devices } from "./dns/dns.ts";
import { serverStarted } from "./index.ts";

const io = new Server(server, {   // Problem: socket.io server created but http not listen
    cors: {
      origin: process.env.CORS_ORIGIN, // or your frontend URL
      methods: ["GET", "POST"]
    }
  });

//socket connection setup
serverStarted().then(() => {
  io.on("connection", (socket) => {
    console.log("socket is connected");

    socket.emit("devices", Devices); // fix: devices: to devices
  });
});

*/

/*
import {server, serverStarted } from "./index.ts";
import {Server} from "socket.io";
import { Devices } from "./dns/dns.ts";

serverStarted().then(() => {
  
  const io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN, // or your frontend URL
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log(`socket connected: ${socket.id}`);
    socket.emit("devices", Devices) // Fixed devices: to devices
  
    socket.on("disconnet", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });

  console.log("Socket server is ready")
});
*/