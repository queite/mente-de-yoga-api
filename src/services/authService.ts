import { compareSync } from 'bcrypt';
import User from '../database/models/User';
import HttpException from '../errors/httpException';
import IUser, { ILogin } from '../interfaces/userInterfaces';

export default class AuthService {
  static async login(login: ILogin): Promise<IUser | void> {
    const user = await User.findOne({ where: { email: login.email } });

    if (!user) throw new HttpException(401, 'Incorrect email or password');

    const checkPassword = compareSync(login.password, user.password);

    if (!checkPassword) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    return user;
  }
}