import IUser, { ILogin } from './userInterfaces';

export interface IAuthRepository {
  login(login: ILogin): Promise<IUser | null>
}