import { Router } from 'express';
import { getUserController } from '../../controllers/user/index.js';
import { isAuthenticatedMiddleware } from '../../middlewares/user/index.js';

const router = Router();

router.get('/:id', [isAuthenticatedMiddleware], getUserController);

export default router;
