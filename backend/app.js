import express from 'express';
import { fileURLToPath } from 'url';
import { connectDB } from './database/connectDb.js';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userAuth.js';
import path from 'path';

dotenv.config();




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

connectDB();


app.use('/api/v1', userRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
