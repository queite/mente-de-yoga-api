import { JwtPayload, sign, verify } from 'jsonwebtoken';
import 'dotenv/config';
import { IJwt } from '../interfaces/authInterfaces';

const secret = process.env.JWT_SECRET || 'anyString';

export default class JwtService {
  static sign(payload: IJwt): string {
    return sign(payload, secret);
  }

  static verify(token: string): JwtPayload | string {
    return verify(token, secret);
  }
}