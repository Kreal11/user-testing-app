import express from 'express';
import { login } from '../../controllers/auth.js';
import { logout } from '../../controllers/auth.js';
import { validateBody } from '../../decorators/validateBody.js';
import { loginUser } from '../../validators/auth.js';

export const authRouter = express.Router();

authRouter.post('/login', validateBody(loginUser), login);

authRouter.get('/logout', logout);
