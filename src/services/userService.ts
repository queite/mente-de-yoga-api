import User from '../database/models/User';
import IUser from '../interfaces/userInterfaces';

type UserType = {
  name: string;
  userPermission: 'admin' | 'student';
  email: string;
  password: string;
};

export default class UserService {
  static async create(user: UserType): Promise<IUser> {
    const createdUser = await User.create(user);
    return createdUser;
  }
}