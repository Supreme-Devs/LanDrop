import { io } from "socket.io-client";

const socket = io("http://localhost:9000")

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
});

socket.on("hello world", () => {
  console.log("Received from server: hello world");
});