import { signUpRequestValidation } from '../../validations/input/index.js';
import JoiError from '../../errors/joi.error.js';

const signupMiddleware = (req, res, next) => {
  try {
    const { error } = signUpRequestValidation(req.body);
    if (error) {
      throw new JoiError(error.details);
    }
    next();
  } catch (error) {
    if (error instanceof JoiError) {
      return res.status(401).json({
        message: error.details[0].message,
        error_type: 'Validation',
        field: error.details[0].context.key
      });
    }

    return res.status(500).json({ message: 'An error have occured' });
  }
};

export default signupMiddleware;
