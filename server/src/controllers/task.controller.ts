import { Request, Response } from 'express';
import Task from '../models/task.model';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET as string;

async function createTask(req: Request, res: Response) {
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(400).send('Authorization header is missing');
    }

    const authToken = token.split(' ')[1];

    const decodedToken: any = jwt.verify(authToken, jwtSecret);

    if (!decodedToken || !decodedToken.userId) {
      return res.status(401).send('Invalid or missing user ID in token');
    }

    const userId = decodedToken.userId;

    const {
      title,
      description,
      dueDate,
      assignedTo,
      priority,
      category,
      subtasks,
      status,
    } = req.body;
    const newTask = await Task.create({
      userId,
      title,
      description,
      dueDate,
      priority,
      assignedTo,
      category,
      subtasks,
      status,
    });

    await User.findByIdAndUpdate(userId, {
      $push: { tasks: newTask._id },
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error during task creation');
  }
}

async function getTask(req: Request, res: Response) {
  const { taskId } = req.params;

  try {
    const task = await Task.findById(taskId);
    res.status(200).json(task);
  } catch (error) {
    res.status(404).send('Task not found');
  }
}

async function getAllTasks(req: Request, res: Response) {
  try {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(400).send('Authorization header is missing');
    }

    const authToken = token.split(' ')[1];

    const decodedToken: any = jwt.verify(authToken, jwtSecret);

    if (!decodedToken || !decodedToken.userId) {
      return res.status(401).send('Invalid or missing user ID in token');
    }

    const userId = decodedToken.userId;

    // Finde nur Tasks, die diesem User gehören
    const tasks = await Task.find({ userId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).send('No tasks found');
  }
}

async function updateTask(req: Request, res: Response) {
  const { taskId } = req.params;
  const { status } = req.body;

  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(400).send('Authorization header is missing');
    }

    const authToken = token.split(' ')[1];
    const decodedToken: any = jwt.verify(authToken, jwtSecret);

    if (!decodedToken || !decodedToken.userId) {
      return res.status(401).send('Invalid or missing user ID in token');
    }

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { status }, // Aktualisiere nur das Status-Feld
      { new: true } // Gibt das aktualisierte Dokument zurück
    );

    if (!updatedTask) {
      return res.status(404).send('Task not found');
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error during task update');
  }
}

export { createTask, getTask, getAllTasks, updateTask };
