import { Test } from '../model/test.js';

export const listTests = async (req, res, next) => {
  const { _id, name } = req.user;

  const data = await Test.find({ userOwner: _id });

  res.json({
    data: data,
    name,
  });
};

export const getCompletedTests = async (req, res, next) => {
  const { id } = req.params;
  const { result } = req.body;

  const data = await Test.findByIdAndUpdate(
    id,
    {
      isEnabled: false,
      result: result,
    },
    { new: true }
  );

  res.json({ data });
};
