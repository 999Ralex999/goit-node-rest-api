import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import contactsRouter from './routes/contactsRouter.js';
import { PORT } from './constants/envConstants.js';
import setupDatabase from './db/scripts/setupDatabase.js';
import authRouter from './routes/authRouter.js';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);
app.use('/auth', authRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

app.listen(PORT, async () => {
  await setupDatabase();

  console.log(`Server is running. Use our API on port: ${PORT}`);
});

