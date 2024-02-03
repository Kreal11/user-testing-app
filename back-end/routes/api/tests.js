import express from 'express';
import { listTests } from '../../controllers/tests.js';
import { authenticate } from '../../middlewares/authenticate.js';

export const testsRouter = express.Router();

testsRouter.get('/tests/:id', listTests);
