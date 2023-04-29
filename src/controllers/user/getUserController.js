import { getUserService } from '../../services';

const getUserController = async (req, res) => {
  const userDB = await getUserService(req.user);
  res.status(200).json({
    username: userDB.username,
    email: userDB.email
  });
};

export default getUserController;
