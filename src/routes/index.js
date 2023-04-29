import { Router } from 'express';
import authRoutes from './auth/index.js';
import userRoutes from './user/index.js';
import noteRoutes from './notes/index.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/note', noteRoutes);

export default router;
