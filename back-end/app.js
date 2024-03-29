import express from 'express';
import session from 'express-session';
import logger from 'morgan';
import cors from 'cors';
import { authRouter } from './routes/api/auth.js';
import { testsRouter } from './routes/api/tests.js';
import { questionsRouter } from './routes/api/questions.js';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/auth/user', testsRouter);
app.use('/api/auth/user', questionsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server Error' } = err;
  res.status(status).json({ message });
});

export default app;
