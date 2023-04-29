import { createNoteValidator } from '../../validations/input';
import { ZodError } from 'zod';

const createNoteMiddleware = (req, res, next) => {
  try {
    createNoteValidator(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(401).json({ message: error.message });
    }
  }
};
export default createNoteMiddleware;
