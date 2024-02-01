// import { HttpError } from '../helpers';

import { HttpError } from '../helpers/httpError.js';

export const validateBody = schema => {
  const func = (req, res, next) => {
    try {
      const { error } = schema.validate(req.body);
      if (error) {
        throw HttpError(400, error.message);
      }
      next();
    } catch (err) {
      next(err);
    }
  };
  return func;
};
