import { JwtPayload, sign, verify } from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'anyString';

export default class JwtService {
  static sign(payload: string): string {
    return sign(payload, secret);
  }

  static verify(token: string): JwtPayload | string {
    return verify(token, secret);
  }
}