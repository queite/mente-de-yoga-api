import { compareSync } from 'bcrypt';
import HttpException from '../errors/httpException';
import { IAuthRepository } from '../interfaces/authRepository';
import IUser, { ILogin } from '../interfaces/userInterfaces';

export default class AuthService {
  constructor(private authService: IAuthRepository) {}

  async login(login: ILogin): Promise<IUser | void> {
    const user = await this.authService.login(login);

    if (!user) throw new HttpException(401, 'Incorrect email or password');

    const checkPassword = compareSync(login.password, user.password);

    if (!checkPassword) {
      throw new HttpException(401, 'Incorrect email or password');
    }

    return user;
  }
}