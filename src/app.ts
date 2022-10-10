import express from 'express';
import 'express-async-errors';
import authRoute from './routes/authRoute';
import errorMiddleware from './middlewares/errorMiddleware';
import userRoute from './routes/userRoute';

const app = express();
app.use(express.json());

app.use('/login', authRoute);
app.use('/users', userRoute);
app.use(errorMiddleware);

export default app;