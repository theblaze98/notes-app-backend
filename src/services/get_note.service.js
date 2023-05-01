import NoteModel from '../models/Note.js';

const getNoteService = (noteId) => {
  return NoteModel.findById(noteId).lean();
};

export default getNoteService;
