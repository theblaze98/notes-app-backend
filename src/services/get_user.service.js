import UserModel from '../models/User.js';

const getUserService = async ({ id, email, username }, { operator }) => {
  if (operator === 'OR') {
    return await UserModel.findOne({ $or: [{ email, username }] });
  }
  return await UserModel.findOne({ _id: id, email, username });
};

export default getUserService;
