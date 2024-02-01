import { isValidObjectId } from 'mongoose';
import { HttpError } from '../helpers/httpError.js';

export const isValidMongoId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not valid ID `));
  }
  next();
};
