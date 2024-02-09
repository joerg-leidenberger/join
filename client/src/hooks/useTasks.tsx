import { useState, useEffect } from 'react';
import { TasksState } from '../types/TaskTypes';
import { fetchTasks, updateTask } from '../api/api';

const useTasks = () => {
  const [tasks, setTasks] = useState<TasksState>({
    toDo: [],
    progress: [],
    feedback: [],
    done: [],
  });

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      const tasksByStatus = fetchedTasks.reduce(
        (acc, task) => {
          acc[task.status] = [...(acc[task.status] || []), task];
          return acc;
        },
        { toDo: [], progress: [], feedback: [], done: [] } as TasksState
      );
      setTasks(tasksByStatus);
    };

    loadTasks();
  }, []);

  return { tasks, setTasks, updateTaskStatus: updateTask };
};

export default useTasks;
