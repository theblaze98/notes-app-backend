import { z } from 'zod';

const signUpRequestValidation = (input) => {
  z.object({
    email: z.string().email(),
    username: z.string().minLength(4),
    password: z.string().minLength(5)
  }).parse(input);
};

export default signUpRequestValidation;
