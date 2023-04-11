import { Router } from 'express';
import { signup } from '../controllers/userContoller.js'
import User from '../models/User.js'
const router = Router();


router.get('/', (req, res) => {
    res.status(200).json({status: 'hi'});
});

router.post('/signup', signup);

export default router;
