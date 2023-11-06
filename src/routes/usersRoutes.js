import { Router } from 'express';
import { signup, login, isAutenticated, getUserData } from '../controllers/userContoller.js'
const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/auth', isAutenticated);
router.post('/getuserdata', getUserData);

export default router;
