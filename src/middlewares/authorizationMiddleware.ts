import { NextFunction, Request, Response } from 'express';
import HttpException from '../errors/httpException';

function authorizationMiddleware(
  req: Request,
  _res: Response,
  next:NextFunction,
) {
  const { user } = req;

  if (user?.userPermission !== 'admin') {
    throw new HttpException(401, 'Unauthorized');
  }

  next();
}

export default authorizationMiddleware;