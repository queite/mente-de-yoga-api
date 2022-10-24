import { Router } from 'express';
import UserFactory from '../factories/userFactory';

const router = Router();

const userController = UserFactory.make();

router.post('/', (req, res) => userController.create(req, res));

export default router;