import { Router } from 'express';
import { signup, login, isAutenticated } from '../controllers/userContoller.js'
import User from '../models/User.js'
const router = Router();


router.get('/', async (req, res) => {
    const users = await User.find();

    res.status(200).json(users);
});

router.post('/signup', signup);
router.post('/login', login);
router.post('/auth', isAutenticated);

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    await User.findByIdAndDelete(id);

    const users = await User.find();

    res.json(users);
});

export default router;
