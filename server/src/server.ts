import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connect from './db/connect';
import userRoutes from './routes/user.routes';
import authenticateToken from './middlewares/authMiddleware';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  connect();
});
