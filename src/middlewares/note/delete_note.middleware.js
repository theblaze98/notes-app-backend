import { BadRequestError } from '../../errors/index.js';
import isValidID from '../../utils/isValidID.js';

const deleteNoteMiddleware = (req, res, next) => {
  try {
    if (!isValidID(req.query.id)) {
      throw new BadRequestError('Invalid ID');
    }
    next();
  } catch (error) {
    if (error instanceof BadRequestError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
  }
};

export default deleteNoteMiddleware;
