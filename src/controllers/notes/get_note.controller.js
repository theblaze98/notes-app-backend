import { BadRequestError } from '../../errors/index.js';
import { getNoteService } from '../../services/index.js';

const getNoteController = async (req, res) => {
  const { id } = req.query;
  const noteDB = await getNoteService({ id, active: true }).populate({
    path: 'createdBy',
    select: 'username email _id'
  });
  if (!noteDB) {
    throw new BadRequestError('Note not found');
  }
  res.status(200).json({
    description: noteDB.description,
    title: noteDB.title,
    createdBy: {
      username: noteDB.createdBy.username,
      email: noteDB.createdBy.email,
      id: noteDB.createdBy._id
    },
    createdAt: noteDB.createdAt,
    updatedAt: noteDB.updatedAt
  });
};

export default getNoteController;
