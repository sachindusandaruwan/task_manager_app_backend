import express from 'express';
import { Task } from '../model/Task';
import {protector} from "../middleware/AuthMiddleware";
import {deletetask, getAllTasks, getTask, saveTask, updateTask} from "../controller/task-controller";

const router = express.Router();

// Create a new task
router.post('/add',protector,saveTask );

//getAll task
router.get('/getall',protector,getAllTasks);

//get task
router.get('/get/:id', protector,getTask);


//delete task
router.delete('/delete/:id',protector,deletetask);

//update task
router.put('/update/:id',protector,updateTask);

export default router;