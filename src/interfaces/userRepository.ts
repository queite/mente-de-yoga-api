import IUser from './userInterfaces';

export interface IUserRepository {
  create(user: IUser): Promise<IUser | null>
}