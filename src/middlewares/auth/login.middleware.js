import { loginRequestValidation } from '../../validations/input/index.js';
import { ZodError } from 'zod';

const loginMiddleware = (req, res, next) => {
  try {
    loginRequestValidation(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: error.message
      });
    }
  }
};

export default loginMiddleware;
