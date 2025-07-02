import { Router } from 'express';
import * as authController from '../controllers/auth.controller';

const router = Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/', authController.getUser);
router.get('/:id', authController.getUserById);

export default router;