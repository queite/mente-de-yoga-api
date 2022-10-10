type UserType = 'admin' | 'student';

export interface ILogin {
  email: string
  password: string
}

export default interface IUser extends ILogin {
  id: number
  name: string
  role: UserType
}

export interface IJwt {
  id: number
  email: string
  role: UserType
}