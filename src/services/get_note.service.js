import NoteModel from '../models/Note.js';

const getNoteService = ({ id, active }) => {
  return NoteModel.findOne({ _id: id, active }).lean();
};

export default getNoteService;
