import JWT from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import User from '../models/User.js';

const { hash, compare } = bcryptjs;

export const signup = async (req, res) => {
	const { username, email, password } = req.body;

	const user = User.findOne({ email });

	if (!user) {
		console.log(user);

		res.status(201).json({ email });
	} else {
		res.status(201).json({ email });
	}
};
