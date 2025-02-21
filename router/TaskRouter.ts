import express from 'express';
import { Task } from '../model/Task';

const router = express.Router();

// Create a new task
router.post('/add',async (req, res) => {
    try {
        const {startDateTime,endDateTime, title, place, status,userId} = req.body;
        const newTask = new Task({startDateTime,endDateTime, title, place, status,userId});
        await newTask.save();
        res.status(201).json({message: "Task created successfully", task: newTask});
    }
    catch (error) {
        res.status(500).json({message: "Error creating task", error});
    }
});

//getAll task
router.get('/getall', async (req, res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({message: "Error fetching tasks", error});
    }
});

//get task
router.get('/get/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({message: "Error fetching task", error});
    }
});


//delete task
router.delete('/delete/:id', async (req, res) => {
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Task deleted successfully"});
    }catch (error) {
        res.status(500).json({message: "Error deleting task", error});
    }
});

//update task
router.put('/update/:id', async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({message: "Task updated successfully"});
    }catch (error) {
        res.status(500).json({message: "Error updating task", error});
    }
});

export default router;