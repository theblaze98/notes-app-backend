import UserModel from '../models/User.js';

const deleteNoteService = async (noteId) => {
  const resp = await UserModel.findOneAndUpdate(
    { _id: noteId },
    { active: false }
  );
  return resp;
};

export default deleteNoteService;
