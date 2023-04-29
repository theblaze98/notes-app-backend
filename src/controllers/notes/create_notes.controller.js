import { createNoteService } from '../../services.js';

const createNotesController = async (req, res) => {
  const { title, description } = req.body;
  await createNoteService({ title, description, userID: req.userID });
  res.status(201).json({ message: 'Note created successfully' });
};

export default createNotesController;
