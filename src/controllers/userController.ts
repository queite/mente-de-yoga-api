import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  constructor(private userService: UserService) {}

  async create(req: Request, res:Response) {
    const createdUser = await this.userService.create(req.body);
    return res.status(201).json(createdUser);
  }
}
