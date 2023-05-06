import jwt from 'jsonwebtoken';

class TokenUtilities {
  sign(data, secret, options) {
    return jwt.sign(data, secret, options);
  }

  verify(data, secret) {
    return jwt.verify(data, secret);
  }
}

export default TokenUtilities;
