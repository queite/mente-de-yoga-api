import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/errorMiddleware';
import authRoute from './routes/authRoute';
import userRoute from './routes/userRoute';

const app = express();
app.use(express.json());

// const allowedOrigins = ['http://localhost:3000'];

// const options: cors.CorsOptions = {
//   origin: allowedOrigins,
// };
app.use(cors());

app.use('/login', authRoute);
app.use('/users', userRoute);
app.use(errorMiddleware);

export default app;