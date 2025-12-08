import express, { Request, Response } from 'express';
import cors from 'cors';
import patientsRouter from './routes/patients';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/patients', patientsRouter);

// Test route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Health Dashboard API is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});