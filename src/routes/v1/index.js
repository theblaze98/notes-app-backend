import { Router } from 'express';
import authRoutes from './auth/index.js';
import userRoutes from './user/index.js';
import noteRoutes from './notes/index.js';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
import { swaggerOpts } from '../../config/swagger_options.js';
import * as url from 'url';

// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

console.log(__dirname);

dotenv.config();
const router = new Router();

router.use('/doc', swaggerUI.serve);
router.get('/doc', swaggerUI.setup(swaggerJsDoc(swaggerOpts(__dirname))));

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/note', noteRoutes);

export default router;
