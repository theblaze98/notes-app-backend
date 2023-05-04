import { createNoteService } from '../../services/index.js';

const createNoteController = async (req, res) => {
  const { title, description } = req.body;
  const note = await createNoteService({
    title,
    description,
    userID: req.userID
  });
  res.status(201).json(note);
};

export default createNoteController;
