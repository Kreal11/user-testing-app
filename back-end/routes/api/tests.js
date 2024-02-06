import express from 'express';
import { getCompletedTests, listTests } from '../../controllers/tests.js';
import { authenticate } from '../../middlewares/authenticate.js';

export const testsRouter = express.Router();

testsRouter.use(express.json());

testsRouter.get('/tests/:id', listTests);
testsRouter.patch('/tests/updated/:id', getCompletedTests);
