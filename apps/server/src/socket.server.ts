import { server } from "./index.ts";
import { Server } from "socket.io";
import { listofDevices } from "./dns/dns.ts";


// Problem: socket.io server created but http not listen
const startSockerServer = () => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN, // or your frontend URL
      methods: ["GET", "POST"],
    },
  });

  //socket connection setup
  io.on("message", (socket) => {

    socket.on("chat message", (msg: string)=>{
      console.log("message :" + msg)
    })

    socket.emit("message", "hi there"); // fix: devices: to devices
  });
};

export { startSockerServer };













/*
import {server, serverStarted } from "./index. ts";
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
