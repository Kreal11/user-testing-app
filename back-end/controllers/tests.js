import { Test } from '../model/test.js';

export const listTests = async (req, res, next) => {
  const { _id } = req.user;

  const data = await Test.find({ userOwner: _id }).populate('_id', 'email name');

  console.log(data);

  res.json({ data });
};
