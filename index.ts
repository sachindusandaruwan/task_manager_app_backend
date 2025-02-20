import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Node.js backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
