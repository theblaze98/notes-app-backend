import { z } from 'zod';

const loginRequestValidation = (input) => {
  z.object({
    email: z.string().email(),
    password: z.string().minLength(5)
  }).parse(input);
};

export default loginRequestValidation;
