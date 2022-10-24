import User from '../database/models/User';
import { IAuthRepository } from '../interfaces/authRepository';
import IUser, { ILogin } from '../interfaces/userInterfaces';

export default class SequelizeAuthRepository implements IAuthRepository {
  login = async (login: ILogin): Promise<IUser | null> => {
    const user = await User.findOne({ where: { email: login.email } });
    return user;
  };
}