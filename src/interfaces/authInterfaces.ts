export interface ILogin {
  email: string
  password: string
}

export interface IJwt {
  id: number;
  email: string;
  userPermission: 'admin' | 'student';
}

export default interface IUser extends ILogin {
  id: number;
  name: string;
  userPermission: 'admin' | 'student';
}
