import UserModel from '../models/User';

const createUserService = async ({ username, email, password }) => {
  const newUser = new UserModel({
    email,
    password,
    username
  });

  await newUser.save();
};

export default createUserService;
