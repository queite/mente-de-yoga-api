import UserController from '../controllers/userController';
import SequelizeUserRepository from '../repositories/SequelizeUserRepository';
import UserService from '../services/userService';

export default class UserFactory {
  static make() {
    const repository = new SequelizeUserRepository();
    const service = new UserService(repository);
    const controller = new UserController(service);

    return controller;
  }
}