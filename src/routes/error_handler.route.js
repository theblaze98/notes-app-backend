import {
  BadRequestError,
  JoiError,
  UnauthorizedError
} from '../errors/index.js';

const errorRouteHandler = (err, _req, res, _next) => {
  if (err instanceof JoiError) {
    return res.status(err.statusCode).json({ message: err.details });
  }

  if (err instanceof BadRequestError || err instanceof UnauthorizedError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.log(err);

  return res.status(500).json({ message: 'An error have been occured' });
};

export default errorRouteHandler;
