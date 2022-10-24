import User from '../database/models/User';
import IUser from '../interfaces/userInterfaces';
import { IUserRepository } from '../interfaces/userRepository';

type UserType = {
  name: string;
  userPermission: 'admin' | 'student';
  email: string;
  password: string;
};

export default class SequelizeUserRepository implements IUserRepository {
  create = async (user: UserType): Promise<IUser> => {
    const createdUser = await User.create(user);
    return createdUser;
  };
}