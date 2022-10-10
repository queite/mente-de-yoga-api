import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  static async create(req: Request, res:Response) {
    const createdUser = await UserService.create(req.body);
    return res.status(201).json(createdUser);
  }
}
