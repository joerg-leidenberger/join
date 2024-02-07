import express from 'express';
import {
  createTask,
  getTask,
  getAllTasks,
  updateTask,
} from '../controllers/task.controller';

const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks/:taskID', getTask);
router.get('/tasks', getAllTasks);
router.patch('/tasks/:taskId', updateTask);

export default router;
