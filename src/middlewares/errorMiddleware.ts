import { NextFunction, Request, Response } from 'express';
import httpException from '../errors/httpException';

const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { status, message } = err as httpException;
  res.status(status || 500).json({ message });
  next();
};

export default errorMiddleware;