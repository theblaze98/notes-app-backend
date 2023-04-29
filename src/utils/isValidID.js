import { Types } from 'mongoose';

const isValidID = (id) => {
  return Types.ObjectId(id);
};

export default isValidID;
