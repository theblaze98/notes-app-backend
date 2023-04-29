import bcrypt from 'bcryptjs';

export const encryptPassword = async (userPassword) => {
  return await bcrypt.hash(userPassword, 10);
};

export const decryptPassword = async (userPassword, dbPassword) => {
  return await bcrypt.compare(userPassword, dbPassword);
};
