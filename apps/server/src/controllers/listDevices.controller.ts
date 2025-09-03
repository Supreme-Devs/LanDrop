//make a express endpoint to decode the data
import express from "express";
import type { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import { serviceofDevices } from "../dns/dns";

//making a controller that decode
const dataDecoder = asyncHandler(async (req: Request, res: Response) => {
  const data: string = req.body;
  console.log(data)

  if (data == "start") {
    serviceofDevices.map((e) => {
      if (e.type == "TXT") {
        const rawTxt = e.data;

        // If it's an array of Buffers (as it sometimes is):
        const decoded = rawTxt.map((buf: Buffer) => buf.toString("utf8"));
        console.log("Decoded TXT Record:", decoded);
        res.send(decoded)
      }
    });
  }
});

export { dataDecoder };
