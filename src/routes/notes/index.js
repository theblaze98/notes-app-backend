import { Router } from 'express';
import {
  createNoteController,
  deleteNoteController,
  getNoteController,
  getNotesController
} from '../../controllers/notes/index.js';
import createNoteMiddleware from '../../middlewares/note/create_note.middleware.js';
import deleteNoteMiddleware from '../../middlewares/note/delete_note.middleware.js';
import { isAuthenticatedMiddleware } from '../../middlewares/user/index.js';

const router = Router();

router.post(
  '/new',
  [isAuthenticatedMiddleware, createNoteMiddleware],
  createNoteController
);

router.delete('/:id', [deleteNoteMiddleware], deleteNoteController);

router.get('/', [isAuthenticatedMiddleware], getNotesController);

router.get('/:id', [isAuthenticatedMiddleware], getNoteController);

export default router;
