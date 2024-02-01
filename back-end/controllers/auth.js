import { User } from '../model/user.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const isExist = await User.findOne({ email, password });

  if (!isExist) {
    throw httpError(401, `Email or password is wrong`);
  }

  res.json({
    user: {
      name: isExist.name,
      email: isExist.email,
      _id: isExist._id,
    },
  });
};

export const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    res.json({ message: 'Logout successful' });
  });
};
