import { io } from "socket.io-client";

const socket = io("http://localhost:9000");

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
});

socket.on("devices", (devices) => {
  console.log("devices :", devices);
});

socket.on("connect_error", (err) => {
  console.error("❌ Connection error:", err.message);
});
