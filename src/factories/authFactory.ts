import AuthController from '../controllers/authController';
import SequelizeAuthRepository from '../repositories/SequelizeAuthRepository';
import AuthService from '../services/authService';

export default class AuthFactory {
  static make() {
    const repository = new SequelizeAuthRepository();
    const service = new AuthService(repository);
    const controller = new AuthController(service);

    return controller;
  }
}