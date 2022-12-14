import { sign, verify } from 'jsonwebtoken';
import 'dotenv/config';
import { IJwt } from '../interfaces/userInterfaces';

const secret = process.env.JWT_SECRET || 'anyString';

export default class JwtService {
  static sign(payload: IJwt): string {
    return sign(payload, secret);
  }

  static verify(token: string): IJwt {
    return verify(token, secret) as IJwt;
  }
}