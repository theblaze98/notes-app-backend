import { BadRequestError } from '../../errors';
import { getNoteService } from '../../services';

const getNoteController = async (req, res) => {
  const { id } = req.query;
  const noteDB = await getNoteService(id);
  if (!noteDB) {
    throw new BadRequestError('Note not found');
  }
  res.status(200).json(noteDB);
};

export default getNoteController;
