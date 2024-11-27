import express from 'express';
import connectDB from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';
import {} from 'dotenv/config'

const app = express();
connectDB();

app.use(express.json());
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
