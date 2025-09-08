import { server } from "./index.ts";
import { Server } from "socket.io";


const startSockerServer = () => {
  const io = new Server(server, {
    cors: {
      origin: process.env.CORS_ORIGIN, // or your frontend URL
      methods: ["GET", "POST"],
    },
  });

  //socket connection setup
  io.on("message", (socket) => {
    
    socket.on("chat message", (msg: string) => {
      console.log("message :" + msg);
    });

    socket.emit("message", "hi there"); // fix: devices: to devices
  });

  //creating custom namespaces
  const founder = io.of("/founder");
  founder.on("connection", (socket) => {
    console.log("connection established");

    socket.on("main_message", (message: any) => {
      console.log(message);
      if (message) {
        socket.emit("data found", "data found successfully");
      }
    });
  });
};

export { startSockerServer };


