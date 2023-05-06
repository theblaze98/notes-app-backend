import { getUserService } from '../../services/index.js';

const getUserController = async (req, res) => {
  const { id } = req.query;
  const userDB = await getUserService({ id });
  res.status(200).json({
    username: userDB.username,
    email: userDB.email,
    id: userDB._id
  });
};

export default getUserController;
