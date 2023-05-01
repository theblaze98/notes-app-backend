import { ZodError } from 'zod';
import { BadRequestError, UnauthorizedError } from '../errors/index.js';

const errorRouteHandler = (err, _req, res, _next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.message });
  }

  if (err instanceof BadRequestError || err instanceof UnauthorizedError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: 'An error have been occured' });
};

export default errorRouteHandler;
