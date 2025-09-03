import { Router } from "express";
import { dataDecoder } from "../controllers/listDevices.controller";
const router = Router();

router.route("/dec").post(dataDecoder);

export { router };
