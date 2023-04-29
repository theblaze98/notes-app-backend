import { BadRequestError } from '@/errors';
import { createUserService, getUserService } from '@/services';
import { encryptPassword } from '@/utils/password_utilities';

const signupController = async (req, res) => {
  const { username, email, password } = req.body;
  const userDB = await getUserService({ email, username }, { operator: 'OR' });
  if (userDB) {
    throw new BadRequestError('Email or Username not available');
  }
  const hashedPassword = encryptPassword(password);
  await createUserService({ username, email, hashedPassword });
  return res.status(201).json({ message: 'User added successfully' });
};

export default signupController;
