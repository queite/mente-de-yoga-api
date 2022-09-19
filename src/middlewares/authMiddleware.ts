import { NextFunction, Request, Response } from 'express';
import JwtService from '../services/jwtService';

const authMiddleware = (
  // _err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) res.status(401).json({ message: 'Token not found' });

  const userInfo = JwtService.verify(authorization as string);
  if (!userInfo) res.status(401).json({ message: 'Invalid token' });
  req.user = userInfo;

  next();
};

export default authMiddleware;