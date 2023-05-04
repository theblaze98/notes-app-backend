import { Router } from 'express';
import {
  createNoteController,
  deleteNoteController,
  getNoteController,
  getNotesController
} from '../../../controllers/notes/index.js';
import createNoteMiddleware from '../../../middlewares/note/create_note.middleware.js';
import deleteNoteMiddleware from '../../../middlewares/note/delete_note.middleware.js';
import { isAuthenticatedMiddleware } from '../../../middlewares/user/index.js';
import controllerErrorBoundaries from '../../../controllers/controller_error_boundaries_handler.js';

const router = Router();

router.post(
  '/new',
  [isAuthenticatedMiddleware, createNoteMiddleware],
  createNoteController
);

router.delete(
  '/:id',
  [isAuthenticatedMiddleware, deleteNoteMiddleware],
  controllerErrorBoundaries(deleteNoteController)
);

router.get(
  '/',
  [isAuthenticatedMiddleware],
  controllerErrorBoundaries(getNotesController)
);

router.get(
  '/:id',
  [isAuthenticatedMiddleware],
  controllerErrorBoundaries(getNoteController)
);

export default router;
