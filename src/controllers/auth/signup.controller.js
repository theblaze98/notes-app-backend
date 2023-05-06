import { BadRequestError } from '../../errors/index.js';
import { createUserService, getUserService } from '../../services/index.js';
import { encryptPassword } from '../../utils/password_utilities.js';

const signupController = async (req, res) => {
  const { username, email, password } = req.body;
  const userDB = await getUserService({ email, username }, { operator: 'OR' });
  if (userDB) {
    throw new BadRequestError('Email or Username not available');
  }
  const hashedPassword = await encryptPassword(password);
  await createUserService({ username, email, password: hashedPassword });
  return res.status(201).json({ message: 'User added successfully' });
};

export default signupController;
