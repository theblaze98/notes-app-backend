import joi from 'joi';
const loginRequestValidation = (input) => {
  return joi
    .object({
      email: joi.string().email(),
      password: joi.string().min(5)
    })
    .validate(input);
};

export default loginRequestValidation;
