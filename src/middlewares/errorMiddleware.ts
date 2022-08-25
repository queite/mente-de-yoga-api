import { Request, Response } from 'express';
import HttpException from './httpException';

const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
) => {
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default errorMiddleware;