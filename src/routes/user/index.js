import { Router } from 'express';
import { getUserController } from '../../controllers/user';
import isAuthenticatedMiddleware from '../../middlewares/user/isAuthenticated.middleware';

const router = Router();

router.get('/:id', [isAuthenticatedMiddleware], getUserController);

export default router;
