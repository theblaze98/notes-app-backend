import joi from 'joi';

const createNoteValidator = (input) => {
  return joi
    .object({
      title: joi.string().min(4),
      description: joi.string().min(4)
    })
    .validate(input);
};

export default createNoteValidator;
