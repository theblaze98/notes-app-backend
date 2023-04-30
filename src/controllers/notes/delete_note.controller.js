import { deleteNoteService } from '../../services/index.js';

const deleteNoteController = async (req, res) => {
  const { id } = req.query;
  await deleteNoteService(id);
  return res.status(200).json({ message: 'Note deleted successfully' });
};

export default deleteNoteController;
