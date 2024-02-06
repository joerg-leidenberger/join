import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function connect() {
  const dbUri = process.env.DB_URI as string;

  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.log('Databse', error);
      process.exit(1);
    });
}

export default connect;
