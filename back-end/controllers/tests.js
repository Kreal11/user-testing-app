import { Test } from '../model/test.js';

export const listTests = async (req, res, next) => {
  const { id } = req.params;

  // const { _id } = req.user;

  const data = await Test.find({ userOwner: id });

  //   .populate(
  //   'testOwner',
  //   'email name'
  // );

  console.log(data);

  res.json({ data });
};
