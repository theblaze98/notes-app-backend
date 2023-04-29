import { signupController } from '@/controllers/auth';
import { signupMiddleware } from '@/middlewares/auth';
import { Router } from 'express';

const router = Router();

router.post('/auth/signup', [signupMiddleware], signupController);

export default router;
