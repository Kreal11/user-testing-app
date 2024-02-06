import { User } from '../model/user.js';
import jwt from 'jsonwebtoken';
import { envsConfig } from '../configs/envsConfig.js';
import { HttpError } from '../helpers/httpError.js';

export const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer') {
    next(HttpError(401, 'Unauthorized, problem 1'));
  }

  try {
    const { id } = await jwt.verify(token, envsConfig.jwtSecret);
    const user = await User.findById(id);
    if (!token || !user.token || user.token !== token) {
      next(HttpError(401, 'Unauthorized problem 2'));
    }

    req.user = user;
  } catch (error) {
    next(HttpError(401, 'Unauthorized problem 3'));
  }

  next();
};
