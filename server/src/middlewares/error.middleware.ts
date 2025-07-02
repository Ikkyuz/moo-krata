import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  statusCode?: number;
  data?: any;
}

export const errorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('API Error:', err);
  console.error('Error Status Code:', err.statusCode);
  console.error('Error Message:', err.message);
  if (err.stack) {
    console.error('Error Stack:', err.stack);
  }

  const statusCode = err.statusCode || 500;

  const responseBody: { message: string; data?: any } = {
    message: err.message || 'An unexpected error occurred',
  };

  if (err.data) {
    responseBody.data = err.data;
  }

  res.status(statusCode).json(responseBody);
};