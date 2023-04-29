import {
  loginController,
  signupController
} from '../../controllers/auth/index.js';
import {
  loginMiddleware,
  signupMiddleware
} from '../../middlewares/auth/index.js';
import { Router } from 'express';

const router = Router();

router.post('/signup', [signupMiddleware], signupController);
router.post('/login', [loginMiddleware], loginController);

export default router;
