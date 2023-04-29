import { Router } from 'express';
import authRoutes from './auth/index.js';
import userRoutes from './user/index.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

export default router;
