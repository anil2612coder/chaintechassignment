import express from 'express';
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from '../controller/taskController.js';


const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', updateTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);


export default router;