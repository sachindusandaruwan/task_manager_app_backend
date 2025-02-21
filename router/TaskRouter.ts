import express from 'express';
import { Task } from '../model/Task';

const router = express.Router();

// Create a new task
router.post('/add',async (req, res) => {
    try {
        const {dateTime, title, place, status} = req.body;
        const newTask = new Task({dateTime, title, place, status});
        await newTask.save();
        res.status(201).json({message: "Task created successfully", task: newTask});
    }
    catch (error) {
        res.status(500).json({message: "Error creating task", error});
    }
});
export default router;