import { loginController, signupController } from '@/controllers/auth';
import { loginMiddleware, signupMiddleware } from '@/middlewares/auth';
import { Router } from 'express';

const router = Router();

router.post('/signup', [signupMiddleware], signupController);
router.post('/login', [loginMiddleware], loginController);

export default router;
