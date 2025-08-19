import { asyncHandler } from "../utils/asyncHandler.ts";
import { ApiError } from "../utils/apiError.ts";
import { ApiResponse } from "../utils/apiResponse";
import type { Request, Response } from "express";

// controller for list the devices that are on the network
const listDevices = asyncHandler(async (req: Request, res: Response) => {
  //list bring the data from the mdns and list the devices
});

export { listDevices };
