import { NextFunction, Request, Response } from 'express';
import HttpException from '../errors/httpException';

function authorizationMiddleware(
  req: Request,
  res: Response,
  next:NextFunction,
) {
  const { userInfo } = req;

  if (userInfo.userPermission !== 'admin') {
    throw new HttpException(401, 'Unauthorized');
  }

  next();
}

export default authorizationMiddleware;