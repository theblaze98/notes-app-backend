import JWT from 'jsonwebtoken';
import User from '../models/User.js';

export const signup = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const user = await User.findOne({ $or: [{ username }, { email }] });

		if (user) {
			if (user.username === username) {
				res.status(401).json({ msg: 'USERNAME_ALREADY_EXIST' });
				return;
			}
			res.status(401).json({ msg: 'EMAIL_ALREADY_EXIST' });
			return;
		}

		const newUser = new User({
			username,
			email,
			password,
		});

		await newUser.save();

		res.status(201).json({ msg: 'USER_CREATED' });
	} catch (error) {
		res.status(500).json({ msg: `${error.message}` });
	}
};

export const login = async (req, res) => {
	const { userID, password } = req.body;

	const user = User.findOne({$or: [{email: userID}, {username: userID}]}).select('+password');

	if (!user) {
		res.status(400).json({msg: "USER_NOT_EXIST"});
		return;
	}

	const passwordCompare = await user.comparePassword(password);

	console.log(passwordCompare);

	res.json({msg: "h"});
}
