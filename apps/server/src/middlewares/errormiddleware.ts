import type { Request, Response, NextFunction  } from "express";

const errorMiddleware = (err: any, req : Request, res:Response , next: NextFunction) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: err.success ?? false,
    message: err.message || "Internal Server Error",
    error: err.error || [],
    data: err.data || null,
  });
};

export { errorMiddleware };