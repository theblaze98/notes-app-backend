import joi from 'joi';

class JoiError extends joi.ValidationError {
  statusCode = 400;
  details = {};

  constructor(error) {
    super();
    this.details = error;
  }
}
export default JoiError;
