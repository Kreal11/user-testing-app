import { Question } from '../model/question.js';
import { Test } from '../model/test.js';

export const getTestQuestions = async (req, res, next) => {
  const { _id } = req.body;
  const test = await Test.findById(_id);
  console.log(_id);

  if (!test) {
    return res.status(401).json({ message: 'Email or password is wrong' });
  }

  req.test = {
    _id: test._id,
    // name: user.name,
    // email: user.email,
    // tests: user.tests,
  };

  next();
};
