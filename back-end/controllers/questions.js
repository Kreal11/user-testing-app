import { Question } from '../model/question.js';

export const listQuestions = async (req, res, next) => {
  const { id } = req.params;

  const data = await Question.find({ testOwner: id }).populate(
    '_id',
    'title category'
  );

  console.log(data);

  res.json({ data });
};
