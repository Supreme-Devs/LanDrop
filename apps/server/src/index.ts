import { Server } from "socket.io";
import { createServer } from "node:http";
import { app } from "./app.ts";

const server = createServer(app);
const io = new Server(server);

// app listening
try {
  //socket connection setup
  io.on("connection", (socket) => {
    console.log("socket is connected");
    socket.emit("hello world");
  });

  server.listen(process.env.PORT, () => {
    console.log(`App is listening on the port : ${process.env.PORT}`);
  });
} catch (error) {
  console.log(`Error : ${error}`);
}
