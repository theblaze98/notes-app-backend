import UserModel from '@/models/User';

const getUserService = async ({ id, email, username }) => {
  return await UserModel.findOne({ id, email, username });
};

export default getUserService;
