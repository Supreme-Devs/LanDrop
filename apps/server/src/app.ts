import express, { urlencoded } from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errormiddleware.ts";

const app = express();

//cors setup
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//let you send 
app.use(
  express.json({
    limit: "100kb",
  })
);

// let you send complex data into the url too
app.use(
  urlencoded({
    limit: "100kb",
    extended: true,
  })
);

app.use(express.static("./public/temp"));

app.use(errorMiddleware)
export { app };
