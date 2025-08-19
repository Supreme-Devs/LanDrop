import { createServer } from "node:http";
import { rejects } from "node:assert";
import { app } from "./app";
const server = createServer(app);

// app listening
const serverStarted = () => {
  return new Promise<void>((resolve, reject) => {
    server.listen(process.env.PORT, () => {
      console.log(`App is listening on the port : ${process.env.PORT}`);
    });
    resolve();
  });
};
serverStarted();

export { server, serverStarted };
