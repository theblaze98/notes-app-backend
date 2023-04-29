import NoteModel from '../models/Note.js';

const createNoteService = async ({ title, description, userID }) => {
  const newNotes = new NoteModel({ title, description, createdBy: userID });
  await newNotes().save();
};

export default createNoteService;
