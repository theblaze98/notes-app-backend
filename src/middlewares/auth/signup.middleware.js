import { signUpRequestValidation } from '@/validations/input';
import { ZodError } from 'zod';

const signupMiddleware = (req, res, next) => {
  try {
    signUpRequestValidation(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(401).json({ message: error.message });
    }
  }
};

export default signupMiddleware;
