import bc from 'bcrypt';
import IUser from '../interfaces/userInterfaces';
import { IUserRepository } from '../interfaces/userRepository';

export default class UserService {
  constructor(private repo: IUserRepository) {}

  async create(user: IUser): Promise<IUser | null> {
    const newPassword = bc.hashSync(user.password, 3);
    console.log(newPassword);
    const newUser = {
      name: user.name,
      email: user.email,
      password: newPassword,
      userPermission: user.userPermission,
    };
    return this.repo.create(newUser as IUser);
  }
}