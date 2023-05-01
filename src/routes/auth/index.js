import {
  loginController,
  signupController
} from '../../controllers/auth/index.js';
import {
  loginMiddleware,
  signupMiddleware
} from '../../middlewares/auth/index.js';
import { Router } from 'express';
import controllerErrorBoundaries from '../../controllers/controller_error_boundaries_handler.js';

const router = Router();

router.post(
  '/signup',
  [signupMiddleware],
  controllerErrorBoundaries(signupController)
);
router.post(
  '/login',
  [loginMiddleware],
  controllerErrorBoundaries(loginController)
);

export default router;
