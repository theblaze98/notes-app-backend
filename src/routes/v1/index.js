import { Router } from 'express';
import dotenv from 'dotenv';
import authRoutes from './auth/index.js';
import userRoutes from './user/index.js';
import noteRoutes from './notes/index.js';
dotenv.config();

const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/note', noteRoutes);

export default router;
