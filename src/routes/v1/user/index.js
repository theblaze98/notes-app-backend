import { Router } from 'express';
import { getUserController } from '../../../controllers/user/index.js';
import { isAuthenticatedMiddleware } from '../../../middlewares/user/index.js';
import controllerErrorBoundaries from '../../../controllers/controller_error_boundaries_handler.js';

const router = Router();

router.get(
  '/:id',
  [isAuthenticatedMiddleware],
  controllerErrorBoundaries(getUserController)
);

export default router;
