import NoteModel from '../models/Note.js';

const deleteNoteService = async (noteId) => {
  const resp = await NoteModel.findOneAndUpdate(
    { _id: noteId },
    { active: false }
  );
  return resp;
};

export default deleteNoteService;
