import { User } from '../model/user.js';
import { HttpError } from '../helpers/httpError.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password }).select(
    'name email _id tests'
  );

  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }

  // const { _id } = req.user;
  // const userInfo = await User.aggregate([
  //   { $match: { _id } },
  //   {
  //     $lookup: {
  //       from: 'tests',
  //       localField: '_id',
  //       foreignField: 'owner',
  //       as: 'tests',
  //     },
  //   },
  // ]);
  // res.json(userInfo[0]);

  res.json({
    user: {
      name: user.name,
      email: user.email,
      _id: user._id,
      tests: user.tests,
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
