import { User } from '../model/user.js';
import { HttpError } from '../helpers/httpError.js';
import jsonwebtoken from 'jsonwebtoken';
import { envsConfig } from '../configs/envsConfig.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const token = await jsonwebtoken.sign({ id: user._id }, envsConfig.jwtSecret);
  console.log(token);
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    user: {
      name: user.name,
      email: user.email,
      _id: user._id,
      tests: user.tests,
    },
    token,
  });
};

export const logout = async (req, res) => {
  const { id } = req.user;

  await User.findByIdAndUpdate(id, { token: null });

  res.json({ message: 'Logout successful' });
};
