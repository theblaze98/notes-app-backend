import { UnauthorizedError } from '../../errors/index.js';
import { getUserService } from '../../services/index.js';
import { decryptPassword } from '../../utils/password_utilities.js';
import TokenUtilities from '../../utils/token_utilities.js';

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const userDB = await getUserService({ email });
  if (await decryptPassword(password, userDB.password)) {
    throw new UnauthorizedError('Invalid credentials');
  }

  const token = new TokenUtilities();

  const accessToken = token.sign(
    { id: userDB._id },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '10m'
    }
  );

  const refreshToken = token.sign(
    { id: userDB._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '24h' }
  );

  res.cookie('jwt', refreshToken, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true
  });

  res.status(200).json({
    user: {
      username: userDB.username,
      id: userDB._id,
      email: userDB.email
    },
    token: accessToken
  });
};

export default loginController;
