import { Router } from 'express';
import { createNotesController } from '../../controllers/notes/index.js';
import createNoteMiddleware from '../../middlewares/note/create_note.middleware.js';
import { isAuthenticatedMiddleware } from '../../middlewares/user/index.js';

const router = Router();

router.post(
  '/new',
  [isAuthenticatedMiddleware, createNoteMiddleware],
  createNotesController
);

export default router;
