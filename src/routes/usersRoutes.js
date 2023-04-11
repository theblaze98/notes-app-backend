import { Router } from 'express';
import { signup, login } from '../controllers/userContoller.js'
import User from '../models/User.js'
const router = Router();


router.get('/', async (req, res) => {
    const users = await User.find();

    res.status(200).json(users);
});

router.post('/signup', signup);
router.post('/login', login);

export default router;
