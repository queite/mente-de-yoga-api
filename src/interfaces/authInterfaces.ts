export interface ILogin {
  email: string
  password: string
}

export default interface IUser extends ILogin{
  id: number;
  name: string;
  userPermission: 'admin' | 'student';
}