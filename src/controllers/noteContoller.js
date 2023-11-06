import JWT from 'jsonwebtoken';
import Note from '../models/Note.js';
import User from '../models/User.js';

export const addNote = async (req, res) => {
	try {
		const { token, title, description } = req.body;

		const { id } = JWT.verify(token, process.env.JWT_SECRET);

		if (id) {
			const newNote = new Note({ userID: id, title, description });
			await newNote.save();

			res.status(201).json({ msg: 'NOTE_CREATED' });
		}
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getNotes = async (req, res) => {
	try {
		const token = req.params.token;
		const { id } = JWT.verify(token, process.env.JWT_SECRET);

		const notes = await Note.find({ userID: id }).sort({
			updatedAt: 'desc',
		});

		res.status(200).json(notes);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        await Note.findByIdAndDelete(id);
        res.status(201).json({msg: 'NOTE_DELETE'});
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
