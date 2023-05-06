import joi from 'joi';

const signUpRequestValidation = (input) => {
  return joi
    .object({
      email: joi.string().email().required(),
      username: joi.string().min(4).required(),
      password: joi.string().min(5).required()
    })
    .validate(input);
};
export default signUpRequestValidation;
