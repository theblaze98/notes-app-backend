import { z } from 'zod';

const createNoteValidator = (input) => {
  z.object({
    title: z.string().minLength(4),
    description: z.string().minLength(4)
  }).parse(input);
};

export default createNoteValidator;
