import { NextFunction, Request, Response } from 'express';
import HttpException from '../errors/httpException';
import JwtService from '../services/jwtService';

const authenticationMiddleware = (
  // _err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) throw new HttpException(401, 'Token not found');

  const userInfo = JwtService.verify(authorization as string);
  if (!userInfo) throw new HttpException(401, 'Invalid token');
  req.user = userInfo;

  next();
};

export default authenticationMiddleware;