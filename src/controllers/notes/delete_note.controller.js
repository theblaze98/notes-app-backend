import { deleteNoteService } from '../../services/index.js';

const deleteNoteController = async (req, res) => {
  const { id } = req.query;
  const noteDB = await deleteNoteService(id);
  return res
    .status(200)
    .json({
      description: noteDB.description,
      id: noteDB._id,
      title: noteDB.title
    });
};

export default deleteNoteController;
