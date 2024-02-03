import { User } from '../model/user.js';

export const authenticate = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Email or password is wrong' });
  }

  req.user = {
    _id: user._id,
    name: user.name,
    email: user.email,
    tests: user.tests,
  };

  next();
};
