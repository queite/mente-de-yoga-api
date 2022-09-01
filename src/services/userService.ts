import User from '../database/models/User';
import IUser from '../interfaces/authInterfaces';

type UserType = {
  name: string;
  userPermission: 'admin' | 'student';
  email: string;
  password: string;
};

export default class UserService {
  static async create(user: UserType): Promise<IUser> {
    const createUser = await User.create(user);
    return createUser;
  }
}