import { createNoteService } from '../../services/index.js';

const createNoteController = async (req, res) => {
  const { title, description } = req.body;
  await createNoteService({ title, description, userID: req.userID });
  res.status(201).json({ message: 'Note created successfully' });
};

export default createNoteController;
