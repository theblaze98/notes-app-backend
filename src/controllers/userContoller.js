import JWT from 'jsonwebtoken';
import User from '../models/User.js';
import { validationError } from '../utils/index.js';

export const signup = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const newUser = new User({
			username,
			email,
			password,
		});

		await newUser.save();

		res.status(201).json({ msg: 'USER_CREATED' });
	} catch (error) {
		if (error.message.includes('duplicate key')) {
			if (error.message.includes('username')) {
				const errorDescription = validationError(
					'DUPLICATE_KEY_USERNAME'
				);
				return res
					.status(errorDescription.statusCode)
					.json({ msg: errorDescription.message });
			}
			if (error.message.includes('email')) {
				const errorDescription = validationError('DUPLICATE_KEY_EMAIL');
				return res
					.status(errorDescription.statusCode)
					.json({ msg: errorDescription.message });
			}
		}

		const errorDescription = validationError(error.message);
		return res
			.status(errorDescription.statusCode)
			.json({ msg: errorDescription.message });
	}
};

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await User.findOne({
			$or: [{ email: username }, { username: username }],
		}).select('+password');

		if (!user) return res.status(404).json({ msg: 'USER_NOT_EXIST' });

		const passwordCompare = await user.comparePassword(password);

		if (!passwordCompare) {
			return res.status(401).json({ msg: 'INVALID_PASSWORD' });
		}

		const token = await user.getToken();

		const userData = user.toObject()
		delete userData.password

		return res.status(200).json({ token, userData });
	} catch (error) {
		res.status(500).json({ msg: `${error.message}` });
	}
};

export const isAutenticated = async (req, res) => {
	try {
		const { token } = req.body;

		const decoded = JWT.verify(token, process.env.JWT_SECRET);

		const user = await User.findById(decoded.id);

		if (!user) {
			return res.status(401).json({ msg: 'NOT_AUTHENTICATED' });
		}

		return res.status(200).json({ msg: 'USER_AUTHENTICATED' });
	} catch (error) {
		return res.status(500).json({ msg: `${error.message}` });
	}
};

export const getUserData = async (req, res) => {
	try {
		const {token} = req.body;
		const decoded = JWT.verify(token, process.env.JWT_SECRET);
		const user = await User.findById(decoded.id);

		if (!user) {
			return res.status(401).json({msg: 'NOT_AUTHENTICATED'});
		}
		return res.status(200).json({username: user.username, email: user.email});
	} catch (error) {
		return res.status(500).json({msg: `${error.message}`});
	}
}
