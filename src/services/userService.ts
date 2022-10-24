import IUser from '../interfaces/userInterfaces';
import { IUserRepository } from '../interfaces/userRepository';

export default class UserService {
  constructor(private repo: IUserRepository) {}

  async create(user: IUser): Promise<IUser | null> {
    return this.repo.create(user);
  }
}