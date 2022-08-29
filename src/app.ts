import express from 'express';
import 'express-async-errors';
import authRouter from './router/authRouter';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();
app.use(express.json());

app.use('/login', authRouter);
app.use(errorMiddleware);

export default app;