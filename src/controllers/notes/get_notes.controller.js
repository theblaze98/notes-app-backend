import { getNotesService } from '../../services/index.js';

const getNotesController = (req, res) => {
  const { page } = req.params;
  const notes = getNotesService(page);
  return res.status(200).json(notes);
};

export default getNotesController;
