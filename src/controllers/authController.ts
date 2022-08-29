import { Request, Response } from 'express';
import HttpException from '../errors/httpException';
import AuthService from '../services/authService';
import JwtService from '../services/jwtService';

export default class AuthController {
  static async Login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new HttpException(400, 'All fields must be filled');
    }

    const user = await AuthService.login(req.body);
    if (!user) throw new HttpException(401, 'Incorrect email or password');

    const token = JwtService.sign(user.email);
    return res.status(200).json({ token });
  }
}