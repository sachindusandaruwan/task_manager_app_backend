import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db';
import userRouter from "./router/auth-router";
import taskRouter from "./router/TaskRouter";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());

//  Apply CORS Middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Routes
app.use('/user', userRouter);

app.use('/task', taskRouter);


app.get('/', (req, res) => {
    res.send('Hello, Node.js backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


