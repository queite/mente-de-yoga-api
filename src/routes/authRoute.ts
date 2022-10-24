import { Router } from 'express';
import AuthFactory from '../factories/authFactory';

const router = Router();

const authController = AuthFactory.make();

router.post('/', (req, res) => authController.Login(req, res));

export default router;