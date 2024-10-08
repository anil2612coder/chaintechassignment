import express from 'express';
import dotenv from 'dotenv';
import connectToMongodb from './config/db.js';
import taskRoutes from "./routes/taskRoutes.js"


dotenv.config();
connectToMongodb();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());


app.use('/api', taskRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});