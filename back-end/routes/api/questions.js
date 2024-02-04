import express from 'express';
import { listQuestions } from '../../controllers/questions.js';
import { getTestQuestions } from '../../middlewares/getTestQuestions.js';

export const questionsRouter = express.Router();

questionsRouter.get('/test/:id', listQuestions);
