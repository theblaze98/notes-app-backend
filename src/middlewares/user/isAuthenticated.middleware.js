import { BadRequestError } from '../../errors';
import TokenUtilities from '../../utils/token_utilities';
import isValidID from '../../utils/isValidID';

const isAuthenticatedMiddleware = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new BadRequestError('The header authorization are required');
    }

    if (!authorizationHeader.startsWith('Bearer ')) {
      throw new BadRequestError('Invalid authroization header');
    }

    const userToken = authorizationHeader
      .slice(7, authorizationHeader.length)
      .trimStart();

    const token = new TokenUtilities();

    if (!token.verify(userToken, process.env.ACCESS_TOKEN_SECRET)) {
      throw new BadRequestError('Invalid token');
    }

    if (!isValidID(token.id)) {
      throw new BadRequestError('Token have been manipulated');
    }

    req.userID = token.id;

    next();
  } catch (error) {
    if (error instanceof BadRequestError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
  }
};

export default isAuthenticatedMiddleware;
