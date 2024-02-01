import Joi from 'joi';

export const loginUser = Joi.object({
  email: Joi.string()
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required(),
  password: Joi.string()
    .pattern(/^[a-z\d]{8,16}$/i)
    .required(),
});
