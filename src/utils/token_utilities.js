import jwt from 'jsonwebtoken';

class TokenUtilities {
  #secret = process.env.JWT_SECRET;

  sign(data, options) {
    return jwt.sign(data, this.#secret, options);
  }

  verify(data) {
    return jwt.verify(data, this.#secret);
  }
}

export default TokenUtilities;
