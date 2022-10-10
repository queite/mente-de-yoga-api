// https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-request
import { IJwt } from '../interfaces/userInterfaces';

export {};

declare global {
  namespace Express {
    interface Request {
      user?: IJwt;
    }
  }
}
