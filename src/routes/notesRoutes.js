import { Router } from 'express';
import { addNote, getNotes, deleteNote } from '../controllers/noteContoller.js';
const router = Router();

router.get('/get-notes/:token', getNotes);
router.post('/add', addNote);
router.delete('/delete/:id', deleteNote);

export default router;
