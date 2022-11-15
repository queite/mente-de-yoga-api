import { Router } from 'express';
import UserFactory from '../factories/userFactory';
import authenticationMiddleware from '../middlewares/authenticationMiddleware';
import authorizationMiddleware from '../middlewares/authorizationMiddleware';

const router = Router();

const userController = UserFactory.make();

router.post(
  '/',
  authenticationMiddleware,
  authorizationMiddleware,
  (req, res) => userController.create(req, res),
);

export default router;